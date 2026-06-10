# Slice — Completeness check and follow-ups for data-extract requests (worked example)

## The slice

For one request type only, data-extract requests, an agent that reads the request in plain language,
checks whether the essentials are present, and asks up to three follow-up questions for anything
missing before suggesting the owning team.

## Why this slice

Data-extract requests are common, everyone recognises them, and they have a small, knowable set of
essentials (what data, what date range, what format, what it is for). That makes the completeness
check concrete enough to prototype in an afternoon. The other request types can wait.

## What it proves

- **Risk:** usability.
- **Question:** when the agent asks a requester for the missing essentials, do they answer and end up
  with a complete request, or do they give up?

## Acceptance check

On a handful of realistic, deliberately incomplete data-extract requests, the agent identifies the
missing essential, asks for it in a way a requester would plausibly answer, and ends with a request
that has all four essentials and a suggested owning team.

## Out of scope

Other request types, fulfilling the request, connecting to any real system, and handling adversarial
or joke inputs. Throwaway prototype only.
