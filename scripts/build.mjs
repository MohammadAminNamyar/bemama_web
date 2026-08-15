import { existsSync, readFileSync } from 'node:fs';
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { content, languages, pageSlugs, site } from '../src/pages.mjs';
import { tourCollectionTranslations, tourUiTranslations } from '../src/tour-i18n.mjs';
import { evidenceForArticle } from '../src/article-evidence.mjs';
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

// Copy for the 404 page. nginx serves a static file per locale prefix, so each
// language gets its own build output rather than detecting the locale in the
// browser.
const notFoundCopy = {
  en: {
    title: 'We can’t find that page',
    lead: 'The link may be broken, or the page may have moved. Nothing is wrong on your side — here is how to pick up where you left off.',
    searchTitle: 'Search the guides',
    browseTitle: 'Or browse by stage',
    home: 'Back to home'
  },
  fa: {
    title: 'این صفحه پیدا نشد',
    lead: 'ممکن است پیوند خراب باشد یا صفحه جابه‌جا شده باشد. مشکلی از سمت شما نیست — از اینجا می‌توانید ادامه دهید.',
    searchTitle: 'جست‌وجو در راهنماها',
    browseTitle: 'یا بر اساس مرحله مرور کنید',
    home: 'بازگشت به خانه'
  },
  ar: {
    title: 'لم نتمكّن من العثور على هذه الصفحة',
    lead: 'قد يكون الرابط معطّلاً أو تم نقل الصفحة. لا توجد مشكلة من جانبك — يمكنك المتابعة من هنا.',
    searchTitle: 'ابحث في الأدلة',
    browseTitle: 'أو تصفّح حسب المرحلة',
    home: 'العودة إلى الرئيسية'
  },
  fr: {
    title: 'Cette page est introuvable',
    lead: 'Le lien est peut-être rompu, ou la page a été déplacée. Rien ne cloche de votre côté — voici comment reprendre le fil.',
    searchTitle: 'Rechercher dans les guides',
    browseTitle: 'Ou parcourir par étape',
    home: 'Retour à l’accueil'
  },
  tr: {
    title: 'Bu sayfayı bulamadık',
    lead: 'Bağlantı bozulmuş ya da sayfa taşınmış olabilir. Sizin tarafınızda bir sorun yok — kaldığınız yerden şöyle devam edebilirsiniz.',
    searchTitle: 'Rehberlerde ara',
    browseTitle: 'Ya da aşamaya göre göz atın',
    home: 'Ana sayfaya dön'
  },
  es: {
    title: 'No encontramos esa página',
    lead: 'Puede que el enlace esté roto o que la página se haya movido. No hay ningún problema de tu parte: así puedes retomar el camino.',
    searchTitle: 'Busca en las guías',
    browseTitle: 'O explora por etapa',
    home: 'Volver al inicio'
  },
  pt: {
    title: 'Não encontramos essa página',
    lead: 'O link pode estar quebrado ou a página pode ter sido movida. Não há nada errado do seu lado — veja como retomar de onde parou.',
    searchTitle: 'Pesquise nos guias',
    browseTitle: 'Ou navegue por etapa',
    home: 'Voltar ao início'
  }
};

// Store badge glyphs: Font Awesome Free (fontawesome.com) brand icons, CC BY 4.0.
const appleGlyph = `<svg viewBox="0 0 384 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>`;
const playGlyph = `<svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>`;

