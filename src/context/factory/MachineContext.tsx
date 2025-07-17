"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type MachineContextType = {
  selectedMachine: string;
  setSelectedMachine: (machine: string) => void;
};

const MachineContext = createContext<MachineContextType | undefined>(undefined);

export const useMachine = () => {
  const context = useContext(MachineContext);
  if (!context) {
    throw new Error("useMachine must be used within MachineProvider");
  }
  return context;
};

export const MachineProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMachine, setSelectedMachine] = useState("Shredder");

  return (
    <MachineContext.Provider value={{ selectedMachine, setSelectedMachine }}>
      {children}
    </MachineContext.Provider>
  );
};

// ✅ Export context itself for raw access when needed
export { MachineContext };
