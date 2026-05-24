import {
  AlertTriangle,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  FlaskConical,
  Handshake,
  Megaphone,
  ShieldCheck,
  Target,
  Timer,
  UserCheck,
  UsersRound
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { KpiCard, MetricTile, SectionTitle, StatusBadge, getTintClassName, type ProductTone } from "@/app/_components/common";

export type EkipDepartment = "Satış" | "Pazarlama" | "Operasyon" | "Yönetim" | "İK" | "ARGE" | "Finans";

type Member = {
  capacity: string;
  focus: string;
  name: string;
  role: string;
  status: string;
  taskLoad: string;
  tone: ProductTone;
};

type Task = {
  due: string;
  owner: string;
  priority: string;
  status: string;
  title: string;
  tone: ProductTone;
};

type DepartmentConfig = {
  action: string;
  blocked: string;
  capacity: string;
  icon: LucideIcon;
  load: string;
  members: Member[];
  nextDecision: string;
  subtitle: string;
  tasks: Task[];
};

type EkipDepartmentPageVariant = "default" | "editorial";

const departmentConfigs: Record<EkipDepartment, DepartmentConfig> = {
  Satış: {
    action: "Nova teklif kapanışı bugün takip edilecek.",
    blocked: "2 takip gecikti",
    capacity: "%76",
    icon: Handshake,
    load: "18 açık iş",
    nextDecision: "Teklif revizyonu ve demo sonrası itiraz notları satış liderinde birleşmeli.",
    subtitle: "Lead, demo, teklif ve kapanış sorumlulukları",
    members: [
      { capacity: "%82", focus: "Teklif kapanışı", name: "Mert Kaya", role: "Satış lideri", status: "Yoğun", taskLoad: "7 iş", tone: "warning" },
      { capacity: "%68", focus: "Demo takipleri", name: "Selin Aras", role: "Account executive", status: "Dengeli", taskLoad: "5 iş", tone: "good" },
      { capacity: "%74", focus: "CRM temizliği", name: "Baran Efe", role: "SDR", status: "Takip", taskLoad: "6 iş", tone: "accent" }
    ],
    tasks: [
      { due: "Bugün 16:00", owner: "Mert", priority: "Yüksek", status: "Açık", title: "Nova Klinik karar araması", tone: "warning" },
      { due: "Yarın", owner: "Selin", priority: "Orta", status: "Planlı", title: "Atlas demo sonrası kapsam notu", tone: "accent" },
      { due: "20 Mayıs", owner: "Baran", priority: "Normal", status: "Takip", title: "CRM kayıp sebebi temizliği", tone: "good" }
    ]
  },
  Pazarlama: {
    action: "LinkedIn CPL baskısı için hedef kitle daraltılacak.",
    blocked: "1 kampanya riskli",
    capacity: "%71",
    icon: Megaphone,
    load: "21 açık iş",
    nextDecision: "Bütçe dağılımı Meta ve Google lehine yeniden dengelenmeli.",
    subtitle: "Kampanya, içerik, kreatif ve kanal üretimi",
    members: [
      { capacity: "%79", focus: "Kampanya optimizasyonu", name: "İrem Solmaz", role: "Pazarlama lideri", status: "Yoğun", taskLoad: "8 iş", tone: "warning" },
      { capacity: "%64", focus: "Kreatif setleri", name: "Ece Tan", role: "Kreatif uzmanı", status: "Dengeli", taskLoad: "5 iş", tone: "good" },
      { capacity: "%72", focus: "İçerik takvimi", name: "Can Uçar", role: "İçerik uzmanı", status: "Takip", taskLoad: "8 iş", tone: "accent" }
    ],
    tasks: [
      { due: "Bugün", owner: "İrem", priority: "Yüksek", status: "Optimize", title: "LinkedIn webinar CPL kontrolü", tone: "warning" },
      { due: "Yarın", owner: "Ece", priority: "Orta", status: "Üretimde", title: "Meta kreatif varyasyonları", tone: "accent" },
      { due: "Cuma", owner: "Can", priority: "Normal", status: "Planlı", title: "Haftalık içerik takvimi", tone: "good" }
    ]
  },
  Operasyon: {
    action: "Atlas onboarding gecikmesi tek sorumluya bağlanacak.",
    blocked: "4 müşteri etkileniyor",
    capacity: "%88",
    icon: BriefcaseBusiness,
    load: "26 açık iş",
    nextDecision: "Geciken teslimlerde revize, müşteri onayı ve dosya bekleme nedenleri ayrıştırılmalı.",
    subtitle: "Teslimat, revize, müşteri onayı ve SOP takibi",
    members: [
      { capacity: "%91", focus: "Teslim riskleri", name: "Ayşe Demir", role: "Operasyon lideri", status: "Kritik", taskLoad: "10 iş", tone: "danger" },
      { capacity: "%84", focus: "Raporlama", name: "Deniz Ak", role: "Operasyon uzmanı", status: "Yoğun", taskLoad: "8 iş", tone: "warning" },
      { capacity: "%69", focus: "SOP kontrolü", name: "Lara Koç", role: "Proje uzmanı", status: "Dengeli", taskLoad: "8 iş", tone: "good" }
    ],
    tasks: [
      { due: "Bugün", owner: "Ayşe", priority: "Acil", status: "Riskli", title: "Atlas onboarding revizesi", tone: "danger" },
      { due: "Bugün 17:00", owner: "Deniz", priority: "Yüksek", status: "Açık", title: "Vera haftalık rapor kontrolü", tone: "warning" },
      { due: "Yarın", owner: "Lara", priority: "Normal", status: "Planlı", title: "SOP güncelleme listesi", tone: "accent" }
    ]
  },
  Yönetim: {
    action: "Haftalık karar defteri kapanacak.",
    blocked: "3 karar bekliyor",
    capacity: "%73",
    icon: ShieldCheck,
    load: "12 açık iş",
    nextDecision: "Riskli müşteri, bütçe ve işe alım kararları aynı toplantıda kapatılmalı.",
    subtitle: "Karar, hedef, risk ve yönetim ritmi",
    members: [
      { capacity: "%78", focus: "Karar defteri", name: "Mustafa S.", role: "Kurucu", status: "Takip", taskLoad: "5 iş", tone: "accent" },
      { capacity: "%70", focus: "Hedef yönetimi", name: "Deniz Ak", role: "Operasyon yöneticisi", status: "Dengeli", taskLoad: "4 iş", tone: "good" },
      { capacity: "%72", focus: "Finans kararları", name: "Mert Kaya", role: "Gelir lideri", status: "Takip", taskLoad: "3 iş", tone: "warning" }
    ],
    tasks: [
      { due: "Bugün", owner: "Mustafa", priority: "Yüksek", status: "Karar", title: "Riskli müşteri aksiyon listesi", tone: "warning" },
      { due: "Yarın", owner: "Deniz", priority: "Orta", status: "Planlı", title: "Operasyon kapasite review", tone: "accent" },
      { due: "20 Mayıs", owner: "Mert", priority: "Normal", status: "Takip", title: "Pipeline hedef kontrolü", tone: "good" }
    ]
  },
  İK: {
    action: "Operasyon uzmanı alımı karar bekliyor.",
    blocked: "1 kritik rol açık",
    capacity: "%66",
    icon: UsersRound,
    load: "14 açık iş",
    nextDecision: "Operasyon kapasitesi için işe alım ve onboarding tarihi netleşmeli.",
    subtitle: "Kişi, rol, izin, onboarding ve performans takibi",
    members: [
      { capacity: "%70", focus: "İşe alım", name: "Ece Tan", role: "İK sorumlusu", status: "Takip", taskLoad: "6 iş", tone: "warning" },
      { capacity: "%58", focus: "Onboarding", name: "Lara Koç", role: "İK destek", status: "Dengeli", taskLoad: "4 iş", tone: "good" },
      { capacity: "%62", focus: "Performans notları", name: "Can Uçar", role: "Ekip destek", status: "Planlı", taskLoad: "4 iş", tone: "accent" }
    ],
    tasks: [
      { due: "Bugün", owner: "Ece", priority: "Yüksek", status: "Karar", title: "Operasyon uzmanı son görüşme", tone: "warning" },
      { due: "Yarın", owner: "Lara", priority: "Orta", status: "Planlı", title: "Yeni çalışan onboarding checklist", tone: "accent" },
      { due: "Cuma", owner: "Can", priority: "Normal", status: "Takip", title: "Aylık performans notları", tone: "good" }
    ]
  },
  ARGE: {
    action: "Plan canvas fikri test notuna bağlanacak.",
    blocked: "2 deney bekliyor",
    capacity: "%69",
    icon: FlaskConical,
    load: "16 açık iş",
    nextDecision: "Yüksek etkili fikirler deney listesine, düşük etkili fikirler kara kutuya taşınmalı.",
    subtitle: "Fikir, deney, otomasyon ve ürün geliştirme",
    members: [
      { capacity: "%76", focus: "Deney planı", name: "Deniz Ak", role: "Ürün sorumlusu", status: "Takip", taskLoad: "6 iş", tone: "accent" },
      { capacity: "%67", focus: "Otomasyon fikri", name: "Baran Efe", role: "Teknik araştırma", status: "Dengeli", taskLoad: "5 iş", tone: "good" },
      { capacity: "%64", focus: "Rakip analizi", name: "İrem Solmaz", role: "Araştırma", status: "Planlı", taskLoad: "5 iş", tone: "warning" }
    ],
    tasks: [
      { due: "Bugün", owner: "Deniz", priority: "Orta", status: "Test", title: "Plan canvas kullanım notu", tone: "accent" },
      { due: "Yarın", owner: "Baran", priority: "Normal", status: "Araştırma", title: "Rapor otomasyonu fikri", tone: "good" },
      { due: "Cuma", owner: "İrem", priority: "Normal", status: "Takip", title: "Rakip fiyat matrisi", tone: "warning" }
    ]
  },
  Finans: {
    action: "Geciken 5 fatura takip listesine alındı.",
    blocked: "₺318K tahsilat",
    capacity: "%74",
    icon: CircleDollarSign,
    load: "13 açık iş",
    nextDecision: "Tahsilat gecikmesi, sabit gider ve runway aynı finans toplantısında okunmalı.",
    subtitle: "Tahsilat, gider, bütçe ve nakit kontrolü",
    members: [
      { capacity: "%80", focus: "Tahsilat", name: "Deniz Ak", role: "Finans sorumlusu", status: "Yoğun", taskLoad: "6 iş", tone: "warning" },
      { capacity: "%65", focus: "Gider kontrolü", name: "Selin Aras", role: "Finans destek", status: "Dengeli", taskLoad: "4 iş", tone: "good" },
      { capacity: "%71", focus: "Bütçe takibi", name: "Mert Kaya", role: "Gelir lideri", status: "Takip", taskLoad: "3 iş", tone: "accent" }
    ],
    tasks: [
      { due: "Bugün", owner: "Deniz", priority: "Yüksek", status: "Tahsilat", title: "Mavi Akademi ikinci hatırlatma", tone: "warning" },
      { due: "Yarın", owner: "Selin", priority: "Orta", status: "Kontrol", title: "Sabit gider kapanış listesi", tone: "accent" },
      { due: "20 Mayıs", owner: "Mert", priority: "Normal", status: "Takip", title: "Yeni paket gelir tahmini", tone: "good" }
    ]
  }
};

type EkipDepartmentPageProps = {
  department: EkipDepartment;
  variant?: EkipDepartmentPageVariant;
};

function healthTone(capacity: string): ProductTone {
  const value = Number(capacity.replace(/[^\d]/g, ""));
  if (value >= 86) return "danger";
  if (value >= 76) return "warning";
  return "good";
}

function getEditorialToneClassName(tone: ProductTone) {
  if (tone === "good") return "bg-[oklch(0.94_0.045_155)] text-[oklch(0.30_0.06_155)]";
  if (tone === "warning") return "bg-[oklch(0.94_0.030_32)] text-[oklch(0.34_0.055_32)]";
  if (tone === "danger") return "bg-[color-mix(in_oklch,var(--accent)_20%,white)] text-[oklch(0.30_0.08_32)]";
  if (tone === "accent") return "bg-[color-mix(in_oklch,var(--accent)_15%,white)] text-[oklch(0.30_0.08_32)]";

  return "bg-white text-[var(--text-primary)]";
}

function EditorialMetricCard({
  detail,
  icon: Icon,
  label,
  tone,
  value
}: {
  detail: string;
  icon: LucideIcon;
  label: string;
  tone: ProductTone;
  value: string;
}) {
  return (
    <article className="relative min-h-[164px] overflow-hidden rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_1px_0_rgb(255_255_255_/_0.90),0_16px_38px_rgb(15_15_15_/_0.07)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0_/_0.045)_1px,transparent_0)] [background-size:18px_18px]" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <p className="max-w-[150px] text-[11px] font-black uppercase tracking-[0.12em] text-black/45">{label}</p>
          <span className={`flex size-8 items-center justify-center rounded-[13px] ${getEditorialToneClassName(tone)}`}>
            <Icon aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
          </span>
        </div>
        <div>
          <p className="text-[34px] font-black leading-none text-black md:text-[38px]">{value}</p>
          <p className="mt-3 max-w-[240px] text-xs font-black leading-5 text-black/70">{detail}</p>
        </div>
      </div>
    </article>
  );
}

function EditorialMemberCard({ member }: { member: Member }) {
  return (
    <article className="relative min-h-[218px] overflow-hidden rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_1px_0_rgb(255_255_255_/_0.92),0_18px_42px_rgb(14_14_14_/_0.07)]">
      <div className="pointer-events-none absolute -right-5 -top-6 text-[86px] font-black leading-none text-black/[0.035]">{member.capacity}</div>
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-black ${getEditorialToneClassName(member.tone)}`}>{member.status}</span>
          <span className="text-[12px] font-black text-black/42">{member.taskLoad}</span>
        </div>
        <div>
          <p className="text-[24px] font-black leading-[1] text-black">{member.name}</p>
          <p className="mt-2 text-xs font-bold leading-5 text-black/52">{member.role}</p>
          <div className="mt-4 h-1.5 rounded-full bg-black/8">
            <div className="h-full rounded-full bg-black" style={{ width: member.capacity }} />
          </div>
          <p className="mt-2 text-[11px] font-black uppercase tracking-[0.10em] text-black/45">{member.focus}</p>
        </div>
      </div>
    </article>
  );
}

function EditorialTaskCard({ task }: { task: Task }) {
  return (
    <article className="relative min-h-[160px] overflow-hidden rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_1px_0_rgb(255_255_255_/_0.9),0_16px_34px_rgb(14_14_14_/_0.06)]">
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.10em] text-black/45">
            <Timer aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
            {task.due}
          </span>
          <span className={`rounded-full px-3 py-1 text-[11px] font-black ${getEditorialToneClassName(task.tone)}`}>{task.status}</span>
        </div>
        <div>
          <h3 className="text-[19px] font-black leading-[1.05] text-black">{task.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-black/10 bg-black px-3 py-1.5 text-[11px] font-black text-white">{task.owner}</span>
            <span className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[11px] font-black text-black/62">{task.priority}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function EditorialDock({ icon: Icon }: { icon: LucideIcon }) {
  const dockItems = [
    { icon: Icon, label: "Ritim", tone: "accent" as ProductTone },
    { icon: Target, label: "Odak", tone: "warning" as ProductTone },
    { icon: BriefcaseBusiness, label: "İş", tone: "neutral" as ProductTone },
    { icon: UsersRound, label: "Ekip", tone: "good" as ProductTone }
  ];

  return (
    <div className="inline-flex max-w-full items-center gap-2 rounded-[24px] bg-black/10 p-2 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.75),0_18px_36px_rgb(16_16_16_/_0.13)]">
      {dockItems.map((item) => {
        const DockIcon = item.icon;

        return (
          <span
            aria-label={item.label}
            className={`flex size-11 items-center justify-center rounded-[16px] bg-white shadow-[0_1px_0_rgb(255_255_255_/_0.95),0_10px_20px_rgb(16_16_16_/_0.12)] ${getEditorialToneClassName(item.tone)}`}
            key={item.label}
            title={item.label}
          >
            <DockIcon aria-hidden="true" className="size-4" strokeWidth={2.5} />
          </span>
        );
      })}
    </div>
  );
}

function EditorialEkipDepartmentPage({
  capacityTone,
  config,
  department,
  icon: Icon
}: {
  capacityTone: ProductTone;
  config: DepartmentConfig;
  department: EkipDepartment;
  icon: LucideIcon;
}) {
  return (
    <div className="mx-auto max-w-[1480px] font-[var(--font-editorial)]">
      <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-[#f7f7f5] p-3 shadow-[0_1px_0_rgb(255_255_255_/_0.95),0_24px_64px_rgb(18_18_18_/_0.08)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0_/_0.030)_1px,transparent_1px),linear-gradient(180deg,rgb(0_0_0_/_0.026)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(255_255_255_/_0.9),transparent_44%),linear-gradient(135deg,transparent_0_58%,rgb(240_83_58_/_0.055)_58%_72%,transparent_72%)]" />

        <div className="relative grid gap-2.5">
          <header className="grid gap-2.5 xl:grid-cols-[1.18fr_0.82fr]">
            <section className="relative overflow-hidden rounded-[26px] border border-black/10 bg-white p-5 text-black shadow-[0_1px_0_rgb(255_255_255_/_0.92),0_20px_48px_rgb(15_15_15_/_0.075)] md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0_/_0.043)_1px,transparent_0)] [background-size:21px_21px]" />
              <div className="pointer-events-none absolute -right-12 top-4 text-[132px] font-black leading-none text-black/[0.035] md:text-[176px]">{config.capacity}</div>
              <div className="relative flex min-h-[260px] flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-white">
                    <Icon aria-hidden="true" className="size-4" strokeWidth={2.5} />
                    Ekip / {department}
                  </span>
                  <span className="rounded-full bg-black/[0.06] px-3.5 py-2 text-[11px] font-black text-black/56">{config.load}</span>
                </div>
                <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
                  <div>
                    <h1 className="max-w-2xl text-[34px] font-black leading-[0.96] text-black md:text-[50px]">
                      {department} ritmini temiz tut.
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-black/56">{config.subtitle}</p>
                  </div>
                  <EditorialDock icon={Icon} />
                </div>
              </div>
            </section>

            <aside className="relative overflow-hidden rounded-[26px] border border-black/10 bg-white p-5 shadow-[0_1px_0_rgb(255_255_255_/_0.92),0_20px_48px_rgb(15_15_15_/_0.07)] md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0_/_0.045)_1px,transparent_0)] [background-size:20px_20px]" />
              <div className="relative flex min-h-[260px] flex-col justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.13em] text-black/42">Karar notu</p>
                  <h2 className="mt-2 text-[26px] font-black leading-[1] text-black md:text-[34px]">Neyi netleştirmeliyiz?</h2>
                </div>
                <div>
                  <p className="text-[16px] font-black leading-6 text-black">{config.nextDecision}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className={`rounded-full px-3.5 py-2 text-[11px] font-black ${getEditorialToneClassName(capacityTone)}`}>Kapasite {config.capacity}</span>
                    <span className="rounded-full bg-black px-3.5 py-2 text-[11px] font-black text-white">{config.blocked}</span>
                  </div>
                </div>
              </div>
            </aside>
          </header>

          <section className="grid gap-2.5 md:grid-cols-2 xl:grid-cols-4">
            <EditorialMetricCard detail={config.action} icon={Target} label="Bugünkü odak" tone="accent" value="1" />
            <EditorialMetricCard detail={config.load} icon={BriefcaseBusiness} label="Görev yükü" tone="warning" value={config.load.split(" ")[0]} />
            <EditorialMetricCard detail="Kişi bazlı doluluk" icon={UsersRound} label="Kapasite" tone={capacityTone} value={config.capacity} />
            <EditorialMetricCard detail={config.blocked} icon={AlertTriangle} label="Risk" tone={capacityTone === "danger" ? "danger" : "warning"} value={config.blocked.split(" ")[0]} />
          </section>

          <section className="grid gap-2.5 xl:grid-cols-[1fr_0.58fr]">
            <div className="grid gap-2.5 md:grid-cols-3">
              {config.members.map((member) => (
                <EditorialMemberCard key={member.name} member={member} />
              ))}
            </div>

            <article className="relative overflow-hidden rounded-[24px] bg-[#08090c] p-5 text-white shadow-[0_22px_54px_rgb(8_9_12_/_0.20)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgb(255_255_255_/_0.08)_1px,transparent_1px),linear-gradient(180deg,rgb(255_255_255_/_0.07)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="relative flex min-h-[218px] flex-col justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.13em] text-white/45">Ekip yükü</p>
                  <h2 className="mt-2 text-[25px] font-black leading-[1] text-white">Kişi, kapasite ve sorumluluk aynı yüzeyde.</h2>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="rounded-[18px] border border-white/10 bg-white/8 p-3">
                    <span className="block text-[24px] font-black leading-none text-white">{config.members.length}</span>
                    <span className="mt-1.5 block text-[11px] font-black uppercase tracking-[0.10em] text-white/48">kişi</span>
                  </span>
                  <span className="rounded-[18px] border border-white/10 bg-white/8 p-3">
                    <span className="block text-[24px] font-black leading-none text-white">{config.tasks.length}</span>
                    <span className="mt-1.5 block text-[11px] font-black uppercase tracking-[0.10em] text-white/48">takip</span>
                  </span>
                </div>
              </div>
            </article>
          </section>

          <section className="grid gap-2.5 lg:grid-cols-3">
            {config.tasks.map((task) => (
              <EditorialTaskCard key={task.title} task={task} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export function EkipDepartmentPage({ department, variant = "editorial" }: EkipDepartmentPageProps) {
  const config = departmentConfigs[department];
  const Icon = config.icon;
  const capacityTone = healthTone(config.capacity);

  if (variant === "editorial") {
    return <EditorialEkipDepartmentPage capacityTone={capacityTone} config={config} department={department} icon={Icon} />;
  }

  return (
    <div className="mx-auto grid max-w-[1540px] gap-6">
      <header className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] md:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] bg-[var(--text-primary)] text-white shadow-[0_18px_34px_oklch(0.18_0.018_80_/_0.18)]">
              <Icon aria-hidden="true" className="size-7" strokeWidth={2.4} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">Ekip · {department}</p>
              <h1 className="mt-1 text-[28px] font-black leading-tight text-[var(--text-primary)] md:text-[34px]">{department} Ekibi</h1>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-[var(--text-secondary)]">{config.subtitle}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge status={`Kapasite ${config.capacity}`} tone={capacityTone} />
            <StatusBadge status={config.blocked} tone={config.blocked.includes("₺") || config.blocked.includes("kritik") ? "warning" : "accent"} />
          </div>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard change={config.action} icon={Target} label="Bugünkü odak" note="Ekip aksiyonu" tone="accent" value="1 karar" />
        <KpiCard change={config.load} icon={BriefcaseBusiness} label="Görev yükü" note="Açık ve takipte işler" tone="warning" value={config.load.split(" ")[0]} />
        <KpiCard change="Kişi bazlı doluluk" icon={UsersRound} label="Kapasite" note="Ortalama ekip yükü" tone={capacityTone} value={config.capacity} />
        <KpiCard change={config.blocked} icon={AlertTriangle} label="Risk" note="Blokaj ve darboğaz" tone={capacityTone === "danger" ? "danger" : "warning"} value={config.blocked.split(" ")[0]} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.72fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle description="Ekip ekranı departman performansından ayrı olarak kişi, sorumlu, kapasite ve görev yüküne odaklanır." kicker="Ekip yükü" title="Kişi bazlı kapasite ve sorumluluk" />
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {config.members.map((member) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={member.name}>
                <div className="flex items-start justify-between gap-3">
                  <span className={`flex size-10 items-center justify-center rounded-[14px] border ${getTintClassName(member.tone)}`}>
                    <UserCheck aria-hidden="true" className="size-4 text-[var(--text-primary)]" strokeWidth={2.4} />
                  </span>
                  <StatusBadge status={member.status} tone={member.tone} />
                </div>
                <h3 className="mt-4 text-sm font-black text-[var(--text-primary)]">{member.name}</h3>
                <p className="mt-1 text-xs font-bold text-[var(--text-muted)]">{member.role}</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <MetricTile detail="doluluk" label="Kapasite" tone={member.tone} value={member.capacity} />
                  <MetricTile detail={member.focus} label="Görev" tone="neutral" value={member.taskLoad} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle description="Bu ekip için bir sonraki yönetim kararı." kicker="Karar notu" title="Neyi netleştirmeliyiz?" />
          <article className={`mt-5 rounded-[22px] border p-4 ${getTintClassName("accent")}`}>
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-[14px] bg-[var(--text-primary)] text-white">
                <CheckCircle2 aria-hidden="true" className="size-4" strokeWidth={2.4} />
              </span>
              <p className="text-sm font-bold leading-6 text-[var(--text-primary)]">{config.nextDecision}</p>
            </div>
          </article>
        </aside>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <SectionTitle description="Sorumlu, vade, öncelik ve durum aynı yüzeyde takip edilir." kicker="Takip listesi" title="Açık görevler ve sonraki adımlar" />
        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          {config.tasks.map((task) => (
            <article className={`rounded-[20px] border p-4 ${getTintClassName(task.tone)}`} key={task.title}>
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  <Timer aria-hidden="true" className="size-3.5" strokeWidth={2.4} />
                  {task.due}
                </span>
                <StatusBadge status={task.status} tone={task.tone} />
              </div>
              <h3 className="mt-4 text-sm font-black text-[var(--text-primary)]">{task.title}</h3>
              <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">Sorumlu: {task.owner}</p>
              <p className="mt-3 text-xs font-black text-[var(--text-primary)]">Öncelik: {task.priority}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-[linear-gradient(145deg,oklch(0.18_0.016_80),oklch(0.11_0.014_80)_62%,oklch(0.22_0.038_32))] p-5 text-white shadow-[var(--shadow-lg)]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.12em] text-white/50">Ekip aksiyon özeti</p>
            <h2 className="mt-2 text-[22px] font-black text-white">{department} ekibinde kapasite, görev ve karar aynı ritimde izleniyor</h2>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-white/62">
              Departman ekranı iş birimi performansını anlatır; ekip ekranı ise kimin neyi taşıdığını ve hangi kararın blokajı kaldıracağını gösterir.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
              <UsersRound aria-hidden="true" className="size-4" strokeWidth={2.4} />
              {config.members.length} kişi
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
              <CalendarClock aria-hidden="true" className="size-4" strokeWidth={2.4} />
              {config.tasks.length} takip
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
