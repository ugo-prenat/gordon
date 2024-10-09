ALTER TABLE "driver_cards" RENAME COLUMN "team_id" TO "team_name";--> statement-breakpoint
ALTER TABLE "drivers" ADD COLUMN "team_id" text DEFAULT 'trident' NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "drivers" ADD CONSTRAINT "drivers_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
