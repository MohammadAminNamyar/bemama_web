// Read-only post-deployment check. No purges, submissions, account changes or
// quota-consuming Google requests. Edge HTML is checked, not just local dist.
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { languages, pageSlugs, site } from '../src/pages.mjs';
import { hubSlugs } from '../src/content-hub.mjs';
import { pageSignature } from './indexnow.mjs';

const assetReferences = html => [...new Set([...html.matchAll(/\/assets\/[^\s"'<>?]+\?v=[a-zA-Z0-9]+/g)]
  .map(match => match[0]))].sort();
const dateSignature = html => JSON.stringify({
  visible: html.match(/<p class="article-meta">([\s\S]*?)<\/p>/)?.[1] ?? null,
  evidence: html.match(/<p class="evidence-source-note evidence-updated">([\s\S]*?)<\/p>/)?.[1] ?? null,
  structured: [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .flatMap(match => { const value = JSON.parse(match[1]); return value['@graph'] ?? [value]; })
    .filter(value => ['Article', 'WebApplication'].includes(value['@type']))
    .map(value => [value['@type'], value.dateModified ?? null])
});

export function livePageIssues(expected, actual, response) {
  const issues = [];
  if (response.status !== 200) issues.push(`HTTP ${response.status}`);
  try {
    if (pageSignature(expected) !== pageSignature(actual)) issues.push('SEO metadata differs');
    if (dateSignature(expected) !== dateSignature(actual)) issues.push('Editorial dates differ');
  } catch { issues.push('Missing/invalid HTML metadata'); }
  if (JSON.stringify(assetReferences(expected)) !== JSON.stringify(assetReferences(actual))) issues.push('Stale/different asset references');
  if (actual.includes('/cdn-cgi/l/email-protection') || actual.includes('data-cfemail')) issues.push('Cloudflare email rewrite remains');
  const supportLink = `href="mailto:${site.supportEmail}"`;
  if (expected.split(supportLink).length !== actual.split(supportLink).length) issues.push('Support email links differ');
  if (/\b(?:noindex|none)\b/i.test(response.headers.get('x-robots-tag') ?? '')
    || [...actual.matchAll(/<meta\b[^>]*>/gi)].some(match => /name="(?:robots|googlebot)"/i.test(match[0])
      && /\b(?:noindex|none)\b/i.test(match[0]))) issues.push('Page marked noindex');
  return issues;
}

async function run() {
  const args = process.argv.slice(2);
  if (args.some(arg => !['--all', '--bypass-cache'].includes(arg))) {
    throw new Error('Usage: node scripts/verify-indexing-live.mjs [--all] [--bypass-cache]');
  }
  const slugs = args.includes('--all') ? [...pageSlugs, ...hubSlugs] : [
    ...pageSlugs,
    'trying-to-conceive/basal-body-temperature', 'pregnancy/second-trimester',
    'about-bemama/getting-started', 'newborn/newborn-care-basics', 'tools/ovulation-calculator'
  ];
  const tasks = languages.flatMap(({ code }) => slugs.map(slug => ({
    lang: code, route: `/${code === 'en' ? '' : `${code}/`}${slug ? `${slug}/` : ''}`
  })));
  const failures = [];
  const results = Object.fromEntries(languages.map(({ code }) => [code, { checked: 0, passed: 0 }]));
  let next = 0, completed = 0;
  const query = args.includes('--bypass-cache') ? `?verify-indexing=${Date.now()}` : '';
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (next < tasks.length) {
      const { lang, route } = tasks[next++];
      results[lang].checked++;
      try {
        const expected = await readFile(new URL(`../dist${route}index.html`, import.meta.url), 'utf8');
        const response = await fetch(site.origin + route + query, { redirect: 'manual', signal: AbortSignal.timeout(20000) });
        const actual = await response.text();
        const issues = livePageIssues(expected, actual, response);
        if (issues.length) failures.push({ route, issues, cache: response.headers.get('cf-cache-status') });
        else results[lang].passed++;
      } catch (error) { failures.push({ route, issues: [error.message] }); }
      if (++completed % 200 === 0) console.log(`Checked ${completed}/${tasks.length} pages`);
      await new Promise(resolve => setTimeout(resolve, 170));
    }
  }));
  const sitemapIssues = [];
  for (const file of ['sitemap.xml', ...languages.map(({ code }) => `sitemap-${code}.xml`)]) {
    try {
      const expected = await readFile(new URL(`../dist/${file}`, import.meta.url), 'utf8');
      const response = await fetch(`${site.origin}/${file}${query}`, { redirect: 'manual', signal: AbortSignal.timeout(20000) });
      if (response.status !== 200 || (await response.text()).trim() !== expected.trim()) sitemapIssues.push(file);
    } catch { sitemapIssues.push(file); }
  }
  console.log(JSON.stringify({ checkedAt: new Date().toISOString(), bypassedCache: Boolean(query), results,
    failedPages: failures.length, failures, sitemapIssues,
    note: 'Read-only production comparison. Passing does not mean Google has indexed the URLs.' }, null, 2));
  if (failures.length || sitemapIssues.length) process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  run().catch(error => { console.error(error.message); process.exitCode = 1; });
}
