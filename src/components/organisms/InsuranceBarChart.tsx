'use client';

import React, { useState } from 'react';
import { InsuranceRecord } from '../../data/types/insurance';

interface InsuranceBarChartProps {
  data: InsuranceRecord[];
}

export const InsuranceBarChart: React.FC<InsuranceBarChartProps> = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const maxCharges = Math.max(...data.map(d => d.charges));
  
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px]">
        <div className="flex items-end justify-between h-64 gap-1">
          {data.map((record, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center gap-1 cursor-pointer relative min-w-[8px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
          
              {hoveredIndex === index && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white text-xs px-3 py-2 rounded shadow-lg whitespace-nowrap z-20 min-w-[140px]">
                  <div className="font-semibold border-b border-gray-700 pb-1 mb-1">Age: {record.age}</div>
                  <div className="text-gray-300">{record.sex} | {record.bmi_category}</div>
                  <div className="text-gray-300">{record.smoker === 'yes' ? 'Smoker' : 'Non-smoker'}</div>
                  <div className="text-green-400 font-bold mt-1">${record.charges.toLocaleString()}</div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
              
              <div
                className="w-full bg-blue-500 rounded-t transition-all relative"
                style={{ 
                  height: `${(record.charges / maxCharges) * 200}px`,
                  backgroundColor: hoveredIndex === index ? '#2563eb' : '#3b82f6',
                  transform: hoveredIndex === index ? 'scaleY(1.02)' : 'scaleY(1)',
                  transformOrigin: 'bottom'
                }}
              />
              <span 
                className="text-xs text-gray-600 rotate-45 origin-left mt-2 transition-all"
                style={{
                  fontWeight: hoveredIndex === index ? 'bold' : 'normal',
                  color: hoveredIndex === index ? '#1f2937' : '#4b5563'
                }}
              >
                {record.age}y
              </span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 text-sm text-gray-700 font-medium">
          Insurance Charges by Age (showing {data.length} records)
        </div>
      </div>
    </div>
  );
};
