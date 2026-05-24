import type { ReactNode } from "react";
import { EkipTabs } from "./EkipTabs";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-[calc(100vh-80px)] md:flex md:h-[calc(100vh-80px)] md:overflow-hidden">
      <EkipTabs />
      <section className="min-w-0 flex-1 px-6 py-6 md:overflow-y-auto md:px-8 md:py-7">
        {children}
      </section>
    </main>
  );
}
