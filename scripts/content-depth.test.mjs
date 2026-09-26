import assert from 'node:assert/strict';
import {test} from 'node:test';
import {readFile} from 'node:fs/promises';
import {filterNameCollection} from '../public/assets/care-organizers-core.js';
import {nameCollection} from '../src/name-collections.mjs';
import {articleBySlug} from '../src/content-hub.mjs';

test('name search tolerates accents, Arabic marks and Persian letter variants without changing stored spelling',()=>{
  assert.equal(filterNameCollection(nameCollection('fr').entries,{query:'lumiere'})[0].name,'Nur');
  assert.equal(filterNameCollection(nameCollection('tr').entries,{query:'isik'})[0].name,'Nur');
  assert.equal(filterNameCollection(nameCollection('ar').entries,{query:'إِيمَان'})[0].name,'Iman');
  assert.equal(filterNameCollection(nameCollection('fa').entries,{query:'كريم'})[0].name,'Karim');
  assert.deepEqual(filterNameCollection(nameCollection('en').entries,{query:'not-a-real-name'}),[]);
  const entries=nameCollection('ar').entries, before=JSON.stringify(entries);
  filterNameCollection(entries,{query:'كريم'});
  assert.equal(JSON.stringify(entries),before);
});

test('usage filters do not misrepresent linguistic origin and combine with multiword search',()=>{
  const entries=nameCollection('en').entries;
  assert.deepEqual(filterNameCollection(entries,{usage:'tr',query:'sea persian'}).map(n=>n.name),['Derya']);
  assert.deepEqual(filterNameCollection(entries,{usage:'fa',query:'sea'}),[]);
  assert.equal(filterNameCollection(entries,{usage:'fa',query:'spring'})[0].name,'Bahar');
  assert.equal(filterNameCollection(entries,{query:'   '}).length,16);
});

test('all seven locales retain a source-linked catalogue without JavaScript and the same working config',async()=>{
  for(const lang of ['en','ar','fa','fr','es','pt','tr']){
    const c=nameCollection(lang),d=articleBySlug.get('tools/baby-name-shortlist').i18n[lang];
    assert.equal(new Set(c.entries.map(n=>n.name)).size,16);
    assert.ok(c.entries.every(n=>n.meaning&&n.usageLabel&&n.originLabel&&new URL(n.source).hostname==='www.behindthename.com'));
    assert.ok(c.entries.every(n=>!('rank' in n)&&!('count' in n)));
    assert.deepEqual(d.tool.nameCollection,c);
    const prefix=lang==='en'?'':`${lang}/`;
    const html=await readFile(new URL(`../dist/${prefix}tools/baby-name-shortlist/index.html`,import.meta.url),'utf8');
    const staticPart=html.split('id="name-meanings-static"')[1].split('</section>')[0];
    assert.equal((staticPart.match(/class="sourced-name-card"/g)||[]).length,16);
    for(const n of c.entries)assert.ok(staticPart.includes(`href="${n.source}"`));
    const config=JSON.parse(html.match(/<script type="application\/json" data-tool-config>([\s\S]*?)<\/script>/)[1]);
    assert.deepEqual(config.nameCollection,c);
  }
});

test('expanded practical guides retain equivalent localized sections, FAQs and evidence links',async()=>{
  for(const slug of ['about-bemama/tools','about-bemama/premium','about-bemama/cycle-tracker','baby-and-child/3-month-old-sleep-schedule','baby-and-child/7-8-month-old-feeding-schedule','pregnancy/pregnancy-weeks-4-8','newborn/postpartum-recovery']){
    const article=articleBySlug.get(slug),shape=d=>d.sections.map(s=>[s.id,!!s.image,!!s.caption,s.table?.rows.length]);
    for(const [lang,d]of Object.entries(article.i18n)){
      assert.deepEqual(shape(d),shape(article.i18n.en),`${lang}/${slug}`);
      assert.equal(d.faq.length,article.i18n.en.faq.length,`${lang}/${slug} FAQs`);
      if(slug==='baby-and-child/7-8-month-old-feeding-schedule')assert.ok(d.evidence.sources.some(s=>s.url.endsWith('/signs-your-child-is-hungry-or-full.html')));
    }
  }
});
