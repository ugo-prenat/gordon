CREATE TABLE IF NOT EXISTS "circuits" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"svg" text NOT NULL,
	"picture_path" text NOT NULL,
	"country_code" text NOT NULL,
	"f1_lap_record" integer NOT NULL,
	"coordinates" "point" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
