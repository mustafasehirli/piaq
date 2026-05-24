import { CheckCircle2, Trophy, TriangleAlert } from "lucide-react";

export const tabs = ["Genel", "Plan", "Meta", "Google", "TikTok", "Sosyal Medya", "Funnel", "Mail", "Ayarlar"] as const;

export type CustomerDetailTab = (typeof tabs)[number];

export const customerProfiles = {
  "a-firma": {
    name: "A Firma",
    status: "Aktif",
    statusTone: "green",
    services: ["Meta", "Google", "TikTok", "Mail", "Funnel"]
  },
  "b-firma": {
    name: "B Firma",
    status: "Duraklatıldı",
    statusTone: "amber",
    services: ["Meta"]
  },
  "c-firma": {
    name: "C Firma",
    status: "Ayrıldı",
    statusTone: "red",
    services: ["Google", "TikTok"]
  }
} as const;

export type CustomerSlug = keyof typeof customerProfiles;

export const services = [
  "Meta",
  "Google",
  "TikTok",
  "Funnel",
  "Mail",
  "Sosyal Medya Yönetimi"
];

export const currencies = ["TRY", "USD", "EUR", "GBP"] as const;

export type Currency = (typeof currencies)[number];

export const metaAdAccounts = [
  {
    id: "a-firma-tr",
    name: "A Firma TR",
    status: "Bağlı"
  },
  {
    id: "a-firma-retargeting",
    name: "A Firma Retargeting",
    status: "Bağlı"
  }
];

export const metaAccountStats = [
  {
    label: "Aktif Reklam",
    metric: "activeAds",
    value: "18"
  },
  {
    label: "Harcanan",
    metric: "spend",
    value: "₺84.500"
  },
  {
    label: "ROAS",
    metric: "roas",
    value: "4.2"
  },
  {
    label: "Gelir",
    metric: "revenue",
    value: "₺354.900"
  }
];

export const metaCampaigns = [
  {
    id: "campaign-a",
    name: "A Kampanya",
    cpm: "₺92",
    ctr: "%2.8",
    cr: "%4.1",
    cpc: "₺3.20",
    spend: "₺28.400",
    roas: "4.6",
    revenue: "₺130.640",
    signal: "Medium",
    adSets: [
      {
        id: "set-a-1",
        name: "Soğuk kitle",
        cpm: "₺88",
        ctr: "%2.6",
        cr: "%3.9",
        cpc: "₺3.10",
        spend: "₺12.600",
        roas: "4.1",
        revenue: "₺51.660",
        signal: "Medium",
        ads: [
          {
            name: "Video kreatif 01",
            signal: "Winner"
          },
          {
            name: "Carousel ürün 01",
            signal: "Medium"
          }
        ]
      },
      {
        id: "set-a-2",
        name: "Retargeting",
        cpm: "₺96",
        ctr: "%3.3",
        cr: "%5.6",
        cpc: "₺2.90",
        spend: "₺15.800",
        roas: "5.0",
        revenue: "₺78.980",
        signal: "Winner",
        ads: [
          {
            name: "Sepet terk 01",
            signal: "Winner"
          },
          {
            name: "Dinamik Ürün Reklamı",
            signal: "Medium"
          }
        ]
      }
    ]
  },
  {
    id: "campaign-b",
    name: "B Kampanya",
    cpm: "₺118",
    ctr: "%1.9",
    cr: "%2.7",
    cpc: "₺4.10",
    spend: "₺34.800",
    roas: "3.8",
    revenue: "₺132.240",
    signal: "Weak",
    adSets: [
      {
        id: "set-b-1",
        name: "Lookalike 1%",
        cpm: "₺122",
        ctr: "%1.8",
        cr: "%2.5",
        cpc: "₺4.30",
        spend: "₺18.200",
        roas: "3.5",
        revenue: "₺63.700",
        signal: "Weak",
        ads: [
          {
            name: "UGC kreatif 01",
            signal: "Weak"
          },
          {
            name: "UGC kreatif 02",
            signal: "Medium"
          }
        ]
      },
      {
        id: "set-b-2",
        name: "İlgi alanı",
        cpm: "₺112",
        ctr: "%2.1",
        cr: "%2.9",
        cpc: "₺3.90",
        spend: "₺16.600",
        roas: "4.1",
        revenue: "₺68.540",
        signal: "Medium",
        ads: [
          {
            name: "Statik kreatif 01",
            signal: "Medium"
          },
          {
            name: "Teklif kreatifi",
            signal: "Weak"
          }
        ]
      }
    ]
  },
  {
    id: "campaign-c",
    name: "C Kampanya",
    cpm: "₺76",
    ctr: "%3.4",
    cr: "%5.2",
    cpc: "₺2.70",
    spend: "₺21.300",
    roas: "4.3",
    revenue: "₺91.590",
    signal: "Winner",
    adSets: [
      {
        id: "set-c-1",
        name: "Kampanya ziyaretçileri",
        cpm: "₺74",
        ctr: "%3.6",
        cr: "%5.4",
        cpc: "₺2.50",
        spend: "₺9.900",
        roas: "4.6",
        revenue: "₺45.540",
        signal: "Winner",
        ads: [
          {
            name: "Landing kreatifi",
            signal: "Winner"
          },
          {
            name: "Referans kreatifi",
            signal: "Good"
          }
        ]
      },
      {
        id: "set-c-2",
        name: "Benzer satın alanlar",
        cpm: "₺78",
        ctr: "%3.1",
        cr: "%4.9",
        cpc: "₺2.80",
        spend: "₺11.400",
        roas: "4.0",
        revenue: "₺46.050",
        signal: "Medium",
        ads: [
          {
            name: "Performans kreatifi",
            signal: "Medium"
          },
          {
            name: "Avantaj kreatifi",
            signal: "Weak"
          }
        ]
      }
    ]
  }
];

