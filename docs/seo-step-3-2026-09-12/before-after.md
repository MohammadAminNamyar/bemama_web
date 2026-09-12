# English before/after review

Source copy before the change is retained in [content-before.json](content-before.json). The revised source is in `src/pages.mjs` and `src/articles/about-bemama.mjs`. This comparison covers reader-facing changes, not keyword-density targets.

| Page | Before | Revised result |
| --- | --- | --- |
| Homepage | Care for every stage; generic stage support | Pregnancy to baby care; names pregnancy guidance and baby records, with a public-tool CTA that does not require app sign-in |
| [BeMama: Pregnancy Guidance and Baby Tracking](https://bemamas.com/about-bemama/why-bemama/) | Why BeMama: Support for Every Stage of Motherhood | Explains pregnancy guidance, baby records and public tools; removes the unsupported promise that nothing gets lost between stages. |
| [Pregnancy Tracker App: BeMama Daily Journey](https://bemamas.com/about-bemama/daily-journey/) | The Daily Journey: Guidance Tailored to Your Stage | Numbered setup steps, week/date estimates, stage changes, public calculator/calendar links and qualified free access. |
| [Baby Tracker: Feeding, Sleep and Diaper Logs](https://bemamas.com/about-bemama/tools/) | BeMama Tools: Calculators and Trackers | Concrete nursing, bottle, sleep and diaper workflows; report views, CSV, missing-data limits, and public-tool storage/backup differences. |
| [BeMama Free and Premium: Feature Access](https://bemamas.com/about-bemama/premium/) | BeMama Premium: What’s Included | Replaces vague deeper guidance and priority promises with current Daily Journey access and separately gated advanced features. |
| [Get Started with BeMama: Pregnancy and Baby Care](https://bemamas.com/about-bemama/getting-started/) | Getting Started with BeMama | App/account versus public tools, stage/profile selection, first entry and report checks, corrections and backups. |

Links above name the eventual production destinations; this branch has not been deployed. Review the local preview for the revised text.

## Keyword decisions

| Candidate group | Implementation |
| --- | --- |
| Pregnancy tracker/app, week-by-week, download, track my pregnancy | One existing Daily Journey page answers setup and use; existing store destinations retained. |
| Free pregnancy tracker app | Qualified FAQ describes Daily Journey and public calculator access, not universal free features. |
| Pregnancy calendar app | Partial intent: estimated pregnancy dates plus separate public appointment calendar. |
| Baby/infant/newborn tracker and log variants | One baby-tracking explanation with profile, event and report steps. Synonyms are not repeated mechanically. |
| Nursing, breastfeeding, feeding, bottle tracking | Separate nursing and bottle workflows with time/side versus amount/unit distinctions. |
| Sleep and feeding/diaper tracking | Separate care actions, followed by a shared reporting workflow and missing-record explanation. |

The [implementation register](keyword-implementation.json) maps all 25 candidates to claims and retained demand evidence. It contains 23 source-backed workflow mappings, one qualified free-access mapping and one partial calendar-intent mapping. This is not a claim of 25 proven ranking gains, 25 new features, or 25 exact phrases inserted. K101/K102 have separate unpublished briefs. Other Step 1 classifications remain pending in their approved workstreams.

## Source and translation scope

The six non-English source objects, including article images and localized dates, have matching before/after hashes. Their article prose and metadata were not translated this step. A few generated related-article cards reorder because the existing shared ranking uses English titles; this is not new translation research. All five revised English product pages have a September 12 editorial date; their existing translation dates remain unchanged.
