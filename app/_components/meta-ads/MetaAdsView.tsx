import {
  Activity,
  AlertTriangle,
  BadgeCheck,
  BarChart3,
  CircleDollarSign,
  Eye,
  Gauge,
  Image as ImageIcon,
  MousePointerClick,
  Radio,
  ReceiptText,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ComparisonTrendChart } from "@/app/_components/charts/ComparisonTrendChart";
import { ValueText } from "@/app/_components/common/ProductUI";
import { MetaLogoMono } from "@/components/icons/BrandIcons";

type Tone = "good" | "warning" | "danger" | "neutral" | "accent";

type KpiIcon =
  | "spend"
  | "impressions"
  | "reach"
  | "clicks"
  | "ctr"
  | "cpc"
  | "cpm"
  | "lead"
  | "purchase"
  | "cpl"
  | "roas"
  | "campaign";

type Kpi = {
  label: string;
  value: string;
  change: string;
  note: string;
  tone: Tone;
  icon: KpiIcon;
};

type TrendPoint = {
  label: string;
  spend: number;
  leads: number;
  cpl: number;
  roas: number;
};

type DecisionItem = {
  title: string;
  detail: string;
  metric: string;
  status: string;
  tone: Tone;
};

type Campaign = {
  name: string;
  objective: string;
  status: string;
  statusTone: Tone;
  budget: string;
  spend: string;
  result: string;
  cpl: string;
  ctr: string;
  cpm: string;
  roas: string;
  startDate: string;
  endDate: string;
  action: string;
  actionTone: Tone;
};

type AdSet = {
  name: string;
  campaign: string;
  audience: string;
  age: string;
  gender: string;
  location: string;
  placement: string;
  budget: string;
  spend: string;
  result: string;
  cpl: string;
  ctr: string;
  cpm: string;
  frequency: string;
  conversionRate: string;
  fatigue: string;
  status: string;
  tone: Tone;
};

type AdItem = {
  name: string;
  preview: string;
  format: string;
  headline: string;
  text: string;
  cta: string;
  spend: string;
  impressions: string;
  clicks: string;
  ctr: string;
  lead: string;
  cpl: string;
  roas: string;
  status: string;
  tone: Tone;
};

type Creative = {
  name: string;
  format: string;
  text: string;
  hook: string;
  cta: string;
  campaign: string;
  spend: string;
  ctr: string;
  cpl: string;
  conversions: string;
  roas: string;
  frequency: string;
  sevenDayChange: string;
  score: string;
  status: string;
  tone: Tone;
};

type Audience = {
  name: string;
  type: string;
  size: string;
  campaign: string;
  performance: string;
  cpl: string;
  roas: string;
  status: string;
  insight: string;
  tone: Tone;
};

type PixelMetric = {
  name: string;
  value: string;
  status: string;
  detail: string;
  tone: Tone;
};

type TestItem = {
  name: string;
  hypothesis: string;
  variationA: string;
  variationB: string;
  startDate: string;
  endDate: string;
  winner: string;
  result: string;
  status: string;
  tone: Tone;
};

type ReportItem = {
  name: string;
  content: string;
  exportTypes: string;
  status: string;
  tone: Tone;
};

type SettingItem = {
  label: string;
  value: string;
  status: string;
  tone: Tone;
};

export type MetaAdsData = {
  accountStatus: string;
  adSets: AdSet[];
  ads: AdItem[];
  alerts: DecisionItem[];
  audiences: Audience[];
  campaigns: Campaign[];
  creatives: Creative[];
  decisions: {
    bestCampaigns: DecisionItem[];
    worstCampaigns: DecisionItem[];
    bestCreatives: DecisionItem[];
    bestAudiences: DecisionItem[];
  };
  description: string;
  kpis: Kpi[];
  lastSync: string;
  pixel: PixelMetric[];
  reports: ReportItem[];
  scopeLabel: string;
  sections: string[];
  settings: SettingItem[];
  tests: TestItem[];
  title: string;
  trends: TrendPoint[];
};

const defaultSections = [
  "Genel Bakış",
  "Kampanyalar",
  "Reklam Setleri",
  "Reklamlar",
  "Kreatif Analizi",
  "Kitleler",
  "Pixel / Dönüşümler",
  "Testler",
  "Raporlar",
  "Ayarlar"
];

const kpiIcons: Record<KpiIcon, LucideIcon> = {
  campaign: Radio,
  clicks: MousePointerClick,
  cpc: Target,
  cpl: Gauge,
  cpm: Eye,
  ctr: TrendingUp,
  impressions: BarChart3,
  lead: Users,
  purchase: ShoppingCart,
  reach: Activity,
  roas: CircleDollarSign,
  spend: ReceiptText
};

