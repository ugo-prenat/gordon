ALTER TABLE "records" DROP CONSTRAINT "unique_record";--> statement-breakpoint
ALTER TABLE "records" ADD CONSTRAINT "unique_record" UNIQUE("driver_id","year","race_round","race_index");