import { driversTable } from '@services/drivers/drivers.schemas';
import { relations } from 'drizzle-orm';
import { AnyPgColumn, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const teamsTable = pgTable('teams', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  parentTeamId: text('parent_team_id').references(
    (): AnyPgColumn => teamsTable.id
  ),
  lightLogoPath: text('light_logo_path').notNull(),
  darkLogoPath: text('dark_logo_path').notNull(),
  wikiNames: text('wiki_names').array().notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
});

export const teamsRelations = relations(teamsTable, ({ many, one }) => ({
  drivers: many(driversTable),
  parentTeam: one(teamsTable, {
    fields: [teamsTable.parentTeamId],
    references: [teamsTable.id]
  })
}));
