import React, { useState } from 'react';
import { College } from '../types/College';

interface CollegeFinder2Props {
  language?: string;
  colleges?: College[];
  states?: string[];
}

const defaultColleges: College[] = [
        {
          id: 1,
          name: "Indian Institute of Technology Madras",
          location: "Chennai, Tamil Nadu",
          type: "Government",
          ranking: 1,
          fees: "₹2,00,000",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-44-2257-8000",
          website: "https://www.iitm.ac.in/",
          email: "registrar@iitm.ac.in",
          image: "https://www.iitm.ac.in/sites/default/files/styles/large/public/2020-09/IITM-Main-Building.jpg",
          description: "Premier engineering institute with world-class faculty and research facilities."
        },
        {
          id: 2,
          name: "Indian Institute of Technology Delhi",
          location: "New Delhi, Delhi",
          type: "Government",
          ranking: 2,
          fees: "₹2,50,000",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-11-2659-7135",
          website: "https://home.iitd.ac.in/",
          email: "info@iitd.ac.in",
          image: "https://home.iitd.ac.in/images/gallery/01.jpg",
          description: "Premier engineering institute with world-class faculty and research facilities."
        },
        {
          id: 3,
          name: "Indian Institute of Technology Bombay",
          location: "Mumbai, Maharashtra",
          type: "Government",
          ranking: 3,
          fees: "₹2,00,000",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-22-2572-2545",
          website: "https://www.iitb.ac.in/",
          email: "registrar@iitb.ac.in",
          image: "https://www.iitb.ac.in/sites/default/files/styles/large/public/2019-10/iitb-campus.jpg",
          description: "Premier engineering institute with world-class faculty and research facilities."
        },
        // --- Additional Colleges ---
        {
          id: 4,
          name: "Jawaharlal Nehru University",
          location: "New Delhi, Delhi",
          type: "Central University",
          ranking: 4,
          fees: "₹1,200",
          courses: ["BA", "MA", "PhD"],
          phone: "+91-11-2670-4090",
          website: "https://www.jnu.ac.in/",
          email: "admissions@mail.jnu.ac.in",
          image: "https://www.jnu.ac.in/sites/default/files/mainbuilding.jpg",
          description: "Renowned for social sciences, humanities, and language studies."
        },
        {
          id: 5,
          name: "University of Delhi",
          location: "New Delhi, Delhi",
          type: "Central University",
          ranking: 13,
          fees: "₹20,000",
          courses: ["BA", "B.Com", "B.Sc", "MA", "M.Com"],
          phone: "+91-11-2766-7725",
          website: "http://www.du.ac.in/",
          email: "vc@du.ac.in",
          image: "https://www.shutterstock.com/image-vector/elearning-line-flat-vector-icon-600nw-615726242.jpg",
          description: "One of India's largest universities with diverse courses and vibrant campus life."
        },
        {
          id: 6,
          name: "Vellore Institute of Technology",
          location: "Vellore, Tamil Nadu",
          type: "Private",
          ranking: 18,
          fees: "₹1,98,000",
          courses: ["B.Tech", "M.Tech", "BCA", "MBA"],
          phone: "+91-416-220-2020",
          website: "https://vit.ac.in/",
          email: "admission@vit.ac.in",
          image: "https://vit.ac.in/sites/default/files/styles/large/public/vit-campus.jpg",
          description: "Private deemed university known for engineering and technology programs."
        },
        {
          id: 7,
          name: "Banaras Hindu University",
          location: "Varanasi, Uttar Pradesh",
          type: "Government",
          ranking: 6,
          fees: "₹5,000",
          courses: ["BA", "B.Sc", "B.Com", "MA", "MBA", "M.Sc"],
          phone: "+91-542-236-8558",
          website: "https://www.bhu.ac.in/",
          email: "help@bhu.ac.in",
          image: "https://www.bhu.ac.in/images/bhu-campus.jpg",
          description: "Prestigious university with a strong focus on research and academics."
        },
        {
          id: 8,
          name: "Manipal Academy of Higher Education",
          location: "Manipal, Karnataka",
          type: "Deemed",
          ranking: 15,
          fees: "₹3,00,000",
          courses: ["MBBS", "B.Tech", "B.Pharm", "MBA"],
          phone: "+91-820-292-2323",
          website: "https://manipal.edu/",
          email: "admissions@manipal.edu",
          image: "https://manipal.edu/content/dam/manipal/mu/images/gallery/MAHE-Campus.jpg",
          description: "Leading private university with a global reputation in medical and engineering education."
        },
        {
          id: 9,
          name: "St. Xavier's College Mumbai",
          location: "Mumbai, Maharashtra",
          type: "Private",
          ranking: 90,
          fees: "₹25,000",
          courses: ["BA", "B.Sc", "B.Com", "BMS"],
          phone: "+91-22-2262-0661",
          website: "https://xaviers.edu/",
          email: "admin@xaviers.edu",
          image: "https://xaviers.edu/images/gallery/college-building.jpg",
          description: "Premier institution for arts, science, and commerce in Mumbai."
        },
        {
          id: 10,
          name: "SRM Institute of Science and Technology",
          location: "Chennai, Tamil Nadu",
          type: "Deemed",
          ranking: 32,
          fees: "₹2,50,000",
          courses: ["B.Tech", "M.Tech", "MBA", "BBA"],
          phone: "+91-44-2741-7400",
          website: "https://www.srmist.edu.in/",
          email: "admissions@srmist.edu.in",
          image: "https://www.srmist.edu.in/sites/default/files/styles/large/public/2020-01/srm-campus.jpg",
          description: "Large private university with a focus on engineering, management, and medical sciences."
        },
        // --- End additional colleges ---
        // --- User Provided Colleges Batch 1 ---
        {
          id: 11,
          name: "Birla Institute of Technology and Science, Pilani",
          location: "Pilani, Rajasthan",
          type: "Private",
          ranking: 20,
          fees: "₹2,48,500",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-1596-515294",
          website: "https://www.bits-pilani.ac.in/",
          email: "admissions@pilani.bits-pilani.ac.in",
          image: "https://www.bits-pilani.ac.in/wp-content/uploads/2022/06/BITS-Pilani-Campus.jpg",
          description: "Renowned private institute for engineering and sciences."
        },
        {
          id: 12,
          name: "National Institute of Technology Warangal",
          location: "Warangal, Telangana",
          type: "Government",
          ranking: 21,
          fees: "₹1,62,000",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-870-2459191",
          website: "https://www.nitw.ac.in/",
          email: "registrar@nitw.ac.in",
          image: "https://nitw.ac.in/images/nitw-campus.jpg",
          description: "Leading NIT known for engineering excellence."
        },
        {
          id: 13,
          name: "Indian Institute of Technology Ropar",
          location: "Rupnagar, Punjab",
          type: "Government",
          ranking: 22,
          fees: "₹2,28,600",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-1881-242105",
          website: "https://www.iitrpr.ac.in/",
          email: "registrar@iitrpr.ac.in",
          image: "https://www.iitrpr.ac.in/sites/default/files/inline-images/IITRPR-Campus.jpg",
          description: "IIT with focus on research and innovation."
        },
        {
          id: 14,
          name: "Amrita Vishwa Vidyapeetham",
          location: "Coimbatore, Tamil Nadu",
          type: "Deemed",
          ranking: 23,
          fees: "₹3,25,000",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-422-2685000",
          website: "https://www.amrita.edu/",
          email: "admissions@amrita.edu",
          image: "https://www.amrita.edu/wp-content/uploads/2021/03/amrita-university-coimbatore-campus.jpg",
          description: "Deemed university with multidisciplinary programs."
        },
        {
          id: 15,
          name: "Jamia Millia Islamia",
          location: "New Delhi, Delhi",
          type: "Central University",
          ranking: 24,
          fees: "₹16,150",
          courses: ["B.Tech", "BA", "MA"],
          phone: "+91-11-26981717",
          website: "https://www.jmi.ac.in/",
          email: "info@jmi.ac.in",
          image: "https://www.jmi.ac.in/upload/menuimage/jamiafront.jpg",
          description: "Central university with diverse courses."
        },
        {
          id: 16,
          name: "National Institute of Technology Calicut",
          location: "Kozhikode, Kerala",
          type: "Government",
          ranking: 25,
          fees: "₹1,53,000",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-495-2286100",
          website: "https://www.nitc.ac.in/",
          email: "registrar@nitc.ac.in",
          image: "https://www.nitc.ac.in/images/nitc-campus.jpg",
          description: "NIT known for engineering and technology."
        },
        {
          id: 17,
          name: "Siksha 'O' Anusandhan",
          location: "Bhubaneswar, Odisha",
          type: "Deemed",
          ranking: 26,
          fees: "₹2,40,000",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-674-2350216",
          website: "https://www.soa.ac.in/",
          email: "info@soa.ac.in",
          image: "https://www.soa.ac.in/assets/images/slider/slider-1.jpg",
          description: "Deemed university with multidisciplinary focus."
        },
        {
          id: 18,
          name: "Delhi Technological University",
          location: "New Delhi, Delhi",
          type: "Government",
          ranking: 27,
          fees: "₹1,90,000",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-11-27871018",
          website: "http://www.dtu.ac.in/",
          email: "registrar@dtu.ac.in",
          image: "https://www.dtu.ac.in/Web/Slider/DTU.jpg",
          description: "Top government engineering university in Delhi."
        },
        {
          id: 19,
          name: "Indian Institute of Technology Jodhpur",
          location: "Jodhpur, Rajasthan",
          type: "Government",
          ranking: 28,
          fees: "₹2,28,600",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-291-2801132",
          website: "https://www.iitj.ac.in/",
          email: "office_academics@iitj.ac.in",
          image: "https://www.iitj.ac.in/newsite/images/gallery/08.jpg",
          description: "IIT with focus on advanced research."
        },
        {
          id: 20,
          name: "Thapar Institute of Engineering and Technology (Deemed-to-be-university)",
          location: "Patiala, Punjab",
          type: "Deemed",
          ranking: 29,
          fees: "₹3,50,000",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-175-2393021",
          website: "https://www.thapar.edu/",
          email: "info@thapar.edu",
          image: "https://www.thapar.edu/images/slider/slider1.jpg",
          description: "Deemed university with strong engineering programs."
        },
        {
          id: 21,
          name: "Amity University",
          location: "Gautam Budh Nagar, Uttar Pradesh",
          type: "Private",
          ranking: 30,
          fees: "₹3,11,000",
          courses: ["B.Tech", "MBA"],
          phone: "+91-120-4392000",
          website: "https://www.amity.edu/",
          email: "admissions@amity.edu",
          image: "https://www.amity.edu/images/Amity-Noida.jpg",
          description: "Private university with multidisciplinary courses."
        },
        {
          id: 22,
          name: "Indian Institute of Technology Mandi",
          location: "Mandi, Himachal Pradesh",
          type: "Government",
          ranking: 31,
          fees: "₹2,22,900",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-1905-267217",
          website: "https://www.iitmandi.ac.in/",
          email: "registrar@iitmandi.ac.in",
          image: "https://www.iitmandi.ac.in/images/campus/iitmandi-campus.jpg",
          description: "IIT with focus on technology and innovation."
        },
        {
          id: 23,
          name: "Chandigarh University",
          location: "Mohali, Punjab",
          type: "Private",
          ranking: 32,
          fees: "₹1,96,000",
          courses: ["B.Tech", "MBA"],
          phone: "+91-160-3051003",
          website: "https://www.cuchd.in/",
          email: "admissions@cuchd.in",
          image: "https://www.cuchd.in/images/cu-campus.jpg",
          description: "Private university with wide range of programs."
        },
        {
          id: 24,
          name: "Aligarh Muslim University",
          location: "Aligarh, Uttar Pradesh",
          type: "Central University",
          ranking: 33,
          fees: "₹38,985",
          courses: ["B.Tech", "BA", "MA"],
          phone: "+91-571-2700935",
          website: "https://www.amu.ac.in/",
          email: "info@amu.ac.in",
          image: "https://www.amu.ac.in/newdata/images/amu-campus.jpg",
          description: "Central university with historic legacy."
        },
        {
          id: 25,
          name: "Indian Institute of Technology Patna",
          location: "Patna, Bihar",
          type: "Government",
          ranking: 34,
          fees: "₹2,22,700",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-612-3028067",
          website: "https://www.iitp.ac.in/",
          email: "registrar@iitp.ac.in",
          image: "https://www.iitp.ac.in/images/campus/iitp-campus.jpg",
          description: "IIT with focus on engineering and research."
        },
        {
          id: 26,
          name: "Koneru Lakshmaiah Education Foundation University (K L College of Engineering)",
          location: "Vaddeswaram, Andhra Pradesh",
          type: "Deemed",
          ranking: 35,
          fees: "₹2,75,000",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-863-2399999",
          website: "https://www.kluniversity.in/",
          email: "admissions@kluniversity.in",
          image: "https://kluniversity.in/images/klu-campus.jpg",
          description: "Deemed university with strong engineering focus."
        },
        {
          id: 27,
          name: "Kalasalingam Academy of Research and Education",
          location: "Srivilliputhur, Tamil Nadu",
          type: "Deemed",
          ranking: 36,
          fees: "₹1,70,000",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-4563-289042",
          website: "https://kalasalingam.ac.in/",
          email: "info@kalasalingam.ac.in",
          image: "https://kalasalingam.ac.in/wp-content/uploads/2020/02/slider1.jpg",
          description: "Deemed university with focus on research and technology."
        },
        {
          id: 28,
          name: "Kalinga Institute of Industrial Technology",
          location: "Bhubaneswar, Odisha",
          type: "Deemed",
          ranking: 37,
          fees: "₹3,50,000",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-674-2725113",
          website: "https://kiit.ac.in/",
          email: "admission@kiit.ac.in",
          image: "https://kiit.ac.in/wp-content/uploads/2020/01/KIIT-campus.jpg",
          description: "Deemed university with focus on engineering and technology."
        },
        {
          id: 29,
          name: "Shanmugha Arts Science Technology and Research Academy",
          location: "Thanjavur, Tamil Nadu",
          type: "Deemed",
          ranking: 38,
          fees: "₹2,00,000",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-4362-264101",
          website: "https://www.sastra.edu/",
          email: "admissions@sastra.edu",
          image: "https://www.sastra.edu/images/slider/slider1.jpg",
          description: "Deemed university with multidisciplinary programs."
        },
        {
          id: 30,
          name: "Visvesvaraya National Institute of Technology Nagpur",
          location: "Nagpur, Maharashtra",
          type: "Government",
          ranking: 39,
          fees: "₹1,49,300",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-712-2222828",
          website: "https://vnit.ac.in/",
          email: "director@vnit.ac.in",
          image: "https://vnit.ac.in/images/vnit-campus.jpg",
          description: "NIT known for engineering and technology."
        },
        // --- End User Provided Colleges Batch 1 ---
        // --- User Provided Colleges Batch 2 ---
        {
          id: 31,
          name: "National Institute of Technology Silchar",
          location: "Silchar, Assam",
          type: "Government",
          ranking: 40,
          fees: "N/A",
          courses: ["B.Tech", "M.Tech", "MBA", "PhD"],
          phone: "+91-3842-242273",
          website: "https://www.nits.ac.in/",
          email: "director@nits.ac.in",
          image: "https://www.nits.ac.in/images/nitsilchar.jpg",
          description: "Established in 1967, NIT Silchar is an Institute of National Importance offering undergraduate, postgraduate, and doctoral programs in engineering, science, and management. Known for research excellence and vibrant campus life."
        },
        {
          id: 32,
          name: "Institute of Chemical Technology",
          location: "Mumbai, Maharashtra",
          type: "Government",
          ranking: 41,
          fees: "N/A",
          courses: ["B.Chem.Eng.", "B.Tech", "M.Tech", "PhD"],
          phone: "+91-22-3361-2222",
          website: "https://www.ictmumbai.edu.in/",
          email: "registrar@ictmumbai.edu.in",
          image: "https://www.ictmumbai.edu.in/images/ictmainbuilding.jpg",
          description: "Established in 1933, ICT Mumbai is a premier institute for chemical engineering, chemical technology, and pharmacy. Recognized for its research output and industry collaboration."
        },
        {
          id: 33,
          name: "UPES",
          location: "Dehradun, Uttarakhand",
          type: "Private",
          ranking: 42,
          fees: "N/A",
          courses: ["B.Tech", "MBA", "BBA", "B.Des", "LLB", "M.Tech"],
          phone: "1800-102-8737",
          website: "https://www.upes.ac.in/",
          email: "enrollments@upes.ac.in",
          image: "https://www.upes.ac.in/assets/images/upes-campus.jpg",
          description: "UPES is a multidisciplinary university in Dehradun, Uttarakhand, known for its programs in energy, law, engineering, management, and design. It has a global outlook and strong placement record."
        },
        {
          id: 34,
          name: "Malaviya National Institute of Technology",
          location: "Jaipur, Rajasthan",
          type: "Government",
          ranking: 43,
          fees: "N/A",
          courses: ["B.Tech", "M.Tech", "PhD", "MBA"],
          phone: "+91-141-2529065",
          website: "https://www.mnit.ac.in/",
          email: "registrar@mnit.ac.in",
          image: "https://www.mnit.ac.in/images/mnit-campus.jpg",
          description: "MNIT Jaipur, established in 1963, is a public technical university and Institute of National Importance. It offers a wide range of engineering, science, and management programs and is known for its research and innovation."
        },
        {
          id: 35,
          name: "National Institute of Technology Durgapur",
          location: "Durgapur, West Bengal",
          type: "Government",
          ranking: 44,
          fees: "N/A",
          courses: ["B.Tech", "M.Tech", "MBA", "PhD"],
          phone: "+91-343-2546397",
          website: "https://nitdgp.ac.in/",
          email: "director@admin.nitdgp.ac.in",
          image: "https://nitdgp.ac.in/images/nitdgp-campus.jpg",
          description: "NIT Durgapur, established in 1960, is a leading public technical university in West Bengal. It offers undergraduate, postgraduate, and doctoral programs in engineering, science, and management."
        },
        {
          id: 36,
          name: "National Institute of Technology Delhi",
          location: "Delhi, Delhi",
          type: "Government",
          ranking: 45,
          fees: "₹1,61,000",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-11-33861005",
          website: "https://nitdelhi.ac.in/",
          email: "registrar@nitdelhi.ac.in",
          image: "https://nitdelhi.ac.in/wp-content/uploads/2020/11/NIT-Delhi-Campus.jpg",
          description: "NIT in Delhi with focus on engineering."
        },
        {
          id: 37,
          name: "Sri Sivasubramaniya Nadar College of Engineering",
          location: "Kalavakkam, Tamil Nadu",
          type: "Private",
          ranking: 46,
          fees: "N/A",
          courses: ["B.Tech", "M.Tech"],
          phone: "N/A",
          website: "https://www.ssn.edu.in/",
          email: "N/A",
          image: "N/A",
          description: "Private engineering college in Tamil Nadu."
        },
        {
          id: 38,
          name: "International Institute of Information Technology Hyderabad",
          location: "Hyderabad, Telangana",
          type: "Deemed",
          ranking: 47,
          fees: "₹3,00,000",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-40-66531000",
          website: "https://www.iiit.ac.in/",
          email: "info@iiit.ac.in",
          image: "https://www.iiit.ac.in/images/iiith-campus.jpg",
          description: "Deemed university for information technology."
        },
        {
          id: 39,
          name: "Birla Institute of Technology",
          location: "Ranchi, Jharkhand",
          type: "Deemed",
          ranking: 48,
          fees: "N/A",
          courses: ["B.Tech", "M.Tech"],
          phone: "N/A",
          website: "https://www.bitmesra.ac.in/",
          email: "N/A",
          image: "N/A",
          description: "Deemed university in Ranchi with engineering focus."
        },
        {
          id: 40,
          name: "Indian Institute of Engineering Science and Technology, Shibpur",
          location: "Howrah, West Bengal",
          type: "Government",
          ranking: 49,
          fees: "₹1,36,500",
          courses: ["B.Tech", "M.Tech"],
          phone: "+91-33-26684561",
          website: "https://www.iiests.ac.in/",
          email: "director@iiests.ac.in",
          image: "https://www.iiests.ac.in/assets/images/iiests-campus.jpg",
          description: "Government institute for engineering and science."
        },
        {
          id: 41,
          name: "Lovely Professional University",
          location: "Phagwara, Punjab",
          type: "Private",
          ranking: 50,
          fees: "N/A",
          courses: ["B.Tech", "MBA"],
          phone: "N/A",
          website: "https://www.lpu.in/",
          email: "N/A",
          image: "N/A",
          description: "Large private university in Punjab."
        },
        {
          id: 42,
          name: "Indian Institute of Space Science and Technology",
          location: "Thiruvananthapuram, Kerala",
          type: "Government",
          ranking: 51,
          fees: "N/A",
          courses: ["B.Tech", "M.Tech"],
          phone: "N/A",
          website: "https://www.iist.ac.in/",
          email: "N/A",
          image: "N/A",
          description: "Institute specializing in space science and technology."
        },
        {
          id: 43,
          name: "Graphic Era University",
          location: "Dehradun, Uttarakhand",
          type: "Deemed",
          ranking: 52,
          fees: "N/A",
          courses: ["B.Tech", "M.Tech"],
          phone: "N/A",
          website: "https://www.geu.ac.in/",
          email: "N/A",
          image: "N/A",
          description: "Deemed university in Dehradun."
        },
        {
          id: 44,
          name: "Saveetha Institute of Medical and Technical Sciences",
          location: "Chennai, Tamil Nadu",
          type: "Deemed",
          ranking: 53,
          fees: "N/A",
          courses: ["B.Tech", "MBBS"],
          phone: "N/A",
          website: "https://www.saveetha.com/",
          email: "N/A",
          image: "N/A",
          description: "Deemed university for medical and technical sciences."
        },
        {
          id: 45,
          name: "Indian Institute of Technology Bhubaneswar",
          location: "Bhubaneswar, Odisha",
          type: "Government",
          ranking: 54,
          fees: "N/A",
          courses: ["B.Tech", "M.Tech"],
          phone: "N/A",
          website: "https://www.iitbbs.ac.in/",
          email: "N/A",
          image: "N/A",
          description: "IIT in Bhubaneswar."
        },
        {
          id: 46,
          name: "National Institute of Technology Patna",
          location: "Patna, Bihar",
          type: "Government",
          ranking: 55,
          fees: "N/A",
          courses: ["B.Tech", "M.Tech"],
          phone: "N/A",
          website: "https://www.nitp.ac.in/",
          email: "N/A",
          image: "N/A",
          description: "NIT in Patna."
        },
        {
          id: 47,
          name: "Manipal Institute of Technology",
          location: "Manipal, Karnataka",
          type: "Private",
          ranking: 56,
          fees: "N/A",
          courses: ["B.Tech", "M.Tech"],
          phone: "N/A",
          website: "https://manipal.edu/mit.html",
          email: "N/A",
          image: "N/A",
          description: "Private engineering institute in Manipal."
        },
        {
          id: 48,
          name: "Netaji Subhas University of Technology (NSUT)",
          location: "Delhi, Delhi",
          type: "Government",
          ranking: 57,
          fees: "N/A",
          courses: ["B.Tech", "M.Tech"],
          phone: "N/A",
          website: "http://www.nsut.ac.in/",
          email: "N/A",
          image: "N/A",
          description: "Government university for technology in Delhi."
        },
        {
          id: 49,
          name: "Dr. B R Ambedkar National Institute of Technology Jalandhar",
          location: "Jalandhar, Punjab",
          type: "Government",
          ranking: 58,
          fees: "N/A",
          courses: ["B.Tech", "M.Tech"],
          phone: "N/A",
          website: "https://www.nitj.ac.in/",
          email: "N/A",
          image: "N/A",
          description: "NIT in Jalandhar."
        },
        {
          id: 50,
          name: "Sardar Vallabhbhai National Institute of Technology",
          location: "SURAT, Gujarat",
          type: "Government",
          ranking: 59,
          fees: "N/A",
          courses: ["B.Tech", "M.Tech"],
          phone: "N/A",
          website: "https://www.svnit.ac.in/",
          email: "N/A",
          image: "N/A",
          description: "NIT in Surat."
        },
        // --- End User Provided Colleges Batch 2 ---
        {
          id: 3,
          name: "Indian Institute of Technology Bombay",
          location: "Mumbai, Maharashtra",
          type: "Government",
          ranking: 3,
          fees: "₹2,00,000",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-22-2572-2545",
          website: "https://www.iitb.ac.in/",
          email: "registrar@iitb.ac.in",
          image: "https://www.iitb.ac.in/sites/www.iitb.ac.in/files/styles/large/public/2021-07/IITB_MainBuilding.jpg",
          description: "Leading engineering institute renowned for research and innovation."
        },
        {
          id: 4,
          name: "Indian Institute of Technology Kanpur",
          location: "Kanpur, Uttar Pradesh",
          type: "Government",
          ranking: 4,
          fees: "₹2,00,000",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-512-259-0151",
          website: "https://www.iitk.ac.in/",
          email: "registrar@iitk.ac.in",
          image: "https://www.iitk.ac.in/images/sample/iitk-campus.jpg",
          description: "Leading technical institute with a strong focus on research and innovation."
        },
        {
          id: 5,
          name: "Indian Institute of Technology Kharagpur",
          location: "Kharagpur, West Bengal",
          type: "Government",
          ranking: 5,
          fees: "₹2,00,000",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-3222-255221",
          website: "https://www.iitkgp.ac.in/",
          email: "registrar@iitkgp.ac.in",
          image: "https://www.iitkgp.ac.in/communique/images/campus1.jpg",
          description: "The first IIT, known for its vast campus and multidisciplinary excellence."
        },
        {
          id: 6,
          name: "Indian Institute of Technology Roorkee",
          location: "Roorkee, Uttarakhand",
          type: "Government",
          ranking: 6,
          fees: "₹2,00,000",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-1332-285311",
          website: "https://www.iitr.ac.in/",
          email: "registrar@iitr.ac.in",
          image: "https://www.iitr.ac.in/images/IITR_MainBuilding.jpg",
          description: "One of India’s oldest technical institutions, renowned for engineering and research."
        },
        {
          id: 7,
          name: "National Institute of Technology Tiruchirappalli",
          location: "Tiruchirappalli, Tamil Nadu",
          type: "Government",
          ranking: 9,
          fees: "₹1,61,000",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-431-2503000",
          website: "https://www.nitt.edu/",
          email: "registrar@nitt.edu",
          image: "https://www.nitt.edu/home/students/events/vr360/images/campus1.jpg",
          description: "Leading NIT known for academic excellence and vibrant campus life."
        },
        {
          id: 8,
          name: "Indian Institute of Technology Guwahati",
          location: "Guwahati, Assam",
          type: "Government",
          ranking: 7,
          fees: "₹2,00,000",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-361-2583000",
          website: "https://www.iitg.ac.in/",
          email: "registrar@iitg.ac.in",
          image: "https://www.iitg.ac.in/sites/default/files/styles/large/public/2020-09/IITG_MainBuilding.jpg",
          description: "Renowned for its picturesque campus and research-driven programs."
        },
        {
          id: 9,
          name: "Indian Institute of Technology Hyderabad",
          location: "Hyderabad, Telangana",
          type: "Government",
          ranking: 8,
          fees: "₹2,22,995",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-40-2301-6033",
          website: "https://www.iith.ac.in/",
          email: "contact@iith.ac.in",
          image: "https://www.iith.ac.in/images/campus/iith-campus.jpg",
          description: "Fast-growing IIT known for innovation and interdisciplinary research."
        },
        {
          id: 10,
          name: "Indian Institute of Technology (BHU) Varanasi",
          location: "Varanasi, Uttar Pradesh",
          type: "Government",
          ranking: 13,
          fees: "₹2,14,200",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-542-2368106",
          website: "https://iitbhu.ac.in/",
          email: "info@iitbhu.ac.in",
          image: "https://iitbhu.ac.in/sites/all/themes/iitbhu/images/iitbhu-campus.jpg",
          description: "Historic IIT with a legacy of excellence in engineering and technology education."
        },
        {
          id: 11,
          name: "Vellore Institute of Technology",
          location: "Vellore, Tamil Nadu",
          type: "Private",
          ranking: 11,
          fees: "₹1,98,000",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-416-2202020",
          website: "https://vit.ac.in/",
          email: "info@vit.ac.in",
          image: "https://vit.ac.in/sites/default/files/vit-images/vit-campus.jpg",
          description: "Leading private university known for innovation, placements, and global collaborations."
        },
        {
          id: 12,
          name: "Jadavpur University",
          location: "Kolkata, West Bengal",
          type: "Government",
          ranking: 10,
          fees: "₹9,600",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-33-2457 2227",
          website: "https://jadavpuruniversity.in/",
          email: "registrar@jadavpuruniversity.in",
          image: "https://jadavpuruniversity.in/wp-content/uploads/2023/06/ju-campus.jpg",
          description: "Prestigious state university with a strong reputation for engineering and research."
        },
        {
          id: 13,
          name: "Institute of Technology, Nirma University",
          location: "Ahmedabad, Gujarat",
          type: "Private",
          ranking: 57,
          fees: "₹2,01,000",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-2717-241911",
          website: "https://technology.nirmauni.ac.in/",
          email: "admissions.it@nirmauni.ac.in",
          image: "https://technology.nirmauni.ac.in/wp-content/uploads/sites/22/2022/05/Technology-1.svg",
          description: "Top-ranked private engineering institute in Gujarat, known for research and industry linkages."
        },
        {
          id: 14,
          name: "Anna University",
          location: "Chennai, Tamil Nadu",
          type: "Government",
          ranking: 18,
          fees: "₹55,000",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-44-2235 7004",
          website: "https://www.annauniv.edu/",
          email: "registrar@annauniv.edu",
          image: "https://www.shutterstock.com/image-vector/elearning-line-flat-vector-icon-600nw-615726242.jpg",
          description: "Prestigious state technical university with a large network of affiliated colleges and a strong reputation for research."
        },
        {
          id: 15,
          name: "Institute of Chemical Technology, Mumbai",
          location: "Mumbai, Maharashtra",
          type: "Government",
          ranking: 25,
          fees: "₹85,350",
          courses: ["B.Chem.Engg.", "B.Tech", "M.Tech", "PhD"],
          phone: "+91-22-3361 2222",
          website: "https://www.ictmumbai.edu.in/",
          email: "registrar@ictmumbai.edu.in",
          image: "https://www.ictmumbai.edu.in/images/ictmainbuilding.jpg",
          description: "Premier institute for chemical engineering and technology, renowned for research and industry partnerships."
        },
        {
          id: 16,
          name: "Amrita Vishwa Vidyapeetham",
          location: "Coimbatore, Tamil Nadu",
          type: "Private",
          ranking: 7,
          fees: "₹3,00,000",
          courses: ["B.Tech", "M.Tech", "PhD"],
          phone: "+91-422-2685000",
          website: "https://www.amrita.edu/",
          email: "admissions@amrita.edu",
          image: "https://www.amrita.edu/wp-content/uploads/2022/09/amrita-university-campus.jpg",
          description: "Multi-campus, research-intensive university consistently ranked among the top private institutions in India, known for its academic excellence and vibrant campus life."
        },
        {
          id: 17,
          name: "NIT Karnataka, Surathkal",
          location: "Mangalore, Karnataka",
          type: "Government",
          ranking: 12,
          fees: "₹1,53,000",
          courses: ["B.Tech", "M.Tech", "MBA", "PhD"],
          phone: "+91-824-2474000",
          website: "https://www.nitk.ac.in/",
          email: "registrar@nitk.ac.in",
          image: "https://www.nitk.ac.in/sites/default/files/styles/slider/public/slider/slider1.jpg",
          description: "Premier NIT renowned for its academic rigor, research output, and scenic coastal campus, offering a wide range of engineering and technology programs."
        },
        {
          id: 18,
          name: "NIT Warangal",
          location: "Warangal, Telangana",
          type: "Government",
          ranking: 21,
          fees: "₹1,62,000",
          courses: ["B.Tech", "M.Tech", "MBA", "PhD"],
          phone: "+91-870-2459191",
          website: "https://nitw.ac.in/",
          email: "registrar@nitw.ac.in",
          image: "https://nitw.ac.in/images/nitw-campus.jpg",
          description: "One of the oldest and most prestigious NITs, known for its strong academic programs, research, and vibrant student life."
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


// Ensure no duplicate College interface


const CollegeFinder: React.FC<CollegeFinder2Props> = ({
  language = 'en',
  states = defaultStates,
  colleges = []
}) => {


  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  // Defensive: handle undefined colleges
  // const filteredColleges = (colleges ?? []).filter(college => {
  //   const matchesQuery =
  //     college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     college.location.toLowerCase().includes(searchQuery.toLowerCase());

  //   const matchesState = selectedState
  //     ? college.location.toLowerCase().includes(selectedState.toLowerCase())
  //     : true;

  //   const matchesType = selectedType ? college.type === selectedType : true;
  //   const matchesCourse = selectedCourse
  //     ? college.courses.includes(selectedCourse)
  //     : true;

  //   return matchesQuery && matchesState && matchesType && matchesCourse;
  // });

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

export default CollegeFinder;
