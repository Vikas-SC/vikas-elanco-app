'use client';
import React, { useState } from 'react';
import CountryDetail from '../components/CountryDetail';
import CountryGrid from '../components/CountryGrid';
import { searchCountries } from '../utils/searchCountries';
import { sortCountries } from '../utils/sortCountries';
import { filterCountriesByRegion } from '../utils/filterCountries';
import { Country } from '../types/country';

interface DashboardProps {
  initialCountries: Country[];
  error?: string;
}
const Dashboard: React.FC<DashboardProps> = ({ initialCountries, error }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [region, setRegion] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const filteredCountries: Country[] = searchCountries(
    initialCountries,
    searchQuery,
  );
  const filteredByRegion: Country[] = filterCountriesByRegion(
    filteredCountries,
    region,
  );
  const sortedCountries: Country[] = sortCountries(filteredByRegion, sortOrder);

  const handleCountryClick = (country: Country) => {
    setSelectedCountry(country);
  };

  const handleCloseDetail = () => {
    setSelectedCountry(null);
  };

  if (error) return <p>Error fetching countries: {error}</p>;

  return (
    <div className={`container mx-auto px-4`}>
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name or capital"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded w-full sm:w-1/2"
        />
        <div className="flex mt-4 sm:mt-0">
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="all">All Regions</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            className="p-2 border rounded ml-4"
          >
            <option value="asc">Sort by Population (Ascending)</option>
            <option value="desc">Sort by Population (Descending)</option>
          </select>
        </div>
      </div>
      <CountryGrid
        countries={sortedCountries}
        onCountryClick={handleCountryClick}
      />
      {selectedCountry && (
        <CountryDetail country={selectedCountry} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default Dashboard;