// Alt text for the homepage hero illustrations. The carousel sits inside an
// aria-hidden container (the hero already carries its own heading and copy),
// so these are not announced by screen readers - they are what image search
// reads, which is why they are localized rather than left in English.
const heroCarouselAlts = {
  en: {
    pregnancyRest: 'Pregnant BeMama mother resting on the sofa while her partner brings her a glass of water',
    pregnancyPlanning: 'BeMama couple marking dates together on a calendar at their kitchen table',
    babyCare: 'BeMama parents in the nursery holding their swaddled newborn',
    dailyCare: 'BeMama family preparing a bowl of fruit together while their toddler stirs',
    childGrowth: 'BeMama toddler taking first steps between two encouraging parents'
  },
  fa: {
    pregnancyRest: 'مادر باردار بی‌ماما روی مبل استراحت می‌کند و همسرش برایش لیوان آب می‌آورد',
    pregnancyPlanning: 'زوج بی‌ماما دور میز آشپزخانه با هم تاریخ‌ها را روی تقویم علامت می‌زنند',
    babyCare: 'والدین بی‌ماما در اتاق کودک، نوزاد قنداق‌شده‌شان را در آغوش گرفته‌اند',
    dailyCare: 'خانواده بی‌ماما با هم کاسه‌ای میوه آماده می‌کنند و کودک نوپا آن را هم می‌زند',
    childGrowth: 'کودک نوپای بی‌ماما میان پدر و مادر مشوقش اولین قدم‌ها را برمی‌دارد'
  },
  ar: {
    pregnancyRest: 'أم حامل من بي‌ماما ترتاح على الأريكة بينما يحضر لها شريكها كوب ماء',
    pregnancyPlanning: 'زوجان من بي‌ماما يحددان المواعيد معًا على التقويم حول طاولة المطبخ',
    babyCare: 'والدان من بي‌ماما في غرفة الطفل يحتضنان مولودهما الملفوف',
    dailyCare: 'عائلة بي‌ماما تحضّر طبقًا من الفاكهة معًا بينما يقلّبه طفلهما الصغير',
    childGrowth: 'طفل بي‌ماما الصغير يخطو خطواته الأولى بين والدين يشجعانه'
  },
  fr: {
    pregnancyRest: 'Maman enceinte BeMama se reposant sur le canapé pendant que son partenaire lui apporte un verre d’eau',
    pregnancyPlanning: 'Couple BeMama notant ensemble des dates sur un calendrier à la table de la cuisine',
    babyCare: 'Parents BeMama dans la chambre de bébé tenant leur nouveau-né emmailloté',
    dailyCare: 'Famille BeMama préparant ensemble un bol de fruits pendant que leur tout-petit mélange',
    childGrowth: 'Tout-petit BeMama faisant ses premiers pas entre ses deux parents encourageants'
  },
  tr: {
    pregnancyRest: 'Hamile BeMama annesi kanepede dinlenirken eşi ona bir bardak su getiriyor',
    pregnancyPlanning: 'BeMama çifti mutfak masasında birlikte takvime tarihler işaretliyor',
    babyCare: 'BeMama ebeveynleri bebek odasında kundaklanmış yenidoğanlarını kucaklıyor',
    dailyCare: 'BeMama ailesi birlikte meyve kâsesi hazırlarken küçük çocukları karıştırıyor',
    childGrowth: 'BeMama’nın küçük çocuğu onu yüreklendiren iki ebeveyni arasında ilk adımlarını atıyor'
  },
  es: {
    pregnancyRest: 'Mamá embarazada de BeMama descansando en el sofá mientras su pareja le trae un vaso de agua',
    pregnancyPlanning: 'Pareja de BeMama marcando fechas juntos en un calendario en la mesa de la cocina',
    babyCare: 'Padres de BeMama en la habitación del bebé sosteniendo a su recién nacido envuelto',
    dailyCare: 'Familia de BeMama preparando juntos un bol de fruta mientras su peque lo remueve',
    childGrowth: 'Peque de BeMama dando sus primeros pasos entre sus dos padres que lo animan'
  },
  pt: {
    pregnancyRest: 'Mãe grávida da BeMama descansando no sofá enquanto o parceiro lhe traz um copo de água',
    pregnancyPlanning: 'Casal da BeMama marcando datas juntos em um calendário na mesa da cozinha',
    babyCare: 'Pais da BeMama no quarto do bebê segurando o recém-nascido enrolado',
    dailyCare: 'Família da BeMama preparando junta uma tigela de frutas enquanto a criança mexe',
    childGrowth: 'Criança da BeMama dando os primeiros passos entre os dois pais que a incentivam'
  }
};

