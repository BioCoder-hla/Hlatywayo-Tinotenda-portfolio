// src/pages/experience.tsx

import ExperienceSection from '@/components/sections/Experience';
// Import the new Meta component and remove the old Head import
import Meta from '@/components/seo/Meta';

export default function ExperiencePage() {
  return (
    <>
      {/* Replaced the <Head> block, passing in a custom title and description */}
      <Meta 
        title="Work Experience" 
        description="A detailed overview of Wayne Hlatywayo's professional work experience." 
      />
      <ExperienceSection />
    </>
  );
}
