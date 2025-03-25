import { WithDate } from '../types/types';

export interface ICircuit {
  id: string;
  name: string;
  svg: string;
  picturePath: string;
  countryCode: string;
  f1LapRecord: number;
  coordinates: [number, number];
}

export interface IInsertDBCircuit extends ICircuit {}

export interface IDBCircuit extends WithDate<ICircuit> {}

export const CIRCUIT_COUNTRY_MAPPING: {
  countryCode: string;
  wikiCircuitIds: string[];
}[] = [
  { countryCode: 'US', wikiCircuitIds: ['MIA', 'LVG'] },
  { countryCode: 'IT', wikiCircuitIds: ['EMI', 'IMO', 'MNZ'] },
  { countryCode: 'MC', wikiCircuitIds: ['MON'] },
  { countryCode: 'NL', wikiCircuitIds: ['NED', 'ZAN'] },
  { countryCode: 'SG', wikiCircuitIds: ['SIN'] },
  { countryCode: 'MX', wikiCircuitIds: ['MXC'] },
  { countryCode: 'BR', wikiCircuitIds: ['SAP'] },
  { countryCode: 'AE', wikiCircuitIds: ['ABU', 'YMC'] },
  { countryCode: 'AU', wikiCircuitIds: ['MEL'] },
  { countryCode: 'SA', wikiCircuitIds: ['JED'] },
  { countryCode: 'ES', wikiCircuitIds: ['CAT'] },
  { countryCode: 'AT', wikiCircuitIds: ['RBR'] },
  { countryCode: 'GB', wikiCircuitIds: ['SIL'] },
  { countryCode: 'BE', wikiCircuitIds: ['SPA'] },
  { countryCode: 'AZ', wikiCircuitIds: ['BAK'] },
  { countryCode: 'QA', wikiCircuitIds: ['LSL'] }
];
