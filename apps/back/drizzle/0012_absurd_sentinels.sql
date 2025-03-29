CREATE TABLE IF NOT EXISTS "user_chassis_cards" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_id" text NOT NULL,
	"card_id" uuid NOT NULL,
	"purchase_value" integer NOT NULL,
	"owned_at" timestamp DEFAULT now() NOT NULL
);
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
