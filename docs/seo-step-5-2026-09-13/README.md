# Step 5 — multilingual keyword research and localization pilot

September 13, 2026. Local branch: `codex/step-5-localization`. Baseline: approved Step 3 checkpoint `4f1fbdae4`. This step is ready for review; it has not been merged, pushed or published.

## Completed

- Researched 56 phrases across English, Persian, Arabic, French, Turkish, Spanish and Portuguese in Google Ads Keyword Planner. Returned ranges exist for 42; 14 remain unmeasured.
- Compared native publisher wording from BabyCenter's localized listings, Huckleberry, Ooma, Wachanga, Philips and Altibbi. Measured search demand and observed publisher wording are documented separately.
- Updated the six translations of the existing pregnancy-tracker / Daily Journey guide from the approved English source.
- Updated the combined due-date and pregnancy-week calculator in all seven languages: titles, search descriptions, labels and the visible explanation of its dating convention.
- Preserved the theme, routes, guide structure, images, calculator logic and saved-record formats. Fixed spacing after the author name in the Turkish product byline.
- Prepared a terminology and evidence handoff for baby tracking and the two future health articles.

The 56 phrases are research inputs, not a count of missing words or added keywords. The pilot improves two existing page intents. It does not claim a whole-site native-language gap audit, better rankings or more AI citations.

## Review

- [Keyword register: settings, exact ranges and unmeasured phrases](keyword-research.json)
- [Publisher sources, language decisions and next-article glossary](sources-and-decisions.md)
- [Before and after](before-after.md)
- [Retained original localized copy](content-before.json)
- [Verified source scope](scope-verification.json)
- [Validation details](validation.md)

Local previews, while the server is running:

| Language | Pregnancy-tracker guide | Calculator |
|---|---|---|
| English | [Guide](http://localhost:4173/about-bemama/daily-journey/) | [Calculator](http://localhost:4173/tools/due-date-calculator/) |
| فارسی | [راهنما](http://localhost:4173/fa/about-bemama/daily-journey/) | [محاسبه‌گر](http://localhost:4173/fa/tools/due-date-calculator/) |
| العربية | [الدليل](http://localhost:4173/ar/about-bemama/daily-journey/) | [الحاسبة](http://localhost:4173/ar/tools/due-date-calculator/) |
| Français | [Guide](http://localhost:4173/fr/about-bemama/daily-journey/) | [Calculateur](http://localhost:4173/fr/tools/due-date-calculator/) |
| Türkçe | [Rehber](http://localhost:4173/tr/about-bemama/daily-journey/) | [Hesaplayıcı](http://localhost:4173/tr/tools/due-date-calculator/) |
| Español | [Guía](http://localhost:4173/es/about-bemama/daily-journey/) | [Calculadora](http://localhost:4173/es/tools/due-date-calculator/) |
| Português | [Guia](http://localhost:4173/pt/about-bemama/daily-journey/) | [Calculadora](http://localhost:4173/pt/tools/due-date-calculator/) |

## Validation result

Build succeeded; **115 tests passed**. Validation checked **1,400 HTML files and 1,393 localized routes**. The metadata audit reported no length, duplicate or localization issues.

Chrome checked the calculator across all seven languages at a 390 × 844 viewport, plus French desktop. The six localized guides had no horizontal overflow in the tested mobile viewport. The French known-date option and SA labels were checked; Persian Gregorian input and Persian-calendar output were checked. Automated checks cover localized destinations, metadata, input methods, dates and preservation of the guide's section/image structure.

The broad generated-file diff includes shared runtime asset references, catalogs, related cards, search data and sitemap revisions. It is not evidence of new editorial content on every changed generated page.

## Remaining boundaries and next checkpoint

The current step ends here for user review. The remaining product guides and homepage translations are outside this pilot. The four-month sleep and six-month feeding articles remain briefs; no new health article was published.

Before the wider rollout, resolve outstanding native wording/demand research where needed, obtain native-speaking editorial review and review medical content with appropriate expertise. Country-specific research remains separate from the worldwide language batches. All described app functions still rely on the source verification recorded in Step 3; this step did not test authenticated live app saves or exports.

After approval, proceed to the remaining verified content/localization expansion. Merge and installation remain separate release actions.

