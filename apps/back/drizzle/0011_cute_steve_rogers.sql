CREATE TABLE IF NOT EXISTS "chassis_cards" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"chassis_id" text NOT NULL,
	"multiplier" numeric(3, 1) NOT NULL,
	"value" integer NOT NULL,
	"type" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chassis_cards" ADD CONSTRAINT "chassis_cards_chassis_id_chassis_id_fk" FOREIGN KEY ("chassis_id") REFERENCES "public"."chassis"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
