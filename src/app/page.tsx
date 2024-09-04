import { fetchCountries } from './utils/fetchCountries';
import Dashboard from './pages/index';
import { Country } from './types/country';

export default async function Home() {
  let initialCountries: Country[] = [];
  let error: string | undefined = undefined;

  try {
    initialCountries = await fetchCountries();
  } catch (err) {
    error = (err as Error).message || 'Failed to fetch countries.';
  }

  return (
    <main>
      <Dashboard initialCountries={initialCountries} error={error} />
    </main>
  );
}
