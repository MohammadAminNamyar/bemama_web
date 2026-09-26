# Website content depth — 26 September 2026

## Scope and delivery

Follow-up to the 14-opportunity website gap implementation, starting from local commit `58cda9828` (reported deployed by the owner). This round is local only. It changes existing destinations and preserves their URLs; it does not create many near-duplicate keyword pages.

All additions have English, Arabic, Persian, French, Spanish, Portuguese and Turkish copy. The website has one French and one Portuguese locale; this does not add separate national variants.

## Implemented content

| Destination | Addition |
| --- | --- |
| `/about-bemama/tools/` | Pumping steps and example, correction workflow, synchronization troubleshooting, growth-entry steps and captioned existing screenshots. Reports instructions now explain the actual CSV window. |
| `/about-bemama/getting-started/` | The same detailed offline status and missing-record troubleshooting. |
| `/about-bemama/premium/` | Ten-row access comparison separating ordinary care logs/Reports, extended comparisons, AI, Premium tools and public website tools; trial and growth FAQs. |
| `/about-bemama/cycle-tracker/` | Calendar caption, uncertain-period-date and temperature-reading FAQs. |
| `/baby-and-child/3-month-old-sleep-schedule/` | Clearly illustrative partial-day log, handling changes to the day, caregiver handover and appointment preparation; three FAQs. |
| `/baby-and-child/7-8-month-old-feeding-schedule/` | Flexible meal opportunities, hunger/fullness cues, texture and supervision, factual handover notes; three FAQs. |
| `/pregnancy/pregnancy-weeks-4-8/` | Substantial week 5, 6 and 8 subsections with development context, appointment preparation and escalation advice; two FAQs. |
| `/newborn/postpartum-recovery/` | First days, weeks 1–2 and weeks 3–6/beyond; support, caesarean instructions and the parent's own follow-up; two FAQs. |
| `/tools/baby-name-shortlist/` | Six names expanded to 16 with sources, meanings, original spellings where relevant, usage and origin. Search by name/script/meaning and filter by usage. Save the meaning and source with the existing shortlist; undo and backups continue to work. New localized page title/description. |

The name collection includes Amin, Amani, Nur, Deniz, Ayla, Umut, Amal, Karim, Layla, Iman, Yasmin, Ada, Eren, Bahar, Derya and Selim. This is a small editorial selection, not a comprehensive database or global popularity ranking. Existing SSA counts remain separately labeled. The source-linked collection is rendered in HTML when JavaScript is unavailable; working interactive controls replace that fallback after initialization.

## Product evidence and one corrected claim

Read-only comparison against local `bemama_client` and `bmama-core` on 26 September:

- `bemama_client/lib/src/features/tracking/bemama_reports_screen.dart`, `_exportCsv`: sync attempt, selected profile, today minus 29 days through today. **CSV exports the latest 30 calendar days, independently of the visible date/activity filters.** The previous website paragraph implied the visible report range controlled it. Both the old paragraph and the new Reports section now state the actual behavior in every language.
- `bemama_reports_screen.dart`: selected-child heading/switcher and Day/Week/List/Summary views.
- `tracking_quick_log_sheet.dart`: Total versus Left/right pumping amount; mL/oz; Timer/Manual; growth-entry units and fields.
- `bemama_child_screen.dart`: waiting, syncing, synced, failed and conflict/needs-review labels.
- `ClientTrackingReportController.java`: ordinary day/week/CSV paths use authenticated profile access; 90/365-day summaries require AI entitlement. Insight services also check AI entitlement.
- `TrackingEventController.java` and tracking service: basic event recording has profile access checks, without a separate Premium feature check.
- `tools_screen.dart` and `BeMamaEntitlements`: the separate tools-area growth experience checks Premium tools access. AI consultation checks Premium plus AI access. App entry/access rules remain distinct from these individual feature rules.
- `CareProfileSharingService`: invitation/authorization backend exists, but a working invitation interface was not established in this client audit. Existing qualified sharing copy is retained. No guessed invitation-button walkthrough was added.

No backend, app entitlement, subscription price or CSV behavior was changed. Verify documentation against the actual client version when those implementations change. Existing tour images are honestly captioned as English images; the growth image is an entry form, not a clinical chart.

## Source record

The new health paragraphs paraphrase these primary sources. Source-backed writing is not clinical review of BeMama.

