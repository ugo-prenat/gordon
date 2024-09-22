import { IDriver } from '@gordon/models';
import { DriverCard } from '../drivers/components/DriverCard';

export const MarketPage = () => {
  return (
    <div>
      <p>market page</p>
      <div className="flex flex-col gap-4">
        {drivers.map((driver) => (
          <DriverCard key={driver.id} driver={driver} />
        ))}
      </div>
    </div>
  );
};

const drivers: IDriver[] = [
  {
    id: 'franco-colapinto',
    fullName: 'Franco Colapinto',
    tla: 'COL',
    wikiKey: 'Franco_Colapinto',
    activeChampionship: 'f1',
    recordedChampionships: ['f1', 'f2'],
    pictureUrl: 'vroom',
    nationalityCountryCode: 'AR',
    dateOfBirth: '2003-05-27',
    isActive: true,
    value: 63568
  },
  {
    id: 'max-verstappen',
    fullName: 'Max Verstappen',
    tla: 'VER',
    wikiKey: 'Max_Verstappen',
    activeChampionship: 'f1',
    recordedChampionships: ['f1'],
    pictureUrl: 'vroom',
    nationalityCountryCode: 'NL',
    dateOfBirth: '1997-09-30',
    isActive: true,
    value: 129914
  },
  {
    id: 'pierre-gasly',
    fullName: 'Pierre Gasly',
    tla: 'GAS',
    wikiKey: 'Pierre_Gasly',
    activeChampionship: 'f1',
    recordedChampionships: ['f1'],
    pictureUrl: 'vroom',
    nationalityCountryCode: 'FR',
    dateOfBirth: '1996-02-07',
    isActive: true,
    value: 60692
  }
];
