import React from 'react';

const sizeClasses = {
  small: 'h-6 w-6',
  medium: 'h-12 w-12',
  large: 'h-16 w-16',
};

export const LoadingSpinner = ({ size = 'medium' }) => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex justify-center items-center"
    >
      <div
        className={`animate-spin rounded-full border-4 border-blue-500 border-t-transparent ${sizeClasses[size]}`}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
