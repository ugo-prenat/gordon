import { db } from '@db';
import { circuitsTable } from './circuits.schemas';
import { IDBCircuit, IInsertDBCircuit } from '@gordon/models';
import { eq } from 'drizzle-orm';

export const createDBCircuit = (
  circuits: IInsertDBCircuit[]
): Promise<IDBCircuit[]> =>
  db.insert(circuitsTable).values(circuits).returning();

export const getDBCircuits = (): Promise<IDBCircuit[]> =>
  db.query.circuitsTable.findMany();

export const getDBCircuit = (id: string): Promise<IDBCircuit | undefined> =>
  db.query.circuitsTable.findFirst({
    where: eq(circuitsTable.id, id)
  });
