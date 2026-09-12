# Tool quality revision — September 12, 2026

> Historical revision: the [completed tool workflows report](../tools-completion-2026-09-12/README.md) supersedes the checklist, names, pregnancy-week, tool-count, and browser-review status below. It records the final nine-tool set and 102 passing tests.

**Status: implemented locally, awaiting review.** This revises Step 2 in response to the user's screenshots and concern that the tools lacked substance. It does not advance to the previously planned Step 3. No deployment, ad campaign action, or IndexNow submission was performed.

## Review the result

- [Tools catalog](http://127.0.0.1:4173/tools/)
- [Ovulation calculator and calendar](http://127.0.0.1:4173/tools/ovulation-calculator/)
- [Growth dashboard and WHO reference chart](http://127.0.0.1:4173/tools/growth-log/)
- [Appointment calendar](http://127.0.0.1:4173/tools/appointment-symptom-calendar/)
- [Hospital bag checklist](http://127.0.0.1:4173/tools/hospital-bag-checklist/)

The Chrome growth preview has a WHO chart open using two clearly labelled synthetic records, a sample birth date of June 12, 2026, and the girls reference. This is test data on the localhost origin. No production user records were inspected.

## What the competitor evidence supports

Huckleberry's [tracking product page](https://huckleberrycare.com/product/tracking), opened in Chrome, describes logging, timers, reminders, caregiver/device syncing and multiple child profiles. Its [enhanced sleep reports](https://huckleberrycare.com/blog/how-to-access-enhanced-sleep-reports-on-huckleberry) describe date-range selection, totals, averages and bedtime/rise-time trends. Its [SweetSpot page](https://huckleberrycare.com/product/sweetspot) describes predictions using tracked sleep. These are published product descriptions, not an authenticated hands-on test of the app.

BabyCenter's [official App Store listing](https://apps.apple.com/us/app/babycenter-pregnancy-tracker/id386022579) and [Google Play listing](https://play.google.com/store/apps/details?id=com.babycenter.pregnancytracker) describe due-date and pregnancy tracking, baby names, a hospital-bag checklist, birth-plan templates, a kick tracker and contraction timer. Direct BabyCenter website access remains blocked; no website-only features or ranking claims are inferred from the app listings.

**Assessment:** the earlier BeMama implementation was not equivalent to these products. A dropdown returning one paragraph is guidance, not a planner or tracker. Retain tools that perform a useful calculation, organize records or track actual task state. A chart should use real inputs and a documented dataset, not decorative sample numbers.

The revised website still does not provide Huckleberry-style sleep analytics, personalized predictions, multiple-child profiles or caregiver sync. Its useful role is a set of standalone calculators and local organizers. This is not a claim of overall competitor parity.

## Decisions for all 13 original tools

| Tool | Decision | Result and limits |
|---|---|---|
| Ovulation calculator | Upgrade | Equal-height input/result panels, month calendar, fertile-day legend, estimated ovulation and next period, NHS/ASRM sources. Calendar estimates cannot confirm ovulation. |
| Due-date calculator | Upgrade | Completed gestation plus a dated trimester timeline. Existing validation and cycle adjustment retained. |
| Pregnancy-week lookup | Keep and upgrade | The due-date-input route remains useful when the user already has a clinician-agreed due date. It now includes the same dated timeline. |
| Growth log | Substantial upgrade | Weight/length trends with axes, selectable points, date filters, metric/imperial display, latest measurements, change over the selected period and counts. Optional WHO weight-for-age reference. Existing edit/undo/backup behavior retained. |
| Appointment/symptom calendar | Upgrade | Browsable month grid, dates marked with entry counts, selected-day notes and month navigation, backed by editable saved records. No background reminders or device sync. |
| Hospital-bag checklist | Keep as a checklist; improve UI | Completion ring and counts, remaining-item filter, individual task labels, print action and visible storage failures. Existing six-item starter list retained; it is not an exhaustive hospital-specific packing guide. |
| Preconception checklist | Keep as a checklist; improve UI | Same progress/filter/save behavior. A practical task list, not an individualized care plan. |
| Newborn-care checklist | Keep as a checklist; improve UI | Same progress/filter/save behavior. A starter organizer, not a newborn monitoring system. |
| Registry checklist | Keep as a checklist; improve UI | Same progress/filter/save behavior. Does not compare products, track purchases or build a retail registry. |
| Baby names and shortlist | Keep | Existing filters, meanings/origins, saved favorites and custom names offer a distinct usable workflow. Its database and source accuracy were not re-audited in this revision. |
| Milestone tracker | Retire | A paragraph selector did not track completed milestones or progress. Recovery page links to the existing milestone guide. |
| Solids planner | Retire | It did not create or save a feeding plan or track foods. Recovery page links to the existing starting-solids guide. |
| Toddler activity picker | Retire | Broad age-based paragraphs did not deliver a useful activity selection workflow. Recovery page links to the existing independent-play guide. |

The catalog now has **10 tools**, each with a specific description and a consistent card component. It uses BeMama's existing colors, typography and navigation. Charting and icons are native SVG/CSS; generated raster imagery would not improve the accuracy or usability of these tools.

The three retired tools are removed from navigation/catalog listings, search, RSS feeds, sitemaps and the default IndexNow URL list. Their 21 localized URLs remain as **noindex recovery pages**, with links to related guides rather than broken links or non-functional tool forms. They no longer emit WebApplication structured data. Old source configurations are retained for a potential properly scoped replacement; they are not rendered as active tools.

## Reference data and calculation methods

### WHO weight-for-age

The reference data comes directly from the WHO [weight-for-age standards](https://www.who.int/tools/child-growth-standards/standards/weight-for-age):

- [Girls monthly percentile workbook](https://cdn.who.int/media/docs/default-source/child-growth/child-growth-standards/indicators/weight-for-age/tab_wfa_girls_p_0_5.xlsx?sfvrsn=666fe445_7)
- [Boys monthly percentile workbook](https://cdn.who.int/media/docs/default-source/child-growth/child-growth-standards/indicators/weight-for-age/tab_wfa_boys_p_0_5.xlsx?sfvrsn=a0b3ed5_7)

The original workbooks are retained in `data/`, with SHA-256 hashes in [manifest.json](./data/manifest.json). [extract-who-weight.py](../../scripts/extract-who-weight.py) reproducibly selects months 0–24 and the published P3/P15/P50/P85/P97 columns. No values were invented or estimated from a screenshot. Reference curves join the monthly table points; they are not newly calculated individual percentile ranks.

Measurements use explicit kg/lb conversion. Age is elapsed calendar days divided by 30.4375; records before birth, after 24 months, in the future, or lacking a compatible unit/date are excluded. The interface reports excluded weights. The user must supply birth date, choose the girls/boys reference and confirm birth at 37 weeks or later. Earlier births are directed to their care team for corrected-age/chart selection. Birth details are retained only in the current view, not saved to browser storage. Users must use records for the same child; this remains a single-log tool, not a multiple-child profile system.

Only **weight-for-age** uses WHO curves. Length/height remains an observed trend because the existing records do not distinguish recumbent length from standing height. There are no fabricated length percentiles, diagnoses, growth scores or promised outcomes. The interface explains that a percentile is not a target or diagnosis. No clinical or native-speaker review is claimed.

### Fertility and pregnancy dates

The fertile interval is now five days before estimated ovulation through the estimated ovulation day, following [ASRM's six-day definition](https://www.asrm.org/practice-guidance/practice-committee-documents/optimizing-natural-fertility-a-committee-opinion-2021/). This corrects the earlier seven-day display. Example: September 2 last period, 30-day cycle and 16-day luteal phase produce estimated ovulation September 16, fertile dates September 11–16 and next period October 2.

Pregnancy due-date calculations keep the previous tested day arithmetic. Timeline boundaries use the NHS [week-by-week guide](https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/): second trimester from 13 completed weeks and third from 28. These are educational date estimates, not measured fetal development.

## Verification and remaining review

- Final build succeeded. A transient Windows file lock was handled by adding bounded retries to the existing build-output cleanup; the cleanup target remains this repository's `dist/` directory.
- **83 tests pass**. New checks cover published WHO anchors and source hashes, ordering of all 25 monthly rows, unit/range handling, missing birth dates and out-of-range measurements, leap/year calendar boundaries, the six-day fertile interval, module asset hashing, and retirement behavior in all seven languages.
- HTML validation passes for **1,400 files / 1,393 localized routes**. Of the localized routes, 21 are intentional retired-tool recovery pages; **1,372 active routes** remain in the locale sitemaps/default IndexNow selection. Indexing/date tests were adjusted for these explicit retirement records; active pages retain the existing strict checks.
- SEO audit reports no duplicate titles/descriptions, localization issues or oversized images.
- Chrome catalog: all ten cards measured 345.33 × 380 CSS pixels at the tested desktop width. No horizontal page overflow. The catalog screenshot was captured and displayed in the task.
- Chrome ovulation: both panels measured **510 × 402.125 CSS pixels** with the user's example inputs. September and October calendars rendered. The final six-day interval is covered by the regression test.
- Chrome growth: metric/imperial selection updates charts and statistics. The sample 12.2 lb record displays 5.53 kg when converted. The WHO view rendered five reference curves plus two user measurement points, with age axes and exclusion count 0 for the sample inputs. No individual percentile rank was reported.
- Chrome checklist: checking two of six tasks displayed 33%, filtering left four visible tasks, and reload preserved both selections. Print is wired to the browser's print workflow; a saved PDF was not tested.
- Chrome appointments: a synthetic September 15 entry appeared in the selected-day panel; Next month changed September to October with 31 date buttons.
- Persian mobile layout: measured 380 CSS pixels wide, RTL, equal 348-pixel-wide stacked form/history cards, no horizontal **page** overflow. Charts use their own horizontal scroll area to preserve legible axes on narrow screens.
- **Visual QA limitation:** Chrome screenshot capture repeatedly timed out after the catalog capture, including through its documented capture API. Chart structure, data, controls and layout dimensions were inspected in the live DOM, but complete desktop/mobile screenshot review of the new charts remains open. The live WHO sample view is left open in Chrome for user review. Do not treat this as a completed visual sign-off.
- Portuguese browser access remains unverified following the earlier Chrome block; its generated pages and automated checks pass. Other languages have generated-copy and retirement checks, not a new exhaustive browser test of every control in every locale.

Logs: [tests](./tests.txt), [validation](./validation.txt), [SEO audit](./seo-audit.txt).

## Review boundary

This revision strengthens nine tools and retains the existing name finder. The checklists are deliberately described as starter organizers; the remaining larger competitive gaps are personalized/saved plans, custom checklist content, broader vetted name data, multi-child profiles, sleep/feeding analytics and caregiver sync. Those require real product work and evidence, not extra keywords or decorative graphs.

Review this revised Step 2 before any next step or publication. Step 3's English content work remains unstarted. Existing log migration and rollback limits from the [Step 2 report](../seo-step-2-2026-09-12/README.md) still apply.
