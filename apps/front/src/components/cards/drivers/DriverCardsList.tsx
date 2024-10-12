import { CardsListContainer } from '../CardsListContainer';

import { IDriver } from '@gordon/models';
import { DriverCard } from './DriverCard';

interface IDriverCardsListProps {
  drivers: IDriver[];
}

export const DriverCardsList = ({ drivers }: IDriverCardsListProps) => {
  return (
    <CardsListContainer>
      {drivers.map((driver) => (
        <DriverCard key={driver.id} driver={driver} />
      ))}
    </CardsListContainer>
  );
};
