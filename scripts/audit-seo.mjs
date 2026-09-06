import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { languages, pageSlugs } from '../src/pages.mjs';
import { articleBySlug, hubSlugs } from '../src/content-hub.mjs';
import { searchMetadata, metadataLength, metadataOverrides } from '../src/seo-metadata.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const decode = (text) => text.replace(/&(amp|lt|gt|quot|#39);/g,
  (_, entity) => ({ amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'" })[entity]);
const rows = [];
const images = new Map();
const localizationIssues = [];
for (const { code: lang, dir } of languages) {
  for (const slug of [...pageSlugs, ...hubSlugs]) {
    const route = `/${lang === 'en' ? '' : `${lang}/`}${slug ? `${slug}/` : ''}`;
    const html = await readFile(path.join(root, 'dist', route, 'index.html'), 'utf8');
    const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? '');
    const description = decode(html.match(/<meta name="description" content="([^"]*)"/s)?.[1] ?? '');
    const article = articleBySlug.get(slug);
    const localized = article?.i18n[lang];
    const expected = localized ? searchMetadata({ lang, slug,
      title: `${localized.title} | BeMama`, description: localized.description }) : undefined;
    if (article && !localized) localizationIssues.push({ route, issue: 'Missing source translation' });
    if (expected && (title !== expected.title || description !== expected.description)) {
      localizationIssues.push({ route, issue: 'Rendered metadata differs from localized source; rebuild required' });
    }
    if (!html.includes(`<html lang="${lang}" dir="${dir}">`)) localizationIssues.push({ route, issue: 'Wrong language or text direction' });
    for (const [attribute, name, value] of [
      ['property', 'og:title', title], ['property', 'og:description', description],
      ['name', 'twitter:title', title], ['name', 'twitter:description', description]
    ]) {
      const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const actual = decode(html.match(new RegExp(`<meta ${attribute}="${escapedName}" content="([^"]*)"`))?.[1] ?? '');
      if (actual !== value) localizationIssues.push({ route, issue: `${name} does not match localized metadata` });
    }
    const method = expected?.method ?? (metadataOverrides[`${lang}/${slug}`]?.description ? 'editorial' : 'original');
    const metadata = { title, description, method };
    rows.push({ lang, slug, ...metadata, titleLength: metadataLength(metadata.title), descriptionLength: metadataLength(metadata.description) });
    for (const tag of html.matchAll(/<img\b[^>]*>/g)) {
      const src = tag[0].match(/\b(?:data-src|src)="(\/assets\/[^"?]+)(?:\?[^"]*)?"/)?.[1];
      if (src) images.set(src, (images.get(src) ?? 0) + 1);
    }
  }
}
const titleGroups = new Map();
const descriptionGroups = new Map();
for (const row of rows) {
  for (const [groups, key] of [[titleGroups, row.title], [descriptionGroups, row.description]]) {
    groups.set(key, [...(groups.get(key) ?? []), `${row.lang}/${row.slug}`]);
  }
}
const duplicateTitles = [...titleGroups].filter(([, routes]) => routes.length > 1);
const duplicateDescriptions = [...descriptionGroups].filter(([, routes]) => routes.length > 1);
const oversizedImages = [];
for (const [src, references] of images) {
  const { size } = await stat(path.join(root, 'dist', src));
  if (size > 1_000_000) oversizedImages.push({ src, size, references });
}
const issues = rows.filter((row) => row.titleLength < 15 || row.titleLength > 70 || row.descriptionLength < 70 || row.descriptionLength > 160);
const perLanguage = languages.map(({ code: lang, label }) => {
  const localized = rows.filter(row => row.lang === lang);
  return { language: lang, label, pages: localized.length,
    editorialDescriptions: localized.filter(row => row.method === 'editorial').length,
    preservedDescriptions: localized.filter(row => row.method === 'original').length,
    lengthIssues: issues.filter(row => row.lang === lang).length,
    localizationIssues: localizationIssues.filter(issue => issue.route.startsWith(`/${lang}/`) || (lang === 'en' && !languages.some(l => l.code !== 'en' && issue.route.startsWith(`/${l.code}/`)))).length };
});
console.log(JSON.stringify({ pages: rows.length, longTitles: rows.filter(r => r.titleLength > 70).length,
  shortTitles: rows.filter(r => r.titleLength < 15).length,
  longDescriptions: rows.filter(r => r.descriptionLength > 160).length,
  shortDescriptions: rows.filter(r => r.descriptionLength < 70).length,
  perLanguage, oversizedImages, duplicateTitles, duplicateDescriptions, localizationIssues }, null, 2));
if (process.argv.includes('--issues')) {
  for (const row of issues) console.log(JSON.stringify(row));
}
if (process.argv.includes('--samples')) {
  for (const { code: lang } of languages) {
    for (const row of rows.filter(r => r.lang === lang && r.method === 'editorial').slice(0, 3)) console.log(JSON.stringify(row));
  }
}
if (issues.length || oversizedImages.length || duplicateTitles.length || duplicateDescriptions.length || localizationIssues.length) process.exitCode = 1;
