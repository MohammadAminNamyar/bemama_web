import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages } from '../src/pages.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const requiredRoutes = ['/', '/about/', '/privacy/', '/terms/', '/subscription-terms/', '/ai-disclaimer/', '/contact/'];
const forbiddenClaims = [
  'HIPAA compliant',
  'GDPR compliant',
  'PIPEDA compliant',
  'replaces your clinician',
  'always accurate'
];

await access(path.join(dist, 'index.html'));

for (const route of requiredRoutes) {
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html');
  await access(file);
}

const htmlFiles = await collectHtml(dist);
const knownRoutes = new Set(pages.map((page) => `/${page.slug ? `${page.slug}/` : ''}`));

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const claim of forbiddenClaims) {
    if (html.includes(claim)) {
      throw new Error(`Forbidden legal/medical claim found in ${file}: ${claim}`);
    }
  }
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (href.startsWith('/') && !href.includes('.') && !knownRoutes.has(href)) {
      throw new Error(`Broken internal link in ${file}: ${href}`);
    }
  }
}

console.log(`Validated ${htmlFiles.length} HTML files and ${requiredRoutes.length} required routes.`);

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
