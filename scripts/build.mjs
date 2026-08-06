import { existsSync, readFileSync } from 'node:fs';
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { content, languages, pageSlugs, site } from '../src/pages.mjs';
import { tourCollectionTranslations, tourUiTranslations } from '../src/tour-i18n.mjs';
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

const ogLocales = {
  en: 'en_US',
  fa: 'fa_IR',
  ar: 'ar_AR',
  fr: 'fr_FR',
  tr: 'tr_TR',
  es: 'es_ES',
  pt: 'pt_BR'
};

const policyUpdatedLabels = {
  en: 'Last updated',
  fa: 'آخرین به‌روزرسانی',
  ar: 'آخر تحديث',
  fr: 'Dernière mise à jour',
  tr: 'Son güncelleme',
  es: 'Última actualización',
  pt: 'Última atualização'
};

const searchLabels = {
  en: {
    ariaLabel: 'Search BeMama',
    placeholder: 'Search guides',
    empty: 'Type at least 2 characters to search',
    noResults: 'No matching guides found',
    results: 'results',
    types: { home: 'Home', page: 'Page', topic: 'Topic', guide: 'Guide', tool: 'Tool' }
  },
  fa: {
    ariaLabel: 'جستجو در BeMama',
    placeholder: 'جستجوی راهنماها',
    empty: 'برای جستجو حداقل ۲ نویسه وارد کنید',
    noResults: 'راهنمایی پیدا نشد',
    results: 'نتیجه',
    types: { home: 'خانه', page: 'صفحه', topic: 'موضوع', guide: 'راهنما', tool: 'ابزار' }
  },
  ar: {
    ariaLabel: 'البحث في BeMama',
    placeholder: 'البحث في الأدلة',
    empty: 'اكتب حرفين على الأقل للبحث',
    noResults: 'لم يتم العثور على أدلة مطابقة',
    results: 'نتائج',
    types: { home: 'الرئيسية', page: 'صفحة', topic: 'موضوع', guide: 'دليل', tool: 'أداة' }
  },
  fr: {
    ariaLabel: 'Rechercher dans BeMama',
    placeholder: 'Rechercher des guides',
    empty: 'Saisissez au moins 2 caractères',
    noResults: 'Aucun guide correspondant',
    results: 'résultats',
    types: { home: 'Accueil', page: 'Page', topic: 'Thème', guide: 'Guide', tool: 'Outil' }
  },
  tr: {
    ariaLabel: "BeMama'da ara",
    placeholder: 'Rehberlerde ara',
    empty: 'Aramak için en az 2 karakter yazın',
    noResults: 'Eşleşen rehber bulunamadı',
    results: 'sonuç',
    types: { home: 'Ana sayfa', page: 'Sayfa', topic: 'Konu', guide: 'Rehber', tool: 'Araç' }
  },
  es: {
    ariaLabel: 'Buscar en BeMama',
    placeholder: 'Buscar guías',
    empty: 'Escribe al menos 2 caracteres',
    noResults: 'No se encontraron guías',
    results: 'resultados',
    types: { home: 'Inicio', page: 'Página', topic: 'Tema', guide: 'Guía', tool: 'Herramienta' }
  },
  pt: {
    ariaLabel: 'Pesquisar no BeMama',
    placeholder: 'Pesquisar guias',
    empty: 'Digite pelo menos 2 caracteres',
    noResults: 'Nenhum guia correspondente',
    results: 'resultados',
    types: { home: 'Início', page: 'Página', topic: 'Tema', guide: 'Guia', tool: 'Ferramenta' }
  }
};

const tourUi = {
  navLabel: 'Explore app',
  eyebrow: 'Interactive product tour',
  title: 'See how BeMama works',
  description:
    'Choose an area and tap through real BeMama screens. Nothing here is a mockup—the tour uses the same interface you will see in the app.',
  start: 'Start the tour',
  promoTitle: 'See the app before you install it',
  promoText: 'Explore real BeMama screens for daily guidance, planning, care tracking, reports, and community support.',
  choose: 'Choose what you want to explore',
  chooseText: 'Switch areas at any time. Your place is saved in the page link.',
  previous: 'Previous',
  next: 'Next',
  restart: 'Start again',
  step: 'Step',
  of: 'of',
  tryLabel: 'Try it on the screen',
  realScreens: 'Real app screens',
  noMockups: 'No mockups or generated UI',
  noAccount: 'No account required',
  ctaTitle: 'Ready to make BeMama yours?',
  ctaText: 'Continue in the full app to personalize your journey, save care records, and stay connected.',
  openWeb: 'Open BeMama on the web',
  openIos: 'Download on the App Store',
  areasLabel: 'BeMama app areas',
  assurancesLabel: 'Tour details',
  workspaceLabel: 'Interactive BeMama tour',
  stepsLabel: 'Tour steps'
};

