import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
    <Link to="/" className="font-bold text-xl">College Finder</Link>
    <nav>
      <Link className="mx-2 hover:underline" to="/explore">Explore Streams</Link>
      <Link className="mx-2 hover:underline" to="/after10th">After 10th</Link>
      <Link className="mx-2 hover:underline" to="/after12th">After 12th</Link>
      <Link className="mx-2 hover:underline" to="/chatbot">Chatbot</Link>
    </nav>
  </header>
);

export default Header;
