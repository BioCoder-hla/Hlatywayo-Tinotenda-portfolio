import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32" aria-labelledby="about-heading">
      <div className="container mx-auto">
        <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Profile Image */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl">
              <Image 
                src="/assets/images/profile.jpeg" // Add your profile image file here
                alt="Profile picture of Wayne Hlatywayo"
                layout="fill"
                sizes="12rem" 
                priority
                objectFit="cover"
              />
            </div>
          </div>
          
          {/* About Text */}
          <div className="md:col-span-2 text-lg text-light-text dark:text-dark-text text-center md:text-left">
            <h3 className="font-semibold text-xl mb-2">Hlatywayo Tinotenda Wayne</h3>
            <p className="mb-4">
              I am a passionate data analyst and web developer with a strong foundation in both technical and scientific expertise. My journey combines a unique blend of skills in bioinformatics, public health technology, and web development, enabling me to tackle complex data challenges in innovative ways.
            </p>
            <h4 className="font-semibold text-lg mb-2">Professional Background</h4>
            <p className="mb-4">
               I served as a Resident Innovator at Midlands State University, where I led projects aimed at developing biofertilizers and crop disease detection systems. This role enriched my abilities in project management, product development, and cross-disciplinary collaboration. My participation in various exhibitions, such as the Agricultural Show and the Zimbabwe International Trade Fair (ZITF), further enriched my presentation, project pitching and communication skills.
            </p>
            <p className="mb-4">
              Previously, I interned at the Midlands State University Innovation Hub, assisting in the formulation of herbal wellness products and engaging in research that integrates indigenous knowledge with modern practices. My hands-on experience in laboratory techniques has equipped me with valuable skills in experimental design and execution.
            </p>
            
            <h4 className="font-semibold text-lg mb-2">Research Interests</h4>
            <p className="mb-4">
              I am particularly enthusiastic about the intersection of data science and public health. My projects, such as the MDR-TB Risk Factors analysis and the Hospital Performance Intelligence Platform, highlight my commitment to using data for improving healthcare outcomes.
            </p>
            <h4 className="font-semibold text-lg mb-2">Lifelong Learner</h4>
            <p>
              I continuously seek to expand my knowledge and skills, as evidenced by my certifications in data analytics, project management, and bioinformatics. I believe in the power of data to drive informed decision-making and am dedicated to making a positive impact in the healthcare sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
