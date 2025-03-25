ALTER TABLE "chassis" RENAME COLUMN "year" TO "season";--> statement-breakpoint
ALTER TABLE "chassis" ADD COLUMN "championship" text NOT NULL;