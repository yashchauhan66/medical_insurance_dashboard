import { SalesData, SalesResponse } from './types/sales';

const sales2022: SalesData[] = [
  { month: 'Jan', sales: 45000, year: 2022 },
  { month: 'Feb', sales: 52000, year: 2022 },
  { month: 'Mar', sales: 48000, year: 2022 },
  { month: 'Apr', sales: 61000, year: 2022 },
  { month: 'May', sales: 58000, year: 2022 },
  { month: 'Jun', sales: 72000, year: 2022 },
  { month: 'Jul', sales: 68000, year: 2022 },
  { month: 'Aug', sales: 75000, year: 2022 },
  { month: 'Sep', sales: 69000, year: 2022 },
  { month: 'Oct', sales: 78000, year: 2022 },
  { month: 'Nov', sales: 85000, year: 2022 },
  { month: 'Dec', sales: 92000, year: 2022 },
];

const sales2023: SalesData[] = [
  { month: 'Jan', sales: 52000, year: 2023 },
  { month: 'Feb', sales: 58000, year: 2023 },
  { month: 'Mar', sales: 55000, year: 2023 },
  { month: 'Apr', sales: 69000, year: 2023 },
  { month: 'May', sales: 67000, year: 2023 },
  { month: 'Jun', sales: 81000, year: 2023 },
  { month: 'Jul', sales: 78000, year: 2023 },
  { month: 'Aug', sales: 86000, year: 2023 },
  { month: 'Sep', sales: 79000, year: 2023 },
  { month: 'Oct', sales: 88000, year: 2023 },
  { month: 'Nov', sales: 95000, year: 2023 },
  { month: 'Dec', sales: 105000, year: 2023 },
];

const sales2024: SalesData[] = [
  { month: 'Jan', sales: 58000, year: 2024 },
  { month: 'Feb', sales: 65000, year: 2024 },
  { month: 'Apr', sales: 78000, year: 2024 },
  { month: 'May', sales: 75000, year: 2024 },
  { month: 'Jun', sales: 92000, year: 2024 },
  { month: 'Jul', sales: 88000, year: 2024 },
  { month: 'Aug', sales: 98000, year: 2024 },
  { month: 'Sep', sales: 89000, year: 2024 },
  { month: 'Oct', sales: 99000, year: 2024 },
  { month: 'Nov', sales: 108000, year: 2024 },
  { month: 'Dec', sales: 118000, year: 2024 },
  { month: 'Mar', sales: 62000, year: 2024 },
];

export const mockSalesData: SalesResponse = {
  data: [
    { year: 2022, data: sales2022 },
    { year: 2023, data: sales2023 },
    { year: 2024, data: sales2024 },
  ],
};
