import React from 'react';
import { InsuranceBarChart } from './InsuranceBarChart';
import { InsuranceLineChart } from './InsuranceLineChart';
import { InsurancePieChart } from './InsurancePieChart';
import { InsuranceRecord } from '../../data/types/insurance';

type ChartType = 'bar' | 'line' | 'pie';

interface InsuranceChartContainerProps {
  data: InsuranceRecord[];
  chartType: ChartType;
}

export const InsuranceChartContainer: React.FC<InsuranceChartContainerProps> = ({
  data,
  chartType,
}) => {
  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <InsuranceBarChart data={data} />;
      case 'line':
        return <InsuranceLineChart data={data} />;
      case 'pie':
        return <InsurancePieChart data={data} />;
      default:
        return <InsuranceBarChart data={data} />;
    }
  };

  return <div className="w-full">{renderChart()}</div>;
};
