---
title: Determine UCS and Young's modulus from unconfined compression test data
type: skill
tags: [skill, testing, youtube-source]
confidence: high
updated: 2026-08-01
---

# Determine UCS and Young's modulus from unconfined compression test data

> **Source:** [YouTube — How to Calculate Young's Modulus from Unconfined Compression Test](https://www.youtube.com/watch?v=Qjm_S50v8AU&t=91s) (01:31-06:51). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A stress-strain curve, peak unconfined compressive strength, and Young's modulus (E) for a rock core from raw load-deformation laboratory data

## Inputs

- Laboratory table of applied load (kN) vs axial strain (%) from an unconfined compression test
- Core diameter (50 mm in the example)

## Procedure

1. Compute the cross-sectional area of the cylindrical core from its radius (about 1963 mm2 for 50 mm diameter; convert to m2, about 0.0019625 m2, so kN loads give kPa/MPa stresses)
2. Convert each load reading to stress by dividing load by area (e.g. 26 kN gives about 13 MPa); the area stays constant for all readings
3. Plot stress against strain for all readings (a spreadsheet makes this easy)
4. Read the peak of the curve as the unconfined compressive strength (about 60 MPa in the example)
5. Identify the straight, linear (elastic) portion of the curve and pick a stress-strain point on it (about 43 MPa at 0.05% strain in the example)
6. Convert strain from percent to decimal before computing modulus
7. Compute Young's modulus as change in stress over change in strain along the linear portion (about 86.6 GPa in the example)

## Decision rules

- Very small strain ranges at failure (of order 0.05%) indicate a hard rock likely to show brittle behaviour
- A very high computed E is plausible when measured strains are very low — sanity-check E against how stiff the curve looks

## Checks

- Confirm strain was converted out of percent before dividing — this is the step that most commonly corrupts E by a factor of 100
- Confirm load-to-stress conversion units (kN over m2 gives kPa)

## Common errors

- Dividing stress by strain still expressed in percent, giving E wrong by two orders of magnitude
- Taking the modulus from a non-linear part of the curve instead of the initial straight elastic portion
- Recomputing area for each load step — the diameter does not change during the test

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Auto-captions garble several intermediate numbers (area digits, exact stress values); equation shown on screen — read from the video
- The lecture computes a tangent-style modulus from the linear portion; it does not distinguish tangent vs secant modulus conventions

## Standards cited

None cited in the source passage.

## Related

- [[Rock strength classes]]
- [[Skills]]