const tourCollections = [
  {
    id: 'daily',
    label: 'Daily guidance',
    summary: 'A calm home for the guidance and actions that matter today.',
    steps: [
      {
        title: 'Your day at a glance',
        description: 'See stage-aware guidance, today’s care plan, and quick actions in one calm home screen.',
        prompt: 'Tap “Open journey” to continue.',
        image: 'daily-home.png',
        alt: 'BeMama home screen with planning overview, today’s care plan, and quick actions',
        tags: ['Personalized home', 'Daily plan', 'Quick actions'],
        hotspot: { left: 5, top: 35, width: 20, height: 6 }
      },
      {
        title: 'Small actions, clearly organized',
        description: 'Read concise daily guidance and move through practical care steps without losing your place.',
        prompt: 'Tap any guidance card to open it.',
        image: 'daily-content.png',
        alt: 'BeMama Daily screen showing personalized guidance cards',
        tags: ['Short guidance', 'Stage aware', 'Easy to scan'],
        hotspot: { left: 2, top: 4, width: 96, height: 13 }
      },
      {
        title: 'Personalized from the start',
        description: 'Choose your journey and save the details BeMama uses to shape daily guidance around you.',
        prompt: 'Tap “Save” when your setup is ready.',
        image: 'daily-setup.png',
        alt: 'BeMama Daily setup screen with planning, pregnancy, baby, and child journey choices',
        tags: ['Four journeys', 'Private setup', 'Editable anytime'],
        hotspot: { left: 90, top: 0, width: 10, height: 5 }
      }
    ]
  },
  {
    id: 'planning',
    label: 'Planning',
    summary: 'Cycle tracking and educational estimates, kept clear and private.',
    steps: [
      {
        title: 'Plan with more clarity',
        description: 'See your estimated fertile window, cycle tools, private insights, and daily trackers together.',
        prompt: 'Tap “Cycle calendar” to see the month.',
        image: 'planning-home.png',
        alt: 'BeMama Planning screen with estimated fertile window and cycle tracking tools',
        tags: ['Cycle overview', 'Private insights', 'Daily tracking'],
        hotspot: { left: 3, top: 28, width: 94, height: 7 }
      },
      {
        title: 'Understand your cycle at a glance',
        description: 'Review recorded periods and educational fertility estimates in a clear calendar.',
        prompt: 'Tap “Log period data” to add a record.',
        image: 'cycle-calendar.png',
        alt: 'BeMama cycle calendar showing recorded and estimated cycle dates',
        tags: ['Cycle calendar', 'Fertile window', 'History'],
        hotspot: { left: 4, top: 88, width: 92, height: 6 }
      },
      {
        title: 'Keep symptoms and mood private',
        description: 'Record symptoms, mood, intensity, and an optional private note in a focused form.',
        prompt: 'Tap “Save privately” when the record is complete.',
        image: 'symptom-log.png',
        alt: 'BeMama private symptom and mood logging form',
        tags: ['Symptoms', 'Mood', 'Private notes'],
        hotspot: { left: 8, top: 94, width: 84, height: 5 }
      }
    ]
  },
  {
    id: 'care',
    label: 'Care tracking',
    summary: 'Practical baby and child records that stay easy to review.',
    steps: [
      {
        title: 'Every care detail in one place',
        description: 'Track sleep, nursing, bottles, food, diapers, medicine, temperature, activity, and growth.',
        prompt: 'Tap “Solid foods” to add a meal.',
        image: 'care-home.png',
        alt: 'BeMama baby care dashboard with trackers and recent care history',
        tags: ['Ten care trackers', 'Care history', 'Synced records'],
        hotspot: { left: 75, top: 24, width: 23, height: 9 }
      },
      {
        title: 'Log foods visually',
        description: 'Choose foods from a visual library, review the selection, and save the meal in a few taps.',
        prompt: 'Tap “Save food log” to finish.',
        image: 'solid-foods.png',
        alt: 'BeMama solid food tracker with a visual food library and selected foods',
        tags: ['Visual food library', 'Fast selection', 'Meal history'],
        hotspot: { left: 14, top: 95, width: 72, height: 5 }
      },
      {
        title: 'Track growth without spreadsheets',
        description: 'Record weight, height, and head circumference in the units that work for your family.',
        prompt: 'Tap “Set” beside a measurement.',
        image: 'growth-log.png',
        alt: 'BeMama growth measurement form for weight, height, and head circumference',
        tags: ['Growth records', 'Flexible units', 'Clear measurements'],
        hotspot: { left: 14, top: 24, width: 72, height: 6 }
      }
    ]
  },
  {
    id: 'community',
    label: 'Community',
    summary: 'Questions, groups, saved messages, and clearly labeled AI-assisted support.',
    steps: [
      {
        title: 'Supportive spaces, organized',
        description: 'Keep consultations, saved messages, groups, and community conversations easy to find.',
        prompt: 'Tap a space to open the conversation.',
        image: 'community-home.png',
        alt: 'BeMama Community screen with priority spaces, groups, and conversations',
        tags: ['Groups', 'Saved messages', 'Care spaces'],
        hotspot: { left: 2, top: 30, width: 96, height: 9 }
      },
      {
        title: 'Ask and learn from other parents',
        description: 'Browse real questions, preview answers, filter by journey, and ask something new.',
        prompt: 'Tap “Ask question” to start a post.',
        image: 'questions.png',
        alt: 'BeMama Q and A screen with parent questions and answer previews',
        tags: ['Questions and answers', 'Journey filters', 'Community support'],
        hotspot: { left: 77, top: 89, width: 21, height: 6 }
      },
      {
        title: 'Private support when you need it',
        description: 'Use clearly labeled AI-assisted support for general information while medical decisions stay with qualified care.',
        prompt: 'Tap the message field to ask a question.',
        image: 'ai-support.png',
        alt: 'BeMama AI-assisted consultation conversation with safety notice',
        tags: ['Clearly labeled AI', 'Private conversation', 'Safety boundaries'],
        hotspot: { left: 7, top: 91, width: 84, height: 5 }
      }
    ]
  }
];

function tourUiFor(lang) {
  return { ...tourUi, ...(tourUiTranslations[lang] ?? {}) };
}

