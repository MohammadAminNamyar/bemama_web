import assert from 'node:assert/strict';
import { test } from 'node:test';
import { articles, articleBySlug } from '../src/content-hub.mjs';
import { languages, pageSlugs } from '../src/pages.mjs';
import { categories } from '../src/content-hub.mjs';
import { descriptionsByLanguage, metadataOverrides, metadataLength, searchMetadata, normalizeMetadata, validDescription } from '../src/seo-metadata.mjs';

test('every supported locale has its own editorial description map', () => {
  assert.deepEqual(Object.keys(descriptionsByLanguage).sort(), languages.map(l => l.code).sort());
  for (const [lang, descriptions] of Object.entries(descriptionsByLanguage)) {
    assert.ok(Object.keys(descriptions).length > 0, lang);
    for (const [slug, description] of Object.entries(descriptions)) {
      assert.ok(articleBySlug.has(slug), `${lang}/${slug}: unknown route`);
      assert.ok(validDescription(description), `${lang}/${slug}: description length`);
      assert.equal(description, description.trim(), `${lang}/${slug}: extra whitespace`);
      assert.ok(!description.includes('—'), `${lang}/${slug}: em dash`);
      if (lang !== 'en') assert.notEqual(description, descriptionsByLanguage.en[slug], `${lang}/${slug}: English copy`);
    }
  }
});

for (const { code: lang } of languages) {
  test(`${lang}: every article has translated, valid search metadata`, () => {
    for (const article of articles) {
      const localized = article.i18n[lang];
      assert.ok(localized?.title && localized.description, `${lang}/${article.slug}: missing source translation`);
      const result = searchMetadata({ lang, slug: article.slug, title: `${localized.title} | BeMama`, description: localized.description });
      assert.ok(['original', 'editorial'].includes(result.method));
      assert.ok(metadataLength(result.title) >= 15 && metadataLength(result.title) <= 70, `${lang}/${article.slug}: title length`);
      assert.ok(validDescription(result.description), `${lang}/${article.slug}: description length`);
      const expected = metadataOverrides[`${lang}/${article.slug}`]?.description
        ?? descriptionsByLanguage[lang][article.slug] ?? localized.description;
      assert.equal(result.description, normalizeMetadata(expected), `${lang}/${article.slug}: description truncated or synthesized`);
      if (lang !== 'en') assert.notEqual(result.description, normalizeMetadata(article.i18n.en.description), `${lang}/${article.slug}: English fallback`);
    }
  });
}

test('explicit overrides reference known routes and languages', () => {
  const routes = new Set([...pageSlugs, ...articles.map(a => a.slug), ...categories.map(c => c.slug)]);
  for (const key of Object.keys(metadataOverrides)) {
    const slash = key.indexOf('/');
    assert.ok(descriptionsByLanguage[key.slice(0, slash)], key);
    assert.ok(routes.has(key.slice(slash + 1)), key);
    if (metadataOverrides[key].description) assert.ok(validDescription(metadataOverrides[key].description), `${key}: description length`);
  }
});

test('missing rewrites fail instead of cutting sentences or assembling headings', () => {
  const long = 'This complete opening sentence would previously have been selected as the entire description. '
    + 'The remaining explanation contains important limits and context that must not be silently removed from this example.';
  for (const { code: lang } of languages) {
    for (const description of [long, 'Too short.']) {
      assert.throws(() => searchMetadata({ lang, slug: 'future-page', title: 'A clearly defined future guide | BeMama', description,
        sections: [{ heading: 'A complete heading that could fit the old topic-list fallback' }] }), /editorial rewrite/);
    }
  }
});

test('unsupported languages are never replaced with English', () => {
  assert.throws(() => searchMetadata({ lang: 'xx', slug: '', title: 'Future locale', description: 'Missing' }), /Unsupported SEO language/);
});

test('length budgeting accounts for escaped metadata without changing it', () => {
  assert.equal(metadataLength('A & B'), 'A &amp; B'.length);
  assert.equal(metadataLength("Baby's"), 'Baby&#39;s'.length);
});

test('short-description checks use visible characters, not entity-inflated length', () => {
  assert.equal(validDescription('x'.repeat(99)), false);
  assert.equal(validDescription('x'.repeat(100)), true);
  assert.equal(validDescription('x'.repeat(160)), true);
  assert.equal(validDescription('x'.repeat(161)), false);
  assert.equal(validDescription('x'.repeat(95) + ' &'), false);
  assert.equal(validDescription('x'.repeat(156) + ' &'), false);
  assert.throws(() => searchMetadata({ lang: 'en', slug: 'future-page', title: 'Future article | BeMama', description: 'x'.repeat(99) }), /editorial rewrite/);
});
