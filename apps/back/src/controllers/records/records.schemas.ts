import { Championship, RaceKey, RaceResult } from '@gordon/models';
import {
  uuid,
  text,
  serial,
  integer,
  pgTable,
  timestamp
} from 'drizzle-orm/pg-core';

export const recordsTable = pgTable('records', {
  id: serial('id').primaryKey(),
  driverId: uuid('driver_id').notNull(),
  year: integer('year').notNull(),
  team: text('team').notNull(),
  result: text('result').$type<RaceResult>().notNull(),
  circuitId: text('circuit_id').notNull(),
  championship: text('championship').$type<Championship>().notNull(),
  raceName: text('race_name').notNull(),
  raceKey: text('race_key').$type<RaceKey>().notNull(),
  raceRound: integer('race_round').notNull(),
  raceIndex: integer('race_index').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date())
});

export type IInsertDBRecord = typeof recordsTable.$inferInsert;
export type IDBRecord = typeof recordsTable.$inferSelect;
export type IRecord = Omit<
  IDBRecord,
  'updatedAt' | 'createdAt' | 'raceName' | 'raceKey' | 'raceRound' | 'raceIndex'
> & {
  race: {
    name: string;
    key: RaceKey;
    round: number;
    index: number;
  };
};
