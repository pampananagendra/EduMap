import React from 'react';

const ResetAppButton: React.FC = () => {
  const handleReset = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <button
      onClick={handleReset}
      style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 9999 }}
      className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700"
    >
      Reset App
    </button>
  );
};

export default ResetAppButton;
