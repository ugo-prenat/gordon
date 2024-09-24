import { router } from '@services/router/index.router';
import { RouterProvider } from '@tanstack/react-router';
import { updateRootElement } from './services/store/settings/settings.utils';
import { useEffect } from 'react';
import { useSettings } from './services/store/settings/settings.stores';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export const App = () => {
  const { theme } = useSettings();

  useEffect(() => {
    updateRootElement(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
