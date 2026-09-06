# BeMama public website

Small static public website for BeMama policy, support, and launch pages.

## Commands

```powershell
node scripts/build.mjs
node --test scripts/seo-metadata.test.mjs scripts/indexnow.test.mjs scripts/indexing.test.mjs
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

Descriptions must have at least 100 visible characters and at most 160 serialized
characters. The minimum matches the completed Ahrefs crawl; HTML entities cannot
inflate a short summary into passing. New rewrites aim for complete, useful copy
within that budget, without padding or truncation.

## IndexNow (free, after deployment)

The public verification key is saved in Ahrefs project 10331910 and included in
`public/xkfc94pam6281fxy8srfa7gd52xxnspv.txt`. It is public ownership proof, not a
secret credential. The build copies it to the website root.

```powershell
node scripts/indexnow.mjs --dry-run
# Only after deploying and verifying the latest public site:
node scripts/indexnow.mjs --submit
```

Dry-run is the default and sends nothing. Submission first checks the live key
file and all 1,393 deployed page titles, descriptions and canonicals against the
local build. Stale, missing, redirected or noindex pages stop the submission.
The batch contains only public main-site routes, never app/API/account URLs.
Alternatively, use Ahrefs' manual Submit to IndexNow action after deployment;
this records the submissions inside Ahrefs. Do not use both methods for the same
deployment. Ahrefs auto-submit requires its paid plan and is left off.

## Production HTML caching

Cloudflare rule `Cache anonymous public guide pages` was enabled on September 6,
2026. It matches only `bemamas.com` public page paths and anonymous GET/HEAD
requests without query strings. Cookies and Authorization headers bypass the
rule. App/API/analytics traffic and assets are outside its scope. Responses with
status 400 or above are not stored. Origin cache headers are respected: currently
5 minutes in browsers and 30 minutes at the edge.

The method condition includes `PURGE` alongside `GET` and `HEAD` so Cloudflare's
single-URL cache invalidations can match the rule. Keep this when editing the
expression; omitting `PURGE` can leave old cached HTML after an accepted purge.

After deploying, purge changed HTML URLs in Cloudflare (or allow the edge TTL to
expire) before verifying metadata or submitting to IndexNow. Existing assets use
versioned URLs and do not need a blanket purge. Do not broaden this rule to the
app, APIs or all hostnames. Details and checks are in
`docs/seo-remaining-fixes.md`.

Production verification after deployment is recorded in
`docs/seo-deployment-verification-2026-09-06.md`.

## Google indexing and crawl stability

Sitemaps retain every public canonical URL and all seven reciprocal language
alternates. They intentionally omit optional `lastmod` values: the previous
build-date stamp incorrectly marked unchanged pages as updated on every build.
Do not restore it without reliable per-page, per-language revision dates that
cover content, metadata and significant link changes. RSS editorial dates are
unchanged; they are not replaced with the build clock.

Asset cache keys now use SHA-256 hashes of the emitted file bytes, including
minified CSS and JavaScript. Unchanged assets keep their URLs across deployments;
only changed assets receive new keys. Do not manually edit generated assets after
building. The indexing tests verify these hashes and check every localized route
for canonical/sitemap agreement, accidental noindex, utility links and HTML-link
reachability within three clicks of its language's homepage.

These checks establish technical eligibility, not guaranteed Google indexing.
See `docs/google-indexing-followup-2026-09-06.md` for the Google live test, daily
submission quota and deployment follow-up.

### Article dates and public support email

`src/article-dates.mjs` chooses the latest recorded article/evidence-note revision
for the visible update date and Article/WebApplication `dateModified`. Evidence
notes retain their separately labelled date, not a medical-review claim.
Existing `article.updated` values are shared editorial revision records, not
independently verified translation timestamps. An actual independent translation
revision can be recorded as `article.i18n[lang].updatedIso` (YYYY-MM-DD); it takes
precedence over that shared article record. Do not stamp the build date or infer
a translation/clinical review that did not happen. Dates render in each locale
with an unambiguous ISO `datetime` attribute. RSS dates and sitemap policy are
unchanged.

Published support-address mentions in policy paragraphs are rendered as normal
`mailto:` links with RTL isolation, enclosed by Cloudflare's documented
`email_off` comments. Only this already-public address is exempted from email
obfuscation; other addresses and security settings are unchanged. Keep these
comments through any HTML postprocessing. All-language tests cover the 38
affected pages and 49 existing address mentions.

After deployment, check the actual Cloudflare-served HTML as well as the build:

```powershell
node scripts/verify-indexing-live.mjs
node scripts/verify-indexing-live.mjs --all
# Diagnose whether failures are old cached HTML (read-only query bypass):
node scripts/verify-indexing-live.mjs --all --bypass-cache
```

Default mode checks 91 representative URLs across all seven languages; `--all`
checks all 1,393. Both also verify the eight sitemap files. The command detects
date/schema mismatches, missing email links, Cloudflare-injected utility links,
stale asset references, bad status codes, metadata mismatches and noindex. It
does not purge, submit URLs, call Search Console or prove Google indexing.
