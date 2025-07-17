"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { SensorData } from "@/lib/sensors/types";
import { generateMockSensorData } from "@/lib/sensors/sensorMock";

// Machines you want to simulate
const MACHINE_IDS = ["shredder-01", "separator-01", "extractor-01", "crusher-01"];

interface MachineSensorContextType {
  sensorData: Record<string, SensorData>;
}

const MachineSensorContext = createContext<MachineSensorContextType | undefined>(undefined);

export const MachineSensorProvider = ({ children }: { children: React.ReactNode }) => {
  const [sensorData, setSensorData] = useState<Record<string, SensorData>>({});

  // Initialize mock data + set interval to refresh
  useEffect(() => {
    const updateData = () => {
      const newData: Record<string, SensorData> = {};
      MACHINE_IDS.forEach((id) => {
        newData[id] = generateMockSensorData(id);
      });
      setSensorData(newData);
    };

    updateData(); // initial
    const interval = setInterval(updateData, 5000); // refresh every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <MachineSensorContext.Provider value={{ sensorData }}>
      {children}
    </MachineSensorContext.Provider>
  );
};

// Custom hook
export const useMachineSensor = () => {
  const context = useContext(MachineSensorContext);
  if (!context) {
    throw new Error("useMachineSensor must be used within MachineSensorProvider");
  }
  return context;
};
