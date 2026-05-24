"use client";

import { usePathname } from "next/navigation";
import { Filter, Lock, Mail, Megaphone, Settings2, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BoxArchiveIcon } from "@/components/icons/NavigationIcons";
import { CollapsibleSectionNav, type SectionNavItem } from "@/app/_components/navigation/CollapsibleSectionNav";
import { BOLUMLER } from "@/lib/data/kara-kutu";

const iconMap: Record<string, LucideIcon> = {
  Target,
  Megaphone,
  Filter,
  Mail,
  Settings2,
  Lock
};

const karaKutuItems: SectionNavItem[] = BOLUMLER.map((bolum) => ({
  badge: bolum.restricted ? "Kısıtlı" : undefined,
  disabled: bolum.restricted,
  href: `/kara-kutu/${bolum.slug}`,
  icon: iconMap[bolum.icon] ?? Target,
  label: bolum.label
}));

export function KaraKutuNav() {
  const pathname = usePathname();
  const activeBolum = pathname.split("/")[2] ?? "strateji";
  const activeHref = `/kara-kutu/${activeBolum}`;
  const activeItem = karaKutuItems.find((item) => item.href === activeHref) ?? karaKutuItems[0];

  return (
    <CollapsibleSectionNav
      activeHref={activeItem.href}
      activeIcon={BoxArchiveIcon}
      ariaLabel="Kara Kutu bölümleri"
      collapsedLabel="Kara Kutu menüsünü aç"
      expandedLabel="Kara Kutu menüsünü daralt"
      items={karaKutuItems}
      mobileLabel="Kara Kutu"
      subtitle="Bilgi merkezi"
      title="Kara Kutu"
    />
  );
}
