"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BarChart3, CalendarCheck2, ChevronDown, ChevronLeft, Filter, Instagram, Mail, RefreshCw, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GoogleLogoMono, MetaLogoMono, TikTokLogoMono } from "@/components/icons/BrandIcons";
import { NotificationCenterButton, ProfileMenuButton } from "@/components/AppNavigation";
import { timeRanges, type TimeRange } from "@/lib/data/dashboard";
import type { ComponentType, SVGProps } from "react";
import { currencies, customerProfiles, tabs, type Currency, type CustomerDetailTab, type CustomerSlug } from "./data";
import { getCustomerServiceClass } from "./components";
import { FunnelTab } from "./FunnelTab";
import { GeneralTab } from "./GeneralTab";
import { GoogleTab } from "./GoogleTab";
import { MailTab } from "./MailTab";
import { MetaTab } from "./MetaTab";
import { PlanTab } from "./PlanTab";
import { SettingsTab } from "./SettingsTab";
import { SocialMediaTab } from "./SocialMediaTab";
import { TikTokTab } from "./TikTokTab";

function getCustomerProfileFromSlug(slug: string) {
  return customerProfiles[slug as CustomerSlug] ?? customerProfiles["a-firma"];
}

function getStatusBadgeClass(statusTone: string) {
  if (statusTone === "amber") {
    return "bg-[var(--accent-amber-light)] text-[var(--accent-amber)]";
  }

  if (statusTone === "red") {
    return "bg-[var(--accent-red-light)] text-[var(--accent-red)]";
  }

  return "bg-[var(--accent-green-light)] text-[var(--accent-green)]";
}

type CustomerTabIcon = {
  icon: LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;
  logo?: boolean;
};

const serviceDisplayOrder = ["Meta", "Google", "TikTok", "Sosyal Medya", "Sosyal Medya Yönetimi", "Funnel", "Mail"];

function sortCustomerServices(services: readonly string[]) {
  return [...services].sort((firstService, secondService) => {
    const firstIndex = serviceDisplayOrder.indexOf(firstService);
    const secondIndex = serviceDisplayOrder.indexOf(secondService);
    const safeFirstIndex = firstIndex === -1 ? serviceDisplayOrder.length : firstIndex;
    const safeSecondIndex = secondIndex === -1 ? serviceDisplayOrder.length : secondIndex;

    return safeFirstIndex - safeSecondIndex;
  });
}

const customerTabIcons: Record<CustomerDetailTab, CustomerTabIcon> = {
  Genel: { icon: BarChart3 },
  Plan: { icon: CalendarCheck2 },
  Meta: { icon: MetaLogoMono, logo: true },
  Google: { icon: GoogleLogoMono, logo: true },
  TikTok: { icon: TikTokLogoMono, logo: true },
  "Sosyal Medya": { icon: Instagram },
  Funnel: { icon: Filter },
  Mail: { icon: Mail },
  Ayarlar: { icon: Settings }
};

function toggleListItem<T>(items: T[], item: T) {
  return items.includes(item)
    ? items.filter((currentItem) => currentItem !== item)
    : [...items, item];
}

