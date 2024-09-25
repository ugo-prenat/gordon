import { hc } from 'hono/client';
import { APIRouter } from '@gordon/back/server';

export const client = hc<APIRouter>(`${import.meta.env.VITE_BACK_URL}/api`);