export const googleAdAccounts = [
  {
    id: "google-a-firma-search",
    name: "A Firma Search"
  },
  {
    id: "google-a-firma-pmax",
    name: "A Firma Performance Max"
  }
];

export const googleAccountStats = [
  {
    label: "Aktif Reklam",
    metric: "activeAds",
    value: "24"
  },
  {
    label: "Harcanan",
    metric: "spend",
    value: "₺96.200"
  },
  {
    label: "ROAS",
    metric: "roas",
    value: "4.8"
  },
  {
    label: "Gelir",
    metric: "revenue",
    value: "₺461.760"
  }
];

export const googleCampaigns = [
  {
    id: "google-campaign-a",
    name: "Search Marka Kampanyası",
    cpm: "₺64",
    ctr: "%5.1",
    cr: "%6.2",
    cpc: "₺1.90",
    spend: "₺18.400",
    roas: "5.2",
    revenue: "₺95.680",
    signal: "Winner",
    adGroups: [
      {
        id: "google-group-a-1",
        name: "Marka aramaları",
        cpm: "₺58",
        ctr: "%6.4",
        cr: "%7.1",
        cpc: "₺1.60",
        spend: "₺9.200",
        roas: "6.0",
        revenue: "₺55.200",
        signal: "Winner",
        ads: [
          {
            name: "Marka Reklam Metni 01",
            signal: "Winner"
          },
          {
            name: "Marka Reklam Metni 02",
            signal: "Good"
          }
        ]
      },
      {
        id: "google-group-a-2",
        name: "Rakip aramaları",
        cpm: "₺72",
        ctr: "%3.8",
        cr: "%4.9",
        cpc: "₺2.20",
        spend: "₺9.200",
        roas: "4.4",
        revenue: "₺40.480",
        signal: "Medium",
        ads: [
          {
            name: "Rakip karşılaştırma 01",
            signal: "Medium"
          },
          {
            name: "Alternatif teklif 01",
            signal: "Weak"
          }
        ]
      }
    ]
  },
  {
    id: "google-campaign-b",
    name: "Performance Max",
    cpm: "₺102",
    ctr: "%2.4",
    cr: "%3.6",
    cpc: "₺3.40",
    spend: "₺46.800",
    roas: "4.1",
    revenue: "₺191.880",
    signal: "Medium",
    adGroups: [
      {
        id: "google-group-b-1",
        name: "Ürün feed grubu",
        cpm: "₺98",
        ctr: "%2.7",
        cr: "%3.9",
        cpc: "₺3.10",
        spend: "₺24.600",
        roas: "4.3",
        revenue: "₺105.780",
        signal: "Medium",
        ads: [
          {
            name: "PMax asset group 01",
            signal: "Medium"
          },
          {
            name: "PMax asset group 02",
            signal: "Winner"
          }
        ]
      },
      {
        id: "google-group-b-2",
        name: "Yeni Müşteri Grubu",
        cpm: "₺116",
        ctr: "%1.8",
        cr: "%2.8",
        cpc: "₺4.20",
        spend: "₺22.200",
        roas: "3.9",
        revenue: "₺86.100",
        signal: "Weak",
        ads: [
          {
            name: "PMax Yeni Müşteri 01",
            signal: "Weak"
          },
          {
            name: "PMax Yeni Müşteri 02",
            signal: "Medium"
          }
        ]
      }
    ]
  },
  {
    id: "google-campaign-c",
    name: "YouTube Remarketing",
    cpm: "₺86",
    ctr: "%2.9",
    cr: "%4.4",
    cpc: "₺2.80",
    spend: "₺31.000",
    roas: "5.6",
    revenue: "₺174.200",
    signal: "Winner",
    adGroups: [
      {
        id: "google-group-c-1",
        name: "Video izleyenler",
        cpm: "₺82",
        ctr: "%3.1",
        cr: "%4.7",
        cpc: "₺2.60",
        spend: "₺15.400",
        roas: "5.8",
        revenue: "₺89.320",
        signal: "Winner",
        ads: [
          {
            name: "YouTube bumper 01",
            signal: "Good"
          },
          {
            name: "YouTube in-stream 01",
            signal: "Winner"
          }
        ]
      },
      {
        id: "google-group-c-2",
        name: "Site ziyaretçileri",
        cpm: "₺90",
        ctr: "%2.6",
        cr: "%4.0",
        cpc: "₺3.00",
        spend: "₺15.600",
        roas: "5.4",
        revenue: "₺84.880",
        signal: "Medium",
        ads: [
          {
            name: "YouTube remarketing 01",
            signal: "Medium"
          },
          {
            name: "YouTube remarketing 02",
            signal: "Winner"
          }
        ]
      }
    ]
  }
];

