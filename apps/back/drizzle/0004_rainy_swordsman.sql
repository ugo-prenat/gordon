CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text,
	"password" text,
	"is_guest" boolean NOT NULL,
	"role" text NOT NULL,
	"picture_path" text NOT NULL,
	"credits" integer DEFAULT 0 NOT NULL,
	"last_login" timestamp DEFAULT now() NOT NULL
);
