import { Hono } from 'hono';
import { formatToFront, handleError } from '@utils/api.utils';
import {
  APIError,
  CHASSIS_CARDS_TYPE_ID,
  DRIVER_CARDS_TYPE_ID,
  USER_CHASSIS_CARDS_TYPE_ID,
  USER_DRIVER_CARDS_TYPE_ID
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
    const cardTypeId = id.split('-')[1];

    const getPromise = () => {
      switch (cardTypeId) {
        case DRIVER_CARDS_TYPE_ID:
          return getDBDriverCard(id).then((card) => {
            if (!card) throw new APIError('Card not found', 'CAR-5', 404);
            return formatToFront(card);
          });
        case CHASSIS_CARDS_TYPE_ID:
          return Promise.resolve({});
        case USER_DRIVER_CARDS_TYPE_ID:
          return Promise.resolve({});
        case USER_CHASSIS_CARDS_TYPE_ID:
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
