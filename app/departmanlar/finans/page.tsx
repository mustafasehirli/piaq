import {
  Activity,
  AlertTriangle,
  Banknote,
  BellRing,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  CreditCard,
  FileText,
  Landmark,
  LineChart,
  PieChart,
  ReceiptText,
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

type Income = {
  customer: string;
  service: string;
  amount: string;
  invoiceDate: string;
  paymentDate: string;
  status: string;
  method: string;
  description: string;
  tone: Tone;
};

type Expense = {
  name: string;
  category: string;
  amount: string;
  date: string;
  status: string;
  department: string;
  document: string;
  tone: Tone;
};

type InvoiceFlow = {
  title: string;
  count: string;
  amount: string;
  detail: string;
  tone: Tone;
  icon: LucideIcon;
};

type Budget = {
  department: string;
  budget: string;
  spent: string;
  remaining: string;
  utilization: string;
  status: string;
  tone: Tone;
};

type CashFlowItem = {
  period: string;
  inflow: string;
  outflow: string;
  net: string;
  risk: string;
  detail: string;
  tone: Tone;
};

type Automation = {
  title: string;
  trigger: string;
  detail: string;
  status: string;
  tone: Tone;
};

const kpis: Kpi[] = [
  { change: "+%18 önceki aya göre", icon: CircleDollarSign, label: "Toplam Gelir", note: "Faturalanan + tahsil edilen", tone: "good", value: "₺1.284.000" },
  { change: "-%4 gider disiplini", icon: CreditCard, label: "Toplam Gider", note: "Operasyonel giderler", tone: "warning", value: "₺742.500" },
  { change: "₺541.500 net", icon: Landmark, label: "Net Kâr", note: "Aylık kapanış tahmini", tone: "good", value: "₺541.500" },
  { change: "12 fatura", icon: ReceiptText, label: "Beklenen Tahsilat", note: "Önümüzdeki 30 gün", tone: "accent", value: "₺318.000" },
  { change: "5 kritik müşteri", icon: AlertTriangle, label: "Ödenmemiş Fatura", note: "Vadesi geçmiş", tone: "danger", value: "₺96.400" },
  { change: "Sabit maliyet", icon: BriefcaseBusiness, label: "Aylık Sabit Gider", note: "Maaş + yazılım + ofis", tone: "neutral", value: "₺412.000" },
  { change: "52 gün runway", icon: Wallet, label: "Nakit Durumu", note: "Kasa + beklenen giriş", tone: "warning", value: "₺685.300" },
  { change: "+3,8 puan", icon: PieChart, label: "Kâr Marjı", note: "Net marj", tone: "good", value: "%42,1" },
  { change: "21 aktif müşteri", icon: Banknote, label: "Müşteri Başı Gelir", note: "Aylık ortalama", tone: "accent", value: "₺61.142" }
];

const incomes: Income[] = [
  { amount: "₺96.000", customer: "Nova Klinik", description: "Meta + Google performans yönetimi", invoiceDate: "02 Mayıs", method: "Havale", paymentDate: "08 Mayıs", service: "Reklam yönetimi", status: "Ödendi", tone: "good" },
  { amount: "₺72.000", customer: "Atlas E-Ticaret", description: "Funnel optimizasyonu ve kreatif sprint", invoiceDate: "06 Mayıs", method: "Kredi kartı", paymentDate: "16 Mayıs", service: "Growth paket", status: "Ödeme bekleniyor", tone: "warning" },
  { amount: "₺48.500", customer: "Mavi Akademi", description: "Landing page + lead kampanyası", invoiceDate: "09 Mayıs", method: "Havale", paymentDate: "12 Mayıs", service: "Lead generation", status: "Gecikti", tone: "danger" },
  { amount: "₺118.000", customer: "Vera Mobilya", description: "Aylık kanal yönetimi ve raporlama", invoiceDate: "11 Mayıs", method: "Havale", paymentDate: "20 Mayıs", service: "Tam ajans hizmeti", status: "Gönderildi", tone: "accent" }
];

const expenses: Expense[] = [
  { amount: "₺286.000", category: "Maaş", date: "01 Mayıs", department: "Genel", document: "Bordro-0526.pdf", name: "Ekip maaş ödemeleri", status: "Ödendi", tone: "good" },
  { amount: "₺64.800", category: "Yazılım", date: "03 Mayıs", department: "Operasyon", document: "SaaS-fatura.pdf", name: "Araç ve lisans paketleri", status: "Ödendi", tone: "good" },
  { amount: "₺92.000", category: "Freelancer", date: "10 Mayıs", department: "Pazarlama", document: "Bekleniyor", name: "Kreatif prodüksiyon", status: "Onay bekliyor", tone: "warning" },
  { amount: "₺38.500", category: "Vergi", date: "15 Mayıs", department: "Yönetim", document: "Vergi-tahakkuk.pdf", name: "KDV ara ödeme", status: "Yaklaşıyor", tone: "warning" },
  { amount: "₺21.200", category: "Operasyon", date: "18 Mayıs", department: "Operasyon", document: "Masraf-fişleri.zip", name: "Müşteri çekim masrafı", status: "Limit üstü", tone: "danger" }
];

const invoiceFlows: InvoiceFlow[] = [
  { amount: "₺214.000", count: "7 taslak", detail: "Bu hafta oluşturulacak faturalar", icon: FileText, title: "Fatura oluştur", tone: "neutral" },
  { amount: "₺386.000", count: "11 gönderim", detail: "Müşteriye iletilmiş aktif faturalar", icon: BellRing, title: "Fatura gönder", tone: "accent" },
  { amount: "₺318.000", count: "12 fatura", detail: "Vadesi gelmemiş bekleyen tahsilat", icon: CalendarClock, title: "Ödeme bekleniyor", tone: "warning" },
  { amount: "₺96.400", count: "5 fatura", detail: "Vadesi geçmiş ve takip isteyen kayıtlar", icon: AlertTriangle, title: "Gecikti", tone: "danger" },
  { amount: "₺870.000", count: "24 fatura", detail: "Bu ay kapanan tahsilatlar", icon: CheckCircle2, title: "Ödendi", tone: "good" },
  { amount: "₺18.000", count: "2 fatura", detail: "İptal edilen veya revize edilen kayıtlar", icon: ReceiptText, title: "İptal", tone: "neutral" }
];

const budgets: Budget[] = [
  { budget: "₺180.000", department: "Satış bütçesi", remaining: "₺52.000", spent: "₺128.000", status: "Kontrolde", tone: "good", utilization: "%71" },
  { budget: "₺240.000", department: "Pazarlama bütçesi", remaining: "₺28.000", spent: "₺212.000", status: "Limit yakın", tone: "warning", utilization: "%88" },
  { budget: "₺210.000", department: "Operasyon bütçesi", remaining: "₺71.500", spent: "₺138.500", status: "Sağlıklı", tone: "good", utilization: "%66" },
  { budget: "₺120.000", department: "İK bütçesi", remaining: "₺34.000", spent: "₺86.000", status: "Kontrolde", tone: "good", utilization: "%72" },
  { budget: "₺95.000", department: "AR-GE bütçesi", remaining: "₺9.000", spent: "₺86.000", status: "Riskli", tone: "danger", utilization: "%91" }
];

const cashFlow: CashFlowItem[] = [
  { detail: "Nova Klinik ve Vera Mobilya tahsilatları bekleniyor.", inflow: "₺154.000", net: "+₺92.800", outflow: "₺61.200", period: "Bu hafta gelecek para", risk: "Düşük", tone: "good" },
  { detail: "Maaş, vergi ve kreatif prodüksiyon ödemeleri çıkacak.", inflow: "₺318.000", net: "-₺128.500", outflow: "₺446.500", period: "Bu ay ödenecek gider", risk: "Orta", tone: "warning" },
  { detail: "Geciken tahsilatlar kapatılırsa kasa 52 günden 68 güne çıkar.", inflow: "₺612.000", net: "+₺106.700", outflow: "₺505.300", period: "Önümüzdeki 30 gün", risk: "Orta", tone: "warning" },
  { detail: "AR-GE bütçesi ve freelancer masrafları onaysız büyürse marj düşer.", inflow: "₺96.400", net: "-₺74.800", outflow: "₺171.200", period: "Riskli dönemler", risk: "Yüksek", tone: "danger" }
];

const automations: Automation[] = [
  { detail: "Vade tarihinden 2 gün sonra müşteri temsilcisine ve finans sorumlusuna takip görevi açılır.", status: "Aktif", title: "Fatura gecikirse hatırlatma gönder", tone: "good", trigger: "Geciken fatura" },
  { detail: "Departman harcaması aylık limitin %85'ini geçince yönetim paneline uyarı düşer.", status: "Aktif", title: "Gider limiti aşılırsa yönetime bildir", tone: "warning", trigger: "Bütçe eşiği" },
  { detail: "Ay sonunda gelir, gider, kâr, tahsilat ve nakit akışı özeti otomatik hazırlanır.", status: "Planlandı", title: "Aylık finans raporu oluştur", tone: "accent", trigger: "Ay kapanışı" },
  { detail: "Tahsilat kapandığında müşteri kartındaki ödeme durumu ve hizmet devam sinyali güncellenir.", status: "Aktif", title: "Ödeme alındığında müşteri durumunu güncelle", tone: "good", trigger: "Ödeme alındı" },
  { detail: "Yaklaşan maaş, vergi, yazılım ve freelancer ödeme tarihleri 5 gün önceden listelenir.", status: "Aktif", title: "Yaklaşan ödeme tarihlerini bildir", tone: "good", trigger: "Vade yaklaşımı" }
];


function TableShell({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto rounded-[22px] border border-[var(--border)] bg-white">{children}</div>;
}

function MoneyLine({ label, value, tone }: { label: string; value: string; tone: Tone }) {
  return (
    <div className={`rounded-[18px] border p-4 ${getTintClassName(tone)}`}>
      <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{label}</p>
      <p className="mt-2 text-[24px] font-black leading-none text-[var(--text-primary)]"><ValueText value={value} /></p>
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
              <Landmark aria-hidden="true" className="size-7" strokeWidth={2.4} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">Departmanlar · Finans</p>
              <h1 className="mt-1 text-[28px] font-black leading-tight text-[var(--text-primary)] md:text-[34px]">Finans Departmanı</h1>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-[var(--text-secondary)]">
                Gelir, gider, kâr, nakit akışı, fatura ve tahsilat kontrolünü tek karar ekranında toplar.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] px-3 py-2 text-xs font-black text-[var(--accent-green)]">
              <CheckCircle2 aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Finans kontrolü açık
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-xs font-black text-[var(--text-secondary)]">
              <Activity aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Son güncelleme 14 Mayıs 2026 11:40
            </span>
          </div>
        </div>
      </header>

      <nav aria-label="Finans sayfası bölümleri" className="flex gap-2 overflow-x-auto pb-1">
        {["Finans Dashboard'u", "Gelir Takibi", "Gider Takibi", "Fatura / Tahsilat", "Bütçe Yönetimi", "Nakit Akışı", "Finans Otomasyonları"].map((item) => (
          <span className="shrink-0 rounded-full border border-[var(--border)] bg-white px-3.5 py-2 text-xs font-black text-[var(--text-secondary)] shadow-[var(--shadow-sm)]" key={item}>
            {item}
          </span>
        ))}
      </nav>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-9">
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

      <section className="grid gap-6 xl:grid-cols-[1fr_0.86fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Fatura / Tahsilat Yönetimi" title="Oluştur, gönder, bekle, gecikeni takip et, kapanışı işle" />
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {invoiceFlows.map((flow) => {
              const Icon = flow.icon;
              return (
                <article className={`rounded-[22px] border p-4 ${getTintClassName(flow.tone)}`} key={flow.title}>
                  <div className="flex items-start justify-between gap-3">
                    <span className={`flex size-10 shrink-0 items-center justify-center rounded-[14px] border ${getToneClassName(flow.tone)}`}>
                      <Icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
                    </span>
                    <StatusBadge status={flow.count} tone={flow.tone} />
                  </div>
                  <h3 className="mt-4 text-sm font-black text-[var(--text-primary)]">{flow.title}</h3>
                  <p className="mt-2 text-[24px] font-black leading-none text-[var(--text-primary)]">{flow.amount}</p>
                  <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{flow.detail}</p>
                </article>
              );
            })}
          </div>
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Para kontrol özeti" title="Gelir, gider, net kâr ve nakit basıncı" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <MoneyLine label="Bu ay gelir" value="₺1.284.000" tone="good" />
            <MoneyLine label="Bu ay gider" value="₺742.500" tone="warning" />
            <MoneyLine label="Net kâr" value="₺541.500" tone="good" />
            <MoneyLine label="Geciken tahsilat" value="₺96.400" tone="danger" />
          </div>
          <div className="mt-5 rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-black text-[var(--text-primary)]">Kâr marjı hedefi</p>
              <span className="text-sm font-black text-[var(--accent-green)]">%42,1</span>
            </div>
            <div className="mt-3 h-2.5 rounded-full bg-white">
              <div className="h-full w-[84%] rounded-full bg-[var(--accent-green)]" />
            </div>
            <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">
              Marj güçlü; AR-GE bütçesi ve freelancer giderleri bu hafta onay kontrolünden geçmeli.
            </p>
          </div>
        </aside>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Gelir Takibi" title="Müşteri, hizmet, tutar, fatura ve ödeme durumu" />
          <TableShell>
            <table className="min-w-[1100px] w-full text-left text-sm">
              <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
                <tr>
                  <th className="px-4 py-3">Müşteri</th>
                  <th className="px-4 py-3">Hizmet</th>
                  <th className="px-4 py-3">Tutar</th>
                  <th className="px-4 py-3">Fatura tarihi</th>
                  <th className="px-4 py-3">Ödeme tarihi</th>
                  <th className="px-4 py-3">Ödeme durumu</th>
                  <th className="px-4 py-3">Ödeme yöntemi</th>
                  <th className="px-4 py-3">Açıklama</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {incomes.map((income) => (
                  <tr className="align-top" key={`${income.customer}-${income.invoiceDate}`}>
                    <td className="px-4 py-4 font-black text-[var(--text-primary)]">{income.customer}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{income.service}</td>
                    <td className="px-4 py-4 font-black text-[var(--text-primary)]">{income.amount}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{income.invoiceDate}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{income.paymentDate}</td>
                    <td className="px-4 py-4"><StatusBadge status={income.status} tone={income.tone} /></td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{income.method}</td>
                    <td className="px-4 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{income.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableShell>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Gider Takibi" title="Kategori, ödeme durumu, departman ve belge kontrolü" />
          <TableShell>
            <table className="min-w-[1000px] w-full text-left text-sm">
              <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
                <tr>
                  <th className="px-4 py-3">Gider adı</th>
                  <th className="px-4 py-3">Kategori</th>
                  <th className="px-4 py-3">Tutar</th>
                  <th className="px-4 py-3">Tarih</th>
                  <th className="px-4 py-3">Ödeme durumu</th>
                  <th className="px-4 py-3">Sorumlu departman</th>
                  <th className="px-4 py-3">Fiş / fatura dosyası</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {expenses.map((expense) => (
                  <tr className="align-top" key={`${expense.name}-${expense.date}`}>
                    <td className="px-4 py-4 font-black text-[var(--text-primary)]">{expense.name}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{expense.category}</td>
                    <td className="px-4 py-4 font-black text-[var(--text-primary)]">{expense.amount}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{expense.date}</td>
                    <td className="px-4 py-4"><StatusBadge status={expense.status} tone={expense.tone} /></td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{expense.department}</td>
                    <td className="px-4 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{expense.document}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableShell>
        </section>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.92fr_1fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Bütçe Yönetimi" title="Departman bazlı bütçe ve kullanım oranı" />
          <div className="mt-5 grid gap-3">
            {budgets.map((budget) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={budget.department}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-black text-[var(--text-primary)]">{budget.department}</p>
                    <p className="mt-1 text-xs font-bold text-[var(--text-muted)]">Bütçe {budget.budget} · Kalan {budget.remaining}</p>
                  </div>
                  <StatusBadge status={budget.status} tone={budget.tone} />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 text-xs font-black text-[var(--text-secondary)]">
                  <span>Harcanan {budget.spent}</span>
                  <span>{budget.utilization}</span>
                </div>
                <div className="mt-2 h-2.5 rounded-full bg-white">
                  <div className={`h-full rounded-full ${budget.tone === "danger" ? "bg-[var(--accent-red)]" : budget.tone === "warning" ? "bg-[var(--accent-amber)]" : "bg-[var(--accent-green)]"}`} style={{ width: budget.utilization }} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Nakit Akışı" title="Bu hafta, bu ay, 30 gün ve riskli dönemler" />
          <div className="mt-5 grid gap-3">
            {cashFlow.map((item) => (
              <article className={`rounded-[22px] border p-4 ${getTintClassName(item.tone)}`} key={item.period}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-black text-[var(--text-primary)]">{item.period}</p>
                    <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.detail}</p>
                  </div>
                  <StatusBadge status={`Risk: ${item.risk}`} tone={item.tone} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <MoneyLine label="Giriş" value={item.inflow} tone="good" />
                  <MoneyLine label="Çıkış" value={item.outflow} tone="warning" />
                  <MoneyLine label="Net" value={item.net} tone={item.tone} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.86fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Finans Otomasyonları" title="Gecikme, limit, rapor, tahsilat ve vade bildirimleri" />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
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
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-[linear-gradient(145deg,oklch(0.18_0.016_80),oklch(0.11_0.014_80)_62%,oklch(0.22_0.038_32))] p-5 text-white shadow-[var(--shadow-lg)]">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-[16px] border border-white/10 bg-white/10 text-white">
              <LineChart aria-hidden="true" className="size-5" strokeWidth={2.4} />
            </span>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-white/50">Finans aksiyon özeti</p>
              <h2 className="mt-1 text-[22px] font-black text-white">Tahsilat ve bütçe odağı</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-3">
            {[
              "Mavi Akademi geciken tahsilatı bugün müşteri temsilcisine atanmalı.",
              "Pazarlama bütçesi %88 kullanımda; yeni harcama için yönetim onayı istenmeli.",
              "AR-GE bütçesi riskli eşikte; test maliyetleri yeniden sıralanmalı.",
              "Aylık finans raporu için gelir-gider kapanışı 31 Mayıs öncesi hazırlanmalı."
            ].map((item, index) => (
              <div className="rounded-[18px] border border-white/10 bg-white/8 p-4" key={item}>
                <p className="text-xs font-black uppercase tracking-[0.08em] text-white/42">Aksiyon {index + 1}</p>
                <p className="mt-2 text-sm font-bold leading-6 text-white/82">{item}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
