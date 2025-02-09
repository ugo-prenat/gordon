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
import { driverCardsValueRelations } from '@services/driverCardsValue/driverCardsValue.schemas';
import { driverCardsValueTable } from '@services/driverCardsValue/driverCardsValue.schemas';

export default {
  driversTable,
  driversRelations,

  recordsTable,
  recordsRelations,

  driverCardsTable,
  driverCardsRelations,

  driverCardsValueTable,
  driverCardsValueRelations,

  teamsTable,
  teamsRelations
};
