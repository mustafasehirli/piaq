import {
  Activity,
  BadgeCheck,
  BarChart3,
  Clock3,
  Eye,
  FileText,
  Gauge,
  Hash,
  Heart,
  MessageCircle,
  MousePointerClick,
  Music2,
  Save,
  Settings,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ComparisonTrendChart } from "@/app/_components/charts/ComparisonTrendChart";
import { ValueText } from "@/app/_components/common/ProductUI";
import { TikTokLogoMono } from "@/components/icons/BrandIcons";

type Tone = "good" | "warning" | "danger" | "neutral";

type KpiIcon = "spend" | "impressions" | "views" | "watch" | "completion" | "clicks" | "ctr" | "conversion" | "cpa" | "cpl" | "roas" | "campaign";

type Kpi = {
  label: string;
  value: string;
  change: string;
  note: string;
  tone: Tone;
  icon: KpiIcon;
};

type TrendPoint = {
  day: string;
  views: number;
  conversions: number;
  firstThree: number;
};

type Campaign = {
  name: string;
  objective: string;
  status: string;
  statusTone: Tone;
  budget: string;
  spend: string;
  impressions: string;
  videoViews: string;
  clicks: string;
  conversions: string;
  cpa: string;
  roas: string;
  action: string;
  actionTone: Tone;
};

type AdGroup = {
  name: string;
  campaign: string;
  audience: string;
  age: string;
  location: string;
  interest: string;
  placement: string;
  budget: string;
  spend: string;
  cpa: string;
  ctr: string;
  viewRate: string;
  status: string;
  tone: Tone;
};

type TikTokAd = {
  name: string;
  preview: string;
  hook: string;
  cta: string;
  spend: string;
  views: string;
  firstThreeRate: string;
  avgWatch: string;
  clicks: string;
  ctr: string;
  conversions: string;
  cpa: string;
  status: string;
  tone: Tone;
};

type Creative = {
  video: string;
  firstThreeRate: string;
  avgWatch: string;
  completionRate: string;
  ctr: string;
  comments: string;
  shares: string;
  saves: string;
  conversions: string;
  cpa: string;
  classification: string;
  hookType: string;
  opening: string;
  problem: string;
  promise: string;
  cta: string;
  duration: string;
  sound: string;
  format: string;
  tone: Tone;
};

type HookInsight = {
  text: string;
  video: string;
  category: string;
  firstThreeRate: string;
  avgWatch: string;
  ctr: string;
  conversions: string;
  score: string;
  insight: string;
  tone: Tone;
};

type TrendInsight = {
  name: string;
  category: string;
  popularity: string;
  usage: string;
  idea: string;
  status: string;
  tone: Tone;
};

type AudienceInsight = {
  name: string;
  age: string;
  gender: string;
  location: string;
  interest: string;
  device: string;
  spend: string;
  ctr: string;
  cpa: string;
  conversions: string;
  engagementRate: string;
  status: string;
  tone: Tone;
};

type PixelEvent = {
  name: string;
  count: string;
  lastSeen: string;
  value: string;
  status: string;
  tone: Tone;
};

type ReportItem = {
  name: string;
  scope: string;
  owner: string;
  cadence: string;
  lastSent: string;
  status: string;
  tone: Tone;
};

type SettingItem = {
  label: string;
  value: string;
  detail: string;
  tone: Tone;
};

export type TikTokAdsData = {
  accountStatus: string;
  adGroups: AdGroup[];
  ads: TikTokAd[];
  audiences: AudienceInsight[];
  campaigns: Campaign[];
  creatives: Creative[];
  description: string;
  hooks: HookInsight[];
  kpis: Kpi[];
  lastSync: string;
  pixelEvents: PixelEvent[];
  reports: ReportItem[];
  scopeLabel: string;
  settings: SettingItem[];
  title: string;
  trends: TrendInsight[];
  trendPoints: TrendPoint[];
};

const kpiIcons: Record<KpiIcon, LucideIcon> = {
  spend: Gauge,
  impressions: Eye,
  views: Video,
  watch: Clock3,
  completion: BadgeCheck,
  clicks: MousePointerClick,
  ctr: TrendingUp,
  conversion: Target,
  cpa: Gauge,
  cpl: Users,
  roas: BarChart3,
  campaign: Activity
};

const sections = [
  "Genel Bakış",
  "Kampanyalar",
  "Reklam Grupları",
  "Reklamlar",
  "Video / Kreatif Analizi",
  "Hook Analizi",
  "Trendler",
  "Kitleler",
  "Pixel / Eventler",
  "Raporlar",
  "Ayarlar"
];

