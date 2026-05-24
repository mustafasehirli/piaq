import type { ReactNode } from "react";
import { KaraKutuNav } from "./KaraKutuNav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[calc(100vh-80px)] md:flex md:h-[calc(100vh-80px)] md:overflow-hidden">
      <KaraKutuNav />
      <section className="min-w-0 flex-1 px-6 py-6 md:overflow-y-auto md:px-8 md:py-7">
        {children}
      </section>
    </div>
  );
}
