"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { getMachineData } from "@/services/machineService";
import { useFactory } from "@/context/factory/FactoryContext";
import { useMachine } from "@/context/factory/MachineContext";

type MachineMetadataType = {
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

export default function MachineMetadata() {
  const { selectedFactory } = useFactory();
  const { selectedMachine } = useMachine();

  const [data, setData] = useState<MachineMetadataType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedFactory || !selectedMachine) return;

      try {
        const metadata = await getMachineData(selectedFactory, selectedMachine);
        setData(metadata);
      } catch (error) {
        console.error("Failed to fetch machine metadata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedFactory, selectedMachine]);

  const warrantyColors: Record<MachineMetadataType["warrantyStatus"], string> = {
    active: "text-green-600",
    expired: "text-red-600",
    "under review": "text-yellow-600",
  };

  if (loading || !data) {
    return (
      <div className="p-6 bg-white dark:bg-[#1a2e2e] rounded-2xl shadow-lg">
        <p className="text-emerald-700 dark:text-emerald-400">
          Loading Machine Metadata...
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white dark:bg-[#1a2e2e] rounded-2xl shadow-lg space-y-4">
      <h2 className="text-xl font-semibold text-emerald-700">
        🆔 Machine Identification & Metadata
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-800 dark:text-gray-200">
        <MetaItem label="Machine ID" value={data.machineId} />
        <MetaItem label="Machine Name" value={data.name} />
        <MetaItem label="Type" value={data.type} />
        <MetaItem label="Manufacturer" value={data.manufacturer} />
        <MetaItem label="Serial Number" value={data.serialNumber} />
        <MetaItem label="Location" value={data.location} />
        <MetaItem label="Commissioned On" value={data.commissioningDate} />
        <MetaItem label="Operating Hours" value={`${data.operatingHours} hrs`} />
        <MetaItem
          label="Warranty Status"
          value={data.warrantyStatus.toUpperCase()}
          valueClass={warrantyColors[data.warrantyStatus]}
        />
        <MetaItem
          label="Tags"
          value={data.tags.join(", ") || "None"}
          valueClass="text-blue-600"
        />
      </div>
    </div>
  );
}

function MetaItem({
  label,
  value,
  valueClass = "",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-gray-500">{label}</span>
      <span className={cn("text-base font-medium", valueClass)}>{value}</span>
    </div>
  );
}
