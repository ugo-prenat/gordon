import { Championship, RaceKey, RaceResult } from '@gordon/models';
import {
  text,
  serial,
  integer,
  pgTable,
  timestamp,
  numeric
} from 'drizzle-orm/pg-core';

export const recordsTable = pgTable('records', {
  id: serial('id').primaryKey(),
  driverId: text('driver_id').notNull(),
  year: integer('year').notNull(),
  team: text('team').notNull(),
  result: text('result').$type<RaceResult>().notNull(),
  circuitId: text('circuit_id').notNull(),
  championship: text('championship').$type<Championship>().notNull(),
  score: numeric('score', { precision: 5, scale: 2 }).notNull(),
  raceKey: text('race_key').$type<RaceKey>().notNull(),
  raceName: text('race_name'),
  raceRound: integer('race_round').notNull(),
  raceIndex: integer('race_index').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
});
