import { chassisRoute } from '@/services/router/router.routes';

export const ChassisPage = () => {
  const { id } = chassisRoute.useParams();
  return <div>{id} chassis Page</div>;
};
