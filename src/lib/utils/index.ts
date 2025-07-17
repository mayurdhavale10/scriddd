// src/lib/utils/index.ts

// Utility to concatenate classnames conditionally
export function cn(...classes: (string | undefined | null | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

// Export only actively used utility functions
export * from "./formatUnits"; // e.g., formatRPM, formatTemp, etc.
export * from "./logger";
export { formatDate } from "./formatters"; // Used in MachineHealth
