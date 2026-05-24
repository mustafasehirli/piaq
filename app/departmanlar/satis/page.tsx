import {
  AlertTriangle,
  BadgeCheck,
  BellRing,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  Handshake,
  Mail,
  Phone,
  Send,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  XCircle
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

type Lead = {
  company: string;
  contact: string;
  phone: string;
  email: string;
  source: string;
  service: string;
  status: string;
  owner: string;
  lastContact: string;
  nextFollowUp: string;
  note: string;
  tone: Tone;
};

type PipelineColumn = {
  stage: string;
  value: string;
  count: string;
  tone: Tone;
  items: Array<{
    company: string;
    owner: string;
    amount: string;
    nextStep: string;
  }>;
};

type Proposal = {
  title: string;
  company: string;
  amount: string;
  scope: string;
  validUntil: string;
  status: string;
  sent: string;
  accepted: string;
  tone: Tone;
};

type Meeting = {
  company: string;
  contact: string;
  need: string;
  objections: string;
  budget: string;
  decisionMaker: string;
  nextStep: string;
  owner: string;
  date: string;
  tone: Tone;
};

type Automation = {
  title: string;
  detail: string;
  trigger: string;
  status: string;
  tone: Tone;
};

const kpis: Kpi[] = [
  { change: "+18 bu hafta", icon: Users, label: "Toplam Lead", note: "Aktif CRM havuzu", tone: "good", value: "248" },
  { change: "+12 bugün", icon: UserCheck, label: "Yeni Lead", note: "Satışçı ataması bekliyor", tone: "warning", value: "34" },
  { change: "7 gecikmiş", icon: CalendarClock, label: "Görüşme Bekleyenler", note: "Takvim planı gerekli", tone: "warning", value: "42" },
  { change: "₺1,18M açık", icon: Send, label: "Teklif Gönderilenler", note: "Takip ritmi kritik", tone: "accent", value: "26" },
  { change: "+6 müşteri", icon: BadgeCheck, label: "Kazanılan Müşteri", note: "Bu ay kapanan", tone: "good", value: "18" },
  { change: "4 sebep eksik", icon: XCircle, label: "Kaybedilen Fırsat", note: "Kayıp sebebi istenmeli", tone: "danger", value: "11" },
  { change: "%68 gerçekleşti", icon: Target, label: "Aylık Satış Hedefi", note: "Mayıs hedefi", tone: "warning", value: "₺2,4M" },
  { change: "+%14 ay", icon: CircleDollarSign, label: "Gerçekleşen Satış", note: "Kapalı kazanılmış gelir", tone: "good", value: "₺1,63M" },
  { change: "+₺12K", icon: Handshake, label: "Ort. Anlaşma Tutarı", note: "Yeni müşteriler", tone: "good", value: "₺90,5K" },
  { change: "+2,4 puan", icon: TrendingUp, label: "Satış Dönüşüm Oranı", note: "Lead -> müşteri", tone: "good", value: "%7,2" }
];

const leads: Lead[] = [
  { company: "Nova Klinik", contact: "Ayşe Kara", email: "ayse@novaklinik.com", lastContact: "Bugün 09:20", nextFollowUp: "Bugün 16:00", note: "Meta lead, bütçe yüksek, karar verici görüşmede.", owner: "Mert", phone: "+90 532 000 10 24", service: "Performans reklam", source: "Instagram", status: "Toplantı Planlandı", tone: "good" },
  { company: "Atlas Eğitim", contact: "Kerem Deniz", email: "kerem@atlasegitim.com", lastContact: "Dün 17:40", nextFollowUp: "15 Mayıs", note: "Google reklam ve funnel kurulumu istiyor.", owner: "İrem", phone: "+90 533 000 18 42", service: "Google Ads + Funnel", source: "Web formu", status: "İhtiyaç Analizi", tone: "good" },
  { company: "Luna E-ticaret", contact: "Elif Arslan", email: "elif@luna.com", lastContact: "12 Mayıs", nextFollowUp: "Bugün 13:30", note: "Teklif gönderildi, fiyat itirazı var.", owner: "Ayşe", phone: "+90 534 000 22 18", service: "Meta + TikTok", source: "Referans", status: "Pazarlık", tone: "warning" },
  { company: "Pera Labs", contact: "Murat Eren", email: "murat@peralabs.io", lastContact: "9 Mayıs", nextFollowUp: "Gecikti", note: "3 gündür takip yapılmadı, otomasyon uyarısı üretildi.", owner: "Mert", phone: "+90 535 000 44 91", service: "SaaS growth", source: "Soğuk mesaj", status: "İletişime Geçildi", tone: "danger" },
  { company: "Mira Studio", contact: "Derya Şen", email: "derya@mirastudio.co", lastContact: "Bugün 10:10", nextFollowUp: "17 Mayıs", note: "Sosyal medya ve içerik planı için teklif hazırlanacak.", owner: "İrem", phone: "+90 536 000 90 11", service: "Sosyal medya", source: "Reklam", status: "Teklif Hazırlanıyor", tone: "neutral" }
];

const pipeline: PipelineColumn[] = [
  { count: "34 lead", items: [{ amount: "₺48K", company: "Apex Dental", nextStep: "İlk arama", owner: "Mert" }, { amount: "₺36K", company: "Vega Eğitim", nextStep: "Satışçı ata", owner: "İrem" }], stage: "Yeni Lead", tone: "warning", value: "₺420K" },
  { count: "28 fırsat", items: [{ amount: "₺72K", company: "Pera Labs", nextStep: "Takip uyarısı", owner: "Mert" }], stage: "İletişime Geçildi", tone: "danger", value: "₺610K" },
  { count: "19 fırsat", items: [{ amount: "₺96K", company: "Atlas Eğitim", nextStep: "İhtiyaç notu", owner: "İrem" }], stage: "İhtiyaç Analizi", tone: "good", value: "₺540K" },
  { count: "14 toplantı", items: [{ amount: "₺120K", company: "Nova Klinik", nextStep: "Demo görüşmesi", owner: "Mert" }], stage: "Toplantı Planlandı", tone: "good", value: "₺480K" },
  { count: "9 teklif", items: [{ amount: "₺64K", company: "Mira Studio", nextStep: "Kapsam netleştir", owner: "İrem" }], stage: "Teklif Hazırlanıyor", tone: "neutral", value: "₺310K" },
  { count: "26 teklif", items: [{ amount: "₺180K", company: "Luna E-ticaret", nextStep: "2 gün takip", owner: "Ayşe" }], stage: "Teklif Gönderildi", tone: "accent", value: "₺1,18M" },
  { count: "7 fırsat", items: [{ amount: "₺220K", company: "Orion Health", nextStep: "Fiyat itirazı", owner: "Mert" }], stage: "Pazarlık", tone: "warning", value: "₺620K" },
  { count: "18 müşteri", items: [{ amount: "₺140K", company: "Zen Finans", nextStep: "Operasyon projesi açıldı", owner: "Ayşe" }], stage: "Kazanıldı", tone: "good", value: "₺1,63M" },
  { count: "11 fırsat", items: [{ amount: "₺58K", company: "Rota Clinic", nextStep: "Kayıp sebebi sor", owner: "İrem" }], stage: "Kaybedildi", tone: "danger", value: "₺390K" }
];

const proposals: Proposal[] = [
  { accepted: "Bekliyor", amount: "₺180.000", company: "Luna E-ticaret", scope: "Meta, TikTok, funnel ve raporlama", sent: "Evet", status: "Pazarlık", title: "Growth Paket Teklifi", tone: "warning", validUntil: "20 Mayıs" },
  { accepted: "Hayır", amount: "₺64.000", company: "Mira Studio", scope: "Sosyal medya yönetimi ve içerik planı", sent: "Hayır", status: "Hazırlanıyor", title: "Sosyal Medya Teklifi", tone: "neutral", validUntil: "24 Mayıs" },
  { accepted: "Evet", amount: "₺140.000", company: "Zen Finans", scope: "Google Ads, Meta Ads ve aylık strateji", sent: "Evet", status: "Kabul Edildi", title: "Performans Pazarlama Teklifi", tone: "good", validUntil: "31 Mayıs" },
  { accepted: "Reddedildi", amount: "₺58.000", company: "Rota Clinic", scope: "Meta lead kampanyası ve landing page", sent: "Evet", status: "Kaybedildi", title: "Lead Kampanyası Teklifi", tone: "danger", validUntil: "Süresi doldu" }
];

const meetings: Meeting[] = [
  { budget: "₺120K / ay", company: "Nova Klinik", contact: "Ayşe Kara", date: "14 Mayıs 15:00", decisionMaker: "Kurucu ortak", need: "Hasta talebi ve randevu kalitesi artışı", nextStep: "Demo sonrası teklif", objections: "Önceki ajans raporlama yapmamış", owner: "Mert", tone: "good" },
  { budget: "₺80K / ay", company: "Atlas Eğitim", contact: "Kerem Deniz", date: "15 Mayıs 11:00", decisionMaker: "Genel müdür", need: "Google arama talebini satışa çevirmek", nextStep: "Funnel örneği paylaş", objections: "CRM entegrasyonu sorusu", owner: "İrem", tone: "neutral" },
  { budget: "₺180K / ay", company: "Luna E-ticaret", contact: "Elif Arslan", date: "13 Mayıs 16:30", decisionMaker: "E-ticaret müdürü", need: "Meta ROAS ve TikTok kreatif üretimi", nextStep: "Fiyat revizyonu", objections: "Kurulum ücreti yüksek", owner: "Ayşe", tone: "warning" }
];

const automations: Automation[] = [
  { detail: "Yeni lead geldiğinde ilgili satışçıya anlık bildirim ve CRM görevi oluşturulur.", status: "Aktif", title: "Lead geldiyse satışçıya bildirim", tone: "good", trigger: "Yeni lead" },
  { detail: "Son iletişim tarihi 3 günü geçerse satışçı ve ekip liderine uyarı düşer.", status: "Çalıştı", title: "3 gün takip yapılmadıysa uyarı", tone: "danger", trigger: "Takip gecikti" },
  { detail: "Teklif gönderildikten 2 gün sonra otomatik takip hatırlatması planlanır.", status: "Aktif", title: "Teklif sonrası takip hatırlatması", tone: "warning", trigger: "Teklif gönderildi" },
  { detail: "Kazanıldı durumunda operasyon departmanında müşteri onboarding projesi açılır.", status: "Aktif", title: "Kazanıldı olunca operasyon projesi aç", tone: "good", trigger: "Kazanıldı" },
  { detail: "Kaybedildi seçilince fiyat, zamanlama, ihtiyaç dışı veya rakip seçildi sebebi istenir.", status: "Zorunlu", title: "Kaybedildi olunca kayıp sebebi sor", tone: "neutral", trigger: "Kaybedildi" }
];


function TableShell({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto rounded-[22px] border border-[var(--border)] bg-white">{children}</div>;
}

function MiniStat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-[18px] border border-[var(--border)] bg-white p-4">
      <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{label}</p>
      <p className="mt-2 text-[23px] font-black leading-none text-[var(--text-primary)]"><ValueText value={value} /></p>
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
            <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] bg-[var(--accent)] text-white shadow-[0_18px_34px_rgb(240_83_58_/_0.22)]">
              <Handshake aria-hidden="true" className="size-7" strokeWidth={2.4} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">Departmanlar · Satış</p>
              <h1 className="mt-1 text-[28px] font-black leading-tight text-[var(--text-primary)] md:text-[34px]">Satış Departmanı</h1>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-[var(--text-secondary)]">
                Lead, görüşme, teklif, sözleşme ve müşteri akışını tek satış operasyon ekranında takip eder.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] px-3 py-2 text-xs font-black text-[var(--accent-green)]">
              <CheckCircle2 aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Pipeline aktif
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-xs font-black text-[var(--text-secondary)]">
              <CalendarClock aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Son güncelleme 14 Mayıs 2026 10:15
            </span>
          </div>
        </div>
      </header>

      <nav aria-label="Satış sayfası bölümleri" className="flex gap-2 overflow-x-auto pb-1">
        {["Satış Dashboard'u", "Lead / CRM Tablosu", "Satış Pipeline", "Teklif Yönetimi", "Satış Görüşmeleri", "Satış Otomasyonları"].map((item) => (
          <span className="shrink-0 rounded-full border border-[var(--border)] bg-white px-3.5 py-2 text-xs font-black text-[var(--text-secondary)] shadow-[var(--shadow-sm)]" key={item}>
            {item}
          </span>
        ))}
      </nav>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
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
          <SectionTitle kicker="Satış Pipeline" title="Lead → görüşme → teklif → sözleşme → müşteri" />
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {pipeline.map((column, index) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={column.stage}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{index + 1}. aşama</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{column.stage}</h3>
                  </div>
                  <StatusBadge status={column.count} tone={column.tone} />
                </div>
                <p className="mt-3 text-[24px] font-black leading-none text-[var(--text-primary)]">{column.value}</p>
                <div className="mt-4 grid gap-2">
                  {column.items.map((item) => (
                    <div className="rounded-[16px] border border-[var(--border)] bg-white p-3" key={`${column.stage}-${item.company}`}>
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs font-black text-[var(--text-primary)]">{item.company}</p>
                        <span className="text-xs font-black text-[var(--accent)]">{item.amount}</span>
                      </div>
                      <p className="mt-1 text-[11px] font-bold text-[var(--text-muted)]">{item.owner} · {item.nextStep}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Satış sağlığı" title="Hedef, gerçekleşen ve takip riski" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <MiniStat label="Hedef gerçekleşme" value="%68" note="Mayıs satış hedefi" />
            <MiniStat label="Açık teklif" value="₺1,18M" note="26 teklif gönderildi" />
            <MiniStat label="Geciken takip" value="7" note="3 gün eşiği geçti" />
            <MiniStat label="Kapanış hızı" value="8,4 gün" note="Lead -> kazanıldı" />
          </div>
          <div className="mt-5 grid gap-3">
            {automations.slice(0, 3).map((item) => (
              <article className={`rounded-[20px] border p-4 ${getTintClassName(item.tone)}`} key={item.title}>
                <div className="flex items-start gap-3">
                  <BellRing aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[var(--accent)]" strokeWidth={2.4} />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-black text-[var(--text-primary)]">{item.title}</h3>
                      <StatusBadge status={item.status} tone={item.tone} />
                    </div>
                    <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <SectionTitle kicker="Lead / CRM Tablosu" title="Lead kaynakları, sorumlular ve takip tarihleri" />
        <TableShell>
          <table className="min-w-[1180px] w-full text-left text-sm">
            <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              <tr>
                <th className="px-4 py-3">Firma</th>
                <th className="px-4 py-3">Yetkili</th>
                <th className="px-4 py-3">Telefon</th>
                <th className="px-4 py-3">E-posta</th>
                <th className="px-4 py-3">Kaynak</th>
                <th className="px-4 py-3">Hizmet</th>
                <th className="px-4 py-3">Durum</th>
                <th className="px-4 py-3">Sorumlu</th>
                <th className="px-4 py-3">Son iletişim</th>
                <th className="px-4 py-3">Sonraki takip</th>
                <th className="px-4 py-3">Not</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {leads.map((lead) => (
                <tr className="align-top" key={`${lead.company}-${lead.email}`}>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{lead.company}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{lead.contact}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{lead.phone}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{lead.email}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{lead.source}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{lead.service}</td>
                  <td className="px-4 py-4"><StatusBadge status={lead.status} tone={lead.tone} /></td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{lead.owner}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{lead.lastContact}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{lead.nextFollowUp}</td>
                  <td className="px-4 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{lead.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableShell>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle kicker="Teklif Yönetimi" title="Teklif oluşturma, gönderim ve kabul takibi" />
            <div className="flex flex-wrap gap-2">
              {["Teklif oluştur", "Şablonlar", "PDF çıktı", "Müşteriye gönder", "Kabul edildi işaretle"].map((action) => (
                <span className="rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-[11px] font-black text-[var(--text-secondary)]" key={action}>{action}</span>
              ))}
            </div>
          </div>
          <div className="mt-5 grid gap-3">
            {proposals.map((proposal) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={proposal.title}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{proposal.company}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{proposal.title}</h3>
                  </div>
                  <StatusBadge status={proposal.status} tone={proposal.tone} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-4">
                  <MiniStat label="Tutar" value={proposal.amount} note="Teklif tutarı" />
                  <MiniStat label="Geçerlilik" value={proposal.validUntil} note="Son tarih" />
                  <MiniStat label="Gönderildi mi?" value={proposal.sent} note="Müşteri durumu" />
                  <MiniStat label="Kabul" value={proposal.accepted} note="Sonuç" />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">Hizmet kapsamı: {proposal.scope}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Satış Görüşmeleri" title="Notlar, itirazlar ve sonraki adımlar" />
          <div className="mt-5 grid gap-3">
            {meetings.map((meeting) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={`${meeting.company}-${meeting.date}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{meeting.date} · {meeting.owner}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{meeting.company} · {meeting.contact}</h3>
                  </div>
                  <StatusBadge status={meeting.nextStep} tone={meeting.tone} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <MiniStat label="Müşteri ihtiyacı" value={meeting.need} note={meeting.decisionMaker} />
                  <MiniStat label="Bütçe" value={meeting.budget} note="Beyan edilen bütçe" />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">İtirazlar: {meeting.objections}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <SectionTitle kicker="Satış Otomasyonları" title="Bildirim, takip, operasyon devri ve kayıp sebebi akışları" />
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {automations.map((automation) => (
            <article className={`rounded-[22px] border p-4 ${getTintClassName(automation.tone)}`} key={automation.title}>
              <div className="flex items-start justify-between gap-3">
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-[14px] border ${getToneClassName(automation.tone)}`}>
                  {automation.tone === "good" ? <CheckCircle2 aria-hidden="true" className="size-4" strokeWidth={2.4} /> : automation.tone === "danger" ? <AlertTriangle aria-hidden="true" className="size-4" strokeWidth={2.4} /> : <ClipboardList aria-hidden="true" className="size-4" strokeWidth={2.4} />}
                </span>
                <StatusBadge status={automation.status} tone={automation.tone} />
              </div>
              <p className="mt-4 text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{automation.trigger}</p>
              <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{automation.title}</h3>
              <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{automation.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-[linear-gradient(145deg,oklch(0.18_0.016_80),oklch(0.11_0.014_80)_62%,oklch(0.22_0.038_32))] p-5 text-white shadow-[var(--shadow-lg)]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.12em] text-white/50">Satış aksiyon özeti</p>
            <h2 className="mt-2 text-[22px] font-black text-white">Bugün 7 geciken takip ve 3 kritik teklif var</h2>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-white/62">
              Öncelik Pera Labs takip uyarısı, Luna E-ticaret fiyat itirazı ve Nova Klinik demo sonrası teklif hazırlığı olmalı.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
              <Phone aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Arama listesi
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
              <Mail aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Takip mailleri
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
