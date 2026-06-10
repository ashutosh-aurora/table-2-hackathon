# Offsite prototyping kit

This folder is the shared starting point for a table at the AI prototyping offsite. If you are
Claude Code reading this, a table has pointed you here to help them move a large problem through
five stages in a day, ending in a throwaway prototype.

## The five stages

1. **Align on the ambition** — the table agrees a deliberately large problem within their theme.
2. **Build the team context** — the table writes down, for their problem, who the users are, what
   success looks like, and how they want to work. They author this; it does not exist yet.
3. **Frame** — turn the ambition into a clear problem statement: outcome, boundaries, success criteria.
4. **Shape to one slice** — carve a single, prototypable slice off the ambition.
5. **Prototype** — make that slice tangible, in whatever medium fits.

## What a win is

A prototype succeeds if it reduces one of the four product risks (after Marty Cagan):
**value** (will anyone want it), **usability** (can people use it), **feasibility** (can we build
it), **business viability** (does it work for the business). Any artefact counts if it helped the
table learn or explain something real.

## The kinds of context here, and who owns them

The table **consumes** some context and **authors** the rest. Knowing which is which is the point.

| Context | Consume or author | Where |
|---|---|---|
| Business context — what Aurora wants to realise (vision, mission) | Consume | `context/business/` |
| Product-area context — the objectives for this area | Consume | `context/product-area/` |
| Team topology — what teams exist, what they own, how to reach them (each team's "team API") | Consume | `context/team-topology/` |
| Ubiquitous language — the agreed names for things | Reference | `definitions/glossary.md` |
| Skills and templates — reusable ways to build well | Use | `skills/`, `templates/` |
| Team-level context — this table's success criteria, users, ways of working | **Author** | `context/team/` |
| Team-level deliverables — the frame, the slice, the prototype | **Produce** | `worked-example/` shows the shape |

## Where to start

- **Facilitators:** read `RUN-GUIDE.md`.
- **Tables, on the day:** start at stage 2 by copying `templates/team-context.md` into `context/team/`.
- **Setup help:** see `SETUP.md`.
- **A complete example:** see `worked-example/`.
