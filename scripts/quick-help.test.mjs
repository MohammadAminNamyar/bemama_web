import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { quickHelpUrl } from '../src/quick-help.mjs';
import { withHelpCampaign } from '../public/assets/quick-help-entry.js';
import { languages } from '../src/pages.mjs';
import { homeRollout } from '../src/home-rollout.mjs';

test('English homepage opens a public tool without sending readers to app sign-in', async () => {
  const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  const heroAction = html.match(/<div class="hero-actions">([\s\S]*?)<\/div>/)?.[1] ?? '';
  assert.match(heroAction, /href="\/tools\/"/);
  assert.match(heroAction, /public_tools_clicked/);
  assert.doesNotMatch(heroAction, /data-quick-help|app\.bemamas\.com/);
  const target = await readFile(new URL('../dist/tools/index.html', import.meta.url), 'utf8');
  assert.match(target, /tools\/due-date-calculator/);
});

for (const { code } of languages.filter(({ code }) => code !== 'en')) {
  test(`${code}: homepage opens working public tools in the same language`, async () => {
    const html = await readFile(new URL(`../dist/${code === 'en' ? '' : code + '/'}index.html`, import.meta.url), 'utf8');
    const hero = html.match(/<div class="hero-actions">([\s\S]*?)<\/div>/)?.[1] ?? '';
    assert.ok(hero.includes(`href="/${code}/tools/"`));
    assert.ok(hero.includes(homeRollout[code].freeToolsAction));
    assert.ok(hero.includes('data-umami-event="public_tools_clicked"'));
    assert.ok(!hero.includes('data-quick-help'));
    assert.ok(!html.includes('data-umami-event="dinner_clicked"'));
    assert.ok(!html.includes('tool=dinner'));
  });
}

test('campaign forwarding preserves tool/language and drops arbitrary input', () => {
  const result = new URL(withHelpCampaign(quickHelpUrl('fa'),
    '?utm_source=instagram&utm_campaign=baby-play&utm_medium=social&email=private%40example.com&token=secret&lang=ar&tool=evil&utm_content=private%40example.com'));
  assert.equal(result.searchParams.get('tool'), 'help');
  assert.equal(result.searchParams.get('lang'), 'fa');
  assert.equal(result.searchParams.get('utm_source'), 'instagram');
  assert.equal(result.searchParams.get('utm_campaign'), 'baby-play');
  assert.equal(result.searchParams.has('email'), false);
  assert.equal(result.searchParams.has('token'), false);
  assert.equal(result.searchParams.has('utm_content'), false);
  assert.equal(withHelpCampaign('https://example.com/', '?utm_source=ig'), 'https://example.com/');
});
