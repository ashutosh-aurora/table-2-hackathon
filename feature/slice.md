# Slice — Flexplainer chat with visual evidence

## The slice

A chat interface backed by sample Chronos simulation data. The user asks a natural-language question about a battery decision (e.g. "why did the battery export at 11am?"). The response returns a plain-language explanation and a chart showing the price curve, price thresholds, and bids for the relevant time window — the chart is the evidence for the explanation.

## Why this slice

It combines the two candidate problems the table started with: conversational methodology Q&A (problem 1) and decision visualisation (problem 2). The chat interface abstracts away scary model internals (fakeVOM, IOC) into plain language, while the chart provides the visual evidence to back it up. This directly attacks the scariest risk: will showing decision reasoning build or erode client trust?

## What it proves

- **Risk:** Usability
- **Question:** Can an internal analyst interrogate Chronos decision-making through a chat interface fast enough to be useful in their actual workflow?

## Acceptance check

An internal analyst asks a question about a specific decision, receives a technically accurate explanation paired with a chart, and says it would save them time compared to digging through raw simulation output.

## Out of scope

- Re-running or modifying the simulation
- Covering all decision types in one prototype — focus on scheduling phase day-ahead bids first
- Live simulation data — sample data only
- Co-location (RES) decisions
- Multi-simulation comparison
