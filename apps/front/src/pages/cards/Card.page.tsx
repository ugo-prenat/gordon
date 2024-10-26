import { Page } from '@/components/nav/Page';
import { cardRoute } from '@/services/router/router.routes';
import { useDriverCard } from '../../features/cards/cards.api';
import { DriverCard } from '@/features/cards/components/drivers/DriverCard';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { CardPageSkeleton } from './CardPageSkeleton';
import { CardPageError } from './CardPageError';
import { DriverRecordsChart } from '@/features/records/components/recordsChart/DriverRecordsChart';

export const CardPage = () => {
  const { id } = cardRoute.useParams();
  const { data: card, isPending, isError, error, refetch } = useDriverCard(id);

  if (isPending) return <CardPageSkeleton />;
  if (isError) return <CardPageError onRefresh={refetch} error={error} />;

  const { driver } = card;

  return (
    <Page padding>
      <div className="h-full flex justify-center items-center gap-10">
        <div id="left-section" className="w-1/2 flex justify-center">
          <div className="w-full md:w-4/5 lg:w-2/3 xl:w-1/2">
            <DriverCard card={card} />
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-between gap-10">
          <Link to={`/drivers/${driver.id}`}>
            <Button variant="link" className="text-4xl font-bold">
              {driver.fullName}
            </Button>
          </Link>
          <DriverRecordsChart driverId={driver.id} className="p-0" />
        </div>
      </div>
    </Page>
  );
};
