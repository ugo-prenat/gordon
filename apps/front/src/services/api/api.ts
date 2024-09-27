import { hc } from 'hono/client';
import { APIRouter } from '@gordon/back/server';
import { QueryClient } from '@tanstack/react-query';

export const api = hc<APIRouter>(import.meta.env.VITE_BACK_URL);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1 }
  }
});
