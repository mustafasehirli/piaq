import { Activity, BadgeCheck, BarChart3, CalendarDays, FileText, Mail, Sparkles, Target, TrendingUp, Users, Video, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ValueText } from "@/app/_components/common/ProductUI";
import { TikTokLogoMono } from "@/components/icons/BrandIcons";

type Tone = "good" | "warning" | "danger" | "neutral";
type ChannelKind = "tiktok" | "social" | "mail";

type Kpi = {
  label: string;
  value: string;
  note: string;
  tone: Tone;
};

type SectionItem = {
  detail: string;
  metric: string;
  name: string;
  status: string;
  tone: Tone;
  type: string;
};

export type ChannelDashboardData = {
  accent: string;
  accountStatus: string;
  description: string;
  kind: ChannelKind;
  kpis: Kpi[];
  lastSync: string;
  scopeLabel: string;
  sections: {
    icon: LucideIcon;
    items: SectionItem[];
    kicker: string;
    title: string;
  }[];
  title: string;
};

function getToneClass(tone: Tone) {
  if (tone === "good") return "border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] text-[var(--accent-green)]";
  if (tone === "warning") return "border-[oklch(0.92_0.055_75)] bg-[var(--accent-amber-light)] text-[var(--accent-amber)]";
  if (tone === "danger") return "border-[oklch(0.91_0.055_25)] bg-[var(--accent-red-light)] text-[var(--accent-red)]";
  return "border-[var(--border)] bg-white text-[var(--text-secondary)]";
}

function getToneDotClass(tone: Tone) {
  if (tone === "good") return "bg-[var(--accent-green)]";
  if (tone === "warning") return "bg-[var(--accent-amber)]";
  if (tone === "danger") return "bg-[var(--accent-red)]";
  return "bg-[var(--text-muted)]";
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div>
      {kicker ? <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">{kicker}</p> : null}
      <h2 className="mt-1 text-[20px] font-black text-[var(--text-primary)]">{title}</h2>
    </div>
  );
}

function HeaderIcon({ data }: { data: ChannelDashboardData }) {
  if (data.kind === "tiktok") return <TikTokLogoMono aria-hidden="true" className="size-7" />;
  if (data.kind === "mail") return <Mail aria-hidden="true" className="size-7" strokeWidth={2.4} />;
  return <Users aria-hidden="true" className="size-7" strokeWidth={2.4} />;
}

