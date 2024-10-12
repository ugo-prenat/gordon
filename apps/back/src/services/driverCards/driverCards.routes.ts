import { Hono } from 'hono';
import { handleError } from '@utils/api.utils';
import { IInsertDBDriverCard } from '@gordon/models';
import { createDBDriverCard, getDBDriverCards } from './driverCards.db';
import { formatToMarketDriverCards } from './driverCards.utils';

export const driverCardsRouter = new Hono()
  .onError((e, c) => handleError(c, 'DCR-1')(e))

  // /market/drivers
  .get('/', (c) =>
    getDBDriverCards()
      .then((cards) => c.json(formatToMarketDriverCards(cards), 200))
      .catch(handleError(c, 'DCR-2'))
  )

  .post('/', (c) => {
    const driverCard = {} as IInsertDBDriverCard;
    // const driverCard: IInsertDBDriverCard = {
    //   id: buildCardId(DRIVER_CARDS_TYPE_ID),
    //   driverId: 'leonardo-fornaroli',
    //   teamId: 'trident',
    //   type: 'common',
    //   season: 2024,
    //   description: null,
    //   picturePath: '/v1728767412/leonardo_formaroli_24_rqntf6.png'
    // };

    return createDBDriverCard(driverCard)
      .then((createdDriverCard) =>
        c.json({ driverCard: createdDriverCard }, 201)
      )
      .catch(handleError(c, 'DCR-3'));
  });
