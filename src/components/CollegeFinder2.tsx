import React, { useState, useEffect } from 'react';
import { College } from '../types/College';

interface CollegeFinder2Props {
  language?: string;
  states?: string[];
  colleges?: College[];
}

const CollegeFinder2: React.FC<CollegeFinder2Props> = ({
  language = 'en',
  states = [],
  colleges: propColleges = []
}) => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [filteredColleges, setFilteredColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  // Fetch B.Tech/Engineering colleges from backend
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        setLoading(true);
        
        // Use prop colleges if provided, otherwise fetch from API
        if (propColleges && propColleges.length > 0) {
          setColleges(propColleges);
          setFilteredColleges(propColleges);
          setLoading(false);
          return;
        }

        const response = await fetch('http://localhost:5001/api/colleges/btech');
        
        if (!response.ok) {
          throw new Error('Failed to fetch colleges');
        }
        
        const data = await response.json();
        
        if (data.success) {
          setColleges(data.data);
          setFilteredColleges(data.data);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load colleges');
        console.error('Error fetching B.Tech colleges:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, [propColleges]);

  // Filter colleges based on search criteria
  useEffect(() => {
    let filtered = colleges;

    if (searchTerm) {
      filtered = filtered.filter(college =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      filtered = filtered.filter(college =>
        college.type.toLowerCase().includes(selectedType.toLowerCase())
      );
    }

    if (selectedLocation) {
      filtered = filtered.filter(college =>
        college.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    if (selectedCourse) {
      filtered = filtered.filter(college =>
        college.courses.some(course =>
          course.toLowerCase().includes(selectedCourse.toLowerCase())
        )
      );
    }

    setFilteredColleges(filtered);
  }, [colleges, searchTerm, selectedType, selectedLocation, selectedCourse]);

  // Get unique values for filter dropdowns
  const uniqueTypes = [...new Set(colleges.map(college => college.type))];
  const uniqueLocations = [...new Set(colleges.map(college => college.location.split(',')[1]?.trim() || college.location))];
  const uniqueCourses = [...new Set(colleges.flatMap(college => college.courses))];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Engineering colleges...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️ Error</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Engineering & Technology Colleges
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover premier engineering institutions offering B.Tech, M.Tech, and specialized technology programs. 
            Find the perfect college to build your engineering career.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Showing {filteredColleges.length} of {colleges.length} colleges
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <input
                type="text"
                placeholder="Search colleges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Types</option>
              {uniqueTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Locations</option>
              {uniqueLocations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            {/* Course Filter */}
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Courses</option>
              {uniqueCourses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
        </div>

        {/* College Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredColleges.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-16 text-lg">
              No colleges found for your criteria.
            </div>
          ) : (
            filteredColleges.map(college => (
              <div
                key={college.id}
                className="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden transition transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={college.image || 'https://via.placeholder.com/400x200?text=No+Image'}
                    alt={college.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x200?text=No+Image';
                    }}
                  />
                  <div className="absolute top-2 right-2 bg-white px-2 py-1 text-sm font-semibold rounded shadow">
                    NIRF #{college.ranking}
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <h2 className="text-xl font-semibold line-clamp-2">{college.name}</h2>
                  <p className="text-gray-600">{college.location}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">{college.description}</p>

                  {/* Courses */}
                  <div className="flex flex-wrap gap-2">
                    {college.courses.slice(0, 3).map((course, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {course}
                      </span>
                    ))}
                    {college.courses.length > 3 && (
                      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs">
                        +{college.courses.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fees</span>
                      <span className="font-medium">{college.fees || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type</span>
                      <span className="font-medium">{college.type}</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <a
                      href={`tel:${college.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded">
                        Contact
                      </button>
                    </a>
                    <a
                      href={college.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded">
                        Website
                      </button>
                    </a>
                  </div>

                  <button className="mt-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-2 rounded hover:from-blue-700 hover:to-purple-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeFinder2;
