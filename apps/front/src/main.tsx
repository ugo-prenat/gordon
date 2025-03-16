import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import './index.css';
import './reset.css';

import '@services/i18n/i18n.config';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './services/router/router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/api/queryClient.api';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