export default function MusteriDetayPage() {
  const params = useParams<{ slug: string }>();
  const customerProfile = getCustomerProfileFromSlug(params.slug);
  const customerName = customerProfile.name;
  const orderedCustomerServices = sortCustomerServices(customerProfile.services);
  const [activeTab, setActiveTab] = useState<CustomerDetailTab>(tabs[0]);
  const [selectedServices, setSelectedServices] = useState<string[]>([...customerProfile.services]);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0]);
  const [selectedDetailRange, setSelectedDetailRange] = useState<TimeRange>("7 gün");
  const selectedDetailRangeIndex = timeRanges.indexOf(selectedDetailRange);

  function toggleService(service: string) {
    setSelectedServices((currentServices) => toggleListItem(currentServices, service));
  }

  function renderActiveTab() {
    switch (activeTab) {
      case "Genel":
        return <GeneralTab />;
      case "Plan":
        return <PlanTab />;
      case "Meta":
        return <MetaTab customerName={customerName} />;
      case "Google":
        return <GoogleTab customerName={customerName} />;
      case "TikTok":
        return <TikTokTab customerName={customerName} />;
      case "Sosyal Medya":
        return <SocialMediaTab customerName={customerName} />;
      case "Funnel":
        return <FunnelTab />;
      case "Mail":
        return <MailTab customerName={customerName} />;
      case "Ayarlar":
        return (
          <SettingsTab
            onCurrencyChange={setSelectedCurrency}
            onToggleService={toggleService}
            selectedCurrency={selectedCurrency}
            selectedServices={selectedServices}
          />
        );
    }
  }

  return (
    <main className="-mt-20 flex min-h-screen flex-col overflow-hidden bg-[var(--bg)]">
      <header className="shrink-0 border-b border-[var(--border)] bg-[var(--bg-card)] px-7 pt-4">
        <div className="mb-3.5 flex items-center gap-2">
          <Link
            className="flex items-center gap-1.5 text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
            href="/musteriler"
          >
            <ChevronLeft aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
            Müşteriler
          </Link>
          <ChevronDown aria-hidden="true" className="-rotate-90 size-3.5 text-[var(--border-strong)]" strokeWidth={2} />
          <span className="text-[13px] font-semibold text-[var(--text-primary)]">{customerName}</span>
        </div>

        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <span className="flex size-12 items-center justify-center rounded-xl border border-[color-mix(in_oklch,var(--accent)_28%,white)] bg-[linear-gradient(135deg,var(--accent-light),white)] text-base font-extrabold text-[var(--accent)]">
              {customerName.slice(0, 2).toLocaleUpperCase("tr-TR")}
            </span>
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-xl font-extrabold text-[var(--text-primary)]">{customerName}</h1>
                <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${getStatusBadgeClass(customerProfile.statusTone)}`}>
                  {customerProfile.status}
                </span>
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {orderedCustomerServices.map((service) => (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${getCustomerServiceClass(service)}`}
                    key={service}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative flex items-center gap-0 rounded-[10px] border border-[var(--border)] bg-white p-0.5">
              <span
                aria-hidden="true"
                className="absolute left-0.5 top-0.5 h-[calc(100%-4px)] w-[76px] rounded-[8px] border border-[var(--text-primary)] bg-[var(--text-primary)] shadow-[0_8px_18px_oklch(0.18_0.018_80_/_0.14)] transition-transform duration-300 ease-out"
                style={{ transform: `translateX(${selectedDetailRangeIndex * 76}px)` }}
              />
              {timeRanges.map((range) => {
                const isActive = selectedDetailRange === range;

                return (
                  <button
                    className={`relative z-10 w-[76px] rounded-[8px] border px-0 py-2 text-[13px] font-black transition-colors duration-200 ${
                      isActive
                        ? "border-transparent bg-transparent text-white"
                        : "border-transparent bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-card-soft)]"
                    }`}
                    key={range}
                    onClick={() => setSelectedDetailRange(range)}
                    type="button"
                  >
                    {range}
                  </button>
                );
              })}
            </div>
            <button
              className="flex min-w-[92px] items-center justify-center gap-1.5 rounded-[9px] border border-[var(--sidebar-active-bg)] bg-[var(--sidebar-active-bg)] px-4 py-2 text-[13px] font-black text-white shadow-[0_10px_22px_oklch(0.18_0.018_80_/_0.18)] transition-colors hover:border-[var(--text-primary)] hover:bg-[var(--text-primary)]"
              type="button"
            >
              <RefreshCw aria-hidden="true" className="size-3.5" strokeWidth={2} />
              Yenile
            </button>
            <NotificationCenterButton />
            <ProfileMenuButton />
          </div>
        </div>

        <nav aria-label="Müşteri detay sekmeleri" className="flex gap-0">
          {tabs.map((tab) => {
            const tabIcon = customerTabIcons[tab];
            const Icon = tabIcon.icon;
            const active = activeTab === tab;

            return (
              <button
                className={`mb-[-1px] inline-flex items-center gap-1.5 border-b-2 px-[18px] py-2.5 text-[13.5px] transition-colors ${
                  active
                    ? "font-bold"
                    : "border-transparent font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ borderBottomColor: active ? "var(--accent)" : "transparent", color: active ? "var(--accent)" : undefined }}
                type="button"
              >
                <Icon
                  aria-hidden="true"
                  className={tabIcon.logo ? "size-[18px]" : "size-3.5"}
                  strokeWidth={2}
                  style={{ color: active ? "var(--accent)" : "var(--text-muted)" }}
                />
                <span>{tab}</span>
              </button>
            );
          })}
        </nav>
      </header>

      <section className="min-h-0 flex-1 overflow-y-auto px-7 py-6">
        {renderActiveTab()}
      </section>
    </main>
  );
}





