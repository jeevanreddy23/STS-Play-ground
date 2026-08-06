import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

type RuntimeEnv = {
  DB?: D1Database;
  PLANS?: R2Bucket;
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

export function getPlanBucket() {
  const bucket = runtimeEnv().PLANS;
  if (!bucket) {
    throw new Error("The site-plan upload store is unavailable.");
  }
  return bucket;
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
}
