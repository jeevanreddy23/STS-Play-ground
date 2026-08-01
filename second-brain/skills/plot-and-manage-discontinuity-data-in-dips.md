---
title: Plot and manage discontinuity data in Dips
type: skill
tags: [skill, rock-mechanics, youtube-source]
confidence: high
updated: 2026-08-01
---

# Plot and manage discontinuity data in Dips

> **Source:** [YouTube — Plotting Great Circles and Poles of Discontinuities using Dips](https://www.youtube.com/watch?v=HENt9tbWF78&t=0s) (00:00-06:03). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A correctly configured Dips file with discontinuity orientations plotted as poles or great circles, extra attribute columns, and summary charts, ready for kinematic analysis

## Inputs

- Discontinuity orientation measurements from site investigation (dip and dip direction, or another format such as trend or strike)
- Optional attribute data per discontinuity: spacing, length, type, shape, surface roughness

## Procedure

1. Start a new file; the input grid is a spreadsheet-like table with dip and dip direction columns
2. In Analysis > Project Settings, confirm the global orientation format matches your data (dip / dip direction rather than trend or strike); set a project title and comments if wanted
3. Enter orientation rows (e.g. 45/010, a near-vertical 89/235, a near-horizontal 02/180)
4. Click the pole (vector) plot button to draw the stereonet: near-vertical planes plot far from the centre, near-horizontal planes near it
5. To display planes instead, open plot options and tick the great-circles box; each measurement then appears as a great circle
6. Add extra columns by right-clicking to the right of the dip direction column (e.g. spacing, surface), and paste data from Word or Excel if it exists elsewhere
7. Use Analysis > Chart on any attribute column (e.g. surface) to summarise categories such as which roughness class dominates the data set

## Decision rules

- Set the orientation format before entering data — mixing formats silently corrupts every subsequent analysis
- Use pole plots for large data sets (hundreds of points) and great circles when a few individual planes need to be seen

## Checks

- Spot-check the plot: a near-vertical entry must fall near the perimeter side away from the centre and a near-horizontal one near the centre (for poles this relationship is the reverse of great circles)
- Open a library tutorial file to compare structure when unsure how attribute columns should look

## Common errors

- Entering trend/plunge or strike data while the project is set to dip / dip direction
- Confusing the pole and great-circle representations when visually checking the plot

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
