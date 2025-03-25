import { WithDate } from '../../../types/types';
import { IRecord } from '../../records.models';
import { CardTypeWithValues } from '../cards.models';

export interface IDriverCardValue {
  id: number;
  driverId: string;
  recordId: number;
  type: CardTypeWithValues;
  value: number;
  valueTrend: number;
}

export interface IInsertDBDriverCardValue
  extends Omit<IDriverCardValue, 'id'> {}

export interface IDBDriverCardValue extends WithDate<IDriverCardValue> {}

export interface IFrontDriverCardValue
  extends Omit<IDriverCardValue, 'recordId' | 'driverId'> {
  record: IRecord;
}

export const DRIVER_CARDS_VALUES_TIME_RANGE_OPTIONS = [
  'all',
  'last-2-seasons',
  'last-season',
  'last-10-races'
] as const;

export type DriverCardsValuesTimeRange =
  (typeof DRIVER_CARDS_VALUES_TIME_RANGE_OPTIONS)[number];

export const DEFAULT_DRIVER_CARDS_VALUES_TIME_RANGE: DriverCardsValuesTimeRange =
  'last-2-seasons';
