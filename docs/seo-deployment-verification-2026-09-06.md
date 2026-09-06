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

## Fresh Ahrefs crawl: running, not completed

A new crawl of project 10331910 began at 14:03 Vancouver time, comparing against
the earlier 13:15 crawl. The latest observed snapshot showed 15 URLs crawled and
1,417 scheduled. Crawl settings remain 30 URLs/minute, 5,000-page maximum, and
JavaScript execution off. Paid features were not enabled.

[Ahrefs crawl log](https://app.ahrefs.com/site-audit/10331910/crawl-log)

The old score of 100, one error and 46 warnings are not results of this new crawl.
Final issue counts must be read after completion. The direct deployment checks
above are not a substitute for the complete external audit, particularly for
link relationships and crawler-specific timing.

Remaining follow-up: review the completed crawl and, if desired, submit changed
public URLs to IndexNow. Title/description-change notices and the three valid
canonical redirects should not be treated as defects merely to empty the report.
