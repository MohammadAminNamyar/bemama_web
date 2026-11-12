import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Copy this file and part2-membership-fixture.json to app/scripts. For a prep-only
// run, set BEMAMA_APP_ROOT to the application directory after integration/build.
const root = process.env.BEMAMA_APP_ROOT || fileURLToPath(new URL('../', import.meta.url));
const read = relative => fs.readFileSync(path.join(root, relative));
const json = relative => JSON.parse(read(relative));
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const stable = value => Array.isArray(value) ? value.map(stable) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])])) : value;
const hashObject = value => sha(JSON.stringify(stable(value)));
const load = relative => import(pathToFileURL(path.join(root, relative)).href);
const { articles, articleBySlug, categories, articlesInCategory } = await load('src/content-hub.mjs');
const { evidenceForArticle } = await load('src/article-evidence.mjs');
const { searchMetadata, normalizeMetadata, metadataLength, validDescription } = await load('src/seo-metadata.mjs');
const { articleDates } = await load('src/article-dates.mjs');
const { site } = await load('src/pages.mjs');
const manifest = json('src/articles/part-02/manifest.json');
const membership = JSON.parse(fs.readFileSync(new URL('./part2-membership-fixture.json', import.meta.url)));
const langs = ['en', 'fa', 'ar', 'fr', 'tr', 'es', 'pt'];
const route = (lang, slug) => `/${lang === 'en' ? '' : lang + '/'}${slug}/`;
const editorial = value => String(value).replace(/\s*—\s*([^—.!?؟\n]{1,180}?)\s*—\s*/g, ' ($1) ')
  .replace(/\s*—\s*/g, ': ').replace(/[ \t]{2,}/g, ' ').trim();
const decode = value => value.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&#x([a-f\d]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replaceAll('&quot;', '"').replaceAll('&#39;', "'").replaceAll('&apos;', "'")
  .replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&amp;', '&');
const textOf = html => decode(html.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
const expectedText = text => editorial(text).replace(/\s+/g, ' ').trim();
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m => [m[1], decode(m[2])]));
const count = (text, target) => text.split(target).length - 1;
const rows = manifest.articles;

test('release is an explicit unique subset of the immutable Part 2 membership', () => {
  assert.equal(manifest.part, 2);
  assert.equal(manifest.membershipCount, 697);
  assert.deepEqual(manifest.languages, langs);
  assert.equal(membership.length, 697);
  assert.equal(new Set(membership).size, 697);
  assert(rows.length > 0 && rows.length <= 697);
  assert.equal(new Set(rows.map(r => String(r.sourceId))).size, rows.length);
  assert.equal(new Set(rows.map(r => r.slug)).size, rows.length);
  const existing = new Set(Object.keys(manifest.existingArticles));
  assert.equal(existing.size, 853);
  for (const row of rows) {
    assert(membership.includes(String(row.sourceId)), `Nonmember ${row.sourceId}`);
    assert(!existing.has(row.slug), `Existing route overwritten: ${row.slug}`);
    for (const field of ['payloadSha256', 'fileSha256', 'draftSha256', 'sourceHash'])
      assert.match(row[field], /^[a-f\d]{64}$/, `${row.sourceId}/${field}`);
    assert.equal(sha(read(row.file)), row.fileSha256, `Wrapper bytes ${row.sourceId}`);
    const wrapper = json(row.file);
    assert.equal(String(wrapper.sourceId), String(row.sourceId));
    assert.deepEqual(wrapper.article, articleBySlug.get(row.slug), `Wrapper registration ${row.sourceId}`);
  }
});

test('all 853 existing article objects and Part 1 snapshot remain unchanged', () => {
  assert.equal(articles.length, 853 + rows.length + json('src/articles/part-03/manifest.json').articleCount);
  assert.equal(new Set(articles.map(a => a.slug)).size, articles.length);
  for (const [slug, hash] of Object.entries(manifest.existingArticles))
    assert.equal(sha(JSON.stringify(articleBySlug.get(slug))), hash, `Existing article changed: ${slug}`);
  assert.equal(sha(read('src/articles/part-01/articles.json')),
    '43eca155a697a2318cdc60e071d48f2f455cac3aaf9d6d2b2aa773de1fcda808');
  for (const [file, hash] of Object.entries(manifest.preservedFiles ?? {}))
    assert.equal(sha(read(file)), hash, `Preserved file changed: ${file}`);
});

