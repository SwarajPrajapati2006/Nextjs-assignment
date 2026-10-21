// Student data structure
export interface Subject {
  code: string;
  name: string;
  credits: string;
}

export interface Student {
  id: string;
  name: string;
  initials: string;
  department: string;
  year: string;
  studyYearFull: string;
  email: string;
  enrolled: string;
  status: string;
  specialization?: string;
  specializationTopic?: string;
  about: string;
  academicStanding: string;
  systemRecordId: string;
  lastValidated: string;
  subjects: Subject[];
}

export interface Department {
  id: string;
  name: string;
  description: string;
  specializationsCount: number;
  enrolledCount: number;
  icon: string;
}

// All student mock records
export const studentsData: Student[] = [
  {
    id: "STU-1042",
    name: "Aarav Mehta",
    initials: "AM",
    department: "Computer Science",
    year: "3rd Year",
    studyYearFull: "3rd Year (Junior)",
    email: "aarav.mehta@campus.edu",
    enrolled: "Fall 2022",
    status: "Active Student",
    specialization: "Web Development",
    specializationTopic: "Full-Stack Architecture",
    about: "Aarav is an undergraduate researcher focusing on distributed systems and cloud architecture. When not coding in Rust or Go, he mentors first-year engineering students in algorithm fundamentals.",
    academicStanding: "3rd Year Undergraduate",
    systemRecordId: "0948-CS-AM",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "CS-301", name: "Distributed Systems & Microservices", credits: "4.0 Credits" },
      { code: "CS-340", name: "Web Application Architecture", credits: "4.0 Credits" },
      { code: "CS-280", name: "Algorithms & Complexity", credits: "3.5 Credits" }
    ]
  },
  {
    id: "STU-1089",
    name: "Elena Rostova",
    initials: "ER",
    department: "Design",
    year: "2nd Year",
    studyYearFull: "2nd Year (Sophomore)",
    email: "elena.rostova@campus.edu",
    enrolled: "Fall 2023",
    status: "Active Student",
    specialization: "UI/UX Design",
    about: "Elena focuses on user research and intuitive design systems for modern digital products.",
    academicStanding: "2nd Year Undergraduate",
    systemRecordId: "1089-DS-ER",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "DS-201", name: "Interaction Design Principles", credits: "4.0 Credits" },
      { code: "DS-210", name: "Visual Prototyping", credits: "3.5 Credits" }
    ]
  },
  {
    id: "STU-1120",
    name: "Marcus Chen",
    initials: "MC",
    department: "Business",
    year: "4th Year",
    studyYearFull: "4th Year (Senior)",
    email: "marcus.chen@campus.edu",
    enrolled: "Fall 2021",
    status: "Active Student",
    specialization: "Fintech & Analytics",
    about: "Marcus studies financial analytics and entrepreneurial strategy with a focus on emerging markets.",
    academicStanding: "4th Year Undergraduate",
    systemRecordId: "1120-BS-MC",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "BS-401", name: "Strategic Business Management", credits: "4.0 Credits" },
      { code: "BS-415", name: "Financial Analytics", credits: "4.0 Credits" }
    ]
  },
  {
    id: "STU-1155",
    name: "Priya Sharma",
    initials: "PS",
    department: "Computer Science",
    year: "1st Year",
    studyYearFull: "1st Year (Freshman)",
    email: "priya.sharma@campus.edu",
    enrolled: "Fall 2024",
    status: "Active Student",
    specialization: "Web Development",
    specializationTopic: "Reactive UI Design",
    about: "Priya is passionate about frontend development, accessibility, and interactive web animations.",
    academicStanding: "1st Year Undergraduate",
    systemRecordId: "1155-CS-PS",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "CS-101", name: "Introduction to Computer Science", credits: "4.0 Credits" },
      { code: "CS-105", name: "Web Fundamentals", credits: "3.5 Credits" }
    ]
  },
  {
    id: "STU-1201",
    name: "Lucas Dubois",
    initials: "LD",
    department: "Design",
    year: "3rd Year",
    studyYearFull: "3rd Year (Junior)",
    email: "lucas.dubois@campus.edu",
    enrolled: "Fall 2022",
    status: "Active Student",
    specialization: "Product Design",
    about: "Lucas builds functional 3D prototypes and explores physical computing interfaces.",
    academicStanding: "3rd Year Undergraduate",
    systemRecordId: "1201-DS-LD",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "DS-310", name: "3D Product Modeling", credits: "4.0 Credits" },
      { code: "DS-320", name: "Design Ethics", credits: "3.0 Credits" }
    ]
  },
  {
    id: "STU-1244",
    name: "Maya Lin",
    initials: "ML",
    department: "Business",
    year: "2nd Year",
    studyYearFull: "2nd Year (Sophomore)",
    email: "maya.lin@campus.edu",
    enrolled: "Fall 2023",
    status: "Active Student",
    specialization: "International Entrepreneurship",
    about: "Maya is researching supply chain technology and digital marketing trends.",
    academicStanding: "2nd Year Undergraduate",
    systemRecordId: "1244-BS-ML",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "BS-210", name: "Principles of Marketing", credits: "3.5 Credits" },
      { code: "BS-220", name: "Supply Chain Essentials", credits: "3.5 Credits" }
    ]
  },
  {
    id: "STU-1310",
    name: "Tariq Al-Mansoor",
    initials: "TA",
    department: "Computer Science",
    year: "4th Year",
    studyYearFull: "4th Year (Senior)",
    email: "tariq.almansoor@campus.edu",
    enrolled: "Fall 2021",
    status: "Active Student",
    specialization: "Web Development",
    specializationTopic: "Distributed Web Systems",
    about: "Tariq works on scalable web backend architectures and distributed caching strategies.",
    academicStanding: "4th Year Undergraduate",
    systemRecordId: "1310-CS-TA",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "CS-410", name: "Cloud Native Systems", credits: "4.0 Credits" },
      { code: "CS-450", name: "Database Engineering", credits: "4.0 Credits" }
    ]
  },
  {
    id: "STU-1388",
    name: "Sophia Müller",
    initials: "SM",
    department: "Computer Science",
    year: "2nd Year",
    studyYearFull: "2nd Year (Sophomore)",
    email: "sophia.mueller@campus.edu",
    enrolled: "Fall 2023",
    status: "Active Student",
    specialization: "Web Development",
    specializationTopic: "Progressive Web Apps",
    about: "Sophia creates progressive web applications and offline-first mobile web experiences.",
    academicStanding: "2nd Year Undergraduate",
    systemRecordId: "1388-CS-SM",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "CS-220", name: "Client-Side Frameworks", credits: "4.0 Credits" },
      { code: "CS-230", name: "Mobile Web Development", credits: "3.5 Credits" }
    ]
  }
];

// Department mock records
export const departmentsData: Department[] = [
  {
    id: "computer-science",
    name: "Computer Science",
    description: "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializationsCount: 4,
    enrolledCount: 320,
    icon: "💻"
  },
  {
    id: "design",
    name: "Design",
    description: "User experience research, visual communication, interaction design, and product prototyping.",
    specializationsCount: 3,
    enrolledCount: 185,
    icon: "✏️"
  },
  {
    id: "business",
    name: "Business",
    description: "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializationsCount: 3,
    enrolledCount: 240,
    icon: "📈"
  }
];
