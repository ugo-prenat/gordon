import { useUserDriverCard } from '@/features/cards/cards.api';
import { userDriverCardRoute } from '@/services/router/router.routes';
import { DriverPageError } from './components/DriverPageError';
import { DriverPageSkeleton } from './components/DriverPageSkeleton';
import { DriverCardPage } from './DriverCard.page';

export const UserDriverCardPage = () => {
  const { id } = userDriverCardRoute.useParams();
  const { data, isPending, isError, error, refetch } = useUserDriverCard(id);

  if (isPending) return <DriverPageSkeleton />;
  if (isError) return <DriverPageError onRefresh={refetch} error={error} />;

  const { card, ...userDriverCard } = data;

  return <DriverCardPage card={card} userDriverCard={userDriverCard} />;
};
