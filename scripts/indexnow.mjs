import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { languages, pageSlugs, site } from '../src/pages.mjs';
import { hubSlugs } from '../src/content-hub.mjs';

// IndexNow keys are public ownership-verification tokens, not login secrets.
export const key = 'xkfc94pam6281fxy8srfa7gd52xxnspv';
export const endpoint = 'https://api.indexnow.org/indexnow';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export function submissionPayload(urls) {
  const origin = new URL(site.origin);
  if (origin.href !== 'https://bemamas.com/') throw new Error('Unexpected production origin');
  const urlList = [...new Set(urls)];
  if (!urlList.length || urlList.length > 10000) throw new Error('IndexNow accepts 1–10000 URLs per batch');
  for (const value of urlList) {
    const url = new URL(value);
    if (url.origin !== origin.origin || url.username || url.password || url.search || url.hash
      || !url.pathname.endsWith('/') || /\/(api|_stats|realtime|cdn-cgi)\//.test(url.pathname)) {
      throw new Error(`Not a public canonical page: ${value}`);
    }
  }
  return { host: origin.host, key, keyLocation: `${origin.origin}/${key}.txt`, urlList };
}

export function pageSignature(html) {
  const fields = {
    title: html.match(/<title>(.*?)<\/title>/s)?.[1],
    description: html.match(/<meta name="description" content="([^"]*)"/)?.[1],
    canonical: html.match(/<link rel="canonical" href="([^"]*)"/)?.[1]
  };
  if (Object.values(fields).some(value => !value?.trim())) throw new Error('Page is missing required SEO metadata');
  return JSON.stringify(fields);
}

async function run() {
  const args = process.argv.slice(2);
  if (args.some(arg => !['--submit', '--dry-run'].includes(arg)) || args.length > 1) {
    throw new Error('Use node scripts/indexnow.mjs [--dry-run|--submit]');
  }
  const urls = languages.flatMap(({ code }) => [...pageSlugs, ...hubSlugs].map(slug =>
    `${site.origin}/${code === 'en' ? '' : `${code}/`}${slug ? `${slug}/` : ''}`));
  const payload = submissionPayload(urls);
  const verificationFile = (await readFile(path.join(root, 'public', `${key}.txt`), 'utf8')).trim();
  if (verificationFile !== key) throw new Error('Public verification file does not match configured key');
  if (!args.includes('--submit')) {
    console.log(JSON.stringify({ mode: 'dry-run', endpoint, pages: urls.length, languages: languages.map(l => l.code),
      keyLocation: payload.keyLocation, next: 'Deploy the build first, then run with --submit. No URLs have been submitted.' }, null, 2));
    return;
  }
  const verification = await fetch(payload.keyLocation, { redirect: 'error', signal: AbortSignal.timeout(20000) });
  if (!verification.ok || (await verification.text()).trim() !== key) {
    throw new Error('IndexNow verification file is not live. Deploy the website before submitting.');
  }
  // Fail closed if any route is stale, missing, redirected or non-indexable.
  // A deployment command finishing is not evidence that the edge has updated.
  const failures = [];
  let next = 0;
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (next < urls.length) {
      const url = urls[next++];
      try {
        const expected = await readFile(path.join(root, 'dist', new URL(url).pathname, 'index.html'), 'utf8');
        const response = await fetch(url, { redirect: 'error', signal: AbortSignal.timeout(20000) });
        const actual = await response.text();
        if (!response.ok || pageSignature(actual) !== pageSignature(expected)
          || /noindex/i.test(response.headers.get('x-robots-tag') ?? '')
          || /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(actual)) failures.push(url);
      } catch { failures.push(url); }
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }));
  if (failures.length) throw new Error(`${failures.length} live pages failed verification; nothing submitted. Examples: ${failures.slice(0, 5).join(', ')}`);
  const response = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload), signal: AbortSignal.timeout(30000) });
  if (![200, 202].includes(response.status)) throw new Error(`IndexNow returned HTTP ${response.status}; inspect the response before retrying.`);
  console.log(JSON.stringify({ pages: urls.length, status: response.status,
    result: response.status === 202 ? 'Accepted; ownership verification pending' : 'Submitted successfully',
    note: 'Submission is a notification, not a guarantee of indexing or rankings.' }, null, 2));
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  run().catch(error => { console.error(error.message); process.exitCode = 1; });
}
