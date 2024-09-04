import { Country } from '../types/country';

export const searchCountries = (
  countries: Country[],
  query: string,
): Country[] => {
  const lowerCaseQuery = query.toLowerCase();
  return countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(lowerCaseQuery) ||
      country.capital?.some((cap) =>
        cap.toLowerCase().includes(lowerCaseQuery),
      ),
  );
};
