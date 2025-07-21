import React from 'react';
import Arts from '@/components/Arts';

const ArtsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Arts & Humanities Stream
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the world of Arts and Humanities - from literature and history to psychology and social sciences.
          </p>
        </div>
        
        <Arts language="english" />
      </div>
    </div>
  );
};

export default ArtsPage;
