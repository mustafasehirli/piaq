import {
  Activity,
  AlertTriangle,
  BarChart3,
  BellRing,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  Filter,
  Handshake,
  Instagram,
  Mail,
  Megaphone,
  MousePointerClick,
  ShieldCheck,
  TrendingUp,
  Users,
  Wallet,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ComponentType, ReactNode, SVGProps } from "react";
import {
  DecisionSummary,
  KpiCard,
  MetricTile,
  SectionTitle,
  StatusBadge,
  getTintClassName,
  getToneClassName,
  type ProductTone
} from "@/app/_components/common";
import { GoogleLogoMono, MetaLogoMono, TikTokLogoMono } from "@/components/icons/BrandIcons";

type Tone = ProductTone;

type IconComponent = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

type Kpi = {
  label: string;
  value: string;
  change: string;
  note: string;
  tone: Tone;
  icon: LucideIcon;
};

type ChannelRow = {
  channel: string;
  icon: IconComponent;
  spend: string;
  lead: string;
  cpl: string;
  roas: string;
  status: string;
  action: string;
  tone: Tone;
  logo?: boolean;
};

type RadarItem = {
  title: string;
  detail: string;
  owner: string;
  status: string;
  tone: Tone;
};

type CustomerHealth = {
  customer: string;
  service: string;
  monthlyRevenue: string;
  health: string;
  risk: string;
  nextAction: string;
  tone: Tone;
};

type FunnelStage = {
  stage: string;
  count: string;
  conversion: string;
  value: string;
  status: string;
  tone: Tone;
};

type OperationItem = {
  area: string;
  metric: string;
  detail: string;
  owner: string;
  status: string;
  tone: Tone;
};

type FinanceItem = {
  label: string;
  value: string;
  detail: string;
  tone: Tone;
};

type DecisionItem = {
  title: string;
  impact: string;
  owner: string;
  due: string;
  tone: Tone;
};

const kpis: Kpi[] = [
  { change: "+%16 önceki aya göre", icon: CircleDollarSign, label: "Aylık Gelir", note: "Aktif müşteri + yeni satış", tone: "good", value: "₺1.284.000" },
  { change: "4 riskli müşteri", icon: Users, label: "Aktif Müşteri", note: "Portföy sağlığı", tone: "warning", value: "21" },
  { change: "₺42K bütçe kaldı", icon: Wallet, label: "Reklam Harcaması", note: "Ajans kendi kanalları", tone: "warning", value: "₺318.400" },
  { change: "+86 bu hafta", icon: MousePointerClick, label: "Toplam Lead", note: "Meta, Google, TikTok, mail", tone: "good", value: "1.248" },
  { change: "₺1.84M pipeline", icon: Handshake, label: "Satış Fırsatı", note: "Teklif + demo", tone: "good", value: "19" },
  { change: "11 geciken iş", icon: BriefcaseBusiness, label: "Operasyon Riski", note: "Teslim ve müşteri onayı", tone: "danger", value: "4 müşteri" },
  { change: "+0,6x iyileşme", icon: TrendingUp, label: "Ortalama ROAS", note: "Ajans büyüme kampanyaları", tone: "good", value: "4,2x" },
  { change: "5 fatura gecikti", icon: BellRing, label: "Bekleyen Tahsilat", note: "Finans takibi", tone: "warning", value: "₺318K" }
];

const channels: ChannelRow[] = [
  { action: "Bütçe artır", channel: "Meta", cpl: "₺240", icon: MetaLogoMono, lead: "214", logo: true, roas: "4,8x", spend: "₺51,4K", status: "Kazanan", tone: "good" },
  { action: "Search genişlet", channel: "Google", cpl: "₺226", icon: GoogleLogoMono, lead: "174", logo: true, roas: "5,3x", spend: "₺39,4K", status: "Güçlü", tone: "good" },
  { action: "Hook yenile", channel: "TikTok", cpl: "₺318", icon: TikTokLogoMono, lead: "118", logo: true, roas: "3,1x", spend: "₺37,5K", status: "Testte", tone: "warning" },
  { action: "Reels temposu koru", channel: "Sosyal Medya", cpl: "Organik", icon: Instagram, lead: "92 sinyal", roas: "-", spend: "₺0", status: "Büyüyor", tone: "good" },
  { action: "Formu kısalt", channel: "Funnel", cpl: "₺186", icon: Filter, lead: "642", roas: "5,6x", spend: "₺119K", status: "Darboğaz", tone: "danger" },
  { action: "Segment temizle", channel: "Mail", cpl: "₺92", icon: Mail, lead: "34", roas: "2,7x", spend: "₺3,1K", status: "Verimli", tone: "good" }
];

