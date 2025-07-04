// src/pages/index.tsx

import Meta from '@/components/seo/Meta';
import Hero from "@/components/sections/Hero";

// The Home Page is now extremely clean. It only renders the Hero component.
export default function HomePage() {
  return (
    <>
      <Meta />
      <Hero />
    </>
  );
}
