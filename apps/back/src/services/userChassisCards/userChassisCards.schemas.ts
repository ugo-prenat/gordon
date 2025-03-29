import { chassisCardsTable } from '@services/chassisCards/chassisCards.schemas';
import { usersTable } from '@services/users/users.schemas';
import { relations } from 'drizzle-orm';
import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const userChassisCardsTable = pgTable('user_chassis_cards', {
  id: uuid('id').primaryKey().defaultRandom(),
  ownerId: text('owner_id')
    .notNull()
    .references(() => usersTable.id),
  cardId: uuid('card_id')
    .notNull()
    .references(() => chassisCardsTable.id),
  purchaseValue: integer('purchase_value').notNull(),
  ownedAt: timestamp('owned_at').notNull().defaultNow()
});

export const userChassisCardsRelations = relations(
  userChassisCardsTable,
  ({ one }) => ({
    owner: one(usersTable, {
      fields: [userChassisCardsTable.ownerId],
      references: [usersTable.id]
    }),
    card: one(chassisCardsTable, {
      fields: [userChassisCardsTable.cardId],
      references: [chassisCardsTable.id]
    })
  })
);
