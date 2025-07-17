import { useSensorData, StatusLevel } from "@/hooks/useSensorData";

/**
 * Hook to compute overall machine status based on metric-level statuses.
 */
export const useMachineStatus = (machineId: string) => {
  const sensor = useSensorData(machineId);
  if (!sensor) return null;

  const levels = Object.values(sensor.metrics).map((m) => m.status);

  const count = {
    critical: levels.filter((s) => s === "critical").length,
    warning: levels.filter((s) => s === "warning").length,
    normal: levels.filter((s) => s === "normal").length,
  };

  const overallStatus: StatusLevel =
    count.critical > 0 ? "critical" : count.warning > 0 ? "warning" : "normal";

  return {
    machineId,
    overallStatus,
    statusBreakdown: count,
    lastUpdated: new Date(sensor.timestamp),
  };
};
