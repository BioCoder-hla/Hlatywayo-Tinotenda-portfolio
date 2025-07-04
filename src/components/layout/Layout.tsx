// src/components/layout/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    // The skip-link is for screen reader users to jump directly to the main content
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white dark:focus:bg-black">
        Skip to main content
      </a>
      <Header />
      {/* This is the semantic <main> tag for the primary content of each page */}
      <main id="main-content" className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
