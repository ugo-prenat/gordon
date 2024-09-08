import { IInsertDBDriver } from '@db/schemas/drivers.schemas';
import { createDBDriver } from './drivers.db';

export const createDriver = () => {
  const driver: IInsertDBDriver = {
    fullName: 'Charles Leclerc',
    wikiKey: 'Charles_Leclerc',
    activeChampionship: 'Formula One',
    recordedChampionships: ['Formula One', 'FIA Formula 2']
  };

  createDBDriver(driver)
    .then((createdDriver) => {
      console.log(createdDriver);
    })
    .catch((error) => {
      console.error(error);
    });
};
