import type { APIRouter } from '@gordon/back/server';
import { hc } from 'hono/client';

export const api = hc<APIRouter>(import.meta.env.VITE_BACK_URL);