const radarItems: RadarItem[] = [
  { detail: "Demo sonrası fiyat itirazı kapatılacak; karar verici bugün müsait.", owner: "Satış · Mert", status: "Bugün", title: "Nova Klinik teklif kapanışı", tone: "good" },
  { detail: "Landing revizesi iki gündür bekliyor; müşteri onayı için tek karar mesajı hazırlanmalı.", owner: "Operasyon · Ayşe", status: "Riskli", title: "Atlas onboarding gecikmesi", tone: "danger" },
  { detail: "LinkedIn CPL hedefin %34 üstünde; bütçe Google Search ve Meta lead sprint'e kaydırılabilir.", owner: "Pazarlama · İrem", status: "Optimize", title: "Kanal bütçe dağılımı", tone: "warning" },
  { detail: "Vadesi geçmiş 5 faturanın 2 tanesi kritik nakit dönemine denk geliyor.", owner: "Finans · Deniz", status: "Tahsilat", title: "Geciken ödeme takibi", tone: "warning" }
];

const customers: CustomerHealth[] = [
  { customer: "Nova Klinik", health: "%88", monthlyRevenue: "₺96K", nextAction: "Bütçe artırımı için teklif sun", risk: "Düşük", service: "Meta + Google", tone: "good" },
  { customer: "Atlas E-Ticaret", health: "%63", monthlyRevenue: "₺72K", nextAction: "Onboarding revizesini kapat", risk: "Orta", service: "Growth paket", tone: "warning" },
  { customer: "Mavi Akademi", health: "%48", monthlyRevenue: "₺48,5K", nextAction: "Tahsilat + performans görüşmesi", risk: "Yüksek", service: "Lead generation", tone: "danger" },
  { customer: "Vera Mobilya", health: "%79", monthlyRevenue: "₺118K", nextAction: "Rapor toplantısını karar notuyla bitir", risk: "Takip", service: "Tam ajans hizmeti", tone: "accent" }
];

const funnelStages: FunnelStage[] = [
  { conversion: "%100", count: "11.480", stage: "Ziyaretçi", status: "Güçlü trafik", tone: "good", value: "₺318K harcama" },
  { conversion: "%51,4", count: "642", stage: "Form Başlangıcı", status: "Form uzun", tone: "danger", value: "Demo talep" },
  { conversion: "%38,6", count: "248", stage: "Nitelikli Lead", status: "İyi kalite", tone: "good", value: "₺1.84M pipeline" },
  { conversion: "%29,8", count: "74", stage: "Demo", status: "Takip ritmi", tone: "warning", value: "19 fırsat" },
  { conversion: "%18,9", count: "14", stage: "Teklif", status: "Kapanış", tone: "accent", value: "₺806K teklif" }
];

const operations: OperationItem[] = [
  { area: "Teslimat", detail: "4 müşteri işi planlanan teslim süresini aştı.", metric: "11 geciken görev", owner: "Ayşe", status: "Riskli", tone: "danger" },
  { area: "Raporlama", detail: "Haftalık raporların %86'sı zamanında çıktı.", metric: "%86 zamanında", owner: "Deniz", status: "İyi", tone: "good" },
  { area: "SOP", detail: "Yeni müşteri onboarding SOP'u 3 adımdan 2'sinde kullanılıyor.", metric: "%67 kullanım", owner: "Operasyon", status: "Gelişiyor", tone: "accent" },
  { area: "Ekip Kapasitesi", detail: "Operasyon uzmanı alımı gecikirse Haziran kapasitesi sıkışır.", metric: "%91 doluluk", owner: "İK", status: "Takip", tone: "warning" }
];

const finance: FinanceItem[] = [
  { detail: "Aylık kapanış tahmini", label: "Net Kâr", tone: "good", value: "₺541.500" },
  { detail: "Önümüzdeki 30 gün", label: "Beklenen Tahsilat", tone: "warning", value: "₺318.000" },
  { detail: "Maaş + yazılım + ofis", label: "Sabit Gider", tone: "neutral", value: "₺412.000" },
  { detail: "Nakit pozisyonu", label: "Runway", tone: "accent", value: "52 gün" }
];

const decisions: DecisionItem[] = [
  { due: "Bugün 16:00", impact: "₺86K bütçe yeniden dağıtımı", owner: "Pazarlama + Yönetim", title: "LinkedIn bütçesini Google ve Meta'ya kaydır", tone: "warning" },
  { due: "Bugün 17:00", impact: "4 müşteri teslim riskini kapatır", owner: "Operasyon", title: "Geciken teslimler için tek sorumlu ataması", tone: "danger" },
  { due: "Yarın 10:00", impact: "Demo dönüşümünü artırır", owner: "Funnel + Satış", title: "Demo formundaki bütçe alanını sadeleştir", tone: "good" },
  { due: "20 Mayıs", impact: "Tahsilat gecikmesini azaltır", owner: "Finans", title: "Geciken fatura otomasyonunu aktif takip listesine bağla", tone: "accent" }
];

