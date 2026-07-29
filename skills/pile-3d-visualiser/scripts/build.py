#!/usr/bin/env python3
"""Build a self-contained 3D pile-inspection visualisation from a config JSON.

Usage:
  python3 build.py config.json plan_image.png output.html [--logo logo.png]

The template lives at ../assets/template.html relative to this script.
The plan image is embedded as base64 and draped on the ground plane; pile
positions in the config are given in PIXELS of this exact image, so alignment
is guaranteed. The optional logo is downscaled to <=300px wide and embedded
in the header (a 1x1 transparent PNG is used if omitted).
"""
import base64, io, json, sys, os

def b64_png(path, max_w=None):
    try:
        from PIL import Image
        im = Image.open(path)
        if max_w and im.width > max_w:
            im.thumbnail((max_w, max_w))
        if im.mode not in ('RGB', 'RGBA'):
            im = im.convert('RGBA')
        buf = io.BytesIO()
        im.save(buf, 'PNG', optimize=True)
        return base64.b64encode(buf.getvalue()).decode(), im.size
    except ImportError:
        with open(path, 'rb') as f:
            return base64.b64encode(f.read()).decode(), (None, None)

BLANK = ('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJ'
         'AAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==')

def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    cfg_path, plan_path, out_path = args[0], args[1], args[2]
    logo_path = None
    if '--logo' in sys.argv:
        logo_path = sys.argv[sys.argv.index('--logo') + 1]

    cfg = json.load(open(cfg_path))
    plan_b64, (w, h) = b64_png(plan_path)
    if w and (cfg.get('img_w') != w or cfg.get('img_h') != h):
        print(f'note: setting img_w/img_h from image: {w}x{h}')
        cfg['img_w'], cfg['img_h'] = w, h
    assert cfg.get('img_w') and cfg.get('img_h'), 'config needs img_w/img_h'
    assert cfg.get('px_per_m'), 'config needs px_per_m'
    assert cfg.get('piles'), 'config needs piles[]'
    for p in cfg['piles']:
        for k in ('id', 'group', 'dia', 'px', 'py'):
            assert k in p, f'pile missing {k}: {p}'

    logo_b64 = BLANK
    if logo_path:
        logo_b64, _ = b64_png(logo_path, max_w=300)

    tpl_path = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                            '..', 'assets', 'template.html')
    html = open(tpl_path).read()
    html = html.replace('__CONFIG_JSON__', json.dumps(cfg))
    html = html.replace('__PLAN_B64__', 'data:image/png;base64,' + plan_b64)
    html = html.replace('__LOGO_B64__', 'data:image/png;base64,' + logo_b64)
    open(out_path, 'w').write(html)
    insp = [p for p in cfg['piles'] if p.get('depth') is not None]
    print(f'wrote {out_path}: {len(html):,} bytes, '
          f'{len(insp)}/{len(cfg["piles"])} piles inspected')

if __name__ == '__main__':
    main()
