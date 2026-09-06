import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { languages, pageSlugs, site } from '../src/pages.mjs';
import { articleBySlug, articles, hubSlugs } from '../src/content-hub.mjs';
import { articleEvidence, evidenceForArticle } from '../src/article-evidence.mjs';
import { evidenceUi } from '../src/article-evidence-i18n.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const forbiddenClaims = [
  'HIPAA compliant',
  'GDPR compliant',
  'PIPEDA compliant',
  'replaces your clinician',
  'always accurate',
  'end-to-end encrypted',
  'end to end encrypted',
  'end-to-end encryption',
  'end to end encryption',
  'E2EE',
  'nobody can read',
  'even BeMama cannot access',
  'private forever',
  'not a claim of GDPR',
  'not a claim of PIPEDA',
  'not a claim of HIPAA',
  'practical product draft',
  'reviewed by qualified legal counsel',
  'prepared for future subscription review',
  'must be finalized before paid launch',
  'until reviewed translations',
  'until legal review',
  'reviewed translations are available',
  'MinIO',
  'OpenArt direction',
  'movie is approved',
  'fake app UI',
  'demo screen recordings',
  'ready for the web',
  'web teaser'
];

const requiredRoutes = [];
const routeMetadata = new Map();
for (const language of languages) {
  for (const slug of [...pageSlugs, ...hubSlugs]) {
    const route = localizedPath(language.code, slug);
    requiredRoutes.push(route);
    routeMetadata.set(route, { language, slug });
  }
}

const healthCategories = new Set(['ttc', 'pregnancy', 'newborn', 'child']);
const healthArticles = articles.filter((article) => healthCategories.has(article.category));
for (const article of healthArticles) {
  if (!articleEvidence[article.slug]) {
    throw new Error(`English health article is missing evidence: ${article.slug}`);
  }
}

for (const [slug, evidence] of Object.entries(articleEvidence)) {
  if (!articleBySlug.has(slug)) {
    throw new Error(`Evidence references an unknown article: ${slug}`);
  }
  if (!evidence.updated || !/^\d{4}-\d{2}-\d{2}$/.test(evidence.updatedIso || '')) {
    throw new Error(`Evidence is missing a valid update date: ${slug}`);
  }
  if (evidence.guidance?.length < 2 || !evidence.bemama || !evidence.safety || !evidence.sources?.length) {
    throw new Error(`Evidence content is incomplete: ${slug}`);
  }
  for (const source of evidence.sources) {
    const sourceUrl = new URL(source.url);
    if (sourceUrl.protocol !== 'https:' || !source.organization || !source.title) {
      throw new Error(`Evidence source is incomplete or insecure: ${slug}`);
    }
  }
}

for (const article of healthArticles) {
  for (const language of languages) {
    const evidence = evidenceForArticle(article.slug, language.code);
    const expectedLabels = evidenceUi[language.code];
    if (!evidence || evidence.guidance?.length < 2 || !evidence.bemama || !evidence.safety || !evidence.sources?.length) {
      throw new Error(`Localized evidence is incomplete: ${language.code}/${article.slug}`);
    }
    if (!expectedLabels || evidence.labels?.recommendationTitle !== expectedLabels.recommendationTitle) {
      throw new Error(`Localized evidence labels are incomplete: ${language.code}/${article.slug}`);
    }
  }
}

for (const route of requiredRoutes) {
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html');
  await access(file);
  const html = await readFile(file, 'utf8');
  const { language, slug } = routeMetadata.get(route);
  if (!html.includes(`<html lang="${language.code}" dir="${language.dir}">`)) {
    throw new Error(`Localized page has the wrong html lang or direction: ${route}`);
  }
  if (!html.includes('<meta name="viewport" content="width=device-width, initial-scale=1.0" />')) {
    throw new Error(`Localized page is missing the mobile viewport: ${route}`);
  }
  if ((html.match(/<h1\b/g) ?? []).length !== 1) {
    throw new Error(`Localized page must have exactly one H1: ${route}`);
  }
  if (!html.includes(`<link rel="canonical" href="${site.origin}${route}" />`)) {
    throw new Error(`Localized page has the wrong canonical URL: ${route}`);
  }
  for (const alternateLanguage of languages) {
    const alternateRoute = localizedPath(alternateLanguage.code, slug);
    const alternate = `<link rel="alternate" hreflang="${alternateLanguage.code}" href="${site.origin}${alternateRoute}" />`;
    if (!html.includes(alternate)) {
      throw new Error(`Localized page is missing hreflang ${alternateLanguage.code}: ${route}`);
    }
  }
  const defaultRoute = localizedPath('en', slug);
  if (!html.includes(`<link rel="alternate" hreflang="x-default" href="${site.origin}${defaultRoute}" />`)) {
    throw new Error(`Localized page is missing its x-default hreflang: ${route}`);
  }
}

const htmlFiles = await collectHtml(dist);
const knownRoutes = new Set(requiredRoutes);

