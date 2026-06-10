# Offsite prototyping kit

The shared repository every facilitator (and through them, every table) uses at the AI prototyping
offsite (~150 people, 21 tables). A table points Claude Code at this folder and is carried through
five stages in a day, from a large problem to a throwaway prototype.

This kit packages the front of Stuart's AI-powered software development lifecycle (framing, shaping,
experimenting fast). It does not reach the implement, verify or ship stages, which need a real
codebase and an engineer driving. Where the kit needed something Stuart's skill set does not yet
cover, it adds a lighter skill and presents it as a simplified front-end to his workflow, not a fork.

**Author:** Donna Peng. **For review by:** Stuart. **Builds on:** *AI-Powered SDLC and Documentation
Strategy* (Stuart).

## What I'm asking you to do, Stuart

1. **Agree the shape** — the folder structure below and the five stages in `CLAUDE.md`.
2. **Share two skills** — I don't have `feature-spec` or `grill-me-with-docs`. They are in
   `skills/` as placeholders with the interface each needs; please share the canonical versions so we
   swap them in before the dry-run.
3. **Confirm the two new skills** — `shape-to-slice` and `prototype-kickoff` are authored here as
   lightweight front-ends to your loop. Do they read as consistent with it?
4. **Commit the strategy session** — drop your and Mateusz's opening talk into
   `context/business/strategy-deck.md` in Claude-readable form, so the morning's strategy becomes the
   afternoon's shared context.

## How the repository is organised

By the kind of context and who owns it. A table **consumes** some kinds and **authors** others.

| Layer | Owner | Consume or author | Folder |
|---|---|---|---|
| Business context | Senior leadership | Consume | `context/business/` |
| Product-area context (objectives for the area) | Area / functional leadership | Consume | `context/product-area/` |
| Team topology / team APIs | Each team (assembled into a map) | Consume | `context/team-topology/` |
| Ubiquitous language (glossary) | Shared | Reference | `definitions/` |
| Skills and templates | Across areas | Use to build | `skills/`, `templates/` |
| Team-level context | The team | **Author** | `context/team/` |
| Team-level deliverables | The team | **Produce** | the frame, slice, prototype |

We use the ecosystem's and the org's own words: reusable build know-how is **skills** (no new "craft"
term); shared vocabulary is the **ubiquitous language**, realised as a glossary; and the map of what
teams exist and how to engage them is the **team topology**, with each team's progressively-disclosed
entry a **team API**.

## What's where

- `CLAUDE.md` — entry context Claude reads: the arc, the context layers, where to start.
- `RUN-GUIDE.md` — the facilitator playbook.
- `SETUP.md` — getting Claude Code running and pointed here.
- `skills/` — `feature-spec` and `grill-me-with-docs` (placeholders, yours); `shape-to-slice` and
  `prototype-kickoff` (new, authored here).
- `templates/` — `team-context`, `frame`, `slice`.
- `context/` — business, product-area, team-topology (all consumed), team (authored on the day).
- `definitions/glossary.md` — the ubiquitous language.
- `worked-example/` — a complete pass on an internal request-triage agent, off the 21 themes. Trains
  facilitators and shows tables the shape.

## Ownership

| Workstream | Owner |
|---|---|
| Share / adapt `feature-spec`, `grill-me-with-docs` | Stuart |
| Strategy session as business context | Stuart + Mateusz |
| `shape-to-slice`, `prototype-kickoff` | Donna drafts, Stuart reviews |
| Worked example | Donna (Stuart reviews) |
| Run-guide, setup, templates | Donna |
| Problem-ideation one-pager (separate track) | Donna + Johannes |
| Facilitator dry-run | Donna + Stuart |

## Still to fill

The strategy deck, the 21 themes (separate track), the real team topology (from Confluence and team-API
repos, if a table needs to route to real teams), per-stage timeboxes (set by the dry-run), and the
Claude Code access route in `SETUP.md`.
