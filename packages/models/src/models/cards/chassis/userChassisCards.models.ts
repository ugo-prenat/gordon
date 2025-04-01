import { ICompleteDBChassisCard, IMarketChassisCard } from '../../..';

export interface IUserChassisCard {
  id: string;
  ownerId: string;
  cardId: string;
  purchaseValue: number;
  ownedAt: string;
}

export interface IInsertDBUserChassisCard
  extends Omit<IUserChassisCard, 'id' | 'ownedAt'> {}

export interface IDBUserChassisCard extends Omit<IUserChassisCard, 'ownedAt'> {
  ownedAt: Date;
}

export interface ICompleteDBUserChassisCard extends IDBUserChassisCard {
  card: ICompleteDBChassisCard;
}

export interface ICompleteUserChassisCard extends IUserChassisCard {
  card: IMarketChassisCard;
}
