// src/content/projects.ts

// 1. We define the type for a single project directly in this file.
//    The conflicting import has been removed.
export type Project = {
  title: string;
  description: string;
  image: string; // Path to the image in public/assets/images/projects
  tags: string[];
  githubUrl?: string; // Optional
  liveUrl?: string;   // Optional
};

// 2. We export the array of project data, typed with the 'Project' type we just defined.
export const projects: Project[] = [
   {
    "title": "MDR-TB Risk Factors in Africa",
    "description": "A machine learning project analyzing WHO data to identify key risk factors for multidrug-resistant tuberculosis (MDR-TB) in Africa. The Random Forest model achieved 86.6% accuracy, identifying HIV-positive TB cases as the most significant risk factor.",
    "image": "/assets/images/projects/MDR-TB Risk Factors in Africa.png",
    "tags": ["Jupyter Notebook", "Machine Learning", "Data Analytics", "Python", "Infectious Diseases", "Data Wrangling", "Data Visualisation"],
    "githubUrl": "https://github.com/BioCoder-hla/MDR-TB-Risk-Factors-in-Africa"
  },
  {
    "title": "Smartphone Inventory & POS System",
    "description": "A PHP-based web application for managing a smartphone shop’s inventory, sales, and reporting. Features role-based user authentication, a point-of-sale (POS) interface, and detailed sales reporting with a responsive dark theme.",
    "image": "/assets/images/projects/Smartphone Inventory & POS System.png",
    "tags": ["PHP", "JavaScript", "CSS", "MySQL", "HTML", "SQL"],
    "githubUrl": "https://github.com/BioCoder-hla/Smartphone-Inventory-POS-System"
  },
  {
    "title": "Tuberculosis RNA-seq Analysis",
    "description": "A bioinformatics pipeline in R for analyzing RNA-seq data (GEO: GSE107991) to understand TB progression. Includes preprocessing, differential expression analysis with edgeR, and functional enrichment using clusterProfiler to identify gene signatures and biomarkers.",
    "image": "/assets/images/projects/Active_Control_volcano_plot.png",
    "tags": ["R", "Bioinformatics", "RNA-seq", "edgeR", "clusterProfiler", "Infectious Diseases"],
    "githubUrl": "https://github.com/BioCoder-hla/TB-RNAseq-Analysis"
  },
    {
  "title": "Hospital Performance Intelligence Platform",
  "description": "A full-stack healthcare analytics dashboard built with R, MySQL, Flask, and JavaScript. Transforms raw CMS hospital data into an interactive web platform to explore unplanned visit rates, visualize KPIs by state, and support data-driven decision making.",
  "image": "/assets/images/projects/Hospital Performance Platform.png",
  "tags": ["R", "Data wrangling", "MySQL", "SQL", "Flask", "Python", "JavaScript", "HTML", "CSS", "Data Visualization", "Healthcare Data Analytics", "Full Stack Web Development"],
  "githubUrl": "https://github.com/BioCoder-hla/Hospital-Performance-Dashboard"
}

];
