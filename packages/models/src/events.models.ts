import { SPORTS_TYPES } from '@repo/constants';
import { Championship, MotorsportChampionship } from './championships.models';

export type SportType = (typeof SPORTS_TYPES)[number];

export interface IEvent {
  id: string;
  sportType: SportType;
  championship: MotorsportChampionship;
  championshipName: string;
  eventName?: string;
  eventShortName?: string;
  startDate?: string;
  endDate?: string;
  sessions: ISession[];
}

export interface IMotorsportEvent extends IEvent {
  circuit: ICircuit;
  country: ICountry;
}

export interface IScheduleSession {
  sportType: SportType;
  championship: Championship;
  name: string;
  shortname: string;
  startTime: string;
  endTime: string;
  sessionEndsTomorrow: boolean;
  sessionStartedYesterday: boolean;
}

export interface IScheduleDay {
  date: string;
  sessions: IScheduleSession[][];
}

export interface ISession {
  name: string;
  shortname: string;
  code?: string;
  startTime: string;
  endTime: string;
  results: IResult[];
}

export interface ICircuit {
  name: string;
  id?: number;
  shortname?: string;
  imagePath?: string;
}

export interface ICountry {
  name: string;
  code?: string;
  flagImagePath?: string;
}

export interface IResult {
  driverId?: number;
  driverName: string;
  driverFullName?: string;
  driverTLA?: string;
  driverImagePath?: string;
}
