ALTER TABLE "driver_cards" ADD COLUMN "value" integer DEFAULT -1 NOT NULL;--> statement-breakpoint
ALTER TABLE "drivers" DROP COLUMN IF EXISTS "value";