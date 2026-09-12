import assert from 'node:assert/strict';
import {test} from 'node:test';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {calendarDay, currentDay, computeCalculator, numericValue, readLog, changeLog, validateLogValues, measurementValue} from '../public/assets/care-tools-core.js';
import {articles} from '../src/content-hub.mjs';
import {languages} from '../src/pages.mjs';

const today = calendarDay('2026-09-12');
const iso = day => new Date(day * 86400000).toISOString().slice(0, 10);
function memory(initial = null) {
  let raw = initial;
  return {getItem: () => raw, setItem: (_key, value) => {raw = value;}};
}
const entry = id => ({id, date: '2026-09-01', weight: '5.4', weightUnit: 'kg', note: '', createdAt: '2026-09-01T12:00:00Z'});

test('calendar dates reject normalization, malformed input and invalid leap days', () => {
  for (const value of ['', '2026-02-30', '2025-02-29', '2026-13-01', '2026-00-01', '2026-09-00', '2026-9-1', '2026-09-01T12:00:00Z']) assert.equal(calendarDay(value), undefined, value);
  assert.equal(iso(calendarDay('2024-02-29')), '2024-02-29');
  assert.equal(calendarDay('2026-03-09') - calendarDay('2026-03-07'), 2);
  assert.equal(currentDay(new Date(2026, 8, 12, 23, 59)), today);
});

test('numeric values never turn blank inputs into zero; localized decimal input works', () => {
  for (const value of ['', ' ', '-1', '1e6', 'Infinity', '5,2.1']) assert.equal(numericValue(value), undefined);
  assert.equal(numericValue('۵٫۴'), 5.4);
  assert.equal(numericValue('٥,٤'), 5.4);
});

test('pregnancy age uses completed weeks: the due date is exactly 40 weeks and 0 days', () => {
  const result = computeCalculator('pregnancyWeek', {dueDate: iso(today)}, today);
  assert.deepEqual(result.rows[1], {label: 'pregnancyAge', weeks: 40, days: 0});
  assert.deepEqual(computeCalculator('pregnancyWeek', {dueDate: iso(today + 280)}, today).rows[1], {label: 'pregnancyAge', weeks: 0, days: 0});
  assert.deepEqual(computeCalculator('pregnancyWeek', {dueDate: iso(today + 280 - 13)}, today).rows[1], {label: 'pregnancyAge', weeks: 1, days: 6});
  assert.equal(computeCalculator('pregnancyWeek', {dueDate: iso(today - 14)}, today).rows[1].weeks, 42);
});

test('dates outside the estimate window produce an error rather than a clamped result', () => {
  for (const dueDate of [iso(today + 281), iso(today - 15)]) {
    const result = computeCalculator('pregnancyWeek', {dueDate}, today);
    assert.ok(result.errors.dueDate); assert.deepEqual(result.rows, []);
  }
  assert.equal(computeCalculator('dueDate', {lastPeriod: iso(today + 1), cycleLength: '28'}, today).errors.lastPeriod, 'pastDate');
});

test('due-date and week tools agree for every supported cycle length', () => {
  for (let cycle = 20; cycle <= 45; cycle++) {
    const due = computeCalculator('dueDate', {lastPeriod: iso(today - 150), cycleLength: String(cycle)}, today);
    assert.equal(due.rows[0].date, today - 150 + 280 + cycle - 28);
    const lookup = computeCalculator('pregnancyWeek', {dueDate: iso(due.rows[0].date)}, today);
    assert.deepEqual(due.rows[1], lookup.rows[1]);
    assert.equal(due.rows[1].weeks * 7 + due.rows[1].days, 150 - cycle + 28);
  }
});

