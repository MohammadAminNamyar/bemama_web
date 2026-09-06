# Article-date and support-email fixes, September 6, 2026

## Implemented and deployed

The user deployed during the implementation turn. All 1,393 production public
pages passed a query-bypassed check completed at 22:43:40 UTC (15:43:40 Vancouver).
All eight sitemap files also matched the build. After the user explicitly
authorized a full-zone Cloudflare cache purge, all 1,393 normal canonical URLs
also passed without a query bypass at 23:00:17 UTC (16:00:17 Vancouver).
The deployment-cache mismatch is now resolved in this connection's full scan.

### Dates across all seven languages

- Added `src/article-dates.mjs` and used it for article/tool HTML and structured
  data. The visible update date and Article/WebApplication dateModified now
  agree, with an ISO `time` datetime attribute and localized display text.
- An older evidence note no longer overrides a newer article revision. This
  corrects the 92 affected article definitions in each language: 644 pages.
- A newer recorded evidence-note revision can still advance the overall page
  date because those notes are part of the page. Their own date is separately
  labelled near the sources, never presented as an independent medical review.
- The current content model records shared article revisions in article.updated.
  No independent translation timestamps are currently recorded. An actual
  locale-specific revision can now override the shared record through
  i18n[lang].updatedIso. No translation timestamps, publication dates or clinical
  reviews were invented. No dates were changed to the build/deployment time.
- Basal-temperature article: page date August 26, 2026 / 2026-08-26; evidence-note
  date August 5, 2026 / 2026-08-05. Verified both in production for every language.
- RSS dates and sitemap lastmod policy are unchanged. Sitemaps continue to omit
  artificial rebuild-time dates.

This implements consistent, clearly labelled dates in line with
[Google's byline-date guidance](https://developers.google.com/search/docs/appearance/publication-dates).
It is not evidence that dates caused Google's indexing gap.

### Cloudflare-generated email links

All 49 existing support-address mentions on 38 localized policy pages now use
normal `mailto:support@bemamas.com` links inside Cloudflare's documented
`email_off` comment markers. The links have `dir="ltr"` for RTL paragraphs.
Only that already-published support address is exempted; no Cloudflare zone,
WAF, crawler, app, API or unrelated email setting was changed.

The complete uncached production scan confirmed that Cloudflare honors the
markers: no injected email-protection URL or data-cfemail remained, and every
expected support link was present. Cloudflare may remove the marker comments
after processing; the live verifier correctly checks the resulting links rather
than demanding that comments remain in the response.

[Cloudflare's documented exclusion mechanism](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/)
is narrowly applied here. The utility URL itself remains a valid 404; it was not
turned into a fake page or redirected to the homepage.

## Verification

- 47 automated tests passed, including all 1,295 localized article/tool pages,
  the 644 older-evidence regressions and all 49 support-address occurrences.
- The main validator passed 1,400 HTML files and 1,393 public routes.
- SEO audit: zero title/description length issues, duplicate titles or
  descriptions, localization issues or oversized-image findings.
- Chrome preview: Persian dates were localized correctly; Arabic contact email
  remained readable with a direct mailto target. Neither inspected page had
  horizontal overflow at the browser's current viewport.
- New read-only `scripts/verify-indexing-live.mjs` detects edge-generated email
  links, missing mailto links, stale dates/schema, status/noindex failures,
  metadata differences, stale asset references and sitemap mismatches. Default
  checks 91 pages; `--all` checks 1,393; `--bypass-cache` distinguishes deployment
  from old Cloudflare HTML. Four regression tests cover the live checker itself.

| Language | Uncached public pages checked | Passed |
| --- | ---: | ---: |
| English | 199 | 199 |
| Persian | 199 | 199 |
| Arabic | 199 | 199 |
| French | 199 | 199 |
| Turkish | 199 | 199 |
| Spanish | 199 | 199 |
| Portuguese | 199 | 199 |

### Cache history and completed purge

The normal canonical-URL scan completed at 22:42:54 UTC: 67 pages matched and
1,326 returned older Cloudflare HIT responses. Of these, 1,288 differed in date
markup/schema and 38 still contained old email rewrites; 13 also had an old
timestamp asset key. These counts describe a deployment-cache mismatch, not
1,326 HTTP errors. No sitemap mismatch was found.

A new deployment changes more HTML than the earlier 29-page cache finding:
all article/tool date markup and the 38 policy pages are affected. The query-
bypassed full scan then passed every page, demonstrating that the new release
is present and that the email exclusion works at Cloudflare's edge.

Initially requested permission for exact public-page URL purges. A fresh
pre-purge scan found 1,313 stale cached pages. The user then explicitly expanded
authorization with "You can purge all". Submitted Purge Everything for the
bemamas.com Cloudflare zone through the signed-in Chrome dashboard; Cloudflare
confirmed the request was successfully received. This broader purge invalidates
cached files across the zone, not just the previously proposed HTML targets.

Post-purge verification at 23:00:17 UTC checked all 1,393 normal public URLs:
199/199 passed in each of en, fa, ar, fr, tr, es and pt. No date, email-link,
metadata, asset-reference, HTTP or noindex mismatches remained, and all eight
sitemap files matched. Homepage and five sampled assets returned HTTP 200;
app.bemamas.com also returned HTTP 200 with Cloudflare status DYNAMIC. No content,
application code, WAF or other security settings were changed. Cached copies
repopulate normally; this does not delete the underlying files.

The machine-readable result is in cache-purge-verification-2026-09-06.json.
This verifies delivery from this connection, not every global edge location
and not Google's future indexing decisions. No further deployment is needed
for these documentation-only verification updates.

## Historical crawl errors investigated

Used the signed-in Chrome Cloudflare dashboard, then the existing deployment
SSH configuration for a read-only inspection of the public server's retained
Nginx access logs. No server settings, services, files or releases were changed.

- Both Cloudflare Traffic and Security Events exposed only the last 24 hours,
  not the older Google error timestamps. No paid logging was enabled.
- Retained Nginx logs covered August 30 through September 6; August 12 was not
  available. The seven affected exact paths had zero 4xx/5xx origin responses
  in that retained interval across all user agents.
- Six successful Googlebot requests were found on four affected paths. Their
  four source IPs passed reverse lookup to googlebot.com hostnames and forward
  lookup back to the same IPs.

| UTC time | Public path | Status |
| --- | --- | ---: |
| August 30, 20:24:23 | /about-bemama/privacy-and-safety/ | 200 |
| August 31, 05:20:55 | /about-bemama/privacy-and-safety/ | 200 |
| September 1, 06:58:34 | /pregnancy/foods-to-avoid/ | 200 |
| September 3, 07:38:42 | /about-bemama/getting-started/ | 200 |
| September 3, 16:32:13 | /contact/ | 200 |
| September 6, 00:14:58 | /about-bemama/privacy-and-safety/ | 200 |

Origin logs cannot show requests blocked before reaching the server. The current
shared access format also omits hostname, so path matches alone are not complete
edge-to-origin correlation. These checks do not establish the exact cause of
Google's historical other-4XX examples; they establish that it did not reproduce
in the retained matching origin requests. No broad bot/WAF exception was added.

Google's daily indexing-request quota was previously exhausted. No retry,
sitemap resubmission, validation restart, IndexNow batch or Ahrefs recrawl was
performed. Google's eventual crawl/index updates remain external follow-up,
not a result that this code deployment can guarantee.
