import React from 'react';
import { InsuranceRecord } from '../../data/types/insurance';

interface InsuranceBarChartProps {
  data: InsuranceRecord[];
}

export const InsuranceBarChart: React.FC<InsuranceBarChartProps> = ({ data }) => {
  const maxCharges = Math.max(...data.map(d => d.charges));
  
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px]">
        <div className="flex items-end justify-between h-64 gap-2">
          {data.slice(0, 50).map((record, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center gap-1 group cursor-pointer"
            >
              <div
                className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-all relative"
                style={{ height: `${(record.charges / maxCharges) * 200}px` }}
              >
                <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                  ${record.charges.toLocaleString()}
                </div>
              </div>
              <span className="text-xs text-gray-600 rotate-45 origin-left mt-2">
                {record.age}y
              </span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 text-sm text-gray-700 font-medium">
          Insurance Charges by Age (showing {Math.min(data.length, 50)} records)
        </div>
      </div>
    </div>
  );
};
