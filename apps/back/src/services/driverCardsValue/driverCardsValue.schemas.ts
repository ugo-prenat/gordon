import { CardTypeWithValues } from '@gordon/models';
import { driversTable } from '@services/drivers/drivers.schemas';
import { recordsTable } from '@services/records/records.schemas';
import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const driverCardsValueTable = pgTable('driver_cards_value', {
  id: serial('id').primaryKey(),
  driverId: text('driver_id')
    .notNull()
    .references(() => driversTable.id),
  recordId: integer('record_id')
    .notNull()
    .references(() => recordsTable.id),
  type: text('type').$type<CardTypeWithValues>().notNull(),
  value: integer('value').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
});

export const driverCardsValueRelations = relations(
  driverCardsValueTable,
  ({ one }) => ({
    driver: one(driversTable, {
      fields: [driverCardsValueTable.driverId],
      references: [driversTable.id]
    }),
    record: one(recordsTable, {
      fields: [driverCardsValueTable.recordId],
      references: [recordsTable.id]
    })
  })
);
