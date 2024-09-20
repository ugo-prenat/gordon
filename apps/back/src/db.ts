import { driversTable } from '@controllers/drivers/drivers.schemas';
import { recordsTable } from '@controllers/records/records.schemas';
import { drizzle } from 'drizzle-orm/postgres-js/driver';
import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL!);
export const db = drizzle(sql, {
  schema: { driversTable, recordsTable }
});
