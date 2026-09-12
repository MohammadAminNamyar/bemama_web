import {calendarDay, currentDay, measurementValue} from './care-tools-core.js';
import {whoWeight} from './who-weight-reference.js';

const element = (tag, cls, text) => {const e=document.createElement(tag); if(cls)e.className=cls; if(text!==undefined)e.textContent=text; return e;};
const number = value => new Intl.NumberFormat(document.documentElement.lang,{maximumFractionDigits:2}).format(value);
const date = day => new Intl.DateTimeFormat(document.documentElement.lang,{dateStyle:'medium',timeZone:'UTC'}).format(new Date(day*86400000));
const svgNode = (tag,attrs,text) => {const e=document.createElementNS('http://www.w3.org/2000/svg',tag); Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v)); if(text!==undefined)e.textContent=text; return e;};
const sourceLink = (label,url) => {const a=element('a','',label); a.href=url; return a;};

export function growthSeries(entries,field,{days=0,today=currentDay(),imperial=false}={}) {
  return entries.map(entry=>({day:calendarDay(entry.date),value:measurementValue(entry,field)}))
    .filter(p=>p.day!==undefined && p.value!==undefined && p.day<=today && (!days || p.day>=today-days))
    .map(p=>({...p,value:imperial ? p.value/(field === 'weight' ? .45359237 : 2.54):p.value}))
    .sort((a,b)=>a.day-b.day);
}

export function referenceSeries(entries,birthDate,today=currentDay()) {
  const birth=calendarDay(birthDate);
  if(birth===undefined || birth>today)return [];
  return growthSeries(entries,'weight',{today}).map(p=>({...p,age:(p.day-birth)/30.4375})).filter(p=>p.age>=0 && p.age<=24);
}

export function calendarMonths(from,to) {
  const first=new Date(from*86400000),last=new Date(to*86400000),months=[];
  for(let year=first.getUTCFullYear(),month=first.getUTCMonth(); year<last.getUTCFullYear() || (year===last.getUTCFullYear()&&month<=last.getUTCMonth());) {
    const start=Date.UTC(year,month,1)/86400000;
    months.push({start,offset:new Date(start*86400000).getUTCDay(),days:new Date(Date.UTC(year,month+1,0)).getUTCDate()});
    month++;if(month===12){month=0;year++;}
  }
  return months;
}

export function renderCycleCalendar(calculated,values,ui) {
  const start=calendarDay(values.lastPeriod),ov=calculated.rows[0].date,window=calculated.rows[1],end=calculated.rows[2].date;
  const section=element('section','pilot-card pilot-calendar-panel');
  section.append(element('h2','pilot-heading',ui.cycleCalendar));
  const months=element('div','cycle-months');
  for(const month of calendarMonths(start,end)) {
    const block=element('section','cycle-month');
    block.append(element('h3','',new Intl.DateTimeFormat(document.documentElement.lang,{month:'long',year:'numeric',calendar:'gregory',timeZone:'UTC'}).format(new Date(month.start*86400000))));
    const grid=element('div','cycle-days');
    for(let i=0;i<7;i++)grid.append(element('span','cycle-weekday',new Intl.DateTimeFormat(document.documentElement.lang,{weekday:'short',timeZone:'UTC'}).format(new Date(Date.UTC(2026,0,4+i)))));
    for(let i=0;i<month.offset;i++){const blank=element('span');blank.setAttribute('aria-hidden','true');grid.append(blank);}
    for(let i=0;i<month.days;i++) {
      const day=month.start+i,labels=[];
      const cell=element('span','cycle-day',number(i+1));
      if(day>=window.from&&day<=window.to){cell.classList.add('cycle-fertile');labels.push(ui.fertileWindow);}
      if(day===ov){cell.classList.add('cycle-ovulation');labels.push(ui.ovulation);}
      if(day===end){cell.classList.add('cycle-period');labels.push(ui.nextPeriod);}
      if(day===currentDay()){cell.classList.add('cycle-today');labels.push(ui.today);}
      cell.setAttribute('aria-label',`${date(day)}${labels.length?': '+labels.join(', '):''}`);
      cell.title=cell.getAttribute('aria-label');grid.append(cell);
    }
    block.append(grid);months.append(block);
  }
  const legend=element('div','chart-legend');
  for(const [cls,label] of [['cycle-fertile',ui.fertileWindow],['cycle-ovulation',ui.ovulation],['cycle-period',ui.nextPeriod]]){const item=element('span');item.append(element('i',cls),document.createTextNode(label));legend.append(item);}
  section.append(months,legend,element('p','pilot-hint',ui.calendarHelp));return section;
}

