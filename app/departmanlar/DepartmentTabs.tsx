"use client";

import { usePathname } from "next/navigation";
import { BriefcaseBusiness, CircleDollarSign, FlaskConical, Handshake, Megaphone, ShieldCheck, UsersRound } from "lucide-react";
import { CollapsibleSectionNav, type SectionNavItem } from "@/app/_components/navigation/CollapsibleSectionNav";
import { DepartmentOrgIcon } from "@/components/icons/NavigationIcons";

const departmentTabs: SectionNavItem[] = [
  { label: "Yönetim", href: "/departmanlar/yonetim", icon: ShieldCheck },
  { label: "Satış", href: "/departmanlar/satis", icon: Handshake },
  { label: "Pazarlama", href: "/departmanlar/pazarlama", icon: Megaphone },
  { label: "Operasyon", href: "/departmanlar/operasyon", icon: BriefcaseBusiness },
  { label: "İK", href: "/departmanlar/ik", icon: UsersRound },
  { label: "ARGE", href: "/departmanlar/arge", icon: FlaskConical },
  { label: "Finans", href: "/departmanlar/finans", icon: CircleDollarSign }
];

export function DepartmentTabs() {
  const pathname = usePathname();
  const activeTab = departmentTabs.find((tab) => tab.href === pathname) ?? departmentTabs[0];

  return (
    <CollapsibleSectionNav
      activeHref={activeTab.href}
      activeIcon={DepartmentOrgIcon}
      ariaLabel="Departman bölümleri"
      collapsedLabel="Departmanlar menüsünü aç"
      expandedLabel="Departmanlar menüsünü daralt"
      items={departmentTabs}
      mobileLabel="Departmanlar"
      subtitle="İş birimi performansı"
      title="Departmanlar"
    />
  );
}