export const signalLabels = {
  Medium: "Orta",
  Weak: "Zayıf",
  Winner: "Winner",
  Good: "İyi"
};

export const signalStyles = {
  Medium: {
    icon: TriangleAlert,
    className: "bg-amber-50 text-amber-600"
  },
  Weak: {
    icon: TriangleAlert,
    className: "bg-orange-50 text-orange-600"
  },
  Winner: {
    icon: Trophy,
    className: "bg-[var(--accent-light)] text-[var(--accent)]"
  },
  Good: {
    icon: CheckCircle2,
    className: "bg-emerald-50 text-emerald-600"
  }
};

export const googleConnectionSteps = [
  "Google Ads Developer Token tanımla",
  "OAuth Client ID ve Client Secret ekle",
  "Refresh Token ile uzun süreli erişimi hazırla",
  "Customer ID ve varsa MCC ID bilgisini eşleştir"
];

export const tikTokConnectionSteps = [
  "TikTok Business App bilgilerini ekle",
  "Advertiser ID ile müşteri hesabını eşleştir",
  "Access Token ve Refresh Token değerlerini kaydet",
  "Sandbox veya Production ortamını seç"
];

export const funnelConnectionSteps = [
  "Funnel alan adını veya landing page URL'ini ekle",
  "Pixel/Event Key bilgisini tanımla",
  "Webhook URL ile lead ve dönüşüm olaylarını eşleştir",
  "UTM ve dönüşüm event isimlerini standartlaştır"
];

export const mailConnectionSteps = [
  "Gönderen mail ve gönderen adını tanımla",
  "Gmail OAuth veya mail servis API anahtarını ekle",
  "Domain doğrulama için SPF/DKIM kayıtlarını hazırla",
  "Test mail gönderimi ile bağlantıyı kontrol et"
];

export const customerServices = ["Meta", "Google", "TikTok", "Mail", "Funnel"];

