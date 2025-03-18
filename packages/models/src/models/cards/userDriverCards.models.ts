export interface IUserDriverCard {
  xp: number;
  ownerId: string;
  cardId: string;
  ownedAt: Date;
}

export interface IInsertDBUserDriverCard
  extends Omit<IUserDriverCard, 'id' | 'ownedAt' | 'xp'> {}

export interface IDBUserDriverCard extends IUserDriverCard {
  id: number;
}
