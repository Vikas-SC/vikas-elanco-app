import { filterCountriesByRegion } from '../utils/filterCountries';
import { Country } from '../types/country';

describe('filterCountriesByRegion', () => {
  const countries: Country[] = [
    {
      name: {
        common: 'Spain',
        official: 'Kingdom of Spain',
        nativeName: {
          spa: {
            official: 'Reino de España',
            common: 'España',
          },
        },
      },
      tld: ['.es'],
      cca2: 'ES',
      ccn3: '724',
      cca3: 'ESP',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['4'],
      },
      capital: ['Madrid'],
      altSpellings: ['ES', 'Kingdom of Spain', 'Reino de España'],
      region: 'Europe',
      subregion: 'Southern Europe',
      languages: {
        spa: 'Spanish',
      },
      translations: {
        spa: {
          official: 'Reino de España',
          common: 'España',
        },
      },
      latlng: [40.0, -4.0],
      landlocked: false,
      borders: ['AND', 'FRA', 'GIB', 'PRT', 'MAR'],
      area: 505992,
      demonyms: {
        eng: {
          f: 'Spanish',
          m: 'Spanish',
        },
      },
      flag: '🇪🇸',
      maps: {
        googleMaps: 'https://goo.gl/maps/UMtjyPTQ7aoz6hP66',
        openStreetMaps: 'https://www.openstreetmap.org/relation/1311341',
      },
      population: 47351567,
      car: {
        signs: ['E'],
        side: 'right',
      },
      timezones: ['UTC', 'UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/es.png',
        svg: 'https://flagcdn.com/es.svg',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/es.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/es.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [40.4165, -3.70256],
      },
    },
  ];

  it('should return all countries when region is "all"', () => {
    const result = filterCountriesByRegion(countries, 'all');
    expect(result).toEqual(countries);
  });

  it('should return countries that match the specified region', () => {
    const result = filterCountriesByRegion(countries, 'Europe');
    expect(result).toEqual(countries);
  });

  it('should return an empty array when there are no countries', () => {
    const result = filterCountriesByRegion([], 'Asia');
    expect(result).toEqual([]);
  });

  it('should return an empty array when no countries match the specified region', () => {
    const result = filterCountriesByRegion(countries, 'Africa');
    expect(result).toEqual([]);
  });
});
