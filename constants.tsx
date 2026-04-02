
import React from 'react';
import { Department } from './types';

export const COLLEGE_DATA = {
  name: "Abdul Razzak Kalsekar Polytechnic",
  shortName: "AIARKP",
  location: "Panvel, Navi Mumbai",
  affiliation: "Affiliated to MSBTE, Mumbai & Approved by AICTE, New Delhi",
  contact: {
    phone: "022-2748 1247",
    email: "arkp.poly@gmail.com",
    address: "Plot No. 2 & 3, Sector 16, Khandagaon, New Panvel, Navi Mumbai - 410206"
  },
  departments: [
    {
      id: 'comp',
      name: 'Computer Engineering',
      description: 'Focuses on software development, networking, and modern computing architectures.',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'mech',
      name: 'Mechanical Engineering',
      description: 'Covers thermodynamics, mechanics, and industrial design.',
      icon: '⚙️',
      image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'civil',
      name: 'Civil Engineering',
      description: 'Deals with infrastructure design, construction, and maintenance.',
      icon: '🏗️',
      image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'elect',
      name: 'Electrical Engineering',
      description: 'Explores power systems, electronics, and telecommunications.',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800'
    }
  ] as Department[]
};

export const SYSTEM_PROMPT = `
You are the Official AI Assistant for Anjuman-I-Islam's Abdul Razzak Kalsekar Polytechnic (AIARKP), Panvel.
Your goal is to help prospective students, current students, and parents with information about the polytechnic.

Key Information:
- Location: Panvel, Navi Mumbai.
- Affiliation: MSBTE.
- Approved by: AICTE, New Delhi.
- Managed by: Anjuman-I-Islam, a prestigious educational trust.
- Departments: Computer Engineering, Mechanical Engineering, Civil Engineering, and Electrical Engineering.
- Facilities: State-of-the-art laboratories, enriched library, campus placements, and extracurricular activities.
- Tone: Professional, welcoming, and knowledgeable.
- If you don't know the answer, ask them to contact the administration at ${COLLEGE_DATA.contact.phone} or email ${COLLEGE_DATA.contact.email}.
`;
