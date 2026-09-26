import { productGapCopy } from './website-gap-product-copy.mjs';
import { gapGuides } from './website-gap-guides.mjs';
import { collectionCopy } from './website-gap-collections.mjs';
import { gapDetails } from './website-gap-details.mjs';
import { birthCopy } from './website-gap-tools.mjs';
import { formatEditorialDate } from './article-dates.mjs';

export function applyWebsiteGaps(articles) {
  const langs = Object.keys(productGapCopy);
  const find = slug => { const article=articles.find(a=>a.slug===slug); if(!article)throw new Error(`Missing gap destination: ${slug}`); return article; };
  const section = ([heading,...paragraphs],id) => ({heading,paragraphs,id});
  const add = (slug,lang,value) => {
    const article=find(slug); article.expandedGuide=true;
    article.i18n[lang].sections.push(value); article.i18n[lang].updatedIso='2026-09-26';
  };
  const links = (lang,slugs) => slugs.map(slug=>({url:`/${lang==='en'?'':lang+'/'}${slug}/`,label:find(slug).i18n[lang].title}));
  const more = (slug,lang,slugs) => add(slug,lang,{heading:productGapCopy[lang].more,paragraphs:[],links:links(lang,slugs)});

  for (const [key, guide] of Object.entries(gapGuides)) {
    articles.push({slug:guide.slug,category:guide.category,hero:guide.hero,expandedGuide:true,updatedIso:'2026-09-26',i18n:Object.fromEntries(langs.map(lang=>{
      const [title,description,intro,...parts]=guide[lang];
      const data={title,description,intro,sections:parts.map((p,i)=>section(p,`step-${i+1}`)),takeaways:[],faq:[],updatedIso:'2026-09-26',byline:key==='cycle'?productGapCopy[lang].byline:collectionCopy[lang].byline};
      if(key==='cycle')data.sections[2].image='tour/cycle-calendar.png';
      const ev=gapDetails[lang].evidence;
      if(guide.sources)data.evidence={updated:formatEditorialDate(lang,'2026-09-26'),updatedIso:'2026-09-26',guidance:ev.slice(key==='sleep'?0:2,key==='sleep'?2:4),bemama:ev[4],safety:ev[5],sources:guide.sources.map(([organization,title,url])=>({organization,title,url}))};
      return [lang,data];
    }))});
  }
  for(const lang of langs) {
    const c=productGapCopy[lang], col=collectionCopy[lang];
    for(const key of ['shared','offline','pumping','reports','growth']) {
      const s=section(c[key],key);
      if(key==='shared')s.paragraphs.push(gapDetails[lang].sharing);
      if(key==='reports') {
        const r=gapDetails[lang].report;
        s.table={caption:r[0],headers:r.slice(1,3),rows:[[r[3],'60'],[r[4],'90'],[r[5],'150']]};
      }
      if(key==='growth')s.image='tour/growth-log.png';
      add('about-bemama/tools',lang,s);
    }
    add('about-bemama/getting-started',lang,section(c.offline,'offline-sync'));
    add('about-bemama/premium',lang,{...section(c.access,'feature-access'),table:{headers:c.headers,rows:c.rows}});
    add('about-bemama/qa-and-community',lang,section(c.community,'join-and-report'));
    for(const guide of Object.values(gapGuides))more(guide.slug,lang,guide.links);
    more('about-bemama/why-bemama',lang,['about-bemama/cycle-tracker']);
    more('trying-to-conceive/menstrual-cycle-fertile-window',lang,['about-bemama/cycle-tracker']);
    more('trying-to-conceive/basal-body-temperature',lang,['about-bemama/cycle-tracker']);
    more('newborn/pumping-storing-milk',lang,['about-bemama/tools']);
    more('newborn/breastfeeding-guide',lang,['about-bemama/tools']);
    more('about-bemama/tools',lang,['tools/growth-log','about-bemama/premium','about-bemama/getting-started']);
    more('newborn/newborn-sleep',lang,['baby-and-child/3-month-old-sleep-schedule','baby-and-child/4-month-old-sleep-schedule','baby-and-child/sleep-regressions','baby-and-child/nap-transitions']);
    // Existing six-section routine guides keep their reviewed content shape.
    for(const [slug,target]of [['baby-and-child/4-month-old-sleep-schedule',gapGuides.sleep.slug],['baby-and-child/6-month-old-feeding-schedule',gapGuides.feeding.slug]]) {
      find(slug).i18n[lang].sections.at(-1).links=links(lang,[target]);
    }
    add('baby-and-child/starting-solids',lang,section(gapGuides.feeding[lang][5],'feeding-methods'));
    more('baby-and-child/starting-solids',lang,[gapGuides.feeding.slug,'baby-and-child/6-month-old-feeding-schedule','about-bemama/tools']);
    add('newborn/postpartum-recovery',lang,section(col.post,'fourth-trimester'));
    const check=gapDetails[lang].check;
    add('newborn/postpartum-recovery',lang,{heading:check[0],paragraphs:[],items:check.slice(1)});
    more('newborn/postpartum-recovery',lang,['pregnancy/postpartum-plan','newborn/postpartum-bleeding-basics','newborn/postpartum-mood-changes','newborn/parent-rest-newborn']);
    const recovery=find('newborn/postpartum-recovery').i18n[lang];
    recovery.sections.at(-1).links.push({url:'https://www.cdc.gov/hearher/maternal-warning-signs/index.html',label:'CDC · Hear Her'});
    more('pregnancy/postpartum-plan',lang,['newborn/postpartum-recovery']);
    const weeks=col.weeks;
    for(const [week,index]of [[5,1],[6,3],[8,5]]) {
      add('pregnancy/pregnancy-weeks-4-8',lang,{...section([weeks[index],weeks[index+1]],`week-${week}`),links:[{label:`NHS · ${weeks[index]}`,url:`https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-${week}/`}]});
    }
    const ranges=articles.filter(a=>/^pregnancy\/pregnancy-weeks-/.test(a.slug)).map(a=>a.slug);
    for(const slug of ranges)more(slug,lang,ranges.filter(s=>s!==slug));
    const birth=find('pregnancy/birth-plan');birth.expandedGuide=true;
    Object.assign(birth.i18n[lang],{title:col.birth[0],description:col.birth[1],worksheetLabel:birthCopy[lang][0],updatedIso:'2026-09-26'});
    birth.i18n[lang].sections.at(-1).links=[{label:'NHS · '+col.birth[0],url:'https://www.nhs.uk/best-start-in-life/pregnancy/preparing-for-labour-and-birth/what-to-include-in-your-birth-plan/'}];
    const n=col.names;
    add('tools/baby-name-shortlist',lang,{heading:n[0],paragraphs:[n[1]],table:{headers:n.slice(2,5),rows:[['Amin · أمين',n[5],n[8]],['Amani · أماني',n[5],n[9]],['Nur · نور',n[7],n[10]],['Deniz',n[6],n[11]],['Ayla',n[6],n[12]],['Umut',n[6],n[13]]]},links:['amin','amani','nur','deniz','ayla-2','umut'].map(name=>({label:`Behind the Name · ${name==='ayla-2'?'Ayla':name[0].toUpperCase()+name.slice(1)}`,url:`https://www.behindthename.com/name/${name}`}))});
  }
}
