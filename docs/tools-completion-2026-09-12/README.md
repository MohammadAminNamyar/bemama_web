# Completed tool workflows — September 12, 2026

> The subsequent [layout refinement](../tool-layout-refinement-2026-09-12/README.md) updates the catalog and checklist presentation in response to the user's visual review. It fixes the progress-ring sizing and records fresh browser checks.

**Status: implemented and verified locally; ready for Step 2 review.** This completes the remaining organizer work requested after the tool quality revision. It supersedes that revision's checklist, baby-name, pregnancy-week, and browser-review limitations. Step 3 content and keyword work has not started. No deployment, campaign change, or IndexNow submission was performed.

## Review in Chrome

- [Tools catalog](http://127.0.0.1:4173/tools/)
- [Hospital bag checklist](http://127.0.0.1:4173/tools/hospital-bag-checklist/)
- [Baby name finder and comparison](http://127.0.0.1:4173/tools/baby-name-shortlist/)
- [Combined due date and pregnancy week calculator](http://127.0.0.1:4173/tools/due-date-calculator/?method=due-date)
- [Growth dashboard and WHO chart](http://127.0.0.1:4173/tools/growth-log/)
- [Appointment calendar](http://127.0.0.1:4173/tools/appointment-symptom-calendar/)

The localhost previews contain clearly labelled synthetic test entries, including sample appointments, measurements, and shortlist notes. Production records were not inspected. The existing BeMama typography, colors, navigation, and page structure are preserved. Native SVG/CSS charts use actual inputs or published reference data; generated illustrations were not needed.

## Final tool set

There are **nine distinct active tools**, down from thirteen original entries. Three weak paragraph selectors remain retired. Pregnancy-week lookup is now a second input mode in the due-date calculator.

| Tool | Completed behavior |
|---|---|
| Ovulation calculator | Estimated ovulation and fertile interval, month calendars, legend, and matching input/result panels. The previous revision's corrected six-day interval and source links remain. |
| Due date and pregnancy week | Start with either the last period or an existing due date. Results show completed weeks/days and a dated trimester timeline. The old week-lookup URL links to the combined calculator with the correct mode selected. |
| Appointment and symptom calendar | Editable dated entries, month navigation, selected-day notes, and a downloadable calendar file. Events are all-day; users add times/reminders in their calendar app. No automatic synchronization is claimed. |
| Growth log | Editable measurements, metric/imperial trends, selectable points, period statistics, and optional published WHO weight-for-age curves. The previous revision's dataset and scope limits remain. |
| Preconception checklist | 16 categorized tasks, custom tasks, notes, progress, and saved state. |
| Hospital bag checklist | 24 categorized tasks, custom tasks, notes, progress, and saved state. |
| Registry checklist | 18 categorized tasks, custom tasks, notes, progress, and saved state. This organizes needs; it is not a retail product registry. |
| Newborn care checklist | 16 categorized tasks, custom tasks, notes, progress, and saved state. This organizes preparation; it does not monitor a newborn. |
| Baby name finder | Search, category/length filters, ranking/alphabetical sorting, pagination, editable saved names and notes, and comparison bars using official recorded counts. Custom names support any script. |

The four checklists contain **74 tasks** altogether. Each supports Done, To do, and Not needed; skipped tasks are excluded from the completion denominator. Category progress bars, search and filters help users find remaining work. Progress measures task completion, not health or readiness for birth. Checklists and the name shortlist support JSON backup, reviewed import, print, and persistent undo of the last ten changes.

The three retired planners and merged week lookup retain **28 localized noindex recovery pages** across seven languages. They are excluded from the catalog, navigation, search, feeds, sitemaps and default IndexNow selection. Recovery pages offer relevant working destinations and do not advertise a functioning WebApplication.

## Source data and content

### Baby names

The old unverified meanings/origins database has been removed from the runtime. The replacement uses the US Social Security Administration's [2020s table](https://www.ssa.gov/oact/babynames/decades/names2020s.html), whose current period is **2020–2025**, as of March 2026. It supplies the top 200 records per sex category: **400 name/category records and 397 unique spellings**. This is a US partial-decade dataset, not worldwide popularity or a 2025 annual ranking.

All 200 source-table rows are retained in [ssa-2020-2025.json](./data/ssa-2020-2025.json). [build-name-data.mjs](../../scripts/build-name-data.mjs) reproducibly generates the runtime module and embeds the retained source's SHA-256. Tests compare every generated record against the retained table and check published anchors, including Liam 124,842 and Olivia 95,853. The source hash is `b59f8ef36940b0f916cfc4ceeb84fd36476d0caa30e7b0cfa15a6431d53e5972`.

Comparison bars use recorded counts within the selected source category. A saved name absent from that dataset is labelled outside the dataset; it is not assigned a fabricated count. Names keep their published spelling in every interface language. Legacy saved meanings are preserved as explicitly unverified notes. No etymology or worldwide naming coverage is claimed.

### Checklists and growth

Checklist prompts are original organizational copy informed by NHS guidance, with source links in the tool:

- [Trying to get pregnant](https://www.nhs.uk/pregnancy/trying-for-a-baby/trying-to-get-pregnant/)
- [Hospital bag checklist](https://www.nhs.uk/best-start-in-life/pregnancy/preparing-for-labour-and-birth/hospital-bag-checklist/)
- [What to buy for your newborn](https://www.nhs.uk/best-start-in-life/pregnancy/preparing-for-labour-and-birth/what-to-buy-for-your-newborn-baby/)
- [Caring for your baby](https://www.nhs.uk/best-start-in-life/baby/baby-basics/caring-for-your-baby/)

The growth chart continues to use the official WHO monthly weight-for-age tables. Original workbooks, hashes, extraction method and age/unit exclusions are documented in the [previous revision](../tool-quality-revision-2026-09-12/README.md#reference-data-and-calculation-methods). It does not calculate individual percentile ranks or diagnose growth problems.

## Storage and language behavior

Original checklist item IDs are retained, so previously checked items map to the same tasks. New organizer records use a separate version-3 key; migration reads the original key without overwriting it. Import validates the tool, record structure and complete base-task set, then displays a preview before applying. An applied import is undoable. Unreadable storage, quota failures and detected stale writes show an error instead of claiming a successful save. Undo is bounded to ten changes; browser storage is local and is not an atomic multi-user database or cloud backup.

Tool UI and task copy are supplied in English, Persian, Arabic, French, Turkish, Spanish and Portuguese. Names retain source spelling and task IDs remain stable between languages. Persian RTL and Portuguese mobile workflows were checked. This does not replace the later competitor-led keyword research or native-speaker editorial review for each language.

## Verification

- Final build completed successfully, with emitted dependencies versioned by content.
- **102 tests passed, zero failures.** Tests cover calculations, official data, migration, undo, rejected invalid backups, storage errors, calendar escaping/date boundaries, localization configuration, retirement/indexing, and emitted assets. See [tests.txt](./tests.txt).
- **1,400 HTML files and 1,393 localized routes validated**; 28 intentional recovery routes leave **1,365 active sitemap/default IndexNow URLs**. See [validation.txt](./validation.txt).
- SEO audit reports zero title/description length issues, duplicates, localization issues, or oversized images. See [seo-audit.txt](./seo-audit.txt). This is a technical audit, not a ranking or keyword-demand claim.
- Non-generated source diff whitespace check passed.
- Chrome checklist: custom task and notes persisted after reload; skipping changed the active total correctly; undo after reload worked. A real file-chooser import displayed all 24 hospital tasks before applying, saved the imported note, and undo restored the prior state.
- Chrome names: source-name saving, custom Persian name, note editing and reload worked. Olivia/Emma comparison showed 95,853/85,652, with bar widths in the matching ratio. The custom name correctly showed no source count.
- Chrome pregnancy: January 1, 2027 due date returned **24 weeks and 1 day** on September 12, 2026, with the dated three-trimester timeline. Singular/plural formatting is now locale-aware.
- Chrome growth: sample data displayed five WHO reference curves and two measurement points, with valid axes and unit conversion. No individual percentile rank was invented.
- Chrome appointment: September 15 sample appeared on the calendar. The actual downloaded `bemama-appointments.ics` file was inspected: September 15 start, exclusive September 16 end, correct title and notes. Import into an external calendar app and reminder delivery were not tested.
- Desktop screenshots and representative 360/400 CSS-pixel mobile layouts were reviewed. The narrow organizer column was corrected to the established 1,040-pixel desktop tool width; name cards match within rows. Persian progress fractions now keep done/total order, with no horizontal page overflow. Portuguese registry shows 18 localized tasks with no page overflow. Temporary viewport overrides were reset.

The earlier screenshot-capture problem was resolved by foregrounding Chrome. Actual desktop/mobile screenshots of the updated controls and charts were reviewed in this task; this supersedes the older report's screenshot limitation. It is representative browser QA, not an exhaustive device or accessibility certification.

## Review boundary

Each retained tool now performs a distinct calculation or an editable organizing workflow. This completes the approved local tool step. It does not establish parity with Huckleberry's sleep predictions, caregiver sync or multi-child profiles, nor add those as implied promises. Review these tools before proceeding to Step 3 or publishing, as requested.
