"use client";

import Link from "next/link";
import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ArrowUpRight,
  BarChart3,
  Bell,
  BellOff,
  BriefcaseBusiness,
  CheckCircle2,
  CircleHelp,
  Clock3,
  ClipboardList,
  Compass,
  CreditCard,
  FileText,
  Hammer,
  Keyboard,
  LogOut,
  Menu,
  Megaphone,
  Moon,
  Pin,
  Plus,
  RefreshCw,
  Settings,
  ShieldAlert,
  Trash2,
  UserRoundCheck,
  UsersRound,
  X
} from "lucide-react";
import { WorkspaceSwitcher } from "@/app/_components/workspace/WorkspaceSwitcher";
import { useWorkspace } from "@/app/_components/workspace/WorkspaceProvider";
import { BoxArchiveIcon, DepartmentOrgIcon } from "@/components/icons/NavigationIcons";
import { getDashboardTimeRange, timeRanges, type TimeRange } from "@/lib/data/dashboard";

type NavIcon = ComponentType<SVGProps<SVGSVGElement>>;

type NavItem = {
  href: string;
  icon: NavIcon;
  label: string;
  badge?: string;
};

type NavSeparator = {
  id: string;
  type: "separator";
};

type NavEntry = NavItem | NavSeparator;

type ProfileMenuItem = {
  href?: string;
  icon: NavIcon;
  label: string;
  suffix?: string;
};

const mainItems: NavEntry[] = [
  { label: "Dashboard", href: "/", icon: BarChart3 },
  { label: "Müşteriler", href: "/musteriler", icon: UserRoundCheck },
  { id: "customer-work-divider", type: "separator" },
  { label: "Pusula", href: "/pusula", icon: Compass },
  { label: "Plan", href: "/plan", icon: ClipboardList },
  { label: "Atölye", href: "/atolye", icon: Hammer },
  { label: "Ekip", href: "/ekip", icon: UsersRound },
  { label: "Departmanlar", href: "/departmanlar/yonetim", icon: DepartmentOrgIcon },
  { id: "archive-divider", type: "separator" },
  { label: "Kara Kutu", href: "/kara-kutu", icon: BoxArchiveIcon }
];

const pageMeta: Record<string, { title: string; subtitle?: string }> = {
  "/": { title: "Dashboard", subtitle: "Ajans genel performans özeti" },
  "/musteriler": { title: "Müşteriler", subtitle: "Müşteri portföyü ve sözleşme takibi" },
  "/musteriler/crm": { title: "Müşteri CRM", subtitle: "Satış pipeline ve fırsat takibi" },
  "/pusula": { title: "Pusula", subtitle: "Strateji ve kuş bakışı planlama alanı" },
  "/pusula/tahta": { title: "Pusula Tahtası", subtitle: "Strateji ve kuş bakışı planlama tahtası" },
  "/plan": { title: "Plan", subtitle: "Strateji bloklarından iş kalemlerine geçiş" },
  "/atolye": { title: "Atölye", subtitle: "Kanal operasyonları ve üretim akışı" },
  "/atolye/meta": { title: "Atölye", subtitle: "Meta kanal operasyonları" },
  "/atolye/google": { title: "Atölye", subtitle: "Google Ads kanal operasyonları" },
  "/atolye/tiktok": { title: "Atölye", subtitle: "TikTok kanal operasyonları" },
  "/atolye/sosyal-medya": { title: "Atölye", subtitle: "Sosyal medya operasyonları" },
  "/atolye/funnel": { title: "Atölye", subtitle: "Funnel operasyonları" },
  "/atolye/mail": { title: "Atölye", subtitle: "Mail operasyonları" },
  "/atolye/ayarlar": { title: "Atölye", subtitle: "Atölye ayarları" },
  "/kara-kutu": { title: "Kara Kutu", subtitle: "Ajans bilgi merkezi ve doküman arşivi" },
  "/ekip": { title: "Ekip", subtitle: "Departmanlar ve iç ekip yönetimi" },
  "/ekip/satis": { title: "Satış Ekibi" },
  "/ekip/pazarlama": { title: "Pazarlama Ekibi" },
  "/ekip/operasyon": { title: "Operasyon Ekibi" },
  "/ekip/yonetim": { title: "Yönetim Ekibi" },
  "/ekip/ik": { title: "İK Ekibi" },
  "/ekip/arge": { title: "ARGE Ekibi" },
  "/ekip/finans": { title: "Finans Ekibi" },
  "/departmanlar/satis": { title: "Departmanlar" },
  "/departmanlar/pazarlama": { title: "Departmanlar" },
  "/departmanlar/operasyon": { title: "Departmanlar" },
  "/departmanlar/yonetim": { title: "Departmanlar" },
  "/departmanlar/ik": { title: "Departmanlar" },
  "/departmanlar/arge": { title: "Departmanlar" },
  "/departmanlar/finans": { title: "Departmanlar" },
  "/ayarlar": { title: "Ayarlar" }
};

