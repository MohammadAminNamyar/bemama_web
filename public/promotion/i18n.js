import { translations } from './translations.js';

const preferenceKey = 'bemama-promotion-language';
const normalize = value => String(value || '').toLowerCase().split(/[-_]/)[0];
const supported = value => Object.hasOwn(translations, normalize(value));
let saved;
try { saved = localStorage.getItem(preferenceKey); } catch { /* Storage can be disabled. */ }
let language = normalize([new URL(location.href).searchParams.get('lang'), saved, ...navigator.languages, 'en'].find(supported));

export const locale = () => language;
export const sitePath = page => `${language === 'en' ? '/' : `/${language}/`}${page ? `${page}/` : ''}`;
export function t(key, values = {}) {
  return (translations[language][key] ?? translations.en[key]).replace(/\{(\w+)\}/g, (match, name) => values[name] ?? match);
}
export const formatDate = value => new Intl.DateTimeFormat(language, { calendar: 'gregory', year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(value));
export function freeMonths(count) {
  const forms = translations[language].freeMonths;
  return (forms[new Intl.PluralRules(language).select(count)] ?? forms.other).replace('{count}', new Intl.NumberFormat(language).format(count));
}
export function setLanguage(value, persist = true) {
  language = supported(value) ? normalize(value) : 'en';
  document.documentElement.lang = language;
  document.documentElement.dir = ['fa', 'ar'].includes(language) ? 'rtl' : 'ltr';
  document.title = t('title');
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
  for (const attribute of ['placeholder', 'alt', 'aria-label']) {
    document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(node => node.setAttribute(attribute, t(node.getAttribute(`data-i18n-${attribute}`))));
  }
  document.querySelectorAll('[data-site-path]').forEach(node => { node.href = sitePath(node.dataset.sitePath); });
  document.querySelectorAll('[data-step]').forEach(node => { node.textContent = new Intl.NumberFormat(language, { minimumIntegerDigits: 2 }).format(Number(node.dataset.step)); });
  const select = document.getElementById('language');
  if (select) select.value = language;
  if (persist) {
    try { localStorage.setItem(preferenceKey, language); } catch { /* Language still works without storage. */ }
    const url = new URL(location.href); url.searchParams.set('lang', language);
    history.replaceState(null, '', url);
  }
  window.dispatchEvent(new CustomEvent('promotion-language-change'));
}
export function initLanguage() {
  document.getElementById('language')?.addEventListener('change', event => setLanguage(event.target.value));
  setLanguage(language, false);
  try { localStorage.setItem(preferenceKey, language); } catch { /* Optional preference only. */ }
}

// Translate the shared welcome copy; keep custom campaign wording intact.
const defaultCopy = {
  headline: [translations.en.headline],
  description: [translations.en.description, translations.en.description.replace('Discover thoughtful', 'Thoughtful')]
};
export function campaignCopy(offer, field) {
  const value = offer[field];
  const isDefault = !value || defaultCopy[field].some(text => text.replace(/[.!]+$/, '') === value.replace(/[.!]+$/, ''));
  return { text: isDefault ? t(field) : value, original: language !== 'en' && !isDefault };
}