const homeHtml = await readFile(path.join(dist, 'index.html'), 'utf8');
const mainCss = await readFile(path.join(dist, 'assets', 'styles.css'), 'utf8');
if (!homeHtml.includes('<link rel="stylesheet" href="/assets/styles.css?v=')) {
  throw new Error('Homepage must load the main stylesheet before first paint.');
}
if (homeHtml.includes('rel="preload" as="style"') || homeHtml.includes("this.rel='stylesheet'")) {
  throw new Error('Homepage must not use the flash-of-unstyled-content stylesheet preload pattern.');
}
if (homeHtml.includes('/assets/care-tools.js')) {
  throw new Error('Homepage must not load the tool-only JavaScript bundle.');
}
if (!mainCss.includes('--hero-carousel-start-delay:6s')) {
  throw new Error('Homepage carousel must keep its initial visual state stable during the performance window.');
}
if (!homeHtml.includes("getPropertyValue('--hero-carousel-start-delay')")) {
  throw new Error('Deferred carousel media must use the CSS startup delay as its timing source.');
}
if (/<video\b[^>]*\sposter=/i.test(homeHtml) || !homeHtml.includes('video[data-poster]')) {
  throw new Error('Below-fold video posters must be loaded near the viewport instead of during initial navigation.');
}
for (const expectedAsset of [
  'hero-carousel/pregnancy-rest-640.avif',
  'bemama_logo_mark-96.webp',
  'hero_planning-160.webp',
  'app_daily_plan-280.avif',
  'tour/daily-home.avif',
  'videos/bemama-care-story-01-poster-640.webp',
  'videos/bemama-care-story-02-poster-360.webp'
]) {
  if (!homeHtml.includes(expectedAsset)) {
    throw new Error(`Homepage is missing optimized media: ${expectedAsset}`);
  }
}

const toolHtml = await readFile(path.join(dist, 'tools', 'due-date-calculator', 'index.html'), 'utf8');
if (!toolHtml.includes('/assets/care-tools.js')) {
  throw new Error('Interactive tool pages must load the care-tools bundle.');
}

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const normalizedHtml = html.toLowerCase();
  if (/href="\/(?:[a-z]{2}\/)?explore\/\?[^"#]*(?:area|step)=/i.test(html)) {
    throw new Error(`Crawlable product-tour state found in ${file}; use a URL fragment instead.`);
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      throw new Error(`Invalid JSON-LD in ${file}: ${error.message}`);
    }
  }
  for (const claim of forbiddenClaims) {
    const found = claim === 'MinIO'
      ? /\bminio\b/i.test(html)
      : normalizedHtml.includes(claim.toLowerCase());
    if (found) {
      throw new Error(`Forbidden launch claim found in ${file}: ${claim}`);
    }
  }
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (href.startsWith('/') && !href.includes('.') && !knownRoutes.has(stripQuery(href))) {
      throw new Error(`Broken internal link in ${file}: ${href}`);
    }
  }
}

const seoTargets = [
  ['trying-to-conceive/early-pregnancy-signs', 'early pregnancy signs before a missed period'],
  ['trying-to-conceive/fertile-window-timing', 'when are the best times to conceive'],
  ['trying-to-conceive/basal-body-temperature', 'basal temp and ovulation'],
  ['pregnancy/third-trimester', 'when do you enter the third trimester'],
  ['baby-and-child/toddler-tantrums', 'baby and toddler tantrums']
];
for (const [slug, phrase] of seoTargets) {
  await validateSeoTarget(path.join(dist, slug, 'index.html'), phrase);
}
await validateSeoTarget(
  path.join(dist, 'es', 'pregnancy', 'second-trimester', 'index.html'),
  'segundo trimestre de embarazo'
);

for (const slug of Object.keys(articleEvidence)) {
  for (const language of languages) {
    const localizedFile = language.code === 'en'
      ? path.join(dist, slug, 'index.html')
      : path.join(dist, language.code, slug, 'index.html');
    const localizedHtml = await readFile(localizedFile, 'utf8');
    if (!localizedHtml.includes(evidenceUi[language.code].recommendationTitle)) {
      throw new Error(`Rendered localized evidence section is missing: ${language.code}/${slug}`);
    }
    if (!localizedHtml.includes('"citation"') || !localizedHtml.includes('"dateModified":"2026-08-05"')) {
      throw new Error(`Localized evidence JSON-LD is incomplete: ${language.code}/${slug}`);
    }
    if (language.code !== 'en' && localizedHtml.includes('What trusted health organizations recommend')) {
      throw new Error(`English evidence label leaked into ${language.code}: ${slug}`);
    }
  }
}

console.log(`Validated ${htmlFiles.length} HTML files and ${requiredRoutes.length} localized routes.`);

async function collectHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectHtml(fullPath));
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

function localizedPath(languageCode, slug) {
  const prefix = languageCode === 'en' ? '' : `/${languageCode}`;
  const suffix = slug ? `/${slug}` : '';
  return `${prefix}${suffix}/`.replace('//', '/');
}

function stripQuery(href) {
  return href.split('?')[0].split('#')[0];
}

async function validateSeoTarget(file, phrase) {
  const html = await readFile(file, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? '';
  const h1 = html.match(/<h1>(.*?)<\/h1>/)?.[1] ?? '';
  const description = html.match(/<meta name="description" content="([^"]*)" \/>/)?.[1] ?? '';
  const expected = phrase.toLowerCase();
  if (!title.toLowerCase().includes(expected) || !h1.toLowerCase().includes(expected)) {
    throw new Error(`SEO target phrase is missing from title or H1 in ${file}: ${phrase}`);
  }
  if (title.length > 60 || description.length > 160) {
    throw new Error(`SEO title or description is too long in ${file} (${title.length}/${description.length}).`);
  }
}
