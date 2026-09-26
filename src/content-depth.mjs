import en from './articles/i18n/depth.en.mjs';
import ar from './articles/i18n/depth.ar.mjs';
import fa from './articles/i18n/depth.fa.mjs';
import fr from './articles/i18n/depth.fr.mjs';
import es from './articles/i18n/depth.es.mjs';
import pt from './articles/i18n/depth.pt.mjs';
import tr from './articles/i18n/depth.tr.mjs';
import { nameCollection } from './name-collections.mjs';

export const depthCopy = {en, ar, fa, fr, es, pt, tr};
const source = (organization, title, url) => ({organization, title, url});
const sleepSource = source('NHS', 'Helping your baby to sleep', 'https://www.nhs.uk/baby/caring-for-a-newborn/helping-your-baby-to-sleep/');
const cuesSource = source('CDC', 'Signs your child is hungry or full', 'https://www.cdc.gov/infant-toddler-nutrition/mealtime/signs-your-child-is-hungry-or-full.html');
const chokingSource = source('CDC', 'Choking hazards', 'https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html');
const postSources = [
  source('NHS', 'Your body after the birth', 'https://www.nhs.uk/pregnancy/labour-and-birth/your-body/'),
  source('NHS', 'Caesarean recovery', 'https://www.nhs.uk/tests-and-treatments/caesarean-section/recovery/'),
  source('NHS', 'Your 6-week postnatal check', 'https://www.nhs.uk/baby/support-and-services/your-6-week-postnatal-check/')
];
const links = sources => sources.map(s => ({label:`${s.organization} · ${s.title}`, url:s.url}));
const section = ([heading, ...paragraphs], id) => ({heading, paragraphs, id});
const addFaq = (data, pairs) => { data.faq = [...(data.faq || []), ...pairs.map(([q,a]) => ({q,a}))]; };

// Run after the first gap expansion: each change applies to an existing destination.
export function applyContentDepth(articles) {
  const get = (slug, lang) => {
    const article = articles.find(a => a.slug === slug);
    if (!article?.i18n[lang]) throw Error(`Missing depth destination: ${lang}/${slug}`);
    article.expandedGuide = true;
    return article.i18n[lang];
  };
  for (const [lang, copy] of Object.entries(depthCopy)) {
    const tools = get('about-bemama/tools', lang);
    // This paragraph predates the anchored Reports section. Keep both accurate.
    tools.sections[5].paragraphs[0] = copy.product.csvSummary;
    for (const key of ['pumping', 'offline', 'reports', 'growth']) {
      const target = tools.sections.find(s => s.id === key);
      const example = key === 'reports' ? target.paragraphs.slice(1) : [];
      target.paragraphs = [...copy.product[key], ...example];
    }
    const pumping = tools.sections.find(s => s.id === 'pumping');
    Object.assign(pumping, {image:'tour/care-home.png', imageAlt:pumping.heading, caption:copy.product.caption[0]});
    const growth = tools.sections.find(s => s.id === 'growth');
    Object.assign(growth, {imageAlt:growth.heading, caption:copy.product.caption[1]});
    addFaq(tools, copy.product.faq);
    get('about-bemama/getting-started', lang).sections.find(s => s.id === 'offline-sync').paragraphs = copy.product.offline;

    const premium = get('about-bemama/premium', lang);
    const access = premium.sections.find(s => s.id === 'feature-access');
    access.paragraphs = [copy.access.intro];
    access.table.rows = copy.access.rows;
    addFaq(premium, copy.access.faq);
    const cycle = get('about-bemama/cycle-tracker', lang);
    cycle.sections[2].caption = copy.product.caption[2];
    addFaq(cycle, copy.cycleFaq);

    for (const [key, slug] of [['sleep','baby-and-child/3-month-old-sleep-schedule'], ['feeding','baby-and-child/7-8-month-old-feeding-schedule']]) {
      const data = get(slug, lang);
      const additions = copy[key].sections.map((row,i) => section(row, `${key}-detail-${i+1}`));
      additions[0].table = copy[key].table;
      additions[1].links = links(key === 'sleep' ? [sleepSource] : [cuesSource,chokingSource]);
      data.sections.splice(data.sections.length-1, 0, ...additions);
      addFaq(data, copy[key].faq);
      if (key === 'feeding' && !data.evidence.sources.some(s => s.url === cuesSource.url)) data.evidence.sources.push(cuesSource);
    }
    const weeks = get('pregnancy/pregnancy-weeks-4-8', lang);
    [5,6,8].forEach((week,i) => Object.assign(weeks.sections.find(s => s.id === `week-${week}`), section(copy.weeks[i], `week-${week}`)));
    addFaq(weeks, copy.weeksFaq);
    const recovery = get('newborn/postpartum-recovery', lang);
    const recoverySections = copy.postpartum.sections.map((row,i) => ({...section(row, `recovery-stage-${i+1}`), links:links([postSources[i]])}));
    const afterOverview = recovery.sections.findIndex(s => s.id === 'fourth-trimester') + 1;
    recovery.sections.splice(afterOverview, 0, ...recoverySections);
    addFaq(recovery, copy.postpartum.faq);

    const names = get('tools/baby-name-shortlist', lang);
    const collection = nameCollection(lang);
    Object.assign(names, {title:collection.title,description:collection.description,intro:collection.description});
    // Static catalogue remains readable/searchable by crawlers without JavaScript.
    // The interactive equivalent replaces it only after successful initialization.
    names.sections[names.sections.length-1] = {
      id:'name-meanings-static', heading:collection.ui.title,
      paragraphs:[collection.ui.help], nameCollection:collection
    };
    names.tool.nameCollection = collection;
  }
}
