"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Cpu,
  Package,
  Truck,
  FileText,
  TrendingUp,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge class names
function cn(...inputs: (string | undefined | null | boolean)[]) {
  return twMerge(clsx(inputs));
}

const routes = [
  { label: "Dashboard", href: "/saasmodel/dashboard", icon: LayoutDashboard },
  { label: "Machines", href: "/saasmodel/machines", icon: Cpu },
  { label: "Inventory", href: "/saasmodel/inventory", icon: Package },
  { label: "Logistics", href: "/saasmodel/logistics", icon: Truck },
  { label: "Invoices", href: "/saasmodel/invoices", icon: FileText },
  { label: "Profit", href: "/saasmodel/profit", icon: TrendingUp },
  { label: "Employees", href: "/saasmodel/employeedetails", icon: Users },
  { label: "Settings", href: "/saasmodel/setting", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-[#1A2E2E]/95 backdrop-blur-md text-white z-40 shadow-lg flex flex-col justify-between">
      <div className="flex-1 px-4 py-6">
        {/* Logo/Header */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-[#164C3A] rounded-lg flex items-center justify-center">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold">Factory Pro</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {routes.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all",
                  isActive
                    ? "bg-[#164C3A] text-white shadow-inner"
                    : "text-gray-300 hover:bg-[#164C3A]/80 hover:text-white"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User section */}
      <div className="border-t border-white/10 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/avatar-user.webp"
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Annie</span>
            <span className="text-xs text-gray-400">Factory Admin</span>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="hover:text-red-400 transition-colors p-1"
          title="Logout"
        >
          <LogOut size={18} />
        </button>
      </div>
    </aside>
  );
}
