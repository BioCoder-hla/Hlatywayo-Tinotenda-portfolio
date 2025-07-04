// src/components/sections/Projects.tsx

import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects, Project } from '@/content/projects';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// ===================================================================================
// 1. THE PROJECT CARD SUB-COMPONENT
// This is the component that renders the details for a SINGLE project.
// This part was likely missing or incomplete in your file.
// ===================================================================================
const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="flex flex-col h-full">
    {/* Project Image */}
    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
      <Image 
        src={project.image} 
        alt={`Screenshot of ${project.title}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Project Title */}
    <h3 className="text-xl font-bold mb-2">{project.title}</h3>

    {/* Project Description */}
    <p className="text-light-text/90 dark:text-dark-text/90 mb-4 flex-grow">
      {project.description}
    </p>

    {/* Technology Tags */}
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </div>

    {/* Project Links (GitHub, Live Demo) */}
    <div className="mt-auto flex items-center gap-4">
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="text-dark-subtle hover:text-light-accent dark:hover:text-dark-accent transition-colors">
          <FaGithub size={24} />
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="text-dark-subtle hover:text-light-accent dark:hover:text-dark-accent transition-colors">
          <FaExternalLinkAlt size={22} />
        </a>
      )}
    </div>
  </Card>
);

// ===================================================================================
// 2. THE MAIN PROJECTS SECTION COMPONENT
// This is the main component that maps over your data and uses ProjectCard.
// ===================================================================================

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-section-md md:py-section-lg bg-light-card dark:bg-dark-card" aria-labelledby="projects-heading">
      <div className="container mx-auto px-4">
        <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map(project => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
