# Frame — Seamless PPA journey for a hybrid solar asset (worked example)

## Problem

Modelling a PPA for a hybrid solar asset is split across three Aurora EOS products, and the client
re-enters the same asset in each while the connections between them are weak or broken:

- **Solaris → Chronos:** the client clicks to send the generation profile, then re-selects it by name
  in Chronos. Only the name survives; the profile's metadata and context are lost.
- **→ Lumus:** clients cannot bring their own solar profile into Lumus at all. CS does it manually
  behind the scenes, or the client prices a **generic** profile rather than their real asset.
- **Dates:** Chronos uses the project CoD; Lumus uses the contract's own dates, which may legitimately
  differ. But the two use different entry conventions and nothing cross-validates them (e.g. a contract
  starting before the CoD is not caught).

## Intended outcome

One coherent journey: the solar asset, its profile and context, the market scenario, and consistent
date conventions flow across the three steps, so the client experiences a single product and their real
asset reaches the contract valuation without CS intervention or a generic fallback.

## User

An external client modelling a PPA for a hybrid solar-plus-storage asset. Also affected: CS, who fill
the gap today.

## Boundaries

- **In scope:** the front-stage user journey and its coherence.
- **Out of scope (explicit):** backend data integration, and the correctness of the underlying models.

## Success criteria

The mock makes the coherent journey legible enough that teams agree the breaks (especially the Lumus/CS
gap) are worth closing, and a real conversation starts.

## Scariest risks

- **Usability** — is the unified journey actually coherent and clear? **Primary.**
- **Value** — is closing the breaks worth investing in? The mock exists to test this with the teams.
- Feasibility and business viability: out of scope for this mock.

## Context gaps

- The exact metadata lost in the Solaris→Chronos hand-off — confirmed lossy by Donna; precise fields
  not enumerated. Ask: Chronos / Solaris product owners if needed for a fuller version.
