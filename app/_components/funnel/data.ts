import type { FunnelViewData } from "./FunnelView";

const sharedPurposes = [
  "Lead toplamak",
  "Randevu almak",
  "Satış yapmak",
  "Webinar kaydı",
  "Teklif başvurusu",
  "Bekleme listesi"
];

const sharedTemplates = [
  "Ajans lead funnel'ı",
  "E-ticaret satış funnel'ı",
  "Webinar funnel'ı",
  "Danışmanlık başvurusu",
  "Ücretsiz analiz funnel'ı",
  "E-kitap indirme"
];

const sharedSetupSteps = [
  { detail: "Lead, randevu, satış, webinar veya teklif başvurusu seçilir.", label: "Funnel amacı seç", status: "Hazır", tone: "good" as const },
  { detail: "Ajans lead, e-ticaret satış, webinar veya analiz şablonu seçilir.", label: "Şablon seç", status: "Hazır", tone: "good" as const },
  { detail: "Landing, form, teşekkür ve takip sayfaları oluşturulur.", label: "Sayfaları oluştur", status: "Sırada", tone: "neutral" as const },
  { detail: "Alanlar, zorunluluklar ve terk riski kontrol edilir.", label: "Formu ayarla", status: "Kontrol", tone: "warning" as const },
  { detail: "Meta Pixel, Google Tag, TikTok Pixel ve UTM kontrolleri bağlanır.", label: "Takip kodlarını bağla", status: "Teknik", tone: "warning" as const },
  { detail: "KVKK metni, bildirimler ve teşekkür sayfası kontrolünden sonra yayınlanır.", label: "Yayına al", status: "Final", tone: "accent" as const }
];

const sharedReports = [
  {
    cadence: "Haftalık",
    content: "Toplam ziyaretçi, toplam lead, dönüşüm oranı, en iyi kaynak ve önerilen aksiyonlar.",
    exportTypes: "PDF, Excel, CSV",
    name: "Haftalık funnel raporu",
    status: "Hazır",
    tone: "good" as const
  },
  {
    cadence: "Aylık",
    content: "Kaynak performansı, en zayıf kaynak, en çok kayıp yaşanan adım ve gelir etkisi.",
    exportTypes: "PDF, Sunum özeti",
    name: "Aylık funnel raporu",
    status: "Planlandı",
    tone: "neutral" as const
  },
  {
    cadence: "Operasyon",
    content: "Lead skoru, trafik kaynağı, form cevapları, cihaz ve satışa hazır lead kırılımı.",
    exportTypes: "Excel, CSV",
    name: "Lead kalitesi raporu",
    status: "Güncel",
    tone: "good" as const
  },
  {
    cadence: "Test",
    content: "A/B test sonuçları, kazanan varyasyon, güven seviyesi ve uygulanacak değişiklikler.",
    exportTypes: "PDF, CSV",
    name: "A/B test raporu",
    status: "Veri bekliyor",
    tone: "warning" as const
  }
];

const sharedSettings = [
  { label: "Domain bağlantısı", status: "Bağlı", tone: "good" as const, value: "funnel.piaq.app aktif" },
  { label: "Funnel URL ayarı", status: "Aktif", tone: "good" as const, value: "/ucretsiz-reklam-analizi" },
  { label: "UTM takibi", status: "Aktif", tone: "good" as const, value: "utm_source, utm_campaign, utm_content saklanıyor" },
  { label: "Meta Pixel", status: "Aktif", tone: "good" as const, value: "PageView, Lead, CompleteRegistration" },
  { label: "Google Tag", status: "Aktif", tone: "good" as const, value: "GA4 conversion ve Google Ads event bağlı" },
  { label: "TikTok Pixel", status: "Aktif", tone: "good" as const, value: "ViewContent ve SubmitForm izleniyor" },
  { label: "Form bildirimleri", status: "Aktif", tone: "good" as const, value: "Satış ekibine anlık bildirim" },
  { label: "KVKK / izin metni", status: "Kontrol", tone: "warning" as const, value: "Mayıs metni hukuk kontrolünde" },
  { label: "Teşekkür sayfası", status: "Aktif", tone: "good" as const, value: "Takvim linki ve WhatsApp CTA açık" },
  { label: "Spam koruması", status: "Aktif", tone: "good" as const, value: "Honeypot ve hız limiti açık" },
  { label: "Webhook ayarları", status: "İzleniyor", tone: "warning" as const, value: "CRM aktarımında 2 gecikmiş deneme var" }
];

