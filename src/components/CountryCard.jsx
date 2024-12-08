import React from 'react';
import { MapPin, Users, Globe2, Building2 } from 'lucide-react';

export function CountryCard({ country }) {
  if (!country) return null;

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
        <div className="relative h-48 overflow-hidden">
          <img
            src={country.flags?.png}
            alt={country.flags?.alt || `Flag of ${country.name?.common}`}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/320x213?text=No+Flag+Available';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
            {country.name?.common}
          </h2>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Building2 size={18} className="text-blue-500" />
              <span>{country.capital?.join(', ') || 'N/A'}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Globe2 size={18} className="text-purple-500" />
              <span>{country.region || 'N/A'}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users size={18} className="text-green-500" />
              <span>{country.population?.toLocaleString() || 'N/A'}</span>
            </div>
            {country.latlng && country.latlng.length >= 2 && (
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} className="text-red-500" />
                <span>
                  {country.latlng[0].toFixed(1)}°, {country.latlng[1].toFixed(1)}°
                </span>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {Object.values(country.languages || {}).map((lang, index) => (
                <span
                  key={lang}
                  className="px-2 py-1 text-sm bg-gray-100 text-gray-600 rounded-full transition-colors duration-300 hover:bg-blue-100 hover:text-blue-600"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
