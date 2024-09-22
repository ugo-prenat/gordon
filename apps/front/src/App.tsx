import { router } from '@services/router/index.router';
import { RouterProvider } from '@tanstack/react-router';

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
