import type { KesifKartiData } from "./KesifKarti";
import { pipelineColors } from "@/lib/data/pipeline-colors";

export const pipelineColumns = [
  {
    title: "Temas",
    value: "₺86K",
    count: 4,
    color: pipelineColors.temas,
    cards: [
      { company: "Nova Klinik", owner: "Mustafa", source: "Referans", budget: "₺24K", next: "İlk arama", day: "Bugün", score: "A" },
      { company: "Atelier Home", owner: "Elif", source: "Web Form", budget: "₺18K", next: "İhtiyaç analizi", day: "Yarın", score: "B" }
    ]
  },
  {
    title: "Randevular",
    value: "₺112K",
    count: 5,
    color: pipelineColors.randevu,
    cards: [
      { company: "Luna Eğitim", owner: "Mustafa", source: "LinkedIn", budget: "₺36K", next: "Demo toplantısı", day: "6 May", score: "A" },
      { company: "Vera Beauty", owner: "Deniz", source: "Instagram", budget: "₺22K", next: "Hedef netleştirme", day: "7 May", score: "B" }
    ]
  },
  {
    title: "Teklif",
    value: "₺174K",
    count: 6,
    color: pipelineColors.teklif,
    cards: [
      { company: "Mira Mobilya", owner: "Elif", source: "Google Ads", budget: "₺48K", next: "Teklif revizyonu", day: "Bugün", score: "A" },
      { company: "Orbit SaaS", owner: "Mustafa", source: "Partner", budget: "₺64K", next: "Satın alma onayı", day: "8 May", score: "A" }
    ]
  },
  {
    title: "Bekleme",
    value: "₺96K",
    count: 4,
    color: pipelineColors.bekleme,
    cards: [
      { company: "Pera Clinic", owner: "Elif", source: "Teklif", budget: "₺52K", next: "Tekrar tanıtım", day: "14 May", score: "A" },
      { company: "Atlas Eğitim", owner: "Mustafa", source: "Demo", budget: "₺44K", next: "Karar bekleniyor", day: "20 May", score: "B" }
    ]
  },
  {
    title: "Kapanış",
    value: "₺110K",
    count: 3,
    color: pipelineColors.kapanis,
    cards: [
      { company: "Kaya Otel", owner: "Deniz", source: "Referans", budget: "₺58K", next: "Sözleşme şartları", day: "5 May", score: "A" },
      { company: "Rota Spor", owner: "Mustafa", source: "Etkinlik", budget: "₺30K", next: "Kapsam kararı", day: "9 May", score: "B" }
    ]
  },
  {
    title: "Kayıp",
    value: "₺72K",
    count: 2,
    color: pipelineColors.kayip,
    cards: [
      { company: "Nora Dental", owner: "Deniz", source: "Soğuk Arama", budget: "₺42K", next: "Anlaşma sağlanamadı", day: "Kayıp", score: "C" },
      { company: "Vadi Tekstil", owner: "Elif", source: "LinkedIn", budget: "₺30K", next: "Bütçe uyumsuzluğu", day: "Kayıp", score: "B" }
    ]
  }
];

export const mockKesifKartlari: KesifKartiData[] = [
  {
    id: "k1",
    isletmeAdi: "Lezzet Mutfağı",
    sektor: "Restoran",
    sehir: "İstanbul",
    website: "lezzetmutfagi.com",
    email: "info@lezzetmutfagi.com",
    metaReklam: false,
    kaynak: "Apollo",
    etiket: "Potansiyel"
  },
  {
    id: "k2",
    isletmeAdi: "Fit Studio",
    sektor: "Spor Salonu",
    sehir: "Ankara",
    website: "fitstudio.com.tr",
    email: "iletisim@fitstudio.com.tr",
    metaReklam: true,
    kaynak: "Apollo",
    etiket: "Fırsat"
  },
  {
    id: "k3",
    isletmeAdi: "Doğa Kozmetik",
    sektor: "Kozmetik",
    sehir: "İzmir",
    website: "dogakozmetik.com",
    email: "merhaba@dogakozmetik.com",
    metaReklam: false,
    kaynak: "Google Places",
    etiket: "İnceleme"
  }
];

export const activityItems = [
  { title: "Mira Mobilya teklif revizyonu istedi", meta: "22 dakika önce", tone: "var(--accent-amber)" },
  { title: "Nova Klinik ilk randevu notu eklendi", meta: "1 saat önce", tone: "var(--accent)" },
  { title: "Kaya Otel sözleşme aşamasına geçti", meta: "Bugün 11:20", tone: "var(--accent-green)" }
];

export function getOpportunityLabel(score: string) {
  if (score === "A") return "Fırsat";
  if (score === "B") return "Potansiyel";
  return "İnceleme";
}

export function getColumnMetric(title: string) {
  const column = pipelineColumns.find((currentColumn) => currentColumn.title === title);

  return {
    count: column?.count ?? 0,
    value: column?.value ?? "0",
    color: column?.color ?? "var(--text-muted)"
  };
}