export const customerPulseCards = [
  {
    label: "Toplam harcama",
    value: "₺38.400",
    trend: "↑ %8",
    note: "geçen hafta",
    tone: "good"
  },
  {
    label: "Toplam dönüşüm",
    value: "184",
    trend: "↑ %14",
    note: "",
    tone: "good"
  },
  {
    label: "Genel ROAS",
    value: "4,8x",
    trend: "↓ %3",
    note: "",
    tone: "bad"
  },
  {
    label: "Toplam lead",
    value: "1.240",
    trend: "↑ %6",
    note: "",
    tone: "good"
  },
  {
    label: "CPL",
    value: "₺31",
    trend: "↓ %5",
    note: "iyi",
    tone: "good"
  },
  {
    label: "Lead → satış",
    value: "%14,8",
    trend: "→",
    note: "sabit",
    tone: "neutral"
  }
];

export const customerChannelRoas = [
  {
    label: "Google",
    value: "5,4x",
    width: "84%",
    color: "bg-[var(--channel-google)]"
  },
  {
    label: "Meta",
    value: "4,5x",
    width: "70%",
    color: "bg-[var(--channel-meta)]"
  },
  {
    label: "TikTok",
    value: "2,7x",
    width: "45%",
    color: "bg-[var(--channel-tiktok)]"
  },
  {
    label: "Mail",
    value: "3,6x",
    width: "58%",
    color: "bg-[var(--channel-mail)]"
  }
];

export const customerBudgetUsage = [
  {
    label: "Google",
    value: "%72",
    width: "72%",
    color: "bg-[var(--channel-google)]"
  },
  {
    label: "Meta",
    value: "%88",
    width: "88%",
    color: "bg-[var(--channel-meta)]"
  },
  {
    label: "TikTok",
    value: "%54",
    width: "54%",
    color: "bg-[var(--channel-tiktok)]"
  },
  {
    label: "Mail",
    value: "%40",
    width: "40%",
    color: "bg-[var(--channel-mail)]"
  }
];

export const customerChannelPortfolio = [
  {
    channel: "Meta",
    code: "MT",
    roas: "4,5x",
    revenue: "₺92.600",
    spend: "₺20.500",
    conversions: "98",
    share: "37%",
    lift: "+%6",
    status: "Kontrollü büyüme",
    signal: "Remarketing setleri karlı",
    accent: "var(--channel-meta)",
    soft: "var(--channel-meta-light)"
  },
  {
    channel: "Google",
    code: "GA",
    roas: "5,4x",
    revenue: "₺124.800",
    spend: "₺23.100",
    conversions: "126",
    share: "42%",
    lift: "+%12",
    status: "Ölçeklenebilir",
    signal: "Yüksek niyetli trafik güçlü",
    accent: "var(--channel-google)",
    soft: "var(--channel-google-light)"
  },
  {
    channel: "TikTok",
    code: "TT",
    roas: "2,7x",
    revenue: "₺31.900",
    spend: "₺11.800",
    conversions: "42",
    share: "21%",
    lift: "-%4",
    status: "Revizyon gerekli",
    signal: "Kreatif yorgunluğu başladı",
    accent: "var(--channel-tiktok)",
    soft: "var(--channel-tiktok-light)"
  },
  {
    channel: "Mail",
    code: "ML",
    roas: "3,6x",
    revenue: "₺18.400",
    spend: "₺5.100",
    conversions: "64",
    share: "12%",
    lift: "+%5",
    status: "Takip akışı güçlü",
    signal: "Sepet ve tekrar satın alma akışları karlı",
    accent: "var(--channel-mail)",
    soft: "var(--channel-mail-light)"
  }
];

export const customerWinnerCampaigns = [
  {
    channel: "Meta",
    campaign: "Retargeting - Sepet Terk",
    type: "Remarketing seti",
    roas: "5,8x",
    revenue: "₺52.200",
    spend: "₺9.000",
    conversions: "44",
    trend: "+%14",
    reason: "Sıcak kitlede sepet dönüşleri güçlü, bütçe artırımı izlenebilir.",
    accent: "var(--channel-meta)",
    soft: "var(--channel-meta-light)"
  },
  {
    channel: "Google",
    campaign: "Brand Search - Satın Alma",
    type: "Arama kampanyası",
    roas: "6,2x",
    revenue: "₺74.400",
    spend: "₺12.000",
    conversions: "58",
    trend: "+%18",
    reason: "Yüksek niyetli trafik ve düşük CPC ile en karlı kanal katkısı.",
    accent: "var(--channel-google)",
    soft: "var(--channel-google-light)"
  },
  {
    channel: "TikTok",
    campaign: "Creator Spark - Ürün Demo",
    type: "Kreatif test",
    roas: "3,4x",
    revenue: "₺18.700",
    spend: "₺5.500",
    conversions: "22",
    trend: "+%7",
    reason: "Yeni kreatif setinde izlenme kalitesi ve dönüşüm eğilimi pozitif.",
    accent: "var(--channel-tiktok)",
    soft: "var(--channel-tiktok-light)"
  },
  {
    channel: "Mail",
    campaign: "Sepet Hatırlatma Akışı",
    type: "Otomasyon",
    roas: "4,9x",
    revenue: "₺21.600",
    spend: "₺4.400",
    conversions: "31",
    trend: "+%9",
    reason: "Düşük maliyetle tekrar satın alma ve terk sepet geri kazanımı sağlıyor.",
    accent: "var(--channel-mail)",
    soft: "var(--channel-mail-light)"
  }
];

