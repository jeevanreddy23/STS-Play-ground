/* Headless verification of a built visualisation.
   Usage: node verify.js /abs/path/to/output.html /abs/path/to/shots-dir
   Needs: npm i playwright three@0.128 (three is used to serve the CDN request
   locally so the test doesn't depend on network). Chromium at
   /opt/pw-browsers/chromium with SwiftShader flags for WebGL. */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const [html, shots] = process.argv.slice(2);
  fs.mkdirSync(shots, { recursive: true });
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium',
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
  });
  const page = await browser.newPage({ viewport: { width: 1680, height: 980 } });
  const threeLocal = path.join(process.cwd(), 'node_modules/three/build/three.min.js');
  if (fs.existsSync(threeLocal)) {
    await page.route('https://cdnjs.cloudflare.com/**', route =>
      route.fulfill({ path: threeLocal, contentType: 'application/javascript' }));
  }
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });

  await page.goto('file://' + path.resolve(html));
  await page.waitForTimeout(2500);
  await page.screenshot({ path: path.join(shots, 'orbit.png') });
  await page.click('#view-seg button[data-v="plan"]');
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(shots, 'plan.png') });
  await page.click('#view-seg button[data-v="elev"]');
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(shots, 'elevation.png') });

  const stats = await page.evaluate(() => ({
    piles: piles.length,
    inspected: piles.filter(p => p.d != null).length,
    listRows: document.querySelectorAll('.prow').length,
    tableRows: document.querySelectorAll('#data-table tbody tr').length,
    title: document.getElementById('hdr-title').textContent,
  }));
  console.log(JSON.stringify(stats));
  console.log('JS ERRORS:', errors.length ? errors : 'none');
  await browser.close();
  process.exit(errors.length ? 1 : 0);
})();
