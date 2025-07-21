import React from 'react';
import CourseExplorer from '@/components/CourseExplorer';

const CoursesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Courses & Careers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover detailed information about courses, their duration, career prospects, and entrance exams across different fields.
          </p>
        </div>
        
        <CourseExplorer language="english" />
      </div>
    </div>
  );
};

export default CoursesPage;
