# Remaining SEO fixes, September 6, 2026

This is the implementation handoff. For the subsequent live deployment checks,
cache correction and new Ahrefs crawl, see
[deployment verification](seo-deployment-verification-2026-09-06.md).

## Baseline

The Ahrefs crawl completed at 13:15 Vancouver time showed Health Score 100, with
one error on `app.bemamas.com`, 34 short descriptions (33 main site + app), three
slow pages, and informational IndexNow/change/redirect notices. Oversized images,
broken-link flags, long titles and long descriptions had already cleared.

## Public site, ready to deploy

Rewrote all 33 main-site short descriptions: English 5, Persian 5, Arabic 10,
French 2, Turkish 3, Spanish 3 and Portuguese 5. These are page-specific rewrites,
not mechanically padded summaries. No article bodies or medical recommendations
were changed. Three Arabic tool summaries live in their locale file; the other
30 are home/category/policy overrides.

The prior local minimum of 70 was too lenient. The validator now requires 100
visible characters minimum and 160 serialized characters maximum, and checks
explicit non-article overrides too. Entity inflation is covered by regression
tests. All 1,393 routes pass the updated metadata audit, with no duplicates,
oversized image fallbacks or language mismatches.

## App, ready to deploy separately

`bemama_client/web/index.html` now contains a real heading, useful readable
content, links, title, description, canonical, language and social metadata.
The same introduction is visible to people and crawlers during loading. It is
removed only on Flutter's first-frame event and remains useful if startup fails
or JavaScript is unavailable. Flutter's browser title now matches the HTML title
after startup; native app titles and application flows are unchanged.

This fixes the initial HTML response, not Flutter's canvas rendering model. A
JavaScript-rendered audit may still flag limited text or headings after Flutter
takes over. Verify that separately after deployment rather than hiding content
for crawlers or claiming all app audit warnings are guaranteed to disappear.

Added app-only robots.txt and sitemap.xml; the latter lists only the public app
root. The OAuth callback is excluded from robots crawling. Exact Nginx locations
serve these files and return 404 if missing, instead of silently returning the
SPA shell. No private records or authenticated screens were added to a sitemap.

Source checks and a Flutter release build passed. Chrome checks confirmed that
the introduction gives way to the app's language-selection screen after the
first frame, without obstructing the application, and the final rebuilt app
preserves the descriptive browser title. The compiler reported existing
Wasm-compatibility warnings in Microsoft auth/WebRTC; the JavaScript web release
build completed successfully. These changes require rebuilding/deploying the
client container, including its Nginx configuration, not just the marketing site.

## Cloudflare cache, already live

Rule: `Cache anonymous public guide pages`

Rule ID: `37adff3b3f234c8dade8f28078a9b12a`

Only the bare main hostname and known public page sections are eligible. Requests
must be GET/HEAD, have no query string, cookies or Authorization header, and end
in a slash. App, APIs, analytics, assets and other hosts are outside this rule.
It respects origin TTLs and explicitly uses no-store for status >= 400.
The method condition was subsequently extended to include Cloudflare's `PURGE`
operation, with user approval, so single-URL invalidations also match the rule.

Verified saved rule and live behavior:

| Test | Result |
| --- | --- |
| `/fa/baby-and-child/` | MISS then HIT, warm request 45 ms |
| `/pregnancy/signs-of-labor/` | MISS then HIT, warm request 33 ms |
| `/tools/registry-checklist/` | MISS then HIT, warm request 42 ms |
| Cookie-bearing request | DYNAMIC, not cached |
| Authorization-bearing request | DYNAMIC, not cached |
| Query-string request | DYNAMIC, not cached |
| App homepage | DYNAMIC, existing no-store preserved |
| Unknown public path | 404, BYPASS on both requests |

These timings are single-location checks, not a guarantee about every crawler
or cold-cache request. Recheck the three slow-page flags after the next crawl.
Origin TTLs are currently 300 seconds browser / 1,800 seconds edge. Purge changed
HTML URLs after publishing, or wait for the edge TTL before validating deployment.

## IndexNow, configured but pending deployment

Generated a public verification key in Ahrefs and saved it without enabling paid
auto-submit or changing crawl speed, limits, schedule or exclusions. Its matching
root-level verification file is in the public-site build. No URLs have been
submitted yet: the key file must be live first.

Use Ahrefs' manual Submit to IndexNow action once the new build is live so the
project records the submissions. A free standalone alternative is also supplied:
`node scripts/indexnow.mjs --submit`. It verifies the key and all 1,393 live pages
before notifying IndexNow. Its default dry-run sends nothing. Use one submission
method per deployment. IndexNow notification does not guarantee indexing and does
not replace Google Search Console or sitemaps.

## Remaining rollout steps

1. Deploy the public website and client container.
2. Purge changed main-site HTML in Cloudflare, or wait for cache expiry.
3. Verify all descriptions, the live app shell, app robots/sitemap and IndexNow key.
4. Submit changed public URLs once through Ahrefs or the standalone script.
5. Run the next Ahrefs crawl after those checks, not against the old build.

Expected HTTP-to-HTTPS/www redirects and notices showing changed titles or
descriptions should not be disabled merely to make a report look empty.

References: [IndexNow protocol](https://www.indexnow.org/documentation),
[Flutter web initialization](https://docs.flutter.dev/platform-integration/web/initialization),
[Cloudflare default caching behavior](https://developers.cloudflare.com/cache/concepts/default-cache-behavior/).
