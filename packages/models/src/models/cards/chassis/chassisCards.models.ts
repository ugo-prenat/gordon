import { z } from 'zod';
import {
  CardType,
  CHAMPIONSHIPS,
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

export type MarketChassisCardFilters = z.infer<
  typeof marketChassisCardFiltersSchema
>;

export const marketChassisCardFiltersSchema = z.object({
  chassisId: z.string().optional(),
  name: z.string().optional(),
  teamIds: z.array(z.string()).optional(),
  seasons: z.array(z.number()).optional(),
  championships: z.array(z.enum(CHAMPIONSHIPS)).optional(),
  value: z
    .object({ min: z.number().optional(), max: z.number().optional() })
    .optional()
});
