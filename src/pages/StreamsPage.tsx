// This page shows all the different academic streams students can choose from
// It's like a menu of different study paths after 10th or 12th grade

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Calculator, Palette, Microscope, Users, Globe } from 'lucide-react';

// This is our main component that shows the streams page
const StreamsPage: React.FC = () => {
  // Here I'm creating an array of all the streams with their details
  // Each stream has an id, title, description, icon, color, and career options
  const streams = [
    {
      id: 'science',
      title: 'Science Stream',
      description: 'Physics, Chemistry, Biology, Mathematics - Gateway to Engineering, Medical, and Research careers',
      icon: Microscope,
      color: 'bg-blue-500',
      link: '/streams/science',
      careers: ['Engineer', 'Doctor', 'Researcher', 'Scientist']
    },
    {
      id: 'commerce',
      title: 'Commerce Stream',
      description: 'Business Studies, Economics, Accountancy - Path to Business, Finance, and Management careers',
      icon: Calculator,
      color: 'bg-green-500',
      link: '/streams/commerce',
      careers: ['CA', 'Business Analyst', 'Manager', 'Entrepreneur']
    },
    {
      id: 'arts',
      title: 'Arts & Humanities',
      description: 'Literature, History, Psychology, Political Science - Creative and Social Science careers',
      icon: Palette,
      color: 'bg-purple-500',
      link: '/streams/arts',
      careers: ['Teacher', 'Journalist', 'Psychologist', 'Civil Servant']
    }
  ];

  // This is what gets displayed on the page
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page title and description */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Academic Stream
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different academic streams and discover the career paths that align with your interests and goals.
          </p>
        </div>

        {/* Grid layout to show all streams in cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Loop through each stream and create a card for it */}
          {streams.map((stream) => {
            const IconComponent = stream.icon; // Get the icon for this stream
            return (
              <Card key={stream.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto ${stream.color} rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800">{stream.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 text-base leading-relaxed">
                    {stream.description}
                  </CardDescription>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Popular Careers:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {stream.careers.map((career, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={stream.link}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explore {stream.title}
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h2>
            <p className="text-gray-600 mb-6">
              Not sure which stream is right for you? Take our career assessment or chat with our AI counselor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/chatbot"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                <Users className="mr-2 h-4 w-4" />
                Chat with AI Counselor
              </Link>
              <Link 
                to="/explore"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Globe className="mr-2 h-4 w-4" />
                Explore All Options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamsPage;
