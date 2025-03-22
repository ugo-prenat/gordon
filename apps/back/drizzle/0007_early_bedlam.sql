ALTER TABLE "user_driver_cards" ALTER COLUMN "owner_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user_driver_cards" ALTER COLUMN "card_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user_driver_cards" ADD COLUMN "purchase_value" integer NOT NULL;