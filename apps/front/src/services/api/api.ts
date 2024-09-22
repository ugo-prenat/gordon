import { hc } from 'hono/client';
import { ApiRouter } from '@gordon/back/server';

export const client = hc<ApiRouter>(import.meta.env.VITE_BACK_URL);
