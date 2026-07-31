---
title: Socket compliance is indeterminate by default
type: decision
tags: [decision, tooling, piling]
updated: 2026-07-29
---

# Socket compliance is indeterminate by default

**Decision.** When the required socket length is unknown, socket compliance
returns `indeterminate` — never `compliant`.

## Reasoning

Compliance is achieved measured against required. Our inspection reports carry
the achieved length; the requirement lives on the structural drawing, which we
often do not hold. A tool that defaults to pass in that situation manufactures an
engineering conclusion out of an absence of data.

`indeterminate` is a first-class answer with its own colour in the 3D scene,
deliberately not the same orange as a verified socket, so an unassessed pier
cannot read as approved at a glance.

## What it means in practice

On the Carter Street job all 18 inspected piers report as compliance-unknown,
because the report states no required socket. That is the correct reading of the
available information, and it makes the missing document visible.

## Related

- [[Rock socket length]]
- [[AS 2159 piling]]
- [[Why pile data carries provenance]]
