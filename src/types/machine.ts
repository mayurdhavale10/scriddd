// src/types/machine.ts

export type SensorData = {
  temperature: number; // °C
  vibration: number;   // mm/s
  rpm: number;         // revolutions per minute
  load: number;        // percent (0–100)
};
