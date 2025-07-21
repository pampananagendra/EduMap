
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Clock, TrendingUp, Users, ChevronRight, Award } from 'lucide-react';

interface CourseExplorerProps {
  language: string;
}

const CourseExplorer = ({ language }: CourseExplorerProps) => {
  const [selectedCategory, setSelectedCategory] = useState('engineering');

  const content = {
    english: {
      title: "Explore Courses & Careers",
      subtitle: "Discover detailed information about courses, their duration, career prospects, and entrance exams",
      categories: {
        engineering: "Engineering",
        medical: "Medical",
        management: "Management",
        arts: "Arts & Humanities",
        science: "Pure Sciences",
        commerce: "Commerce"
      },
      details: {
        duration: "Duration",
        eligibility: "Eligibility",
        entranceExams: "Entrance Exams",
        averageSalary: "Average Salary",
        topColleges: "Top Colleges",
        careerOptions: "Career Options"
      }
    },
    hindi: {
      title: "कोर्स और करियर एक्सप्लोर करें",
      subtitle: "कोर्स, उनकी अवधि, करियर संभावनाओं और प्रवेश परीक्षाओं के बारे में विस्तृत जानकारी खोजें",
      categories: {
        engineering: "इंजीनियरिंग",
        medical: "मेडिकल",
        management: "मैनेजमेंट",
        arts: "कला और मानविकी",
        science: "शुद्ध विज्ञान",
        commerce: "कॉमर्स"
      },
      details: {
        duration: "अवधि",
        eligibility: "योग्यता",
        entranceExams: "प्रवेश परीक्षा",
        averageSalary: "औसत वेतन",
        topColleges: "टॉप कॉलेज",
        careerOptions: "करियर विकल्प"
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  const courses = {
    engineering: [
      {
        name: "B.Tech Computer Science",
        duration: "4 years",
        eligibility: "12th with PCM (75%+)",
        entranceExams: ["JEE Main", "JEE Advanced", "BITSAT"],
        averageSalary: "₹8-15 LPA",
        topColleges: ["IIT Delhi", "IIT Bombay", "BITS Pilani"],
        careers: ["Software Engineer", "Data Scientist", "Product Manager", "Tech Lead"],
        description: "Computer Science Engineering focuses on programming, algorithms, and software development.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
      },
      {
        name: "B.Tech Mechanical",
        duration: "4 years",
        eligibility: "12th with PCM (75%+)",
        entranceExams: ["JEE Main", "JEE Advanced"],
        averageSalary: "₹6-12 LPA",
        topColleges: ["IIT Madras", "IIT Kanpur", "NIT Trichy"],
        careers: ["Mechanical Engineer", "Design Engineer", "Project Manager", "R&D Engineer"],
        description: "Mechanical Engineering deals with design, manufacturing, and maintenance of mechanical systems.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
      }
    ],
    medical: [
      {
        name: "MBBS",
        duration: "5.5 years",
        eligibility: "12th with PCB (50%+)",
        entranceExams: ["NEET UG"],
        averageSalary: "₹6-20 LPA",
        topColleges: ["AIIMS Delhi", "AIIMS Jodhpur", "JIPMER"],
        careers: ["Doctor", "Surgeon", "Medical Officer", "Specialist"],
        description: "Bachelor of Medicine and Bachelor of Surgery - comprehensive medical education.",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=250&fit=crop"
      },
      {
        name: "BDS",
        duration: "5 years",
        eligibility: "12th with PCB (50%+)",
        entranceExams: ["NEET UG"],
        averageSalary: "₹4-10 LPA",
        topColleges: ["Maulana Azad", "King George Medical", "BHU"],
        careers: ["Dentist", "Oral Surgeon", "Orthodontist", "Private Practice"],
        description: "Bachelor of Dental Surgery focuses on oral health and dental treatments.",
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=250&fit=crop"
      }
    ],
    management: [
      {
        name: "MBA",
        duration: "2 years",
        eligibility: "Graduation (50%+)",
        entranceExams: ["CAT", "XAT", "GMAT", "MAT"],
        averageSalary: "₹12-25 LPA",
        topColleges: ["IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta"],
        careers: ["Manager", "Consultant", "Business Analyst", "Entrepreneur"],
        description: "Master of Business Administration - comprehensive business and management education.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
      }
    ]
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'engineering': return BookOpen;
      case 'medical': return Award;
      case 'management': return TrendingUp;
      default: return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto p-1 bg-white shadow-lg rounded-xl">
            {Object.entries(currentContent.categories).map(([key, label]) => (
              <TabsTrigger 
                key={key} 
                value={key}
                className="flex flex-col items-center p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg transition-all duration-300"
              >
                <span className="text-sm font-medium">{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(courses).map(([category, categoryDetails]) => (
            <TabsContent key={category} value={category} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {categoryDetails.map((course, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="relative">
                      <img 
                        src={course.image} 
                        alt={course.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white text-gray-800 font-semibold">
                          <Clock className="w-3 h-3 mr-1" />
                          {course.duration}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-2xl text-gray-800">{course.name}</CardTitle>
                      <CardDescription className="text-base">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="font-semibold text-gray-700 mb-2">{currentContent.details.eligibility}</p>
                          <p className="text-sm text-gray-600">{course.eligibility}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-700 mb-2">{currentContent.details.averageSalary}</p>
                          <p className="text-sm text-gray-600 font-medium text-green-600">{course.averageSalary}</p>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-700 mb-2">{currentContent.details.entranceExams}</p>
                        <div className="flex flex-wrap gap-2">
                          {course.entranceExams.map((exam, examIndex) => (
                            <Badge key={examIndex} variant="outline" className="bg-blue-50 text-blue-700">
                              {exam}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-700 mb-2">{currentContent.details.careerOptions}</p>
                        <div className="flex flex-wrap gap-2">
                          {course.careers.slice(0, 3).map((career, careerIndex) => (
                            <Badge key={careerIndex} variant="secondary" className="bg-purple-50 text-purple-700">
                              {career}
                            </Badge>
                          ))}
                          {course.careers.length > 3 && (
                            <Badge variant="outline">+{course.careers.length - 3} more</Badge>
                          )}
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-700 mb-2">{currentContent.details.topColleges}</p>
                        <div className="space-y-1">
                          {course.topColleges.slice(0, 3).map((college, collegeIndex) => (
                            <p key={collegeIndex} className="text-sm text-gray-600 flex items-center">
                              <Award className="w-3 h-3 mr-2 text-yellow-500" />
                              {college}
                            </p>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        View Detailed Course Info
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default CourseExplorer;
