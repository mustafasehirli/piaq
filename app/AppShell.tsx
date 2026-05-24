"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AppNavigation } from "@/components/AppNavigation";
import { PusulaPlanProvider } from "@/app/_components/pusula-plan/PusulaPlanProvider";
import { WorkspaceProvider } from "@/app/_components/workspace/WorkspaceProvider";

export function AppShell({ children }: { children: ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === "/landing";

  function toggleSidebar() {
    setSidebarCollapsed((current) => !current);
  }

  if (isLandingPage) {
    return <>{children}</>;
  }

  return (
    <WorkspaceProvider>
      <PusulaPlanProvider>
        <div className={`min-h-screen pt-20 transition-[padding] duration-300 ease-in-out ${sidebarCollapsed ? "pl-[72px]" : "pl-[240px]"}`}>
          <AppNavigation onToggleSidebar={toggleSidebar} sidebarCollapsed={sidebarCollapsed} />
          {children}
        </div>
      </PusulaPlanProvider>
    </WorkspaceProvider>
  );
}
