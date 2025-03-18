CREATE TABLE IF NOT EXISTS "user_driver_cards" (
	"id" serial PRIMARY KEY NOT NULL,
	"xp" integer DEFAULT 0 NOT NULL,
	"owner_id" text,
	"card_id" uuid,
	"owned_at" timestamp DEFAULT now() NOT NULL
);
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