test('cycle and luteal validation rejects blank, zero, fractions and out-of-range inputs', () => {
  for (const cycleLength of ['', '0', '19', '46', '28.5']) {
    const result = computeCalculator('ovulation', {lastPeriod: '2026-09-01', cycleLength, lutealLength: '14'}, today);
    assert.equal(result.errors.cycleLength, 'cycleRange'); assert.equal(result.rows.length, 0);
  }
  for (const lutealLength of ['', '0', '9', '19', '14.5']) assert.equal(computeCalculator('ovulation', {lastPeriod:'2026-09-01', cycleLength:'28', lutealLength}, today).errors.lutealLength, 'lutealRange');
  const result = computeCalculator('ovulation', {lastPeriod:'2026-09-01', cycleLength:'28', lutealLength:'14'}, today);
  assert.equal(iso(result.rows[0].date), '2026-09-15');
  assert.equal(iso(result.rows[2].date), '2026-09-29');
});

test('legacy records are read without rewriting or guessing units', () => {
  const raw = JSON.stringify([{date:'2026-08-01',weight:'12',note:'original',extra:'keep'}]);
  const storage = memory(raw), state = readLog(storage,'log');
  assert.equal(storage.getItem('log'), raw);
  assert.equal(state.log.entries[0].weightUnit, undefined);
  assert.equal(measurementValue(state.log.entries[0],'weight'), undefined);
  const next = changeLog(storage,'log',state.raw,{type:'add',entry:entry('new')});
  assert.equal(next.log.entries.length,2);
  assert.equal(next.log.entries[1].weight,'12');
  assert.equal(next.log.entries[1].extra,'keep');
  assert.equal(next.log.entries[1].weightUnit,undefined);
});

test('adding the 51st and 151st record never discards existing records', () => {
  const storage=memory(JSON.stringify(Array.from({length:150},(_,i)=>entry(String(i)))));
  const state=readLog(storage,'log');
  const next=changeLog(storage,'log',state.raw,{type:'add',entry:entry('151')});
  assert.equal(next.log.entries.length,151);
  for(let i=0;i<150;i++) assert.ok(next.log.entries.some(e=>e.id===String(i)));
  assert.equal(readLog(storage,'log').log.entries.length,151);
});

test('failed writes preserve the previous raw record and explicitly fail', () => {
  const raw=JSON.stringify([entry('first')]);
  const storage={getItem:()=>raw,setItem:()=>{throw new Error('QuotaExceeded');}};
  const result=changeLog(storage,'log',raw,{type:'add',entry:entry('second')});
  assert.equal(result.ok,false); assert.equal(result.error,'writeFailed'); assert.equal(storage.getItem(),raw);
});

test('corrupt, unsupported and inaccessible storage is not overwritten', () => {
  for(const raw of ['{broken','{}','null',JSON.stringify([null]),JSON.stringify({version:3,entries:[],removed:[]})]) {
    const storage=memory(raw), state=readLog(storage,'log');
    assert.equal(state.ok,false); assert.equal(state.raw,raw);
    assert.equal(changeLog(storage,'log',raw,{type:'add',entry:entry('new')}).ok,false);
    assert.equal(storage.getItem(),raw);
  }
  assert.equal(readLog({getItem:()=>{throw new Error('SecurityError');}},'log').error,'readFailed');
});

test('another tab cannot be overwritten with an out-of-date log', () => {
  const storage=memory(); const a=readLog(storage,'log'),b=readLog(storage,'log');
  assert.equal(changeLog(storage,'log',a.raw,{type:'add',entry:entry('A')}).ok,true);
  assert.equal(changeLog(storage,'log',b.raw,{type:'add',entry:entry('B')}).error,'conflict');
  assert.deepEqual(readLog(storage,'log').log.entries.map(e=>e.id),['A']);
});