export const customerFunnelSnapshot = {
  title: "Funnel Özeti",
  status: "Ödeme adımı izleniyor",
  conversionRate: "%14,8",
  health: "%86",
  stages: [
    {
      label: "Landing",
      value: "22,1K",
      rate: "%100",
      width: "100%",
      accent: "var(--channel-funnel)"
    },
    {
      label: "Form",
      value: "1.240",
      rate: "%5,6",
      width: "58%",
      accent: "var(--accent-green)"
    },
    {
      label: "Teklif",
      value: "312",
      rate: "%25",
      width: "34%",
      accent: "var(--accent)"
    },
    {
      label: "Ödeme",
      value: "184",
      rate: "%59",
      width: "22%",
      accent: "var(--channel-mail)"
    }
  ]
};

export const customerAccountSignals = [
  {
    source: "Meta",
    title: "CPM yükseliyor",
    description: "A Kampanyası CPM son 7 günde %18 arttı. Kreatif yorgunluğu kontrol edilmeli.",
    tone: "risk"
  },
  {
    source: "Funnel",
    title: "Ödeme adımında sürtünme var",
    description: "Mobil ödeme sayfasında terk oranı normalin üzerinde görünüyor.",
    tone: "critical"
  },
  {
    source: "Mail",
    title: "Teslim edilebilirlik takipte",
    description: "Spam şikayet oranı sınırda. Gönderen domain ve konu satırları izlenmeli.",
    tone: "warning"
  },
  {
    source: "Google",
    title: "Dönüşüm ivmesi pozitif",
    description: "Brand Search kampanyasında dönüşüm son döneme göre %12 arttı.",
    tone: "good"
  }
];

export const customerGeneralInfoCards = [
  {
    label: "Sektör",
    value: "Mobilya / Perakende",
    note: "B2C, yüksek sepet hacmi"
  },
  {
    label: "Paket",
    value: "Büyüme Paketi",
    note: "Meta, Google, TikTok, Mail, Funnel"
  },
  {
    label: "Müşteri yetkilisi",
    value: "Ayşe Demir",
    note: "Karar verici / haftalık rapor alıyor"
  },
  {
    label: "Sözleşme",
    value: "43 gün kaldı",
    note: "Yenileme görüşmesi planlanmalı"
  }
];

export const customerTodoItems = [
  {
    title: "Mobil ödeme adımını test et",
    description: "Funnel ödeme sayfasında mobil terk oranı kontrol edilecek.",
    due: "Bugün",
    priority: "Acil",
    tone: "critical"
  },
  {
    title: "Meta kreatif setini yenile",
    description: "CPM artışı görülen A Kampanyası için yeni kreatif varyasyonları hazırlanacak.",
    due: "Yarın",
    priority: "Yüksek",
    tone: "risk"
  },
  {
    title: "Mail domain sağlığını kontrol et",
    description: "SPF/DKIM ve spam şikayet oranları yeniden gözden geçirilecek.",
    due: "2 gün",
    priority: "Orta",
    tone: "warning"
  },
  {
    title: "Haftalık müşteri notunu hazırla",
    description: "Performans özeti ve sonraki aksiyonlar müşteri toplantısı için toparlanacak.",
    due: "Cuma",
    priority: "Normal",
    tone: "good"
  }
];

