import React from 'react';
import { Search } from 'lucide-react';

export const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative max-w-2xl mx-auto transform transition-all duration-300 hover:scale-[1.01]">
      <label htmlFor="search" className="sr-only">
        Search countries
      </label>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
        <div className="relative">
          <Search 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" 
            size={20} 
          />
          <input
            id="search"
            type="search"
            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-transparent bg-white/90 backdrop-blur-sm shadow-lg focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-400"
            placeholder="Search for a country..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            aria-label="Search for a country"
            autoComplete="off"
            role="searchbox"
          />
        </div>
      </div>
    </div>
  );
};
