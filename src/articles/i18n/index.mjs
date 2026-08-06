// Aggregates per-category, per-language article translations into one map:
//   hubTranslations[lang][slug] -> { title, description, intro, sections, takeaways, faq }
// Section images are NOT stored in translations , the merge in content-hub.mjs
// copies them from the English source by section index, so images stay in sync.

import { translations as ttcFa } from './trying-to-conceive.fa.mjs';
import { translations as ttcAr } from './trying-to-conceive.ar.mjs';
import { translations as ttcFr } from './trying-to-conceive.fr.mjs';
import { translations as ttcTr } from './trying-to-conceive.tr.mjs';
import { translations as ttcEs } from './trying-to-conceive.es.mjs';
import { translations as ttcPt } from './trying-to-conceive.pt.mjs';
import { translations as pregFa } from './pregnancy.fa.mjs';
import { translations as pregAr } from './pregnancy.ar.mjs';
import { translations as pregFr } from './pregnancy.fr.mjs';
import { translations as pregTr } from './pregnancy.tr.mjs';
import { translations as pregEs } from './pregnancy.es.mjs';
import { translations as pregPt } from './pregnancy.pt.mjs';
import { translations as nbFa } from './newborn.fa.mjs';
import { translations as nbAr } from './newborn.ar.mjs';
import { translations as nbFr } from './newborn.fr.mjs';
import { translations as nbTr } from './newborn.tr.mjs';
import { translations as nbEs } from './newborn.es.mjs';
import { translations as nbPt } from './newborn.pt.mjs';
import { translations as childFa } from './baby-and-child.fa.mjs';
import { translations as childAr } from './baby-and-child.ar.mjs';
import { translations as childFr } from './baby-and-child.fr.mjs';
import { translations as childTr } from './baby-and-child.tr.mjs';
import { translations as childEs } from './baby-and-child.es.mjs';
import { translations as childPt } from './baby-and-child.pt.mjs';
import { translations as appFa } from './about-bemama.fa.mjs';
import { translations as appAr } from './about-bemama.ar.mjs';
import { translations as appFr } from './about-bemama.fr.mjs';
import { translations as appTr } from './about-bemama.tr.mjs';
import { translations as appEs } from './about-bemama.es.mjs';
import { translations as appPt } from './about-bemama.pt.mjs';
import { translations as newArticlesManual } from './new-articles-manual.mjs';

export const hubTranslations = {
  fa: { ...ttcFa, ...pregFa, ...nbFa, ...childFa, ...appFa, ...newArticlesManual.fa },
  ar: { ...ttcAr, ...pregAr, ...nbAr, ...childAr, ...appAr, ...newArticlesManual.ar },
  fr: { ...ttcFr, ...pregFr, ...nbFr, ...childFr, ...appFr, ...newArticlesManual.fr },
  tr: { ...ttcTr, ...pregTr, ...nbTr, ...childTr, ...appTr, ...newArticlesManual.tr },
  es: { ...ttcEs, ...pregEs, ...nbEs, ...childEs, ...appEs, ...newArticlesManual.es },
  pt: { ...ttcPt, ...pregPt, ...nbPt, ...childPt, ...appPt, ...newArticlesManual.pt }
};
