import { marketChassisCardRoute } from '@/services/router/router.routes';
import { useChassisCard } from '@/features/cards/cards.api';
import { ChassisPageSkeleton } from './components/ChassisPageSkeleton';
import { ChassisPageError } from './components/ChassisPageError';
import { ChassisCardPage } from './ChassisCard.page';

export const MarketChassisCardPage = () => {
  const { id } = marketChassisCardRoute.useParams();
  const { data: card, isPending, isError, error, refetch } = useChassisCard(id);

  if (isPending) return <ChassisPageSkeleton />;
  if (isError) return <ChassisPageError onRefresh={refetch} error={error} />;

  return <ChassisCardPage card={card} />;
};
