---
name: shape-to-slice
description: Help a team carve one small, prototypable slice off a large framed ambition without losing sight of the whole. Use when a team has a framed problem and needs to choose what to actually prototype in the time available. Built for the offsite; a simplified front-end to the engineering breakdown-and-plan workflow.
---

# Shape to slice

A team arrives here with a framed problem (an ambition plus an intended outcome, boundaries and
success criteria). They leave with one slice small enough to prototype today, and clear about which
product risk that prototype will attack.

This is deliberately lighter than an engineering breakdown of an approved specification into
implementation work. The team has a fresh problem and a fast, rough goal, not a real codebase. The aim
is one good slice, not a delivery plan. This is the **solution loop** — it attacks the non-value risks
(usability, feasibility, viability) for the problem you've already landed on.

## Inputs

- The framed problem (the `frame.md` deliverable from the previous stage).
- The team context, business and product-area context, and glossary, already in the folder.

## Process

**Before you start, check the context is sufficient.** Confirm the framed problem and the context it
relies on are present and clear. If a needed piece is missing or ambiguous, name the specific gap and
who the team should ask, and pause there rather than assuming. Thin context is a signal, not a thing
to build through.

1. **Restate the ambition in one sentence.** Confirm it with the team before slicing.
2. **List candidate slices.** Offer three to five distinct, small pieces of the ambition. Each should
   be understandable on its own.
3. **Score each candidate against three tests:**
   - *Prototypable in the time left?* Can the team make something tangible today.
   - *Does it attack a real risk?* Which of value, usability, feasibility, business viability would a
     prototype of this slice reduce.
   - *Is it legible on its own?* Could the team show it to another table and have it make sense.
4. **Pick one.** Recommend the slice that best balances the three tests, and say why. The team decides.
5. **Fill `slice.md`** (copy from `templates/slice.md`): the slice, why this one, which risk it attacks,
   the acceptance check, and what is explicitly out of scope.
6. **Sanity-check the size.** Ask: "what is the smallest version of this that still teaches us one
   real thing?" If the slice is bigger than that, cut it down.

## Output

A filled `slice.md` naming a single slice and the product risk it will reduce, written to the `feature/`
folder. Hand this to the `prototype-kickoff` skill.

## Guardrails

- One slice, not a roadmap. If the team wants three, make them choose the one that teaches the most.
- Keep it in problem and outcome terms, not implementation detail. The prototype medium is chosen next.
- Do not quietly shrink the ambition. The ambition stays large; only the slice is small.
- If the team can't choose a slice because the right *approach* is unknown, that's a design-space
  question — explore it with variants (see `prototype-kickoff`), don't pick blindly.
