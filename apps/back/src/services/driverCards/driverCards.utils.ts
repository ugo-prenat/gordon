import {
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
