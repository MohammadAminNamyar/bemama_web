# Step 3 — English product explanations and focused article briefs

September 12, 2026. Branch: `codex/step-3-content`, based on installed `master` commit `99b671f5a`. Local review checkpoint; this step has not been merged, pushed or published.

## What changed

- English homepage: names pregnancy guidance and baby tracking clearly, preserves the existing theme and layout, and links its feature cards to the corresponding explanations.
- Five existing English product pages: Why BeMama, Daily Journey, Tools, Premium and Getting Started. These now explain setup, nursing/bottle/sleep/diaper records, report views, corrections, public-tool backups and feature access. No new page per keyword synonym.
- The primary English homepage button now opens the public tools. The former no-account guest-app link reached sign-in in the observed Chrome session. Public tools are the verified no-account path.
- Readable labels replace long visible URLs in the revised explanations. Product-specific bylines avoid an unsupported health-review implication.
- A scoped mobile overflow fix contains the homepage tour-device shadow; the shorter free-tools button stays on one line.
- Two original article briefs cover four-month sleep schedules and six-month feeding schedules. They include source requirements, overlap decisions, original visual specifications and a localization handoff. Neither article is published in this step.
- The read-only installation checker now ignores Windows/Unix line-ending differences in sitemaps while still detecting changed URLs, dates and other content.

## Review the work

- [Before/after explanation](before-after.md)
- [Feature claims and evidence limits](feature-evidence.md)
- [Keyword implementation register](keyword-implementation.json)
- [The two article briefs](article-briefs.md)
- [Retained previous English copy](content-before.json)
- [Source and language scope check](scope-verification.json)

Local preview (when the existing server is running): [Homepage](http://localhost:4173/), [pregnancy setup](http://localhost:4173/about-bemama/daily-journey/), [baby tracking](http://localhost:4173/about-bemama/tools/), [free/Premium access](http://localhost:4173/about-bemama/premium/), [getting started](http://localhost:4173/about-bemama/getting-started/).

## Evidence and boundaries

The Step 1 register contained 102 candidates across several classifications. This step maps its **25 product-explanation candidates** into the appropriate existing pages: 23 source-backed workflow mappings, one qualified free-access answer and one partial calendar-intent answer. These counts do not mean 25 newly discovered missing keywords, 25 exact-match insertions, or any measured ranking improvement. Keyword Planner demand evidence is retained as recorded; no new volume is invented.

The app claims are supported by the local client implementation at `e6bece9`. Chrome verified live entry screens, not authenticated tracking or successful backend saves/exports. An authenticated check of the deployed app remains a release-verification item. See the evidence matrix before treating every described account workflow as production-tested.

No new public routes were created. Existing website tools, saved records, visual styling and article layout were preserved. The six non-English source objects have identical before/after hashes; their text and dates were not translated. Some related-card order changes are produced by the existing shared English-title ranking. English footer copy changes appear across English pages because they use the homepage description.

The two health articles are briefs. The future writing step must source-check and obtain an appropriate clinical review for schedules, examples, numerical claims and help-seeking guidance. Do not label a review as medical unless it actually occurred.

## Installation baseline

Before changing the content, the read-only live comparison passed **91 representative pages (13 per language)** and all eight sitemap files after normalizing CRLF/LF. The seven locale sitemaps each had 195 URLs, with no missing or extra URLs. This confirms the sampled installed metadata, dates and assets; it does not prove search-engine indexing or whole-site functional coverage.

## Validation

See [validation.md](validation.md) for final automated and Chrome results.

## Next checkpoint

Review this English content step first. The earlier remaining-tool work was largely folded into the completed Step 2 expansion (nine retained tools and the documented retirements). The next substantial approved workstream is native keyword research and a localization pilot across the seven languages, followed by the source-checked content expansion. Do not roll out literal translations of the new keywords or publish these briefs automatically.

Production merge/deployment and the next workstream remain separate user checkpoints.
