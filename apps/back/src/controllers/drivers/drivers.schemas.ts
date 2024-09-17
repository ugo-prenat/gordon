import { Championship } from '@gordon/models';
import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  varchar
} from 'drizzle-orm/pg-core';

export const driversTable = pgTable('drivers', {
  id: text('id').primaryKey(),
  fullName: text('full_name').notNull(),
  tla: varchar('tla', { length: 3 }).notNull(),
  value: integer('value').notNull().default(-1),
  valueTrend: integer('value_trend').notNull().default(0),
  wikiKey: text('wiki_key').notNull().unique(),
  activeChampionship: text('active_championship')
    .$type<Championship>()
    .notNull(),
  recordedChampionships: text('recorded_championships')
    .array()
    .$type<Championship[]>()
    .notNull(),
  pictureUrl: text('picture_url').notNull(),
  nationalityCountryCode: text('nationality_country_code').notNull(),
  dateOfBirth: text('date_of_birth').notNull(),
  isActive: boolean('is_active').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date())
});
