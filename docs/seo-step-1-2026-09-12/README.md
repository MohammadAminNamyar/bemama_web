# Step 1 completed: evidence, source audit, and implementation backlog

September 12, 2026. **Waiting for the user's confirmation before Step 2.**

The source project is `C:/WorkSpace/Practice/bemama_web`. The supplied path contained an extra separator; the identified project README names bemamas.com and the route inventory matches the public-site audit. Starting commit: `80e2eef3051ea75acc9d5536db3f39016c876799`. The working tree was clean before this step. Only this documentation/evidence directory has been added; a local build regenerated ignored output. No application source, live website, campaigns, or indexing settings were changed.

## Evidence register

[Review the keyword decisions](C:/WorkSpace/Practice/bemama_web/docs/seo-step-1-2026-09-12/keyword-register.md). The machine-readable [register](C:/WorkSpace/Practice/bemama_web/docs/seo-step-1-2026-09-12/keyword-register.json) retains source URLs and exported ranges for every measured phrase.

All 100 earlier candidates have now been assigned a decision and an existing destination. Two directly observed competitor topics were added. **102 tracked candidates does not mean 102 missing keywords or new pages.**

| Decision | Candidate rows | Meaning |
|---|---:|---|
| Existing topic or related coverage | 35 | Preserve existing pages; no new article justified by phrase alone. |
| Improve product explanations | 25 | Group related terms on existing overview/workflow pages; verify feature details before writing. |
| Improve an existing tool | 11 | Describe and improve tools already present. Several terms share one tool. |
| Verify intent or app feature first | 21 | Hold; no instruction to insert these phrases. |
| Review content depth | 8 | Competitor detail or a relevant query merits comparison; new page not yet justified. |
| Prepare distinct article briefs | 2 | Four-month sleep and six-month feeding, with overlap and source review before publication. |

The numbers describe the disposition of the earlier research pool. The pool is not an exhaustive competitor inventory. BabyCenter website coverage remains unavailable because direct access was blocked; its official Google Play listing is the evidence source. Non-English keyword research remains pending, and no inferred search volumes have been supplied.

The source inventory confirms **199 English routes, 1,393 localized routes, and 13 public tools**. The earlier 199-page Chrome inspection supplies rendered-page evidence; the new [page inventory](C:/WorkSpace/Practice/bemama_web/docs/seo-step-1-2026-09-12/page-inventory.json) supplies reproducible source-route evidence. Main-page titles are null in this inventory where they are generated separately; that does not indicate missing live titles. Exact source-phrase matches in the JSON register are supplementary and do not determine semantic coverage.

### Additional competitor checks completed in this step

Five more Huckleberry articles were opened in Chrome using links observed on its pages. Each has a distinct age-specific schedule, nap questions, and bedtime coverage. Their relevance is recorded without copying their recommendations.

