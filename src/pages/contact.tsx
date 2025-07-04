// src/pages/contact.tsx

import ContactSection from '@/components/sections/Contact';
// Import the new Meta component and remove the old Head import
import Meta from '@/components/seo/Meta';

export default function ContactPage() {
  return (
    <>
      {/* Replaced the <Head> block, passing in a custom title and description */}
      <Meta 
        title="Contact Me" 
        description="Get in touch with Wayne Hlatywayo for collaborations or inquiries." 
      />
      <ContactSection />
    </>
  );
}
