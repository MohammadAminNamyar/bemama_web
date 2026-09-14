import { exampleSleepLog, sleepLogTotals, exampleClock } from '../public/assets/routine-log-core.js';
import { routineVisualCopy } from './routine-visual-copy.mjs';
const esc = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
export function renderRoutineVisual(kind, lang) {
  const c=routineVisualCopy[lang];
  if(!c) throw new Error(`Missing routine visual copy: ${lang}`);
  const number = new Intl.NumberFormat(lang);
  const clockNumber = new Intl.NumberFormat(lang,{minimumIntegerDigits:2});
  const clock = offset => exampleClock(offset).split(':').map(value=>clockNumber.format(Number(value))).join(':');
  const duration = minutes => `${number.format(Math.floor(minutes/60))} ${c.hours} ${number.format(minutes%60)} ${c.minutes}`;
  if (kind === 'sleep') {
    const panels=[false,true].map(incomplete => {
      const rows=exampleSleepLog(incomplete), totals=sleepLogTotals(rows);
      const key=incomplete?'incomplete':'complete';
      return `<div data-sleep-panel="${key}" ${incomplete?'hidden':''}>
        <div class="routine-metrics">${['sleep','nap','night','unknown'].map(k=>`<div><span>${esc(c[k])}</span><strong>${esc(duration(totals[k]))}</strong></div>`).join('')}</div>
        <div class="routine-timeline" aria-hidden="true" dir="ltr">${rows.map(r=>`<span class="routine-block routine-${r.kind}" style="width:${(r.end-r.start)/14.4}%" title="${esc(c[r.kind])}: ${clock(r.start)}–${clock(r.end)}"></span>`).join('')}</div>
        <div class="routine-axis" dir="ltr" aria-hidden="true">${[0,360,720,1080,1440].map(offset=>`<span>${clock(offset)}</span>`).join('')}</div>
        <p class="routine-explanation">${esc(incomplete?c.incompleteNote:c.completeNote)}</p>
        <details class="routine-table-details"><summary>${esc(c.table)}</summary><div class="routine-table-scroll"><table><caption>${esc(c[key])} · ${esc(c.sleepNote)}</caption><thead><tr>${[c.period,c.state,c.duration].map(t=>`<th scope="col">${esc(t)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr><th scope="row"><bdi dir="ltr">${clock(r.start)}–${clock(r.end)}</bdi>${r.end>=1020?` <small>${esc(c.nextDay)}</small>`:''}</th><td>${esc(c[r.kind])}</td><td>${esc(duration(r.end-r.start))}</td></tr>`).join('')}</tbody></table></div></details>
      </div>`;
    }).join('');
    return `<figure class="routine-visual" data-sleep-demo><figcaption><span class="routine-kicker">${esc(c.example)}</span><h3>${esc(c.sleepTitle)}</h3><p>${esc(c.sleepNote)}</p></figcaption>
      <div class="routine-switch" aria-label="${esc(c.modeLabel)}" hidden><button type="button" data-sleep-mode="complete" aria-pressed="true">${esc(c.complete)}</button><button type="button" data-sleep-mode="incomplete" aria-pressed="false">${esc(c.incomplete)}</button></div>
      <div class="routine-legend">${['nap','night','awake','unknown'].map(k=>`<span><i class="routine-${k}" aria-hidden="true"></i>${esc(c[k])}</span>`).join('')}</div>
      <div aria-live="polite" aria-atomic="true">${panels}</div></figure>`;
  }
  if (kind === 'feeding-day') return `<figure class="routine-visual"><figcaption><span class="routine-kicker">${esc(c.example)}</span><h3>${esc(c.dayTitle)}</h3><p>${esc(c.dayNote)}</p></figcaption><ol class="routine-day-parts">${c.dayParts.map(([title,text],i)=>`<li><span class="routine-step" aria-hidden="true">${number.format(i+1)}</span><div><h4>${esc(title)}</h4><p>${esc(text)}</p></div></li>`).join('')}</ol></figure>`;
  if (kind === 'feeding-sheet') return `<section class="routine-visual routine-worksheet" data-feeding-sheet><header><h3>${esc(c.worksheetTitle)}</h3><p>${esc(c.worksheetNote)}</p></header><label class="routine-date">${esc(c.date)}<input type="text" maxlength="80" autocomplete="off"></label><div data-feeding-entries>${[1,2,3].map(n=>worksheetRow(c,number.format(n))).join('')}</div><p>${esc(c.worksheetFooter)}</p><div class="routine-actions" hidden><button type="button" class="button secondary" data-add-feeding-row>${esc(c.addRow)}</button><button type="button" class="button" data-print-feeding>${esc(c.print)}</button></div><template data-feeding-row-template>${worksheetRow(c,number.format(0))}</template></section>`;
  throw new Error(`Unknown routine visual: ${kind}`);
}
function worksheetRow(c,n) {
  return `<fieldset class="routine-entry"><legend>${esc(c.row)} <span data-entry-number>${n}</span></legend><div class="routine-entry-fields">${c.fields.map((text,i)=>`<label>${esc(text)}${i===4?'<textarea rows="2" maxlength="800" autocomplete="off"></textarea>':'<input type="text" maxlength="200" autocomplete="off">'}</label>`).join('')}</div></fieldset>`;
}
