
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface CollegeInfo {
  name: string;
  location: string;
  affiliation: string;
  departments: Department[];
}
