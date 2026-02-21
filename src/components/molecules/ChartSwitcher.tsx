import React from 'react';
import { Button } from '../atoms/Button';

type ChartType = 'bar' | 'line' | 'pie';

interface ChartSwitcherProps {
  activeChart: ChartType;
  onChartChange: (chart: ChartType) => void;
}

export const ChartSwitcher: React.FC<ChartSwitcherProps> = ({
  activeChart,
  onChartChange,
}) => {
  const chartTypes: { type: ChartType; label: string }[] = [
    { type: 'bar', label: 'Bar Chart' },
    { type: 'line', label: 'Line Chart' },
    { type: 'pie', label: 'Pie Chart' },
  ];

  return (
    <div className="flex gap-2">
      {chartTypes.map(({ type, label }) => (
        <Button
          key={type}
          variant={activeChart === type ? 'primary' : 'secondary'}
          onClick={() => onChartChange(type)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
