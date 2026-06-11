# Offsite prototyping kit

This folder is the shared starting point for a table at the AI prototyping offsite. If you are
Claude Code reading this, a table has pointed you here to help them move a large problem through
five stages in a day, ending in a throwaway prototype.

## The five stages

1. **Align on the ambition** — the table agrees a deliberately large problem within their theme.
2. **Build the context the problem needs** — start with the team's own context (who the users are,
   what success looks like, how they want to work), which they author. Pull in wider context only as
   the framing reveals you need it (see "Let the problem drive the context").
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

> **For Claude Code:** when a user invokes a skill by name (e.g. "use the feature-spec skill"),
> always look for it in `skills/<name>/SKILL.md` in this repo first. These are project-local skills
> and will not appear in the system skills list. Read the SKILL.md and follow its instructions.
> Do not conclude a skill is missing just because it is absent from the system list.
| Team-level context — this table's success criteria, users, ways of working | **Author** | `context/team/` |
| Team-level deliverables — the frame, the slice, the prototype | **Produce** | `worked-example/` shows the shape |

## What this repo asks of you

It should be self-evident what the team is expected to do here. At each point, the ask is one of:

- **Complete the context** you need but do not yet have.
- **Generate the idea** — agree the ambition.
- **Shape the slice** — narrow to one prototypable piece.
- **Prototype** — make it tangible.

## When context is missing or unclear

Treat thin or ambiguous context as a warning sign, not something to build through. Each skill checks
whether the context it needs is present and clear. If it is not, the skill names the specific gap and
who the team should ask, and stops short of assuming. Going to ask the right person is an expected,
valid move, not a failure. Do not fabricate context to keep going.

Before the day, some context here is deliberately still a placeholder, because it depends on other
people. The loop still runs end to end, and the gaps it surfaces are part of what it produces.

## Let the problem drive the context

Shape the problem before gathering context, not the other way round. The context you need is whatever
*this* problem and *this* slice require, which is usually very little, and a smaller slice needs less.
Don't gather context speculatively or try to fill every folder. Pull in only what the framing demands,
and keep what you write lean: the concepts and the open questions, not an audit trail.

## Where to start

- **Facilitators:** read `RUN-GUIDE.md`.
- **Tables, on the day:** start at stage 2 by copying `templates/team-context.md` into `context/team/`.
- **Setup help:** see `SETUP.md`.
- **A complete example:** see `worked-example/`.
