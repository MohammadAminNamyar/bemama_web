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
import { expansionArticles, careTools } from './articles/expansion.mjs';
import { expansionUpgradedArticles } from './articles/expansion-upgraded.mjs';
import { newArticles } from './articles/new-articles.mjs';
import { questionArticles } from './articles/question-guides.mjs';
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
    title: {
      en: 'Baby & Child',
      fa: 'نوزاد و کودک',
      ar: 'الرضيع والطفل',
      fr: 'Bébé et enfant',
      tr: 'Bebek ve çocuk',
      es: 'Bebé y niño',
      pt: 'Bebê e criança'
    },
    blurb: {
      en: 'Milestones, feeding, sleep, and positive parenting as your baby grows into a curious, confident child.',
      fa: 'نقاط عطف رشد، تغذیه، خواب و والدگری مثبت در مسیری که نوزاد شما به کودکی کنجکاو و بااعتمادبه‌نفس تبدیل می‌شود.',
      ar: 'مراحل النمو والتغذية والنوم والتربية الإيجابية بينما يكبر طفلك ليصبح طفلاً فضولياً واثقاً.',
      fr: 'Étapes du développement, alimentation, sommeil et parentalité positive à mesure que votre bébé devient un enfant curieux et confiant.',
      tr: 'Bebeğiniz meraklı ve özgüvenli bir çocuğa dönüşürken gelişim basamakları, beslenme, uyku ve olumlu ebeveynlik.',
      es: 'Hitos, alimentación, sueño y crianza positiva mientras tu bebé crece y se convierte en un niño curioso y seguro.',
      pt: 'Marcos do desenvolvimento, alimentação, sono e parentalidade positiva enquanto seu bebê se torna uma criança curiosa e confiante.'
    }
  },
  {
    id: 'app',
    slug: 'about-bemama',
    order: 6,
    hero: 'app_daily_plan.png',
    icon: 'icon_ask_ai.png',
    title: {
      en: 'About BeMama',
      fa: 'درباره BeMama',
      ar: 'حول BeMama',
      fr: 'À propos de BeMama',
      tr: 'BeMama hakkında',
      es: 'Acerca de BeMama',
      pt: 'Sobre a BeMama'
    },
    blurb: {
      en: 'How BeMama supports every stage — Daily Journey, Q&A, community, and tools — and how to get started.',
      fa: 'BeMama چگونه در هر مرحله همراه شماست — مسیر روزانه، پرسش و پاسخ، جامعه و ابزارها — و چگونه شروع کنید.',
      ar: 'كيف تدعمك BeMama في كل مرحلة — المسار اليومي والأسئلة والمجتمع والأدوات — وكيف تبدئين.',
      fr: 'Comment BeMama vous accompagne à chaque étape — Parcours quotidien, Q&R, communauté et outils — et comment commencer.',
      tr: 'BeMama her aşamada nasıl destek olur — Günlük Yolculuk, Soru-Cevap, topluluk ve araçlar — ve nasıl başlanır.',
      es: 'Cómo te acompaña BeMama en cada etapa —Camino Diario, preguntas, comunidad y herramientas— y cómo empezar.',
      pt: 'Como a BeMama apoia cada fase — Jornada Diária, perguntas, comunidade e ferramentas — e como começar.'
    }
  },
  {
    id: 'tools',
    slug: 'tools',
    order: 5,
    hero: 'content/app-tools.jpg',
    icon: 'icon_daily_action.png',
    title: {
      en: 'Tools',
      fa: 'ابزارها',
      ar: 'الأدوات',
      fr: 'Outils',
      tr: 'Araçlar',
      es: 'Herramientas',
      pt: 'Ferramentas'
    },
    blurb: {
      en: 'Browser-only calculators, trackers, checklists, and planners for fertility, pregnancy, newborn care, and child growth.',
      fa: 'ماشین‌حساب‌ها، پیگیرها، چک‌لیست‌ها و برنامه‌ریزهای مرورگری برای باروری، بارداری، مراقبت نوزاد و رشد کودک.',
      ar: 'حاسبات ومتتبعات وقوائم ومخططات داخل المتصفح للخصوبة والحمل ورعاية المولود ونمو الطفل.',
      fr: 'Calculateurs, suivis, listes et planificateurs dans le navigateur pour fertilité, grossesse, nouveau-né et croissance de l’enfant.',
      tr: 'Doğurganlık, hamilelik, yenidoğan bakımı ve çocuk gelişimi için tarayıcıda çalışan hesaplayıcılar, takipçiler, listeler ve planlayıcılar.',
      es: 'Calculadoras, registros, listas y planificadores en el navegador para fertilidad, embarazo, recién nacido y crecimiento infantil.',
      pt: 'Calculadoras, registros, listas e planejadores no navegador para fertilidade, gravidez, recém-nascido e crescimento infantil.'
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
    openTool: 'Open tool',
    ctaTitle: 'Take BeMama with you',
    ctaText:
      'Get stage-by-stage daily guidance, a supportive community, and helpful tools in one calm app.',
    ctaButton: 'Open the BeMama app',
    updatedLabel: 'Updated',
    localizedNotice:
      'This article is shown in English while its translation is prepared.'
  },
  fa: {
    home: 'خانه',
    inThisSection: 'در این بخش',
    takeaways: 'نکته‌های کلیدی',
    faq: 'پرسش‌های پرتکرار',
    related: 'مقاله‌های مرتبط',
    readMore: 'خواندن راهنما',
    ctaTitle: 'BeMama را همراه خود داشته باشید',
    ctaText: 'راهنمایی روزانه متناسب با مرحله شما، جامعه‌ای حمایتگر و ابزارهای کاربردی در یک اپ آرام.',
    ctaButton: 'باز کردن اپ BeMama',
    updatedLabel: 'به‌روزرسانی',
    localizedNotice: 'این مقاله تا آماده شدن ترجمه، به انگلیسی نمایش داده می‌شود.'
  },
  ar: {
    home: 'الرئيسية',
    inThisSection: 'في هذا القسم',
    takeaways: 'أهم النقاط',
    faq: 'الأسئلة الشائعة',
    related: 'مقالات ذات صلة',
    readMore: 'قراءة الدليل',
    ctaTitle: 'خذي BeMama معك',
    ctaText: 'إرشاد يومي حسب مرحلتك، ومجتمع داعم، وأدوات مفيدة في تطبيق واحد هادئ.',
    ctaButton: 'فتح تطبيق BeMama',
    updatedLabel: 'آخر تحديث',
    localizedNotice: 'يُعرض هذا المقال بالإنجليزية حتى تجهز الترجمة.'
  },
  fr: {
    home: 'Accueil',
    inThisSection: 'Dans cette section',
    takeaways: 'Points clés',
    faq: 'Questions fréquentes',
    related: 'Articles liés',
    readMore: 'Lire le guide',
    ctaTitle: 'Emportez BeMama avec vous',
    ctaText: 'Des conseils quotidiens adaptés à votre étape, une communauté bienveillante et des outils pratiques dans une seule application sereine.',
    ctaButton: 'Ouvrir l’application BeMama',
    updatedLabel: 'Mis à jour',
    localizedNotice: 'Cet article est affiché en anglais en attendant sa traduction.'
  },
  tr: {
    home: 'Ana sayfa',
    inThisSection: 'Bu bölümde',
    takeaways: 'Önemli noktalar',
    faq: 'Sık sorulan sorular',
    related: 'İlgili yazılar',
    readMore: 'Rehberi oku',
    ctaTitle: 'BeMama’yı yanınıza alın',
    ctaText: 'Bulunduğunuz döneme göre günlük rehberlik, destekleyici bir topluluk ve pratik araçlar tek bir sakin uygulamada.',
    ctaButton: 'BeMama uygulamasını aç',
    updatedLabel: 'Güncellendi',
    localizedNotice: 'Bu yazı, çevirisi hazırlanana kadar İngilizce gösterilir.'
  },
  es: {
    home: 'Inicio',
    inThisSection: 'En esta sección',
    takeaways: 'Puntos clave',
    faq: 'Preguntas frecuentes',
    related: 'Artículos relacionados',
    readMore: 'Leer la guía',
    ctaTitle: 'Lleva BeMama contigo',
    ctaText: 'Orientación diaria según tu etapa, una comunidad que acompaña y herramientas útiles en una sola app tranquila.',
    ctaButton: 'Abrir la app BeMama',
    updatedLabel: 'Actualizado',
    localizedNotice: 'Este artículo se muestra en inglés mientras se prepara su traducción.'
  },
  pt: {
    home: 'Início',
    inThisSection: 'Nesta seção',
    takeaways: 'Pontos-chave',
    faq: 'Perguntas frequentes',
    related: 'Artigos relacionados',
    readMore: 'Ler o guia',
    ctaTitle: 'Leve a BeMama com você',
    ctaText: 'Orientação diária para a sua fase, uma comunidade acolhedora e ferramentas práticas em um único app tranquilo.',
    ctaButton: 'Abrir o app BeMama',
    updatedLabel: 'Atualizado',
    localizedNotice: 'Este artigo é exibido em inglês enquanto a tradução é preparada.'
  }
};

