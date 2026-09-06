import assert from 'node:assert/strict';
import { test } from 'node:test';
import { livePageIssues } from './verify-indexing-live.mjs';

const expected = `<html lang="en"><head><title>Guide</title><meta name="description" content="A helpful guide" />
<link rel="canonical" href="https://bemamas.com/guide/" />
<link rel="stylesheet" href="/assets/styles.css?v=0123456789abcdef" />
<script type="application/ld+json">{"@graph":[{"@type":"Article","dateModified":"2026-08-26"}]}</script>
</head><body><p class="article-meta">Updated: <time datetime="2026-08-26">August 26, 2026</time></p>
<!--email_off--><a href="mailto:support@bemamas.com" dir="ltr">support@bemamas.com</a><!--/email_off--></body></html>`;
const response = (status = 200, headers = {}) => ({ status, headers: new Headers(headers) });

test('live verifier permits removed comments and unrelated edge scripts', () => {
  const actual = expected.replaceAll('<!--email_off-->', '').replaceAll('<!--/email_off-->', '')
    .replace('</body>', '<script src="https://example.com/analytics.js"></script></body>');
  assert.deepEqual(livePageIssues(expected, actual, response()), []);
});
test('live verifier detects email rewriting added after a clean local build', () => {
  const actual = expected.replace('href="mailto:support@bemamas.com"', 'href="/cdn-cgi/l/email-protection" data-cfemail="123"');
  assert.deepEqual(livePageIssues(expected, actual, response()), ['Cloudflare email rewrite remains', 'Support email links differ']);
});
test('live verifier catches stale dates even when SEO metadata is unchanged', () => {
  const actual = expected.replaceAll('2026-08-26', '2026-08-05').replace('August 26', 'August 5');
  assert.deepEqual(livePageIssues(expected, actual, response()), ['Editorial dates differ']);
});
test('live verifier fails redirects, noindex headers and stale asset keys', () => {
  const actual = expected.replace('0123456789abcdef', '20260906204948944');
  assert.deepEqual(livePageIssues(expected, actual, response(301, { 'x-robots-tag': 'noindex' })),
    ['HTTP 301', 'Stale/different asset references', 'Page marked noindex']);
});
