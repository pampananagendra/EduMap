import React from 'react';

interface StreamCardProps {
  name: string;
  description?: string;
  onClick?: () => void;
}

const StreamCard: React.FC<StreamCardProps> = ({ name, description, onClick }) => (
  <div
    className="border rounded shadow p-4 cursor-pointer hover:bg-blue-50 transition"
    onClick={onClick}
  >
    <h3 className="font-bold text-lg mb-1">{name}</h3>
    {description && <p className="text-gray-600 text-sm">{description}</p>}
  </div>
);

export default StreamCard;
