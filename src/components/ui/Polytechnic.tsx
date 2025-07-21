import React, { useState } from 'react';
import { College } from '../types/College';


const defaultColleges: College[] = [
  {
    "id": 1,
    "name": "Government Polytechnic College, Vijayawada",
    "location": "Benz Circle, Vijayawada",
    "state": "Andhra Pradesh",
    "type": "Government",
    "ranking": "Prominent Government Polytechnic (Regional)",
    "fees": "₹6,000 - ₹18,000 (estimated total for 3 years, highly subsidized)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering",
      "Diploma in Automobile Engineering",
      "Diploma in Metallurgical Engineering"
    ],
    "phone": "0866-2475575",
    "website": "N/A (Refer to SBTET AP website)",
    "email": "gptvja@gmail.com",
    "image": "N/A",
    "description": "A well-established government polytechnic college providing affordable technical education and skill development in various engineering disciplines after 10th grade."
  },
  {
    "id": 2,
    "name": "S.V. Government Polytechnic College, Tirupati",
    "location": "Tirupati",
    "state": "Andhra Pradesh",
    "type": "Government",
    "ranking": "Prominent Government Polytechnic (Regional)",
    "fees": "₹6,000 - ₹18,000 (estimated total for 3 years, highly subsidized)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering",
      "Diploma in Computer Engineering"
    ],
    "phone": "Search online (e.g., Justdial)",
    "website": "N/A (Refer to SBTET AP website)",
    "email": "N/A",
    "image": "N/A",
    "description": "A renowned government polytechnic in Tirupati offering a range of diploma engineering courses, known for its academic discipline and practical training."
  },
  {
    "id": 3,
    "name": "Vignan's Foundation for Science, Technology, and Research",
    "location": "Vadlamudi, Guntur",
    "state": "Andhra Pradesh",
    "type": "Private",
    "ranking": "Highly Reputable Private Polytechnic (Regional)",
    "fees": "₹2,20,000 (estimated total for 3 years)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering",
      "Diploma in Computer Engineering"
    ],
    "phone": "+91-863-2334861",
    "website": "https://www.vignan.ac.in/",
    "email": "admissions@vignan.ac.in",
    "image": "N/A (Refer to college website)",
    "description": "A well-known private institution offering various diploma engineering programs with modern facilities and a focus on industry-relevant skills."
  },
  {
    "id": 4,
    "name": "Aditya Institute of Technology and Management (AITAM)",
    "location": "Tekkali, Srikakulam",
    "state": "Andhra Pradesh",
    "type": "Private",
    "ranking": "Reputable Private Polytechnic (Regional)",
    "fees": "₹75,000 (estimated total for 3 years)",
    "courses": [
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering",
      "Diploma in Civil Engineering"
    ],
    "phone": "+91-8945-245666",
    "website": "https://www.adityatekkali.edu.in/",
    "email": "info@adityatekkali.edu.in",
    "image": "N/A (Refer to college website)",
    "description": "A reputed private institution providing diploma engineering courses with a focus on practical knowledge and industry exposure."
  },
  {
    "id": 5,
    "name": "MIC College of Technology",
    "location": "Kanchikacherla, Krishna District",
    "state": "Andhra Pradesh",
    "type": "Private",
    "ranking": "Reputable Private Polytechnic (Regional)",
    "fees": "₹75,000 (estimated total for 3 years)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering",
      "Diploma in Mechanical Engineering"
    ],
    "phone": "+91-8678-273535",
    "website": "https://mictech.ac.in/",
    "email": "principal@mictech.ac.in",
    "image": "N/A (Refer to college website)",
    "description": "A private college offering various diploma engineering programs, aiming to provide quality technical education and skills."
  },
  {
    "id": 6,
    "name": "Annamacharya Institute of Technology and Sciences (AITS)",
    "location": "Kadapa",
    "state": "Andhra Pradesh",
    "type": "Private",
    "ranking": "Reputable Private Polytechnic (Regional)",
    "fees": "₹75,000 (estimated total for 3 years)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering",
      "Diploma in Computer Engineering"
    ],
    "phone": "+91-8562-201003",
    "website": "https://www.aitskadapa.ac.in/",
    "email": "aitskadapa@gmail.com",
    "image": "N/A (Refer to college website)",
    "description": "A well-known private institution offering diploma courses with a focus on comprehensive technical education and student development."
  },
  {
    "id": 7,
    "name": "DIET (Dhanekula Institute of Engineering and Technology)",
    "location": "Ganguru, Vijayawada",
    "state": "Andhra Pradesh",
    "type": "Private",
    "ranking": "Reputable Private Polytechnic (Regional)",
    "fees": "₹75,000 (estimated total for 3 years)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering"
    ],
    "phone": "+91-866-2583842",
    "website": "https://www.diet.ac.in/",
    "email": "info@diet.ac.in",
    "image": "N/A (Refer to college website)",
    "description": "A private engineering and technology institute that also offers diploma courses, known for its academic rigor and practical learning environment."
  },
  {
    "id": 8,
    "name": "RK College of Engineering (RKCE)",
    "location": "Vijayawada",
    "state": "Andhra Pradesh",
    "type": "Private",
    "ranking": "Reputable Private Polytechnic (Regional)",
    "fees": "₹50,000 (estimated total for 3 years)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical and Electronics Engineering"
    ],
    "phone": "+91-866-2476566",
    "website": "https://www.rkce.ac.in/",
    "email": "info@rkce.ac.in",
    "image": "N/A (Refer to college website)",
    "description": "A private engineering college also offering diploma programs, aiming to provide quality technical education to students."
  },
  {
    "id": 9,
    "name": "Andhra Polytechnic College (APC)",
    "location": "Kakinada",
    "state": "Andhra Pradesh",
    "type": "Government",
    "ranking": "Prominent Government Polytechnic (Regional)",
    "fees": "₹14,100 (estimated total for 3 years, highly subsidized)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering",
      "Diploma in Computer Engineering"
    ],
    "phone": "0884-2374169",
    "website": "N/A (Refer to SBTET AP website)",
    "email": "apckkd@gmail.com",
    "image": "N/A",
    "description": "A long-standing government polytechnic college in Kakinada, offering various diploma programs to foster technical skills among students."
  },
  {
    "id": 10,
    "name": "Quli Qutub Shah Government Polytechnic",
    "location": "Hyderabad",
    "state": "Telangana",
    "type": "Government",
    "ranking": "Prominent Government Polytechnic (Regional)",
    "fees": "₹6,000 - ₹18,000 (estimated total for 3 years, highly subsidized)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Automobile Engineering"
    ],
    "phone": "040-24657159",
    "website": "N/A (Refer to SBTET TS website)",
    "email": "gqpits@gmail.com",
    "image": "N/A",
    "description": "A key government polytechnic in Hyderabad, providing extensive diploma courses and practical training for aspiring technicians and engineers."
  },
  {
    "id": 11,
    "name": "VJTI (Veermata Jijabai Technological Institute)",
    "location": "Matunga East, Mumbai",
    "state": "Maharashtra",
    "type": "Government (Autonomous)",
    "ranking": "Top Tier Polytechnic (National)",
    "fees": "₹23,000 - ₹34,220 (estimated total for 3 years, subsidized)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Electronics Engineering",
      "Diploma in Production Engineering"
    ],
    "phone": "+91-22-24198101",
    "website": "https://www.vjti.ac.in/",
    "email": "director@vjti.ac.in",
    "image": "N/A (Refer to college website)",
    "description": "One of India's oldest and most prestigious engineering institutes, offering highly regarded diploma programs with excellent academic standards and facilities."
  },
  {
    "id": 12,
    "name": "ICT Mumbai (Institute of Chemical Technology)",
    "location": "Matunga East, Mumbai",
    "state": "Maharashtra",
    "type": "Government (Deemed University)",
    "ranking": "Top Tier Polytechnic (Chemical Technology - National)",
    "fees": "₹30,000 (estimated total for 3 years)",
    "courses": [
      "Diploma in Chemical Engineering",
      "Diploma in Chemical Technology",
      "Diploma in Oils, Oleochemicals and Surfactants"
    ],
    "phone": "+91-22-33611111",
    "website": "https://www.ictmumbai.edu.in/",
    "email": "vc@ictmumbai.edu.in",
    "image": "N/A (Refer to college website)",
    "description": "A world-renowned institute specializing in chemical engineering and technology, offering niche diploma courses with strong research and industry focus."
  },
  {
    "id": 13,
    "name": "Government Polytechnic, Pune",
    "location": "Shivajinagar, Pune",
    "state": "Maharashtra",
    "type": "Government",
    "ranking": "Prominent Government Polytechnic (Regional)",
    "fees": "₹8,000 - ₹25,000 (estimated total for 3 years, highly subsidized)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Electronics & Telecommunication Engineering",
      "Diploma in Information Technology"
    ],
    "phone": "020-25654303",
    "website": "http://gppune.ac.in/",
    "email": "principal.gppune@dtemaharashtra.gov.in",
    "image": "N/A",
    "description": "A leading government polytechnic in Maharashtra, known for its quality technical education, well-equipped labs, and strong industry linkages."
  },
  {
    "id": 14,
    "name": "Delhi Skill and Entrepreneurship University (DSEU)",
    "location": "New Delhi (Multiple Campuses)",
    "state": "Delhi",
    "type": "Government (University)",
    "ranking": "Prominent Skill University",
    "fees": "₹30,000 - ₹70,000 (estimated annual, varies by course/campus)",
    "courses": [
      "Diploma in Computer Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Applied Arts",
      "Diploma in Fashion Design",
      "Diploma in Pharmacy"
    ],
    "phone": "+91-11-20892000",
    "website": "https://dseu.ac.in/",
    "email": "admissions@dseu.ac.in",
    "image": "N/A (Refer to university website)",
    "description": "A state university dedicated to skill-based education, offering a wide range of industry-aligned diploma programs with a focus on employability and entrepreneurship."
  },
  {
    "id": 15,
    "name": "Government Polytechnic College, Chennai (Central Polytechnic College)",
    "location": "Guindy, Chennai",
    "state": "Tamil Nadu",
    "type": "Government",
    "ranking": "Prominent Government Polytechnic (Regional)",
    "fees": "₹5,000 - ₹15,000 (estimated total for 3 years, highly subsidized)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Textile Technology"
    ],
    "phone": "044-22501007",
    "website": "https://www.tn.gov.in/rti/proactive/81_DTE/PRO_APO_1_A_4_2016.pdf (General DTE site, individual college website may vary)",
    "email": "N/A",
    "image": "N/A",
    "description": "A historic and well-regarded government polytechnic in Chennai, offering a comprehensive range of diploma courses with a strong emphasis on practical skills."
  },
  {
    "id": 16,
    "name": "MS Ramaiah Polytechnic",
    "location": "Bengaluru",
    "state": "Karnataka",
    "type": "Private",
    "ranking": "Highly Reputable Private Polytechnic (Regional)",
    "fees": "₹80,000 - ₹1,50,000 (estimated total for 3 years, varies by course)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering",
      "Diploma in Computer Science & Engineering",
      "Diploma in Automobile Engineering"
    ],
    "phone": "+91-80-23608753",
    "website": "https://www.msrit.edu/institutions/polytechnic/",
    "email": "principal.poly@msrit.edu",
    "image": "N/A (Refer to college website)",
    "description": "Part of the prestigious Ramaiah Group, this polytechnic offers quality diploma engineering programs with good infrastructure and industry connections."
  },
  {
    "id": 17,
    "name": "Government Polytechnic, Ahmedabad",
    "location": "Ahmedabad",
    "state": "Gujarat",
    "type": "Government",
    "ranking": "Prominent Government Polytechnic (Regional)",
    "fees": "₹5,000 - ₹15,000 (estimated total for 3 years, highly subsidized)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Information Technology"
    ],
    "phone": "079-26305146",
    "website": "https://www.gpahmedabad.ac.in/",
    "email": "gpahmedabad@gmail.com",
    "image": "N/A",
    "description": "A leading government polytechnic in Gujarat, providing a wide array of diploma courses to cater to the industrial needs of the region."
  },
  {
    "id": 18,
    "name": "Asansol Polytechnic",
    "location": "Asansol",
    "state": "West Bengal",
    "type": "Government",
    "ranking": "Prominent Government Polytechnic (Regional)",
    "fees": "₹940 (estimated annual, extremely subsidized)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Computer Science & Technology",
      "Diploma in Electronics & Telecommunication Engineering"
    ],
    "phone": "0341-2253059",
    "website": "http://www.asansolpolytechnic.com/",
    "email": "info@asansolpolytechnic.com",
    "image": "N/A",
    "description": "A well-established government polytechnic in West Bengal, known for its very low fees and commitment to providing accessible technical education."
  },
  {
    "id": 19,
    "name": "Dr. Ambedkar Institute of Technology for Handicapped (AITH)",
    "location": "Kanpur",
    "state": "Uttar Pradesh",
    "type": "Government (Specialized)",
    "ranking": "Unique & Reputable (National)",
    "fees": "₹57,000 (estimated total for 3 years)",
    "courses": [
      "Diploma in Computer Science & Engineering",
      "Diploma in Electronics Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Architecture"
    ],
    "phone": "0512-2580325",
    "website": "http://aith.ac.in/",
    "email": "aithkanpur@gmail.com",
    "image": "N/A",
    "description": "A specialized government institute providing technical education for students with disabilities, fostering inclusion and skill development."
  },
  {
    "id": 20,
    "name": "Government Polytechnic, Lucknow",
    "location": "Lucknow",
    "state": "Uttar Pradesh",
    "type": "Government",
    "ranking": "Prominent Government Polytechnic (Regional)",
    "fees": "₹10,000 - ₹30,000 (estimated total for 3 years, highly subsidized)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics Engineering",
      "Diploma in Computer Science & Engineering",
      "Diploma in Architecture Assistantship"
    ],
    "phone": "0522-2436440",
    "website": "http://gplko.org.in/",
    "email": "info@gplko.org.in",
    "image": "N/A",
    "description": "A well-known government polytechnic in Uttar Pradesh, offering a wide range of engineering diploma courses with a focus on practical training."
  },
  {
    "id": 21,
    "name": "Government Women's Polytechnic, Patna",
    "location": "Patna",
    "state": "Bihar",
    "type": "Government (Women's)",
    "ranking": "Prominent Government Polytechnic (Regional, Women's)",
    "fees": "₹1,060 (estimated annual, extremely subsidized)",
    "courses": [
      "Diploma in Electronics Engineering",
      "Diploma in Computer Science & Engineering",
      "Diploma in Fashion Design",
      "Diploma in Library & Information Science"
    ],
    "phone": "0612-2270381",
    "website": "N/A (Refer to Bihar DTE website)",
    "email": "N/A",
    "image": "N/A",
    "description": "A government polytechnic dedicated to women's technical education in Bihar, offering various diploma courses with a focus on skill development and empowerment."
  },
  {
    "id": 22,
    "name": "Government Polytechnic, Chandigarh",
    "location": "Sector 26, Chandigarh",
    "state": "Chandigarh",
    "type": "Government",
    "ranking": "Prominent Government Polytechnic (Regional)",
    "fees": "₹8,000 - ₹20,000 (estimated total for 3 years, highly subsidized)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Architecture Assistantship"
    ],
    "phone": "0172-2790898",
    "website": "http://www.gpchandigarh.ac.in/",
    "email": "gpc_chd@yahoo.co.in",
    "image": "N/A",
    "description": "A reputable government polytechnic in Chandigarh, providing quality technical education and practical training in various engineering disciplines."
  },
  {
    "id": 23,
    "name": "Government Polytechnic, Bhubaneswar",
    "location": "Bhubaneswar",
    "state": "Odisha",
    "type": "Government",
    "ranking": "Prominent Government Polytechnic (Regional)",
    "fees": "₹5,000 - ₹15,000 (estimated total for 3 years, highly subsidized)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Electronics Engineering",
      "Diploma in Computer Science & Engineering",
      "Diploma in Automobile Engineering"
    ],
    "phone": "0674-2391693",
    "website": "http://www.gpbbsr.ac.in/",
    "email": "principal.gpbbsr@nic.in",
    "image": "N/A",
    "description": "A leading government polytechnic in Odisha, known for its comprehensive diploma programs and contribution to technical skill development in the region."
  },
  {
    "id": 24,
    "name": "Government Polytechnic, Visakhapatnam",
    "location": "Visakhapatnam",
    "state": "Andhra Pradesh",
    "type": "Government",
    "ranking": "Prominent Government Polytechnic (Regional)",
    "fees": "₹6,000 - ₹18,000 (estimated total for 3 years, highly subsidized)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering",
      "Diploma in Computer Engineering"
    ],
    "phone": "0891-2530404",
    "website": "N/A (Refer to SBTET AP website)",
    "email": "N/A",
    "image": "N/A",
    "description": "A significant government polytechnic in Visakhapatnam, offering various diploma engineering courses to students aspiring for technical careers."
  },
  {
    "id": 25,
    "name": "Kallam Haranadhareddy Institute of Technology (KHIT)",
    "location": "Chowdavaram, Guntur",
    "state": "Andhra Pradesh",
    "type": "Private",
    "ranking": "Reputable Private Polytechnic (Regional)",
    "fees": "₹75,000 (estimated total for 3 years)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering",
      "Diploma in Computer Engineering"
    ],
    "phone": "+91-863-2333633",
    "website": "https://www.khitguntur.ac.in/",
    "email": "principal@khitguntur.ac.in",
    "image": "N/A (Refer to college website)",
    "description": "A private institute offering diploma engineering courses, known for its academic facilities and commitment to student placements."
  },
  {
    "id": 26,
    "name": "Sri Jyothi Polytechnic",
    "location": "Kalavapamula, Krishna Dist.",
    "state": "Andhra Pradesh",
    "type": "Private",
    "ranking": "Reputable Private Polytechnic (Regional)",
    "fees": "₹70,000 - ₹1,00,000 (estimated total for 3 years)",
    "courses": [
      "Diploma in Artificial Intelligence & Machine Learning",
      "Diploma in Computer Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Electrical & Electronics Engineering"
    ],
    "phone": "08676-283921",
    "website": "https://www.srijyothipolytechnic.com/",
    "email": "srijyothipolytechnic@gmail.com",
    "image": "N/A (Refer to college website)",
    "description": "A private polytechnic offering both conventional and emerging diploma engineering branches, with a focus on practical learning and industry readiness."
  },
  {
    "id": 27,
    "name": "Vikas College of Engineering and Technology",
    "location": "Nunna, Vijayawada",
    "state": "Andhra Pradesh",
    "type": "Private",
    "ranking": "Reputable Private Polytechnic (Regional)",
    "fees": "₹72,000 (estimated total for 3 years)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering"
    ],
    "phone": "0866-2476566",
    "website": "https://vikas.edu.in/",
    "email": "principal.vcet@vikas.edu.in",
    "image": "N/A (Refer to college website)",
    "description": "A private engineering college that also offers diploma programs, aiming to provide quality technical education and prepare students for the industry."
  },
  {
    "id": 28,
    "name": "Government Polytechnic, Guntur",
    "location": "Guntur",
    "state": "Andhra Pradesh",
    "type": "Government",
    "ranking": "Prominent Government Polytechnic (Regional)",
    "fees": "₹6,000 - ₹18,000 (estimated total for 3 years, highly subsidized)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering",
      "Diploma in Computer Engineering"
    ],
    "phone": "0863-2253305",
    "website": "N/A (Refer to SBTET AP website)",
    "email": "gpa.principal@gmail.com",
    "image": "N/A",
    "description": "A major government polytechnic in Guntur, offering a range of diploma courses with a focus on practical skills and employability."
  },
  {
    "id": 29,
    "name": "Jain College (Polytechnic)",
    "location": "Bengaluru",
    "state": "Karnataka",
    "type": "Private",
    "ranking": "Prominent Private Polytechnic (Regional)",
    "fees": "₹80,000 - ₹1,50,000 (estimated total for 3 years, varies by course)",
    "courses": [
      "Diploma in Computer Science & Engineering",
      "Diploma in Electronics & Communication Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering"
    ],
    "phone": "+91-80-46501738",
    "website": "https://jaincollege.ac.in/polytechnic/",
    "email": "admissions@jaincollege.ac.in",
    "image": "N/A (Refer to college website)",
    "description": "Part of the Jain Group, this polytechnic offers diploma programs with modern infrastructure and a focus on holistic development and industry readiness."
  },
  {
    "id": 30,
    "name": "Government Polytechnic College, Nashik",
    "location": "Nashik",
    "state": "Maharashtra",
    "type": "Government",
    "ranking": "Prominent Government Polytechnic (Regional)",
    "fees": "₹8,000 - ₹25,000 (estimated total for 3 years, highly subsidized)",
    "courses": [
      "Diploma in Civil Engineering",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical Engineering",
      "Diploma in Computer Engineering",
      "Diploma in Electronics & Telecommunication Engineering",
      "Diploma in Information Technology"
    ],
    "phone": "0253-2461221",
    "website": "http://www.gpnashik.ac.in/",
    "email": "principal.gpnashik@dtemaharashtra.gov.in",
    "image": "N/A",
    "description": "A well-regarded government polytechnic in Nashik, providing quality technical education and practical training in various engineering disciplines."
  }
];

