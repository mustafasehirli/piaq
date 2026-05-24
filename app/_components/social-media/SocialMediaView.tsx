import {
  Activity,
  BadgeCheck,
  BarChart3,
  Download,
  Eye,
  FileText,
  Globe2,
  Hash,
  Heart,
  Image as ImageIcon,
  Lightbulb,
  MousePointerClick,
  Settings,
  Sparkles,
  UserPlus,
  Users,
  Video
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ComparisonTrendChart } from "@/app/_components/charts/ComparisonTrendChart";
import { ValueText } from "@/app/_components/common/ProductUI";

type Tone = "good" | "warning" | "danger" | "neutral" | "accent";

type KpiIcon =
  | "followers"
  | "growth"
  | "engagement"
  | "engagementRate"
  | "reach"
  | "impressions"
  | "profile"
  | "clicks"
  | "bestContent"
  | "posts";

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
  followers: number;
  engagement: number;
};

type EngagementSlice = {
  label: string;
  value: string;
  count: string;
  width: string;
  tone: Tone;
};

type InsightItem = {
  title: string;
  detail: string;
  metric: string;
  status: string;
  tone: Tone;
};

type PerformanceBlock = {
  title: string;
  metric: string;
  detail: string;
  trend: string;
  tone: Tone;
};

type ContentItem = {
  name: string;
  type: string;
  date: string;
  time: string;
  platform: string;
  reach: string;
  likes: string;
  comments: string;
  shares: string;
  saves: string;
  engagementRate: string;
  views: string;
  score: string;
  caption: string;
  category: string;
  theme: string;
  hook: string;
  cta: string;
  series: string;
  hashtags: string;
  note: string;
  tone: Tone;
};

type Competitor = {
  name: string;
  handle: string;
  sector: string;
  note: string;
  followers: string;
  growth: string;
  avgEngagement: string;
  weeklyPosts: string;
  strongestFormat: string;
  lastPost: string;
  insight: string;
  tone: Tone;
};

type PlanItem = {
  title: string;
  platform: string;
  type: string;
  category: string;
  purpose: string;
  date: string;
  time: string;
  owner: string;
  status: string;
  brief: string;
  caption: string;
  cta: string;
  asset: string;
  hashtags: string;
  tone: Tone;
};

type KanbanColumn = {
  status: string;
  items: string[];
  tone: Tone;
};

type IdeaItem = {
  title: string;
  audience: string;
  type: string;
  purpose: string;
  message: string;
  priority: string;
  status: string;
  hook: string;
  opening: string;
  cta: string;
  series: string;
  pillar: string;
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

type SocialMediaData = {
  accountStatus: string;
  alerts: InsightItem[];
  competitors: Competitor[];
  content: ContentItem[];
  description: string;
  engagement: EngagementSlice[];
  ideas: IdeaItem[];
  insights: InsightItem[];
  kanban: KanbanColumn[];
  kpis: Kpi[];
  lastSync: string;
  performance: PerformanceBlock[];
  plan: PlanItem[];
  reports: ReportItem[];
  scopeLabel: string;
  settings: SettingItem[];
  title: string;
  trends: TrendPoint[];
};

const SOCIAL_ACCENT = "oklch(0.62 0.13 210)";

const kpiIcons: Record<KpiIcon, LucideIcon> = {
  bestContent: Sparkles,
  clicks: MousePointerClick,
  engagement: Heart,
  engagementRate: BarChart3,
  followers: Users,
  growth: UserPlus,
  impressions: Eye,
  posts: FileText,
  profile: Globe2,
  reach: Activity
};

function getToneClass(tone: Tone) {
  if (tone === "good") return "border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] text-[var(--accent-green)]";
  if (tone === "warning") return "border-[oklch(0.92_0.055_75)] bg-[var(--accent-amber-light)] text-[var(--accent-amber)]";
  if (tone === "danger") return "border-[oklch(0.91_0.055_25)] bg-[var(--accent-red-light)] text-[var(--accent-red)]";
  if (tone === "accent") return "border-[color-mix(in_oklch,var(--channel-social)_24%,white)] bg-[var(--channel-social-light)] text-[var(--channel-social)]";
  return "border-[var(--border)] bg-white text-[var(--text-secondary)]";
}

function getTintClass(tone: Tone) {
  if (tone === "good") return "border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)]";
  if (tone === "warning") return "border-[oklch(0.92_0.055_75)] bg-[var(--accent-amber-light)]";
  if (tone === "danger") return "border-[oklch(0.91_0.055_25)] bg-[var(--accent-red-light)]";
  if (tone === "accent") return "border-[color-mix(in_oklch,var(--channel-social)_24%,white)] bg-[var(--channel-social-light)]";
  return "border-[var(--border)] bg-[var(--bg-card-soft)]";
}

function getToneDotClass(tone: Tone) {
  if (tone === "good") return "bg-[var(--accent-green)]";
  if (tone === "warning") return "bg-[var(--accent-amber)]";
  if (tone === "danger") return "bg-[var(--accent-red)]";
  if (tone === "accent") return "bg-[var(--channel-social)]";
  return "bg-[var(--text-muted)]";
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
      <p className="mt-2 text-[24px] font-black leading-none text-[var(--text-primary)]"><ValueText value={value} /></p>
      <p className="mt-2 text-xs font-bold leading-5 text-[var(--text-muted)]">{note}</p>
    </div>
  );
}

