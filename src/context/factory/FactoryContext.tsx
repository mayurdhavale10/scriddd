"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type FactoryContextType = {
  selectedFactory: string;
  setSelectedFactory: (factory: string) => void;
};

const FactoryContext = createContext<FactoryContextType | undefined>(undefined);

export const useFactory = () => {
  const context = useContext(FactoryContext);
  if (!context) {
    throw new Error("useFactory must be used within FactoryProvider");
  }
  return context;
};

export const FactoryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFactory, setSelectedFactory] = useState("AlphaFactory");

  return (
    <FactoryContext.Provider value={{ selectedFactory, setSelectedFactory }}>
      {children}
    </FactoryContext.Provider>
  );
};

// ✅ Export context itself to allow raw access when needed
export { FactoryContext };
