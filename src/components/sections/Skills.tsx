import Tag from '@/components/ui/Tag'; // Import our reusable Tag component

// Your custom skill arrays (unchanged)
const webDevelopmentSkills = [
  "JavaScript & TypeScript (ES6+)",
  "React & Next.js",
  "SQL & PHP (Dynamic Web Apps)",
  "Database Design & REST APIs"
];

const bioinformaticsSkills = [
  "RNA-Seq & NGS Data Analysis",
  "Python, R & Bioconductor (DESeq2, edgeR)",
  "Linux/Unix & Bash Scripting",
  "Data Visualization (Matplotlib, Seaborn)"
];

const publicHealthSkills = [
  "Health Data Analysis with Python & R",
  "Power BI",
  "Genomic Data Integration for Infectious Diseases"
];

const biotechnologySkills = [
  "Microbial Culturing Techniques",
  "Quality-Control & Data Monitoring",
  "Scientific Reporting & Compliance Readiness"
];

const softSkills = [
  "Analytical Problem-Solving",
  "Cross-Functional Team Collaboration",
  "Scientific Communication",
  "Adaptability & Fast Learning",
  "Agile & Lean Methodologies",
  "Project Planning & Execution",
  "Attention to Scientific & Regulatory Detail",
  "Data Ethics & Integrity",
  "Initiative & Independent Thinking"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-light-card dark:bg-dark-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-gray-100 tracking-tight">
          My Skills
        </h2>
        
        {/* Container for all skill categories, using a two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* TECHNICAL SKILLS COLUMN */}
          <div className="space-y-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left mb-8 text-gray-800 dark:text-gray-200">
              Technical & Scientific Expertise
            </h3>
            
            {/* Web Development Section */}
            <div>
              <h4 className="text-xl md:text-2xl font-semibold mb-6 text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent pb-2">
                Web Development
              </h4>
              <div className="flex flex-wrap gap-3">
                {webDevelopmentSkills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
              </div>
            </div>
            
            {/* Bioinformatics Section */}
            <div>
              <h4 className="text-xl md:text-2xl font-semibold mb-6 text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent pb-2">
                Bioinformatics
              </h4>
              <div className="flex flex-wrap gap-3">
                {bioinformaticsSkills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
              </div>
            </div>

            {/* Public Health Tech Section */}
            <div>
              <h4 className="text-xl md:text-2xl font-semibold mb-6 text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent pb-2">
                Public Health Tech
              </h4>
              <div className="flex flex-wrap gap-3">
                {publicHealthSkills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
              </div>
            </div>
            
            {/* Biotechnology Section */}
            <div>
              <h4 className="text-xl md:text-2xl font-semibold mb-6 text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent pb-2">
                Biotechnology
              </h4>
              <div className="flex flex-wrap gap-3">
                {biotechnologySkills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
              </div>
            </div>
          </div>

          {/* PROFESSIONAL (SOFT) SKILLS COLUMN */}
          <div className="space-y-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left mb-8 text-gray-800 dark:text-gray-200">
              Professional Skills
            </h3>
            
            <div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
