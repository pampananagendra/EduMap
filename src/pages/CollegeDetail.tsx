import React from 'react';
import { useParams } from 'react-router-dom';

const CollegeDetail: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-4 text-pink-800">College Details - {id}</h2>
      <p>Details for the selected college will appear here.</p>
      {/* Add college details, courses, contact, etc. here */}
    </div>
  );
};

export default CollegeDetail;
