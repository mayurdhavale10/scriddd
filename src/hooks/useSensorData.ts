import { useMachineSensor } from "@/context/MachineSensorContext";
import { sensorThresholds } from "@/lib/sensors/sensorThresholds";
import { MetricType } from "@/lib/sensors/types";

export type StatusLevel = "normal" | "warning" | "critical";

export interface SensorMetricStatus {
  value: number;
  status: StatusLevel;
}

export const useSensorData = (machineId: string) => {
  const { sensorData } = useMachineSensor();
  const machine = sensorData[machineId];

  if (!machine) return null;

  const evaluateStatus = (metric: MetricType, value: number): StatusLevel => {
    const { warn, critical } = sensorThresholds[metric];
    if (metric === "rpm") {
      return value < critical ? "critical" : value < warn ? "warning" : "normal";
    }
    return value >= critical ? "critical" : value >= warn ? "warning" : "normal";
  };

  const metrics: Record<MetricType, SensorMetricStatus> = {
    temperature: {
      value: machine.metrics.temperature,
      status: evaluateStatus("temperature", machine.metrics.temperature),
    },
    vibration: {
      value: machine.metrics.vibration,
      status: evaluateStatus("vibration", machine.metrics.vibration),
    },
    rpm: {
      value: machine.metrics.rpm,
      status: evaluateStatus("rpm", machine.metrics.rpm),
    },
    load: {
      value: machine.metrics.load,
      status: evaluateStatus("load", machine.metrics.load),
    },
  };

  return {
    machineId: machine.machineId,
    timestamp: machine.timestamp,
    metrics,
  };
};
