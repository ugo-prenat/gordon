import { Hono } from 'hono';
import { getSchedule } from './schedule.controllers';
import {
  getF2Races,
  getF3Races,
  getFARaces
} from '../../championships/f1Promotions/f1Promotions.api';
import { getF1Races } from '../../championships/f1/f1.api';

const scheduleRoute = new Hono();

scheduleRoute.get('/', (c) => getSchedule(c));

scheduleRoute.get('/test-f1', (c) => getF1Races().then(c.json));
scheduleRoute.get('/test-f2', (c) => getF2Races().then(c.json));
scheduleRoute.get('/test-f3', (c) => getF3Races().then(c.json));
scheduleRoute.get('/test-fa', (c) => getFARaces().then(c.json));

export default scheduleRoute;
