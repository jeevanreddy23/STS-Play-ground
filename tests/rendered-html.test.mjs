import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker;
}

test("redirects the root to the exact supplied visualization", async () => {
  const worker = await loadWorker();
  const source = await readFile(
    new URL("public/pile-inspection-3d.html", projectRoot),
  );
  const assets = {
    fetch: async (request) => {
      const url = new URL(request.url);
      if (url.pathname === "/pile-inspection-3d.html") {
        return new Response(source, {
          headers: { "content-type": "text/html; charset=utf-8" },
        });
      }
      return new Response("Not found", { status: 404 });
    },
  };
  const context = {
    waitUntil() {},
    passThroughOnException() {},
  };

  const rootResponse = await worker.fetch(
    new Request("http://localhost/", { redirect: "manual" }),
    { ASSETS: assets },
    context,
  );
  assert.ok([307, 308].includes(rootResponse.status));
  assert.equal(
    new URL(rootResponse.headers.get("location")).pathname,
    "/pile-inspection-3d.html",
  );

  const assetResponse = await worker.fetch(
    new Request("http://localhost/pile-inspection-3d.html"),
    { ASSETS: assets },
    context,
  );
  assert.equal(assetResponse.status, 200);
  assert.deepEqual(Buffer.from(await assetResponse.arrayBuffer()), source);
});
