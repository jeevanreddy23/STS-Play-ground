CREATE TABLE `piles` (
	`id` text PRIMARY KEY NOT NULL,
	`plan_id` text NOT NULL,
	`pile_id` text NOT NULL,
	`plan_page` integer DEFAULT 1 NOT NULL,
	`x_norm` real NOT NULL,
	`y_norm` real NOT NULL,
	`status` text DEFAULT 'DRAFT' NOT NULL,
	`diameter_mm` integer,
	`ground_rl_m` real,
	`design_tip_rl_m` real,
	`required_socket_m` real,
	`target_rock_class` text,
	`bored_depth_m` real,
	`depth_to_rock_m` real,
	`base_sediment_mm` real,
	`water_status` text,
	`outcome` text,
	`comments` text,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	FOREIGN KEY (`plan_id`) REFERENCES `plans`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `uq_piles_plan_pile_id` ON `piles` (`plan_id`,`pile_id`);--> statement-breakpoint
CREATE INDEX `idx_piles_plan_id` ON `piles` (`plan_id`);--> statement-breakpoint
CREATE TABLE `plans` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`file_key` text NOT NULL,
	`content_type` text NOT NULL,
	`size_bytes` integer NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `plans_file_key_unique` ON `plans` (`file_key`);