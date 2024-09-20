ALTER TABLE "records" DROP COLUMN IF EXISTS "updated_at";--> statement-breakpoint
ALTER TABLE "records" ADD CONSTRAINT "unique_record" UNIQUE("year","race_round","race_index");