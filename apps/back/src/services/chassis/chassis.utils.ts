import { IDBChassis, IMarketChassis, WithTeam } from '@gordon/models';

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
