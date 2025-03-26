import { CARD_TYPES } from './cards/cards.models';
import { z } from 'zod';
import { CHAMPIONSHIPS } from './championships.models';

export type MarketCardFilters = z.infer<typeof marketCardFiltersSchema>;

export const marketCardFiltersSchema = z.object({
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
