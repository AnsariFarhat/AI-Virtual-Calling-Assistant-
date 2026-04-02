export interface DepartmentInfo {
  hod: string;
  qualification: string;
  experience?: string;
  focus_languages?: string[];
  career_options: string[];
  labs?: string[];
  focus_areas?: string[];
  software_taught?: string[];
  subjects?: string[];
  specialization?: string;
  focus?: string;
}

export interface CollegeData {
  college_info: {
    name: string;
    short_name: string;
    location: string;
    college_type: string;
    approval: string;
    naac: string;
    working_hours: string;
    co_educational: string;
    type?: string; // keeping for backward compatibility if needed, but will use descriptive ones
  };
  facilities: {
    campus_facilities: string[];
    hostel: {
      available: boolean;
      separate_for_boys_girls: boolean;
      basic_amenities: boolean;
      meals: string;
      compulsory: boolean;
    };
    transport: {
      bus_facility: string;
      routes: string;
      transport_fee: string;
    };
  };
  courses_offered: {
    diploma: string[];
    degree: string[];
    duration: string;
    semester_based: boolean;
    exam_pattern: string;
  };
  admission: {
    eligibility: {
      diploma: string;
      degree: string;
    };
    entrance_exam: boolean;
    lateral_entry: boolean;
    documents_required: string[];
    conditional_documents: Record<string, string>;
    online_admission: boolean;
  };
  fees_structure: {
    annual_fee: string;
    total_fee: string;
    category_variation: string;
    installment: string;
    payment_modes: string[];
    exam_fee: string;
    hostel_fee: string;
  };
  scholarship_facilities: {
    available_categories: string[];
    girls_scholarship: string;
    process: string[];
  };
  exam_and_academics: {
    exam_pattern: string;
    attendance_required: string;
    internal_exams: string;
    final_year_project: string;
    mentorship: string;
  };
  placement: {
    placement_cell: string;
    companies: string;
    guarantee: string;
    internships: string;
  };
  principle: string;
  departments: Record<string, DepartmentInfo>;
  conversational_rules?: {
    on_gratitude: string;
  };
}