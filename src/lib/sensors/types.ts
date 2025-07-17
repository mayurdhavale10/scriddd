export type MetricType = "temperature" | "vibration" | "rpm" | "load";

export interface SensorData {
  machineId: string;
  timestamp: number;
  metrics: Record<MetricType, number>;
}

export interface MachineStatus {
  machineId: string;
  data: SensorData;
}