export function renderPregnancyTimeline(calculated,ui) {
  const panel=element('section','pilot-card pilot-calendar-panel'),due=calculated.rows[0].date,start=due-280;
  panel.append(element('h2','pilot-heading',ui.timeline));
  const stages=element('div','pregnancy-stages');
  // NHS: first trimester through 12 weeks; second 13–27; third from 28.
  for(const [title,begin,end] of [[ui.firstTrimester,0,91],[ui.secondTrimester,91,196],[ui.thirdTrimester,196,280]]) {
    const stage=element('div','pregnancy-stage');
    if(calculated.elapsedDays>=begin && (calculated.elapsedDays<end || end===280))stage.classList.add('current-stage');
    stage.append(element('h3','',title),element('p','',`${date(start+begin)} – ${date(start+(end===280?end:end-1))}`));stages.append(stage);
  }
  panel.append(stages);return panel;
}

function chart({points,series=[],xMin,xMax,xTicks,yLabel,xLabel,formatX,title}) {
  const wrap=element('div','data-chart'),scroll=element('div','chart-scroll');
  const values=[...points.map(p=>p.y),...series.flatMap(s=>s.points.map(p=>p.y))];
  const lo=Math.min(...values),hi=Math.max(...values),padding=Math.max((hi-lo)*.12,.5);
  const yMin=Math.max(0,Math.floor((lo-padding)*2)/2),yMax=Math.ceil((hi+padding)*2)/2;
  const sx=x=>58+(x-xMin)/(xMax-xMin||1)*490,sy=y=>266-(y-yMin)/(yMax-yMin)*210;
  const svg=svgNode('svg',{viewBox:'0 0 620 324',role:'img','aria-label':title});
  svg.append(svgNode('title',{},title));
  if(series.length)svg.append(svgNode('polygon',{points:[...series[0].points,...[...series.at(-1).points].reverse()].map(p=>`${sx(p.x)},${sy(p.y)}`).join(' '),class:'reference-band'}));
  svg.append(svgNode('text',{x:58,y:24,class:'axis-title'},yLabel));
  for(let i=0;i<=4;i++) {
    const value=yMin+(yMax-yMin)*i/4,y=sy(value);
    svg.append(svgNode('line',{x1:58,y1:y,x2:548,y2:y,class:'chart-gridline'}),svgNode('text',{x:48,y:y+5,'text-anchor':'end',class:'axis-label'},number(value)));
  }
  for(const [i,x] of xTicks.entries())svg.append(svgNode('text',{x:sx(x),y:289,'text-anchor':i===0?'start':i===xTicks.length-1?'end':'middle',class:'axis-label'},formatX(x)));
  svg.append(svgNode('text',{x:303,y:318,'text-anchor':'middle',class:'axis-title'},xLabel));
  for(const [index,s] of series.entries()) {
    svg.append(svgNode('polyline',{points:s.points.map(p=>`${sx(p.x)},${sy(p.y)}`).join(' '),class:`reference-line reference-${index}`}));
    const last=s.points.at(-1);svg.append(svgNode('text',{x:559,y:sy(last.y)+5,class:'axis-label'},s.name));
  }
  if(points.length>1)svg.append(svgNode('polyline',{points:points.map(p=>`${sx(p.x)},${sy(p.y)}`).join(' '),class:'measurement-line'}));
  const selection=element('p','chart-selection');selection.setAttribute('role','status');
  for(const p of points) {
    const dot=svgNode('circle',{cx:sx(p.x),cy:sy(p.y),r:5,class:'measurement-point',tabindex:0,role:'button','aria-label':p.label});
    dot.append(svgNode('title',{},p.label));
    const select=()=>{selection.textContent=p.label;};
    dot.addEventListener('focus',select);dot.addEventListener('pointerenter',select);dot.addEventListener('click',select);
    dot.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();select();}});
    svg.append(dot);
  }
  if(points.length)selection.textContent=points.at(-1).label;
  scroll.append(svg);wrap.append(scroll,selection);return wrap;
}

