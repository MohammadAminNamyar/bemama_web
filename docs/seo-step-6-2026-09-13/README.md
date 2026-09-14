# Step 6 — product localization and practical article expansion

Implemented for combined local review, September 13, 2026. The user authorized 6A, 6B and 6C consecutively. The generated site is in `dist`; this batch has not been merged, pushed or deployed. No campaign or production account setting was changed.

## Scope and progress

- **6A:** six localized homepages and four product guides in each of the six non-English languages: overview, baby tracking, Premium and getting started. This improves **30 existing pages**. Wording follows the approved English product facts and the prior native-language research. Same-language links explain the actual workflows, account/public-tool distinction, records, reports and free/paid boundaries. The homepage action opens public tools in every language.
- **6B:** two original English guides: four-month sleep and six-month feeding. The sleep visual compares a fictional complete log with an unrecorded afternoon. The feeding guide adds a flexible day illustration and an editable, printable observation sheet.
- **6C:** both articles are available in Persian, Arabic, French, Turkish, Spanish and Brazilian Portuguese, with localized headings, metadata, FAQs, visuals, numbers and links. This creates **14 new article URLs across seven languages**, representing **two topics**, not fourteen distinct keyword gaps.
- **Layout fixes found during QA:** constrained the homepage phone-shadow decoration so it does not widen the mobile page; corrected the invalid transparent carousel placeholder. Existing theme, typography, page components and route conventions remain in use.

## Review the result

The local preview server runs at `http://localhost:4173/`. Use the language menu or the links below. In the sleep article, compare the two log states and open the arithmetic table. In the feeding article, enter fictional observations, add an entry, and use Print / save as PDF.