export const customerInvestmentControls = [
  {
    label: "Kalan medya bütçesi",
    value: "₺16.900",
    meta: "5 günlük tahmini güvenli alan",
    progress: "69%",
    tone: "good",
    accent: "var(--accent-green)",
    soft: "var(--accent-green-light)"
  },
  {
    label: "Meta harcama baskısı",
    value: "%88",
    meta: "Günlük limit yeniden dengelenmeli",
    progress: "88%",
    tone: "risk",
    accent: "var(--channel-meta)",
    soft: "var(--channel-meta-light)"
  },
  {
    label: "Google fırsat payı",
    value: "₺7.400",
    meta: "Karlı kampanyalara aktarılabilir",
    progress: "74%",
    tone: "focus",
    accent: "var(--channel-google)",
    soft: "var(--channel-google-light)"
  }
];

export const customerFunnelSteps = [
  {
    label: "Görüntüleme",
    value: "380K",
    barValue: "380.000",
    width: "100%",
    color: "bg-[var(--channel-funnel-light)]",
    textColor: "text-[var(--channel-funnel)]"
  },
  {
    label: "Tıklama",
    value: "22,1K",
    barValue: "22.100",
    width: "58%",
    color: "bg-emerald-200",
    textColor: "text-emerald-950"
  },
  {
    label: "Lead",
    value: "1.240",
    barValue: "1.240",
    width: "22%",
    color: "bg-amber-200",
    textColor: "text-amber-950"
  },
  {
    label: "Satış",
    value: "184",
    barValue: "184",
    width: "7%",
    color: "bg-rose-200",
    textColor: "text-rose-950"
  }
];

export const customerJourneyMap = [
  {
    label: "Erişim",
    value: "380K",
    rate: "100%",
    insight: "Kitle hacmi stabil",
    accent: "var(--channel-funnel)",
    soft: "var(--channel-funnel-light)"
  },
  {
    label: "Tıklama",
    value: "22,1K",
    rate: "%5,8 CTR",
    insight: "Google tarafı taşıyor",
    accent: "var(--channel-google)",
    soft: "var(--channel-google-light)"
  },
  {
    label: "Lead",
    value: "1.240",
    rate: "%5,6 CVR",
    insight: "Landing page test alanı",
    accent: "var(--channel-funnel)",
    soft: "var(--channel-funnel-light)"
  },
  {
    label: "Satış",
    value: "184",
    rate: "%14,8 kapanış",
    insight: "Satış kalitesi korunuyor",
    accent: "var(--channel-funnel)",
    soft: "var(--channel-funnel-light)"
  }
];

export const customerAlerts = [
  {
    tone: "bg-red-500",
    title: "Meta bütçesi kritik",
    description: "Aylığın %88'i harcandı, 5 gün kaldı. Bütçe artırımı veya kampanya duraklatma gerekebilir."
  },
  {
    tone: "bg-amber-500",
    title: "TikTok ROAS düşük",
    description: "2,7x seviyesinde, hedefin altında. Kreatif yenileme veya hedef kitle revizyonu önerilir."
  },
  {
    tone: "bg-amber-500",
    title: "Funnel ortasında kayıp",
    description: "Tıklama → Lead oranı %5,6, geçen haftaya göre düşüş var. Landing page test edilmeli."
  },
  {
    tone: "bg-green-600",
    title: "Google performansı güçlü",
    description: "ROAS 5,4x, kalite skoru yükseliyor. Bütçe kaydırma fırsatı olabilir."
  }
];

export const mailCampaignStats = [
  {
    label: "Gönderilen",
    value: "24.800",
    trend: "↑ %12",
    tone: "good"
  },
  {
    label: "Açılma oranı",
    value: "%31,2",
    trend: "↑ %2,1",
    tone: "good"
  },
  {
    label: "Tıklama oranı",
    value: "%7,4",
    trend: "↑ %0,8",
    tone: "good"
  },
  {
    label: "Dönüşüm",
    value: "48",
    trend: "→ sabit",
    tone: "neutral"
  },
  {
    label: "Abonelikten çıkma",
    value: "%0,3",
    trend: "iyi",
    tone: "good"
  }
];

