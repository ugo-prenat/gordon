import { drizzle } from 'drizzle-orm/postgres-js/driver';
import postgres from 'postgres';
import schema from './schemas';

const sql = postgres(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
