import { drizzle } from 'drizzle-orm/postgres-js/driver';
import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL!);
export const db = drizzle(sql);
