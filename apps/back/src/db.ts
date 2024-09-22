import { driversTable } from '@services/drivers/drivers.schemas';
import { recordsTable } from '@services/records/records.schemas';
import { drizzle } from 'drizzle-orm/postgres-js/driver';
import postgres from 'postgres';

const schema = { driversTable, recordsTable };

const sql = postgres(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
