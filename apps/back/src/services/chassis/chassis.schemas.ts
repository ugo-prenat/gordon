import { teamsTable } from '@services/teams/teams.schemas';
import { Championship } from '@gordon/models';
import { relations } from 'drizzle-orm';
import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const chassisTable = pgTable('chassis', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  season: integer('season').notNull(),
  championship: text('championship').$type<Championship>().notNull(),
  teamId: text('team_id')
    .notNull()
    .references(() => teamsTable.id),
  picturePath: text('picture_path').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
});

export const chassisRelations = relations(chassisTable, ({ one }) => ({
  team: one(teamsTable, {
    fields: [chassisTable.teamId],
    references: [teamsTable.id]
  })
}));
