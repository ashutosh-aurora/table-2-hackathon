# Worked example — internal request triage agent

A complete pass through all five stages on one realistic problem. It does two jobs: it trains
facilitators in the dry-run, and it shows tables the shape of good work. Copy the *shape*, not the
content; your problem is your own.

**The problem is deliberately off the 21 themes** (an internal-operations pain everyone recognises),
so it transfers to any table without anchoring anyone onto a pre-baked answer in their space.

## Read in order

1. `01-team-context.md` — context the example team authored (stage 2)
2. `02-frame.md` — the framed problem (stage 3)
3. `03-slice.md` — the one slice they chose (stage 4)
4. `04-prototype/triage-agent.md` — the throwaway prototype (stage 5)

## One thing to watch: the two layers

This example builds an agent that asks people follow-up questions. The team builds it *using* an AI
assistant that asks *them* follow-up questions. Those are two different things and it is easy to
blur them:

- **The helper** — Claude, helping the table frame, shape and build.
- **The thing being built** — the triage agent the table is prototyping.

When you facilitate this, keep naming which layer the table is in. "Right now Claude is helping *you*;
in a moment we will design what *your agent* says to a requester."
