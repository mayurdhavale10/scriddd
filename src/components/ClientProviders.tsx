"use client";

import { ModalProvider } from "@/context/ModalContext";
import { ReactNode } from "react";
import ClientOnly from "./ClientOnly";

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ClientOnly>
      <ModalProvider>{children}</ModalProvider>
    </ClientOnly>
  );
}
