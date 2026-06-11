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
2. **Pick the cheapest medium that answers it.** Choose the lightest artefact that would move the
   risk, given the team's mix of skills. Options include:
   - a runnable mini-app or script,
   - a prompt or small agent the team can talk to,
   - a clickable mock or wireframe,
   - a worked calculation or model sketch,
   - a vivid written walkthrough with realistic fake data to show another team.
3. **Set a tight timebox** and start building immediately. Keep it throwaway; do not invest in polish.
4. **Capture what it showed.** When the box is up, write two or three lines: what the prototype
   taught the team, or how it helps them explain the idea. That learning is the deliverable, not the
   artefact.

## Output

Any artefact that helped the team learn or explain, plus a short note of what it showed about the
target risk.

Put the artefacts in the 'feature/prototype' folder.

## Guardrails

- The output is the learning, not a finished product.
- Match the medium to the question and the team, not to what looks impressive.
- If the prototype is sprawling, it is too big; return to `shape-to-slice` and cut.
