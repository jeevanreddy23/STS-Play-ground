---
title: Size and position a rockfall barrier by iterative capacity testing in RocFall
type: skill
tags: [skill, slope-stability, youtube-source]
confidence: medium
updated: 2026-08-01
---

# Size and position a rockfall barrier by iterative capacity testing in RocFall

> **Source:** [YouTube — Rockfall Analysis using RocFall — Barriers and Ditch Analysis](https://www.youtube.com/watch?v=1H6aQIb9TBM&t=653s) (10:53-14:30). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A barrier location, height and energy capacity that actually stops the simulated rock population, found by iteration rather than a single guess

## Inputs

- A completed RocFall trajectory model of the slope and rock population
- Candidate barrier position (distance from the slope toe) and height
- Barrier capacity options: vendor product presets (the library includes manufacturers such as Geobrugg and Maccaferri) or a custom capacity in joules/kilojoules

## Procedure

1. Add a barrier near the toe (e.g. 1-2 m from the toe) and set its height (e.g. about 2 m); the barrier can be dragged to adjust position
2. Open the barrier properties library and either select a vendor product with predefined properties or define a custom barrier by energy capacity
3. Run the analysis and check whether rocks pass through the barrier
4. If rocks pass through, increase the capacity stepwise (the demo iterates from roughly 0.1 kJ through 1000 kJ and beyond) and re-run
5. If increasing capacity alone does not work, move the barrier to a different position and re-run; iterate capacity and position together until the design stops the rocks

## Decision rules

- A cheap low-capacity fence is acceptable only if the simulation shows it stops the expected rock sizes and energies
- If neither realistic capacity nor repositioning stops the rocks, revisit the overall protection concept rather than forcing the barrier

## Checks

- Re-run the full rock population after every barrier change; a barrier that stops some trajectories may still be bypassed by others
- Check the animation to confirm rocks are stopped rather than bouncing over

## Common errors

- Selecting a barrier capacity without simulating impact energies, so rocks pass straight through
- Fixing capacity but ignoring position — a stronger barrier in the wrong place still fails

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Barrier capacities in the demo are deliberately unrealistic starting points used for teaching iteration; real designs use vendor-certified capacities and impact energy statistics

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
