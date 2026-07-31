---
title: Rock socket length
type: method
tags: [piling, socket, geometry]
aliases: [socket, socket length]
updated: 2026-07-29
---

# Rock socket length

The length of pier penetrating competent rock, measured from proved rockhead to
the toe.

```
socket = top-of-bedrock RL − toe RL
```

## Required vs achieved

Two different numbers that get confused constantly.

- **Required** comes from the approved structural drawing or pile schedule. It
  is a design requirement.
- **Achieved** is what was built and measured on site.

A report giving only the achieved socket cannot demonstrate compliance. The tool
handles this by refusing to call it a pass — see
[[Socket compliance is indeterminate by default]].

## Measuring honestly

Rockhead is often gradational in [[Weathered siltstone]], so the socket depends
on where you call the top of competent rock. Record the weathering class at that
level, not just the depth, so the call can be reviewed.

## Related

- [[Bored pier inspection]]
- [[Why pile data carries provenance]]
