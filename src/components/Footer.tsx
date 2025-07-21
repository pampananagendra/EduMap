import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-100 text-center py-4 mt-10 text-gray-600 border-t">
    &copy; {new Date().getFullYear()} College Finder. All rights reserved.
  </footer>
);

export default Footer;
