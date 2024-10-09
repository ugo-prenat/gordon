import { DriverCardType } from '@gordon/models';
import { driversTable } from '@services/drivers/drivers.schemas';
import { relations } from 'drizzle-orm';
import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const driverCardsTable = pgTable('driver_cards', {
  id: text('id').primaryKey(),
  driverId: text('driver_id')
    .notNull()
    .references(() => driversTable.id),
  teamName: text('team_name').notNull(),
  type: text('type').$type<DriverCardType>().notNull(),
  picturePath: text('picture_path').notNull(),
  description: text('description'),
  season: integer('season').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
});

export const driverCardsRelations = relations(driverCardsTable, ({ one }) => ({
  driver: one(driversTable, {
    fields: [driverCardsTable.driverId],
    references: [driversTable.id]
  })
}));
