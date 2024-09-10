import { Hono } from 'hono';

export const driversRouter = new Hono()
  .get('/', (c) => c.json({ msg: 'all drivers' }))
  .get('/:id', (c) => c.json({ msg: `get driver ${c.req.param('id')}` }))
  .post('/', (c) => c.json({ msg: 'create a driver' }, 201));
