import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PathFinder India</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-blue-700 font-medium">Home</Link>
          <Link to="/explore" className="hover:text-blue-700 font-medium">Explore</Link>
          {isLoggedIn && (
            <Link to="/profile" className="hover:text-blue-700 font-medium">Profile</Link>
          )}
          {isLoggedIn ? (
            <button onClick={handleLogout} className="hover:text-blue-700 font-medium">Logout</button>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-700 font-medium">Login</Link>
              <Link to="/signup" className="hover:text-blue-700 font-medium">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
