import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const searchCountries = async (searchTerm) => {
  if (!searchTerm || typeof searchTerm !== 'string') {
    return [];
  }

  const normalizedTerm = searchTerm.toLowerCase().trim();
  
  if (normalizedTerm.length < 2) {
    return [];
  }

  const cached = cache.get(normalizedTerm);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  try {
    const response = await api.get(`/name/${encodeURIComponent(normalizedTerm)}`);
    const data = Array.isArray(response.data) ? response.data : [];
    cache.set(normalizedTerm, { data, timestamp: Date.now() });
    return data;
  } catch (error) {
    if (error.response?.status === 404) {
      return [];
    }
    console.error('API Error:', error);
    throw new Error(
      error.response?.data?.message || 
      'Failed to fetch countries. Please try again.'
    );
  }
};
