import { createContext, useContext, useEffect, useState } from 'react';

const CitiesContext = createContext();

const BASE_URL = 'https://my-json-server.typicode.com/satyampund/worldwise';

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert('There was an error while loading data....');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return <CitiesContext.Provider value={{ cities, isLoading }}>{children}</CitiesContext.Provider>;
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error('CitiesContext is used outside the CitiesProvider');
  }
  return context;
}

export { CitiesProvider, useCities };
