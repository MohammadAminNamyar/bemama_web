import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { content, languages, pageSlugs, site } from '../src/pages.mjs';
import {
  categories,
  hubSlugs,
  articleBySlug,
  categoryBySlug,
  categoryById,
  articlesInCategory,
  ui as hubText,
  disclaimer as hubDisclaimer,
  pick
} from '../src/content-hub.mjs';

const allSlugs = [...pageSlugs, ...hubSlugs];

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const assetVersion = new Date().toISOString().replaceAll(/[-:.TZ]/g, '');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await mkdir(path.join(dist, 'assets'), { recursive: true });

await cp(path.join(root, 'public'), dist, { recursive: true });
await writeFile(
  path.join(dist, 'assets', 'styles.css'),
  `${await readFile(path.join(root, 'src', 'styles.css'), 'utf8')}\n${await readFile(path.join(root, 'src', 'hub.css'), 'utf8')}`
);

for (const language of languages) {
  for (const slug of allSlugs) {
    const html = renderPage(language, slug).replace(/[ \t]+$/gm, '');
    const directory = outputDirectory(language.code, slug);
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, 'index.html'), html);
  }
}

await writeFile(path.join(dist, 'sitemap.xml'), renderSitemap());

function renderPage(language, slug) {
  const t = content[language.code];
  const article = articleBySlug.get(slug);
  const category = categoryBySlug.get(slug);
  let title;
  let description;
  let body;
  let jsonLd = '';
  let ogType = 'website';
  let ogImage = `${site.origin}/assets/hero_pregnancy.png`;

  if (article) {
    const data = article.i18n[language.code] ?? article.i18n.en;
    title = `${data.title} | ${site.name}`;
    description = data.description;
    body = renderArticle(language, slug, article, data);
    jsonLd = renderArticleJsonLd(language, slug, article, data);
    ogType = 'article';
    ogImage = `${site.origin}/assets/${article.hero}`;
  } else if (category) {
    title = `${pick(category.title, language.code)} | ${site.name}`;
    description = pick(category.blurb, language.code);
    body = renderCategory(language, slug, category);
    ogImage = `${site.origin}/assets/${category.hero}`;
  } else if (slug) {
    const page = t.pages[slug];
    title = `${page.title} | ${site.name}`;
    description = page.description;
    body = renderPolicy(language, slug, page);
  } else {
    title = site.name;
    description = t.metaDescription;
    body = renderHome(language);
  }

  const canonical = `${site.origin}${localizedPath(language.code, slug)}`;
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
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    ${jsonLd}
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
  const lang = language.code;
  const catItems = categories.slice().sort((a, b) => a.order - b.order);
  const articleTitle = (article) => escapeHtml((article.i18n[lang] ?? article.i18n.en).title);

  const languageLinks = languages
    .map((item) => `<a class="${item.code === lang ? 'active' : ''}" href="${localizedPath(item.code, slug)}" hreflang="${item.code}">${escapeHtml(item.label)}</a>`)
    .join('');

  const desktopCategory = (category) => {
    const label = escapeHtml(pick(category.title, lang));
    const links = articlesInCategory(category.id)
      .map((article) => `<a href="${localizedPath(lang, article.slug)}" role="menuitem">${articleTitle(article)}</a>`)
      .join('');
    return `<li class="nav-item has-menu">
        <a class="nav-top" href="${localizedPath(lang, category.slug)}" aria-haspopup="true">${label}<span class="caret" aria-hidden="true"></span></a>
        <div class="submenu" role="menu">
          <a class="submenu-head" href="${localizedPath(lang, category.slug)}" role="menuitem">${label}</a>
          ${links}
        </div>
      </li>`;
  };

  const mobileCategory = (category) => {
    const label = escapeHtml(pick(category.title, lang));
    const links = articlesInCategory(category.id)
      .map((article) => `<a href="${localizedPath(lang, article.slug)}">${articleTitle(article)}</a>`)
      .join('');
    return `<details class="mobile-group">
          <summary>${label}</summary>
          <div class="mobile-sub"><a href="${localizedPath(lang, category.slug)}">${label}</a>${links}</div>
        </details>`;
  };

  return `<header class="site-header">
  <div class="nav">
    <a class="brand" href="${localizedPath(lang, '')}" aria-label="BeMama home">
      <img src="/assets/bemama_logo_mark.png" alt="" />
      <span>BeMama</span>
    </a>
    <nav class="primary-nav" aria-label="${escapeHtml(t.nav.home)}">
      <ul class="nav-list">
        <li class="nav-item"><a class="nav-top" href="${localizedPath(lang, '')}">${escapeHtml(t.nav.home)}</a></li>
        ${catItems.map(desktopCategory).join('')}
        <li class="nav-item has-menu lang-item">
          <button type="button" class="nav-top" aria-haspopup="true">${escapeHtml(t.nav.language)}<span class="caret" aria-hidden="true"></span></button>
          <div class="submenu submenu-lang" role="menu">${languageLinks}</div>
        </li>
        <li class="nav-item"><a class="nav-top nav-support" href="${localizedPath(lang, 'contact')}">${escapeHtml(t.nav.support)}</a></li>
      </ul>
    </nav>
    <details class="mobile-menu">
      <summary aria-label="Open navigation menu"><span class="menu-icon" aria-hidden="true"></span></summary>
      <div class="mobile-menu-panel">
        <a class="mobile-link" href="${localizedPath(lang, '')}">${escapeHtml(t.nav.home)}</a>
        ${catItems.map(mobileCategory).join('')}
        <details class="mobile-group">
          <summary>${escapeHtml(t.nav.language)}</summary>
          <div class="mobile-sub mobile-lang">${languageLinks}</div>
        </details>
        <a class="mobile-link button secondary" href="${localizedPath(lang, 'contact')}">${escapeHtml(t.nav.support)}</a>
      </div>
    </details>
  </div>
</header>`;
}

