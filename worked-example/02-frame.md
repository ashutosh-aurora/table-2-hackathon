# Frame — Internal request triage (worked example)

## Problem

Internal requests arrive underspecified and misrouted. Requesters do not know who owns what or what
detail to include, so receiving teams spend time chasing basics or forwarding requests that were
never theirs. The cost is spread thinly across many people, so no one owns fixing it.

## Intended outcome

A request lands at the right team, first time, complete enough to act on, without the requester
having to know the org chart.

## Boundaries

- **In scope:** understanding a request in plain language, checking completeness, asking follow-ups,
  suggesting the owning team.
- **Out of scope:** actually fulfilling the request, integrating with ticketing systems, handling
  every request type. We are not building a help desk; we are triaging the front door.

## Success criteria

For a chosen request type: the agent spots a missing essential, asks for it, and names the right
owning team, on realistic examples, more reliably than an unaided requester would.

## Scariest risks

- **Value** (will anyone want it): real but secondary; the pain is widely felt.
- **Usability** (can people use it): **scariest.** Will a requester actually answer follow-up
  questions rather than abandon the agent? If not, nothing else matters.
- **Feasibility** (can we build it): moderate; an assistant can plausibly do this from plain language.
- **Business viability** (does it work for the business): out of scope for a one-day prototype.
