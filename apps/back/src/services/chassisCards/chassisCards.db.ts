import { db } from '@db';
import { chassisCardsTable } from './chassisCards.schemas';
import {
  ICompleteDBChassisCard,
  IDBChassisCard,
  IInsertDBChassisCard,
  MarketCardFilters,
  PartialWithId
} from '@gordon/models';
import { and, between, desc, eq, inArray, sql } from 'drizzle-orm';
import { getDBChassisForMarket } from '@services/chassis/chassis.utils';

export const createDBChassisCard = (chassisCards: IInsertDBChassisCard[]) =>
  db
    .insert(chassisCardsTable)
    .values(chassisCards)
    .returning({ id: chassisCardsTable.id })
    .then((ids) => ids.map(({ id }) => id));

export const getDBChassisCards = (
  filters?: MarketCardFilters
): Promise<ICompleteDBChassisCard[]> =>
  getDBChassisForMarket(filters).then((chassisIds) =>
    db.query.chassisCardsTable.findMany({
      where: and(
        chassisIds
          ? inArray(chassisCardsTable.chassisId, chassisIds)
          : undefined,
        filters?.chassisId
          ? eq(chassisCardsTable.chassisId, filters.chassisId)
          : undefined,
        filters?.value?.max
          ? filters.value.min
            ? between(
                chassisCardsTable.value,
                filters.value.min,
                filters.value.max
              )
            : between(chassisCardsTable.value, 0, filters.value.max)
          : undefined,
        filters?.types
          ? inArray(chassisCardsTable.type, filters.types)
          : undefined
      ),
      with: { chassis: { with: { team: true } } },
      orderBy: [
        desc(
          sql`CASE 
            WHEN ${chassisCardsTable.type} = 'common' THEN 1
            WHEN ${chassisCardsTable.type} = 'rare' THEN 2
            WHEN ${chassisCardsTable.type} = 'unique' THEN 3
            WHEN ${chassisCardsTable.type} = 'champion' THEN 4
            WHEN ${chassisCardsTable.type} = 'vintage' THEN 5
            ELSE 6
          END`
        ),
        desc(chassisCardsTable.value)
      ]
    })
  );

export const getDBChassisCard = (
  id: string
): Promise<ICompleteDBChassisCard | undefined> =>
  db.query.chassisCardsTable.findFirst({
    where: eq(chassisCardsTable.id, id),
    with: { chassis: { with: { team: true } } }
  });

export const updateDBChassisCard = (
  chassisCard: PartialWithId<IDBChassisCard>
) =>
  db
    .update(chassisCardsTable)
    .set(chassisCard)
    .where(eq(chassisCardsTable.id, chassisCard.id));
