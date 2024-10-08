CREATE TABLE IF NOT EXISTS "teams" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"logo_path" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
