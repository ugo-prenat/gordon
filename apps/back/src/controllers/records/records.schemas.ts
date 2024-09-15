import { Championship, RaceResult } from '@gordon/models';
import { text, serial, integer, pgTable, timestamp } from 'drizzle-orm/pg-core';

export const recordsTable = pgTable('records', {
  id: serial('id').primaryKey(),
  driverId: text('driver_id').notNull(),
  year: integer('year').notNull(),
  team: text('team').notNull(),
  result: text('result').$type<RaceResult>().notNull(),
  circuitId: text('circuit_id').notNull(),
  championship: text('championship').$type<Championship>().notNull(),
  raceName: text('race_name'),
  raceRound: integer('race_round').notNull(),
  raceIndex: integer('race_index').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date())
});
