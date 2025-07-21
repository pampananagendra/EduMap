import React, { useState } from 'react';
import { College } from '../types/College';


const defaultColleges: College[] = [
  {
    "id": 1,
    "name": "Government ITI, Vijayawada",
    "location": "Benz Circle, Vijayawada",
    "state": "Andhra Pradesh",
    "ranking": "Prominent Government ITI (Regional)",
    "description": "A well-established government Industrial Training Institute providing affordable and job-oriented technical education in various trades. Focuses on practical skills highly valued by industries. Admission is based on merit of 10th class.",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic (Motor Vehicle) (2 years)",
      "Welder (1 year)",
      "Draughtsman (Civil) (2 years)",
      "Computer Operator & Programming Assistant (COPA) (1 year)",
      "Electronics Mechanic (2 years)",
      "Plumber (1 year)",
      "Dress Making (1 year)"
    ],
    "fees": "₹6,000 - ₹10,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "0866-2475575",
    "website": "N/A (Refer to SBTET AP / Directorate of Employment & Training, AP websites for admission details)",
    "email": "gptvja@gmail.com",
    "image": "N/A",
    "details": "https://www.collegedekho.com/colleges/govt-iti-tirupati-courses"
  },
  {
    "id": 2,
    "name": "Sairam Industrial Training Institute",
    "location": "Ibrahimpatnam, Vijayawada",
    "state": "Andhra Pradesh",
    "ranking": "Reputable Private ITI (Regional)",
    "description": "A private ITI offering various trades with a focus on practical training and placement assistance. Aims to prepare students for immediate employment in relevant industries.",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic Diesel (1 year)",
      "Welder (1 year)"
    ],
    "fees": "₹20,000 - ₹50,000 (estimated total for course duration, varies by trade)",
    "type": "Private (Vocational)",
    "phone": "+91-9849143339",
    "website": "N/A (Check local directories/Justdial for updated info)",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.justdial.com/Vijayawada/ITI-Institutes/nct-10269316"
  },
  {
    "id": 3,
    "name": "Vivekananda Industrial Training Institute",
    "location": "Auto Nagar, Vijayawada",
    "state": "Andhra Pradesh",
    "ranking": "Reputable Private ITI (Regional)",
    "description": "A private ITI offering technical trades designed to impart practical skills for various industrial applications. Focuses on hands-on training and career readiness.",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic (Motor Vehicle) (2 years)"
    ],
    "fees": "₹20,000 - ₹50,000 (estimated total for course duration, varies by trade)",
    "type": "Private (Vocational)",
    "phone": "Search online (e.g., Justdial)",
    "website": "N/A",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.justdial.com/Vijayawada/ITI-Institutes/nct-10269316"
  },
  {
    "id": 4,
    "name": "Dr. B.R. Ambedkar Memorial Industrial Training Institute",
    "location": "Gollapudi, Vijayawada",
    "state": "Andhra Pradesh",
    "ranking": "Reputable Private ITI (Regional)",
    "description": "A private industrial training institute dedicated to providing vocational skills and training to students after 10th class, aiming for their employment and self-sufficiency.",
    "courses": [
      "Draughtsman (Civil) (2 years)",
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic Diesel (1 year)"
    ],
    "fees": "₹20,000 - ₹50,000 (estimated total for course duration, varies by trade)",
    "type": "Private (Vocational)",
    "phone": "Search online (e.g., Justdial)",
    "website": "N/A",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.justdial.com/Vijayawada/ITI-Institutes/nct-10269316"
  },
  {
    "id": 5,
    "name": "Krishnaveni ITI",
    "location": "Gudivada (near Vijayawada)",
    "state": "Andhra Pradesh",
    "ranking": "Reputable Private ITI (Regional)",
    "description": "A private Industrial Training Institute focused on offering various technical trades. Committed to providing practical education and preparing students for industrial jobs.",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic Diesel (1 year)"
    ],
    "fees": "₹20,000 - ₹50,000 (estimated total for course duration, varies by trade)",
    "type": "Private (Vocational)",
    "phone": "Search online (e.g., Justdial)",
    "website": "N/A",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.justdial.com/Vijayawada/ITI-Institutes/nct-10269316"
  },
  {
    "id": 6,
    "name": "Government Industrial Training Institute, Visakhapatnam",
    "location": "Industrial Estate, Visakhapatnam",
    "state": "Andhra Pradesh",
    "ranking": "Prominent Government ITI (Regional)",
    "description": "One of the key government ITIs in Andhra Pradesh, offering a broad range of engineering and non-engineering trades. Known for its strong practical training and contribution to local industry workforce.",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic (Motor Vehicle) (2 years)",
      "Turner (2 years)",
      "Welder (1 year)",
      "Computer Operator & Programming Assistant (COPA) (1 year)",
      "Electronics Mechanic (2 years)"
    ],
    "fees": "₹6,000 - ₹10,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "0891-2558707",
    "website": "N/A (Refer to SBTET AP / Directorate of Employment & Training, AP websites)",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.mapsofindia.com/education/iti-colleges/visakhapatnam.html"
  },
  {
    "id": 7,
    "name": "Kakatiya Pvt Industrial Training Institute",
    "location": "Gajuwaka, Visakhapatnam",
    "state": "Andhra Pradesh",
    "ranking": "Reputable Private ITI (Regional)",
    "description": "An established private ITI in North Coastal Andhra Pradesh, providing quality technical courses with a strong emphasis on practicals, industrial exposure, and placement assistance.",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Welder (1 year)",
      "Mechanic Diesel (1 year)"
    ],
    "fees": "₹20,000 - ₹50,000 (estimated total for course duration, varies by trade)",
    "type": "Private (Vocational)",
    "phone": "0891-2517858",
    "website": "https://www.kakatiyaitivizag.com/",
    "email": "kakatiyaitivizag@gmail.com",
    "image": "N/A (Refer to college website)",
    "details": "https://www.kakatiyaitivizag.com/"
  },
  {
    "id": 8,
    "name": "Don Bosco Industrial Training Centre",
    "location": "Guntur",
    "state": "Andhra Pradesh",
    "ranking": "Reputable Private ITI (Regional)",
    "description": "A well-known private ITI with a strong focus on vocational training and skill development. Offers a range of trades and emphasizes holistic development and employability.",
    "courses": [
      "Carpenter (1 year)",
      "Electrician (2 years)",
      "Electronics Mechanic (2 years)",
      "Fitter (2 years)"
    ],
    "fees": "₹20,000 - ₹50,000 (estimated total for course duration, varies by trade)",
    "type": "Private (Vocational)",
    "phone": "Search online (e.g., Collegedekho)",
    "website": "N/A",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.collegedekho.com/articles/list-of-iti-colleges-in-andhra-pradesh/"
  },
  {
    "id": 9,
    "name": "Government ITI, Tirupati",
    "location": "Tirupati",
    "state": "Andhra Pradesh",
    "ranking": "Prominent Government ITI (Regional)",
    "description": "A significant government ITI in the Chittoor district, providing affordable technical education in various trades to students seeking vocational skills and direct employment.",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic Diesel (1 year)",
      "Wireman (2 years)"
    ],
    "fees": "₹6,000 - ₹10,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "Search online (e.g., Collegedekho)",
    "website": "N/A (Refer to SBTET AP / Directorate of Employment & Training, AP websites)",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.collegedekho.com/colleges/govt-iti-tirupati-courses"
  },
  {
    "id": 10,
    "name": "Government ITI, Kurnool",
    "location": "Kurnool",
    "state": "Andhra Pradesh",
    "ranking": "Prominent Government ITI (Regional)",
    "description": "A well-established government ITI in Kurnool, offering a range of engineering and non-engineering trades to cater to the skill development needs of the region.",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic Diesel (1 year)",
      "Sewing Technology (1 year)",
      "Stenography (English) (1 year)"
    ],
    "fees": "₹6,000 - ₹10,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "08518-2402825",
    "website": "N/A (Refer to SBTET AP / Directorate of Employment & Training, AP websites)",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.collegedekho.com/articles/list-of-iti-colleges-in-andhra-pradesh/"
  },
  {
    "id": 11,
    "name": "Government Industrial Training Institute, Chennai",
    "location": "Guindy, Chennai",
    "state": "Tamil Nadu",
    "ranking": "Top Tier Government ITI (National)",
    "description": "One of the oldest and most prominent government ITIs in India, known for its comprehensive training programs, well-equipped workshops, and high placement rates in various industries.",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic (Motor Vehicle) (2 years)",
      "Welder (1 year)",
      "Computer Operator & Programming Assistant (COPA) (1 year)",
      "Electronics Mechanic (2 years)"
    ],
    "fees": "₹1,600 - ₹7,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "044-22501007",
    "website": "N/A (Refer to Directorate of Employment and Training, Tamil Nadu website)",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.jagranjosh.com/colleges/list-of-government-iti-colleges-in-india-clga-1737096954-1"
  },
  {
    "id": 12,
    "name": "Industrial Training Institute, Mumbai",
    "location": "Mumbai",
    "state": "Maharashtra",
    "ranking": "Top Tier Government ITI (National)",
    "description": "A highly regarded government ITI offering a wide range of vocational courses. Known for its state-of-the-art equipment, experienced instructors, and strong industry tie-ups, leading to good placement records.",
    "courses": [
      "Welding (1 year)",
      "Electrical (2 years)",
      "Automotive Trades (2 years)",
      "Fitter (2 years)",
      "Computer Operator & Programming Assistant (COPA) (1 year)"
    ],
    "fees": "₹1,000 - ₹10,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "Search online for specific branch contacts",
    "website": "N/A (Refer to Maharashtra DVE&T website)",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.jagranjosh.com/colleges/list-of-government-iti-colleges-in-india-clga-1737096954-1"
  },
  {
    "id": 13,
    "name": "Government Industrial Training Institute, Hyderabad",
    "location": "Mettuguda, Hyderabad",
    "state": "Telangana",
    "ranking": "Prominent Government ITI (Regional)",
    "description": "A key government ITI in Telangana, providing comprehensive vocational training across various trades. Known for its advanced workshops and industry-oriented curriculum.",
    "courses": [
      "Fitter (2 years)",
      "Mechanic (Motor Vehicle) (2 years)",
      "Electrician (2 years)",
      "Welder (1 year)",
      "Draughtsman (Civil) (2 years)"
    ],
    "fees": "₹6,000 - ₹10,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "040-27801869",
    "website": "N/A (Refer to SBTET Telangana website)",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.jagranjosh.com/colleges/list-of-government-iti-colleges-in-india-clga-1737096954-1"
  },
  {
    "id": 14,
    "name": "Government Industrial Training Institute, Bengaluru",
    "location": "Mysuru Road, Bengaluru",
    "state": "Karnataka",
    "ranking": "Prominent Government ITI (Regional)",
    "description": "A well-regarded government ITI in Karnataka, offering robust training programs and good facilities. Provides various engineering and non-engineering trades relevant to the local industrial ecosystem.",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic (Motor Vehicle) (2 years)",
      "Electronics Mechanic (2 years)",
      "Plumber (1 year)"
    ],
    "fees": "₹5,000 - ₹15,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "080-26743958",
    "website": "N/A (Refer to Karnataka DTE website)",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.jagranjosh.com/colleges/list-of-government-iti-colleges-in-india-clga-1737096954-1"
  },
  {
    "id": 15,
    "name": "Government Industrial Training Institute, Kolkata",
    "location": "Taratala, Kolkata",
    "state": "West Bengal",
    "ranking": "Prominent Government ITI (Regional)",
    "description": "A leading government ITI in West Bengal, known for its focus on industrial trades and skill development. Offers various engineering trades and contributes to the skilled workforce in the region.",
    "courses": [
      "Turner (2 years)",
      "Fitter (2 years)",
      "Welder (1 year)",
      "Electrician (2 years)",
      "Mechanic Diesel (1 year)"
    ],
    "fees": "₹4,000 - ₹10,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "033-24017631",
    "website": "N/A (Refer to West Bengal DTE&T website)",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.jagranjosh.com/colleges/list-of-government-iti-colleges-in-india-clga-1737096954-1"
  },
  {
    "id": 16,
    "name": "Government ITI, Pune",
    "location": "Aundh, Pune",
    "state": "Maharashtra",
    "ranking": "Prominent Government ITI (Regional)",
    "description": "A well-known government ITI in Pune, famous for its thorough training programs and strong placement records. Offers courses in various trades including automotive, electronics, and carpentry.",
    "courses": [
      "Automotive Trades (2 years)",
      "Electronics Mechanic (2 years)",
      "Carpenter (1 year)",
      "Fitter (2 years)",
      "Electrician (2 years)"
    ],
    "fees": "₹1,000 - ₹10,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "020-25806450",
    "website": "N/A (Refer to Maharashtra DVE&T website)",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.jagranjosh.com/colleges/list-of-government-iti-colleges-in-india-clga-1737096954-1"
  },
  {
    "id": 17,
    "name": "Government Industrial Training Institute, Ahmedabad",
    "location": "Kubernagar, Ahmedabad",
    "state": "Gujarat",
    "ranking": "Prominent Government ITI (Regional)",
    "description": "A leading government ITI in Gujarat, providing comprehensive training facilities and strong industry collaborations. Offers various trades to meet local industrial demands.",
    "courses": [
      "Electrician (2 years)",
      "Mechanic (Motor Vehicle) (2 years)",
      "Draughtsman (Civil) (2 years)",
      "Fitter (2 years)",
      "COPA (1 year)"
    ],
    "fees": "₹1,000 - ₹10,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "079-22870425",
    "website": "N/A (Refer to Gujarat Directorate of Employment and Training website)",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.jagranjosh.com/colleges/list-of-government-iti-colleges-in-india-clga-1737096954-1"
  },
  {
    "id": 18,
    "name": "Government Industrial Training Institute, Lucknow",
    "location": "Aliganj, Lucknow",
    "state": "Uttar Pradesh",
    "ranking": "Prominent Government ITI (Regional)",
    "description": "A well-known government ITI in Uttar Pradesh, offering a wide array of vocational trades. Plays a crucial role in skill development and employment generation in the state.",
    "courses": [
      "Fitter (2 years)",
      "Electrician (2 years)",
      "Mechanic Diesel (1 year)",
      "Welder (1 year)",
      "Computer Operator & Programming Assistant (COPA) (1 year)"
    ],
    "fees": "₹1,000 - ₹10,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "0522-2337651",
    "website": "N/A (Refer to Uttar Pradesh Vocational Education & Skill Development website)",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.jagranjosh.com/colleges/list-of-government-iti-colleges-in-india-clga-1737096954-1"
  },
  {
    "id": 19,
    "name": "Government Industrial Training Institute (Women), Rae Bareli",
    "location": "Rae Bareli",
    "state": "Uttar Pradesh",
    "ranking": "Prominent Government ITI (Women's, Regional)",
    "description": "A specialized government ITI for women in Uttar Pradesh, offering vocational courses tailored to empower female students for various industries.",
    "courses": [
      "Electronics Mechanic (2 years)",
      "COPA (1 year)",
      "Fashion Design Technology (1 year)",
      "Stenography (English) (1 year)",
      "Basic Cosmetology (1 year)"
    ],
    "fees": "₹1,000 - ₹9,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational, Women's)",
    "phone": "N/A (Check UP Vocational Education & Skill Development website)",
    "website": "N/A",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.jagranjosh.com/colleges/list-of-government-iti-colleges-in-india-clga-1737096954-1"
  },
  {
    "id": 20,
    "name": "Sir C.V. Raman Industrial Training Institute (ITI)",
    "location": "Narela, New Delhi",
    "state": "Delhi",
    "ranking": "Prominent Government ITI (Regional)",
    "description": "A key government ITI in Delhi, providing vocational training for various NCVT-approved trades. Known for its updated curriculum and facilities aimed at industry readiness.",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic (Motor Vehicle) (2 years)",
      "Welder (1 year)",
      "COPA (1 year)"
    ],
    "fees": "₹1,000 - ₹10,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "011-27787361",
    "website": "N/A (Refer to Delhi DTE website)",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.jagranjosh.com/colleges/list-of-government-iti-colleges-in-india-clga-1737096954-1"
  },
  {
    "id": 21,
    "name": "Government ITI, Jaggampeta",
    "location": "Jaggampeta, East Godavari",
    "state": "Andhra Pradesh",
    "ranking": "Reputable Government ITI (Regional)",
    "description": "A government ITI in East Godavari district offering various trades. Known for its strong focus on practical skills and contributing to local employment opportunities.",
    "courses": [
      "Draughtsman (Civil) (2 years)",
      "Electrician (2 years)",
      "Fitter (2 years)"
    ],
    "fees": "₹6,000 - ₹10,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "Search online (e.g., Collegedekho)",
    "website": "N/A",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.collegedekho.com/articles/list-of-iti-colleges-in-andhra-pradesh/"
  },
  {
    "id": 22,
    "name": "Government District Level Industrial Training Institute, Gudur",
    "location": "Gudur, Nellore",
    "state": "Andhra Pradesh",
    "ranking": "Reputable Government ITI (Regional)",
    "description": "A government ITI providing fundamental vocational training for various trades, aiming to equip students with practical skills for industry readiness.",
    "courses": [
      "Carpenter (1 year)",
      "Draughtsman (Civil) (2 years)",
      "Electrician (2 years)",
      "Fitter (2 years)"
    ],
    "fees": "₹6,000 - ₹10,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "Search online (e.g., Collegedekho)",
    "website": "N/A",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.collegedekho.com/articles/list-of-iti-colleges-in-andhra-pradesh/"
  },
  {
    "id": 23,
    "name": "Government Polytechnic College, Dharmavaram (offers ITI trades too)",
    "location": "Dharmavaram, Anantapur",
    "state": "Andhra Pradesh",
    "ranking": "Reputable Government Polytechnic (Regional)",
    "description": "Primarily a polytechnic, but some such institutions also run ITI programs. Focuses on technical education and provides practical skills for immediate employment. (Check specific ITI offerings directly).",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic Diesel (1 year)"
    ],
    "fees": "₹6,000 - ₹10,000 (estimated total for ITI courses, highly subsidized)",
    "type": "Government (Vocational/Polytechnic)",
    "phone": "N/A",
    "website": "N/A",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.shiksha.com/college/government-polytechnic-college-dharmavaram-anantapur-133526/courses/after-10th-diploma-bc"
  },
  {
    "id": 24,
    "name": "Alfa Industrial Training Centre",
    "location": "Narasaraopet, Guntur",
    "state": "Andhra Pradesh",
    "ranking": "Reputable Private ITI (Regional)",
    "description": "A private ITI offering various trades including civil, electrical, and plumbing. Focuses on hands-on training and equipping students with skills demanded by the industry.",
    "courses": [
      "Draughtsman (Civil) (2 years)",
      "Electrician (2 years)",
      "Electronics Mechanic (2 years)",
      "Plumber (1 year)"
    ],
    "fees": "₹20,000 - ₹50,000 (estimated total for course duration, varies by trade)",
    "type": "Private (Vocational)",
    "phone": "N/A",
    "website": "N/A",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.collegedekho.com/articles/list-of-iti-colleges-in-andhra-pradesh/"
  },
  {
    "id": 25,
    "name": "Government Industrial Training Institute (Women), Madurai",
    "location": "Madurai",
    "state": "Tamil Nadu",
    "ranking": "Prominent Government ITI (Women's, Regional)",
    "description": "A government ITI specifically for women, providing vocational training in trades like electronics and computer operation, aimed at empowering women for industrial roles.",
    "courses": [
      "Electronic Mechanic (2 years)",
      "Computer Operator and Programming Assistant (COPA) (1 year)",
      "Sewing Technology (1 year)",
      "Basic Cosmetology (1 year)"
    ],
    "fees": "₹2,000 - ₹5,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational, Women's)",
    "phone": "N/A",
    "website": "N/A",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.jagranjosh.com/colleges/list-of-government-iti-colleges-in-india-clga-1737096954-1"
  },
  {
    "id": 26,
    "name": "Industrial Training Institute, Jaipur",
    "location": "Jaipur",
    "state": "Rajasthan",
    "ranking": "Prominent Government ITI (Regional)",
    "description": "A significant government ITI in Rajasthan, offering various trades with a focus on advanced tools and hands-on training to prepare students for industry demands.",
    "courses": [
      "Electrician (2 years)",
      "Mechanic (Motor Vehicle) (2 years)",
      "Welder (1 year)",
      "Fitter (2 years)"
    ],
    "fees": "₹1,000 - ₹10,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "0141-2710156",
    "website": "N/A (Refer to Rajasthan Directorate of Technical Education website)",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.jagranjosh.com/colleges/list-of-government-iti-colleges-in-india-clga-1737096954-1"
  },
  {
    "id": 27,
    "name": "Government Polytechnic College, Guntur (offers ITI trades too)",
    "location": "Guntur",
    "state": "Andhra Pradesh",
    "ranking": "Prominent Government Polytechnic (Regional)",
    "description": "Primarily a polytechnic, this institution also offers certain ITI trades. It's a key provider of technical education in the Guntur region, focusing on practical skills. (Verify current ITI offerings directly).",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic Diesel (1 year)"
    ],
    "fees": "₹6,000 - ₹10,000 (estimated total for ITI courses, highly subsidized)",
    "type": "Government (Vocational/Polytechnic)",
    "phone": "0863-2253305",
    "website": "N/A (Refer to SBTET AP website)",
    "email": "gpa.principal@gmail.com",
    "image": "N/A",
    "details": "N/A"
  },
  {
    "id": 28,
    "name": "Modern ITC College",
    "location": "Gajuwaka, Visakhapatnam",
    "state": "Andhra Pradesh",
    "ranking": "Reputable Private ITI (Regional)",
    "description": "A private Industrial Training Centre in Visakhapatnam, offering vocational courses aimed at providing students with skills for various industries. Focuses on practical learning.",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic Diesel (1 year)"
    ],
    "fees": "₹20,000 - ₹50,000 (estimated total for course duration, varies by trade)",
    "type": "Private (Vocational)",
    "phone": "0891-6588910",
    "website": "N/A (Check local directories/Justdial)",
    "email": "N/A",
    "image": "N/A",
    "details": "https://www.mapsofindia.com/education/iti-colleges/visakhapatnam.html"
  },
  {
    "id": 29,
    "name": "Government ITI, Bhubaneswar",
    "location": "Bhubaneswar",
    "state": "Odisha",
    "ranking": "Prominent Government ITI (Regional)",
    "description": "A leading government ITI in Odisha, providing a range of vocational courses to equip students with skills for diverse industrial sectors. Known for its infrastructure and training quality.",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic (Motor Vehicle) (2 years)",
      "Welder (1 year)",
      "COPA (1 year)"
    ],
    "fees": "₹4,000 - ₹10,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "0674-2391693",
    "website": "http://www.gpbbsr.ac.in/ITI-unit/",
    "email": "principal.gpbbsr@nic.in",
    "image": "N/A",
    "details": "https://www.jagranjosh.com/colleges/list-of-government-iti-colleges-in-india-clga-1737096954-1"
  },
  {
    "id": 30,
    "name": "Government ITI, Kozhikode (Calicut)",
    "location": "Kozhikode",
    "state": "Kerala",
    "ranking": "Prominent Government ITI (Regional)",
    "description": "A well-regarded government ITI in Kerala, known for its strong emphasis on practical training and industry-relevant vocational programs, contributing to the skilled workforce in the state.",
    "courses": [
      "Electrician (2 years)",
      "Fitter (2 years)",
      "Mechanic Diesel (1 year)",
      "Draughtsman (Civil) (2 years)",
      "Electronics Mechanic (2 years)"
    ],
    "fees": "₹2,000 - ₹8,000 (estimated total for course duration, highly subsidized)",
    "type": "Government (Vocational)",
    "phone": "0495-2384988",
    "website": "http://www.itikalpetta.nic.in/",
    "email": "iti_kozhikode@rediffmail.com",
    "image": "N/A",
    "details": "https://www.jagranjosh.com/colleges/list-of-government-iti-colleges-in-india-clga-1737096954-1"
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
