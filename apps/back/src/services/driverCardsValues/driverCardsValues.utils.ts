import {
  CARD_TYPES_MULTIPLIERS,
  CARD_TYPES_WITH_VALUES,
  CardTypeWithValues,
  DriverCardsValuesTimeRange,
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
import { createDBDriverCardsValues } from './driverCardsValues.db';
import {
  DRIVER_CARD_VALUE_MAX_VARIATION,
  DRIVER_CARD_VALUE_MULTIPLIER
} from './driverCardsValues.models';
import { MAX_RECORD_SCORE } from '@scraper/scraper.models';

export const updateDriverCardsValue = (insertedRecords: IDBRecord[]) => {
  const records = dbRecordsToRecords(insertedRecords);

  const cardValues = CARD_TYPES_WITH_VALUES.map(
    buildCardValues(records)
  ).flat();
  return createDBDriverCardsValues(cardValues);
};

const buildCardValues =
  (records: IRecord[]) =>
  (type: CardTypeWithValues): IInsertDBDriverCardValue[] =>
    records.reduce<IInsertDBDriverCardValue[]>(
      (acc, { id: recordId, driverId, score, avgScore }) => {
        const prevValue = acc[acc.length - 1]?.value;
        const { value, valueTrend } = calculateCardValue(
          prevValue,
          score,
          avgScore,
          type
        );

        const newCardValue: IInsertDBDriverCardValue = {
          type,
          value,
          valueTrend,
          driverId,
          recordId
        };
        return [...acc, newCardValue];
      },
      []
    );

const calculateCardValue = (
  prevValue: number | undefined,
  score: number,
  avgScore: number | null,
  type: CardTypeWithValues
) => {
  const minVariation = 1 - DRIVER_CARD_VALUE_MAX_VARIATION; // 15% below prevValue
  const maxVariation = 1 + DRIVER_CARD_VALUE_MAX_VARIATION; // 15% above prevValue

  if (!avgScore || !prevValue)
    return {
      value: Math.floor(calculteBaseCardValue(type, score)),
      valueTrend: 0
    };

  const avgScoreBaseValue = calculteBaseCardValue(type, score, avgScore);

  const minAllowedValue = prevValue * minVariation;
  const maxAllowedValue = prevValue * maxVariation;

  const newValue = Math.max(
    minAllowedValue,
    Math.min(maxAllowedValue, avgScoreBaseValue)
  );

  return {
    value: Math.floor(newValue),
    valueTrend: calculateValueTrend(prevValue, newValue)
  };
};

const calculteBaseCardValue = (
  type: CardTypeWithValues,
  score: number,
  avgScore?: number
) => {
  if (!avgScore)
    return score * CARD_TYPES_MULTIPLIERS[type] * DRIVER_CARD_VALUE_MULTIPLIER;

  const baseValue =
    avgScore * CARD_TYPES_MULTIPLIERS[type] * DRIVER_CARD_VALUE_MULTIPLIER;

  const avgScoreBonus =
    avgScore >= MAX_RECORD_SCORE * 0.99 && score === MAX_RECORD_SCORE
      ? 1.05
      : 1; // 5% bonus for avgScore between 99-100% and score = MAX_RECORD_SCORE

  return baseValue * avgScoreBonus;
};

const calculateValueTrend = (prevValue: number, newValue: number): number => {
  const percentChange = (newValue - prevValue) / prevValue;

  if (percentChange >= 0.15) return 2; // >15% increase
  if (percentChange >= 0.05) return 1; // 5-15% increase
  if (percentChange <= -0.15) return -2; // >15% decrease
  if (percentChange <= -0.05) return -1; // 5-15% decrease
  return 0; // within ±5%
};

export const dbDriverCardsValuesToFrontDriverCardsValues = (
  dbDriverCardsValues: WithDBRecord<IDBDriverCardValue>[]
): IFrontDriverCardValue[] =>
  dbDriverCardsValues.map(dbDriverCardValueToFrontDriverCardValue);

const dbDriverCardValueToFrontDriverCardValue = (
  dbDriverCardValue: WithDBRecord<IDBDriverCardValue>
): IFrontDriverCardValue => {
  const { record, driverId, recordId, createdAt, ...driverCardValue } =
    dbDriverCardValue;
  return { ...driverCardValue, record: dbRecordToRecord(record) };
};

export const filterDriverCardsValuesByTimeRange =
  (timeRange: DriverCardsValuesTimeRange | undefined) =>
  (
    driverCardsValues: WithDBRecord<IDBDriverCardValue>[]
  ): WithDBRecord<IDBDriverCardValue>[] => {
    if (!timeRange) return driverCardsValues;

    switch (timeRange) {
      case 'last-season':
        return filterBySeasons(driverCardsValues, 1);
      case 'last-2-seasons':
        return filterBySeasons(driverCardsValues, 2);
      case 'last-10-races':
        return filterByRaces(driverCardsValues, 10);
      default:
        return driverCardsValues;
    }
  };

const filterBySeasons = (
  cardValues: WithDBRecord<IDBDriverCardValue>[],
  seasons: number
): WithDBRecord<IDBDriverCardValue>[] => {
  const recordsBySeasons = cardValues.reduce<
    WithDBRecord<IDBDriverCardValue>[][]
  >((acc, record) => {
    const seasonIndex = acc.findIndex(
      (cv) => cv[0]?.record.year === record.record.year
    );

    if (seasonIndex === -1) {
      acc.push([record]);
    } else {
      acc[seasonIndex]?.push(record);
    }
    return acc;
  }, []);
  return recordsBySeasons.splice(-seasons).flat();
};

const filterByRaces = (
  cardValues: WithDBRecord<IDBDriverCardValue>[],
  races: number
): WithDBRecord<IDBDriverCardValue>[] => {
  const recordsByRounds = cardValues.reduce<
    WithDBRecord<IDBDriverCardValue>[][]
  >((acc, record) => {
    const roundIndex = acc.findIndex(
      (cv) =>
        cv[0]?.record.raceRound === record.record.raceRound &&
        cv[0]?.record.year === record.record.year
    );

    if (roundIndex === -1) {
      acc.push([record]);
    } else {
      acc[roundIndex]?.push(record);
    }
    return acc;
  }, []);
  return recordsByRounds.splice(-races).flat();
};
