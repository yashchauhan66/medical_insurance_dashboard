'use client';

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/templates/DashboardLayout';
import { Card } from '@/components/atoms/Card';
import { FilterInput } from '@/components/molecules/FilterInput';
import { ChartSwitcher } from '@/components/molecules/ChartSwitcher';
import { InsuranceChartContainer } from '@/components/organisms/InsuranceChartContainer';
import { InsuranceRecord, InsuranceDataResponse } from '@/data/types/insurance';

type ChartType = 'bar' | 'line' | 'pie';

interface Summary {
  totalRecords: number;
  avgCharges: number;
  avgBMI: number;
  smokerCount: number;
}

export default function Dashboard() {
  const [insuranceData, setInsuranceData] = useState<InsuranceRecord[]>([]);
  const [filteredData, setFilteredData] = useState<InsuranceRecord[]>([]);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [threshold, setThreshold] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    const fetchInsuranceData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/sales');
        if (!response.ok) {
          throw new Error('Failed to fetch insurance data');
        }
        const data: InsuranceDataResponse = await response.json();
        
        setInsuranceData(data.data);
        setFilteredData(data.data);
        setSummary(data.summary);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchInsuranceData();
  }, []);

  useEffect(() => {
    if (threshold === '') {
      setFilteredData(insuranceData);
    } else {
      const thresholdValue = parseFloat(threshold);
      if (!isNaN(thresholdValue)) {
        const filtered = insuranceData.filter(item => item.charges > thresholdValue);
        setFilteredData(filtered);
      } else {
        setFilteredData(insuranceData);
      }
    }
  }, [threshold, insuranceData]);

  if (loading) {
    return (
      <DashboardLayout title="Insurance Dashboard">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-600">Loading insurance data...</div>
        </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout title="Insurance Dashboard">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-red-600">Error: {error}</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Insurance Dashboard">
      
      {/* Summary Stats */}
      {summary && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{summary.totalRecords}</div>
              <div className="text-sm text-gray-600 mt-1">Total Records</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">${summary.avgCharges.toLocaleString()}</div>
              <div className="text-sm text-gray-600 mt-1">Avg Charges</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{summary.avgBMI}</div>
              <div className="text-sm text-gray-600 mt-1">Avg BMI</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{summary.smokerCount}</div>
              <div className="text-sm text-gray-600 mt-1">Smokers</div>
            </div>
          </Card>
        </div>
      )}

      <Card>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Chart Controls</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Chart Type</h3>
                <ChartSwitcher
                  activeChart={chartType}
                  onChartChange={setChartType}
                />
              </div>

              
              <div>
                <FilterInput
                  label="Charges Threshold Filter"
                  type="number"
                  value={threshold}
                  onChange={(e) => setThreshold(e.target.value)}
                  placeholder="Enter minimum charges amount"
                />
              </div>
            </div>
          </div>

          
          <div className="border-t pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Total Data Points:</span>
                <span className="ml-2 text-gray-900">{insuranceData.length}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Filtered Data Points:</span>
                <span className="ml-2 text-gray-900">{filteredData.length}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Active Chart:</span>
                <span className="ml-2 text-gray-900 capitalize">{chartType}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      
      <Card>
        <h2 className="text-xl font-semibold mb-6 text-gray-900">Insurance Data Visualization</h2>
        {filteredData.length > 0 ? (
          <InsuranceChartContainer data={filteredData} chartType={chartType} />
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-600">
              No data matches the current filter criteria.
            </div>
          </div>
        )}
      </Card>
    </DashboardLayout>
  );
}
