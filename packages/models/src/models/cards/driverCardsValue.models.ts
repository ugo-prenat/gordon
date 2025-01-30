import { WithDate } from '../../types/types';
import { IRecord } from '../records.models';
import { CardType, VINTAGE_CARD_TYPE } from './cards.models';

export interface IDriverCardValue {
  id: string;
  driverId: string;
  recordId: number;
  type: Omit<CardType, typeof VINTAGE_CARD_TYPE>;
  value: number;
}

export interface IInsertDBDriverCardValue extends IDriverCardValue {}

export interface IDBDriverCardValue extends WithDate<IDriverCardValue> {}

export interface IFrontDriverCardValue extends IDriverCardValue {
  record: IRecord;
  value: number;
}
