CREATE TABLE IF NOT EXISTS "driver_cards_value" (
	"id" text PRIMARY KEY NOT NULL,
	"driver_id" text NOT NULL,
	"record_id" integer NOT NULL,
	"type" text NOT NULL,
	"value" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "driver_cards_value" ADD CONSTRAINT "driver_cards_value_driver_id_drivers_id_fk" FOREIGN KEY ("driver_id") REFERENCES "public"."drivers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "driver_cards_value" ADD CONSTRAINT "driver_cards_value_record_id_records_id_fk" FOREIGN KEY ("record_id") REFERENCES "public"."records"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
