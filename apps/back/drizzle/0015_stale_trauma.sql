ALTER TABLE "driver_cards" RENAME COLUMN "team_name" TO "team_id";--> statement-breakpoint
ALTER TABLE "teams" ADD COLUMN "parent_team_id" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "driver_cards" ADD CONSTRAINT "driver_cards_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