| Competitor page | Related registered phrases | BeMama destination / decision |
|---|---|---|
| [Three-month sleep](https://huckleberrycare.com/blog/3-month-old-sleep-schedule-and-development) | 3 month nap schedule; sleep at 3 months | Existing newborn-sleep guide; compare depth before creating a separate page. |
| [Seven-month sleep](https://huckleberrycare.com/blog/7-month-old-sleep-schedule-and-development) | sleep at 7 months | Existing nap-transition guide; evaluate a distinct age-specific answer. |
| [Thirteen-month sleep](https://huckleberrycare.com/blog/13-month-old-sleep-schedule-and-development) | 13 month nap schedule | Review alongside the existing nap-transition guide. |
| [Fourteen-month sleep](https://huckleberrycare.com/blog/14-month-old-sleep-schedule-bedtime-and-nap-schedule) | 14 month nap schedule | Consider a substantial shared 13–15-month section first. |
| [Fifteen-month sleep](https://huckleberrycare.com/blog/15-month-old-sleep-schedule-bedtime-and-nap-schedule) | 15 month nap schedule | Split into a new page only if it answers a materially different need. |

Their associated phrases were already in the Huckleberry-derived Planner export. Page checks verify competitor content, not organic rankings. Existing four-month sleep, six-month feeding, Huckleberry tracking, Nara product, and BabyCenter app-listing evidence remains in the approved plan and register.

## Actual tool findings

Original calculator/planner functions were executed in an isolated Node context with a fixed date and synthetic inputs. The [probe results](C:/WorkSpace/Practice/bemama_web/docs/seo-step-1-2026-09-12/tool-runtime-probes.json) contain the outputs. These are reproducible source-function probes, not full browser or authenticated app tests.

| ID / priority | Evidence | Required behavior in a later implementation step |
|---|---|---|
| T01 / first | [care-tools.js:1001](C:/WorkSpace/Practice/bemama_web/public/assets/care-tools.js:1001): due date today returns `week 41, day 0` because the calculation adds one to completed weeks. | Present completed weeks and days consistently; if describing the ordinal week, label it distinctly. Verify the due-date anchor and boundary dates. |
| T02 / first | [care-tools.js:200](C:/WorkSpace/Practice/bemama_web/public/assets/care-tools.js:200) disables native form validation. Blank/zero cycle values reach calculation as zero. `parseDate('2026-02-30')` normalizes to March 2. | Reject invalid calendar dates and impossible inputs with field-level errors; do not display a plausible result for rejected values. |
| T03 / first | [care-tools.js:1008](C:/WorkSpace/Practice/bemama_web/public/assets/care-tools.js:1008): only English gets detailed age-specific planner results. All six other languages use generic planner text plus activity-oriented age text. | Ensure the same task-specific meaning and age/readiness handling in all languages. English solids output already tells the 0–3 group to focus on milk feeding; preserve that intent rather than claiming English recommends solids at this age. |
| T04 / first | [care-tools.js:986](C:/WorkSpace/Practice/bemama_web/public/assets/care-tools.js:986): trimester strings are hard-coded English; all six translated due-date probes include `First trimester`. Ovulation test-result wording and log summaries also contain hard-coded English. | Localize complete output messages and numbers; test every supported locale. Keyword localization research is a separate task. |
| T05 / first | [expansion.mjs:659](C:/WorkSpace/Practice/bemama_web/src/articles/expansion.mjs:659): growth fields have labels without units; [care-tools.js:292](C:/WorkSpace/Practice/bemama_web/public/assets/care-tools.js:292) saves text values without an explicit unit model. | Make units explicit, preserve existing unknown-unit records without guessing, validate new measurements, and provide useful editing/history. |
| T06 / first | [care-tools.js:295](C:/WorkSpace/Practice/bemama_web/public/assets/care-tools.js:295) saves `entries.slice(0, 50)`; [care-tools.js:1094](C:/WorkSpace/Practice/bemama_web/public/assets/care-tools.js:1094) swallows storage errors while the form can still say Saved. | No silent record loss or false save confirmation. Preserve old records, handle storage failure visibly, and provide an explicit retention/export strategy. |
| T07 / next | [care-tools.js:282](C:/WorkSpace/Practice/bemama_web/public/assets/care-tools.js:282): summary and list both render the empty message; log UI offers Add/Clear but no per-entry edit. | One useful empty state, editable records, clear persistence status, and recoverable destructive actions. |
| T08 / next | [expansion.mjs:887](C:/WorkSpace/Practice/bemama_web/src/articles/expansion.mjs:887): milestones, solids, and toddler activities reuse the same age selector. | Use task-appropriate options; an activity picker called Toddler should offer meaningful toddler choices. |
| T09 / next | [expansion.mjs:1114](C:/WorkSpace/Practice/bemama_web/src/articles/expansion.mjs:1114) creates shared generic introductions/instructions. | Give each tool a specific purpose, actionable button, explained result, and useful next step within the existing theme. |

The save cap, unit ambiguity, and error handling are source findings; existing users' saved data was not inspected or modified. The name finder already has useful filters and custom entries and should be preserved. Full inventory: [13 tools](C:/WorkSpace/Practice/bemama_web/docs/seo-step-1-2026-09-12/tool-inventory.json).

## Baseline and limits

- Local build succeeded. The configured validation commands were run directly with Node because `npm` is not on PATH. **47 tests passed**, HTML validation passed for **1,400 HTML files / 1,393 localized routes**, and the SEO audit completed without reported duplicate titles/descriptions, localization issues, or oversized images. These checks do not cover all tool behavior; the probes above found issues outside that suite.
- Logs: [tests](C:/WorkSpace/Practice/bemama_web/docs/seo-step-1-2026-09-12/baseline-tests.txt), [validation](C:/WorkSpace/Practice/bemama_web/docs/seo-step-1-2026-09-12/baseline-validation.txt), [SEO audit](C:/WorkSpace/Practice/bemama_web/docs/seo-step-1-2026-09-12/baseline-seo-audit.txt).
- Fresh [Search Console baseline](C:/WorkSpace/Practice/bemama_web/docs/seo-step-1-2026-09-12/search-console-baseline.json): selected **3 months**, Web, no additional filter shown; chart dates **July 4–September 10, 2026**. Visible totals: **16 clicks, 956 impressions, 1.7% CTR, average position 70.8**. These are property totals, not per-language figures or AI citations. The table reports 404 queries; only the first 10 visible rows were captured. CSV export was blocked by Chrome, with no downloaded file or bypass attempted.
- The visible queries include existing second/third-trimester, BBT, and PCOS topics. Preserve those pages and track them after improvements; this small sample does not support estimating traffic gains.
- Earlier September 6 indexing reports in `docs/` are historical, with aggregate data last updated September 3. They are not current indexing counts.
- The build includes first-party Umami analytics. No current usage dashboard or tool-completion baseline was captured. New measurement must avoid recording entered health data. No claim is made that tool analytics are already implemented.

## Approval checkpoints

The approved plan is split into smaller reviewable implementation steps. **Stop after every step and obtain explicit user confirmation before starting the next.** This follows the user's instruction, not an extra repository approval rule.

| Step | Scope | Reviewable result |
|---|---|---|
| 1 — completed | Evidence register, source inventory, diagnostic findings, baseline | This directory and the concrete Step 2 scope below. |
| 2 — approved and implemented locally | Calculator correctness and professional UI pilot; growth-log reliability pilot; planner locale/readiness parity | [Step 2 review](../seo-step-2-2026-09-12/README.md): 69 tests pass, local preview ready; Portuguese browser check remains blocked. Retained theme/routes. Awaiting review before Step 3. |
| 3 — pending | English homepage and existing product explanations; verified app workflows; original briefs for the two focused articles | Before/after content and exact source-backed feature claims. No duplicate generic articles. |
| 4 — pending | Remaining tool interfaces and task-specific functionality | Reviewed improvements across all 13 existing tools, including checklists, calendar, milestones, activities, and name finder. |
| 5 — pending | Native keyword research and article/tool localization pilot across seven languages | Evidence briefs/glossaries before SEO translation; current translations are not accepted as researched keywords. |
| 6 — pending | Expand verified content, finish localized rollout, and release preparation | Final checks and deployment scope for confirmation. No automatic campaign activation. |
| 7 — pending | Verify the approved release and compare search/tool performance with baseline | Deployment evidence and measured outcomes; observation period specified before interpreting changes. |

### Exact Step 2 scope for confirmation

**Files expected to change:** `public/assets/care-tools.js`, `src/articles/expansion.mjs`, scoped tool rules in `src/hub.css`, and relevant tests. `scripts/build.mjs` should change only if the result markup requires it. Page metadata files change only where the approved tool labels require a matching accurate title/description. Preserve existing navigation, URLs, theme, localized routes, and saved records.

**Behavior:** fix completed-week/date/input handling; remove hard-coded English outputs; align planner meaning by locale; make calculator inputs/results clear; add an explicit unit model and reliable save/history handling to the growth-log pilot. Legacy measurements without units remain marked unknown until the user selects a unit—never infer units or convert silently. Upgrade the shared log persistence path without silently truncating old data.

**Acceptance:** calculator anchor/boundary/date tests; invalid input produces no result; all seven locales produce equivalent functional outcomes; growth records survive reload/migration; storage failures do not show Saved; records beyond 50 are not silently discarded; readable mobile layout, keyboard errors, and Arabic/Persian direction. Run the existing baseline checks plus targeted tests for these behaviors.

Step 2 stops at a reviewable local result. Publishing and subsequent steps wait for the user's requested checkpoints.

The source inventory, keyword register, export hashes, and diagnostic probes can be regenerated with the [Step 1 evidence script](C:/Users/amin.namyar/Documents/Codex/2026-09-12/ca/work/build-step-1.mjs), using the retained raw exports. The human review decisions are explicit in that script; keyword absence does not automatically classify a gap. Baseline test logs and the visible Search Console snapshot are separate dated observations.
