import { recordsTable } from '@services/records/records.schemas';
import { Championship } from '@gordon/models';
import { relations } from 'drizzle-orm';
import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  varchar
} from 'drizzle-orm/pg-core';
import { teamsTable } from '@services/teams/teams.schemas';

export const driversTable = pgTable('drivers', {
  id: text('id').primaryKey(),
  fullName: text('full_name').notNull(),
  tla: varchar('tla', { length: 3 }).notNull(),
  value: integer('value').notNull().default(-1),
  wikiKey: text('wiki_key').notNull().unique(),
  activeChampionship: text('active_championship')
    .$type<Championship>()
    .notNull(),
  recordedChampionships: text('recorded_championships')
    .array()
    .$type<Championship[]>()
    .notNull(),
  picturePath: text('picture_path').notNull(),
  numberLogoUrl: text('number_logo_url'),
  nationalityCountryCode: text('nationality_country_code').notNull(),
  dateOfBirth: text('date_of_birth').notNull(),
  isActive: boolean('is_active').notNull(),
  teamId: text('team_id')
    .notNull()
    .references(() => teamsTable.id),
  createdAt: timestamp('created_at').notNull().defaultNow()
});

export const driversRelations = relations(driversTable, ({ many, one }) => ({
  records: many(recordsTable),
  team: one(teamsTable, {
    fields: [driversTable.teamId],
    references: [teamsTable.id]
  })
}));
