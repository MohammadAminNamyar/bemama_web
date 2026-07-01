// Content hub: SEO/long-form learning pages grouped into categories.
//
// Design goals:
//  - Scales to ~50 articles across 7 languages without bloating pages.mjs.
//  - English is the source of truth; any language missing a field falls back to
//    English (the renderer shows a localized "shown in English" notice), so
//    articles can be authored in English first and translated later.
//  - Slugs are nested under their category (e.g. 'pregnancy/first-trimester')
//    for clean, SEO-friendly URLs and breadcrumbs.
//
// To add an article: append to `articles` with a unique `slug`, a `category`
// id, a `hero` image (in /assets), and at minimum an `i18n.en` body.

import { site } from './pages.mjs';
import { ttcArticles } from './articles/trying-to-conceive.mjs';
import { pregnancyArticles } from './articles/pregnancy.mjs';
import { newbornArticles } from './articles/newborn.mjs';
import { childArticles } from './articles/baby-and-child.mjs';
import { appArticles } from './articles/about-bemama.mjs';
import { hubTranslations } from './articles/i18n/index.mjs';

// --- Categories (drive the navigation menu and the category landing pages) ---
export const categories = [
  {
    id: 'ttc',
    slug: 'trying-to-conceive',
    order: 1,
    hero: 'hero_planning.png',
    icon: 'icon_daily_action.png',
    title: {
      en: 'Trying to Conceive',
      fa: 'اقدام به بارداری',
      ar: 'التخطيط للحمل',
      fr: 'Essayer de concevoir',
      tr: 'Gebelik hazırlığı',
      es: 'En busca del embarazo',
      pt: 'Tentando engravidar'
    },
    blurb: {
      en: 'Preparing your body and mind before pregnancy — cycles, fertility, preconception health, and evidence-based conception guidance.',
      fa: 'آماده‌سازی جسم و ذهن پیش از بارداری — چرخه قاعدگی، باروری، سلامت پیش از بارداری و راهنمایی مبتنی بر شواهد.',
      ar: 'تجهيز جسمك وذهنك قبل الحمل — الدورة الشهرية والخصوبة وصحة ما قبل الحمل وإرشادات مبنية على الأدلة.',
      fr: 'Préparer votre corps et votre esprit avant la grossesse — cycles, fertilité, santé préconceptionnelle et conseils fondés sur les preuves.',
      tr: 'Gebelik öncesinde bedeninizi ve zihninizi hazırlamak — döngüler, doğurganlık, gebelik öncesi sağlık ve kanıta dayalı rehberlik.',
      es: 'Prepara tu cuerpo y tu mente antes del embarazo: ciclos, fertilidad, salud preconcepcional y orientación basada en la evidencia.',
      pt: 'Preparando corpo e mente antes da gravidez — ciclos, fertilidade, saúde pré-concepção e orientação baseada em evidências.'
    }
  },
  {
    id: 'pregnancy',
    slug: 'pregnancy',
    order: 2,
    hero: 'hero_pregnancy.png',
    icon: 'icon_ask_question.png',
    title: {
      en: 'Pregnancy',
      fa: 'بارداری',
      ar: 'الحمل',
      fr: 'Grossesse',
      tr: 'Hamilelik',
      es: 'Embarazo',
      pt: 'Gravidez'
    },
    blurb: {
      en: 'Trimester-by-trimester guidance on symptoms, nutrition, prenatal care, and getting ready for birth.',
      fa: 'راهنمای سه‌ماهه به سه‌ماهه درباره علائم، تغذیه، مراقبت‌های بارداری و آمادگی برای زایمان.',
      ar: 'إرشادات لكل ثلث من الحمل حول الأعراض والتغذية ورعاية الحمل والاستعداد للولادة.',
      fr: 'Des conseils trimestre par trimestre sur les symptômes, la nutrition, le suivi prénatal et la préparation à la naissance.',
      tr: 'Belirtiler, beslenme, gebelik takibi ve doğuma hazırlık üzerine üçer aylık dönemlere göre rehberlik.',
      es: 'Orientación trimestre a trimestre sobre síntomas, nutrición, control prenatal y preparación para el parto.',
      pt: 'Orientação trimestre a trimestre sobre sintomas, nutrição, pré-natal e preparação para o parto.'
    }
  },
  {
    id: 'newborn',
    slug: 'newborn',
    order: 3,
    hero: 'hero_baby.png',
    icon: 'icon_shield_heart.png',
    title: {
      en: 'Newborn Care',
      fa: 'مراقبت از نوزاد',
      ar: 'رعاية المولود',
      fr: 'Soins du nouveau-né',
      tr: 'Yenidoğan bakımı',
      es: 'Cuidado del recién nacido',
      pt: 'Cuidados com o recém-nascido'
    },
    blurb: {
      en: 'The first months — feeding, sleep, daily care, and knowing when to call your doctor, plus recovery for you.',
      fa: 'ماه‌های نخست — تغذیه، خواب، مراقبت روزانه و اینکه چه زمانی باید با پزشک تماس بگیرید؛ به‌علاوه بهبودی خود شما.',
      ar: 'الأشهر الأولى — التغذية والنوم والرعاية اليومية ومعرفة متى تتصلين بالطبيب، إضافة إلى تعافيك أنت.',
      fr: 'Les premiers mois — alimentation, sommeil, soins quotidiens, savoir quand appeler le médecin, et votre propre récupération.',
      tr: 'İlk aylar — beslenme, uyku, günlük bakım, doktoru ne zaman aramanız gerektiği ve sizin toparlanmanız.',
      es: 'Los primeros meses: alimentación, sueño, cuidados diarios, cuándo llamar al médico y tu propia recuperación.',
      pt: 'Os primeiros meses — alimentação, sono, cuidados diários, quando ligar para o médico e a sua recuperação.'
    }
  },
  {
    id: 'child',
    slug: 'baby-and-child',
    order: 4,
    hero: 'hero_child.png',
    icon: 'icon_ask_ai.png',
    title: { en: 'Baby & Child' },
    blurb: {
      en: 'Milestones, feeding, sleep, and positive parenting as your baby grows into a curious, confident child.'
    }
  },
  {
    id: 'app',
    slug: 'about-bemama',
    order: 5,
    hero: 'app_daily_plan.png',
    icon: 'icon_ask_ai.png',
    title: { en: 'About BeMama' },
    blurb: {
      en: 'How BeMama supports every stage — Daily Journey, Q&A, community, and tools — and how to get started.'
    }
  }
];

