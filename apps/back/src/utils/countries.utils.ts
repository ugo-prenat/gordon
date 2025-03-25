import { CIRCUIT_COUNTRY_MAPPING } from '@gordon/models';
import countries from 'i18n-iso-countries';

export const getCircuitCountryCode = (
  circuitId: string,
  driverId?: string,
  year?: number
): string => {
  const code = countries.alpha3ToAlpha2(circuitId);
  if (code) return code;

  const mappedCode = CIRCUIT_COUNTRY_MAPPING.find(({ wikiCircuitIds }) =>
    wikiCircuitIds.includes(circuitId)
  )?.countryCode;

  if (!mappedCode)
    throw new Error(
      `No country code found for circuit id ${circuitId}${driverId && year ? ` (${driverId} ${year})` : ''}, populate CIRCUIT_COUNTRY_MAPPING`
    );

  return mappedCode;
};
