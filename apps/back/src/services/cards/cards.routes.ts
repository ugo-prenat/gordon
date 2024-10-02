import { Hono } from 'hono';
import { handleError } from '@utils/api/api.utils';
import {
  APIError,
  CHASSIS_CARDS_PREFIX,
  DRIVER_CARDS_PREFIX,
  USER_CHASSIS_CARDS_PREFIX,
  USER_DRIVER_CARDS_PREFIX
} from '@gordon/models';
import {
  getDBDriverCard,
  getDBDriverCards
} from '@services/driverCards/driverCards.db';

export const cardsRouter = new Hono()
  .onError((e, c) => handleError(c, 'CAR-1')(e))

  .get('/drivers', (c) =>
    getDBDriverCards()
      .then((cards) => c.json(cards, 200))
      .catch(handleError(c, 'CAR-2'))
  )

  .get('/chassis', (c) => c.json({ msg: 'market cards, chassis tab' }, 200))

  .get('/:id', (c) => {
    const { id } = c.req.param();
    const prefix = id.split('-')[0];

    const getPromise = () => {
      switch (prefix) {
        case DRIVER_CARDS_PREFIX:
          return getDBDriverCard(id);
        case CHASSIS_CARDS_PREFIX:
          return Promise.resolve({});
        case USER_DRIVER_CARDS_PREFIX:
          return Promise.resolve({});
        case USER_CHASSIS_CARDS_PREFIX:
          return Promise.resolve({});
        default:
          throw new APIError('Invalid card id', 'CAR-3', 400);
      }
    };

    return getPromise()
      .then((card) => c.json(card, 200))
      .catch(handleError(c, 'CAR-4'));
  })

  .get('/users/:id', (c) =>
    c.json({ msg: `cards for user ${c.req.param('id')}` }, 200)
  );
