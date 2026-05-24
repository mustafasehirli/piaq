import {
  Activity,
  AlertTriangle,
  BarChart3,
  BellRing,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileText,
  Globe2,
  Image,
  Megaphone,
  MousePointerClick,
  Palette,
  PenLine,
  PlayCircle,
  Share2,
  Sparkles,
  Target,
  Users,
  Wallet
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { SectionTitle, StatusBadge, ValueText, getTintClassName, getToneClassName, type ProductTone } from "@/app/_components/common";

type Tone = ProductTone;

type Kpi = {
  label: string;
  value: string;
  change: string;
  note: string;
  tone: Tone;
  icon: LucideIcon;
};

type Campaign = {
  name: string;
  channel: string;
  goal: string;
  budget: string;
  startDate: string;
  endDate: string;
  owner: string;
  status: string;
  result: string;
  tone: Tone;
};

type ContentItem = {
  title: string;
  platform: string;
  format: string;
  publishDate: string;
  designStatus: string;
  copyStatus: string;
  approvalStatus: string;
  published: string;
  tone: Tone;
};

type AdItem = {
  campaign: string;
  audience: string;
  budget: string;
  copy: string;
  creativeFiles: string;
  landingPage: string;
  result: string;
  variations: string;
  tone: Tone;
};

type CreativeAsset = {
  title: string;
  category: string;
  detail: string;
  owner: string;
  updatedAt: string;
  status: string;
  tone: Tone;
  icon: LucideIcon;
};

type Automation = {
  title: string;
  trigger: string;
  detail: string;
  status: string;
  tone: Tone;
};

const kpis: Kpi[] = [
  { change: "+%14 haftalık", icon: Globe2, label: "Web Ziyaretçisi", note: "Site trafiği", tone: "good", value: "48.260" },
  { change: "+86 lead", icon: Users, label: "Gelen Lead", note: "Form + DM + arama", tone: "good", value: "624" },
  { change: "₺42.000 kaldı", icon: Wallet, label: "Reklam Harcaması", note: "Aylık medya bütçesi", tone: "warning", value: "₺218.400" },
  { change: "-₺18 iyileşme", icon: MousePointerClick, label: "Lead Başı Maliyet", note: "Tüm kanallar", tone: "good", value: "₺350" },
  { change: "+1,7 puan", icon: Target, label: "Kampanya Dönüşüm", note: "Lead / ziyaretçi", tone: "accent", value: "%4,8" },
  { change: "+%22 erişim", icon: Share2, label: "Sosyal Medya Erişimi", note: "Organik + sponsorlu", tone: "good", value: "1,2M" },
  { change: "11 planlandı", icon: CalendarDays, label: "İçerik Yayını", note: "Bu ay yayınlanan", tone: "neutral", value: "46" },
  { change: "ROAS 4,7", icon: BarChart3, label: "En İyi Kanal", note: "Google Search", tone: "accent", value: "Google" }
];

const campaigns: Campaign[] = [
  { budget: "₺86.000", channel: "Google", endDate: "31 Mayıs", goal: "Demo talebi", name: "B2B Arama Talebi", owner: "İrem", result: "214 lead · CPL ₺402", startDate: "01 Mayıs", status: "Aktif", tone: "good" },
  { budget: "₺64.000", channel: "Meta", endDate: "24 Mayıs", goal: "Lead formu", name: "Ajans Sahibi Lead Sprint", owner: "Mert", result: "186 lead · CPL ₺344", startDate: "05 Mayıs", status: "Optimize et", tone: "warning" },
  { budget: "₺38.000", channel: "TikTok", endDate: "20 Mayıs", goal: "Farkındalık", name: "Kısa Video Awareness", owner: "Deniz", result: "420K erişim · CTR %1,7", startDate: "02 Mayıs", status: "Test", tone: "accent" },
  { budget: "₺24.000", channel: "LinkedIn", endDate: "28 Mayıs", goal: "Kurumsal lead", name: "Yönetici Webinar Daveti", owner: "Ayşe", result: "42 kayıt · CPL ₺571", startDate: "08 Mayıs", status: "Riskli", tone: "danger" },
  { budget: "₺0", channel: "Organik", endDate: "Sürekli", goal: "Marka otoritesi", name: "Haftalık Growth İçerikleri", owner: "İrem", result: "92 inbound sinyal", startDate: "01 Mayıs", status: "Aktif", tone: "good" }
];

const contentItems: ContentItem[] = [
  { approvalStatus: "Onaylandı", copyStatus: "Hazır", designStatus: "Hazır", format: "Reels", platform: "Instagram", publishDate: "15 Mayıs", published: "Planlandı", title: "Reklam bütçeni boşa harcıyor olabilirsin", tone: "good" },
  { approvalStatus: "Yönetimde", copyStatus: "Revize", designStatus: "Hazır", format: "Carousel", platform: "LinkedIn", publishDate: "16 Mayıs", published: "Bekliyor", title: "Ajanslarda haftalık performans ritmi", tone: "warning" },
  { approvalStatus: "Onay bekliyor", copyStatus: "Hazır", designStatus: "Tasarımda", format: "Blog", platform: "Web", publishDate: "18 Mayıs", published: "Hayır", title: "Müşteri churn riskini erken görme rehberi", tone: "accent" },
  { approvalStatus: "Onaylandı", copyStatus: "Hazır", designStatus: "Hazır", format: "E-posta", platform: "Mail", publishDate: "20 Mayıs", published: "Planlandı", title: "Mayıs growth raporu daveti", tone: "good" },
  { approvalStatus: "Blokeli", copyStatus: "Eksik", designStatus: "Brief bekliyor", format: "Reklam metni", platform: "Meta", publishDate: "21 Mayıs", published: "Hayır", title: "Yeni teklif şablonu kampanyası", tone: "danger" }
];

const ads: AdItem[] = [
  { audience: "Ajans sahibi · 25-44 · Türkiye", budget: "₺64.000", campaign: "Ajans Sahibi Lead Sprint", copy: "Ajansının reklam, funnel ve operasyonunu tek ekrandan yönet.", creativeFiles: "3 video · 2 statik", landingPage: "/demo-talep", result: "186 lead · CTR %2,9 · CPL ₺344", tone: "good", variations: "5 hook · 3 CTA" },
  { audience: "E-ticaret yöneticisi · sıcak arama", budget: "₺86.000", campaign: "B2B Arama Talebi", copy: "Dağınık reklam raporlarını karar ekranına dönüştür.", creativeFiles: "RSA seti", landingPage: "/reklam-analizi", result: "214 lead · CVR %5,1", tone: "good", variations: "8 başlık · 4 açıklama" },
  { audience: "Freelancer + küçük ajans", budget: "₺38.000", campaign: "Kısa Video Awareness", copy: "Excel, Notion ve reklam panelleri arasında kaybolma.", creativeFiles: "6 kısa video", landingPage: "/piaq", result: "420K erişim · Frekans 2,8", tone: "warning", variations: "6 video · 2 intro" },
  { audience: "CMO + Founder · LinkedIn", budget: "₺24.000", campaign: "Yönetici Webinar Daveti", copy: "Ajans performansını yönetim diline çeviren canlı oturum.", creativeFiles: "2 banner", landingPage: "/webinar", result: "42 kayıt · CPL ₺571", tone: "danger", variations: "2 başlık · 2 görsel" }
];

const creativeAssets: CreativeAsset[] = [
  { category: "Logo", detail: "Ana logo, ikon logo ve koyu/açık kullanım dosyaları", icon: Sparkles, owner: "Marka", status: "Güncel", title: "Piaq logo seti", tone: "good", updatedAt: "10 Mayıs" },
  { category: "Renk paleti", detail: "Ana aksan #f0533a, kanal renkleri ve nötr UI paleti", icon: Palette, owner: "Tasarım", status: "Onaylı", title: "Marka renkleri", tone: "good", updatedAt: "08 Mayıs" },
  { category: "Fontlar", detail: "Dashboard ve pazarlama materyali tipografi kuralları", icon: FileText, owner: "Tasarım", status: "Onaylı", title: "Tipografi sistemi", tone: "neutral", updatedAt: "04 Mayıs" },
  { category: "Marka dili", detail: "Ajans sahiplerine direkt, sakin ve karar odaklı anlatım", icon: PenLine, owner: "İçerik", status: "Revize", title: "Mesaj ve ton rehberi", tone: "warning", updatedAt: "12 Mayıs" },
  { category: "Görsel şablon", detail: "Case study, carousel, rapor ve webinar kapakları", icon: Image, owner: "Tasarım", status: "Hazır", title: "Sosyal medya şablonları", tone: "good", updatedAt: "13 Mayıs" },
  { category: "Video dosyası", detail: "Hook, demo ekranı ve müşteri problem açılışları", icon: PlayCircle, owner: "Prodüksiyon", status: "Üretimde", title: "Kısa video kreatifleri", tone: "accent", updatedAt: "14 Mayıs" }
];

const automations: Automation[] = [
  { detail: "Yayın tarihine 24 saat kala içerik sahibine ve onay sorumlusuna bildirim gönderilir.", status: "Aktif", title: "İçerik tarihi yaklaşınca bildirim", tone: "good", trigger: "Yayın tarihi" },
  { detail: "Kampanya kapanışında kanal, bütçe, lead, CPL ve öğrenim notuyla rapor taslağı açılır.", status: "Aktif", title: "Kampanya bittikten sonra rapor oluşturma", tone: "good", trigger: "Kampanya bitişi" },
  { detail: "Formdan gelen lead, kaynak ve kampanya etiketiyle satış pipeline'ına aktarılır.", status: "Aktif", title: "Formdan gelen lead'i otomatik satışa aktarma", tone: "good", trigger: "Yeni form lead'i" },
  { detail: "CTR, CPL veya dönüşüm hedefin altına inerse pazarlama ekranında uyarı oluşturulur.", status: "İzleniyor", title: "Reklam performansı düşerse uyarı", tone: "warning", trigger: "Performans düşüşü" },
  { detail: "Onay bekleme süresi 48 saati aşan içerikler yönetim karar listesine taşınır.", status: "Planlandı", title: "Onay bekleyen içerikleri yönetime bildirme", tone: "accent", trigger: "Onay gecikmesi" }
];


function TableShell({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto rounded-[22px] border border-[var(--border)] bg-white">{children}</div>;
}

function MiniMetric({ label, value, note, tone }: { label: string; value: string; note: string; tone: Tone }) {
  return (
    <div className={`rounded-[18px] border p-4 ${getTintClassName(tone)}`}>
      <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{label}</p>
      <p className="mt-2 text-[24px] font-black leading-none text-[var(--text-primary)]"><ValueText value={value} /></p>
      <p className="mt-2 text-xs font-bold leading-5 text-[var(--text-muted)]">{note}</p>
    </div>
  );
}

export default function Page() {
  return (
    <div className="mx-auto grid max-w-[1540px] gap-6">
      <header className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] md:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] bg-[var(--text-primary)] text-white shadow-[0_18px_34px_oklch(0.18_0.018_80_/_0.18)]">
              <Megaphone aria-hidden="true" className="size-7" strokeWidth={2.4} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">Departmanlar · Pazarlama</p>
              <h1 className="mt-1 text-[28px] font-black leading-tight text-[var(--text-primary)] md:text-[34px]">Pazarlama Departmanı</h1>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-[var(--text-secondary)]">
                Marka bilinirliği, içerik, reklam, kampanya ve lead üretimini tek talep üretim ekranında toplar.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] px-3 py-2 text-xs font-black text-[var(--accent-green)]">
              <CheckCircle2 aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Kampanya akışı aktif
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-xs font-black text-[var(--text-secondary)]">
              <Activity aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Son güncelleme 14 Mayıs 2026 12:05
            </span>
          </div>
        </div>
      </header>

      <nav aria-label="Pazarlama sayfası bölümleri" className="flex gap-2 overflow-x-auto pb-1">
        {["Pazarlama Dashboard'u", "Kampanya Yönetimi", "İçerik Takvimi", "Reklam Yönetimi", "Marka / Kreatif Kütüphane", "Pazarlama Otomasyonları"].map((item) => (
          <span className="shrink-0 rounded-full border border-[var(--border)] bg-white px-3.5 py-2 text-xs font-black text-[var(--text-secondary)] shadow-[var(--shadow-sm)]" key={item}>
            {item}
          </span>
        ))}
      </nav>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-8">
        {kpis.map((item) => {
          const Icon = item.icon;
          return (
            <article className="min-h-[154px] rounded-[26px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]" key={item.label}>
              <div className="flex items-start justify-between gap-3">
                <span className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.label}</span>
                <span className={`flex size-9 items-center justify-center rounded-[14px] border ${getToneClassName(item.tone)}`}>
                  <Icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
                </span>
              </div>
              <p className="mt-4 text-[30px] font-black leading-none text-[var(--text-primary)]"><ValueText value={item.value} /></p>
              <p className="mt-4 text-xs font-black text-[var(--text-primary)]">{item.change}</p>
              <p className="mt-2 text-xs font-bold leading-5 text-[var(--text-muted)]">{item.note}</p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.82fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Kampanya Yönetimi" title="Kanal, hedef, bütçe, tarih, sorumlu ve sonuç takibi" />
          <TableShell>
            <table className="min-w-[1120px] w-full text-left text-sm">
              <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
                <tr>
                  <th className="px-4 py-3">Kampanya adı</th>
                  <th className="px-4 py-3">Kanal</th>
                  <th className="px-4 py-3">Hedef</th>
                  <th className="px-4 py-3">Bütçe</th>
                  <th className="px-4 py-3">Başlangıç</th>
                  <th className="px-4 py-3">Bitiş</th>
                  <th className="px-4 py-3">Sorumlu</th>
                  <th className="px-4 py-3">Durum</th>
                  <th className="px-4 py-3">Sonuç</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {campaigns.map((campaign) => (
                  <tr className="align-top" key={campaign.name}>
                    <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.name}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{campaign.channel}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{campaign.goal}</td>
                    <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.budget}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{campaign.startDate}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{campaign.endDate}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{campaign.owner}</td>
                    <td className="px-4 py-4"><StatusBadge status={campaign.status} tone={campaign.tone} /></td>
                    <td className="px-4 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{campaign.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableShell>
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Talep üretim özeti" title="En hızlı karar sinyalleri" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <MiniMetric label="En iyi kanal" value="Google" note="ROAS 4,7" tone="accent" />
            <MiniMetric label="En düşük CPL" value="₺344" note="Meta lead sprint" tone="good" />
            <MiniMetric label="Riskli kampanya" value="LinkedIn" note="CPL ₺571" tone="danger" />
            <MiniMetric label="Organik sinyal" value="92" note="Inbound etkileşim" tone="good" />
          </div>
          <div className="mt-5 rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-black text-[var(--text-primary)]">Aylık lead hedefi</p>
              <span className="text-sm font-black text-[var(--accent-green)]">624 / 720</span>
            </div>
            <div className="mt-3 h-2.5 rounded-full bg-white">
              <div className="h-full w-[86%] rounded-full bg-[var(--accent-green)]" />
            </div>
            <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">
              Lead hedefi iyi gidiyor; LinkedIn webinar kampanyası için hedef kitle daraltılmalı.
            </p>
          </div>
        </aside>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.92fr_1fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="İçerik Takvimi" title="Takvim, kanban ve liste görünümü için üretim durumu" />
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              { icon: CalendarDays, label: "Takvim", note: "Yayın tarihleri", tone: "good" as Tone, value: "11 plan" },
              { icon: ClipboardList, label: "Kanban", note: "Tasarım/metin/onay", tone: "warning" as Tone, value: "7 iş" },
              { icon: FileText, label: "Liste", note: "Tüm içerikler", tone: "accent" as Tone, value: "46 kayıt" }
            ].map((view) => {
              const Icon = view.icon;
              return (
                <article className={`rounded-[20px] border p-4 ${getTintClassName(view.tone)}`} key={view.label}>
                  <Icon aria-hidden="true" className="size-5 text-[var(--accent)]" strokeWidth={2.4} />
                  <p className="mt-3 text-sm font-black text-[var(--text-primary)]">{view.label}</p>
                  <p className="mt-1 text-[22px] font-black leading-none text-[var(--text-primary)]">{view.value}</p>
                  <p className="mt-2 text-xs font-bold text-[var(--text-muted)]">{view.note}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-5 grid gap-3">
            {contentItems.map((item) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={item.title}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.platform} · {item.format} · {item.publishDate}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{item.title}</h3>
                  </div>
                  <StatusBadge status={item.published} tone={item.tone} />
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  <StatusBadge status={`Tasarım: ${item.designStatus}`} tone={item.tone} />
                  <StatusBadge status={`Metin: ${item.copyStatus}`} tone={item.tone} />
                  <StatusBadge status={`Onay: ${item.approvalStatus}`} tone={item.tone} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Reklam Yönetimi" title="Hedef kitle, bütçe, metin, kreatif, landing page ve varyasyon" />
          <div className="mt-5 grid gap-3">
            {ads.map((ad) => (
              <article className={`rounded-[22px] border p-4 ${getTintClassName(ad.tone)}`} key={ad.campaign}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{ad.audience}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{ad.campaign}</h3>
                  </div>
                  <StatusBadge status={ad.budget} tone={ad.tone} />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">Reklam metni: {ad.copy}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <MiniMetric label="Kreatif dosyaları" value={ad.creativeFiles} note={ad.variations} tone={ad.tone} />
                  <MiniMetric label="Landing page" value={ad.landingPage} note={ad.result} tone={ad.tone} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.86fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Marka / Kreatif Kütüphane" title="Logo, renk, font, marka dili, şablon, kreatif ve video dosyaları" />
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {creativeAssets.map((asset) => {
              const Icon = asset.icon;
              return (
                <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={asset.title}>
                  <div className="flex items-start justify-between gap-3">
                    <span className={`flex size-10 shrink-0 items-center justify-center rounded-[14px] border ${getToneClassName(asset.tone)}`}>
                      <Icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
                    </span>
                    <StatusBadge status={asset.status} tone={asset.tone} />
                  </div>
                  <p className="mt-4 text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{asset.category} · {asset.updatedAt}</p>
                  <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{asset.title}</h3>
                  <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{asset.detail}</p>
                  <p className="mt-3 text-xs font-black text-[var(--text-primary)]">Sorumlu: {asset.owner}</p>
                </article>
              );
            })}
          </div>
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Pazarlama Otomasyonları" title="Bildirim, rapor, satış aktarımı, performans ve onay akışları" />
          <div className="mt-5 grid gap-3">
            {automations.map((automation) => (
              <article className={`rounded-[20px] border p-4 ${getTintClassName(automation.tone)}`} key={automation.title}>
                <div className="flex items-start justify-between gap-3">
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-[14px] border ${getToneClassName(automation.tone)}`}>
                    {automation.tone === "good" ? <CheckCircle2 aria-hidden="true" className="size-4" strokeWidth={2.4} /> : automation.tone === "danger" ? <AlertTriangle aria-hidden="true" className="size-4" strokeWidth={2.4} /> : <BellRing aria-hidden="true" className="size-4" strokeWidth={2.4} />}
                  </span>
                  <StatusBadge status={automation.status} tone={automation.tone} />
                </div>
                <p className="mt-4 text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{automation.trigger}</p>
                <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{automation.title}</h3>
                <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{automation.detail}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-[linear-gradient(145deg,oklch(0.18_0.016_80),oklch(0.11_0.014_80)_62%,oklch(0.22_0.038_32))] p-5 text-white shadow-[var(--shadow-lg)]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.12em] text-white/50">Pazarlama aksiyon özeti</p>
            <h2 className="mt-2 text-[22px] font-black text-white">Bugün 1 riskli kampanya, 2 onay bekleyen içerik ve 1 performans uyarısı var</h2>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-white/62">
              LinkedIn webinar CPL yüksek; Meta lead sprint kreatifleri korunup bütçe Google Search ile dengelenmeli.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
              <Target aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Lead hedefi %86
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
              <Sparkles aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Kreatif test aktif
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
