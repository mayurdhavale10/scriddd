import { SensorData, MetricType } from "./types";

const getRandomValue = (base: number, variance: number) => {
  return parseFloat((base + (Math.random() - 0.5) * variance).toFixed(2));
};

const defaultMetrics: Record<MetricType, number> = {
  temperature: 65,
  vibration: 2.5,
  rpm: 600,
  load: 50,
};

export function generateMockSensorData(machineId: string): SensorData {
  return {
    machineId,
    timestamp: Date.now(),
    metrics: {
      temperature: getRandomValue(defaultMetrics.temperature, 10),
      vibration: getRandomValue(defaultMetrics.vibration, 1.5),
      rpm: getRandomValue(defaultMetrics.rpm, 200),
      load: getRandomValue(defaultMetrics.load, 20),
    },
  };
}