// Responsive settings for the homepage hero illustrations. Shared by the
// carousel markup and the preload hint - if these ever disagree the browser
// downloads the hero twice, once for each candidate set.
// .hero-visual-panel is min(100%, 470px) with 12px padding, so the image is
// never displayed wider than ~446 CSS px.
const heroResponsive = {
  widths: [400, 640],
  sizes: '(max-width: 520px) calc(100vw - 60px), 446px'
};

// Small homepage images were previously delivered at their full source size.
// Keep these values aligned with the rendered CSS sizes so the browser can
// choose the smallest sharp candidate for the current device pixel ratio.
const brandResponsive = {
  widths: [64, 96, 128],
  sizes: '38px'
};

const proofResponsive = {
  widths: [96, 128, 160, 256],
  sizes: '76px'
};

const mediaResponsive = {
  widths: [256, 320, 400, 512],
  // The square artwork is constrained by the fixed-height, object-fit box.
  sizes: '(max-width: 700px) 176px, 198px'
};

// Self-hosted, cookieless analytics (Umami). Served first-party from
// /_stats/ so blocklists do not treat it as a third-party tracker. It sets no
// cookies and stores no personal data, which is why the site needs no consent
// banner - keep it that way: do not add identifying data to these events.
const analyticsWebsiteId = '0ab934ef-a442-468e-9bdc-c41e6af2189a';

function renderAnalytics() {
  if (!analyticsWebsiteId) return '';
  return `<script defer src="/_stats/s.js" data-website-id="${analyticsWebsiteId}" data-host-url="https://bemamas.com/_stats"></script>`;
}

const badgeSmallLabels = {
  en: { ios: 'Download on the', android: 'Get it on' },
  fa: { ios: 'دریافت از', android: 'دریافت از' },
  ar: { ios: 'تنزيل من', android: 'احصل عليه من' },
  fr: { ios: 'Télécharger dans l’', android: 'Disponible sur' },
  tr: { ios: 'İndirin:', android: 'Edinin:' },
  es: { ios: 'Descárgalo en el', android: 'Disponible en' },
  pt: { ios: 'Baixe na', android: 'Disponível no' }
};

// Editorial accountability.
//
// This is health-adjacent (YMYL) content, where Google's quality guidance asks
// a simple question: which identifiable human stands behind this page? An
// anonymous "editorial team" is the weakest possible answer and is a plausible
// reason 1,204 URLs sit at "Discovered - currently not indexed".
//
// Change `editorialAuthor` in one place to re-attribute every article in every
// locale.
//
// DO NOT populate `medicalReviewer` with anyone who has not actually reviewed
// this content. Claiming clinical review that did not happen would mislead
// parents on newborn health topics, and it is exactly the kind of unverifiable
// credential that damages trust rather than building it. It stays null until a
// real, named, credentialed professional is engaged - at which point the
// reviewer line and the schema below light up automatically.
const editorialAuthor = {
  name: 'Mohammadamin Namyar',
  url: `${site.origin}/about-bemama/`
};

const medicalReviewer = null;

// {name} is substituted with editorialAuthor.name. The second clause is the
// honest provenance claim the content actually supports: it is checked against
// published guidance from recognized health organizations, and every article
// carries its sources.
const bylineLabels = {
  en: 'Written and edited by {name}, founder of BeMama — checked against published guidance from recognized health organizations.',
  fa: 'نوشته و ویرایش‌شده توسط {name}، بنیان‌گذار BeMama — مطابق با راهنمای منتشرشدهٔ نهادهای معتبر سلامت بازبینی شده است.',
  ar: 'كتابة وتحرير {name}، مؤسس BeMama — تمت مراجعته وفق الإرشادات المنشورة من هيئات صحية معترف بها.',
  fr: 'Écrit et édité par {name}, fondateur de BeMama — vérifié au regard des recommandations publiées par des organismes de santé reconnus.',
  tr: '{name} tarafından yazılıp düzenlenmiştir, BeMama kurucusu — tanınmış sağlık kuruluşlarının yayımlanmış rehberleri esas alınarak gözden geçirilmiştir.',
  es: 'Escrito y editado por {name}, fundador de BeMama — revisado según las guías publicadas por organismos de salud reconocidos.',
  pt: 'Escrito e editado por {name}, fundador do BeMama — revisado com base nas diretrizes publicadas por organizações de saúde reconhecidas.'
};

