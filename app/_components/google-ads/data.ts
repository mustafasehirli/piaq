export type Tone = "good" | "warning" | "danger" | "neutral";

export type KpiIcon = "spend" | "clicks" | "impressions" | "ctr" | "cpc" | "conversions" | "rate" | "cpa" | "roas" | "quality" | "campaigns";

export type GoogleKpi = {
  label: string;
  value: string;
  change: string;
  note: string;
  tone: Tone;
  icon: KpiIcon;
};

export type TrendPoint = {
  day: string;
  spend: number;
  conversions: number;
  cpa: number;
};

export type CampaignTypePerformance = {
  type: string;
  spend: string;
  conversions: string;
  cpa: string;
  roas: string;
  width: string;
  tone: Tone;
};

export type GoogleCampaign = {
  name: string;
  type: string;
  status: string;
  statusTone: Tone;
  budget: string;
  spend: string;
  clicks: string;
  ctr: string;
  cpc: string;
  conversions: string;
  cpa: string;
  roas: string;
  conversionRate: string;
  action: string;
  actionTone: Tone;
};

export type KeywordInsight = {
  keyword: string;
  matchType: string;
  campaign: string;
  adGroup: string;
  impressions: string;
  clicks: string;
  ctr: string;
  cpc: string;
  conversions: string;
  cpa: string;
  qualityScore: string;
  status: string;
  tone: Tone;
};

export type SearchTermInsight = {
  term: string;
  matchedKeyword: string;
  campaign: string;
  clicks: string;
  spend: string;
  conversions: string;
  cpa: string;
  status: string;
  action: string;
  tone: Tone;
};

export type GoogleAdInsight = {
  name: string;
  headlines: string;
  descriptions: string;
  type: string;
  campaign: string;
  impressions: string;
  clicks: string;
  ctr: string;
  conversions: string;
  cpa: string;
  status: string;
  rsaInsight: string;
  tone: Tone;
};

export type LandingPageInsight = {
  url: string;
  clicks: string;
  conversions: string;
  conversionRate: string;
  cpa: string;
  speed: string;
  bounceRate: string;
  formRate: string;
  score: number;
  tone: Tone;
};

export type ConversionInsight = {
  name: string;
  source: string;
  count: string;
  value: string;
  cost: string;
  cpa: string;
  roas: string;
  lastConversion: string;
  status: string;
  tone: Tone;
};

export type BudgetBidInsight = {
  campaign: string;
  dailyBudget: string;
  monthlySpend: string;
  remainingBudget: string;
  bidStrategy: string;
  cpa: string;
  roas: string;
  status: string;
  tone: Tone;
};

export type ReportInsight = {
  name: string;
  scope: string;
  owner: string;
  cadence: string;
  lastSent: string;
  status: string;
  tone: Tone;
};

export type GoogleSetting = {
  label: string;
  value: string;
  detail: string;
  tone: Tone;
};

export type AlertItem = {
  title: string;
  description: string;
  metric: string;
  tone: Tone;
};

export type GoogleAdsData = {
  scopeLabel: string;
  title: string;
  description: string;
  lastSync: string;
  accountStatus: string;
  kpis: GoogleKpi[];
  trendPoints: TrendPoint[];
  campaignTypes: CampaignTypePerformance[];
  campaigns: GoogleCampaign[];
  keywordHighlights: AlertItem[];
  keywords: KeywordInsight[];
  searchTerms: SearchTermInsight[];
  ads: GoogleAdInsight[];
  landingPages: LandingPageInsight[];
  conversions: ConversionInsight[];
  budgetBids: BudgetBidInsight[];
  reports: ReportInsight[];
  settings: GoogleSetting[];
};

export const googleSections = [
  "Genel Bakış",
  "Kampanyalar",
  "Anahtar Kelimeler",
  "Arama Terimleri",
  "Reklamlar",
  "Landing Page Analizi",
  "Dönüşümler",
  "Bütçe ve Teklifler",
  "Raporlar",
  "Ayarlar"
];

