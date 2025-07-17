// src/lib/ai/suggestMaintenance.ts

import { SensorData } from "@/types/machine";

type Suggestion = {
  recommendation: string;
  urgency: "Routine" | "Soon" | "Urgent";
};

export function getMaintenanceSuggestions(data: SensorData): Suggestion[] {
  const suggestions: Suggestion[] = [];

  if (data.vibration > 12) {
    suggestions.push({
      recommendation: "Inspect mounting bolts and bearings for loosening.",
      urgency: "Urgent",
    });
  }

  if (data.temperature > 90) {
    suggestions.push({
      recommendation: "Check cooling system or consider lubricating joints.",
      urgency: "Soon",
    });
  }

  if (data.rpm > 5800) {
    suggestions.push({
      recommendation: "Inspect pulley alignment and belt wear.",
      urgency: "Soon",
    });
  }

  if (data.load > 85) {
    suggestions.push({
      recommendation: "Reduce operational load or distribute tasks across machines.",
      urgency: "Routine",
    });
  }

  if (suggestions.length === 0) {
    suggestions.push({
      recommendation: "All metrics are optimal. Perform routine checks as per schedule.",
      urgency: "Routine",
    });
  }

  return suggestions;
}
