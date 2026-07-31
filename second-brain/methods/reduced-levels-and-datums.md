---
title: Reduced levels and datums
type: method
tags: [survey, levels, conventions]
aliases: [RL, datum, reduced level]
updated: 2026-07-29
---

# Reduced levels and datums

RL is height above a datum, increasing upward. Depth is measured downward from a
surface. They are not interchangeable and the confusion between them causes real
errors.

```
depth below platform = platform RL − toe RL
toe RL              = platform RL − depth below platform
```

## Rules we hold to

- Every depth is recorded with the surface it was measured from.
- Every level records its datum — AHD, or a stated site datum, or "assumed".
- An assumed datum is written as assumed. A level on an assumed datum cannot be
  compared with a surveyed one, and a model built on it is dimensionally right
  and absolutely wrong.

## Where it bites

A report that tabulates depths below ground with no platform RL cannot be turned
into a model with true levels. The pile viewer marks the platform level
`inferred` in that case and flags every level derived from it, rather than
quietly assuming zero — see [[Why pile data carries provenance]].

## Related

- [[Borehole log conventions]]