function InsightList({ icon: Icon, items }: { icon: LucideIcon; items: InsightItem[] }) {
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

export function SocialMediaView({ data }: { data: SocialMediaData }) {
  return (
    <div className="mx-auto grid max-w-[1540px] gap-6">
      <header className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] md:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <span
              className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] text-white shadow-[0_18px_34px_oklch(0.18_0.018_80_/_0.16)]"
              style={{ background: SOCIAL_ACCENT }}
            >
              <Hash aria-hidden="true" className="size-7" strokeWidth={2.4} />
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
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-black text-white">
              <FileText aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Yeni içerik
            </span>
          </div>
        </div>
      </header>

      <nav aria-label="Sosyal medya sayfası bölümleri" className="flex gap-2 overflow-x-auto pb-1">
        {["Genel Bakış", "Performans Analizi", "İçerik Analizi", "Rakipler", "İçerik Planı", "İçerik Fikirleri", "Raporlar", "Ayarlar"].map((item) => (
          <span className="shrink-0 rounded-full border border-[var(--border)] bg-white px-3.5 py-2 text-xs font-black text-[var(--text-secondary)] shadow-[var(--shadow-sm)]" key={item}>
            {item}
          </span>
        ))}
      </nav>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {data.kpis.map((item) => {
          const Icon = kpiIcons[item.icon];
          return (
            <article className="min-h-[154px] rounded-[26px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]" key={item.label}>
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
          <SectionTitle kicker="Genel bakış" title="Takipçi büyümesi ve etkileşim trendi" />
          <div className="mt-5">
            <ComparisonTrendChart
              ariaLabel="Sosyal medya takipçi ve etkileşim trendi"
              color="var(--channel-social)"
              gradientId="socialTrendArea"
              points={data.trends.map((point) => ({
                barValue: point.followers,
                label: point.label,
                lineValue: point.engagement,
                topLabel: point.engagement.toLocaleString("tr-TR")
              }))}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Son 30 gün", "Son 90 gün", "Instagram", "TikTok", "LinkedIn", "Organik", "Sponsorlu", "Kampanya etiketi"].map((filter) => (
              <span className="rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-[11px] font-black text-[var(--text-secondary)]" key={filter}>{filter}</span>
            ))}
          </div>
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Etkileşim dağılımı" title="Beğeni, yorum, paylaşım, kaydetme" />
          <div className="mt-5 grid gap-3">
            {data.engagement.map((slice) => (
              <article className={`rounded-[18px] border p-4 ${getTintClass(slice.tone)}`} key={slice.label}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-black text-[var(--text-primary)]">{slice.label}</h3>
                    <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">{slice.count}</p>
                  </div>
                  <StatusBadge status={slice.value} tone={slice.tone} />
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white shadow-[inset_0_0_0_1px_var(--border)]">
                  <div className="h-full rounded-full bg-[var(--channel-social)]" style={{ width: slice.width }} />
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Hızlı özet" title="En iyi içerik sinyalleri" />
          <div className="mt-5">
            <InsightList icon={Sparkles} items={data.insights} />
          </div>
        </section>
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] xl:col-span-2">
          <SectionTitle kicker="Performans analizi" title="Takipçi, etkileşim, erişim ve trafik" />
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {data.performance.map((item) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={item.title}>
                <div className="flex items-start justify-between gap-3">
                  <span className={`size-2.5 rounded-full ${getToneDotClass(item.tone)}`} />
                  <StatusBadge status={item.trend} tone={item.tone} />
                </div>
                <p className="mt-4 text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.title}</p>
                <p className="mt-2 text-[26px] font-black leading-none text-[var(--text-primary)]">{item.metric}</p>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4">
            <p className="text-[11px] font-black uppercase tracking-[0.1em] text-[var(--text-muted)]">Özet yorum</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[var(--text-secondary)]">
              Son 30 günde büyüme Reels ve eğitici carousel içeriklerinden geldi. Tek görsel postlarda erişim zayıf, en iyi paylaşım günleri Salı ve Perşembe, en verimli saat aralığı 20:00-22:00.
            </p>
          </div>
        </section>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle kicker="İçerik analizi" title="İçerik listesi ve detay sinyalleri" />
          <div className="flex flex-wrap gap-2">
            {["Reels", "Carousel", "Story", "Tek görsel", "Video", "Kampanyalı", "Organik"].map((filter) => (
              <span className="rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-[11px] font-black text-[var(--text-secondary)]" key={filter}>{filter}</span>
            ))}
          </div>
        </div>
        <TableShell>
          <table className="min-w-[1240px] w-full text-left text-sm">
            <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              <tr>
                <th className="px-4 py-3">İçerik adı</th>
                <th className="px-4 py-3">Türü</th>
                <th className="px-4 py-3">Yayın</th>
                <th className="px-4 py-3">Platform</th>
                <th className="px-4 py-3">Erişim</th>
                <th className="px-4 py-3">Beğeni</th>
                <th className="px-4 py-3">Yorum</th>
                <th className="px-4 py-3">Paylaşım</th>
                <th className="px-4 py-3">Kaydetme</th>
                <th className="px-4 py-3">Etkileşim</th>
                <th className="px-4 py-3">Görüntülenme</th>
                <th className="px-4 py-3">Skor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {data.content.map((content) => (
                <tr className="align-top" key={`${content.name}-${content.date}`}>
                  <td className="px-4 py-4">
                    <p className="font-black text-[var(--text-primary)]">{content.name}</p>
                    <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">{content.category} · {content.theme}</p>
                  </td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{content.type}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{content.date} · {content.time}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{content.platform}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{content.reach}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{content.likes}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{content.comments}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{content.shares}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{content.saves}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{content.engagementRate}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{content.views}</td>
                  <td className="px-4 py-4"><StatusBadge status={content.score} tone={content.tone} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableShell>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.content.slice(0, 3).map((content) => (
            <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={`${content.name}-detail`}>
              <div className="flex items-start gap-3">
                <span className={`flex size-12 shrink-0 items-center justify-center rounded-[16px] border ${getToneClass(content.tone)}`}>
                  {content.type === "Reels" || content.type === "Video" ? <Video aria-hidden="true" className="size-5" strokeWidth={2.4} /> : <ImageIcon aria-hidden="true" className="size-5" strokeWidth={2.4} />}
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-black text-[var(--text-primary)]">{content.name}</h3>
                  <p className="mt-1 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{content.caption}</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <MiniStat label="Hook" value={content.hook} note={content.series} />
                <MiniStat label="CTA" value={content.cta} note={content.hashtags} />
              </div>
              <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{content.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Rakipler" title="Rakip listesi ve karşılaştırma" />
          <TableShell>
            <table className="min-w-[900px] w-full text-left text-sm">
              <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
                <tr>
                  <th className="px-4 py-3">Rakip</th>
                  <th className="px-4 py-3">Sektör</th>
                  <th className="px-4 py-3">Takipçi</th>
                  <th className="px-4 py-3">Büyüme</th>
                  <th className="px-4 py-3">Ort. Etkileşim</th>
                  <th className="px-4 py-3">Haftalık İçerik</th>
                  <th className="px-4 py-3">Güçlü Format</th>
                  <th className="px-4 py-3">Son Paylaşım</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {data.competitors.map((competitor) => (
                  <tr className="align-top" key={competitor.name}>
                    <td className="px-4 py-4">
                      <p className="font-black text-[var(--text-primary)]">{competitor.name}</p>
                      <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">{competitor.handle}</p>
                    </td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{competitor.sector}</td>
                    <td className="px-4 py-4 font-black text-[var(--text-primary)]">{competitor.followers}</td>
                    <td className="px-4 py-4"><StatusBadge status={competitor.growth} tone={competitor.tone} /></td>
                    <td className="px-4 py-4 font-black text-[var(--text-primary)]">{competitor.avgEngagement}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{competitor.weeklyPosts}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{competitor.strongestFormat}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{competitor.lastPost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableShell>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Rakip içgörüleri" title="Tema, sıklık ve format fırsatları" />
          <div className="mt-5 grid gap-3">
            {data.competitors.map((competitor) => (
              <article className={`rounded-[20px] border p-4 ${getTintClass(competitor.tone)}`} key={`${competitor.name}-insight`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-black text-[var(--text-primary)]">{competitor.name}</h3>
                    <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">{competitor.note}</p>
                  </div>
                  <StatusBadge status={competitor.strongestFormat} tone={competitor.tone} />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{competitor.insight}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle kicker="İçerik planı" title="Takvim, liste ve kanban görünümü" />
            <div className="flex flex-wrap gap-2">
              {["Yeni içerik ekle", "Takvime sürükle", "Kopyala", "Öncelik ver", "Taslağa al", "Yayınlandı işaretle"].map((action) => (
                <span className="rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-[11px] font-black text-[var(--text-secondary)]" key={action}>{action}</span>
              ))}
            </div>
          </div>
          <div className="mt-5 grid gap-3">
            {data.plan.map((item) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={item.title}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.platform} · {item.type} · {item.category}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{item.title}</h3>
                  </div>
                  <StatusBadge status={item.status} tone={item.tone} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <MiniStat label="Yayın" value={item.date} note={item.time} />
                  <MiniStat label="Sorumlu" value={item.owner} note={item.purpose} />
                  <MiniStat label="CTA" value={item.cta} note={item.asset} />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.brief}</p>
                <p className="mt-2 text-xs font-bold leading-5 text-[var(--text-muted)]">{item.caption} · {item.hashtags}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Kanban" title="Duruma göre içerik yönetimi" />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {data.kanban.map((column) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={column.status}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-black text-[var(--text-primary)]">{column.status}</h3>
                  <StatusBadge status={`${column.items.length} içerik`} tone={column.tone} />
                </div>
                <div className="mt-3 grid gap-2">
                  {column.items.map((item) => (
                    <div className="rounded-[14px] border border-[var(--border)] bg-white px-3 py-2 text-xs font-black text-[var(--text-secondary)]" key={item}>{item}</div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <SectionTitle kicker="İçerik fikirleri" title="Fikir havuzu, kategori ve seri yapısı" />
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.ideas.map((idea) => (
            <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={idea.title}>
              <div className="flex items-start justify-between gap-3">
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-[14px] border ${getToneClass(idea.tone)}`}>
                  <Lightbulb aria-hidden="true" className="size-4" strokeWidth={2.4} />
                </span>
                <StatusBadge status={idea.priority} tone={idea.tone} />
              </div>
              <p className="mt-4 text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{idea.audience} · {idea.type}</p>
              <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{idea.title}</h3>
              <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{idea.message}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <MiniStat label="Hook" value={idea.hook} note={idea.opening} />
                <MiniStat label="CTA" value={idea.cta} note={idea.series} />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[idea.purpose, idea.status, idea.pillar].map((tag) => (
                  <span className="rounded-full border border-[var(--border)] bg-white px-2.5 py-1 text-[11px] font-black text-[var(--text-secondary)]" key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Raporlar" title="Yönetim ve dışa aktarım raporları" />
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
                <p className="mt-3 inline-flex items-center gap-2 text-xs font-black text-[var(--text-primary)]">
                  <Download aria-hidden="true" className="size-3.5" strokeWidth={2.4} />
                  {report.exportTypes}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Ayarlar" title="Platform, uyarı ve workflow tercihleri" />
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

      <section className="relative overflow-hidden rounded-[30px] border border-[oklch(1_0_0_/_0.10)] bg-[linear-gradient(145deg,oklch(0.18_0.016_80),oklch(0.11_0.014_80)_62%,oklch(0.24_0.07_210))] p-5 text-white shadow-[var(--shadow-lg)] md:p-6">
        <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-black text-white/70">
              <Sparkles aria-hidden="true" className="size-3.5 text-[oklch(0.80_0.12_210)]" strokeWidth={2.4} />
              AI içerik yorumu
            </div>
            <h2 className="mt-4 text-[22px] font-black tracking-tight text-white">Reels büyüyor, carousel zayıflıyor</h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-white/62">
              Sistem, kısa Reels videolarda erişim ve takipçi kazanımının yükseldiğini, tek görsel ve uzun carousel içeriklerde etkileşim oranının düştüğünü işaretliyor. Sonraki plan haftasında eğitici Reels ve case study odaklı carousel dengesi kurulmalı.
            </p>
          </div>
          <span className="inline-flex h-11 shrink-0 items-center justify-center rounded-2xl bg-[#f0533a] px-4 text-sm font-black text-white shadow-[0_14px_28px_rgb(240_83_58_/_0.24)]">
            İçerik aksiyonlarını aç
          </span>
        </div>
      </section>
    </div>
  );
}

const sharedKpis: Kpi[] = [
  { change: "+1.240", icon: "followers", label: "Toplam Takipçi", note: "Instagram, TikTok, LinkedIn", tone: "good", value: "84.200" },
  { change: "+%12", icon: "growth", label: "Takipçi Artışı", note: "Bu ay kazanılan takipçi", tone: "good", value: "4.860" },
  { change: "+%18", icon: "engagement", label: "Toplam Etkileşim", note: "Beğeni, yorum, paylaşım, kaydetme", tone: "good", value: "38.420" },
  { change: "+0,8 puan", icon: "engagementRate", label: "Etkileşim Oranı", note: "İçerik başına ortalama", tone: "good", value: "%5,8" },
  { change: "+%21", icon: "reach", label: "Toplam Erişim", note: "Benzersiz hesap", tone: "accent", value: "612K" },
  { change: "+%16", icon: "impressions", label: "Toplam Gösterim", note: "Organik + sponsorlu", tone: "accent", value: "1,8M" },
  { change: "+%9", icon: "profile", label: "Profil Ziyaretleri", note: "Bio ve hesap ziyareti", tone: "good", value: "18.900" },
  { change: "-%4", icon: "clicks", label: "Link Tıklamaları", note: "Bio ve CTA tıklamaları", tone: "warning", value: "2.140" },
  { change: "Reels", icon: "bestContent", label: "En İyi İçerik", note: "Kısa video formatı", tone: "good", value: "%8,9" },
  { change: "36 içerik", icon: "posts", label: "Yayın Sayısı", note: "Son 30 gün", tone: "neutral", value: "36" }
];

const sharedTrends: TrendPoint[] = [
  { engagement: 3100, followers: 71000, label: "1 May" },
  { engagement: 3600, followers: 72400, label: "5 May" },
  { engagement: 3350, followers: 73100, label: "9 May" },
  { engagement: 4200, followers: 74800, label: "13 May" },
  { engagement: 3900, followers: 76200, label: "17 May" },
  { engagement: 4800, followers: 78600, label: "21 May" },
  { engagement: 4650, followers: 81200, label: "25 May" },
  { engagement: 5200, followers: 84200, label: "30 May" }
];

const sharedContent: ContentItem[] = [
  {
    caption: "Reklam bütçesinin boşa gitmesini engelleyen 3 kontrol noktası.",
    category: "Eğitici",
    comments: "184",
    cta: "Kaydet",
    date: "13 Mayıs",
    engagementRate: "%8,9",
    hashtags: "#reklam #ajans #performans",
    hook: "Problem",
    likes: "3.420",
    name: "Bütçen Boşa Gidiyor Olabilir",
    note: "İlk 3 saniyede problem net, kaydetme oranı yüksek ve takipçi kazanımı güçlü.",
    platform: "Instagram",
    reach: "84K",
    saves: "1.120",
    score: "92/100",
    series: "Reklam Kontrol Serisi",
    shares: "620",
    theme: "Performans pazarlama",
    time: "20:30",
    tone: "good",
    type: "Reels",
    views: "126K"
  },
  {
    caption: "Bir müşteri hesabında lead kalitesini nasıl artırdık?",
    category: "Vaka analizi",
    comments: "96",
    cta: "DM yaz",
    date: "10 Mayıs",
    engagementRate: "%6,4",
    hashtags: "#casestudy #lead",
    hook: "Sonuç",
    likes: "1.880",
    name: "Lead Kalitesi Case Study",
    note: "Case study formatı yorum oranını artırdı, CTA DM dönüşü getirdi.",
    platform: "LinkedIn",
    reach: "42K",
    saves: "420",
    score: "84/100",
    series: "Müşteri Sonuçları",
    shares: "210",
    theme: "Referans",
    time: "11:00",
    tone: "good",
    type: "Carousel",
    views: "52K"
  },
  {
    caption: "Ajansların raporlamada yaptığı en yaygın hata.",
    category: "Soru-cevap",
    comments: "42",
    cta: "Blog oku",
    date: "8 Mayıs",
    engagementRate: "%3,1",
    hashtags: "#raporlama #crm",
    hook: "Soru",
    likes: "620",
    name: "Raporlama Hatası",
    note: "Tek görsel formatı erişim aldı ama tıklama ve kaydetme zayıf kaldı.",
    platform: "Instagram",
    reach: "31K",
    saves: "88",
    score: "58/100",
    series: "Ajans Notları",
    shares: "74",
    theme: "Operasyon",
    time: "17:30",
    tone: "warning",
    type: "Tek görsel",
    views: "31K"
  },
  {
    caption: "Haftalık operasyon planı ve içerik üretim akışı.",
    category: "Marka otoritesi",
    comments: "28",
    cta: "Takip et",
    date: "6 Mayıs",
    engagementRate: "%2,4",
    hashtags: "#operasyon #planlama",
    hook: "Liste",
    likes: "410",
    name: "Haftalık Plan Şablonu",
    note: "Uzun caption mobilde zayıf performans verdi.",
    platform: "TikTok",
    reach: "26K",
    saves: "64",
    score: "44/100",
    series: "Operasyon Şablonları",
    shares: "38",
    theme: "Planlama",
    time: "15:00",
    tone: "danger",
    type: "Video",
    views: "39K"
  }
];

const sharedCompetitors: Competitor[] = [
  { avgEngagement: "%3,8", followers: "42K", growth: "+%4", handle: "@rakipajans_a", insight: "Eğitici carousel içerikleri sık kullanıyor, kısa Reels videoları daha yüksek erişim alıyor.", lastPost: "Dün", name: "Rakip A", note: "Performans pazarlama ajansı", sector: "Ajans", strongestFormat: "Reels", tone: "good", weeklyPosts: "5" },
  { avgEngagement: "%6,2", followers: "18K", growth: "+%9", handle: "@growthstudio_b", insight: "Yorum oranı yüksek, soru-cevap ve kurucu yüzü içerikleri güçlü.", lastPost: "Bugün", name: "Rakip B", note: "Growth studio", sector: "Danışmanlık", strongestFormat: "Carousel", tone: "good", weeklyPosts: "7" },
  { avgEngagement: "%2,4", followers: "61K", growth: "+%1", handle: "@performans_c", insight: "Haftada 6 paylaşım yapıyor ama tek görsel ağırlığı etkileşimi aşağı çekiyor.", lastPost: "3 gün önce", name: "Rakip C", note: "Reklam teknolojisi", sector: "SaaS", strongestFormat: "Tek görsel", tone: "warning", weeklyPosts: "6" }
];

const sharedPlan: PlanItem[] = [
  { asset: "Video dosyası bekliyor", brief: "Reklam hesabı kontrol listesini 30 saniyelik Reels olarak anlat.", caption: "Bütçe boşa gitmeden önce bu 3 metriği kontrol et.", category: "Eğitici", cta: "Kaydet", date: "16 Mayıs", hashtags: "#reklam #performans", owner: "İrem", platform: "Instagram", purpose: "Kaydetme artırma", status: "Tasarımda", time: "20:30", title: "3 Reklam Kontrolü", tone: "warning", type: "Reels" },
  { asset: "Carousel tasarımı hazır", brief: "Lead kalitesi vaka analizini 6 slaytlık carousel olarak yayınla.", caption: "Daha az lead, daha iyi satış görüşmesi mümkün.", category: "Vaka analizi", cta: "DM yaz", date: "18 Mayıs", hashtags: "#lead #casestudy", owner: "Mert", platform: "LinkedIn", purpose: "Satış konuşması", status: "Onay Bekliyor", time: "11:00", title: "Lead Kalitesi Vaka Analizi", tone: "warning", type: "Carousel" },
  { asset: "Kısa video hazır", brief: "Ajans raporlamasında tek ekrandan karar alma temasını göster.", caption: "Rapor değil, karar ekranı.", category: "Marka otoritesi", cta: "Demo talep et", date: "20 Mayıs", hashtags: "#ajans #saas", owner: "Ayşe", platform: "TikTok", purpose: "Demo talebi", status: "Planlandı", time: "19:00", title: "Rapor Değil Karar Ekranı", tone: "good", type: "Video" }
];

const sharedIdeas: IdeaItem[] = [
  { audience: "Ajans sahipleri", cta: "Kaydet", hook: "Bütçen boşa gidiyor olabilir", message: "Reklam hesabında karar almadan önce bakılacak 3 sinyal.", opening: "İlk 3 saniye problem", pillar: "Performans eğitimi", priority: "Yüksek", purpose: "Eğitici", series: "Reklam Kontrol Serisi", status: "Fikir", title: "Reklam hesabı kontrol listesi", tone: "good", type: "Reels" },
  { audience: "Ekip liderleri", cta: "Şablonu iste", hook: "Rapor toplantısı neden uzuyor?", message: "Kanal verisini aksiyona çevirmeyen raporların operasyonu yavaşlatması.", opening: "Soru ile giriş", pillar: "Operasyon", priority: "Orta", purpose: "Marka otoritesi", series: "Ajans Operasyonu", status: "Brief Hazır", title: "Rapor toplantısı sorunu", tone: "warning", type: "Carousel" },
  { audience: "Freelancer", cta: "DM yaz", hook: "Tek başına müşteri yönetmek zorunda değilsin", message: "Solo çalışanların müşteri, reklam ve funnel takibini tek yerde tutması.", opening: "Hikaye anlatımı", pillar: "Satış odaklı", priority: "Yüksek", purpose: "Satış", series: "Solo Ajans", status: "Tasarımda", title: "Solo freelancer çalışma akışı", tone: "good", type: "Video" }
];

export const agencySocialMediaData: SocialMediaData = {
  accountStatus: "Platformlar bağlı",
  alerts: [
    { detail: "Takipçi kazanımı geçen aya göre yavaşladı, özellikle tek görsel postlar büyümeyi taşımıyor.", metric: "-%6 büyüme", status: "Büyüme", title: "Takipçi artışı düştü", tone: "warning" },
    { detail: "Reels formatında erişim ve kaydetme oranı yükseldi.", metric: "+%31 erişim", status: "Format", title: "Reels performansı yükseldi", tone: "good" },
    { detail: "Carousel içeriklerde son iki paylaşım hedefin altında kaldı.", metric: "%3,1 etkileşim", status: "Revize", title: "Carousel etkileşimi zayıfladı", tone: "danger" }
  ],
  competitors: sharedCompetitors,
  content: sharedContent,
  description: "Ajansın sosyal medya hesap sağlığını, içerik performansını, rakip hareketlerini ve içerik planlama sürecini tek ekranda takip eder.",
  engagement: [
    { count: "24.800 beğeni", label: "Beğeni", tone: "good", value: "%64", width: "64%" },
    { count: "4.120 yorum", label: "Yorum", tone: "good", value: "%11", width: "38%" },
    { count: "3.460 paylaşım", label: "Paylaşım", tone: "accent", value: "%9", width: "32%" },
    { count: "6.040 kaydetme", label: "Kaydetme", tone: "good", value: "%16", width: "52%" }
  ],
  ideas: sharedIdeas,
  insights: [
    { detail: "Bu hafta en yüksek erişim ve takipçi kazanımı kısa Reels içeriğinden geldi.", metric: "126K görüntülenme", status: "En iyi", title: "Bütçen Boşa Gidiyor Olabilir", tone: "good" },
    { detail: "En iyi paylaşım zamanı son 30 günde 20:00-22:00 arası.", metric: "%18 daha yüksek", status: "Saat", title: "Akşam yayınları güçlü", tone: "good" },
    { detail: "Tek görsel postlarda kaydetme ve link tıklaması zayıf.", metric: "%2,4 etkileşim", status: "Risk", title: "Tek görsel performansı düşük", tone: "warning" }
  ],
  kanban: [
    { items: ["Rapor toplantısı sorunu", "Ajans KPI sözlüğü"], status: "Fikir", tone: "neutral" },
    { items: ["3 Reklam Kontrolü", "Solo freelancer akışı"], status: "Tasarımda", tone: "warning" },
    { items: ["Lead Kalitesi Vaka Analizi"], status: "Onay Bekliyor", tone: "warning" },
    { items: ["Rapor Değil Karar Ekranı"], status: "Planlandı", tone: "good" }
  ],
  kpis: sharedKpis,
  lastSync: "14 Mayıs 2026 09:45",
  performance: [
    { detail: "Toplam takipçi ve net takipçi artışı hedefin üzerinde.", metric: "+4.860", title: "Takipçi Analizi", tone: "good", trend: "+%12" },
    { detail: "Beğeni, yorum, paylaşım ve kaydetme toplamı artıyor.", metric: "38.420", title: "Etkileşim Analizi", tone: "good", trend: "+%18" },
    { detail: "Hesap erişim trendi Reels kaynaklı yükseldi.", metric: "612K", title: "Erişim / Gösterim", tone: "accent", trend: "+%21" },
    { detail: "Website tıklamaları düşerken DM dönüşleri arttı.", metric: "2.140", title: "Profil ve Trafik", tone: "warning", trend: "-%4" }
  ],
  plan: sharedPlan,
  reports: [
    { content: "Takipçi artışı, etkileşim değişimi, en iyi içerikler, zayıf içerikler ve aksiyon notları.", exportTypes: "PDF, Excel, Sunum özeti", name: "Haftalık sosyal medya raporu", status: "Hazır", tone: "good" },
    { content: "Platform bazlı büyüme, içerik türü performansı, takipçi kazanımı ve öneriler.", exportTypes: "PDF, Görsel rapor", name: "Aylık performans raporu", status: "Planlandı", tone: "neutral" },
    { content: "Rakip takipçi büyümesi, içerik sıklığı, güçlü formatlar ve tema fırsatları.", exportTypes: "Excel, PDF", name: "Rakip karşılaştırma raporu", status: "Güncel", tone: "good" }
  ],
  scopeLabel: "Son 30 gün · Ajans",
  settings: [
    { label: "İzlenecek platformlar", status: "Aktif", tone: "good", value: "Instagram, TikTok, LinkedIn" },
    { label: "Varsayılan tarih aralığı", status: "Tanımlı", tone: "good", value: "Son 30 gün" },
    { label: "Rapor formatı", status: "Aktif", tone: "good", value: "TL, PDF ve sunum özeti" },
    { label: "Eşik uyarıları", status: "İzleniyor", tone: "warning", value: "Etkileşim -%10 altına düşerse uyar" },
    { label: "Rakip listesi", status: "Güncel", tone: "good", value: "3 aktif rakip" },
    { label: "İçerik kategorileri", status: "Aktif", tone: "good", value: "Eğitici, vaka, soru-cevap, trend, satış" },
    { label: "İçerik durumları", status: "Özelleşti", tone: "good", value: "Fikir, Brief Hazır, Tasarımda, Revizede, Onaylandı, Planlandı, Yayınlandı" },
    { label: "Takvim görünümü", status: "Haftalık", tone: "neutral", value: "Hafta görünümü varsayılan" }
  ],
  title: "Sosyal Medya Merkezi",
  trends: sharedTrends
};

export const customerSocialMediaData: SocialMediaData = {
  ...agencySocialMediaData,
  description: "Seçili müşterinin sosyal medya hesap sağlığını, içerik performansını, rakiplerini ve içerik planını tek ekranda takip eder.",
  scopeLabel: "Son 30 gün · Müşteri",
  title: "Müşteri Sosyal Medya Merkezi"
};
