import { Hono } from 'hono';
import { getDBCircuits } from './circuits.db';
import { getDBCircuit } from './circuits.db';
import { createDBCircuit } from './circuits.db';
import { formatToFront, handleError } from '@utils/api.utils';
import { APIError, IInsertDBCircuit } from '@gordon/models';
import { getCircuitCountryCode } from '@utils/countries.utils';

export const circuitsRouter = new Hono()
  .onError((e, c) => handleError(c, 'CIR-1')(e))

  .get('/', (c) =>
    getDBCircuits()
      .then((circuits) => c.json(formatToFront(circuits)))
      .catch(handleError(c, 'CIR-2'))
  )

  .get('/:id', (c) =>
    getDBCircuit(c.req.param('id'))
      .then((circuit) => {
        if (!circuit) throw new APIError('No circuit found', 'CIR-3', 404);
        return c.json(formatToFront(circuit), 200);
      })
      .catch(handleError(c, 'CIR-4'))
  )

  .post('/', async (c) => {
    const body: IInsertDBCircuit[] = await c.req.json();
    const completeCircuits = body.map((circuit) => ({
      ...circuit,
      countryCode: getCircuitCountryCode(circuit.id)
    }));

    return createDBCircuit(completeCircuits)
      .then((circuits) => c.json(formatToFront(circuits), 201))
      .catch(handleError(c, 'CIR-5'));
  });
