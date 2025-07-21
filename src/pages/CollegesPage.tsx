import React from 'react';
import CollegeFinder from '@/components/CollegeFinder2';

const CollegesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect College
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Search and explore colleges across India. Find detailed information about admissions, courses, fees, and more.
          </p>
        </div>
        
        <CollegeFinder language="english" />
      </div>
    </div>
  );
};

export default CollegesPage;
