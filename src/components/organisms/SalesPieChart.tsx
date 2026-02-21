import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, PieLabelRenderProps } from 'recharts';
import { SalesData } from '../../data/types/sales';

interface SalesPieChartProps {
  data: SalesData[];
}

interface PieChartData extends SalesData {
  percent?: number;
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'];

export const SalesPieChart: React.FC<SalesPieChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={(props: PieLabelRenderProps) => {
            const entry = props.payload as PieChartData;
            return `${entry.month} ${((entry.percent || 0) * 100).toFixed(0)}%`;
          }}
          outerRadius={120}
          fill="#8884d8"
          dataKey="sales"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Sales']} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
