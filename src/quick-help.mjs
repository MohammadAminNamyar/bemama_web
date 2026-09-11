export const quickHelpCopy = {
  en: { action: 'Find a quick baby activity', note: 'Ages 0–35 months. Free, no account needed.' },
  fr: { action: 'Trouver une activité pour bébé', note: 'De 0 à 35 mois. Gratuit, sans compte.' },
  es: { action: 'Busca una actividad para tu bebé', note: 'De 0 a 35 meses. Gratis y sin cuenta.' },
  pt: { action: 'Encontre uma atividade para seu bebê', note: 'De 0 a 35 meses. Grátis e sem conta.' },
  tr: { action: 'Bebeğiniz için kısa bir etkinlik bulun', note: '0–35 ay. Ücretsiz, hesap gerekmez.' },
  fa: { action: 'یک فعالیت کوتاه برای کودکتان پیدا کنید', note: '۰ تا ۳۵ ماه. رایگان، بدون نیاز به حساب.' },
  ar: { action: 'ابحث عن نشاط قصير لطفلك', note: 'من ٠ إلى ٣٥ شهرًا. مجانًا ومن دون حساب.' },
};

export function quickHelpUrl(language) {
  const url = new URL('https://app.bemamas.com/');
  url.searchParams.set('tool', 'help');
  url.searchParams.set('lang', Object.hasOwn(quickHelpCopy, language) ? language : 'en');
  url.searchParams.set('utm_source', 'bemamas');
  url.searchParams.set('utm_medium', 'website');
  url.searchParams.set('utm_campaign', 'quick_help');
  return url.href;
}
