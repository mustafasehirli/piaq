import type { Bolum, KKDokuman, KKKlasor } from "@/lib/types/kara-kutu";

export const BOLUMLER: Bolum[] = [
  { slug: "strateji", label: "Strateji & Planlama", icon: "Target" },
  { slug: "reklamlar", label: "Reklam Yönetimi", icon: "Megaphone" },
  { slug: "funnel", label: "Funnel & Dönüşüm", icon: "Filter" },
  { slug: "mail", label: "Mail Marketing", icon: "Mail" },
  { slug: "operasyon", label: "Operasyon & Süreçler", icon: "Settings2" },
  { slug: "ajans-ip", label: "Ajans IP'si", icon: "Lock", restricted: true }
];

export const MOCK_KLASORLER: KKKlasor[] = [
  { id: "1", bolum_slug: "strateji", ad: "Ajans İş Modeli", dokuman_sayisi: 3 },
  { id: "2", bolum_slug: "strateji", ad: "Müşteri Edinme Süreci", dokuman_sayisi: 5 },
  { id: "3", bolum_slug: "reklamlar", ad: "Meta Reklamlar", dokuman_sayisi: 4 },
  { id: "4", bolum_slug: "reklamlar", ad: "Google Ads", dokuman_sayisi: 2 },
  { id: "5", bolum_slug: "funnel", ad: "Lead Funnel", dokuman_sayisi: 6 },
  { id: "6", bolum_slug: "mail", ad: "Otomasyon Akışları", dokuman_sayisi: 3 },
  { id: "7", bolum_slug: "operasyon", ad: "Müşteri Onboarding", dokuman_sayisi: 4 }
];

export const MOCK_DOKUMANLAR: KKDokuman[] = [
  { id: "d1", klasor_id: "1", baslik: "Ajans İş Modeli Rehberi", versiyon: "v1.0", updated_at: "2026-04-10" },
  { id: "d2", klasor_id: "1", baslik: "Hizmet Paketleri Yapısı", versiyon: "v2.1", updated_at: "2026-04-28" },
  { id: "d3", klasor_id: "1", baslik: "Fiyatlandırma Çerçevesi", versiyon: "v1.3", updated_at: "2026-05-01" }
];
