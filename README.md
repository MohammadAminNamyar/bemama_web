# BeMama public website

Small static public website for BeMama policy, support, and launch pages.

## Commands

```powershell
node scripts/build.mjs
node --test scripts/seo-metadata.test.mjs scripts/indexnow.test.mjs
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
