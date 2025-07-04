import React from 'react';

type TagProps = {
  children: React.ReactNode;
};

const Tag = ({ children }: TagProps) => {
  return (
    <div className="bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent py-1 px-3 rounded-full text-sm font-medium">
      {children}
    </div>
  );
};

export default Tag;
