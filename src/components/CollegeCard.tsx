import React from 'react';

interface CollegeCardProps {
  name: string;
  location?: string;
  onClick?: () => void;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ name, location, onClick }) => (
  <div
    className="border rounded shadow p-4 cursor-pointer hover:bg-green-50 transition"
    onClick={onClick}
  >
    <h3 className="font-bold text-lg mb-1">{name}</h3>
    {location && <p className="text-gray-600 text-sm">{location}</p>}
  </div>
);

export default CollegeCard;