export const agencyTikTokAdsData: TikTokAdsData = {
  accountStatus: "Bağlantı aktif",
  description: "TikTok reklamlarında video, hook, trend, hedef kitle, etkileşim ve pixel event performansı tek yaratıcı karar ekranında izlenir.",
  lastSync: "8 dk önce",
  scopeLabel: "Son 30 gün · Ajans hesabı",
  title: "TikTok Reklam Merkezi",
  kpis: [
    { label: "Toplam Harcama", value: "₺42.600", change: "+%11", note: "Dönüşüm kampanyaları önde", tone: "neutral", icon: "spend" },
    { label: "Gösterim", value: "2,4M", change: "+%18", note: "Trend format erişimi artırdı", tone: "good", icon: "impressions" },
    { label: "Video İzlenme", value: "1,8M", change: "+%24", note: "Reels benzeri kısa videolar güçlü", tone: "good", icon: "views" },
    { label: "Ortalama İzleme", value: "7,8 sn", change: "+1,2 sn", note: "Hook testleri katkı verdi", tone: "good", icon: "watch" },
    { label: "Tam İzlenme", value: "%21", change: "+%3", note: "21 sn altı videolar iyi", tone: "good", icon: "completion" },
    { label: "Tıklama", value: "28.400", change: "+%14", note: "CTA netliği arttı", tone: "good", icon: "clicks" },
    { label: "CTR", value: "%1,94", change: "+%0,3", note: "Problem odaklı hook önde", tone: "good", icon: "ctr" },
    { label: "Dönüşüm", value: "136", change: "+%17", note: "Form ve WhatsApp dönüşüyor", tone: "good", icon: "conversion" },
    { label: "CPA", value: "₺312", change: "-%5", note: "Hedef banda yakın", tone: "warning", icon: "cpa" },
    { label: "CPL", value: "₺286", change: "-%8", note: "Lead kampanyası verimli", tone: "good", icon: "cpl" },
    { label: "ROAS", value: "3,8x", change: "+0,4x", note: "Retargeting katkısı var", tone: "good", icon: "roas" },
    { label: "Aktif Kampanya", value: "8", change: "2 riskli", note: "1 kreatif yorgun", tone: "warning", icon: "campaign" }
  ],
  trendPoints: [
    { day: "Pzt", views: 210, conversions: 16, firstThree: 31 },
    { day: "Sal", views: 255, conversions: 19, firstThree: 34 },
    { day: "Çar", views: 238, conversions: 17, firstThree: 32 },
    { day: "Per", views: 294, conversions: 24, firstThree: 39 },
    { day: "Cum", views: 286, conversions: 22, firstThree: 37 },
    { day: "Cmt", views: 266, conversions: 20, firstThree: 35 },
    { day: "Paz", views: 251, conversions: 18, firstThree: 33 }
  ],
  campaigns: [
    { name: "Creator Spark - Ürün Demo", objective: "Dönüşüm", status: "Aktif", statusTone: "good", budget: "₺18.000", spend: "₺16.400", impressions: "820K", videoViews: "610K", clicks: "10.420", conversions: "64", cpa: "₺256", roas: "4,2x", action: "Bütçe artır", actionTone: "good" },
    { name: "Hook Test - Problem Çözüm", objective: "Lead", status: "Aktif", statusTone: "good", budget: "₺12.000", spend: "₺10.700", impressions: "520K", videoViews: "402K", clicks: "7.880", conversions: "42", cpa: "₺255", roas: "3,9x", action: "Koru", actionTone: "good" },
    { name: "Trend Ses - Awareness", objective: "Video görüntüleme", status: "Öğrenmede", statusTone: "neutral", budget: "₺8.000", spend: "₺6.900", impressions: "610K", videoViews: "498K", clicks: "3.120", conversions: "12", cpa: "₺575", roas: "1,8x", action: "İzle", actionTone: "warning" },
    { name: "Story Style - Hızlı CTA", objective: "Trafik", status: "Performans düşük", statusTone: "danger", budget: "₺6.000", spend: "₺5.600", impressions: "190K", videoViews: "124K", clicks: "1.040", conversions: "4", cpa: "₺1.400", roas: "0,9x", action: "Durdur", actionTone: "danger" }
  ],
  adGroups: [
    { name: "E-ticaret sahipleri", campaign: "Creator Spark - Ürün Demo", audience: "Soğuk kitle", age: "24-44", location: "TR", interest: "E-ticaret, reklam", placement: "TikTok Feed", budget: "₺7.500", spend: "₺6.980", cpa: "₺244", ctr: "%2,18", viewRate: "%37", status: "Sağlıklı", tone: "good" },
    { name: "Web ziyaretçileri", campaign: "Hook Test - Problem Çözüm", audience: "Retargeting", age: "25-54", location: "TR", interest: "Website visitors", placement: "TikTok Feed", budget: "₺4.800", spend: "₺4.220", cpa: "₺218", ctr: "%2,44", viewRate: "%41", status: "Büyüt", tone: "good" },
    { name: "Geniş ilgi alanı", campaign: "Trend Ses - Awareness", audience: "Geniş", age: "18-34", location: "TR", interest: "Business, teknoloji", placement: "Pangle kapalı", budget: "₺3.500", spend: "₺3.120", cpa: "₺602", ctr: "%0,82", viewRate: "%28", status: "Daralt", tone: "warning" }
  ],
  ads: [
    { name: "Demo Video 21s", preview: "Problem çözüm açılışlı ürün demosu", hook: "Reklam bütçeni boşa harcıyor olabilirsin", cta: "Ücretsiz analiz al", spend: "₺8.400", views: "286K", firstThreeRate: "%43", avgWatch: "8,6 sn", clicks: "4.920", ctr: "%2,21", conversions: "34", cpa: "₺247", status: "Kazanan", tone: "good" },
    { name: "Case Study 18s", preview: "Önce / sonra müşteri sonucu", hook: "Bir hesabı 7 günde böyle toparladık", cta: "Sonucu gör", spend: "₺5.900", views: "198K", firstThreeRate: "%39", avgWatch: "7,9 sn", clicks: "3.240", ctr: "%2,04", conversions: "22", cpa: "₺268", status: "Testte", tone: "neutral" },
    { name: "Trend Ses 12s", preview: "Popüler ses ile hızlı metin", hook: "Bunu reklam verirken sakın yapma", cta: "Detay al", spend: "₺4.100", views: "214K", firstThreeRate: "%32", avgWatch: "5,2 sn", clicks: "1.210", ctr: "%0,92", conversions: "5", cpa: "₺820", status: "Zayıf", tone: "danger" }
  ],
  creatives: [
    { video: "Demo Video 21s", firstThreeRate: "%43", avgWatch: "8,6 sn", completionRate: "%24", ctr: "%2,21", comments: "164", shares: "92", saves: "318", conversions: "34", cpa: "₺247", classification: "Kazanan kreatif", hookType: "Problem odaklı", opening: "Bütçe kaybını direkt gösteriyor", problem: "Reklam bütçesi boşa gidiyor", promise: "Hesabı hızlı analiz etme", cta: "Ücretsiz analiz al", duration: "21 sn", sound: "Orijinal konuşma", format: "Problem çözüm", tone: "good" },
    { video: "Case Study 18s", firstThreeRate: "%39", avgWatch: "7,9 sn", completionRate: "%22", ctr: "%2,04", comments: "98", shares: "61", saves: "204", conversions: "22", cpa: "₺268", classification: "Testte olan kreatif", hookType: "Sonuç gösteren", opening: "Önce / sonra tablo", problem: "Hesap performansı düşmüş", promise: "7 günde toparlama", cta: "Sonucu gör", duration: "18 sn", sound: "Trend beat düşük ses", format: "Case study", tone: "neutral" },
    { video: "Trend Ses 12s", firstThreeRate: "%32", avgWatch: "5,2 sn", completionRate: "%14", ctr: "%0,92", comments: "36", shares: "18", saves: "44", conversions: "5", cpa: "₺820", classification: "Durdurulması gereken kreatif", hookType: "Hata gösteren", opening: "Genel metin animasyonu", problem: "Çok genel mesaj", promise: "Net değil", cta: "Detay al", duration: "12 sn", sound: "Trend ses", format: "Hızlı tip", tone: "danger" }
  ],
  hooks: [
    { text: "Reklam bütçeni boşa harcıyor olabilirsin", video: "Demo Video 21s", category: "Problem odaklı", firstThreeRate: "%43", avgWatch: "8,6 sn", ctr: "%2,21", conversions: "34", score: "91/100", insight: "Problem odaklı hook'lar daha yüksek izlenme ve dönüşüm getiriyor.", tone: "good" },
    { text: "Bir hesabı 7 günde böyle toparladık", video: "Case Study 18s", category: "Sonuç gösteren", firstThreeRate: "%39", avgWatch: "7,9 sn", ctr: "%2,04", conversions: "22", score: "84/100", insight: "Sonuç gösteren hook kaydetme oranını artırıyor.", tone: "good" },
    { text: "Bunu reklam verirken sakın yapma", video: "Trend Ses 12s", category: "Hata gösteren", firstThreeRate: "%32", avgWatch: "5,2 sn", ctr: "%0,92", conversions: "5", score: "48/100", insight: "Merak uyandırıyor ama vaat net olmadığı için tıklama zayıf.", tone: "danger" }
  ],
  trends: [
    { name: "Önce / Sonra formatı", category: "Trend format", popularity: "Yüksek", usage: "Müşteri sonucu göstermek için uygun", idea: "Reklam hesabı iyileştirme case study videosu", status: "Planla", tone: "good" },
    { name: "Problem çözüm serisi", category: "Popüler video yapısı", popularity: "Yükseliyor", usage: "İlk 3 saniyede problemi söyle, çözümü kısa göster", idea: "3 reklam hatası / 3 hızlı düzeltme serisi", status: "Test et", tone: "good" },
    { name: "#smallbusinessgrowth", category: "Hashtag", popularity: "Orta", usage: "KOBİ ve e-ticaret içeriklerinde kullanılabilir", idea: "KOBİ reklam bütçesi kontrol listesi", status: "İzle", tone: "warning" }
  ],
  audiences: [
    { name: "E-ticaret sahipleri", age: "24-44", gender: "Tümü", location: "TR büyük şehirler", interest: "E-ticaret, girişimcilik", device: "iOS ağırlıklı", spend: "₺14.200", ctr: "%2,18", cpa: "₺244", conversions: "58", engagementRate: "%7,2", status: "Büyüt", tone: "good" },
    { name: "Web ziyaretçileri", age: "25-54", gender: "Tümü", location: "TR", interest: "Retargeting", device: "Mobil", spend: "₺8.600", ctr: "%2,44", cpa: "₺218", conversions: "39", engagementRate: "%8,4", status: "Koru", tone: "good" },
    { name: "Geniş ilgi alanı", age: "18-34", gender: "Tümü", location: "TR", interest: "Business, teknoloji", device: "Android ağırlıklı", spend: "₺6.900", ctr: "%0,82", cpa: "₺602", conversions: "11", engagementRate: "%3,8", status: "Daralt", tone: "warning" }
  ],
  pixelEvents: [
    { name: "PageView", count: "28.400", lastSeen: "8 dk önce", value: "-", status: "Geliyor", tone: "good" },
    { name: "ViewContent", count: "9.620", lastSeen: "9 dk önce", value: "-", status: "Geliyor", tone: "good" },
    { name: "ClickButton", count: "3.840", lastSeen: "12 dk önce", value: "-", status: "Orta", tone: "warning" },
    { name: "SubmitForm", count: "136", lastSeen: "18 dk önce", value: "₺412K", status: "Sağlıklı", tone: "good" },
    { name: "CompletePayment", count: "24", lastSeen: "Bugün 11:42", value: "₺186K", status: "Aktif", tone: "good" }
  ],
  reports: [
    { name: "Haftalık TikTok Performans Raporu", scope: "Kampanya, video, hook, CPA ve ROAS", owner: "Performans ekibi", cadence: "Her pazartesi", lastSent: "13 Mayıs", status: "Hazır", tone: "good" },
    { name: "Kreatif ve Trend Raporu", scope: "Kazanan hook, trend format ve yeni fikir listesi", owner: "Kreatif ekip", cadence: "2 haftada bir", lastSent: "10 Mayıs", status: "Güncelleme bekliyor", tone: "warning" }
  ],
  settings: [
    { label: "Advertiser ID", value: "tt_adv_****912", detail: "Ajans TikTok Ads hesabı bağlı", tone: "good" },
    { label: "Pixel", value: "Aktif", detail: "PageView, SubmitForm ve CompletePayment geliyor", tone: "good" },
    { label: "Event API", value: "Planlandı", detail: "Gerçek fazda server-side event gönderimi yapılacak", tone: "neutral" },
    { label: "UTM Standardı", value: "Eksik alan var", detail: "2 reklamda utm_content boş", tone: "warning" },
    { label: "Token", value: "41 gün kaldı", detail: "Production token yenileme izleniyor", tone: "neutral" },
    { label: "Sync", value: "Saatlik", detail: "Son başarılı veri kontrolü 8 dk önce", tone: "good" }
  ]
};

