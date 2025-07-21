
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Star, Phone, Globe, Mail, IndianRupee, BookOpen } from 'lucide-react';

interface CollegeFinderProps {
  language: string;
  defaultCourseFilter?: string;
}

// CollegeFinder lets users search and filter colleges by state, type, and course.
const CollegeFinder = ({ language, defaultCourseFilter }: CollegeFinderProps) => {
  // State for filters and search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(defaultCourseFilter || '');

  const content = {
    english: {
      title: "Find Your Perfect College",
      subtitle: "Search from thousands of colleges across India with detailed information",
      searchPlaceholder: "Search colleges...",
      filters: {
        state: "Select State",
        type: "College Type",
        course: "Course"
      },
      collegeTypes: ["Government", "Private", "Deemed", "Central University"],
      courses: ["B.Tech", "MBBS", "B.Com", "BA", "BCA", "MBA", "M.Tech"],
      details: {
        fees: "Annual Fees",
        contact: "Contact",
        website: "Website",
        courses: "Courses Offered",
        admissions: "Admissions",
        ranking: "NIRF Ranking"
      }
    },
    hindi: {
      title: "अपना परफेक्ट कॉलेज खोजें",
      subtitle: "विस्तृत जानकारी के साथ भारत भर के हजारों कॉलेजों में से खोजें",
      searchPlaceholder: "कॉलेज खोजें...",
      filters: {
        state: "राज्य चुनें",
        type: "कॉलेज का प्रकार",
        course: "कोर्स"
      },
      collegeTypes: ["सरकारी", "प्राइवेट", "डीम्ड", "केंद्रीय विश्वविद्यालय"],
      courses: ["B.Tech", "MBBS", "B.Com", "BA", "BCA", "MBA", "M.Tech"],
      details: {
        fees: "वार्षिक शुल्क",
        contact: "संपर्क",
        website: "वेबसाइट",
        courses: "उपलब्ध कोर्स",
        admissions: "प्रवेश",
        ranking: "NIRF रैंकिंग"
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

    // Sample college data. Add or edit colleges as needed.
 

  // List of states for filtering

// List of states for filtering
const states = [
  "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "West Bengal", 
  "Uttar Pradesh", "Gujarat", "Rajasthan", "Punjab", "Haryana"
];

}


export default CollegeFinder