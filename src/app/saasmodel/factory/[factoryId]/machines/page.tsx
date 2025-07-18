"use client";

import { useFactory } from "@/context/factory/FactoryContext";
import { useMachine } from "@/context/factory/MachineContext";
import dynamic from "next/dynamic";
import React from "react";

// Shared prop type for machine components
type MachineComponentProps = {
  factory: string;
  machine: string;
};

// Dynamically import machine components
const MachineHealth = dynamic<MachineComponentProps>(() =>
  import("@/components/saasmodel_components/factory/machines_components/MachineHealth"),
  { ssr: false }
);

const MachineMetadata = dynamic<MachineComponentProps>(() =>
  import("@/components/saasmodel_components/factory/machines_components/MachineMetadata"),
  { ssr: false }
);

const PerformanceAnalytics = dynamic<MachineComponentProps>(() =>
  import("@/components/saasmodel_components/factory/machines_components/PerformanceAnalytics"),
  { ssr: false }
);

const CostImpact = dynamic<MachineComponentProps>(() =>
  import("@/components/saasmodel_components/factory/machines_components/CostImpact"),
  { ssr: false }
);

const MaintenanceLogs = dynamic<MachineComponentProps>(() =>
  import("@/components/saasmodel_components/factory/machines_components/MaintenanceLogs"),
  { ssr: false }
);

const ComplianceDocs = dynamic<MachineComponentProps>(() =>
  import("@/components/saasmodel_components/factory/machines_components/ComplianceDocs"),
  { ssr: false }
);

const AISuggestions = dynamic<MachineComponentProps>(() =>
  import("@/components/saasmodel_components/factory/machines_components/AISuggestions"),
  { ssr: false }
);

const ReportsExport = dynamic<MachineComponentProps>(() =>
  import("@/components/saasmodel_components/factory/machines_components/ReportsExport"),
  { ssr: false }
);

const UserAccess = dynamic<MachineComponentProps>(() =>
  import("@/components/saasmodel_components/factory/machines_components/UserAccess"),
  { ssr: false }
);

export default function MachinesPage() {
  const { selectedFactory } = useFactory();
  const { selectedMachine } = useMachine();

  return (
    <div className="pt-24 px-6 space-y-10">
      <MachineHealth factory={selectedFactory} machine={selectedMachine} />
      <MachineMetadata factory={selectedFactory} machine={selectedMachine} />
      <PerformanceAnalytics factory={selectedFactory} machine={selectedMachine} />
      <CostImpact factory={selectedFactory} machine={selectedMachine} />
      <MaintenanceLogs factory={selectedFactory} machine={selectedMachine} />
      <ComplianceDocs factory={selectedFactory} machine={selectedMachine} />
      <AISuggestions factory={selectedFactory} machine={selectedMachine} />
      <ReportsExport factory={selectedFactory} machine={selectedMachine} />
      <UserAccess factory={selectedFactory} machine={selectedMachine} />
    </div>
  );
}
