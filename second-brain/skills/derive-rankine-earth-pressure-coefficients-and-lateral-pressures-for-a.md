---
title: Derive Rankine earth pressure coefficients and lateral pressures for a retaining structure
type: skill
tags: [skill, earthworks]
confidence: high
updated: 2026-08-01
---

# Derive Rankine earth pressure coefficients and lateral pressures for a retaining structure

> **Source:** `Earth pressure calculations.xlsx` (Sheet 'Earth pressure coeff.' (coefficient block rows 6-13, pressure output block columns G-I)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can produce at-rest, active and passive earth pressure coefficients from an effective friction angle and convert them into design lateral pressures for a wall or shoring element, with the controlled/uncontrolled fill cases kept separate.

## Inputs

- Effective angle of internal friction of the retained material, one column per material or per design case
- Reduced interface friction angle (commonly two-thirds of the soil friction angle) where wall friction is to be considered
- Bulk unit weight of the retained material, tabulated separately for uncontrolled fill and controlled (engineered) fill
- Retained height, or unit height when reporting pressure per metre of depth

## Procedure

1. Enter the friction angle for each design case as a separate column so uncontrolled fill, controlled fill and any interface-friction case can be compared side by side.
2. Convert degrees to radians before taking the sine - the sheet does this explicitly, and it is the single most common transcription error in hand-built versions.
3. Compute the two building blocks (1 - sin phi) and (1 + sin phi) once per column.
4. Take the at-rest coefficient as Ko = 1 - sin phi (the Jaky expression for normally consolidated, level-backfill conditions).
5. Take the active coefficient as Ka = (1 - sin phi) / (1 + sin phi), the Rankine value for a smooth vertical back, level backfill and no cohesion.
6. Take the passive coefficient as the reciprocal, Kp = 1 / Ka.
7. Multiply each coefficient by the bulk unit weight and the depth to obtain the horizontal stress at that depth: sigma_h = K x gamma x z, and repeat for the at-rest, active and passive cases separately.
8. Report per-metre pressures if the result is to be used as a pressure gradient, or integrate over the retained height for the total thrust and its point of application.

## Decision rules

- Use Ko for rigid, non-yielding structures (basement walls, propped shoring, structures cast against soil); use Ka only where the wall can rotate or translate enough to mobilise the active state; use Kp only where the passive block is reliably present and movement to mobilise it is acceptable.
- Apply a reduced interface friction angle (typically two-thirds of the soil value) where wall friction is claimed, and use the appropriate coefficient formulation for a rough wall rather than the plain Rankine expression.
- Assign a lower unit weight and a lower friction angle to uncontrolled fill than to controlled fill; the two cases should be carried through the calculation as separate columns and the governing case adopted.
- The Rankine expressions above are for cohesionless material with a horizontal ground surface and a vertical wall face; a sloping surface, a battered face or a cohesion intercept needs the extended (Coulomb or Rankine-sloping) formulation instead.
- Passive resistance is normally discounted or heavily reduced where excavation, scour, service trenching or shrinkage in front of the wall is possible.

## Checks

- Confirm Ka x Kp = 1 for every column - the reciprocal relationship is the quickest arithmetic check on the coefficients.
- Confirm Ka < Ko < 1 < Kp for every column; any coefficient outside that ordering means the friction angle or the radians conversion is wrong.
- Confirm each pressure cell multiplies unit weight by depth by the coefficient of that same row - see the common errors below.
- Sanity-check the resulting pressures against a rule of thumb (an active pressure of roughly one third of the vertical stress for medium-dense granular fill).
- Confirm the water regime: these expressions give effective lateral pressures only; hydrostatic pressure must be added separately unless full drainage behind the wall is demonstrated.

## Common errors

- Cross-linked pressure formulas: in the source file only the active-pressure row multiplies unit weight by height by the coefficient correctly, while the at-rest and passive rows chain off the already-computed active pressure cell, so the at-rest pressure is scaled by an extra factor and the passive row collapses to gamma x z. Rebuild each pressure row independently from gamma, z and its own coefficient.
- Leaving one or more friction-angle input cells blank, which drives every coefficient in that column to 1.0 and produces plausible-looking but meaningless pressures.
- Taking the sine of degrees without converting to radians.
- Using the at-rest coefficient with unit weight for a wall that will actually yield, or claiming passive resistance in front of a toe that may be excavated.
- Omitting surcharge, compaction-induced pressure and water pressure, none of which the coefficient calculation includes.

## Caveats

- Reconstructed from a working calculation file - verify the method against the governing standard before reuse.
- The sheet implements plain Rankine theory: no wall friction in the coefficient formulas, no cohesion, level backfill, vertical face, no surcharge and no water. Anything outside those assumptions needs a different method.
- Unit weight is labelled in the source in pressure units rather than kN/m3; confirm units before reusing any cell.

## Standards cited

AS 4678, AS 5100.3, BS 8002, Eurocode 7 (EN 1997-1)

## Related

- [[Skills]]
- [[Skills]]