const defaultStates: string[] = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
  "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
  "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];


interface ArtsProps {
  language?: string;
  states?: string[];
  colleges?: College[];
}

const Arts: React.FC<ArtsProps> = ({
    language = 'en',
    colleges = [],
    states = defaultStates
  }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  

  // Defensive: handle undefined colleges
//   const filteredColleges = (colleges ?? []).filter(college => {
//     const matchesQuery =
//       college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       college.location.toLowerCase().includes(searchQuery.toLowerCase());

//     const matchesState = selectedState
//       ? college.location.toLowerCase().includes(selectedState.toLowerCase())
//       : true;

//     const matchesType = selectedType ? college.type === selectedType : true;
//     const matchesCourse = selectedCourse
//       ? college.courses.includes(selectedCourse)
//       : true;

//     return matchesQuery && matchesState && matchesType && matchesCourse;
//   });

const filteredColleges = defaultColleges;

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-2">College Finder</h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Discover top colleges across India based on your preferences.
      </p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-10 justify-center items-center">
        <input
          type="search"
          placeholder="Search colleges"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full md:w-72 px-4 py-2 border rounded-md shadow-sm"
        />
        <select
          value={selectedState}
          onChange={e => setSelectedState(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="">All States</option>
          {states.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
        <select
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="">All Types</option>
          <option value="Government">Government</option>
          <option value="Private">Private</option>
        </select>
        <select
          value={selectedCourse}
          onChange={e => setSelectedCourse(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="">All Courses</option>
          <option value="B.Tech">B.Tech</option>
          <option value="M.Tech">M.Tech</option>
          <option value="PhD">PhD</option>
        </select>
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
                  onError={e => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x200?text=No+Image';
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
  );
};

export default Arts;
