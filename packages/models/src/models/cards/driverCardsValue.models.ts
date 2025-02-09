import { WithDate } from '../../types/types';
import { IRecord } from '../records.models';
import { CardTypeWithValues } from './cards.models';

export interface IDriverCardValue {
  id: number;
  driverId: string;
  recordId: number;
  type: CardTypeWithValues;
  value: number;
}

export interface IInsertDBDriverCardValue
  extends Omit<IDriverCardValue, 'id'> {}

export interface IDBDriverCardValue extends WithDate<IDriverCardValue> {}

export interface IFrontDriverCardValue extends IDriverCardValue {
  record: IRecord;
}
