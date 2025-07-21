
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Globe, MessageCircle, ChevronRight, Target, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import StreamSelector from '@/components/StreamSelector';
import CollegeFinder from '@/components/CollegeFinder2';
import CourseExplorer from '@/components/CourseExplorer';
import ChatBot from '@/components/ChatBot';
import LanguageToggle from '@/components/LanguageToggle';
import GraduationCapIcon from '@/components/icons/GraduationCapIcon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('english');

  // Debug logging
  console.log('Current activeSection:', activeSection);

  const content = {
    english: {
      heroTitle: "Choose Your Perfect Career Path",
      heroSubtitle: "Discover streams, courses, and colleges that match your dreams. Get expert guidance for your journey after 10th and 12th grade.",
      getStarted: "Get Started",
      exploreStreams: "Explore Streams",
      findColleges: "Find Colleges",
      careerGuidance: "Career Guidance",
      features: {
        streams: {
          title: "Stream Explorer",
          description: "Discover all academic paths after 10th and 12th grade"
        },
        colleges: {
          title: "College Finder",
          description: "Search thousands of colleges across India with detailed information"
        },
        guidance: {
          title: "AI Career Counselor",
          description: "Get personalized career advice from our intelligent chatbot"
        }
      },
      stats: {
        students: "10M+ Students Guided",
        colleges: "5000+ Colleges Listed",
        success: "95% Success Rate"
      }
    },
    hindi: {
      heroTitle: "अपना सही करियर पाथ चुनें",
      heroSubtitle: "अपने सपनों से मेल खाने वाले स्ट्रीम, कोर्स और कॉलेज खोजें। 10वीं और 12वीं के बाद की यात्रा के लिए विशेषज्ञ मार्गदर्शन प्राप्त करें।",
      getStarted: "शुरू करें",
      exploreStreams: "स्ट्रीम एक्सप्लोर करें",
      findColleges: "कॉलेज खोजें",
      careerGuidance: "करियर गाइडेंस",
      features: {
        streams: {
          title: "स्ट्रीम एक्सप्लोरर",
          description: "10वीं और 12वीं के बाद के सभी शैक्षणिक पथ खोजें"
        },
        colleges: {
          title: "कॉलेज फाइंडर",
          description: "विस्तृत जानकारी के साथ भारत भर के हजारों कॉलेजों की खोज करें"
        },
        guidance: {
          title: "AI करियर काउंसलर",
          description: "हमारे इंटेलिजेंट चैटबॉट से व्यक्तिगत करियर सलाह पाएं"
        }
      },
      stats: {
        students: "1 करोड़+ छात्रों का मार्गदर्शन",
        colleges: "5000+ कॉलेज सूचीबद्ध",
        success: "95% सफलता दर"
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  const renderContent = () => {
    switch (activeSection) {
      case 'streams':
        return <StreamSelector language={language} />;
      case 'colleges':
        return <CollegeFinder language={language} />;
      case 'courses':
        return <CourseExplorer language={language} />;
      default:
        return (
          <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-500 text-white overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <div className="animate-fade-in">
                  {/* Graduation Cap Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="animate-bounce">
                      <GraduationCapIcon size={80} className="drop-shadow-lg" color="#ffffff" />
                    </div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    {currentContent.heroTitle}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                    {currentContent.heroSubtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      onClick={() => {
                        console.log('Get Started button clicked - setting streams');
                        setActiveSection('streams');
                      }}
                    >
                      {currentContent.getStarted}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full backdrop-blur-sm"
                      onClick={() => {
                        console.log('Find Colleges button clicked - setting colleges');
                        setActiveSection('colleges');
                      }}
                    >
                      {currentContent.findColleges}
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/30 rounded-full animate-pulse delay-1000"></div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Your Options</h2>
                <p className="text-xl text-gray-600">Comprehensive tools to guide your educational journey</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => {
                  console.log('Stream card clicked - setting streams');
                  setActiveSection('streams');
                }}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-800">{currentContent.features.streams.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-lg">
                      {currentContent.features.streams.description}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => {
                  console.log('College card clicked - setting colleges');
                  setActiveSection('colleges');
                }}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-800">{currentContent.features.colleges.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-lg">
                      {currentContent.features.colleges.description}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => {
                  console.log('Guidance card clicked - chatbot should handle this');
                }}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-800">{currentContent.features.guidance.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-lg">
                      {currentContent.features.guidance.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <Users className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-3xl font-bold text-gray-800">{currentContent.stats.students}</h3>
                    <p className="text-gray-600">Happy Students</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Award className="h-12 w-12 text-emerald-600 mb-4" />
                    <h3 className="text-3xl font-bold text-gray-800">{currentContent.stats.colleges}</h3>
                    <p className="text-gray-600">Partner Colleges</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
                    <h3 className="text-3xl font-bold text-gray-800">{currentContent.stats.success}</h3>
                    <p className="text-gray-600">Success Stories</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
  {/* Navigation */}
  {/* Main Content */}
  {renderContent()}
  {/* Chatbot */}
  <ChatBot language={language} />
</div>
  );
};

export default Index;
