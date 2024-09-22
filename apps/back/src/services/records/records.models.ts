import { IDriver, IInsertDBRecord } from '@gordon/models';

export interface IDriverWithRecords {
  driver: IDriver;
  records: IInsertDBRecord[];
}

export interface ICreateRecordsResponse {
  driversNb: number;
  scrapedRecordsNb: number;
  insertedRecordsNb: number;
}
