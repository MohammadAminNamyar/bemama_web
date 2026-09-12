import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {calendarDay,computeCalculator} from '../public/assets/care-tools-core.js';
import {growthSeries,referenceSeries,calendarMonths} from '../public/assets/care-tools-visuals.js';
import {whoWeight} from '../public/assets/who-weight-reference.js';
import {languages} from '../src/pages.mjs';
import {articlesInCategory} from '../src/content-hub.mjs';
import {withdrawnToolIds} from '../src/tool-quality-copy.mjs';
const today=calendarDay('2026-09-12');
test('fertile window is the ASRM six-day interval ending on estimated ovulation',()=>{
  const result=computeCalculator('ovulation',{lastPeriod:'2026-09-02',cycleLength:'30',lutealLength:'16'},today);
  assert.equal(result.rows[0].date,calendarDay('2026-09-16'));
  assert.deepEqual(result.rows[1],{label:'fertileWindow',from:calendarDay('2026-09-11'),to:calendarDay('2026-09-16')});
});

test('growth graph uses dates, selected range and explicitly compatible units',()=>{
  const entries=[{date:'2026-09-12',weight:'10',weightUnit:'lb'},{date:'2026-01-01',weight:'3',weightUnit:'kg'},{date:'2026-09-01',weight:'5'},{date:'2026-09-13',weight:'5',weightUnit:'kg'}];
  const recent=growthSeries(entries,'weight',{days:90,today});
  assert.equal(recent.length,1);assert.ok(Math.abs(recent[0].value-4.5359237)<1e-9);
  assert.equal(growthSeries(entries,'weight',{days:90,today,imperial:true})[0].value,10);
  assert.equal(growthSeries(entries,'weight',{today}).length,2);
});

test('WHO references never infer a birth date or include out-of-range measurements',()=>{
  const entries=[{date:'2026-06-01',weight:'4',weightUnit:'kg'},{date:'2026-05-31',weight:'3',weightUnit:'kg'},{date:'2026-09-01',weight:'6'},{date:'2026-09-02',weight:'6',weightUnit:'kg'}];
  assert.equal(referenceSeries(entries,'2026-06-01',today).length,2);
  assert.equal(referenceSeries(entries,'2026-06-01',today)[0].age,0);
  assert.deepEqual(referenceSeries(entries,'',today),[]);
  assert.deepEqual(referenceSeries(entries,'2026-10-01',today),[]);
  assert.deepEqual(referenceSeries(entries,'2023-01-01',today),[]);
});

test('WHO tables contain the 25 published monthly rows and ordered percentiles',async()=>{
  const manifest=JSON.parse(await readFile(new URL('../docs/tool-quality-revision-2026-09-12/data/manifest.json',import.meta.url)));
  for(const sex of ['girls','boys']) {
    assert.equal(whoWeight[sex].length,25);
    whoWeight[sex].forEach((row,index)=>{assert.equal(row[0],index);assert.equal(row.length,6);for(let i=2;i<6;i++)assert.ok(row[i]>row[i-1]);});
    const source=await readFile(new URL(`../docs/tool-quality-revision-2026-09-12/data/who-weight-${sex}.xlsx`,import.meta.url));
    assert.equal(createHash('sha256').update(source).digest('hex'),manifest[sex].sha256);
  }
  assert.equal(whoWeight.boys[0][3],3.3);assert.equal(whoWeight.girls[0][3],3.2);
  assert.equal(whoWeight.boys[12][3],9.6);assert.equal(whoWeight.girls[12][3],8.9);
  assert.equal(whoWeight.boys[24][3],12.2);assert.equal(whoWeight.girls[24][3],11.5);
});

test('fertility calendar spans leap-month and year boundaries',()=>{
  assert.deepEqual(calendarMonths(calendarDay('2028-02-25'),calendarDay('2028-03-25')).map(m=>m.days),[29,31]);
  assert.deepEqual(calendarMonths(calendarDay('2026-12-20'),calendarDay('2027-01-20')).map(m=>m.start),[calendarDay('2026-12-01'),calendarDay('2027-01-01')]);
});

for(const {code} of languages)test(`${code}: nine distinct tools are listed and retired planners recover to guides`,async()=>{
  const prefix=code==='en'?'':`${code}/`,catalog=await readFile(new URL(`../dist/${prefix}tools/index.html`,import.meta.url),'utf8');
  assert.equal((catalog.match(/class="tool-catalog-card"/g)||[]).length,9);
  for(const article of articlesInCategory('tools')) assert.ok(catalog.includes(article.i18n[code].description));
  const sitemap=await readFile(new URL(`../dist/sitemap-${code}.xml`,import.meta.url),'utf8');
  for(const id of withdrawnToolIds) {
    assert.ok(!catalog.includes(`/tools/${id}/`));assert.ok(!sitemap.includes(`/tools/${id}/`));
    const retired=await readFile(new URL(`../dist/${prefix}tools/${id}/index.html`,import.meta.url),'utf8');
    assert.ok(retired.includes('content="noindex, follow"'));assert.ok(!retired.includes('data-care-tool'));
    assert.ok(retired.includes(`href="/${prefix}baby-and-child/`));assert.ok(!retired.includes('"@type":"WebApplication"'));
  }
});

test('chart modules and WHO data are versioned using their emitted content',async()=>{
  for(const [entry,dependency] of [['care-tools-pilot.js','care-tools-visuals.js'],['care-tools-visuals.js','who-weight-reference.js'],['care-tools-visuals.js','care-tools-core.js']]) {
    const script=await readFile(new URL(`../dist/assets/${entry}`,import.meta.url),'utf8'),bytes=await readFile(new URL(`../dist/assets/${dependency}`,import.meta.url));
    assert.ok(script.includes(`/assets/${dependency}?v=${createHash('sha256').update(bytes).digest('hex').slice(0,16)}`));
  }
});