// Reviewer line, only ever rendered when medicalReviewer is a real person.
const reviewerLabels = {
  en: 'Medically reviewed by {reviewer}.',
  fa: 'بازبینی پزشکی توسط {reviewer}.',
  ar: 'مراجعة طبية بواسطة {reviewer}.',
  fr: 'Revu médicalement par {reviewer}.',
  tr: 'Tıbbi inceleme: {reviewer}.',
  es: 'Revisado médicamente por {reviewer}.',
  pt: 'Revisado clinicamente por {reviewer}.'
};

/// The byline with the author's name as a real, followable link. Everything
/// around the name is escaped; only the anchor is markup.
function bylineHtml(lang) {
  const template = bylineLabels[lang] ?? bylineLabels.en;
  const [before, after = ''] = template.split('{name}');
  const link = `<a href="${editorialAuthor.url}" rel="author">${escapeHtml(editorialAuthor.name)}</a>`;
  let reviewer = '';
  if (medicalReviewer) {
    const label = reviewerLabels[lang] ?? reviewerLabels.en;
    reviewer = ` ${escapeHtml(label.replace('{reviewer}', medicalReviewer.name))}`;
  }
  return `${escapeHtml(before)}${link}${escapeHtml(after)}${reviewer}`;
}

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
  openAndroid: 'Get it on Google Play',
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

for (const language of languages) {
  const html = renderNotFoundPage(language).replace(/[ \t]+$/gm, '');
  const directory = outputDirectory(language.code, '');
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, '404.html'), html);
}

const searchEntries = renderSearchIndex();
for (const language of languages) {
  await writeFile(
    path.join(dist, `search-index-${language.code}.json`),
    JSON.stringify(searchEntries.filter((entry) => entry.lang === language.code))
  );
}
for (const language of languages) {
  await writeFile(path.join(dist, `sitemap-${language.code}.xml`), renderLocaleSitemap(language));
}
await writeFile(path.join(dist, 'sitemap.xml'), renderSitemapIndex());

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
    <meta name="apple-itunes-app" content="app-id=6783137312" />
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
    ${preloadImage ? renderImagePreload(preloadImage, preloadImage.startsWith('/assets/hero-carousel/') ? heroResponsive : {}) : ''}
    <link rel="stylesheet" href="/assets/styles.css?v=${assetVersion}" />
  </head>
  <body>
    ${renderHeader(language, slug)}
    ${body}
    ${renderFooter(language)}
    <script type="module" src="/assets/site-search.js?v=${assetVersion}"></script>
    ${article?.kind === 'tool' ? `<script type="module" src="/assets/care-tools.js?v=${assetVersion}"></script>` : ''}
    ${slug === 'explore' ? `<script type="module" src="/assets/product-tour.js?v=${assetVersion}"></script>` : ''}
    ${renderAnalytics()}
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
      ${imageMarkup('/assets/bemama_logo_mark.png', site.name, { loading: 'eager', ...brandResponsive })}
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
    <div class="hero-inner">
      <div class="hero-main">
        <div class="hero-copy-area">
          <span class="eyebrow">${escapeHtml(h.eyebrow)}</span>
          <h1>${escapeHtml(h.title)}</h1>
          <p class="hero-copy">${escapeHtml(h.copy)}</p>
          <div class="hero-actions">
            <a class="button" href="${localizedPath(language.code, 'explore')}">${escapeHtml(ui.navLabel)}</a>
            <a class="button secondary" href="${site.appUrl}" rel="noopener">${escapeHtml(h.openWeb)}</a>
          </div>
          <div class="hero-store-links" aria-label="BeMama mobile apps">
            <a class="hero-store-link" href="${site.androidAppUrl}" target="_blank" rel="noopener">${platformIcon('android')}<span>${escapeHtml(h.downloadAndroid || h.openAndroid)}</span></a>
            <a class="hero-store-link" href="${site.iosAppUrl}" target="_blank" rel="noopener">${platformIcon('ios')}<span>${escapeHtml(h.downloadIos || h.openIos)}</span></a>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="hero-visual-panel">
            ${heroCarousel(language)}
          </div>
        </div>
      </div>
      <div class="hero-proofbar" aria-label="BeMama care stages">
        ${proofItem('hero_planning.png', h.journeys[0], h.features[0][0])}
        ${proofItem('hero_pregnancy.png', h.journeys[1], h.phoneTitle)}
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
          ${platformCard('android', h.android, h.openAndroid, site.androidAppUrl, true)}
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
        <a class="button secondary" href="${site.androidAppUrl}" target="_blank" rel="noopener">${escapeHtml(ui.openAndroid)}</a>
        <a class="button secondary" href="${site.iosAppUrl}" target="_blank" rel="noopener">${escapeHtml(ui.openIos)}</a>
      </div>
    </section>
    <script id="product-tour-config" type="application/json">${config}</script>
  </main>`;
}

function heroCarousel(language) {
  const alts = heroCarouselAlts[language.code] ?? heroCarouselAlts.en;
  const images = [
    ['pregnancy-rest.png', alts.pregnancyRest],
    ['pregnancy-planning.png', alts.pregnancyPlanning],
    ['baby-care.png', alts.babyCare],
    ['daily-care.png', alts.dailyCare],
    ['child-growth.png', alts.childGrowth]
  ];
  return `<div class="hero-carousel">
    ${images
      .map(([image, alt], index) =>
        imageMarkup(`/assets/hero-carousel/${image}`, alt, {
          loading: index === 0 ? 'eager' : 'lazy',
          fetchpriority: index === 0 ? 'high' : undefined,
          defer: index !== 0,
          ...heroResponsive
        })
      )
      .join('\n    ')}
  </div>`;
}

function proofItem(image, stage, label) {
  return `<article class="proof-item">
    ${imageMarkup(`/assets/${image}`, label, proofResponsive)}
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

