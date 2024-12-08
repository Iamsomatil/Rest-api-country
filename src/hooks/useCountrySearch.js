import { useState, useEffect, useCallback } from 'react';
import { searchCountries } from '../services/api';

const DEBOUNCE_DELAY = 300;
const MIN_SEARCH_LENGTH = 2;

export const useCountrySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const search = useCallback(async () => {
    if (searchTerm.length < MIN_SEARCH_LENGTH) {
      setData(null);
      setError(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const result = await searchCountries(searchTerm);
      setData(result);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const debounceTimeout = setTimeout(search, DEBOUNCE_DELAY);
    return () => clearTimeout(debounceTimeout);
  }, [search]);

  return {
    searchTerm,
    setSearchTerm,
    data,
    error,
    loading
  };
};
