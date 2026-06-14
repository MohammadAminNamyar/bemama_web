import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { languages, pageSlugs } from '../src/pages.mjs';

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
  'private forever'
];

const requiredRoutes = [];
for (const language of languages) {
  for (const slug of pageSlugs) {
    requiredRoutes.push(localizedPath(language.code, slug));
  }
}

for (const route of requiredRoutes) {
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html');
  await access(file);
}

const htmlFiles = await collectHtml(dist);
const knownRoutes = new Set(requiredRoutes);

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const normalizedHtml = html.toLowerCase();
  for (const claim of forbiddenClaims) {
    if (normalizedHtml.includes(claim.toLowerCase())) {
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
