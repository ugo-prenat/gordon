import { IDriver } from '@gordon/models';
import { DriverHero } from '../components/hero/DriverHero';

export const DriverOverviewTab = ({ driver }: { driver: IDriver }) => {
  console.log('OverviewTab rendered');
  return (
    <>
      <DriverHero driver={driver} />
    </>
  );
};
