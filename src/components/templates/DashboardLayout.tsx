import React from 'react';
import { Title } from '../atoms/Title';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Title level={1}>{title}</Title>
        </div>
        
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};
