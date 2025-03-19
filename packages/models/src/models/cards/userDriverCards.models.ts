export interface IUserDriverCard {
  xp: number;
  ownerId: string;
  cardId: string;
  ownedAt: string;
}

export interface IInsertDBUserDriverCard
  extends Omit<IUserDriverCard, 'id' | 'ownedAt' | 'xp'> {}

export interface IDBUserDriverCard extends IUserDriverCard {
  id: number;
}
