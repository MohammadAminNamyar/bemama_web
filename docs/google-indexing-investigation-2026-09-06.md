# Google indexing investigation across languages

Follow-up at 23:23 UTC on September 6: the deployment/cache fixes now pass all
1,393 normal public URLs. Individual inspection of all eleven crawled-not-indexed
examples found nine already indexed and only two still unindexed; both remaining
pages pass Google's live test. See google-eleven-url-inspection-2026-09-06.md and
indexing-date-email-fixes-2026-09-06.md for the later results. The original
investigation below is retained as a historical snapshot.

Investigated September 6, 2026 through the signed-in Chrome Search Console
session, public HTTP requests and local source inspection. This was a read-only
investigation: no production/settings changes, indexing submissions, new audits
or code fixes were made in this turn. The only new file is this report.

## Conclusion

The dominant issue in Google's summary is incomplete crawling/processing of
translated pages, not a demonstrated site-wide robots, canonical or language
configuration failure. Of 1,144 unindexed canonical sitemap URLs, 1,133 are in
the discovered-not-indexed group and 11 in crawled-not-indexed. This describes
the stage of the problem, not a proven explanation of Google's prioritization.

There are two concrete follow-ups beyond the previously prepared deployment:
investigate nine historical 4XX crawl responses using origin/Cloudflare logs,
and correct article update-date selection. Do not infer a Google penalty,
translation-quality verdict or a guarantee of future indexing from these counts.

## 1. Coverage by language

