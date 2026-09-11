// Carry only short campaign identifiers across domains, never arbitrary query
// strings (which may contain email addresses, tokens, or redirect targets).
export function withHelpCampaign(href, search) {
  const target = new URL(href);
  if (target.origin !== 'https://app.bemamas.com' || !['help', 'dinner'].includes(target.searchParams.get('tool'))) return href;
  const incoming = new URLSearchParams(search);
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content']) {
    const value = incoming.get(key);
    if (value && /^[a-zA-Z0-9_-]{1,64}$/.test(value)) target.searchParams.set(key, value);
  }
  return target.href;
}

if (typeof document !== 'undefined') {
  for (const link of document.querySelectorAll('[data-quick-help]')) {
    link.href = withHelpCampaign(link.href, window.location.search);
  }
}
