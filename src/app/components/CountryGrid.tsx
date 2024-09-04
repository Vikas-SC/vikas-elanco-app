import React, { useState, useEffect, useRef } from 'react';
import { Country } from '../types/country';
import CountryCard from './CountryCard';

interface CountryGridProps {
  countries: Country[];
  onCountryClick: (country: Country) => void;
}

const CountryGrid: React.FC<CountryGridProps> = ({
  countries,
  onCountryClick,
}) => {
  const [visibleCountries, setVisibleCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (countries.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreCountries();
        }
      },
      { threshold: 1.0 },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [countries, visibleCountries]);

  const loadMoreCountries = () => {
    if (loading) return;

    setLoading(true);
    setTimeout(() => {
      setVisibleCountries((prev) => [
        ...prev,
        ...countries.slice(prev.length, prev.length + 20),
      ]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setVisibleCountries(countries.slice(0, 20));
  }, [countries]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleCountries.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
            onClick={() => onCountryClick(country)}
          />
        ))}
      </div>
      <div ref={loaderRef} className="text-center py-4">
        {loading && <p>Loading more countries...</p>}
      </div>
    </div>
  );
};

export default CountryGrid;
