import { Hono } from 'hono';
import { handleError } from '@utils/api.utils';
import {
  DRIVER_CARDS_TYPE_ID,
  IInsertDBDriverCard,
  marketDriverCardFiltersSchema
} from '@gordon/models';
import { createDBDriverCard, getDBDriverCards } from './driverCards.db';
import { formatToMarketDriverCards } from './driverCards.utils';
import { buildCardId } from '@utils/cards.utils';
import { queriesValidator } from '@middlewares/queriesValidator.middleware';

export const driverCardsRouter = new Hono()
  .onError((e, c) => handleError(c, 'DCR-1')(e))

  // /market/drivers
  .get('/', queriesValidator(marketDriverCardFiltersSchema), (c) => {
    const filters = c.get('queries');

    return getDBDriverCards(filters)
      .then((cards) => c.json(formatToMarketDriverCards(cards), 200))
      .catch(handleError(c, 'DCR-2'));
  })

  .post('/', (c) => {
    const driverCard: IInsertDBDriverCard = {
      id: buildCardId(DRIVER_CARDS_TYPE_ID),
      driverId: 'andrea-kimi-antonelli',
      teamId: 'prema-racing',
      type: 'common',
      season: 2024,
      championship: 'f2',
      description: null,
      picturePath: '/v1728813492/andrea_kimi_antonelli_24_rtthoe.png'
    };

    return createDBDriverCard(driverCard)
      .then((createdDriverCard) =>
        c.json({ driverCard: createdDriverCard }, 201)
      )
      .catch(handleError(c, 'DCR-3'));
  });
