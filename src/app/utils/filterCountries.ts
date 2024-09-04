import { Country } from '../types/country';

export const filterCountriesByRegion = (
  countries: Country[],
  region: string,
): Country[] => {
  if (region === 'all') {
    return countries;
  }
  return countries.filter((country) => country.region === region);
};