function tourCollectionsFor(lang) {
  const translatedCollections = tourCollectionTranslations[lang];
  if (!translatedCollections) return tourCollections;

  return tourCollections.map((collection) => {
    const translatedCollection = translatedCollections[collection.id] ?? {};
    return {
      ...collection,
      ...translatedCollection,
      steps: collection.steps.map((step, index) => {
        const translatedStep = translatedCollection.steps?.[index];
        if (!translatedStep) return step;
        return {
          ...step,
          ...translatedStep,
          alt: `${translatedStep.title ?? step.title}. ${translatedStep.description ?? step.description}`
        };
      })
    };
  });
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const publicAssets = path.join(root, 'public', 'assets');
const assetVersion = new Date().toISOString().replaceAll(/[-:.TZ]/g, '');
const transparentPixel = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';
const imageSizeCache = new Map();

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await mkdir(path.join(dist, 'assets'), { recursive: true });

await cp(path.join(root, 'public'), dist, { recursive: true });
const styles = `${await readFile(path.join(root, 'src', 'styles.css'), 'utf8')}\n${await readFile(path.join(root, 'src', 'hub.css'), 'utf8')}`;
await writeFile(
  path.join(dist, 'assets', 'styles.css'),
  minifyCss(styles)
);
for (const script of ['site-search.js', 'care-tools.js', 'product-tour.js']) {
  const source = await readFile(path.join(root, 'public', 'assets', script), 'utf8');
  await writeFile(path.join(dist, 'assets', script), minifyJavaScript(source));
}

for (const language of languages) {
  for (const slug of allSlugs) {
    const html = renderPage(language, slug).replace(/[ \t]+$/gm, '');
    const directory = outputDirectory(language.code, slug);
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, 'index.html'), html);
  }
}