test('registered payloads, full languages, evidence and SEO match the reviewed release', () => {
  for (const row of rows) {
    const article = articleBySlug.get(row.slug);
    assert(article, row.slug);
    assert.equal(hashObject(article), row.payloadSha256, `Registered payload ${row.slug}`);
    assert(categories.some(c => c.id === article.category), `Unknown category ${article.category}`);
    assert(articlesInCategory(article.category).some(a => a.slug === row.slug), `Category discovery ${row.slug}`);
    assert.equal(article.catalogHidden, undefined, `Hidden ready article ${row.slug}`);
    assert.deepEqual(Object.keys(article.i18n).sort(), [...langs].sort());
    for (const lang of langs) {
      const body = article.i18n[lang];
      assert(body.title && body.intro && body.sections.length && body.faq.length && body.takeaways.length);
      assert.equal(body.sections.length, article.i18n.en.sections.length);
      assert.equal(body.faq.length, article.i18n.en.faq.length);
      assert.equal(body.evidence.sources.length, article.i18n.en.evidence.sources.length);
      assert.deepEqual(evidenceForArticle(row.slug, lang).sources, body.evidence.sources);
      assert(article.heroAlt[lang]?.trim(), `Missing literal alt ${lang}/${row.slug}`);
      assert(row.seo[lang]?.title && row.seo[lang]?.description);
      assert(validDescription(row.seo[lang].description), `SEO description ${lang}/${row.slug}`);
      assert(metadataLength(row.seo[lang].title) >= 15 && metadataLength(row.seo[lang].title) <= 70);
      const meta = searchMetadata({ lang, slug: row.slug, title: `${body.title} | BeMama`, description: body.description });
      assert.equal(meta.title, normalizeMetadata(row.seo[lang].title));
      assert.equal(meta.description, normalizeMetadata(row.seo[lang].description));
      for (const ref of body.evidence.sources) assert.match(ref.url, /^https?:\/\//);
      if (lang !== 'en') assert.notEqual(body.intro, article.i18n.en.intro, `English fallback ${lang}/${row.slug}`);
    }
  }
});

test('all five reviewed exports per selected article retain exact public and built bytes', () => {
  const expectedPaths = rows.flatMap(row => ['', '-160', '-320', '-480', '-720']
    .map(suffix => `assets/content/part-02/${row.sourceId}${suffix}.webp`)).sort();
  assert.deepEqual(Object.keys(manifest.assets).sort(), expectedPaths);
  for (const [file, hash] of Object.entries(manifest.assets)) {
    assert.match(hash, /^[a-f\d]{64}$/);
    assert.equal(sha(read(`public/${file}`)), hash, `Public image ${file}`);
    assert.equal(sha(read(`dist/${file}`)), hash, `Built image ${file}`);
  }
});

for (const lang of langs) test(`${lang}: every ready article renders its full reviewed body and discovery metadata`, () => {
  const sitemap = read(`dist/sitemap-${lang}.xml`).toString();
  const feed = read(`dist/rss-${lang}.xml`).toString();
  const search = json(`dist/search-index-${lang}.json`);
  const categoryCache = new Map();
  for (const row of rows) {
    const article = articleBySlug.get(row.slug), body = article.i18n[lang];
    const url = route(lang, row.slug), canonical = site.origin + url;
    const html = read(`dist${url}index.html`).toString();
    const visible = textOf(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, ''));
    assert(html.includes(`lang="${lang}" dir="${['fa', 'ar'].includes(lang) ? 'rtl' : 'ltr'}"`), url);
    assert.equal(count(html, `<link rel="canonical" href="${canonical}"`), 1, url);
    const head = html.slice(0, html.indexOf('</head>'));
    const tags = [...head.matchAll(/<meta\b[^>]*>/g)].map(m => attributes(m[0]));
    const meta = searchMetadata({ lang, slug: row.slug, title: `${body.title} | BeMama`, description: body.description });
    assert.equal(decode(head.match(/<title>([\s\S]*?)<\/title>/)[1]), meta.title, url);
    assert.equal(tags.find(t => t.name === 'description')?.content, meta.description, url);
    assert.equal(tags.find(t => t.property === 'og:title')?.content, meta.title, url);
    assert.equal(tags.find(t => t.property === 'og:description')?.content, meta.description, url);
    assert.equal(tags.find(t => t.property === 'og:image')?.content, `${site.origin}/assets/${article.hero}`, url);
    assert.equal(tags.find(t => t.name === 'twitter:title')?.content, meta.title, url);
    assert.equal(tags.find(t => t.name === 'twitter:description')?.content, meta.description, url);
    for (const alternate of langs)
      assert(html.includes(`hreflang="${alternate}" href="${site.origin}${route(alternate, row.slug)}"`), `Alternate ${url}`);
    assert(html.includes(`hreflang="x-default" href="${site.origin}${route('en', row.slug)}"`));
    const passages = [body.title, body.intro, ...body.sections.flatMap(s => [s.heading, ...s.paragraphs]),
      ...body.takeaways, ...body.faq.flatMap(f => [f.q, f.a]), ...body.evidence.guidance,
      body.evidence.bemama, body.evidence.safety];
    for (const passage of passages) assert(visible.includes(expectedText(passage)), `Missing complete passage ${url}: ${passage.slice(0, 90)}`);
    const hero = [...html.matchAll(/<img\b[^>]*>/g)].map(m => attributes(m[0]))
      .find(t => t.src?.split('?')[0] === `/assets/${article.hero}`);
    assert(hero, `Missing hero ${url}`);
    assert.equal(hero.alt, editorial(article.heroAlt[lang]), `Hero alt ${url}`);
    assert(html.includes(`/assets/${article.hero.replace(/\.webp$/, '-720.webp')}`));
    const graph = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .flatMap(m => JSON.parse(m[1])['@graph'] ?? []);
    const schema = graph.find(item => item['@type'] === 'Article');
    assert(schema, `Article schema ${url}`);
    assert.equal(schema.inLanguage, lang);
    assert.equal(schema.headline, editorial(body.title));
    assert.equal(schema.author['@type'], 'Organization');
    assert.equal(schema.author.name, 'BeMama Authors team');
    assert.equal(schema.reviewedBy, undefined);
    assert.equal(schema.datePublished, undefined);
    assert.equal(schema.dateModified, articleDates(article, lang, body.evidence).modifiedIso);
    assert(schema.dateModified && schema.dateModified <= new Date().toISOString().slice(0, 10));
    assert(html.includes(`<time datetime="${schema.dateModified}">`), `Visible real date ${url}`);
    assert.deepEqual(schema.citation, body.evidence.sources.map(s => editorial(s.url)));
    const faqs = graph.find(item => item['@type'] === 'FAQPage')?.mainEntity;
    assert.deepEqual(faqs?.map(f => [f.name, f.acceptedAnswer.text]), body.faq.map(f => [editorial(f.q), editorial(f.a)]));
    assert.equal(count(sitemap, `<loc>${canonical}</loc>`), 1, `Sitemap ${url}`);
    assert.equal(count(feed, `<guid isPermaLink="true">${canonical}</guid>`), 1, `RSS ${url}`);
    const feedItem = [...feed.matchAll(/<item>([\s\S]*?)<\/item>/g)]
      .find(m => m[1].includes(`<guid isPermaLink="true">${canonical}</guid>`))?.[1];
    const feedDate = article.updated ?? articleDates(article, lang, body.evidence).modifiedIso;
    const expectedFeedDate = new Date(/^\d{4}-\d{2}-\d{2}$/.test(feedDate)
      ? `${feedDate}T12:00:00Z` : `${feedDate} 12:00:00 UTC`).toUTCString();
    assert(feedItem?.includes(`<pubDate>${expectedFeedDate}</pubDate>`), `Recorded RSS date ${url}`);
    const entries = search.filter(entry => entry.url === url);
    assert.equal(entries.length, 1, `Search ${url}`);
    assert.equal(entries[0].title, editorial(body.title));
    assert.equal(entries[0].description, editorial(body.description));
    const searchExpected = [body.intro, ...body.sections.flatMap(s => [s.heading, ...s.paragraphs]),
      ...body.takeaways, ...body.faq.flatMap(f => [f.q, f.a])].map(s => s.trim()).join(' ').replace(/\s+/g, ' ');
    assert(entries[0].body.includes(editorial(searchExpected)), `Complete search text ${url}`);
    const category = categories.find(c => c.id === article.category);
    if (!categoryCache.has(category.slug)) categoryCache.set(category.slug, read(`dist${route(lang, category.slug)}index.html`).toString());
    assert(categoryCache.get(category.slug).includes(`href="${url}"`), `Category listing ${url}`);
  }
});
