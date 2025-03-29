import { Hono } from 'hono';
import { handleError } from '@utils/api.utils';
import {
  APIError,
  IInsertDBChassisCard,
  marketCardFiltersSchema
} from '@gordon/models';
import {
  createDBChassisCard,
  getDBChassisCard,
  getDBChassisCards
} from './chassisCards.db';
import {
  formatToMarketChassisCards,
  formatToMarketChassisCard
} from './chassisCards.utils';
import { queriesValidator } from '@middlewares/queriesValidator.middleware';
export const chassisCardsRouter = new Hono()
  .onError((e, c) => handleError(c, 'CCR-1')(e))

  // /cards/chassis/market
  .get('/', queriesValidator(marketCardFiltersSchema), (c) =>
    getDBChassisCards(c.get('queries'))
      .then((cards) => c.json(formatToMarketChassisCards(cards), 200))
      .catch(handleError(c, 'CCR-2'))
  )

  // /cards/chassis/market/:id
  .get('/:id', (c) =>
    getDBChassisCard(c.req.param('id'))
      .then((card) => {
        if (!card) throw new APIError('chassis card not found', 'CCR-3', 404);
        return c.json(formatToMarketChassisCard(card), 200);
      })
      .catch(handleError(c, 'CCR-4'))
  )

  .post('/', async (c) => {
    const body: IInsertDBChassisCard[] = await c.req.json();

    return createDBChassisCard(body)
      .then((chassisCardIds) => c.json({ chassisCardIds }, 201))
      .catch(handleError(c, 'CCR-5'));
  });