function selectControl(label,options,onChange,value) {
  const wrap=element('label','dashboard-control');wrap.append(element('span','',label));const select=element('select');
  select.setAttribute('aria-label',label);
  options.forEach(([value,text])=>{const option=element('option','',text);option.value=value;select.append(option);});
  select.value=value;select.addEventListener('change',()=>onChange(select.value));wrap.append(select);return wrap;
}

export function renderAppointmentCalendar(entries,ui,state={}) {
  const card=element('section','pilot-card appointment-calendar');card.append(element('h2','pilot-heading',ui.calendar));
  const controls=element('div','dashboard-controls');
  const monthWrap=element('label','dashboard-control');monthWrap.append(element('span','',ui.month));
  const input=element('input');input.type='month';input.value=state.month||new Date(currentDay()*86400000).toISOString().slice(0,7);monthWrap.append(input);
  const grid=element('div','cycle-days appointment-days'),details=element('div','appointment-details');details.setAttribute('aria-live','polite');
  const selectDay=day=>{
    state.selectedDay=day;details.replaceChildren(element('h3','',date(day)));
    const selected=entries.filter(e=>calendarDay(e.date)===day);
    if(!selected.length)details.append(element('p','pilot-hint',ui.noDateEntries));
    for(const entry of selected){const row=element('article','appointment-note');row.append(element('strong','',entry.symptom||''),element('p','',entry.note||''));details.append(row);}
    grid.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.day)===day)));
  };
  const render=()=>{
    const first=calendarDay(`${input.value}-01`);if(first===undefined)return;
    state.month=input.value;grid.replaceChildren();
    const month=calendarMonths(first,first)[0];
    for(let i=0;i<7;i++)grid.append(element('span','cycle-weekday',new Intl.DateTimeFormat(document.documentElement.lang,{weekday:'short',timeZone:'UTC'}).format(new Date(Date.UTC(2026,0,4+i)))));
    for(let i=0;i<month.offset;i++){const blank=element('span');blank.setAttribute('aria-hidden','true');grid.append(blank);}
    for(let i=0;i<month.days;i++) {
      const day=first+i,count=entries.filter(e=>calendarDay(e.date)===day).length;
      const cell=element('button','cycle-day appointment-day');cell.type='button';cell.dataset.day=day;cell.append(element('span','',number(i+1)));
      if(count){cell.classList.add('has-entries');cell.append(element('small','',number(count)));}
      if(day===currentDay())cell.classList.add('cycle-today');
      cell.setAttribute('aria-label',`${date(day)} · ${ui.count.replace('{count}',number(count))}`);cell.addEventListener('click',()=>selectDay(day));grid.append(cell);
    }
    const selected=state.selectedDay>=first&&state.selectedDay<first+month.days?state.selectedDay:(currentDay()>=first&&currentDay()<first+month.days?currentDay():first);selectDay(selected);
  };
  for(const [step,label] of [[-1,ui.previousMonth],[1,ui.nextMonth]]) {
    const button=element('button','button secondary pilot-button',label);button.type='button';button.addEventListener('click',()=>{
      const first=calendarDay(`${input.value}-01`);if(first===undefined)return;const d=new Date(first*86400000);d.setUTCMonth(d.getUTCMonth()+step);input.value=d.toISOString().slice(0,7);render();
    });controls.append(button);
  }
  input.addEventListener('change',render);controls.prepend(monthWrap);
  card.append(controls,grid,details);render();return card;
}