const searchEntries = renderSearchIndex();
for (const language of languages) {
  await writeFile(
    path.join(dist, `search-index-${language.code}.json`),
    JSON.stringify(searchEntries.filter((entry) => entry.lang === language.code))
  );
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
  let ogImage = `${site.origin}/assets/bemama_og.png`;
  let preloadImage = '/assets/hero-carousel/pregnancy-rest.png';

  if (article) {
    const data = article.i18n[language.code] ?? article.i18n.en;
    title = `${data.title} | ${site.name}`;
    description = data.description;
    body = article.kind === 'tool' ? renderTool(language, slug, article, data) : renderArticle(language, slug, article, data);
    jsonLd = article.kind === 'tool' ? renderToolJsonLd(language, slug, article, data) : renderArticleJsonLd(language, slug, article, data);
    ogType = 'article';
    ogImage = `${site.origin}/assets/${article.hero}`;
    preloadImage = `/assets/${article.hero}`;
  } else if (category) {
    title = `${pick(category.title, language.code)} | ${site.name}`;
    description = pick(category.blurb, language.code);
    body = renderCategory(language, slug, category);
    jsonLd = renderCategoryJsonLd(language, slug, category);
    ogImage = `${site.origin}/assets/${category.hero}`;
    preloadImage = `/assets/${category.hero}`;
  } else if (slug === 'explore') {
    const ui = tourUiFor(language.code);
    title = `${ui.title} | ${site.name}`;
    description = ui.description;
    body = renderProductTour(language);
    jsonLd = renderProductTourJsonLd(language);
    preloadImage = '/assets/tour/daily-home.png';
  } else if (slug) {
    const page = t.pages[slug];
    title = `${page.title} | ${site.name}`;
    description = page.description;
    body = renderPolicy(language, slug, page);
    preloadImage = undefined;
  } else {
    title = `${site.name} | ${t.home.eyebrow}`;
    description = t.metaDescription;
    body = renderHome(language);
    jsonLd = renderSiteJsonLd(language);
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
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#399A97" />
    <meta property="og:site_name" content="${escapeHtml(site.name)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:locale" content="${ogLocales[language.code] || 'en_US'}" />
    ${languages
      .filter((item) => item.code !== language.code)
      .map((item) => `<meta property="og:locale:alternate" content="${ogLocales[item.code] || item.code}" />`)
      .join('\n    ')}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${ogImage}" />
    ${jsonLd}
    ${preloadImage ? renderImagePreload(preloadImage) : ''}
    <link rel="preload" as="style" href="/assets/styles.css?v=${assetVersion}" onload="this.onload=null;this.rel='stylesheet'" />
    <noscript><link rel="stylesheet" href="/assets/styles.css?v=${assetVersion}" /></noscript>
  </head>
  <body>
    ${renderHeader(language, slug)}
    ${body}
    ${renderFooter(language)}
    <script type="module" src="/assets/site-search.js?v=${assetVersion}"></script>
    <script type="module" src="/assets/care-tools.js?v=${assetVersion}"></script>
    ${slug === 'explore' ? `<script type="module" src="/assets/product-tour.js?v=${assetVersion}"></script>` : ''}
    ${renderDeferredImageLoader()}
  </body>
</html>`;
}

function renderHeader(language, slug) {
  const t = content[language.code];
  const lang = language.code;
  const ui = tourUiFor(lang);
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
      ${imageMarkup('/assets/bemama_logo_mark.png', site.name, { loading: 'eager' })}
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
        <li class="nav-item"><a class="nav-top nav-tour" href="${localizedPath(lang, 'explore')}">${escapeHtml(ui.navLabel)}</a></li>
        <li class="nav-item"><a class="nav-top nav-support" href="${localizedPath(lang, 'contact')}">${escapeHtml(t.nav.support)}</a></li>
      </ul>
    </nav>
    ${renderSearch(language, 'desktop')}
    <details class="mobile-menu">
      <summary aria-label="Open navigation menu"><span class="menu-icon" aria-hidden="true"></span></summary>
      <div class="mobile-menu-panel">
        ${renderSearch(language, 'mobile')}
        <a class="mobile-link" href="${localizedPath(lang, '')}">${escapeHtml(t.nav.home)}</a>
        <a class="mobile-link" href="${localizedPath(lang, 'explore')}">${escapeHtml(ui.navLabel)}</a>
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

function renderSearch(language, variant) {
  const id = `site-search-${language.code}-${variant}`;
  const labels = searchLabels[language.code] ?? searchLabels.en;
  const searchBody = `<label class="sr-only" for="${id}">${escapeHtml(labels.ariaLabel)}</label>
      <div class="search-control">
        <input id="${id}" class="search-input" type="search" autocomplete="off" placeholder="${escapeHtml(labels.placeholder)}" aria-controls="${id}-results" aria-expanded="false" data-search-input />
      </div>
      <div id="${id}-results" class="search-results-panel" data-search-results hidden>
        <p class="search-status" data-search-status>${escapeHtml(labels.empty)}</p>
        <div class="search-result-list" data-search-list></div>
      </div>`;
  if (variant === 'desktop') {
    return `<form class="site-search is-desktop" role="search" data-site-search data-search-lang="${language.code}" data-empty-message="${escapeHtml(labels.empty)}" data-no-results-message="${escapeHtml(labels.noResults)}" data-results-label="${escapeHtml(labels.results)}">
      <button class="search-toggle" type="button" aria-label="${escapeHtml(labels.ariaLabel)}" aria-expanded="false" aria-controls="${id}-panel" data-search-toggle></button>
      <div id="${id}-panel" class="search-popover" data-search-panel hidden>
        ${searchBody}
      </div>
    </form>`;
  }
  return `<form class="site-search is-mobile" role="search" data-site-search data-search-lang="${language.code}" data-empty-message="${escapeHtml(labels.empty)}" data-no-results-message="${escapeHtml(labels.noResults)}" data-results-label="${escapeHtml(labels.results)}">
      ${searchBody}
    </form>`;
}

function renderHome(language) {
  const h = content[language.code].home;
  const fallback = content.en.home;
  const ui = tourUiFor(language.code);
  const collections = tourCollectionsFor(language.code);
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
          <a class="button" href="${site.iosAppUrl}" rel="noopener">${escapeHtml(h.downloadIos || h.openIos)}</a>
          <a class="button secondary" href="${site.appUrl}" rel="noopener">${escapeHtml(h.openWeb)}</a>
          <a class="button secondary" href="${localizedPath(language.code, 'explore')}">${escapeHtml(ui.navLabel)}</a>
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
  <section class="section home-tour-promo">
    <figure class="home-tour-preview tour-device-frame">
      <div class="tour-device-screen">
        ${imageMarkup('/assets/tour/daily-home.png', collections[0].steps[0].alt, { loading: 'lazy' })}
      </div>
      <figcaption class="sr-only">${escapeHtml(collections[0].steps[0].title)}. ${escapeHtml(collections[0].steps[0].description)}</figcaption>
    </figure>
    <div class="home-tour-copy">
      <span class="section-kicker">${escapeHtml(ui.eyebrow)}</span>
      <h2>${escapeHtml(ui.promoTitle)}</h2>
      <p>${escapeHtml(ui.promoText)}</p>
      <div class="tour-area-list" aria-label="${escapeHtml(ui.areasLabel)}">
        ${collections.map((collection) => `<span>${escapeHtml(collection.label)}</span>`).join('')}
      </div>
      <a class="button" href="${localizedPath(language.code, 'explore')}">${escapeHtml(ui.start)}</a>
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
          ${platformCard('ios', h.ios, h.openIos || h.openWeb, site.iosAppUrl, true)}
          ${platformCard('web', h.web, h.openWeb, site.appUrl)}
        </div>
      </div>
      ${videoPreview('/assets/videos/bemama-care-story-02.mp4', 'BeMama mobile app portrait video preview', 'portrait')}
    </div>
  </section>
</main>`;
}

function renderProductTour(language) {
  const ui = tourUiFor(language.code);
  const collections = tourCollectionsFor(language.code);
  const firstCollection = collections[0];
  const firstStep = firstCollection.steps[0];
  const config = JSON.stringify({
    labels: {
      previous: ui.previous,
      next: ui.next,
      restart: ui.restart,
      step: ui.step,
      of: ui.of,
      tryLabel: ui.tryLabel
    },
    collections: collections.map((collection) => ({
      ...collection,
      steps: collection.steps.map((step) => ({
        ...step,
        image: versionedAsset(`/assets/tour/${step.image}`)
      }))
    }))
  }).replaceAll('<', '\\u003c');

  return `<main class="tour-page" data-product-tour>
    <section class="tour-hero">
      <div class="tour-hero-copy">
        <span class="eyebrow">${escapeHtml(ui.eyebrow)}</span>
        <h1>${escapeHtml(ui.title)}</h1>
        <p>${escapeHtml(ui.description)}</p>
        <div class="tour-assurances" aria-label="${escapeHtml(ui.assurancesLabel)}">
          <span>${escapeHtml(ui.realScreens)}</span>
          <span>${escapeHtml(ui.noMockups)}</span>
          <span>${escapeHtml(ui.noAccount)}</span>
        </div>
      </div>
    </section>
    <section class="product-tour" id="product-tour" aria-labelledby="tour-chooser-title">
      <div class="tour-chooser">
        <div>
          <span class="section-kicker">${escapeHtml(ui.eyebrow)}</span>
          <h2 id="tour-chooser-title">${escapeHtml(ui.choose)}</h2>
          <p>${escapeHtml(ui.chooseText)}</p>
        </div>
        <div class="tour-tabs" role="tablist" aria-label="${escapeHtml(ui.areasLabel)}">
          ${collections
            .map(
              (collection, index) => `<button class="tour-tab${index === 0 ? ' is-active' : ''}" type="button" role="tab" aria-selected="${index === 0}" data-tour-tab="${escapeHtml(collection.id)}">${escapeHtml(collection.label)}</button>`
            )
            .join('')}
        </div>
      </div>
      <div class="tour-workspace" tabindex="0" aria-label="${escapeHtml(ui.workspaceLabel)}">
        <figure class="tour-screen-column" itemscope itemtype="https://schema.org/ImageObject">
          <div class="tour-screen-wrap tour-device-frame">
            <div class="tour-device-screen">
              <img data-tour-image itemprop="contentUrl" src="${versionedAsset(`/assets/tour/${firstStep.image}`)}" width="498" height="860" alt="${escapeHtml(firstStep.alt)}" loading="eager" decoding="async" fetchpriority="high" aria-describedby="tour-screen-caption" />
              <button class="tour-screen-hotspot" type="button" data-tour-hotspot aria-label="${escapeHtml(firstStep.prompt)}"></button>
            </div>
          </div>
          <figcaption class="tour-screen-hint" id="tour-screen-caption" itemprop="caption" data-tour-hint>${escapeHtml(firstStep.prompt)}</figcaption>
          <meta itemprop="name" content="${escapeHtml(firstStep.title)}" />
        </figure>
        <aside class="tour-guide" aria-live="polite">
          <p class="tour-counter" data-tour-counter>${escapeHtml(ui.step)} 1 ${escapeHtml(ui.of)} ${firstCollection.steps.length}</p>
          <span class="tour-area-summary" data-tour-summary>${escapeHtml(firstCollection.summary)}</span>
          <h2 data-tour-title>${escapeHtml(firstStep.title)}</h2>
          <p class="tour-description" data-tour-description>${escapeHtml(firstStep.description)}</p>
          <div class="tour-tags" data-tour-tags>
            ${firstStep.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}
          </div>
          <div class="tour-dots" data-tour-dots aria-label="${escapeHtml(ui.stepsLabel)}"></div>
          <div class="tour-controls">
            <button class="button secondary" type="button" data-tour-previous disabled>${escapeHtml(ui.previous)}</button>
            <button class="button" type="button" data-tour-next>${escapeHtml(ui.next)}</button>
          </div>
        </aside>
      </div>
    </section>
    <section class="section tour-outro">
      <div>
        <span class="section-kicker">BeMama</span>
        <h2>${escapeHtml(ui.ctaTitle)}</h2>
        <p>${escapeHtml(ui.ctaText)}</p>
      </div>
      <div class="tour-outro-actions">
        <a class="button" href="${site.appUrl}" rel="noopener">${escapeHtml(ui.openWeb)}</a>
        <a class="button secondary" href="${site.iosAppUrl}" target="_blank" rel="noopener">${escapeHtml(ui.openIos)}</a>
      </div>
    </section>
    <script id="product-tour-config" type="application/json">${config}</script>
  </main>`;
}

function heroCarousel() {
  const images = [
    ['pregnancy-rest.png', 'Expectant mother resting calmly'],
    ['pregnancy-planning.png', 'Woman planning her pregnancy journey'],
    ['baby-care.png', 'Parent caring for a newborn baby'],
    ['daily-care.png', 'Daily care and guidance with BeMama'],
    ['child-growth.png', 'Mother supporting her child’s growth']
  ];
  return `<div class="hero-carousel">
    ${images
      .map(([image, alt], index) =>
        imageMarkup(`/assets/hero-carousel/${image}`, alt, {
          loading: index === 0 ? 'eager' : 'lazy',
          fetchpriority: index === 0 ? 'high' : undefined,
          defer: index !== 0
        })
      )
      .join('\n    ')}
  </div>`;
}

function proofItem(image, stage, label) {
  return `<article class="proof-item">
    ${imageMarkup(`/assets/${image}`, label)}
    <span>${escapeHtml(stage)}</span>
    <strong>${escapeHtml(label)}</strong>
  </article>`;
}

function renderPolicy(language, slug, page) {
  const t = content[language.code];
  const officialNotice = language.code === 'en' ? undefined : t.officialNotice;
  return `<main class="policy-layout">
  <article class="policy-panel">
    <span class="eyebrow">${page.updated ? `${escapeHtml(policyUpdatedLabels[language.code] ?? policyUpdatedLabels.en)}: ${escapeHtml(page.updated)}` : 'BeMama'}</span>
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
      ${section.image ? `<figure class="article-figure">${imageMarkup(`/assets/${section.image}`, section.heading)}</figure>` : ''}
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
          return `<a class="related-card" href="${localizedPath(lang, item.slug)}">${imageMarkup(`/assets/${item.hero}`, rd.title)}<span>${escapeHtml(rd.title)}</span></a>`;
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
    <figure class="article-hero">${imageMarkup(`/assets/${article.hero}`, data.title, { loading: 'eager', fetchpriority: 'high' })}</figure>
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

function renderTool(language, slug, article, data) {
  const lang = language.code;
  const strings = hubText(lang);
  const category = categoryById.get(article.category);
  const trail = [
    { label: strings.home, slug: '' },
    { label: pick(category.title, lang), slug: category.slug },
    { label: data.title, slug: article.slug }
  ];
  const config = JSON.stringify(data.tool || {}).replaceAll('<', '\\u003c');
  const sections = (data.sections || [])
    .map(
      (section) => `<section class="article-section">
      <h2>${escapeHtml(section.heading)}</h2>
      ${section.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
    </section>`
    )
    .join('');
  const tips =
    data.takeaways && data.takeaways.length
      ? `<aside class="takeaways"><h2>${escapeHtml(strings.takeaways)}</h2><ul>${data.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></aside>`
      : '';

  return `<main class="article-layout tool-layout">
  ${renderBreadcrumbs(language, trail)}
  <article class="article tool-article">
    <header class="article-head">
      <span class="eyebrow">${escapeHtml(pick(category.title, lang))}</span>
      <h1>${escapeHtml(data.title)}</h1>
      ${article.updated ? `<p class="article-meta">${escapeHtml(strings.updatedLabel)}: ${escapeHtml(article.updated)}</p>` : ''}
    </header>
    <p class="article-intro">${escapeHtml(data.intro)}</p>
    <section class="tool-panel" data-care-tool>
      <script type="application/json" data-tool-config>${config}</script>
      <div class="tool-runtime" data-tool-runtime></div>
      <noscript><p>${escapeHtml(data.description)}</p></noscript>
    </section>
    ${sections}
    ${tips}
    <div class="notice article-disclaimer">${escapeHtml(hubDisclaimer(lang))}</div>
    ${renderAppCta(language)}
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
        <div class="article-card-media">${imageMarkup(`/assets/${article.hero}`, data.title)}</div>
        <div class="article-card-copy">
          <h3>${escapeHtml(data.title)}</h3>
          <p>${escapeHtml(data.description)}</p>
          <span class="article-card-link">${escapeHtml(article.kind === 'tool' ? strings.openTool || strings.readMore : strings.readMore)}</span>
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
    <figure class="category-hero-media">${imageMarkup(`/assets/${category.hero}`, pick(category.title, lang), { loading: 'eager', fetchpriority: 'high' })}</figure>
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

function renderToolJsonLd(language, slug, article, data) {
  const lang = language.code;
  const category = categoryById.get(article.category);
  const url = `${site.origin}${localizedPath(lang, slug)}`;
  const graph = [
    {
      '@type': 'WebApplication',
      name: data.title,
      description: data.description,
      image: `${site.origin}/assets/${article.hero}`,
      inLanguage: lang,
      url,
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Any',
      publisher: { '@type': 'Organization', name: site.name },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
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
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replaceAll('<', '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}

function renderFooter(language) {
  const t = content[language.code];
  const ui = tourUiFor(language.code);
  const categoryLinks = categories
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((category) => `<a href="${localizedPath(language.code, category.slug)}">${escapeHtml(pick(category.title, language.code))}</a>`)
    .join('');
  return `<footer class="site-footer">
  <div class="footer-inner">
    <div><strong>BeMama</strong><p>${escapeHtml(t.footer)}</p></div>
    <nav class="footer-links footer-explore">
      ${categoryLinks}
    </nav>
    <div class="footer-links">
      <a href="${localizedPath(language.code, 'about')}">${escapeHtml(t.nav.about)}</a>
      <a href="${localizedPath(language.code, 'explore')}">${escapeHtml(ui.navLabel)}</a>
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
  return `<div class="journey-chip">${imageMarkup(`/assets/${image}`, '')}${escapeHtml(label)}</div>`;
}

function mediaCard(image, icon, title, text) {
  return `<article class="media-card">
    <div class="media-image">${imageMarkup(`/assets/${image}`, title)}</div>
    <div class="media-card-copy">
      ${imageMarkup(`/assets/${icon}`, title, { className: 'media-icon' })}
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
    ${imageMarkup(`/assets/${icon}`, title)}
    <h3>${escapeHtml(title)}</h3>
    <p>${escapeHtml(text)}</p>
  </article>`;
}

function videoPreview(src, label, orientation) {
  const poster = src.replace(/\.mp4$/, '-poster.webp');
  return `<figure class="ad-video-card is-${orientation}">
    <video controls muted loop playsinline preload="none" poster="${versionedAsset(poster)}" aria-label="${escapeHtml(label)}">
      <source src="${versionedAsset(src)}" type="video/mp4" />
    </video>
  </figure>`;
}

function platformCard(kind, title, label, href = undefined, external = false) {
  const inner = `${platformIcon(kind)}<span><strong>${escapeHtml(title)}</strong><small>${escapeHtml(label)}</small></span>`;
  const externalAttrs = external ? ' target="_blank" rel="noopener"' : '';
  return href
    ? `<a class="platform-card is-link" href="${escapeHtml(href)}"${externalAttrs}>${inner}</a>`
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

function jsonLdScript(graph) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replaceAll('<', '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}

function renderSiteJsonLd(language) {
  return jsonLdScript([
    {
      '@type': 'Organization',
      name: site.name,
      url: site.origin,
      logo: `${site.origin}/assets/bemama_logo_mark.png`
    },
    {
      '@type': 'WebSite',
      name: site.name,
      url: site.origin,
      inLanguage: language.code
    }
  ]);
}

function renderProductTourJsonLd(language) {
  const lang = language.code;
  const ui = tourUiFor(lang);
  const collections = tourCollectionsFor(lang);
  const url = `${site.origin}${localizedPath(lang, 'explore')}`;
  const screenshots = collections.flatMap((collection) =>
    collection.steps.map((step, index) => ({
      '@type': 'ImageObject',
      name: step.title,
      caption: step.alt,
      description: step.description,
      contentUrl: `${site.origin}/assets/tour/${step.image}`,
      encodingFormat: 'image/png',
      inLanguage: lang,
      representativeOfPage: collection.id === 'daily' && index === 0
    }))
  );

  return jsonLdScript([
    {
      '@type': 'MobileApplication',
      '@id': `${url}#app`,
      name: 'BeMama: Pregnancy & Baby',
      description: ui.description,
      url,
      inLanguage: lang,
      applicationCategory: 'HealthApplication',
      operatingSystem: 'iOS, Android, Web',
      image: screenshots[0],
      screenshot: screenshots,
      offers: {
        '@type': 'Offer',
        price: 0,
        priceCurrency: 'USD'
      },
      publisher: {
        '@type': 'Organization',
        name: site.name,
        url: site.origin,
        logo: `${site.origin}/assets/bemama_logo_mark.png`
      }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: content[lang].nav.home, item: `${site.origin}${localizedPath(lang, '')}` },
        { '@type': 'ListItem', position: 2, name: ui.navLabel, item: url }
      ]
    }
  ]);
}

function renderCategoryJsonLd(language, slug, category) {
  const lang = language.code;
  const url = `${site.origin}${localizedPath(lang, slug)}`;
  const items = articlesInCategory(category.id).map((article, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${site.origin}${localizedPath(lang, article.slug)}`,
    name: (article.i18n[lang] ?? article.i18n.en).title
  }));
  return jsonLdScript([
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: hubText(lang).home, item: `${site.origin}${localizedPath(lang, '')}` },
        { '@type': 'ListItem', position: 2, name: pick(category.title, lang), item: url }
      ]
    },
    {
      '@type': 'CollectionPage',
      name: pick(category.title, lang),
      description: pick(category.blurb, lang),
      url,
      inLanguage: lang,
      mainEntity: { '@type': 'ItemList', itemListElement: items }
    }
  ]);
}

function renderAlternates(slug) {
  const links = languages.map(
    (language) => `<link rel="alternate" hreflang="${language.code}" href="${site.origin}${localizedPath(language.code, slug)}" />`
  );
  // x-default points at the English version for unmatched locales.
  links.push(`<link rel="alternate" hreflang="x-default" href="${site.origin}${localizedPath('en', slug)}" />`);
  return links.join('\n    ');
}

function renderImagePreload(src) {
  const preferred = webpAsset(src) ?? src;
  const type = preferred.endsWith('.webp')
    ? 'image/webp'
    : preferred.endsWith('.png')
      ? 'image/png'
      : 'image/jpeg';
  return `<link rel="preload" as="image" href="${versionedAsset(preferred)}" type="${type}" fetchpriority="high" />`;
}

function imageMarkup(src, alt, options = {}) {
  const dimensions = imageDimensions(src);
  const attrs = [];
  if (options.className) {
    attrs.push(`class="${escapeHtml(options.className)}"`);
  }
  if (options.defer) {
    attrs.push(`src="${transparentPixel}"`);
    attrs.push(`data-src="${versionedAsset(src)}"`);
  } else {
    attrs.push(`src="${versionedAsset(src)}"`);
  }
  attrs.push(`alt="${escapeHtml(alt)}"`);
  if (dimensions) {
    attrs.push(`width="${dimensions.width}"`);
    attrs.push(`height="${dimensions.height}"`);
  }
  attrs.push(`loading="${options.loading ?? 'lazy'}"`);
  attrs.push('decoding="async"');
  if (options.fetchpriority) {
    attrs.push(`fetchpriority="${options.fetchpriority}"`);
  }

  const img = `<img ${attrs.join(' ')} />`;
  const webp = webpAsset(src);
  if (!webp) {
    return img;
  }
  const sourceAttr = options.defer ? `data-srcset="${versionedAsset(webp)}"` : `srcset="${versionedAsset(webp)}"`;
  return `<picture><source ${sourceAttr} type="image/webp" />${img}</picture>`;
}

function versionedAsset(src) {
  if (!src.startsWith('/assets/')) {
    return src;
  }
  return `${src}?v=${assetVersion}`;
}

function webpAsset(src) {
  if (!/\.(png|jpe?g)$/i.test(src)) {
    return undefined;
  }
  const webp = src.replace(/\.(png|jpe?g)$/i, '.webp');
  return assetExists(webp) ? webp : undefined;
}

function assetExists(src) {
  return existsSync(assetFile(src));
}

function assetFile(src) {
  const relative = src.replace(/^\/assets\//, '');
  return path.join(publicAssets, relative);
}

function imageDimensions(src) {
  if (imageSizeCache.has(src)) {
    return imageSizeCache.get(src);
  }
  const file = assetFile(src);
  if (!existsSync(file)) {
    imageSizeCache.set(src, undefined);
    return undefined;
  }
  const bytes = readFileSync(file);
  let size;
  if (bytes.length > 24 && bytes.toString('ascii', 1, 4) === 'PNG') {
    size = { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
  } else if (bytes.length > 4 && bytes[0] === 0xff && bytes[1] === 0xd8) {
    size = jpegDimensions(bytes);
  }
  imageSizeCache.set(src, size);
  return size;
}

function jpegDimensions(bytes) {
  let offset = 2;
  while (offset < bytes.length) {
    if (bytes[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = bytes[offset + 1];
    const length = bytes.readUInt16BE(offset + 2);
    if (marker >= 0xc0 && marker <= 0xc3) {
      return {
        height: bytes.readUInt16BE(offset + 5),
        width: bytes.readUInt16BE(offset + 7)
      };
    }
    offset += 2 + length;
  }
  return undefined;
}

function renderDeferredImageLoader() {
  return `<script>
(() => {
  const loadDeferredImages = () => {
    document.querySelectorAll('picture source[data-srcset]').forEach((source) => {
      source.srcset = source.dataset.srcset;
      source.removeAttribute('data-srcset');
    });
    document.querySelectorAll('img[data-src]').forEach((image) => {
      image.src = image.dataset.src;
      image.removeAttribute('data-src');
    });
  };
  window.addEventListener('load', () => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadDeferredImages, { timeout: 1800 });
    } else {
      setTimeout(loadDeferredImages, 900);
    }
  }, { once: true });
})();
</script>`;
}

function minifyCss(source) {
  const punctuation = new Set(['{', '}', ':', ';', ',', '>']);
  let output = '';
  let quote = '';
  let escaped = false;
  let pendingSpace = false;
  let comment = false;

  const appendWithPendingSpace = (char) => {
    if (pendingSpace) {
      const previous = output.at(-1);
      if (previous && !punctuation.has(previous) && !punctuation.has(char)) {
        output += ' ';
      }
      pendingSpace = false;
    }
    output += char;
  };

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (comment) {
      if (char === '*' && next === '/') {
        comment = false;
        index += 1;
        pendingSpace = true;
      }
      continue;
    }
    if (!quote && char === '/' && next === '*') {
      comment = true;
      index += 1;
      pendingSpace = true;
      continue;
    }
    if (quote) {
      output += char;
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = '';
      }
      continue;
    }
    if (char === '"' || char === "'") {
      appendWithPendingSpace(char);
      quote = char;
      escaped = false;
      continue;
    }
    if (/\s/.test(char)) {
      pendingSpace = true;
      continue;
    }
    if (char === '}' && output.endsWith(';')) {
      output = output.slice(0, -1);
    }
    appendWithPendingSpace(char);
  }
  return output.trim();
}

function minifyJavaScript(source) {
  const punctuation = new Set(['{', '}', '(', ')', '[', ']', ';', ',', ':', '.']);
  let output = '';
  let quote = '';
  let escaped = false;
  let pendingSpace = false;
  let comment = '';

  const appendWithPendingSpace = (char) => {
    if (pendingSpace) {
      const previous = output.at(-1);
      if (previous && !punctuation.has(previous) && !punctuation.has(char)) {
        output += ' ';
      }
      pendingSpace = false;
    }
    output += char;
  };

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (comment === 'line') {
      if (char === '\n' || char === '\r') {
        comment = '';
        pendingSpace = true;
      }
      continue;
    }
    if (comment === 'block') {
      if (char === '*' && next === '/') {
        comment = '';
        index += 1;
        pendingSpace = true;
      }
      continue;
    }
    if (!quote && char === '/' && next === '/') {
      comment = 'line';
      index += 1;
      pendingSpace = true;
      continue;
    }
    if (!quote && char === '/' && next === '*') {
      comment = 'block';
      index += 1;
      pendingSpace = true;
      continue;
    }
    if (quote) {
      output += char;
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = '';
      }
      continue;
    }
    if (char === '"' || char === "'" || char === '`') {
      appendWithPendingSpace(char);
      quote = char;
      escaped = false;
      continue;
    }
    if (/\s/.test(char)) {
      pendingSpace = true;
      continue;
    }
    appendWithPendingSpace(char);
  }
  return output.trim();
}

