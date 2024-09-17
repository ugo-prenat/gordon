CREATE TABLE IF NOT EXISTS "drivers" (
	"id" text PRIMARY KEY NOT NULL,
	"team_id" text NOT NULL,
	"full_name" text NOT NULL,
	"tla" varchar(3) NOT NULL,
	"wiki_key" text NOT NULL,
	"active_championship" text NOT NULL,
	"recorded_championships" text[] NOT NULL,
	"picture_url" text NOT NULL,
	"nationality_country_code" text NOT NULL,
	"date_of_birth" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "drivers_wiki_key_unique" UNIQUE("wiki_key")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "records" (
	"id" serial PRIMARY KEY NOT NULL,
	"driver_id" text NOT NULL,
	"year" integer NOT NULL,
	"team" text NOT NULL,
	"result" text NOT NULL,
	"circuit_id" text NOT NULL,
	"championship" text NOT NULL,
	"race_key" text NOT NULL,
	"race_name" text,
	"race_round" integer NOT NULL,
	"race_index" integer NOT NULL,
	"score" numeric(5, 2) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
