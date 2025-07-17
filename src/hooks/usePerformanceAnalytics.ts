import { useEffect, useState } from 'react';

interface DowntimeReason {
  reason: string;
  percent: number;
  color: string;
}

export interface PerformanceSnapshot {
  outputPerHour: number;
  efficiency: number;
  efficiencyChange: number;
  downtimeHours: number;
  downtimeReasons: DowntimeReason[];
  factoryAvg: number;
  lastMonthEfficiency: number;
}

export function usePerformanceAnalytics() {
  const [data, setData] = useState<PerformanceSnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMockData = async () => {
      try {
        setLoading(true);
        setError(null);

        // TODO: Replace with actual API/service
        const mock: PerformanceSnapshot = {
          outputPerHour: 2.3,
          efficiency: 87,
          efficiencyChange: 5,
          downtimeHours: 12,
          downtimeReasons: [
            { reason: 'Blade Jam', percent: 35, color: 'bg-emerald-500' },
            { reason: 'Overheating', percent: 25, color: 'bg-yellow-400' },
            { reason: 'Maintenance', percent: 20, color: 'bg-blue-400' },
            { reason: 'Other', percent: 20, color: 'bg-gray-400' },
          ],
          factoryAvg: 75,
          lastMonthEfficiency: 78,
        };

        await new Promise((res) => setTimeout(res, 500));
        setData(mock);
      } catch (err) {
        setError('Failed to load analytics.');
      } finally {
        setLoading(false);
      }
    };

    fetchMockData();
  }, []);

  return { data, loading, error };
}
