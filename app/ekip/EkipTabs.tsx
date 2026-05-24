"use client";

import { usePathname } from "next/navigation";
import { BriefcaseBusiness, CircleDollarSign, FlaskConical, Handshake, Megaphone, ShieldCheck, UsersRound } from "lucide-react";
import { CollapsibleSectionNav, type SectionNavItem } from "@/app/_components/navigation/CollapsibleSectionNav";

const ekipTabs: SectionNavItem[] = [
  { label: "Satış Ekibi", href: "/ekip/satis", icon: Handshake },
  { label: "Pazarlama Ekibi", href: "/ekip/pazarlama", icon: Megaphone },
  { label: "Operasyon Ekibi", href: "/ekip/operasyon", icon: BriefcaseBusiness },
  { label: "Yönetim Ekibi", href: "/ekip/yonetim", icon: ShieldCheck },
  { label: "İK Ekibi", href: "/ekip/ik", icon: UsersRound },
  { label: "ARGE Ekibi", href: "/ekip/arge", icon: FlaskConical },
  { label: "Finans Ekibi", href: "/ekip/finans", icon: CircleDollarSign }
];

export function EkipTabs() {
  const pathname = usePathname();
  const activeTab = ekipTabs.find((tab) => tab.href === pathname) ?? ekipTabs[0];

  return (
    <CollapsibleSectionNav
      activeHref={activeTab.href}
      activeIcon={UsersRound}
      ariaLabel="Ekip bölümleri"
      collapsedLabel="Ekip menüsünü aç"
      expandedLabel="Ekip menüsünü daralt"
      items={ekipTabs}
      mobileLabel="Ekip"
      subtitle="Kişi ve kapasite"
      title="Ekip"
    />
  );
}
