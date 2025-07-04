// src/components/layout/Footer.tsx
import { FaLink } from 'react-icons/fa';
import { siteConfig } from '@/content/siteConfig';
import { FaLink, FaTwitter, FaGithub } from 'react-icons/fa';

// A mapping from social name to icon component
const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Twitter: FaTwitter,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-light-card dark:bg-dark-card py-6 mt-12 shadow-inner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-dark-subtle">
        <div className="flex justify-center space-x-6 mb-4">
          {siteConfig.socials.map((link) => {
            const Icon = iconMap[link.name as keyof typeof iconMap] || FaLink;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-subtle hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                aria-label={link.name} // Accessibility enhancement
              >
                <Icon size={24} />
              </a>
            )
          })}
        </div>
        
        <p>© {currentYear} {siteConfig.author}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
