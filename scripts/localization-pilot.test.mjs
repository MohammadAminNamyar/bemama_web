import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { articleBySlug } from '../src/content-hub.mjs';
import { searchMetadata } from '../src/seo-metadata.mjs';

const languages = ['en', 'fa', 'ar', 'fr', 'tr', 'es', 'pt'];
const guide = articleBySlug.get('about-bemama/daily-journey');
const calculator = articleBySlug.get('tools/due-date-calculator');
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');

test('localized product guides keep source sections, images and same-language destinations', async () => {
  for (const lang of languages.slice(1)) {
    const data = guide.i18n[lang];
    assert.equal(data.sections.length, guide.i18n.en.sections.length, lang);
    assert.equal(data.faq.length, guide.i18n.en.faq.length, lang);
    assert.equal(data.takeaways.length, guide.i18n.en.takeaways.length, lang);
    assert.ok(data.byline.includes('{name}'), lang);
    const html = await readFile(new URL(`../dist/${lang}/${guide.slug}/index.html`, import.meta.url), 'utf8');
    assert.ok(html.includes(escape(data.title)), lang);
    const suffix = data.byline.split('{name}')[1];
    if (/^\s/.test(suffix)) {
      assert.ok(html.includes(`</a> ${escape(suffix.trim())}`), `${lang}: author-name spacing`);
    }
    for (const [index, section] of data.sections.entries()) {
      assert.equal(section.image, guide.i18n.en.sections[index].image, `${lang}: image ${index}`);
    }
    for (const [url, label] of Object.entries(data.linkLabels)) {
      assert.ok(html.includes(`href="${escape(url)}" dir="ltr" rel="noopener">${escape(label)}</a>`), `${lang}: ${label}`);
      const target = new URL(url);
      if (target.hostname !== 'bemamas.com') continue;
      assert.ok(target.pathname.startsWith(`/${lang}/`), `${lang}: ${url}`);
      await readFile(new URL(`../dist${target.pathname}index.html`, import.meta.url));
    }
  }
});

test('calculator localization preserves input methods and exposes its dating convention', async () => {
  for (const lang of languages) {
    const data = calculator.i18n[lang];
    assert.deepEqual(data.tool.fields.map(field => field.name), ['lastPeriod', 'cycleLength']);
    assert.deepEqual(data.tool.dueDateFields.map(field => field.name), ['dueDate']);
    assert.equal(data.tool.combined, true);
    assert.match(data.tool.ui.knownDueMethod, /40|۴۰|٤٠/, lang);
    assert.ok(data.tool.ui.methodHelp.length > 100, lang);
    const prefix = lang === 'en' ? '' : `${lang}/`;
    const html = await readFile(new URL(`../dist/${prefix}${calculator.slug}/index.html`, import.meta.url), 'utf8');
    const config = JSON.parse(html.match(/<script[^>]*data-tool-config[^>]*>([\s\S]*?)<\/script>/)[1]);
    assert.equal(config.ui.methodHelp, data.tool.ui.methodHelp, lang);
    const meta = searchMetadata({lang, slug: calculator.slug, title: data.title, description: data.description});
    assert.equal(meta.description, data.description, lang);
  }
  assert.match(calculator.i18n.fr.tool.ui.pregnancyAge, /\(SA\)/);
  assert.match(calculator.i18n.fr.tool.ui.methodHelp, /41 SA/);
  assert.match(calculator.i18n.fa.tool.fields[0].label, /میلادی/);
  assert.match(calculator.i18n.ar.tool.fields[0].label, /ميلادي/);
});
