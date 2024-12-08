import React from 'react';
import { SearchBar } from './components/SearchBar';
import { CountryCard } from './components/CountryCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useCountrySearch } from './hooks/useCountrySearch';
import { Globe2 } from 'lucide-react';

function App() {
  const { searchTerm, setSearchTerm, data, loading, error } = useCountrySearch();
  const countries = Array.isArray(data) ? data : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10"></div>
      
      <div className="relative">
        <header className="pt-12 pb-6 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in">
              <Globe2 size={40} className="text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                World Explorer
              </h1>
            </div>
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>
        </header>

        <main className="container mx-auto max-w-6xl px-4 py-8">
          {error ? (
            <div className="animate-fade-in text-center p-6 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
              {error}
            </div>
          ) : loading ? (
            <div className="flex justify-center items-center min-h-[200px] animate-fade-in">
              <LoadingSpinner size="large" />
            </div>
          ) : searchTerm.length < 2 ? (
            <div className="text-center text-gray-400 animate-fade-in">
              <p className="text-lg">Start typing to explore countries around the world...</p>
            </div>
          ) : countries.length === 0 ? (
            <div className="text-center text-gray-400 animate-fade-in">
              <p className="text-lg">No countries found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {countries.map((country, index) => (
                <div
                  key={country?.name?.common || index}
                  className="animate-slide-up"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <CountryCard country={country} />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
