import { IDBTeam, ITeam } from '@gordon/models';

export const formatTeamsToFront = (teams: IDBTeam[]) =>
  teams.map(formatTeamToFront);

export const formatTeamToFront = (team: IDBTeam): ITeam => {
  const { wikiNames, createdAt, ...rest } = team;
  return rest;
};
