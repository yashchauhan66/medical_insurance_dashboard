export interface SalesData {
  month: string;
  sales: number;
  year: number;
}

export interface YearlySales {
  year: number;
  data: SalesData[];
}

export interface SalesResponse {
  data: YearlySales[];
}