function renderSearchIndex() {
  const entries = [];
  for (const language of languages) {
    const lang = language.code;
    const t = content[lang];
    const labels = searchLabels[lang] ?? searchLabels.en;
    const ui = tourUiFor(lang);
    const collections = tourCollectionsFor(lang);
    entries.push({
      lang,
      type: labels.types.home,
      title: site.name,
      description: t.metaDescription,
      category: site.name,
      url: localizedPath(lang, ''),
      body: compactSearchText([
        t.home.eyebrow,
        t.home.copy,
        t.home.mediaText,
        t.home.whatText,
        t.home.trustText,
        t.home.features.flat()
      ])
    });

    entries.push({
      lang,
      type: labels.types.page,
      title: ui.title,
      description: ui.description,
      category: site.name,
      url: localizedPath(lang, 'explore'),
      body: compactSearchText([
        ui.promoText,
        collections.map((collection) => [
          collection.label,
          collection.summary,
          collection.steps.map((step) => [step.title, step.description, step.tags])
        ])
      ])
    });

    for (const slug of pageSlugs.filter(Boolean)) {
      const page = t.pages[slug];
      if (!page) continue;
      entries.push({
        lang,
        type: labels.types.page,
        title: page.title,
        description: page.description,
        category: site.name,
        url: localizedPath(lang, slug),
        body: compactSearchText([page.notice, page.sections.map((section) => [section.heading, section.paragraphs])])
      });
    }

    for (const category of categories) {
      const categoryTitle = pick(category.title, lang);
      entries.push({
        lang,
        type: labels.types.topic,
        title: categoryTitle,
        description: pick(category.blurb, lang),
        category: categoryTitle,
        url: localizedPath(lang, category.slug),
        body: compactSearchText(
          articlesInCategory(category.id).map((article) => {
            const data = article.i18n[lang] ?? article.i18n.en;
            return [data.title, data.description];
          })
        )
      });
    }

    for (const article of articlesInSiteOrder()) {
      const category = categoryById.get(article.category);
      const categoryTitle = pick(category.title, lang);
      const data = article.i18n[lang] ?? article.i18n.en;
      entries.push({
        lang,
        type: article.kind === 'tool' ? labels.types.tool || labels.types.guide : labels.types.guide,
        title: data.title,
        description: data.description,
        category: categoryTitle,
        url: localizedPath(lang, article.slug),
        body: compactSearchText([
          data.intro,
          data.sections.map((section) => [section.heading, section.paragraphs]),
          data.takeaways,
          data.faq?.map((item) => [item.q, item.a]),
          data.tool?.fields?.map((field) => [field.label, field.options?.map((option) => option.label)]),
          data.tool?.items,
          data.tool?.prompts
        ])
      });
    }
  }
  return entries;
}

