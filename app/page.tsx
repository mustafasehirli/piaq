import { Suspense } from "react";
import { DashboardPageClient } from "./_components/dashboard/DashboardPageClient";

export default function DashboardPage() {
  return (
    <Suspense fallback={null}>
      <DashboardPageClient />
    </Suspense>
  );
}