Source: [Page indexing](https://search.google.com/search-console/index?resource_id=https%3A%2F%2Fbemamas.com%2F),
filtered separately to each language sitemap. Summary last updated September 3.

| Language | Sitemap URLs | Indexed | Indexed share | Discovered, not indexed | Crawled, not indexed |
| --- | ---: | ---: | ---: | ---: | ---: |
| English | 199 | 142 | 71.4% | 55 | 2 |
| Persian | 199 | 23 | 11.6% | 174 | 2 |
| Arabic | 199 | 18 | 9.0% | 178 | 3 |
| French | 199 | 15 | 7.5% | 182 | 2 |
| Turkish | 199 | 12 | 6.0% | 187 | 0 |
| Spanish | 199 | 23 | 11.6% | 174 | 2 |
| Portuguese | 199 | 16 | 8.0% | 183 | 0 |
| Total | 1,393 | 249 | 17.9% | 1,133 | 11 |

The three other exclusions in the all-known-URLs report are the old slashless
about URL, Cloudflare email-protection utility URL and query-string tour
alternate. They are not additional canonical sitemap pages that need indexing.

All seven live sitemaps return HTTP 200 and contain exactly 199 main-site URLs.
The comparison article below is present in every corresponding sitemap. The
prior Search Console check showed Success for all seven submissions. No language
sitemap is missing. Sitemap recognition does not guarantee URL indexing.

## 2. Same-article comparison using URL Inspection

Article: `trying-to-conceive/basal-body-temperature/`, with the appropriate locale
prefix. These are individual inspection results, not inferences from the totals.

| Locale | Individual Google status | Last crawl / detail |
| --- | --- | --- |
| en | Indexed | August 31, 18:46:44; successful smartphone crawl; Google chose inspected URL as canonical. |
| ar | Indexed | August 21, 07:10:53; successful smartphone crawl; Google chose the Arabic URL, not English. |
| es | Crawled, currently not indexed | September 5, 01:20:09; crawl allowed, successful fetch; canonical/indexing fields N/A. |
| fa | URL is unknown to Google | No recorded crawl in inspection. |
| fr | URL is unknown to Google | No recorded crawl in inspection. |
| tr | URL is unknown to Google | No recorded crawl in inspection. |
| pt | URL is unknown to Google | No recorded crawl in inspection. |

All seven versions currently return HTTP 200, use a self-referencing canonical,
have the expected HTML language, and list all seven hreflangs plus x-default.
There was no X-Robots-Tag exclusion. Current response times from this connection
were 34–428 ms; this is not a global performance guarantee.

The Spanish inspection briefly showed a sitemap-field "Temporary processing
error" although the sitemap itself is accessible and its submission succeeded.
The other indexed examples also report no referring sitemap. These fields alone
are not evidence of a malformed sitemap.

The earlier English potty-readiness example is already indexed even though the
summary still lists it among crawled-not-indexed examples. Treat the summary as
lagging data and check individual status before resubmitting a page. Google
documents this difference in its [Page indexing help](https://support.google.com/webmasters/answer/7440203?hl=en).

## 3. Crawl health and historical access errors

Source: [Crawl stats](https://search.google.com/search-console/settings/crawl-stats?resource_id=https%3A%2F%2Fbemamas.com%2F),
90-day view, report header last updated September 4. Some example rows are newer.

- 2,329 crawl requests, 489,103,063 downloaded bytes, 304 ms average response time.
- Host status: no problems in the last 90 days.
- Responses: 95% HTTP 200, 3% HTTP 301, 1% HTTP 404, less than 1% other 4XX.
- Purpose: 94% refresh, 6% discovery.
- File types: images 39%, HTML 28%, JSON 17%, JavaScript 8%, CSS 4%, others 4%.
- Manual actions: No issues detected. Security issues: No issues detected.

These are request shares, including repeat requests and page resources. They are
not unique-page counts. The low discovery share is consistent with limited new
URL crawling, but does not prove why Google chose that mix. Definitions are in
[Google's Crawl Stats documentation](https://support.google.com/webmasters/answer/9679690?hl=en).

Nine "Other client error (4XX)" requests involved seven unique URLs:

| Date/time shown by Google | URL path |
| --- | --- |
| September 5, 04:10 | `/pregnancy/safe-medicines-pregnancy/` |
| September 5, 03:08 | `/contact/` |
| September 4, 13:04 | `/pregnancy/foods-to-avoid/` |
| September 4, 05:43 | `/about-bemama/getting-started/` |
| August 31, 20:45 | `/pregnancy/foods-to-avoid/` |
| August 31, 19:29 | `/about-bemama/privacy-and-safety/` |
| August 31, 01:43 | `/about-bemama/privacy-and-safety/` |
| August 12, 21:21 | `/es/trying-to-conceive/endometriosis-and-conception/` |
| August 12, 21:21 | `/es/pregnancy/pelvic-pain-round-ligament/` |

All seven returned HTTP 200 during this investigation. Google's own live test
of the Spanish endometriosis page at 15:21 Vancouver returned "URL is available
to Google", "Page can be indexed" and one valid breadcrumb. Its stored indexing
record still says unknown; live eligibility is not indexing confirmation.

The available report did not identify exact status codes or the originating
server/rule. Cloudflare/origin logs at those times are required to determine
whether these were access rules, rate limiting or another cause. No broad WAF
bypass is justified by the current evidence. No 5XX category was reported in
the response breakdown inspected here.

## 4. Translation and content-structure checks

Inspected all 185 article/tool definitions in every locale (1,295 localized
article/tool bodies), not just English metadata. Checks found:

- No missing localized bodies.
- No full bodies identical to their English source in another locale.
- No translated article with fewer sections than its English counterpart.
- No verbatim English source paragraphs longer than 100 characters copied into
  another language's article sections.
- No exact duplicate full bodies within any one language.
- All health-category articles have linked evidence sources in every locale.

These structural checks are not a native-speaker review, a clinical fact-check
or proof of distinct search intent. The sampled Spanish/Persian basal-temperature
introductions and headings address the same task as English rather than merely
translating the navigation. This provides no evidence of the common "translated
header, English body" duplication problem. Google's [canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/canonicalization)
distinguishes genuinely translated primary content from same-language duplicates.

The previously run HTML tests cover all 1,393 public routes, self-canonicals,
language alternates and HTML-link reachability within three clicks. Those are
local build results. They cannot determine Google's index-selection decisions.

## 5. Newly confirmed date-selection issue

`scripts/build.mjs` chooses `evidence.updated` ahead of `article.updated` for
visible dates, and `evidence.updatedIso` for Article.dateModified. For 92 article
definitions the article date is newer. This affects 92 pages per language, or
644 localized article pages.

Example: the basal-temperature article source says August 26, 2026, while the
live page and Article.dateModified say August 5, 2026 in all seven languages.
The old evidence note overrides the newer article revision. This is distinct
from the already prepared removal of build-time sitemap dates.

Recommended fix: distinguish article updates from evidence/clinical review
dates, use actual locale-specific revision information, and keep the displayed
update date and structured dateModified consistent. Do not mark pages updated
today merely to look fresh. [Google's byline-date guidance](https://developers.google.com/search/docs/appearance/publication-dates)
supports accurate, consistently labeled dates. This defect has not been proved
to cause the indexing gap and was not changed during this investigation.

## 6. Recommended next actions, in order

1. Deploy the prior public-site build changes. Production still served the old
   timestamp asset key `20260906204948944` and sitemap lastmod `2026-09-06` during
   this investigation. The content-hash and sitemap fixes were not yet observed
   live. Verify after deployment/cache expiry; no app build is needed for them.
2. Correct the date-selection issue above with regression tests across all seven
   languages. Keep genuine translation updates separate from source/evidence dates.
3. Correlate the nine historical 4XX requests with retained server/security logs.
   Preserve site security unless a specific false-positive rule is established.
4. Work through the small crawled-not-indexed group with individual inspection.
   Prioritize still-unindexed useful articles, assess overlapping intent and
   translation/health-source quality, and avoid re-requesting already indexed URLs.
5. For the much larger discovery group, keep complete sitemaps, stable URLs and
   relevant internal links. Use limited manual indexing requests only after the
   daily quota resets and only when warranted; no submission was attempted here.
   Do not disable translations or canonicalize them all to English to reduce counts.

There is no confirmed single switch that will index all 1,133 discovered pages.
The next external result must come from Google's crawl/index updates, not from
Ahrefs' health score or passing local validators.
