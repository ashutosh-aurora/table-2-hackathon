# Offsite prototyping kit

The shared repository every facilitator (and through them, every table) uses at the AI prototyping
offsite (~150 people, 21 tables). A table points Claude Code at this folder and the agent shapes a day's
journey with them — from a large problem to a rough, useful prototype, with the artefacts kept.

This kit packages the front of Stuart's AI-powered software development lifecycle (framing, shaping,
experimenting fast). It does not reach the implement, verify or ship stages.

**Author:** Donna Peng. **Reviewer:** Stuart. **Builds on:** *AI-Powered SDLC and Documentation Strategy* (Stuart).

## The journey (in `CLAUDE.md`)

Adaptive, not a fixed script: **plan the session → problem loop (find the right problem) → build context
& frame → solution loop (find the right solution) → prototype & deepen → retro.** Teams run the two
loops as many times as their uncertainty warrants. The two loops attack different risks — the problem
loop attacks *value*, the solution loop attacks *usability / feasibility / viability*. Artefacts are
kept (saved in `feature/`, renamed to the idea at the retro) and collaged into Aurora's context after.

## How the repository is organised

By the kind of context and who owns it — tables **consume** some kinds and **author** others.

| Layer | Owner | Consume or author | Folder |
|---|---|---|---|
| Business context | Senior leadership | Consume | `context/business/` |
| Product-area context | Area / functional leadership | Consume | `context/product-area/` |
| Team topology / team APIs | Each team | Consume | `context/team-topology/` |
| Ubiquitous language (glossary) | Shared | Reference | `definitions/` |
| Skills and templates | Across areas | Use to build | `skills/`, `templates/` |
| Team-level context | The team | **Author** | `context/team/` |
| Deliverables (plan, problem, frame, slice, prototype, retro) | The team | **Produce** | `feature/` → renamed to `<idea>/` |

## What's where

- `CLAUDE.md` — the shared journey the team and agent both follow.
- `RUN-GUIDE.md` — the facilitator overlay (setup, the day's schedule, the floor, sharing output, troubleshooting).
- `SETUP.md` — getting Claude Code running and pointed here.
- `skills/` — `plan-the-session`, `land-on-problem`, `feature-spec`, `shape-to-slice`, `prototype-kickoff`, `retro`.
- `templates/` — `team-context`, `frame`, `slice`.
- `context/` — business, product-area, team-topology (consumed), team (authored on the day).
- `definitions/` — the glossary (the *ubiquitous language*) and `convention-gaps.md` (cross-product clashes to resolve post-offsite).
- `feature/` — the table's working folder; everything produced goes here, renamed to the idea at the retro.
- `worked-example/` — a complete pass through the core shape (a real cross-product PPA journey), to show tables what good looks like.

## Still to fill

The strategy deck's vision/mission section; the 21 themes; the real team topology; the problem-ideation
one-pager (Donna + Johannes); and the Claude Code access route in `SETUP.md`.
