import assert from 'node:assert/strict';
import {test} from 'node:test';
import {readFile} from 'node:fs/promises';
import {calendarDay,computeCalculator} from '../public/assets/care-tools-core.js';
import {articleBySlug} from '../src/content-hub.mjs';
import {gapGuides} from '../src/website-gap-guides.mjs';

test('IVF dating uses embryo age and ignores cycle length for fresh or frozen transfer',()=>{
  const transfer=calendarDay('2026-09-01');
  for(const age of [3,5]) {
    const result=computeCalculator('ivf',{transferDate:'2026-09-01',embryoAge:String(age)},transfer);
    assert.deepEqual(result.errors,{});
    assert.equal(result.rows[0].date,transfer+266-age);
    assert.equal(result.elapsedDays,14+age);
    assert.equal(result.rows[1].weeks,2);
    assert.equal(result.rows[1].days,age);
  }
});
test('IVF dates cross leap days and DST using calendar days',()=>{
  const result=computeCalculator('ivf',{transferDate:'2024-02-29',embryoAge:'5'},calendarDay('2024-03-11'));
  assert.equal(result.rows[0].date,calendarDay('2024-11-16'));
  assert.equal(result.elapsedDays,30);
});
test('IVF rejects invalid, future and unsupported inputs without a plausible-looking result',()=>{
  const today=calendarDay('2026-09-26');
  for(const values of [
    {transferDate:'2026-02-30',embryoAge:'5'},
    {transferDate:'2026-09-27',embryoAge:'3'},
    {transferDate:'2026-09-01',embryoAge:'6'},
    {transferDate:'2026-09-01',embryoAge:''},
    {transferDate:'2025-01-01',embryoAge:'5'}
  ]) {const r=computeCalculator('ivf',values,today);assert.ok(Object.keys(r.errors).length);assert.deepEqual(r.rows,[]);}
});
test('existing last-period and known-due-date estimates retain their convention',()=>{
  const today=calendarDay('2026-09-26');
  const period=computeCalculator('dueDate',{lastPeriod:'2026-08-01',cycleLength:'30'},today);
  const known=computeCalculator('pregnancyWeek',{dueDate:new Date(period.rows[0].date*86400000).toISOString().slice(0,10)},today);
  assert.deepEqual(period,known);
});
test('new guides and IVF controls are localized and their destinations exist',async()=>{
  for(const lang of ['en','fa','ar','fr','tr','es','pt']) {
    const prefix=lang==='en'?'':`${lang}/`;
    for(const guide of Object.values(gapGuides)) {
      const a=articleBySlug.get(guide.slug),d=a.i18n[lang];
      assert.ok(d.title&&d.description&&d.sections.length>=4);
      const html=await readFile(new URL(`../dist/${prefix}${guide.slug}/index.html`,import.meta.url),'utf8');
      assert.ok(html.includes('guide-jump-links'));
      for(const section of d.sections)for(const link of section.links||[]) {
        if(link.url.startsWith('/'))await readFile(new URL(`../dist${link.url}index.html`,import.meta.url));
      }
    }
    const config=articleBySlug.get('tools/due-date-calculator').i18n[lang].tool;
    assert.equal(config.ivfFields.length,2);assert.ok(config.ui.ivfMethod&&config.ui.ivfAction);
    const birth=await readFile(new URL(`../dist/${prefix}pregnancy/birth-plan/index.html`,import.meta.url),'utf8');
    assert.equal((birth.match(/maxlength="2000"/g)||[]).length,7);
    assert.match(birth,/birth-preferences.js\?v=/);
    assert.match(birth,/data-birth-action="download"/);
    assert.match(birth,/data-birth-action="print"/);
    assert.doesNotMatch(birth,/reviewedBy|medically reviewed/);
  }
});
