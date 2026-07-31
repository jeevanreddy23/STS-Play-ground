---
title: Why pile data carries provenance
type: decision
tags: [decision, tooling, pile-viewer]
updated: 2026-07-29
---

# Why pile data carries provenance

**Decision.** Every engineering value in the pile viewer is a `Field<T>` carrying
value, state, source and confidence, rather than a bare number.

States: `extracted`, `calculated`, `manual`, `inferred`, `verified`,
`conflicting`, `missing`.

## The problem it solves

Once a number is in a spreadsheet it looks like every other number. A toe level
read off a signed report and a toe level someone estimated from a drawing render
identically, and by the time it matters nobody can tell which is which.

## Consequences

- A missing value stays missing all the way to the screen. A pile with no toe
  level has no length — it does not have a length of zero.
- When two sources disagree the field is `conflicting`, both values are kept, and
  the engineer resolves it. Source priority orders them for review; it does not
  pick a winner, because a higher-priority document is only better if it is also
  the current revision, which the tool cannot confirm.
- Piles missing position, levels or diameter are listed as undrawable with the
  blocker named, rather than placed at the origin with a guessed size.

## Cost

More verbose than plain numbers, and every UI component has to render a state.
Accepted — see [[Reduced levels and datums]] for the failure mode this prevents.

## Related

- [[Socket compliance is indeterminate by default]]