export const agencyGoogleAdsData: GoogleAdsData = {
  scopeLabel: "Son 30 gün · Ajans hesabı",
  title: "Google Ads Merkezi",
  description: "Search, Performance Max, YouTube ve Display kampanyalarında niyet, maliyet, dönüşüm ve trafik kalitesi tek ekranda izlenir.",
  lastSync: "14 dk önce",
  accountStatus: "Bağlantı aktif",
  kpis: [
    { label: "Toplam Harcama", value: "₺126.400", change: "+%8", note: "Harcama artışı dönüşümle dengeli", tone: "neutral", icon: "spend" },
    { label: "Tıklama", value: "18.240", change: "+%14", note: "Search trafiği güçlü", tone: "good", icon: "clicks" },
    { label: "Gösterim", value: "812K", change: "+%11", note: "PMax erişimi büyüttü", tone: "neutral", icon: "impressions" },
    { label: "CTR", value: "%4,28", change: "+%0,5", note: "Başlık kombinasyonları iyileşti", tone: "good", icon: "ctr" },
    { label: "CPC", value: "₺6,92", change: "-%4", note: "Tıklama maliyeti düştü", tone: "good", icon: "cpc" },
    { label: "Dönüşüm", value: "486", change: "+%19", note: "Form ve arama iyi çalışıyor", tone: "good", icon: "conversions" },
    { label: "Dönüşüm Oranı", value: "%2,66", change: "+%0,3", note: "Landing page katkısı var", tone: "good", icon: "rate" },
    { label: "CPA", value: "₺260", change: "-%7", note: "Hedef CPA altında", tone: "good", icon: "cpa" },
    { label: "ROAS", value: "4,7x", change: "+0,4x", note: "PMax ve Search taşıyor", tone: "good", icon: "roas" },
    { label: "Kalite Skoru", value: "7,8", change: "+0,6", note: "Düşük skorlu 4 kelime var", tone: "warning", icon: "quality" },
    { label: "Aktif Kampanya", value: "11", change: "2 riskli", note: "1 kampanya bütçe sınırlı", tone: "warning", icon: "campaigns" }
  ],
  trendPoints: [
    { day: "Pzt", spend: 14, conversions: 54, cpa: 268 },
    { day: "Sal", spend: 17, conversions: 63, cpa: 251 },
    { day: "Çar", spend: 16, conversions: 57, cpa: 281 },
    { day: "Per", spend: 20, conversions: 76, cpa: 244 },
    { day: "Cum", spend: 19, conversions: 71, cpa: 252 },
    { day: "Cmt", spend: 21, conversions: 82, cpa: 238 },
    { day: "Paz", spend: 19, conversions: 83, cpa: 231 }
  ],
  campaignTypes: [
    { type: "Search", spend: "₺42.800", conversions: "192", cpa: "₺223", roas: "5,1x", width: "92%", tone: "good" },
    { type: "Performance Max", spend: "₺38.600", conversions: "148", cpa: "₺261", roas: "4,8x", width: "82%", tone: "good" },
    { type: "YouTube", spend: "₺18.200", conversions: "38", cpa: "₺479", roas: "2,2x", width: "42%", tone: "warning" },
    { type: "Display", spend: "₺11.700", conversions: "21", cpa: "₺557", roas: "1,9x", width: "34%", tone: "danger" },
    { type: "Demand Gen", spend: "₺15.100", conversions: "87", cpa: "₺174", roas: "4,3x", width: "70%", tone: "good" }
  ],
  campaigns: [
    { name: "Search - Ajans Yönetim Yazılımı", type: "Search", status: "Aktif", statusTone: "good", budget: "₺44.000", spend: "₺39.400", clicks: "5.820", ctr: "%6,4", cpc: "₺6,77", conversions: "174", cpa: "₺226", roas: "5,3x", conversionRate: "%2,99", action: "Bütçe artır", actionTone: "good" },
    { name: "PMax - SaaS Talep Üretimi", type: "Performance Max", status: "Aktif", statusTone: "good", budget: "₺42.000", spend: "₺37.900", clicks: "4.960", ctr: "%3,8", cpc: "₺7,64", conversions: "142", cpa: "₺267", roas: "4,8x", conversionRate: "%2,86", action: "Koru", actionTone: "good" },
    { name: "YouTube - Demo İzleme", type: "YouTube", status: "Öğrenmede", statusTone: "neutral", budget: "₺22.000", spend: "₺18.200", clicks: "2.740", ctr: "%1,8", cpc: "₺6,64", conversions: "38", cpa: "₺479", roas: "2,2x", conversionRate: "%1,39", action: "İzle", actionTone: "neutral" },
    { name: "Display - Retargeting Banner", type: "Display", status: "Performans düşük", statusTone: "danger", budget: "₺15.000", spend: "₺11.700", clicks: "1.480", ctr: "%0,9", cpc: "₺7,91", conversions: "21", cpa: "₺557", roas: "1,9x", conversionRate: "%1,42", action: "Durdur", actionTone: "danger" }
  ],
  keywordHighlights: [
    { title: "En iyi anahtar kelime", description: "ajans yönetim yazılımı dönüşüm oranında öne çıkıyor.", metric: "₺194 CPA", tone: "good" },
    { title: "En pahalı kelime", description: "reklam ajansı fiyatları yüksek harcama yapıyor ama düşük lead getiriyor.", metric: "₺612 CPA", tone: "danger" },
    { title: "Düşük kalite skoru", description: "dijital pazarlama hizmetleri için reklam metni ve landing page uyumu zayıf.", metric: "5/10 QS", tone: "warning" },
    { title: "Negatif kelime önerisi", description: "ücretsiz eğitim ve staj aramaları bütçeyi tüketiyor.", metric: "37 tıklama", tone: "warning" }
  ],
  keywords: [
    { keyword: "ajans yönetim yazılımı", matchType: "Tam eşleme", campaign: "Search - Ajans Yönetim Yazılımı", adGroup: "SaaS niyet", impressions: "42K", clicks: "2.180", ctr: "%5,19", cpc: "₺6,12", conversions: "68", cpa: "₺194", qualityScore: "9/10", status: "Bütçe artır", tone: "good" },
    { keyword: "dijital pazarlama ajansı", matchType: "Sıralı eşleme", campaign: "Search - Ajans Yönetim Yazılımı", adGroup: "Ajans niyet", impressions: "58K", clicks: "2.340", ctr: "%4,03", cpc: "₺7,04", conversions: "52", cpa: "₺317", qualityScore: "7/10", status: "İzle", tone: "neutral" },
    { keyword: "reklam ajansı fiyatları", matchType: "Geniş eşleme", campaign: "Search - Ajans Yönetim Yazılımı", adGroup: "Fiyat araştırması", impressions: "31K", clicks: "1.090", ctr: "%3,51", cpc: "₺9,88", conversions: "18", cpa: "₺612", qualityScore: "6/10", status: "Daralt", tone: "danger" },
    { keyword: "dijital pazarlama hizmetleri", matchType: "Sıralı eşleme", campaign: "PMax - SaaS Talep Üretimi", adGroup: "Hizmet niyet", impressions: "27K", clicks: "860", ctr: "%3,18", cpc: "₺8,21", conversions: "19", cpa: "₺371", qualityScore: "5/10", status: "Kalite skoru düşük", tone: "warning" }
  ],
  searchTerms: [
    { term: "ücretsiz dijital pazarlama eğitimi", matchedKeyword: "dijital pazarlama ajansı", campaign: "Search - Ajans Yönetim Yazılımı", clicks: "37", spend: "₺412", conversions: "0", cpa: "-", status: "Gereksiz trafik", action: "Negatif kelimeye ekle", tone: "danger" },
    { term: "ajans müşteri takip programı", matchedKeyword: "ajans yönetim yazılımı", campaign: "Search - Ajans Yönetim Yazılımı", clicks: "116", spend: "₺690", conversions: "9", cpa: "₺77", status: "Yeni fırsat", action: "Anahtar kelimeye ekle", tone: "good" },
    { term: "reklam raporlama programı", matchedKeyword: "dijital pazarlama hizmetleri", campaign: "PMax - SaaS Talep Üretimi", clicks: "84", spend: "₺540", conversions: "5", cpa: "₺108", status: "İzlemeye al", action: "İzlemeye al", tone: "warning" }
  ],
  ads: [
    { name: "RSA - Ajans Yönetim", headlines: "Ajansını tek panelden yönet · Reklam raporlarını birleştir", descriptions: "Müşteri, reklam ve funnel operasyonlarını tek üründe takip et.", type: "Responsive Search Ad", campaign: "Search - Ajans Yönetim Yazılımı", impressions: "84K", clicks: "4.120", ctr: "%4,9", conversions: "112", cpa: "₺211", status: "Güçlü", rsaInsight: "En iyi kombinasyon: tek panel + reklam raporu", tone: "good" },
    { name: "RSA - Performans Raporu", headlines: "Meta ve Google raporları · Ajans dashboard", descriptions: "Dağınık reklam verilerini karar ekranına taşı.", type: "Responsive Search Ad", campaign: "PMax - SaaS Talep Üretimi", impressions: "62K", clicks: "2.170", ctr: "%3,5", conversions: "54", cpa: "₺298", status: "Orta", rsaInsight: "Rapor kelimesi iyi, dashboard başlığı zayıf", tone: "warning" },
    { name: "YouTube - Demo CTA", headlines: "Ajans operasyon demosu", descriptions: "30 saniyede Piaq akışını gör.", type: "Video Ad", campaign: "YouTube - Demo İzleme", impressions: "156K", clicks: "2.740", ctr: "%1,8", conversions: "38", cpa: "₺479", status: "Zayıf", rsaInsight: "İzlenme var, dönüşüm zayıf", tone: "danger" }
  ],
  landingPages: [
    { url: "/ajans-yonetim-platformu", clicks: "4.920", conversions: "168", conversionRate: "%3,41", cpa: "₺218", speed: "1,9 sn", bounceRate: "%38", formRate: "%12,4", score: 86, tone: "good" },
    { url: "/reklam-raporlama", clicks: "2.840", conversions: "72", conversionRate: "%2,54", cpa: "₺314", speed: "2,6 sn", bounceRate: "%49", formRate: "%8,1", score: 72, tone: "warning" },
    { url: "/demo-talep", clicks: "1.760", conversions: "28", conversionRate: "%1,59", cpa: "₺486", speed: "3,4 sn", bounceRate: "%62", formRate: "%5,6", score: 58, tone: "danger" }
  ],
  conversions: [
    { name: "Form gönderimi", source: "Search", count: "246", value: "₺1,18M", cost: "₺58.400", cpa: "₺237", roas: "5,0x", lastConversion: "18 dk önce", status: "Aktif", tone: "good" },
    { name: "Telefon araması", source: "Search", count: "72", value: "₺310K", cost: "₺18.900", cpa: "₺263", roas: "4,1x", lastConversion: "1 saat önce", status: "Aktif", tone: "good" },
    { name: "WhatsApp tıklaması", source: "PMax", count: "118", value: "₺420K", cost: "₺31.700", cpa: "₺269", roas: "3,8x", lastConversion: "42 dk önce", status: "İzle", tone: "warning" },
    { name: "Randevu alma", source: "YouTube", count: "50", value: "₺126K", cost: "₺17.400", cpa: "₺348", roas: "2,4x", lastConversion: "Bugün 10:24", status: "Zayıf", tone: "danger" }
  ],
  budgetBids: [
    { campaign: "Search - Ajans Yönetim Yazılımı", dailyBudget: "₺1.600", monthlySpend: "₺39.400", remainingBudget: "₺4.600", bidStrategy: "Hedef CPA", cpa: "₺226", roas: "5,3x", status: "Bütçe artırılabilir", tone: "good" },
    { campaign: "PMax - SaaS Talep Üretimi", dailyBudget: "₺1.450", monthlySpend: "₺37.900", remainingBudget: "₺4.100", bidStrategy: "Hedef ROAS", cpa: "₺267", roas: "4,8x", status: "Koru", tone: "good" },
    { campaign: "YouTube - Demo İzleme", dailyBudget: "₺720", monthlySpend: "₺18.200", remainingBudget: "₺3.800", bidStrategy: "Maksimum dönüşüm", cpa: "₺479", roas: "2,2x", status: "CPA yükseldi", tone: "warning" },
    { campaign: "Display - Retargeting Banner", dailyBudget: "₺500", monthlySpend: "₺11.700", remainingBudget: "₺3.300", bidStrategy: "Maksimum tıklama", cpa: "₺557", roas: "1,9x", status: "Durdur", tone: "danger" }
  ],
  reports: [
    { name: "Haftalık Google Performans Raporu", scope: "Kampanya türü, CPA, ROAS, kalite skoru", owner: "Performans ekibi", cadence: "Her pazartesi", lastSent: "13 Mayıs", status: "Hazır", tone: "good" },
    { name: "Arama Terimleri Temizlik Raporu", scope: "Negatif kelime adayları ve gereksiz trafik", owner: "Google uzmanı", cadence: "Haftalık", lastSent: "11 Mayıs", status: "Güncelleme bekliyor", tone: "warning" }
  ],
  settings: [
    { label: "Customer ID", value: "742-***-9124", detail: "UI'da formatlı, DB'de tiresiz saklanacak", tone: "good" },
    { label: "Developer Token", value: "Tanımlı", detail: "Server tarafı kullanım için hazır", tone: "good" },
    { label: "Conversion Linker", value: "Aktif", detail: "Form ve arama dönüşümleri eşleşiyor", tone: "good" },
    { label: "Negatif Liste", value: "Eksik", detail: "Eğitim ve staj terimleri eklenmeli", tone: "warning" },
    { label: "GAQL Sync", value: "Planlandı", detail: "Gerçek fazda Trigger.dev ile saatlik", tone: "neutral" },
    { label: "Son Veri", value: "14 dk önce", detail: "Mock veri sağlıklı görünüyor", tone: "good" }
  ]
};

