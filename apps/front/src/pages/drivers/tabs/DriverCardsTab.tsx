import { driverRoute } from '@/services/router/router.routes';

export const DriverCardsTab = () => {
  const { id } = driverRoute.useParams();
  console.log('CardsTab rendered', id);

  return <div>DriverCardsTab</div>;
};
