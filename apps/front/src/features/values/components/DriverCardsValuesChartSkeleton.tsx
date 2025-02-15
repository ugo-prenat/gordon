import { ValuesChart } from './ValuesChart';
import { IFrontDriverCardValue } from '@gordon/models';

export const DriverCardsValuesChartSkeleton = () => (
  <ValuesChart skeleton records={skeletonRecords} />
);

const skeletonRecords: IFrontDriverCardValue[] = [
  {
    id: 3654,
    type: 'unique',
    value: 121574,
    record: {
      id: 6829,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'BHR',
      championship: 'f1',
      score: 81.05,
      avgScore: null,
      result: 5,
      race: {
        key: 'FEA',
        name: '2023 Bahrain Grand Prix',
        round: 1,
        index: 0,
        countryCode: 'BH'
      }
    }
  },
  {
    id: 3655,
    type: 'unique',
    value: 121574,
    record: {
      id: 6830,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'SAU',
      championship: 'f1',
      score: 81.05,
      avgScore: 81.05,
      result: 5,
      race: {
        key: 'FEA',
        name: '2023 Saudi Arabian Grand Prix',
        round: 2,
        index: 0,
        countryCode: 'SA'
      }
    }
  },
  {
    id: 3656,
    type: 'unique',
    value: 139810,
    record: {
      id: 6831,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'AUS',
      championship: 'f1',
      score: 95.26,
      avgScore: 81.05,
      result: 2,
      race: {
        key: 'FEA',
        name: '2023 Australian Grand Prix',
        round: 3,
        index: 0,
        countryCode: 'AU'
      }
    }
  },
  {
    id: 3657,
    type: 'unique',
    value: 118838,
    record: {
      id: 6832,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'AZE',
      championship: 'f1',
      score: 76.32,
      avgScore: 85.79,
      result: 6,
      race: {
        key: 'FEA',
        name: '2023 Azerbaijan Grand Prix',
        round: 4,
        index: 0,
        countryCode: 'AZ'
      }
    }
  },
  {
    id: 3658,
    type: 'unique',
    value: 114479,
    record: {
      id: 6833,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'MIA',
      championship: 'f1',
      score: 76.32,
      avgScore: 83.42,
      result: 6,
      race: {
        key: 'FEA',
        name: '2023 Miami Grand Prix',
        round: 5,
        index: 0,
        countryCode: 'US'
      }
    }
  },
  {
    id: 3659,
    type: 'unique',
    value: 128685,
    record: {
      id: 6834,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'MON',
      championship: 'f1',
      score: 85.79,
      avgScore: 82,
      result: 4,
      race: {
        key: 'FEA',
        name: '2023 Monaco Grand Prix',
        round: 6,
        index: 0,
        countryCode: 'MC'
      }
    }
  },
  {
    id: 3660,
    type: 'unique',
    value: 142890,
    record: {
      id: 6835,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'ESP',
      championship: 'f1',
      score: 95.26,
      avgScore: 82.63,
      result: 2,
      race: {
        key: 'FEA',
        name: '2023 Spanish Grand Prix',
        round: 7,
        index: 0,
        countryCode: 'ES'
      }
    }
  },
  {
    id: 3661,
    type: 'unique',
    value: 135795,
    record: {
      id: 6836,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'CAN',
      championship: 'f1',
      score: 90.53,
      avgScore: 84.44,
      result: 3,
      race: {
        key: 'FEA',
        name: '2023 Canadian Grand Prix',
        round: 8,
        index: 0,
        countryCode: 'CA'
      }
    }
  },
  {
    id: 3662,
    type: 'unique',
    value: 115425,
    record: {
      id: 6837,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'AUT',
      championship: 'f1',
      score: 66.84,
      avgScore: 85.2,
      result: 8,
      race: {
        key: 'FEA',
        name: '2023 Austrian Grand Prix',
        round: 9,
        index: 0,
        countryCode: 'AT'
      }
    }
  },
  {
    id: 3663,
    type: 'unique',
    value: 132738,
    record: {
      id: 6838,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'GBR',
      championship: 'f1',
      score: 90.53,
      avgScore: 83.16,
      result: 3,
      race: {
        key: 'FEA',
        name: '2023 British Grand Prix',
        round: 10,
        index: 0,
        countryCode: 'GB'
      }
    }
  },
  {
    id: 3664,
    type: 'unique',
    value: 128685,
    record: {
      id: 6839,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'HUN',
      championship: 'f1',
      score: 85.79,
      avgScore: 84.21,
      result: 4,
      race: {
        key: 'FEA',
        name: '2023 Hungarian Grand Prix',
        round: 11,
        index: 0,
        countryCode: 'HU'
      }
    }
  },
  {
    id: 3665,
    type: 'unique',
    value: 128685,
    record: {
      id: 6840,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'BEL',
      championship: 'f1',
      score: 85.79,
      avgScore: 84.74,
      result: 4,
      race: {
        key: 'FEA',
        name: '2023 Belgian Grand Prix',
        round: 12,
        index: 0,
        countryCode: 'BE'
      }
    }
  },
  {
    id: 3666,
    type: 'unique',
    value: 114479,
    record: {
      id: 6841,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'NED',
      championship: 'f1',
      score: 76.32,
      avgScore: 83.69,
      result: 6,
      race: {
        key: 'FEA',
        name: '2023 Dutch Grand Prix',
        round: 13,
        index: 0,
        countryCode: 'NL'
      }
    }
  },
  {
    id: 3667,
    type: 'unique',
    value: 114479,
    record: {
      id: 6842,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'ITA',
      championship: 'f1',
      score: 76.32,
      avgScore: 83.69,
      result: 6,
      race: {
        key: 'FEA',
        name: '2023 Italian Grand Prix',
        round: 14,
        index: 0,
        countryCode: 'IT'
      }
    }
  },
  {
    id: 3668,
    type: 'unique',
    value: 131650,
    record: {
      id: 6843,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'SIN',
      championship: 'f1',
      score: 90.53,
      avgScore: 83.69,
      result: 3,
      race: {
        key: 'FEA',
        name: '2023 Singapore Grand Prix',
        round: 15,
        index: 0,
        countryCode: 'SG'
      }
    }
  },
  {
    id: 3669,
    type: 'unique',
    value: 121574,
    record: {
      id: 6844,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'JPN',
      championship: 'f1',
      score: 81.05,
      avgScore: 84.21,
      result: 5,
      race: {
        key: 'FEA',
        name: '2023 Japanese Grand Prix',
        round: 16,
        index: 0,
        countryCode: 'JP'
      }
    }
  },
  {
    id: 3670,
    type: 'unique',
    value: 103337,
    record: {
      id: 6845,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'QAT',
      championship: 'f1',
      score: 1,
      avgScore: 82.63,
      result: 'Ret',
      race: {
        key: 'FEA',
        name: '2023 Qatar Grand Prix',
        round: 17,
        index: 0,
        countryCode: 'QA'
      }
    }
  },
  {
    id: 3671,
    type: 'unique',
    value: 87836,
    record: {
      id: 6846,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'USA',
      championship: 'f1',
      score: 1,
      avgScore: 72.69,
      result: 'DSQ',
      race: {
        key: 'FEA',
        name: '2023 United States Grand Prix',
        round: 18,
        index: 0,
        countryCode: 'US'
      }
    }
  },
  {
    id: 3672,
    type: 'unique',
    value: 101011,
    record: {
      id: 6847,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'MXC',
      championship: 'f1',
      score: 95.26,
      avgScore: 65.37,
      result: 2,
      race: {
        key: 'FEA',
        name: '2023 Mexico City Grand Prix',
        round: 19,
        index: 0,
        countryCode: 'MX'
      }
    }
  },
  {
    id: 3673,
    type: 'unique',
    value: 100260,
    record: {
      id: 6848,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'SAP',
      championship: 'f1',
      score: 66.84,
      avgScore: 65.9,
      result: 8,
      race: {
        key: 'FEA',
        name: '2023 São Paulo Grand Prix',
        round: 20,
        index: 0,
        countryCode: 'BR'
      }
    }
  },
  {
    id: 3674,
    type: 'unique',
    value: 107370,
    record: {
      id: 6849,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'LVG',
      championship: 'f1',
      score: 71.58,
      avgScore: 63.79,
      result: 7,
      race: {
        key: 'FEA',
        name: '2023 Las Vegas Grand Prix',
        round: 21,
        index: 0,
        countryCode: 'US'
      }
    }
  },
  {
    id: 3675,
    type: 'unique',
    value: 93164,
    record: {
      id: 6850,
      driverId: 'lewis-hamilton',
      year: 2023,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'ABU',
      championship: 'f1',
      score: 62.11,
      avgScore: 62.21,
      result: 9,
      race: {
        key: 'FEA',
        name: '2023 Abu Dhabi Grand Prix',
        round: 22,
        index: 0,
        countryCode: 'AE'
      }
    }
  },
  {
    id: 3676,
    type: 'unique',
    value: 107138,
    record: {
      id: 6851,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'BHR',
      championship: 'f1',
      score: 71.58,
      avgScore: 60.63,
      result: 7,
      race: {
        key: 'FEA',
        name: '2024 Bahrain Grand Prix',
        round: 1,
        index: 0,
        countryCode: 'BH'
      }
    }
  },
  {
    id: 3677,
    type: 'unique',
    value: 93164,
    record: {
      id: 6852,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'SAU',
      championship: 'f1',
      score: 62.11,
      avgScore: 60.11,
      result: 9,
      race: {
        key: 'FEA',
        name: '2024 Saudi Arabian Grand Prix',
        round: 2,
        index: 0,
        countryCode: 'SA'
      }
    }
  },
  {
    id: 3678,
    type: 'unique',
    value: 79189,
    record: {
      id: 6853,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'AUS',
      championship: 'f1',
      score: 1,
      avgScore: 56.95,
      result: 'Ret',
      race: {
        key: 'FEA',
        name: '2024 Australian Grand Prix',
        round: 3,
        index: 0,
        countryCode: 'AU'
      }
    }
  },
  {
    id: 3679,
    type: 'unique',
    value: 91067,
    record: {
      id: 6854,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'JPN',
      championship: 'f1',
      score: 62.11,
      avgScore: 48.05,
      result: 9,
      race: {
        key: 'FEA',
        name: '2024 Japanese Grand Prix',
        round: 4,
        index: 0,
        countryCode: 'JP'
      }
    }
  },
  {
    id: 3680,
    type: 'unique',
    value: 93164,
    record: {
      id: 6855,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'CHN',
      championship: 'f1',
      score: 62.11,
      avgScore: 54.84,
      result: 9,
      race: {
        key: 'FEA',
        name: '2024 Chinese Grand Prix',
        round: 5,
        index: 0,
        countryCode: 'CN'
      }
    }
  },
  {
    id: 3681,
    type: 'unique',
    value: 107138,
    record: {
      id: 6856,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'MIA',
      championship: 'f1',
      score: 76.32,
      avgScore: 61.63,
      result: 6,
      race: {
        key: 'FEA',
        name: '2024 Miami Grand Prix',
        round: 6,
        index: 0,
        countryCode: 'US'
      }
    }
  },
  {
    id: 3682,
    type: 'unique',
    value: 114479,
    record: {
      id: 6857,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'EMI',
      championship: 'f1',
      score: 76.32,
      avgScore: 59.53,
      result: 6,
      race: {
        key: 'FEA',
        name: '2024 Emilia Romagna Grand Prix',
        round: 7,
        index: 0,
        countryCode: 'IT'
      }
    }
  },
  {
    id: 3683,
    type: 'unique',
    value: 107370,
    record: {
      id: 6858,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'MON',
      championship: 'f1',
      score: 71.58,
      avgScore: 60.58,
      result: 7,
      race: {
        key: 'FEA',
        name: '2024 Monaco Grand Prix',
        round: 8,
        index: 0,
        countryCode: 'MC'
      }
    }
  },
  {
    id: 3684,
    type: 'unique',
    value: 123475,
    record: {
      id: 6859,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'CAN',
      championship: 'f1',
      score: 85.79,
      avgScore: 60.58,
      result: 4,
      race: {
        key: 'FEA',
        name: '2024 Canadian Grand Prix',
        round: 9,
        index: 0,
        countryCode: 'CA'
      }
    }
  },
  {
    id: 3685,
    type: 'unique',
    value: 135795,
    record: {
      id: 6860,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'ESP',
      championship: 'f1',
      score: 90.53,
      avgScore: 63.21,
      result: 3,
      race: {
        key: 'FEA',
        name: '2024 Spanish Grand Prix',
        round: 10,
        index: 0,
        countryCode: 'ES'
      }
    }
  },
  {
    id: 3686,
    type: 'unique',
    value: 128685,
    record: {
      id: 6861,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'AUT',
      championship: 'f1',
      score: 85.79,
      avgScore: 65.32,
      result: 4,
      race: {
        key: 'FEA',
        name: '2024 Austrian Grand Prix',
        round: 11,
        index: 0,
        countryCode: 'AT'
      }
    }
  },
  {
    id: 3687,
    type: 'unique',
    value: 147987,
    record: {
      id: 6862,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'GBR',
      championship: 'f1',
      score: 100,
      avgScore: 67.95,
      result: 1,
      race: {
        key: 'FEA',
        name: '2024 British Grand Prix',
        round: 12,
        index: 0,
        countryCode: 'GB'
      }
    }
  },
  {
    id: 3688,
    type: 'unique',
    value: 135795,
    record: {
      id: 6863,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'HUN',
      championship: 'f1',
      score: 90.53,
      avgScore: 78.95,
      result: 3,
      race: {
        key: 'FEA',
        name: '2024 Hungarian Grand Prix',
        round: 13,
        index: 0,
        countryCode: 'HU'
      }
    }
  },
  {
    id: 3689,
    type: 'unique',
    value: 150000,
    record: {
      id: 6864,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'BEL',
      championship: 'f1',
      score: 100,
      avgScore: 82.11,
      result: 1,
      race: {
        key: 'FEA',
        name: '2024 Belgian Grand Prix',
        round: 14,
        index: 0,
        countryCode: 'BE'
      }
    }
  },
  {
    id: 3690,
    type: 'unique',
    value: 127500,
    record: {
      id: 6865,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'NED',
      championship: 'f1',
      score: 66.84,
      avgScore: 86.32,
      result: 8,
      race: {
        key: 'FEA',
        name: '2024 Dutch Grand Prix',
        round: 15,
        index: 0,
        countryCode: 'NL'
      }
    }
  },
  {
    id: 3691,
    type: 'unique',
    value: 121574,
    record: {
      id: 6866,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'ITA',
      championship: 'f1',
      score: 81.05,
      avgScore: 85.26,
      result: 5,
      race: {
        key: 'FEA',
        name: '2024 Italian Grand Prix',
        round: 16,
        index: 0,
        countryCode: 'IT'
      }
    }
  },
  {
    id: 3692,
    type: 'unique',
    value: 103337,
    record: {
      id: 6867,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'AZE',
      championship: 'f1',
      score: 62.11,
      avgScore: 85.79,
      result: 9,
      race: {
        key: 'FEA',
        name: '2024 Azerbaijan Grand Prix',
        round: 17,
        index: 0,
        countryCode: 'AZ'
      }
    }
  },
  {
    id: 3693,
    type: 'unique',
    value: 114479,
    record: {
      id: 6868,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'SIN',
      championship: 'f1',
      score: 76.32,
      avgScore: 84.74,
      result: 6,
      race: {
        key: 'FEA',
        name: '2024 Singapore Grand Prix',
        round: 18,
        index: 0,
        countryCode: 'SG'
      }
    }
  },
  {
    id: 3694,
    type: 'unique',
    value: 97307,
    record: {
      id: 6869,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'USA',
      championship: 'f1',
      score: 1,
      avgScore: 83.69,
      result: 'Ret',
      race: {
        key: 'FEA',
        name: '2024 United States Grand Prix',
        round: 19,
        index: 0,
        countryCode: 'US'
      }
    }
  },
  {
    id: 3695,
    type: 'unique',
    value: 111903,
    record: {
      id: 6870,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'MXC',
      championship: 'f1',
      score: 85.79,
      avgScore: 73.74,
      result: 4,
      race: {
        key: 'FEA',
        name: '2024 Mexico City Grand Prix',
        round: 20,
        index: 0,
        countryCode: 'MX'
      }
    }
  },
  {
    id: 3696,
    type: 'unique',
    value: 95117,
    record: {
      id: 6871,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'SAP',
      championship: 'f1',
      score: 57.37,
      avgScore: 73.74,
      result: 10,
      race: {
        key: 'FEA',
        name: '2024 São Paulo Grand Prix',
        round: 21,
        index: 0,
        countryCode: 'BR'
      }
    }
  },
  {
    id: 3697,
    type: 'unique',
    value: 109384,
    record: {
      id: 6872,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'LVG',
      championship: 'f1',
      score: 95.26,
      avgScore: 69,
      result: 2,
      race: {
        key: 'FEA',
        name: '2024 Las Vegas Grand Prix',
        round: 22,
        index: 0,
        countryCode: 'US'
      }
    }
  },
  {
    id: 3698,
    type: 'unique',
    value: 92976,
    record: {
      id: 6873,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'QAT',
      championship: 'f1',
      score: 47.89,
      avgScore: 69.53,
      result: 12,
      race: {
        key: 'FEA',
        name: '2024 Qatar Grand Prix',
        round: 23,
        index: 0,
        countryCode: 'QA'
      }
    }
  },
  {
    id: 3699,
    type: 'unique',
    value: 106922,
    record: {
      id: 6874,
      driverId: 'lewis-hamilton',
      year: 2024,
      team: 'Mercedes-AMG Petronas F1 Team',
      circuitId: 'ABU',
      championship: 'f1',
      score: 85.79,
      avgScore: 63.74,
      result: 4,
      race: {
        key: 'FEA',
        name: '2024 Abu Dhabi Grand Prix',
        round: 24,
        index: 0,
        countryCode: 'AE'
      }
    }
  }
];
