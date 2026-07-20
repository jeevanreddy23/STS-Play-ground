# GeoLogs automated rock logging

GeoLogs is a computer-vision prototype that converts core or rock-face imagery into a reviewable draft defect register.

## Features

- browser deployment on Cloudflare Workers;
- local Python/OpenCV prototype with Streamlit UI;
- image upload and same-view consolidation;
- candidate detection for joints, bedding planes (BP), mechanical edges and blast/handling fractures;
- AS 1726-aligned review vocabulary;
- CSV and JSON evidence export;
- explicit human review for weathering, strength and final engineering interpretation.

## Local run

```powershell
python -m streamlit run rock_logger_app.py
```

## Cloudflare deployment

```powershell
npx wrangler deploy --config wrangler.jsonc --keep-vars
```

Live app: https://sts-play-ground.poreddyjeevanreddy.workers.dev

This is a triage aid and not a certified geological interpretation. Confirm scale, orientation, structural continuity, field observations, test data and final terminology before issue.
