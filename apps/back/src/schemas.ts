import {
  driversRelations,
  driversTable
} from '@services/drivers/drivers.schemas';
import {
  recordsRelations,
  recordsTable
} from './services/records/records.schemas';
import {
  driverCardsRelations,
  driverCardsTable
} from '@services/driverCards/driverCards.schemas';
import { teamsRelations, teamsTable } from '@services/teams/teams.schemas';
import { driverCardsValuesRelations } from '@services/driverCardsValues/driverCardsValues.schemas';
import { driverCardsValuesTable } from '@services/driverCardsValues/driverCardsValues.schemas';

export default {
  driversTable,
  driversRelations,

  recordsTable,
  recordsRelations,

  driverCardsTable,
  driverCardsRelations,

  driverCardsValuesTable,
  driverCardsValuesRelations,

  teamsTable,
  teamsRelations
};
