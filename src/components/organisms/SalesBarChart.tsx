import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SalesData } from '../../data/types/sales';

interface SalesBarChartProps {
  data: SalesData[];
}

export const SalesBarChart: React.FC<SalesBarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Sales']} />
        <Legend />
        <Bar dataKey="sales" fill="#3B82F6" name="Sales" />
      </BarChart>
    </ResponsiveContainer>
  );
};
