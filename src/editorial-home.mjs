import { qualityCopy } from './tool-quality-copy.mjs';

// Homepage presentation uses the existing localized article catalogue.
export const homeCopy = {
  en: ['Pregnancy, parenting & family health', 'A little guidance.\nFor every stage.', 'Find clear, practical answers for pregnancy, caring for your baby, and the everyday questions of raising a family.', 'Browse the guides', 'BeMama app', 'Explore more articles', 'Find your stage', 'Tools for everyday decisions', 'Keep your daily care together', 'Explore the BeMama app for pregnancy updates, feeding, sleep and care records.', 'BeMama characters preparing baby clothes and a wooden toy'],
  fa: ['بارداری، فرزندپروری و سلامت خانواده', 'راهنمایی همراه شما.\nدر هر مرحله.', 'پاسخ‌های روشن و کاربردی برای بارداری، مراقبت از نوزاد و پرسش‌های روزمره فرزندپروری را پیدا کنید و راهنماهای مناسب مرحله زندگی خانواده‌تان را بخوانید.', 'خواندن راهنماها', 'اپلیکیشن BeMama', 'مقاله‌های بیشتر', 'مرحله خود را انتخاب کنید', 'ابزارهایی برای تصمیم‌های روزمره', 'مراقبت روزانه را یک‌جا دنبال کنید', 'با اپلیکیشن BeMama روند بارداری، تغذیه، خواب و مراقبت را ثبت و دنبال کنید.', 'شخصیت‌های BeMama در حال آماده‌کردن لباس نوزاد و اسباب‌بازی چوبی'],
  ar: ['الحمل والتربية وصحة الأسرة', 'إرشاد يرافقك.\nفي كل مرحلة.', 'اعثري على إجابات واضحة وعملية لأسئلة الحمل والعناية بطفلك وتربية الأسرة، وتصفحي الأدلة المناسبة لكل مرحلة من رحلتك.', 'تصفحي الأدلة', 'تطبيق BeMama', 'اكتشفي المزيد من المقالات', 'اختاري مرحلتك', 'أدوات للقرارات اليومية', 'متابعة الرعاية اليومية في مكان واحد', 'اكتشفي تطبيق BeMama لمتابعة الحمل وتسجيل الرضاعة والنوم والرعاية.', 'شخصيتا BeMama تجهزان ملابس الرضيع ولعبة خشبية'],
  fr: ['Grossesse, parentalité et santé familiale', 'Des repères.\nÀ chaque étape.', 'Trouvez des réponses claires et pratiques sur la grossesse, les soins de bébé et les questions du quotidien en famille.', 'Parcourir les guides', 'Appli BeMama', 'Découvrez d’autres articles', 'Choisissez votre étape', 'Des outils pour le quotidien', 'Votre suivi quotidien au même endroit', 'Découvrez l’appli BeMama pour suivre la grossesse, les repas, le sommeil et les soins.', 'Les personnages BeMama préparent des vêtements de bébé et un jouet en bois'],
  tr: ['Gebelik, ebeveynlik ve aile sağlığı', 'Her aşamada\nbiraz rehberlik.', 'Gebelik, bebek bakımı ve aile yaşamındaki günlük sorular için anlaşılır, pratik bilgiler bulun. İhtiyacınıza uygun rehberleri keşfedin.', 'Rehberleri keşfedin', 'BeMama uygulaması', 'Daha fazla makale keşfedin', 'Aşamanızı seçin', 'Günlük kararlar için araçlar', 'Günlük bakımınızı bir arada takip edin', 'Gebelik, beslenme, uyku ve bakım kayıtları için BeMama uygulamasını keşfedin.', 'BeMama karakterleri bebek kıyafetlerini ve ahşap bir oyuncağı hazırlıyor'],
  es: ['Embarazo, crianza y salud familiar', 'Un poco de orientación.\nEn cada etapa.', 'Encuentra respuestas claras y prácticas sobre el embarazo, el cuidado de tu bebé y las preguntas cotidianas de la crianza.', 'Explorar las guías', 'App BeMama', 'Descubre más artículos', 'Encuentra tu etapa', 'Herramientas para el día a día', 'Tu cuidado diario en un solo lugar', 'Descubre la app BeMama para seguir el embarazo y registrar alimentación, sueño y cuidados.', 'Los personajes de BeMama preparan ropa de bebé y un juguete de madera'],
  pt: ['Gravidez, parentalidade e saúde familiar', 'Um pouco de orientação.\nEm cada fase.', 'Encontre respostas claras e práticas sobre a gravidez, os cuidados com o bebê e as dúvidas do dia a dia ao criar uma família.', 'Explorar os guias', 'App BeMama', 'Explore mais artigos', 'Encontre sua fase', 'Ferramentas para o dia a dia', 'Seus cuidados diários em um só lugar', 'Conheça o app BeMama para acompanhar a gravidez e registrar alimentação, sono e cuidados.', 'Os personagens BeMama preparam roupas de bebê e um brinquedo de madeira']
};

