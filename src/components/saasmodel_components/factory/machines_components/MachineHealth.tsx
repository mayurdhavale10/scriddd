// src/components/saasmodel_components/factory/machines_components/MachineHealth.tsx

"use client";

import { useEffect, useState } from "react";
import { fetchMachineHealth } from "@/services/sensorApi";

type MachineHealthData = Awaited<ReturnType<typeof fetchMachineHealth>>;

export default function MachineHealth() {
  const [data, setData] = useState<MachineHealthData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMachineHealth()
      .then(setData)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading health data...</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div className="space-y-2 text-sm bg-white p-4 rounded shadow">
      <p>🌡 Temperature: {data.temperature}°C</p>
      <p>⚙️ RPM: {data.rpm}</p>
      <p>📦 Load: {data.load}%</p>
      <p>🔧 Vibration: {data.vibration} mm/s</p>
      <p>✅ Status: {data.status}</p>
      <p>🩺 Health Score: {data.healthScore}</p>
      <p>🧑‍🔧 Engineer: {data.engineer}</p>
      <p>🛠 Last Service: {data.lastService}</p>
      <p>📅 Next Maintenance: {data.nextMaintenance}</p>
    </div>
  );
}
