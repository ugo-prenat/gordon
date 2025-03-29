export interface IUserChassisCard {
  id: string;
  ownerId: string;
  cardId: string;
  purchaseValue: number;
  ownedAt: Date;
}

export interface IInsertDBUserChassisCard
  extends Omit<IUserChassisCard, 'id' | 'ownedAt'> {}

export interface IDBUserChassisCard extends IUserChassisCard {}
