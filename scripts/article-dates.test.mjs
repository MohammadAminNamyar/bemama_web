import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { articleDates, editorialDateIso, formatEditorialDate, evidenceDateLabels } from '../src/article-dates.mjs';
import { articles } from '../src/content-hub.mjs';
import { evidenceForArticle } from '../src/article-evidence.mjs';
import { languages, pageSlugs, site } from '../src/pages.mjs';

test('editorial dates parse strictly without local-time rollover', () => {
  assert.equal(editorialDateIso('August 26, 2026'), '2026-08-26');
  assert.equal(editorialDateIso('2024-02-29'), '2024-02-29');
  assert.equal(editorialDateIso(null), null);
  for (const value of ['', 'not a date', '2026-02-29', '2026-02-30', '2026-13-01',
    '2026-8-5', 'Aug 5, 2026', 'February 30, 2026', '2026-08-05T00:00:00Z']) {
    assert.throws(() => editorialDateIso(value), /editorial date/);
  }
});

test('older evidence cannot replace a newer article revision', () => {
  const dates = articleDates({ updated: 'August 26, 2026' }, 'en', { updatedIso: '2026-08-05' });
  assert.equal(dates.modifiedIso, '2026-08-26');
  assert.equal(dates.modifiedLabel, 'August 26, 2026');
  assert.equal(dates.evidenceIso, '2026-08-05');
});

test('newer evidence is a real page update, but remains separately identified', () => {
  const dates = articleDates({ updated: 'July 1, 2026' }, 'en', { updatedIso: '2026-09-05' });
  assert.equal(dates.articleIso, '2026-07-01');
  assert.equal(dates.modifiedIso, '2026-09-05');
  assert.equal(dates.evidenceIso, '2026-09-05');
});

test('independent locale revision takes precedence over the shared article date', () => {
  const article = { updated: 'September 5, 2026', i18n: {
    es: { updatedIso: '2026-08-28' }, fr: { updatedIso: '2026-09-06' }
  } };
  assert.equal(articleDates(article, 'es', { updatedIso: '2026-08-05' }).modifiedIso, '2026-08-28');
  assert.equal(articleDates(article, 'fr').modifiedIso, '2026-09-06');
  assert.equal(articleDates(article, 'en').modifiedIso, '2026-09-05');
  assert.throws(() => articleDates(article, 'xx'), /Unsupported/);
});

test('missing dates stay missing, never defaulting to the build date', () => {
  assert.deepEqual(articleDates({}, 'en'), {
    articleIso: null, evidenceIso: null, modifiedIso: null,
    modifiedLabel: null, evidenceLabel: null
  });
});

const routeFor = (lang, slug) => `/${lang === 'en' ? '' : `${lang}/`}${slug}/`;
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');

for (const { code: lang } of languages) {
  test(`${lang}: all article/tool dates agree with recorded revisions and JSON-LD`, async () => {
    let fixedOldEvidenceDates = 0;
    for (const article of articles) {
      const evidence = article.kind === 'tool' ? null : evidenceForArticle(article.slug, lang);
      const dates = articleDates(article, lang, evidence);
      assert.ok(dates.modifiedIso <= new Date().toISOString().slice(0, 10), article.slug);
      const route = routeFor(lang, article.slug);
      const html = await readFile(new URL(`../dist${route}index.html`, import.meta.url), 'utf8');
      const visible = html.match(/<p class="article-meta">[^<]*<time datetime="([^"]+)">([^<]+)<\/time><\/p>/);
      assert.ok(visible, `${route}: missing visible date`);
      assert.equal(visible[1], dates.modifiedIso, route);
      assert.equal(visible[2], escape(formatEditorialDate(lang, dates.modifiedIso)), route);
      const entities = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
        .flatMap(match => { const data = JSON.parse(match[1]); return data['@graph'] ?? [data]; });
      const entity = entities.find(item => item['@type'] === (article.kind === 'tool' ? 'WebApplication' : 'Article'));
      assert.ok(entity, `${route}: missing structured data`);
      assert.equal(entity.dateModified, dates.modifiedIso, route);
      if (dates.evidenceIso) {
        assert.ok(html.includes(`${escape(evidenceDateLabels[lang])}: <time datetime="${dates.evidenceIso}">${escape(dates.evidenceLabel)}</time>`), route);
        if (dates.articleIso > dates.evidenceIso) fixedOldEvidenceDates++;
      }
    }
    assert.equal(fixedOldEvidenceDates, 92, `${lang}: cover every reported older-evidence regression`);
  });

  test(`${lang}: every policy support address is protected and directly usable without JavaScript`, async () => {
    let occurrences = 0;
    let protectedPages = 0;
    const protectedEmail = `<!--email_off--><a href="mailto:${site.supportEmail}" dir="ltr">${site.supportEmail}</a><!--/email_off-->`;
    for (const slug of pageSlugs.filter(Boolean)) {
      const route = routeFor(lang, slug);
      const html = await readFile(new URL(`../dist${route}index.html`, import.meta.url), 'utf8');
      const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
      const prose = body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
      const count = prose.split(protectedEmail).length - 1;
      occurrences += count;
      if (count) protectedPages++;
      assert.ok(!prose.replaceAll(protectedEmail, '').includes(site.supportEmail), `${route}: unprotected support address`);
      assert.ok(!prose.includes('/cdn-cgi/l/email-protection'), route);
      assert.ok(!prose.includes('data-cfemail'), route);
    }
    assert.equal(occurrences, 7, `${lang}: all existing support mentions retained`);
    assert.equal(protectedPages, ['en', 'fa'].includes(lang) ? 4 : 6);
  });
}
