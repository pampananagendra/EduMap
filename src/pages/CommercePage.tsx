import React from 'react';
import Commerce from '@/components/Commerce';

const CommercePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Commerce Stream
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive into the world of business, finance, and economics. Explore career opportunities in commerce and management.
          </p>
        </div>
        
        <Commerce language="english" />
      </div>
    </div>
  );
};

export default CommercePage;
