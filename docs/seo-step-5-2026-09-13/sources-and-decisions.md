# Sources and localization decisions

Research observed September 12–13, 2026. This is a two-page localization pilot, not a competitor ranking report or a complete audit of every native-language market.

## What counts as evidence

The [keyword register](keyword-research.json) retains **56 submitted phrases and 42 returned search ranges**. Fourteen phrases were not returned in the observed provided-keyword rows. A missing range is unknown, not zero. These counts do not mean 56 missing words, 42 new gaps, or 42 phrases added to the website.

The seven batches use All locations, the corresponding language, Google search and Last 12 months. The date selector explicitly showed September 2025–August 2026 on September 13. No ad or campaign was enabled. Keyword Planner estimates may combine close variants. We have not measured organic rankings, competitor traffic or appearances in AI answers.

## Publisher wording used for the pilot

These are short observed terms or concepts, not copied paragraphs. BeMama's explanations are original and retain the previously approved product facts.

| Language | Publisher evidence | Wording and decision |
|---|---|---|
| English | [BabyCenter app listing](https://play.google.com/store/apps/details?id=com.babycenter.pregnancytracker), [Huckleberry tracking](https://huckleberrycare.com/product/tracking) | Pregnancy tracking, week-by-week guidance, feeding and sleep are existing competitor intents. Keep the approved English pregnancy-tracker guide as the source. |
| Persian | [Ooma official app listing](https://play.google.com/store/apps/details?hl=fa&id=org.ooma.oomaapp), [Ooma website](https://ooma.org/) | Observed «اپلیکیشن بارداری», «بارداری هفته به هفته», «تقویم بارداری». Use these naturally in the guide. Planner also measured «محاسبه سن بارداری» and «محاسبه تاریخ زایمان»; use them for calculator intent rather than the old literal “machine calculator” wording. |
| Arabic | [BabyCenter Arabic listing](https://play.google.com/store/apps/details?hl=ar&id=com.babycenter.pregnancytracker), [Altibbi calculator](https://altibbi.com/calculator/pregnancycalc) | Observed «حاسبة الحمل», «موعد الولادة», «عمر الحمل» and week-by-week guidance. Use native calculation and tracking terms. Altibbi also offers calendar features that BeMama does not; do not inherit its Hijri claim. |
| French | [BabyCenter French listing](https://play.google.com/store/apps/details?hl=fr&id=com.babycenter.pregnancytracker), [Huckleberry French-Canadian listing](https://play.google.com/store/apps/details/?hl=fr-CA&id=com.huckleberry_labs.app) | Observed “application de suivi de grossesse”, “application de suivi de bébé”, “suivi du sommeil” and “minuteur d’allaitement”. Use suivi de grossesse and week-by-week phrasing for the guide; keep baby logs as a related workflow, without claiming sleep prediction. |
| Turkish | [Wachanga's Turkish listing](https://play.google.com/store/apps/details?hl=tr&id=com.wachanga.pregnancy), [Philips pregnancy help](https://pregnancy-help.philips-digital.com/hc/tr/sections/15010020114461-Genel) | Observed “gebelik takibi”, “hafta hafta gebelik”, “hamilelik uygulaması”, “tahmini doğum tarihi”. Use gebelik/hamilelik in natural contexts. A missing Planner range for gebelik takibi does not invalidate the publisher wording. |
| Spanish | [BabyCenter Spanish listing](https://play.google.com/store/apps/details?hl=es_EC&id=com.babycenter.pregnancytracker) | Observed “app de embarazo”, “fecha prevista de parto” and week-by-week guidance. Planner supports the app and calculator variants. Use “fecha probable de parto” for an estimate; no claim of an exact delivery date. The listing locale is Ecuador, not evidence of uniform regional preferences. |
| Portuguese | [BabyCenter Portuguese listing](https://play.google.com/store/apps/details?hl=pt&id=com.babycenter.pregnancytracker) | Observed “aplicativo de gravidez”, “calendário de gravidez”, “calculadora da gravidez” and due-date terminology. Keep the site's Brazilian Portuguese style. Planner also measured “calculadora gestacional”; use it in the calculator title, explained with data provável do parto and weeks. |

A localized store listing demonstrates wording in that listing. It does **not** prove the installed competitor app supports that language. BabyCenter's full website was not comprehensively crawled. No competitor's authority, medical review, performance statistics or proprietary features are attributed to BeMama.

## Dating and calendar choices

- [Assurance Maladie](https://www.ameli.fr/assure/sante/devenir-parent/grossesse/grossesse-en-bonne-sante/grossesse/premiers-symptomes-grossesse) distinguishes weeks counted from the last period (SA) from weeks since conception. The French result and progress labels now identify SA.
- BeMama's existing implementation uses 280 days, with a cycle adjustment for the last-period method, and treats an entered due date as 40 weeks. This convention is now visible beside the method selector in all languages. A date defined as 41 SA is not compatible with that known-date option; the French help explicitly says so.
- The [NHS calculator](https://www.nhs.uk/pregnancy/finding-out/due-date-calculator/) explains the last-period/cycle inputs and the role of a dating scan. [Royal Berkshire NHS guidance](https://www.royalberkshire.nhs.uk/media/r0fcsaml/baby-due-dates-and-how-it-affects-my-care.pdf) describes the conventional 280-day calculation. The pilot describes the existing calculation, not a new clinical method.
- Persian and Arabic date-input labels explicitly say Gregorian. The Persian result already uses the Persian calendar through the locale formatter; the help now makes the input/result distinction explicit. No Jalali or Hijri input conversion was added.

## Article expansion handoff

The English competitor intents are evidenced by Huckleberry's [four-month sleep schedule](https://huckleberrycare.com/blog/4-month-olds-and-sleep) and [six-month feeding schedule](https://huckleberrycare.com/blog/6-month-old-feeding-schedule). Their existing BeMama briefs remain in [Step 3](../seo-step-3-2026-09-12/article-briefs.md).

| Language | Sleep article research phrase | Feeding article research phrase | Current demand evidence |
|---|---|---|---|
| en | 4 month sleep schedule | 6 month feeding schedule | Both 1K–10K |
| fa | خواب نوزاد چهار ماهه | تغذیه کودک شش ماهه | Both 10–100 |
| ar | نوم الطفل في الشهر الرابع | تغذية الطفل في الشهر السادس | 100–1K / 10–100 |
| fr | sommeil bébé 4 mois | alimentation bébé 6 mois | Neither returned in this run |
| tr | 4 aylık bebek uyku düzeni | 6 aylık bebek beslenmesi | 1K–10K / 100–1K |
| es | sueño bebé 4 meses | alimentación bebé 6 meses | Neither returned in this run |
| pt | sono bebê 4 meses | alimentação bebê 6 meses | Both 100–1K |

These native-age phrases are **research candidates**, not verified quotations from native competitor articles. Before publishing the translated health articles, confirm native publisher terminology and regional intent, resolve the French/Spanish demand gaps, and review the health content with appropriate expertise. Measured demand alone is not permission to publish schedules, feeding quantities or medical claims.

Baby-tracking glossary seeds are retained in the register: breastfeeding tracker; ثبت شیردهی; تسجيل الرضاعة; suivi bébé; emzirme takibi; registro lactancia; registro de amamentação. Use them only where the feature exists. Exact demand was returned for English, Turkish and Portuguese; the other entries remain unmeasured in this run. Huckleberry's French listing supports the broader French tracking vocabulary.

## Translation rules for subsequent steps

1. Map each intent to an existing page or the approved new article brief; do not create a page for every synonym.
2. Keep source wording, native search phrase, measured range and editorial choice as separate fields.
3. Write grammatical headings and paragraphs. Search fragments can take articles, prepositions and diacritics in prose.
4. Preserve clinical units, completed-week meaning, access limits and the distinction between app accounts and public-tool data.
5. Keep one shared route structure and theme. Translate navigation labels and anchor text while linking to the same language.
6. Do not add exact-date guarantees, sleep prediction, medical review claims, or regional calendar features just because competitors target them.
7. Native-speaking editorial review and a country-specific split remain rollout checks; this pilot has not had independent native-speaker approval.

