# Pile Inspection 3D Viewer

Browser viewer that renders bored-pier inspection data as an interactive 3D
model. It draws only what the source documents assert: every value carries its
own state and provenance, and anything unknown stays unknown all the way to the
screen.

## Layers

```
schema.ts    canonical pile record; Field<T> carries value + state + source
calc.ts      deterministic geometry (no React, no I/O) - unit tested
validate.ts  engineering checks + cross-document reconciliation
scene/       React Three Fiber rendering - consumes calc output only
ui/          data entry, source panel, issue list
```

Nothing in `scene/` computes an engineering value, and no document parsing is
reachable from the rendering layer.

## Value states

`extracted` `calculated` `manual` `inferred` `verified` `conflicting` `missing`

A missing value is never replaced with a plausible one. When two sources
disagree the field becomes `conflicting`, both values are kept, and an engineer
resolves it — source priority orders the alternatives for review, it does not
pick a winner.

## Levels

Reduced Levels in metres, increasing upward, throughout. `rlToSceneY()` is the
only RL-to-scene conversion, so elevation direction cannot disagree between
piles, surfaces and labels. Vertical exaggeration is applied there and nowhere
else; it never touches the data.

Key identities, tested against hand calculations:

- pile length = pile-top RL − toe RL
- constructed socket = top-of-bedrock RL − toe RL
- socket compliance is `indeterminate` when the requirement is unknown — never a pass

## Commands

```bash
npm install
npm test        # 60 tests, calculations only, no DOM
npm run dev
npm run build   # emits to ../cloudflare_site/viewer
```

Headless render check (from the repo root, with the build served):

```bash
node qa-test/verify-viewer.js
```

## Current limitations

- Document ingestion is not built. Data is entered manually or loaded from the
  worked example in `core/sample.ts`.
- Design records are not loaded, so design-vs-constructed has nothing to
  compare against yet.
- No persistence; export is JSON only.
- Section view and photo linking are stubbed in the schema, not implemented.
- Coordinates from drawings are `drawing-derived`, never survey accuracy.
