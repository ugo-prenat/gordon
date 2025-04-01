import { marketDriverCardRoute } from '@/services/router/router.routes';
import { DriverPageError } from './components/DriverPageError';
import { DriverPageSkeleton } from './components/DriverPageSkeleton';
import { useDriverCard } from '@/features/cards/cards.api';
import { DriverCardPage } from './DriverCard.page';

export const MarketDriverCardPage = () => {
  const { id } = marketDriverCardRoute.useParams();
  const { data: card, isPending, isError, error, refetch } = useDriverCard(id);

  if (isPending) return <DriverPageSkeleton />;
  if (isError) return <DriverPageError onRefresh={refetch} error={error} />;

  return <DriverCardPage card={card} />;
};