export function ChannelDashboardView({ data }: { data: ChannelDashboardData }) {
  return (
    <div className="mx-auto grid max-w-[1540px] gap-6">
      <header className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] md:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] text-white shadow-[0_18px_34px_oklch(0.18_0.018_80_/_0.16)]" style={{ background: data.accent }}>
              <HeaderIcon data={data} />
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

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.kpis.map((item) => (
          <article className="min-h-[142px] rounded-[26px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]" key={item.label}>
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.label}</span>
              <span className={`size-2.5 rounded-full ${getToneDotClass(item.tone)}`} />
            </div>
            <p className="mt-4 text-[30px] font-black leading-none text-[var(--text-primary)]"><ValueText value={item.value} /></p>
            <p className="mt-4 text-xs font-bold leading-5 text-[var(--text-muted)]">{item.note}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        {data.sections.map((section) => (
          <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]" key={section.title}>
            <SectionTitle kicker={section.kicker} title={section.title} />
            <div className="mt-5 grid gap-3">
              {section.items.map((item) => (
                <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={`${section.title}-${item.name}`}>
                  <div className="flex items-start gap-3">
                    <span className={`flex size-10 shrink-0 items-center justify-center rounded-[14px] border ${getToneClass(item.tone)}`}>
                      <section.icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.type}</p>
                          <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{item.name}</h3>
                        </div>
                        <span className={`rounded-full border px-2.5 py-1 text-[11px] font-black ${getToneClass(item.tone)}`}>{item.status}</span>
                      </div>
                      <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.detail}</p>
                      <p className="mt-3 text-sm font-black text-[var(--text-primary)]">{item.metric}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}

const tiktokSections = [
  {
    icon: Video,
    kicker: "Kampanyalar",
    title: "Video ve kampanya performansı",
    items: [
      { detail: "Dönüşüm kampanyası gerçek lead getiriyor, CPA hedefte.", metric: "₺238 CPA · 4,2x ROAS", name: "Creator Spark - Demo", status: "Büyüt", tone: "good" as Tone, type: "Dönüşüm" },
      { detail: "İzlenme yüksek ama tıklama ve dönüşüm zayıf.", metric: "%0,8 CTR", name: "Trend Ses - Awareness", status: "İzle", tone: "warning" as Tone, type: "Video izlenme" }
    ]
  },
  {
    icon: Sparkles,
    kicker: "Hook Analizi",
    title: "İlk 3 saniye ve kreatif notları",
    items: [
      { detail: "Problem odaklı açılış daha yüksek izlenme ve dönüşüm getiriyor.", metric: "%41 ilk 3 sn", name: "Bütçen boşa gidiyor olabilir", status: "Kazanan hook", tone: "good" as Tone, type: "Hook" },
      { detail: "Uzun giriş yapan videolarda ilk 3 saniye kaybı fazla.", metric: "%19 ilk 3 sn", name: "Merhaba bugün size...", status: "Zayıf", tone: "danger" as Tone, type: "Hook" }
    ]
  },
  {
    icon: TrendingUp,
    kicker: "Trendler",
    title: "Format ve içerik fırsatları",
    items: [
      { detail: "Önce / sonra formatı müşteri sonucu göstermek için uygun.", metric: "Yüksek uygunluk", name: "Önce / Sonra formatı", status: "Planla", tone: "good" as Tone, type: "Trend" },
      { detail: "Sektör konularında kısa problem çözüm formatı yükseliyor.", metric: "+%18 popülerlik", name: "Problem çözüm serisi", status: "Test et", tone: "neutral" as Tone, type: "Trend" }
    ]
  },
  {
    icon: Target,
    kicker: "Pixel / Eventler",
    title: "TikTok Pixel sağlığı",
    items: [
      { detail: "PageView, SubmitForm ve CompletePayment eventleri geliyor.", metric: "Son veri 8 dk önce", name: "Pixel Durumu", status: "Aktif", tone: "good" as Tone, type: "Pixel" },
      { detail: "ClickButton eventinde eşleşme orta seviyede.", metric: "Orta", name: "Event Verisi", status: "İzle", tone: "warning" as Tone, type: "Event" }
    ]
  }
];

const socialSections = [
  {
    icon: BarChart3,
    kicker: "Genel Bakış",
    title: "Hesap sağlığı ve büyüme",
    items: [
      { detail: "Takipçi büyümesi ve erişim dengeli ilerliyor.", metric: "+%8 takipçi artışı", name: "Hesap Sağlığı", status: "İyi", tone: "good" as Tone, type: "Performans" },
      { detail: "Profil ziyaretinden link tıklamasına geçiş düşüyor.", metric: "%2,1 link CTR", name: "Profil Dönüşümü", status: "İyileştir", tone: "warning" as Tone, type: "Dönüşüm" }
    ]
  },
  {
    icon: CalendarDays,
    kicker: "İçerik Planı",
    title: "Takvim ve yayın durumu",
    items: [
      { detail: "Bu hafta 6 içerik planlı, 2 içerik onay bekliyor.", metric: "6 planlı içerik", name: "Haftalık Takvim", status: "Takipte", tone: "neutral" as Tone, type: "Takvim" },
      { detail: "Reels formatı erişim ve kaydetmede öne çıkıyor.", metric: "%7,4 etkileşim", name: "Reels Serisi", status: "Büyüt", tone: "good" as Tone, type: "Format" }
    ]
  },
  {
    icon: Users,
    kicker: "Rakipler",
    title: "Rakip ve pazar sinyalleri",
    items: [
      { detail: "Rakiplerde case study formatı daha fazla yorum alıyor.", metric: "+%22 yorum", name: "Rakip Case Study", status: "Fikir üret", tone: "warning" as Tone, type: "Rakip" },
      { detail: "Sektörde kısa eğitim carousel formatı yükseliyor.", metric: "+%16 kaydetme", name: "Eğitim Carousel", status: "Planla", tone: "good" as Tone, type: "Trend" }
    ]
  },
  {
    icon: Sparkles,
    kicker: "İçerik Fikirleri",
    title: "Üretim kuyruğu",
    items: [
      { detail: "Müşteri sonucu, ekip içi süreç ve reklam hataları serisi hazırlanmalı.", metric: "9 fikir", name: "Fikir Havuzu", status: "Hazır", tone: "good" as Tone, type: "Fikir" },
      { detail: "Onay bekleyen briefler yayın takvimini sıkıştırıyor.", metric: "3 bekleyen", name: "Onay Kuyruğu", status: "Risk", tone: "warning" as Tone, type: "Operasyon" }
    ]
  }
];

const mailSections = [
  {
    icon: Mail,
    kicker: "Kampanyalar",
    title: "Gönderim ve etkileşim",
    items: [
      { detail: "Mayıs bülteni yüksek açılma ve yeterli tıklama üretiyor.", metric: "%38 açılma · %7 tıklama", name: "Mayıs Bülteni", status: "Gönderildi", tone: "good" as Tone, type: "Kampanya" },
      { detail: "Teklif hatırlatma maili satış pipeline'ına lead taşıyor.", metric: "18 toplantı", name: "Teklif Hatırlatma", status: "Aktif", tone: "good" as Tone, type: "Kampanya" }
    ]
  },
  {
    icon: Zap,
    kicker: "Otomasyonlar",
    title: "Lead takip akışları",
    items: [
      { detail: "Yeni lead karşılama serisi satışa sıcak lead aktarıyor.", metric: "42 sıcak lead", name: "Yeni Lead Serisi", status: "Çalışıyor", tone: "good" as Tone, type: "Otomasyon" },
      { detail: "30 gündür etkileşim olmayan kişiler için yeniden aktivasyon gerekiyor.", metric: "186 pasif kişi", name: "Eski Lead Aktivasyonu", status: "Planla", tone: "warning" as Tone, type: "Otomasyon" }
    ]
  },
  {
    icon: Target,
    kicker: "Segmentler",
    title: "Kitle ve kişi durumu",
    items: [
      { detail: "Teklif alanlar segmentinde tıklama oranı yüksek.", metric: "%12 tıklama", name: "Teklif Alanlar", status: "Sıcak", tone: "good" as Tone, type: "Segment" },
      { detail: "Hatalı mail ve abonelikten çıkma oranı izlenmeli.", metric: "%1,8 bounce", name: "Liste Sağlığı", status: "İzle", tone: "warning" as Tone, type: "Liste" }
    ]
  },
  {
    icon: FileText,
    kicker: "Şablonlar / Rapor",
    title: "Mail performans sonucu",
    items: [
      { detail: "Mail → Lead → Toplantı → Teklif → Satış akışı ölçülüyor.", metric: "4 müşteri · ₺120K gelir", name: "Mayıs Mail Performansı", status: "Hazır", tone: "good" as Tone, type: "Rapor" },
      { detail: "Konu başlığı ve spam riski için şablon iyileştirme önerileri var.", metric: "6 öneri", name: "AI Şablon İyileştirme", status: "Uygula", tone: "neutral" as Tone, type: "Şablon" }
    ]
  }
];

export const agencyTikTokData: ChannelDashboardData = {
  accent: "#0F766E",
  accountStatus: "Bağlantı aktif",
  description: "TikTok reklamlarında video, hook, trend, hedef kitle ve pixel event performansı ortak ekranda izlenir.",
  kind: "tiktok",
  kpis: [
    { label: "Toplam Harcama", value: "₺42.600", note: "Video dönüşüm kampanyaları önde", tone: "neutral" },
    { label: "Video İzlenme", value: "1,8M", note: "İlk 3 saniye oranı %34", tone: "good" },
    { label: "CTR", value: "%1,94", note: "Hook testleri etkili", tone: "good" },
    { label: "CPA", value: "₺312", note: "2 kreatif yüksek maliyetli", tone: "warning" }
  ],
  lastSync: "8 dk önce",
  scopeLabel: "Son 30 gün · Ajans hesabı",
  sections: tiktokSections,
  title: "TikTok Reklam Merkezi"
};

export const customerTikTokData = { ...agencyTikTokData, scopeLabel: "Son 30 gün · Müşteri hesabı" };

export const agencySocialData: ChannelDashboardData = {
  accent: "var(--channel-social)",
  accountStatus: "Hesaplar aktif",
  description: "Sosyal medya tarafında hesap sağlığı, performans analizi, içerik takvimi, rakipler ve fikir kuyruğu ortak ekranda izlenir.",
  kind: "social",
  kpis: [
    { label: "Toplam Takipçi", value: "84.200", note: "Bu ay +3.420 takipçi", tone: "good" },
    { label: "Etkileşim Oranı", value: "%6,8", note: "Reels ve carousel önde", tone: "good" },
    { label: "Erişim", value: "1,2M", note: "Organik erişim yükseldi", tone: "good" },
    { label: "Profil Ziyareti", value: "18.400", note: "Link tıklaması izlenmeli", tone: "warning" }
  ],
  lastSync: "22 dk önce",
  scopeLabel: "Son 30 gün · Ajans hesabı",
  sections: socialSections,
  title: "Sosyal Medya Merkezi"
};

export const customerSocialData = { ...agencySocialData, scopeLabel: "Son 30 gün · Müşteri hesabı" };

export const agencyMailData: ChannelDashboardData = {
  accent: "var(--channel-mail)",
  accountStatus: "Mail sistemi aktif",
  description: "Mail kampanyaları, otomasyonlar, segmentler, şablonlar, takvim ve satışa etkisi ortak ekranda izlenir.",
  kind: "mail",
  kpis: [
    { label: "Gönderim", value: "4.200", note: "Teslim oranı %98", tone: "good" },
    { label: "Açılma", value: "%38", note: "Konu başlıkları güçlü", tone: "good" },
    { label: "Tıklama", value: "%7", note: "CTA performansı iyi", tone: "good" },
    { label: "Satış Etkisi", value: "₺120K", note: "4 müşteri kazanıldı", tone: "good" }
  ],
  lastSync: "18 dk önce",
  scopeLabel: "Son 30 gün · Ajans hesabı",
  sections: mailSections,
  title: "Mail Pazarlama Merkezi"
};

export const customerMailData = { ...agencyMailData, scopeLabel: "Son 30 gün · Müşteri hesabı" };
