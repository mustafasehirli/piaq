import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Clock3,
  FileText,
  Inbox,
  Mail,
  MailCheck,
  MousePointerClick,
  Reply,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  XCircle,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ValueText } from "@/app/_components/common/ProductUI";
import type { ReactNode } from "react";

type Tone = "good" | "warning" | "danger" | "neutral";

type KpiIcon =
  | "subscribers"
  | "campaigns"
  | "sent"
  | "open"
  | "click"
  | "reply"
  | "lead"
  | "salesLead"
  | "unsubscribe"
  | "bounce";

type Kpi = {
  label: string;
  value: string;
  change: string;
  note: string;
  tone: Tone;
  icon: KpiIcon;
};

type OverviewItem = {
  title: string;
  detail: string;
  metric: string;
  status: string;
  tone: Tone;
};

type Campaign = {
  name: string;
  segment: string;
  status: string;
  statusTone: Tone;
  sendDate: string;
  openRate: string;
  clickRate: string;
  leads: string;
  subject: string;
  preview: string;
  content: string;
  cta: string;
  action: string;
  actionTone: Tone;
};

type Automation = {
  name: string;
  trigger: string;
  peopleInFlow: string;
  completed: string;
  openRate: string;
  clickRate: string;
  salesLeads: string;
  status: string;
  tone: Tone;
};

type SegmentContact = {
  name: string;
  email: string;
  phone: string;
  company: string;
  source: string;
  tags: string[];
  segment: string;
  leadScore: string;
  lastEngagement: string;
  status: string;
  tone: Tone;
};

type TemplateItem = {
  name: string;
  purpose: string;
  subject: string;
  preview: string;
  content: string;
  cta: string;
  lastUsed: string;
  performance: string;
  tone: Tone;
};

type CalendarItem = {
  date: string;
  title: string;
  kind: string;
  owner: string;
  status: string;
  tone: Tone;
};

type PerformanceMetric = {
  label: string;
  value: string;
  note: string;
};

type FunnelStep = {
  label: string;
  value: string;
  rate: string;
};

type SettingItem = {
  label: string;
  value: string;
  status: string;
  tone: Tone;
};

type MailMarketingData = {
  accountStatus: string;
  alerts: OverviewItem[];
  automations: Automation[];
  calendar: CalendarItem[];
  campaigns: Campaign[];
  contacts: SegmentContact[];
  description: string;
  funnel: FunnelStep[];
  kpis: Kpi[];
  lastSync: string;
  overview: {
    activeAutomations: OverviewItem[];
    bestEmails: OverviewItem[];
    recentCampaigns: OverviewItem[];
    upcomingSends: OverviewItem[];
  };
  performance: PerformanceMetric[];
  scopeLabel: string;
  settings: SettingItem[];
  templates: TemplateItem[];
  title: string;
};

const MAIL_ACCENT = "#f97316";

const kpiIcons: Record<KpiIcon, LucideIcon> = {
  bounce: XCircle,
  campaigns: FileText,
  click: MousePointerClick,
  lead: Target,
  open: MailCheck,
  reply: Reply,
  salesLead: UserCheck,
  sent: Send,
  subscribers: Users,
  unsubscribe: Inbox
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

function getRowTint(tone: Tone) {
  if (tone === "good") return "border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)]";
  if (tone === "warning") return "border-[oklch(0.92_0.055_75)] bg-[var(--accent-amber-light)]";
  if (tone === "danger") return "border-[oklch(0.91_0.055_25)] bg-[var(--accent-red-light)]";
  return "border-[var(--border)] bg-[var(--bg-card-soft)]";
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">{kicker}</p>
      <h2 className="mt-1 text-[20px] font-black text-[var(--text-primary)]">{title}</h2>
    </div>
  );
}

