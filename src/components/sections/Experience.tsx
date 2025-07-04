// src/components/sections/Experience.tsx

import { experience, ExperienceEntry } from '@/content/experience';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';

// This sub-component renders a single card for an experience entry
const ExperienceCard = ({ entry }: { entry: ExperienceEntry }) => (
  <Card className="mb-8">
    <div className="flex justify-between items-start">
      <h3 className="text-xl font-bold text-light-accent dark:text-dark-accent">{entry.role}</h3>
      <p className="text-sm text-dark-subtle font-medium">{entry.date}</p>
    </div>
    <h4 className="text-lg font-semibold text-light-text dark:text-dark-text">{entry.company}</h4>

    {/* This line conditionally renders the department only if you've provided one */}
    {entry.department && (
      <p className="text-md text-dark-subtle mb-4">{entry.department}</p>
    )}

    <p className="text-light-text/90 dark:text-dark-text/90 mb-6 mt-2">
      {entry.description}
    </p>

    {/* This is the new subheading for the skills section */}
    <h5 className="text-md font-semibold mb-3">Skills Gained:</h5>
    <div className="flex flex-wrap gap-2">
      {/* This now loops over the 'skills' array from your data file */}
      {entry.skills.map(skill => (
        <Tag key={skill}>{skill}</Tag>
      ))}
    </div>
  </Card>
);

// This is the main section component
const Experience = () => {
  return (
    <section id="experience" className="py-section-md md:py-section-lg" aria-labelledby="experience-heading">
      <div className="container mx-auto px-4">
        <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-center mb-16">
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          {experience.map((entry, index) => (
            <ExperienceCard key={index} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
