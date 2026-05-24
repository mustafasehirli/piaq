import { pipelineColors } from "@/lib/data/pipeline-colors";

export type TrendDirection = "up" | "down" | "neutral";
export type TimeRange = "Bugün" | "7 gün" | "14 gün" | "30 gün" | "Bu ay";
export type Tone = "good" | "warning" | "critical";

export type TrendPoint = {
  day: string;
  spend: number;
  returnValue: number;
};

export type StatCardData = {
  label: string;
  value: string;
  trend: string;
  trendDir: TrendDirection;
  note: string;
};

export type RangeDashboardData = {
  subtitle: string;
  stats: StatCardData[];
  trend: TrendPoint[];
  channels: ChannelSummary[];
};

export type ChannelSummary = {
  name: string;
  spend: string;
  conversions: string;
  roas: string;
  change: string;
  color: string;
  soft: string;
  points: number[];
};

export type PipelineStage = {
  name: string;
  count: number;
  percent?: number;
  value: string;
  color: string;
};

export type AlertItem = {
  title: string;
  description: string;
  level: "critical" | "warning";
  href: string;
};

export type UpcomingTask = {
  title: string;
  customer: string;
  time: string;
  type: "report" | "meeting" | "proposal" | "payment";
  href: string;
};

export type SpendDistributionItem = ChannelSummary & {
  amount: number;
  percent: number;
};

export const timeRanges: TimeRange[] = ["Bugün", "7 gün", "14 gün", "30 gün", "Bu ay"];

export function getDashboardTimeRange(value: string | null): TimeRange {
  return timeRanges.find((range) => range === value) ?? "7 gün";
}

