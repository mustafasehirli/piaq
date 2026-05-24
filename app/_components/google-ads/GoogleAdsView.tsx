import {
  Activity,
  AlertTriangle,
  BadgeCheck,
  BarChart3,
  CircleDollarSign,
  CreditCard,
  Eye,
  FileText,
  Gauge,
  KeyRound,
  MousePointerClick,
  Search,
  Settings,
  Target,
  TrendingUp,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ComparisonTrendChart } from "@/app/_components/charts/ComparisonTrendChart";
import { ValueText } from "@/app/_components/common/ProductUI";
import { GoogleLogoMono } from "@/components/icons/BrandIcons";
import { googleSections, type GoogleAdsData, type KpiIcon, type Tone, type TrendPoint } from "./data";

const kpiIcons: Record<KpiIcon, LucideIcon> = {
  spend: CircleDollarSign,
  clicks: MousePointerClick,
  impressions: Eye,
  ctr: TrendingUp,
  cpc: CreditCard,
  conversions: Target,
  rate: BarChart3,
  cpa: Gauge,
  roas: TrendingUp,
  quality: BadgeCheck,
  campaigns: Activity
};

function getToneClass(tone: Tone) {
  const toneClasses: Record<Tone, string> = {
    good: "border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] text-[var(--accent-green)]",
    warning: "border-[oklch(0.92_0.055_75)] bg-[var(--accent-amber-light)] text-[var(--accent-amber)]",
    danger: "border-[oklch(0.91_0.055_25)] bg-[var(--accent-red-light)] text-[var(--accent-red)]",
    neutral: "border-[color-mix(in_oklch,var(--channel-google)_18%,transparent)] bg-[var(--channel-google-light)] text-[var(--channel-google)]"
  };

  return toneClasses[tone];
}

function getToneDotClass(tone: Tone) {
  const dotClasses: Record<Tone, string> = {
    good: "bg-[var(--accent-green)]",
    warning: "bg-[var(--accent-amber)]",
    danger: "bg-[var(--accent-red)]",
    neutral: "bg-[var(--channel-google)]"
  };

  return dotClasses[tone];
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div>
      {kicker ? <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">{kicker}</p> : null}
      <h2 className="mt-1 text-[20px] font-black text-[var(--text-primary)]">{title}</h2>
    </div>
  );
}

function Metric({ compact = false, label, value }: { compact?: boolean; label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-[16px] border border-[color-mix(in_oklch,var(--border)_74%,transparent)] bg-white px-3 py-2">
      <p className="truncate text-[10px] font-black uppercase tracking-[0.06em] text-[var(--text-muted)]">{label}</p>
      <p className={`${compact ? "truncate text-[11px]" : "text-sm"} mt-1 font-black text-[var(--text-primary)]`}><ValueText value={value} /></p>
    </div>
  );
}

function KpiCard({ item }: { item: GoogleAdsData["kpis"][number] }) {
  const Icon = kpiIcons[item.icon];

  return (
    <article className="min-h-[152px] rounded-[26px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
      <div className="flex items-start justify-between gap-3">
        <span className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.label}</span>
        <span className={`flex size-9 items-center justify-center rounded-[14px] border ${getToneClass(item.tone)}`}>
          <Icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
        </span>
      </div>
      <p className="mt-4 text-[30px] font-black leading-none text-[var(--text-primary)]"><ValueText value={item.value} /></p>
      <div className="mt-5 flex items-center justify-between gap-3">
        <span className={`rounded-full border px-2.5 py-1 text-[11px] font-black ${getToneClass(item.tone)}`}>{item.change}</span>
        <span className="max-w-[150px] text-right text-[11px] font-bold leading-4 text-[var(--text-muted)]">{item.note}</span>
      </div>
    </article>
  );
}