const startingGuides = ['pregnancy/second-trimester', 'newborn/safe-sleep-room-sharing', 'baby-and-child/starting-solids-allergens'];
// Keep the user's religious-content exclusion when featuring the older catalogue.
const excludedHomepageGuides = new Set([...startingGuides, 'pregnancy/quran-recitation-and-connection-during-pregnancy']);

export function homeArticlePool(language, helpers) {
  const { articleBySlug, categoryById, pick, escapeHtml: esc, localizedPath, imageMarkup, hubText } = helpers;
  const lang = language.code;
  const categories = new Set(['ttc', 'pregnancy', 'newborn', 'child', 'family-health']);
  return [...articleBySlug.values()]
    .filter(article => categories.has(article.category) && article.kind !== 'tool' && article.kind !== 'video' && !article.catalogHidden && !excludedHomepageGuides.has(article.slug))
    .map(article => {
      const data = article.i18n[lang];
      const category = categoryById.get(article.category);
      const image = imageMarkup('/assets/' + article.hero, '', { widths: [320, 480, 720], sizes: '(max-width: 700px) calc(100vw - 40px), (max-width: 980px) 30vw, 375px' });
      return { slug: article.slug, html: `<a class="reading-card with-image" href="${localizedPath(lang, article.slug)}"><div class="reading-image">${image}</div><div class="reading-copy"><span class="reading-category">${esc(pick(category.title, lang))}</span><h3>${esc(data.title)}</h3><p>${esc(data.description)}</p><span class="reading-link">${esc(hubText(lang).readMore)} <span aria-hidden="true">↗</span></span></div></a>` };
    });
}

export function renderEditorialHome(language, helpers) {
  const { escapeHtml: esc, localizedPath, articleBySlug, categoryById, pick, imageMarkup, hubText } = helpers;
  const lang = language.code;
  const copy = homeCopy[lang];
  const url = slug => localizedPath(lang, slug);
  const guide = hubText(lang);
  const pool = helpers.homePool;
  const selected = Array.from({ length: Math.min(12, pool.length) }, (_, index) => pool[Math.floor(index * pool.length / 12)]);
  const starting = startingGuides;
  const toolVisuals = [
    ['due-date-calculator', '<rect x="4" y="5" width="24" height="23" rx="5"/><path d="M4 12h24M11 2v6M21 2v6M10 18h3m6 0h3m-12 5h3"/>'],
    ['ovulation-calculator', '<circle cx="16" cy="16" r="11"/><path d="M16 5v4m11 7h-4M16 27v-4M5 16h4"/><circle cx="16" cy="16" r="4"/>'],
    ['hospital-bag-checklist', '<rect x="4" y="10" width="24" height="18" rx="5"/><path d="M11 10V7a5 5 0 0 1 10 0v3M4 18h24M16 15v6"/>'],
    ['growth-log', '<path d="M5 4v24h24M9 22l6-7 5 3 7-10"/><circle cx="15" cy="15" r="2"/>']
  ];
  const toolCards = toolVisuals.map(([id, visual], index) => {
    const article = articleBySlug.get('tools/' + id);
    const data = article.i18n[lang];
    return `<a class="reading-tool-card reading-tool-${index}" href="${url(article.slug)}"><div class="reading-tool-visual" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${visual}</svg></div><div class="reading-tool-copy"><h3>${esc(data.title)}</h3><p>${esc(data.description)}</p><span class="reading-tool-action">${esc(qualityCopy(lang).openTool)} <span aria-hidden="true">↗</span></span></div></a>`;
  }).join('');
  const articleLink = (slug, image = false) => {
    const article = articleBySlug.get(slug);
    if (!article) throw new Error('Missing homepage article ' + slug);
    const data = article.i18n[lang];
    const category = categoryById.get(article.category);
    return `<a class="reading-card${image ? ' with-image' : ''}" href="${url(slug)}">${image ? `<div class="reading-image">${imageMarkup('/assets/' + article.hero, '', {widths:[320,480,640], sizes:'(max-width: 700px) calc(100vw - 40px), 360px'})}</div>` : ''}<div class="reading-copy">${category ? `<span class="reading-category">${esc(pick(category.title, lang))}</span>` : ''}<h3>${esc(data.title)}</h3>${image ? `<p>${esc(data.description)}</p>` : ''}<span class="reading-link">${esc(guide.readMore)} <span aria-hidden="true">↗</span></span></div></a>`;
  };
  return `<main class="editorial-home" id="main-content">
    <section class="reading-hero" aria-labelledby="home-title">
      <svg class="reading-hero-backdrop" viewBox="0 0 1180 590" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path class="hero-backdrop-wash" d="M-40 534C176 572 398 598 489 464C566 352 517 81 656 0H1140Q1180 0 1180 40V554Q1180 590 1144 590H26Q-40 590-40 534Z"/><path class="hero-backdrop-thread" d="M-94 542C142 603 407 635 513 479C598 354 543 72 669 0"/></svg>
      <div class="reading-intro"><p class="reading-kicker">${esc(copy[0])}</p><h1 id="home-title">${copy[1].split('\n').map(esc).join('<br>')}</h1><p class="reading-description">${esc(copy[2])}</p><a class="button" href="#home-guides">${esc(copy[3])} <span aria-hidden="true">↓</span></a></div>
      <picture class="reading-hero-image"><source type="image/webp" srcset="/assets/home/characters-grounded-480.webp 480w, /assets/home/characters-grounded-800.webp 800w, /assets/home/characters-grounded.webp 1536w" sizes="(max-width: 700px) calc(100vw - 40px), 560px"><img src="/assets/home/characters-grounded.webp" width="1536" height="1024" alt="${esc(copy[10])}" fetchpriority="high" decoding="async"></picture>
    </section>
    <section class="reading-section" id="home-guides" aria-labelledby="guides-title"><div class="reading-heading"><h2 id="guides-title">${esc(guide.featuredGuides)}</h2><span>${esc(copy[0])}</span></div><div class="reading-start-grid">${starting.map(slug=>articleLink(slug)).join('')}</div></section>
    <section class="reading-section" aria-labelledby="new-guides-title"><div class="reading-heading"><h2 id="new-guides-title">${esc(copy[5])}</h2></div><div class="reading-grid" data-home-articles="${helpers.homePoolUrl}" data-card-count="12">${selected.map(article=>article.html).join('')}</div></section>
    <section class="reading-tool-section" aria-labelledby="tools-title"><div class="reading-heading"><h2 id="tools-title">${esc(copy[7])}</h2><a class="reading-link" href="${url('tools')}">${esc(guide.viewAllCategory.replace('{category}',pick(categoryById.get('tools').title,lang)))} <span aria-hidden="true">↗</span></a></div><div class="reading-tool-grid">${toolCards}</div></section>
    <aside class="reading-app"><div><p class="reading-kicker">${esc(copy[4])}</p><h2>${esc(copy[8])}</h2><p>${esc(copy[9])}</p></div><a class="button secondary" href="${url('bemama-app')}">${esc(copy[4])} <span aria-hidden="true">↗</span></a></aside>
  </main>`;
}

