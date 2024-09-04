import React from 'react';
import { Country } from '../types/country';
import Image from 'next/image';

interface CountryCardProps {
  country: Country;
  onClick: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onClick }) => {
  return (
    <div
      className="border p-4 rounded cursor-pointer hover:bg-gray-100"
      onClick={() => onClick(country)}
    >
      <Image
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        width={100}
        height={50}
        layout="responsive"
      />
      <h3 className="text-xl font-bold">{country.name.common}</h3>
      <p>Capital: {country.capital?.[0] || 'N/A'}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
    </div>
  );
};

export default CountryCard;