// The 404 page is not part of allSlugs on purpose: it has no URL of its own, it
// is what nginx returns for every unknown path under a locale prefix. That also
// keeps it out of the sitemaps and the search index.
function renderNotFoundPage(language) {
  const lang = language.code;
  const copy = notFoundCopy[lang] ?? notFoundCopy.en;
  const title = `${copy.title} | ${site.name}`;
  return `<!doctype html>
<html lang="${lang}" dir="${language.dir}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(copy.lead)}" />
    <!-- Served under whatever path the visitor mistyped, so there is no honest
         canonical to declare and nothing here should be indexed. "follow" keeps
         the recovery links crawlable. -->
    <meta name="robots" content="noindex, follow" />
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#399A97" />
    <link rel="stylesheet" href="/assets/styles.css?v=${assetVersion}" />
  </head>
  <body>
    ${renderHeader(language, '')}
    ${renderNotFound(language)}
    ${renderFooter(language)}
    <script type="module" src="/assets/site-search.js?v=${assetVersion}"></script>
    ${renderAnalytics()}
    ${renderDeferredImageLoader()}
  </body>
</html>`;
}

function renderNotFound(language) {
  const lang = language.code;
  const copy = notFoundCopy[lang] ?? notFoundCopy.en;
  const ui = tourUiFor(lang);
  const cards = categories
    .slice()
    .sort((a, b) => a.order - b.order)
    .map(
      (category) => `<a class="notfound-card" href="${localizedPath(lang, category.slug)}">
        <strong>${escapeHtml(pick(category.title, lang))}</strong>
        <span>${escapeHtml(pick(category.blurb, lang))}</span>
      </a>`
    )
    .join('');
  return `<main class="notfound">
  <section class="notfound-panel">
    <div class="notfound-panel-copy">
      <span class="notfound-code" aria-hidden="true">404</span>
      <h1>${escapeHtml(copy.title)}</h1>
      <p class="notfound-lead">${escapeHtml(copy.lead)}</p>
      <div class="action-row">
        <a class="button" href="${localizedPath(lang, '')}">${escapeHtml(copy.home)}</a>
        <a class="button secondary" href="${localizedPath(lang, 'explore')}">${escapeHtml(ui.navLabel)}</a>
      </div>
      <div class="notfound-search">
        <h2>${escapeHtml(copy.searchTitle)}</h2>
        ${renderSearch(language, 'notfound')}
      </div>
    </div>
    <div class="notfound-art" aria-hidden="true">
      ${imageMarkup('/assets/characters/not-found.png', '', { className: 'notfound-art-image' })}
    </div>
  </section>
  <section class="notfound-browse">
    <h2>${escapeHtml(copy.browseTitle)}</h2>
    <div class="notfound-grid">${cards}</div>
  </section>
  ${renderAppCta(language)}
</main>`;
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

function storeBadge(href, glyph, smallLabel, storeName) {
  return `<a class="store-badge" href="${href}" target="_blank" rel="noopener">
      ${glyph}
      <span class="store-badge-text"><small>${escapeHtml(smallLabel)}</small><strong>${escapeHtml(storeName)}</strong></span>
    </a>`;
}

function renderAppCta(language) {
  const strings = hubText(language.code);
  const labels = badgeSmallLabels[language.code] ?? badgeSmallLabels.en;
  return `<aside class="app-cta">
    <div class="app-cta-media" aria-hidden="true">
      ${imageMarkup('/assets/characters/app-cta.png', '', { className: 'app-cta-image' })}
    </div>
    <div class="app-cta-copy">
      <h2>${escapeHtml(strings.ctaTitle)}</h2>
      <p>${escapeHtml(strings.ctaText)}</p>
    </div>
    <div class="app-cta-actions">
      <div class="store-badges">
        ${storeBadge(site.iosAppUrl, appleGlyph, labels.ios, 'App Store')}
        ${storeBadge(site.androidAppUrl, playGlyph, labels.android, 'Google Play')}
      </div>
      <a class="app-cta-weblink" href="${site.appUrl}">${escapeHtml(strings.ctaButton)}</a>
    </div>
  </aside>`;
}

function renderArticleEvidence(evidence) {
  if (!evidence) return '';

  const labels = evidence.labels ?? {
    kicker: 'Evidence-informed guidance',
    recommendationTitle: 'What trusted health organizations recommend',
    bemamaTitle: 'How BeMama can help',
    safetyTitle: 'When to seek help',
    sourcesTitle: 'Sources and further reading',
    sourceNote: 'Links lead directly to guidance from the organizations named above.'
  };

  const guidance = evidence.guidance
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join('');
  const sources = evidence.sources
    .map(
      (source) => `<li><a href="${escapeHtml(source.url)}">${escapeHtml(source.organization)} &mdash; ${escapeHtml(source.title)}</a></li>`
    )
    .join('');

  return `<div class="article-evidence">
    <section class="article-section evidence-guidance">
      <span class="evidence-kicker">${escapeHtml(labels.kicker)}</span>
      <h2>${escapeHtml(labels.recommendationTitle)}</h2>
      ${guidance}
    </section>
    <section class="article-section evidence-bemama">
      <h2>${escapeHtml(labels.bemamaTitle)}</h2>
      <p>${escapeHtml(evidence.bemama)}</p>
    </section>
    ${
      evidence.safety
        ? `<aside class="evidence-safety"><h2>${escapeHtml(labels.safetyTitle)}</h2><p>${escapeHtml(evidence.safety)}</p></aside>`
        : ''
    }
    <section class="evidence-sources" aria-labelledby="evidence-sources-title">
      <h2 id="evidence-sources-title">${escapeHtml(labels.sourcesTitle)}</h2>
      <ul>${sources}</ul>
      <p class="evidence-source-note">${escapeHtml(labels.sourceNote)}</p>
    </section>
  </div>`;
}

function renderArticle(language, slug, article, data) {
  const lang = language.code;
  const strings = hubText(lang);
  const evidence = evidenceForArticle(article.slug, lang);
  const updated = evidence?.updated ?? article.updated;
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
      ${updated ? `<p class="article-meta">${escapeHtml(strings.updatedLabel)}: ${escapeHtml(updated)}</p>` : ''}
      <p class="article-byline">${bylineHtml(lang)}</p>
    </header>
    <figure class="article-hero">${imageMarkup(`/assets/${article.hero}`, data.title, { loading: 'eager', fetchpriority: 'high' })}</figure>
    ${fallbackNotice}
    <p class="article-intro">${escapeHtml(data.intro)}</p>
    ${sections}
    ${renderArticleEvidence(evidence)}
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
  const evidence = evidenceForArticle(article.slug, lang);
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
      // A named Person, not an anonymous team: for YMYL content search engines
      // want an identifiable human who is accountable for the page.
      author: { '@type': 'Person', name: editorialAuthor.name, url: editorialAuthor.url },
      ...(medicalReviewer
        ? {
            reviewedBy: {
              '@type': 'Person',
              name: medicalReviewer.name,
              ...(medicalReviewer.jobTitle ? { jobTitle: medicalReviewer.jobTitle } : {}),
              ...(medicalReviewer.url ? { url: medicalReviewer.url } : {})
            }
          }
        : {}),
      publisher: {
        '@type': 'Organization',
        name: site.name,
        logo: { '@type': 'ImageObject', url: `${site.origin}/favicon-512.png` }
      },
      ...(evidence?.updatedIso ? { dateModified: evidence.updatedIso } : {}),
      ...(evidence?.sources?.length ? { citation: evidence.sources.map((source) => source.url) } : {})
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
    <div class="media-image">${imageMarkup(`/assets/${image}`, title, mediaResponsive)}</div>
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
  const optimizedPoster = poster.replace(/\.webp$/, orientation === 'landscape' ? '-640.webp' : '-360.webp');
  // Without intrinsic dimensions the browser reserves no space for the video
  // until its poster decodes, so the whole page jumps when it arrives. That
  // single omission was worth a Cumulative Layout Shift of 1.0 (good is
  // below 0.1). Take the size from the poster file itself so the aspect ratio
  // always matches the real asset.
  const size = imageDimensions(poster);
  const dimensions = size ? ` width="${size.width}" height="${size.height}"` : '';
  return `<figure class="ad-video-card is-${orientation}">
    <video controls muted loop playsinline preload="none"${dimensions} poster="${versionedAsset(assetExists(optimizedPoster) ? optimizedPoster : poster)}" aria-label="${escapeHtml(label)}">
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

function renderImagePreload(src, options = {}) {
  const preferred = avifAsset(src) ?? webpAsset(src) ?? src;
  const type = preferred.endsWith('.avif')
    ? 'image/avif'
    : preferred.endsWith('.webp')
      ? 'image/webp'
    : preferred.endsWith('.png')
      ? 'image/png'
      : 'image/jpeg';

  // A preload must offer the same candidates as the <picture> it is warming.
  // Preloading a single URL while the markup is responsive makes the browser
  // fetch the full-size file for the preload AND the chosen candidate for the
  // element - downloading the hero twice.
  const candidates = [];
  for (const width of options.widths ?? []) {
    const variant = responsiveVariant(preferred, width);
    if (existsSync(assetFile(variant))) {
      candidates.push(`${versionedAsset(variant)} ${width}w`);
    }
  }
  if (candidates.length && options.sizes) {
    const dimensions = imageDimensions(src);
    if (dimensions) {
      candidates.push(`${versionedAsset(preferred)} ${dimensions.width}w`);
    }
    return `<link rel="preload" as="image" imagesrcset="${candidates.join(', ')}" imagesizes="${options.sizes}" type="${type}" fetchpriority="high" />`;
  }
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
  const avif = avifAsset(src);
  const webp = webpAsset(src);
  if (!avif && !webp) {
    return img;
  }

  const sources = [];
  if (avif) {
    sources.push(imageSourceMarkup(avif, src, options, 'image/avif'));
  }
  if (webp) {
    sources.push(imageSourceMarkup(webp, src, options, 'image/webp'));
  }
  return `<picture>${sources.join('')}${img}</picture>`;
}

function imageSourceMarkup(preferred, dimensionSource, options, type) {
  // Opt-in responsive candidates. Only images whose display width is much
  // smaller than the file pass `widths`, so every other image keeps the
  // single-candidate behaviour it had before.
  const candidates = [];
  for (const width of options.widths ?? []) {
    const variant = responsiveVariant(preferred, width);
    if (existsSync(assetFile(variant))) {
      candidates.push(`${versionedAsset(variant)} ${width}w`);
    }
  }
  let srcsetValue = versionedAsset(preferred);
  const dimensions = imageDimensions(dimensionSource);
  if (candidates.length && dimensions) {
    candidates.push(`${versionedAsset(preferred)} ${dimensions.width}w`);
    srcsetValue = candidates.join(', ');
  }

  const sourceAttrs = [
    options.defer ? `data-srcset="${srcsetValue}"` : `srcset="${srcsetValue}"`,
    ...(candidates.length && options.sizes ? [`sizes="${options.sizes}"`] : []),
    `type="${type}"`
  ];
  return `<source ${sourceAttrs.join(' ')} />`;
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

function avifAsset(src) {
  if (!/\.(png|jpe?g)$/i.test(src)) {
    return undefined;
  }
  const avif = src.replace(/\.(png|jpe?g)$/i, '.avif');
  return assetExists(avif) ? avif : undefined;
}

function responsiveVariant(src, width) {
  return src.replace(/\.(avif|webp)$/i, `-${width}.$1`);
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
  } else if (
    bytes.length > 30 &&
    bytes.toString('ascii', 0, 4) === 'RIFF' &&
    bytes.toString('ascii', 8, 12) === 'WEBP'
  ) {
    size = webpDimensions(bytes);
  }
  imageSizeCache.set(src, size);
  return size;
}

/// WebP comes in three container flavours and each stores its size
/// differently. Without this every .webp fell through as "unknown", so the
/// build emitted no width/height for them - which is how the video preview
/// ended up unsized and shifting the whole page.
function webpDimensions(bytes) {
  const format = bytes.toString('ascii', 12, 16);
  if (format === 'VP8 ') {
    // Lossy: 14-bit dimensions after the start code.
    return {
      width: bytes.readUInt16LE(26) & 0x3fff,
      height: bytes.readUInt16LE(28) & 0x3fff
    };
  }
  if (format === 'VP8L') {
    // Lossless: 14-bit each, packed across four bytes after the signature.
    const bits = bytes.readUInt32LE(21);
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1
    };
  }
  if (format === 'VP8X') {
    // Extended: 24-bit canvas size, stored minus one.
    return {
      width: (bytes[24] | (bytes[25] << 8) | (bytes[26] << 16)) + 1,
      height: (bytes[27] | (bytes[28] << 8) | (bytes[29] << 16)) + 1
    };
  }
  return undefined;
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
  const loadPicture = (picture) => {
    picture.querySelectorAll('source[data-srcset]').forEach((source) => {
      source.srcset = source.dataset.srcset;
      source.removeAttribute('data-srcset');
    });
    picture.querySelectorAll('img[data-src]').forEach((image) => {
      image.src = image.dataset.src;
      image.removeAttribute('data-src');
    });
  };
  window.addEventListener('load', () => {
    const pictures = [...document.querySelectorAll('picture')]
      .filter((picture) => picture.querySelector('source[data-srcset], img[data-src]'));
    pictures.forEach((picture, index) => {
      // Carousel slides change every six seconds. Warm each future slide two
      // seconds before it is shown instead of downloading all of them during
      // the initial page-load trace.
      setTimeout(() => loadPicture(picture), 4000 + (index * 6000));
    });
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

function renderLocaleSitemap(language) {
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
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join('\n')}
</urlset>
`;
}

function renderSitemapIndex() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const items = languages
    .map(
      (language) => `  <sitemap>
    <loc>${site.origin}/sitemap-${language.code}.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>
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