// Medical disclaimer shown on every learning article (English + fallback).
export const hubDisclaimer = {
  en: 'This article is general education, not medical advice, diagnosis, or treatment. Always talk with a qualified healthcare professional about your situation, and seek urgent care for emergencies.',
  fa: 'این مقاله صرفاً آموزش عمومی است و توصیه، تشخیص یا درمان پزشکی نیست. همیشه درباره شرایط خود با یک متخصص واجد شرایط مشورت کنید و در موارد اضطراری فوراً به مراکز درمانی مراجعه کنید.',
  ar: 'هذا المقال للتثقيف العام فقط وليس نصيحة طبية أو تشخيصاً أو علاجاً. تحدثي دائماً مع مختص رعاية صحية مؤهل حول حالتك، وفي الحالات الطارئة اطلبي الرعاية العاجلة فوراً.',
  fr: 'Cet article relève de l’éducation générale et ne constitue ni un avis médical, ni un diagnostic, ni un traitement. Parlez toujours de votre situation à un professionnel de santé qualifié et, en cas d’urgence, consultez immédiatement.',
  tr: 'Bu yazı genel bilgilendirme amaçlıdır; tıbbi tavsiye, tanı veya tedavi değildir. Durumunuzu her zaman nitelikli bir sağlık uzmanıyla konuşun ve acil durumlarda hemen sağlık kuruluşuna başvurun.',
  es: 'Este artículo es educación general y no constituye consejo médico, diagnóstico ni tratamiento. Habla siempre de tu situación con un profesional de salud calificado y, ante una emergencia, busca atención urgente.',
  pt: 'Este artigo é apenas educação geral e não constitui aconselhamento médico, diagnóstico ou tratamento. Converse sempre com um profissional de saúde qualificado sobre a sua situação e, em emergências, procure atendimento imediato.'
};

// --- Articles -------------------------------------------------------------
export const articles = [
  ...ttcArticles,
  ...pregnancyArticles,
  ...newbornArticles,
  ...childArticles,
  ...expansionArticles,
  ...expansionUpgradedArticles,
  ...newArticles,
  ...questionArticles,
  ...careTools,
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