export const customerTikTokAdsData: TikTokAdsData = {
  ...agencyTikTokAdsData,
  scopeLabel: "Son 30 gün · Müşteri hesabı",
  kpis: [
    { label: "Toplam Harcama", value: "₺28.400", change: "+%9", note: "Lead kampanyası güçlü", tone: "neutral", icon: "spend" },
    { label: "Gösterim", value: "1,3M", change: "+%15", note: "Trend format erişimi artırdı", tone: "good", icon: "impressions" },
    { label: "Video İzlenme", value: "980K", change: "+%21", note: "Kısa demo videoları önde", tone: "good", icon: "views" },
    { label: "Ortalama İzleme", value: "7,1 sn", change: "+0,8 sn", note: "Hook testleri katkı verdi", tone: "good", icon: "watch" },
    { label: "Tam İzlenme", value: "%19", change: "+%2", note: "18 sn altı videolar iyi", tone: "good", icon: "completion" },
    { label: "Tıklama", value: "14.200", change: "+%12", note: "CTA netliği arttı", tone: "good", icon: "clicks" },
    { label: "CTR", value: "%1,82", change: "+%0,2", note: "Problem odaklı hook önde", tone: "good", icon: "ctr" },
    { label: "Dönüşüm", value: "74", change: "+%14", note: "Form dönüşümü artıyor", tone: "good", icon: "conversion" },
    { label: "CPA", value: "₺383", change: "-%3", note: "Bir reklam grubu pahalı", tone: "warning", icon: "cpa" },
    { label: "CPL", value: "₺352", change: "-%6", note: "Lead kalitesi stabil", tone: "good", icon: "cpl" },
    { label: "ROAS", value: "3,4x", change: "+0,2x", note: "Retargeting katkısı var", tone: "good", icon: "roas" },
    { label: "Aktif Kampanya", value: "5", change: "1 riskli", note: "1 kreatif yorgun", tone: "warning", icon: "campaign" }
  ]
};

