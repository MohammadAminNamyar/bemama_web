# Product claim evidence — September 12, 2026

Scope: the English homepage and five existing About BeMama pages. Website base commit: `99b671f5a`. App implementation inspected read-only at `C:/WorkSpace/Practice/bemama_client`, commit `e6bece9`.

**Evidence levels matter.** App source confirms implemented controls and access logic, not deployment of that commit or successful account/server behavior. Chrome reached the live app’s language, tour and sign-in screens. No account was created, no personal care data was entered, and authenticated tracking/save/export flows were not tested. The new text describes those source-backed workflows; an authenticated release check remains necessary before treating every workflow as production-verified.

## Claims used in the English copy

Paths below are relative to the app repository unless explicitly marked “website.” They link to local evidence for review; that source is not published as website copy.

| ID | Claim and scope | Evidence |
| --- | --- | --- |
| C01 | Set a planning, pregnancy, baby or child journey; pregnancy setup uses a last-period date, baby setup uses birth date | [daily_journey_page.dart](C:/WorkSpace/Practice/bemama_client/lib/src/features/daily/daily_journey_page.dart:237), stage registration and validation; [tools_calculations.dart](C:/WorkSpace/Practice/bemama_client/lib/src/features/tools/tools_calculations.dart:187). |
| C02 | Pregnancy tools show estimated week/day, trimester, due date and days remaining | [bemama_tools_journey_snapshot.dart](C:/WorkSpace/Practice/bemama_client/lib/src/features/tools/widgets/bemama_tools_journey_snapshot.dart:172). Estimates, not confirmation of development or clinician dating. |
| C03 | Baby profile offers Nursing with starting side and timer/manual entry | [tracking_quick_log_sheet.dart](C:/WorkSpace/Practice/bemama_client/lib/src/features/tracking/tracking_quick_log_sheet.dart:520); profile/action selection in [bemama_child_screen.dart](C:/WorkSpace/Practice/bemama_client/lib/src/features/tracking/bemama_child_screen.dart:2990). No claim that duration measures milk transfer. |
| C04 | Bottle record includes time, milk type, amount and mL/oz unit | [tracking_quick_log_sheet.dart](C:/WorkSpace/Practice/bemama_client/lib/src/features/tracking/tracking_quick_log_sheet.dart:1600) and [English UI labels](C:/WorkSpace/Practice/bemama_client/lib/l10n/bemama_localized_copy.dart:2171). No target intake, formula preparation or nutrition recommendation claimed. |
| C05 | Baby actions include sleep and diaper entries | [tracking_models.dart](C:/WorkSpace/Practice/bemama_client/lib/src/features/tracking/tracking_models.dart:3), [diaper fields](C:/WorkSpace/Practice/bemama_client/lib/src/features/tracking/tracking_quick_log_sheet.dart:800), [sleep flow](C:/WorkSpace/Practice/bemama_client/lib/src/features/sleep/sleep_flow.dart:1). No automatic sleep detection or next-nap prediction claimed. |
| C06 | Reports contain Day, Week, List and Summary views; selected-baby CSV export control | [bemama_reports_screen.dart](C:/WorkSpace/Practice/bemama_client/lib/src/features/tracking/bemama_reports_screen.dart:169), [CSV control](C:/WorkSpace/Practice/bemama_client/lib/src/features/tracking/bemama_reports_screen.dart:220), [repository export](C:/WorkSpace/Practice/bemama_client/lib/src/features/tracking/tracking_repository.dart:225). Server execution not tested here. Missing entries must not be described as zero care. |
| C07 | Entries can be corrected; running timers have explicit stop handling | [tracking_repository.dart](C:/WorkSpace/Practice/bemama_client/lib/src/features/tracking/tracking_repository.dart:430), updateEvent at line 461, and quick-log sheet edit initialization. No reliable-sync or unlimited-history promise. |
| C08 | Daily Journey remains available without an active Premium subscription | [entitlements.dart](C:/WorkSpace/Practice/bemama_client/lib/src/app/entitlements.dart:272): `canUseDaily => true`, including after trial/subscription expiry. This does not establish that every tracker/tool is free. |
| C09 | Advanced tools and AI/community capabilities have separate access gates | [entitlements.dart](C:/WorkSpace/Practice/bemama_client/lib/src/app/entitlements.dart:278), [premium_feature_gate.dart](C:/WorkSpace/Practice/bemama_client/lib/src/features/subscriptions/premium_feature_gate.dart), [tools_screen.dart](C:/WorkSpace/Practice/bemama_client/lib/src/features/tools/tools_screen.dart:312), report analysis controls. No exact price, universal entitlement or priority-care claim. |
| C10 | Public website tools need no app account; checklists have custom tasks, notes, filters, progress and backups | Website [completion report](../tools-completion-2026-09-12/README.md) and tool completion tests. This feature set was completed in Step 2; Step 3 describes it. |
| C11 | Website growth log offers WHO weight-for-age references for supported ages, not individual percentiles | Website [quality revision](../tool-quality-revision-2026-09-12/README.md), retained WHO reference data and tool quality tests. No app/website record sync claimed. |
| C12 | Website appointment calendar can download a calendar file; due date calculator accepts last-period or known-due-date inputs | Website calculator and calendar implementation and care-tool tests. Routes retained: `/tools/due-date-calculator/`, `/tools/appointment-symptom-calendar/`. |
| C13 | App and website records are different storage workflows | App tracking repository/backend path versus website device-local storage and backup implementation. No automatic migration or cross-device synchronization of public tool data is promised. |
| C14 | Web/Android/iOS entry links | Existing configured destinations in website `src/pages.mjs`; Chrome observed live app entry. Store availability per country/device was not newly audited. |

## Live entry discrepancy

The English homepage previously promised a free, no-account activity via `https://app.bemamas.com/?tool=help&lang=en&utm_source=bemamas&utm_medium=website&utm_campaign=quick_help`. In this Chrome session, both the base app URL and that exact entry reached sign-in after language/tour screens. This observation does not prove the guest route fails for every installation; cached app versions or session state may matter.

The revised English primary button links to the working public `/tools/` catalog, with a matching no-account description. Its analytics event is `public_tools_clicked`; it does not carry the guest-app campaign rewriting hook. Other language entry copy is unchanged pending its own checkpoint. Investigate the app’s guest entry separately before continuing to promise it across languages.

## Limits deliberately retained

- “Free pregnancy tracker app” is addressed in a qualified FAQ about Daily Journey and the public calculator. It is not a promise that all app tracking is free.
- “Pregnancy calendar app” is only partly served: pregnancy dates and the public appointment calendar are explained. The copy does not imply that the app books appointments or synchronizes that website calendar.
- No next-nap AI, clinical accuracy guarantee, invented percentile, feeding sufficiency score, uninterrupted syncing, unlimited record retention or medically reviewed product page is claimed.
- Keyword Planner ideas generated from a competitor seed are evidence of a relevant query, not proof the competitor’s page literally contains that phrase. Direct competitor-page observations and Planner evidence remain separately labeled in the Step 1 register.
