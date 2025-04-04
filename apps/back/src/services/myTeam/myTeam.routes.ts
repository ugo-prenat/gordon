import { APIError } from '@gordon/models';
import {
  getDBUserChassisCard,
  getDBUserChassisCards
} from '@services/userChassisCards/userChassisCards.db';
import {
  getDBUserDriverCard,
  getDBUserDriverCards
} from '@services/userDriverCards/userDriverCards.db';
import { handleError } from '@utils/api.utils';
import { Hono } from 'hono';
import { buildUserTeam } from './myTeam.utils';

export const myTeamRouter = new Hono()
  .onError((e, c) => handleError(c, 'MTE-1')(e))

  .get('/', (c) => {
    const { sub } = c.get('jwtPayload');

    return getDBUserDriverCards(sub)
      .then((userDriverCards) =>
        getDBUserChassisCards(sub).then((userChassisCards) =>
          c.json(buildUserTeam(userDriverCards, userChassisCards), 200)
        )
      )
      .catch(handleError(c, 'MTE-2'));
  })

  .get('/cards/drivers/:id', (c) => {
    const { id } = c.req.param();
    const { sub } = c.get('jwtPayload');

    return getDBUserDriverCard({ ownerId: sub, cardId: id })
      .then((userDriverCard) => {
        if (!userDriverCard)
          throw new APIError(
            'User does not possess this driver card in his team',
            'MTE-3',
            404
          );
        return c.json(userDriverCard, 200);
      })
      .catch(handleError(c, 'MTE-4'));
  })

  .get('/cards/chassis/:id', (c) => {
    const { id } = c.req.param();
    const { sub } = c.get('jwtPayload');

    return getDBUserChassisCard({ ownerId: sub, cardId: id })
      .then((userChassisCard) => {
        if (!userChassisCard)
          throw new APIError(
            'User does not possess this chassis card in his team',
            'MTE-5',
            404
          );
        return c.json(userChassisCard, 200);
      })
      .catch(handleError(c, 'MTE-6'));
  });
