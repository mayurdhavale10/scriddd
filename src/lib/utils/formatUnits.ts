// src/lib/utils/formatUnits.ts

export function formatRPM(rpm: number): string {
  return `${rpm.toLocaleString()} RPM`;
}

export function formatTemp(temp: number): string {
  return `${temp.toFixed(1)}°C`;
}

export function formatPercentage(val: number): string {
  return `${val.toFixed(1)}%`;
}

export function formatCurrencyINR(val: number): string {
  return `₹${val.toLocaleString()}`;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