function TrendChart({ points }: { points: TrendPoint[] }) {
  return (
    <ComparisonTrendChart
      ariaLabel="Google Ads harcama ve donusum trendi"
      color="var(--channel-google)"
      gradientId="googleConversionArea"
      points={points.map((point) => ({
        barValue: point.spend,
        label: point.day,
        lineValue: point.conversions,
        topLabel: `\u20BA${point.cpa.toLocaleString("tr-TR")}`
      }))}
    />
  );
}

export function GoogleAdsView({ data }: { data: GoogleAdsData }) {
  const bestCampaign = data.campaigns[0];
  const riskyCampaign = data.campaigns[data.campaigns.length - 1];

  return (
    <div className="mx-auto grid max-w-[1540px] gap-6">
      <header className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] md:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] bg-[var(--channel-google)] text-white shadow-[0_18px_34px_rgb(214_40_40_/_0.22)]">
              <GoogleLogoMono aria-hidden="true" className="size-7" />
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

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {data.kpis.map((item) => (
          <KpiCard item={item} key={item.label} />
        ))}
      </section>

      <section className="rounded-[28px] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-sm)]">
        <div className="flex flex-wrap gap-2">
          {googleSections.map((section) => (
            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-[11px] font-black text-[var(--text-secondary)]" key={section}>
              {section}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.38fr)_minmax(380px,0.62fr)]">
        <div className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
            <SectionTitle kicker="Trend" title="Harcama, dönüşüm ve CPA akışı" />
            <div className="flex flex-wrap gap-2 text-[11px] font-black text-[var(--text-secondary)]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5">
                <span className="size-2 rounded-full bg-[var(--channel-google)]" />
                Dönüşüm çizgisi
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5">
                <span className="size-2 rounded-full bg-[var(--channel-google)] opacity-30" />
                Harcama barı
              </span>
            </div>
          </div>
          <TrendChart points={data.trendPoints} />
        </div>

        <div className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Kampanya Türleri" title="Search, PMax ve diğerleri" />
          <div className="mt-5 grid gap-3">
            {data.campaignTypes.map((item) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={item.type}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-black text-[var(--text-primary)]">{item.type}</h3>
                    <p className="mt-1 text-xs font-bold text-[var(--text-muted)]">{item.spend} harcama · {item.conversions} dönüşüm</p>
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-[11px] font-black ${getToneClass(item.tone)}`}>{item.roas}</span>
                </div>
                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white">
                  <div className="h-full rounded-full bg-[var(--channel-google)]" style={{ width: item.width }} />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs font-black text-[var(--text-secondary)]">
                  <span>CPA {item.cpa}</span>
                  <span>{item.width}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]">
        <DecisionCard title="En iyi kampanya" label="Büyütülebilir" item={bestCampaign} tone="good" />
        <DecisionCard title="Riskli kampanya" label="Müdahale gerekli" item={riskyCampaign} tone="danger" />
      </section>

      <CampaignTable data={data} />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Anahtar Kelime Radarı" title="Öne çıkan uyarılar" />
          <div className="mt-5 grid gap-3">
            {data.keywordHighlights.map((alert) => (
              <AlertCard alert={alert} key={alert.title} />
            ))}
          </div>
        </div>
        <KeywordTable data={data} />
      </section>

      <SearchTermsTable data={data} />
      <AdsTable data={data} />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <LandingPagesPanel data={data} />
        <ConversionsPanel data={data} />
      </section>

      <BudgetTable data={data} />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <ReportsPanel data={data} />
        <SettingsPanel data={data} />
      </section>
    </div>
  );
}

function DecisionCard({ item, label, title, tone }: { item: GoogleAdsData["campaigns"][number]; label: string; title: string; tone: Tone }) {
  return (
    <article className={`rounded-[30px] border bg-white p-5 shadow-[var(--shadow-sm)] ${tone === "good" ? "border-[oklch(0.90_0.05_145)]" : "border-[oklch(0.91_0.055_25)]"}`}>
      <div className="flex items-start justify-between gap-4">
        <SectionTitle kicker="Karar" title={title} />
        <span className={`rounded-full border px-3 py-1.5 text-xs font-black ${getToneClass(tone)}`}>{label}</span>
      </div>
      <h3 className="mt-4 text-lg font-black text-[var(--text-primary)]">{item.name}</h3>
      <div className="mt-4 grid grid-cols-4 gap-2">
        <Metric label="Tür" value={item.type} compact />
        <Metric label="CPA" value={item.cpa} />
        <Metric label="ROAS" value={item.roas} />
        <Metric label="Aksiyon" value={item.action} compact />
      </div>
    </article>
  );
}

function AlertCard({ alert }: { alert: GoogleAdsData["keywordHighlights"][number] }) {
  return (
    <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4">
      <div className="flex items-start gap-3">
        <span className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[14px] border ${getToneClass(alert.tone)}`}>
          {alert.tone === "danger" || alert.tone === "warning" ? <AlertTriangle aria-hidden="true" className="size-4" strokeWidth={2.4} /> : <Zap aria-hidden="true" className="size-4" strokeWidth={2.4} />}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="text-sm font-black text-[var(--text-primary)]">{alert.title}</h3>
            <span className="rounded-full border border-[var(--border)] bg-white px-2.5 py-1 text-[11px] font-black text-[var(--text-primary)]">{alert.metric}</span>
          </div>
          <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{alert.description}</p>
        </div>
      </div>
    </article>
  );
}