| Language | Homepage | Sleep guide | Feeding guide |
|---|---|---|---|
| English | [Home](http://localhost:4173/) | [Sleep](http://localhost:4173/baby-and-child/4-month-old-sleep-schedule/) | [Feeding](http://localhost:4173/baby-and-child/6-month-old-feeding-schedule/) |
| فارسی | [خانه](http://localhost:4173/fa/) | [خواب](http://localhost:4173/fa/baby-and-child/4-month-old-sleep-schedule/) | [تغذیه](http://localhost:4173/fa/baby-and-child/6-month-old-feeding-schedule/) |
| العربية | [الرئيسية](http://localhost:4173/ar/) | [النوم](http://localhost:4173/ar/baby-and-child/4-month-old-sleep-schedule/) | [التغذية](http://localhost:4173/ar/baby-and-child/6-month-old-feeding-schedule/) |
| Français | [Accueil](http://localhost:4173/fr/) | [Sommeil](http://localhost:4173/fr/baby-and-child/4-month-old-sleep-schedule/) | [Alimentation](http://localhost:4173/fr/baby-and-child/6-month-old-feeding-schedule/) |
| Türkçe | [Ana sayfa](http://localhost:4173/tr/) | [Uyku](http://localhost:4173/tr/baby-and-child/4-month-old-sleep-schedule/) | [Beslenme](http://localhost:4173/tr/baby-and-child/6-month-old-feeding-schedule/) |
| Español | [Inicio](http://localhost:4173/es/) | [Sueño](http://localhost:4173/es/baby-and-child/4-month-old-sleep-schedule/) | [Alimentación](http://localhost:4173/es/baby-and-child/6-month-old-feeding-schedule/) |
| Português | [Início](http://localhost:4173/pt/) | [Sono](http://localhost:4173/pt/baby-and-child/4-month-old-sleep-schedule/) | [Alimentação](http://localhost:4173/pt/baby-and-child/6-month-old-feeding-schedule/) |

The four product pages retain `/about-bemama/why-bemama/`, `/about-bemama/tools/`, `/about-bemama/premium/` and `/about-bemama/getting-started/`, with the corresponding language prefix. No existing URL was renamed.

## What the practical additions do

- Sleep: a 24-hour timeline, patterned legend, equal-grid totals and an accessible table. The complete fictional day totals **13 h 45 min**. Removing the afternoon produces **13 h recorded sleep plus 6 h unknown**, without treating missing entries as waking. These are worked arithmetic examples, not a recommended sleep schedule, diagnostic score or next-nap predictor.
- Feeding: flexible day parts without prescribed times, intake amounts or feed counts. The observation sheet distinguishes nursing, bottle amounts and units, foods/textures, cues and questions. Additional entries receive localized labels and keyboard focus. Printing preserves multiline notes and hides the surrounding article.
- The sheet is temporary page data: no account, submission or automatic storage. It explicitly tells readers to print before leaving if they want a copy. It does not measure milk transfer or nutritional adequacy.
- New articles link to the existing tracking guide and relevant milestones/first-food guides. Reciprocal links make the articles discoverable. They are included in the site search, language alternates and sitemap by the existing build. Older sleep-regression and sleep-training guidance was not clinically re-reviewed or promoted in the new articles' related-card selections.
- Existing hero images were reused and visually checked. Charts are rendered from exact data and code; no generated image is presented as professional health data.

## Evidence boundaries

The starting point is the installed Step 5 working tree, which was not committed at the beginning of this step. [Baseline](baseline.json) captures that actual source state. [Scope comparison](scope-comparison.json) confirms that the only existing article objects changed are the four product guides; their English text remains unchanged. Other existing health articles and tools retain their source content.

The [keyword-to-page map](keyword-page-map.json) separates the measured seed, competitor intent source, native-language source and final heading. [Additional Planner observations](keyword-research.json) retain this step's French/Spanish findings. The [sources and decisions](sources-and-decisions.md) explain the regional and clinical boundaries. These records support this bounded rollout; they are not a complete competitor crawl or a measurement of organic rankings or appearances in AI answers.

Prior demand and publisher evidence remain in Step 5. Additional Google Ads checks on September 13 used All locations, the selected language, Google, Last 12 months (the same September 2025–August 2026 period), with Exclude adult ideas. No campaign was enabled.

| Language | Submitted phrase | Observed range |
|---|---|---|
| French | sommeil bébé 4 mois | Not returned; unmeasured |
| French | rythme sommeil bébé 4 mois | Not returned; unmeasured |
| French | alimentation bébé 6 mois | Not returned; unmeasured |
| French | diversification alimentaire 6 mois | 1K–10K |
| Spanish | sueño bebé 4 meses | Not returned; unmeasured |
| Spanish | rutina sueño bebé 4 meses | Not returned; unmeasured |
| Spanish | alimentación bebé 6 meses | Not returned; unmeasured |
| Spanish | alimentación complementaria 6 meses | 1K–10K |

The UI reported that some keywords were removed. Its help explained that sensitive topics can be flagged as a precaution. It did not identify a phrase-specific reason. These are not zero-demand findings. Related ideas were visible but are not being presented as independent measured gaps. Ranges can group close variants and cannot be summed into a traffic forecast.

## Validation

The final build succeeded. **120 tests passed**, followed by validation of **1,414 HTML files and 1,407 localized routes**. The SEO audit reports zero duplicate titles/descriptions, metadata length/localization issues or oversized images. The active indexable URL count is 1,379, including the fourteen additions.

Chrome checks covered **44 pages at 390 px** (the thirty localized homepage/product pages and fourteen new articles) and **21 pages at 768 px** (all seven homepages and fourteen articles), with no horizontal overflow. The final mobile check found no broken images or missing article controls. Desktop chart inspection, Persian/Arabic layouts, keyboard activation and focus, worksheet row addition, multiline print values, and PDF generation were also checked. Temporary test values and browser overrides were cleared. See [validation summary](validation-summary.json), [test output](tests.log), [site validation](validation.log) and [SEO audit](seo-audit.log).

## Review status

All new text is prepared for the user's combined local review. Sources are checked; **no independent native-speaking editor or qualified pediatric reviewer has reviewed these new pages**. No medical-review badge, credential, competitor data, guaranteed ranking improvement or personalized schedule is claimed. The new examples are original teaching and observation aids. The earlier article briefs' medical/editorial review remains a publication consideration; this implementation does not record that review as completed.

This batch is ready for review as local code and generated pages. Check the language choices and practical usefulness before release. The worksheet's temporary-data behavior and the lack of clinical/native-editor approval are the material limitations.
