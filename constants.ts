import { CollegeData } from './types';

export const COLLEGE_DATA: CollegeData = {
  college_info: {
    name: "Anjuman I Islam Abdul Razzak Kalsekar Polytechnic",
    short_name: "A.I.R.K.P. Polytechnic",
    location: "Plot No. 2 & 3, Near Thana Naka, Khanda Gaon, New Panvel, Navi Mumbai – 410206",
    college_type: "Private (Unaided) Polytechnic College",
    approval: "Approved by AICTE",
    naac: "NAAC not applicable for diploma polytechnic colleges",
    working_hours: "Monday to Saturday: 9:00 AM – 5:00 PM",
    co_educational: "true"
  },
  
  courses_offered: {
    diploma: [
      "Computer Engineering",
      "Artificial Intelligence & Machine Learning",
      "Mechanical Engineering",
      "Civil Engineering",
      "Mechatronics Engineering",
      "Automation & Robotics Engineering"
    ],
    degree: [],
    duration: "3 Years",
    semester_based: true,
    exam_pattern: "MSBTE Pattern (Theory + Practical + Oral)"
  },

  admission: {
    eligibility: {
      diploma: "Passed 10th from recognized board",
      degree: "Passed 12th as per university norms"
    },
    entrance_exam: false,
    lateral_entry: true,
    online_admission: true,
    documents_required: [
      "10th Marksheet",
      "Original Leaving Certificate",
      "Aadhaar Card",
      "4–6 Passport Size Photos"
    ],
    conditional_documents: {
      caste_certificate: "Required for reserved categories",
      income_certificate: "Required for scholarship",
      domicile_certificate: "Required for Maharashtra quota",
      migration_certificate: "Required if from another board/state",
      gap_certificate: "Required if study gap exists"
    }
  },

  fees_structure: {
    annual_fee: "₹35,000 – ₹45,000 per year",
    total_fee: "₹1.05 – ₹1.35 lakh for 3 years",
    category_variation: "Yes",
    installment: "Yes",
    payment_modes: [
      "Cash",
      "Cheque",
      "Online Payment (UPI / Bank Transfer)"
    ],
    exam_fee: "MSBTE exam fees charged separately",
    hostel_fee: "Not included"
  },

  facilities: {
    campus_facilities: [
      "Well-equipped laboratories",
      "Modern workshops",
      "Library",
      "Wi-Fi campus",
      "Placement assistance",
      "Industrial visits",
      "Soft skills training",
      "Sports & cultural activities"
    ],
    hostel: {
      available: true,
      separate_for_boys_girls: true,
      basic_amenities: true,
      meals: "As per hostel rules",
      compulsory: false
    },
    transport: {
      bus_facility: "Limited availability",
      routes: "Changes yearly based on demand",
      transport_fee: "Varies by distance"
    }
  },

  scholarship_facilities: {
    available_categories: [
      "SC",
      "ST",
      "OBC",
      "VJ",
      "NT",
      "EWS",
      "Minority"
    ],
    girls_scholarship: "Yes",
    process: [
      "Take admission",
      "Apply on government scholarship portal",
      "Submit required documents",
      "College verification",
      "Amount credited to student bank account after approval"
    ]
  },

  placement: {
    placement_cell: "Yes",
    companies: "Local industries, IT firms, core companies",
    guarantee: "No",
    internships: "Yes"
  },

  exam_and_academics: {
    exam_pattern: "MSBTE Pattern",
    attendance_required: "75%",
    internal_exams: "40%",
    final_year_project: "Yes",
    mentorship: "Yes"
  },

  principle: "Prof. Arif Farid Shaikh",

  departments: {
    "Computer Engineering": {
      hod: "Mrs. Shaista Shaikh",
      qualification: "M.Tech in Computer Engineering",
      experience: "15 Years",
      focus_languages: ["C", "C++", "Java", "Python", "Web Technologies"],
      career_options: ["Software Developer", "System Administrator", "Web Developer"]
    },
    "AIML": {
      hod: "Mr. Ali Karim Sayed",
      qualification: "M.E. in Computer Engineering",
      specialization: "Machine Learning & Artificial Intelligence",
      career_options: ["ML Engineer", "Data Scientist", "AI Specialist"]
    },
    "Mechanical Engineering": {
      hod: "Mr. Jamiluddin Talukdar",
      qualification: "B.E. Mechanical",
      experience: "18 Years",
      career_options: ["Mechanical Engineer", "CAD Designer", "Manufacturing Engineer"]
    },
    "Civil Engineering": {
      hod: "Mrs. Rupali Khadtar",
      qualification: "M.E. Civil",
      experience: "12 Years",
      career_options: ["Civil Engineer", "Site Engineer", "Structural Designer"]
    },
    "Automation & Robotics": {
      hod: "Mr. Zeeshan Khan",
      qualification: "M.E. in AI & ML",
      career_options: ["Robotics Engineer", "Automation Specialist", "Control Engineer"]
    },
    "Mechatronics": {
      hod: "Mr. Zahiruddin Mohammed Farooque Khateeb",
      qualification: "M.E.",
      career_options: ["Mechatronics Engineer", "Design Engineer"]
    },
    "Humanities & Science": {
      hod: "Mr. Farhan Khalil Moosa",
      qualification: "M.Sc.",
      career_options: ["Educator", "Researcher"]
    }
  },

  conversational_rules: {
    on_gratitude: "You're welcome. Thank you for calling A.I.R.K.P. Polytechnic. Have a nice day!"
  }
};