function CampaignTable({ data }: { data: GoogleAdsData }) {
  return (
    <section className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[var(--shadow-sm)]">
      <TableHeader kicker="Kampanyalar" title="Kampanya türüne göre performans" count={`${data.campaigns.length} kampanya`} />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1320px] border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--bg-card-soft)] text-left text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              {["Kampanya", "Tür", "Durum", "Bütçe", "Harcama", "Tıklama", "CTR", "CPC", "Dönüşüm", "CPA", "ROAS", "Dönüşüm Oranı", "Aksiyon"].map((heading) => (
                <th className="px-4 py-3 first:px-5 last:px-5" key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {data.campaigns.map((campaign) => (
              <tr className="transition hover:bg-[var(--bg-card-soft)]" key={campaign.name}>
                <td className="px-5 py-4 font-black text-[var(--text-primary)]">{campaign.name}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{campaign.type}</td>
                <td className="px-4 py-4"><Badge tone={campaign.statusTone} value={campaign.status} /></td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.budget}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.spend}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.clicks}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.ctr}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.cpc}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.conversions}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.cpa}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.roas}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.conversionRate}</td>
                <td className="px-5 py-4"><Badge tone={campaign.actionTone} value={campaign.action} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function KeywordTable({ data }: { data: GoogleAdsData }) {
  return (
    <section className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[var(--shadow-sm)]">
      <TableHeader kicker="Anahtar Kelimeler" title="Niyet ve kalite skoru" count={`${data.keywords.length} kelime`} />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1160px] border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--bg-card-soft)] text-left text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              {["Anahtar kelime", "Eşleme", "Kampanya", "Reklam grubu", "Gösterim", "Tıklama", "CTR", "CPC", "Dönüşüm", "CPA", "Kalite", "Durum"].map((heading) => (
                <th className="px-4 py-3 first:px-5 last:px-5" key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {data.keywords.map((keyword) => (
              <tr className="transition hover:bg-[var(--bg-card-soft)]" key={keyword.keyword}>
                <td className="px-5 py-4 font-black text-[var(--text-primary)]">{keyword.keyword}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{keyword.matchType}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{keyword.campaign}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{keyword.adGroup}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{keyword.impressions}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{keyword.clicks}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{keyword.ctr}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{keyword.cpc}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{keyword.conversions}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{keyword.cpa}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{keyword.qualityScore}</td>
                <td className="px-5 py-4"><Badge tone={keyword.tone} value={keyword.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function SearchTermsTable({ data }: { data: GoogleAdsData }) {
  return (
    <section className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[var(--shadow-sm)]">
      <TableHeader kicker="Arama Terimleri" title="Bütçeyi koruyan sorgu kontrolü" count="Negatif adaylar ve fırsatlar" icon={Search} />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1080px] border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--bg-card-soft)] text-left text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              {["Arama terimi", "Eşleşen kelime", "Kampanya", "Tıklama", "Harcama", "Dönüşüm", "CPA", "Durum", "Aksiyon"].map((heading) => (
                <th className="px-4 py-3 first:px-5 last:px-5" key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {data.searchTerms.map((term) => (
              <tr className="transition hover:bg-[var(--bg-card-soft)]" key={term.term}>
                <td className="px-5 py-4 font-black text-[var(--text-primary)]">{term.term}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{term.matchedKeyword}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{term.campaign}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{term.clicks}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{term.spend}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{term.conversions}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{term.cpa}</td>
                <td className="px-4 py-4"><Badge tone={term.tone} value={term.status} /></td>
                <td className="px-5 py-4"><Badge tone={term.tone} value={term.action} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function AdsTable({ data }: { data: GoogleAdsData }) {
  return (
    <section className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[var(--shadow-sm)]">
      <TableHeader kicker="Reklamlar" title="Reklam metni ve varlık performansı" count="RSA kombinasyonları" icon={FileText} />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1240px] border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--bg-card-soft)] text-left text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              {["Reklam", "Başlıklar", "Açıklamalar", "Tür", "Kampanya", "Gösterim", "Tıklama", "CTR", "Dönüşüm", "CPA", "Durum", "RSA İçgörü"].map((heading) => (
                <th className="px-4 py-3 first:px-5 last:px-5" key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {data.ads.map((ad) => (
              <tr className="transition hover:bg-[var(--bg-card-soft)]" key={ad.name}>
                <td className="px-5 py-4 font-black text-[var(--text-primary)]">{ad.name}</td>
                <td className="max-w-[230px] px-4 py-4 font-bold text-[var(--text-secondary)]">{ad.headlines}</td>
                <td className="max-w-[260px] px-4 py-4 font-bold text-[var(--text-secondary)]">{ad.descriptions}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{ad.type}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{ad.campaign}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{ad.impressions}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{ad.clicks}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{ad.ctr}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{ad.conversions}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{ad.cpa}</td>
                <td className="px-4 py-4"><Badge tone={ad.tone} value={ad.status} /></td>
                <td className="max-w-[240px] px-5 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{ad.rsaInsight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function LandingPagesPanel({ data }: { data: GoogleAdsData }) {
  return (
    <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
      <SectionTitle kicker="Landing Page Analizi" title="Tıklama sonrası dönüşüm sağlığı" />
      <div className="mt-5 grid gap-3">
        {data.landingPages.map((page) => (
          <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={page.url}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-black text-[var(--text-primary)]">{page.url}</h3>
                <p className="mt-1 text-xs font-bold text-[var(--text-muted)]">Landing Page Skoru: {page.score}/100</p>
              </div>
              <Badge tone={page.tone} value={`${page.score}/100`} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <Metric label="Tıklama" value={page.clicks} />
              <Metric label="Dönüşüm" value={page.conversions} />
              <Metric label="Dönüşüm Oranı" value={page.conversionRate} />
              <Metric label="CPA" value={page.cpa} />
              <Metric label="Hız" value={page.speed} />
              <Metric label="Hemen çıkma" value={page.bounceRate} />
              <Metric label="Form oranı" value={page.formRate} />
              <Metric label="Mesaj uyumu" value={page.tone === "good" ? "Güçlü" : page.tone === "warning" ? "Orta" : "Zayıf"} compact />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ConversionsPanel({ data }: { data: GoogleAdsData }) {
  return (
    <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
      <SectionTitle kicker="Dönüşümler" title="Hedef ve maliyet takibi" />
      <div className="mt-5 grid gap-3">
        {data.conversions.map((conversion) => (
          <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={conversion.name}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-black text-[var(--text-primary)]">{conversion.name}</h3>
                <p className="mt-1 text-xs font-bold text-[var(--text-muted)]">{conversion.source} · son dönüşüm {conversion.lastConversion}</p>
              </div>
              <Badge tone={conversion.tone} value={conversion.status} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
              <Metric label="Sayı" value={conversion.count} />
              <Metric label="Değer" value={conversion.value} />
              <Metric label="Maliyet" value={conversion.cost} />
              <Metric label="CPA" value={conversion.cpa} />
              <Metric label="ROAS" value={conversion.roas} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BudgetTable({ data }: { data: GoogleAdsData }) {
  return (
    <section className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[var(--shadow-sm)]">
      <TableHeader kicker="Bütçe ve Teklifler" title="Bütçe kontrol merkezi" count="Teklif stratejileri" icon={CreditCard} />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1040px] border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--bg-card-soft)] text-left text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              {["Kampanya", "Günlük bütçe", "Aylık harcama", "Kalan bütçe", "Teklif stratejisi", "CPA", "ROAS", "Bütçe durumu"].map((heading) => (
                <th className="px-4 py-3 first:px-5 last:px-5" key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {data.budgetBids.map((row) => (
              <tr className="transition hover:bg-[var(--bg-card-soft)]" key={row.campaign}>
                <td className="px-5 py-4 font-black text-[var(--text-primary)]">{row.campaign}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{row.dailyBudget}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{row.monthlySpend}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{row.remainingBudget}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{row.bidStrategy}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{row.cpa}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{row.roas}</td>
                <td className="px-5 py-4"><Badge tone={row.tone} value={row.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ReportsPanel({ data }: { data: GoogleAdsData }) {
  return (
    <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
      <SectionTitle kicker="Raporlar" title="Google rapor takip alanı" />
      <div className="mt-5 grid gap-3">
        {data.reports.map((report) => (
          <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={report.name}>
            <div className="flex items-start gap-3">
              <span className={`flex size-10 shrink-0 items-center justify-center rounded-[14px] border ${getToneClass(report.tone)}`}>
                <FileText aria-hidden="true" className="size-4" strokeWidth={2.4} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-sm font-black text-[var(--text-primary)]">{report.name}</h3>
                  <Badge tone={report.tone} value={report.status} />
                </div>
                <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{report.scope}</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  <Metric label="Sahip" value={report.owner} compact />
                  <Metric label="Periyot" value={report.cadence} compact />
                  <Metric label="Son gönderim" value={report.lastSent} compact />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SettingsPanel({ data }: { data: GoogleAdsData }) {
  return (
    <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <SectionTitle kicker="Ayarlar" title="Google bağlantı ve izleme ayarları" />
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-xs font-black text-[var(--text-secondary)]">
          <Settings aria-hidden="true" className="size-4" strokeWidth={2.4} />
          Mock bağlantı durumu
        </span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {data.settings.map((setting) => (
          <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={setting.label}>
            <div className="flex items-center justify-between gap-3">
              <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{setting.label}</p>
              <span className={`size-2.5 rounded-full ${getToneDotClass(setting.tone)}`} />
            </div>
            <p className="mt-3 text-lg font-black text-[var(--text-primary)]">{setting.value}</p>
            <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{setting.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TableHeader({ count, icon: Icon = KeyRound, kicker, title }: { count: string; icon?: LucideIcon; kicker: string; title: string }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--border)] px-5 py-5">
      <SectionTitle kicker={kicker} title={title} />
      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-xs font-black text-[var(--text-secondary)]">
        <Icon aria-hidden="true" className="size-4" strokeWidth={2.3} />
        {count}
      </span>
    </div>
  );
}

function Badge({ tone, value }: { tone: Tone; value: string }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-black ${getToneClass(tone)}`}>{value}</span>;
}
