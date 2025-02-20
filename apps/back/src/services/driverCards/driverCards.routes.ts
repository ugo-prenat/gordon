import { Hono } from 'hono';
import { handleError } from '@utils/api.utils';
import {
  DRIVER_CARDS_TYPE_ID,
  IInsertDBDriverCard,
  marketDriverCardFiltersSchema
} from '@gordon/models';
import { createDBDriverCard, getDBDriverCards } from './driverCards.db';
import { formatToMarketDriverCards } from './driverCards.utils';
import { queriesValidator } from '@middlewares/queriesValidator.middleware';
import { buildCardId } from '@services/cards/cards.utils';

export const driverCardsRouter = new Hono()
  .onError((e, c) => handleError(c, 'DCR-1')(e))

  // /market/drivers
  .get('/', queriesValidator(marketDriverCardFiltersSchema), (c) => {
    const filters = c.get('queries');

    return getDBDriverCards(filters)
      .then((cards) => c.json(formatToMarketDriverCards(cards), 200))
      .catch(handleError(c, 'DCR-2'));
  })

  .post('/', async (c) => {
    const body: IInsertDBDriverCard = await c.req.json();

    const driverCard = {
      ...body,
      id: buildCardId(DRIVER_CARDS_TYPE_ID)
    };

    return createDBDriverCard(driverCard)
      .then((createdDriverCard) =>
        c.json({ driverCard: createdDriverCard }, 201)
      )
      .catch(handleError(c, 'DCR-3'));
  });
