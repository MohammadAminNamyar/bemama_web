// Shared structure only. Each language supplies original, source-aligned copy.
// Tokens keep internal destinations in the reader's language.
const paths = { daily: 'about-bemama/daily-journey', tracking: 'about-bemama/tools', premium: 'about-bemama/premium', start: 'about-bemama/getting-started', tools: 'tools', privacy: 'privacy', terms: 'subscription-terms', contact: 'contact', website: '' };
export function productRollout(lang, byline, labels, guides) {
  const urls = Object.fromEntries(Object.entries(paths).map(([key, path]) => [key, `https://bemamas.com/${lang}/${path ? path + '/' : ''}`]));
  urls.app = 'https://app.bemamas.com/';
  return Object.fromEntries(Object.entries(guides).map(([slug, guide]) => {
    const used = new Set();
    const expand = text => text.replace(/\{(\w+)\}/g, (token, key) => {
      if (!urls[key] || !labels[key]) throw new Error(`Missing localized product link: ${lang}/${key}`);
      used.add(key); return urls[key];
    });
    const data = {
      title: guide.title, description: guide.description, intro: expand(guide.intro),
      sections: guide.sections.map(([heading, ...paragraphs]) => ({ heading, paragraphs: paragraphs.map(expand) })),
      takeaways: guide.takeaways,
      faq: guide.faq.map(([q, a]) => ({q, a: expand(a)})),
      updatedIso: '2026-09-13', byline
    };
    data.linkLabels = Object.fromEntries([...used].map(key => [urls[key], labels[key]]));
    return [`about-bemama/${slug}`, data];
  }));
}
