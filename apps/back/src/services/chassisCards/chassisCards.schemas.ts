import { CardType } from '@gordon/models';
import { chassisTable } from '@services/chassis/chassis.schemas';
import { relations } from 'drizzle-orm';
import {
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
  integer
} from 'drizzle-orm/pg-core';

export const chassisCardsTable = pgTable('chassis_cards', {
  id: uuid('id').primaryKey().defaultRandom(),
  chassisId: text('chassis_id')
    .notNull()
    .references(() => chassisTable.id),
  multiplier: numeric('multiplier', { precision: 3, scale: 1 }).notNull(),
  value: integer('value').notNull(),
  type: text('type').$type<CardType>().notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
});

export const chassisCardsRelations = relations(
  chassisCardsTable,
  ({ one }) => ({
    chassis: one(chassisTable, {
      fields: [chassisCardsTable.chassisId],
      references: [chassisTable.id]
    })
  })
);