test('edit, remove, reload and undo preserve values and identity', () => {
  const storage=memory(JSON.stringify([entry('one')])); let state=readLog(storage,'log');
  state=changeLog(storage,'log',state.raw,{type:'edit',id:'one',values:{weight:'6.2',note:'new note'}});
  assert.equal(state.log.entries[0].createdAt,'2026-09-01T12:00:00Z');
  state=changeLog(storage,'log',state.raw,{type:'remove',id:'one'});
  assert.equal(state.log.entries.length,0); assert.equal(state.log.removed.length,1);
  state=readLog(storage,'log');
  state=changeLog(storage,'log',state.raw,{type:'undo'});
  assert.equal(state.log.entries[0].weight,'6.2'); assert.equal(state.log.entries[0].note,'new note');
  assert.equal(state.log.removed.length,0);
});

test('growth requires a measurement and its unit but unchanged legacy unknown units remain unknown', () => {
  assert.equal(validateLogValues({date:'2026-09-01'},true,undefined,today).weight,'measurementRequired');
  assert.equal(validateLogValues({date:'2026-09-01',weight:'-3',weightUnit:'kg'},true,undefined,today).weight,'positiveNumber');
  assert.equal(validateLogValues({date:'2026-09-01',weight:'3',weightUnit:''},true,undefined,today).weightUnit,'chooseUnit');
  const original={date:'2026-09-01',weight:'12'};
  assert.deepEqual(validateLogValues({...original,weightUnit:'',note:'edited'},true,original,today),{});
  assert.equal(validateLogValues({...original,weight:'13',weightUnit:''},true,original,today).weightUnit,'chooseUnit');
  assert.equal(validateLogValues({date:iso(today+1),weight:'5',weightUnit:'kg'},true,undefined,today).date,'pastDate');
  assert.deepEqual(validateLogValues({date:iso(today+10),symptom:'Appointment'},false,undefined,today),{});
});

test('trend conversion accepts only explicit compatible units', () => {
  assert.equal(measurementValue({weight:'10',weightUnit:'lb'},'weight'),4.535923700000001);
  assert.equal(measurementValue({length:'20',lengthUnit:'in'},'length'),50.8);
  assert.equal(measurementValue({weight:'10'},'weight'),undefined);
  assert.equal(measurementValue({weight:'10',weightUnit:'cm'},'weight'),undefined);
});

for(const {code} of languages) test(`${code}: calculator and planner pages have complete localized tool configuration`,()=>{
  for(const slug of ['tools/ovulation-calculator','tools/due-date-calculator','tools/pregnancy-week-lookup','tools/growth-log']) {
    const page=articles.find(a=>a.slug===slug).i18n[code]; assert.ok(page.tool.ui);
    for(const [key,value] of Object.entries(page.tool.ui)) assert.equal(typeof value,'string',`${code}/${slug}/${key}`);
    if(code!=='en') assert.notEqual(page.tool.ui.writeFailed,articles.find(a=>a.slug===slug).i18n.en.tool.ui.writeFailed);
  }
  for(const slug of ['tools/solids-planner','tools/milestone-tracker','tools/toddler-activity-picker']) {
    const config=articles.find(a=>a.slug===slug).i18n[code].tool;
    assert.deepEqual(Object.keys(config.suggestions),config.fields[0].options.map(o=>o.value));
    for(const text of Object.values(config.suggestions)) assert.ok(text.length>35);
    if(code!=='en') assert.notEqual(config.suggestions['0-3'],articles.find(a=>a.slug===slug).i18n.en.tool.suggestions['0-3']);
  }
});

test('built module imports use hashes of emitted dependency bytes', async()=>{
  for(const [entryFile,dependency] of [['care-tools.js','care-tools-pilot.js'],['care-tools-pilot.js','care-tools-core.js']]) {
    const entrySource=await readFile(new URL(`../dist/assets/${entryFile}`,import.meta.url),'utf8');
    const bytes=await readFile(new URL(`../dist/assets/${dependency}`,import.meta.url));
    const hash=createHash('sha256').update(bytes).digest('hex').slice(0,16);
    assert.ok(entrySource.includes(`/assets/${dependency}?v=${hash}`),entryFile);
    assert.ok(!entrySource.includes(`from './${dependency}'`));
  }
});