export const rangeData = {
  "Bugün": {
    subtitle: "Ajansın bugünkü reklam/pazarlama harcaması ve toplam getiri",
    stats: [
      { label: "Toplam Harcama", value: "₺12.600", trend: "+3%", trendDir: "up", note: "düne göre" },
      { label: "Toplam Dönüşüm", value: "46", trend: "+5%", trendDir: "up", note: "düne göre" },
      { label: "Genel ROAS", value: "4,1x", trend: "-1%", trendDir: "down", note: "düne göre" },
      { label: "Toplam Müşteri", value: "7", trend: "+2", trendDir: "up", note: "aktif portföy" }
    ],
    trend: [
      { day: "09", spend: 1.2, returnValue: 4.8 },
      { day: "10", spend: 1.6, returnValue: 6.2 },
      { day: "11", spend: 1.9, returnValue: 8.4 },
      { day: "12", spend: 2.2, returnValue: 9.1 },
      { day: "13", spend: 2.0, returnValue: 8.7 },
      { day: "14", spend: 1.8, returnValue: 7.6 },
      { day: "15", spend: 1.9, returnValue: 8.1 }
    ],
    channels: [
      { name: "Meta", spend: "₺5.400", conversions: "19", roas: "4,0x", change: "+4%", color: "var(--channel-meta)", soft: "var(--channel-meta-light)", points: [20, 26, 28, 31, 29, 34, 36] },
      { name: "Google", spend: "₺4.600", conversions: "18", roas: "4,6x", change: "+7%", color: "var(--channel-google)", soft: "var(--channel-google-light)", points: [24, 29, 31, 36, 38, 35, 42] },
      { name: "TikTok", spend: "₺1.800", conversions: "6", roas: "2,2x", change: "-4%", color: "var(--channel-tiktok)", soft: "var(--channel-tiktok-light)", points: [22, 20, 18, 21, 19, 17, 20] },
      { name: "Mail", spend: "₺800", conversions: "3", roas: "3,2x", change: "+2%", color: "var(--channel-mail)", soft: "var(--channel-mail-light)", points: [18, 21, 20, 24, 23, 25, 26] }
    ]
  },
  "7 gün": {
    subtitle: "Ajansın günlük reklam/pazarlama harcaması ve toplam getiri",
    stats: [
      { label: "Toplam Harcama", value: "₺84.200", trend: "+6%", trendDir: "up", note: "önceki 7 güne göre" },
      { label: "Toplam Dönüşüm", value: "312", trend: "+11%", trendDir: "up", note: "önceki 7 güne göre" },
      { label: "Genel ROAS", value: "4,2x", trend: "-2%", trendDir: "down", note: "önceki 7 güne göre" },
      { label: "Toplam Müşteri", value: "7", trend: "+2", trendDir: "up", note: "aktif portföy" }
    ],
    trend: [
      { day: "Pzt", spend: 10.8, returnValue: 45.4 },
      { day: "Sal", spend: 13.6, returnValue: 57.1 },
      { day: "Çar", spend: 11.9, returnValue: 48.8 },
      { day: "Per", spend: 15.2, returnValue: 66.4 },
      { day: "Cum", spend: 14.1, returnValue: 59.7 },
      { day: "Cmt", spend: 9.8, returnValue: 38.2 },
      { day: "Paz", spend: 8.8, returnValue: 31.9 }
    ],
    channels: [
      { name: "Meta", spend: "₺38.400", conversions: "142", roas: "4,1x", change: "+8%", color: "var(--channel-meta)", soft: "var(--channel-meta-light)", points: [28, 30, 43, 38, 44, 45, 47] },
      { name: "Google", spend: "₺31.900", conversions: "126", roas: "4,9x", change: "+13%", color: "var(--channel-google)", soft: "var(--channel-google-light)", points: [34, 52, 48, 62, 55, 67, 64] },
      { name: "TikTok", spend: "₺13.900", conversions: "44", roas: "2,3x", change: "-5%", color: "var(--channel-tiktok)", soft: "var(--channel-tiktok-light)", points: [48, 39, 35, 24, 31, 18, 22] },
      { name: "Mail", spend: "₺4.800", conversions: "38", roas: "3,5x", change: "+4%", color: "var(--channel-mail)", soft: "var(--channel-mail-light)", points: [24, 38, 27, 35, 40, 42, 36] }
    ]
  },
  "14 gün": {
    subtitle: "Ajansın son 14 gün reklam/pazarlama harcaması ve toplam getiri",
    stats: [
      { label: "Toplam Harcama", value: "₺162.800", trend: "+9%", trendDir: "up", note: "önceki 14 güne göre" },
      { label: "Toplam Dönüşüm", value: "601", trend: "+7%", trendDir: "up", note: "önceki 14 güne göre" },
      { label: "Genel ROAS", value: "4,0x", trend: "-1%", trendDir: "down", note: "önceki 14 güne göre" },
      { label: "Toplam Müşteri", value: "7", trend: "+2", trendDir: "up", note: "aktif portföy" }
    ],
    trend: [
      { day: "1", spend: 18.4, returnValue: 72.6 },
      { day: "3", spend: 21.7, returnValue: 86.2 },
      { day: "5", spend: 19.6, returnValue: 78.5 },
      { day: "7", spend: 25.3, returnValue: 102.7 },
      { day: "9", spend: 23.9, returnValue: 96.4 },
      { day: "11", spend: 20.8, returnValue: 79.6 },
      { day: "14", spend: 18.1, returnValue: 65.8 }
    ],
    channels: [
      { name: "Meta", spend: "₺72.600", conversions: "268", roas: "4,0x", change: "+6%", color: "var(--channel-meta)", soft: "var(--channel-meta-light)", points: [33, 41, 37, 50, 47, 53, 58] },
      { name: "Google", spend: "₺61.300", conversions: "241", roas: "4,7x", change: "+10%", color: "var(--channel-google)", soft: "var(--channel-google-light)", points: [38, 48, 52, 57, 61, 58, 65] },
      { name: "TikTok", spend: "₺28.900", conversions: "92", roas: "2,5x", change: "+2%", color: "var(--channel-tiktok)", soft: "var(--channel-tiktok-light)", points: [35, 31, 34, 28, 36, 39, 42] },
      { name: "Mail", spend: "₺8.600", conversions: "71", roas: "3,7x", change: "+6%", color: "var(--channel-mail)", soft: "var(--channel-mail-light)", points: [28, 34, 32, 41, 38, 45, 43] }
    ]
  },
  "30 gün": {
    subtitle: "Ajansın son 30 gün reklam/pazarlama harcaması ve toplam getiri",
    stats: [
      { label: "Toplam Harcama", value: "₺348.500", trend: "+14%", trendDir: "up", note: "önceki 30 güne göre" },
      { label: "Toplam Dönüşüm", value: "1.286", trend: "+18%", trendDir: "up", note: "önceki 30 güne göre" },
      { label: "Genel ROAS", value: "4,4x", trend: "+3%", trendDir: "up", note: "önceki 30 güne göre" },
      { label: "Toplam Müşteri", value: "7", trend: "+2", trendDir: "up", note: "aktif portföy" }
    ],
    trend: [
      { day: "1", spend: 42.6, returnValue: 178.4 },
      { day: "5", spend: 51.2, returnValue: 216.6 },
      { day: "10", spend: 48.7, returnValue: 205.1 },
      { day: "15", spend: 56.9, returnValue: 247.3 },
      { day: "20", spend: 61.4, returnValue: 274.8 },
      { day: "25", spend: 44.8, returnValue: 190.2 },
      { day: "30", spend: 42.9, returnValue: 181.1 }
    ],
    channels: [
      { name: "Meta", spend: "₺151.200", conversions: "548", roas: "4,3x", change: "+12%", color: "var(--channel-meta)", soft: "var(--channel-meta-light)", points: [35, 42, 47, 44, 51, 58, 61] },
      { name: "Google", spend: "₺136.800", conversions: "536", roas: "5,0x", change: "+16%", color: "var(--channel-google)", soft: "var(--channel-google-light)", points: [42, 47, 52, 59, 63, 66, 72] },
      { name: "TikTok", spend: "₺60.500", conversions: "202", roas: "2,8x", change: "+9%", color: "var(--channel-tiktok)", soft: "var(--channel-tiktok-light)", points: [30, 34, 29, 37, 41, 45, 49] },
      { name: "Mail", spend: "₺21.400", conversions: "168", roas: "3,9x", change: "+12%", color: "var(--channel-mail)", soft: "var(--channel-mail-light)", points: [31, 38, 36, 43, 47, 45, 52] }
    ]
  },
  "Bu ay": {
    subtitle: "Ajansın bu ay reklam/pazarlama harcaması ve toplam getiri",
    stats: [
      { label: "Toplam Harcama", value: "₺96.700", trend: "+4%", trendDir: "up", note: "ay başından beri" },
      { label: "Toplam Dönüşüm", value: "358", trend: "+9%", trendDir: "up", note: "ay başından beri" },
      { label: "Genel ROAS", value: "4,3x", trend: "+1%", trendDir: "up", note: "ay başından beri" },
      { label: "Toplam Müşteri", value: "7", trend: "+2", trendDir: "up", note: "aktif portföy" }
    ],
    trend: [
      { day: "1", spend: 11.2, returnValue: 46.8 },
      { day: "2", spend: 12.9, returnValue: 54.6 },
      { day: "3", spend: 15.6, returnValue: 68.1 },
      { day: "4", spend: 13.8, returnValue: 59.3 },
      { day: "5", spend: 16.4, returnValue: 73.8 },
      { day: "6", spend: 14.7, returnValue: 64.9 },
      { day: "7", spend: 12.1, returnValue: 51.2 }
    ],
    channels: [
      { name: "Meta", spend: "₺43.100", conversions: "159", roas: "4,2x", change: "+7%", color: "var(--channel-meta)", soft: "var(--channel-meta-light)", points: [28, 35, 40, 38, 44, 50, 48] },
      { name: "Google", spend: "₺37.400", conversions: "151", roas: "4,8x", change: "+11%", color: "var(--channel-google)", soft: "var(--channel-google-light)", points: [34, 39, 46, 51, 48, 56, 59] },
      { name: "TikTok", spend: "₺16.200", conversions: "48", roas: "2,4x", change: "-3%", color: "var(--channel-tiktok)", soft: "var(--channel-tiktok-light)", points: [42, 36, 31, 34, 30, 28, 33] },
      { name: "Mail", spend: "₺5.100", conversions: "42", roas: "3,6x", change: "+5%", color: "var(--channel-mail)", soft: "var(--channel-mail-light)", points: [26, 33, 37, 35, 40, 44, 42] }
    ]
  }
} satisfies Record<TimeRange, RangeDashboardData>;

