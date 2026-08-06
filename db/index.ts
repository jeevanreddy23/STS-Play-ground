import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

type RuntimeEnv = {
  DB?: D1Database;
  PLANS?: R2Bucket | KVNamespace;
};

function runtimeEnv() {
  return env as unknown as RuntimeEnv;
}

export function getD1() {
  const database = runtimeEnv().DB;
  if (!database) {
    throw new Error("The pile inspection database is unavailable.");
  }
  return database;
}

function getPlanStore() {
  const store = runtimeEnv().PLANS;
  if (!store) {
    throw new Error("The site-plan upload store is unavailable.");
  }
  return store;
}

function isR2Bucket(store: R2Bucket | KVNamespace): store is R2Bucket {
  return "createMultipartUpload" in store;
}

export async function putPlanFile(fileKey: string, file: File) {
  const store = getPlanStore();
  if (isR2Bucket(store)) {
    await store.put(fileKey, file.stream(), {
      httpMetadata: { contentType: file.type },
      customMetadata: { originalName: file.name },
    });
    return;
  }
  await store.put(fileKey, await file.arrayBuffer(), {
    metadata: { contentType: file.type, originalName: file.name },
  });
}

export async function getPlanFile(fileKey: string) {
  const store = getPlanStore();
  if (isR2Bucket(store)) {
    const object = await store.get(fileKey);
    return object ? { body: object.body as BodyInit, etag: object.httpEtag } : null;
  }
  const value = await store.get(fileKey, "arrayBuffer");
  return value ? { body: value as BodyInit, etag: null } : null;
}

export async function deletePlanFile(fileKey: string) {
  await getPlanStore().delete(fileKey);
}

export function getDb() {
  return drizzle(getD1(), { schema });
}

export async function ensureSchema() {
  const database = getD1();
  await database.batch([
    database.prepare(`CREATE TABLE IF NOT EXISTS plans (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      file_key TEXT NOT NULL UNIQUE,
      content_type TEXT NOT NULL,
      size_bytes INTEGER NOT NULL,
      created_at TEXT NOT NULL
    )`),
    database.prepare(`CREATE TABLE IF NOT EXISTS piles (
      id TEXT PRIMARY KEY NOT NULL,
      plan_id TEXT NOT NULL REFERENCES plans(id) ON DELETE CASCADE,
      pile_id TEXT NOT NULL,
      plan_page INTEGER NOT NULL DEFAULT 1,
      x_norm REAL NOT NULL,
      y_norm REAL NOT NULL,
      marker_size_px INTEGER NOT NULL DEFAULT 24,
      status TEXT NOT NULL DEFAULT 'DRAFT',
      diameter_mm INTEGER,
      ground_rl_m REAL,
      design_tip_rl_m REAL,
      required_socket_m REAL,
      target_rock_class TEXT,
      bored_depth_m REAL,
      depth_to_rock_m REAL,
      base_sediment_mm REAL,
      water_status TEXT,
      outcome TEXT,
      comments TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )`),
    database.prepare("CREATE UNIQUE INDEX IF NOT EXISTS uq_piles_plan_pile_id ON piles(plan_id, pile_id)"),
    database.prepare("CREATE INDEX IF NOT EXISTS idx_piles_plan_id ON piles(plan_id)"),
  ]);

  const columns = await database.prepare("PRAGMA table_info(piles)").all<{ name: string }>();
  if (!(columns.results ?? []).some((column) => column.name === "marker_size_px")) {
    await database
      .prepare("ALTER TABLE piles ADD COLUMN marker_size_px INTEGER NOT NULL DEFAULT 24")
      .run();
  }
}
