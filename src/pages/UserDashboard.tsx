import React from 'react';

const UserDashboard: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-4 text-green-800">User Dashboard</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>View all available colleges</li>
        <li>Read-only access to college data</li>
        <li>Explore arts, commerce, and other streams</li>
      </ul>
      {/* Add more user features/components here */}
    </div>
  );
};

export default UserDashboard;
