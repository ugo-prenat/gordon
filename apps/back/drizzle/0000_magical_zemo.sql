CREATE TABLE IF NOT EXISTS "driver_cards" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"driver_id" text NOT NULL,
	"team_id" text NOT NULL,
	"type" text NOT NULL,
	"picture_path" text NOT NULL,
	"description" text,
	"season" integer NOT NULL,
	"championship" text NOT NULL,
	"value" integer DEFAULT -1 NOT NULL,
	"value_trend" smallint NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "driver_cards_values" (
	"id" serial PRIMARY KEY NOT NULL,
	"driver_id" text NOT NULL,
	"record_id" integer NOT NULL,
	"type" text NOT NULL,
	"value" integer NOT NULL,
	"value_trend" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "drivers" (
	"id" text PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"tla" varchar(3) NOT NULL,
	"wiki_key" text NOT NULL,
	"active_championship" text NOT NULL,
	"recorded_championships" text[] NOT NULL,
	"picture_path" text NOT NULL,
	"number_logo_path" text,
	"nationality_country_code" text NOT NULL,
	"date_of_birth" text NOT NULL,
	"is_active" boolean NOT NULL,
	"team_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
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
	"score" numeric(5, 2) NOT NULL,
	"avg_score" numeric(5, 2),
	"race_key" text NOT NULL,
	"race_name" text,
	"race_round" integer NOT NULL,
	"race_index" integer NOT NULL,
	"race_country_code" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "unique_record" UNIQUE("driver_id","year","race_round","race_index")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "teams" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"parent_team_id" text,
	"light_logo_path" text NOT NULL,
	"dark_logo_path" text NOT NULL,
	"wiki_names" text[] NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "driver_cards" ADD CONSTRAINT "driver_cards_driver_id_drivers_id_fk" FOREIGN KEY ("driver_id") REFERENCES "public"."drivers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "driver_cards" ADD CONSTRAINT "driver_cards_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "driver_cards_values" ADD CONSTRAINT "driver_cards_values_driver_id_drivers_id_fk" FOREIGN KEY ("driver_id") REFERENCES "public"."drivers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "driver_cards_values" ADD CONSTRAINT "driver_cards_values_record_id_records_id_fk" FOREIGN KEY ("record_id") REFERENCES "public"."records"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "drivers" ADD CONSTRAINT "drivers_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teams" ADD CONSTRAINT "teams_parent_team_id_teams_id_fk" FOREIGN KEY ("parent_team_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
