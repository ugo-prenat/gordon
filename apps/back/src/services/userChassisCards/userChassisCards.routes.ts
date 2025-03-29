import { Hono } from 'hono';
import { handleError } from '@utils/api.utils';
import { z } from 'zod';
import { payloadValidator } from '@middlewares/payloadValidator.middleware';
import { APIError } from '@gordon/models';
import { getDBUser, updateDBUser } from '@services/users/users.db';
import {
  createDBUserChassisCard,
  deleteDBUserChassisCard,
  getDBUserChassisCard
} from './userChassisCards.db';
import { formatUserToFront } from '@services/users/users.utils';
import { getDBChassisCard } from '@services/chassisCards/chassisCards.db';

const cardIdPayloadSchema = z.object({
  cardId: z.string().uuid()
});

export const userChassisCardsRouter = new Hono()
  .onError((e, c) => handleError(c, 'UCC-1')(e))

  .post('/buy', payloadValidator(cardIdPayloadSchema), (c) => {
    const { cardId } = c.req.valid('json');
    const { sub } = c.get('jwtPayload');

    return getDBChassisCard(cardId)
      .then((card) => {
        if (!card) throw new APIError('No chassis card found', 'UCC-2', 404);

        return getDBUser(sub).then((user) => {
          if (!user) throw new APIError('No user found', 'UCC-3', 404);
          if (user.credits < card.value)
            throw new APIError('Not enough credits', 'UCC-4', 400);

          const credits = user.credits - card.value;

          return createDBUserChassisCard({
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
      .catch(handleError(c, 'UCC-5'));
  })

  .post('/sell', payloadValidator(cardIdPayloadSchema), (c) => {
    const { cardId } = c.req.valid('json');
    const { sub } = c.get('jwtPayload');

    return getDBChassisCard(cardId)
      .then((card) => {
        if (!card) throw new APIError('No chassis card found', 'UCC-6', 404);

        return getDBUser(sub).then((user) => {
          if (!user) throw new APIError('No user found', 'UCC-7', 404);

          return getDBUserChassisCard(cardId, sub).then((userChassisCard) => {
            if (!userChassisCard)
              throw new APIError('No user chassis card found', 'UCC-8', 404);

            return deleteDBUserChassisCard(userChassisCard.id).then(() => {
              const credits = user.credits + card.value;

              return updateDBUser({ id: sub, credits }).then((updatedUser) =>
                c.json(formatUserToFront(updatedUser), 200)
              );
            });
          });
        });
      })
      .catch(handleError(c, 'UCC-9'));
  })

  .get('/:id', (c) => {
    const { id } = c.req.param();
    const { sub } = c.get('jwtPayload');

    return getDBUserChassisCard(id, sub)
      .then((userChassisCard) => {
        if (!userChassisCard)
          throw new APIError('No user chassis card found', 'UCC-10', 404);
        return c.json(userChassisCard, 200);
      })
      .catch(handleError(c, 'UCC-11'));
  });
