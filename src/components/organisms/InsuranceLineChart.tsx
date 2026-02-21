import React from 'react';
import { InsuranceRecord } from '../../data/types/insurance';

interface InsuranceLineChartProps {
  data: InsuranceRecord[];
}

export const InsuranceLineChart: React.FC<InsuranceLineChartProps> = ({ data }) => {
  // Group by age and calculate average charges
  const ageGroups = data.reduce((acc, record) => {
    const age = record.age;
    if (!acc[age]) {
      acc[age] = { total: 0, count: 0 };
    }
    acc[age].total += record.charges;
    acc[age].count += 1;
    return acc;
  }, {} as Record<number, { total: number; count: number }>);

  const averagedData = Object.entries(ageGroups)
    .map(([age, stats]) => ({
      age: parseInt(age),
      avgCharges: stats.total / stats.count
    }))
    .sort((a, b) => a.age - b.age);

  const maxCharges = Math.max(...averagedData.map(d => d.avgCharges));
  const minCharges = Math.min(...averagedData.map(d => d.avgCharges));
  
  // Convert data to points
  const points = averagedData.map((d, i) => ({
    x: (i / (averagedData.length - 1 || 1)) * 100,
    y: 100 - ((d.avgCharges - minCharges) / (maxCharges - minCharges || 1)) * 80 - 10
  }));

  // Generate smooth bezier curve path
  const generateSmoothPath = (pts: { x: number; y: number }[]) => {
    if (pts.length === 0) return '';
    if (pts.length === 1) return `M ${pts[0].x},${pts[0].y}`;
    
    let path = `M ${pts[0].x},${pts[0].y}`;
    
    for (let i = 0; i < pts.length - 1; i++) {
      const current = pts[i];
      const next = pts[i + 1];
      
      // Calculate control points for smooth curve
      const cp1x = current.x + (next.x - current.x) * 0.5;
      const cp1y = current.y;
      const cp2x = next.x - (next.x - current.x) * 0.5;
      const cp2y = next.y;
      
      path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${next.x},${next.y}`;
    }
    
    return path;
  };

  const smoothPath = generateSmoothPath(points);

  // Generate area path (close the shape at bottom)
  const areaPath = `${smoothPath} L ${points[points.length - 1]?.x || 100},100 L ${points[0]?.x || 0},100 Z`;

  return (
    <div className="w-full">
      <svg viewBox="0 0 100 100" className="w-full h-64" preserveAspectRatio="none">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map(y => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#e5e7eb" strokeWidth="0.5" />
        ))}
        
        {/* Area fill */}
        <path
          d={areaPath}
          fill="rgba(59, 130, 246, 0.1)"
        />
        
        {/* Smooth Line */}
        <path
          d={smoothPath}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Data points */}
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="1.5"
            fill="#3b82f6"
            className="hover:r-3 transition-all cursor-pointer"
          />
        ))}
      </svg>
      
      <div className="flex justify-between text-xs text-gray-600 mt-2">
        <span>Age: {averagedData[0]?.age}</span>
        <span>Average Insurance Charges by Age</span>
        <span>Age: {averagedData[averagedData.length - 1]?.age}</span>
      </div>
    </div>
  );
};
