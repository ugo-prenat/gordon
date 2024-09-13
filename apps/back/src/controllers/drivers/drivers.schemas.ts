import { Championship } from '@gordon/models';
import { pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const driversTable = pgTable('drivers', {
  id: uuid('id').defaultRandom().primaryKey(),
  fullName: text('full_name').notNull(),
  tla: varchar('tla', { length: 3 }).notNull(),
  wikiKey: text('wiki_key').notNull().unique(),
  activeChampionship: text('active_championship')
    .$type<Championship>()
    .notNull(),
  recordedChampionships: text('recorded_championships')
    .array()
    .$type<Championship[]>()
    .notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date())
});

export type IInsertDBDriver = typeof driversTable.$inferInsert;
export type IDBDriver = typeof driversTable.$inferSelect;
export type IDriver = Omit<IDBDriver, 'updatedAt' | 'createdAt'>;
