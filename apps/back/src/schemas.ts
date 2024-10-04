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

export default {
  driversTable,
  driversRelations,

  recordsTable,
  recordsRelations,

  driverCardsTable,
  driverCardsRelations
};
