CREATE TABLE IF NOT EXISTS "driver_cards" (
	"id" text PRIMARY KEY NOT NULL,
	"driver_id" text NOT NULL,
	"team_id" text NOT NULL,
	"type" text NOT NULL,
	"picture_url" text NOT NULL,
	"description" text,
	"season" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
