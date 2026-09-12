# Step 3 validation

Final local build checked September 12, 2026.

| Check | Result |
| --- | --- |
| `node scripts/build.mjs` | Passed; regenerated deployment output. |
| Test files in `package.json` validation command | **113 passed, 0 failed.** Includes calculator/storage/reference-data regressions, localized metadata/dates, sitemap comparison, homepage entry navigation and product-page link/byline rendering. Full output: [test-results.txt](test-results.txt). |
| `node scripts/validate.mjs` | **1,400 HTML files and 1,393 localized routes validated.** [Output](route-validation.txt). |
| `node scripts/audit-seo.mjs` | **1,393 pages**, no title/description length errors, duplicate titles/descriptions, localization issues or oversized images. [Audit](seo-audit.json). |
| Six non-English source hashes | Identical to baseline, including localized article objects. [Scope record](scope-verification.json). |
| Article dates | Five revised English pages dated September 12, 2026; existing translation revisions remain July 1, 2026. General date tests also pass across the site. |
| Source/document checks | No whitespace errors in changed source; all local links in the Step 3 review documents resolve. |

## Chrome checks

- Desktop homepage at a 1280 × 1000 viewport: revised heading and text fit the existing hero; root client and scroll width both 1265 px (the remaining width is the scrollbar).
- Mobile homepage at a 390 × 844 viewport: root client and scroll width both 375 px; the primary button is one line and 50 px high. A decorative tour-device shadow had widened the page; scoped horizontal clipping fixes it without changing the theme.
- Activating **Try free tools** with Enter opens the public `/tools/` catalog, which shows the nine retained tools.
- Mobile baby-tracking article: root client and scroll width both 375 px, with no overflowing headings, paragraphs or links. The byline reads “Product guide by Mohammadamin Namyar, founder of BeMama.” It does not claim a medical review.
- Keyboard activation opens the first FAQ and reveals the answer about nursing, bottle and diaper records.
- Desktop and mobile screenshots were visually inspected. Temporary viewport overrides were reset; the homepage preview remains open in Chrome.

## Limits

The prior installed release was compared before these content changes: 91 representative live pages and all eight sitemap files passed. These new files remain local and have not been compared as a deployed release.

App feature claims were checked against the client source at `e6bece9`. Live sign-in screens were observed, but account creation, medical-data entry, backend saving, CSV export and subscription purchase were not exercised. Their availability on a particular deployed app/account is not proven by these website tests.

The existing shared related-article ranking uses English titles, so some non-English related-card order changes are generated even though translated source text is unchanged. The small English-homepage CSS correction also updates the shared stylesheet fingerprint on generated pages; it does not advance their editorial dates.

No search ranking, keyword-volume increase or AI-search visibility improvement has been measured. The two proposed health articles remain briefs for the later writing/review checkpoint.
