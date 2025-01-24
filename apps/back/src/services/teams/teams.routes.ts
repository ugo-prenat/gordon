import { handleError } from '@utils/api.utils';
import { Hono } from 'hono';
import { createDBTeam, getDBTeam, getDBTeams } from './teams.db';
import { APIError, IInsertDBTeam } from '@gordon/models';
import { formatTeamsToFront, formatTeamToFront } from './teams.utils';

export const teamsRoutes = new Hono()
  .onError((e, c) => handleError(c, 'TER-1')(e))

  .get('/', (c) => {
    return getDBTeams()
      .then((teams) => c.json(formatTeamsToFront(teams), 200))
      .catch(handleError(c, 'TER-2'));
  })

  .get('/:id', (c) => {
    const id = c.req.param('id');
    return getDBTeam(id)
      .then((team) => {
        if (!team) throw new APIError('no team found', 'TER-3', 404);
        return c.json(formatTeamToFront(team), 200);
      })
      .catch(handleError(c, 'TER-4'));
  })

  .post('/', async (c) => {
    const body: IInsertDBTeam = await c.req.json();

    return createDBTeam(body)
      .then((createdTeam) => c.json({ team: createdTeam }, 201))
      .catch(handleError(c, 'TER-5'));
  });
