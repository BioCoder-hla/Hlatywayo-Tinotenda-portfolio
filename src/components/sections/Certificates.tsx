// src/components/sections/Certificates.tsx

import { certificates, Certificate } from '@/content/certificates';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag'; // We'll reuse our Tag component
import { FaExternalLinkAlt } from 'react-icons/fa';

// This is the sub-component that renders a single certificate card
const CertificateCard = ({ cert }: { cert: Certificate }) => (
  <Card className="flex flex-col h-full">
    {/* Certificate Title */}
    <h3 className="text-lg font-bold text-light-accent dark:text-dark-accent">{cert.title}</h3>
    
    {/* Issuer and Date */}
    <p className="text-md font-semibold mt-1">{cert.issuer}</p>
    <p className="text-sm text-dark-subtle mt-1 mb-4">
      Issued {cert.issueMonth} {cert.issueYear}
      {cert.credentialId && ` • ID: ${cert.credentialId}`}
    </p>

    {/* --- NEW SKILLS SECTION --- */}
    <div className="flex-grow mb-4">
      <h4 className="text-sm font-semibold mb-2">Skills Covered:</h4>
      <div className="flex flex-wrap gap-2">
        {cert.skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
    </div>
    
    {/* View Credential Link */}
    {cert.url && (
      <a 
        href={cert.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-auto flex items-center gap-2 text-sm font-medium text-dark-subtle hover:text-light-accent dark:hover:text-dark-accent transition-colors"
      >
        <FaExternalLinkAlt />
        View Credential
      </a>
    )}
  </Card>
);

// This is the main section component that lays out all the cards
const Certificates = () => {
  return (
    <section id="certificates" className="py-section-md md:py-section-lg" aria-labelledby="certificates-heading">
      <div className="container mx-auto px-4">
        <h2 id="certificates-heading" className="text-3xl md:text-4xl font-bold text-center mb-16">
          Certifications & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map(cert => (
            <CertificateCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
