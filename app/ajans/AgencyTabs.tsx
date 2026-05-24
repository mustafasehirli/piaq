"use client";

import { usePathname } from "next/navigation";
import { BarChart3, Building2, CalendarCheck2, Filter, Instagram, Mail, Settings } from "lucide-react";
import { CollapsibleSectionNav, type SectionNavItem } from "@/app/_components/navigation/CollapsibleSectionNav";
import { GoogleLogoMono, MetaLogoMono, TikTokLogoMono } from "@/components/icons/BrandIcons";

const agencyTabs: SectionNavItem[] = [
  { label: "Merkez", href: "/ajans", icon: BarChart3 },
  { label: "Plan", href: "/ajans/plan", icon: CalendarCheck2 },
  { label: "Meta", href: "/ajans/meta", icon: MetaLogoMono, logo: true },
  { label: "Google", href: "/ajans/google", icon: GoogleLogoMono, logo: true },
  { label: "TikTok", href: "/ajans/tiktok", icon: TikTokLogoMono, logo: true },
  { label: "Sosyal Medya", href: "/ajans/sosyal-medya", icon: Instagram },
  { label: "Funnel", href: "/ajans/funnel", icon: Filter },
  { label: "Mail", href: "/ajans/mail", icon: Mail },
  { label: "Ayarlar", href: "/ajans/ayarlar", icon: Settings }
];

export function AgencyTabs() {
  const pathname = usePathname();
  const activeTab = agencyTabs.find((tab) => tab.href === pathname) ?? agencyTabs[0];

  return (
    <CollapsibleSectionNav
      activeHref={activeTab.href}
      activeIcon={Building2}
      ariaLabel="Ajans sekmeleri"
      collapsedLabel="Ajans menüsünü aç"
      expandedLabel="Ajans menüsünü daralt"
      items={agencyTabs}
      mobileLabel="Ajans"
      subtitle="Kanal verileri"
      title="Ajans"
    />
  );
}
