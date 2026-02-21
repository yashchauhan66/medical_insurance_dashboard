import Link from "next/link";
import { Button } from "@/components/atoms/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <main className="text-center px-4">
        <div className="max-w-md mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Insurance Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Visualize and analyze healthcare insurance data with interactive charts. Explore charges by age, BMI categories, regional patterns, and risk factors.
          </p>
          <div className="pt-4">
            <Link href="/dashboard">
              <Button variant="primary" className="text-lg px-8 py-3">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
