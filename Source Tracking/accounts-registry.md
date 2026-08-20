# KnowThisWell Accounts Registry

Tracks which real-world account/channel each platform action targets. Exists because this project has multiple accounts per provider (e.g. two Namecheap accounts, two Vercel-adjacent emails surfaced during domain setup) and mixing them up already caused one wasted purchase attempt. **Check this file before posting/publishing anywhere — never assume, always confirm the logged-in session matches the row below.**

| Platform | Handle / ID | Notes | Confirmed |
|----------|-------------|-------|-----------|
| X / Twitter | `@HariKishore39` | Personal account. Posting authorized directly (see memory `social_accounts_personal`). | 2026-08-20 |
| Reddit | `u/New_Curve8491` | Personal account, existing history (r/explainlikeimfive etc. already in Recent). Draft-then-post per subreddit rules; genuine live questions only, no forced posting. | 2026-08-20 |
| Quora | Hari Kishore — `quora.com/profile/Hari-Kishore-150` | Personal account, joined July 2017, real history. Same posting rules as Reddit. | 2026-08-20 |
| YouTube | *(not yet created — pending)* | For NotebookLM-generated video pipeline. Fill in channel name/URL once created. | — |
| NotebookLM / Google account | *(same Google login as YouTube channel, TBD)* | Used to generate video overviews from post content. | — |
| Vercel | Team `sirisha2709`, user `sirihariphotos-2893` | Hosts the `knowthiswell` project. Separate from the domain-registrar account below. | 2026-08-19 |
| Namecheap | Username `harikishore09`, email `harikishore.ada@gmail.com` | **This is the account that owns `knowthiswell.com`.** A different Namecheap account (`harikishore01`, email `sirihariphotos@gmail.com`) exists on the same browser profile — do not confuse them; the first purchase attempt failed partly because of this mixup. | 2026-08-19 |
| GitHub | `GReddy17/knowthiswell` | Repo owner. | — |
| Domain | `knowthiswell.com` | Registered under the Namecheap `harikishore09` account above, DNS on Vercel nameservers. | 2026-08-19 |

## Skip-if-not-logged-in rule

Before posting to any platform above, check the actual logged-in session (visit the platform, confirm the account shown matches this table). If the session is logged out, on the wrong account, or the row is still blank/unconfirmed:
- **Skip that platform for the day** — do not attempt to log in, switch accounts, or guess.
- Log the skip in `Source Tracking/marketing-log.md` as `skipped - not logged in`.
- Do not let one platform being unavailable block the others.
- Next time the user confirms they've logged in, resume posting for that platform normally — no need to "catch up" on skipped days, just proceed with that day's fresh content.

## Updating this file

Add a row (or fill in a pending one) whenever a new platform/account gets used for the first time, and note the date confirmed. If an account ever looks wrong when checked (different name/email than expected), stop and flag it to the user rather than proceeding — this is exactly the failure mode this file exists to prevent.
