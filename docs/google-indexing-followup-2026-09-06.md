# Google indexing follow-up, September 6, 2026

## What Google's report actually says

The Page indexing summary was last updated September 3: 249 indexed, 1,147 not
indexed. The latter comprised one redirect error, one 404, one canonical
alternate, 1,133 discovered but not indexed and 11 crawled but not indexed.
Ahrefs' zero-error score is not evidence that Google indexed these pages.

Individual URL Inspection is already newer than the summary: the English
`/baby-and-child/potty-readiness/` is indexed, although still listed in the
crawled-not-indexed examples. The Spanish
`/es/trying-to-conceive/basal-body-temperature/` remains unindexed.

All seven language sitemaps show Success and 199 discovered pages each. The
main sitemap index shows Success and 1,393 discovered pages, last read September
6. There is no missing-language sitemap to create. Individual inspection's
"No referring sitemaps detected" does not negate these successful sitemap reports.

## Google live test and submission outcome

Google's live test of the Spanish basal-temperature guide at 15:10 Vancouver
returned "URL is available to Google" and "Page can be indexed", with one valid
breadcrumb item. This demonstrates that Google could fetch that page at the time
of the test; it does not establish the indexing status of every locale or rule
out intermittent regional access problems.

A manual Request indexing attempt returned **Quota Exceeded**: Google said the
daily quota was exceeded and to submit again tomorrow. No successful indexing
submission was confirmed. Further attempts stopped; no alternate accounts,
IndexNow workaround, quota bypass or paid service was used.

## Implemented locally, not deployed by this task

- Removed build-time `lastmod` dates from all seven sitemaps and the sitemap
  index. A rebuild was incorrectly marking every page as changed. Dates are
  optional; until trustworthy locale-specific revision tracking exists, omission
  is more accurate than a fabricated freshness signal. No article publication or
  review date was changed.
- Replaced time-based asset versions with per-file content hashes. Unchanged
  images, video, CSS and JavaScript retain the same URL when rebuilt. Hashes use
  emitted/minified bytes, so a real asset change still invalidates its cache key.
- Added relevant recommendations in the existing three-card related-guide
  component: newborn care to the first appointment and safe sleep; milestones
  and first appointments to vaccinations; formula feeding to preparation safety;
  third trimester to movement patterns; preconception to cycle basics; and app
  onboarding/privacy to tools, community and AI-support explanations. Every link
  stays in the reader's chosen language. No wall of links or new layout was added.
- Added integration tests covering all 1,393 routes: matching self-canonicals and
  sitemap membership, no accidental noindex, no Cloudflare utility links, valid
  content-hash asset keys, and reachability within three HTML-link clicks from
  each language's homepage. Head hreflangs and XML entries do not count as links.

No article bodies or medical recommendations were rewritten. The absence of a
technical blocker is not evidence of a complete editorial or clinical review.
Search Console does not provide a confirmed content-quality diagnosis for the
remaining non-indexed URLs, so these improvements are not claimed as their sole
cause or a guaranteed indexing fix.

## Validation

Commands completed successfully using Node (npm was not on this shell's PATH):

```text
node scripts/build.mjs
node --test scripts/seo-metadata.test.mjs scripts/indexnow.test.mjs scripts/indexing.test.mjs
node scripts/validate.mjs
node scripts/audit-seo.mjs
```

Result: 24 tests passed, 1,400 HTML files validated, 1,393 localized public routes
passed. Each language has 199 routes. No metadata-length, duplicate-title,
duplicate-description, oversized-image or localization failures were reported.
These results are local; the new code and generated output still need deployment.

## Expected exclusions left intact

- `/about-bemama` correctly returns one 301 to `/about-bemama/`, followed by 200.
  Do not remove canonical redirects to empty Google's report.
- `/cdn-cgi/l/email-protection` is an old Cloudflare utility URL returning 404,
  not an article. The generated site does not link to it. Do not redirect it to
  the homepage or create an indexable dummy page.
- `/explore/?area=daily&step=1` has the intended canonical `/explore/`. The
  duplicate query-string version should not compete for indexing.
- Existing validation requests were not restarted while marked Started.

## Remaining rollout

1. Deploy this public-site build. No separate app build is needed for this change.
2. Let the existing 30-minute HTML edge TTL expire, or use the established
   approved targeted-purge workflow. No cache purge was performed in this turn.
3. Verify the live sitemap no longer stamps every URL with today's date and that
   the HTML references content-hashed assets. The sitemap URLs did not change;
   there is no need to delete/recreate all accepted Google submissions.
4. Once Google's daily quota resets, retry a small set of still-unindexed,
   important canonical pages after checking their current URL Inspection status.
   Do not request URLs already indexed or use another service to bypass quota.
5. Recheck the report after Google recrawls. If important pages remain unindexed,
   review page-specific usefulness, overlapping search intent, translation quality
   and health-source accuracy. Do not indiscriminately noindex translations or
   claim indexing is complete simply because technical tests pass.

References: [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap),
[accurate lastmod dates](https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping),
[indexing FAQ](https://developers.google.com/search/help/crawling-index-faq).
