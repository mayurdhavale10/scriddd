export const sensorThresholds = {
  temperature: { warn: 75, critical: 90 },
  vibration: { warn: 3.5, critical: 5 },
  rpm: { warn: 400, critical: 250 }, // too low = bad
  load: { warn: 70, critical: 90 },
} as const;

export type Thresholds = typeof sensorThresholds;
