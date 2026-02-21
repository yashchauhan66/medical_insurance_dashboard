'use client';

import React, { useState } from 'react';
import { InsuranceRecord } from '../../data/types/insurance';

interface InsurancePieChartProps {
  data: InsuranceRecord[];
}

export const InsurancePieChart: React.FC<InsurancePieChartProps> = ({ data }) => {
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);

  
  const bmiCategories = data.reduce((acc, record) => {
    const category = record.bmi_category;
    if (!acc[category]) {
      acc[category] = { count: 0, totalCharges: 0 };
    }
    acc[category].count += 1;
    acc[category].totalCharges += record.charges;
    return acc;
  }, {} as Record<string, { count: number; totalCharges: number }>);

  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
  const total = Object.values(bmiCategories).reduce((sum, cat) => sum + cat.count, 0);

  let currentAngle = 0;
  const slices = Object.entries(bmiCategories).map(([category, stats], index) => {
    const percentage = (stats.count / total) * 100;
    const angle = (stats.count / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle += angle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const x1 = 50 + 40 * Math.cos(startRad);
    const y1 = 50 + 40 * Math.sin(startRad);
    const x2 = 50 + 40 * Math.cos(endRad);
    const y2 = 50 + 40 * Math.sin(endRad);
    const largeArc = angle > 180 ? 1 : 0;

    return {
      category,
      stats,
      percentage,
      color: colors[index % colors.length],
      path: `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`,
      avgCharges: Math.round(stats.totalCharges / stats.count)
    };
  });

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <svg viewBox="0 0 100 100" className="w-64 h-64">
          {slices.map((slice, index) => (
            <path
              key={index}
              d={slice.path}
              fill={slice.color}
              stroke="white"
              strokeWidth={hoveredSlice === index ? 2 : 1}
              className="cursor-pointer transition-all duration-200"
              style={{
                opacity: hoveredSlice === null || hoveredSlice === index ? 1 : 0.6,
                transform: hoveredSlice === index ? 'scale(1.05)' : 'scale(1)',
                transformOrigin: '50px 50px'
              }}
              onMouseEnter={() => setHoveredSlice(index)}
              onMouseLeave={() => setHoveredSlice(null)}
            />
          ))}
          <circle cx="50" cy="50" r="20" fill="white" />
          <text x="50" y="48" textAnchor="middle" className="text-xs fill-gray-600 font-medium">
            {total}
          </text>
          <text x="50" y="55" textAnchor="middle" className="text-[6px] fill-gray-400">
            Records
          </text>
        </svg>

        
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {slices.map((slice, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 relative group"
              onMouseEnter={() => setHoveredSlice(index)}
              onMouseLeave={() => setHoveredSlice(null)}
            >
              <div
                className="w-3 h-3 rounded transition-all"
                style={{ 
                  backgroundColor: slice.color,
                  transform: hoveredSlice === index ? 'scale(1.2)' : 'scale(1)'
                }}
              />
              <span 
                className="text-sm text-gray-700 transition-all"
                style={{
                  fontWeight: hoveredSlice === index ? 'bold' : 'normal'
                }}
              >
                {slice.category}: {slice.stats.count} ({slice.percentage.toFixed(1)}%)
              </span>
              
             
              {hoveredSlice === index && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white text-xs px-3 py-2 rounded shadow-lg whitespace-nowrap z-10">
                  <div className="font-semibold">{slice.category}</div>
                  <div>Count: {slice.stats.count}</div>
                  <div>Avg Charges: ${slice.avgCharges.toLocaleString()}</div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
