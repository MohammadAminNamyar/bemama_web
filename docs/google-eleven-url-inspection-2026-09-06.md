# Individual Google inspection of the 11 reported examples

Inspected through signed-in Chrome on September 6, 2026. Final evidence recorded
at 2026-09-06 23:23:28 UTC. This is a read-only investigation, apart from two
diagnostic live fetches and these local report files. No indexing submissions,
validation restarts, sitemap submissions, site edits or security changes.

## Outcome

**Nine of the eleven examples are already indexed. Two remain crawled but not
indexed.** The parent indexing report still says eleven and is last updated
September 3. Do not treat its stale example list as eleven current technical bugs,
or add nine to the total indexed count: the individual and aggregate reports
have different update times.

Every indexed example has a successful Googlebot smartphone crawl, allows
indexing, and has the inspected language-specific URL as both user-declared and
Google-selected canonical. These crawl records predate today's cache purge;
this inspection does not demonstrate that the purge caused their indexing.

## All 11 records

Times below are the local times shown in Search Console (America/Vancouver).

| Page | Current individual status | Last recorded Googlebot crawl | Google-selected canonical |
| --- | --- | --- | --- |
| [Potty-readiness (English)](https://bemamas.com/baby-and-child/potty-readiness/) | Indexed | Sep 5, 2026, 3:43:47 PM | This exact URL |
| [Basal body temperature (Spanish)](https://bemamas.com/es/trying-to-conceive/basal-body-temperature/) | Not indexed | Sep 5, 2026, 1:20:09 AM | Not provided (N/A) |
| [Baby movement patterns (Arabic)](https://bemamas.com/ar/pregnancy/baby-movement-patterns/) | Indexed | Sep 6, 2026, 4:42:28 AM | This exact URL |
| [First doctor visit (Arabic)](https://bemamas.com/ar/newborn/first-doctor-visit/) | Indexed | Sep 5, 2026, 11:17:28 PM | This exact URL |
| [Safe sleep and room sharing (Persian)](https://bemamas.com/fa/newborn/safe-sleep-room-sharing/) | Indexed | Sep 5, 2026, 9:24:58 PM | This exact URL |
| [Baby milestones (French)](https://bemamas.com/fr/baby-and-child/baby-milestones/) | Indexed | Sep 5, 2026, 8:21:38 PM | This exact URL |
| [Vaccination overview (Persian)](https://bemamas.com/fa/baby-and-child/vaccinations-overview/) | Indexed | Sep 5, 2026, 8:59:58 PM | This exact URL |
| [Menstrual-cycle basics (French)](https://bemamas.com/fr/trying-to-conceive/menstrual-cycle-basics/) | Indexed | Sep 5, 2026, 3:52:42 PM | This exact URL |
| [Due-date calculator (Arabic)](https://bemamas.com/ar/tools/due-date-calculator/) | Indexed | Sep 5, 2026, 1:22:41 PM | This exact URL |
| [Formula preparation (Spanish)](https://bemamas.com/es/newborn/formula-prep-safety/) | Indexed | Sep 5, 2026, 9:02:00 AM | This exact URL |
| [Ovulation signs (English)](https://bemamas.com/trying-to-conceive/ovulation-signs/) | Not indexed | Aug 13, 2026, 8:26:35 PM | Not provided (N/A) |

All eleven historical records say crawl allowed and page fetch successful.
The two unindexed records report N/A for indexing permission and both canonical
fields, and disable View crawled page. N/A is unavailable report data, not proof
that the current HTML lacks a canonical or that Google chose English. We could
not inspect Google's historical saved HTML for those two pages.

## Live Google tests of the two remaining URLs

| Check | English ovulation signs | Spanish basal body temperature |
| --- | --- | --- |
| Test time, September 6 | 16:20:22 Vancouver | 16:20:50 Vancouver |
| Google live result | URL is available to Google | URL is available to Google |
| Page availability | Page can be indexed | Page can be indexed |
| Crawl / indexing permitted | Yes / Yes | Yes / Yes |
| Fetch / HTTP response | Successful / 200 | Successful / 200 |
| Declared canonical | Exact English article URL | Exact Spanish article URL |
| Google's future canonical selection | Not determined by live test | Not determined by live test |
| Resource loading | All resources loaded | All resources loaded |
| JavaScript console | No messages | No messages |
| Breadcrumbs | One valid item | One valid item |

Read the live-fetched HTML through Google's tested-page panel. Both show their
correct language, title, canonical, seven language alternates plus x-default,
article heading, introduction and first body section. The Spanish main content
is in Spanish, not just translated navigation. Both fetched article dates are
August 26, 2026 with localized display text and matching time markup. This is a
technical content-presence check, not a clinical or native-speaker review.

Independent normal-URL HTTP checks of all eleven pages also returned 200 and
matched the deployed build's metadata, date markup and asset references, with
no detected noindex restriction or old Cloudflare email rewrite. Every page
has one self-canonical, one H1 and eight hreflang entries. Full per-URL evidence
is in google-eleven-url-inspection-2026-09-06.json.

## What this establishes, and what remains unknown

No current fetch, robots, resource-loading or declared-canonical problem was
found for either remaining page. A live test cannot establish why Google has
not selected a page for its index, predict its final canonical, or rule out
content-quality/selection factors. There is no demonstrated canonical defect
to fix by pointing these articles at another page or language.

The English article's August 13 stored crawl predates its recorded August 26
content update and today's deployed corrections. Its historical record is
therefore not an assessment of the current page. The Spanish page has a more
recent September 5 crawl, but its historical HTML is unavailable.

## Recommended next steps

1. Leave the nine indexed pages' canonical tags unchanged. Their current
   individual inspections are already successful.
2. For the English article, a single targeted indexing request can be considered
   after the previously exhausted request quota becomes available, because the
   page has materially changed since its recorded crawl. It is optional and
   does not guarantee indexing. No request was attempted in this investigation.
3. For the Spanish article, retain the correct self-canonical and avoid repeated
   submissions solely because it is labeled crawled-not-indexed. If the status
   persists, review the article's distinct usefulness, topic overlap, sourcing
   and natural Spanish with appropriate editorial expertise. These are checks
   to perform, not established causes of non-indexing.
4. Compare later individual inspection records with these timestamps. The
   separate 1,133 discovered-not-indexed group still needs its own investigation;
   it was not covered or resolved by this eleven-page check.

## Google documentation

- [URL Inspection](https://support.google.com/webmasters/answer/9012289?hl=en):
  stored inspection and live eligibility are different; live tests do not
  predict Google's selected canonical or guarantee inclusion.
- [Crawled, currently not indexed](https://support.google.com/webmasters/answer/7440203#crawled):
  the status does not itself require repeated crawling requests.
- [Request recrawling after changes](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl):
  requests are limited and do not guarantee inclusion.
