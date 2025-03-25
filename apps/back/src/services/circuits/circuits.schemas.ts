import { integer, pgTable, point, text, timestamp } from 'drizzle-orm/pg-core';

export const circuitsTable = pgTable('circuits', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  svg: text('svg').notNull(),
  picturePath: text('picture_path').notNull(),
  countryCode: text('country_code').notNull(),
  f1LapRecord: integer('f1_lap_record').notNull(),
  coordinates: point('coordinates', { mode: 'tuple' }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
});
