import {readBoard,commitBoard,parseBoard,checklistStats,nameKey,filterNames} from './care-organizers-core.js';
import {nameData,nameSource} from './baby-name-data.js';
const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
const fmt=x=>new Intl.NumberFormat(document.documentElement.lang).format(x);
const btn=(label,action,primary=false)=>{const b=el('button',`button ${primary?'':'secondary'} pilot-button`,label);b.type='button';b.addEventListener('click',action);return b;};
const field=(label,type='text',options)=>{
 const wrap=el('label','pilot-field'),input=el(options?'select':type==='textarea'?'textarea':'input');
 if(options)for(const [value,title]of options){const o=el('option','',title);o.value=value;input.append(o);}
 else if(type!=='textarea')input.type=type;else input.rows=3;
 input.setAttribute('aria-label',label);wrap.append(el('span','',label),input);return {wrap,input};
};
function download(content,filename,type='application/json') {
 const url=URL.createObjectURL(new Blob([content],{type})),a=el('a');a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function controller(config,kind,onChange) {
 const ui=config.ui,legacyKey=`bemama.tool.${config.id}`,key=`${legacyKey}.v3`,template=config.checklist?.tasks||[];
 const storage={getItem:k=>window.localStorage.getItem(k),setItem:(k,v)=>window.localStorage.setItem(k,v)};
 let state=readBoard(storage,key,legacyKey,kind,config.id,template);
 const status=el('p','pilot-status');status.setAttribute('role','status');
 function apply(entries,undo=false) {
  const next=commitBoard(storage,key,legacyKey,state,entries,template,undo);
  if(!next.ok){status.textContent=ui[next.error];return false;}
  state=next;status.textContent=ui.saved;onChange();return true;
 }
 const controls=el('div','organizer-toolbar');
 const undo=btn(ui.undoChange,()=>apply(null,true));
 const backup=btn(ui.backup,()=>{
  const fresh=readBoard(storage,key,legacyKey,kind,config.id,template);
  const content=fresh.ok?JSON.stringify(fresh.data,null,2):fresh.raw??fresh.legacyRaw;
  if(content!=null)download(content,`bemama-${config.id}.json`);else status.textContent=ui.readFailed;
 });
 const print=btn(ui.print,()=>window.print());
 const importer=el('details','organizer-import'),summary=el('summary','',ui.importBackup),file=field(ui.importBackup,'file'),preview=el('div','organizer-backup-preview');
 file.input.accept='.json,application/json';
 file.input.addEventListener('change',async()=>{
  preview.replaceChildren();const selected=file.input.files?.[0];if(!selected)return;
  try {
   if(selected.size>2000000)throw Error();
   const candidate=parseBoard(JSON.parse(await selected.text()),kind,config.id,template);
   const list=el('ul');for(const e of candidate.entries){const title=kind==='names'?e.name:e.title||template.find(t=>t.id===e.id)?.title;list.append(el('li','',`${title}${e.state?' · '+ui[e.state]:''}${e.note?' — '+e.note:''}`));}
   preview.append(el('h3','pilot-heading',`${ui.importPreview} · ${fmt(candidate.entries.length)}`),list,btn(ui.applyBackup,()=>{if(apply(candidate.entries)){preview.replaceChildren();file.input.value='';importer.open=false;}}));
  }catch {preview.append(el('p','pilot-error',ui.invalidBackup));}
 });
 importer.append(summary,el('p','pilot-hint',ui.importHelp),file.wrap,preview);
 controls.append(undo,backup,print,importer);
 function refresh(){undo.disabled=!state.ok||!state.data.history.length;file.input.disabled=!state.ok;if(!state.ok)status.textContent=ui[state.error];}
 refresh();
 return {get state(){return state;},get entries(){return state.ok?state.data.entries:[];},apply,status,controls,refresh};
}

export function renderChecklistComplete(config) {
 const ui=config.ui,template=config.checklist.tasks,base=new Map(template.map(t=>[t.id,t]));
 const categories=[...config.checklist.groups,{id:'custom',title:ui.customTasks}];
 const root=el('div','tool-pilot organizer checklist-organizer'),dashboard=el('section','pilot-card organizer-dashboard'),listCard=el('section','pilot-card organizer-list');
 const ctl=controller(config,'checklist',render),metrics=el('div','organizer-metrics'),categoryProgress=el('div','organizer-category-progress');
 const overview=el('div','organizer-overview'),footer=el('div','organizer-overview-footer'),manage=el('details','organizer-manage');
 overview.append(el('h2','pilot-heading',ui.completion),metrics);
 manage.append(el('summary','',ui.manageList),ctl.controls);
 footer.append(el('p','pilot-hint',ui.checklistHelp),manage,ctl.status);
 dashboard.append(overview,categoryProgress,footer);
 const query=field(ui.searchTasks,'search'),filter=field(ui.filter,'select',[['',ui.all],['todo',ui.todo],['done',ui.done],['skipped',ui.skipped]]),category=field(ui.category,'select',[['',ui.all],...categories.map(g=>[g.id,g.title])]);
 const filters=el('div','organizer-filters');filters.append(query.wrap,filter.wrap,category.wrap);const list=el('div','organizer-tasks');
 [query.input,filter.input,category.input].forEach(input=>input.addEventListener('input',renderList));
 const editor=el('section','organizer-editor');editor.hidden=true;let editing;
 const form=el('form','pilot-form'),title=field(ui.task),group=field(ui.category,'select',categories.map(g=>[g.id,g.title])),note=field(ui.notes,'textarea');
 title.input.required=true;title.input.maxLength=300;note.input.maxLength=4000;
 const editorHeading=el('h2','pilot-heading',ui.addTask),save=el('button','button',ui.saveEntry);save.type='submit';
 const cancel=btn(ui.cancel,()=>{editor.hidden=true;editing=undefined;});form.append(title.wrap,group.wrap,note.wrap,save,cancel);editor.append(editorHeading,form);
 form.addEventListener('submit',e=>{e.preventDefault();if(!title.input.value.trim())return;
  const entry=editing?{...editing,note:note.input.value.trim(),...(editing.custom?{title:title.input.value.trim(),group:group.input.value}:{})}:{id:`custom-${crypto.randomUUID()}`,custom:true,title:title.input.value.trim(),group:group.input.value,note:note.input.value.trim(),state:'todo'};
  const next=editing?ctl.entries.map(e=>e.id===editing.id?entry:e):[...ctl.entries,entry];
  if(ctl.apply(next)){editor.hidden=true;form.reset();editing=undefined;}
 });
 function edit(entry){editing=entry;const task=base.get(entry?.id);editor.hidden=false;editorHeading.textContent=entry?ui.edit:ui.addTask;title.input.value=task?.title||entry?.title||'';group.input.value=task?.group||entry?.group||'custom';note.input.value=entry?.note||'';title.input.readOnly=!!task;group.input.disabled=!!task;save.textContent=entry?ui.updateEntry:ui.saveEntry;(task?note.input:title.input).focus();}
 const add=btn(ui.addTask,()=>edit(),true);add.disabled=!ctl.state.ok;
 const listHeader=el('header','organizer-list-header');listHeader.append(el('h2','pilot-heading',ui.yourChecklist),add);
 listCard.append(listHeader,filters,editor,list);
 const references=el('section','pilot-card organizer-references');references.append(el('h2','pilot-heading',ui.references));
 for(const source of config.checklist.sources){const a=el('a','',source.label);a.href=source.url;references.append(a);}
 references.append(el('p','pilot-hint',config.labels.local));root.append(dashboard,listCard,references);
 function items(){return ctl.entries.map(e=>({...base.get(e.id),...e,title:base.get(e.id)?.title||e.title,group:base.get(e.id)?.group||e.group}));}
 function renderList(){
  list.replaceChildren();const q=query.input.value.trim().toLocaleLowerCase(),matches=items().filter(e=>(!filter.input.value||e.state===filter.input.value)&&(!category.input.value||e.group===category.input.value)&&(!q||`${e.title} ${e.note}`.toLocaleLowerCase().includes(q)));
  if(!matches.length)list.append(el('p','pilot-empty',ui.noMatches));
  for(const g of categories){const tasks=matches.filter(e=>e.group===g.id);if(!tasks.length)continue;const section=el('section','organizer-group'),heading=el('header','organizer-group-heading');heading.append(el('h3','pilot-heading',g.title),el('span','organizer-group-count',fmt(tasks.length)));section.append(heading);
   for(const e of tasks){const row=el('article',`organizer-task state-${e.state}`);row.dataset.taskId=e.id;const label=el('label','organizer-task-label'),check=el('input');check.type='checkbox';check.checked=e.state==='done';check.disabled=!ctl.state.ok;check.setAttribute('aria-label',e.title);label.append(check,el('span','',e.title));
    const applyState=value=>{const tag=document.activeElement?.tagName==='SELECT'?'select':'input';const next=ctl.entries.map(item=>item.id===e.id?{...item,state:value}:item);if(!ctl.apply(next)){check.checked=e.state==='done';select.input.value=e.state;}else list.querySelector(`[data-task-id="${CSS.escape(e.id)}"] ${tag}`)?.focus();};
    check.addEventListener('change',()=>applyState(check.checked?'done':'todo'));
    const select=field(`${ui.itemState}: ${e.title}`,'select',[['todo',ui.todo],['done',ui.done],['skipped',ui.skipped]]);select.wrap.classList.add('task-state');select.input.value=e.state;select.input.addEventListener('change',()=>applyState(select.input.value));
    const actions=el('div','organizer-task-actions'),editButton=btn(ui.edit,()=>edit(ctl.entries.find(item=>item.id===e.id)));editButton.setAttribute('aria-label',`${ui.edit}: ${e.title}`);actions.append(select.wrap,editButton);
    if(e.custom){const remove=btn(ui.remove,()=>ctl.apply(ctl.entries.filter(item=>item.id!==e.id)));remove.setAttribute('aria-label',`${ui.remove}: ${e.title}`);actions.append(remove);}
    row.append(label);if(e.note)row.append(el('p','organizer-note',e.note));row.append(actions);section.append(row);
   }list.append(section);
  }
 }
 function render(){ctl.refresh();metrics.replaceChildren();categoryProgress.replaceChildren();const stats=checklistStats(ctl.entries),ring=el('div','checklist-ring');ring.style.setProperty('--progress',`${stats.percent}%`);ring.append(el('span','',new Intl.NumberFormat(document.documentElement.lang,{style:'percent'}).format(stats.percent/100)));ring.setAttribute('aria-label',`${ui.done}: ${stats.done}/${stats.active}`);metrics.append(ring);
  const numbers=el('div','organizer-counts');for(const key of ['done','todo','skipped']){const box=el('div');box.append(el('strong','',fmt(stats[key])),el('span','',ui[key]));numbers.append(box);}metrics.append(numbers);
  if(!stats.active)categoryProgress.append(el('p','pilot-hint',ui.noTasks));
  for(const g of categories){const groupItems=items().filter(e=>e.group===g.id);if(!groupItems.length)continue;const s=checklistStats(groupItems),row=el('div','category-progress-row'),p=el('progress'),fraction=el('span','progress-fraction',`${fmt(s.done)} / ${fmt(s.active)}`);fraction.dir='ltr';p.max=Math.max(1,s.active);p.value=s.done;p.setAttribute('aria-label',g.title);row.append(el('span','',g.title),fraction,p);categoryProgress.append(row);}
  renderList();
 }
 render();return root;
}

export function renderNameFinderComplete(config) {
 const ui=config.ui,root=el('div','tool-pilot organizer names-organizer'),browse=el('section','pilot-card'),shortlist=el('section','pilot-card'),ctl=controller(config,'names',renderSaved);
 const source=el('a','',`SSA · ${nameSource.period}`);source.href=nameSource.url;
 browse.append(el('h2','pilot-heading',ui.nameSearch),el('p','pilot-hint',ui.nameDataHelp),source);
 const query=field(ui.nameSearch,'search'),sex=field(ui.nameCategory,'select',[['',ui.all],['F',ui.girls],['M',ui.boys]]),length=field(ui.nameLength,'select',[['',ui.all],['short',ui.shortName],['long',ui.longName]]),sort=field(ui.nameSort,'select',[['rank',ui.rank],['alpha',ui.alphabetical]]);
 const filters=el('div','organizer-filters name-filters');filters.append(query.wrap,sex.wrap,length.wrap,sort.wrap);browse.append(filters);
 const count=el('p','pilot-hint'),results=el('div','sourced-name-results'),more=btn(ui.showMore,()=>{visible+=24;renderResults();});let visible=24;
 [query.input,sex.input,length.input,sort.input].forEach(input=>input.addEventListener('input',()=>{visible=24;renderResults();}));browse.append(count,results,more);
 const savedList=el('div','organizer-shortlist'),chart=el('section','pilot-card name-comparison'),compareSex=field(ui.nameCategory,'select',[['F',ui.girls],['M',ui.boys]]),bars=el('div','name-comparison-bars');compareSex.input.addEventListener('change',renderComparison);
 chart.append(el('h2','pilot-heading',ui.compareNames),el('p','pilot-hint',ui.compareHelp),compareSex.wrap,bars);
 const form=el('form','pilot-form name-editor'),name=field(ui.name),note=field(ui.notes,'textarea');name.input.required=true;name.input.maxLength=100;note.input.maxLength=4000;let editing;
 const heading=el('h3','pilot-heading',ui.addName),submit=el('button','button',ui.saveName);submit.type='submit';const cancel=btn(ui.cancel,reset);cancel.hidden=true;form.append(heading,name.wrap,note.wrap,submit,cancel);
 function reset(){form.reset();editing=undefined;heading.textContent=ui.addName;submit.textContent=ui.saveName;cancel.hidden=true;}
 form.addEventListener('submit',event=>{event.preventDefault();const value=name.input.value.trim();if(!value)return;const duplicate=ctl.entries.some(e=>nameKey(e.name)===nameKey(value)&&e.id!==editing?.id);if(duplicate){ctl.status.textContent=ui.duplicateName;return;}
  const entry={...(editing||{}),id:editing?.id||crypto.randomUUID(),name:value,note:note.input.value.trim(),legacy:false};
  if(ctl.apply(editing?ctl.entries.map(e=>e.id===entry.id?entry:e):[...ctl.entries,entry]))reset();
 });
 shortlist.append(el('h2','pilot-heading',ui.savedNames),ctl.controls,ctl.status,savedList,form,el('p','pilot-hint',config.labels.local));
 const nav=el('nav','organizer-nav');
 for(const [section,id,label]of [[browse,'name-explorer',ui.nameSearch],[shortlist,'name-shortlist',ui.savedNames],[chart,'name-comparison',ui.compareNames]]){section.id=id;const link=el('a','button secondary pilot-button',label);link.href=`#${id}`;nav.append(link);}
 root.append(nav,shortlist,chart,browse);
 function renderResults(){results.replaceChildren();const matches=filterNames(nameData,{query:query.input.value,sex:sex.input.value,length:length.input.value,sort:sort.input.value});count.textContent=`${fmt(Math.min(visible,matches.length))} / ${fmt(matches.length)}`;more.hidden=visible>=matches.length;
  if(!matches.length)results.append(el('p','pilot-empty',ui.noMatches));
  for(const n of matches.slice(0,visible)){const card=el('article','sourced-name-card');card.append(el('h3','',n.name),el('p','name-rank',`${ui.rank} #${fmt(n.rank)} · ${n.sex==='F'?ui.girls:ui.boys}`),el('p','pilot-hint',`${ui.occurrences}: ${fmt(n.count)}`));const saved=ctl.entries.some(e=>nameKey(e.name)===nameKey(n.name)),save=btn(saved?ui.savedNames:ui.saveName,()=>ctl.apply([...ctl.entries,{id:crypto.randomUUID(),name:n.name,note:''}]),!saved);save.disabled=saved||!ctl.state.ok;save.setAttribute('aria-label',`${ui.saveName}: ${n.name} (${n.sex==='F'?ui.girls:ui.boys})`);card.append(save);results.append(card);}
 }
 function renderComparison(){bars.replaceChildren();const selected=ctl.entries.map(e=>({...e,data:nameData.find(n=>nameKey(n.name)===nameKey(e.name)&&n.sex===compareSex.input.value)}));const max=Math.max(1,...selected.map(e=>e.data?.count||0));if(!selected.length)bars.append(el('p','pilot-empty',ui.shortlistEmpty));
  for(const e of selected){const row=el('div','name-comparison-row'),label=el('div','name-bar-label');label.append(el('strong','',e.name),el('span','',e.data?`${fmt(e.data.count)} · #${fmt(e.data.rank)}`:ui.unranked));row.append(label);if(e.data){const track=el('div','name-bar-track'),bar=el('span');bar.style.width=`${e.data.count/max*100}%`;track.setAttribute('aria-label',`${e.name}: ${fmt(e.data.count)}`);track.append(bar);row.append(track);}bars.append(row);}
 }
 function renderSaved(){ctl.refresh();savedList.replaceChildren();submit.disabled=!ctl.state.ok;if(!ctl.entries.length)savedList.append(el('p','pilot-empty',ui.shortlistEmpty));
  for(const e of ctl.entries){const card=el('article','shortlist-card');card.append(el('h3','',e.name));if(e.note)card.append(el('p','organizer-note',e.note));if(e.legacy)card.append(el('p','pilot-hint',ui.legacyNotes));const actions=el('div','pilot-actions');const edit=btn(ui.edit,()=>{editing=e;name.input.value=e.name;note.input.value=e.note;heading.textContent=ui.edit;submit.textContent=ui.updateEntry;cancel.hidden=false;name.input.focus();});edit.setAttribute('aria-label',`${ui.edit}: ${e.name}`);const remove=btn(ui.remove,()=>{if(ctl.apply(ctl.entries.filter(n=>n.id!==e.id))&&editing?.id===e.id)reset();});remove.setAttribute('aria-label',`${ui.remove}: ${e.name}`);actions.append(edit,remove);card.append(actions);savedList.append(card);}
  renderResults();renderComparison();
 }
 renderSaved();return root;
}
