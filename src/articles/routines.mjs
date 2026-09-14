import { routinesEn } from './routines.en.mjs';
import { routineSources, routineLocalSources, routineSourceNotes } from './routine-sources.mjs';
import { formatEditorialDate } from '../article-dates.mjs';
import { routinesFa } from './i18n/routines.fa.mjs';
import { routinesAr } from './i18n/routines.ar.mjs';
import { routinesFr } from './i18n/routines.fr.mjs';
import { routinesTr } from './i18n/routines.tr.mjs';
import { routinesEs } from './i18n/routines.es.mjs';
import { routinesPt } from './i18n/routines.pt.mjs';

const packs = { en: routinesEn, fa:routinesFa, ar:routinesAr, fr:routinesFr, tr:routinesTr, es:routinesEs, pt:routinesPt };
const slugs = { sleep: 'baby-and-child/4-month-old-sleep-schedule', feeding: 'baby-and-child/6-month-old-feeding-schedule' };
const linkText = {
  en: { sleepSource: 'AASM sleep duration guidance', safeSleep: 'AAP safe-sleep guidance', feedingSource: 'NHS first-food guidance', readiness: 'CDC readiness and food safety', tracking: 'BeMama feeding and sleep tracking guide', solids: 'Introducing solid foods' },
  fa: {sleepSource:'راهنمای مدت خواب AASM',safeSleep:'خواب ایمن از AAP',feedingSource:'غذای نخست در راهنمای NHS',readiness:'آمادگی و ایمنی غذا از CDC',tracking:'راهنمای ثبت تغذیه و خواب BeMama',solids:'آغاز غذای کمکی',local:'منبع فارسی و زمینه محلی'},
  ar: {sleepSource:'إرشادات مدة النوم من AASM',safeSleep:'النوم الآمن من AAP',feedingSource:'الأطعمة الأولى من NHS',readiness:'الاستعداد وسلامة الطعام من CDC',tracking:'دليل تسجيل التغذية والنوم في BeMama',solids:'بدء الطعام التكميلي',local:'مصدر عربي للسياق المحلي'},
  fr: {sleepSource:'Durée du sommeil selon l’AASM',safeSleep:'Couchage sûr selon l’AAP',feedingSource:'Premiers aliments : NHS',readiness:'Préparation et sécurité : CDC',tracking:'Guide BeMama des repas et du sommeil',solids:'Commencer les aliments complémentaires',local:'Repères en français au Québec'},
  tr: {sleepSource:'AASM uyku süresi rehberi',safeSleep:'AAP güvenli uyku rehberi',feedingSource:'NHS ilk gıdalar rehberi',readiness:'CDC hazır olma ve gıda güvenliği',tracking:'BeMama beslenme ve uyku kayıt rehberi',solids:'Ek gıdaya başlama',local:'Türkçe kaynak ve yerel bağlam'},
  es: {sleepSource:'Duración del sueño según AASM',safeSleep:'Sueño seguro según AAP',feedingSource:'Primeros alimentos: NHS',readiness:'Preparación y seguridad: CDC',tracking:'Guía BeMama de tomas y sueño',solids:'Introducir alimentos complementarios',local:'Información de pediatría en español'},
  pt: {sleepSource:'Duração do sono segundo a AASM',safeSleep:'Sono seguro segundo a AAP',feedingSource:'Primeiros alimentos: NHS',readiness:'Prontidão e segurança: CDC',tracking:'Guia BeMama de alimentação e sono',solids:'Começar os alimentos complementares',local:'Orientações em português no Brasil'}
};
const bylines = { en: 'Educational guide by {name}. Sources are listed below.', fa:'راهنمای آموزشی به قلم {name}. منابع در ادامه آمده‌اند.', ar:'دليل تثقيفي بقلم {name}. المصادر مذكورة أدناه.', fr:'Guide éducatif par {name}. Sources indiquées ci-dessous.', tr:'{name} tarafından hazırlanan bilgilendirme rehberi. Kaynaklar aşağıdadır.', es:'Guía educativa de {name}. Fuentes al final de la página.', pt:'Guia educativo por {name}. Fontes indicadas abaixo.' };

export const routineArticles = Object.entries(slugs).map(([kind,slug]) => ({
  slug, category: 'child', hero: kind === 'sleep' ? 'content/newborn-sleep.jpg' : 'content/child-solids.jpg',
  updatedIso: '2026-09-13', routineGuide: true,
  i18n: Object.fromEntries(Object.entries(packs).map(([lang,pack]) => {
    const copy=pack[kind], prefix=lang==='en'?'':`${lang}/`;
    const urls={sleepSource:routineSources.sleep[0].url, safeSleep:routineSources.sleep[1].url,
      feedingSource:routineSources.feeding[0].url, readiness:routineSources.feeding[1].url,
      tracking:`https://bemamas.com/${prefix}about-bemama/tools/`, solids:`https://bemamas.com/${prefix}baby-and-child/starting-solids/`,
      local:routineLocalSources[lang]?.[kind]?.url};
    const used=new Set();
    const expand=text=>text.replace(/\{(\w+)\}/g,(_,key)=>{
      if(!urls[key] || !linkText[lang][key]) throw new Error(`Missing routine link: ${lang}/${key}`);
      used.add(key); return urls[key];
    });
    const data={ title:copy.title, description:copy.description, intro:copy.intro,
      sections:copy.sections.map(([heading,...paragraphs],index)=>({ heading, paragraphs:paragraphs.map(expand),
        ...(index===2?{visual:kind==='sleep'?'sleep':'feeding-day'}:{}),
        ...(kind==='feeding'&&index===3?{visual:'feeding-sheet'}:{}) })),
      takeaways:copy.takeaways, faq:copy.faq.map(([q,a])=>({q,a:expand(a)})),
      updatedIso:'2026-09-13', byline:bylines[lang],
      evidence:{...copy.evidence,guidance:[...copy.evidence.guidance,routineSourceNotes[lang][kind]],updated:formatEditorialDate(lang,'2026-09-13'),updatedIso:'2026-09-13',sources:[...routineSources[kind],...(routineLocalSources[lang]?.[kind]?[routineLocalSources[lang][kind]]:[])]}
    };
    data.linkLabels=Object.fromEntries([...used].map(key=>[urls[key],linkText[lang][key]]));
    return [lang,data];
  }))
}));
