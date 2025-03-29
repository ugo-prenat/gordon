CREATE TABLE IF NOT EXISTS "chassis" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"season" integer NOT NULL,
	"championship" text NOT NULL,
	"team_id" text NOT NULL,
	"picture_path" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chassis_cards" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"chassis_id" text NOT NULL,
	"multiplier" numeric(3, 1) NOT NULL,
	"value" integer NOT NULL,
	"type" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "circuits" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"svg" text NOT NULL,
	"picture_path" text NOT NULL,
	"country_code" text NOT NULL,
	"f1_lap_record" integer NOT NULL,
	"coordinates" "point" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
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
	"value_trend" numeric(5, 2) DEFAULT '0' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "driver_cards_values" (
	"id" serial PRIMARY KEY NOT NULL,
	"driver_id" text NOT NULL,
	"record_id" integer NOT NULL,
	"type" text NOT NULL,
	"value" integer NOT NULL,
	"value_trend" numeric(5, 2) NOT NULL,
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
CREATE TABLE IF NOT EXISTS "user_chassis_cards" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_id" text NOT NULL,
	"card_id" uuid NOT NULL,
	"purchase_value" integer NOT NULL,
	"owned_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_driver_cards" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"xp" integer DEFAULT 0 NOT NULL,
	"owner_id" text NOT NULL,
	"card_id" uuid NOT NULL,
	"purchase_value" integer NOT NULL,
	"owned_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text,
	"password" text,
	"is_guest" boolean NOT NULL,
	"role" text NOT NULL,
	"credits" integer DEFAULT 0 NOT NULL,
	"picture_path" text DEFAULT '' NOT NULL,
	"last_login" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chassis" ADD CONSTRAINT "chassis_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chassis_cards" ADD CONSTRAINT "chassis_cards_chassis_id_chassis_id_fk" FOREIGN KEY ("chassis_id") REFERENCES "public"."chassis"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
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
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_chassis_cards" ADD CONSTRAINT "user_chassis_cards_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_chassis_cards" ADD CONSTRAINT "user_chassis_cards_card_id_chassis_cards_id_fk" FOREIGN KEY ("card_id") REFERENCES "public"."chassis_cards"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_driver_cards" ADD CONSTRAINT "user_driver_cards_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_driver_cards" ADD CONSTRAINT "user_driver_cards_card_id_driver_cards_id_fk" FOREIGN KEY ("card_id") REFERENCES "public"."driver_cards"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
