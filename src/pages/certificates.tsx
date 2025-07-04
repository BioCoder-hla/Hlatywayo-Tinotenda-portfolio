// src/pages/certificates.tsx

// 1. Import the Meta component for SEO
import Meta from '@/components/seo/Meta';
// 2. Import the Certificates section component you've already built
import CertificatesSection from '@/components/sections/Certificates';

// 3. Define the page component that Next.js will render for the /certificates URL
export default function CertificatesPage() {
  return (
    <>
      {/* 4. Add a unique, SEO-friendly title and description for this page */}
      <Meta 
        title="Certifications & Achievements" 
        description="A list of professional certifications and achievements earned by Wayne Hlatywayo." 
      />
      
      {/* 5. Render your existing Certificates section component */}
      <CertificatesSection />
    </>
  );
}
