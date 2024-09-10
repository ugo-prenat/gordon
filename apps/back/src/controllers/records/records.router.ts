import { Hono } from 'hono';

export const recordsRouter = new Hono()
  .get('/', (c) => c.json({ msg: 'all records' }))
  .get('/:id', (c) => c.json({ msg: `get record ${c.req.param('id')}` }))
  .post('/', (c) => c.json({ msg: 'create a record' }, 201));
