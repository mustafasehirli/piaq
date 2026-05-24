import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  BarChart3,
  ClipboardList,
  Copy,
  Eye,
  Gauge,
  GitBranch,
  ListChecks,
  MousePointerClick,
  PauseCircle,
  PenLine,
  Rocket,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  Users,
  Waypoints
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ValueText } from "@/app/_components/common/ProductUI";
import type { ReactNode } from "react";
import { ComparisonTrendChart } from "@/app/_components/charts/ComparisonTrendChart";

export type FunnelTone = "good" | "warning" | "bad" | "neutral" | "accent";

type SummaryCard = {
  label: string;
  value: string;
  note: string;
  tone: FunnelTone;
  icon: "visitors" | "leads" | "conversion" | "form" | "sales" | "drop" | "best" | "weak";
};

type TrendPoint = {
  label: string;
  visitors: number;
  leads: number;
  conversion: number;
};

type FunnelStage = {
  label: string;
  value: string;
  rate: string;
  drop: string;
  width: string;
  note: string;
  tone: FunnelTone;
};

type QuickItem = {
  title: string;
  description: string;
  metric: string;
  status: string;
  tone: FunnelTone;
};

type FunnelListItem = {
  name: string;
  purpose: string;
  status: string;
  statusTone: FunnelTone;
  visitors: string;
  leads: string;
  conversion: string;
  revenue: string;
  drop: string;
  updatedAt: string;
  action: string;
  actionTone: FunnelTone;
};

type BuilderStep = {
  name: string;
  type: string;
  metric: string;
  conversion: string;
  note: string;
  tone: FunnelTone;
};

type FunnelPageItem = {
  name: string;
  type: string;
  funnel: string;
  url: string;
  visitors: string;
  conversion: string;
  drop: string;
  mobileConversion: string;
  desktopConversion: string;
  status: string;
  score: string;
  scoreNote: string;
  tone: FunnelTone;
};

type FunnelFormItem = {
  name: string;
  page: string;
  views: string;
  starts: string;
  completions: string;
  conversion: string;
  drop: string;
  fields: string[];
  mostAbandonedField: string;
  tone: FunnelTone;
};

type FunnelLead = {
  name: string;
  email: string;
  phone: string;
  funnel: string;
  page: string;
  source: string;
  utm: string;
  score: string;
  status: string;
  date: string;
  detail: string;
  tone: FunnelTone;
};

type BreakdownRow = {
  step: string;
  users: string;
  conversion: string;
  drop: string;
  avgTime: string;
  progress: string;
  action: string;
  tone: FunnelTone;
};

type SourceRow = {
  name: string;
  visitors: string;
  conversion: string;
  revenue: string;
  delta: string;
  width: string;
  tone: FunnelTone;
};

type SegmentRow = {
  name: string;
  detail: string;
  conversion: string;
  delta: string;
  width: string;
  tone: FunnelTone;
};

type AbTest = {
  name: string;
  page: string;
  variationA: string;
  variationB: string;
  trafficSplit: string;
  conversion: string;
  winner: string;
  status: string;
  tone: FunnelTone;
};

type BehaviorInsight = {
  title: string;
  metric: string;
  detail: string;
  tone: FunnelTone;
};

type ReportItem = {
  name: string;
  cadence: string;
  content: string;
  exportTypes: string;
  status: string;
  tone: FunnelTone;
};

type SettingItem = {
  label: string;
  value: string;
  status: string;
  tone: FunnelTone;
};

type SetupStep = {
  label: string;
  detail: string;
  status: string;
  tone: FunnelTone;
};

