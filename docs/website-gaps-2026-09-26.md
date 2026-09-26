# Website gap implementation — local review

Date: September 26, 2026

Implemented in `C:\WorkSpace\Practice\bemama_web` from the [14-opportunity investigation](C:/Users/amin.namyar/Documents/Codex/2026-09-12/ca/outputs/bemama-website-gaps-2026-09-26.md). Nothing was committed, pushed, deployed or submitted for indexing. Application code and store listings were not changed.

## Scope and coverage

The work extends existing destinations and adds three distinct guides. All additions are localized into the website’s seven languages: English, Persian, Arabic, French, Turkish, Spanish and Portuguese. The three guides create 21 new localized pages. Translated copy is not a substitute for country-specific keyword-demand research.

Local preview: [website](http://127.0.0.1:4173/). Non-English routes use `/fa/`, `/ar/`, `/fr/`, `/tr/`, `/es/` and `/pt/` before the paths below.

| Gap | Local destination | Implemented | Remaining boundary |
|---|---|---|---|
| W01 Shared baby tracking | [Tracking guide](http://127.0.0.1:4173/about-bemama/tools/#shared) | Separate child/twin profiles, selected-person checks, caregiver handover, separate accounts, invitation acceptance and owner access removal. | Backend invitation rules were verified; the complete current client invitation/removal UI was not found. Copy qualifies availability and does not invent screen names. A real app walkthrough and screenshots remain. |
| W02 Offline and synchronization | [Getting started](http://127.0.0.1:4173/about-bemama/getting-started/#offline-sync), [tracking](http://127.0.0.1:4173/about-bemama/tools/#offline) | Pending/failed records, reconnecting, conflicts, checking records before changing devices, CSV versus restore, and separation of browser tools from app data. | No mixed Android/iOS device test was performed; interoperability is not promised beyond verified behavior. |
| W03 Pumping | [Pumping section](http://127.0.0.1:4173/about-bemama/tools/#pumping) | Total or left/right amounts, mL/oz, corrections, history and Reports; links from milk-storage and breastfeeding guides. | No milk-inventory claim. |
| W04 Cycle app workflow | [New cycle guide](http://127.0.0.1:4173/about-bemama/cycle-tracker/) | Person/journey selection, periods, symptoms, temperature, calendar interpretation, current tour image and estimate limits; links from cycle education and product overview. | Does not claim confirmed ovulation or contraceptive reliability. |
| W05 Free/Premium access | [Feature matrix](http://127.0.0.1:4173/about-bemama/premium/#feature-access) | Public website tools, Daily after expiry, account-dependent logs/sharing/Reports/growth, Premium tools and AI, trials and store prices. | Exact offers remain account/platform dependent. No invented price or promise that all app tracking is free. |
| W06 Reports and growth | [Reports](http://127.0.0.1:4173/about-bemama/tools/#reports), [growth](http://127.0.0.1:4173/about-bemama/tools/#growth) | View/filter/CSV walkthrough, labelled illustrative 60 + 90 = 150 mL report table, missing-data explanation, existing growth screenshot and link to the browser growth log. | The table is explicitly an example, not a fabricated app screenshot. Browser references and app charts are distinguished. |
| W07 Age-specific sleep | [New three-month guide](http://127.0.0.1:4173/baby-and-child/3-month-old-sleep-schedule/), [sleep collection](http://127.0.0.1:4173/newborn/newborn-sleep/) | One flexible age-guide pilot and links to the existing four-month, regression, transition and safe-sleep guides. | No cloned five-/six-month pages or nap-prediction claim. Independent clinical review remains. |
| W08 Later feeding and methods | [New seven–eight-month guide](http://127.0.0.1:4173/baby-and-child/7-8-month-old-feeding-schedule/), [methods comparison](http://127.0.0.1:4173/baby-and-child/starting-solids/#feeding-methods) | Responsive daily sequence, textures and methods, milk alongside solids, observation and safety links; connected to the existing six-month page. | No individualized intake prescription. Independent clinical review remains. |
| W09 Pregnancy weeks | [Weeks 4–8](http://127.0.0.1:4173/pregnancy/pregnancy-weeks-4-8/#week-5) | Specific week 5, 6 and 8 sections with source links and anchors; navigation between existing pregnancy ranges. | Kept useful ranges rather than generating 40 repetitive articles. Expansion should follow actual query demand. |
| W10 Postpartum | [Parent recovery collection](http://127.0.0.1:4173/newborn/postpartum-recovery/#fourth-trimester) | Fourth-trimester section, practical preparation checklist, recovery/bleeding/mood/rest links, pregnancy preparation connection, prominent Newborn category placement. | Education and organization; no unverified postpartum-tracker feature claim. |
| W11 IVF/FET calculation | [IVF mode](http://127.0.0.1:4173/tools/due-date-calculator/?method=ivf) | Genuine transfer-date calculation for day-3/day-5 embryos, explicit age choice, validation, pregnancy age and trimester timeline, localized controls and ACOG source. | Supports day 3 and day 5 only; clinic-confirmed dating remains authoritative. Independent clinical review remains. |
| W12 Birth plan worksheet | [Editable birth preferences](http://127.0.0.1:4173/pregnancy/birth-plan/#birth-preferences) | Seven labelled fields, explicit local save, reload, clear, UTF-8 text download and a dedicated print sheet; localized instructions and privacy explanation. | Print layout and generated download content checked. Native print/PDF and filesystem download completion could not be verified in the embedded browser; see validation notes. |
| W13 Community | [Finding and joining groups](http://127.0.0.1:4173/about-bemama/qa-and-community/#join-and-report) | Public group search, joining, reading rules before posting, reporting groups/members and privacy guidance. | No nearby-parent matching or active due-date club claim. |
| W14 Names and meanings | [Name shortlist](http://127.0.0.1:4173/tools/baby-name-shortlist/) | Six sourced Arabic/Turkish examples: Amin, Amani, Nur, Deniz, Ayla and Umut. Meaning and usage are distinguished; existing shortlist and SSA data retained. | A curated starter collection, not a large names database or a popularity ranking. Cultural editorial review remains. |

## Evidence used

Product copy was checked against the local client and backend, rather than inferred from competitors. Local client version: `1.3.0+47`, commit `4255c2f`.

- `bemama_client/lib/src/app/entitlements.dart`: Daily availability, Premium gates, trial exclusions and account/platform access.
- `bemama_client/lib/src/features/tracking/bemama_reports_screen.dart`: view modes, filters, CSV and AI access.
- `tracking_quick_log_sheet.dart`: pumping amounts, side selection and units.
- `tracking_repository.dart`: pending/syncing/synced/failed/conflict states.
- `journey_quick_log_sheet.dart` and `bemama_cycle_calendar_screen.dart`: cycle entry and calendar workflows.
- `chat/chat_screen.dart`: group search, join and reporting actions.
- `bmama-core/src/main/java/com/bemama/core/svc/tracking/CareProfileSharingService.java`: owner invitations, seven-day expiry, matching verified email, editor role, revocation and removal. Backend support does not establish availability of every client screen.

Health additions link to their sources on the relevant pages:

- [ACOG due-date estimation](https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date): IVF dating formula.
- [NHS infant sleep](https://www.nhs.uk/baby/caring-for-a-newborn/helping-your-baby-to-sleep/) and [AAP safe sleep](https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx).
- [NHS feeding at 7–9 months](https://www.nhs.uk/best-start-in-life/baby/weaning/what-to-feed-your-baby/7-to-9-months/) and [CDC choking prevention](https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html).
- NHS [week 5](https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-5/), [week 6](https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-6/) and [week 8](https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-8/).
- [CDC maternal warning signs](https://www.cdc.gov/hearher/maternal-warning-signs/index.html) and [NHS birth plans](https://www.nhs.uk/best-start-in-life/pregnancy/preparing-for-labour-and-birth/what-to-include-in-your-birth-plan/).
- Individual Behind the Name entries for the six names; Ayla uses the [Turkish entry](https://www.behindthename.com/name/ayla-2).

Source checking is not clinical review. No medical-review badge, reviewer identity or clinical review date was invented. Editorial revision dates are separate from older evidence-note dates.

## Implementation and preservation

- New content modules: `src/website-gap-content.mjs`, `website-gap-product-copy.mjs`, `website-gap-guides.mjs`, `website-gap-collections.mjs`, `website-gap-details.mjs` and `website-gap-tools.mjs`.
- New worksheet runtime: `public/assets/birth-preferences.js`.
- Extended calculator logic and localized rendering in the existing care-tools modules.
- Build rendering now supports section anchors, jump links, comparison tables and linked collections. Styles support RTL, small screens and dedicated print output.
- Rebuilt `dist`, sitemap, search content and versioned assets. The broad generated diff includes the shared CSS hash; it does not represent new articles on every route.
- Preserved pre-existing four-month/six-month routine-guide generated asset updates and the untracked `docs/google-indexing-2026-09-16/` directory.

## Validation

- Full Node test suite: **125 passed, 0 failed**. Includes new IVF date arithmetic, leap-day/DST, invalid-input, existing-method regression and localized-build checks.
- Static validator: **1,435 HTML files / 1,428 localized routes passed**.
- SEO audit: **1,428 pages**, no title/description length issues, duplicate titles/descriptions, reported localization issues or oversized images.
- Expected inventory counts updated to **1,400 public URLs** and **98 newer-article/older-evidence cases**. Older evidence dates are retained, not rewritten to imply new review.
- Browser check: September 1, 2026 day-5 transfer produces **May 20, 2027** and **6 weeks 2 days** on September 26, 2026, in English and Arabic.
- Browser check: worksheet sample survives save/reload; generated text contains the headings and entered values; clear removes the saved sample. No user data was used and sample data was removed.
- Arabic RTL worksheet/calculator and the English feature matrix checked at a 390 × 844 viewport without document-level horizontal overflow. Temporary viewport overrides were reset.
- Dedicated print-media rendering inspected: only the preference sheet prints, including all seven headings and entered values.
- Embedded-browser limitations: native printing returns “Printing is not available”; the download event did not return a local file. Download Blob content was inspected, and print CSS was emulated. A standard-browser print/PDF and download destination check remains before production release. Confirmation-dependent clearing was tested with a temporary browser-only confirmation stub; reloading restored the native function.

These checks establish local implementation and structural correctness, not search ranking gains, clinical review or live app behavior. The remaining boundaries above should remain visible during release review.
