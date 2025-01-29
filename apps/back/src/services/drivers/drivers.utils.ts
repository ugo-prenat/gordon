import { getDBDrivers } from './drivers.db';

export const getDriverIdsByName = (name?: string) =>
  name
    ? getDBDrivers({ name }).then((drivers) => drivers.map(({ id }) => id))
    : Promise.resolve(undefined);
