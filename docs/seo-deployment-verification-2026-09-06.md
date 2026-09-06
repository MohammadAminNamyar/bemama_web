# Production SEO deployment verification, September 6, 2026

## Verified live

The full public-page scan ran from 13:56:48 to 13:59:46 Vancouver time. It fetched
all 1,393 public HTML routes and compared their deployed title, description and
canonical with the local build. It also checked language/direction, H1 presence,
noindex directives and social metadata. All requests returned HTTP 200.

Initially, 1,392 pages matched and one Persian page had stale cached metadata.
After the approved correction and targeted purge below, that page also matched,
including the description, Open Graph description and Twitter description.

| Language | Public pages checked | Outstanding metadata failures after recheck |
| --- | ---: | ---: |
| English | 199 | 0 |
| Persian | 199 | 0 |
| Arabic | 199 | 0 |
| French | 199 | 0 |
| Turkish | 199 | 0 |
| Spanish | 199 | 0 |
| Portuguese | 199 | 0 |

Additional checks:

- 190 referenced image URLs, including responsive variants: no failed HTTP
  responses, non-image content types or reported file sizes above 1 MB.
- Seven language sitemaps: HTTP 200, exactly 199 expected URLs each, no missing
  or unexpected URLs. The sitemap index and robots.txt are available.
- App root HTML exactly matches the deployed source, with one H1, nine public
  outgoing links, descriptive metadata, canonical, language and social tags.
- App robots.txt and sitemap.xml return their intended content rather than the
  SPA HTML fallback.
- Chrome confirmed Flutter starts, removes the loading introduction and retains
  the descriptive browser title. No signed-in app records were modified.
- The IndexNow verification file is live and Ahrefs reports a valid key file.
  No IndexNow URL submission was made during this verification turn.
- The three previously slow pages returned cached responses in 45–57 ms from
  this connection. These are spot checks, not a global performance guarantee.
- HTTP/www variants redirect directly to the HTTPS bare domain with HTTP 301.

## Cloudflare correction and exact purge scope

Only `https://bemamas.com/fa/about-bemama/` was purged, with user approval. Its
origin copy was already correct; the cached copy had a 99-character description.

Initial single-URL purge requests were accepted but did not invalidate that copy.
The existing rule matched GET/HEAD only. With separate user approval, its method
condition was changed to `http.request.method in {"GET" "HEAD" "PURGE"}`. Every
other expression condition and cache setting was preserved. The same exact URL
was then purged again. At approximately 14:04, verification returned MISS and
then HIT, both with the current metadata.

Rule: `Cache anonymous public guide pages`

Rule ID: `37adff3b3f234c8dade8f28078a9b12a`

Post-change checks confirmed anonymous public requests still cache; requests with
cookies, Authorization or query strings remain DYNAMIC; app HTML remains DYNAMIC;
and a nonexistent public URL returns 404 with BYPASS. No full-site, hostname or
prefix purge was performed.

