import { Championship } from '@gordon/models';
import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const driversTable = pgTable('drivers', {
  id: text('id').primaryKey(),
  teamId: text('team_id').notNull(),
  fullName: text('full_name').notNull(),
  tla: varchar('tla', { length: 3 }).notNull(),
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
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date())
});