export const mailCampaigns = [
  {
    name: "Hoş Geldin Serisi",
    audience: "Yeni lead",
    sent: "8.400",
    openRate: "%34,8",
    clickRate: "%8,1",
    conversion: "21",
    status: "Aktif"
  },
  {
    name: "Sepet Hatırlatma",
    audience: "Sepeti terk edenler",
    sent: "5.900",
    openRate: "%41,2",
    clickRate: "%11,6",
    conversion: "18",
    status: "Aktif"
  },
  {
    name: "Teklif Yenileme",
    audience: "Eski müşteriler",
    sent: "3.200",
    openRate: "%24,5",
    clickRate: "%4,3",
    conversion: "6",
    status: "Taslak"
  },
  {
    name: "Haftalık Bülten",
    audience: "Tüm liste",
    sent: "7.300",
    openRate: "%27,9",
    clickRate: "%5,8",
    conversion: "3",
    status: "Planlandı"
  }
];

export const mailDiagramBlocks = [
  {
    id: "start",
    title: "Başlangıç",
    subtitle: "Yeni lead geldiğinde",
    tone: "start",
    x: "6%",
    y: "24%"
  },
  {
    id: "welcome",
    title: "Mail",
    subtitle: "Hoş geldin mesajı",
    tone: "mail",
    x: "31%",
    y: "24%"
  },
  {
    id: "wait",
    title: "Bekleme",
    subtitle: "1 gün sonra",
    tone: "wait",
    x: "56%",
    y: "24%"
  },
  {
    id: "condition",
    title: "Koşul",
    subtitle: "Mail açıldı mı?",
    tone: "condition",
    x: "31%",
    y: "62%"
  },
  {
    id: "offer",
    title: "Mail",
    subtitle: "Teklif hatırlatma",
    tone: "mail",
    x: "56%",
    y: "62%"
  }
];

export const funnelSummaryCards = [
  {
    label: "Toplam Funnel Trafiği",
    value: "124.592",
    note: "+%12,5 önceki dönem",
    tone: "good"
  },
  {
    label: "Ortalama Dönüşüm",
    value: "%3,2",
    note: "+%0,4 önceki dönem",
    tone: "good"
  },
  {
    label: "Toplam Gelir",
    value: "₺452K",
    note: "+%8,1 önceki dönem",
    tone: "good"
  },
  {
    label: "En Fazla Kayıp",
    value: "Fiyat Sayfası",
    note: "-%45 kayıp oranı",
    tone: "bad"
  }
];

export const funnelCanvasNodes = [
  {
    id: "homepage",
    title: "Ana Sayfa",
    users: "124.592",
    percent: "100%",
    x: "8%",
    y: "18%",
    tone: "neutral"
  },
  {
    id: "product",
    title: "Ürün Sayfası",
    users: "80.984",
    percent: "%65",
    x: "38%",
    y: "18%",
    tone: "neutral"
  },
  {
    id: "pricing",
    title: "Fiyat Sayfası",
    users: "44.541",
    percent: "%35,7",
    x: "68%",
    y: "18%",
    tone: "bad"
  },
  {
    id: "lead",
    title: "Lead Formu",
    users: "5.100",
    percent: "%4,1",
    x: "38%",
    y: "58%",
    tone: "warning"
  },
  {
    id: "sale",
    title: "Satış",
    users: "312",
    percent: "%0,25",
    x: "68%",
    y: "58%",
    tone: "good"
  }
];

export const funnelPerformanceSteps = [
  {
    label: "Ana Sayfa",
    users: "124.592 kullanıcı",
    percent: "100%",
    width: "100%",
    change: "Başlangıç",
    tone: "neutral"
  },
  {
    label: "Ürün Sayfası",
    users: "80.984 kullanıcı",
    percent: "%65",
    width: "65%",
    change: "%35 kayıp",
    tone: "warning"
  },
  {
    label: "Fiyat Sayfası",
    users: "44.541 kullanıcı",
    percent: "%35,7",
    width: "35.7%",
    change: "%45 kayıp",
    tone: "bad"
  }
];

export const funnelBreakdownRows = [
  {
    step: "Ana Sayfa",
    users: "124.592",
    conversion: "100%",
    bounce: "%18,4",
    time: "01:42",
    action: "İncele"
  },
  {
    step: "Ürün Sayfası",
    users: "80.984",
    conversion: "%65",
    bounce: "%27,1",
    time: "02:18",
    action: "Optimize Et"
  },
  {
    step: "Fiyat Sayfası",
    users: "44.541",
    conversion: "%35,7",
    bounce: "%45",
    time: "01:06",
    action: "Test Aç"
  }
];