Cloudflare documents the need to include PURGE in method-restricted cache rules
for single-file invalidation:
[single-file purge limitations](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/#cache-rules-that-match-on-request-properties).

## Completed Ahrefs crawl and follow-up verification

Project 10331910 completed its new crawl from 14:03 to 14:58 Vancouver time
(54 minutes 50 seconds). The crawl log reports 1,595 URLs crawled and 1,394
billed pages. The overview lists 1,397 internal URLs. Crawl settings remain
30 URLs/minute, 5,000-page maximum, and JavaScript execution off.

[Ahrefs overview](https://app.ahrefs.com/site-audit/10331910/overview) |
[All issues](https://app.ahrefs.com/site-audit/10331910/issues) |
[Crawl log](https://app.ahrefs.com/site-audit/10331910/crawl-log)

| Metric | Previous 13:15 crawl | Completed 14:03 crawl |
| --- | ---: | ---: |
| Health Score | 100 | 100 |
| Errors | 1 | 0 |
| Warnings | 46 | 26 |
| Notices | 2,488 | 72 |

The completed report has no broken-link or oversized-image errors. The prior
app error is cleared. Long titles and descriptions are not in the actual issue
list. A score of 100 does not mean there are no remaining warnings or that search
rankings are guaranteed.

### Remaining warnings

| Warning | Count | Follow-up verification |
| --- | ---: | --- |
| Slow page | 12 | All returned HTTP 200; current repeat cached requests took 28–52 ms from this connection. |
| Slow server response for AI crawlers | 9 | All nine overlap the twelve slow pages; these are not nine additional URLs. |
| 3XX redirect | 3 | Expected HTTP/www canonical redirects. Keep them. |
| CSS file size too large | 1 | Recorded transfer 15,041 bytes; current transfers are below the audit's 15 kB threshold. |
| Meta description too short | 1 | The report captured old metadata; the live page now matches the deployed description. |

The short-description warning is for `https://bemamas.com/pregnancy/`. Ahrefs
recorded the old 99-character description. Both the cached canonical URL and a
query-bypassed request now return the correct 140-character description:

> Explore pregnancy guides by trimester, from early symptoms and prenatal appointments to nutrition, everyday comfort and preparing for birth.

The previously purged Persian about page also still returns its correct
138-character description, matching the build.

The CSS warning references `/assets/styles.css?v=20260906192106653`. Both that
version and the current `v=20260906204948944` return HTTP 200 with measured
transfers of 13,204 bytes using gzip and 14,214 bytes using Brotli. Decoded CSS
is 62,792 bytes. This does not reproduce the reported transfer-size warning in
these checks; it is not a claim that every cache variant or region is identical.

### Timing checks

The following are milliseconds for the total response time. The first live
request returned REVALIDATED and the repeat returned HIT for every URL. These
local checks do not exclude slower cold-cache, origin or regional requests.

| Path | Ahrefs total | Live first request | Live repeat |
| --- | ---: | ---: | ---: |
| `/ar/explore/` | 1,238 | 223 | 38 |
| `/fa/newborn/` | 2,277 | 52 | 41 |
| `/ar/newborn/parent-rest-newborn/` | 2,345 | 54 | 40 |
| `/pregnancy/preparing-for-labor/` | 1,000 | 57 | 47 |
| `/pregnancy/healthy-weight-gain/` | 2,519 | 66 | 34 |
| `/ar/trying-to-conceive/ovulation-signs/` | 1,902 | 63 | 34 |
| `/fa/newborn/cluster-feeding-and-rest/` | 2,505 | 67 | 34 |
| `/es/tools/appointment-symptom-calendar/` | 2,160 | 55 | 52 |
| `/fa/trying-to-conceive/menstrual-cycle-fertile-window/` | 1,596 | 57 | 38 |
| `/fr/newborn/bathing-and-diapering/` | 2,140 | 40 | 35 |
| `/fr/baby-and-child/toddler-biting/` | 1,994 | 61 | 28 |
| `/fr/baby-and-child/sleep-regressions/` | 2,127 | 63 | 38 |

### Notices and optional follow-up

The 72 notices consist of 33 changed pages not submitted to IndexNow, 33 changed
meta descriptions, two HTTP-to-HTTPS redirects, one changed H1, one changed
title, one changed word count and one indexable page not in a sitemap.

The sitemap notice concerns `https://app.bemamas.com/`. Its live robots.txt
correctly advertises `https://app.bemamas.com/sitemap.xml`; that sitemap returns
HTTP 200 XML containing the app root. Ahrefs URL sources currently has Website
and Auto-detected sitemaps checked, but Specific sitemaps unchecked. The useful
follow-up is explicitly adding the existing app sitemap to the audit sources,
not creating another sitemap or changing the app's indexability.

Ahrefs still lists 33 changed pages for IndexNow submission. The earlier key-file
validation succeeded. No submission was made during this follow-up verification.
Change notices and the valid canonical redirects are not defects to remove just
to empty the report.

This follow-up was read-only on production and external accounts: no new crawl,
cache purge, settings change, paid upgrade or IndexNow submission was performed.

## Multilingual indexing deployment recheck, 15:27-15:32 Vancouver

Verified after the user reported deployment. This section supersedes earlier
observations about whether the content-hash/sitemap changes are live, but does
not claim that Google's index has updated.

### Full canonical-page scan

Fetched all 1,393 public canonical URLs at concurrency four with a short pause
between requests. The scan finished at 2026-09-06 22:29:44 UTC. Every page:

- Returned HTTP 200 without redirecting.
- Matched the local build's title, description and self-canonical.
- Matched the expected HTML language and complete head hreflang declarations.
- Had no robots/googlebot noindex directive in HTML or X-Robots-Tag.
- Was reachable using HTML anchors within three clicks of its locale homepage.

These are crawlability checks, not confirmation that Google has indexed a URL.

| Language | URLs passing those checks | Current asset references | Older cached asset references | Pages with Cloudflare email-protection links |
| --- | ---: | ---: | ---: | ---: |
| English | 199 | 189 | 10 | 4 |
| Persian | 199 | 194 | 5 | 4 |
| Arabic | 199 | 195 | 4 | 6 |
| French | 199 | 195 | 4 | 6 |
| Turkish | 199 | 198 | 1 | 6 |
| Spanish | 199 | 195 | 4 | 6 |
| Portuguese | 199 | 198 | 1 | 6 |
| Total | 1,393 | 1,364 | 29 | 38 |

All seven locale sitemaps returned HTTP 200 with exactly 199 URLs each, matched
the built XML, and no longer contained rebuild-time lastmod values. The sitemap
index also matched the build, listing all seven maps without artificial dates.
Live robots.txt allows crawling and advertises the sitemap index.

Uncached checks of all eight changed article sources in every language
(56 pages) confirmed every intended localized related link. All seven uncached
basal-temperature sample pages used the new content-hash asset references.
Fetched production CSS and all three shared/tool/product scripts had byte hashes
matching both their version keys and the emitted local build:

| Asset | Verified SHA-256 prefix |
| --- | --- |
| styles.css | d99c25ffdebabf96 |
| site-search.js | a35f5e91f74a4af0 |
| care-tools.js | 2560888aab51c01e |
| product-tour.js | fcddcd3b653af8be |

The 29 old HTML responses were Cloudflare HITs using the previous timestamp
asset key. The new build was present in query-bypassed responses. A repeated
sample showed Age 635 and Cache-Control public, max-age=300, s-maxage=1800,
stale-while-revalidate=86400. Cache propagation is therefore not yet complete;
do not promise an exact refresh time. No cache purge was performed.

### Remaining edge-generated email links, confirmed on the new build

The full scan found 38 pages containing /cdn-cgi/l/email-protection links. A
targeted query-bypassed recheck confirmed all 38 on the current build, so this
is not just stale HTML. There were 49 injected link occurrences. The earlier
commentary estimate of 40 pages included two separate cached-link mismatches;
38 is the verified email-link count.

Affected routes:

- Every language: privacy, terms, subscription-terms and contact (28 pages).
- Arabic, French, Turkish, Spanish and Portuguese: about and ai-disclaimer
  (10 additional pages).

The local build contains plain support email text, but Cloudflare transforms
it into anchors with class __cf_email__ and data-cfemail. Its utility path
currently returns HTTP 404. This corrects the earlier investigation's claim
that no current links point there. The normal browser decode script may restore
the email address; this observation is not a claim that all visitor email links
are broken, nor that the 38 public pages themselves return 404.

[Cloudflare documents this HTML rewrite and narrowly scoped exclusions](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/).
A follow-up can exempt the published support address using email_off comments
or a public-host-only configuration rule. Review the spam-protection tradeoff;
do not disable unrelated bot protection or redirect the utility URL to the home
page. Local HTML tests cannot detect transformations added after deployment.

### Other remaining items and unchanged findings

- The separate date-selection defect remains in source: 92 article definitions
  per language, 644 localized pages. Uncached basal-temperature pages still emit
  Article.dateModified 2026-08-05 in all seven languages; English visibly says
  Updated: August 5, 2026 despite the article source's August 26 revision.
  This deployment did not include a date fix. Its role in indexing is unproven.
- All seven unique URLs from Google's historical other-4XX examples returned
  HTTP 200 again. Historical cause still requires retained server/security logs.
- /about-bemama still makes the expected single 301 to /about-bemama/, whose
  canonical page passed the full scan.
- Google Search Console's reported indexing counts were not refreshed during
  this deployment check. The earlier manual indexing quota remains a reason
  not to retry requests today. No indexing submission, validation restart,
  sitemap resubmission or Ahrefs recrawl was performed.
- Re-ran the local metadata, IndexNow and indexing tests: 24 passed, zero failed.
  No application source, build output, Cloudflare setting or staging was changed
  during this verification; only this report was updated.
