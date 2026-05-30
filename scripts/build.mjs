import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { navigation, pages, site } from '../src/pages.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await mkdir(path.join(dist, 'assets'), { recursive: true });

await cp(path.join(root, 'public'), dist, { recursive: true });
await writeFile(path.join(dist, 'assets', 'styles.css'), await readFile(path.join(root, 'src', 'styles.css'), 'utf8'));

for (const page of pages) {
  const html = renderPage(page);
  const directory = page.slug ? path.join(dist, page.slug) : dist;
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, 'index.html'), html);
}

await writeFile(path.join(dist, 'sitemap.xml'), renderSitemap());

function renderPage(page) {
  const canonical = `${site.origin}/${page.slug ? `${page.slug}/` : ''}`;
  const title = page.title === site.name ? site.name : `${page.title} | ${site.name}`;
  const content = page.kind === 'home' ? renderHome() : renderPolicy(page);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${site.origin}/assets/hero_pregnancy.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="stylesheet" href="/assets/styles.css" />
  </head>
  <body>
    ${renderHeader()}
    ${content}
    ${renderFooter()}
  </body>
</html>`;
}

function renderHeader() {
  return `<header class="site-header">
  <div class="nav">
    <a class="brand" href="/" aria-label="BeMama home">
      <img src="/assets/bemama_logo_mark.png" alt="" />
      <span>BeMama</span>
    </a>
    <nav class="nav-links" aria-label="Main navigation">
      ${navigation.map((item) => `<a href="${item.href}">${escapeHtml(item.label)}</a>`).join('')}
      <a class="button secondary" href="/contact/">Support</a>
    </nav>
  </div>
</header>`;
}

function renderHome() {
  return `<main>
  <section class="hero">
    <div>
      <span class="eyebrow">Planning, pregnancy, baby, and child growth</span>
      <h1>BeMama</h1>
      <p class="hero-copy">A calm companion for care journeys, daily guidance, Q&A, community support, and clearly labeled AI-assisted help.</p>
      <div class="hero-actions">
        <a class="button" href="/contact/">Get launch updates</a>
        <a class="button secondary" href="/privacy/">Read privacy policy</a>
      </div>
    </div>
    <div class="hero-art" aria-label="BeMama app preview">
      <div class="phone">
        <div class="phone-screen">
          <div class="phone-hero">
            <div>
              <h2>Daily Journey</h2>
              <p>Support shaped around your current stage.</p>
            </div>
          </div>
          <div class="phone-section">
            <div class="mini-card">
              <h3>Q&A and community</h3>
              <p>Ask, learn, and connect with supportive spaces.</p>
            </div>
            <div class="mini-card">
              <h3>AI-assisted support</h3>
              <p>Clearly labeled and limited to general education.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="floating-journeys">
        ${journeyChip('hero_planning.png', 'Planning')}
        ${journeyChip('hero_pregnancy.png', 'Pregnancy')}
        ${journeyChip('hero_baby.png', 'Baby care')}
        ${journeyChip('hero_child.png', 'Child growth')}
      </div>
    </div>
  </section>
  <section class="section">
    <div class="section-header">
      <h2>What BeMama does</h2>
      <p>BeMama brings practical parenting support into one organized experience without pretending to replace clinical care.</p>
    </div>
    <div class="grid">
      ${featureCard('Daily Journey', 'Set up your current stage so daily care content and actions can be organized around where you are.')}
      ${featureCard('Q&A and Community', 'Ask questions, find related discussions, and connect with supportive spaces built for parents and caregivers.')}
      ${featureCard('Tools', 'Use practical calculators, trackers, and care utilities as they become available for each journey stage.')}
    </div>
  </section>
  <section class="section">
    <div class="section-header">
      <h2>Privacy and trust</h2>
      <p>BeMama is designed around sensitive motherhood and parenting data. Policy pages explain data use, retention basics, deletion/export request paths, and AI-assisted safety limits in plain language.</p>
      <div class="action-row">
        <a class="button secondary" href="/terms/">Terms of Use</a>
        <a class="button secondary" href="/ai-disclaimer/">AI Disclaimer</a>
        <a class="button secondary" href="/subscription-terms/">Subscription Terms</a>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="card">
      <h2>App download</h2>
      <p>BeMama app store links will be added here when the public listings are live. Until then, use the contact page for support, privacy requests, or launch updates.</p>
      <div class="action-row">
        <a class="button" href="/contact/">Contact support</a>
        <a class="button secondary" href="/subscription-terms/">Review subscription terms</a>
      </div>
    </div>
  </section>
</main>`;
}

function renderPolicy(page) {
  return `<main class="policy-layout">
  <article class="policy-panel">
    <span class="eyebrow">${page.updated ? `Updated ${escapeHtml(page.updated)}` : 'BeMama'}</span>
    <h1>${escapeHtml(page.title)}</h1>
    <p>${escapeHtml(page.description)}</p>
    ${page.body.map(renderBlock).join('')}
  </article>
</main>`;
}

function renderBlock(block) {
  if (block.type === 'notice') {
    return `<div class="notice">${escapeHtml(block.text)}</div>`;
  }
  const paragraphs = (block.paragraphs ?? []).map((text) => `<p>${escapeHtml(text)}</p>`).join('');
  const list = block.list ? `<ul>${block.list.map((text) => `<li>${escapeHtml(text)}</li>`).join('')}</ul>` : '';
  return `<section>
    <h2>${escapeHtml(block.heading)}</h2>
    ${paragraphs}
    ${list}
  </section>`;
}

function renderFooter() {
  return `<footer class="site-footer">
  <div class="footer-inner">
    <div>
      <strong>BeMama</strong>
      <p>General education and support only. Not a medical diagnosis tool.</p>
    </div>
    <div class="footer-links">
      <a href="/privacy/">Privacy</a>
      <a href="/terms/">Terms</a>
      <a href="/subscription-terms/">Subscription Terms</a>
      <a href="/ai-disclaimer/">AI safety</a>
      <a href="/contact/">Contact</a>
    </div>
  </div>
</footer>`;
}

function journeyChip(image, label) {
  return `<div class="journey-chip"><img src="/assets/${image}" alt="" />${escapeHtml(label)}</div>`;
}

function featureCard(title, text) {
  return `<article class="card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`;
}

function renderSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url><loc>${site.origin}/${page.slug ? `${page.slug}/` : ''}</loc></url>`).join('\n')}
</urlset>
`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
