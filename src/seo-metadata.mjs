import { englishDescriptions } from './seo-descriptions-en.mjs';
import { persianDescriptions } from './seo-descriptions-fa.mjs';
import { arabicDescriptions } from './seo-descriptions-ar.mjs';
import { frenchDescriptions } from './seo-descriptions-fr.mjs';
import { turkishDescriptions } from './seo-descriptions-tr.mjs';
import { spanishDescriptions } from './seo-descriptions-es.mjs';
import { portugueseDescriptions } from './seo-descriptions-pt.mjs';

export const descriptionsByLanguage = {
  en: englishDescriptions,
  fa: persianDescriptions,
  ar: arabicDescriptions,
  fr: frenchDescriptions,
  tr: turkishDescriptions,
  es: spanishDescriptions,
  pt: portugueseDescriptions
};

// Search snippets are independent of article headings and summaries. Keep
// complete sentences/topics: cutting by character count can change meaning,
// especially in translated health information.
const labels = {
  en: { guide: 'Guide' },
  fa: { guide: 'راهنما' },
  ar: { guide: 'دليل' },
  fr: { guide: 'Guide' },
  tr: { guide: 'Rehber' },
  es: { guide: 'Guía' },
  pt: { guide: 'Guia' }
};

export const metadataOverrides = {
  'en/about': { description: 'Meet BeMama, a companion for pregnancy and parenting. Explore its daily guidance, practical tools, community and limits of AI-assisted support.' },
  'en/ai-disclaimer': { description: 'Understand how BeMama uses AI-assisted content, its limitations and safety boundaries, and why it cannot replace advice from a qualified clinician.' },
  'en/contact': { description: 'Contact BeMama support for help with your account, privacy questions, data access, export or deletion requests, and concerns about content safety.' },
  'en/pregnancy': { description: 'Explore pregnancy guides by trimester, from early symptoms and prenatal appointments to nutrition, everyday comfort and preparing for birth.' },
  'fa/': { description: 'با BeMama برای اقدام به بارداری، دوران بارداری و رشد کودک همراه شوید؛ راهنماهای روزانه، ابزارهای کاربردی و جامعه‌ای برای حمایت از والدین.' },
  'fa/about': { description: 'با BeMama و امکانات آن برای بارداری و والدگری آشنا شوید؛ راهنمای روزانه، ابزارهای کاربردی، جامعه والدین و محدودیت‌های پشتیبانی هوش مصنوعی.' },
  'fa/subscription-terms': { description: 'شرایط اشتراک BeMama را بخوانید؛ طرح‌های پولی، پرداخت فروشگاهی، تمدید و لغو اشتراک، بازپرداخت، دوره آزمایشی و نحوه تغییر قیمت.' },
  'fa/pregnancy': { description: 'راهنماهای بارداری را بر اساس سه‌ماهه پیدا کنید؛ از علائم اولیه و ویزیت‌های مراقبتی تا تغذیه، آسایش روزمره و آمادگی برای زایمان.' },
  'ar/subscription-terms': { description: 'اقرئي شروط اشتراك BeMama، بما فيها الوصول المجاني والمميز والدفع عبر المتاجر والتجديد والإلغاء وسياسة الاسترداد والفترات التجريبية.' },
  'ar/trying-to-conceive': { description: 'استعدي للحمل مع أدلة BeMama حول الدورة الشهرية ومتابعة الخصوبة وصحة ما قبل الحمل، وتجهيز الأسئلة والزيارات مع فريق الرعاية.' },
  'ar/pregnancy': { description: 'تصفحي أدلة الحمل حسب الثلث، من الأعراض الأولى ومواعيد الرعاية إلى التغذية والراحة اليومية والاستعداد للولادة ومعرفة متى تطلبين المساعدة.' },
  'ar/newborn': { description: 'اكتشفي أدلة رعاية المولود في الأشهر الأولى، من التغذية والنوم والعناية اليومية إلى تعافي الأم والعلامات التي تستدعي التواصل مع الطبيب.' },
  'ar/baby-and-child': { description: 'تصفحي أدلة نمو الرضيع والطفل، مع موضوعات عن التغذية والنوم واللعب والتواصل والسلامة وروتين الأسرة والتعامل مع مشاعر الصغير.' },
  'ar/tools': { description: 'اكتشفي أدوات BeMama في المتصفح لتنظيم رحلة الأسرة، من حاسبات الحمل والإباضة إلى قوائم الاستعداد ورعاية المولود ومتابعة نمو الطفل.' },
  'fr/': { description: 'Découvrez BeMama pour préparer une grossesse et accompagner votre enfant, avec des guides, des outils pratiques et une communauté de parents.' },
  'fr/terms': { description: 'Consultez les conditions d’utilisation de BeMama : responsabilités des utilisateurs, règles de la communauté et limites des contenus assistés par IA.' },
  'tr/': { description: 'BeMama ile gebeliğe hazırlık, hamilelik ve çocuk gelişimini keşfedin; günlük rehberlere, pratik araçlara ve ebeveyn topluluğuna ulaşın.' },
  'tr/terms': { description: 'BeMama kullanım şartlarını inceleyin: kullanıcı sorumlulukları, topluluk kuralları, hizmetin kapsamı ve yapay zeka destekli içeriğin sınırları.' },
  'tr/subscription-terms': { description: 'BeMama abonelik koşullarını okuyun; ücretsiz ve premium erişim, mağaza ödemeleri, yenileme, iptal, iade ve deneme süreleri hakkında bilgi edinin.' },
  'es/': { description: 'Descubre BeMama para preparar el embarazo y acompañar el crecimiento de tu bebé, con guías, herramientas prácticas y una comunidad de familias.' },
  'es/terms': { description: 'Consulta las condiciones de uso de BeMama, las responsabilidades del usuario, las normas de la comunidad y los límites del contenido asistido por IA.' },
  'es/subscription-terms': { description: 'Lee las condiciones de suscripción de BeMama sobre acceso gratuito y premium, pagos, renovación, cancelación, reembolsos y periodos de prueba.' },
  'pt/': { description: 'Conheça o BeMama para planejar a gravidez e acompanhar o crescimento do bebê, com orientações, ferramentas práticas e uma comunidade de famílias.' },
  'pt/terms': { description: 'Leia os termos de uso do BeMama, com as responsabilidades do usuário, as regras da comunidade e os limites do conteúdo assistido por IA.' },
  'pt/subscription-terms': { description: 'Consulte os termos de assinatura do BeMama sobre acesso gratuito e premium, pagamentos, renovação, cancelamento, reembolsos e períodos de teste.' },
  'pt/pregnancy': { description: 'Explore os guias de gravidez por trimestre, dos primeiros sintomas e consultas de pré-natal à alimentação, ao conforto e à preparação para o parto.' },
  'fa/baby-and-child/when-do-babies-walk': { title: 'کودکان چه زمانی راه می‌روند؟ | BeMama' },
  'ar/baby-and-child/nap-transitions': { title: 'انتقال الطفل بين القيلولات: العلامات والتوقيت | BeMama' },
  'fr/baby-and-child/finger-foods': { title: 'Premiers aliments à saisir pour bébé | BeMama' },
  'fr/baby-and-child/potty-readiness': { title: 'Signes de préparation au pot chez le jeune enfant | BeMama' },
  'tr/baby-and-child/finger-foods': { title: 'Bebekler İçin Elle Yenebilen Gıdalar | BeMama' },
  'es/baby-and-child/finger-foods': { title: 'Alimentos que el bebé puede comer con las manos | BeMama' },
  'pt/baby-and-child/babyproofing-basics': { title: 'Segurança em casa para bebês: checklist | BeMama' },
  'pt/baby-and-child/nap-transitions': { title: 'Quando reduzir as sonecas do bebê | BeMama' },
  'en/privacy': { description: 'Learn how BeMama collects, uses and protects your data, how long it is kept, and how to request access, export or deletion.' },
  'en/subscription-terms': { description: 'Read BeMama Premium terms for monthly and annual plans, including billing, renewal, cancellation, refunds, trials and price changes.' },
  'fa/privacy': { description: 'با نحوه جمع‌آوری، استفاده و نگهداری داده‌ها در BeMama و روش درخواست دسترسی، دریافت نسخه یا حذف اطلاعات آشنا شوید.' },
  'ar/': { description: 'اكتشفي BeMama للتخطيط للحمل ومتابعة الحمل ورعاية المولود ونمو الطفل، مع إرشادات يومية وأدوات عملية ومجتمع داعم.' },
  'ar/about': { description: 'تعرّفي على BeMama، وكيف يجمع الإرشادات اليومية والأدوات والمجتمع لدعم رحلة الأمومة، وما حدود المعلومات التي يقدمها.' },
  'ar/privacy': { description: 'تعرّفي على كيفية جمع بياناتك واستخدامها وحفظها في BeMama، وعلى طرق طلب الوصول إلى معلوماتك أو تصديرها أو حذفها.' },
  'ar/terms': { description: 'اقرئي شروط استخدام BeMama، بما فيها مسؤوليات المستخدم وقواعد المجتمع وحدود المحتوى والأدوات المدعومة بالذكاء الاصطناعي.' },
  'ar/ai-disclaimer': { description: 'تعرّفي على استخدام الذكاء الاصطناعي في BeMama وحدوده، ولماذا لا تحل المعلومات التعليمية محل المشورة أو الرعاية الطبية.' },
  'ar/contact': { description: 'تواصلي مع دعم BeMama للمساعدة في حسابك أو استخدام التطبيق، أو لطلب الوصول إلى بياناتك أو تصديرها أو حذفها.' },
  'fr/about': { description: 'Découvrez BeMama, ses conseils quotidiens, ses outils et sa communauté pour accompagner la maternité, ainsi que les limites du service.' },
  'fr/privacy': { description: 'Découvrez comment BeMama utilise et conserve vos données, et comment demander leur accès, leur export ou leur suppression.' },
  'fr/ai-disclaimer': { description: 'Découvrez le rôle et les limites de l’IA dans BeMama, et pourquoi ses informations éducatives ne remplacent pas un avis médical.' },
  'fr/contact': { description: 'Contactez le support BeMama pour obtenir de l’aide avec votre compte ou demander l’accès, l’export ou la suppression de vos données.' },
  'tr/about': { description: 'BeMama’nın annelik yolculuğunda günlük rehberlik, araçlar ve topluluk desteğini nasıl sunduğunu ve hizmetin sınırlarını öğrenin.' },
  'tr/privacy': { description: 'BeMama’nın verilerinizi nasıl topladığını, kullandığını ve sakladığını, erişim, dışa aktarma veya silme talebini nasıl yapacağınızı öğrenin.' },
  'tr/ai-disclaimer': { description: 'BeMama’da yapay zekanın kullanımını ve sınırlarını, eğitim amaçlı bilgilerin neden tıbbi görüşün yerini tutmadığını öğrenin.' },
  'tr/contact': { description: 'Hesabınız ve uygulama hakkında yardım almak veya verilerinize erişim, dışa aktarma ya da silme talebi için BeMama desteğine ulaşın.' },
  'es/about': { description: 'Conoce BeMama, sus orientaciones diarias, herramientas y comunidad para acompañar la maternidad, y los límites del servicio.' },
  'es/privacy': { description: 'Conoce cómo BeMama recopila, utiliza y conserva tus datos, y cómo solicitar acceso, exportación o eliminación de tu información.' },
  'es/ai-disclaimer': { description: 'Conoce cómo se usa la IA en BeMama, sus límites y por qué la información educativa de la aplicación no sustituye una consulta médica.' },
  'es/contact': { description: 'Contacta con el soporte de BeMama para recibir ayuda con tu cuenta o solicitar acceso, exportación o eliminación de tus datos.' },
  'pt/about': { description: 'Conheça o BeMama, suas orientações diárias, ferramentas e comunidade para acompanhar a maternidade, e os limites do serviço.' },
  'pt/privacy': { description: 'Saiba como o BeMama coleta, utiliza e armazena seus dados e como solicitar acesso, exportação ou exclusão das suas informações.' },
  'pt/ai-disclaimer': { description: 'Saiba como a IA é usada no BeMama, quais são seus limites e por que as informações educativas não substituem uma consulta médica.' },
  'pt/contact': { description: 'Fale com o suporte do BeMama para obter ajuda com sua conta ou solicitar acesso, exportação ou exclusão dos seus dados.' },
  'en/about-bemama': { title: 'BeMama App Guides and Features | BeMama', description: 'Explore BeMama app guides for daily journeys, care tools, questions and community support, with practical steps to get started at your own pace.' },
  'fa/about-bemama': { title: 'راهنمای امکانات و استفاده از برنامه BeMama', description: 'راهنمای استفاده از BeMama را مرور کنید؛ مسیر روزانه، ابزارهای مراقبت، پرسش و پاسخ و جامعه والدین، همراه با گام‌های شروع استفاده از برنامه.' },
  'ar/about-bemama': { title: 'دليل تطبيق BeMama وميزاته', description: 'اكتشفي كيفية استخدام BeMama، من المسار اليومي وأدوات الرعاية إلى الأسئلة والمجتمع، مع أدلة تساعدك على البدء وفهم حدود الخدمة.' },
  'fr/about-bemama': { title: 'Guides et fonctionnalités de l’application BeMama' },
  'tr/about-bemama': { title: 'BeMama Uygulama Rehberleri ve Özellikleri' },
  'es/about-bemama': { title: 'Guías y funciones de la aplicación BeMama' },
  'pt/about-bemama': { title: 'Guias e recursos do aplicativo BeMama', description: 'Explore os guias do aplicativo BeMama sobre jornadas diárias, ferramentas de cuidado, perguntas e comunidade, com orientações para começar.' },
  'fr/newborn/cord-and-skin-care': { title: 'Soins du cordon et de la peau du nouveau-né | BeMama' },
  'fr/trying-to-conceive/basal-body-temperature': { title: 'Température basale : suivre son ovulation | BeMama' },
  'fr/pregnancy/sleep-positions-pregnancy': { title: 'Positions pour dormir pendant la grossesse | BeMama' },
  'fr/baby-and-child/separation-anxiety': { title: 'Angoisse de séparation chez le jeune enfant | BeMama' },
  'es/newborn/cord-and-skin-care': { title: 'Cuidado del cordón y la piel del recién nacido | BeMama' },
  'es/trying-to-conceive/fertility-friendly-meal-patterns': { title: 'Alimentación y fertilidad: hábitos prácticos | BeMama' },
  'pt/newborn/cord-and-skin-care': { title: 'Cuidados com o cordão e a pele do recém-nascido | BeMama' },
  'en/trying-to-conceive/shettles-method': {
    title: 'Shettles Method: Claims and Evidence | BeMama',
    description: 'What does the evidence say about the Shettles method? Explore its timing claims and limitations for influencing a baby’s sex.'
  },
  'fa/trying-to-conceive/shettles-method': {
    title: 'روش شتلز: ادعاها و شواهد علمی | BeMama',
    description: 'روش شتلز درباره زمان‌بندی رابطه و جنسیت نوزاد چه می‌گوید؟ ادعاها، محدودیت‌ها و شواهد علمی این روش را بررسی کنید.'
  },
  'ar/trying-to-conceive/shettles-method': {
    title: 'طريقة شيتلس: الادعاءات والأدلة | BeMama',
    description: 'ما الأدلة على طريقة شيتلس؟ تعرّفي على ادعاءاتها حول توقيت العلاقة وجنس المولود، وحدود هذه الطريقة وما تقوله الأبحاث.'
  },
  'fr/trying-to-conceive/shettles-method': {
    title: 'Méthode Shettles : théorie et preuves | BeMama',
    description: 'La méthode Shettles peut-elle influencer le sexe du bébé ? Découvrez ses hypothèses sur le moment des rapports, ses limites et les preuves.'
  },
  'tr/trying-to-conceive/shettles-method': {
    title: 'Shettles Yöntemi: İddialar ve Kanıtlar | BeMama',
    description: 'Shettles yöntemi bebeğin cinsiyetini etkileyebilir mi? İlişki zamanlaması hakkındaki iddiaları, yöntemin sınırlarını ve kanıtları inceleyin.'
  },
  'es/trying-to-conceive/shettles-method': {
    title: 'Método Shettles: teoría y evidencia | BeMama',
    description: '¿Puede el método Shettles influir en el sexo del bebé? Conoce sus teorías sobre el momento de las relaciones, sus límites y la evidencia.'
  },
  'pt/trying-to-conceive/shettles-method': {
    title: 'Método Shettles: teoria e evidências | BeMama',
    description: 'O método Shettles pode influenciar o sexo do bebê? Conheça suas hipóteses sobre o momento da relação, seus limites e as evidências.'
  }
};

