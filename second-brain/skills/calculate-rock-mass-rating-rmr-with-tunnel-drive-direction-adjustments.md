---
title: Calculate rock mass rating (RMR) with tunnel drive-direction adjustments
type: skill
tags: [skill, rock-mechanics, youtube-source]
confidence: high
updated: 2026-08-01
---

# Calculate rock mass rating (RMR) with tunnel drive-direction adjustments

> **Source:** [YouTube — How to Calculate Rock Mass Rating (RMR) Real Example + Tunnel Adjustments](https://www.youtube.com/watch?v=jvEQeZuqydI&t=145s) (02:25-17:41). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A summed RMR value, rock mass class (A-E), and tunnel-adjusted rating for a described rock mass, including the groundwater rating derived from pore-pressure-to-stress ratio

## Inputs

- Intact rock strength (UCS from unconfined compression, or point load index)
- RQD (%)
- Joint spacing, or joints-per-metre count to convert to spacing
- Joint condition description (roughness, weathering, separation, infill)
- Groundwater information: tunnel inflow, or joint water pressure and in-situ stress, or general condition (dry/damp/wet/dripping/flowing)
- Tunnel depth, groundwater table depth, rock density (for the water-pressure ratio route)
- Tunnel drive direction and bedding/joint dip and dip direction (for the adjustment)

## Procedure

1. Rate intact rock strength from the RMR table (e.g. UCS of 75 MPa rated 7 in the worked example); higher strength gives higher rating
2. Rate RQD from the table (e.g. RQD 70% rated 13)
3. If given joints per metre instead of spacing, estimate spacing as 1 m divided by joint count (e.g. 8 joints/m gives 0.125 m, rated 8)
4. Rate joint condition by matching the field description (surface roughness, weathering, separation, infill) to the table row (e.g. highly weathered, slightly rough surface rated 20)
5. For groundwater via the pressure-ratio route: compute joint water pressure as unit weight of water (9.81 kN/m3) times height of water above the tunnel (tunnel depth minus water table depth); compute in-situ vertical stress as rock unit weight (density x 9.81) times tunnel depth; take the ratio (e.g. 539 kPa / 1578 kPa = 0.34, which falls in the 0.2-0.5 band, rated 4)
6. Sum the five component ratings to get RMR (7+13+8+20+4 = 52 in the example) and assign the class (81-100 class A very good, 61-80 B, then C, D, and below 20 very poor)
7. For the tunnel adjustment, establish whether the drive is with-dip or against-dip: interpret the three-digit figure as dip direction and compare it with the tunnel drive azimuth; check which dip band applies (20-45 or 45-90 degrees)
8. Read the adjustment from the tunnel table (drive with dip at 40 degrees was 'favourable', subtract 2, giving adjusted RMR 50 in the example)

## Decision rules

- A strength of 75 MPa must be UCS, not point load index — point load values cannot be that high
- If a joint description straddles two table boxes, take the average of the two ratings using engineering judgment
- Higher/better property values always give higher component ratings; wetter conditions give lower groundwater ratings
- Support need and feasible roof span can be checked against the stand-up-time vs roof-span chart annotated with RMR values; most rock masses except high-quality ones require support

## Checks

- Confirm the sum uses all five components exactly once before applying the tunnel adjustment
- Confirm water pressure and stress use consistent units (kPa) before taking the ratio
- Confirm the three-digit orientation number was treated as dip direction and the two-digit as dip

## Common errors

- Reading the strength row as point load index when the quoted value is actually UCS
- Forgetting that the tunnel adjustment is a subtraction applied after summing the five components
- Using depth to tunnel instead of height of water column above the tunnel when computing joint water pressure

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Rating table band values are shown on screen — read exact band limits and ratings from the video; published RMR tables vary slightly between sources
- The stress used in the groundwater ratio is total vertical in-situ stress from rock unit weight times depth; the lecture does not discuss effective stress or horizontal stress ratios
- Some arithmetic in auto-captions is garbled (e.g. the in-situ stress figure); recompute rather than copying quoted numbers

## Standards cited

None cited in the source passage.

## Related

- [[Rock weathering classes]]
- [[Rock strength classes]]
- [[Groundwater observations]]
- [[Skills]]