function TableShell({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto rounded-[22px] border border-[var(--border)] bg-white">{children}</div>;
}

export default function Page() {
  return (
    <div className="mx-auto grid max-w-[1540px] gap-6">
      <header className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] md:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] bg-[var(--text-primary)] text-white shadow-[0_18px_34px_oklch(0.18_0.018_80_/_0.18)]">
              <BarChart3 aria-hidden="true" className="size-7" strokeWidth={2.4} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">Ajans · Merkez</p>
              <h1 className="mt-1 text-[28px] font-black leading-tight text-[var(--text-primary)] md:text-[34px]">Ajans Yönetim Merkezi</h1>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-[var(--text-secondary)]">
                Ajansın kendi büyüme kanallarını, satış funnel&apos;ını, müşteri sağlığını, operasyon risklerini ve finans sinyallerini tek karar ekranında toplar.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] px-3 py-2 text-xs font-black text-[var(--accent-green)]">
              <ShieldCheck aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Ajans sağlığı %78
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-xs font-black text-[var(--text-secondary)]">
              <Activity aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Son güncelleme 15 Mayıs 2026 09:30
            </span>
          </div>
        </div>
      </header>

      <nav aria-label="Ajans genel bölümleri" className="flex gap-2 overflow-x-auto pb-1">
        {["Ajans özeti", "Kanal performansı", "Bugünün radarı", "Müşteri sağlığı", "Satış funnel'ı", "Operasyon", "Finans", "Karar listesi"].map((item) => (
          <span className="shrink-0 rounded-full border border-[var(--border)] bg-white px-3.5 py-2 text-xs font-black text-[var(--text-secondary)] shadow-[var(--shadow-sm)]" key={item}>
            {item}
          </span>
        ))}
      </nav>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-8">
        {kpis.map((item) => (
          <KpiCard change={item.change} icon={item.icon} key={item.label} label={item.label} note={item.note} tone={item.tone} value={item.value} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.86fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle description="Büyütülecek kanal, riskli alan ve karar aksiyonu aynı tabloda tutulur." kicker="Kanal performansı" title="Ajansın kendi büyüme kanalları" />
          <TableShell>
            <table className="min-w-[940px] w-full text-left text-sm">
              <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
                <tr>
                  <th className="px-4 py-3">Kanal</th>
                  <th className="px-4 py-3">Harcama</th>
                  <th className="px-4 py-3">Lead</th>
                  <th className="px-4 py-3">CPL</th>
                  <th className="px-4 py-3">ROAS</th>
                  <th className="px-4 py-3">Durum</th>
                  <th className="px-4 py-3">Aksiyon</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <tr className="align-top" key={channel.channel}>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center gap-2 font-black text-[var(--text-primary)]">
                          <Icon aria-hidden="true" className={channel.logo ? "size-[18px]" : "size-4"} strokeWidth={2.2} />
                          {channel.channel}
                        </span>
                      </td>
                      <td className="px-4 py-4 font-black text-[var(--text-primary)]">{channel.spend}</td>
                      <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{channel.lead}</td>
                      <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{channel.cpl}</td>
                      <td className="px-4 py-4 font-black text-[var(--text-primary)]">{channel.roas}</td>
                      <td className="px-4 py-4"><StatusBadge status={channel.status} tone={channel.tone} /></td>
                      <td className="px-4 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{channel.action}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TableShell>
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle description="Bugün kapanmazsa ajans sağlığını etkileyecek kararlar." kicker="Bugünün ajans radarı" title="Kapanması gereken kararlar" />
          <div className="mt-5 grid gap-3">
            {radarItems.map((item) => (
              <article className={`rounded-[20px] border p-4 ${getTintClassName(item.tone)}`} key={item.title}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.owner}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{item.title}</h3>
                  </div>
                  <StatusBadge status={item.status} tone={item.tone} />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.detail}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle description="Gelir, operasyon, lead ve finans sinyallerinin dengesi." kicker="Ajans sağlığı" title="Gelir, lead, teslim ve tahsilat dengesi" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <MetricTile detail="Satış + yenileme" label="Gelir ivmesi" tone="good" value="+%16" />
            <MetricTile detail="Kanal karması" label="Lead kalitesi" tone="good" value="78/100" />
            <MetricTile detail="Teslim riski" label="Operasyon" tone="danger" value="4 müşteri" />
            <MetricTile detail="Tahsilat takibi" label="Finans" tone="warning" value="₺318K" />
          </div>
          <div className="mt-5 rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-black text-[var(--text-primary)]">Ajans Sağlığı: %78</p>
              <span className="text-sm font-black text-[var(--accent)]">Takipte</span>
            </div>
            <div className="mt-3 h-2.5 rounded-full bg-white">
              <div className="h-full w-[78%] rounded-full bg-[var(--accent)]" />
            </div>
            <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">
              Büyüme sağlıklı; asıl baskı operasyon gecikmesi ve vadesi geçen tahsilatlardan geliyor.
            </p>
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle description="Risk seviyesi ve sonraki aksiyon portföy sağlığını belirler." kicker="Müşteri portföyü sağlığı" title="Risk, gelir ve sonraki aksiyon" />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {customers.map((customer) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={customer.customer}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-black text-[var(--text-primary)]">{customer.customer}</p>
                    <p className="mt-1 text-xs font-bold text-[var(--text-muted)]">{customer.service} · {customer.monthlyRevenue}</p>
                  </div>
                  <StatusBadge status={`Risk: ${customer.risk}`} tone={customer.tone} />
                </div>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">Sağlık</p>
                    <p className="mt-1 text-[24px] font-black leading-none text-[var(--text-primary)]">{customer.health}</p>
                  </div>
                  <CheckCircle2 aria-hidden="true" className="size-5 text-[var(--accent-green)]" strokeWidth={2.4} />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{customer.nextAction}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.86fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle description="Satış akışında hangi adımın karar istediğini gösterir." kicker="Ajans satış funnel'ı" title="Ziyaretçiden teklife kadar akış" />
          <div className="mt-5 grid gap-3">
            {funnelStages.map((stage, index) => (
              <article className={`rounded-[20px] border p-4 ${getTintClassName(stage.tone)}`} key={stage.stage}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{index + 1}. adım · {stage.conversion}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{stage.stage}</h3>
                  </div>
                  <StatusBadge status={stage.status} tone={stage.tone} />
                </div>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <p className="text-[24px] font-black leading-none text-[var(--text-primary)]">{stage.count}</p>
                  <p className="text-xs font-black text-[var(--text-secondary)]">{stage.value}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle description="Teslim, raporlama, SOP ve kapasite riskleri." kicker="Operasyon ve teslimat" title="Ajans iç kapasite ve müşteri teslimleri" />
          <div className="mt-5 grid gap-3">
            {operations.map((operation) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={operation.area}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{operation.owner}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{operation.area}</h3>
                  </div>
                  <StatusBadge status={operation.status} tone={operation.tone} />
                </div>
                <p className="mt-3 text-[22px] font-black leading-none text-[var(--text-primary)]">{operation.metric}</p>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{operation.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.92fr_1fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle description="Tahsilat, sabit gider ve runway kararları." kicker="Finans ve nakit" title="Kâr, tahsilat, sabit gider ve runway" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {finance.map((item) => (
              <MetricTile detail={item.detail} key={item.label} label={item.label} tone={item.tone} value={item.value} />
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle description="Sahip, zaman ve etki bilgisiyle kapatılacak kararlar." kicker="Karar listesi" title="Bu hafta ajans sahibinin kapatması gerekenler" />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {decisions.map((decision) => (
              <article className={`rounded-[20px] border p-4 ${getTintClassName(decision.tone)}`} key={decision.title}>
                <div className="flex items-start justify-between gap-3">
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-[14px] border ${getToneClassName(decision.tone)}`}>
                    {decision.tone === "danger" ? <AlertTriangle aria-hidden="true" className="size-4" strokeWidth={2.4} /> : decision.tone === "good" ? <Zap aria-hidden="true" className="size-4" strokeWidth={2.4} /> : <CalendarClock aria-hidden="true" className="size-4" strokeWidth={2.4} />}
                  </span>
                  <StatusBadge status={decision.due} tone={decision.tone} />
                </div>
                <h3 className="mt-4 text-sm font-black text-[var(--text-primary)]">{decision.title}</h3>
                <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{decision.impact}</p>
                <p className="mt-3 text-xs font-black text-[var(--text-primary)]">{decision.owner}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <DecisionSummary
        description="Meta ve Google bütçe artırımı hak ediyor. Funnel formu, LinkedIn bütçesi ve Atlas onboarding gecikmesi ajans sağlığı skorunu baskılıyor."
        kicker="Ajans aksiyon özeti"
        title="Büyüme tarafı güçlü; bugün operasyon gecikmesi ve tahsilat baskısı kapatılmalı"
      >
        <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
          <TrendingUp aria-hidden="true" className="size-4" strokeWidth={2.4} />
          ROAS 4,2x
        </span>
        <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
          <Megaphone aria-hidden="true" className="size-4" strokeWidth={2.4} />
          1.248 lead
        </span>
      </DecisionSummary>
    </div>
  );
}
