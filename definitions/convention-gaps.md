# Convention gaps — cross-product representation clashes (to resolve post-offsite)

A register, **not** a rulebook. We are deliberately not defining shared conventions yet — we don't have
the full picture. This collects, with evidence, the places where Aurora apps represent the *same concept*
differently, so they can be resolved across product areas after the offsite.

Why it matters: Aurora's vision is to be integrated, and small representation inconsistencies break the
"one product" feel as surely as a broken journey (see `../context/business/business-context.md`).
Prototypes are where these surface — when a prototype reveals a clash, add a row here.

## Seeded from the current Solaris / Chronos / Lumus flows

| Concept | How it differs across the apps | Resolve |
|---|---|---|
| **Dates & periods** | month-year (`MM/YYYY`) vs full date (`YYYY-MM-DD`) vs quarter-year; and a horizon shown as start+end in one app, start-year+tenor in another | TBD · owner TBD |
| **Region / market id** | the same market appears as an ISO country code, a country name, and a market-region name | TBD · owner TBD |
| **Scenario & currency basis** | market scenarios named on different patterns; currency + real/nominal basis explicit in one app, implicit in others | TBD · owner TBD |
| **Capacity units** | qualified AC vs DC (`MWdc`/`MWac`) in one app; plain `MW` elsewhere | TBD · owner TBD |
| **Empty / not-set** | shown as a dash, a blank, or placeholder text; **null vs zero** not handled the same way | TBD · owner TBD |
| **Forward action** | the same "go to next step" labelled "Next" vs "Continue" | TBD · owner TBD |
| **Config paradigm** | multi-step wizard vs single-form template | TBD · owner TBD |

## How to use

- During prototyping, when an integration prototype surfaces a representation clash, **add a row** (concept · how it differs · who might own it).
- **Do not resolve it on the day.** Collect it; resolution is a cross-product-area conversation post-offsite.
- These are observations from the mockups, not verdicts — correct any I've misread.