export function renderEditorialHeader(language, slug, helpers) {
  const { escapeHtml: esc, localizedPath, categories, pick, content, languages, renderSearch, versionedAsset, websiteUxCopy } = helpers;
  const lang = language.code;
  const t = content[lang];
  const copy = homeCopy[lang];
  const url = path => localizedPath(lang, path);
  const ordered = ['ttc','pregnancy','newborn','child','family-health','tools'].map(id=>categories.find(category=>category.id===id));
  const links = ordered.map(category=>`<a href="${url(category.slug)}"${slug===category.slug?' aria-current="page"':''}>${esc(pick(category.title,lang))}</a>`).join('');
  const languageLinks = languages.map(item=>`<a href="${localizedPath(item.code,slug)}" hreflang="${item.code}" lang="${item.code}"${item.code===lang?' aria-current="true"':''}>${esc(item.label)}</a>`).join('');
  return `<header class="reading-header"><div class="reading-masthead"><a class="brand" href="${url('')}" aria-label="${esc(websiteUxCopy(lang).home)}"><img src="${versionedAsset('/assets/bemama_logo_mark_navy.svg')}" alt="" width="38" height="38"><span>BeMama</span></a><div class="reading-utilities"><a href="${url('about')}">${esc(t.nav.about)}</a><a class="reading-app-link" href="${url('bemama-app')}">${esc(copy[4])}</a><details class="reading-languages"><summary>${esc(language.label)}</summary><div>${languageLinks}</div></details>${renderSearch(language,'desktop')}</div><details class="reading-mobile-menu"><summary aria-label="${esc(websiteUxCopy(lang).menu)}"><span class="reading-menu-icon" aria-hidden="true"></span></summary><div class="reading-mobile-panel">${renderSearch(language,'mobile')}<nav>${links}<a href="${url('bemama-app')}">${esc(copy[4])}</a><a href="${url('about')}">${esc(t.nav.about)}</a><a href="${url('contact')}">${esc(t.nav.contact)}</a></nav><div class="reading-mobile-languages">${languageLinks}</div></div></details></div><nav class="reading-topics" aria-label="${esc(copy[6])}">${links}</nav></header>`;
}
