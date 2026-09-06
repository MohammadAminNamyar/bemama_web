import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { languages, pageSlugs, site } from '../src/pages.mjs';
import { hubSlugs } from '../src/content-hub.mjs';

// Integration checks against the generated site. Run npm run build first.
const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const slugs = [...pageSlugs, ...hubSlugs];
const routeFor = (lang, slug) => `/${lang === 'en' ? '' : `${lang}/`}${slug ? `${slug}/` : ''}`;
const assetHashes = new Map();

for (const { code: lang } of languages) {
  test(`${lang}: all public routes are indexable, in the sitemap and reachable without JavaScript`, async () => {
    const routes = slugs.map(slug => routeFor(lang, slug));
    const known = new Set(routes);
    const xml = await readFile(path.join(dist, `sitemap-${lang}.xml`), 'utf8');
    const sitemapUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
    assert.deepEqual(sitemapUrls.sort(), routes.map(route => `${site.origin}${route}`).sort());
    assert.equal(new Set(sitemapUrls).size, routes.length, 'Duplicate sitemap URLs');
    assert.ok(!xml.includes('<lastmod>'), 'Do not stamp rebuild time as a page update');
    const graph = new Map();

    for (const route of routes) {
      const html = await readFile(path.join(dist, route.slice(1), 'index.html'), 'utf8');
      for (const meta of html.matchAll(/<meta\b[^>]*>/gi)) {
        if (/name="(?:robots|googlebot)"/i.test(meta[0])) {
          assert.ok(!/\b(?:noindex|none)\b/i.test(meta[0]), `${route}: accidental noindex`);
        }
      }
      assert.ok(html.includes(`<link rel="canonical" href="${site.origin}${route}"`), route);
      assert.ok(!html.includes('/cdn-cgi/l/email-protection'), `${route}: utility URL linked again`);

      // Only real body anchors count, not sitemap entries or head hreflangs.
      const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
      const unprotectedBody = body
        .replace(/<!--email_off-->[\s\S]*?<!--\/email_off-->/g, '')
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
      assert.ok(!unprotectedBody.includes(site.supportEmail), `${route}: support address would be rewritten by Cloudflare`);
      const links = new Set();
      for (const anchor of body.matchAll(/<a\b[^>]*>/gi)) {
        const href = anchor[0].match(/\bhref="([^"]+)"/i)?.[1];
        if (!href || /\brel="[^"]*\bnofollow\b/i.test(anchor[0])) continue;
        const url = new URL(href.replaceAll('&amp;', '&'), site.origin + route);
        if (url.origin === site.origin && !url.search && known.has(url.pathname)) links.add(url.pathname);
      }
      graph.set(route, links);

      for (const match of html.matchAll(/\/assets\/[^\s"'<>?]+\?v=([a-f0-9]+)/g)) {
        const url = new URL(match[0], site.origin);
        const assetPath = decodeURIComponent(url.pathname).slice(1);
        if (!assetHashes.has(assetPath)) {
          const bytes = await readFile(path.join(dist, assetPath));
          assetHashes.set(assetPath, createHash('sha256').update(bytes).digest('hex').slice(0, 16));
        }
        assert.equal(match[1], assetHashes.get(assetPath), `${route}: unstable/stale asset key ${assetPath}`);
      }
      assert.match(html, /href="\/assets\/styles\.css\?v=[a-f0-9]{16}"/);
      assert.match(html, /src="\/assets\/site-search\.js\?v=[a-f0-9]{16}"/);
    }

    const home = routeFor(lang, '');
    const depth = new Map([[home, 0]]);
    const queue = [home];
    for (const route of queue) {
      for (const target of graph.get(route) ?? []) {
        if (depth.has(target)) continue;
        depth.set(target, depth.get(route) + 1);
        queue.push(target);
      }
    }
    for (const route of routes) {
      assert.ok(depth.has(route), `${route}: orphan page in ${lang}`);
      assert.ok(depth.get(route) <= 3, `${route}: more than three clicks from localized home`);
    }

    for (const [from, to] of [
      ['baby-and-child/baby-milestones', 'baby-and-child/vaccinations-overview'],
      ['newborn/newborn-care-basics', 'newborn/first-doctor-visit'],
      ['newborn/formula-feeding', 'newborn/formula-prep-safety'],
      ['about-bemama/getting-started', 'about-bemama/qa-and-community'],
      ['about-bemama/privacy-and-safety', 'about-bemama/ai-support']
    ]) {
      assert.ok(graph.get(routeFor(lang, from)).has(routeFor(lang, to)), `${lang}: missing editorial link ${from} -> ${to}`);
    }
  });
}

test('sitemap index preserves all languages without artificial lastmod dates', async () => {
  const xml = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
  assert.deepEqual([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]).sort(),
    languages.map(({ code }) => `${site.origin}/sitemap-${code}.xml`).sort());
  assert.ok(!xml.includes('<lastmod>'));
});
