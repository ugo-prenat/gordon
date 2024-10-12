import { WithDate } from '../types/types';

export interface ITeam {
  id: string;
  name: string;
  lightLogoPath: string;
  darkLogoPath: string;
  parentTeamId: string | null;
}

export interface IInsertDBTeam extends ITeam {
  wikiNames: string[];
}

export interface IDBTeam extends WithDate<ITeam> {
  wikiNames: string[];
}

export type WithTeam<T> = T & { team: ITeam };
export type WithParentTeam<T> = T & { parentTeam: ITeam | null };
