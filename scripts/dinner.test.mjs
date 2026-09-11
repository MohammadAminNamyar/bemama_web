import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dinnerCopy, dinnerUrl } from '../src/dinner.mjs';
import { withHelpCampaign } from '../public/assets/quick-help-entry.js';

for (const code of Object.keys(dinnerCopy)) {
  test(`${code} homepage links straight to dinner`, async () => {
    const html = await readFile(new URL(`../dist/${code === 'en' ? '' : code + '/'}index.html`, import.meta.url), 'utf8');
    assert.ok(html.includes(dinnerCopy[code].action));
    assert.ok(html.includes(dinnerCopy[code].note));
    assert.ok(html.includes(dinnerUrl(code).replaceAll('&', '&amp;')));
    assert.ok(html.includes('data-umami-event="dinner_clicked"'));
  });
}
test('dinner campaign forwarding cannot override tool, language or destination', () => {
  const url = new URL(withHelpCampaign(dinnerUrl('fa'), '?utm_source=pinterest&utm_campaign=baby_dinner&tool=help&lang=en&email=private%40example.com&redirect=https://example.com&token=secret'));
  assert.equal(url.searchParams.get('utm_source'), 'pinterest');
  assert.equal(url.searchParams.get('tool'), 'dinner');
  assert.equal(url.searchParams.get('lang'), 'fa');
  assert.equal(url.searchParams.has('email'), false);
  assert.equal(url.searchParams.has('token'), false);
  assert.equal(url.searchParams.has('redirect'), false);
  assert.equal(url.origin, 'https://app.bemamas.com');
});
