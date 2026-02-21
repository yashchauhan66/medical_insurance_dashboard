import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ 
  children, 
  level = 2, 
  className = '' 
}) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  
  const sizeClasses = {
    1: 'text-3xl font-bold',
    2: 'text-2xl font-semibold',
    3: 'text-xl font-semibold',
    4: 'text-lg font-medium',
    5: 'text-base font-medium',
    6: 'text-sm font-medium',
  };

  return (
    <Tag className={`${sizeClasses[level]} text-gray-900 ${className}`}>
      {children}
    </Tag>
  );
};
