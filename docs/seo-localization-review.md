# Multilingual SEO metadata review

Date: September 6, 2026

## Scope and result

The public website has 199 routes per language, including 185 articles/tools and
14 home, category, tour and policy pages. All seven locales were rebuilt and
validated. The seven localized 404 pages bring the HTML validation total to 1,400.

| Language | Pages checked | Explicit editorial descriptions | Existing descriptions preserved | Metadata length issues | Localization issues |
| --- | ---: | ---: | ---: | ---: | ---: |
| English (`en`) | 199 | 116 | 83 | 0 | 0 |
| Persian (`fa`) | 199 | 140 | 59 | 0 | 0 |
| Arabic (`ar`) | 199 | 96 | 103 | 0 | 0 |
| French (`fr`) | 199 | 189 | 10 | 0 | 0 |
| Turkish (`tr`) | 199 | 181 | 18 | 0 | 0 |
| Spanish (`es`) | 199 | 183 | 16 | 0 | 0 |
| Portuguese (`pt`) | 199 | 180 | 19 | 0 | 0 |

Editorial counts include policy-specific overrides from the earlier pass. Different
counts reflect how many existing descriptions needed rewriting, not different
language coverage. Suitable original descriptions are preserved in full.

This pass added or improved 965 descriptions: 25 English and 940 non-English.
It replaced all 659 generated heading-list descriptions and all 113 shortened
opening-sentence descriptions, then addressed older boilerplate and several
overpromising or unclear summaries. Each language now has its own
`src/seo-descriptions-<locale>.mjs` file. Eight overly broad or awkward shortened
titles received explicit, topic-specific overrides.

The descriptions summarize the existing articles. Article bodies, H1 headings,
URLs, layouts and clinical source material were not rewritten in this pass.
Tool descriptions were checked against the implemented tool types; the milestone
tool is described as age-based development prompts, not a measurement log.

## Regression protection

- Descriptions are never truncated by character count or shortened to their first sentence.
- Section headings are not assembled into replacement summaries.
- Missing editorial rewrites and unsupported SEO locales raise errors.
- Tests require a source translation for every article in every supported language.
- The built article titles and descriptions must match the locale-specific source.
- Open Graph and Twitter titles/descriptions must match the page metadata.
- Language, direction, canonical URLs, all alternate-language links and H1 counts
  are checked by the combined validators.
- Duplicate titles/descriptions and oversized image fallbacks are checked globally.

Commands run successfully:

```text
node --test scripts/seo-metadata.test.mjs
node scripts/build.mjs
node scripts/validate.mjs
node scripts/audit-seo.mjs --issues
```

Result: 12 tests passed; 1,400 HTML files validated; 1,393 public routes passed the
metadata audit with zero duplicate titles, duplicate descriptions, oversized image
fallbacks or localization mismatches.

## Deployment and limits

These are local build results, not a new Ahrefs score or proof of production rollout.
Deploy the rebuilt website with all six new locale modules, then run a new crawl.
The separate `app.bemamas.com` work and stylesheet-size warning remain outside this
metadata pass. The audit budgets are project checks, not guarantees about Google's
displayed snippets, rankings or indexing. This is an AI-assisted metadata review,
not a certification of native-speaker or clinical review of the full articles.
