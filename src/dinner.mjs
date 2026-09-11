export const dinnerCopy = {
  en: { action: 'Find dinner for your baby', note: 'Meal ideas for ages 6–35 months, with feeding and ingredient choices.' },
  fr: { action: 'Trouver un repas pour bébé', note: 'Idées pour les 6–35 mois, selon la texture et les ingrédients choisis.' },
  es: { action: 'Busca una cena para tu bebé', note: 'Ideas para 6–35 meses, según la textura y los ingredientes elegidos.' },
  pt: { action: 'Encontre um jantar para seu bebê', note: 'Ideias para 6–35 meses, conforme a textura e os ingredientes escolhidos.' },
  tr: { action: 'Bebeğiniz için akşam yemeği bulun', note: '6–35 ay için kıvam ve malzeme seçimlerine göre yemek fikirleri.' },
  fa: { action: 'برای کودکتان شام پیدا کنید', note: 'پیشنهاد غذا برای ۶ تا ۳۵ ماه، با انتخاب بافت و مواد غذایی.' },
  ar: { action: 'ابحث عن عشاء لطفلك', note: 'أفكار لعمر ٦–٣٥ شهرًا حسب قوام الطعام والمكونات المختارة.' },
};

export function dinnerUrl(language) {
  const url = new URL('https://app.bemamas.com/');
  url.searchParams.set('tool', 'dinner');
  url.searchParams.set('lang', Object.hasOwn(dinnerCopy, language) ? language : 'en');
  url.searchParams.set('utm_source', 'bemamas');
  url.searchParams.set('utm_medium', 'website');
  url.searchParams.set('utm_campaign', 'baby_dinner');
  return url.href;
}
