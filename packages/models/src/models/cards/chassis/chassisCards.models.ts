import {
  CardType,
  IDBChassis,
  IMarketChassis,
  WithDate,
  WithTeam
} from '../../..';

export interface IChassisCard {
  id: string;
  chassisId: string;
  multiplier: number;
  value: number;
  type: CardType;
}

export interface IInsertDBChassisCard
  extends Omit<IChassisCard, 'id' | 'multiplier'> {
  multiplier: string;
}

export interface IDBChassisCard
  extends WithDate<Omit<IChassisCard, 'multiplier'>> {
  multiplier: string;
}

export interface ICompleteDBChassisCard extends IDBChassisCard {
  chassis: WithTeam<IDBChassis>;
}

export interface IMarketChassisCard extends Omit<IChassisCard, 'chassisId'> {
  chassis: IMarketChassis;
}