function articlesInSiteOrder() {
  return categories
    .slice()
    .sort((a, b) => a.order - b.order)
    .flatMap((category) => articlesInCategory(category.id));
}

function compactSearchText(value) {
  return flattenSearchText(value)
    .map((part) => String(part).trim())
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function flattenSearchText(value) {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value.flatMap(flattenSearchText);
  }
  return [value];
}

function renderSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const priorityFor = (slug) => {
    if (slug === '') return '1.0';
    if (categoryBySlug.has(slug)) return '0.8';
    if (articleBySlug.has(slug)) return '0.7';
    return '0.4';
  };
  const changefreqFor = (slug) => {
    if (slug === '' || categoryBySlug.has(slug)) return 'weekly';
    if (articleBySlug.has(slug)) return 'monthly';
    return 'yearly';
  };
  const entries = [];
  for (const slug of allSlugs) {
    // Every language variant of this slug shares the same set of hreflang
    // alternates, which Google expects listed on each URL.
    const alternates = languages
      .map((l) => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${site.origin}${localizedPath(l.code, slug)}" />`)
      .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${site.origin}${localizedPath('en', slug)}" />`)
      .join('\n');
    for (const language of languages) {
      const imageEntries =
        slug === 'explore'
          ? tourCollectionsFor(language.code)
              .flatMap((collection) =>
                collection.steps.map(
                  (step) => `    <image:image>
      <image:loc>${site.origin}/assets/tour/${escapeHtml(step.image)}</image:loc>
      <image:title>${escapeHtml(step.title)}</image:title>
      <image:caption>${escapeHtml(step.alt)}</image:caption>
    </image:image>`
                )
              )
              .join('\n')
          : '';
      entries.push(`  <url>
    <loc>${site.origin}${localizedPath(language.code, slug)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreqFor(slug)}</changefreq>
    <priority>${priorityFor(slug)}</priority>
${alternates}
${imageEntries}
  </url>`);
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join('\n')}
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
