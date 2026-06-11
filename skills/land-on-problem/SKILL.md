---
name: land-on-problem
description: Help a table explore several candidate problems and land on the right one, then name it. Use after plan-the-session, as the problem loop. Attacks value risk — "is this worth doing?".
---

# Land on the problem

The first loop. The table widens to several candidate problems, then converges on the one worth a day,
and names it. This loop attacks **value risk** — whether the problem is worth solving at all.

## Inputs

- The table's plan and position from `plan-the-session`.
- Business and product-area context, team topology, glossary — consume only what the problem needs.

## What to do

1. **Frame the hunt by the table's position:**
   - **Close to use cases** → product-integration opportunities in the use cases of interest. AI is the
     shared enabler everyone has; **integration is the differentiator** — look for seams *between*
     products / use cases, not "bolt AI onto X".
   - **Capability team** → internal interface / process improvement, within the team or with the
     adjacent end-user team.
2. **Diverge first.** Generate several candidate problems before judging any. Don't let the table settle
   on its first idea.
3. **Converge.** Judge candidates against: is it genuinely felt / worth doing (**value**)? does a
   day-sized slice exist? will the artefacts enrich Aurora's context? Recommend one; the team decides.
4. **Name the idea.** Once landed, the table names it — this is its identifier for the day, and becomes
   the folder name at the retro.
5. Write the chosen problem (one short paragraph) to `feature/problem.md`. Hand to `feature-spec`.

## Guardrails

- Run the loop as many times as the value uncertainty warrants — the team chooses how many.
- A good problem is usually a *seam* between use cases or teams, not a single feature.
- Don't fabricate the felt pain — if the table can't say who feels it, that's a gap to resolve, not assume.
- *Optional:* to pressure-test value, pull from `deeper-questions.md`.
