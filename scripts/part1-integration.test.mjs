import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import crypto from 'node:crypto';
import { articles, articleBySlug, categories } from '../src/content-hub.mjs';
import snapshot from '../src/articles/part-01/articles.json' with { type: 'json' };
import { evidenceForArticle } from '../src/article-evidence.mjs';
import { site } from '../src/pages.mjs';

const read=file=>fs.readFileSync(new URL('../'+file,import.meta.url),'utf8');
const sha=value=>crypto.createHash('sha256').update(value).digest('hex');
const imported=JSON.parse(read('src/articles/part-01/manifest.json'));
const langs=['en','fa','ar','fr','tr','es','pt'];
const route=(lang,slug)=>`/${lang==='en'?'':lang+'/'}${slug}/`;

test('Part1 snapshot registers all663 complete articles alongside the existing library',()=>{
  assert.equal(snapshot.length,663);
  assert(articles.length>663);
  assert.equal(new Set(articles.map(a=>a.slug)).size,articles.length);
  assert.equal(sha(read('src/articles/part-01/articles.json')),imported.articleSnapshotSha256);
  for(const candidate of snapshot){
    const registered=articleBySlug.get(candidate.slug);
    assert.deepEqual(registered,candidate,candidate.slug);
    for(const lang of langs){
      assert(registered.i18n[lang]?.sections.length,`${lang}/${candidate.slug}`);
      assert.deepEqual(evidenceForArticle(candidate.slug,lang).sources,candidate.i18n[lang].evidence.sources);
    }
  }
  assert.equal(categories.filter(c=>c.id==='family-health').length,1);
});

test('Part1 public assets retain all3320 reviewed export hashes',()=>{
  const folder=new URL('../public/assets/content/part-01/',import.meta.url);
  const files=fs.readdirSync(folder).filter(f=>f.endsWith('.webp')).sort();
  assert.equal(files.length,imported.assetCount);
  const hashes=Object.fromEntries(files.map(file=>[file,sha(fs.readFileSync(new URL(file,folder)))]));
  assert.equal(sha(JSON.stringify(hashes)),imported.assetsSha256);
});

for(const lang of langs) test(`${lang}: Part1 routes appear in pages, sitemaps, search and RSS with localized evidence`,()=>{
  const sitemap=read(`dist/sitemap-${lang}.xml`);
  const feed=read(`dist/rss-${lang}.xml`);
  const search=JSON.parse(read(`dist/search-index-${lang}.json`));
  const searchUrls=new Set(search.map(entry=>entry.url));
  for(const article of snapshot){
    const url=route(lang,article.slug);
    const canonical=site.origin+url;
    assert(sitemap.includes(`<loc>${canonical}</loc>`),`Sitemap ${url}`);
    assert(feed.includes(`<guid isPermaLink="true">${canonical}</guid>`),`RSS ${url}`);
    assert(searchUrls.has(url),`Search ${url}`);
    const html=read(`dist${url}index.html`);
    assert(html.includes(`<link rel="canonical" href="${canonical}"`),`Canonical ${url}`);
    assert(html.includes(`lang="${lang}" dir="${['fa','ar'].includes(lang)?'rtl':'ltr'}"`),`Language ${url}`);
    const graph=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .flatMap(match=>JSON.parse(match[1])['@graph']??[]);
    const schema=graph.find(item=>item['@type']==='Article');
    assert.equal(schema.inLanguage,lang,url);
    assert.deepEqual(schema.citation,article.i18n[lang].evidence.sources.map(s=>s.url),url);
    assert.equal(graph.find(item=>item['@type']==='FAQPage')?.mainEntity.length,article.i18n[lang].faq.length,url);
    assert.equal(schema.reviewedBy,undefined,url);
    assert(html.includes(`/assets/${article.hero.replace(/\.webp$/,'-720.webp')}`),`Responsive hero ${url}`);
    for(const alternate of langs) assert(html.includes(`hreflang="${alternate}" href="${site.origin}${route(alternate,article.slug)}"`),`Alternate ${url}`);
  }
  const category=read(`dist${route(lang,'family-health')}index.html`);
  assert(/<source[^>]+srcset="[^"]*content\/part-01\/[^"]+-160\.webp/.test(category),'Category thumbnails must offer a small responsive image');
});
