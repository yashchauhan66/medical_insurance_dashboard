# Insurance Dashboard

A clean and simple Insurance Dashboard web application built with Next.js 15, TypeScript, and Tailwind CSS. This application visualizes healthcare insurance data with interactive charts for charges by age, BMI categories, and regional analysis.

## Project Overview

This dashboard displays healthcare insurance data including patient demographics, medical charges, BMI categories, smoking status, and regional information. It features multiple chart types, dynamic filtering capabilities, and a clean user interface following Atomic Design principles.

## Tech Stack

- **Next.js 15** - Latest stable version with App Router
- **TypeScript** - For type-safe code
- **Tailwind CSS** - For styling and responsive design
- **React** - Functional components with hooks
- **SVG Charts** - Custom interactive chart components

## Features

### Core Features
- **Healthcare Data Visualization** - View insurance charges and patient demographics
- **Interactive Charts** - Switch between Bar, Line, and Pie charts
- **Charges Threshold Filter** - Filter records by minimum insurance charges
- **Real-time Updates** - Chart updates dynamically based on user input
- **API Integration** - Fetches data from internal API endpoint
- **Summary Statistics** - Display key metrics (Total Records, Avg Charges, Avg BMI, Smokers)

### Chart Types
- **Bar Chart** - Compare insurance charges across different ages (default)
- **Line Chart** - View average charges trends by age (smooth curve)
- **Pie Chart** - See percentage distribution by BMI category

### Data Features
- Realistic healthcare insurance data with 100+ records
- Age groups from 18-64 years
- BMI categories (Underweight, Normal, Overweight, Obese)
- Regional distribution (Northeast, Northwest, Southeast, Southwest)
- Smoking status and risk scores
- Insurance tiers (Bronze, Silver, Gold, Platinum, Diamond)
- Currency formatting for charges
- Data filtering based on custom threshold input

## Folder Structure

```
src/
├── app/
│   ├── api/
│   │   └── sales/
│   │       └── route.ts           # API endpoint for insurance data
│   ├── dashboard/
│   │   └── page.tsx               # Dashboard page
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Homepage
├── components/
│   ├── atoms/
│   │   ├── Button.tsx             # Reusable button component
│   │   ├── Input.tsx              # Reusable input component
│   │   ├── Card.tsx               # Card container component
│   │   └── Title.tsx              # Heading component
│   ├── molecules/
│   │   ├── FilterInput.tsx        # Label + Input combination
│   │   └── ChartSwitcher.tsx      # Chart type selector buttons
│   ├── organisms/
│   │   ├── InsuranceBarChart.tsx     # Bar chart showing charges by age
│   │   ├── InsuranceLineChart.tsx    # Smooth line chart for avg charges
│   │   ├── InsurancePieChart.tsx       # Pie chart for BMI categories
│   │   └── InsuranceChartContainer.tsx # Chart wrapper component
│   └── templates/
│       └── DashboardLayout.tsx    # Dashboard page layout
├── data/
│   ├── types/
│   │   ├── sales.ts               # Legacy sales types
│   │   └── insurance.ts           # Insurance data interfaces
│   ├── sales.ts                   # Legacy sales data
│   └── insurance.ts               # Insurance mock data
└── lib/
    └── utils.ts                   # Utility functions
```

### Atomic Design Structure

The project follows the **Atomic Design Principle** for component organization:

1. **Atoms** - Basic building blocks (Button, Input, Card, Title)
2. **Molecules** - Simple component combinations (FilterInput, ChartSwitcher)
3. **Organisms** - Complex UI sections (InsuranceBarChart, InsuranceLineChart, InsurancePieChart, InsuranceChartContainer)
4. **Templates** - Page-level layouts (DashboardLayout)
5. **Pages** - Actual Next.js pages (Dashboard, Homepage)

## How to Run the Project

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Routes

- `/` - Homepage with link to dashboard
- `/dashboard` - Main dashboard with charts, filters, and summary stats
- `/api/sales` - API endpoint returning insurance data with summary (JSON)

## Data Structure

The insurance data follows this format:

```typescript
interface InsuranceRecord {
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
  charges: number;
  monthly_premium_est: number;
  charges_per_child: number;
  insurance_tier: string;
  bmi_age_interaction: number;
}
```

Sample data shows realistic healthcare insurance patterns:
- Age distribution from 18 to 64 years
- BMI categories following WHO standards
- Regional distribution across US regions
- Higher charges for smokers and older individuals
- Insurance tiers correlating with risk scores

## Future Improvements

- [ ] **Authentication** - Add user login and role-based access
- [ ] **Real Database** - Replace mock data with actual database (PostgreSQL/MongoDB)
- [ ] **Export Functionality** - Add PDF/CSV export for reports
- [ ] **Additional Filters** - Filter by region, BMI category, smoking status
- [ ] **Regional Analysis Chart** - Add regional comparison chart
- [ ] **Smoker vs Non-Smoker** - Add comparative visualization
- [ ] **Age Group Analysis** - Grouped analysis by age ranges
- [ ] **Loading States** - Add skeleton screens for better UX
- [ ] **Error Boundaries** - Implement React error boundaries
- [ ] **Unit Tests** - Add Jest/React Testing Library tests
- [ ] **Storybook** - Document components with Storybook

## Development Notes

- Uses Next.js 15 App Router for routing
- Implements Server Components where possible
- Client-side data fetching with loading states
- Type-safe throughout with TypeScript
- Clean separation of concerns with Atomic Design
- Minimal dependencies to keep bundle size small
- Custom SVG charts for performance and flexibility
- Smooth bezier curves for line chart visualization

## License

This project is open source and available for educational purposes.

---

**Happy coding!**
