import { index, integer, real, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const plans = sqliteTable("plans", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  fileKey: text("file_key").notNull().unique(),
  contentType: text("content_type").notNull(),
  sizeBytes: integer("size_bytes").notNull(),
  createdAt: text("created_at").notNull(),
});

export const piles = sqliteTable(
  "piles",
  {
    id: text("id").primaryKey(),
    planId: text("plan_id")
      .notNull()
      .references(() => plans.id, { onDelete: "cascade" }),
    pileId: text("pile_id").notNull(),
    planPage: integer("plan_page").notNull().default(1),
    xNorm: real("x_norm").notNull(),
    yNorm: real("y_norm").notNull(),
    markerSizePx: integer("marker_size_px").notNull().default(24),
    status: text("status").notNull().default("DRAFT"),
    diameterMm: integer("diameter_mm"),
    groundRlM: real("ground_rl_m"),
    designTipRlM: real("design_tip_rl_m"),
    requiredSocketM: real("required_socket_m"),
    targetRockClass: text("target_rock_class"),
    boredDepthM: real("bored_depth_m"),
    depthToRockM: real("depth_to_rock_m"),
    baseSedimentMm: real("base_sediment_mm"),
    waterStatus: text("water_status"),
    outcome: text("outcome"),
    comments: text("comments"),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
  },
  (table) => [
    uniqueIndex("uq_piles_plan_pile_id").on(table.planId, table.pileId),
    index("idx_piles_plan_id").on(table.planId),
  ],
);
