// src/components/sections/Hero.tsx

import Link from 'next/link';
import { siteConfig } from '@/content/siteConfig';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (

    <section id="hero" className="flex flex-col justify-center items-center text-center px-4 py-section-md md:py-section-lg">
      
      {/* --- Top Hero Content --- */}
      <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-light-accent to-blue-500 dark:from-dark-accent dark:to-blue-400 pb-2">
        {siteConfig.author}
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-light-text dark:text-dark-text">
        Transforming complex biological data into actionable insights and intuitive web applications, bridging the gap between life sciences and technology.
      </p>
      <p className="mt-2 text-md md:text-lg text-dark-subtle">
        Molecular Biologist | Microbiologist | Bioinformatician | Data Analyst | Junior Web Developer
      </p>
      <div className="mt-8">
        <Link 
          href="/contact" 
          className="bg-light-accent text-white dark:bg-dark-accent dark:text-dark-bg font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 text-lg shadow-lg"
        >
          Get In Touch
        </Link>
      </div>

      {/* --- Cohesive "Explore" Section --- */}
      {/* 2. THE COHESIVE DESIGN: The "Explore" content is now part of the Hero. */}
      {/* A large top margin creates a nice visual separation without the dead space. */}
      <div className="mt-24 md:mt-32">
        <h2 className="text-2xl font-bold mb-4">Explore My Work</h2>
        <p className="max-w-2xl mx-auto mb-8 text-dark-subtle">
          Dive into my professional journey, check out my projects, or get in touch to collaborate.
        </p>

        {/* 3. THE ARROW FIX: The arrow is now part of the content flow,
            visually guiding the user from the text to the buttons. */}
        <div className="my-8 animate-bounce">
          <FaArrowDown size={28} className="text-dark-subtle mx-auto"/>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/experience" className="bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent font-bold py-3 px-6 rounded-lg hover:bg-light-accent/20 dark:hover:bg-dark-accent/20 transition-colors">
            View Experience
          </Link>
          <Link href="/projects" className="bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent font-bold py-3 px-6 rounded-lg hover:bg-light-accent/20 dark:hover:bg-dark-accent/20 transition-colors">
            See Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
