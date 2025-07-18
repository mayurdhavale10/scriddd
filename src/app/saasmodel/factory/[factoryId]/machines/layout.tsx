// src/app/saasmodel/factory/machines/layout.tsx

import type { ReactNode } from "react";
import Sidebar from "@/components/saasmodel_components/factory/layout/sidebar";
import Header from "@/components/saasmodel_components/factory/layout/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-50 dark:bg-[#101717] min-h-screen">
      <Sidebar />
      <div className="pl-64 flex flex-col min-h-screen">
        <Header />
        <main className="pt-16 px-4">{children}</main>
      </div>
    </div>
  );
}
