import { Championship, CardType } from '@gordon/models';
import { driversTable } from '@services/drivers/drivers.schemas';
import { teamsTable } from '@services/teams/teams.schemas';
import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  smallint,
  text,
  timestamp,
  uuid
} from 'drizzle-orm/pg-core';

export const driverCardsTable = pgTable('driver_cards', {
  id: uuid('id').primaryKey().defaultRandom(),
  driverId: text('driver_id')
    .notNull()
    .references(() => driversTable.id),
  teamId: text('team_id')
    .notNull()
    .references(() => teamsTable.id),
  type: text('type').$type<CardType>().notNull(),
  picturePath: text('picture_path').notNull(),
  description: text('description'),
  season: integer('season').notNull(),
  championship: text('championship').$type<Championship>().notNull(),
  value: integer('value').notNull().default(-1),
  valueTrend: smallint('value_trend').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
});

export const driverCardsRelations = relations(driverCardsTable, ({ one }) => ({
  driver: one(driversTable, {
    fields: [driverCardsTable.driverId],
    references: [driversTable.id]
  }),
  team: one(teamsTable, {
    fields: [driverCardsTable.teamId],
    references: [teamsTable.id]
  })
}));
