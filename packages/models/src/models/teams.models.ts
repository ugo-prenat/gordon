import { WithDate } from '../types/types';

export interface ITeam {
  id: string;
  name: string;
  wikiNames: string[];
  lightLogoPath: string;
  darkLogoPath: string;
  parentTeamId: string | null;
}

export interface IInsertDBTeam extends ITeam {}

export interface IDBTeam extends WithDate<ITeam> {}

export type WithTeam<T> = T & { team: ITeam };
export type WithParentTeam<T> = T & { parentTeam: ITeam | null };
