# Frame — Flexplainer

## Problem

Clients and internal users who run Chronos simulations receive results — gross margin, volumes, cashflows — but no account of the reasoning behind them. The hundreds of trading decisions the battery makes (scheduling phase bids, dispatch phase threshold trades, fakeVOM adjustments, IOC calculations) are invisible in the output. This makes it hard to trust the results, explain them to stakeholders, or identify where the model behaviour diverges from real-world expectations.

## Intended outcome

A Chronos simulation user — client or internal — can step through the decision-making at any timestamp and understand *why* the battery behaved as it did: which phase it was in, what prices it saw, what thresholds it was trading against, and what drove the outcome. The result is a simulation output that is explainable, not just numerical.

## Boundaries

- **In scope:** Visualising the decision trail for a single Chronos simulation run — scheduling phase decisions, dispatch phase threshold trades, state of charge progression, and the key parameters (fakeVOM, IOC, price thresholds) at each timestamp. Target user is internal Aurora analysts.
- **Out of scope:** Modifying simulation inputs or re-running the simulation from within the interface. Comparing multiple simulations side by side. Co-location (RES) decision visualisation. Explaining the broader AER-ES price inputs that feed into Chronos.

## Success criteria

- A user can select any timestamp in a simulation run and see the key decision the battery made at that point, with the reasoning visible (prices seen, threshold applied, phase, outcome).
- A user unfamiliar with Chronos internals can follow the decision trail without reading the methodology documentation first.
- An internal analyst can use it to identify and explain unexpected battery behaviour in a client conversation.

## Scariest risks

- **Value** (will anyone want it): Low risk — clients who run their own EOS simulations already want to understand their results; the demand is likely there.
- **Usability** (can people use it): Lower risk than expected — the table believes the interface is useful enough that users will engage, even with complex concepts.
- **Feasibility** (can we build it): Assumed manageable for now — the prototype will use sample data; whether Chronos emits sufficient decision-level data in production is an open question.
- **Business viability** (does it work for the business): Lower risk — target user is now internal analysts only, who are already familiar with model internals (fakeVOM, IOC, price thresholds). Technical terminology does not need to be hidden.

## Assumptions (inferred — please check)

- Chronos can (or will be able to) emit decision-making data at the timestamp level — **confirm / correct**
- The primary use case is a client or analyst reviewing a completed simulation run, not watching one live — **confirm / correct**
- The interface is read-only; users cannot modify inputs or re-run from within it — **confirmed**
- ~~Both external EOS clients and internal Aurora analysts are equally valid target users~~ — **corrected: internal Aurora analysts only**

## Context gaps

- Does Chronos currently log decision-making detail (price thresholds, IOC, fakeVOM per timestamp) in its output, or would this require model changes? — ask: Chronos engineering team
- What level of model internals is Aurora commercially comfortable exposing to external clients? — ask: product / commercial leadership
- Which regions currently have an external EOS release of Chronos? — ask: regional research teams
