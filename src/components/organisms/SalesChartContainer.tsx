import React from 'react';
import { SalesBarChart } from './SalesBarChart';
import { SalesLineChart } from './SalesLineChart';
import { SalesPieChart } from './SalesPieChart';
import { SalesData } from '../../data/types/sales';

type ChartType = 'bar' | 'line' | 'pie';

interface SalesChartContainerProps {
  data: SalesData[];
  chartType: ChartType;
}

export const SalesChartContainer: React.FC<SalesChartContainerProps> = ({
  data,
  chartType,
}) => {
  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <SalesBarChart data={data} />;
      case 'line':
        return <SalesLineChart data={data} />;
      case 'pie':
        return <SalesPieChart data={data} />;
      default:
        return <SalesBarChart data={data} />;
    }
  };

  return <div className="w-full">{renderChart()}</div>;
};
