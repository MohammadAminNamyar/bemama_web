import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { content, languages, pageSlugs, site } from '../src/pages.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const assetVersion = new Date().toISOString().replaceAll(/[-:.TZ]/g, '');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await mkdir(path.join(dist, 'assets'), { recursive: true });

await cp(path.join(root, 'public'), dist, { recursive: true });
await writeFile(
  path.join(dist, 'assets', 'styles.css'),
  await readFile(path.join(root, 'src', 'styles.css'), 'utf8')
);

for (const language of languages) {
  for (const slug of pageSlugs) {
    const html = renderPage(language, slug).replace(/[ \t]+$/gm, '');
    const directory = outputDirectory(language.code, slug);
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, 'index.html'), html);
  }
}

await writeFile(path.join(dist, 'sitemap.xml'), renderSitemap());

function renderPage(language, slug) {
  const t = content[language.code];
  const page = slug ? t.pages[slug] : undefined;
  const title = slug ? `${page.title} | ${site.name}` : site.name;
  const description = slug ? page.description : t.metaDescription;
  const canonical = `${site.origin}${localizedPath(language.code, slug)}`;
  const body = slug ? renderPolicy(language, slug, page) : renderHome(language);
  return `<!doctype html>
<html lang="${language.code}" dir="${language.dir}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${canonical}" />
    ${renderAlternates(slug)}
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${site.origin}/assets/hero_pregnancy.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="stylesheet" href="/assets/styles.css?v=${assetVersion}" />
  </head>
  <body>
    ${renderHeader(language, slug)}
    ${body}
    ${renderFooter(language)}
  </body>
</html>`;
}

function renderHeader(language, slug) {
  const t = content[language.code];
  const nav = [
    ['', t.nav.home],
    ['about', t.nav.about],
    ['privacy', t.nav.privacy],
    ['terms', t.nav.terms],
    ['ai-disclaimer', t.nav.ai],
    ['contact', t.nav.contact]
  ];
  return `<header class="site-header">
  <div class="nav">
    <a class="brand" href="${localizedPath(language.code, '')}" aria-label="BeMama home">
      <img src="/assets/bemama_logo_mark.png" alt="" />
      <span>BeMama</span>
    </a>
    <nav class="nav-links" aria-label="${escapeHtml(t.nav.home)}">
      ${nav.map(([itemSlug, label]) => `<a href="${localizedPath(language.code, itemSlug)}">${escapeHtml(label)}</a>`).join('')}
      <a class="button secondary" href="${localizedPath(language.code, 'contact')}">${escapeHtml(t.nav.support)}</a>
    </nav>
    <div class="language-switcher" aria-label="${escapeHtml(t.nav.language)}">
      ${languages.map((item) => `<a class="${item.code === language.code ? 'active' : ''}" href="${localizedPath(item.code, slug)}" hreflang="${item.code}">${escapeHtml(item.label)}</a>`).join('')}
    </div>
  </div>
</header>`;
}

function renderHome(language) {
  const h = content[language.code].home;
  return `<main>
  <section class="hero">
    <div>
      <span class="eyebrow">${escapeHtml(h.eyebrow)}</span>
      <h1>${escapeHtml(h.title)}</h1>
      <p class="hero-copy">${escapeHtml(h.copy)}</p>
      <div class="hero-actions">
        <a class="button" href="${localizedPath(language.code, 'contact')}">${escapeHtml(h.updates)}</a>
        <a class="button secondary" href="${localizedPath(language.code, 'privacy')}">${escapeHtml(h.readPrivacy)}</a>
      </div>
    </div>
    <div class="hero-art" aria-label="BeMama app preview">
      <div class="phone">
        <div class="phone-screen">
          <div class="phone-hero">
            <div>
              <h2>${escapeHtml(h.phoneTitle)}</h2>
              <p>${escapeHtml(h.phoneText)}</p>
            </div>
          </div>
          <div class="phone-section">
            <div class="mini-card"><h3>${escapeHtml(h.qnaTitle)}</h3><p>${escapeHtml(h.qnaText)}</p></div>
            <div class="mini-card"><h3>${escapeHtml(h.aiTitle)}</h3><p>${escapeHtml(h.aiText)}</p></div>
          </div>
        </div>
      </div>
      <div class="floating-journeys">
        ${journeyChip('hero_planning.png', h.journeys[0])}
        ${journeyChip('hero_pregnancy.png', h.journeys[1])}
        ${journeyChip('hero_baby.png', h.journeys[2])}
        ${journeyChip('hero_child.png', h.journeys[3])}
      </div>
    </div>
  </section>
  <section class="section">
    <div class="section-header"><h2>${escapeHtml(h.whatTitle)}</h2><p>${escapeHtml(h.whatText)}</p></div>
    <div class="grid">${h.features.map(([title, text]) => featureCard(title, text)).join('')}</div>
  </section>
  <section class="section">
    <div class="section-header">
      <h2>${escapeHtml(h.trustTitle)}</h2>
      <p>${escapeHtml(h.trustText)}</p>
      <div class="action-row">
        <a class="button secondary" href="${localizedPath(language.code, 'terms')}">${escapeHtml(content[language.code].nav.terms)}</a>
        <a class="button secondary" href="${localizedPath(language.code, 'ai-disclaimer')}">${escapeHtml(content[language.code].nav.ai)}</a>
        <a class="button secondary" href="${localizedPath(language.code, 'subscription-terms')}">${escapeHtml(h.reviewSubscription)}</a>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="card">
      <h2>${escapeHtml(h.appTitle)}</h2>
      <p>${escapeHtml(h.appText)}</p>
      <div class="platform-grid">
        ${platformCard('android', h.android, h.comingSoon)}
        ${platformCard('ios', h.ios, h.comingSoon)}
        ${platformCard('web', h.web, h.openWeb, site.appUrl)}
      </div>
    </div>
  </section>
</main>`;
}

