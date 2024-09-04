import axios from 'axios';
import { Country } from '../types/country';

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get<Country[]>('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch countries:', error);
    throw new Error('Failed to fetch countries');
  }
};
