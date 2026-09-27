# Homepage app previews

Unedited screenshots of the BeMama Flutter application in its Navy & Gold (`family`) theme, captured with fictional test fixtures. No live account records are shown.

- All captures were refreshed on 2026-09-26 from current Flutter widgets at 1290 × 2796 (430 × 932 logical pixels). The temporary harness `bemama_client/build/website_capture_test.dart` derives from `test/store_screenshots/store_screenshots_test.dart`; no production app files were edited.
- `daily-care.png`: `01-home`, with fictional Lina and Pregnancy Week 24. Also used as the tour's `daily-home.png`.
- `weekly-report.png`: `04-reports`, with the Week tab and a full week of fictional Aria care records.
- `pregnancy-daily.png` and `questions.png`: `03-daily` and `06-qa`, also used in the tour.

All twelve tour screens were refreshed: Home, Daily, Daily setup, Planning, cycle calendar, symptom logging, care tracking, solid foods, growth logging, Community, Q&A and AI Consultation. The care dashboard is scrolled to its tracker grid. AI Consultation shows its real empty state and safety notice. Hotspots and translated prompts match the current screen positions. The harness loads real Roboto fonts and mocks native media channels for offline rendering. The final capture run passed 14 cases, with the original redundant community case skipped; a final calendar-only recapture also passed.

PNG sources and all AVIF/WebP variants were regenerated from the same captures, including all previously existing widths, so a cached responsive candidate cannot show the old name or theme. Resizing and compression do not change screenshot contents.

Captions and image alternatives are localized in `src/website-ux-copy.mjs`. A visible caption identifies the English preview and sample data. Images are static, with no carousel. The homepage hero uses the optimized copy of `daily-care.png` at `/assets/tour/daily-home.png`, preloaded with matching responsive candidates. The Daily, reports and Q&A captures appear in the product section below. Original `hero_pregnancy.png` brand characters accompany the Home preview; all four original stage character illustrations appear in the stage cards.
