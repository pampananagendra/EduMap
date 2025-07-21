
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Calculator, Palette, Wrench, Briefcase, Heart, ChevronRight } from 'lucide-react';

interface StreamSelectorProps {
  language: string;
}

import CollegeFinder from './CollegeFinder2';
import CommerceCollegeFinder from './Commerce';
import Arts from './Arts';
import Polytechnic from './ui/Polytechnic';
import Iti from './ui/iti'
import { useEffect } from 'react';

const StreamSelector = ({ language }: StreamSelectorProps) => {
  const [selectedGrade, setSelectedGrade] = useState<'10th' | '12th' | null>(null);
  const [selectedStream, setSelectedStream] = useState<string | null>(null);

  const [showEngineeringColleges, setShowEngineeringColleges] = useState(false);
  const [showMedicalColleges, setShowMedicalColleges] = useState(false);
  const [showArtsColleges, setShowArtsColleges] = useState(false);
  const [showCommerceColleges, setShowCommerceColleges] = useState(false);
  const [polytechnicColleges, setPolytechnicColleges] = useState(false);
  const [iti, setIti] = useState(false);

  const [colleges, setColleges] = useState<any[]>([]);
  const [loadingColleges, setLoadingColleges] = useState(false);
  const [errorColleges, setErrorColleges] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedGrade) return;
    setLoadingColleges(true);
    setErrorColleges(null);
    let url = '';
    if (selectedGrade === '10th') url = 'http://localhost:5000/api/10th-colleges';
    if (selectedGrade === '12th') url = 'http://localhost:5000/api/12th-colleges';
    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     setColleges(data);
    //     setLoadingColleges(false);
    //   })
    //   .catch(err => {
    //     setErrorColleges('Failed to load colleges');
    //     setLoadingColleges(false);
    //   });
  }, [selectedGrade]);

  // Static data for medical colleges
  // List of top medical colleges in India. Add, remove, or edit as needed.
  const medicalColleges = [
    {
      name: "All India Institute of Medical Sciences Delhi",
      location: "New Delhi, Delhi",
      state: "Delhi",
      rank: 1,
      description: "Premier medical institute with world-class faculty and research facilities.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹1,628",
      type: "Government",
      contact: "https://www.aiims.edu/en/contact-us.html",
      website: "https://www.aiims.edu/en.html",
      details: "https://www.aiims.edu/en.html"
    },
    {
      name: "Post Graduate Institute of Medical Education and Research",
      location: "Chandigarh, Chandigarh",
      state: "Chandigarh",
      rank: 2,
      description: "Renowned for post-graduate medical education and research.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹2,085",
      type: "Government",
      contact: "https://pgimer.edu.in/PGIMER_PORTAL/PGIMERPORTAL/contact_us.jsp",
      website: "https://pgimer.edu.in/",
      details: "https://pgimer.edu.in/"
    },
    {
      name: "Christian Medical College",
      location: "Vellore, Tamil Nadu",
      state: "Tamil Nadu",
      rank: 3,
      description: "Leading private medical college with excellent clinical training.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh", "BSc Nursing"],
      fees: "₹48,330",
      type: "Private",
      contact: "https://www.cmch-vellore.edu/ContactUs.aspx",
      website: "https://www.cmch-vellore.edu/",
      details: "https://www.cmch-vellore.edu/"
    },
    {
      name: "National Institute of Mental Health and Neuro Sciences, Bangalore",
      location: "Bengaluru, Karnataka",
      state: "Karnataka",
      rank: 4,
      description: "Top institute for mental health and neurosciences in India.",
      courses: ["MBBS", "MD", "MCh", "PhD"],
      fees: "₹30,000",
      type: "Government",
      contact: "https://nimhans.ac.in/contact-us/",
      website: "https://nimhans.ac.in/",
      details: "https://nimhans.ac.in/"
    },
    {
      name: "Jawaharlal Institute of Post Graduate Medical Education and Research",
      location: "Puducherry, Pondicherry",
      state: "Pondicherry",
      rank: 5,
      description: "Prestigious government medical school and hospital.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹7,620",
      type: "Government",
      contact: "https://jipmer.edu.in/contact-us",
      website: "https://jipmer.edu.in/",
      details: "https://jipmer.edu.in/"
    },
    {
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences",
      location: "Lucknow, Uttar Pradesh",
      state: "Uttar Pradesh",
      rank: 6,
      description: "Advanced postgraduate medical institute in North India.",
      courses: ["MD", "MS", "DM", "MCh"],
      fees: "₹42,000",
      type: "Government",
      contact: "https://www.sgpgi.ac.in/contact.html",
      website: "https://www.sgpgi.ac.in/",
      details: "https://www.sgpgi.ac.in/"
    },
    {
      name: "Banaras Hindu University",
      location: "Varanasi, Uttar Pradesh",
      state: "Uttar Pradesh",
      rank: 7,
      description: "Historic university with a leading medical faculty.",
      courses: ["MBBS", "MD", "MS", "BDS", "BSc Nursing"],
      fees: "₹13,134",
      type: "Government",
      contact: "https://www.bhu.ac.in/contactus/",
      website: "https://www.bhu.ac.in/",
      details: "https://www.bhu.ac.in/"
    },
    {
      name: "Amrita Vishwa Vidyapeetham",
      location: "Coimbatore, Tamil Nadu",
      state: "Tamil Nadu",
      rank: 8,
      description: "Top-ranked private university with excellent medical programs.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹18,00,000",
      type: "Private",
      contact: "https://www.amrita.edu/contact/",
      website: "https://www.amrita.edu/",
      details: "https://www.amrita.edu/"
    },
    {
      name: "Kasturba Medical College, Manipal",
      location: "Manipal, Karnataka",
      state: "Karnataka",
      rank: 9,
      description: "Renowned private medical college with global recognition.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh", "BPT"],
      fees: "₹14,40,000",
      type: "Private",
      contact: "https://manipal.edu/kmc-manipal/contact-us.html",
      website: "https://manipal.edu/kmc-manipal.html",
      details: "https://manipal.edu/kmc-manipal.html"
    },
    {
      name: "Madras Medical College and Government General Hospital, Chennai",
      location: "Chennai, Tamil Nadu",
      state: "Tamil Nadu",
      rank: 10,
      description: "Oldest medical college in India with a strong reputation.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹13,610",
      type: "Government",
      contact: "https://www.mmc.tn.gov.in/contact-us/",
      website: "https://www.mmc.tn.gov.in/",
      details: "https://www.mmc.tn.gov.in/"
    },
    {
      name: "Institute of Medical Sciences, Banaras Hindu University",
      location: "Varanasi, Uttar Pradesh",
      state: "Uttar Pradesh",
      rank: 11,
      description: "A prestigious medical institute under BHU with a rich legacy in research and education.",
      courses: ["MBBS", "MD", "MS", "BDS", "PhD"],
      fees: "₹13,134",
      type: "Government",
      contact: "https://www.bhu.ac.in/contactus/",
      website: "https://www.bhu.ac.in/ims/",
      details: "https://www.bhu.ac.in/ims/"
    },
    {
      name: "King George’s Medical University",
      location: "Lucknow, Uttar Pradesh",
      state: "Uttar Pradesh",
      rank: 12,
      description: "One of the oldest and most renowned government medical universities in India.",
      courses: ["MBBS", "MD", "MS", "BDS", "PhD"],
      fees: "₹54,900",
      type: "Government",
      contact: "https://www.kgmu.org/contact_us.php",
      website: "https://www.kgmu.org/",
      details: "https://www.kgmu.org/"
    },
    {
      name: "St. John’s Medical College",
      location: "Bengaluru, Karnataka",
      state: "Karnataka",
      rank: 13,
      description: "A leading private medical college with a focus on holistic healthcare and research.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh", "BSc Nursing"],
      fees: "₹6,28,670",
      type: "Private",
      contact: "https://www.stjohns.in/contact_us.php",
      website: "https://www.stjohns.in/",
      details: "https://www.stjohns.in/"
    },
    {
      name: "Sri Ramachandra Institute of Higher Education and Research",
      location: "Chennai, Tamil Nadu",
      state: "Tamil Nadu",
      rank: 14,
      description: "A top private medical university with excellent infrastructure and clinical exposure.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh", "BDS"],
      fees: "₹22,00,000",
      type: "Private",
      contact: "https://www.sriramachandra.edu.in/university/contact-us/",
      website: "https://www.sriramachandra.edu.in/",
      details: "https://www.sriramachandra.edu.in/"
    },
    {
      name: "Aligarh Muslim University, Jawaharlal Nehru Medical College",
      location: "Aligarh, Uttar Pradesh",
      state: "Uttar Pradesh",
      rank: 15,
      description: "A government medical college known for its academic excellence and diverse student body.",
      courses: ["MBBS", "MD", "MS", "BDS", "Diploma"],
      fees: "₹40,000",
      type: "Government",
      contact: "https://www.amu.ac.in/contact-us",
      website: "https://www.amu.ac.in/",
      details: "https://www.amu.ac.in/"
    },
    {
      name: "Vardhman Mahavir Medical College & Safdarjung Hospital",
      location: "New Delhi, Delhi",
      state: "Delhi",
      rank: 16,
      description: "A premier government medical college affiliated to Guru Gobind Singh Indraprastha University.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹33,500",
      type: "Government",
      contact: "http://www.vmmc-sjh.nic.in/contactus.html",
      website: "http://www.vmmc-sjh.nic.in/",
      details: "http://www.vmmc-sjh.nic.in/"
    },
    {
      name: "Maulana Azad Medical College",
      location: "New Delhi, Delhi",
      state: "Delhi",
      rank: 17,
      description: "One of the top government medical colleges in India, located in the heart of Delhi.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh", "BDS"],
      fees: "₹2,445",
      type: "Government",
      contact: "https://www.mamc.ac.in/contact-us",
      website: "https://www.mamc.ac.in/",
      details: "https://www.mamc.ac.in/"
    },
    {
      name: "Dayanand Medical College & Hospital",
      location: "Ludhiana, Punjab",
      state: "Punjab",
      rank: 18,
      description: "A leading private medical college in North India with strong clinical programs.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh", "BSc Nursing"],
      fees: "₹6,60,000",
      type: "Private",
      contact: "https://dmch.edu/contact-us/",
      website: "https://dmch.edu/",
      details: "https://dmch.edu/"
    },
    {
      name: "Dr. D.Y. Patil Vidyapeeth, Pune",
      location: "Pune, Maharashtra",
      state: "Maharashtra",
      rank: 19,
      description: "A prominent private university with a well-established medical college.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh", "BDS"],
      fees: "₹25,75,000",
      type: "Private",
      contact: "https://dpu.edu.in/contact-us.aspx",
      website: "https://dpu.edu.in/",
      details: "https://dpu.edu.in/"
    },
    {
      name: "JSS Medical College",
      location: "Mysuru, Karnataka",
      state: "Karnataka",
      rank: 20,
      description: "A reputed private medical college with a focus on research and community health.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh", "BDS"],
      fees: "₹15,00,000",
      type: "Private",
      contact: "https://jssuni.edu.in/contact-us/",
      website: "https://jssuni.edu.in/",
      details: "https://jssuni.edu.in/"
    },
    {
      name: "Kasturba Medical College, Mangalore",
      location: "Mangalore, Karnataka",
      state: "Karnataka",
      rank: 21,
      description: "A top private medical college known for its academic excellence and research.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh", "BPT"],
      fees: "₹14,40,000",
      type: "Private",
      contact: "https://manipal.edu/kmc-mangalore/contact-us.html",
      website: "https://manipal.edu/kmc-mangalore.html",
      details: "https://manipal.edu/kmc-mangalore.html"
    },
    {
      name: "SRM Medical College Hospital and Research Centre",
      location: "Chennai, Tamil Nadu",
      state: "Tamil Nadu",
      rank: 22,
      description: "A leading private medical college with state-of-the-art facilities and research.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh", "BDS"],
      fees: "₹22,50,000",
      type: "Private",
      contact: "https://www.srmist.edu.in/contact-us/",
      website: "https://www.srmist.edu.in/medicine/",
      details: "https://www.srmist.edu.in/medicine/"
    },
    {
      name: "Hamdard Institute of Medical Sciences and Research",
      location: "New Delhi, Delhi",
      state: "Delhi",
      rank: 23,
      description: "A reputed private medical college with a focus on holistic healthcare and research.",
      courses: ["MBBS", "MD", "MS", "BDS"],
      fees: "₹12,00,000",
      type: "Private",
      contact: "https://www.himsr.co.in/contact-us/",
      website: "https://www.himsr.co.in/",
      details: "https://www.himsr.co.in/"
    },
    {
      name: "Government Medical College & Hospital, Chandigarh",
      location: "Chandigarh, Chandigarh",
      state: "Chandigarh",
      rank: 24,
      description: "A premier government medical college with modern infrastructure and clinical exposure.",
      courses: ["MBBS", "MD", "MS", "BDS"],
      fees: "₹25,000",
      type: "Government",
      contact: "http://gmch.gov.in/contact-us",
      website: "http://gmch.gov.in/",
      details: "http://gmch.gov.in/"
    },
    {
      name: "S. S. Institute of Medical Sciences & Research Centre, Davangere",
      location: "Davangere, Karnataka",
      state: "Karnataka",
      rank: 25,
      description: "A private medical college known for its quality education and research.",
      courses: ["MBBS", "MD", "MS", "BDS", "Diploma"],
      fees: "₹10,00,000",
      type: "Private",
      contact: "https://ssims.edu.in/contact-us/",
      website: "https://ssims.edu.in/",
      details: "https://ssims.edu.in/"
    },
    {
      name: "Government Stanley Medical College",
      location: "Chennai, Tamil Nadu",
      state: "Tamil Nadu",
      rank: 26,
      description: "A reputed government medical college with a strong clinical program.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹13,610",
      type: "Government",
      contact: "https://stanmed.net/contact-us/",
      website: "https://stanmed.net/",
      details: "https://stanmed.net/"
    },
    {
      name: "Government Medical College, Thiruvananthapuram",
      location: "Thiruvananthapuram, Kerala",
      state: "Kerala",
      rank: 27,
      description: "One of Kerala's top government medical colleges with a legacy of excellence.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh", "BDS"],
      fees: "₹23,500",
      type: "Government",
      contact: "https://www.tmc.kerala.gov.in/contact-us/",
      website: "https://www.tmc.kerala.gov.in/",
      details: "https://www.tmc.kerala.gov.in/"
    },
    {
      name: "Government Medical College, Kozhikode",
      location: "Kozhikode, Kerala",
      state: "Kerala",
      rank: 28,
      description: "A leading government medical college in North Kerala with excellent facilities.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh", "BDS"],
      fees: "₹23,500",
      type: "Government",
      contact: "https://www.govtmedicalcollegekozhikode.ac.in/contact-us/",
      website: "https://www.govtmedicalcollegekozhikode.ac.in/",
      details: "https://www.govtmedicalcollegekozhikode.ac.in/"
    },
    {
      name: "MGM Medical College, Indore",
      location: "Indore, Madhya Pradesh",
      state: "Madhya Pradesh",
      rank: 29,
      description: "A top government medical college in central India with a focus on research and clinical care.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh", "BDS"],
      fees: "₹1,00,000",
      type: "Government",
      contact: "https://www.mgmmcindore.in/contact-us/",
      website: "https://www.mgmmcindore.in/",
      details: "https://www.mgmmcindore.in/"
    },
    {
      name: "Grant Medical College & Sir J.J. Group of Hospitals",
      location: "Mumbai, Maharashtra",
      state: "Maharashtra",
      rank: 30,
      description: "A historic government medical college in Mumbai with a legacy of excellence.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh", "BDS"],
      fees: "₹95,000",
      type: "Government",
      contact: "https://www.gmcjjh.org/contact-us/",
      website: "https://www.gmcjjh.org/",
      details: "https://www.gmcjjh.org/"
    },
    {
      name: "B.J. Medical College",
      location: "Ahmedabad, Gujarat",
      state: "Gujarat",
      rank: 31,
      description: "A leading government medical college in Gujarat with a strong clinical focus.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹30,000",
      type: "Government",
      contact: "https://www.bjmc.org/contact-us/",
      website: "https://www.bjmc.org/",
      details: "https://www.bjmc.org/"
    },
    {
      name: "Government Medical College, Nagpur",
      location: "Nagpur, Maharashtra",
      state: "Maharashtra",
      rank: 32,
      description: "One of Maharashtra's top government medical colleges with a legacy of excellence.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹70,000",
      type: "Government",
      contact: "https://www.gmcnagpur.org/contact-us/",
      website: "https://www.gmcnagpur.org/",
      details: "https://www.gmcnagpur.org/"
    },
    {
      name: "Lokmanya Tilak Municipal Medical College",
      location: "Mumbai, Maharashtra",
      state: "Maharashtra",
      rank: 33,
      description: "A premier government medical college in Mumbai known for its trauma care and academics.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹95,000",
      type: "Government",
      contact: "https://www.ltmgh.com/contact-us/",
      website: "https://www.ltmgh.com/",
      details: "https://www.ltmgh.com/"
    },
    {
      name: "Bangalore Medical College and Research Institute",
      location: "Bengaluru, Karnataka",
      state: "Karnataka",
      rank: 34,
      description: "A top government medical college in Karnataka with excellent research facilities.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹60,000",
      type: "Government",
      contact: "https://www.bmcri.org/contact-us/",
      website: "https://www.bmcri.org/",
      details: "https://www.bmcri.org/"
    },
    {
      name: "Osmania Medical College",
      location: "Hyderabad, Telangana",
      state: "Telangana",
      rank: 35,
      description: "A historic government medical college in Hyderabad with a strong academic record.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹60,000",
      type: "Government",
      contact: "https://www.osmaniamedicalcollege.org/contact-us/",
      website: "https://www.osmaniamedicalcollege.org/",
      details: "https://www.osmaniamedicalcollege.org/"
    },
    {
      name: "Seth GS Medical College",
      location: "Mumbai, Maharashtra",
      state: "Maharashtra",
      rank: 36,
      description: "A renowned government medical college in Mumbai with a strong clinical program.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹95,000",
      type: "Government",
      contact: "https://www.kem.edu/contact-us/",
      website: "https://www.kem.edu/",
      details: "https://www.kem.edu/"
    },
    {
      name: "Topiwala National Medical College",
      location: "Mumbai, Maharashtra",
      state: "Maharashtra",
      rank: 37,
      description: "A leading government medical college in Mumbai with a focus on research and academics.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹95,000",
      type: "Government",
      contact: "https://www.tnmcnair.com/contact-us/",
      website: "https://www.tnmcnair.com/",
      details: "https://www.tnmcnair.com/"
    },
    {
      name: "Government Medical College, Patiala",
      location: "Patiala, Punjab",
      state: "Punjab",
      rank: 38,
      description: "A top government medical college in Punjab with a strong clinical reputation.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹80,000",
      type: "Government",
      contact: "https://www.gmcpatiala.com/contact-us/",
      website: "https://www.gmcpatiala.com/",
      details: "https://www.gmcpatiala.com/"
    },
    {
      name: "Rajendra Institute of Medical Sciences",
      location: "Ranchi, Jharkhand",
      state: "Jharkhand",
      rank: 39,
      description: "A leading government medical college in Jharkhand with a focus on research.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹40,000",
      type: "Government",
      contact: "https://www.rimsranchi.ac.in/contact-us/",
      website: "https://www.rimsranchi.ac.in/",
      details: "https://www.rimsranchi.ac.in/"
    },
    {
      name: "Nil Ratan Sircar Medical College",
      location: "Kolkata, West Bengal",
      state: "West Bengal",
      rank: 40,
      description: "A premier government medical college in Kolkata with a legacy of excellence.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹40,000",
      type: "Government",
      contact: "https://www.nrsmc.edu.in/contact-us/",
      website: "https://www.nrsmc.edu.in/",
      details: "https://www.nrsmc.edu.in/"
    },
    {
      name: "Government Medical College, Amritsar",
      location: "Amritsar, Punjab",
      state: "Punjab",
      rank: 41,
      description: "A top government medical college in Punjab with a focus on clinical care.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹80,000",
      type: "Government",
      contact: "https://www.gmc.edu.in/contact-us/",
      website: "https://www.gmc.edu.in/",
      details: "https://www.gmc.edu.in/"
    },
    {
      name: "Government Medical College, Surat",
      location: "Surat, Gujarat",
      state: "Gujarat",
      rank: 42,
      description: "A leading government medical college in Gujarat with modern facilities.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹30,000",
      type: "Government",
      contact: "https://www.gmcsurat.com/contact-us/",
      website: "https://www.gmcsurat.com/",
      details: "https://www.gmcsurat.com/"
    },
    {
      name: "Government Medical College, Baroda",
      location: "Vadodara, Gujarat",
      state: "Gujarat",
      rank: 43,
      description: "A top government medical college in Gujarat with a strong academic record.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹30,000",
      type: "Government",
      contact: "https://www.medicalcollegebaroda.edu.in/contact-us/",
      website: "https://www.medicalcollegebaroda.edu.in/",
      details: "https://www.medicalcollegebaroda.edu.in/"
    },
    {
      name: "Calcutta National Medical College",
      location: "Kolkata, West Bengal",
      state: "West Bengal",
      rank: 44,
      description: "A premier government medical college in Kolkata with a focus on academics and research.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹40,000",
      type: "Government",
      contact: "https://www.cnmckolkata.com/contact-us/",
      website: "https://www.cnmckolkata.com/",
      details: "https://www.cnmckolkata.com/"
    },
    {
      name: "Dr. SN Medical College",
      location: "Jodhpur, Rajasthan",
      state: "Rajasthan",
      rank: 45,
      description: "A leading government medical college in Rajasthan with a strong clinical program.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹90,000",
      type: "Government",
      contact: "https://www.drsnmcjodhpur.org/contact-us/",
      website: "https://www.drsnmcjodhpur.org/",
      details: "https://www.drsnmcjodhpur.org/"
    },
    {
      name: "Government Medical College, Jammu",
      location: "Jammu, Jammu & Kashmir",
      state: "Jammu & Kashmir",
      rank: 46,
      description: "A premier government medical college in Jammu & Kashmir with modern facilities.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹40,000",
      type: "Government",
      contact: "https://www.gmcjammu.nic.in/contactus.html",
      website: "https://www.gmcjammu.nic.in/",
      details: "https://www.gmcjammu.nic.in/"
    },
    {
      name: "Government Medical College, Bhavnagar",
      location: "Bhavnagar, Gujarat",
      state: "Gujarat",
      rank: 47,
      description: "A top government medical college in Gujarat with a focus on academics and research.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹30,000",
      type: "Government",
      contact: "https://www.gmcbhavnagar.edu.in/contact-us/",
      website: "https://www.gmcbhavnagar.edu.in/",
      details: "https://www.gmcbhavnagar.edu.in/"
    },
    {
      name: "Government Medical College, Kottayam",
      location: "Kottayam, Kerala",
      state: "Kerala",
      rank: 48,
      description: "A leading government medical college in Kerala with a strong clinical program.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹23,500",
      type: "Government",
      contact: "https://www.gmckottayam.edu.in/contact-us/",
      website: "https://www.gmckottayam.edu.in/",
      details: "https://www.gmckottayam.edu.in/"
    },
    {
      name: "Indira Gandhi Medical College",
      location: "Shimla, Himachal Pradesh",
      state: "Himachal Pradesh",
      rank: 49,
      description: "A premier government medical college in Himachal Pradesh with a focus on research and academics.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹60,000",
      type: "Government",
      contact: "https://www.igmcshimla.edu.in/contact-us/",
      website: "https://www.igmcshimla.edu.in/",
      details: "https://www.igmcshimla.edu.in/"
    },
    {
      name: "Pt. Jawahar Lal Nehru Memorial Medical College",
      location: "Raipur, Chhattisgarh",
      state: "Chhattisgarh",
      rank: 50,
      description: "A top government medical college in Chhattisgarh with modern facilities.",
      courses: ["MBBS", "MD", "MS", "DM", "MCh"],
      fees: "₹40,000",
      type: "Government",
      contact: "https://www.ptjnmcraipur.in/contact-us/",
      website: "https://www.ptjnmcraipur.in/",
      details: "https://www.ptjnmcraipur.in/"
    }
  ];

  const content = {
    english: {
      title: "Choose Your Educational Path",
      subtitle: "Select your current grade to explore available streams and career options",
      after10th: "After 10th Grade",
      after12th: "After 12th Grade",
      explore: "Explore Careers",
      streams: {
        science: {
          title: "Science Stream",
          description: "PCM, PCB, PCMB - Engineering, Research",
          careers: ["Engineer", "Scientist", "Researcher"]
        },
        commerce: {
          title: "Commerce Stream",
          description: "Accounting, Business, Economics, Finance",
          careers: ["CA", "MBA", "Banker", "Entrepreneur"]
        },
        arts: {
          title: "Arts/Humanities",
          description: "Literature, History, Psychology, Languages",
          careers: ["IAS Officer", "Lawyer", "Teacher", "Journalist"]
        },
        polytechnic: {
          title: "Polytechnic",
          description: "3-year diploma in technical fields",
          careers: ["Technician", "Designer", "Operator", "Supervisor"]
        },
        iti: {
          title: "ITI/Vocational",
          description: "Industrial Training Institute courses",
          careers: ["Skilled Worker", "Technician", "Self-employed", "Supervisor"]
        },
        medical: {
          title: "Medical Field",
          description: "MBBS, BDS, BAMS, Nursing, Pharmacy",
          careers: ["Doctor", "Dentist", "Nurse", "Pharmacist"]
        }
      }
    },
    hindi: {
      title: "अपना शैक्षणिक पथ चुनें",
      subtitle: "उपलब्ध स्ट्रीम और करियर विकल्पों का पता लगाने के लिए अपनी वर्तमान कक्षा का चयन करें",
      after10th: "10वीं के बाद",
      after12th: "12वीं के बाद",
      explore: "करियर एक्सप्लोर करें",
      streams: {
        science: {
          title: "साइंस स्ट्रीम",
          description: "PCM, PCB, PCMB - इंजीनियरिंग, मेडिकल, रिसर्च",
          careers: ["इंजीनियर", "डॉक्टर", "वैज्ञानिक", "शोधकर्ता"]
        },
        commerce: {
          title: "कॉमर्स स्ट्रीम",
          description: "लेखांकन, बिजनेस, अर्थशास्त्र, वित्त",
          careers: ["CA", "MBA", "बैंकर", "उद्यमी"]
        },
        arts: {
          title: "कला/मानविकी",
          description: "साहित्य, इतिहास, मनोविज्ञान, भाषाएं",
          careers: ["IAS अधिकारी", "वकील", "शिक्षक", "पत्रकार"]
        },
        polytechnic: {
          title: "पॉलिटेक्निक",
          description: "तकनीकी क्षेत्रों में 3 साल का डिप्लोमा",
          careers: ["तकनीशियन", "डिजाइनर", "ऑपरेटर", "सुपरवाइजर"]
        },
        iti: {
          title: "ITI/व्यावसायिक",
          description: "औद्योगिक प्रशिक्षण संस्थान पाठ्यक्रम",
          careers: ["कुशल कार्यकर्ता", "तकनीशियन", "स्वरोजगार", "सुपरवाइजर"]
        },
        medical: {
          title: "मेडिकल फील्ड",
          description: "MBBS, BDS, BAMS, नर्सिंग, फार्मेसी",
          careers: ["डॉक्टर", "दंत चिकित्सक", "नर्स", "फार्मासिस्ट"]
        }
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  const streamIcons = {
    science: Calculator,
    commerce: Briefcase,
    arts: Palette,
    polytechnic: Wrench,
    iti: Wrench,
    medical: Heart
  };

  const get10thStreams = () => ['science', 'commerce', 'arts', 'polytechnic', 'iti'];
  const get12thStreams = () => ['science', 'commerce', 'arts', 'medical'];

  const getAvailableStreams = () => {
    if (selectedGrade === '10th') return get10thStreams();
    if (selectedGrade === '12th') return get12thStreams();
    return [];
  };

  if (showMedicalColleges) {
    // Show a grid of medical college cards
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
        <div className="max-w-7xl mx-auto">
          <Button variant="outline" className="mb-6" onClick={() => setShowMedicalColleges(false)}>
            ← Back to Streams
          </Button>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Top Medical Colleges in India</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {medicalColleges.map((college, idx) => (
              <div
                key={college.name}
                className="bg-white rounded-xl shadow p-6 flex flex-col justify-between h-full"
                style={{ minHeight: 320 }}
              >
                {/* Header: Rank and Name */}
                <div style={{ marginBottom: 8 }}>
                  <span style={{ color: '#b7791f', fontWeight: 600, fontSize: 13 }}>
                    ★ NIRF #{college.rank}
                  </span>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: '6px 0 2px 0', color: '#22223b' }}>{college.name}</h3>
                  <div style={{ color: '#374151', fontSize: 14, display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: 4 }}>📍</span>
                    {college.location}
                  </div>
                </div>
                {/* Description */}
                <div style={{ fontSize: 14, color: '#444', marginBottom: 6 }}>{college.description}</div>
                {/* Courses */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
                  {college.courses.map((course, i) => (
                    <span
                      key={course}
                      style={{ background: '#e0e7ff', color: '#3730a3', padding: '2px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600 }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
                {/* Fees and Type */}
                <div style={{ fontSize: 13, color: '#333', marginBottom: 2 }}>
                  <b>Annual Fees:</b> {college.fees}
                </div>
                <div style={{ fontSize: 13, color: '#333', marginBottom: 10 }}>
                  <b>Type:</b> {college.type}
                </div>
                {/* Actions */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                  <a
                    href={college.contact}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ flex: 1, background: '#f3f4f6', color: '#222', borderRadius: 6, padding: '7px 0', textAlign: 'center', textDecoration: 'none', fontSize: 13 }}
                  >
                    Contact
                  </a>
                  <a
                    href={college.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ flex: 1, background: '#f3f4f6', color: '#222', borderRadius: 6, padding: '7px 0', textAlign: 'center', textDecoration: 'none', fontSize: 13 }}
                  >
                    Website
                  </a>
                </div>
                <a
                  href={college.details}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '100%',
                    display: 'inline-block',
                    marginTop: 4,
                    background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                    color: 'white',
                    fontWeight: 600,
                    borderRadius: 6,
                    padding: '8px 0',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontSize: 14,
                  }}
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (showEngineeringColleges) {
    console.log(language);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
        <div className="max-w-7xl mx-auto">
          <Button variant="outline" className="mb-6" onClick={() => setShowEngineeringColleges(false)}>
            ← Back to Streams
          </Button>
          <CollegeFinder language={language}  />
        </div>
      </div>
    );
  }
  if (showCommerceColleges) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
        <div className="max-w-7xl mx-auto">
          <Button variant="outline" className="mb-6" onClick={() => setShowCommerceColleges(false)}>
            ← Back to Streams
          </Button>
          <CommerceCollegeFinder language={language}  />
        </div>
      </div>
    );
  }
  if (showArtsColleges) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
        <div className="max-w-7xl mx-auto">
          <Button variant="outline" className="mb-6" onClick={() => setShowArtsColleges(false)}>
            ← Back to Streams
          </Button>
          <Arts language={language}  />
        </div>
      </div>
    );
  }

  if(polytechnicColleges){
    console.log("kwilsl");
    
        return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
        <div className="max-w-7xl mx-auto">
          <Button variant="outline" className="mb-6" onClick={() => setPolytechnicColleges(false)}>
            ← Back to Streams
          </Button>
          <Polytechnic language={language}  />
        </div>
      </div>
    );

  }
  if(iti){
    
        return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
        <div className="max-w-7xl mx-auto">
          <Button variant="outline" className="mb-6" onClick={() => setPolytechnicColleges(false)}>
            ← Back to Streams
          </Button>
          <Iti language={language}  />
        </div>
      </div>
    );

  }

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

        {!selectedGrade && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card 
              className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-blue-500 to-blue-600 text-white"
              onClick={() => setSelectedGrade('10th')}
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl">{currentContent.after10th}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-100 text-lg text-center">
                  Explore intermediate, diploma, and vocational options
                </CardDescription>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-purple-500 to-purple-600 text-white"
              onClick={() => setSelectedGrade('12th')}
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl">{currentContent.after12th}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-purple-100 text-lg text-center">
                  Discover undergraduate programs and professional courses
                </CardDescription>
              </CardContent>
            </Card>
          </div>
      )}

      {selectedGrade && (
          <div className="space-y-8">
            <div className="text-center">
              <Button 
                variant="outline" 
                onClick={() => setSelectedGrade(null)}
                className="mb-6"
              >
                ← Back to Grade Selection
              </Button>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Available Streams After {selectedGrade}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getAvailableStreams().map((streamKey) => {
                const stream = currentContent.streams[streamKey as keyof typeof currentContent.streams];
                const Icon = streamIcons[streamKey as keyof typeof streamIcons];
                
                return (
                  <Card 
                    key={streamKey}
                    className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={() => setSelectedStream(streamKey)}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{stream.title}</CardTitle>
                      <CardDescription className="text-base">
                        {stream.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="font-medium text-gray-700">Career Options:</p>
                        <div className="flex flex-wrap gap-2">
                          {stream.careers.map((career, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                            >
                              {career}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Button
                        className="w-full mt-4"
                        size="sm"
                        onClick={() => {
                          if (streamKey === 'science') {
                            setShowEngineeringColleges(true);
                          }
                          if (streamKey === 'medical') {
                            setShowMedicalColleges(true);
                          }
                          if (streamKey === 'commerce') {
                            setShowCommerceColleges(true);
                          }
                          if (streamKey === 'arts') {
                              setShowArtsColleges(true);
                          }
                          if(streamKey === 'polytechnic'){
                            console.log('cksme');
                            setPolytechnicColleges(true);
                          }
                          if(streamKey === 'iti'){
                            console.log('cksme');
                            setIti(true);
                          }
                        }}
                      >
                        {currentContent.explore}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StreamSelector;
