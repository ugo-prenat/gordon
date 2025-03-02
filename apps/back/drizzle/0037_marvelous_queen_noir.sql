ALTER TABLE "driver_cards_values" ADD COLUMN "value_trend" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "records" DROP COLUMN IF EXISTS "score_trend";