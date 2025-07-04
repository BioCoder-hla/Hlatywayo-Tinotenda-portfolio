// src/components/ui/Card.tsx
import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div 
      className={`
        bg-light-card dark:bg-dark-card rounded-xl 
        shadow-lg hover:shadow-xl 
        border border-transparent dark:border-gray-800 
        hover:border-light-accent/50 dark:hover:border-dark-accent/50
        transition-all duration-300 transform hover:-translate-y-1
        p-6 md:p-8 ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
