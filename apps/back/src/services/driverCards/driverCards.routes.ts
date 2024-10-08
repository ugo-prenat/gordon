import { Hono } from 'hono';
import { handleError } from '@utils/api.utils';
import { DRIVER_CARDS_TYPE_ID, IInsertDBDriverCard } from '@gordon/models';
import { createDBDriverCard } from './driverCards.db';
import { buildCardId } from '@utils/cards.utils';

export const driverCardsRouter = new Hono()
  .onError((e, c) => handleError(c, 'DCR-1')(e))

  // get all driver cards -> /cards/drivers from cards.routes.ts
  // get by id -> /cards/:id from cards.routes.ts

  .post('/', (c) => {
    const driverCard: IInsertDBDriverCard = {
      id: buildCardId(DRIVER_CARDS_TYPE_ID),
      driverId: 'pierre-gasly',
      teamId: 'VCARB',
      type: 'common',
      picturePath: 'vroom',
      description: null,
      season: 2024
    };

    return createDBDriverCard(driverCard)
      .then((createdDriverCard) =>
        c.json({ driverCard: createdDriverCard }, 201)
      )
      .catch(handleError(c, 'DCR-2'));
  });
