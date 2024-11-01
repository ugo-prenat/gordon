import {
  CARD_TYPES_MULTIPLIERS,
  Championship,
  CHAMPIONSHIPS_MULTIPLIERS,
  CardType,
  IDBDriverCard,
  IMarketDriverCard,
  WithDriver,
  WithTeam
} from '@gordon/models';

export const formatToMarketDriverCards = (
  cards: WithDriver<WithTeam<IDBDriverCard>>[]
): IMarketDriverCard[] => cards.map(formatToMarketDriverCard);

export const formatToMarketDriverCard = (
  card: WithDriver<WithTeam<IDBDriverCard>>
): IMarketDriverCard => {
  const { driverId, teamId, createdAt, driver, team, ...driverCard } = card;
  const { name, darkLogoPath, lightLogoPath } = team;
  const { firstName, lastName, nationalityCountryCode, dateOfBirth } = driver;

  const value = calculateValue(
    driver.value,
    driverCard.type,
    driverCard.championship
  );

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

const calculateValue = (
  driverValue: number,
  cardType: CardType,
  championship: Championship
) =>
  Number(
    (
      driverValue *
      CARD_TYPES_MULTIPLIERS[cardType] *
      CHAMPIONSHIPS_MULTIPLIERS[championship]
    ).toFixed()
  );
