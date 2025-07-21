import React from 'react';
import { useParams } from 'react-router-dom';

const CourseByStream: React.FC = () => {
  const { stream } = useParams();
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-4 text-indigo-800">Courses for {stream}</h2>
      <p>View courses and colleges for the selected stream.</p>
      {/* Add course/college list for the stream here */}
    </div>
  );
};

export default CourseByStream;