function getToneClass(tone: Tone) {
  if (tone === "good") return "border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] text-[var(--accent-green)]";
  if (tone === "warning") return "border-[oklch(0.92_0.055_75)] bg-[var(--accent-amber-light)] text-[var(--accent-amber)]";
  if (tone === "danger") return "border-[oklch(0.91_0.055_25)] bg-[var(--accent-red-light)] text-[var(--accent-red)]";
  return "border-[color-mix(in_oklch,var(--channel-meta)_18%,transparent)] bg-[var(--channel-meta-light)] text-[var(--channel-meta)]";
}

function getTintClass(tone: Tone) {
  if (tone === "good") return "border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)]";
  if (tone === "warning") return "border-[oklch(0.92_0.055_75)] bg-[var(--accent-amber-light)]";
  if (tone === "danger") return "border-[oklch(0.91_0.055_25)] bg-[var(--accent-red-light)]";
  return "border-[var(--border)] bg-[var(--bg-card-soft)]";
}

function getToneDotClass(tone: Tone) {
  if (tone === "good") return "bg-[var(--accent-green)]";
  if (tone === "warning") return "bg-[var(--accent-amber)]";
  if (tone === "danger") return "bg-[var(--accent-red)]";
  return "bg-[var(--channel-meta)]";
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">{kicker}</p>
      <h2 className="mt-1 text-[20px] font-black text-[var(--text-primary)]">{title}</h2>
    </div>
  );
}

