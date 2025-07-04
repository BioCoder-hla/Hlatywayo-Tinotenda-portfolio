// src/content/siteConfig.ts

export type SocialLink = {
  name: string;
  url: string;
};

export type NavLink = {
  name: string;
  path: string;
};

type SiteConfig = {
  author: string;
  title: string;
  email: string;
  resumeUrl: string;
  socials: SocialLink[];
  navLinks: NavLink[];
};

export const siteConfig: SiteConfig = {
  author: "Hlatywayo Tinotenda Wayne",
  title: "Wayne Hlatywayo - Bioinformatician & Web Developer",
  email: "your.email@example.com",
  resumeUrl: "/assets/resume.pdf",
  socials: [
    { name: "GitHub", url: "https://github.com/your-username" },
    { name: "LinkedIn", url: "https://linkedin.com/in/your-username" },
    { name: "Twitter", url: "https://twitter.com/your-username" },
  ],
  // Update the navLinks array to include the new page
  navLinks: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' }, // <-- THIS IS THE NEW ADDITION
    { name: 'Contact', path: '/contact' },
  ],
};
