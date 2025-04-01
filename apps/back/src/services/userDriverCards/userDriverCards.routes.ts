import { Hono } from 'hono';
import { handleError } from '@utils/api.utils';
import { z } from 'zod';
import { payloadValidator } from '@middlewares/payloadValidator.middleware';
import { getDBDriverCard } from '@services/driverCards/driverCards.db';
import { APIError } from '@gordon/models';
import { getDBUser, updateDBUser } from '@services/users/users.db';
import {
  createDBUserDriverCard,
  deleteDBUserDriverCard,
  getDBUserDriverCard
} from './userDriverCards.db';
import { formatUserToFront } from '@services/users/users.utils';
import { formatUserDriverCardToFront } from './userDrvierCards.utils';

const cardIdPayloadSchema = z.object({
  cardId: z.string().uuid()
});

export const userDriverCardsRouter = new Hono()
  .onError((e, c) => handleError(c, 'UDC-1')(e))

  .post('/buy', payloadValidator(cardIdPayloadSchema), (c) => {
    const { cardId } = c.req.valid('json');
    const { sub } = c.get('jwtPayload');

    return getDBDriverCard(cardId)
      .then((card) => {
        if (!card) throw new APIError('No driver card found', 'UDC-2', 404);

        return getDBUser(sub).then((user) => {
          if (!user) throw new APIError('No user found', 'UDC-3', 404);
          if (user.credits < card.value)
            throw new APIError('Not enough credits', 'UDC-4', 400);

          const credits = user.credits - card.value;

          return createDBUserDriverCard({
            cardId,
            ownerId: sub,
            purchaseValue: card.value
          }).then(() =>
            updateDBUser({ id: sub, credits }).then((updatedUser) =>
              c.json(formatUserToFront(updatedUser), 200)
            )
          );
        });
      })
      .catch(handleError(c, 'UDC-5'));
  })

  .post('/sell', payloadValidator(cardIdPayloadSchema), (c) => {
    const { cardId } = c.req.valid('json');
    const { sub } = c.get('jwtPayload');

    return getDBDriverCard(cardId)
      .then((card) => {
        if (!card) throw new APIError('No driver card found', 'UDC-6', 404);

        return getDBUser(sub).then((user) => {
          if (!user) throw new APIError('No user found', 'UDC-7', 404);

          return getDBUserDriverCard({ cardId, ownerId: sub }).then(
            (userDriverCard) => {
              if (!userDriverCard)
                throw new APIError('No user driver card found', 'UDC-8', 404);

              return deleteDBUserDriverCard(userDriverCard.id).then(() => {
                const credits = user.credits + card.value;

                return updateDBUser({ id: sub, credits }).then((updatedUser) =>
                  c.json(formatUserToFront(updatedUser), 200)
                );
              });
            }
          );
        });
      })
      .catch(handleError(c, 'UDC-9'));
  })

  .get('/:id', (c) => {
    const { id } = c.req.param();

    return getDBUserDriverCard({ id })
      .then((userDriverCard) => {
        if (!userDriverCard)
          throw new APIError('No user driver card found', 'UDC-10', 404);
        return c.json(formatUserDriverCardToFront(userDriverCard), 200);
      })
      .catch(handleError(c, 'UDC-11'));
  });
