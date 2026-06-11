# Facilitator overlay

The journey itself — the moves, the win criterion, the context model, the principles — lives in
`CLAUDE.md`, and the team and the agent both follow it. **Read that first.** This page is the parts that
are *yours* as facilitator: setup, the schedule, being the floor, sharing the output, troubleshooting.

## Before the table starts

1. Confirm each person (or at least your machine) has Claude Code working. See `SETUP.md`.
2. Open this folder in Claude Code so `CLAUDE.md` is loaded.
3. Read the `worked-example/` once, so you've seen the shape before the table does.

## The day

| Time | What |
|---|---|
| 09:30–11:00 | Strategy session (Stuart / Mateusz) |
| 11:15–12:45 | Problem loop — find the right problem (`plan-the-session`, then `land-on-problem`) |
| 12:45–13:30 | Lunch |
| 13:30–15:30 | Solution loop — build & iterate (`shape-to-slice`, `prototype-kickoff`) |
| 15:30–16:00 | Buffer / break |
| 16:00–17:00 | Voting / share-back |
| 17:00–17:30 | Retro (`retro`) — then push the table's folder (below) |

The agent proposes a plan and time allocation per table (`plan-the-session`). Your job is to keep the
table roughly on these boxes and to decide, with them, how many loops to run — the journey is adaptive,
not a fixed sequence.

## You are the guaranteed floor

If a table's own setup fails, run the kit from your machine and the table still gets the full
experience. No table loses time to one person's setup.

## Insufficient context is a signal

When a team can't answer something because the context isn't there, that's a finding, not a blocker.
Help them name the gap and who owns the answer, rather than letting them assume.

## Sharing the output (end of day)

Everything the table made lives in `feature/`, renamed to the idea's name at the retro. To share it
**without 21 tables colliding on `main`**, push a branch named after the idea to this same repo (no
separate repo needed):

```
git checkout -b table/<idea-name>
git add <idea-name>/ && git commit -m "<idea-name> — offsite output"
git push -u origin table/<idea-name>
```

Branches don't conflict, so every table pushes independently. **You** run this, so nobody needs to know
git. Pooling and collage into Aurora's context happen **after** the day, once every table's branch is in.

## Troubleshooting

- **Setup failing for an individual:** move them to your machine or a working teammate's.
- **Stuck choosing a problem:** ask "if this were solved, what changes, and for whom?" then name that.
- **Slice still too big:** ask "what's the smallest version that still teaches us one real thing?"
- **Prototype drifting to polish:** it's rough but *kept* — the output is the learning, not a finished product.
- **Team wants to keep iterating:** good — the loops are meant to repeat; watch the clock, not the loop count.
