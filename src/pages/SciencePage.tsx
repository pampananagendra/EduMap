import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Microscope, Calculator, Atom, Stethoscope, Cpu, FlaskConical } from 'lucide-react';

const SciencePage: React.FC = () => {
  const scienceFields = [
    {
      id: 'engineering',
      title: 'Engineering',
      description: 'Design, build, and innovate with technology and mathematics',
      icon: Cpu,
      color: 'bg-blue-500',
      careers: ['Software Engineer', 'Mechanical Engineer', 'Civil Engineer', 'Electrical Engineer'],
      courses: ['B.Tech', 'B.E.', 'Diploma Engineering']
    },
    {
      id: 'medical',
      title: 'Medical Sciences',
      description: 'Healthcare, medicine, and life sciences for human welfare',
      icon: Stethoscope,
      color: 'bg-red-500',
      careers: ['Doctor', 'Surgeon', 'Pharmacist', 'Medical Researcher'],
      courses: ['MBBS', 'BDS', 'BAMS', 'B.Pharm']
    },
    {
      id: 'pure-sciences',
      title: 'Pure Sciences',
      description: 'Fundamental research in physics, chemistry, biology, and mathematics',
      icon: FlaskConical,
      color: 'bg-green-500',
      careers: ['Research Scientist', 'Lab Technician', 'Professor', 'Data Analyst'],
      courses: ['B.Sc Physics', 'B.Sc Chemistry', 'B.Sc Biology', 'B.Sc Mathematics']
    },
    {
      id: 'applied-sciences',
      title: 'Applied Sciences',
      description: 'Practical application of scientific principles in industry',
      icon: Atom,
      color: 'bg-purple-500',
      careers: ['Biotechnologist', 'Environmental Scientist', 'Food Technologist', 'Forensic Scientist'],
      courses: ['B.Sc Biotechnology', 'B.Sc Environmental Science', 'B.Sc Food Technology']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Science Stream
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the fascinating world of science and technology. From engineering to medicine, discover career paths that shape our future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {scienceFields.map((field) => {
            const IconComponent = field.icon;
            return (
              <Card key={field.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto ${field.color} rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800">{field.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 text-base leading-relaxed text-center">
                    {field.description}
                  </CardDescription>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Popular Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {field.courses.map((course, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Career Opportunities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {field.careers.map((career, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Explore Science Careers?</h2>
            <p className="text-gray-600 mb-6">
              Get detailed information about entrance exams, course requirements, and career prospects in science fields.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/courses"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Microscope className="mr-2 h-4 w-4" />
                Explore Courses
              </Link>
              <Link 
                to="/colleges"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Find Colleges
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SciencePage;