function renderHome(language) {
  const h = content[language.code].home;
  const fallback = content.en.home;
  const mediaCards = [
    ['app_daily_plan.png', 'icon_daily_action.png', h.phoneTitle, h.phoneText],
    ['app_qna_support.png', 'icon_ask_question.png', h.qnaTitle, h.qnaText],
    ['app_community.png', 'icon_shield_heart.png', h.aiTitle, h.aiText],
    ['app_child_growth.png', 'icon_ask_ai.png', h.journeys[3], h.features[2][1]]
  ];
  return `<main>
  <section class="hero">
    <div class="hero-visual" aria-hidden="true">
      <div class="hero-visual-panel">
        ${heroCarousel()}
      </div>
    </div>
    <div class="hero-inner">
      <div class="hero-copy-area">
        <span class="eyebrow">${escapeHtml(h.eyebrow)}</span>
        <h1>${escapeHtml(h.title)}</h1>
        <p class="hero-copy">${escapeHtml(h.copy)}</p>
        <div class="hero-actions">
          <a class="button" href="${localizedPath(language.code, 'contact')}">${escapeHtml(h.updates)}</a>
          <a class="button secondary" href="${localizedPath(language.code, 'privacy')}">${escapeHtml(h.readPrivacy)}</a>
        </div>
      </div>
      <div class="hero-proofbar" aria-label="BeMama care stages">
        ${proofItem('hero_planning.png', h.journeys[0], h.features[0][0])}
        ${proofItem('app_daily_plan.png', h.journeys[1], h.phoneTitle)}
        ${proofItem('hero_baby.png', h.journeys[2], h.qnaTitle)}
        ${proofItem('hero_child.png', h.journeys[3], h.features[2][0])}
      </div>
    </div>
  </section>
  <section class="section product-media">
    <div class="section-header">
      <span class="section-kicker">${escapeHtml(h.trustCue || fallback.trustCue)}</span>
      <h2>${escapeHtml(h.mediaTitle || fallback.mediaTitle)}</h2>
      <p>${escapeHtml(h.mediaText || fallback.mediaText)}</p>
    </div>
    <div class="media-grid">
      ${mediaCards.map(([image, icon, title, text]) => mediaCard(image, icon, title, text)).join('')}
    </div>
  </section>
  <section class="section">
    <div class="section-header"><h2>${escapeHtml(h.whatTitle)}</h2><p>${escapeHtml(h.whatText)}</p></div>
    <div class="grid">${h.features.map(([title, text]) => featureCard(title, text)).join('')}</div>
  </section>
  <section class="section trust-section">
    <div class="section-header">
      <h2>${escapeHtml(h.trustTitle)}</h2>
      <p>${escapeHtml(h.trustText)}</p>
    </div>
    <div class="trust-grid">
      ${trustTile('icon_shield_heart.png', content[language.code].nav.privacy, h.trustText)}
      ${trustTile('icon_ask_question.png', content[language.code].nav.ai, h.aiText)}
      ${trustTile('icon_daily_action.png', h.reviewSubscription, h.appText)}
    </div>
    <div class="action-row">
      <a class="button secondary" href="${localizedPath(language.code, 'terms')}">${escapeHtml(content[language.code].nav.terms)}</a>
      <a class="button secondary" href="${localizedPath(language.code, 'ai-disclaimer')}">${escapeHtml(content[language.code].nav.ai)}</a>
      <a class="button secondary" href="${localizedPath(language.code, 'subscription-terms')}">${escapeHtml(h.reviewSubscription)}</a>
    </div>
  </section>
  <section class="section ad-section">
    <div class="ad-copy">
      <span class="section-kicker">${escapeHtml(h.adStatus || fallback.adStatus)}</span>
      <h2>${escapeHtml(h.adTitle || fallback.adTitle)}</h2>
      <p>${escapeHtml(h.adText || fallback.adText)}</p>
    </div>
    <div class="ad-video-grid" aria-label="BeMama video previews">
      ${videoPreview('/assets/videos/bemama-care-story-01.mp4', 'BeMama care journey landscape video preview', 'landscape')}
    </div>
  </section>
  <section class="section">
    <div class="app-access app-access-showcase">
      <div class="app-access-copy">
        <h2>${escapeHtml(h.appTitle)}</h2>
        <p>${escapeHtml(h.appText)}</p>
        <div class="platform-grid">
          ${platformCard('android', h.android, h.comingSoon)}
          ${platformCard('ios', h.ios, h.comingSoon)}
          ${platformCard('web', h.web, h.openWeb, site.appUrl)}
        </div>
      </div>
      ${videoPreview('/assets/videos/bemama-care-story-02.mp4', 'BeMama mobile app portrait video preview', 'portrait')}
    </div>
  </section>
</main>`;
}

