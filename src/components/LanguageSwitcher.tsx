import React, { useState } from 'react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },
  { code: 'ta', label: 'Tamil' },
  { code: 'bn', label: 'Bengali' },
  // Add more languages as needed
];

const LanguageSwitcher: React.FC = () => {
  const [selected, setSelected] = useState('en');
  return (
    <div className="inline-block">
      <select
        value={selected}
        onChange={e => setSelected(e.target.value)}
        className="border rounded px-2 py-1"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>{lang.label}</option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
