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

export interface IDBUserDriverCard extends IUserDriverCard {}