export const customerGoogleAdsData: GoogleAdsData = {
  ...agencyGoogleAdsData,
  scopeLabel: "Son 30 gün · Müşteri hesabı",
  description: "Müşterinin Google Ads kampanyalarında arama niyeti, anahtar kelime kalitesi, landing page ve dönüşüm maliyeti tek ekranda izlenir.",
  lastSync: "11 dk önce",
  kpis: [
    { label: "Toplam Harcama", value: "₺64.800", change: "+%6", note: "Bütçe kullanımı dengeli", tone: "neutral", icon: "spend" },
    { label: "Tıklama", value: "9.420", change: "+%12", note: "Search talebi büyüdü", tone: "good", icon: "clicks" },
    { label: "Gösterim", value: "438K", change: "+%9", note: "PMax erişimi artırdı", tone: "neutral", icon: "impressions" },
    { label: "CTR", value: "%4,72", change: "+%0,7", note: "Marka ve kategori iyi", tone: "good", icon: "ctr" },
    { label: "CPC", value: "₺6,88", change: "-%3", note: "Tıklama maliyeti kontrollü", tone: "good", icon: "cpc" },
    { label: "Dönüşüm", value: "238", change: "+%17", note: "Form ve WhatsApp güçlü", tone: "good", icon: "conversions" },
    { label: "Dönüşüm Oranı", value: "%2,53", change: "+%0,2", note: "Landing page iyileşti", tone: "good", icon: "rate" },
    { label: "CPA", value: "₺272", change: "-%5", note: "Hedef CPA altında", tone: "good", icon: "cpa" },
    { label: "ROAS", value: "4,4x", change: "+0,3x", note: "Search kampanyası taşıyor", tone: "good", icon: "roas" },
    { label: "Kalite Skoru", value: "7,4", change: "+0,4", note: "2 kelime düşük skorlu", tone: "warning", icon: "quality" },
    { label: "Aktif Kampanya", value: "6", change: "1 riskli", note: "Display zayıf", tone: "warning", icon: "campaigns" }
  ],
  trendPoints: [
    { day: "Pzt", spend: 7, conversions: 26, cpa: 269 },
    { day: "Sal", spend: 8, conversions: 31, cpa: 258 },
    { day: "Çar", spend: 8, conversions: 28, cpa: 286 },
    { day: "Per", spend: 11, conversions: 42, cpa: 262 },
    { day: "Cum", spend: 10, conversions: 38, cpa: 263 },
    { day: "Cmt", spend: 10, conversions: 37, cpa: 270 },
    { day: "Paz", spend: 11, conversions: 36, cpa: 306 }
  ],
  campaignTypes: [
    { type: "Search", spend: "₺28.400", conversions: "126", cpa: "₺225", roas: "4,9x", width: "88%", tone: "good" },
    { type: "Performance Max", spend: "₺21.900", conversions: "78", cpa: "₺281", roas: "4,2x", width: "74%", tone: "good" },
    { type: "Shopping", spend: "₺8.200", conversions: "24", cpa: "₺342", roas: "3,7x", width: "56%", tone: "warning" },
    { type: "Display", spend: "₺6.300", conversions: "10", cpa: "₺630", roas: "1,8x", width: "28%", tone: "danger" }
  ],
  settings: [
    { label: "Customer ID", value: "683-***-4207", detail: "Müşteri Google Ads hesabı bağlı", tone: "good" },
    { label: "Developer Token", value: "Tanımlı", detail: "Server tarafı kullanım için hazır", tone: "good" },
    { label: "Conversion Linker", value: "Aktif", detail: "Form ve WhatsApp dönüşümleri eşleşiyor", tone: "good" },
    { label: "Negatif Liste", value: "Eksik", detail: "Ücretsiz ve staj aramaları eklenmeli", tone: "warning" },
    { label: "GAQL Sync", value: "Planlandı", detail: "Gerçek fazda Trigger.dev ile saatlik", tone: "neutral" },
    { label: "Son Veri", value: "11 dk önce", detail: "Mock veri sağlıklı görünüyor", tone: "good" }
  ]
};
