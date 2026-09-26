# Google indexing investigation — September 16, 2026

Checked the eleven URLs in the supplied screenshots against signed-in Google
Search Console, public HTTP responses, the current source, and a fresh build.
The current repository is `C:\WorkSpace\Practice\bemama_web`; the supplied older
`C:\WorkSpace\Practice\bemama\_web` path does not exist on this computer.

## Result

**Three of the eleven examples are already indexed; eight remain crawled but
not indexed. No current technical indexing blocker was reproduced on those
eleven URLs.** The canonical validation passed. The new redirect exclusion is
an old tour-state query URL, not one of the eleven article/policy URLs.

This does not establish Google's reason for withholding the remaining pages,
or guarantee future indexing. It is not a claim that the indexing issue is fixed.

## Individual URL Inspection results

These are individual Google Index records inspected September 16, approximately
13:08–13:15 America/Vancouver. Crawl times below are the times displayed by
Search Console. They are different from today's public HTTP check time.

| URL path | Individual status | Last stored Google crawl |
| --- | --- | --- |
| `/fa/newborn/cluster-feeding-and-rest/` | Not indexed: crawled | Sep 14, 10:25:13 AM |
| `/pt/baby-and-child/6-month-old-feeding-schedule/` | Not indexed: crawled | Sep 14, 9:57:17 AM |
| `/fa/baby-and-child/starting-solids-allergens/` | Not indexed: crawled | Sep 13, 5:53:55 PM |
| `/fa/pregnancy/third-trimester/` | **Indexed** | Sep 16, 6:10:58 AM |
| `/es/baby-and-child/early-morning-waking/` | **Indexed** | Sep 16, 12:44:29 AM |
| `/trying-to-conceive/folic-acid-basics/` | Not indexed: crawled | Sep 12, 12:35:02 PM |
| `/baby-and-child/sleep-training/` | Not indexed: crawled | Aug 30, 9:53:57 PM |
| `/trying-to-conceive/pcos-and-ovulation-tracking/` | Not indexed: crawled | Aug 28, 8:46:56 PM |
| `/tr/terms/` | **Indexed** | Sep 3, 9:47:47 AM |
| `/trying-to-conceive/folic-acid-preconception/` | Not indexed: crawled | Aug 19, 8:39:49 AM |
| `/trying-to-conceive/ovulation-signs/` | Not indexed: crawled | Aug 13, 8:26:35 PM |

All eleven records show an allowed, successful Googlebot smartphone crawl.
All three indexed records show indexing allowed and the inspected URL as both
the declared and Google-selected canonical. The eight unindexed records show
N/A for canonical and indexing-permission fields; that is unavailable stored
data, not evidence that the current HTML is missing a canonical.

The September 6 investigation in this repository covered a different set of
eleven examples. Its nine-indexed/two-unindexed outcome must not be applied to
the new screenshot list.

## Google live test

Tested `/pt/baby-and-child/6-month-old-feeding-schedule/` through Google's
**Test live URL** at September 16, 13:15:10 Vancouver:

- URL is available to Google; page can be indexed.
- Google Inspection Tool smartphone; fetch successful.
- Crawl allowed: Yes. Indexing allowed: Yes.
- Declared canonical: the exact Portuguese article URL.
- Breadcrumbs: one valid item.

This tests current accessibility and eligibility. It does not change the stored
unindexed result or determine Google's future canonical selection. No Request
Indexing action was taken.

## Public site and build checks

All eleven exact URLs return HTTP 200 without a redirect, permit indexing, have
one H1 and a self-canonical, and appear in their respective live language
sitemaps. Each head contains seven language alternates plus x-default. Article
content is present in server HTML. Metadata, editorial dates, asset references,
and support-email links match the fresh build. The live robots.txt allows
crawling and points to the sitemap index.

Evidence: [eleven live URLs](indexing-live-2026-09-16.json).

Additional verification:

- Fresh build succeeded.
- All eight indexing integration tests passed across seven languages, including
  canonical/sitemap consistency, asset hashes, and HTML-link reachability within
  three clicks of each language's homepage. [Results](indexing-tests.txt).
- Site validation passed: 1,414 HTML files and 1,407 localized routes.
  [Results](validation.txt).
- SEO audit passed with no reported title/description duplicates, localization
  issues, description-length issues, or oversized images. [Results](seo-audit.json).
- All 91 representative production pages and all eight live sitemap files
  matched the fresh build. [Results](representative-live.json).

