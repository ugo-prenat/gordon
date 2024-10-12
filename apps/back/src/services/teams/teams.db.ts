import { db } from '@db';
import { IDBTeam, IInsertDBTeam, PartialWithId } from '@gordon/models';
import { teamsTable } from './teams.schemas';
import { eq } from 'drizzle-orm';

export const getDBTeams = (): Promise<IDBTeam[]> =>
  db.query.teamsTable.findMany();

export const getDBTeam = (id: string): Promise<IDBTeam | undefined> =>
  db.query.teamsTable.findFirst({
    where: eq(teamsTable.id, id),
    with: { parentTeam: true }
  });

export const createDBTeam = (team: IInsertDBTeam): Promise<string[]> =>
  db
    .insert(teamsTable)
    .values(team)
    .returning({ id: teamsTable.id })
    .then((ids) => ids.map(({ id }) => id));

export const updateDBTeam = ({
  id,
  ...team
}: PartialWithId<IDBTeam>): Promise<string[]> =>
  db
    .update(teamsTable)
    .set(team)
    .where(eq(teamsTable.id, id))
    .returning({ id: teamsTable.id })
    .then((ids) => ids.map(({ id }) => id));

export const deleteDBTeam = (id: string) =>
  db.delete(teamsTable).where(eq(teamsTable.id, id));
