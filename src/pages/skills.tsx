// src/pages/skills.tsx

// 1. Import the Meta component for SEO and the Skills section component
import Meta from '@/components/seo/Meta';
import SkillsSection from '@/components/sections/Skills';

// 2. Define the page component. This is the new entry point for the /skills URL.
export default function SkillsPage() {
  return (
    <>
      {/* 3. Add page-specific SEO title and description */}
      <Meta 
        title="My Skills" 
        description="A showcase of technical and professional skills in web development, bioinformatics, and data analysis." 
      />
      
      {/* 4. Render the Skills component that you've already designed */}
      <SkillsSection />
    </>
  );
}
