// Recorded editorial dates, never the build clock. `article.updated` is the
// existing shared article revision; translations may record an independent
// revision with i18n[lang].updatedIso. Do not invent translation/review dates.
const locales = {
  en: 'en-CA', fa: 'fa-IR', ar: 'ar', fr: 'fr-CA',
  tr: 'tr-TR', es: 'es', pt: 'pt-BR'
};
const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

export const evidenceDateLabels = {
  en: 'Evidence notes updated',
  fa: 'به‌روزرسانی یادداشت‌های مبتنی بر شواهد',
  ar: 'آخر تحديث للملاحظات المستندة إلى الأدلة',
  fr: 'Notes sur les données probantes mises à jour',
  tr: 'Kanıta dayalı notların güncellenme tarihi',
  es: 'Notas de evidencia actualizadas',
  pt: 'Notas de evidências atualizadas'
};

export function editorialDateIso(value) {
  if (value == null) return null;
  if (typeof value !== 'string' || !value.trim()) throw new Error('Missing editorial date');
  let iso = value;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) {
    const match = value.match(/^([A-Z][a-z]+) (\d{1,2}), (\d{4})$/);
    const month = match ? months.indexOf(match[1]) : -1;
    if (month < 0) throw new Error(`Invalid editorial date: ${value}`);
    iso = `${match[3]}-${String(month + 1).padStart(2, '0')}-${match[2].padStart(2, '0')}`;
  }
  const parsed = new Date(`${iso}T12:00:00Z`);
  if (!Number.isFinite(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== iso) {
    throw new Error(`Invalid editorial date: ${value}`);
  }
  return iso;
}

export function formatEditorialDate(lang, iso) {
  if (!Object.hasOwn(locales, lang)) throw new Error(`Unsupported date language: ${lang}`);
  const value = editorialDateIso(iso);
  if (!value) return null;
  return new Intl.DateTimeFormat(locales[lang], {
    calendar: 'gregory', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
  }).format(new Date(`${value}T12:00:00Z`));
}

export function articleDates(article, lang, evidence = null) {
  if (!Object.hasOwn(locales, lang)) throw new Error(`Unsupported date language: ${lang}`);
  const localized = article.i18n?.[lang];
  const articleIso = editorialDateIso(localized?.updatedIso ?? localized?.updated
    ?? article.updatedIso ?? article.updated);
  // Evidence notes are part of the page, but are not a medical-review date.
  // A newer note may advance the page date; an older note must never roll it back.
  const evidenceIso = editorialDateIso(evidence?.updatedIso);
  const modifiedIso = [articleIso, evidenceIso].filter(Boolean).sort().at(-1) ?? null;
  return {
    articleIso, evidenceIso, modifiedIso,
    modifiedLabel: formatEditorialDate(lang, modifiedIso),
    evidenceLabel: formatEditorialDate(lang, evidenceIso)
  };
}
