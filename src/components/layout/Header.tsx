// src/components/layout/Header.tsx

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi';
import { siteConfig } from '@/content/siteConfig';

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-light-accent dark:text-dark-accent">
              {siteConfig.author}
            </Link>
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-8">
            {siteConfig.navLinks.map((link) => {
              const isActive = router.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`font-medium transition-colors ${
                    isActive
                      ? 'text-light-accent dark:text-dark-accent'
                      : 'text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer" className="bg-light-accent text-white dark:bg-dark-accent dark:text-dark-bg font-bold py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
              View My CV
            </a>
          </nav>

          <div className="flex items-center">
            {/* === THEME TOGGLE BUTTON - UPDATED === */}
            {isMounted && (
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 p-2 rounded-lg text-light-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'light' ? <HiMoon size={20} /> : <HiSun size={20} />}
                <span className="hidden sm:inline text-sm font-medium">Toggle Mode</span>
              </button>
            )}

            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-light-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Open main menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-light-card/95 dark:bg-dark-card/95 backdrop-blur-sm shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-8">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="font-bold text-2xl text-light-text dark:text-dark-text"
              >
                {link.name}
              </Link>
            ))}
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer" className="bg-light-accent text-white dark:bg-dark-accent dark:text-dark-bg font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity mt-4">
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