export function normalizeMetadata(value) {
  return String(value ?? '')
    .replace(/\s*—\s*([^—.!?؟\n]{1,180}?)\s*—\s*/g, ' ($1) ')
    .replace(/\s*—\s*/g, ': ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Ahrefs can count serialized entities as well as visible characters. Budget
// for both so apostrophes and ampersands do not reintroduce audit warnings.
export function metadataLength(value) {
  return normalizeMetadata(value)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#39;').length;
}

// The completed Ahrefs crawl flags descriptions below 100 characters. Use
// visible text for the minimum and serialized text for the maximum so HTML
// entities cannot make an under-length description appear to pass.
export const metadataLimits = Object.freeze({ descriptionMin: 100, descriptionMax: 160 });
export function validDescription(value) {
  return normalizeMetadata(value).length >= metadataLimits.descriptionMin
    && metadataLength(value) <= metadataLimits.descriptionMax;
}

export function searchMetadata({ lang, slug, title, description }) {
  if (!Object.hasOwn(descriptionsByLanguage, lang)) {
    throw new Error(`Unsupported SEO language: ${lang}`);
  }
  const override = {
    ...(descriptionsByLanguage[lang][slug] ? { description: descriptionsByLanguage[lang][slug] } : {}),
    ...metadataOverrides[`${lang}/${slug}`]
  };
  const originalTitle = normalizeMetadata(title);
  const summary = normalizeMetadata(override.description ?? description);
  let searchTitle = normalizeMetadata(override.title ?? title);
  const bareTitle = originalTitle.replace(/ \| BeMama$/, '');

  if (!override.title && metadataLength(searchTitle) > 70) {
    // Keeping the full topic is preferable when dropping the brand is enough.
    // Otherwise use a complete topic before a colon or a complete question.
    const topic = bareTitle.split(/\s*[:：]\s*/)[0];
    const question = bareTitle.match(/^.+?[?؟]/u)?.[0];
    const candidates = [bareTitle, ...[topic, question]
      .filter((value) => value && value.length >= 20 && value !== bareTitle)
      .map((value) => `${value} | BeMama`)];
    searchTitle = candidates.find((value) => metadataLength(value) <= 70) ?? searchTitle;
  }
  if (metadataLength(searchTitle) < 15) {
    searchTitle = `${bareTitle}: ${labels[lang].guide} | BeMama`;
  }

  const searchDescription = summary;
  const method = override.description ? 'editorial' : 'original';
  // New content must supply a usable summary or an explicit localized rewrite.
  // Do not synthesize topic lists, copy English, or truncate by character count.
  if (!validDescription(searchDescription)) {
    throw new Error(`SEO description needs an editorial rewrite: ${lang}/${slug}`);
  }
  if (metadataLength(searchTitle) < 15 || metadataLength(searchTitle) > 70) {
    throw new Error(`SEO title needs an editorial rewrite: ${lang}/${slug}`);
  }
  return { title: searchTitle, description: searchDescription, method };
}