function StatusBadge({ status, tone }: { status: string; tone: Tone }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-black ${getToneClass(tone)}`}>{status}</span>;
}

function StatBlock({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="min-h-[96px] rounded-[18px] border border-[var(--border)] bg-white p-4">
      <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{label}</p>
      <p className="mt-2 text-[24px] font-black leading-none text-[var(--text-primary)]"><ValueText value={value} /></p>
      <p className="mt-2 text-xs font-bold leading-5 text-[var(--text-muted)]">{note}</p>
    </div>
  );
}

function OverviewList({ icon: Icon, items }: { icon: LucideIcon; items: OverviewItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <article className={`rounded-[20px] border p-4 ${getRowTint(item.tone)}`} key={item.title}>
          <div className="flex items-start gap-3">
            <span className={`flex size-10 shrink-0 items-center justify-center rounded-[14px] border ${getToneClass(item.tone)}`}>
              <Icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-sm font-black text-[var(--text-primary)]">{item.title}</h3>
                <StatusBadge status={item.status} tone={item.tone} />
              </div>
              <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.detail}</p>
              <p className="mt-3 text-sm font-black text-[var(--text-primary)]">{item.metric}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function TableShell({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto rounded-[22px] border border-[var(--border)] bg-white">{children}</div>;
}

export function MailMarketingView({ data }: { data: MailMarketingData }) {
  return (
    <div className="mx-auto grid max-w-[1540px] gap-6">
      <header className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] md:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <span
              className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] text-white shadow-[0_18px_34px_oklch(0.18_0.018_80_/_0.16)]"
              style={{ background: MAIL_ACCENT }}
            >
              <Mail aria-hidden="true" className="size-7" strokeWidth={2.4} />
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

      <nav aria-label="Mail sayfası bölümleri" className="flex gap-2 overflow-x-auto pb-1">
        {["Genel Bakış", "Kampanyalar", "Otomasyonlar", "Kitle / Segmentler", "Şablonlar", "Mail Takvimi", "Performans", "Ayarlar"].map((item) => (
          <span className="shrink-0 rounded-full border border-[var(--border)] bg-white px-3.5 py-2 text-xs font-black text-[var(--text-secondary)] shadow-[var(--shadow-sm)]" key={item}>
            {item}
          </span>
        ))}
      </nav>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {data.kpis.map((item) => {
          const Icon = kpiIcons[item.icon];
          return (
            <article className="min-h-[154px] rounded-[26px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]" key={item.label}>
              <div className="flex items-start justify-between gap-3">
                <span className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.label}</span>
                <span className="flex size-9 items-center justify-center rounded-[14px] bg-[#fff7ed] text-[#c2410c]">
                  <Icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
                </span>
              </div>
              <p className="mt-4 text-[30px] font-black leading-none text-[var(--text-primary)]"><ValueText value={item.value} /></p>
              <div className="mt-4 flex items-center gap-2">
                <span className={`size-2.5 rounded-full ${getToneDotClass(item.tone)}`} />
                <span className="text-xs font-black text-[var(--text-primary)]">{item.change}</span>
              </div>
              <p className="mt-2 text-xs font-bold leading-5 text-[var(--text-muted)]">{item.note}</p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Genel bakış" title="Kampanya, otomasyon ve yakın gönderimler" />
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.1em] text-[var(--text-muted)]">Son kampanyalar</p>
              <OverviewList icon={Send} items={data.overview.recentCampaigns} />
            </div>
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.1em] text-[var(--text-muted)]">Aktif otomasyonlar</p>
              <OverviewList icon={Zap} items={data.overview.activeAutomations} />
            </div>
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.1em] text-[var(--text-muted)]">Yaklaşan gönderimler</p>
              <OverviewList icon={CalendarDays} items={data.overview.upcomingSends} />
            </div>
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.1em] text-[var(--text-muted)]">En iyi mailler</p>
              <OverviewList icon={TrendingUp} items={data.overview.bestEmails} />
            </div>
          </div>
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Aksiyon ve risk" title="Riskli metrikler" />
          <div className="mt-5 grid gap-3">
            {data.alerts.map((item) => (
              <article className={`rounded-[20px] border p-4 ${getRowTint(item.tone)}`} key={item.title}>
                <div className="flex items-start gap-3">
                  <AlertTriangle aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[var(--accent-amber)]" strokeWidth={2.4} />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-black text-[var(--text-primary)]">{item.title}</h3>
                      <StatusBadge status={item.status} tone={item.tone} />
                    </div>
                    <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.detail}</p>
                    <p className="mt-3 text-sm font-black text-[var(--text-primary)]">{item.metric}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle kicker="Kampanyalar" title="Tek seferlik mail kampanyaları" />
          <div className="flex flex-wrap gap-2">
            {["Yeni Kampanya Oluştur", "Taslak Kaydet", "Test Maili Gönder", "Planla", "Gönder", "Raporu Gör"].map((item) => (
              <span className="rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-[11px] font-black text-[var(--text-secondary)]" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {data.campaigns.slice(0, 3).map((campaign) => (
            <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={campaign.name}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{campaign.segment}</p>
                  <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{campaign.name}</h3>
                </div>
                <StatusBadge status={campaign.status} tone={campaign.statusTone} />
              </div>
              <p className="mt-3 text-sm font-black text-[var(--text-primary)]">{campaign.subject}</p>
              <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{campaign.preview}</p>
              <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-muted)]">{campaign.content}</p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <StatBlock label="Açılma" value={campaign.openRate} note={campaign.sendDate} />
                <StatBlock label="Tıklama" value={campaign.clickRate} note={campaign.cta} />
                <StatBlock label="Lead" value={campaign.leads} note={campaign.action} />
              </div>
            </article>
          ))}
        </div>
        <TableShell>
          <table className="mt-0 min-w-[920px] w-full text-left text-sm">
            <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              <tr>
                <th className="px-4 py-3">Kampanya</th>
                <th className="px-4 py-3">Segment</th>
                <th className="px-4 py-3">Durum</th>
                <th className="px-4 py-3">Gönderim Tarihi</th>
                <th className="px-4 py-3">Açılma</th>
                <th className="px-4 py-3">Tıklama</th>
                <th className="px-4 py-3">Lead</th>
                <th className="px-4 py-3">Aksiyon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {data.campaigns.map((campaign) => (
                <tr className="align-top" key={campaign.name}>
                  <td className="px-4 py-4">
                    <p className="font-black text-[var(--text-primary)]">{campaign.name}</p>
                    <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">{campaign.subject}</p>
                  </td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{campaign.segment}</td>
                  <td className="px-4 py-4"><StatusBadge status={campaign.status} tone={campaign.statusTone} /></td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{campaign.sendDate}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.openRate}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.clickRate}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{campaign.leads}</td>
                  <td className="px-4 py-4"><StatusBadge status={campaign.action} tone={campaign.actionTone} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableShell>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Otomasyon akışı" title="Lead sonrası takip serisi" />
          <div className="mt-5 grid gap-3">
            {["Form dolduruldu", "Hoş geldin maili", "2 gün bekle", "Hizmet tanıtım maili", "Açtıysa satışa bildir", "Tıkladıysa sıcak lead", "Cevap verdiyse pipeline'a aktar"].map((step, index, steps) => (
              <div className="flex items-center gap-3" key={step}>
                <div className="flex min-h-[48px] flex-1 items-center gap-3 rounded-[18px] border border-[var(--border)] bg-[var(--bg-card-soft)] px-4 py-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#fff7ed] text-xs font-black text-[#c2410c]">{index + 1}</span>
                  <p className="text-sm font-black text-[var(--text-primary)]">{step}</p>
                </div>
                {index < steps.length - 1 ? <ArrowRight aria-hidden="true" className="hidden size-4 shrink-0 text-[var(--text-muted)] sm:block" strokeWidth={2.4} /> : null}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Otomasyonlar" title="Aktif akış performansı" />
          <div className="mt-5 grid gap-3">
            {data.automations.map((automation) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={automation.name}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{automation.trigger}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{automation.name}</h3>
                  </div>
                  <StatusBadge status={automation.status} tone={automation.tone} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <StatBlock label="İçinde" value={automation.peopleInFlow} note={`${automation.completed} tamamladı`} />
                  <StatBlock label="Açılma / Tıklama" value={`${automation.openRate} / ${automation.clickRate}`} note="Akış ortalaması" />
                  <StatBlock label="Satış lead" value={automation.salesLeads} note="Pipeline'a aktarıldı" />
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <SectionTitle kicker="Kitle / Segmentler" title="Mail gönderilecek kişiler ve lead skoru" />
        <TableShell>
          <table className="min-w-[1120px] w-full text-left text-sm">
            <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              <tr>
                <th className="px-4 py-3">Ad Soyad</th>
                <th className="px-4 py-3">E-posta</th>
                <th className="px-4 py-3">Telefon</th>
                <th className="px-4 py-3">Firma</th>
                <th className="px-4 py-3">Kaynak</th>
                <th className="px-4 py-3">Etiketler</th>
                <th className="px-4 py-3">Segment</th>
                <th className="px-4 py-3">Lead Skoru</th>
                <th className="px-4 py-3">Son Etkileşim</th>
                <th className="px-4 py-3">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {data.contacts.map((contact) => (
                <tr className="align-top" key={`${contact.email}-${contact.segment}`}>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{contact.name}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{contact.email}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{contact.phone}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{contact.company}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{contact.source}</td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-1.5">
                      {contact.tags.map((tag) => (
                        <span className="rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-2 py-1 text-[11px] font-black text-[var(--text-secondary)]" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{contact.segment}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{contact.leadScore}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{contact.lastEngagement}</td>
                  <td className="px-4 py-4"><StatusBadge status={contact.status} tone={contact.tone} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableShell>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle kicker="Şablonlar" title="Ajansın sürekli kullandığı mail metinleri" />
          <div className="flex flex-wrap gap-2">
            {["Konu başlığı üret", "Mail metnini iyileştir", "Daha kısa yap", "Profesyonelleştir", "Satış odaklı yap", "Spam riskini azalt"].map((item) => (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#fed7aa] bg-[#fff7ed] px-3 py-2 text-[11px] font-black text-[#c2410c]" key={item}>
                <Sparkles aria-hidden="true" className="size-3.5" strokeWidth={2.4} />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.templates.map((template) => (
            <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={template.name}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{template.purpose}</p>
                  <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{template.name}</h3>
                </div>
                <StatusBadge status={template.performance} tone={template.tone} />
              </div>
              <p className="mt-4 text-sm font-black text-[var(--text-primary)]">{template.subject}</p>
              <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{template.preview}</p>
              <p className="mt-3 rounded-[16px] border border-[var(--border)] bg-white p-3 text-xs font-semibold leading-5 text-[var(--text-muted)]">{template.content}</p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-black text-[var(--text-primary)]">CTA: {template.cta}</span>
                <span className="text-xs font-bold text-[var(--text-muted)]">{template.lastUsed}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Mail takvimi" title="Planlanan ve otomatik gönderimler" />
          <div className="mt-5 grid gap-3">
            {data.calendar.map((item) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={`${item.date}-${item.title}`}>
                <div className="flex items-start gap-3">
                  <span className="flex w-16 shrink-0 flex-col items-center rounded-[16px] border border-[#fed7aa] bg-[#fff7ed] px-3 py-2 text-[#c2410c]">
                    <span className="text-[11px] font-black uppercase">{item.date.split(" ")[1]}</span>
                    <span className="text-lg font-black leading-none">{item.date.split(" ")[0]}</span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-black text-[var(--text-primary)]">{item.title}</h3>
                      <StatusBadge status={item.status} tone={item.tone} />
                    </div>
                    <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.kind} · {item.owner}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Performans" title="Mail kanalının satış etkisi" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {data.performance.map((metric) => (
              <StatBlock key={metric.label} label={metric.label} value={metric.value} note={metric.note} />
            ))}
          </div>
          <div className="mt-5 rounded-[24px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4">
            <p className="text-[11px] font-black uppercase tracking-[0.1em] text-[var(--text-muted)]">Mail → Lead → Toplantı → Teklif → Satış</p>
            <div className="mt-4 grid gap-3 md:grid-cols-5">
              {data.funnel.map((step, index) => (
                <div className="relative rounded-[18px] border border-[var(--border)] bg-white p-4" key={step.label}>
                  <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{step.label}</p>
                  <p className="mt-2 text-[24px] font-black leading-none text-[var(--text-primary)]">{step.value}</p>
                  <p className="mt-2 text-xs font-bold text-[var(--text-muted)]">{step.rate}</p>
                  {index < data.funnel.length - 1 ? <ArrowRight aria-hidden="true" className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 text-[var(--text-muted)] md:block" strokeWidth={2.4} /> : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <SectionTitle kicker="Ayarlar" title="Gönderen, marka ve domain sağlığı" />
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {data.settings.map((setting) => (
            <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={setting.label}>
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-10 items-center justify-center rounded-[14px] bg-[#fff7ed] text-[#c2410c]">
                  {setting.tone === "good" ? <ShieldCheck aria-hidden="true" className="size-4" strokeWidth={2.4} /> : setting.tone === "warning" ? <Clock3 aria-hidden="true" className="size-4" strokeWidth={2.4} /> : <Settings aria-hidden="true" className="size-4" strokeWidth={2.4} />}
                </span>
                <StatusBadge status={setting.status} tone={setting.tone} />
              </div>
              <p className="mt-4 text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{setting.label}</p>
              <p className="mt-2 text-sm font-black leading-5 text-[var(--text-primary)]">{setting.value}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

const sharedKpis: Kpi[] = [
  { change: "+428", icon: "subscribers", label: "Toplam Abone", note: "Aktif ve izinli kişi", tone: "good", value: "18.420" },
  { change: "6 aktif", icon: "campaigns", label: "Aktif Mail Kampanyası", note: "Planlı + gönderimde", tone: "neutral", value: "12" },
  { change: "+18%", icon: "sent", label: "Gönderilen Mail", note: "Son 30 gün", tone: "good", value: "42.800" },
  { change: "+3,4 puan", icon: "open", label: "Açılma Oranı", note: "Konu başlığı ortalaması", tone: "good", value: "%37,2" },
  { change: "-0,8 puan", icon: "click", label: "Tıklama Oranı", note: "CTA ve içerik sinyali", tone: "warning", value: "%6,8" },
  { change: "+21 cevap", icon: "reply", label: "Cevap Oranı", note: "Satış konuşmasına dönen", tone: "good", value: "%1,9" },
  { change: "+36 lead", icon: "lead", label: "Mailden Gelen Lead", note: "Form ve reply kaynaklı", tone: "good", value: "214" },
  { change: "48 sıcak", icon: "salesLead", label: "Satışa Aktarılan Lead", note: "Pipeline'a taşınan", tone: "good", value: "82" },
  { change: "+0,3 puan", icon: "unsubscribe", label: "Abonelikten Çıkanlar", note: "Kampanya frekansı izleniyor", tone: "warning", value: "%0,42" },
  { change: "temiz", icon: "bounce", label: "Bounce / Hatalı Mail", note: "Teslimat sağlığı", tone: "good", value: "%1,1" }
];

const sharedCampaigns: Campaign[] = [
  {
    action: "Raporu Gör",
    actionTone: "good",
    clickRate: "%8,4",
    content: "Yeni büyüme teklifini kısa vaka özeti ve demo CTA ile anlatıyor.",
    cta: "/demo-talep",
    leads: "34",
    name: "Mayıs Ajans Tanıtım Maili",
    openRate: "%42",
    preview: "Ajansınızın reklam ve satış takibini tek panelde toparlayın.",
    segment: "Tüm Liste",
    sendDate: "12 Mayıs",
    status: "Gönderildi",
    statusTone: "good",
    subject: "Mayıs büyüme planınızı 20 dakikada netleştirelim"
  },
  {
    action: "Planla",
    actionTone: "neutral",
    clickRate: "-",
    content: "Yeni Google ve Meta raporlama modülünü aktif müşterilere duyurur.",
    cta: "/rapor-modulu",
    leads: "-",
    name: "Yeni Hizmet Duyurusu",
    openRate: "-",
    preview: "Raporlama yükünü azaltan yeni kanal ekranları hazır.",
    segment: "Aktif Müşteriler",
    sendDate: "20 Mayıs",
    status: "Planlandı",
    statusTone: "neutral",
    subject: "Yeni kanal raporları panelinize eklendi"
  },
  {
    action: "Test Maili Gönder",
    actionTone: "warning",
    clickRate: "-",
    content: "Webinar daveti, konuşmacı detayları ve kayıt CTA'sı içerir.",
    cta: "/webinar-kayit",
    leads: "-",
    name: "Webinar Daveti",
    openRate: "-",
    preview: "Reklam bütçesini boşa harcamadan lead kalitesi nasıl artırılır?",
    segment: "Sıcak Leadler",
    sendDate: "16 Mayıs",
    status: "Onay Bekliyor",
    statusTone: "warning",
    subject: "Lead kalitesini artırma webinarına davetlisiniz"
  },
  {
    action: "İçeriği Kısalt",
    actionTone: "danger",
    clickRate: "%2,1",
    content: "Teklif alan ama dönüş yapmayan kişiler için ikinci temas maili.",
    cta: "/teklif-gorusme",
    leads: "6",
    name: "Teklif Hatırlatma Maili",
    openRate: "%24",
    preview: "Teklifinizdeki iki kritik noktayı birlikte netleştirelim.",
    segment: "Teklif Alanlar",
    sendDate: "10 Mayıs",
    status: "Gönderildi",
    statusTone: "good",
    subject: "Teklifinizi birlikte netleştirelim mi?"
  },
  {
    action: "Taslak Kaydet",
    actionTone: "neutral",
    clickRate: "-",
    content: "Blog içerikleri, başarı hikayesi ve ayın önerileri.",
    cta: "/blog",
    leads: "-",
    name: "Blog Bülteni",
    openRate: "-",
    preview: "Bu ay reklam operasyonunda ölçmeniz gereken sinyaller.",
    segment: "Bülten Aboneleri",
    sendDate: "25 Mayıs",
    status: "Taslak",
    statusTone: "neutral",
    subject: "Mayıs reklam operasyon notları"
  }
];

const sharedAutomations: Automation[] = [
  { clickRate: "%11,2", completed: "184", name: "Yeni Lead Karşılama Serisi", openRate: "%48", peopleInFlow: "326", salesLeads: "42", status: "Aktif", tone: "good", trigger: "Funnel formu doldurdu" },
  { clickRate: "%7,6", completed: "91", name: "Teklif Sonrası Takip Serisi", openRate: "%39", peopleInFlow: "144", salesLeads: "28", status: "İzleniyor", tone: "warning", trigger: "Teklif gönderildi" },
  { clickRate: "%5,4", completed: "312", name: "Soğuk Lead Isıtma Serisi", openRate: "%31", peopleInFlow: "620", salesLeads: "19", status: "Optimize Et", tone: "warning", trigger: "30 gündür etkileşim yok" },
  { clickRate: "%14,8", completed: "74", name: "Webinar Kayıt Sonrası Seri", openRate: "%55", peopleInFlow: "118", salesLeads: "23", status: "Güçlü", tone: "good", trigger: "Webinar kaydı geldi" }
];

const sharedContacts: SegmentContact[] = [
  { company: "Nova Klinik", email: "ayse@novaklinik.com", lastEngagement: "Bugün açtı", leadScore: "92", name: "Ayşe Kara", phone: "+90 532 000 10 24", segment: "Sıcak leadler", source: "Meta reklam", status: "Sıcak Lead", tags: ["Meta", "Demo"], tone: "good" },
  { company: "Atlas Eğitim", email: "mert@atlasegitim.com", lastEngagement: "2 gün önce tıkladı", leadScore: "86", name: "Mert Deniz", phone: "+90 533 000 18 42", segment: "Teklif alanlar", source: "Google reklam", status: "Satışa Aktarıldı", tags: ["Teklif", "Google"], tone: "good" },
  { company: "Luna E-ticaret", email: "elif@luna.com", lastEngagement: "9 gün önce açtı", leadScore: "63", name: "Elif Arslan", phone: "+90 534 000 22 18", segment: "Mail açan ama tıklamayanlar", source: "Funnel", status: "Abone", tags: ["Newsletter"], tone: "neutral" },
  { company: "Mira Studio", email: "info@mirastudio.co", lastEngagement: "31 gündür yok", leadScore: "28", name: "Mira Studio", phone: "+90 535 000 44 91", segment: "Pasif kişiler", source: "Eski müşteri", status: "Pasif", tags: ["Reaktivasyon"], tone: "warning" },
  { company: "Pera Labs", email: "ops@peralabs.io", lastEngagement: "Bounce", leadScore: "0", name: "Pera Labs", phone: "+90 536 000 90 11", segment: "Hatalı mail", source: "İçe aktarma", status: "Hatalı Mail", tags: ["Temizle"], tone: "danger" }
];

const sharedTemplates: TemplateItem[] = [
  { content: "Lead kaynağına göre kişiselleştirilmiş kısa tanışma, problem ve demo CTA akışı.", cta: "Demo planla", lastUsed: "Son kullanım: 13 Mayıs", name: "Hoş Geldin Maili", performance: "%49 açılma", preview: "Talebinizi aldık, sıradaki adım net.", purpose: "Yeni lead karşılama", subject: "Başvurunuz bize ulaştı", tone: "good" },
  { content: "Teklif özetini, bekleyen karar noktasını ve kısa toplantı çağrısını içerir.", cta: "15 dk görüşme seç", lastUsed: "Son kullanım: 10 Mayıs", name: "Teklif Sonrası Takip", performance: "%8 tıklama", preview: "Teklifinizde netleştirebileceğimiz iki alan var.", purpose: "Teklif takibi", subject: "Teklifiniz için kısa bir takip", tone: "good" },
  { content: "Toplantı saati, gündem ve hazırlık notlarını tek ekranda toparlar.", cta: "Takvime ekle", lastUsed: "Son kullanım: 8 Mayıs", name: "Toplantı Hatırlatma", performance: "%61 açılma", preview: "Görüşme öncesi kısa gündem notu.", purpose: "Toplantı", subject: "Yarınki görüşmemiz için gündem", tone: "good" },
  { content: "Kısa vaka, ölçülen sonuç ve ilgili hizmet sayfasına yönlendirme.", cta: "Case study gör", lastUsed: "Son kullanım: 3 Mayıs", name: "Başarı Hikayesi", performance: "%5 tıklama", preview: "Benzer bir operasyonu nasıl büyüttük?", purpose: "Case study", subject: "Benzer bütçede daha kaliteli lead aldık", tone: "neutral" },
  { content: "Pasif kişilere düşük baskılı yeniden temas ve tercih güncelleme CTA'sı.", cta: "İlgimi güncelle", lastUsed: "Son kullanım: 29 Nisan", name: "Yeniden Aktivasyon", performance: "Riskli", preview: "Hala bu konuyla ilgileniyor musunuz?", purpose: "Reaktivasyon", subject: "Sizi doğru listeye alalım mı?", tone: "warning" },
  { content: "Yeni müşteriye ilk hafta yapılacaklar, rapor ritmi ve iletişim kanalları.", cta: "Onboarding formu", lastUsed: "Son kullanım: 12 Mayıs", name: "Onboarding Maili", performance: "%44 açılma", preview: "İlk hafta planınızı netleştirelim.", purpose: "Müşteri onboarding", subject: "Başlangıç planınız hazır", tone: "good" }
];

const sharedCalendar: CalendarItem[] = [
  { date: "14 Mayıs", kind: "Planlanan kampanya", owner: "Pazarlama", status: "Bugün", title: "Ajans bülteni", tone: "warning" },
  { date: "16 Mayıs", kind: "Otomatik mail", owner: "Satış", status: "Onay Bekliyor", title: "Teklif takip maili", tone: "warning" },
  { date: "20 Mayıs", kind: "Özel duyuru", owner: "Ajans", status: "Planlandı", title: "Yeni hizmet duyurusu", tone: "neutral" },
  { date: "25 Mayıs", kind: "Reaktivasyon", owner: "CRM", status: "Taslak", title: "Eski lead aktivasyon kampanyası", tone: "neutral" }
];

const sharedPerformance: PerformanceMetric[] = [
  { label: "Gönderilen", note: "Mayıs mail performansı", value: "4.200" },
  { label: "Teslim Oranı", note: "Bounce sonrası net", value: "%98,9" },
  { label: "Açan", note: "1.560 kişi", value: "%37,1" },
  { label: "Tıklayan", note: "340 kişi", value: "%8,1" },
  { label: "Cevap Veren", note: "72 reply", value: "%1,7" },
  { label: "Abonelikten Çıkan", note: "18 kişi", value: "%0,42" },
  { label: "Toplantı Alan", note: "Satışa taşınan", value: "18" },
  { label: "Gelir", note: "Mail kaynaklı", value: "₺120K" }
];

const sharedFunnel: FunnelStep[] = [
  { label: "Mail", rate: "4.200 gönderim", value: "4.200" },
  { label: "Lead", rate: "%5,1 dönüşüm", value: "214" },
  { label: "Toplantı", rate: "%8,4 lead -> toplantı", value: "18" },
  { label: "Teklif", rate: "%61 toplantı -> teklif", value: "11" },
  { label: "Satış", rate: "%36 teklif -> satış", value: "4" }
];

const sharedSettings: SettingItem[] = [
  { label: "Gönderen adı", status: "Aktif", tone: "good", value: "Piaq Growth Team" },
  { label: "Gönderen e-posta", status: "Doğrulandı", tone: "good", value: "growth@piaq.app" },
  { label: "Cevap adresi", status: "Aktif", tone: "good", value: "sales@piaq.app" },
  { label: "Mail imzası", status: "Güncel", tone: "good", value: "Satış ve müşteri başarı imzası" },
  { label: "Marka renkleri", status: "Tanımlı", tone: "good", value: "Ana aksan #f0533a, mail aksanı turuncu" },
  { label: "Logo", status: "Yüklü", tone: "good", value: "Piaq yatay logo" },
  { label: "Unsubscribe sayfası", status: "Aktif", tone: "good", value: "/unsubscribe tercih merkezi" },
  { label: "KVKK / izin metni", status: "Kontrol", tone: "warning", value: "Mayıs metni hukuk kontrolünde" },
  { label: "Domain doğrulama", status: "Doğrulandı", tone: "good", value: "mail.piaq.app" },
  { label: "SPF", status: "Geçerli", tone: "good", value: "include:mail-service" },
  { label: "DKIM", status: "Geçerli", tone: "good", value: "selector piaq-2026" },
  { label: "DMARC", status: "İzleniyor", tone: "warning", value: "p=quarantine raporu açık" }
];

const sharedOverview = {
  activeAutomations: [
    { detail: "Yeni lead formundan gelen kişiye 4 adımlı karşılama serisi gidiyor.", metric: "326 kişi akışta · %48 açılma", status: "Aktif", title: "Yeni Lead Karşılama", tone: "good" as Tone },
    { detail: "Teklif gönderilen kişilere 2. ve 5. gün takip maili planlanıyor.", metric: "144 kişi akışta · 28 satış lead", status: "İzle", title: "Teklif Sonrası Takip", tone: "warning" as Tone }
  ],
  bestEmails: [
    { detail: "Problem odaklı konu başlığı ve demo CTA yüksek dönüşüm getirdi.", metric: "%42 açılma · 34 lead", status: "Kazanan", title: "Mayıs Ajans Tanıtım Maili", tone: "good" as Tone },
    { detail: "Toplantı hatırlatma şablonu yüksek açılma alıyor.", metric: "%61 açılma", status: "Şablonlaştır", title: "Toplantı Hatırlatma", tone: "good" as Tone }
  ],
  recentCampaigns: [
    { detail: "Tüm listeye gönderildi, lead kalitesi satış tarafından olumlu işaretlendi.", metric: "%42 açılma · %8,4 tıklama", status: "Gönderildi", title: "Mayıs Ajans Tanıtım Maili", tone: "good" as Tone },
    { detail: "Teklif alan segmentte açılma ve tıklama zayıf kaldı.", metric: "%24 açılma · %2,1 tıklama", status: "Revize", title: "Teklif Hatırlatma", tone: "danger" as Tone }
  ],
  upcomingSends: [
    { detail: "Konu başlığı onayı bekliyor, test maili gönderilmeli.", metric: "16 Mayıs · Sıcak leadler", status: "Onay", title: "Webinar Daveti", tone: "warning" as Tone },
    { detail: "Aktif müşterilere yeni raporlama modülü duyurulacak.", metric: "20 Mayıs · Aktif müşteriler", status: "Planlandı", title: "Yeni Hizmet Duyurusu", tone: "neutral" as Tone }
  ]
};

const sharedAlerts: OverviewItem[] = [
  { detail: "Teklif alanlara giden hatırlatma mailinde CTA görünürlüğü zayıf.", metric: "%2,1 tıklama · hedef %5+", status: "Tıklama düşük", title: "Teklif takip CTA'sı zayıf", tone: "danger" },
  { detail: "Son iki bültende çıkış oranı yükseldi, frekans ve segment kontrol edilmeli.", metric: "%0,42 çıkış · +0,3 puan", status: "Frekans", title: "Abonelikten çıkma artıyor", tone: "warning" },
  { detail: "İçe aktarılan listede hatalı adresler temizlenirse teslim oranı korunur.", metric: "%1,1 bounce", status: "Temizle", title: "Bounce listesi ayrıştırılmalı", tone: "warning" },
  { detail: "Yüksek açılma alan konu başlıkları yeni kampanyalara taşınabilir.", metric: "%49 açılma", status: "Fırsat", title: "Hoş geldin şablonu güçlü", tone: "good" }
];

export const agencyMailMarketingData: MailMarketingData = {
  accountStatus: "Mail domain bağlı",
  alerts: sharedAlerts,
  automations: sharedAutomations,
  calendar: sharedCalendar,
  campaigns: sharedCampaigns,
  contacts: sharedContacts,
  description: "Ajansın kendi mail pazarlama operasyonunu, kampanya takvimini, otomasyon akışlarını ve satışa etkisini tek ekranda takip eder.",
  funnel: sharedFunnel,
  kpis: sharedKpis,
  lastSync: "14 Mayıs 2026 09:20",
  overview: sharedOverview,
  performance: sharedPerformance,
  scopeLabel: "Son 30 gün · Ajans",
  settings: sharedSettings,
  templates: sharedTemplates,
  title: "Mail Pazarlama Merkezi"
};

export const customerMailMarketingData: MailMarketingData = {
  ...agencyMailMarketingData,
  description: "Seçili müşterinin mail kampanyalarını, lead segmentlerini, otomasyon takibini ve mail kaynaklı satış etkisini gösterir.",
  scopeLabel: "Son 30 gün · Müşteri",
  title: "Müşteri Mail Merkezi"
};
