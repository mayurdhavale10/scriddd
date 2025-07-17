// src/lib/ai/failurePrediction.ts

import { SensorData } from "@/types/machine";

type FailureResult = {
  riskLevel: "Low" | "Moderate" | "High" | "Critical";
  message: string;
};

export function predictFailure(data: SensorData): FailureResult {
  const { temperature, vibration, rpm, load } = data;

  if (temperature > 95 || vibration > 15 || rpm > 6000 || load > 90) {
    return {
      riskLevel: "Critical",
      message: "Immediate shutdown recommended. High chance of mechanical failure.",
    };
  }

  if (temperature > 85 || vibration > 10 || rpm > 5500 || load > 80) {
    return {
      riskLevel: "High",
      message: "Failure likely within 24-48 hours. Schedule emergency maintenance.",
    };
  }

  if (temperature > 75 || vibration > 7 || rpm > 5000 || load > 70) {
    return {
      riskLevel: "Moderate",
      message: "Performance degradation detected. Monitor closely.",
    };
  }

  return {
    riskLevel: "Low",
    message: "System running within safe limits.",
  };
}
