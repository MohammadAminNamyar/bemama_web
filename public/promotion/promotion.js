import { initLanguage, locale, t, freeMonths, formatDate, campaignCopy } from './i18n.js';
const api = 'https://core.bemamas.com/api/public/promotions';
const code = (new URL(location.href).searchParams.get('code') ?? '').trim().toUpperCase();
const el = id => document.getElementById(id);
let offer;
let errorKey;
let copied = false;
function appLink(promotion) {
  const url = new URL('https://app.bemamas.com/');
  url.searchParams.set('lang', locale());
  if (promotion) url.searchParams.set('promotion', promotion);
  return url.href;
}
function render() {
  el('form-heading').textContent = t('joinTitle');
  el('normal-signin').href = appLink();
  el('copy-status').textContent = copied ? t('copied') : '';
  if (errorKey) el('error').textContent = t(errorKey);
  if (!offer) return;
  const headline = campaignCopy(offer, 'headline');
  const description = campaignCopy(offer, 'description');
  el('headline').textContent = headline.text;
  el('description').textContent = description.text;
  el('headline').dir = headline.original ? 'auto' : '';
  el('description').dir = description.original ? 'auto' : '';
  el('original-copy').hidden = !headline.original && !description.original;
  el('months').textContent = freeMonths(offer.durationMonths);
  el('terms-summary').textContent = t('termsSummary', {months:freeMonths(offer.durationMonths)}) + (offer.endsAt ? ` ${t('claimBy', {date:formatDate(offer.endsAt)})}` : '');
  el('invitation-code').textContent = offer.code;
  el('continue-signup').href = appLink(offer.code);
}
el('copy-code').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(offer.code); copied = true; render(); }
  catch {
    // The code remains selectable even when clipboard permission is unavailable.
    const selection = getSelection(); const range = document.createRange();
    range.selectNodeContents(el('invitation-code')); selection.removeAllRanges(); selection.addRange(range);
  }
});
window.addEventListener('promotion-language-change', render);
initLanguage();
async function load() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    if (!/^[A-Z0-9][A-Z0-9_-]{2,39}$/.test(code)) { errorKey = 'badLink'; return; }
    const response = await fetch(`${api}/${encodeURIComponent(code)}`, {headers:{Accept:'application/json'},credentials:'omit',cache:'no-store',signal:controller.signal});
    if (!response.ok) { errorKey = response.status >= 500 ? 'network' : 'unavailable'; return; }
    offer = await response.json();
    render();
    el('gift').hidden = false;
    el('join-options').hidden = false;
  } catch { errorKey = controller.signal.aborted ? 'timeout' : 'network'; }
  finally { clearTimeout(timeout); el('loading').hidden = true; el('error').hidden = !errorKey; render(); }
}
void load();