// --- UI strings used by the article/category templates (English + fallback) ---
export const hubUi = {
  en: {
    home: 'Home',
    inThisSection: 'In this section',
    takeaways: 'Key takeaways',
    faq: 'Frequently asked questions',
    related: 'Related articles',
    readMore: 'Read guide',
    ctaTitle: 'Take BeMama with you',
    ctaText:
      'Get stage-by-stage daily guidance, a supportive community, and helpful tools in one calm app.',
    ctaButton: 'Open the BeMama app',
    updatedLabel: 'Updated',
    localizedNotice:
      'This article is shown in English while its translation is prepared.'
  }
};

// Medical disclaimer shown on every learning article (English + fallback).
export const hubDisclaimer = {
  en: 'This article is general education, not medical advice, diagnosis, or treatment. Always talk with a qualified healthcare professional about your situation, and seek urgent care for emergencies.'
};

// --- Articles -------------------------------------------------------------
export const articles = [
  ...ttcArticles,
  ...pregnancyArticles,
  ...newbornArticles,
  ...childArticles,
  ...appArticles
];

// Merge per-language translations into each article's i18n map. Section images
// are copied from the English source by index so translators never manage
// image paths and images always stay in sync with the English original.
for (const article of articles) {
  const en = article.i18n.en;
  for (const [lang, map] of Object.entries(hubTranslations)) {
    const t = map[article.slug];
    if (!t) continue;
    article.i18n[lang] = {
      ...t,
      sections: (t.sections || []).map((section, index) => {
        const image = en.sections[index]?.image;
        return image ? { ...section, image } : { ...section };
      })
    };
  }
}

// --- Derived lookups (used by the build) ---------------------------------
export const categoryById = new Map(categories.map((category) => [category.id, category]));
export const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));
export const articleBySlug = new Map(articles.map((article) => [article.slug, article]));

export function articlesInCategory(categoryId) {
  return articles.filter((article) => article.category === categoryId);
}

// Every slug the hub adds to the site (category landing pages + articles).
export const hubSlugs = [
  ...categories.map((category) => category.slug),
  ...articles.map((article) => article.slug)
];

// Pick a localized value with English fallback.
export function pick(map, languageCode) {
  if (!map) return undefined;
  return map[languageCode] ?? map.en;
}

// Localized UI strings / disclaimer with English fallback.
export function ui(languageCode) {
  return { ...hubUi.en, ...(hubUi[languageCode] ?? {}) };
}

export function disclaimer(languageCode) {
  return hubDisclaimer[languageCode] ?? hubDisclaimer.en;
}

export { site };
