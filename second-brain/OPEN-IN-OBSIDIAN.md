---
title: Open in Obsidian
type: note
tags: [howto]
updated: 2026-07-29
---

# Open in Obsidian

1. Open Obsidian → **Open folder as vault**
2. Choose the folder this file is in (`STS-Second-Brain`)
3. Trust the vault when prompted — the only thing in `.obsidian/` is graph and
   appearance settings, no plugins or scripts

Graph view is on the left ribbon, or `Ctrl+G`. It comes pre-coloured by folder:

| Colour | Folder |
|---|---|
| Violet | the index |
| Blue | standards |
| Green | materials |
| Orange | methods |
| Red | decisions |
| Amber | reference library |
| Grey | templates |

Local graph (`Ctrl+Shift+G` or the note's ⋮ menu) shows what one note connects
to, which is usually more useful than the whole graph once the vault grows.

## Keeping it in step with the web viewer

The Markdown here is the source of truth. After editing, regenerate the web
viewer's index from the repo:

```bash
node scripts/build-vault-index.mjs
```

The repo copy lives at `sts-playground/second-brain/`. If you edit here and
there, they will drift — pick one as the working copy.

## Related

- [[Index]]
