import React, { useEffect, useState } from 'react';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Not logged in');
      return;
    }
    fetch('http://localhost:5001/api/profile', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(data => setProfile(data))
      .catch(() => setError('Failed to load profile'));
  }, []);

  if (error) return <div className="max-w-md mx-auto mt-10 text-red-600">{error}</div>;
  if (!profile) return <div className="max-w-md mx-auto mt-10">Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div><b>Username:</b> {profile.username}</div>
      <div><b>Email:</b> {profile.email}</div>
      <div className="text-gray-500 text-xs mt-2">Account created: {new Date(profile.createdAt).toLocaleString()}</div>
    </div>
  );
};

export default Profile;
