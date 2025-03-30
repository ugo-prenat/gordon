import { Hono } from 'hono';
import { handleError } from '@utils/api.utils';
import {
  APIError,
  IInsertDBDriverCard,
  marketCardFiltersSchema
} from '@gordon/models';
import {
  createDBDriverCard,
  getDBDriverCard,
  getDBDriverCards
} from './driverCards.db';
import {
  formatToMarketDriverCard,
  formatToMarketDriverCards
} from './driverCards.utils';
import { queriesValidator } from '@middlewares/queriesValidator.middleware';

export const driverCardsRouter = new Hono()
  .onError((e, c) => handleError(c, 'DCR-1')(e))

  // /market/drivers
  .get('/', queriesValidator(marketCardFiltersSchema), (c) => {
    const filters = c.get('queries');

    return getDBDriverCards(filters)
      .then((cards) => c.json(formatToMarketDriverCards(cards), 200))
      .catch(handleError(c, 'DCR-2'));
  })

  // /market/drivers/:id
  .get('/:id', (c) => {
    const id = c.req.param('id');

    return getDBDriverCard(id)
      .then((card) => {
        if (!card) throw new APIError('market card not found', 'DCR-3', 404);
        return c.json(formatToMarketDriverCard(card), 200);
      })
      .catch(handleError(c, 'DCR-4'));
  })

  .post('/', async (c) => {
    const body: IInsertDBDriverCard[] = await c.req.json();

    return createDBDriverCard(body)
      .then((createdDriverCard) =>
        c.json({ driverCard: createdDriverCard }, 201)
      )
      .catch(handleError(c, 'DCR-5'));
  });
