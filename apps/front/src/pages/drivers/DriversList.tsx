import { IDriver } from '@gordon/models';
import { FC } from 'react';
import { DriverCard } from './components/card/DriverCard';
import { DriverCardPlaceholder } from './components/card/DriverCardPlaceholder';

interface IDriversListProps {
  drivers: IDriver[];
}

export const DriversList: FC<IDriversListProps> = ({ drivers }) => {
  return (
    <div className="flex flex-wrap -mx-2">
      {drivers.map((driver) => (
        <DriverCard key={driver.id} driver={driver} />
      ))}
      <DriverCardPlaceholder />
    </div>
  );
};