const notificationItems = [
  {
    category: "Bağlantı",
    title: "Meta bağlantısı koptu",
    description: "A Firma reklam hesabından veri alınamıyor. Yeniden bağlantı gerekli.",
    time: "12 dk önce",
    href: "/ayarlar",
    tone: "red"
  },
  {
    category: "Veri",
    title: "Google Ads veri akışı gecikti",
    description: "Son senkron 2 saat önce tamamlandı. Raporlar eski veriye göre görünebilir.",
    time: "38 dk önce",
    href: "/ayarlar",
    tone: "amber"
  },
  {
    category: "Üyelik",
    title: "Deneme süresi 3 gün içinde bitiyor",
    description: "Workspace üyeliği sona ermeden ödeme yöntemi veya paket güncellenmeli.",
    time: "1 sa önce",
    href: "/ayarlar",
    tone: "purple"
  },
  {
    category: "Duyuru",
    title: "Yeni kampanya: yıllık pakette %20 avantaj",
    description: "Piaq kullanan ajanslar için Mayıs ayına özel yıllık paket kampanyası yayında.",
    time: "Bugün",
    href: "/ayarlar",
    tone: "green"
  }
];

function getNotificationTone(tone: string) {
  if (tone === "red") {
    return {
      icon: ShieldAlert,
      dot: "var(--accent-red)",
      bg: "var(--accent-red-light)",
      text: "var(--accent-red)"
    };
  }

  if (tone === "amber") {
    return {
      icon: RefreshCw,
      dot: "var(--accent-amber)",
      bg: "var(--accent-amber-light)",
      text: "var(--accent-amber)"
    };
  }

  if (tone === "purple") {
    return {
      icon: CreditCard,
      dot: "oklch(0.56 0.16 315)",
      bg: "oklch(0.96 0.025 315)",
      text: "oklch(0.50 0.16 315)"
    };
  }

  return {
    icon: Megaphone,
    dot: "var(--accent-green)",
    bg: "var(--accent-green-light)",
    text: "var(--accent-green)"
  };
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({ item, pathname, sidebarCollapsed }: { item: NavItem; pathname: string; sidebarCollapsed: boolean }) {
  const Icon = item.icon;
  const active = isActive(pathname, item.href);
  const textRevealClass = sidebarCollapsed
    ? "invisible translate-x-1 opacity-0 duration-75"
    : "visible translate-x-0 opacity-100 delay-200 duration-150";
  const tooltipClass = sidebarCollapsed
    ? "pointer-events-none absolute left-[calc(100%+12px)] top-1/2 z-[90] -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-[12px] border border-white/10 bg-[var(--sidebar-active-bg)] px-3 py-2 text-[12px] font-black text-white opacity-0 shadow-[0_16px_36px_oklch(0.18_0.018_80_/_0.24)] transition-[opacity,transform] duration-150 before:absolute before:left-[-5px] before:top-1/2 before:size-2 before:-translate-y-1/2 before:rotate-45 before:border-b before:border-l before:border-white/10 before:bg-[var(--sidebar-active-bg)] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
    : "hidden";

  return (
    <Link
      href={item.href}
      className={`group relative flex w-full items-center gap-2.5 rounded-lg px-5 py-2.5 text-[13px] transition-colors duration-150 ${
        active
          ? "bg-[var(--accent)] font-semibold text-white shadow-[var(--shadow-brand-sm)]"
          : "font-medium text-[var(--sidebar-text)] hover:bg-[var(--sidebar-hover)] hover:text-[var(--text-primary)]"
      }`}
    >
      <Icon
        className={`size-[15px] shrink-0 transition-opacity ${
          active ? "opacity-100" : "opacity-55 group-hover:opacity-80"
        }`}
        strokeWidth={active ? 2.2 : 1.9}
        aria-hidden="true"
      />
      <span className={`min-w-0 flex-1 truncate transition-[opacity,transform,visibility] ease-out ${textRevealClass}`}>{item.label}</span>
      {item.badge ? (
        <span
          className={`ml-auto rounded-full px-1.5 py-0.5 text-[10px] font-semibold leading-none transition-[opacity,transform,visibility] ease-out ${textRevealClass} ${
            active
              ? "bg-white/15 text-white"
              : "bg-[var(--accent-light)] text-[var(--accent)]"
          }`}
        >
          {item.badge}
        </span>
      ) : null}
      <span aria-hidden="true" className={tooltipClass}>{item.label}</span>
    </Link>
  );
}

export function NotificationCenterButton() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Bildirimler"
        onClick={() => setIsNotificationsOpen(true)}
        className="relative flex size-[42px] items-center justify-center rounded-[10px] border border-[var(--accent)] bg-[var(--accent)] text-white shadow-[var(--shadow-brand-sm)] transition-all hover:border-[var(--accent-hover)] hover:bg-[var(--accent-hover)]"
      >
        <Bell className="size-4" strokeWidth={2} aria-hidden="true" />
        <span className="absolute right-1.5 top-1.5 size-2 rounded-full border-2 border-[var(--accent)] bg-white" />
      </button>

      {isNotificationsOpen && typeof document !== "undefined" ? createPortal(
        <div className="fixed inset-0 z-[200]">
          <button
            aria-label="Bildirim panelini kapat"
            className="absolute inset-0 cursor-default bg-[oklch(0.14_0.01_80_/_0.32)] backdrop-blur-[3px]"
            onClick={() => setIsNotificationsOpen(false)}
            type="button"
          />
          <aside className="absolute right-4 top-4 flex h-[calc(100vh-32px)] w-[420px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-[linear-gradient(160deg,var(--bg-card),var(--bg-card-soft))] shadow-[var(--shadow-lg)]">
            <div className="relative overflow-hidden border-b border-[var(--border)] px-6 py-5">
              <div className="pointer-events-none absolute -right-16 -top-20 size-48 rounded-full bg-[var(--accent-light)] opacity-80 blur-[70px]" />
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-black text-[var(--accent)]">
                    <Bell aria-hidden="true" className="size-3.5" strokeWidth={2.4} />
                    Bildirim merkezi
                  </div>
                  <h2 className="mt-4 font-[var(--font-display)] text-[24px] font-black tracking-tight text-[var(--text-primary)]">
                    Bildirimler
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-[var(--text-muted)]">Bağlantı, veri, üyelik ve platform duyuruları.</p>
                </div>
                <button
                  aria-label="Kapat"
                  className="flex size-9 items-center justify-center rounded-xl border border-[var(--border)] bg-white text-[var(--text-muted)] shadow-[var(--shadow-sm)] transition-colors hover:text-[var(--text-primary)]"
                  onClick={() => setIsNotificationsOpen(false)}
                  type="button"
                >
                  <X aria-hidden="true" className="size-4" strokeWidth={2.4} />
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
              <div className="grid gap-3">
                {notificationItems.map((item) => {
                  const tone = getNotificationTone(item.tone);
                  const Icon = tone.icon;

                  return (
                    <article className="group rounded-[22px] border border-[var(--border)] bg-white p-4 shadow-[0_10px_24px_oklch(0.18_0.018_80_/_0.055)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]" key={item.title}>
                      <div className="flex items-start gap-3">
                        <div
                          className="flex size-10 shrink-0 items-center justify-center rounded-[15px]"
                          style={{ background: tone.bg, color: tone.text }}
                        >
                          <Icon aria-hidden="true" className="size-4.5" strokeWidth={2.4} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex items-center justify-between gap-3">
                            <span className="text-[11px] font-black uppercase tracking-[0.08em]" style={{ color: tone.text }}>
                              {item.category}
                            </span>
                            <span className="shrink-0 text-[11px] font-bold text-[var(--text-muted)]">{item.time}</span>
                          </div>
                          <h3 className="text-sm font-black leading-5 text-[var(--text-primary)]">{item.title}</h3>
                          <p className="mt-1.5 text-[12.5px] font-semibold leading-5 text-[var(--text-secondary)]">{item.description}</p>
                          <Link
                            className="mt-3 inline-flex items-center gap-1.5 rounded-[13px] border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-1.5 text-xs font-black text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
                            href={item.href}
                            onClick={() => setIsNotificationsOpen(false)}
                          >
                            İlgili sayfaya git
                            <ArrowUpRight aria-hidden="true" className="size-3.5" strokeWidth={2.4} />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-[var(--border)] p-4">
              <Link
                className="flex items-center justify-center rounded-[16px] bg-[var(--text-primary)] px-4 py-3 text-sm font-black text-white shadow-[0_12px_26px_oklch(0.18_0.018_80_/_0.18)]"
                href="/ayarlar"
                onClick={() => setIsNotificationsOpen(false)}
              >
                Bildirim ayarları
              </Link>
            </div>
          </aside>
        </div>,
        document.body
      ) : null}
    </>
  );
}

export function ProfileMenuButton() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(72);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const profileButtonRef = useRef<HTMLButtonElement>(null);
  const mainMenuItems: ProfileMenuItem[] = [
    { icon: BellOff, label: "Bildirimleri sustur", suffix: ">" },
    { href: "/ayarlar", icon: Settings, label: "Ayarlar" },
    { icon: Bell, label: "Bildirimler" },
    { icon: Moon, label: "Tema" },
    { icon: Keyboard, label: "Klavye kısayolları" },
    { icon: CircleHelp, label: "Yardım" }
  ];
  const toolItems = [
    { icon: Plus, label: "Görev oluştur", pinned: true },
    { icon: BriefcaseBusiness, label: "Çalışma alanım", pinned: true },
    { icon: Clock3, label: "Zaman takibi" },
    { icon: FileText, label: "Not defteri", pinned: true },
    { icon: CheckCircle2, label: "Hatırlatıcı oluştur", pinned: true }
  ];

  useEffect(() => {
    if (!isProfileMenuOpen) return;

    function updateMenuPosition() {
      const buttonRect = profileButtonRef.current?.getBoundingClientRect();
      if (!buttonRect) return;
      setMenuTop(Math.round(buttonRect.bottom + 8));
    }

    updateMenuPosition();

    function handlePointerDown(event: PointerEvent) {
      if (!profileMenuRef.current?.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, true);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
    };
  }, [isProfileMenuOpen]);

  return (
    <div className="relative" ref={profileMenuRef}>
      <button
        aria-expanded={isProfileMenuOpen}
        aria-label="Kullanıcı menüsü"
        className="relative flex size-[42px] items-center justify-center rounded-full border border-[color-mix(in_oklch,var(--accent)_24%,white)] bg-[var(--accent)] text-[12px] font-black text-white shadow-[var(--shadow-brand-sm)] transition-colors hover:bg-[var(--accent-hover)]"
        onClick={() => setIsProfileMenuOpen((isOpen) => !isOpen)}
        ref={profileButtonRef}
        type="button"
      >
        MS
        <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-[var(--accent-green)]" />
      </button>

      {isProfileMenuOpen ? (
        <div className="fixed right-0 z-[120] w-[292px] overflow-hidden rounded-l-[18px] border border-r-0 border-[var(--border)] bg-white text-[var(--text-primary)] shadow-[var(--shadow-lg)]" style={{ top: menuTop }}>
          <div className="flex items-center gap-3 px-4 py-4">
            <span className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[11px] font-black text-white">
              MS
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-white bg-[var(--accent-green)]" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-black text-[var(--text-primary)]">mustafa şehirli</p>
              <p className="mt-0.5 text-xs font-semibold text-[var(--text-muted)]">Online</p>
            </div>
          </div>

          <WorkspaceSwitcher />

          <div className="border-t border-[var(--border)] py-1.5">
            {mainMenuItems.map((item) => (
              item.href ? (
                <Link
                  className="flex h-10 w-full items-center gap-3 px-4 text-left text-sm font-normal text-[var(--text-primary)] no-underline transition-colors hover:bg-[var(--bg-card-soft)]"
                  href={item.href}
                  key={item.label}
                  onClick={() => setIsProfileMenuOpen(false)}
                >
                  <item.icon aria-hidden="true" className="size-4 text-[var(--text-muted)]" strokeWidth={2.2} />
                  <span className="min-w-0 flex-1">{item.label}</span>
                  {item.suffix ? <span className="text-[var(--text-muted)]">{item.suffix}</span> : null}
                </Link>
              ) : (
              <button className="flex h-10 w-full items-center gap-3 px-4 text-left text-sm font-normal text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-card-soft)]" key={item.label} type="button">
                <item.icon aria-hidden="true" className="size-4 text-[var(--text-muted)]" strokeWidth={2.2} />
                <span className="min-w-0 flex-1">{item.label}</span>
                {item.suffix ? <span className="text-[var(--text-muted)]">{item.suffix}</span> : null}
              </button>
              )
            ))}
          </div>

          <div className="border-t border-[var(--border)] py-1.5">
            <p className="px-4 py-2 text-[11px] font-bold text-[var(--text-muted)]">Kişisel araçlar</p>
            {toolItems.map((item) => (
              <button className="flex h-10 w-full items-center gap-3 px-4 text-left text-sm font-normal text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-card-soft)]" key={item.label} type="button">
                <item.icon aria-hidden="true" className="size-4 text-[var(--text-muted)]" strokeWidth={2.2} />
                <span className="min-w-0 flex-1">{item.label}</span>
                {item.pinned ? <Pin aria-hidden="true" className="size-3.5 text-[var(--text-muted)]" strokeWidth={2.2} /> : null}
              </button>
            ))}
          </div>

          <div className="border-t border-[var(--border)] py-1.5">
            <button className="flex h-10 w-full items-center gap-3 px-4 text-left text-sm font-normal text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-card-soft)]" type="button">
              <Trash2 aria-hidden="true" className="size-4 text-[var(--text-muted)]" strokeWidth={2.2} />
              Çöp kutusu
            </button>
            <button className="flex h-10 w-full items-center gap-3 px-4 text-left text-sm font-normal text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-card-soft)]" type="button">
              <LogOut aria-hidden="true" className="size-4 text-[var(--text-muted)]" strokeWidth={2.2} />
              Çıkış yap
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function AppNavigation({
  onToggleSidebar,
  sidebarCollapsed
}: {
  onToggleSidebar: () => void;
  sidebarCollapsed: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { labels } = useWorkspace();
  const isCustomerDetailPage = pathname.startsWith("/musteriler/") && pathname !== "/musteriler/crm";
  const meta = pageMeta[pathname] ?? (pathname.startsWith("/kara-kutu") ? pageMeta["/kara-kutu"] : { title: "Piaq" });
  const selectedDashboardRange = getDashboardTimeRange(searchParams.get("range"));
  const selectedDashboardRangeIndex = timeRanges.indexOf(selectedDashboardRange);
  const sidebarTextRevealClass = sidebarCollapsed
    ? "invisible translate-x-1 opacity-0 duration-75"
    : "visible translate-x-0 opacity-100 delay-200 duration-150";

  function setDashboardRange(range: TimeRange) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("range", range);
    router.replace(`/?${params.toString()}`, { scroll: false });
  }

  return (
    <>
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 flex flex-col overflow-visible border-r border-[var(--sidebar-border)] bg-[var(--sidebar-bg)] shadow-[18px_0_44px_oklch(0.18_0.018_80_/_0.08)] transition-[width] duration-300 ease-in-out will-change-[width] ${sidebarCollapsed ? "w-[72px]" : "w-[240px]"}`}>
        {/* Logo */}
        <div className="flex h-20 items-center gap-3 border-b border-[var(--sidebar-border)] px-[14px]">
          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center gap-3"
          >
            <div className="relative size-11 shrink-0 overflow-hidden">
              <Image
                alt="Piaq logo"
                className="object-contain"
                fill
                priority
                sizes="44px"
                src="/Logo.png"
              />
            </div>
            <div className={`min-w-0 overflow-hidden whitespace-nowrap transition-[opacity,transform,visibility] ease-out ${sidebarTextRevealClass}`}>
              <div className="text-[18px] font-black tracking-[0.16em] text-[var(--text-primary)]">PİAQ</div>
              <div className="text-[11px] font-semibold leading-tight text-[var(--sidebar-text)]">Ajans Platformu</div>
            </div>
          </Link>
        </div>

        {/* Sidebar toggle */}
        <div className="flex justify-start px-4 pt-3 pb-4">
          <button
            aria-label={sidebarCollapsed ? "Ana menüyü aç" : "Ana menüyü daralt"}
            className="flex size-10 translate-y-2 items-center justify-center rounded-[13px] border border-[var(--sidebar-active-bg)] bg-[var(--sidebar-active-bg)] text-white shadow-[0_12px_26px_oklch(0.18_0.018_80_/_0.18)] transition-colors hover:border-[var(--text-primary)] hover:bg-[var(--text-primary)]"
            onClick={onToggleSidebar}
            type="button"
          >
            <Menu aria-hidden="true" className="size-4" strokeWidth={2.2} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-visible px-2 py-2">
          <div className="space-y-0.5">
            {mainItems.map((item) => {
              if ("type" in item) {
                return (
                  <div
                    aria-hidden="true"
                    className="my-3 h-px bg-[var(--sidebar-border)]"
                    key={item.id}
                  />
                );
              }

              const navItem = item.href === "/musteriler"
                ? { ...item, label: labels.primaryEntityLabel }
                : item;

              return <NavLink item={navItem} key={navItem.href} pathname={pathname} sidebarCollapsed={sidebarCollapsed} />;
            })}
          </div>
        </nav>

      </aside>

      {/* Top header */}
      {!isCustomerDetailPage ? (
        <header className={`fixed right-0 top-0 z-40 flex h-20 items-center justify-between border-b border-[var(--border)] bg-[oklch(0.985_0.006_120_/_0.86)] px-10 backdrop-blur-xl transition-[left] duration-300 ease-in-out ${sidebarCollapsed ? "left-[72px]" : "left-[240px]"}`}>
          <div>
            <h1 className="font-[var(--font-display)] text-[22px] font-black leading-tight tracking-tight text-[var(--text-primary)]">
              {meta.title}
            </h1>
            {meta.subtitle ? (
              <p className="mt-1 text-[12.5px] font-semibold leading-tight text-[var(--text-secondary)]">{meta.subtitle}</p>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            {pathname === "/" ? (
              <div className="relative flex items-center gap-0 rounded-[10px] border border-[var(--border)] bg-white p-0.5 shadow-[var(--shadow-sm)]">
                <span
                  aria-hidden="true"
                  className="absolute left-0.5 top-0.5 h-[calc(100%-4px)] w-[76px] rounded-[8px] border border-[var(--text-primary)] bg-[var(--text-primary)] shadow-[0_8px_18px_oklch(0.18_0.018_80_/_0.14)] transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(${selectedDashboardRangeIndex * 76}px)` }}
                />
                {timeRanges.map((range) => {
                  const isActive = selectedDashboardRange === range;

                  return (
                    <button
                      className={`relative z-10 w-[76px] rounded-[8px] border px-0 py-2 text-[13px] font-black transition-colors duration-200 ${
                        isActive
                          ? "border-transparent bg-transparent text-white"
                          : "border-transparent bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-card-soft)]"
                      }`}
                      key={range}
                      onClick={() => setDashboardRange(range)}
                      type="button"
                    >
                      {range}
                    </button>
                  );
                })}
              </div>
            ) : null}
            <button
              type="button"
              className="flex h-[42px] items-center gap-1.5 rounded-[10px] border border-[var(--sidebar-active-bg)] bg-[var(--sidebar-active-bg)] px-3 text-[13px] font-black text-white shadow-[0_10px_22px_oklch(0.18_0.018_80_/_0.18)] transition-all hover:border-[var(--text-primary)] hover:bg-[var(--text-primary)]"
            >
              <RefreshCw className="size-3.5" strokeWidth={2} aria-hidden="true" />
              Yenile
            </button>
            <NotificationCenterButton />
            <ProfileMenuButton />
          </div>
        </header>
      ) : null}

    </>
  );
}
