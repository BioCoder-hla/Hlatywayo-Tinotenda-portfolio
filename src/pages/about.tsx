// src/pages/about.tsx

import AboutSection from '@/components/sections/About';
// Import the new Meta component and remove the old Head import
import Meta from '@/components/seo/Meta';

export default function AboutPage() {
  return (
    <>
      {/* Replaced the <Head> block, passing in a custom title and description */}
      <Meta 
        title="About Me" 
        description="Learn more about Wayne Hlatywayo's background in bioinformatics, data analysis, and web development." 
      />
      <AboutSection />
    </>
  );
}
