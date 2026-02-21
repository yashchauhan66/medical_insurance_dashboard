import React from 'react';
import { InsuranceRecord } from '../../data/types/insurance';

interface InsurancePieChartProps {
  data: InsuranceRecord[];
}

export const InsurancePieChart: React.FC<InsurancePieChartProps> = ({ data }) => {
  // Group by BMI category
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

    // Calculate path for slice
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
      path: `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`
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
              strokeWidth="1"
              className="hover:opacity-80 cursor-pointer transition-opacity"
            />
          ))}
          {/* Center hole for donut effect */}
          <circle cx="50" cy="50" r="20" fill="white" />
          <text x="50" y="48" textAnchor="middle" className="text-xs fill-gray-600 font-medium">
            {total}
          </text>
          <text x="50" y="55" textAnchor="middle" className="text-[6px] fill-gray-400">
            Records
          </text>
        </svg>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {slices.map((slice, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded"
                style={{ backgroundColor: slice.color }}
              />
              <span className="text-sm text-gray-700">
                {slice.category}: {slice.stats.count} ({slice.percentage.toFixed(1)}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
