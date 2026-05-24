"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { useSyncExternalStore } from "react";

let sectionNavCollapsed = true;
const sectionNavSubscribers = new Set<() => void>();

export type SectionNavIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type SectionNavItem = {
  badge?: string;
  href: string;
  icon: SectionNavIcon;
  label: string;
  disabled?: boolean;
  logo?: boolean;
};

type CollapsibleSectionNavProps = {
  activeHref: string;
  activeIcon?: SectionNavIcon;
  activeLogo?: boolean;
  ariaLabel: string;
  collapsedLabel: string;
  expandedLabel: string;
  items: SectionNavItem[];
  mobileLabel: string;
  subtitle: string;
  title: string;
};

function getSectionNavSnapshot() {
  return sectionNavCollapsed;
}

function getSectionNavServerSnapshot() {
  return true;
}

function subscribeSectionNavStorage(onStoreChange: () => void) {
  sectionNavSubscribers.add(onStoreChange);

  return () => {
    sectionNavSubscribers.delete(onStoreChange);
  };
}

function setSectionNavCollapsed(nextValue: boolean) {
  sectionNavCollapsed = nextValue;
  sectionNavSubscribers.forEach((subscriber) => subscriber());
}

export function CollapsibleSectionNav({
  activeHref,
  activeIcon,
  activeLogo,
  ariaLabel,
  collapsedLabel,
  expandedLabel,
  items,
  mobileLabel,
  subtitle,
  title
}: CollapsibleSectionNavProps) {
  const router = useRouter();
  const collapsed = useSyncExternalStore(
    subscribeSectionNavStorage,
    getSectionNavSnapshot,
    getSectionNavServerSnapshot
  );
  const textRevealClass = collapsed
    ? "invisible translate-x-1 opacity-0 duration-75"
    : "visible translate-x-0 opacity-100 delay-200 duration-150";
  const activeItem = items.find((item) => item.href === activeHref) ?? items[0];
  const HeaderIcon = activeIcon ?? activeItem.icon;
  const mobileValue = items.some((item) => item.href === activeHref) ? activeHref : activeItem.href;

  function toggleCollapsed() {
    setSectionNavCollapsed(!collapsed);
  }

  return (
    <>
      <div className="border-b border-[var(--border)] bg-[oklch(0.985_0.006_120_/_0.72)] px-5 py-4 backdrop-blur-xl md:hidden">
        <label className="block text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">
          {mobileLabel}
        </label>
        <select
          className="mt-2 w-full rounded-[14px] border border-[var(--border)] bg-white px-3 py-2 text-sm font-bold text-[var(--text-primary)] outline-none"
          onChange={(event) => router.push(event.target.value)}
          value={mobileValue}
        >
          {items.map((item) => (
            <option disabled={item.disabled} key={item.href} value={item.href}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <aside className={`sticky top-20 z-30 hidden h-[calc(100vh-80px)] shrink-0 overflow-visible border-r border-[var(--border)] bg-[oklch(0.985_0.006_120_/_0.72)] px-2 pt-5 pb-5 backdrop-blur-xl transition-[width] duration-300 ease-in-out will-change-[width] md:block ${collapsed ? "w-[72px]" : "w-[240px]"} relative`}>
        <div className="mb-4 flex h-10 items-center gap-2 px-2">
          <div className="flex size-10 min-w-10 max-w-10 shrink-0 items-center justify-center rounded-[13px] bg-[var(--text-primary)] text-white">
            <HeaderIcon
              aria-hidden="true"
              className={activeLogo ? "size-[19px]" : "size-4"}
              strokeWidth={2.3}
            />
          </div>
          <div className={`min-w-0 overflow-hidden whitespace-nowrap transition-[opacity,transform,visibility] ease-out ${textRevealClass}`}>
            <h2 className="text-[15px] font-black text-[var(--text-primary)]">{title}</h2>
            <p className="text-[11px] font-semibold text-[var(--text-muted)]">{subtitle}</p>
          </div>
        </div>

        <nav aria-label={ariaLabel} className="space-y-0.5">
          {items.map((item) => {
            const Icon = item.icon;
            const active = activeHref === item.href;
            const iconClassName = `${item.logo ? "size-[18px]" : "size-[15px]"} shrink-0 transition-opacity ${active ? "opacity-100" : "opacity-55 group-hover:opacity-80"}`;
            const labelClassName = `min-w-0 flex-1 truncate transition-[opacity,transform,visibility] ease-out ${textRevealClass}`;
            const tooltipClass = collapsed
              ? "pointer-events-none absolute left-[calc(100%+12px)] top-1/2 z-[90] -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-[12px] border border-white/10 bg-[var(--sidebar-active-bg)] px-3 py-2 text-[12px] font-black text-white opacity-0 shadow-[0_16px_36px_oklch(0.18_0.018_80_/_0.24)] transition-[opacity,transform] duration-150 before:absolute before:left-[-5px] before:top-1/2 before:size-2 before:-translate-y-1/2 before:rotate-45 before:border-b before:border-l before:border-white/10 before:bg-[var(--sidebar-active-bg)] group-hover:translate-x-0 group-hover:opacity-100"
              : "hidden";
            const badge = item.badge ? (
              <span className={`rounded-full border border-[var(--border)] bg-white px-2 py-0.5 text-[10px] font-black text-[var(--text-muted)] transition-[opacity,transform,visibility] ease-out ${textRevealClass}`}>
                {item.badge}
              </span>
            ) : null;

            if (item.disabled) {
              return (
                <div
                  aria-disabled="true"
                  className="group relative flex w-full cursor-not-allowed items-center gap-2.5 rounded-lg px-5 py-2.5 text-[13px] font-medium text-[var(--sidebar-text)] opacity-70"
                  key={item.href}
                >
                  <Icon aria-hidden="true" className="size-[15px] shrink-0 opacity-55" strokeWidth={2.1} />
                  <span className={labelClassName}>{item.label}</span>
                  {badge}
                  <span aria-hidden="true" className={tooltipClass}>{item.label}</span>
                </div>
              );
            }

            return (
              <Link
                className={`group relative flex w-full items-center gap-2.5 rounded-lg px-5 py-2.5 text-[13px] transition-colors duration-150 ${
                  active
                    ? "bg-[var(--sidebar-active-bg)] font-semibold text-white shadow-[0_10px_22px_oklch(0.18_0.018_80_/_0.16)]"
                    : "font-medium text-[var(--sidebar-text)] hover:bg-[var(--sidebar-hover)] hover:text-[var(--text-primary)]"
                }`}
                href={item.href}
                key={item.href}
              >
                <Icon
                  aria-hidden="true"
                  className={iconClassName}
                  strokeWidth={2.1}
                />
                <span className={labelClassName}>{item.label}</span>
                {badge}
                <span aria-hidden="true" className={tooltipClass}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <button
          aria-label={collapsed ? collapsedLabel : expandedLabel}
          className="absolute -right-3 top-6 z-20 flex size-6 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-muted)] shadow-[0_8px_18px_oklch(0.33_0.035_70_/_0.10)] transition-colors hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
          onClick={toggleCollapsed}
          type="button"
        >
          {collapsed ? <ChevronRight aria-hidden="true" className="size-3.5" strokeWidth={2.6} /> : <ChevronLeft aria-hidden="true" className="size-3.5" strokeWidth={2.6} />}
        </button>
      </aside>
    </>
  );
}
