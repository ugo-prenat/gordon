import {
  CARD_TYPES_MULTIPLIERS,
  CARD_TYPES_WITH_VALUES,
  CardTypeWithValues,
  IDBDriverCardValue,
  IDBRecord,
  IFrontDriverCardValue,
  IInsertDBDriverCardValue,
  IRecord,
  WithDBRecord
} from '@gordon/models';
import {
  dbRecordsToRecords,
  dbRecordToRecord
} from '@services/records/records.utils';
import { createDBDriverCardsValues } from './driverCardsValue.db';

export const updateDriverCardsValue = (insertedRecords: IDBRecord[]) => {
  const records = dbRecordsToRecords(insertedRecords);

  const cardValues = records.map(buildCardValues).flat();
  return createDBDriverCardsValues(cardValues);
};

const buildCardValues = (record: IRecord): IInsertDBDriverCardValue[] => {
  const { id: recordId, driverId, score, avgScore } = record;

  return CARD_TYPES_WITH_VALUES.map((type) => ({
    type,
    driverId,
    recordId,
    value: calculateCardValue(score, avgScore, type)
  }));
};

const calculateCardValue = (
  score: number,
  avgScore: number | null,
  type: CardTypeWithValues
) => {
  const alpha = 0.5; // amplification coefficient (e.g. 0.5 to avoid extreme variations)
  const valueMultiplier = 1000;
  const baseValue = score * CARD_TYPES_MULTIPLIERS[type];

  if (!avgScore) return Math.floor(baseValue * valueMultiplier);

  const performanceGap = avgScore - score;
  const factor = performanceGap / avgScore;
  const adjustment = 1 + alpha * factor;

  const newValue = baseValue * adjustment * valueMultiplier;

  // console.log({
  //   type,
  //   score,
  //   avgScore,
  //   baseValue,
  //   performanceGap,
  //   factor,
  //   adjustment,
  //   newValue
  // });

  return Math.floor(newValue);
};

export const dbDriverCardsValueToFrontDriverCardsValue = (
  dbDriverCardsValues: WithDBRecord<IDBDriverCardValue>[]
): IFrontDriverCardValue[] =>
  dbDriverCardsValues.map(dbDriverCardValueToFrontDriverCardValue);

const dbDriverCardValueToFrontDriverCardValue = (
  dbDriverCardValue: WithDBRecord<IDBDriverCardValue>
): IFrontDriverCardValue => {
  const { record, driverId, recordId, ...driverCardValue } = dbDriverCardValue;
  return { ...driverCardValue, record: dbRecordToRecord(record) };
};
