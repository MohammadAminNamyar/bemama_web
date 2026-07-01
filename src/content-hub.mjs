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

// --- Categories (drive the navigation menu and the category landing pages) ---
export const categories = [
  {
    id: 'ttc',
    slug: 'trying-to-conceive',
    order: 1,
    hero: 'hero_planning.png',
    icon: 'icon_daily_action.png',
    title: { en: 'Trying to Conceive' },
    blurb: {
      en: 'Preparing your body and mind before pregnancy — cycles, fertility, preconception health, and evidence-based conception guidance.'
    }
  },
  {
    id: 'pregnancy',
    slug: 'pregnancy',
    order: 2,
    hero: 'hero_pregnancy.png',
    icon: 'icon_ask_question.png',
    title: { en: 'Pregnancy' },
    blurb: {
      en: 'Trimester-by-trimester guidance on symptoms, nutrition, prenatal care, and getting ready for birth.'
    }
  },
  {
    id: 'newborn',
    slug: 'newborn',
    order: 3,
    hero: 'hero_baby.png',
    icon: 'icon_shield_heart.png',
    title: { en: 'Newborn Care' },
    blurb: {
      en: 'The first months — feeding, sleep, daily care, and knowing when to call your doctor, plus recovery for you.'
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
export const articles = [...ttcArticles, ...pregnancyArticles];

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
