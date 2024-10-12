import { formatToFront, handleError } from '@utils/api.utils';
import { Hono } from 'hono';
import { createDBTeam, getDBTeam, getDBTeams } from './teams.db';
import { APIError, IInsertDBTeam } from '@gordon/models';

export const teamsRoutes = new Hono()
  .onError((e, c) => handleError(c, 'TER-1')(e))

  .get('/', (c) => {
    return getDBTeams()
      .then((teams) => c.json(formatToFront(teams), 200))
      .catch(handleError(c, 'TER-2'));
  })

  .get('/:id', (c) => {
    const id = c.req.param('id');
    return getDBTeam(id)
      .then((team) => {
        if (!team) throw new APIError('no team found', 'TER-3', 404);
        return c.json(formatToFront(team), 200);
      })
      .catch(handleError(c, 'TER-4'));
  })

  .post('/', (c) => {
    const team: IInsertDBTeam = {
      id: 'prout',
      wikiNames: [
        'Scuderia Toro Rosso',
        'Red Bull Toro Rosso Honda',
        'Scuderia AlphaTauri',
        'Visa Cash App RB F1 Team'
      ],
      name: 'Visa Cash App RB Formula One Team',
      lightLogoPath: '/v1728748262/rb_vokkkc.png',
      darkLogoPath: '/v1728748262/rb_vokkkc.png',
      parentTeamId: 'parout-parent'
    };

    return createDBTeam(team)
      .then((createdTeam) => c.json({ team: createdTeam }, 201))
      .catch(handleError(c, 'TER-5'));
  });