function heroCarousel() {
  const images = [
    'pregnancy-rest.png',
    'pregnancy-planning.png',
    'baby-care.png',
    'daily-care.png',
    'child-growth.png'
  ];
  return `<div class="hero-carousel">
    ${images.map((image) => `<img src="/assets/hero-carousel/${image}" alt="" />`).join('\n    ')}
  </div>`;
}

function proofItem(image, stage, label) {
  return `<article class="proof-item">
    <img src="/assets/${image}" alt="" />
    <span>${escapeHtml(stage)}</span>
    <strong>${escapeHtml(label)}</strong>
  </article>`;
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

function renderBreadcrumbs(language, trail) {
  const lang = language.code;
  const items = trail
    .map((crumb, index) =>
      index === trail.length - 1
        ? `<li aria-current="page">${escapeHtml(crumb.label)}</li>`
        : `<li><a href="${localizedPath(lang, crumb.slug)}">${escapeHtml(crumb.label)}</a></li>`
    )
    .join('');
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><ul>${items}</ul></nav>`;
}

function renderAppCta(language) {
  const strings = hubText(language.code);
  return `<aside class="app-cta">
    <div class="app-cta-copy">
      <h2>${escapeHtml(strings.ctaTitle)}</h2>
      <p>${escapeHtml(strings.ctaText)}</p>
    </div>
    <a class="button" href="${site.appUrl}">${escapeHtml(strings.ctaButton)}</a>
  </aside>`;
}

function renderArticle(language, slug, article, data) {
  const lang = language.code;
  const strings = hubText(lang);
  const category = categoryById.get(article.category);
  const usingFallback = !article.i18n[lang];
  const trail = [
    { label: strings.home, slug: '' },
    { label: pick(category.title, lang), slug: category.slug },
    { label: data.title, slug: article.slug }
  ];
  const sections = data.sections
    .map(
      (section) => `<section class="article-section">
      <h2>${escapeHtml(section.heading)}</h2>
      ${section.image ? `<figure class="article-figure"><img src="/assets/${section.image}" alt="" loading="lazy" /></figure>` : ''}
      ${section.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
    </section>`
    )
    .join('');
  const takeaways =
    data.takeaways && data.takeaways.length
      ? `<aside class="takeaways"><h2>${escapeHtml(strings.takeaways)}</h2><ul>${data.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></aside>`
      : '';
  const faq =
    data.faq && data.faq.length
      ? `<section class="faq"><h2>${escapeHtml(strings.faq)}</h2>${data.faq.map((item) => `<details class="faq-item"><summary>${escapeHtml(item.q)}</summary><p>${escapeHtml(item.a)}</p></details>`).join('')}</section>`
      : '';
  const related = articlesInCategory(article.category)
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);
  const relatedBlock = related.length
    ? `<section class="related"><h2>${escapeHtml(strings.related)}</h2><div class="related-grid">${related
        .map((item) => {
          const rd = item.i18n[lang] ?? item.i18n.en;
          return `<a class="related-card" href="${localizedPath(lang, item.slug)}"><img src="/assets/${item.hero}" alt="" loading="lazy" /><span>${escapeHtml(rd.title)}</span></a>`;
        })
        .join('')}</div></section>`
    : '';
  const fallbackNotice = usingFallback ? `<div class="notice">${escapeHtml(strings.localizedNotice)}</div>` : '';

  return `<main class="article-layout">
  ${renderBreadcrumbs(language, trail)}
  <article class="article">
    <header class="article-head">
      <span class="eyebrow">${escapeHtml(pick(category.title, lang))}</span>
      <h1>${escapeHtml(data.title)}</h1>
      ${article.updated ? `<p class="article-meta">${escapeHtml(strings.updatedLabel)}: ${escapeHtml(article.updated)}</p>` : ''}
    </header>
    <figure class="article-hero"><img src="/assets/${article.hero}" alt="" /></figure>
    ${fallbackNotice}
    <p class="article-intro">${escapeHtml(data.intro)}</p>
    ${sections}
    ${takeaways}
    ${faq}
    <div class="notice article-disclaimer">${escapeHtml(hubDisclaimer(lang))}</div>
    ${renderAppCta(language)}
    ${relatedBlock}
  </article>
</main>`;
}

function renderCategory(language, slug, category) {
  const lang = language.code;
  const strings = hubText(lang);
  const trail = [
    { label: strings.home, slug: '' },
    { label: pick(category.title, lang), slug: category.slug }
  ];
  const cards = articlesInCategory(category.id)
    .map((article) => {
      const data = article.i18n[lang] ?? article.i18n.en;
      return `<a class="article-card" href="${localizedPath(lang, article.slug)}">
        <div class="article-card-media"><img src="/assets/${article.hero}" alt="" loading="lazy" /></div>
        <div class="article-card-copy">
          <h3>${escapeHtml(data.title)}</h3>
          <p>${escapeHtml(data.description)}</p>
          <span class="article-card-link">${escapeHtml(strings.readMore)}</span>
        </div>
      </a>`;
    })
    .join('');
  return `<main class="category-layout">
  ${renderBreadcrumbs(language, trail)}
  <section class="category-hero">
    <div class="category-hero-copy">
      <span class="eyebrow">BeMama</span>
      <h1>${escapeHtml(pick(category.title, lang))}</h1>
      <p>${escapeHtml(pick(category.blurb, lang))}</p>
    </div>
    <figure class="category-hero-media"><img src="/assets/${category.hero}" alt="" /></figure>
  </section>
  <section class="section">
    <div class="article-grid">${cards}</div>
  </section>
  ${renderAppCta(language)}
</main>`;
}

function renderArticleJsonLd(language, slug, article, data) {
  const lang = language.code;
  const category = categoryById.get(article.category);
  const url = `${site.origin}${localizedPath(lang, slug)}`;
  const graph = [
    {
      '@type': 'Article',
      headline: data.title,
      description: data.description,
      image: `${site.origin}/assets/${article.hero}`,
      inLanguage: lang,
      mainEntityOfPage: url,
      publisher: { '@type': 'Organization', name: site.name }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: hubText(lang).home, item: `${site.origin}${localizedPath(lang, '')}` },
        { '@type': 'ListItem', position: 2, name: pick(category.title, lang), item: `${site.origin}${localizedPath(lang, category.slug)}` },
        { '@type': 'ListItem', position: 3, name: data.title, item: url }
      ]
    }
  ];
  if (data.faq && data.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: data.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    });
  }
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replaceAll('<', '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}

function renderFooter(language) {
  const t = content[language.code];
  return `<footer class="site-footer">
  <div class="footer-inner">
    <div><strong>BeMama</strong><p>${escapeHtml(t.footer)}</p></div>
    <div class="footer-links">
      <a href="${localizedPath(language.code, 'about')}">${escapeHtml(t.nav.about)}</a>
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

function mediaCard(image, icon, title, text) {
  return `<article class="media-card">
    <div class="media-image"><img src="/assets/${image}" alt="" /></div>
    <div class="media-card-copy">
      <img class="media-icon" src="/assets/${icon}" alt="" />
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
    </div>
  </article>`;
}

function featureCard(title, text) {
  return `<article class="card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`;
}

function trustTile(icon, title, text) {
  return `<article class="trust-tile">
    <img src="/assets/${icon}" alt="" />
    <h3>${escapeHtml(title)}</h3>
    <p>${escapeHtml(text)}</p>
  </article>`;
}

function videoPreview(src, label, orientation) {
  return `<figure class="ad-video-card is-${orientation}">
    <video controls autoplay muted loop playsinline preload="metadata" aria-label="${escapeHtml(label)}">
      <source src="${src}" type="video/mp4" />
    </video>
  </figure>`;
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
    for (const slug of allSlugs) {
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
