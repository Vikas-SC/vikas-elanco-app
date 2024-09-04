import React from 'react';
import { Country } from '../types/country';

interface CountryDetailProps {
  country: Country;
  onClose: () => void;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ country, onClose }) => {
  return (
    <div className="fixed inset-0 bg-white shadow-lg p-4 z-50 overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 p-2 bg-gray-300 rounded"
      >
        Close
      </button>
      <h2 className="text-xl font-bold">{country.name.common}</h2>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Currencies:</strong>
        {country.currencies
          ? Object.values(country.currencies).map((currency) => (
              <span key={currency.name}>
                {currency.name} ({currency.symbol})
              </span>
            ))
          : 'No data'}
      </p>
      <p>
        <strong>Languages:</strong>
        {country.languages
          ? Object.values(country.languages).join(', ')
          : 'No data'}
      </p>
      <p>
        <strong>Time Zones:</strong>
        {country.timezones ? country.timezones.join(', ') : 'No data'}
      </p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CountryDetail;
