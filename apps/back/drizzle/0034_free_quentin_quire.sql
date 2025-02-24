ALTER TABLE "driver_cards" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "driver_cards" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();