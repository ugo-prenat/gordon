import { chassisRoute } from '@services/router/routes.router';

export const ChassisPage = () => {
  const { id } = chassisRoute.useParams();
  return <div>{id} chassis Page</div>;
};
