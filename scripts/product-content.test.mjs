import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { appArticles } from '../src/articles/about-bemama.mjs';

const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');

test('product-specific bylines do not inherit health-source or medical-review claims', async () => {
  for (const article of appArticles.filter(a => a.i18n.en.byline)) {
    const html = await readFile(new URL(`../dist/${article.slug}/index.html`, import.meta.url), 'utf8');
    const byline = html.match(/<p class="article-byline">([\s\S]*?)<\/p>/)?.[1];
    assert.ok(byline, article.slug);
    assert.match(byline, /rel="author"/);
    assert.match(byline, /by <a /, article.slug);
    assert.doesNotMatch(byline, /health organizations|medically reviewed/i, article.slug);
  }
});

test('article link labels preserve the intended URL and render as escaped text', async () => {
  for (const article of appArticles.filter(a => a.i18n.en.linkLabels)) {
    const html = await readFile(new URL(`../dist/${article.slug}/index.html`, import.meta.url), 'utf8');
    const body = html.match(/<article class="article">([\s\S]*?)<\/article>/)?.[1] ?? '';
    for (const [url, label] of Object.entries(article.i18n.en.linkLabels)) {
      assert.ok(body.includes(`href="${escape(url)}" dir="ltr" rel="noopener">${escape(label)}</a>`), `${article.slug}: ${label}`);
    }
  }
});
