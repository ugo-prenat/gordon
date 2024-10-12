ALTER TABLE "teams" RENAME COLUMN "logo_path" TO "light_logo_path";--> statement-breakpoint
ALTER TABLE "teams" ADD COLUMN "dark_logo_path" text DEFAULT '' NOT NULL;