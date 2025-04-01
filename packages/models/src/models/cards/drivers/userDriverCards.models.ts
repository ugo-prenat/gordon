import {
  IDBDriverCard,
  IMarketDriverCard,
  WithDriver,
  WithTeam
} from '../../..';

export interface IUserDriverCard {
  id: string;
  xp: number;
  ownerId: string;
  cardId: string;
  purchaseValue: number;
  ownedAt: string;
}

export interface IInsertDBUserDriverCard
  extends Omit<IUserDriverCard, 'id' | 'ownedAt' | 'xp'> {}

export interface IDBUserDriverCard extends Omit<IUserDriverCard, 'ownedAt'> {
  ownedAt: Date;
}

export interface ICompleteDBUserDriverCard extends IDBUserDriverCard {
  card: WithDriver<WithTeam<IDBDriverCard>>;
}

export interface ICompleteUserDriverCard extends IUserDriverCard {
  card: IMarketDriverCard;
}
