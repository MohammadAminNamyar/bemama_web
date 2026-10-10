import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';

// Exercise the real renderer helpers without running the site build or writing
// fixture assets into public/. Missing variants must never become broken URLs.
const build = readFileSync(new URL('./build.mjs', import.meta.url), 'utf8');
const helpers = build.slice(build.indexOf('function imageMarkup('), build.indexOf('function imageDimensions('));
function renderer(files) {
  const context = vm.createContext({
    existsSync: file => files.has(file),
    imageDimensions: () => ({width:1440,height:640}),
    escapeHtml: value => String(value).replaceAll('&','&amp;').replaceAll('"','&quot;'),
    transparentPixel: 'data:image/gif;base64,fixture'
  });
  vm.runInContext(helpers + '\nassetFile = src => src; versionedAsset = src => src; this.render = imageMarkup;', context);
  return context.render;
}

test('direct WebP heroes use existing Python variants and retain intrinsic dimensions', () => {
  const src = '/assets/content/part-01/topic.webp';
  const render = renderer(new Set([src, src.replace('.webp','-320.webp'),src.replace('.webp','-720.webp')]));
  const html = render(src, 'شرح الصورة', {widths:[160,320,480,720],sizes:'(max-width: 800px) 90vw, 720px'});
  assert.match(html, /<picture>/);
  assert.match(html, /topic-320\.webp 320w/);
  assert.match(html, /topic-720\.webp 720w/);
  assert.match(html, /topic\.webp 1440w/);
  assert.doesNotMatch(html, /topic-(?:160|480)\.webp/);
  assert.match(html, /sizes="\(max-width: 800px\) 90vw, 720px"/);
  assert.match(html, /width="1440" height="640"/);
  assert.match(html, /alt="شرح الصورة"/);
  assert.match(html, /<img src="\/assets\/content\/part-01\/topic\.webp"/);
});

test('PNG partners and originals without WebP preserve their existing fallback behavior', () => {
  const render = renderer(new Set(['/assets/old.png','/assets/old.webp','/assets/old-320.webp','/assets/only.jpg']));
  const withPartner = render('/assets/old.png', 'Old photo', {widths:[320],sizes:'144px'});
  assert.match(withPartner, /<img src="\/assets\/old\.webp"/);
  assert.match(withPartner, /old-320\.webp 320w/);
  const original = render('/assets/only.jpg', 'Original photo');
  assert.doesNotMatch(original, /<picture>/);
  assert.match(original, /src="\/assets\/only\.jpg"/);
});

test('deferred direct WebPs keep variants in data-srcset until loading is requested', () => {
  const render = renderer(new Set(['/assets/topic.webp','/assets/topic-320.webp']));
  const html = render('/assets/topic.webp','Topic',{defer:true,widths:[320],sizes:'144px'});
  assert.match(html, /data-srcset="\/assets\/topic-320\.webp 320w, \/assets\/topic\.webp 1440w"/);
  assert.match(html, /data-src="\/assets\/topic\.webp"/);
  assert.match(html, /src="data:image\/gif/);
});
