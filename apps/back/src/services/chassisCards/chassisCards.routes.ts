import { Hono } from 'hono';
import { formatToFront, handleError } from '@utils/api.utils';
import { APIError, IInsertDBChassisCard } from '@gordon/models';
import {
  createDBChassisCard,
  getDBChassisCardById,
  getDBChassisCards
} from './chassisCards.db';

export const chassisCardsRouter = new Hono()
  .onError((e, c) => handleError(c, 'CCR-1')(e))

  // /cards/chassis/market
  .get('/', (c) =>
    getDBChassisCards()
      .then((cards) => c.json(formatToFront(cards), 200))
      .catch(handleError(c, 'CCR-2'))
  )

  // /cards/chassis/market/:id
  .get('/:id', (c) =>
    getDBChassisCardById(c.req.param('id'))
      .then((card) => {
        if (!card) throw new APIError('chassis card not found', 'CCR-3', 404);
        return c.json(formatToFront(card), 200);
      })
      .catch(handleError(c, 'CCR-4'))
  )

  .post('/', async (c) => {
    const body: IInsertDBChassisCard[] = await c.req.json();

    return createDBChassisCard(body)
      .then((chassisCardIds) => c.json({ chassisCardIds }, 201))
      .catch(handleError(c, 'CCR-5'));
  });
