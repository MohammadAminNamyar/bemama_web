import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFile } from 'node:fs/promises';
import { articleBySlug, articles } from '../src/content-hub.mjs';
import { content } from '../src/pages.mjs';
import { routineArticles } from '../src/articles/routines.mjs';
import { routineVisualCopy } from '../src/routine-visual-copy.mjs';
import { renderRoutineVisual } from '../src/routine-visuals.mjs';
import { exampleSleepLog, sleepLogTotals, exampleClock } from '../public/assets/routine-log-core.js';
import { evidenceForArticle } from '../src/article-evidence.mjs';
import { searchMetadata } from '../src/seo-metadata.mjs';

const langs=['en','fa','ar','fr','tr','es','pt'];
const esc=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');

test('example totals distinguish actual recorded sleep from an unknown afternoon',()=>{
  const complete=sleepLogTotals(exampleSleepLog());
  assert.deepEqual(complete,{nap:195,night:630,awake:615,unknown:0,sleep:825});
  const incomplete=sleepLogTotals(exampleSleepLog(true));
  assert.deepEqual(incomplete,{nap:150,night:630,awake:300,unknown:360,sleep:780});
  assert.equal(incomplete.sleep+incomplete.awake+incomplete.unknown,1440);
  assert.equal(exampleClock(1050),'00:30');
  assert.equal(exampleClock(1440),'07:00');
  assert.throws(()=>sleepLogTotals([{start:0,end:100,kind:'nap'}]));
  assert.throws(()=>sleepLogTotals([{start:0,end:800,kind:'nap'},{start:700,end:1440,kind:'night'}]));
});

test('all product translations preserve section images, workflow shape and localized destinations',async()=>{
  for(const slug of ['why-bemama','tools','premium','getting-started']) {
    const a=articleBySlug.get('about-bemama/'+slug);
    for(const lang of langs.slice(1)) {
      const d=a.i18n[lang];
      assert.equal(d.sections.length,a.i18n.en.sections.length,`${lang}/${slug}`);
      assert.equal(d.faq.length,a.i18n.en.faq.length,`${lang}/${slug}`);
      assert.equal(d.takeaways.length,a.i18n.en.takeaways.length,`${lang}/${slug}`);
      d.sections.forEach((s,i)=>assert.equal(s.image,a.i18n.en.sections[i].image));
      const html=await readFile(new URL(`../dist/${lang}/${a.slug}/index.html`,import.meta.url),'utf8');
      for(const [url,label] of Object.entries(d.linkLabels)) {
        assert.ok(html.includes(`href="${esc(url)}" dir="ltr" rel="noopener">${esc(label)}</a>`),`${lang}/${slug}: ${url}`);
        const u=new URL(url);
        if(u.hostname==='bemamas.com') {
          assert.ok(u.pathname.startsWith(`/${lang}/`));
          await readFile(new URL(`../dist${u.pathname}index.html`,import.meta.url));
        }
      }
      assert.equal(searchMetadata({lang,slug:a.slug,...d}).description,d.description);
    }
  }
});

test('new articles have full localized copy, sources, visuals and working language alternatives',async()=>{
  for(const article of routineArticles) for(const lang of langs) {
    const d=article.i18n[lang], prefix=lang==='en'?'':lang+'/';
    assert.equal(d.sections.length,6); assert.equal(d.faq.length,4); assert.equal(d.takeaways.length,5);
    assert.doesNotMatch(JSON.stringify(d),/\{(?:tracking|local|readiness|solids|sleepSource|safeSleep|feedingSource)\}/);
    assert.equal(evidenceForArticle(article.slug,lang).updatedIso,'2026-09-13');
    assert.equal(evidenceForArticle(article.slug,lang).sources.length,lang==='en'?2:3);
    const html=await readFile(new URL(`../dist/${prefix}${article.slug}/index.html`,import.meta.url),'utf8');
    assert.ok(html.includes(esc(d.title))); assert.ok(html.includes('routine-articles.js?v='));
    assert.ok(html.includes(`lang="${lang}"`));
    assert.ok(html.includes(`dir="${['fa','ar'].includes(lang)?'rtl':'ltr'}"`));
    assert.doesNotMatch(html,/reviewedBy|MedicalReview|medically reviewed/i);
    for(const alt of langs) {
      const route=`https://bemamas.com/${alt==='en'?'':alt+'/'}${article.slug}/`;
      assert.ok(html.includes(route),route);
    }
    for(const section of d.sections) if(section.visual) {
      const visual=renderRoutineVisual(section.visual,lang);
      assert.ok(html.includes(visual),`${lang}/${article.slug}: visual rendered`);
    }
    for(const [url,label] of Object.entries(d.linkLabels)) assert.ok(html.includes(`href="${esc(url)}" dir="ltr" rel="noopener">${esc(label)}</a>`),`${lang}: ${label}`);
    assert.equal(searchMetadata({lang,slug:article.slug,...d}).description,d.description);
  }
});

test('visual controls are localized and worksheets have labels without data submission',()=>{
  for(const lang of langs) {
    assert.deepEqual(Object.keys(routineVisualCopy[lang]).sort(),Object.keys(routineVisualCopy.en).sort());
    assert.equal(routineVisualCopy[lang].fields.length,5);
    const sleep=renderRoutineVisual('sleep',lang), sheet=renderRoutineVisual('feeding-sheet',lang);
    assert.match(sleep,/data-sleep-panel="incomplete" hidden/);
    assert.match(sleep,/<caption>/); assert.match(sleep,/aria-live="polite"/);
    assert.match(sheet,/<label[^>]*>[^<]+<input/);
    assert.doesNotMatch(sheet,/<form|action=|type="submit"/);
  }
});

test('home feature cards now map to verified localized workflows',async()=>{
  for(const lang of langs) {
    assert.equal(content[lang].home.features.length,3);
    const prefix=lang==='en'?'':lang+'/';
    const html=await readFile(new URL(`../dist/${prefix}index.html`,import.meta.url),'utf8');
    for(const slug of ['about-bemama/daily-journey','about-bemama/tools','tools'])assert.ok(html.includes(`href="/${prefix}${slug}/"`));
  }
  assert.equal(new Set(articles.map(a=>a.slug)).size,articles.length);
});