export type FunnelViewData = {
  eyebrow: string;
  title: string;
  description: string;
  scopeLabel: string;
  accountStatus: string;
  lastSync: string;
  summaryCards: SummaryCard[];
  trends: TrendPoint[];
  stages: FunnelStage[];
  health: {
    score: string;
    label: string;
    description: string;
    bottleneck: string;
  };
  actions: QuickItem[];
  signals: QuickItem[];
  funnelList: FunnelListItem[];
  builderSteps: BuilderStep[];
  pages: FunnelPageItem[];
  forms: FunnelFormItem[];
  leads: FunnelLead[];
  breakdownRows: BreakdownRow[];
  sources: SourceRow[];
  segments: SegmentRow[];
  abTests: AbTest[];
  behavior: BehaviorInsight[];
  reports: ReportItem[];
  settings: SettingItem[];
  setupSteps: SetupStep[];
  purposes: string[];
  templates: string[];
  aiInsight: {
    title: string;
    description: string;
    question: string;
    tone: FunnelTone;
  };
};

const summaryIcons: Record<SummaryCard["icon"], LucideIcon> = {
  best: BadgeCheck,
  conversion: Gauge,
  drop: AlertTriangle,
  form: ClipboardList,
  leads: UserCheck,
  sales: Target,
  visitors: Users,
  weak: AlertTriangle
};

function getToneClass(tone: FunnelTone) {
  if (tone === "good") return "border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] text-[var(--accent-green)]";
  if (tone === "warning") return "border-[oklch(0.92_0.055_75)] bg-[var(--accent-amber-light)] text-[var(--accent-amber)]";
  if (tone === "bad") return "border-[oklch(0.91_0.055_25)] bg-[var(--accent-red-light)] text-[var(--accent-red)]";
  if (tone === "accent") return "border-[color-mix(in_oklch,var(--channel-funnel)_24%,white)] bg-[var(--channel-funnel-light)] text-[var(--channel-funnel)]";
  return "border-[var(--border)] bg-white text-[var(--text-secondary)]";
}

function getToneDotClass(tone: FunnelTone) {
  if (tone === "good") return "bg-[var(--accent-green)]";
  if (tone === "warning") return "bg-[var(--accent-amber)]";
  if (tone === "bad") return "bg-[var(--accent-red)]";
  if (tone === "accent") return "bg-[var(--channel-funnel)]";
  return "bg-[var(--text-muted)]";
}

function getTintClass(tone: FunnelTone) {
  if (tone === "good") return "border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)]";
  if (tone === "warning") return "border-[oklch(0.92_0.055_75)] bg-[var(--accent-amber-light)]";
  if (tone === "bad") return "border-[oklch(0.91_0.055_25)] bg-[var(--accent-red-light)]";
  if (tone === "accent") return "border-[color-mix(in_oklch,var(--channel-funnel)_24%,white)] bg-[var(--channel-funnel-light)]";
  return "border-[var(--border)] bg-[var(--bg-card-soft)]";
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">{kicker}</p>
      <h2 className="mt-1 text-[20px] font-black text-[var(--text-primary)]">{title}</h2>
    </div>
  );
}

