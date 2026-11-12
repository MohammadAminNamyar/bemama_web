import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Frozen 69-article release. Run after build; BEMAMA_APP_ROOT may point to an isolated built checkout.
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
const manifest = json('src/articles/part-03/manifest.json');
const fixture = JSON.parse(fs.readFileSync(new URL('./part3-membership-fixture.json', import.meta.url)));
const membership = fixture.membership;
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

test('release is an explicit unique subset of the immutable Part 3 membership', () => {
  assert.equal(manifest.part, 3);
  assert.equal(manifest.readinessReceiptSha256, fixture.releaseSelectionSha256);
  assert.equal(manifest.release, 'ready-069-2026-11-12');
  assert.equal(manifest.membershipCount, 200);
  assert.deepEqual(manifest.languages, langs);
  assert.equal(membership.length, 200);
  assert.equal(new Set(membership).size, 200);
  assert(rows.length === 69);
  assert.equal(manifest.articleCount, 69);
  assert.equal(manifest.localizedArticleCount, 483);
  assert.deepEqual(rows.map(r => String(r.sourceId)), fixture.approvedIds, 'Exact frozen release membership and order');
  assert.equal(new Set(rows.map(r => String(r.sourceId))).size, rows.length);
  assert.deepEqual(fs.readdirSync(path.join(root, 'src/articles/part-03')).filter(f => f.endsWith('.json')).sort(),
    [...fixture.approvedIds.map(id => id + '.json'), 'manifest.json'].sort(), 'No unfinished wrappers admitted');
  assert.equal(new Set(rows.map(r => r.slug)).size, rows.length);
  const existing = new Set(Object.keys(manifest.existingArticles));
  assert.equal(existing.size, 1175);
  for (const row of rows) {
    assert(membership.includes(String(row.sourceId)), `Nonmember ${row.sourceId}`);
    const frozen = fixture.approved[String(row.sourceId)];
    assert.equal(row.slug, frozen.slug);
    assert.equal(row.file, `src/articles/part-03/${row.sourceId}.json`);
    assert.equal(row.draftSha256, frozen.candidateSha256, 'Frozen candidate bytes');
    assert.equal(row.fileSha256, frozen.candidateSha256, 'Wrapper must be the exact approved candidate');
    assert.equal(row.reviewSha256, frozen.reviewSha256, 'Frozen independent final review');
    assert.equal(row.payloadSha256, frozen.payloadSha256, 'Frozen article payload');
    assert.equal(hashObject(row.seo), frozen.seoSha256, 'Frozen SEO');
    assert.equal(row.sourceHash, frozen.sourceHash);
    assert.equal(row.englishHash, frozen.englishHash);
    assert(!existing.has(row.slug), `Existing route overwritten: ${row.slug}`);
    for (const field of ['payloadSha256', 'fileSha256', 'draftSha256', 'sourceHash'])
      assert.match(row[field], /^[a-f\d]{64}$/, `${row.sourceId}/${field}`);
    assert.equal(sha(read(row.file)), row.fileSha256, `Wrapper bytes ${row.sourceId}`);
    const wrapper = json(row.file);
    assert.equal(String(wrapper.sourceId), String(row.sourceId));
    assert.deepEqual(wrapper.article, articleBySlug.get(row.slug), `Wrapper registration ${row.sourceId}`);
  }
});

