import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SalesData } from '../../data/types/sales';

interface SalesLineChartProps {
  data: SalesData[];
}

export const SalesLineChart: React.FC<SalesLineChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Sales']} />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="sales" 
          stroke="#3B82F6" 
          strokeWidth={2}
          name="Sales"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
