// src/services/sensorApi.ts

export async function fetchMachineHealth(): Promise<{
  status: "running" | "idle" | "down";
  rpm: number;
  temperature: number;
  vibration: number;
  load: number;
  errorCode?: string;
  healthScore: number;
  nextMaintenance: string;
  lastService: string;
  engineer: string;
}> {
  await new Promise((res) => setTimeout(res, 700)); // simulate API delay

  return {
    status: "running",
    rpm: 1480,
    temperature: 68,
    vibration: 1.2,
    load: 82,
    errorCode: "",
    healthScore: 91,
    nextMaintenance: "2025-07-15",
    lastService: "2025-06-01",
    engineer: "Raj Patel",
  };
}
