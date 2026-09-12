# Step 2 — tool correctness and interface pilot

**Revised after user review:** see the [tool quality revision](../tool-quality-revision-2026-09-12/README.md). It supersedes this pilot's catalog, chart and planner decisions: three planners are retired, WHO reference data and calendar views are added, and visual sign-off is still pending.

Implementation date: September 12, 2026. Status: **implemented locally, ready for review; Portuguese browser verification remains incomplete**. The user approved Step 2 and requested confirmation between steps. Step 3 has not started. Nothing has been deployed and no Google Ads campaign or account setting was changed.

## Review the working result

- [Growth log](http://127.0.0.1:4173/tools/growth-log/)
- [Due date calculator](http://127.0.0.1:4173/tools/due-date-calculator/)
- [Pregnancy week lookup](http://127.0.0.1:4173/tools/pregnancy-week-lookup/)
- [Ovulation calculator](http://127.0.0.1:4173/tools/ovulation-calculator/)
- [Solids planner](http://127.0.0.1:4173/tools/solids-planner/)

The local server is bound to 127.0.0.1:4173. The growth preview contains two clearly labelled synthetic UI-test records. These belong to the local preview origin, not the production website.

## What changed

| Finding from Step 1 | Implemented behavior |
|---|---|
| Due date today displayed week 41 | Displays **40 completed weeks, 0 days**. Due-date and week-lookup calculations agree for cycle lengths 20–45 days. |
| Blank, zero and invalid dates could produce plausible results | Strict calendar validation and field errors. Rejected values produce no estimate; focus moves to the first invalid field. Changing an input clears the previous result. |
| Generic calculator interface and unclear result | Distinct input/result cards, specific action labels, localized dates/numbers, explained purpose, and pregnancy progress display. |
| English strings leaked into translated results | Complete output labels in seven languages. Unsupported conception/test-timing and hard-coded trimester output were removed. |
| Growth values lacked units | New measurements require kg/lb or cm/in. Old records keep their exact values and unknown units; charts exclude values with unconfirmed units. |
| Saves silently truncated at 50 or falsely reported success | No application row cap. Failed reads/writes are visible, detected stale writes are rejected, and failed saves retain the form contents. Browser storage capacity still applies. |
| No editing or recoverable removal | Edit, save changes, cancel, per-entry removal, persistent undo, history pagination, and JSON backup download. |
| Limited growth presentation | Dated history and simple within-child measurement trends. Explicitly labelled as neither percentiles nor a medical assessment. |
| Planners gave different advice across languages | Canonical age-specific guidance for milestones, solids and activities in all seven languages. The 0–3-month solids selection consistently explains that the group is not ready for solids. |

The shared log implementation also upgrades the appointment/symptom calendar's save, edit, history and recovery behavior. The full calendar workflow redesign, checklist interfaces, name finder and task-specific activity selectors remain in Step 4.

The site keeps its navigation, URLs, language routes, typography and green/sage theme. Responsive cards, native form controls and SVG measurement charts provide the visual polish. The imagegen skill was assessed; raster illustrations would not improve these form and result workflows, so no generated image was added.

## Calculation and content basis

Pregnancy dates use calendar-day arithmetic: estimated due date = first day of the last period + 280 days + (cycle length − 28); completed gestation = 280 − days until the due date. Inputs outside the supported 0–42-week display interval are rejected instead of clamped. Ovulation remains an approximate cycle/luteal calculation, with its uncertainty explained in the introduction.

Primary references consulted during implementation:

- [NHS due-date calculator](https://www.nhs.uk/pregnancy/finding-out/due-date-calculator/)
- [NHS fertility in the menstrual cycle](https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/)
- [CDC introduction of solid foods](https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/when-what-and-how-to-introduce-solid-foods.html)

These are educational estimates and original localized UI copy, not a claim of clinical or native-speaker review. This step does **not** claim that translated labels are researched SEO keywords. Competitor-backed content gaps remain in the Step 1 register; native keyword evidence/glossaries remain Step 5.

## Verification

- Build succeeded.
- **69 automated tests passed**, including 22 new tests: calendar/leap boundaries, due-date anchors, cycle consistency, invalid numeric inputs, legacy records, retention of 151 entries, storage failures, detected stale writes, edit/remove/reload/undo, unit conversion, all seven locale configurations, and emitted module asset hashes.
- **1,400 HTML files / 1,393 localized routes validated.** SEO audit reported no duplicate titles/descriptions, localization issues or oversized images.
- Chrome: a blank due date produced an inline error and returned focus to the date input. A 35-day cycle starting June 1, 2026 produced March 15, 2027 and 13 weeks, 5 days on September 12.
- Chrome: saved metric and imperial sample growth records, reloaded, edited 12 lb to 12.2 lb, removed that entry, reloaded, and restored it using Undo. The chart used the explicit unit conversions while history retained 12.2 lb / 23 in.
- Chrome: downloaded a JSON backup and read the resulting file. It contains version 2, both sample entries, their units, and no removed entries.
- Chrome mobile override: 390 × 844 (375 CSS-pixel content width with the browser scrollbar). English growth inputs fit the viewport; Persian growth and Arabic calculator layouts were visually inspected in RTL. Calculator and 0–3-month solids results had no horizontal page overflow for en/fa/ar/fr/tr/es.
- **Portuguese limitation:** Chrome returned `ERR_BLOCKED_BY_CLIENT` when opening `/pt/tools/pregnancy-week-lookup/`. That block was not bypassed. Portuguese generated content and automated checks pass, but its browser interaction and screenshot checks are still outstanding.
- Screenshots of desktop growth, mobile growth, Arabic calculator and Persian growth were displayed in the task. They were not saved as standalone files by the browser tool. Browser errors captured on the tested growth page: none.

Logs: [tests](./tests.txt), [HTML validation](./validation.txt), [SEO audit](./seo-audit.txt), [browser check record](./browser-checks.json).

## Storage and release limits

Both log tools retain their existing `bemama.tool.<tool-id>` localStorage key. Legacy arrays are read without modifying storage; the first successful edit/save converts the record to a version-2 envelope containing `entries` and recoverable `removed` records. Unknown fields and unknown measurement units are preserved.

The older runtime cannot read the new envelope. A release rollback must retain the new reader or include an explicit data migration; reverting only the JavaScript is not a safe rollback for already-migrated users. Downloaded JSON is a backup artifact; this pilot does not include an import/restore screen. Undo restores removed records while browser data is intact. Clearing browser storage can remove all locally stored data.

The stale-value comparison detects changes saved before an operation starts. It is not an atomic transaction across simultaneous browser tabs. Unchanged checklist/name-finder storage paths are outside this pilot; their behavior is not covered by the new log reliability claims.

Generated `dist/` files are tracked in this repository and have been rebuilt. Shared CSS/module hashes update asset references across the generated site; this explains the broad generated-file diff without implying all articles were rewritten.

## Next approval checkpoint

Review Step 2 and its Portuguese browser-check limitation. **Wait for explicit confirmation before Step 3**: English homepage and existing product explanations, verified app workflow descriptions, and original briefs for the four-month sleep and six-month feeding articles. Publication and subsequent steps remain separate checkpoints.
