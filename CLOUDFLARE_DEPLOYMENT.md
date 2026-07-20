# Cloudflare deployment

The deployable Cloudflare version is in `cloudflare_site/index.html`.

It runs image handling and the explainable candidate detector in the user's browser using OpenCV.js, so it does not need a Python server or a database. The original Streamlit/OpenCV version remains available locally for richer Python-side development.

## Deploy

```powershell
npx wrangler deploy --config wrangler.jsonc --keep-vars
```

The command returns the public `*.workers.dev` URL. The local Wrangler session must have Workers write access.

## Notes

- Multiple uploads use a same-view contact-sheet fallback in the browser. The Python prototype contains the more ambitious panorama-stitching path.
- The browser version is a reviewable triage tool, not a trained geological segmentation model.
- Image-only weathering and strength are intentionally review fields.
