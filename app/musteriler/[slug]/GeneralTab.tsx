import {
  Activity,
  AlertTriangle,
  BarChart3,
  BellRing,
  CalendarClock,
  CircleDollarSign,
  CreditCard,
  Filter,
  Mail,
  MousePointerClick,
  ShieldCheck,
  TrendingUp,
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
import {
  customerAccountSignals,
  customerChannelPortfolio,
  customerFunnelSnapshot
} from "./data";

type Tone = ProductTone;
type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type Kpi = {
  change: string;
  icon: LucideIcon;
  label: string;
  note: string;
  tone: Tone;
  value: string;
};

type ChannelRow = {
  action: string;
  channel: string;
  cpl: string;
  icon: IconComponent;
  lead: string;
  logo?: boolean;
  roas: string;
  spend: string;
  status: string;
  tone: Tone;
};

type RadarItem = {
  detail: string;
  owner: string;
  status: string;
  title: string;
  tone: Tone;
};

type FunnelStage = {
  count: string;
  conversion: string;
  stage: string;
  status: string;
  tone: Tone;
  value: string;
};

type OperationItem = {
  area: string;
  detail: string;
  metric: string;
  owner: string;
  status: string;
  tone: Tone;
};

type FinanceItem = {
  detail: string;
  label: string;
  tone: Tone;
  value: string;
};

type DecisionItem = {
  due: string;
  impact: string;
  owner: string;
  title: string;
  tone: Tone;
};

const kpis: Kpi[] = [
  { change: "↑ %8 geçen hafta", icon: Wallet, label: "Toplam Harcama", note: "Aktif kanal bütçesi", tone: "warning", value: "₺38.400" },
  { change: "↑ %6", icon: MousePointerClick, label: "Toplam Lead", note: "Meta, Google, TikTok", tone: "good", value: "1.240" },
  { change: "↑ %14", icon: CreditCard, label: "Toplam Dönüşüm", note: "Ödeme ve satış", tone: "good", value: "184" },
  { change: "↓ %3", icon: TrendingUp, label: "Genel ROAS", note: "Blended performans", tone: "warning", value: "4,8x" },
  { change: "↓ %5", icon: CircleDollarSign, label: "CPL", note: "Ortalama maliyet", tone: "good", value: "₺31" },
  { change: "↑ %4", icon: BellRing, label: "CPM", note: "Kreatif yorgunluğu", tone: "warning", value: "₺92" }
];

const channels: ChannelRow[] = customerChannelPortfolio.map((channel) => ({
  action: channel.status,
  channel: channel.channel,
  cpl: channel.channel === "Mail" ? "₺80" : channel.channel === "TikTok" ? "₺281" : channel.channel === "Google" ? "₺183" : "₺209",
  icon: channel.channel === "Meta" ? MetaLogoMono : channel.channel === "Google" ? GoogleLogoMono : channel.channel === "TikTok" ? TikTokLogoMono : channel.channel === "Mail" ? Mail : Filter,
  lead: channel.conversions,
  logo: ["Meta", "Google", "TikTok"].includes(channel.channel),
  roas: channel.roas,
  spend: channel.spend,
  status: channel.status,
  tone: channel.channel === "TikTok" ? "warning" : channel.channel === "Meta" || channel.channel === "Google" ? "good" : "accent"
}));

const radarItems: RadarItem[] = customerAccountSignals.map((signal) => ({
  detail: signal.description,
  owner: `${signal.source} · Takip`,
  status: signal.tone === "good" ? "İyi" : signal.tone === "critical" ? "Kritik" : "İzle",
  title: signal.title,
  tone: signal.tone === "good" ? "good" : signal.tone === "critical" ? "danger" : "warning"
}));

const funnelStages: FunnelStage[] = customerFunnelSnapshot.stages.map((stage, index) => ({
  conversion: stage.rate,
  count: stage.value,
  stage: stage.label,
  status: index === 0 ? "Güçlü trafik" : index === 1 ? "Form izleniyor" : index === 2 ? "Satışa yakın" : "Darboğaz",
  tone: index === 0 ? "good" : index === 3 ? "danger" : "warning",
  value: index === 0 ? "Reklamdan gelen oturumlar" : index === 1 ? "Lead başlangıcı" : index === 2 ? "Teklif havuzu" : "Ödeme adımı"
}));

const operations: OperationItem[] = [
  { area: "Funnel", detail: "Mobil ödeme adımında terk oranı normalin üstünde.", metric: customerFunnelSnapshot.health, owner: "Funnel", status: "Kritik", tone: "danger" },
  { area: "Kreatif", detail: "Meta CPM yükseliyor; yeni kreatif seti hazırlanmalı.", metric: "CPM ₺92", owner: "Performans", status: "Takip", tone: "warning" },
  { area: "Raporlama", detail: "Haftalık müşteri notu toplantı öncesi hazırlanacak.", metric: "Cuma", owner: "Operasyon", status: "Planlı", tone: "good" },
  { area: "Mail", detail: "SPF/DKIM ve konu satırı teslim edilebilirlik için kontrol edilmeli.", metric: "%0,3 çıkış", owner: "CRM", status: "İzle", tone: "accent" }
];

const finance: FinanceItem[] = [
  { detail: "Kanal toplamı", label: "Gelir", tone: "good", value: "₺267.700" },
  { detail: "Kanal toplamı", label: "Harcama", tone: "warning", value: "₺60.500" },
  { detail: "Karlı kampanyalara aktarılabilir", label: "Fırsat payı", tone: "accent", value: "₺7.400" },
  { detail: "Yenileme görüşmesi planlanmalı", label: "Sözleşme", tone: "neutral", value: "43 gün" }
];

const decisions: DecisionItem[] = [
  { due: "Bugün", impact: "Mobil satış kaybını azaltır", owner: "Funnel + Operasyon", title: "Mobil ödeme adımını test et", tone: "danger" },
  { due: "Yarın", impact: "CPM baskısını düşürür", owner: "Performans", title: "Meta kreatif setini yenile", tone: "warning" },
  { due: "2 gün", impact: "Teslim edilebilirlik riskini kapatır", owner: "Mail", title: "Mail domain sağlığını kontrol et", tone: "accent" },
  { due: "Cuma", impact: "Müşteri toplantısını karar notuyla bitirir", owner: "Müşteri başarı", title: "Haftalık müşteri notunu hazırla", tone: "good" }
];

function TableShell({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto rounded-[22px] border border-[var(--border)] bg-white">{children}</div>;
}

export function GeneralTab() {
  return (
    <div className="mx-auto grid max-w-[1540px] gap-6">
      <header className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] md:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] bg-[var(--text-primary)] text-white shadow-[0_18px_34px_oklch(0.18_0.018_80_/_0.18)]">
              <BarChart3 aria-hidden="true" className="size-7" strokeWidth={2.4} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">Müşteri · Genel</p>
              <h1 className="mt-1 text-[28px] font-black leading-tight text-[var(--text-primary)] md:text-[34px]">Müşteri Yönetim Merkezi</h1>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-[var(--text-secondary)]">
                Müşterinin kanal performansını, funnel sağlığını, operasyon risklerini ve karar listesini tek kontrol ekranında toplar.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] px-3 py-2 text-xs font-black text-[var(--accent-green)]">
              <ShieldCheck aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Müşteri sağlığı {customerFunnelSnapshot.health}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-xs font-black text-[var(--text-secondary)]">
              <Activity aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Son güncelleme bugün 09:30
            </span>
          </div>
        </div>
      </header>

      <nav aria-label="Müşteri genel bölümleri" className="flex gap-2 overflow-x-auto pb-1">
        {["Müşteri özeti", "Kanal performansı", "Bugünün radarı", "Funnel sağlığı", "Operasyon", "Finans", "Karar listesi"].map((item) => (
          <span className="shrink-0 rounded-full border border-[var(--border)] bg-white px-3.5 py-2 text-xs font-black text-[var(--text-secondary)] shadow-[var(--shadow-sm)]" key={item}>
            {item}
          </span>
        ))}
      </nav>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {kpis.map((item) => (
          <KpiCard change={item.change} icon={item.icon} key={item.label} label={item.label} note={item.note} tone={item.tone} value={item.value} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.86fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle description="Büyütülecek kanal, riskli alan ve sonraki aksiyon aynı tabloda tutulur." kicker="Kanal performansı" title="Müşterinin aktif büyüme kanalları" />
          <TableShell>
            <table className="w-full min-w-[860px] text-left text-sm">
              <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
                <tr>
                  <th className="px-4 py-3">Kanal</th>
                  <th className="px-4 py-3">Harcama</th>
                  <th className="px-4 py-3">Dönüşüm</th>
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
          <SectionTitle description="Bugün kapanmazsa müşteri sağlığını etkileyecek kararlar." kicker="Bugünün müşteri radarı" title="Kapanması gereken kararlar" />
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
          <SectionTitle description="Kanal, funnel, operasyon ve finans sinyallerinin dengesi." kicker="Müşteri sağlığı" title="Performans, teslim ve aksiyon dengesi" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <MetricTile detail="Funnel + kanal" label="Sağlık" tone="good" value={customerFunnelSnapshot.health} />
            <MetricTile detail="Kanal karması" label="Lead kalitesi" tone="good" value="82/100" />
            <MetricTile detail="Ödeme adımı" label="Funnel riski" tone="danger" value="Mobil" />
            <MetricTile detail="Toplantı notu" label="Operasyon" tone="warning" value="Cuma" />
          </div>
          <div className="mt-5 rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-black text-[var(--text-primary)]">Müşteri sağlığı: {customerFunnelSnapshot.health}</p>
              <span className="text-sm font-black text-[var(--accent)]">Takipte</span>
            </div>
            <div className="mt-3 h-2.5 rounded-full bg-white">
              <div className="h-full w-[86%] rounded-full bg-[var(--accent)]" />
            </div>
            <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">
              Kanal performansı güçlü; asıl baskı mobil ödeme adımı ve kreatif yorgunluğu tarafında görünüyor.
            </p>
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle description="Funnel adımlarında hangi noktanın karar istediğini gösterir." kicker="Müşteri funnel'ı" title="Landing'den ödemeye kadar akış" />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
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
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.86fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle description="Takip edilmesi gereken teslim, kreatif, mail ve raporlama işleri." kicker="Operasyon ve teslimat" title="Müşteri iç operasyon takipleri" />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
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

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle description="Gelir, harcama, fırsat ve sözleşme kararları." kicker="Finans ve sözleşme" title="Kanal getirisi ve yenileme alanı" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {finance.map((item) => (
              <MetricTile detail={item.detail} key={item.label} label={item.label} tone={item.tone} value={item.value} />
            ))}
          </div>
        </section>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <SectionTitle description="Sahip, zaman ve etki bilgisiyle kapatılacak müşteri kararları." kicker="Karar listesi" title="Bu hafta müşteri için kapatılması gerekenler" />
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
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

      <DecisionSummary
        description="Google ve Meta performansı güçlü. Mobil ödeme adımı, Meta kreatif yorgunluğu ve mail domain sağlığı müşteri skorunu baskılayabilecek alanlar."
        kicker="Müşteri aksiyon özeti"
        title="Büyüme tarafı güçlü; bugün ödeme akışı ve kreatif yenileme kapatılmalı"
      >
        <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
          <TrendingUp aria-hidden="true" className="size-4" strokeWidth={2.4} />
          ROAS 4,8x
        </span>
        <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
          <MousePointerClick aria-hidden="true" className="size-4" strokeWidth={2.4} />
          1.240 lead
        </span>
      </DecisionSummary>
    </div>
  );
}
