# The journey — for the team and the agent

This is the shared starting point for a table at the offsite. **The team and the AI agent follow the
same journey**, and the agent helps shape it to *you* — it is adaptive, not a fixed script. Together you
move from a large problem to a rough, useful prototype in a day; how many loops you run is your choice.

**The two roles, throughout:**
- **The team** judges, decides, supplies the real context, and is accountable for the result.
- **The agent** runs the skills, drafts, surfaces gaps, and proposes a plan — and never fabricates.

**How the agent holds conversations (a hard rule, not a preference):** ask **exactly one question at a
time**. Send the question, then **stop and wait** for the answer before asking anything else. Never put
two questions in one message; never present a numbered list of questions to answer at once. (This was
not always followed before — treat it as a strict constraint governing every skill and every step.)

## How the day runs

You don't march through fixed stages. You start by planning the day with the agent, then run two
loops — one to find the right *problem*, one to find the right *solution* — as many times as useful, and
close with a retro. The agent proposes where to start and how to spend the time; you decide.

1. **Plan the session** — `plan-the-session`. A short self-diagnosis (what your team is, who your users
   are, what you're trying to achieve), from which the agent proposes a plan and time allocation.
   - *Team:* answer honestly; each person writes what they bring. *Agent:* propose the plan; on a mixed
     table, assign prompts to specific people.
2. **Problem loop — find the right problem** (attacks **value** risk) — `land-on-problem`. Explore
   several candidate problems, land on one, and **name the idea**. Don't settle early; iterate.
   - *Team:* generate and choose. *Agent:* prompt widely, then help converge.
3. **Build context & frame** — `feature-spec`. Build only the context the problem needs, then frame it
   (outcome, boundaries, success criteria).
   - *Team:* the judgement calls. *Agent:* run `feature-spec`, draft the frame, surface gaps.
4. **Solution loop — find the right solution** (attacks **usability / feasibility / viability**) —
   `shape-to-slice`. Generate different approaches, then converge on one slice.
   - *Team:* choose the approach. *Agent:* propose distinct options, score them, draft the slice.
5. **Prototype & deepen** — `prototype-kickoff`. Build the cheapest rough artefact that moves the risk,
   then use it **as a prompt**: "what questions does this make you ask?" Surface misalignment, iterate.
   - *Team:* react; decide how deep to go. *Agent:* build fast; keep surfacing what it raises.
6. **Retro** — `retro`. What you learned, what helped, what's missing in the AI-assisted workflow. The
   agent then saves the session's artefacts and renames `feature/` to your idea's name.

The two loops attack **different risks**, so run each as much as its uncertainty warrants: the problem
loop until you believe it's worth doing (value); the solution loop until you believe it can work
(usability / feasibility / viability).

## At each step, the agent offers a choice

The journey is the team's to navigate. At each decision point the agent **proactively offers three
moves**, rather than pushing ahead:

- **Forward** — move to the next step.
- **Deepen** — iterate here, or pull from `deeper-questions.md`, to surface more before moving on.
- **Back** — return to an earlier step to revise an assumption that now looks wrong.

The agent makes these three moves explicit to the team **at the start** (during planning) and offers
them at the end of every step — so the team always knows it can steer. Going back to revise the problem,
or deepening a solution, is how the two loops actually run — expected, not a detour.

## What a win is

A win **reduces one of the four product risks** (after Marty Cagan): **value** (will anyone want it),
**usability** (can people use it), **feasibility** (can we build it), **business viability** (does it
work for the business). Any artefact counts if it helped the team learn or explain something real.

## What we keep: the context and the learning

The prototype itself stays **rough and throwaway** — it matters less. What we **keep** is the *context*
the table built and *what the loops taught them*: the framed problem, the questions and gaps surfaced,
the retro. Each idea's `<idea-name>/` folder retains that (a team may keep several), local — **no need to
commit it back** — and it's collaged into Aurora's shared context after the day.

## The kinds of context here, and who owns them

The team **consumes** some context and **authors** the rest. Knowing which is which is the point.

| Context | Consume or author | Where |
|---|---|---|
| Business context — what Aurora wants to realise (vision, mission) | Consume | `context/business/` |
| Product-area context — the objectives for this area | Consume | `context/product-area/` |
| Team topology — what teams exist, what they own, how to reach them (each team's "team API") | Consume | `context/team-topology/` |
| Ubiquitous language — the agreed names for things | Reference | `definitions/glossary.md` |
| Skills and templates — reusable ways to build well | Use | `.claude/skills/`, `templates/` |
| Team-level context — this table's success criteria, users, ways of working | **Author** | `context/team/` |
| Your deliverables — plan, problem, frame, slice, prototype, retro | **Produce** | one `<idea-name>/` folder per idea (a team may keep several), retained locally |

> **For Claude Code:** when a user invokes a skill by name (e.g. "use the land-on-problem skill"),
> always look for it in `.claude/skills/<name>/SKILL.md` in this repo first. These are project-local
> skills installed under `.claude/skills/`. Read the SKILL.md and follow its instructions.

## When context is missing or unclear

Treat thin or ambiguous context as a warning sign, not something to build through. Each skill checks
whether the context it needs is present. If it is not, the skill names the specific gap and who to ask,
and stops short of assuming. Going to ask the right person is expected, not a failure. Do not fabricate
context to keep going.

And when you **infer** something the team hasn't said — to frame, slice, or build — **state it as an
explicit assumption and invite them to correct it.** Don't fold silent inferences into the work: the
things they didn't say are exactly what they most need to see and review.

Before the day, some context here is deliberately a placeholder — it depends on other people. The loop
still runs end to end, and the gaps it surfaces are part of what it produces.

## Let the problem drive the context

Shape the problem before gathering context, not the other way round. The context you need is whatever
*this* problem and *this* slice require — usually very little, and a smaller slice needs less. Don't
gather speculatively or try to fill every folder. Pull in only what the framing demands, and keep what
you write lean: the concepts and the open questions, not an audit trail.

## Where to start

- **Team:** you MUST start with `plan-the-session` — the agent will shape the day with you. Make sure you're familiar with `context/one-pager.md` for the context.
- **Facilitator:** also read `RUN-GUIDE.md` (your role: setup, the schedule, the floor, sharing output, troubleshooting).
- **Agent:** when the session starts, or someone asks what they're doing / what this is, read `context/one-pager.md` first and orient them to the journey — explain we're at the start of a prototyping session and what that means — then propose `plan-the-session` as the next move. Do not skip this orientation step, even if it seems obvious.
- **Setup:** `SETUP.md`. **A complete example of the shape:** `worked-example/`.
