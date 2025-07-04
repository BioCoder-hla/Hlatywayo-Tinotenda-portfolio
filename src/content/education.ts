export type EducationEntry = {
  school: string;
  degree: string;
  years: string;
  description?: string; // Optional description
};

export const education: EducationEntry[] = [
  {
    school: "Midlands State University",
    degree: "BSc in Biotechnology and Bioinformatics",
    years: "2021 - 2025",
  },
  // Add more education entries here...
];