export const agencyFunnelData: FunnelViewData = {
  accountStatus: "Funnel izleme aktif",
  aiInsight: {
    description: "AI, teklif alan leadlerde ikinci temas geciktiğinde satışa geçişin sert düştüğünü işaretliyor. Öncelik teklif takip ritmi ve kısa form varyasyonu olmalı.",
    question: "Aksiyonu aç",
    title: "En kritik darboğaz teklif sonrası takipte",
    tone: "bad"
  },
  behavior: [
    { detail: "Kullanıcıların büyük kısmı CTA bloğuna gelmeden önce sayfadan çıkıyor.", metric: "%68", title: "Scroll derinliği zayıf", tone: "bad" },
    { detail: "Mobil kullanıcılar telefon alanında desktop'a göre daha fazla terk ediyor.", metric: "+%19 terk", title: "Form terk noktası", tone: "warning" },
    { detail: "En çok tıklanan alan fiyat / paket karşılaştırması.", metric: "1.240 tık", title: "Tıklama haritası", tone: "good" },
    { detail: "Ortalama sayfada kalma süresi yüksek niyetli trafikte artıyor.", metric: "2 dk 18 sn", title: "Davranış süresi", tone: "good" }
  ],
  breakdownRows: [
    { action: "İzle", avgTime: "1 dk", conversion: "%100", drop: "%0", progress: "100%", step: "Landing Page", tone: "good", users: "18.420" },
    { action: "Kısalt", avgTime: "2 dk", conversion: "%22,8", drop: "%77,2", progress: "42%", step: "Form Başlatıldı", tone: "bad", users: "4.200" },
    { action: "Alan azalt", avgTime: "3 dk", conversion: "%61,9", drop: "%38,1", progress: "62%", step: "Lead Oldu", tone: "warning", users: "2.600" },
    { action: "Takip et", avgTime: "4,6 gün", conversion: "%16", drop: "%84", progress: "44%", step: "Satış Görüşmesi", tone: "bad", users: "416" },
    { action: "Kapat", avgTime: "1,2 gün", conversion: "%20,2", drop: "%79,8", progress: "55%", step: "Satış", tone: "warning", users: "84" }
  ],
  builderSteps: [
    { conversion: "%100", metric: "18.420 ziyaretçi", name: "Reklam Trafiği", note: "Meta, Google, organik ve referans kaynakları.", tone: "accent", type: "Trafik" },
    { conversion: "%22,8 geçti", metric: "Landing Page", name: "Ücretsiz Reklam Analizi", note: "Başlık, alt başlık, CTA ve sosyal kanıt alanı.", tone: "good", type: "Landing Page" },
    { conversion: "2.600 lead", metric: "Form", name: "Teklif Başvuru Formu", note: "Ad soyad, telefon, e-posta, bütçe ve ihtiyaç alanları.", tone: "warning", type: "Form" },
    { conversion: "2.480 ulaştı", metric: "Teşekkür", name: "Teşekkür Sayfası", note: "Takvim linki, WhatsApp CTA ve sonraki adım bilgisi.", tone: "good", type: "Teşekkür Sayfası" },
    { conversion: "416 görüşme", metric: "Takip", name: "Mail / WhatsApp Takibi", note: "Lead skoruna göre otomatik takip ve satış bildirimi.", tone: "warning", type: "Takip" },
    { conversion: "84 satış", metric: "%20,2 kapanış", name: "Satış Görüşmesi", note: "Satış pipeline'a aktarılan uygun fırsatlar.", tone: "good", type: "Satış" }
  ],
  description: "Ajansın kendi lead, teklif, satış ve kapanış akışını; sayfalar, formlar, lead kalitesi, testler ve teknik izleme ile birlikte tek ekranda yönetir.",
  eyebrow: "Ajans Funnel",
  forms: [
    { completions: "2.600", conversion: "%61,9", drop: "%38,1", fields: ["Ad soyad", "Telefon", "E-posta", "Şirket adı", "Bütçe", "İhtiyaç", "Mesaj"], mostAbandonedField: "Telefon numarası", name: "Teklif Başvuru Formu", page: "Ücretsiz Reklam Analizi", starts: "4.200", tone: "warning", views: "10.000" },
    { completions: "642", conversion: "%51,4", drop: "%48,6", fields: ["Ad soyad", "E-posta", "Web sitesi", "Aylık bütçe"], mostAbandonedField: "Aylık bütçe", name: "Demo Talep Formu", page: "Ajans Demo Landing", starts: "1.248", tone: "bad", views: "3.420" },
    { completions: "428", conversion: "%70,4", drop: "%29,6", fields: ["Ad soyad", "E-posta", "Telefon"], mostAbandonedField: "Telefon", name: "Webinar Kayıt Formu", page: "Webinar Kayıt", starts: "608", tone: "good", views: "1.900" }
  ],
  funnelList: [
    { action: "Analiz Et", actionTone: "bad", conversion: "%14,1", drop: "%47", leads: "2.600", name: "Ücretsiz Reklam Analizi Funnel'ı", purpose: "Teklif başvurusu", revenue: "₺420K", status: "Aktif", statusTone: "good", updatedAt: "Bugün 09:10", visitors: "18.420" },
    { action: "Düzenle", actionTone: "warning", conversion: "%5,6", drop: "%62", leads: "642", name: "Ajans Demo Funnel'ı", purpose: "Randevu alma", revenue: "₺186K", status: "Testte", statusTone: "warning", updatedAt: "Dün 18:20", visitors: "11.480" },
    { action: "Görüntüle", actionTone: "good", conversion: "%22,5", drop: "%31", leads: "428", name: "Webinar Kayıt Funnel'ı", purpose: "Webinar kaydı", revenue: "₺92K", status: "Aktif", statusTone: "good", updatedAt: "12 Mayıs", visitors: "1.900" },
    { action: "Kopyala", actionTone: "neutral", conversion: "%0", drop: "-", leads: "-", name: "E-kitap İndirme Funnel'ı", purpose: "E-kitap indirme", revenue: "-", status: "Taslak", statusTone: "neutral", updatedAt: "10 Mayıs", visitors: "-" }
  ],
  health: {
    bottleneck: "Form sayfasında telefon alanı ve teklif sonrası takip",
    description: "Lead hacmi sağlıklı ancak form tamamlama ve tekliften satışa geçişte belirgin sürtünme var.",
    label: "Takip gerekli",
    score: "%74"
  },
  lastSync: "Son veri 14 Mayıs 2026 09:30",
  leads: [
    { date: "Bugün 09:12", detail: "Bütçe cevabı yüksek, 5 sayfa gezdi, CTA tıkladı.", email: "ahmet@novaklinik.com", funnel: "Ücretsiz Reklam Analizi", name: "Ahmet Yılmaz", page: "Teklif Formu", phone: "+90 532 000 12 11", score: "86/100", source: "Meta Reklam", status: "Satışa hazır", tone: "good", utm: "utm_campaign=lead_analysis" },
    { date: "Bugün 08:44", detail: "Google arama niyeti güçlü, fiyat sayfasına tekrar döndü.", email: "elif@atlas.com", funnel: "Ajans Demo", name: "Elif Demir", page: "Demo Formu", phone: "+90 533 000 18 91", score: "78/100", source: "Google", status: "Sıcak lead", tone: "good", utm: "utm_source=google" },
    { date: "Dün 17:20", detail: "Formu mobil doldurdu, teklif sayfasını görmedi.", email: "mert@pera.co", funnel: "Webinar Kayıt", name: "Mert Kaya", page: "Webinar Formu", phone: "+90 534 000 20 84", score: "54/100", source: "Organik", status: "İletişime geçildi", tone: "warning", utm: "utm_medium=seo" },
    { date: "Dün 15:10", detail: "Düşük bütçe cevabı ve tek sayfa ziyareti.", email: "info@luna.com", funnel: "Ücretsiz Reklam Analizi", name: "Luna Studio", page: "Teklif Formu", phone: "+90 535 000 42 18", score: "32/100", source: "LinkedIn", status: "Uygun değil", tone: "bad", utm: "utm_content=case_study" }
  ],
  pages: [
    { conversion: "%14,1", desktopConversion: "%17,6", drop: "%47", funnel: "Ücretsiz Reklam Analizi", mobileConversion: "%9,8", name: "Ücretsiz Reklam Analizi", score: "78/100", scoreNote: "CTA görünürlüğü iyi, mobil form alanı ve reklam mesajı uyumu iyileştirilmeli.", status: "Aktif", tone: "warning", type: "Landing Page", url: "/ucretsiz-reklam-analizi", visitors: "18.420" },
    { conversion: "%51,4", desktopConversion: "%58,2", drop: "%48,6", funnel: "Ajans Demo", mobileConversion: "%39,4", name: "Demo Talep Sayfası", score: "66/100", scoreNote: "Sayfa hızı ve form uzunluğu dönüşümü baskılıyor.", status: "Testte", tone: "bad", type: "Form Sayfası", url: "/demo-talep", visitors: "3.420" },
    { conversion: "%70,4", desktopConversion: "%74,1", drop: "%29,6", funnel: "Webinar Kayıt", mobileConversion: "%64,8", name: "Webinar Kayıt Sayfası", score: "84/100", scoreNote: "Kısa form ve net CTA güçlü çalışıyor.", status: "Aktif", tone: "good", type: "Webinar Kayıt Sayfası", url: "/webinar-kayit", visitors: "1.900" }
  ],
  purposes: sharedPurposes,
  reports: sharedReports,
  scopeLabel: "Ajans iç funnel",
  segments: [
    { conversion: "%9,2", delta: "-%6", detail: "Cihaz", name: "Mobil", tone: "bad", width: "46%" },
    { conversion: "%18,7", delta: "+%10", detail: "Cihaz", name: "Desktop", tone: "good", width: "94%" },
    { conversion: "%15,4", delta: "+%4", detail: "Ülke", name: "Türkiye", tone: "good", width: "77%" },
    { conversion: "%11,8", delta: "-%2", detail: "Yeni ziyaretçi", name: "İlk temas", tone: "warning", width: "59%" }
  ],
  settings: sharedSettings,
  setupSteps: sharedSetupSteps,
  signals: [
    { description: "Landing çok ziyaret alıyor ama form tamamlama hedefin altında.", metric: "%38,1 terk", status: "Form", title: "Form sayfasında kayıp", tone: "bad" },
    { description: "Mobil kullanıcıların dönüşüm oranı desktop'a göre düşük.", metric: "-%7,8", status: "Mobil", title: "Mobil dönüşüm zayıf", tone: "warning" },
    { description: "Meta'dan gelen trafik hacimli, Google daha kaliteli lead getiriyor.", metric: "+%12 kalite", status: "Kaynak", title: "Kaynak kalitesi ayrışıyor", tone: "good" }
  ],
  sources: [
    { conversion: "%3,9", delta: "+%12", name: "Organik", revenue: "₺182K", tone: "good", visitors: "7.800", width: "78%" },
    { conversion: "%4,6", delta: "+%8", name: "Referans", revenue: "₺96K", tone: "good", visitors: "3.420", width: "86%" },
    { conversion: "%2,1", delta: "-%3", name: "LinkedIn", revenue: "₺54K", tone: "warning", visitors: "4.100", width: "42%" },
    { conversion: "%1,8", delta: "-%7", name: "Email", revenue: "₺38K", tone: "bad", visitors: "3.100", width: "34%" }
  ],
  stages: [
    { drop: "%0", label: "Landing Page", note: "Reklam, organik ve referans trafiği", rate: "%100", tone: "good", value: "18.420", width: "100%" },
    { drop: "%77,2", label: "Form Başlatıldı", note: "CTA sonrası formu açan ziyaretçiler", rate: "%22,8", tone: "bad", value: "4.200", width: "72%" },
    { drop: "%38,1", label: "Lead Oldu", note: "Formu tamamlayan ve KVKK onayı verenler", rate: "%61,9", tone: "warning", value: "2.600", width: "58%" },
    { drop: "%84", label: "Satış Görüşmesi", note: "Satış ekibine aktarılan uygun fırsatlar", rate: "%16", tone: "bad", value: "416", width: "38%" },
    { drop: "%79,8", label: "Satış", note: "Kapanan müşteri ve ödeme adımı", rate: "%20,2", tone: "warning", value: "84", width: "24%" }
  ],
  summaryCards: [
    { icon: "visitors", label: "Toplam Ziyaretçi", note: "+%11 hafta", tone: "good", value: "18.420" },
    { icon: "leads", label: "Toplam Lead", note: "+642 yeni lead", tone: "good", value: "2.600" },
    { icon: "conversion", label: "Dönüşüm Oranı", note: "+%0,4 hafta", tone: "good", value: "%14,1" },
    { icon: "form", label: "Form Doldurma Oranı", note: "Telefon alanı riskli", tone: "warning", value: "%61,9" },
    { icon: "sales", label: "Satın Alma / Başvuru", note: "84 satış", tone: "accent", value: "416" },
    { icon: "drop", label: "Terk Oranı", note: "Form adımı yüksek", tone: "bad", value: "%47" },
    { icon: "best", label: "En İyi Funnel", note: "Webinar kayıt", tone: "good", value: "%22,5" },
    { icon: "weak", label: "En Zayıf Funnel", note: "Demo talep", tone: "bad", value: "%5,6" }
  ],
  templates: sharedTemplates,
  title: "Ajans Satış Funnel'ı",
  trends: [
    { conversion: 11.8, label: "1 May", leads: 290, visitors: 2100 },
    { conversion: 12.4, label: "5 May", leads: 318, visitors: 2340 },
    { conversion: 12.1, label: "9 May", leads: 304, visitors: 2260 },
    { conversion: 13.2, label: "13 May", leads: 352, visitors: 2480 },
    { conversion: 12.9, label: "17 May", leads: 341, visitors: 2400 },
    { conversion: 14.0, label: "21 May", leads: 382, visitors: 2610 },
    { conversion: 13.6, label: "25 May", leads: 369, visitors: 2530 },
    { conversion: 14.1, label: "30 May", leads: 404, visitors: 2860 }
  ],
  abTests: [
    { conversion: "B varyasyonu %31 daha fazla lead getirdi", name: "Kısa form mu uzun form mu?", page: "Teklif Başvuru Formu", status: "Kazanan seçildi", tone: "good", trafficSplit: "50 / 50", variationA: "6 alanlı form", variationB: "3 alanlı form", winner: "Varyasyon B" },
    { conversion: "Varyasyon B +%14 CTA tıklaması", name: "Landing başlığı", page: "Ücretsiz Reklam Analizi", status: "Aktif", tone: "warning", trafficSplit: "60 / 40", variationA: "Reklam hesabınızı analiz edelim", variationB: "Bütçeniz boşa gidiyor olabilir", winner: "Veri bekleniyor" },
    { conversion: "Kontrol daha stabil", name: "Teşekkür sayfası CTA", page: "Teşekkür Sayfası", status: "Tamamlandı", tone: "neutral", trafficSplit: "50 / 50", variationA: "Takvim seç", variationB: "WhatsApp'tan yaz", winner: "Varyasyon A" }
  ],
  actions: [
    { description: "Teklif alan leadler için 24 saat içinde ikinci temas planlanmalı.", metric: "84 satış fırsatı", status: "Yüksek", title: "Teklif takip ritmini sıklaştır", tone: "bad" },
    { description: "Telefon ve bütçe alanları iki adımlı forma ayrılarak test edilmeli.", metric: "%38,1 form terk", status: "Orta", title: "Form uzunluğunu test et", tone: "warning" },
    { description: "Yüksek skorlu leadler için satış ekibine anlık uyarı verilmeli.", metric: "86/100 skor", status: "Normal", title: "Lead skoru uyarısını aç", tone: "good" }
  ]
};