These checks are not a clinical review, a native-language editorial review, or
a measurement of rankings. The separate 1,075 discovered-but-not-indexed URLs
were not individually inspected.

## What each notification means here

### Canonical validation passed

The current aggregate report shows **Passed**, with zero affected URLs for
Alternate page with proper canonical tag. No canonical change is indicated.

### Crawled, currently not indexed — validation failed

The aggregate report still lists eleven examples, while three individual
records already say indexed. The remaining eight have successful stored
crawls. Validation failure does not by itself identify a robots, redirect,
canonical, or sitemap defect.

### New Page with redirect

The sole example is `https://bemamas.com/explore/?area=daily&step=1`, last crawled
September 14. Today it returns HTTP 200 with canonical
`https://bemamas.com/explore/`. The existing product-tour script reads old query
state, removes `area` and `step` from the query, and uses `history.replaceState`
to put state in the URL fragment. This is consistent with Google reporting a
rendered URL change; Google's exact classification mechanism is not exposed.

The clean `/explore/` URL returns HTTP 200 and is self-canonical. The query
variant is not a separate article that needs indexing. Do not remove the
canonical or introduce query variants into sitemaps to clear this exclusion.

### Two older technical reports

- **Redirect error:** the example is `/about-bemama`, last crawled July 6.
  Today's response is a single 301 to `/about-bemama/`, then HTTP 200 with the
  correct canonical. No loop or excessive chain was reproduced.
- **404:** the example is `/cdn-cgi/l/email-protection`, last crawled June 10.
  This is a Cloudflare utility URL, not a public content page. Current indexing
  tests verify that active pages no longer link to that utility.

Both older validation runs show Started on August 10. They were not restarted.
See [HTTP redirect checks](redirect-checks.json).

## Broader Search Console snapshot

The aggregate report, last updated September 13, shows 317 indexed and 1,089
not indexed: 1,075 discovered, eleven crawled, one page with redirect, one
redirect error, and one 404. These totals and individual inspections have
different refresh times; do not add the three individually indexed examples
to 317 to manufacture an updated total.

All eight submitted sitemap entries show **Success**. English and French were
last read September 15 and show 197 URLs each. Spanish, Turkish and Persian
show September 6; Portuguese September 9; Arabic September 11. Those older
reads still show 199 URLs each. The index was read September 14 and reports
1,389 discovered pages. The current live build has 197 active canonical URLs
per language (1,379 total); successful older reads are not an exact inventory
of today's build. Missing referring-sitemap fields on individual inspections
do not establish a broken sitemap.

## Changes made and practical next steps

Rebuilt local generated output. The checked-in routine article HTML referenced
asset hash `97c3f88220c71583`, while the current emitted `routine-articles.js`
bytes hash to `ba33f9c05d2e605b`. Regeneration corrected the references on the
four-month sleep and six-month feeding pages in all seven languages (14 HTML
files). Production already serves the latter hash, so this was local artifact
consistency, not a demonstrated production indexing cause. No source content,
canonical, robots, redirect rule, or production configuration was changed.
No deployment, indexing submission, sitemap submission, or validation restart
was performed.

1. Retain the working technical configuration and the three already indexed
   pages. The tour query exclusion is expected for an alternate state URL.
2. Prioritize an editorial comparison of `folic-acid-basics`,
   `folic-acid-preconception`, and `prenatal-vitamins-before-pregnancy`. Their
   titles, introductions and sections overlap on timing, dose, food sources
   and supplement choice. Distinct reader tasks or a carefully planned
   consolidation may improve the content. Overlap is a review finding, not
   proof of Google's exclusion reason; no automatic redirect was introduced.
3. Review the eight remaining guides for distinct usefulness, source accuracy
   and natural language. Additional words alone are not a demonstrated fix.
   Preserve accurate dates and do not invent medical-review credentials.
4. A single targeted recrawl request for the English ovulation-signs page is
   reasonable because its last stored crawl (August 13) predates its recorded
   August 26 article revision. Avoid repeated blanket submissions or restarting
   validation without a material change. Recheck individual records after
   Google processes future crawls.

Google explains that [crawled but not indexed does not require resubmitting the
URL](https://support.google.com/webmasters/answer/7440203?hl=en#crawled), that
[crawl requests do not guarantee indexing or speed up with
repetition](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl),
and how [canonical signals consolidate alternate
URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).
