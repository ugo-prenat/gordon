import { driversTable } from '@services/drivers/drivers.schemas';
import { relations } from 'drizzle-orm';
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const teamsTable = pgTable('teams', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  logoPath: text('logo_path').notNull(),
  wikiNames: text('wiki_names').array().notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
});

export const teamsRelations = relations(teamsTable, ({ many }) => ({
  drivers: many(driversTable)
}));
