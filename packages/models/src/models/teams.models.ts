import { WithDate } from '../types/types';

export interface ITeam {
  id: string;
  name: string;
  wikiNames: string[];
  logoPath: string;
}

export interface IInsertDBTeam extends ITeam {}

export interface IDBTeam extends WithDate<ITeam> {}