export const customerFunnelData: FunnelViewData = {
  ...agencyFunnelData,
  accountStatus: "Müşteri funnel izleme aktif",
  description: "Seçili müşterinin reklam trafiğinden lead, teklif, ödeme ve satış adımına kadar olan funnel performansını tüm alt kırılımlarıyla gösterir.",
  eyebrow: "Müşteri Funnel",
  health: {
    bottleneck: "Mobil checkout ve ödeme sayfası terk oranı",
    description: "Reklamdan forma geçiş güçlü, ödeme adımında mobil terk oranı ayrıca takip edilmeli.",
    label: "Sağlıklı",
    score: "%86"
  },
  lastSync: "Son veri 14 Mayıs 2026 09:35",
  scopeLabel: "Müşteri reklam funnel'ı",
  title: "Müşteri Dönüşüm Funnel'ı",
  summaryCards: [
    { icon: "visitors", label: "Toplam Ziyaretçi", note: "+%12 hafta", tone: "good", value: "22,1K" },
    { icon: "leads", label: "Toplam Lead", note: "+1.240 lead", tone: "good", value: "1.240" },
    { icon: "conversion", label: "Dönüşüm Oranı", note: "+%1,2 hafta", tone: "good", value: "%14,8" },
    { icon: "form", label: "Form Doldurma Oranı", note: "Kısa form güçlü", tone: "good", value: "%72,4" },
    { icon: "sales", label: "Satın Alma / Başvuru", note: "184 satış", tone: "accent", value: "312" },
    { icon: "drop", label: "Terk Oranı", note: "Mobil ödeme riski", tone: "warning", value: "%41" },
    { icon: "best", label: "En İyi Funnel", note: "Email kaynaklı", tone: "good", value: "%18,4" },
    { icon: "weak", label: "En Zayıf Funnel", note: "TikTok trafik", tone: "warning", value: "%8,6" }
  ],
  trends: [
    { conversion: 12.8, label: "1 May", leads: 410, visitors: 3200 },
    { conversion: 13.4, label: "5 May", leads: 455, visitors: 3400 },
    { conversion: 13.1, label: "9 May", leads: 432, visitors: 3300 },
    { conversion: 14.2, label: "13 May", leads: 511, visitors: 3600 },
    { conversion: 13.9, label: "17 May", leads: 498, visitors: 3580 },
    { conversion: 14.6, label: "21 May", leads: 548, visitors: 3750 },
    { conversion: 14.1, label: "25 May", leads: 522, visitors: 3700 },
    { conversion: 14.8, label: "30 May", leads: 592, visitors: 4000 }
  ],
  stages: [
    { drop: "%0", label: "Landing Page", note: "Reklamdan gelen oturumlar", rate: "%100", tone: "good", value: "22,1K", width: "100%" },
    { drop: "%41", label: "Form Görüntüleme", note: "Ürün / teklif sayfasından forma gelenler", rate: "%59", tone: "good", value: "13,0K", width: "76%" },
    { drop: "%27,6", label: "Lead Oldu", note: "Formu tamamlayan leadler", rate: "%72,4", tone: "good", value: "1.240", width: "58%" },
    { drop: "%75", label: "Teklif", note: "Teklif aşamasına geçen leadler", rate: "%25", tone: "warning", value: "312", width: "38%" },
    { drop: "%41", label: "Ödeme / Satış", note: "Satış veya ödeme tamamlayanlar", rate: "%59", tone: "warning", value: "184", width: "28%" }
  ],
  funnelList: [
    { action: "Test Et", actionTone: "warning", conversion: "%14,8", drop: "%41", leads: "1.240", name: "Ana Satış Funnel'ı", purpose: "Satış yapma", revenue: "₺690K", status: "Aktif", statusTone: "good", updatedAt: "Bugün 09:35", visitors: "22,1K" },
    { action: "Analiz Et", actionTone: "good", conversion: "%18,4", drop: "%32", leads: "588", name: "Email Teklif Funnel'ı", purpose: "Teklif başvurusu", revenue: "₺210K", status: "Aktif", statusTone: "good", updatedAt: "Dün 16:40", visitors: "3.200" },
    { action: "Düzenle", actionTone: "warning", conversion: "%8,6", drop: "%54", leads: "378", name: "TikTok Lead Funnel'ı", purpose: "Lead toplama", revenue: "₺88K", status: "Testte", statusTone: "warning", updatedAt: "12 Mayıs", visitors: "4.400" },
    { action: "Görüntüle", actionTone: "neutral", conversion: "%0", drop: "-", leads: "-", name: "Webinar Kayıt Funnel'ı", purpose: "Webinar kaydı", revenue: "-", status: "Taslak", statusTone: "neutral", updatedAt: "10 Mayıs", visitors: "-" }
  ],
  builderSteps: [
    { conversion: "%100", metric: "22,1K ziyaretçi", name: "Reklam", note: "Meta, Google ve TikTok trafik kaynakları.", tone: "accent", type: "Trafik" },
    { conversion: "%59 geçti", metric: "Ürün Sayfası", name: "Ana Teklif Sayfası", note: "Ürün faydası, fiyat, sosyal kanıt ve CTA.", tone: "good", type: "Satış Sayfası" },
    { conversion: "1.240 lead", metric: "Form", name: "Teklif Formu", note: "Telefon, e-posta, ihtiyaç ve bütçe alanları.", tone: "good", type: "Form" },
    { conversion: "312 teklif", metric: "Checkout", name: "Teklif / Checkout", note: "Teklif veya ödeme adımına geçiş.", tone: "warning", type: "Checkout" },
    { conversion: "184 satış", metric: "%59 ödeme", name: "Ödeme", note: "Mobil ödeme terk oranı izleniyor.", tone: "warning", type: "Ödeme" },
    { conversion: "184 ulaştı", metric: "Teşekkür", name: "Teşekkür Sayfası", note: "Onboarding ve mail takip adımı.", tone: "good", type: "Teşekkür" }
  ],
  sources: [
    { conversion: "%18,4", delta: "+%11", name: "Email", revenue: "₺58K", tone: "good", visitors: "3.200", width: "92%" },
    { conversion: "%15,2", delta: "+%7", name: "Organic", revenue: "₺74K", tone: "good", visitors: "5.900", width: "76%" },
    { conversion: "%12,9", delta: "+%3", name: "Meta", revenue: "₺92K", tone: "accent", visitors: "8.600", width: "64%" },
    { conversion: "%8,6", delta: "-%5", name: "TikTok", revenue: "₺31K", tone: "warning", visitors: "4.400", width: "43%" }
  ],
  segments: [
    { conversion: "%9,2", delta: "-%6", detail: "Cihaz", name: "Mobil", tone: "bad", width: "46%" },
    { conversion: "%18,7", delta: "+%10", detail: "Cihaz", name: "Desktop", tone: "good", width: "94%" },
    { conversion: "%15,4", delta: "+%4", detail: "Ülke", name: "Türkiye", tone: "good", width: "77%" },
    { conversion: "%11,8", delta: "-%2", detail: "Kitle", name: "Yeni ziyaretçi", tone: "warning", width: "59%" }
  ],
  signals: [
    { description: "Mobil ödeme sayfasında terk oranı normal bandın üstünde.", metric: "%41 terk", status: "Ödeme", title: "Checkout sürtünmesi", tone: "bad" },
    { description: "Meta hacim getiriyor, Email daha yüksek dönüşüm oranı üretiyor.", metric: "%18,4", status: "Kaynak", title: "Email trafik kaliteli", tone: "good" },
    { description: "TikTok trafiği yüksek ama lead kalitesi ve form tamamlama düşük.", metric: "-%5", status: "Kreatif", title: "TikTok niyeti zayıf", tone: "warning" }
  ],
  actions: [
    { description: "Mobil cihazlarda ödeme formu ve sayfa hızı kontrol edilmeli.", metric: "%41 terk", status: "Acil", title: "Mobil ödeme adımını test et", tone: "bad" },
    { description: "Fiyat ve teslimat beklentisi daha açık anlatılmalı.", metric: "312 teklif", status: "Orta", title: "Teklif sayfası mesajını netleştir", tone: "warning" },
    { description: "Lead hacmi artarken spam ve düşük niyetli formlar izlenmeli.", metric: "1.240 lead", status: "Normal", title: "Form kalitesini koru", tone: "good" }
  ],
  aiInsight: {
    description: "AI, mobil kullanıcıların ödeme adımında desktop kullanıcılara göre belirgin daha fazla terk ettiğini işaretliyor. İlk kontrol ödeme formu, sayfa hızı ve CTA görünürlüğü olmalı.",
    question: "Aksiyonu aç",
    title: "Mobil ödeme adımı en kritik darboğaz",
    tone: "bad"
  }
};
