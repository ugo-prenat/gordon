CREATE TABLE IF NOT EXISTS "drivers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" text NOT NULL,
	"wiki_key" text NOT NULL,
	"active_championship" text NOT NULL,
	"recorded_championships" text[] NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "drivers_wiki_key_unique" UNIQUE("wiki_key")
);
