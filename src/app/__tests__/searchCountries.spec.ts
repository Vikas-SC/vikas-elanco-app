// Import the searchCountries function and any necessary types
import { searchCountries } from '../utils/searchCountries';
import { Country } from '../types/country'; // Adjust the import path as needed

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
  {
    name: {
      common: 'India',
      official: 'Kingdom of India',
      nativeName: {
        spa: {
          official: 'India',
          common: 'India',
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
    capital: ['Delhi'],
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

describe('searchCountries', () => {
  it('should return countries that match the search query by name', () => {
    const result = searchCountries(countries, 'India');
    expect(result).toEqual([countries[1]]);
  });

  it('should return countries that match the search query by capital', () => {
    const result = searchCountries(countries, 'Madrid');
    expect(result).toEqual([countries[0]]);
  });

  it('should perform a case insensitive search', () => {
    const result = searchCountries(countries, 'spain');
    expect(result).toEqual([countries[0]]);
  });

  it('should return an empty array if no countries match the search query', () => {
    const result = searchCountries(countries, 'Italy');
    expect(result).toEqual([]);
  });

  it('should return all countries if the search query is empty', () => {
    const result = searchCountries(countries, '');
    expect(result).toEqual(countries);
  });
});
