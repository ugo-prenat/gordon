import { CardTypeWithValues } from '@gordon/models';
import { driversTable } from '@services/drivers/drivers.schemas';
import { recordsTable } from '@services/records/records.schemas';
import { relations } from 'drizzle-orm';
import {
  integer,
  numeric,
  pgTable,
  serial,
  text,
  timestamp
} from 'drizzle-orm/pg-core';

export const driverCardsValuesTable = pgTable('driver_cards_values', {
  id: serial('id').primaryKey(),
  driverId: text('driver_id')
    .notNull()
    .references(() => driversTable.id),
  recordId: integer('record_id')
    .notNull()
    .references(() => recordsTable.id),
  type: text('type').$type<CardTypeWithValues>().notNull(),
  value: integer('value').notNull(),
  valueTrend: numeric('value_trend', { precision: 5, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
});

export const driverCardsValuesRelations = relations(
  driverCardsValuesTable,
  ({ one }) => ({
    driver: one(driversTable, {
      fields: [driverCardsValuesTable.driverId],
      references: [driversTable.id]
    }),
    record: one(recordsTable, {
      fields: [driverCardsValuesTable.recordId],
      references: [recordsTable.id]
    })
  })
);
