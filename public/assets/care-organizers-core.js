import {calendarDay} from './care-tools-core.js';
const record=x=>x&&typeof x==='object'&&!Array.isArray(x);
const text=(x,max)=>typeof x==='string'&&x.length<=max;
export const nameKey=name=>name.normalize('NFKC').trim().toLocaleLowerCase('en');
export function validEntries(entries,kind,template=[]) {
 if(!Array.isArray(entries)||entries.length>2000)return false;
 const ids=new Set(),base=new Set(template.map(t=>t.id));
 const valid=entries.every(e=>{
  if(!record(e)||!text(e.id,150)||!e.id||ids.has(e.id)||!text(e.note??'',4000))return false;
  ids.add(e.id);
  if(kind==='names')return text(e.name,100)&&!!e.name.trim();
  return ['todo','done','skipped'].includes(e.state)&& (base.has(e.id)||e.custom===true&&text(e.title,300)&&!!e.title.trim()&&text(e.group,100));
 });
 return valid&&(kind==='names'||template.every(t=>ids.has(t.id)));
}
export function parseBoard(data,kind,toolId,template=[]) {
 if(!record(data)||data.version!==3||data.kind!==kind||data.toolId!==toolId||!validEntries(data.entries,kind,template)||!Array.isArray(data.history)||data.history.length>10||!data.history.every(h=>validEntries(h,kind,template)))throw Error('invalidBackup');
 return data;
}
export function seedBoard(legacy,kind,toolId,template=[]) {
 if(!Array.isArray(legacy))throw Error('readFailed');
 let entries;
 if(kind==='checklist') {
  if(!legacy.every(n=>Number.isInteger(n)&&n>=0&&n<6))throw Error('readFailed');
  entries=template.map(t=>({id:t.id,state:legacy.includes(Number(t.id.startsWith('base-')?t.id.slice(5):NaN))?'done':'todo',note:''}));
 }else {
  entries=legacy.map((e,i)=>{
   if(!record(e))throw Error('readFailed');
   const name=String(e.name||e.title||e.babyName||'').trim();
   if(!name)throw Error('readFailed');
   return {id:`legacy-${i}`,name,note:String(e.note||e.meaning||e.notes||''),legacy:true};
  });
 }
 const data={version:3,kind,toolId,entries,history:[]};
 return parseBoard(data,kind,toolId,template);
}
export function readBoard(storage,key,legacyKey,kind,toolId,template=[]) {
 let raw,legacyRaw;
 try {
  raw=storage.getItem(key);
  if(raw!==null)return {ok:true,raw,data:parseBoard(JSON.parse(raw),kind,toolId,template)};
  legacyRaw=storage.getItem(legacyKey);
  return {ok:true,raw,legacyRaw,data:seedBoard(legacyRaw===null?[]:JSON.parse(legacyRaw),kind,toolId,template)};
 }catch {return {ok:false,error:'readFailed',raw,legacyRaw};}
}
export function commitBoard(storage,key,legacyKey,state,entries,template=[],undo=false) {
 if(!state.ok)return state;
 try {
  if(storage.getItem(key)!==state.raw||(state.raw===null&&storage.getItem(legacyKey)!==state.legacyRaw))return {ok:false,error:'conflict'};
  const history=[...state.data.history];
  const nextEntries=undo?history.pop():entries;
  if(!nextEntries)return {ok:false,error:'writeFailed'};
  if(!undo)history.push(state.data.entries);
  const data={...state.data,entries:nextEntries,history:history.slice(-10)};
  parseBoard(data,data.kind,data.toolId,template);
  const raw=JSON.stringify(data);storage.setItem(key,raw);
  return {ok:true,raw,data};
 }catch{return {ok:false,error:'writeFailed'};}
}
export function checklistStats(entries) {
 const active=entries.filter(e=>e.state!=='skipped'),done=active.filter(e=>e.state==='done').length;
 return {active:active.length,done,todo:active.length-done,skipped:entries.length-active.length,percent:active.length?Math.round(done/active.length*100):0};
}
export function filterNames(data,{query='',sex='',length='',sort='rank'}={}) {
 const q=nameKey(query);
 return data.filter(n=>(!q||nameKey(n.name).includes(q))&&(!sex||n.sex===sex)&&(!length||(length==='short'?n.name.length<=4:n.name.length>=5)))
 .sort((a,b)=>sort==='alpha'?a.name.localeCompare(b.name,'en')||a.sex.localeCompare(b.sex):a.rank-b.rank||a.sex.localeCompare(b.sex));
}
const escapeIcs=s=>String(s??'').replaceAll('\\','\\\\').replace(/\r\n|\r|\n/g,'\\n').replaceAll(';','\\;').replaceAll(',','\\,');
function fold(line) {const encoder=new TextEncoder();let out='',part='',size=0;for(const c of line){const bytes=encoder.encode(c).length;if(size+bytes>75){out+=part+'\r\n';part=' ';size=1;}part+=c;size+=bytes;}return out+part;}
export function calendarFile(entries,now=new Date()) {
 const stamp=now.toISOString().replace(/[-:]/g,'').slice(0,15)+'Z';
 const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//BeMama//Local appointment organizer//EN','CALSCALE:GREGORIAN'];
 for(const e of entries){const day=calendarDay(e.date);if(day===undefined||!e.symptom?.trim())continue;
  const next=new Date((day+1)*86400000).toISOString().slice(0,10).replaceAll('-','');
  lines.push('BEGIN:VEVENT',`UID:${encodeURIComponent(e.id)}@bemama.local`,`DTSTAMP:${stamp}`,`DTSTART;VALUE=DATE:${e.date.replaceAll('-','')}`,`DTEND;VALUE=DATE:${next}`,`SUMMARY:${escapeIcs(e.symptom)}`,`DESCRIPTION:${escapeIcs(e.note)}`,'END:VEVENT');
 }
 lines.push('END:VCALENDAR');return lines.map(fold).join('\r\n')+'\r\n';
}
