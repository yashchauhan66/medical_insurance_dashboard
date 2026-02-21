import { NextResponse } from 'next/server';
import { mockInsuranceData, calculateSummary } from '@/data/insurance';

export async function GET() {
  try {
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const summary = calculateSummary();
    
    return NextResponse.json({
      data: mockInsuranceData,
      summary
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch insurance data' },
      { status: 500 }
    );
  }
}
