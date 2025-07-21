// This is the main App file - it's like the foundation of our website
// All other components and pages are built on top of this

// Importing all the things we need for our app
import { Toaster } from "@/components/ui/toaster"; // For showing notifications
import { Toaster as Sonner } from "@/components/ui/sonner"; // Another type of notification
import { TooltipProvider } from "@/components/ui/tooltip"; // For showing helpful tooltips
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // For managing data
import { BrowserRouter } from "react-router-dom"; // For navigation between pages
import Navbar from "./components/Navbar"; // Top navigation bar
import ResetAppButton from "./components/ResetAppButton"; // Button to reset the app
import Footer from "./components/Footer"; // Bottom footer
import AppRoutes from "./routes/index"; // All our page routes

// This creates a client for managing data across our app
const queryClient = new QueryClient();

// This is our main App component - it wraps everything together
const App = () => (
  <QueryClientProvider client={queryClient}> {/* Provides data management to all components */}
    <TooltipProvider> {/* Enables tooltips throughout the app */}
      <Toaster /> {/* Shows toast notifications */}
      <Sonner /> {/* Shows sonner notifications */}
      <BrowserRouter> {/* Enables navigation between pages */}
        <Navbar /> {/* Top navigation bar - always visible */}
        <ResetAppButton /> {/* Button to reset app state */}
        <AppRoutes /> {/* All our page routes go here */}
        <Footer /> {/* Bottom footer - always visible */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
