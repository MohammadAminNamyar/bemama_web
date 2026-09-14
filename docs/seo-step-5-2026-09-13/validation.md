# Validation — Step 5

## Automated

- `node scripts/build.mjs`: passed.
- All commands in `npm run validate` were run directly through Node: **115/115 tests passed**.
- `node scripts/validate.mjs`: **1,400 HTML files / 1,393 localized routes validated**.
- `node scripts/audit-seo.mjs`: zero title/description length issues, duplicate titles/descriptions, oversized images or localization issues.
- [Full final test and audit output](validation-output.txt).
- [Scope verification](scope-verification.json): the English product source, calculator core and theme are unchanged; all other product-article source content in the six translation files is unchanged after normalizing line endings.

The added localization checks cover same-language links, source section and image parity, generated calculator configuration, matching metadata, dating-method labels and custom-byline spacing.

## Chrome

Local server: `node scripts/serve.mjs --host 127.0.0.1 --port 4173`.

- French calculator at desktop width: date-entry form, result card and trimester timeline reviewed visually.
- Mobile viewport 390 × 844: no horizontal overflow detected in the main content of any of the seven calculator locales.
- Test input: last period **2026-07-01**, cycle **28**. Confirmed due date **2027-04-07** and **10 weeks, 4 days** on local date September 13, 2026, rendered in each language. French last-period calculation was confirmed on desktop; the known-date workflow was confirmed on mobile.
- Persian result: **۱۸ فروردین ۱۴۰۶**, corresponding to April 7, 2027. Gregorian input label and native result presentation checked visually.
- French known-date option: **2027-04-07** yields the same completed age. The visible selector/help explains the 40-SA basis and excludes a date defined at 41 SA from that option.
- Six translated guides checked at 390 × 844: no main-content horizontal overflow, correct document direction, localized headings and product bylines.
- Arabic guide, Persian calculator and Portuguese calculator inspected visually on mobile.
- Turkish byline initially joined the surname and following word; the renderer was fixed, rebuilt, retested and rechecked in Chrome.
- Temporary viewport override reset after checking.

These are local checks, not proof of production installation, search-engine indexing, ranking gains, medical review or independent native-speaker review.

