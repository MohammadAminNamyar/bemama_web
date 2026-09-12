import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {seedBoard,readBoard,commitBoard,parseBoard,checklistStats,filterNames,nameKey,calendarFile} from '../public/assets/care-organizers-core.js';
import {nameData,nameSource} from '../public/assets/baby-name-data.js';
import {articles} from '../src/content-hub.mjs';
import {languages} from '../src/pages.mjs';
import {formatGestationalAge} from '../public/assets/care-tools-core.js';
test('gestational age uses locale-specific singular and plural units',()=>{
 assert.equal(formatGestationalAge(24,1,'en'),'24 weeks and 1 day');
 assert.equal(formatGestationalAge(1,0,'en'),'1 week and 0 days');
 assert.equal(formatGestationalAge(1,1,'es'),'1 semana y 1 día');
});
const hospital=articles.find(a=>a.toolId==='hospital-bag-checklist').i18n.en.tool;
const template=hospital.checklist.tasks,key='new',old='old';
const memory=initial=>{const map=new Map(Object.entries(initial||{}));return {getItem:k=>map.get(k)??null,setItem:(k,v)=>map.set(k,v)};};
test('legacy checklist migration retains the exact checked task across categories',()=>{
 const data=seedBoard([0,2],'checklist',hospital.id,template);
 assert.deepEqual(data.entries.filter(e=>e.state==='done').map(e=>e.id),['base-0','base-2']);
 assert.equal(data.entries.length,24);assert.equal(checklistStats(data.entries).todo,22);
});
test('checklist progress excludes skipped tasks and handles all-skipped lists',()=>{
 assert.deepEqual(checklistStats([{state:'done'},{state:'todo'},{state:'skipped'}]),{active:2,done:1,todo:1,skipped:1,percent:50});
 assert.equal(checklistStats([{state:'skipped'}]).percent,0);
});
test('first save preserves original records and undo survives reload',()=>{
 const storage=memory({old:'[0,2]'}),state=readBoard(storage,key,old,'checklist',hospital.id,template);
 assert.equal(storage.getItem(key),null);
 const changed=state.data.entries.map(e=>e.id==='base-1'?{...e,state:'skipped',note:'Already arranged'}:e);
 const saved=commitBoard(storage,key,old,state,changed,template);assert.ok(saved.ok);assert.equal(storage.getItem(old),'[0,2]');
 const reloaded=readBoard(storage,key,old,'checklist',hospital.id,template);
 const undone=commitBoard(storage,key,old,reloaded,null,template,true);assert.ok(undone.ok);assert.deepEqual(undone.data.entries,state.data.entries);
});
test('stale writes, corrupt storage, oversized notes and duplicate IDs cannot overwrite data',()=>{
 const storage=memory({old:'[]'}),state=readBoard(storage,key,old,'checklist',hospital.id,template);
 storage.setItem(old,'[1]');assert.equal(commitBoard(storage,key,old,state,state.data.entries,template).error,'conflict');assert.equal(storage.getItem(key),null);
 storage.setItem(key,'{broken');assert.equal(readBoard(storage,key,old,'checklist',hospital.id,template).ok,false);
 const data=seedBoard([],'checklist',hospital.id,template);
 assert.throws(()=>parseBoard({...data,entries:[...data.entries,data.entries[0]]},'checklist',hospital.id,template));
 assert.throws(()=>parseBoard({...data,entries:data.entries.slice(1)},'checklist',hospital.id,template));
 assert.throws(()=>parseBoard({...data,entries:data.entries.map(e=>({...e,note:'x'.repeat(4001)}))},'checklist',hospital.id,template));
});
test('quota failure does not announce success or change the prior state',()=>{
 const storage=memory({old:'[]'}),state=readBoard(storage,key,old,'checklist',hospital.id,template);storage.setItem=()=>{throw Error('quota');};
 assert.equal(commitBoard(storage,key,old,state,state.data.entries,template).error,'writeFailed');assert.equal(storage.getItem(key),null);
});
test('backup cannot cross tools; importing a valid backup is undoable',()=>{
 const storage=memory({old:'[]'}),state=readBoard(storage,key,old,'checklist',hospital.id,template),backup={...state.data,entries:state.data.entries.map(e=>({...e,state:'done'}))};
 assert.throws(()=>parseBoard(backup,'checklist','registry-checklist',template));
 const saved=commitBoard(storage,key,old,state,parseBoard(backup,'checklist',hospital.id,template).entries,template);
 assert.equal(checklistStats(saved.data.entries).percent,100);
 const restored=commitBoard(storage,key,old,saved,null,template,true);assert.equal(checklistStats(restored.data.entries).percent,0);
});
test('name migration preserves previous notes without claiming verified meanings',()=>{
 const data=seedBoard([{name:'آوا',note:'Family choice'},{title:'Ari',meaning:'Old unverified claim'}],'names','baby-name-shortlist');
 assert.equal(data.entries[0].name,'آوا');assert.equal(data.entries[1].note,'Old unverified claim');assert.ok(data.entries.every(e=>e.legacy));assert.equal(nameKey('  AVA '),'ava');
});
test('SSA records reproduce every row of the retained source and published anchors',async()=>{
 const bytes=await readFile(new URL('../docs/tools-completion-2026-09-12/data/ssa-2020-2025.json',import.meta.url)),source=JSON.parse(bytes);
 assert.equal(nameData.length,400);assert.equal(nameSource.period,'2020–2025');
 assert.equal(nameData.find(n=>n.name==='Liam').count,124842);assert.equal(nameData.find(n=>n.name==='Olivia').count,95853);
 source.rows.forEach(([rank,boy,boys,girl,girls])=>{assert.deepEqual(nameData.find(n=>n.rank===rank&&n.sex==='M'),{name:boy,sex:'M',rank,count:boys});assert.deepEqual(nameData.find(n=>n.rank===rank&&n.sex==='F'),{name:girl,sex:'F',rank,count:girls});});
 const emitted=await readFile(new URL('../public/assets/baby-name-data.js',import.meta.url),'utf8');assert.ok(emitted.includes(createHash('sha256').update(bytes).digest('hex')));
});
test('name filters combine query, category, length and order without arbitrary result loss',()=>{
 assert.equal(filterNames(nameData,{sex:'F'}).length,200);
 assert.equal(filterNames(nameData,{query:'liam',sex:'M'}).find(n=>n.name==='Liam').rank,1);
 assert.ok(filterNames(nameData,{sex:'M',length:'short'}).every(n=>n.name.length<=4&&n.sex==='M'));
 assert.deepEqual(filterNames(nameData,{query:'unlisted-test-name'}),[]);
 const sorted=filterNames(nameData,{sort:'alpha'});assert.equal(sorted[0].name,'Aaliyah');
});
test('calendar export handles leap days, escaping, invalid dates and UTF-8 line folding',()=>{
 const calendar=calendarFile([{id:'1',date:'2028-02-29',symptom:'Check-up, plan; questions',note:'Line one\nسلام '.repeat(35)},{id:'bad',date:'2028-02-30',symptom:'Ignore'}],new Date('2026-09-12T10:00:00Z'));
 assert.ok(calendar.includes('DTSTART;VALUE=DATE:20280229\r\nDTEND;VALUE=DATE:20280301'));
 assert.ok(calendar.includes('SUMMARY:Check-up\\, plan\\; questions'));assert.equal((calendar.match(/BEGIN:VEVENT/g)||[]).length,1);
 assert.ok(calendar.split('\r\n').every(line=>Buffer.byteLength(line,'utf8')<=75));
});
for(const {code} of languages)test(`${code}: expanded organizers, sourced names and combined dating route`,async()=>{
 const prefix=code==='en'?'':code+'/';
 for(const id of ['hospital-bag-checklist','registry-checklist','preconception-checklist','newborn-care-checklist']) {
  const config=articles.find(a=>a.toolId===id).i18n[code].tool;assert.ok(config.checklist.tasks.length>=16);assert.equal(new Set(config.checklist.tasks.map(t=>t.id)).size,config.checklist.tasks.length);assert.ok(config.checklist.tasks.every(t=>t.title&&config.checklist.groups.some(g=>g.id===t.group)));
  if(code!=='en')assert.notEqual(config.checklist.tasks[6].title,articles.find(a=>a.toolId===id).i18n.en.tool.checklist.tasks[6].title);
 }
 const merged=await readFile(new URL(`../dist/${prefix}tools/pregnancy-week-lookup/index.html`,import.meta.url),'utf8');assert.ok(merged.includes(`/${prefix}tools/due-date-calculator/?method=due-date`));assert.ok(merged.includes('noindex, follow'));assert.ok(!merged.includes('data-care-tool'));
 const catalog=await readFile(new URL(`../dist/${prefix}tools/index.html`,import.meta.url),'utf8');assert.ok(!catalog.includes('/tools/pregnancy-week-lookup/'));
 const config=articles.find(a=>a.toolId==='due-date-calculator').i18n[code].tool;assert.ok(config.combined);assert.equal(config.dueDateFields[0].name,'dueDate');
});
test('new module hashes and removal of unverified name data reach the built runtime',async()=>{
 for(const [entry,dependency] of [['care-tools.js','care-organizers.js'],['care-organizers.js','baby-name-data.js'],['care-organizers.js','care-organizers-core.js'],['care-tools-pilot.js','care-organizers-core.js']]){
  const source=await readFile(new URL(`../dist/assets/${entry}`,import.meta.url),'utf8'),bytes=await readFile(new URL(`../dist/assets/${dependency}`,import.meta.url));assert.ok(source.includes(`/assets/${dependency}?v=${createHash('sha256').update(bytes).digest('hex').slice(0,16)}`));
 }
 const runtime=await readFile(new URL('../dist/assets/care-tools.js',import.meta.url),'utf8');assert.ok(!runtime.includes('babyNameIdeas'));assert.ok(!runtime.includes('Ruler of elves'));
});
