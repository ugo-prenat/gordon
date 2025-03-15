import { Role } from '@gordon/models';
import {
  integer,
  pgTable,
  text,
  timestamp,
  boolean
} from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email'),
  password: text('password'),
  isGuest: boolean('is_guest').notNull(),
  role: text('role').$type<Role>().notNull(),
  credits: integer('credits').notNull().default(0),
  picturePath: text('picture_path').notNull().default(''),
  lastLogin: timestamp('last_login').notNull().defaultNow()
});