function getToneClass(tone: Tone) {
  if (tone === "good") return "border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] text-[var(--accent-green)]";
  if (tone === "warning") return "border-[oklch(0.92_0.055_75)] bg-[var(--accent-amber-light)] text-[var(--accent-amber)]";
  if (tone === "danger") return "border-[oklch(0.91_0.055_25)] bg-[var(--accent-red-light)] text-[var(--accent-red)]";
  return "border-[color-mix(in_oklch,var(--channel-tiktok)_18%,transparent)] bg-[var(--channel-tiktok-light)] text-[var(--channel-tiktok)]";
}

function getToneDotClass(tone: Tone) {
  if (tone === "good") return "bg-[var(--accent-green)]";
  if (tone === "warning") return "bg-[var(--accent-amber)]";
  if (tone === "danger") return "bg-[var(--accent-red)]";
  return "bg-[var(--channel-tiktok)]";
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div>
      {kicker ? <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">{kicker}</p> : null}
      <h2 className="mt-1 text-[20px] font-black text-[var(--text-primary)]">{title}</h2>
    </div>
  );
}

function KpiCard({ item }: { item: Kpi }) {
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

function Metric({ compact = false, label, value }: { compact?: boolean; label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-[16px] border border-[color-mix(in_oklch,var(--border)_74%,transparent)] bg-white px-3 py-2">
      <p className="truncate text-[10px] font-black uppercase tracking-[0.06em] text-[var(--text-muted)]">{label}</p>
      <p className={`${compact ? "truncate text-[11px]" : "text-sm"} mt-1 font-black text-[var(--text-primary)]`}><ValueText value={value} /></p>
    </div>
  );
}

function Badge({ tone, value }: { tone: Tone; value: string }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-black ${getToneClass(tone)}`}>{value}</span>;
}

function TrendChart({ points }: { points: TrendPoint[] }) {
  return (
    <ComparisonTrendChart
      ariaLabel="TikTok video izlenme ve donusum trendi"
      color="var(--channel-tiktok)"
      gradientId="tiktokConversionArea"
      points={points.map((point) => ({
        barValue: point.views,
        label: point.day,
        lineValue: point.conversions,
        topLabel: `%${point.firstThree.toLocaleString("tr-TR")}`
      }))}
    />
  );
}
export function TikTokAdsView({ data }: { data: TikTokAdsData }) {
  return (
    <div className="mx-auto grid max-w-[1540px] gap-6">
      <header className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] md:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] bg-[var(--channel-tiktok)] text-white shadow-[0_18px_34px_rgb(15_118_110_/_0.22)]">
              <TikTokLogoMono aria-hidden="true" className="size-7" />
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
        {data.kpis.map((item) => <KpiCard item={item} key={item.label} />)}
      </section>

      <section className="rounded-[28px] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-sm)]">
        <div className="flex flex-wrap gap-2">
          {sections.map((section) => (
            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-[11px] font-black text-[var(--text-secondary)]" key={section}>{section}</span>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(380px,0.65fr)]">
        <div className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
            <SectionTitle kicker="Genel Bakış" title="Video izlenme, dönüşüm ve ilk 3 saniye" />
            <div className="flex flex-wrap gap-2 text-[11px] font-black text-[var(--text-secondary)]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5"><span className="size-2 rounded-full bg-[var(--channel-tiktok)]" />Dönüşüm çizgisi</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5"><span className="size-2 rounded-full bg-[var(--channel-tiktok)] opacity-30" />İzlenme barı</span>
            </div>
          </div>
          <TrendChart points={data.trendPoints} />
        </div>

        <div className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Öne çıkan etkileşim" title="İlk 3 saniye sinyalleri" />
          <div className="mt-5 grid gap-3">
            <Signal icon={Clock3} label="İlk 3 saniye" value="%43" tone="good" />
            <Signal icon={Heart} label="Video etkileşimi" value="%7,2" tone="good" />
            <Signal icon={Share2} label="Paylaşım" value="92" tone="neutral" />
            <Signal icon={MessageCircle} label="Yorum" value="164" tone="warning" />
            <Signal icon={Save} label="Kaydetme" value="318" tone="good" />
          </div>
        </div>
      </section>

      <CampaignTable data={data} />
      <AdGroupTable data={data} />
      <AdsTable data={data} />
      <CreativeSection data={data} />
      <HookTable data={data} />
      <TrendSection data={data} />
      <AudienceTable data={data} />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <PixelPanel data={data} />
        <ReportsPanel data={data} />
      </section>

      <SettingsPanel data={data} />
    </div>
  );
}

function Signal({ icon: Icon, label, tone, value }: { icon: LucideIcon; label: string; tone: Tone; value: string }) {
  return (
    <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{label}</span>
        <Icon aria-hidden="true" className={`size-4 ${tone === "good" ? "text-[var(--accent-green)]" : tone === "warning" ? "text-[var(--accent-amber)]" : "text-[var(--channel-tiktok)]"}`} strokeWidth={2.4} />
      </div>
      <p className="mt-3 text-2xl font-black text-[var(--text-primary)]"><ValueText value={value} /></p>
    </article>
  );
}

function TableHeader({ count, icon: Icon = Video, kicker, title }: { count: string; icon?: LucideIcon; kicker: string; title: string }) {
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

function CampaignTable({ data }: { data: TikTokAdsData }) {
  return (
    <section className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[var(--shadow-sm)]">
      <TableHeader count={`${data.campaigns.length} kampanya`} kicker="Kampanyalar" title="İzlenme, tıklama ve gerçek dönüşüm" />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1180px] border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--bg-card-soft)] text-left text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              {["Kampanya", "Amaç", "Durum", "Bütçe", "Harcama", "Gösterim", "Video izlenme", "Tıklama", "Dönüşüm", "CPA", "ROAS", "Aksiyon"].map((heading) => <th className="px-4 py-3 first:px-5 last:px-5" key={heading}>{heading}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {data.campaigns.map((campaign) => (
              <tr className="transition hover:bg-[var(--bg-card-soft)]" key={campaign.name}>
                <td className="px-5 py-4 font-black text-[var(--text-primary)]">{campaign.name}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{campaign.objective}</td>
                <td className="px-4 py-4"><Badge tone={campaign.statusTone} value={campaign.status} /></td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.budget}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.spend}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.impressions}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.videoViews}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.clicks}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.conversions}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.cpa}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.roas}</td>
                <td className="px-5 py-4"><Badge tone={campaign.actionTone} value={campaign.action} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function AdGroupTable({ data }: { data: TikTokAdsData }) {
  return (
    <section className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[var(--shadow-sm)]">
      <TableHeader count="Hedefleme + video metrikleri" icon={Target} kicker="Reklam Grupları" title="Kitle, bütçe ve izlenme oranı" />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1260px] border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--bg-card-soft)] text-left text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              {["Reklam grubu", "Kampanya", "Hedef kitle", "Yaş", "Lokasyon", "İlgi alanı", "Placement", "Bütçe", "Harcama", "CPA", "CTR", "Video izlenme", "Durum"].map((heading) => <th className="px-4 py-3 first:px-5 last:px-5" key={heading}>{heading}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {data.adGroups.map((group) => (
              <tr className="transition hover:bg-[var(--bg-card-soft)]" key={group.name}>
                <td className="px-5 py-4 font-black text-[var(--text-primary)]">{group.name}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{group.campaign}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{group.audience}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{group.age}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{group.location}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{group.interest}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{group.placement}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{group.budget}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{group.spend}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{group.cpa}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{group.ctr}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{group.viewRate}</td>
                <td className="px-5 py-4"><Badge tone={group.tone} value={group.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function AdsTable({ data }: { data: TikTokAdsData }) {
  return (
    <section className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[var(--shadow-sm)]">
      <TableHeader count="Video önizleme dahil" icon={Video} kicker="Reklamlar" title="Tek tek TikTok reklamları" />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1260px] border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--bg-card-soft)] text-left text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              {["Reklam", "Video önizleme", "Hook", "CTA", "Harcama", "İzlenme", "İlk 3 sn", "Ort. izleme", "Tıklama", "CTR", "Dönüşüm", "CPA", "Durum"].map((heading) => <th className="px-4 py-3 first:px-5 last:px-5" key={heading}>{heading}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {data.ads.map((ad) => (
              <tr className="transition hover:bg-[var(--bg-card-soft)]" key={ad.name}>
                <td className="px-5 py-4 font-black text-[var(--text-primary)]">{ad.name}</td>
                <td className="px-4 py-4">
                  <span className="inline-flex min-w-[150px] items-center gap-2 rounded-[16px] border border-[var(--border)] bg-[var(--channel-tiktok-light)] px-3 py-2 text-xs font-black text-[var(--channel-tiktok)]">
                    <Video aria-hidden="true" className="size-4" strokeWidth={2.4} />
                    {ad.preview}
                  </span>
                </td>
                <td className="max-w-[240px] px-4 py-4 font-bold text-[var(--text-secondary)]">{ad.hook}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{ad.cta}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{ad.spend}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{ad.views}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{ad.firstThreeRate}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{ad.avgWatch}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{ad.clicks}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{ad.ctr}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{ad.conversions}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{ad.cpa}</td>
                <td className="px-5 py-4"><Badge tone={ad.tone} value={ad.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function CreativeSection({ data }: { data: TikTokAdsData }) {
  return (
    <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
      <SectionTitle kicker="Video / Kreatif Analizi" title="Neden çalıştığını gösteren kreatif notları" />
      <div className="mt-5 grid gap-4 xl:grid-cols-3">
        {data.creatives.map((creative) => (
          <article className="rounded-[24px] border border-[var(--border)] bg-white p-4 shadow-[0_12px_26px_oklch(0.18_0.018_80_/_0.055)]" key={creative.video}>
            <div className="flex items-start justify-between gap-3">
              <Badge tone={creative.tone} value={creative.classification} />
              <span className="text-lg font-black text-[var(--channel-tiktok)]">{creative.firstThreeRate}</span>
            </div>
            <div className="mt-4 flex min-h-[92px] items-center justify-center rounded-[20px] border border-[var(--border)] bg-[var(--channel-tiktok-light)] text-[var(--channel-tiktok)]">
              <Video aria-hidden="true" className="size-7" strokeWidth={2.2} />
            </div>
            <h3 className="mt-4 text-base font-black text-[var(--text-primary)]">{creative.video}</h3>
            <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{creative.opening}</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Metric label="Hook tipi" value={creative.hookType} compact />
              <Metric label="Format" value={creative.format} compact />
              <Metric label="Süre" value={creative.duration} />
              <Metric label="Ses" value={creative.sound} compact />
              <Metric label="Yorum" value={creative.comments} />
              <Metric label="Paylaşım" value={creative.shares} />
              <Metric label="Kaydetme" value={creative.saves} />
              <Metric label="CPA" value={creative.cpa} />
            </div>
            <p className="mt-4 text-xs font-bold leading-5 text-[var(--text-muted)]">Problem: {creative.problem} · Vaat: {creative.promise} · CTA: {creative.cta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HookTable({ data }: { data: TikTokAdsData }) {
  return (
    <section className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[var(--shadow-sm)]">
      <TableHeader count="Hook performans skoru" icon={Sparkles} kicker="Hook Analizi" title="İlk 3 saniye karar tablosu" />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1080px] border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--bg-card-soft)] text-left text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              {["Hook metni", "Video", "Kategori", "İlk 3 sn", "Ort. izleme", "CTR", "Dönüşüm", "Skor", "İçgörü"].map((heading) => <th className="px-4 py-3 first:px-5 last:px-5" key={heading}>{heading}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {data.hooks.map((hook) => (
              <tr className="transition hover:bg-[var(--bg-card-soft)]" key={hook.text}>
                <td className="max-w-[260px] px-5 py-4 font-black text-[var(--text-primary)]">{hook.text}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{hook.video}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{hook.category}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{hook.firstThreeRate}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{hook.avgWatch}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{hook.ctr}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{hook.conversions}</td>
                <td className="px-4 py-4"><Badge tone={hook.tone} value={hook.score} /></td>
                <td className="max-w-[260px] px-5 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{hook.insight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TrendSection({ data }: { data: TikTokAdsData }) {
  return (
    <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
      <SectionTitle kicker="Trendler" title="Trend ses, format, hashtag ve içerik fikirleri" />
      <div className="mt-5 grid gap-4 xl:grid-cols-3">
        {data.trends.map((trend) => (
          <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={trend.name}>
            <div className="flex items-start justify-between gap-3">
              <span className={`flex size-10 items-center justify-center rounded-[14px] border ${getToneClass(trend.tone)}`}>
                {trend.category === "Hashtag" ? <Hash aria-hidden="true" className="size-4" strokeWidth={2.4} /> : trend.category.includes("ses") ? <Music2 aria-hidden="true" className="size-4" strokeWidth={2.4} /> : <Sparkles aria-hidden="true" className="size-4" strokeWidth={2.4} />}
              </span>
              <Badge tone={trend.tone} value={trend.status} />
            </div>
            <h3 className="mt-4 text-base font-black text-[var(--text-primary)]">{trend.name}</h3>
            <p className="mt-1 text-xs font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{trend.category} · {trend.popularity}</p>
            <p className="mt-3 text-sm font-bold leading-5 text-[var(--text-secondary)]">{trend.usage}</p>
            <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-muted)]">İçerik fikri: {trend.idea}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AudienceTable({ data }: { data: TikTokAdsData }) {
  return (
    <section className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[var(--shadow-sm)]">
      <TableHeader count="Yaş, cihaz, lokasyon ve ilgi alanı" icon={Users} kicker="Kitleler" title="Hedef kitle kırılımları" />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1120px] border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--bg-card-soft)] text-left text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              {["Kitle", "Yaş", "Cinsiyet", "Lokasyon", "İlgi alanı", "Cihaz", "Harcama", "CTR", "CPA", "Dönüşüm", "Etkileşim", "Durum"].map((heading) => <th className="px-4 py-3 first:px-5 last:px-5" key={heading}>{heading}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {data.audiences.map((audience) => (
              <tr className="transition hover:bg-[var(--bg-card-soft)]" key={audience.name}>
                <td className="px-5 py-4 font-black text-[var(--text-primary)]">{audience.name}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{audience.age}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{audience.gender}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{audience.location}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{audience.interest}</td>
                <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{audience.device}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{audience.spend}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{audience.ctr}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{audience.cpa}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{audience.conversions}</td>
                <td className="px-4 py-4 font-black text-[var(--text-primary)]">{audience.engagementRate}</td>
                <td className="px-5 py-4"><Badge tone={audience.tone} value={audience.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function PixelPanel({ data }: { data: TikTokAdsData }) {
  return (
    <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
      <SectionTitle kicker="Pixel / Eventler" title="Event verisi ve dönüşüm takibi" />
      <div className="mt-5 grid gap-3">
        {data.pixelEvents.map((event) => (
          <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={event.name}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-black text-[var(--text-primary)]">{event.name}</h3>
                <p className="mt-1 text-xs font-bold text-[var(--text-muted)]">Son event: {event.lastSeen}</p>
              </div>
              <Badge tone={event.tone} value={event.status} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              <Metric label="Event sayısı" value={event.count} />
              <Metric label="Değer" value={event.value} />
              <Metric label="Durum" value={event.status} compact />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ReportsPanel({ data }: { data: TikTokAdsData }) {
  return (
    <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
      <SectionTitle kicker="Raporlar" title="TikTok rapor takip alanı" />
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

function SettingsPanel({ data }: { data: TikTokAdsData }) {
  return (
    <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <SectionTitle kicker="Ayarlar" title="TikTok bağlantı ve izleme ayarları" />
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-xs font-black text-[var(--text-secondary)]">
          <Settings aria-hidden="true" className="size-4" strokeWidth={2.4} />
          Mock bağlantı durumu
        </span>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
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
