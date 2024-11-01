ALTER TABLE "drivers" RENAME COLUMN "full_name" TO "first_name";--> statement-breakpoint
ALTER TABLE "drivers" ALTER COLUMN "first_name" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "drivers" ADD COLUMN "last_name" text DEFAULT '' NOT NULL;