export function renderGrowthDashboard(entries,fields,ui,state={}) {
  const card=element('section','pilot-card growth-dashboard');
  card.append(element('h2','pilot-heading',ui.growthDashboard));
  const controls=element('div','dashboard-controls'),plots=element('div','growth-plot-grid');
  state.days??='0';state.units??='metric';
  controls.append(selectControl(ui.dateRange,[['0',ui.allTime],['90',ui.last90],['180',ui.last180]],value=>{state.days=value;render();},state.days),selectControl(ui.displayUnits,[['metric','kg / cm'],['imperial','lb / in']],value=>{state.units=value;render();},state.units));
  const print=element('button','button secondary pilot-button',ui.print);print.type='button';print.addEventListener('click',()=>window.print());controls.append(print);
  card.append(controls,plots);
  function render() {
    plots.replaceChildren();
    for(const field of ['weight','length']) {
      const imperial=state.units==='imperial',unit=field==='weight'?(imperial?'lb':'kg'):(imperial?'in':'cm');
      const points=growthSeries(entries,field,{days:Number(state.days),imperial});
      const label=fields.find(f=>f.name===field).label,box=element('section','growth-plot');
      box.append(element('h3','',`${label} (${unit})`));
      if(!points.length){box.append(element('p','pilot-empty',ui.noMeasurements));plots.append(box);continue;}
      const first=points[0],last=points.at(-1),delta=last.value-first.value;
      const stats=element('dl','growth-stats');
      for(const [name,value] of [[ui.latest,`${number(last.value)} ${unit}`],[ui.change,points.length>1?`${delta>0?'+':''}${number(delta)} ${unit}`:'—'],[ui.measurements,number(points.length)]]) {const stat=element('div');stat.append(element('dt','',name),element('dd','',value));stats.append(stat);}
      box.append(stats,chart({points:points.map(p=>({x:p.day,y:p.value,label:`${date(p.day)} · ${number(p.value)} ${unit}`})),xMin:first.day-.5,xMax:last.day+.5,xTicks:first.day===last.day?[first.day]:[first.day,last.day],yLabel:unit,xLabel:'',formatX:date,title:`${label}: ${date(first.day)} – ${date(last.day)}`}));
      plots.append(box);
    }
  }
  render();card.append(renderWhoReference(entries,ui,state));return card;
}

function renderWhoReference(entries,ui,state) {
  const section=element('section','who-reference');section.append(element('h3','',ui.weightReference),element('p','pilot-hint',ui.referenceIntro));
  const form=element('form','reference-form');form.noValidate=true;
  const birthWrap=element('label','dashboard-control');birthWrap.append(element('span','',ui.birthDate));
  const birth=element('input');birth.type='date';birth.max=new Date(currentDay()*86400000).toISOString().slice(0,10);birth.value=state.birthDate||'';birthWrap.append(birth);
  const sexWrap=selectControl(ui.referenceSex,[['',ui.choose],['girls',ui.girls],['boys',ui.boys]],value=>{state.sex=value;result.replaceChildren();},state.sex||'');
  const termWrap=element('label','reference-term');const term=element('input');term.type='checkbox';term.checked=!!state.term;termWrap.append(term,document.createTextNode(ui.bornAtTerm));
  const submit=element('button','button pilot-button',ui.showReference);submit.type='submit';
  const feedback=element('p','pilot-error');feedback.setAttribute('role','status');
  const result=element('div','reference-result');
  form.append(birthWrap,sexWrap,termWrap,element('p','pilot-hint',ui.termHelp),submit,feedback);
  form.addEventListener('input',()=>{state.birthDate=birth.value;state.term=term.checked;feedback.textContent='';result.replaceChildren();});
  const render=()=>{
    const day=calendarDay(birth.value);result.replaceChildren();
    if(day===undefined||day>currentDay()){feedback.textContent=ui.validDate;birth.setAttribute('aria-invalid','true');birth.focus();return;}
    birth.setAttribute('aria-invalid','false');const sex=sexWrap.querySelector('select');
    if(!whoWeight[sex.value]){feedback.textContent=ui.required;sex.focus();return;}
    if(!term.checked){feedback.textContent=ui.termHelp;term.focus();return;}
    const points=referenceSeries(entries,birth.value),rows=whoWeight[sex.value];
    const series=[3,15,50,85,97].map((percentile,index)=>({name:`P${percentile}`,points:rows.map(row=>({x:row[0],y:row[index+1]}))}));
    result.append(chart({points:points.map(p=>({x:p.age,y:p.value,label:`${date(p.day)} · ${ui.ageMonths}: ${number(p.age)} · ${number(p.value)} kg`})),series,xMin:0,xMax:24,xTicks:[0,6,12,18,24],yLabel:'kg',xLabel:ui.ageMonths,formatX:number,title:`${ui.weightReference} · ${ui[sex.value]}`}));
    result.append(element('p','pilot-hint',ui.referenceHelp),element('p','pilot-hint',ui.excluded.replace('{count}',number(entries.filter(e=>e.weight).length-points.length))));
    result.append(sourceLink(ui.weightReference,'https://www.who.int/tools/child-growth-standards/standards/weight-for-age'));
  };
  form.addEventListener('submit',event=>{event.preventDefault();feedback.textContent='';render();});
  section.append(form,result);if(state.birthDate&&state.sex&&state.term)render();return section;
}
