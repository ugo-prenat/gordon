export interface IUserDriverCard {
  xp: number;
  ownerId: string;
  cardId: string;
  purchaseValue: number;
  ownedAt: Date;
}

export interface IInsertDBUserDriverCard
  extends Omit<IUserDriverCard, 'ownedAt' | 'xp'> {}

export interface IDBUserDriverCard extends IUserDriverCard {
  id: number;
}