export const pipelineStages: PipelineStage[] = [
  { name: "Temas", count: 100, percent: 80, value: "100", color: pipelineColors.temas },
  { name: "Randevu", count: 80, percent: 75, value: "80", color: pipelineColors.randevu },
  { name: "Teklif", count: 60, percent: 25, value: "60", color: pipelineColors.teklif },
  { name: "Kapanış", count: 15, percent: 20, value: "15", color: pipelineColors.kapanis },
  { name: "Kayıp", count: 3, value: "3", color: pipelineColors.kayip }
];

export const acquisitionStats = [
  { label: "Kazanılan Müşteri", value: "8", note: "son 30 gün", color: pipelineColors.kapanis },
  { label: "Kapanış Oranı", value: "%60", note: "kapanış / karar", color: pipelineColors.kapanis },
  { label: "Kaybedilen Müşteri", value: "3", note: "pipeline + churn", color: pipelineColors.kayip },
  { label: "Kayıp Oranı", value: "%40", note: "kayıp / karar", color: pipelineColors.kayip }
];

export const customerRows = [
  { name: "A Firma", initials: "AF", services: ["Meta", "Google"], spend: "₺18.400", revenue: "₺93.840", roas: "5,1x", roasVal: 5.1, weeklyChange: "+12%", riskReason: "Performans stabil", nextAction: "Bütçe artırımı öner", status: "good" as Tone, href: "/musteriler/a-firma" },
  { name: "B Firma", initials: "BF", services: ["Meta", "TikTok"], spend: "₺12.100", revenue: "₺33.880", roas: "2,8x", roasVal: 2.8, weeklyChange: "-8%", riskReason: "ROAS düşüşte", nextAction: "Meta bütçe temposunu kontrol et", status: "warning" as Tone, href: "/musteriler/b-firma" },
  { name: "C Firma", initials: "CF", services: ["Google"], spend: "₺9.700", revenue: "₺44.620", roas: "4,6x", roasVal: 4.6, weeklyChange: "+6%", riskReason: "Büyüme sağlıklı", nextAction: "Google raporunu gönder", status: "good" as Tone, href: "/musteriler/c-firma" },
  { name: "Marka D", initials: "MD", services: ["TikTok"], spend: "₺6.300", revenue: "₺8.820", roas: "1,4x", roasVal: 1.4, weeklyChange: "-18%", riskReason: "Dönüşüm azaldı", nextAction: "Kreatif setini yenile", status: "critical" as Tone, href: "/musteriler" }
];

