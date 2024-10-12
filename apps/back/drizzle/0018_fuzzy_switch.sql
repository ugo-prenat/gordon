DO $$ BEGIN
 ALTER TABLE "teams" ADD CONSTRAINT "teams_parent_team_id_teams_id_fk" FOREIGN KEY ("parent_team_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
