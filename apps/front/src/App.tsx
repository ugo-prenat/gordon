import { router } from '@/services/router/router';
import { RouterProvider } from '@tanstack/react-router';
import { updateRootElement } from './services/store/settings/settings.utils';
import { useEffect } from 'react';
import { useSettings } from './services/store/settings/settings.stores';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/api/api';

export const App = () => {
  const { theme } = useSettings();

  useEffect(() => {
    updateRootElement(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools /> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