function StatusBadge({ status, tone }: { status: string; tone: Tone }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-black ${getToneClass(tone)}`}>{status}</span>;
}

function TableShell({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto rounded-[22px] border border-[var(--border)] bg-white">{children}</div>;
}

function MiniStat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-[18px] border border-[var(--border)] bg-white p-4">
      <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{label}</p>
      <p className="mt-2 text-[23px] font-black leading-none text-[var(--text-primary)]"><ValueText value={value} /></p>
      <p className="mt-2 text-xs font-bold leading-5 text-[var(--text-muted)]">{note}</p>
    </div>
  );
}

function InsightList({ icon: Icon, items }: { icon: LucideIcon; items: DecisionItem[] }) {
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
              <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.detail}</p>
              <p className="mt-3 text-sm font-black text-[var(--text-primary)]">{item.metric}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function MetaAdsView({ data }: { data: MetaAdsData }) {
  return (
    <div className="mx-auto grid max-w-[1540px] gap-6">
      <header className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] md:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] bg-[var(--channel-meta)] text-white shadow-[0_18px_34px_rgb(0_48_73_/_0.24)]">
              <MetaLogoMono aria-hidden="true" className="size-7" />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">{data.scopeLabel}</p>
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
              Son veri {data.lastSync}
            </span>
          </div>
        </div>
      </header>

      <nav aria-label="Meta sayfası bölümleri" className="flex gap-2 overflow-x-auto pb-1">
        {data.sections.map((section) => (
          <span className="shrink-0 rounded-full border border-[var(--border)] bg-white px-3.5 py-2 text-xs font-black text-[var(--text-secondary)] shadow-[var(--shadow-sm)]" key={section}>
            {section}
          </span>
        ))}
      </nav>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6">
        {data.kpis.map((item) => {
          const Icon = kpiIcons[item.icon];
          return (
            <article className="min-h-[152px] rounded-[26px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]" key={item.label}>
              <div className="flex items-start justify-between gap-3">
                <span className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.label}</span>
                <span className={`flex size-9 items-center justify-center rounded-[14px] border ${getToneClass(item.tone)}`}>
                  <Icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
                </span>
              </div>
              <p className="mt-4 text-[30px] font-black leading-none text-[var(--text-primary)]"><ValueText value={item.value} /></p>
              <div className="mt-4 flex items-center gap-2">
                <span className={`size-2.5 rounded-full ${getToneDotClass(item.tone)}`} />
                <span className="text-xs font-black text-[var(--text-primary)]">{item.change}</span>
              </div>
              <p className="mt-2 text-xs font-bold leading-5 text-[var(--text-muted)]">{item.note}</p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Genel bakış" title="Harcama, lead, CPL ve ROAS değişimi" />
          <div className="mt-5">
            <ComparisonTrendChart
              ariaLabel="Meta harcama ve lead trendi"
              color="var(--channel-meta)"
              gradientId="metaTrendArea"
              points={data.trends.map((point) => ({
                barValue: point.spend,
                label: point.label,
                lineValue: point.leads,
                topLabel: `₺${point.cpl.toLocaleString("tr-TR")}`
              }))}
            />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            <MiniStat label="Harcama" value={`₺${data.trends.at(-1)?.spend.toLocaleString("tr-TR")}`} note="Son ölçüm" />
            <MiniStat label="Lead" value={data.trends.at(-1)?.leads.toLocaleString("tr-TR") ?? "0"} note="Son ölçüm" />
            <MiniStat label="CPL" value={`₺${data.trends.at(-1)?.cpl.toLocaleString("tr-TR")}`} note="Son ölçüm" />
            <MiniStat label="ROAS" value={`${data.trends.at(-1)?.roas.toLocaleString("tr-TR")}x`} note="Son ölçüm" />
          </div>
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Karar paneli" title="En iyi ve en kötü kampanyalar" />
          <div className="mt-5 grid gap-4">
            <InsightList icon={TrendingUp} items={data.decisions.bestCampaigns} />
            <InsightList icon={AlertTriangle} items={data.decisions.worstCampaigns} />
          </div>
        </aside>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Alt özet" title="En iyi kreatifler ve hedef kitleler" />
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <InsightList icon={Sparkles} items={data.decisions.bestCreatives} />
            <InsightList icon={Users} items={data.decisions.bestAudiences} />
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Aksiyon ve uyarılar" title="Düşen performans ve bütçe riskleri" />
          <div className="mt-5">
            <InsightList icon={AlertTriangle} items={data.alerts} />
          </div>
        </section>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <SectionTitle kicker="Kampanyalar" title="Kampanya listesi ve bütçe kararları" />
        <TableShell>
          <table className="min-w-[1160px] w-full text-left text-sm">
            <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              <tr>
                <th className="px-4 py-3">Kampanya adı</th>
                <th className="px-4 py-3">Amaç</th>
                <th className="px-4 py-3">Durum</th>
                <th className="px-4 py-3">Bütçe</th>
                <th className="px-4 py-3">Harcama</th>
                <th className="px-4 py-3">Sonuç</th>
                <th className="px-4 py-3">CPL</th>
                <th className="px-4 py-3">CTR</th>
                <th className="px-4 py-3">CPM</th>
                <th className="px-4 py-3">ROAS</th>
                <th className="px-4 py-3">Tarih</th>
                <th className="px-4 py-3">Aksiyon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {data.campaigns.map((campaign) => (
                <tr className="align-top" key={campaign.name}>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.name}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{campaign.objective}</td>
                  <td className="px-4 py-4"><StatusBadge status={campaign.status} tone={campaign.statusTone} /></td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{campaign.budget}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.spend}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.result}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.cpl}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{campaign.ctr}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{campaign.cpm}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.roas}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{campaign.startDate} - {campaign.endDate}</td>
                  <td className="px-4 py-4"><StatusBadge status={campaign.action} tone={campaign.actionTone} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableShell>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <SectionTitle kicker="Reklam setleri" title="Kitle, placement, frekans ve yorgunluk analizi" />
        <TableShell>
          <table className="min-w-[1260px] w-full text-left text-sm">
            <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              <tr>
                <th className="px-4 py-3">Reklam seti</th>
                <th className="px-4 py-3">Kampanya</th>
                <th className="px-4 py-3">Hedef kitle</th>
                <th className="px-4 py-3">Yaş</th>
                <th className="px-4 py-3">Cinsiyet</th>
                <th className="px-4 py-3">Lokasyon</th>
                <th className="px-4 py-3">Placement</th>
                <th className="px-4 py-3">Bütçe</th>
                <th className="px-4 py-3">Harcama</th>
                <th className="px-4 py-3">Sonuç</th>
                <th className="px-4 py-3">CPL</th>
                <th className="px-4 py-3">CTR</th>
                <th className="px-4 py-3">Frekans</th>
                <th className="px-4 py-3">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {data.adSets.map((set) => (
                <tr className="align-top" key={set.name}>
                  <td className="px-4 py-4">
                    <p className="font-black text-[var(--text-primary)]">{set.name}</p>
                    <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">CPM {set.cpm} · CR {set.conversionRate}</p>
                  </td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{set.campaign}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{set.audience}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{set.age}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{set.gender}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{set.location}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{set.placement}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{set.budget}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{set.spend}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{set.result}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{set.cpl}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{set.ctr}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{set.frequency}</td>
                  <td className="px-4 py-4"><StatusBadge status={`${set.status} · ${set.fatigue}`} tone={set.tone} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableShell>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <SectionTitle kicker="Reklamlar" title="Kreatif önizleme ve reklam bazlı performans" />
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.ads.map((ad) => (
            <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={ad.name}>
              <div className="flex items-start gap-3">
                <span className={`flex size-14 shrink-0 items-center justify-center rounded-[18px] border ${getToneClass(ad.tone)}`}>
                  {ad.format === "Video" || ad.format === "Reels" || ad.format === "Story" ? <Video aria-hidden="true" className="size-5" strokeWidth={2.4} /> : <ImageIcon aria-hidden="true" className="size-5" strokeWidth={2.4} />}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-sm font-black text-[var(--text-primary)]">{ad.name}</h3>
                    <StatusBadge status={ad.status} tone={ad.tone} />
                  </div>
                  <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">{ad.preview} · {ad.format}</p>
                </div>
              </div>
              <p className="mt-4 text-sm font-black text-[var(--text-primary)]">{ad.headline}</p>
              <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{ad.text}</p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <MiniStat label="CTR" value={ad.ctr} note={`${ad.clicks} tık`} />
                <MiniStat label="Lead" value={ad.lead} note={ad.cpl} />
                <MiniStat label="ROAS" value={ad.roas} note={ad.spend} />
              </div>
              <p className="mt-3 text-xs font-black text-[var(--text-primary)]">CTA: {ad.cta} · Gösterim: {ad.impressions}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Kreatif analizi" title="Hook, CTA, skor ve yorgunluk" />
          <div className="mt-5 grid gap-3">
            {data.creatives.map((creative) => (
              <article className={`rounded-[22px] border p-4 ${getTintClass(creative.tone)}`} key={creative.name}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{creative.format} · {creative.campaign}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{creative.name}</h3>
                  </div>
                  <StatusBadge status={creative.status} tone={creative.tone} />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{creative.text}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-4">
                  <MiniStat label="Skor" value={creative.score} note={creative.sevenDayChange} />
                  <MiniStat label="Hook" value={creative.hook} note={creative.cta} />
                  <MiniStat label="CTR / CPL" value={`${creative.ctr} / ${creative.cpl}`} note={creative.spend} />
                  <MiniStat label="Dönüşüm" value={creative.conversions} note={`${creative.roas} · Frekans ${creative.frequency}`} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Kitleler" title="Kitle kalitesi, maliyet ve yorgunluk" />
          <div className="mt-5 grid gap-3">
            {data.audiences.map((audience) => (
              <article className={`rounded-[20px] border p-4 ${getTintClass(audience.tone)}`} key={audience.name}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{audience.type} · {audience.size}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{audience.name}</h3>
                  </div>
                  <StatusBadge status={audience.status} tone={audience.tone} />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <MiniStat label="Performans" value={audience.performance} note={audience.campaign} />
                  <MiniStat label="CPL" value={audience.cpl} note="Lead maliyeti" />
                  <MiniStat label="ROAS" value={audience.roas} note="Gelir etkisi" />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{audience.insight}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Pixel / Dönüşümler" title="Teknik durumu sade sağlık paneliyle izle" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {data.pixel.map((metric) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={metric.name}>
                <div className="flex items-start justify-between gap-3">
                  <span className={`flex size-10 items-center justify-center rounded-[14px] border ${getToneClass(metric.tone)}`}>
                    {metric.tone === "good" ? <ShieldCheck aria-hidden="true" className="size-4" strokeWidth={2.4} /> : <AlertTriangle aria-hidden="true" className="size-4" strokeWidth={2.4} />}
                  </span>
                  <StatusBadge status={metric.status} tone={metric.tone} />
                </div>
                <p className="mt-4 text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{metric.name}</p>
                <p className="mt-2 text-[24px] font-black leading-none text-[var(--text-primary)]"><ValueText value={metric.value} /></p>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{metric.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Testler" title="A/B test hipotezleri ve sonuçları" />
          <div className="mt-5 grid gap-3">
            {data.tests.map((test) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={test.name}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{test.startDate} - {test.endDate}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{test.name}</h3>
                  </div>
                  <StatusBadge status={test.status} tone={test.tone} />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">Hipotez: {test.hypothesis}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <MiniStat label="Varyasyon A" value={test.variationA} note="Kontrol" />
                  <MiniStat label="Varyasyon B" value={test.variationB} note="Test" />
                  <MiniStat label="Sonuç" value={test.result} note={`Kazanan: ${test.winner}`} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Raporlar" title="Meta performans raporları" />
          <div className="mt-5 grid gap-3">
            {data.reports.map((report) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={report.name}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-black text-[var(--text-primary)]">{report.name}</h3>
                    <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{report.content}</p>
                  </div>
                  <StatusBadge status={report.status} tone={report.tone} />
                </div>
                <p className="mt-3 text-xs font-black text-[var(--text-primary)]">Dışa aktarım: {report.exportTypes}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Ayarlar" title="Bağlantı, UTM ve izleme standardı" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {data.settings.map((setting) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={setting.label}>
                <div className="flex items-start justify-between gap-3">
                  <span className={`flex size-10 items-center justify-center rounded-[14px] border ${getToneClass(setting.tone)}`}>
                    <Settings aria-hidden="true" className="size-4" strokeWidth={2.4} />
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
    </div>
  );
}

const sharedKpis: Kpi[] = [
  { change: "+%12", icon: "spend", label: "Toplam Harcama", note: "Kontrollü artış", tone: "neutral", value: "₺184.600" },
  { change: "+%18", icon: "impressions", label: "Gösterim", note: "Feed ve Reels artışı", tone: "accent", value: "2,8M" },
  { change: "+%14", icon: "reach", label: "Erişim", note: "Benzersiz hesap", tone: "accent", value: "914K" },
  { change: "+%16", icon: "clicks", label: "Tıklama", note: "CTA tıklamaları", tone: "good", value: "28.420" },
  { change: "+0,4 puan", icon: "ctr", label: "CTR", note: "Kreatif seti etkili", tone: "good", value: "%2,84" },
  { change: "-%3", icon: "cpc", label: "CPC", note: "Tıklama maliyeti", tone: "good", value: "₺6,49" },
  { change: "+%5", icon: "cpm", label: "CPM", note: "Kitle rekabeti arttı", tone: "warning", value: "₺65" },
  { change: "+%18", icon: "lead", label: "Lead", note: "Retargeting güçlü", tone: "good", value: "642" },
  { change: "+34", icon: "purchase", label: "Satın Alma", note: "Satış kampanyaları", tone: "good", value: "126" },
  { change: "-%6", icon: "cpl", label: "CPL", note: "Hedef altında", tone: "good", value: "₺287" },
  { change: "+0,5x", icon: "roas", label: "ROAS", note: "Satış kampanyaları taşıyor", tone: "good", value: "4,2x" },
  { change: "3 riskli", icon: "campaign", label: "Aktif Kampanya", note: "2 öğrenme aşamasında", tone: "warning", value: "14" }
];

const sharedTrends: TrendPoint[] = [
  { cpl: 322, label: "1 May", leads: 58, roas: 3.4, spend: 18200 },
  { cpl: 305, label: "5 May", leads: 72, roas: 3.8, spend: 21900 },
  { cpl: 318, label: "9 May", leads: 66, roas: 3.6, spend: 21000 },
  { cpl: 292, label: "13 May", leads: 84, roas: 4.0, spend: 24500 },
  { cpl: 288, label: "17 May", leads: 91, roas: 4.1, spend: 26200 },
  { cpl: 274, label: "21 May", leads: 98, roas: 4.4, spend: 26800 },
  { cpl: 281, label: "25 May", leads: 86, roas: 4.0, spend: 24200 },
  { cpl: 287, label: "30 May", leads: 87, roas: 4.2, spend: 24900 }
];

const sharedCampaigns: Campaign[] = [
  { action: "Bütçe artır", actionTone: "good", budget: "₺58K", cpl: "₺240", cpm: "₺61", ctr: "%3,12", endDate: "31 Mayıs", name: "Lead Magnet - Ajans Analizi", objective: "Lead", result: "214 lead", roas: "4,8x", spend: "₺51,4K", startDate: "1 Mayıs", status: "Aktif", statusTone: "good" },
  { action: "Koru", actionTone: "good", budget: "₺42K", cpl: "₺309", cpm: "₺68", ctr: "%2,74", endDate: "31 Mayıs", name: "Retargeting - Teklif Hatırlatma", objective: "Satış", result: "126 lead", roas: "5,3x", spend: "₺38,9K", startDate: "4 Mayıs", status: "Aktif", statusTone: "good" },
  { action: "Durdur", actionTone: "danger", budget: "₺28K", cpl: "₺562", cpm: "₺82", ctr: "%1,14", endDate: "24 Mayıs", name: "Instagram Story - Hızlı Başvuru", objective: "Trafik", result: "39 lead", roas: "1,8x", spend: "₺21,9K", startDate: "6 Mayıs", status: "Performans düşük", statusTone: "danger" },
  { action: "Öğrenmeyi bekle", actionTone: "warning", budget: "₺36K", cpl: "₺334", cpm: "₺72", ctr: "%2,16", endDate: "2 Haziran", name: "Video İzlenme - Kurucu Mesajı", objective: "Video izlenme", result: "68 lead", roas: "3,1x", spend: "₺22,7K", startDate: "12 Mayıs", status: "Öğrenme aşamasında", statusTone: "warning" }
];

const sharedAdSets: AdSet[] = [
  { age: "25-44", audience: "Lookalike %2 - Lead", budget: "₺2.000/gün", campaign: "Lead Magnet - Ajans Analizi", conversionRate: "%8,4", cpl: "₺226", cpm: "₺58", ctr: "%3,44", fatigue: "Sağlıklı", frequency: "2,1", gender: "Tümü", location: "Türkiye", name: "LAL Lead Kalitesi", placement: "Advantage+", result: "142 lead", spend: "₺32K", status: "Aktif", tone: "good" },
  { age: "28-55", audience: "Website 180 gün", budget: "₺1.400/gün", campaign: "Retargeting - Teklif Hatırlatma", conversionRate: "%9,1", cpl: "₺248", cpm: "₺64", ctr: "%3,08", fatigue: "İzle", frequency: "4,8", gender: "Tümü", location: "İstanbul, Ankara, İzmir", name: "Retargeting Sıcak Kitle", placement: "Feed + Reels", result: "96 lead", spend: "₺23,8K", status: "Aktif", tone: "warning" },
  { age: "18-34", audience: "Soğuk ilgi alanı", budget: "₺900/gün", campaign: "Instagram Story - Hızlı Başvuru", conversionRate: "%2,2", cpl: "₺562", cpm: "₺82", ctr: "%1,14", fatigue: "Yorgun", frequency: "6,2", gender: "Tümü", location: "Türkiye", name: "Story Soğuk Kitle", placement: "Story", result: "39 lead", spend: "₺21,9K", status: "Performans düşük", tone: "danger" }
];

const sharedAds: AdItem[] = [
  { clicks: "4.820", cpl: "₺226", cta: "Ücretsiz analiz al", ctr: "%3,74", format: "Reels", headline: "Reklam bütçen nereye gidiyor?", impressions: "128K", lead: "142", name: "3 Soruda Reklam Hesabı", preview: "Video önizleme", roas: "4,9x", spend: "₺32K", status: "Kazanan", text: "Meta hesabındaki kaybı 3 soruda yakala, ücretsiz analizle netleştir.", tone: "good" },
  { clicks: "2.180", cpl: "₺281", cta: "Raporu incele", ctr: "%2,92", format: "Carousel", headline: "Ajans raporları tek panelde", impressions: "74K", lead: "78", name: "Ajans Raporu Carousel", preview: "Carousel önizleme", roas: "4,1x", spend: "₺21,9K", status: "Testte", text: "Kanal performansını, funnel'ı ve satış aksiyonlarını tek ekranda gör.", tone: "neutral" },
  { clicks: "680", cpl: "₺548", cta: "Başvur", ctr: "%1,18", format: "Story", headline: "Hemen başvur", impressions: "57K", lead: "26", name: "Story Başvuru Görseli", preview: "Story önizleme", roas: "1,7x", spend: "₺14,2K", status: "Yorgun", text: "Kısa başvuru formuyla ajans büyüme planını al.", tone: "danger" }
];

const sharedCreatives: Creative[] = [
  { campaign: "Lead Magnet - Ajans Analizi", conversions: "142 lead", cpl: "₺226", cta: "Ücretsiz analiz al", ctr: "%3,74", format: "Reels video", frequency: "2,1", hook: "Problem", name: "3 Soruda Reklam Hesabı", roas: "4,9x", score: "88/100", sevenDayChange: "+%12 son 7 gün", spend: "₺32K", status: "Kazanan kreatif", text: "Reklam bütçen nereye gidiyor? sorusuyla açılan kısa analiz videosu.", tone: "good" },
  { campaign: "Retargeting - Teklif Hatırlatma", conversions: "78 lead", cpl: "₺281", cta: "Raporu incele", ctr: "%2,92", format: "Carousel", frequency: "3,4", hook: "Sonuç", name: "Ajans Raporu Carousel", roas: "4,1x", score: "76/100", sevenDayChange: "-%2 son 7 gün", spend: "₺21,9K", status: "Testte", text: "Rapor ekranları ve karar kartları carousel akışında anlatılıyor.", tone: "neutral" },
  { campaign: "Instagram Story - Hızlı Başvuru", conversions: "26 lead", cpl: "₺548", cta: "Başvur", ctr: "%1,18", format: "Story", frequency: "6,2", hook: "Direkt teklif", name: "Story Başvuru Görseli", roas: "1,7x", score: "43/100", sevenDayChange: "-%28 son 7 gün", spend: "₺14,2K", status: "Yorgun kreatif", text: "Tek görsel story formatı eski kitlede frekans yorgunluğuna girdi.", tone: "danger" }
];

const sharedAudiences: Audience[] = [
  { campaign: "Lead Magnet", cpl: "₺226", insight: "En kaliteli leadleri getiriyor, bütçe artırımı için uygun.", name: "Lookalike %2 - Lead", performance: "Güçlü", roas: "4,9x", size: "1,8M", status: "Büyüt", tone: "good", type: "Benzer kitle" },
  { campaign: "Retargeting", cpl: "₺248", insight: "ROAS yüksek ama frekans artıyor, kreatif yenileme gerekir.", name: "Website 180 gün", performance: "İyi", roas: "5,3x", size: "84K", status: "İzle", tone: "warning", type: "Web sitesi ziyaretçileri" },
  { campaign: "Story Başvuru", cpl: "₺562", insight: "Pahalı lead getiriyor ve yorgunluk sinyali net.", name: "Soğuk ilgi alanı", performance: "Zayıf", roas: "1,8x", size: "2,4M", status: "Yeniden test", tone: "danger", type: "Soğuk kitle" },
  { campaign: "Video İzlenme", cpl: "₺334", insight: "Video izleyenler retargeting için iyi ara kitle oluşturuyor.", name: "Video %50 izleyenler", performance: "Orta", roas: "3,1x", size: "126K", status: "Besle", tone: "neutral", type: "Video izleyenler" }
];

const sharedPixel: PixelMetric[] = [
  { detail: "Pixel event akışı düzenli geliyor.", name: "Pixel Durumu", status: "Sağlıklı", tone: "good", value: "Sağlıklı" },
  { detail: "Event Match Quality orta seviyede, e-posta/telefon eşleşmesi artırılabilir.", name: "Event Eşleşmesi", status: "Orta", tone: "warning", value: "Orta" },
  { detail: "Son event akışı 12 dakika önce alındı.", name: "Son Event Tarihi", status: "Aktif", tone: "good", value: "12 dk önce" },
  { detail: "Lead event sayısı kampanya sonuçlarıyla uyumlu.", name: "Lead Event", status: "Aktif", tone: "good", value: "642" },
  { detail: "Purchase event satış kampanyalarında ölçülüyor.", name: "Purchase Event", status: "Aktif", tone: "good", value: "126" },
  { detail: "PageView event tüm landing sayfalarında var.", name: "PageView", status: "Aktif", tone: "good", value: "914K" },
  { detail: "ViewContent ürün ve hizmet sayfalarında ölçülüyor.", name: "ViewContent", status: "Aktif", tone: "good", value: "184K" },
  { detail: "E-ticaret akışında AddToCart event izleniyor.", name: "AddToCart", status: "İzleniyor", tone: "neutral", value: "2.840" },
  { detail: "Checkout event bazı mobil oturumlarda gecikiyor.", name: "InitiateCheckout", status: "Kontrol", tone: "warning", value: "1.120" },
  { detail: "Form tamamlama ve webinar kayıtları ayrı işaretleniyor.", name: "CompleteRegistration", status: "Aktif", tone: "good", value: "388" },
  { detail: "Dönüşüm takibi kampanya optimizasyonu için aktif.", name: "Dönüşüm Takibi", status: "Aktif", tone: "good", value: "Aktif" }
];

const sharedTests: TestItem[] = [
  { endDate: "14 Mayıs", hypothesis: "Video kreatif, görsel kreatiften daha ucuz lead getirir.", name: "Video vs Carousel", result: "CPL %24 düştü", startDate: "1 Mayıs", status: "Tamamlandı", tone: "good", variationA: "Carousel kreatif", variationB: "Video kreatif", winner: "Video kreatif" },
  { endDate: "20 Mayıs", hypothesis: "Ücretsiz analiz CTA'sı raporu incele CTA'sından güçlü olabilir.", name: "CTA metni testi", result: "A %11 önde", startDate: "10 Mayıs", status: "Sürüyor", tone: "warning", variationA: "Ücretsiz analiz al", variationB: "Raporu incele", winner: "Veri bekleniyor" },
  { endDate: "24 Mayıs", hypothesis: "Advantage+ placement manuel Story placement'tan daha düşük CPL üretir.", name: "Placement testi", result: "Veri toplanıyor", startDate: "12 Mayıs", status: "Veri bekleniyor", tone: "neutral", variationA: "Manuel Story", variationB: "Advantage+", winner: "Bekliyor" }
];

const sharedReports: ReportItem[] = [
  { content: "Harcama, lead, CPL, ROAS, kreatif skoru, kitle yorgunluğu ve aksiyon önerileri.", exportTypes: "PDF, Excel, Sunum özeti", name: "Haftalık Meta Performans Raporu", status: "Hazır", tone: "good" },
  { content: "Frekans, CTR düşüşü, CPL artışı ve kreatif yenileme önerisi.", exportTypes: "PDF, CSV", name: "Kreatif Yorgunluk Raporu", status: "Güncelleme bekliyor", tone: "warning" },
  { content: "Pixel event sağlığı, event eşleşmesi, lead/purchase ölçüm uyumu.", exportTypes: "PDF", name: "Pixel Sağlığı Raporu", status: "Güncel", tone: "good" }
];

const sharedSettings: SettingItem[] = [
  { label: "Ad Account", status: "Bağlı", tone: "good", value: "act_****8421" },
  { label: "Facebook Page", status: "Bağlı", tone: "good", value: "Piaq Ajans" },
  { label: "Instagram hesabı", status: "Bağlı", tone: "good", value: "@piaq.app" },
  { label: "Pixel", status: "Aktif", tone: "good", value: "Meta Pixel v21 event akışı" },
  { label: "UTM standardı", status: "Kontrol", tone: "warning", value: "2 kampanyada utm_campaign eksik" },
  { label: "Dönüşüm penceresi", status: "Aktif", tone: "neutral", value: "7 gün tıklama, 1 gün görüntüleme" },
  { label: "Token", status: "Aktif", tone: "neutral", value: "Long-lived token · 52 gün kaldı" },
  { label: "Bildirim eşiği", status: "Aktif", tone: "good", value: "CPL +%20 veya ROAS < 2,5x" }
];

const sharedDecisions = {
  bestAudiences: [
    { detail: "Lead kalitesi ve ROAS birlikte güçlü.", metric: "₺226 CPL · 4,9x ROAS", status: "Büyüt", title: "Lookalike %2 - Lead", tone: "good" as Tone },
    { detail: "Sıcak kitle satış kampanyasında yüksek ROAS üretiyor.", metric: "5,3x ROAS", status: "Koru", title: "Website 180 gün", tone: "good" as Tone }
  ],
  bestCampaigns: [
    { detail: "Hangi kampanya para harcıyor ve lead getiriyor sorusunun net cevabı.", metric: "214 lead · ₺240 CPL", status: "Bütçe artır", title: "Lead Magnet - Ajans Analizi", tone: "good" as Tone },
    { detail: "Retargeting tarafı az bütçeyle yüksek satış etkisi üretiyor.", metric: "5,3x ROAS", status: "Koru", title: "Retargeting - Teklif Hatırlatma", tone: "good" as Tone }
  ],
  bestCreatives: [
    { detail: "Problem hook'u yüksek CTR ve düşük CPL getiriyor.", metric: "88/100 kreatif skoru", status: "Kazanan", title: "3 Soruda Reklam Hesabı", tone: "good" as Tone },
    { detail: "Carousel formatı rapor ekranlarını iyi anlatıyor.", metric: "76/100 kreatif skoru", status: "Testte", title: "Ajans Raporu Carousel", tone: "neutral" as Tone }
  ],
  worstCampaigns: [
    { detail: "Story kreatif yorgunluğu ve pahalı lead kampanyayı kapatma adayı yapıyor.", metric: "₺562 CPL · %1,14 CTR", status: "Durdur", title: "Instagram Story - Hızlı Başvuru", tone: "danger" as Tone },
    { detail: "Öğrenme aşamasındaki video kampanyasında bütçe sınırlı ilerliyor.", metric: "₺334 CPL", status: "İzle", title: "Video İzlenme - Kurucu Mesajı", tone: "warning" as Tone }
  ]
};

const sharedAlerts: DecisionItem[] = [
  { detail: "CPL hedef bandın üzerinde ve CTR düşüyor.", metric: "₺562 CPL", status: "Kritik", title: "Story kampanyası kapatma adayı", tone: "danger" },
  { detail: "ROAS ve CPL iyi, günlük bütçe erken doluyor.", metric: "4,8x ROAS", status: "Fırsat", title: "Lead Magnet bütçesi artırılabilir", tone: "good" },
  { detail: "Retargeting kitlesinde frekans yükseldi, yeni kreatif gerekir.", metric: "4,8 frekans", status: "Yorgunluk", title: "Kitle yorgunluğu başladı", tone: "warning" }
];

export const agencyMetaAdsData: MetaAdsData = {
  accountStatus: "Bağlantı aktif",
  adSets: sharedAdSets,
  ads: sharedAds,
  alerts: sharedAlerts,
  audiences: sharedAudiences,
  campaigns: sharedCampaigns,
  creatives: sharedCreatives,
  decisions: sharedDecisions,
  description: "Facebook ve Instagram reklamlarında kampanya, reklam seti, reklam, kreatif, kitle, pixel, test, rapor ve ayarları tek karar panelinde izler.",
  kpis: sharedKpis,
  lastSync: "12 dk önce",
  pixel: sharedPixel,
  reports: sharedReports,
  scopeLabel: "Son 30 gün · Ajans hesabı",
  sections: defaultSections,
  settings: sharedSettings,
  tests: sharedTests,
  title: "Meta Reklam Merkezi",
  trends: sharedTrends
};

export const customerMetaAdsData: MetaAdsData = {
  ...agencyMetaAdsData,
  description: "Seçili müşterinin Facebook ve Instagram reklam performansını kampanya, reklam seti, reklam, kitle, kreatif ve pixel sağlığıyla birlikte gösterir.",
  kpis: [
    { change: "+%9", icon: "spend", label: "Toplam Harcama", note: "Bütçenin %71'i kullanıldı", tone: "neutral", value: "₺84.500" },
    { change: "+%14", icon: "impressions", label: "Gösterim", note: "Video seti taşıyor", tone: "accent", value: "1,2M" },
    { change: "+%12", icon: "reach", label: "Erişim", note: "Benzersiz hesap", tone: "accent", value: "420K" },
    { change: "+%17", icon: "clicks", label: "Tıklama", note: "CTA tıklamaları", tone: "good", value: "12.900" },
    { change: "+0,6 puan", icon: "ctr", label: "CTR", note: "Video seti güçlü", tone: "good", value: "%3,08" },
    { change: "-%5", icon: "cpc", label: "CPC", note: "Tıklama maliyeti", tone: "good", value: "₺6,55" },
    { change: "+%4", icon: "cpm", label: "CPM", note: "Normal bant", tone: "neutral", value: "₺63" },
    { change: "+%16", icon: "lead", label: "Lead", note: "Form kalitesi artıyor", tone: "good", value: "312" },
    { change: "+18", icon: "purchase", label: "Satın Alma", note: "Retargeting güçlü", tone: "good", value: "64" },
    { change: "-%8", icon: "cpl", label: "CPL", note: "Hedef altında", tone: "good", value: "₺271" },
    { change: "+0,7x", icon: "roas", label: "ROAS", note: "Retargeting güçlü", tone: "good", value: "4,6x" },
    { change: "2 riskli", icon: "campaign", label: "Aktif Kampanya", note: "1 bütçe sınırlı", tone: "warning", value: "7" }
  ],
  lastSync: "9 dk önce",
  scopeLabel: "Son 30 gün · Müşteri hesabı",
  title: "Müşteri Meta Reklam Merkezi"
};
