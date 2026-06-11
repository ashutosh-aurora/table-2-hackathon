---
name: prototype-kickoff
description: Help a team start a throwaway prototype of a chosen slice, in whatever medium most cheaply reduces the target product risk. Use when a team has a single slice and needs to make it tangible quickly. Medium-agnostic; not a prescriptive build process.
---

# Prototype kickoff

A team arrives with one slice and the product risk it is meant to attack. They leave having started
to build the cheapest thing that would move that risk. This skill does not force everyone into code.

## Inputs

- The chosen slice (the `slice.md` deliverable), including the product risk it attacks.
- The team context and any relevant context already in the folder.

## Process

**Before building, check you have the context the prototype needs** (for example, the team topology to
route to). If a needed piece is missing or unclear, name the gap and who to ask rather than inventing
it. Thin context is a signal.

1. **Name the risk and the question.** State the one product risk this prototype attacks and the
   single question it should answer (for example: "would a requester actually answer the follow-up
   questions?" for usability).
2. **Pick the cheapest medium — and decide: one answer, or several to compare?** If the question is an
   open design space (*what should it look like*, *how should these integrate*, *which approach*), build
   **several radically different variants** the team can toggle between rather than one mock — the
   useful answer is usually a hybrid, so confirm which the team wants first. Then choose the lightest
   medium that would move the risk, given the team's mix of skills. Options include:
   - a runnable mini-app or script,
   - a prompt or small agent the team can talk to,
   - a clickable mock or wireframe,
   - a worked calculation or model sketch,
   - a vivid written walkthrough with realistic fake data to show another team.
3. **Set a tight timebox** and start building immediately. Keep it throwaway; do not invest in polish.
4. **Capture what it showed.** When the box is up, write two or three lines: what the prototype
   taught the team, or how it helps them explain the idea. That learning is the deliverable, not the
   artefact.

## When the question is integration (the "one product" feel)

Aurora's vision is to be *integrated*, and integration gaps that throw clients off live at **two
altitudes** — low fidelity hides the lower one:

- **Journey level (high):** does it feel like one product — carry-forward, no dead-ends?
- **Field level (low):** do the apps represent the *same thing* the same way — date format, currency
  (real vs nominal), units (MW/MWh, AC/DC), **null vs zero**, granularity, rounding, timezone?

Render each concept the way each app *actually does today*, **not** with clean uniform placeholders —
uniform placeholders hide the exact inconsistencies (`0` here, `—` there; `01/2027` vs `2027-01`; €
real vs nominal) that break the integrated feel. Hold the apps to the agreed conventions (see
`definitions/glossary.md`) and surface every divergence as a gap to align. A client is thrown off by a
mismatched null as much as by a broken journey.

## Output

Any artefact that helped the team learn or explain, plus a short note of what it showed about the
target risk.

## Guardrails

- The output is the learning, not a finished product.
- Match the medium to the question and the team, not to what looks impressive.
- If the prototype is sprawling, it is too big; return to `shape-to-slice` and cut.
- **Annotate for comparison.** If the prototype is to start a conversation or weigh options, show the
  contrast with how things are done today, and give each variant a consistent implications note
  (ownership, coupling, cost, who it serves) so options compare like-for-like.
