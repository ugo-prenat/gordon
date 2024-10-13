import { Hono } from 'hono';
import { handleError } from '@utils/api.utils';
import { APIError, USER_DRIVER_CARDS_TYPE_ID } from '@gordon/models';
import {
  getDBDriverCard,
  getDBDriverCards
} from '@services/driverCards/driverCards.db';
import { formatToMarketDriverCard } from '@services/driverCards/driverCards.utils';

export const cardsRouter = new Hono()
  .onError((e, c) => handleError(c, 'CAR-1')(e))

  .get('/drivers', (c) =>
    getDBDriverCards()
      .then((cards) => c.json(cards, 200))
      .catch(handleError(c, 'CAR-2'))
  )

  .get('/chassis', (c) => c.json({ msg: 'market cards, chassis tab' }, 200))

  .get(`/${USER_DRIVER_CARDS_TYPE_ID}/:id`, (c) =>
    getDBDriverCard(c.req.param().id)
      .then((card) => {
        if (!card) throw new APIError('Card not found', 'CAR-3', 404);
        return c.json(formatToMarketDriverCard(card), 200);
      })
      .catch(handleError(c, 'CAR-3'))
  )

  .get('/users/:id', (c) =>
    c.json({ msg: `cards for user ${c.req.param('id')}` }, 200)
  );
