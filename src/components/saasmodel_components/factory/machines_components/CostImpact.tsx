"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Lightbulb, AlertTriangle, Wrench, TrendingUp } from "lucide-react";

type CostImpactData = {
  operationalCostPerHour: number;
  energyCostEstimate: number;
  maintenanceCost: number;
  downtimeLoss: number;
  sparePartsCost: number;
  roiProjection: number;
  suggestedSavings: string;
};

export default function CostImpact() {
  const [data, setData] = useState<CostImpactData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCostData = async () => {
      setLoading(true);

      const mockData: CostImpactData = {
        operationalCostPerHour: 320,
        energyCostEstimate: 14500,
        maintenanceCost: 78000,
        downtimeLoss: 25000,
        sparePartsCost: 18000,
        roiProjection: 16.8,
        suggestedSavings: "Switch to low-friction bearings to save ₹12,000/yr",
      };

      await new Promise((res) => setTimeout(res, 600));
      setData(mockData);
      setLoading(false);
    };

    fetchCostData();
  }, []);

  if (loading || !data) {
    return (
      <div className="p-6 bg-white dark:bg-[#1a2e2e] rounded-xl shadow">
        <p className="text-emerald-500">Loading Cost Impact...</p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-[#1a2e2e] shadow-lg space-y-6">
      <h2 className="text-xl font-semibold text-emerald-700">💰 Cost & Business Impact</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-800 dark:text-gray-100">
        <CostCard
          icon={<Lightbulb className="text-amber-500" size={20} />}
          label="Operational Cost per Hour"
          value={`₹${data.operationalCostPerHour}`}
        />
        <CostCard
          icon={<Lightbulb className="text-blue-500" size={20} />}
          label="Energy Estimate (monthly)"
          value={`₹${data.energyCostEstimate.toLocaleString()}`}
        />
        <CostCard
          icon={<Wrench className="text-green-500" size={20} />}
          label="Maintenance Cost"
          value={`₹${data.maintenanceCost.toLocaleString()}`}
        />
        <CostCard
          icon={<AlertTriangle className="text-red-500" size={20} />}
          label="Downtime Loss"
          value={`₹${data.downtimeLoss.toLocaleString()}`}
        />
        <CostCard
          icon={<Wrench className="text-violet-500" size={20} />}
          label="Spare Parts Cost"
          value={`₹${data.sparePartsCost.toLocaleString()}`}
        />
        <CostCard
          icon={<TrendingUp className="text-emerald-600" size={20} />}
          label="ROI Projection"
          value={`${data.roiProjection}%`}
        />
      </div>

      <div className="bg-emerald-100 dark:bg-emerald-900/40 p-4 rounded-md mt-4 text-sm text-emerald-800 dark:text-emerald-200">
        💡 <strong>AI Suggestion:</strong> {data.suggestedSavings}
      </div>
    </div>
  );
}

function CostCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg shadow bg-gray-50 dark:bg-gray-800">
      <div className="mt-1">{icon}</div>
      <div>
        <div className="text-xs text-gray-500">{label}</div>
        <div className="text-base font-semibold">{value}</div>
      </div>
    </div>
  );
}
