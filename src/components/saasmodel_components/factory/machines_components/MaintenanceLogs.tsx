"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

type MaintenanceEntry = {
  id: string;
  date: string;
  type: "Scheduled" | "Emergency" | "Inspection";
  engineer: string;
  notes: string;
  status: "Completed" | "Pending" | "Overdue";
};

const statusColors = {
  Completed: "text-green-600",
  Pending: "text-yellow-500",
  Overdue: "text-red-600",
};

export default function MaintenanceLogs() {
  const [logs, setLogs] = useState<MaintenanceEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true);

      const mockLogs: MaintenanceEntry[] = [
        {
          id: "MT-001",
          date: "2025-07-10",
          type: "Scheduled",
          engineer: "Raj Patel",
          notes: "Replaced worn blades",
          status: "Completed",
        },
        {
          id: "MT-002",
          date: "2025-07-01",
          type: "Inspection",
          engineer: "Sara Iyer",
          notes: "Routine inspection",
          status: "Completed",
        },
        {
          id: "MT-003",
          date: "2025-06-28",
          type: "Emergency",
          engineer: "Vikas Mehra",
          notes: "Overheating issue resolved",
          status: "Completed",
        },
        {
          id: "MT-004",
          date: "2025-07-15",
          type: "Scheduled",
          engineer: "Rahul Nair",
          notes: "Lubrication check",
          status: "Pending",
        },
        {
          id: "MT-005",
          date: "2025-06-15",
          type: "Scheduled",
          engineer: "Pooja Sharma",
          notes: "Missed routine maintenance",
          status: "Overdue",
        },
      ];

      await new Promise((res) => setTimeout(res, 700));
      setLogs(mockLogs);
      setLoading(false);
    };

    fetchLogs();
  }, []);

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-[#1a2e2e] shadow-lg space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-emerald-700">
          🛠️ Maintenance Logs
        </h2>
        <button className="flex items-center gap-2 px-3 py-1 text-sm rounded-md bg-emerald-600 text-white hover:bg-emerald-700">
          <Download size={16} /> Export
        </button>
      </div>

      {loading ? (
        <p className="text-emerald-500">Loading logs...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-separate border-spacing-y-2">
            <thead className="text-left text-gray-500 dark:text-gray-400">
              <tr>
                <th className="px-2 py-1">Date</th>
                <th className="px-2 py-1">Type</th>
                <th className="px-2 py-1">Engineer</th>
                <th className="px-2 py-1">Notes</th>
                <th className="px-2 py-1">Status</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((entry) => (
                <tr
                  key={entry.id}
                  className="bg-gray-100 dark:bg-gray-800/50 rounded-lg"
                >
                  <td className="px-2 py-2 rounded-l-lg">{entry.date}</td>
                  <td className="px-2 py-2">
                    <span className="px-2 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded">
                      {entry.type}
                    </span>
                  </td>
                  <td className="px-2 py-2">{entry.engineer}</td>
                  <td className="px-2 py-2">{entry.notes}</td>
                  <td
                    className={cn(
                      "px-2 py-2 font-semibold rounded-r-lg",
                      statusColors[entry.status]
                    )}
                  >
                    {entry.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