export const attentionItems: AlertItem[] = [
  { level: "critical", title: "Marka D TikTok ROAS kritik", description: "ROAS 1,4x seviyesinde. Bütçe ve kreatif seti kontrol edilmeli.", href: "/musteriler" },
  { level: "warning", title: "B Firma Meta bütçesi %87", description: "Aylık bütçede 3 gün kaldı. Harcama temposu takip edilmeli.", href: "/musteriler/b-firma" },
  { level: "warning", title: "Mira Mobilya teklif bekliyor", description: "CRM pipeline içinde teklif revizyonu bugün aksiyon istiyor.", href: "/musteriler/crm" },
  { level: "critical", title: "Google Ads sync gecikti", description: "Son senkron 2 saat önce tamamlandı. Veri tazeliği kontrol edilmeli.", href: "/ayarlar" }
];

export const upcomingTasks: UpcomingTask[] = [
  { title: "Haftalık performans raporu", customer: "A Firma", time: "Bugün 16:00", type: "report", href: "/musteriler/a-firma" },
  { title: "Strateji toplantısı", customer: "B Firma", time: "Yarın 11:30", type: "meeting", href: "/musteriler/b-firma" },
  { title: "Teklif revizyonu", customer: "Mira Mobilya", time: "2 gün içinde", type: "proposal", href: "/musteriler/crm" },
  { title: "Paket yenileme kontrolü", customer: "C Firma", time: "Cuma", type: "payment", href: "/musteriler/c-firma" }
];
