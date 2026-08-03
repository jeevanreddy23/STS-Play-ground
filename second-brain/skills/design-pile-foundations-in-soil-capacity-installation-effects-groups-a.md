---
title: Design pile foundations in soil - capacity, installation effects, groups and lateral response
type: skill
tags: [skill, piling-rock]
confidence: high
updated: 2026-08-01
---

# Design pile foundations in soil - capacity, installation effects, groups and lateral response

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 21 Soil foundations, Sections 21.12-21.36 (Tables 21.12 to 21.36, Figure 21.3), pp 317-330; cross-reference Chapter 22 Sections 22.11-22.12), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Shaft and base capacities for driven or bored piles in soil, with installation effects, group interaction, set-up, plugging, uplift and lateral response all considered, and the factor of safety chosen for the actual level of construction control.

## Inputs

- Soil profile with corrected SPT N or CPT data, undrained strength and friction angle by layer
- Pile type (driven displacement, driven open-ended steel, bored, screw, micropile), size and material
- Design axial load, uplift load, lateral load and moment
- Pile group layout and spacing
- Installation method and the level of construction control achievable (down-hole inspection versus drilling fluid)
- Whether the site is expansive clay, and whether cyclic or dynamic loading applies

## Procedure

1. Select the pile type with Table 21.13, which weighs ground and load conditions, driveability, driving stresses, operating environment and access. Note prestressing reduces driving-induced tensile cracking, and micropiles suit restricted access and low headroom.
2. Understand the load-sharing before calculating. Table 21.16 gives the displacement required to mobilise shaft and base resistance separately - the shaft mobilises at a small displacement, the base at a much larger one, commonly a percentage of pile diameter. Where the movement to mobilise the base is unacceptable, no base capacity should be counted. In uniform clay the shaft carries most of the working load.
3. Compute shaft capacity. Take adhesion and friction values for uniform soils from Table 21.17, distinguishing driven from bored piles - driving densifies sand while boring can loosen it, but bored pile surfaces are rougher. Where a permanent steel liner is used, the interface changes and the values must be revised. For layered profiles apply Look's directional rules: adhesion reduces for soft clay over hard clay because of smear, and increases for sand over clay.
4. For sands, adjust the friction angle for installation effects with Table 21.18 and take the post-installation earth pressure coefficient from Table 21.19 for the installation method. Alternatively use the N-value routes: shaft resistance from Table 21.21 using the average corrected N over the pile length, and base resistance from Table 21.22 using the corrected N averaged over a stated depth below and above the pile toe.
5. Compute base capacity with Table 21.20, using undrained strength for clays and the bearing capacity factor for sands, and applying Look's stated reduction of bored pile base capacity in sand relative to driven piles. Note the ongoing debate about critical depth that Look flags.
6. For offshore or large tubular piles in cohesionless siliceous soil, use the Table 21.23 design parameter set (unit friction, limiting friction, end bearing factor and limiting end bearing by soil density), applying the earth pressure coefficient appropriate to open-ended versus plugged behaviour, and recognising friction acts on both faces of an unplugged tube.
7. Assess plugging for open-ended steel and H sections with Table 21.28, which gives a first estimate of plug behaviour by pile diameter and soil type. This determines whether base capacity is computed on the gross area or the steel area, and whether internal friction is available - so it changes the answer substantially and must be confirmed by other calculations and, where critical, by measurement.
8. Allow for installation effects on neighbours and on the group. Table 21.24 gives the influence distance of driven piles - densification distance in cohesionless soil, remoulding distance in cohesive soil - and minimum spacings for bored, driven and screw piles. Drive groups in granular soil from the centre outwards. Table 21.25 gives the influence zone of end-bearing piles in sand, expressed in pile diameters above and below the toe, which sets how far the investigation must probe below the founding level.
9. Account for time. Table 21.29 gives set-up factors by soil type - driving generates excess pore pressure that dissipates over days in sand to much longer in clay, increasing capacity. Set-up is site specific and should be confirmed by restrike testing rather than assumed.
10. For uplift use Table 21.27: uplift capacity is typically taken as a fraction of the shaft resistance because of cyclic degradation, and on expansive clay sites the upper shaft must be sleeved or void-formed so heave does not load the pile in tension.
11. For lateral loading, compute the point of fixity from Table 21.26 by load, pile type, size and soil condition, take allowable lateral loads from Table 21.33 by pile type and permitted deflection, and read load-deflection behaviour from Table 21.34 (sands) and Table 21.35 (clays), with induced bending moments from Table 21.36. In a group the front-row and outer piles carry more load than interior piles.
12. For piled rafts and piled embankments use Tables 21.30 to 21.32: a piled raft uses relatively short friction piles to enhance capacity and control differential settlement rather than to carry the whole load; a piled embankment needs a minimum fill height to allow arching plus a load transfer platform of stated thickness with geogrid reinforcement at a limited allowable strain; and dynamic magnification factors apply to the loads on rail embankments.
13. Select the factor of safety with Table 21.12 for driven piles (with the load and resistance factor design and allowable stress design distinction) and, for the general case, with the deep foundation factors in Chapter 22 Tables 22.11 and 22.12, which vary the factor with structure importance, ground variability, investigation thoroughness, load test availability and - critically - the level of construction control. A bored pile constructed under drilling fluid without inspection attracts a materially higher factor than one inspected down-hole.
14. Check structural capacity independently: Table 21.14 for tubular steel piles and Table 21.15 for H piles give maximum working loads at a stated fraction of yield, reduced where the pile projects above ground level.

## Decision rules

- Do not add shaft and base capacities at their peak values unless the displacements to mobilise them are compatible; where base mobilisation requires unacceptable movement, ignore base capacity.
- Bored piles in sand carry substantially less base capacity than driven piles of the same size.
- Where the borehole does not extend a sufficient depth below the pile toe, base resistance should not be relied upon.
- Plugged and unplugged assumptions give different capacities from the same pile - state the assumption and verify it.
- Choose the factor of safety for the construction control actually achievable on site, not the control assumed at design stage.
- On expansive clay sites, treat uplift from heave as a design load case, not an afterthought.

## Checks

- Investigation depth below toe against the Table 21.25 influence zone
- Shaft and base capacities cross-checked between an effective stress route and an N-value or CPT route
- Group spacing against the Table 21.24 minimums and the group effect on capacity and settlement
- Set-up assumptions confirmed by restrike or dynamic testing rather than assumed
- Structural capacity check performed alongside the geotechnical check
- Level of construction control stated and the factor of safety matched to it

## Common errors

- Summing peak shaft and peak base capacity regardless of displacement compatibility
- Using driven-pile shaft values for bored piles in sand
- Claiming base resistance where the investigation stopped at the toe
- Ignoring smear effects where soft clay overlies stiff clay
- Assuming a plug forms in an open-ended pile without checking diameter and embedment
- Applying the same factor of safety to a well-controlled and a poorly-controlled bored pile installation

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Plugging guidance is explicitly a first estimate and Look states caution is required.
- The project's existing SPT direct-method pile capacity skill covers a different set of published methods - run both and reconcile rather than substituting one for the other.

## Standards cited

AS 2159 Piling - design and installation, AS 5100.3 Bridge design - foundations, API RP 2A (offshore pile design parameters)

## Related

- [[Bored pier inspection]]
- [[AS 2159 piling]]
- [[Borehole log conventions]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