function StatusBadge({ status, tone }: { status: string; tone: FunnelTone }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-black ${getToneClass(tone)}`}>{status}</span>;
}

function TableShell({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto rounded-[22px] border border-[var(--border)] bg-white">{children}</div>;
}

function MiniStat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-[18px] border border-[var(--border)] bg-white p-4">
      <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{label}</p>
      <p className="mt-2 text-[24px] font-black leading-none text-[var(--text-primary)]"><ValueText value={value} /></p>
      <p className="mt-2 text-xs font-bold leading-5 text-[var(--text-muted)]">{note}</p>
    </div>
  );
}

function QuickList({ icon: Icon, items }: { icon: LucideIcon; items: QuickItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <article className={`rounded-[20px] border p-4 ${getTintClass(item.tone)}`} key={item.title}>
          <div className="flex items-start gap-3">
            <span className={`flex size-10 shrink-0 items-center justify-center rounded-[14px] border ${getToneClass(item.tone)}`}>
              <Icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-sm font-black text-[var(--text-primary)]">{item.title}</h3>
                <StatusBadge status={item.status} tone={item.tone} />
              </div>
              <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.description}</p>
              <p className="mt-3 text-sm font-black text-[var(--text-primary)]">{item.metric}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function FunnelView({ data }: { data: FunnelViewData }) {
  return (
    <div className="mx-auto grid max-w-[1540px] gap-6">
      <header className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] md:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] bg-[var(--channel-funnel)] text-white shadow-[0_18px_34px_oklch(0.18_0.018_80_/_0.16)]">
              <Waypoints aria-hidden="true" className="size-7" strokeWidth={2.4} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">{data.eyebrow}</p>
              <h1 className="mt-1 text-[28px] font-black leading-tight text-[var(--text-primary)] md:text-[34px]">{data.title}</h1>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-[var(--text-secondary)]">{data.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] px-3 py-2 text-xs font-black text-[var(--accent-green)]">
              <BadgeCheck aria-hidden="true" className="size-4" strokeWidth={2.4} />
              {data.accountStatus}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-xs font-black text-[var(--text-secondary)]">
              <Activity aria-hidden="true" className="size-4" strokeWidth={2.4} />
              {data.scopeLabel} · {data.lastSync}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-black text-white">
              <Rocket aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Yeni Funnel
            </span>
          </div>
        </div>
      </header>

      <nav aria-label="Funnel sayfası bölümleri" className="flex gap-2 overflow-x-auto pb-1">
        {["Genel Bakış", "Funnel Listesi", "Funnel Builder", "Sayfalar", "Formlar", "Leadler", "Dönüşüm Analizi", "A/B Testler", "Isı Haritası", "Raporlar", "Ayarlar"].map((item) => (
          <span className="shrink-0 rounded-full border border-[var(--border)] bg-white px-3.5 py-2 text-xs font-black text-[var(--text-secondary)] shadow-[var(--shadow-sm)]" key={item}>
            {item}
          </span>
        ))}
      </nav>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.summaryCards.map((card) => {
          const Icon = summaryIcons[card.icon];
          return (
            <article className="min-h-[146px] rounded-[26px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]" key={card.label}>
              <div className="flex items-start justify-between gap-3">
                <span className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{card.label}</span>
                <span className={`flex size-9 items-center justify-center rounded-[14px] border ${getToneClass(card.tone)}`}>
                  <Icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
                </span>
              </div>
              <p className="mt-4 text-[28px] font-black leading-none text-[var(--text-primary)]">{card.value}</p>
              <div className="mt-4 flex items-center gap-2">
                <span className={`size-2.5 rounded-full ${getToneDotClass(card.tone)}`} />
                <p className="text-xs font-bold leading-5 text-[var(--text-muted)]">{card.note}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Genel bakış" title="Ziyaretçi, lead ve dönüşüm trendi" />
          <div className="mt-5">
            <ComparisonTrendChart
              ariaLabel="Funnel ziyaretçi ve lead trendi"
              color="var(--channel-funnel)"
              gradientId="funnelTrendArea"
              points={data.trends.map((point) => ({
                barValue: point.visitors,
                label: point.label,
                lineValue: point.leads,
                topLabel: `%${point.conversion.toLocaleString("tr-TR")}`
              }))}
            />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <MiniStat label="Ziyaretçi trendi" value={`+${data.trends.at(-1)?.visitors.toLocaleString("tr-TR")}`} note="Son ölçüm" />
            <MiniStat label="Lead trendi" value={data.trends.at(-1)?.leads.toLocaleString("tr-TR") ?? "0"} note="Son ölçüm" />
            <MiniStat label="Dönüşüm oranı" value={`%${data.trends.at(-1)?.conversion.toLocaleString("tr-TR")}`} note="Son ölçüm" />
          </div>
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="En büyük kayıp" title="Darboğaz ve kritik uyarılar" />
          <div className="mt-5 rounded-[24px] border border-[var(--border)] bg-[linear-gradient(145deg,oklch(0.18_0.016_80),oklch(0.11_0.014_80)_68%,oklch(0.21_0.08_145))] p-5 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.12em] text-white/48">Funnel sağlığı</p>
                <p className="mt-2 text-[34px] font-black leading-none">{data.health.score}</p>
                <p className="mt-2 text-sm font-black text-[oklch(0.82_0.15_145)]">{data.health.label}</p>
              </div>
              <Gauge aria-hidden="true" className="size-6 text-[oklch(0.82_0.15_145)]" strokeWidth={2.4} />
            </div>
            <p className="mt-4 text-sm font-semibold leading-6 text-white/62">{data.health.description}</p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/8 px-4 py-3">
              <p className="text-[11px] font-black uppercase tracking-wide text-white/42">Kritik nokta</p>
              <p className="mt-1 text-sm font-black text-white">{data.health.bottleneck}</p>
            </div>
          </div>
          <div className="mt-4">
            <QuickList icon={AlertTriangle} items={data.signals} />
          </div>
        </aside>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Funnel akışı" title="Adım adım dönüşüm kırılımı" />
          <div className="mt-5 grid gap-3">
            {data.stages.map((stage, index) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={stage.label}>
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                  <div className="flex min-w-0 flex-1 items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-[14px] bg-white text-xs font-black text-[var(--text-muted)] shadow-[inset_0_0_0_1px_var(--border)]">{index + 1}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-black text-[var(--text-primary)]">{stage.label}</h3>
                        <StatusBadge status={stage.rate} tone={stage.tone} />
                      </div>
                      <p className="mt-1 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{stage.note}</p>
                      <div className="mt-3 h-3 overflow-hidden rounded-full bg-white shadow-[inset_0_0_0_1px_var(--border)]">
                        <div className="h-full rounded-full bg-[var(--channel-funnel)]" style={{ width: stage.width }} />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 md:w-48">
                    <MiniStat label="Kişi" value={stage.value} note="Adım hacmi" />
                    <MiniStat label="Kayıp" value={stage.drop} note="Terk oranı" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Optimizasyon" title="Sıradaki aksiyonlar" />
          <div className="mt-5">
            <QuickList icon={ListChecks} items={data.actions} />
          </div>
        </aside>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle kicker="Funnel listesi" title="Aktif funnel’lar ve hızlı aksiyonlar" />
          <div className="flex flex-wrap gap-2">
            {[Eye, PenLine, BarChart3, Copy, PauseCircle].map((Icon, index) => (
              <span className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] text-[var(--text-secondary)]" key={index}>
                <Icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
              </span>
            ))}
          </div>
        </div>
        <TableShell>
          <table className="min-w-[1060px] w-full text-left text-sm">
            <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              <tr>
                <th className="px-4 py-3">Funnel adı</th>
                <th className="px-4 py-3">Amaç</th>
                <th className="px-4 py-3">Durum</th>
                <th className="px-4 py-3">Ziyaretçi</th>
                <th className="px-4 py-3">Lead</th>
                <th className="px-4 py-3">Dönüşüm</th>
                <th className="px-4 py-3">Gelir</th>
                <th className="px-4 py-3">Terk</th>
                <th className="px-4 py-3">Son güncelleme</th>
                <th className="px-4 py-3">Aksiyon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {data.funnelList.map((item) => (
                <tr className="align-top" key={item.name}>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{item.name}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{item.purpose}</td>
                  <td className="px-4 py-4"><StatusBadge status={item.status} tone={item.statusTone} /></td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{item.visitors}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{item.leads}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{item.conversion}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{item.revenue}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{item.drop}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{item.updatedAt}</td>
                  <td className="px-4 py-4"><StatusBadge status={item.action} tone={item.actionTone} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableShell>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Funnel Builder" title="Görsel akış editörü" />
          <div className="mt-5 grid gap-3">
            {data.builderSteps.map((step, index) => (
              <div className="flex items-center gap-3" key={`${step.name}-${step.type}`}>
                <article className={`flex min-h-[72px] flex-1 items-center gap-3 rounded-[20px] border p-4 ${getTintClass(step.tone)}`}>
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-[14px] border ${getToneClass(step.tone)}`}>
                    <GitBranch aria-hidden="true" className="size-4" strokeWidth={2.4} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-black text-[var(--text-primary)]">{step.name}</h3>
                      <span className="rounded-full border border-[var(--border)] bg-white px-2 py-1 text-[11px] font-black text-[var(--text-secondary)]">{step.type}</span>
                    </div>
                    <p className="mt-1 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{step.note}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm font-black text-[var(--text-primary)]">{step.metric}</p>
                    <p className="mt-1 text-xs font-bold text-[var(--text-muted)]">{step.conversion}</p>
                  </div>
                </article>
                {index < data.builderSteps.length - 1 ? <ArrowRight aria-hidden="true" className="hidden size-4 shrink-0 text-[var(--text-muted)] sm:block" strokeWidth={2.4} /> : null}
              </div>
            ))}
          </div>
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Yeni funnel" title="Kurulum akışı ve şablonlar" />
          <div className="mt-5 grid gap-3">
            {data.setupSteps.map((step, index) => (
              <article className="rounded-[18px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={step.label}>
                <div className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-[var(--text-muted)] shadow-[inset_0_0_0_1px_var(--border)]">{index + 1}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-black text-[var(--text-primary)]">{step.label}</h3>
                      <StatusBadge status={step.status} tone={step.tone} />
                    </div>
                    <p className="mt-1 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{step.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-[11px] font-black uppercase tracking-[0.1em] text-[var(--text-muted)]">Amaç seçimi</p>
              <div className="flex flex-wrap gap-2">
                {data.purposes.map((item) => <span className="rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-2.5 py-1 text-[11px] font-black text-[var(--text-secondary)]" key={item}>{item}</span>)}
              </div>
            </div>
            <div>
              <p className="mb-2 text-[11px] font-black uppercase tracking-[0.1em] text-[var(--text-muted)]">Şablonlar</p>
              <div className="flex flex-wrap gap-2">
                {data.templates.map((item) => <span className="rounded-full border border-[color-mix(in_oklch,var(--channel-funnel)_24%,white)] bg-[var(--channel-funnel-light)] px-2.5 py-1 text-[11px] font-black text-[var(--channel-funnel)]" key={item}>{item}</span>)}
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Sayfalar" title="Funnel içindeki sayfa performansı" />
          <div className="mt-5 grid gap-3">
            {data.pages.map((page) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={page.url}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{page.type} · {page.funnel}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{page.name}</h3>
                    <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">{page.url}</p>
                  </div>
                  <StatusBadge status={page.status} tone={page.tone} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <MiniStat label="Ziyaretçi" value={page.visitors} note={`Skor ${page.score}`} />
                  <MiniStat label="Dönüşüm" value={page.conversion} note={`Mobil ${page.mobileConversion}`} />
                  <MiniStat label="Terk" value={page.drop} note={`Desktop ${page.desktopConversion}`} />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{page.scoreNote}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Formlar" title="Form dönüşümü ve terk analizi" />
          <div className="mt-5 grid gap-3">
            {data.forms.map((form) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={form.name}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{form.page}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{form.name}</h3>
                  </div>
                  <StatusBadge status={`Terk: ${form.drop}`} tone={form.tone} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-4">
                  <MiniStat label="Görüntüleme" value={form.views} note="Formu gören" />
                  <MiniStat label="Başlatan" value={form.starts} note="Doldurmaya başladı" />
                  <MiniStat label="Tamamlayan" value={form.completions} note="Lead oldu" />
                  <MiniStat label="Dönüşüm" value={form.conversion} note="Form oranı" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {form.fields.map((field) => <span className="rounded-full border border-[var(--border)] bg-white px-2.5 py-1 text-[11px] font-black text-[var(--text-secondary)]" key={field}>{field}</span>)}
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">En çok terk edilen alan: <strong>{form.mostAbandonedField}</strong></p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <SectionTitle kicker="Leadler" title="Funnel’dan gelen son leadler" />
        <TableShell>
          <table className="min-w-[1120px] w-full text-left text-sm">
            <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              <tr>
                <th className="px-4 py-3">Ad soyad</th>
                <th className="px-4 py-3">E-posta</th>
                <th className="px-4 py-3">Telefon</th>
                <th className="px-4 py-3">Funnel</th>
                <th className="px-4 py-3">Sayfa</th>
                <th className="px-4 py-3">Kaynak</th>
                <th className="px-4 py-3">UTM</th>
                <th className="px-4 py-3">Skor</th>
                <th className="px-4 py-3">Durum</th>
                <th className="px-4 py-3">Tarih</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {data.leads.map((lead) => (
                <tr className="align-top" key={`${lead.email}-${lead.date}`}>
                  <td className="px-4 py-4">
                    <p className="font-black text-[var(--text-primary)]">{lead.name}</p>
                    <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">{lead.detail}</p>
                  </td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{lead.email}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{lead.phone}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{lead.funnel}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{lead.page}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{lead.source}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{lead.utm}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{lead.score}</td>
                  <td className="px-4 py-4"><StatusBadge status={lead.status} tone={lead.tone} /></td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{lead.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableShell>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Dönüşüm analizi" title="İnsanlar hangi adımda kayboluyor?" />
          <TableShell>
            <table className="min-w-[860px] w-full text-left text-sm">
              <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
                <tr>
                  <th className="px-4 py-3">Adım</th>
                  <th className="px-4 py-3">Kullanıcı</th>
                  <th className="px-4 py-3">Geçiş</th>
                  <th className="px-4 py-3">Kayıp</th>
                  <th className="px-4 py-3">Ort. süre</th>
                  <th className="px-4 py-3">Performans</th>
                  <th className="px-4 py-3">Aksiyon</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {data.breakdownRows.map((row) => (
                  <tr className="align-top" key={row.step}>
                    <td className="px-4 py-4 font-black text-[var(--text-primary)]">{row.step}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{row.users}</td>
                    <td className="px-4 py-4"><span className="inline-flex items-center gap-1 rounded-full bg-[var(--accent-green-light)] px-2.5 py-1 text-xs font-black text-[var(--accent-green)]"><ArrowUp aria-hidden="true" className="size-3" strokeWidth={3} />{row.conversion}</span></td>
                    <td className="px-4 py-4"><span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-black ${row.tone === "bad" ? "bg-[var(--accent-red-light)] text-[var(--accent-red)]" : "bg-[var(--bg-card-soft)] text-[var(--text-muted)]"}`}><ArrowDown aria-hidden="true" className="size-3" strokeWidth={3} />{row.drop}</span></td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{row.avgTime}</td>
                    <td className="px-4 py-4"><div className="h-2.5 w-32 overflow-hidden rounded-full bg-[var(--bg-card-soft)] shadow-[inset_0_0_0_1px_var(--border)]"><div className="h-full rounded-full bg-[var(--channel-funnel)]" style={{ width: row.progress }} /></div></td>
                    <td className="px-4 py-4"><StatusBadge status={row.action} tone={row.tone} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableShell>
        </section>

        <aside className="grid gap-6">
          <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
            <SectionTitle kicker="Kaynaklar" title="Kaynak bazlı dönüşüm" />
            <div className="mt-5 grid gap-3">
              {data.sources.map((source) => (
                <article className={`rounded-[18px] border p-4 ${getTintClass(source.tone)}`} key={source.name}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-black text-[var(--text-primary)]">{source.name}</h3>
                      <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">{source.visitors} ziyaretçi · {source.revenue}</p>
                    </div>
                    <StatusBadge status={source.delta} tone={source.tone} />
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-white shadow-[inset_0_0_0_1px_var(--border)]"><div className="h-full rounded-full bg-[var(--channel-funnel)]" style={{ width: source.width }} /></div>
                    <span className="w-12 text-right text-xs font-black text-[var(--text-primary)]">{source.conversion}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
            <SectionTitle kicker="Segmentler" title="Cihaz ve kitle kırılımı" />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {data.segments.map((segment) => (
                <article className={`rounded-[18px] border p-4 ${getTintClass(segment.tone)}`} key={segment.name}>
                  <p className="text-sm font-black text-[var(--text-primary)]">{segment.name}</p>
                  <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">{segment.detail}</p>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <p className="text-[22px] font-black text-[var(--text-primary)]">{segment.conversion}</p>
                    <StatusBadge status={segment.delta} tone={segment.tone} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="A/B Testler" title="Başlık, CTA, form ve sayfa varyasyonları" />
          <div className="mt-5 grid gap-3">
            {data.abTests.map((test) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={test.name}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{test.page} · {test.trafficSplit}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{test.name}</h3>
                  </div>
                  <StatusBadge status={test.status} tone={test.tone} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <MiniStat label="Varyasyon A" value={test.variationA} note="Kontrol" />
                  <MiniStat label="Varyasyon B" value={test.variationB} note="Alternatif" />
                  <MiniStat label="Sonuç" value={test.conversion} note={`Kazanan: ${test.winner}`} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Isı haritası / davranış" title="Sayfa davranışı ve terk noktaları" />
          <div className="mt-5 grid gap-3">
            {data.behavior.map((item) => (
              <article className={`rounded-[20px] border p-4 ${getTintClass(item.tone)}`} key={item.title}>
                <div className="flex items-start gap-3">
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-[14px] border ${getToneClass(item.tone)}`}>
                    <MousePointerClick aria-hidden="true" className="size-4" strokeWidth={2.4} />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-black text-[var(--text-primary)]">{item.title}</h3>
                      <StatusBadge status={item.metric} tone={item.tone} />
                    </div>
                    <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Raporlar" title="Dışa aktarılabilir funnel raporları" />
          <div className="mt-5 grid gap-3">
            {data.reports.map((report) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={report.name}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{report.cadence}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{report.name}</h3>
                  </div>
                  <StatusBadge status={report.status} tone={report.tone} />
                </div>
                <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{report.content}</p>
                <p className="mt-3 text-xs font-black text-[var(--text-primary)]">Dışa aktarım: {report.exportTypes}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Ayarlar" title="Teknik durum ve takip bağlantıları" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {data.settings.map((setting) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={setting.label}>
                <div className="flex items-start justify-between gap-3">
                  <span className={`flex size-10 items-center justify-center rounded-[14px] border ${getToneClass(setting.tone)}`}>
                    {setting.tone === "good" ? <ShieldCheck aria-hidden="true" className="size-4" strokeWidth={2.4} /> : <Settings aria-hidden="true" className="size-4" strokeWidth={2.4} />}
                  </span>
                  <StatusBadge status={setting.status} tone={setting.tone} />
                </div>
                <p className="mt-4 text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{setting.label}</p>
                <p className="mt-2 text-sm font-black leading-5 text-[var(--text-primary)]">{setting.value}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="relative overflow-hidden rounded-[30px] border border-[oklch(1_0_0_/_0.10)] bg-[linear-gradient(145deg,oklch(0.18_0.016_80),oklch(0.11_0.014_80)_62%,oklch(0.21_0.08_145))] p-5 text-white shadow-[var(--shadow-lg)] md:p-6">
        <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-black text-white/70">
              <Sparkles aria-hidden="true" className="size-3.5 text-[oklch(0.82_0.15_145)]" strokeWidth={2.4} />
              AI insight
            </div>
            <h2 className="mt-4 text-[22px] font-black tracking-tight text-white">{data.aiInsight.title}</h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-white/62">{data.aiInsight.description}</p>
          </div>
          <span className="inline-flex h-11 shrink-0 items-center justify-center rounded-2xl bg-[#f0533a] px-4 text-sm font-black text-white shadow-[0_14px_28px_rgb(240_83_58_/_0.24)]">
            {data.aiInsight.question}
          </span>
        </div>
      </section>
    </div>
  );
}
