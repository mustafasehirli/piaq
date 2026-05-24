"use client";

import { usePathname } from "next/navigation";
import { Filter, Hammer, Instagram, Mail, Settings } from "lucide-react";
import { CollapsibleSectionNav, type SectionNavItem } from "@/app/_components/navigation/CollapsibleSectionNav";
import { GoogleLogoMono, MetaLogoMono, TikTokLogoMono } from "@/components/icons/BrandIcons";

const atolyeTabs: SectionNavItem[] = [
  { label: "Meta", href: "/atolye/meta", icon: MetaLogoMono, logo: true },
  { label: "Google", href: "/atolye/google", icon: GoogleLogoMono, logo: true },
  { label: "TikTok", href: "/atolye/tiktok", icon: TikTokLogoMono, logo: true },
  { label: "Sosyal Medya", href: "/atolye/sosyal-medya", icon: Instagram },
  { label: "Funnel", href: "/atolye/funnel", icon: Filter },
  { label: "Mail", href: "/atolye/mail", icon: Mail },
  { label: "Ayarlar", href: "/atolye/ayarlar", icon: Settings }
];

export function AtolyeTabs() {
  const pathname = usePathname();
  const activeTab = atolyeTabs.find((tab) => tab.href === pathname) ?? atolyeTabs[0];

  return (
    <CollapsibleSectionNav
      activeHref={activeTab.href}
      activeIcon={Hammer}
      ariaLabel="Atölye sekmeleri"
      collapsedLabel="Atölye menüsünü aç"
      expandedLabel="Atölye menüsünü daralt"
      items={atolyeTabs}
      mobileLabel="Atölye"
      subtitle="Kanal operasyonları"
      title="Atölye"
    />
  );
}
