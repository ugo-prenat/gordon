ALTER TABLE "driver_cards_value" RENAME TO "driver_cards_values";--> statement-breakpoint
ALTER TABLE "driver_cards_values" DROP CONSTRAINT "driver_cards_value_driver_id_drivers_id_fk";
--> statement-breakpoint
ALTER TABLE "driver_cards_values" DROP CONSTRAINT "driver_cards_value_record_id_records_id_fk";
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
