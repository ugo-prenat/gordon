import {
  driverCardsRelations,
  driverCardsTable
} from '@services/driverCards/driverCards.schemas';
import {
  driversRelations,
  driversTable
} from '@services/drivers/drivers.schemas';
import {
  recordsRelations,
  recordsTable
} from '@services/records/records.schemas';
import { drizzle } from 'drizzle-orm/postgres-js/driver';
import postgres from 'postgres';

const schema = {
  driversTable,
  driversRelations,

  recordsTable,
  recordsRelations,

  driverCardsTable,
  driverCardsRelations
};

const sql = postgres(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
