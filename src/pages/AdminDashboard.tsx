import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-4 text-blue-800">Admin Dashboard</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>View, add, edit, and delete colleges</li>
        <li>Manage college data and resources</li>
        <li>Access to all admin-only features</li>
      </ul>
      {/* Add more admin controls/components here */}
    </div>
  );
};

export default AdminDashboard;
