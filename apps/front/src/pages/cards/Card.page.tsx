import { Page } from '@/components/nav/Page';
import { cardRoute } from '@/services/router/router.routes';
import { useDriverCard } from './cards.api';
import { DriverCard } from '@/components/cards/drivers/DriverCard';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

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

  const { driver } = card;

  return (
    <Page padding>
      <div className="h-full flex justify-center items-center ">
        <div className="mx-10">
          <DriverCard card={card} />
        </div>
        <div className="flex-1 h-full ">
          <Link to={`/drivers/${driver.id}`}>
            <Button variant="link" className="text-xl font-bold">
              {driver.fullName}
            </Button>
          </Link>
        </div>
      </div>
    </Page>
  );
};
