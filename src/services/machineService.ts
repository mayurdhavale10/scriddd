// ✅ Type definition
export type MachineMetadata = {
  machineId: string;
  name: string;
  type: string;
  manufacturer: string;
  serialNumber: string;
  location: string;
  commissioningDate: string;
  operatingHours: number;
  warrantyStatus: "active" | "expired" | "under review";
  tags: string[];
};

// ✅ Function to fetch machine data
export async function getMachineData(factory: string, machine: string): Promise<MachineMetadata> {
  const res = await fetch(`/api/mock/${factory}/${machine}`);
  if (!res.ok) {
    throw new Error("Failed to fetch machine data");
  }
  return await res.json();
}
