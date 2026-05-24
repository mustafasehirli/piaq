import {
  Activity,
  AlertTriangle,
  BadgeCheck,
  Banknote,
  BellRing,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
  FileText,
  Landmark,
  ListChecks,
  PiggyBank,
  ShieldCheck,
  Target,
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

type Okr = {
  companyGoal: string;
  departmentGoal: string;
  owner: string;
  measurableResult: string;
  progress: string;
  targetDate: string;
  status: string;
  tone: Tone;
};

type Decision = {
  title: string;
  owner: string;
  date: string;
  reason: string;
  expectedResult: string;
  department: string;
  outcome: string;
  status: string;
  tone: Tone;
};

type Meeting = {
  name: string;
  participants: string;
  agenda: string;
  decisions: string;
  actions: string;
  owners: string;
  dueDates: string;
  status: string;
  tone: Tone;
};

type Risk = {
  problem: string;
  department: string;
  priority: string;
  financialImpact: string;
  solution: string;
  owner: string;
  status: string;
  tone: Tone;
};

type Automation = {
  title: string;
  trigger: string;
  detail: string;
  status: string;
  tone: Tone;
};

type DepartmentHealth = {
  name: string;
  status: string;
  score: string;
  detail: string;
  tone: Tone;
};

const kpis: Kpi[] = [
  { change: "+%18 ay", icon: CircleDollarSign, label: "Aylık Gelir", note: "Tekrarlayan + proje geliri", tone: "good", value: "₺2,86M" },
  { change: "+%9 ay", icon: Banknote, label: "Aylık Gider", note: "Personel, medya, araçlar", tone: "warning", value: "₺1,74M" },
  { change: "+%22 ay", icon: PiggyBank, label: "Net Kâr", note: "Vergi öncesi tahmini", tone: "good", value: "₺1,12M" },
  { change: "+4 müşteri", icon: BriefcaseBusiness, label: "Aktif Müşteri", note: "Sözleşmesi aktif hesaplar", tone: "good", value: "47" },
  { change: "+6 bu ay", icon: BadgeCheck, label: "Yeni Müşteri", note: "Satıştan kazanıldı", tone: "good", value: "12" },
  { change: "2 kritik", icon: XCircle, label: "Kaybedilen Müşteri", note: "Churn sebebi inceleniyor", tone: "danger", value: "3" },
  { change: "%82 ort.", icon: Users, label: "Ekip Performansı", note: "Departman hedef ortalaması", tone: "good", value: "%82" },
  { change: "%68", icon: Target, label: "Satış Hedefi", note: "Mayıs hedef gerçekleşme", tone: "warning", value: "%68" },
  { change: "+3 puan", icon: AlertTriangle, label: "Operasyon Gecikme", note: "Teslim riski arttı", tone: "warning", value: "%12" },
  { change: "3,4 ay runway", icon: Landmark, label: "Nakit Durumu", note: "Tahmini güvenli bant", tone: "good", value: "₺4,9M" }
];

const health: DepartmentHealth[] = [
  { detail: "Pipeline güçlü ama hedef geride.", name: "Satış", score: "%78", status: "İyi", tone: "good" },
  { detail: "Lead hacmi stabil, CPL izleniyor.", name: "Pazarlama", score: "%64", status: "Orta", tone: "warning" },
  { detail: "Gecikme oranı yükseldi.", name: "Operasyon", score: "%58", status: "Riskli", tone: "danger" },
  { detail: "Nakit ve tahsilat kontrol altında.", name: "Finans", score: "%82", status: "İyi", tone: "good" },
  { detail: "Ekip kapasitesi dengeli.", name: "İK", score: "%74", status: "Stabil", tone: "neutral" },
  { detail: "Ürün fikirleri testte.", name: "AR-GE", score: "%61", status: "Gelişiyor", tone: "warning" },
  { detail: "Karar ve risk takibi aktif.", name: "Yönetim", score: "%70", status: "Takipte", tone: "neutral" }
];

const okrs: Okr[] = [
  { companyGoal: "Aylık 10 yeni müşteri", departmentGoal: "Satış pipeline dönüşümünü artır", measurableResult: "12 yeni müşteri / %120", owner: "Mert", progress: "%120", status: "Aşıldı", targetDate: "31 Mayıs", tone: "good" },
  { companyGoal: "Müşteri memnuniyetini %90 üstüne çıkar", departmentGoal: "Teslim sonrası memnuniyet formu", measurableResult: "%86 memnuniyet", owner: "Ayşe", progress: "%86", status: "Geride", targetDate: "31 Mayıs", tone: "warning" },
  { companyGoal: "Operasyon teslim süresini %25 azalt", departmentGoal: "SOP ve otomasyon devreye alma", measurableResult: "-%14 teslim süresi", owner: "Deniz", progress: "%56", status: "Riskli", targetDate: "15 Haziran", tone: "danger" },
  { companyGoal: "Aylık geliri 500.000 TL artır", departmentGoal: "Retainer ve upsell planı", measurableResult: "+₺620K yeni gelir", owner: "İrem", progress: "%124", status: "Aşıldı", targetDate: "31 Mayıs", tone: "good" }
];

const decisions: Decision[] = [
  { date: "14 Mayıs", department: "Operasyon", expectedResult: "Teslim gecikmesini %25 azaltmak", outcome: "İlk hafta verisi bekleniyor", owner: "Mustafa", reason: "Revize ve kontrol adımları ekipte birikiyor.", status: "Uygulanıyor", title: "Kalite kontrol checklist'i zorunlu hale gelsin", tone: "warning" },
  { date: "12 Mayıs", department: "Satış", expectedResult: "Teklif dönüşümünü %10 artırmak", outcome: "2 teklif kazanıldı, 3 takipte", owner: "Mert", reason: "Teklif sonrası takip gecikince kapanış oranı düşüyor.", status: "İyi gidiyor", title: "Teklif sonrası 48 saat takip kuralı", tone: "good" },
  { date: "9 Mayıs", department: "Finans", expectedResult: "Nakit çıkışını öngörülebilir yapmak", outcome: "Gider alarmı aktif", owner: "İrem", reason: "Araç ve medya giderleri aynı haftaya yığıldı.", status: "Aktif", title: "₺100K üzeri giderlerde yönetim onayı", tone: "neutral" },
  { date: "6 Mayıs", department: "Pazarlama", expectedResult: "Lead kalitesini artırmak", outcome: "CPL arttı ama SQL oranı yükseldi", owner: "Ayşe", reason: "Düşük niyetli leadler satış ekibini yoruyor.", status: "Ölçülüyor", title: "Lead formunda bütçe sorusu zorunlu olsun", tone: "warning" }
];

const meetings: Meeting[] = [
  { actions: "3 aksiyon", agenda: "Gelir, nakit, geciken teslimler, satış hedefi", decisions: "Operasyon gecikme planı onaylandı", dueDates: "17 Mayıs", name: "Haftalık Yönetim Toplantısı", owners: "Mustafa, Ayşe, Mert", participants: "Yönetim, Satış, Operasyon, Finans", status: "Aksiyon açık", tone: "warning" },
  { actions: "5 aksiyon", agenda: "Müşteri riskleri ve kayıp sebepleri", decisions: "Kritik müşterilere başarı görüşmesi planlanacak", dueDates: "20 Mayıs", name: "Müşteri Sağlığı Değerlendirmesi", owners: "İrem, Deniz", participants: "Yönetim, Müşteri Başarı", status: "Planlandı", tone: "neutral" },
  { actions: "2 aksiyon", agenda: "Büyük giderler, tahsilat, runway", decisions: "Araç lisansları yeniden pazarlık edilecek", dueDates: "22 Mayıs", name: "Finans Kontrol Toplantısı", owners: "Finans", participants: "Yönetim, Finans", status: "Takipte", tone: "good" }
];

const risks: Risk[] = [
  { department: "Operasyon", financialImpact: "₺180K risk", owner: "Deniz", priority: "Yüksek", problem: "Geciken projeler müşteri memnuniyetini düşürüyor", solution: "Geciken işleri günlük listele, kalite kontrol kapasitesini artır", status: "Kritik", tone: "danger" },
  { department: "Satış", financialImpact: "₺420K açık fırsat", owner: "Mert", priority: "Orta", problem: "Teklif sonrası takip gecikiyor", solution: "48 saat takip otomasyonu ve satışçı uyarısı", status: "İzleniyor", tone: "warning" },
  { department: "Finans", financialImpact: "₺260K nakit çıkışı", owner: "İrem", priority: "Orta", problem: "Büyük giderler aynı haftada toplanıyor", solution: "₺100K üzeri gider onayı ve haftalık nakit planı", status: "Kontrol", tone: "warning" },
  { department: "Müşteri Başarı", financialImpact: "₺320K MRR", owner: "Ayşe", priority: "Yüksek", problem: "2 kritik müşteride memnuniyet düşüşü var", solution: "Yönetici katılımlı başarı görüşmesi ve 30 günlük aksiyon planı", status: "Aksiyon", tone: "danger" }
];

const automations: Automation[] = [
  { detail: "Gelir, gider, net kâr, satış hedefi, operasyon gecikmesi ve riskleri özetleyen haftalık rapor üretir.", status: "Aktif", title: "Haftalık şirket raporu oluştur", tone: "good", trigger: "Her Pazartesi" },
  { detail: "OKR ilerlemesi hedefin %70 altına düşerse yönetim kanalına uyarı gönderir.", status: "İzleniyor", title: "Hedef gerideyse yönetime uyarı gönder", tone: "warning", trigger: "OKR geride" },
  { detail: "₺100K üzeri gider oluştuğunda finans ve yönetim onayı ister.", status: "Aktif", title: "Büyük gider oluşursa bildirim gönder", tone: "neutral", trigger: "Büyük gider" },
  { detail: "Kritik müşteri kaybedildiğinde churn raporu ve kayıp sebebi özetini oluşturur.", status: "Zorunlu", title: "Kritik müşteri kaybedilirse rapor oluştur", tone: "danger", trigger: "Kritik churn" },
  { detail: "Operasyon departmanındaki geciken projeleri günlük karar paneline taşır.", status: "Çalıştı", title: "Geciken projeleri otomatik listele", tone: "warning", trigger: "Proje gecikti" }
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
            <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] bg-[var(--text-primary)] text-white shadow-[0_18px_34px_oklch(0.18_0.018_80_/_0.18)]">
              <ShieldCheck aria-hidden="true" className="size-7" strokeWidth={2.4} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">Departmanlar · Yönetim</p>
              <h1 className="mt-1 text-[28px] font-black leading-tight text-[var(--text-primary)] md:text-[34px]">Yönetim Departmanı</h1>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-[var(--text-secondary)]">
                Şirket sağlığı, OKR ilerlemesi, karar kayıtları, toplantılar ve riskleri tek yönetim kontrol kulesinde toplar.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] px-3 py-2 text-xs font-black text-[var(--accent-green)]">
              <CheckCircle2 aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Şirket sağlığı %78
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-xs font-black text-[var(--text-secondary)]">
              <Activity aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Son güncelleme 14 Mayıs 2026 10:45
            </span>
          </div>
        </div>
      </header>

      <nav aria-label="Yönetim sayfası bölümleri" className="flex gap-2 overflow-x-auto pb-1">
        {["Genel Şirket Dashboard'u", "OKR / Hedef Yönetimi", "Karar Defteri", "Toplantı Yönetimi", "Risk ve Problem Takibi", "Yönetim Otomasyonları"].map((item) => (
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

      <section className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Şirket sağlığı" title="Departman performansları" />
          <div className="mt-5 grid gap-3">
            {health.map((item) => (
              <article className={`rounded-[20px] border p-4 ${getTintClassName(item.tone)}`} key={item.name}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-black text-[var(--text-primary)]">{item.name}</h3>
                    <p className="mt-1 text-xs font-semibold text-[var(--text-secondary)]">{item.detail}</p>
                  </div>
                  <StatusBadge status={item.status} tone={item.tone} />
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-white shadow-[inset_0_0_0_1px_var(--border)]">
                    <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: item.score }} />
                  </div>
                  <span className="w-12 text-right text-xs font-black text-[var(--text-primary)]">{item.score}</span>
                </div>
              </article>
            ))}
          </div>
        </aside>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="OKR / Hedef Yönetimi" title="Şirket hedefi, departman hedefi ve ölçülebilir sonuç" />
          <div className="mt-5 grid gap-3">
            {okrs.map((okr) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={okr.companyGoal}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{okr.departmentGoal} · {okr.owner}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{okr.companyGoal}</h3>
                  </div>
                  <StatusBadge status={okr.status} tone={okr.tone} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <MiniStat label="Ölçülebilir sonuç" value={okr.measurableResult} note="Key result" />
                  <MiniStat label="İlerleme" value={okr.progress} note="Hedefe göre" />
                  <MiniStat label="Hedef tarihi" value={okr.targetDate} note="Takvim" />
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <SectionTitle kicker="Karar Defteri" title="Neden aldık, ne bekledik, sonuç ne oldu?" />
        <TableShell>
          <table className="min-w-[1180px] w-full text-left text-sm">
            <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              <tr>
                <th className="px-4 py-3">Karar başlığı</th>
                <th className="px-4 py-3">Kararı alan</th>
                <th className="px-4 py-3">Tarih</th>
                <th className="px-4 py-3">Neden alındı?</th>
                <th className="px-4 py-3">Beklenen sonuç</th>
                <th className="px-4 py-3">Departman</th>
                <th className="px-4 py-3">Sonuç</th>
                <th className="px-4 py-3">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {decisions.map((decision) => (
                <tr className="align-top" key={`${decision.title}-${decision.date}`}>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{decision.title}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{decision.owner}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{decision.date}</td>
                  <td className="px-4 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{decision.reason}</td>
                  <td className="px-4 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{decision.expectedResult}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{decision.department}</td>
                  <td className="px-4 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{decision.outcome}</td>
                  <td className="px-4 py-4"><StatusBadge status={decision.status} tone={decision.tone} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableShell>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Toplantı Yönetimi" title="Gündem, karar, aksiyon, sorumlu ve teslim tarihleri" />
          <div className="mt-5 grid gap-3">
            {meetings.map((meeting) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={meeting.name}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{meeting.participants}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{meeting.name}</h3>
                  </div>
                  <StatusBadge status={meeting.status} tone={meeting.tone} />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">Gündem: {meeting.agenda}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <MiniStat label="Alınan karar" value={meeting.decisions} note="Karar özeti" />
                  <MiniStat label="Aksiyonlar" value={meeting.actions} note={meeting.owners} />
                  <MiniStat label="Son teslim" value={meeting.dueDates} note="Aksiyon takibi" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Risk ve Problem Takibi" title="Öncelik, maddi etki, çözüm ve sorumlu" />
          <div className="mt-5 grid gap-3">
            {risks.map((risk) => (
              <article className={`rounded-[22px] border p-4 ${getTintClassName(risk.tone)}`} key={risk.problem}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{risk.department} · {risk.owner}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{risk.problem}</h3>
                  </div>
                  <StatusBadge status={risk.status} tone={risk.tone} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <MiniStat label="Öncelik" value={risk.priority} note="Risk seviyesi" />
                  <MiniStat label="Maddi etki" value={risk.financialImpact} note="Tahmini etki" />
                  <MiniStat label="Çözüm" value={risk.solution} note="Önerilen aksiyon" />
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <SectionTitle kicker="Yönetim Otomasyonları" title="Rapor, hedef uyarısı, büyük gider, churn ve gecikme listeleri" />
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {automations.map((automation) => (
            <article className={`rounded-[22px] border p-4 ${getTintClassName(automation.tone)}`} key={automation.title}>
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

      <section className="rounded-[30px] border border-[var(--border)] bg-[linear-gradient(145deg,oklch(0.18_0.016_80),oklch(0.11_0.014_80)_62%,oklch(0.22_0.038_32))] p-5 text-white shadow-[var(--shadow-lg)]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.12em] text-white/50">Yönetim aksiyon özeti</p>
            <h2 className="mt-2 text-[22px] font-black text-white">Bugün operasyon gecikmesi, satış hedefi ve kritik müşteri riski masada</h2>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-white/62">
              Öncelik operasyon gecikme planı, teklif sonrası takip disiplini ve iki kritik müşteri için yönetici katılımlı başarı görüşmesi olmalı.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
              <FileText aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Haftalık rapor
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
              <ListChecks aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Kritik aksiyonlar
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
