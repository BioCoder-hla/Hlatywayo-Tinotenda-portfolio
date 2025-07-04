// src/content/experience.ts

// The updated type definition for a single experience entry
export type ExperienceEntry = {
  role: string;
  company: string;
  department?: string; // Department is now an optional string
  date: string;
  description: string;
  skills: string[]; // Renamed from 'technologies'
};

// The updated data array
export const experience: ExperienceEntry[] = [
  {
    role: "Resident Innovator",
    company: "Midlands State University",
    department: "Research & Innovation (Incubation Hub)", // Here is the new department field in action
    date: "June 2024 - Present",
    description: "Led in the development of Biofertilizer, herbal bug repellent and a crop pest and disease detection system.",
    skills: ["Project Management",
  "Product Development & Prototyping",
  "Web Development (HTML, CSS, JavaScript)",
  "Database Design & Implementation (MySQL, PHP)",
  "Cross-Disciplinary Team Collaboration",
  "Problem-Solving",
  "Time Management & Meeting Deadlines",
  "Agri-Tech Innovation"], // Now called 'skills'
  },
  {
    role: "Student Intern",
    company: "Midlands State University",
    department: "Research & Innovation (Incubation Hub)",
    date: "September 2023 - May 2024",
    description: "Worked as a research assistant and assistant lab technician in the development of herbal 			 respiratory wellness products. Assisted in designing and conducting lab practicals, and contributed to the formulation of culinary products from indigenous fruits. Participated in exhibitions showcasing various innovative products in the Innovation hub and product development.",
    skills: [
  "Research Assistance",
  "Herbal Product Formulation",
  "Laboratory Techniques",
  "Experimental Design & Execution",
  "Indigenous Knowledge Integration",
  "Exhibition & Project Pitching",
  "Food Product Development"
],
  },
  // Add more entries as needed, following this new structure
];
