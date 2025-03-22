import { driverCardsTable } from '@services/driverCards/driverCards.schemas';
import { usersTable } from '@services/users/users.schemas';
import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uuid
} from 'drizzle-orm/pg-core';

export const userDriverCardsTable = pgTable('user_driver_cards', {
  id: serial('id').primaryKey(),
  xp: integer('xp').notNull().default(0),
  ownerId: text('owner_id')
    .notNull()
    .references(() => usersTable.id),
  cardId: uuid('card_id')
    .notNull()
    .references(() => driverCardsTable.id),
  purchaseValue: integer('purchase_value').notNull(),
  ownedAt: timestamp('owned_at').notNull().defaultNow()
});

export const userDriverCardsRelations = relations(
  userDriverCardsTable,
  ({ one }) => ({
    owner: one(usersTable, {
      fields: [userDriverCardsTable.ownerId],
      references: [usersTable.id]
    }),
    card: one(driverCardsTable, {
      fields: [userDriverCardsTable.cardId],
      references: [driverCardsTable.id]
    })
  })
);
