// src/pages/projects.tsx

import ProjectsSection from '@/components/sections/Projects';
// Import the new Meta component and remove the old Head import
import Meta from '@/components/seo/Meta';

export default function ProjectsPage() {
  return (
    <>
      {/* Replaced the <Head> block, passing in a custom title and description */}
      <Meta 
        title="My Projects" 
        description="A portfolio of web development and data analysis projects by Wayne Hlatywayo." 
      />
      <ProjectsSection />
    </>
  );
}
