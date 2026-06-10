# Facilitator run-guide

Your job at the table is to keep two things moving: the conversation between the people, and the
work between the people and Claude. You do not need to be the domain expert. You are the person who
makes sure the table sets up, points Claude at this folder, and moves cleanly from one stage to the
next.

You are the guaranteed floor. If a table's own setup fails, you can run the kit from your machine
and the table still gets the full experience.

## Before the table starts

1. Confirm each person (or at least your machine) has Claude Code working. See `SETUP.md`.
2. Open this folder in Claude Code so `CLAUDE.md` is loaded.
3. Read the worked example in `worked-example/` once. It is the same arc the table will walk, on a
   different problem, so you know what each stage produces.

## The arc, stage by stage

For each stage: what the table is doing, what you do, and what they produce.

**Stage 1 — Align on the ambition.** The table agrees one large problem in their theme. Do not let
them pre-shrink it; the skill being taught is shaping ambition down, not starting small. Use the
problem-ideation one-pager (circulated separately) to run this conversation. *Produces:* one
sentence naming the ambition.

**Stage 2 — Build the team context.** The table copies `templates/team-context.md` into
`context/team/` and fills it in: who the users are, what success looks like, how they want to work.
This is context they author, not context they read. *Produces:* a filled `context/team/...md`.

**Stage 3 — Frame.** Run the `feature-spec` skill (Stuart's, see `skills/feature-spec/`). With the
business, product-area, team context and glossary now available, it turns the ambition into a clear
problem with outcome, boundaries and success criteria. *Produces:* a filled `frame.md`.

**Stage 4 — Shape to one slice.** Run the `shape-to-slice` skill. It helps the table carve one
small, prototypable slice off the ambition and sanity-check it is small enough for the time left.
*Produces:* a filled `slice.md` naming the slice and which product risk it attacks.

**Stage 5 — Prototype.** Run the `prototype-kickoff` skill. It picks the cheapest medium that would
move the chosen risk and starts building. Keep it throwaway. *Produces:* any artefact that helped the
table learn or explain.

## What a win is

A win is reducing one of the four product risks: value, usability, feasibility, business viability.
Hold the table to "what did this teach us, or how does it help us explain the idea?", not to polish.

## Timeboxes

*To be set by the facilitator dry-run.* Placeholder split for a single-day session:

| Stage | Placeholder |
|---|---|
| 1 Align | `[TBD]` |
| 2 Team context | `[TBD]` |
| 3 Frame | `[TBD]` |
| 4 Shape to slice | `[TBD]` |
| 5 Prototype | `[TBD]` |

## Troubleshooting

- **Setup failing for an individual:** move them to your machine or a working teammate's; you are the floor.
- **Table stuck on ambition:** ask "if this were solved, what changes for whom?" then name that as the ambition.
- **Slice still too big:** ask "what is the smallest version that would still teach us one real thing?"
- **Prototype drifting to polish:** remind them the artefact is throwaway; the output is the learning.
