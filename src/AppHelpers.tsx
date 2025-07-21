import React from 'react';
import { useNavigate } from 'react-router-dom';

// RedirectToDashboard: redirects to /dashboard
export const RedirectToDashboard: React.FC = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/dashboard', { replace: true });
  }, [navigate]);
  return null;
};

// DashboardRouter: shows AdminDashboard or UserDashboard based on role
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';

export const DashboardRouter: React.FC = () => {
  const [role, setRole] = React.useState<string | null>(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    // Try to get role from localStorage (set on login)
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  React.useEffect(() => {
    if (role && role !== 'admin' && role !== 'user') {
      // Invalid or missing role, redirect to login
      navigate('/login', { replace: true });
    }
  }, [role, navigate]);

  console.log('role:', role);
  if (role === 'admin') {
    return <AdminDashboard />;
  }
  if (role === 'user') {
    return <UserDashboard />;
  }
  // If role is not known yet, or not set, show loading
  return <div className="text-center mt-10">Loading dashboard...</div>;
};
