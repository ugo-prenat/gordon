import { Page } from '@/components/nav/Page';
import { cardRoute } from '@/services/router/router.routes';
import { useDriverCard } from './cards.api';
import { DriverCard } from '@/components/cards/drivers/DriverCard';

export const CardPage = () => {
  const { id } = cardRoute.useParams();
  const { data: card, isPending, isError, error } = useDriverCard(id);

  if (isPending) return <div>Loading card...</div>;

  if (isError)
    return (
      <div>
        Error: {error.message} code: {error.code}
      </div>
    );

  return (
    <Page padding>
      <div className="h-full flex justify-center items-center">
        <DriverCard card={card} />
      </div>
    </Page>
  );
};