test('all 1175 existing article objects and Part 1 snapshot remain unchanged', () => {
  assert.equal(articles.length, 1175 + rows.length);
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
    .map(suffix => `assets/content/part-03/${row.sourceId}${suffix}.webp`)).sort();
  assert.deepEqual(Object.keys(manifest.assets).sort(), expectedPaths);
  assert.deepEqual(manifest.assets, fixture.assets, 'Frozen approved image hashes');
  for (const folder of ['public', 'dist'])
    assert.deepEqual(fs.readdirSync(path.join(root, folder, 'assets/content/part-03')).sort(),
      expectedPaths.map(p => path.basename(p)).sort(), 'No extra release assets');
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
    assert.equal([...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)].length, 1, 'Only one canonical');
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
    const alternateTags = [...head.matchAll(/<link\b[^>]*hreflang="[^"]+"[^>]*>/g)].map(m => attributes(m[0]));
    assert.equal(alternateTags.length, 8);
    assert.equal(new Set(alternateTags.map(t => t.hreflang)).size, 8);
    const passages = [body.title, body.intro, ...body.sections.flatMap(s => [s.heading, ...s.paragraphs]),
      ...body.takeaways, ...body.faq.flatMap(f => [f.q, f.a]), ...body.evidence.guidance,
      body.evidence.bemama, body.evidence.safety,
      ...body.evidence.sources.flatMap(s => [s.organization, s.title])];
    for (const passage of passages) assert(visible.includes(expectedText(passage)), `Missing complete passage ${url}: ${passage.slice(0, 90)}`);
    const hero = [...html.matchAll(/<img\b[^>]*>/g)].map(m => attributes(m[0]))
      .find(t => t.src?.split('?')[0] === `/assets/${article.hero}`);
    assert(hero, `Missing hero ${url}`);
    assert.equal(hero.alt, editorial(article.heroAlt[lang]), `Hero alt ${url}`);
    const heroFigure = html.match(/<figure class="article-hero">([\s\S]*?)<\/figure>/)?.[1];
    assert(heroFigure, `Hero figure ${url}`);
    const heroSource = [...heroFigure.matchAll(/<source\b[^>]*>/g)].map(m => attributes(m[0])).find(s => s.type === 'image/webp');
    assert(heroSource, `Responsive WebP source ${url}`);
    const srcset = heroSource.srcset.split(',').map(s => s.trim().split(/\s+/));
    assert.deepEqual(srcset.map(s => s[1]), ['160w', '320w', '480w', '720w', '1440w']);
    for (const [assetUrl, width] of srcset) {
      const parsed = new URL(assetUrl, site.origin);
      const expectedAsset = '/assets/' + article.hero.replace(/\.webp$/, width === '1440w' ? '.webp' : '-' + width.slice(0, -1) + '.webp');
      assert.equal(parsed.pathname, expectedAsset);
      assert.equal(parsed.searchParams.get('v'), manifest.assets[expectedAsset.slice(1)].slice(0, 16), `Responsive cache hash ${url}`);
    }
    assert.equal(heroSource.sizes, article.heroResponsive.sizes);
    assert.equal(hero.width, '1440');
    assert.equal(hero.height, '640');
    assert.equal(hero.loading, 'lazy');
    assert.equal(hero.decoding, 'async');
    assert.equal(count(html, 'class="article-hero"'), 1);
    const byline = html.match(/<p class="article-byline">([\s\S]*?)<\/p>/)?.[1];
    assert(byline?.includes('rel="author"') && textOf(byline).includes('BeMama Authors team'), `Visible team author ${url}`);
    assert(byline.includes(`href="${route(lang, 'editorial')}"`));
    const referenceSection = html.match(/<section class="evidence-sources"[\s\S]*?<\/section>/)?.[0];
    for (const ref of body.evidence.sources) {
      const anchors = [...referenceSection.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)];
      assert(anchors.some(a => attributes(a[1]).href === ref.url && textOf(a[2]).includes(expectedText(ref.title))), `Rendered reference ${url}: ${ref.title}`);
    }
    const graph = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .flatMap(m => JSON.parse(m[1])['@graph'] ?? []);
    const schema = graph.find(item => item['@type'] === 'Article');
    assert(schema, `Article schema ${url}`);
    assert.equal(schema.inLanguage, lang);
    assert.equal(schema.mainEntityOfPage, canonical);
    assert.equal(schema.image, site.origin + '/assets/' + article.hero);
    assert.equal(schema.author.url, site.origin + route(lang, 'editorial'));
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

// Local links must target an existing generated route; paused Part 3 drafts cannot leak into release prose.
test('all internal links in the new rendered article bodies resolve', () => {
  for (const row of rows) for (const lang of langs) {
    const html = read(`dist${route(lang, row.slug)}index.html`).toString();
    const content = html.match(/<article class="article">([\s\S]*?)<\/article>/)?.[1];
    assert(content);
    for (const match of content.matchAll(/<a\b[^>]*>/g)) {
      const href = attributes(match[0]).href;
      if (!href || /^(?:mailto:|tel:|#)/.test(href)) continue;
      const target = new URL(href, site.origin + route(lang, row.slug));
      if (target.origin !== site.origin) continue;
      let targetFile = path.join(root, 'dist', decodeURIComponent(target.pathname));
      if (target.pathname.endsWith('/') || (fs.existsSync(targetFile) && fs.statSync(targetFile).isDirectory()))
        targetFile = path.join(targetFile, 'index.html');
      assert(fs.existsSync(targetFile) && fs.statSync(targetFile).isFile(), `Broken internal link ${row.sourceId}/${lang}: ${href}`);
    }
  }
});
