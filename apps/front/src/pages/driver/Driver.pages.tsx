import { driverRoute } from '@services/router/routes.router';

export const DriverPage = () => {
  const { id } = driverRoute.useParams();
  return <div>{id} driver Page</div>;
};
