export interface InsuranceRecord {
  record_date: string;
  year: number;
  quarter: number;
  age: number;
  age_group: string;
  sex: string;
  sex_female: number;
  bmi: number;
  bmi_category: string;
  children: number;
  smoker: string;
  smoker_flag: number;
  is_high_risk: number;
  risk_score: number;
  region: string;
  region_northeast: number;
  region_northwest: number;
  region_southeast: number;
  region_southwest: number;
  charges: number;
  monthly_premium_est: number;
  charges_per_child: number;
  insurance_tier: string;
  bmi_age_interaction: number;
}

export interface InsuranceDataResponse {
  data: InsuranceRecord[];
  summary: {
    totalRecords: number;
    avgCharges: number;
    avgBMI: number;
    smokerCount: number;
  };
}
