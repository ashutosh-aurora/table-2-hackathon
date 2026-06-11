# The journey — for the team and the agent

This is the shared starting point for a table at the offsite. **The team and the AI agent follow the
same journey, set out below.** Together you move a large problem through five stages in a day, ending in
a throwaway prototype. The journey is one and the same; what differs is the *role* each of you plays.

**The two roles, across every stage:**
- **The team** judges, decides, supplies the real context, and is accountable for the result.
- **The agent** executes the skills, drafts, and surfaces gaps — and never fabricates.

## The five stages

1. **Align on the ambition.** Agree a deliberately large problem within your theme; don't pre-shrink it.
   - *Team:* decide the ambition. *Agent:* help sharpen the statement.
2. **Build the context the problem needs.** Start with your own team context (users, success, ways of
   working); pull in wider context only as framing reveals you need it.
   - *Team:* supply real context; name gaps and who to ask. *Agent:* ask, check sufficiency, record gaps — don't invent.
3. **Frame.** Turn the ambition into a clear problem: outcome, boundaries, success criteria.
   - *Team:* the judgement calls. *Agent:* run feature-spec / grill-me-with-docs, draft the frame, surface gaps.
4. **Shape to one slice.** Carve a single prototypable slice off the ambition.
   - *Team:* choose the slice. *Agent:* propose candidates, score them, draft the slice.
5. **Prototype.** Make that slice tangible, in whatever medium fits.
   - *Team:* judge what it taught you; own the output. *Agent:* build the throwaway fast.

## What a win is

A prototype succeeds if it reduces one of the four product risks (after Marty Cagan): **value** (will
anyone want it), **usability** (can people use it), **feasibility** (can we build it), **business
viability** (does it work for the business). Any artefact counts if it helped the team learn or explain
something real.

## The kinds of context here, and who owns them

The team **consumes** some context and **authors** the rest. Knowing which is which is the point.

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

- **Team:** read this journey, then begin stage 1.
- **Facilitator:** also read `RUN-GUIDE.md` — your role (setup, being the floor, troubleshooting) on top of this journey.
- **Agent:** you've read this; start where the team is in the arc.
- **Setup:** `SETUP.md`. **A complete example:** `worked-example/`.
