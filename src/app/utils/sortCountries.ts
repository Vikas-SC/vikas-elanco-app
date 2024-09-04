import { Country } from '../types/country';

export const sortCountries = (
  countries: Country[],
  order: 'asc' | 'desc',
): Country[] => {
  return countries.sort((a, b) => {
    if (order === 'asc') {
      return a.population - b.population;
    } else {
      return b.population - a.population;
    }
  });
};
