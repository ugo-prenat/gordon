import {
  IDBChassis,
  IMarketChassis,
  MarketCardFilters,
  WithTeam
} from '@gordon/models';
import { getDBChassis } from './chassis.db';

export const multipleFormatToMarketChassis = (
  chassis: WithTeam<IDBChassis>[]
): IMarketChassis[] => chassis.map(formatToMarketChassis);

export const formatToMarketChassis = (
  chassis: WithTeam<IDBChassis>
): IMarketChassis => {
  const { teamId, createdAt, ...card } = chassis;
  const { name, darkLogoPath, lightLogoPath } = chassis.team;

  return { ...card, team: { id: teamId, name, darkLogoPath, lightLogoPath } };
};

export const getDBChassisForMarket = (
  filters?: MarketCardFilters
): Promise<string[] | undefined> =>
  filters
    ? getDBChassis(filters).then((chassis) => chassis.map(({ id }) => id))
    : Promise.resolve(undefined);
