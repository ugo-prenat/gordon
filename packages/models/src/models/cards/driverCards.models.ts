import { z } from 'zod';
import { Championship, CHAMPIONSHIPS, IDriver, ITeam, WithDate } from '../..';
import { CARD_TYPES, CardType } from './cards.models';

export interface IDriverCard {
  id: string;
  driverId: string;
  teamId: string;
  type: CardType;
  picturePath: string;
  description: string | null;
  season: number;
  championship: Championship;
  value: number;
  valueTrend: string;
}

export interface IInsertDBDriverCard
  extends Omit<IDriverCard, 'id' | 'value' | 'valueTrend'> {}

export interface IDBDriverCard extends WithDate<IDriverCard> {}

export interface IMarketDriverCard
  extends Omit<IDriverCard, 'driverId' | 'teamId' | 'valueTrend'> {
  valueTrend: number;
  driver: Pick<
    IDriver,
    'id' | 'firstName' | 'lastName' | 'nationalityCountryCode' | 'dateOfBirth'
  >;
  team: Pick<ITeam, 'id' | 'name' | 'darkLogoPath' | 'lightLogoPath'>;
}

export type MarketDriverCardFilters = z.infer<
  typeof marketDriverCardFiltersSchema
>;

export const marketDriverCardFiltersSchema = z.object({
  driverId: z.string().optional(),
  name: z.string().optional(),
  teamIds: z.array(z.string()).optional(),
  types: z.array(z.enum(CARD_TYPES)).optional(),
  seasons: z.array(z.number()).optional(),
  championships: z.array(z.enum(CHAMPIONSHIPS)).optional(),
  value: z
    .object({ min: z.number().optional(), max: z.number().optional() })
    .optional()
});
