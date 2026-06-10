# Prototype — Data-extract request triage agent (worked example)

A throwaway prototype of the slice. The medium chosen was the cheapest one that answers the usability
question: a prompt the team can talk to as if it were the agent, tried against realistic incomplete
requests. No code, no integrations.

## The risk and the question

- **Risk:** usability.
- **Question:** will a requester answer the follow-up questions and end with a complete request?

## The agent prompt (what the team built)

> You triage internal data-extract requests at Aurora. A data-extract request is complete only when it
> has all four essentials: (1) what data is wanted, (2) the date range, (3) the delivery format, and
> (4) what it will be used for.
>
> When you receive a request:
> 1. Identify which of the four essentials are present and which are missing.
> 2. Ask only for the missing essentials, one short question at a time, in plain language. Ask at most
>    three questions.
> 3. When all four are present, restate the complete request back in one short paragraph and suggest
>    the owning team.
>
> Be brief and friendly. Never ask for something already provided. If the request is not a data-extract
> request, say so and stop.

## Test requests the team ran it against

1. *"Can someone pull the German wind numbers for me?"* — missing date range, format, purpose.
2. *"I need the Q1 generation data as a CSV."* — missing what region/market, and purpose.
3. *"Export everything from the prices table, urgent."* — missing date range, format, purpose; too broad.

## What the prototype showed

Two or three lines, written when the timebox ended:

> Requesters answered short, single questions readily; a requester does complete the request through
> the follow-ups. They stalled when asked two things at once, so one-question-at-a-time matters. The
> "what will it be used for" question was the one people resisted, which is a real usability finding to
> carry forward. Usability risk reduced: the follow-up loop works if questions stay atomic.