- [NHS — helping your baby to sleep](https://www.nhs.uk/baby/caring-for-a-newborn/helping-your-baby-to-sleep/)
- [NHS — food at 7–9 months](https://www.nhs.uk/best-start-in-life/baby/weaning/what-to-feed-your-baby/7-to-9-months/)
- [CDC — hunger/fullness cues](https://www.cdc.gov/infant-toddler-nutrition/mealtime/signs-your-child-is-hungry-or-full.html)
- [CDC — choking hazards](https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html)
- [NHS — week 5](https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-5/), [week 6](https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-6/), [week 8](https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/1st-trimester/week-8/)
- [NHS — your body after birth](https://www.nhs.uk/pregnancy/labour-and-birth/your-body/)
- [NHS — caesarean recovery](https://www.nhs.uk/tests-and-treatments/caesarean-section/recovery/)
- [NHS — postnatal check](https://www.nhs.uk/baby/support-and-services/your-6-week-postnatal-check/)
- [CDC — urgent maternal warning signs](https://www.cdc.gov/hearher/maternal-warning-signs/index.html)

Every name links to its specific Behind the Name entry, rather than the home page. Usage is distinguished from linguistic origin: for example, Derya is used in Turkish and has Persian roots. No pronunciation audio, cultural endorsement or popularity score was invented. Entries with ambiguous source disambiguation were omitted.

## Editorial terminology

The additions use ordinary local terms, not English keyword lists pasted into translations. Examples below are editorial choices, **not measured search-volume winners**:

| Language | Name discovery | App care examples |
| --- | --- | --- |
| Arabic | أسماء مواليد، معاني الأسماء | شفط الحليب، سجل الرعاية |
| Persian | نام نوزاد، معنی نام | دوشیدن شیر، سابقه مراقبت |
| French | prénoms de bébé, sens | tirage du lait, historique des soins |
| Spanish | nombres de bebé, significados | extracción de leche, historial de cuidados |
| Portuguese | nomes de bebê, significados | extração de leite, histórico de cuidados |
| Turkish | bebek isimleri, anlamları | süt sağma, bakım geçmişi |

## Checks still requiring external evidence

These are not silently marked complete:

1. **Qualified clinical review:** ask a pediatric/maternity clinician to review the four expanded health guides. Review age-appropriate language, safe-sleep context, feeding/choking advice, escalation wording, pregnancy-size framing and postpartum timelines. Record the reviewer's name, credentials, scope, actual review date and requested changes. Publish a review credit only after that review occurs.
2. **Native-language editorial review:** review each locale for natural phrasing, local care-system terminology, consistent address and medical nuance. Arabic/Persian also need bilingual comparison of emergency wording and script variants. Machine-authored localization and RTL checks do not substitute for this.
3. **Fresh app walkthrough assets:** capture Reports/CSV and shared-care invitation steps on the released app using consented demo data. Confirm an invitation interface exists before publishing exact sharing controls. This round reuses verified existing images and does not invent screenshots.
4. **Demand-driven expansion:** use Search Console query/page/country data after indexing. Prioritize actual impressions, weak click-through rates and unanswered queries before adding more ages, separate postpartum pages, names or comparisons. No new keyword volume or ranking increase has been claimed.

## Validation

- Final static build succeeded.
- All **129 tests passed**, including the new multilingual name-search, usage/origin distinction, static catalogue/config and expanded-guide coverage checks.
- Validator passed **1,435 HTML files / 1,428 localized routes**.
- SEO audit: no title/description length errors, duplicate titles/descriptions, flagged metadata localization issues or oversized images. These automated checks do not constitute a native-speaker review.
- Browser QA: combined meaning/usage filters; save with meaning/source; reload persistence; duplicate prevention; undo restored the pre-test empty shortlist. Arabic vowel-mark search matched Iman; the 390px mobile viewport had no horizontal document overflow. Result counts keep their reading order in RTL. No browser console errors were recorded on the final name page.
- Visual review: desktop name collection, Arabic mobile name cards, mobile sample sleep table, Reports/CSV explanation and captioned growth screenshot. The temporary viewport override was reset.
- Source diff whitespace check passed.

Local evidence (outside the repository):

- [Desktop name collection](C:/Users/amin.namyar/Documents/Codex/2026-09-12/ca/output/playwright/website-depth-names-desktop.png)
- [Arabic mobile search](C:/Users/amin.namyar/Documents/Codex/2026-09-12/ca/output/playwright/website-depth-ar-mobile.png)
- [Mobile sleep example](C:/Users/amin.namyar/Documents/Codex/2026-09-12/ca/output/playwright/website-depth-sleep-mobile.png)
- [Reports and CSV explanation](C:/Users/amin.namyar/Documents/Codex/2026-09-12/ca/output/playwright/website-depth-reports.png)

No commit, push or production deployment was performed in this round. Rebuilt `dist/` is present alongside the source changes; shared stylesheet/runtime cache keys update generated pages throughout the site.
