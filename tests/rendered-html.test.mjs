import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("contains the complete STS pile inspection workflow", async () => {
  const [page, css, migration] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../drizzle/0000_skinny_praxagora.sql", import.meta.url), "utf8"),
  ]);

  assert.match(page, /STS Playground/);
  assert.match(page, /Upload site plan/);
  assert.match(page, /Add pile marker/);
  assert.match(page, /Drag any pin to reposition it/);
  assert.match(page, /onPointerMove/);
  assert.match(page, /Socket achieved/);
  assert.match(page, /Save pile record/);
  assert.match(css, /\.pile-marker/);
  assert.match(migration, /CREATE TABLE `plans`/);
  assert.match(migration, /CREATE TABLE `piles`/);
  await access(new URL("../dist/server/index.js", import.meta.url));
});