function renderPolicy(language, slug, page) {
  const t = content[language.code];
  const officialNotice = language.code === 'en' ? undefined : t.officialNotice;
  return `<main class="policy-layout">
  <article class="policy-panel">
    <span class="eyebrow">${page.updated ? `${escapeHtml(page.updated)}` : 'BeMama'}</span>
    <h1>${escapeHtml(page.title)}</h1>
    <p>${escapeHtml(page.description)}</p>
    ${officialNotice ? `<div class="notice">${escapeHtml(officialNotice)} <a href="${localizedPath('en', slug)}">English</a></div>` : ''}
    ${page.notice ? `<div class="notice">${escapeHtml(page.notice)}</div>` : ''}
    ${page.sections.map(renderBlock).join('')}
  </article>
</main>`;
}

function renderBlock(block) {
  return `<section>
    <h2>${escapeHtml(block.heading)}</h2>
    ${block.paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join('')}
  </section>`;
}

function renderFooter(language) {
  const t = content[language.code];
  return `<footer class="site-footer">
  <div class="footer-inner">
    <div><strong>BeMama</strong><p>${escapeHtml(t.footer)}</p></div>
    <div class="footer-links">
      <a href="${localizedPath(language.code, 'privacy')}">${escapeHtml(t.nav.privacy)}</a>
      <a href="${localizedPath(language.code, 'terms')}">${escapeHtml(t.nav.terms)}</a>
      <a href="${localizedPath(language.code, 'subscription-terms')}">${escapeHtml(t.home.reviewSubscription)}</a>
      <a href="${localizedPath(language.code, 'ai-disclaimer')}">${escapeHtml(t.nav.ai)}</a>
      <a href="${localizedPath(language.code, 'contact')}">${escapeHtml(t.nav.contact)}</a>
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

function platformCard(kind, title, label, href = undefined) {
  const inner = `${platformIcon(kind)}<span><strong>${escapeHtml(title)}</strong><small>${escapeHtml(label)}</small></span>`;
  return href
    ? `<a class="platform-card is-link" href="${href}">${inner}</a>`
    : `<div class="platform-card" aria-disabled="true">${inner}</div>`;
}

function platformIcon(kind) {
  if (kind === 'android') {
    return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7.4 8.8 5.7 5.9a.7.7 0 1 1 1.2-.7l1.8 3.1a8.7 8.7 0 0 1 6.6 0l1.8-3.1a.7.7 0 1 1 1.2.7l-1.7 2.9A7.5 7.5 0 0 1 20 14.7H4a7.5 7.5 0 0 1 3.4-5.9Zm1.4 3.1a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm6.4 0a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8ZM5 16h14v2.5A2.5 2.5 0 0 1 16.5 21h-9A2.5 2.5 0 0 1 5 18.5V16Z"/></svg>`;
  }
  if (kind === 'ios') {
    return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M16.7 13.1c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.7 0-1.7-.7-2.7-.7-1.4 0-2.7.8-3.4 2.1-1.5 2.6-.4 6.4 1 8.5.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7s1.6.7 2.7.7 1.8-1 2.5-2c.8-1.1 1.1-2.2 1.1-2.3-.1 0-2.3-.9-2.3-3.7ZM14.8 7.1c.6-.7 1-1.7.9-2.6-.9 0-1.9.6-2.5 1.3-.6.7-1 1.6-.9 2.5.9.1 1.9-.5 2.5-1.2Z"/></svg>`;
  }
  return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H13v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H6.5A2.5 2.5 0 0 1 4 13.5v-8Zm2 0v8c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5v-8c0-.3-.2-.5-.5-.5h-11c-.3 0-.5.2-.5.5Z"/></svg>`;
}

function renderAlternates(slug) {
  return languages
    .map((language) => `<link rel="alternate" hreflang="${language.code}" href="${site.origin}${localizedPath(language.code, slug)}" />`)
    .join('\n    ');
}

function renderSitemap() {
  const urls = [];
  for (const language of languages) {
    for (const slug of pageSlugs) {
      urls.push(`  <url><loc>${site.origin}${localizedPath(language.code, slug)}</loc></url>`);
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;
}

function outputDirectory(languageCode, slug) {
  const parts = [];
  if (languageCode !== 'en') {
    parts.push(languageCode);
  }
  if (slug) {
    parts.push(slug);
  }
  return path.join(dist, ...parts);
}

export function localizedPath(languageCode, slug) {
  const prefix = languageCode === 'en' ? '' : `/${languageCode}`;
  const suffix = slug ? `/${slug}` : '';
  return `${prefix}${suffix}/`.replace('//', '/');
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
