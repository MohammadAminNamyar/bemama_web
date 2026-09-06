# BeMama public website

Small static public website for BeMama policy, support, and launch pages.

## Commands

```powershell
node scripts/build.mjs
node --test scripts/seo-metadata.test.mjs
node scripts/validate.mjs
node scripts/audit-seo.mjs
node scripts/serve.mjs --port 80
```

The site is generated into `dist/` and is designed to be hosted at:

- `https://bemamas.com`
- `https://www.bemamas.com`

The English policy pages are the official public copy until reviewed translations are available.

## Search metadata

All seven locales (`en`, `fa`, `ar`, `fr`, `tr`, `es`, `pt`) are checked by the SEO audit.
Page-specific summaries live in `src/seo-descriptions-<locale>.mjs`; title and policy
overrides are in `src/seo-metadata.mjs`. Existing descriptions that fit the audit budget
are preserved. Descriptions are not cut by character count, shortened to a first sentence,
assembled from headings, or filled with English text for another language.

The build fails when a new page needs a localized editorial rewrite. The audit compares
built article metadata with the source, checks language/direction and social metadata,
and reports page counts and issues separately for each locale. These are local checks;
production changes still require deployment and a new external crawl.
