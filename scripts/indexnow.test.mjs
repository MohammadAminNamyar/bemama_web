import assert from 'node:assert/strict';
import { test } from 'node:test';
import { submissionPayload, pageSignature } from './indexnow.mjs';

test('IndexNow batches public pages across languages and removes duplicates', () => {
  const p = submissionPayload(['https://bemamas.com/', 'https://bemamas.com/fa/pregnancy/', 'https://bemamas.com/']);
  assert.equal(p.host, 'bemamas.com');
  assert.equal(p.urlList.length, 2);
  assert.equal(p.keyLocation, `https://bemamas.com/${p.key}.txt`);
});
test('IndexNow refuses private endpoints, other hosts, query strings and empty batches', () => {
  for (const url of ['https://app.bemamas.com/', 'http://bemamas.com/', 'https://example.com/',
    'https://bemamas.com/api/', 'https://bemamas.com/_stats/', 'https://bemamas.com/?token=example',
    'https://bemamas.com/#private', 'https://user:pass@bemamas.com/', 'https://bemamas.com/file.txt']) {
    assert.throws(() => submissionPayload([url]), /public canonical/);
  }
  assert.throws(() => submissionPayload([]), /1–10000/);
  assert.throws(() => submissionPayload(Array.from({ length: 10001 }, (_, i) => `https://bemamas.com/${i}/`)), /1–10000/);
});
test('deployment signatures ignore build timestamps but detect changed metadata', () => {
  const html = '<title>Title</title><meta name="description" content="Description"><link rel="canonical" href="https://bemamas.com/"><script src="script.js?v=1"></script>';
  assert.equal(pageSignature(html), pageSignature(html.replace('?v=1', '?v=2')));
  assert.notEqual(pageSignature(html), pageSignature(html.replace('Description', 'New description')));
  assert.throws(() => pageSignature('<html>Loading</html>'), /missing required SEO/);
});
