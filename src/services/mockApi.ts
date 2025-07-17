// src/services/mockApi.ts

import type { MachineMetadata } from "./machineService";

export async function mockApiCall<T>(data: T, delay = 600): Promise<T> {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.05; // 5% failure rate
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Mock API error: Something went wrong"));
      } else {
        resolve(data);
      }
    }, delay);
  });
}

export async function fetchMockMachineMetadata(): Promise<MachineMetadata> {
  const mockData: MachineMetadata = {
    machineId: "SCRID-AX1201",
    name: "Industrial Shredder Mk-II",
    type: "Shredder",
    manufacturer: "GreenTech Industries",
    serialNumber: "GT-SHD-9347281",
    location: "Zone B - Line 3",
    commissioningDate: "2023-01-15",
    operatingHours: 4521,
    warrantyStatus: "active",
    tags: ["High Priority", "Critical Zone"],
  };
  return mockApiCall(mockData);
}
