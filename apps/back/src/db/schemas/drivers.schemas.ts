import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const driversTable = pgTable('drivers', {
  id: uuid('id').defaultRandom().primaryKey(),
  fullName: text('full_name').notNull(),
  wikiKey: text('wiki_key').notNull().unique(),
  activeChampionship: text('active_championship').notNull(),
  recordedChampionships: text('recorded_championships').array().notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date())
});

export type IInsertDBDriver = typeof driversTable.$inferInsert;
export type IDBDriver = typeof driversTable.$inferSelect;
