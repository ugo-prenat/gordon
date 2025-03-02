import {
  IDBDriverCard,
  IDBDriverCardValue,
  IMarketDriverCard,
  WithDriver,
  WithTeam
} from '@gordon/models';
import { uniqBy } from '@gordon/utils';
import { updateDBDriverCardFromValue } from './driverCards.db';

export const formatToMarketDriverCards = (
  cards: WithDriver<WithTeam<IDBDriverCard>>[]
): IMarketDriverCard[] => cards.map(formatToMarketDriverCard);

export const formatToMarketDriverCard = (
  card: WithDriver<WithTeam<IDBDriverCard>>
): IMarketDriverCard => {
  const { driverId, teamId, createdAt, driver, team, value, ...driverCard } =
    card;
  const { name, darkLogoPath, lightLogoPath } = team;
  const { firstName, lastName, nationalityCountryCode, dateOfBirth } = driver;

  return {
    ...driverCard,
    value,
    team: { id: teamId, name, darkLogoPath, lightLogoPath },
    driver: {
      id: driverId,
      firstName,
      lastName,
      dateOfBirth,
      nationalityCountryCode
    }
  };
};

export const updateDriverCardsFromValues = (
  cardsValues: IDBDriverCardValue[]
) => {
  const driverIds = uniqBy(cardsValues, 'driverId');
  const groupedCardsValues = driverIds.map(({ driverId }) => {
    const driverCardsValues = cardsValues.filter(
      (card) => card.driverId === driverId
    );
    return uniqBy(driverCardsValues, 'type');
  });

  const driverCardsUpdates = groupedCardsValues.map((cardsValues) =>
    Promise.all(
      cardsValues.map((cardValue) => updateDBDriverCardFromValue(cardValue))
    )
  );
  return Promise.all(driverCardsUpdates);
};
