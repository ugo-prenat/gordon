ALTER TABLE "driver_cards" ADD COLUMN "value_trend" smallint DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "records" ADD COLUMN "score_trend" smallint DEFAULT 0 NOT NULL;