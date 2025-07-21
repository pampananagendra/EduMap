// This file contains all the routes for our educational website
// Routes are like different pages that users can visit

import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

// Pages for login and signup (anyone can access these)
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";

// Main pages of our website
import Index from "../pages/Index"; // Home page
import NotFound from "../pages/NotFound"; // 404 error page

// Pages for educational content (only logged-in users can see these)
import ExploreStreams from "../pages/ExploreStreams";
import After10th from "../pages/After10th";
import After12th from "../pages/After12th";
import CourseByStream from "../pages/CourseByStream";
import CollegeDetail from "../pages/CollegeDetail";

// User dashboard and profile pages
import { DashboardRouter } from "../AppHelpers";
import Profile from "../pages/Profile";

// Chatbot page for getting help
import ChatbotPage from "../pages/Chatbot";

// Educational content pages - organized by category
import StreamsPage from "../pages/StreamsPage";
import CoursesPage from "../pages/CoursesPage";
import CollegesPage from "../pages/CollegesPage";

// Stream-specific pages
import ArtsPage from "../pages/ArtsPage";
import CommercePage from "../pages/CommercePage";
import SciencePage from "../pages/SciencePage";

// Import college components directly for specific routes
import Arts from "../components/Arts";
import Commerce from "../components/Commerce";
import CollegeFinder2 from "../components/CollegeFinder2";

// This is the main function that sets up all our website routes
const AppRoutes = () => {
  return (
    <Routes>
      {/* These pages don't need login - anyone can visit them */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Home page - users must be logged in to see this */}
      <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
      
      {/* Main educational pages - all require login */}
      <Route path="/explore" element={<ProtectedRoute><ExploreStreams /></ProtectedRoute>} />
      <Route path="/streams" element={<ProtectedRoute><StreamsPage /></ProtectedRoute>} />
      <Route path="/courses" element={<ProtectedRoute><CoursesPage /></ProtectedRoute>} />
      <Route path="/colleges" element={<ProtectedRoute><CollegesPage /></ProtectedRoute>} />
      
      {/* Pages for students after 10th and 12th grade */}
      <Route path="/after10th" element={<ProtectedRoute><After10th /></ProtectedRoute>} />
      <Route path="/after12th" element={<ProtectedRoute><After12th /></ProtectedRoute>} />
      
      {/* Specific pages for each stream (Arts, Commerce, Science) */}
      <Route path="/streams/arts" element={<ProtectedRoute><ArtsPage /></ProtectedRoute>} />
      <Route path="/streams/commerce" element={<ProtectedRoute><CommercePage /></ProtectedRoute>} />
      <Route path="/streams/science" element={<ProtectedRoute><SciencePage /></ProtectedRoute>} />
      
      {/* Direct college component routes for better navigation */}
      <Route path="/colleges/arts" element={<ProtectedRoute><Arts /></ProtectedRoute>} />
      <Route path="/colleges/commerce" element={<ProtectedRoute><Commerce /></ProtectedRoute>} />
      <Route path="/colleges/engineering" element={<ProtectedRoute><CollegeFinder2 /></ProtectedRoute>} />
      <Route path="/colleges/btech" element={<ProtectedRoute><CollegeFinder2 /></ProtectedRoute>} />
      <Route path="/colleges/polytechnic" element={<ProtectedRoute><div className="min-h-screen bg-gray-50 p-6"><div className="max-w-7xl mx-auto text-center"><h1 className="text-4xl font-bold text-gray-800 mb-4">Polytechnic Colleges</h1><p className="text-lg text-gray-600">Coming Soon - Polytechnic college listings will be available here.</p></div></div></ProtectedRoute>} />
      
      {/* Enhanced dynamic routes with better organization */}
      <Route path="/courses/:stream" element={<ProtectedRoute><CourseByStream /></ProtectedRoute>} />
      <Route path="/college/:id" element={<ProtectedRoute><CollegeDetail /></ProtectedRoute>} />
      <Route path="/colleges/:id" element={<ProtectedRoute><CollegeDetail /></ProtectedRoute>} />
      
      {/* Stream-specific course routes */}
      <Route path="/courses/arts" element={<ProtectedRoute><CourseByStream /></ProtectedRoute>} />
      <Route path="/courses/commerce" element={<ProtectedRoute><CourseByStream /></ProtectedRoute>} />
      <Route path="/courses/science" element={<ProtectedRoute><CourseByStream /></ProtectedRoute>} />
      <Route path="/courses/engineering" element={<ProtectedRoute><CourseByStream /></ProtectedRoute>} />
      
      {/* Alternative route names for better SEO and user experience */}
      <Route path="/arts-colleges" element={<ProtectedRoute><Arts /></ProtectedRoute>} />
      <Route path="/commerce-colleges" element={<ProtectedRoute><Commerce /></ProtectedRoute>} />
      <Route path="/engineering-colleges" element={<ProtectedRoute><CollegeFinder2 /></ProtectedRoute>} />
      <Route path="/btech-colleges" element={<ProtectedRoute><CollegeFinder2 /></ProtectedRoute>} />
      
      {/* Chatbot pages - both /chatbot and /chat go to same page */}
      <Route path="/chatbot" element={<ProtectedRoute><ChatbotPage /></ProtectedRoute>} />
      <Route path="/chat" element={<ProtectedRoute><ChatbotPage /></ProtectedRoute>} />
      
      {/* User account pages */}
      <Route path="/dashboard" element={<ProtectedRoute><DashboardRouter /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      
      {/* Help and support routes */}
      <Route path="/help" element={<ProtectedRoute><ChatbotPage /></ProtectedRoute>} />
      <Route path="/support" element={<ProtectedRoute><ChatbotPage /></ProtectedRoute>} />
      
      {/* If user visits a page that doesn't exist, show 404 error */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
