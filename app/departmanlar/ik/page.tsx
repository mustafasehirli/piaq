import {
  Activity,
  AlertTriangle,
  BellRing,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  GraduationCap,
  IdCard,
  Star,
  Timer,
  UserCheck,
  UserPlus,
  Users
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

type Employee = {
  name: string;
  department: string;
  position: string;
  email: string;
  phone: string;
  startDate: string;
  payment: string;
  workType: string;
  permissions: string;
  files: string;
  performanceNote: string;
  status: string;
  tone: Tone;
};

type HiringColumn = {
  stage: string;
  count: string;
  tone: Tone;
  candidates: Array<{
    name: string;
    role: string;
    source: string;
    owner: string;
    nextStep: string;
  }>;
};

type OnboardingItem = {
  employee: string;
  department: string;
  role: string;
  checklist: Array<{
    label: string;
    done: boolean;
  }>;
  progress: string;
  owner: string;
  status: string;
  tone: Tone;
};

type PerformanceItem = {
  employee: string;
  manager: string;
  department: string;
  monthlyScore: string;
  targetRate: string;
  strengths: string;
  improvementAreas: string;
  trainingNeed: string;
  status: string;
  tone: Tone;
};

type LeaveItem = {
  employee: string;
  type: string;
  dates: string;
  approval: string;
  remainingDays: string;
  description: string;
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
  { change: "+3 ay", icon: Users, label: "Toplam Çalışan", note: "Tam zamanlı + freelancer", tone: "good", value: "42" },
  { change: "%93 aktif", icon: UserCheck, label: "Aktif Çalışan", note: "Bugün çalışan ekip", tone: "good", value: "39" },
  { change: "2 onboarding", icon: UserPlus, label: "Yeni Başlayanlar", note: "Son 30 gün", tone: "accent", value: "4" },
  { change: "1 uzun izin", icon: CalendarDays, label: "İzinli Çalışan", note: "Bugün izinli", tone: "neutral", value: "3" },
  { change: "2 kritik rol", icon: BriefcaseBusiness, label: "Açık Pozisyon", note: "İşe alım devam ediyor", tone: "warning", value: "6" },
  { change: "8 bekliyor", icon: Star, label: "Performans Değerlendirmesi", note: "Mayıs döngüsü", tone: "warning", value: "34" },
  { change: "+%11", icon: GraduationCap, label: "Eğitim Tamamlama", note: "Zorunlu eğitimler", tone: "good", value: "%78" }
];

const employees: Employee[] = [
  { department: "Satış", email: "mert@piaq.app", files: "Sözleşme, KVKK", name: "Mert Deniz", payment: "₺72K / ay", performanceNote: "Pipeline disiplini güçlü, teklif takibi iyileşmeli.", permissions: "CRM, Teklifler", phone: "+90 532 000 10 11", position: "Satış Lideri", startDate: "12 Ocak 2025", status: "Aktif", tone: "good", workType: "Tam zamanlı" },
  { department: "Operasyon", email: "ayse@piaq.app", files: "Sözleşme, ekipman zimmeti", name: "Ayşe Kara", payment: "₺68K / ay", performanceNote: "Teslim kalitesi yüksek, kapasite riski izleniyor.", permissions: "Projeler, SOP", phone: "+90 533 000 18 42", position: "Operasyon Yöneticisi", startDate: "4 Mart 2024", status: "Aktif", tone: "good", workType: "Tam zamanlı" },
  { department: "Pazarlama", email: "irem@piaq.app", files: "Sözleşme", name: "İrem Şahin", payment: "₺44K / ay", performanceNote: "İçerik üretimi güçlü, raporlama ritmi takipte.", permissions: "Kampanyalar, Sosyal", phone: "+90 534 000 22 18", position: "İçerik Stratejisti", startDate: "18 Eylül 2025", status: "Aktif", tone: "good", workType: "Tam zamanlı" },
  { department: "Tasarım", email: "deniz@piaq.app", files: "Freelance sözleşme", name: "Deniz Akın", payment: "₺1.800 / gün", performanceNote: "Revize dönüşleri gecikiyor, iş yükü dengelenmeli.", permissions: "Tasarım dosyaları", phone: "+90 535 000 44 91", position: "Video Designer", startDate: "2 Şubat 2026", status: "Yoğun", tone: "warning", workType: "Freelancer" },
  { department: "Finans", email: "selin@piaq.app", files: "Sözleşme, bordro", name: "Selin Eren", payment: "₺58K / ay", performanceNote: "Tahsilat takibi düzenli, raporlamada güçlü.", permissions: "Finans, Faturalar", phone: "+90 536 000 90 11", position: "Finans Uzmanı", startDate: "8 Haziran 2024", status: "İzinli", tone: "neutral", workType: "Part-time" }
];

const hiring: HiringColumn[] = [
  { candidates: [{ name: "Buse Yalın", nextStep: "CV taraması", owner: "İK", role: "Performance Specialist", source: "LinkedIn" }], count: "18 aday", stage: "Aday Havuzu", tone: "neutral" },
  { candidates: [{ name: "Can Özer", nextStep: "Portfolyo incele", owner: "Ayşe", role: "Motion Designer", source: "Referans" }], count: "7 aday", stage: "Ön Değerlendirme", tone: "warning" },
  { candidates: [{ name: "Ece Nur", nextStep: "İlk görüşme", owner: "İrem", role: "Content Strategist", source: "Web formu" }], count: "4 aday", stage: "İlk Görüşme", tone: "accent" },
  { candidates: [{ name: "Tolga Sarp", nextStep: "Case gönder", owner: "Mert", role: "Sales Executive", source: "LinkedIn" }], count: "3 aday", stage: "Teknik Değerlendirme", tone: "warning" },
  { candidates: [{ name: "Duru Kılıç", nextStep: "Teklif onayı", owner: "İK", role: "Account Manager", source: "Referans" }], count: "2 aday", stage: "Teklif", tone: "good" },
  { candidates: [{ name: "Emre Kaya", nextStep: "Onboarding başlat", owner: "İK", role: "Junior Analyst", source: "Üniversite" }], count: "1 aday", stage: "Kabul", tone: "good" },
  { candidates: [{ name: "Mina Aral", nextStep: "Yedek havuz", owner: "İK", role: "Designer", source: "LinkedIn" }], count: "5 aday", stage: "Reddedildi", tone: "danger" }
];

const onboarding: OnboardingItem[] = [
  {
    checklist: [
      { done: true, label: "Hesaplar açıldı mı?" },
      { done: true, label: "E-posta verildi mi?" },
      { done: true, label: "Eğitim dokümanları gönderildi mi?" },
      { done: false, label: "Görev tanımı anlatıldı mı?" },
      { done: false, label: "İlk hafta hedefleri belirlendi mi?" },
      { done: true, label: "Departman tanıtımı yapıldı mı?" }
    ],
    department: "Analiz",
    employee: "Emre Kaya",
    owner: "Selin",
    progress: "%67",
    role: "Junior Analyst",
    status: "Devam ediyor",
    tone: "warning"
  },
  {
    checklist: [
      { done: true, label: "Hesaplar açıldı mı?" },
      { done: true, label: "E-posta verildi mi?" },
      { done: true, label: "Eğitim dokümanları gönderildi mi?" },
      { done: true, label: "Görev tanımı anlatıldı mı?" },
      { done: true, label: "İlk hafta hedefleri belirlendi mi?" },
      { done: true, label: "Departman tanıtımı yapıldı mı?" }
    ],
    department: "Satış",
    employee: "Duru Kılıç",
    owner: "Mert",
    progress: "%100",
    role: "Account Manager",
    status: "Tamamlandı",
    tone: "good"
  }
];

const performance: PerformanceItem[] = [
  { department: "Satış", employee: "Mert Deniz", improvementAreas: "Teklif sonrası takip ritmi", manager: "Mustafa", monthlyScore: "86/100", status: "Güçlü", strengths: "Pipeline yönetimi, görüşme kalitesi", targetRate: "%92", tone: "good", trainingNeed: "İleri pazarlık eğitimi" },
  { department: "Operasyon", employee: "Ayşe Kara", improvementAreas: "Kapasite planlama", manager: "Mustafa", monthlyScore: "82/100", status: "İyi", strengths: "Teslim kalitesi, müşteri iletişimi", targetRate: "%88", tone: "good", trainingNeed: "Kaynak planlama" },
  { department: "Tasarım", employee: "Deniz Akın", improvementAreas: "Revize dönüş süresi", manager: "Ayşe", monthlyScore: "64/100", status: "Takip", strengths: "Video kalite ve yaratıcı fikir", targetRate: "%61", tone: "warning", trainingNeed: "Brief yönetimi" },
  { department: "Pazarlama", employee: "İrem Şahin", improvementAreas: "Raporlama ritmi", manager: "Ayşe", monthlyScore: "78/100", status: "Stabil", strengths: "İçerik stratejisi, trend takibi", targetRate: "%80", tone: "neutral", trainingNeed: "Analitik raporlama" }
];

const leaves: LeaveItem[] = [
  { approval: "Onaylandı", dates: "14-16 Mayıs", description: "Yıllık izin, devir notu tamamlandı.", employee: "Selin Eren", remainingDays: "9 gün", tone: "good", type: "Yıllık izin" },
  { approval: "Beklemede", dates: "20 Mayıs", description: "Yarım gün izin talebi, yönetici onayı bekliyor.", employee: "Deniz Akın", remainingDays: "4 gün", tone: "warning", type: "Mazeret izni" },
  { approval: "Reddedildi", dates: "17-18 Mayıs", description: "Kritik teslim haftasıyla çakışıyor.", employee: "Mert Deniz", remainingDays: "12 gün", tone: "danger", type: "Yıllık izin" },
  { approval: "Onaylandı", dates: "22 Mayıs", description: "Doktor randevusu için kısa izin.", employee: "İrem Şahin", remainingDays: "7 gün", tone: "neutral", type: "Saatlik izin" }
];

const automations: Automation[] = [
  { detail: "Yeni çalışan profili açılınca onboarding görev seti, hesap listesi ve eğitim dokümanları atanır.", status: "Aktif", title: "Yeni çalışan eklenince onboarding checklist oluştur", tone: "good", trigger: "Yeni çalışan" },
  { detail: "İzin talebi geldiğinde bağlı yöneticiye onay bildirimi ve takvim notu gönderilir.", status: "Aktif", title: "İzin talebi gelince yöneticiye bildirim gönder", tone: "good", trigger: "İzin talebi" },
  { detail: "Deneme süresi bitmeden 7 gün önce yönetici ve İK ekranına değerlendirme uyarısı düşer.", status: "İzleniyor", title: "Deneme süresi bitmeden hatırlatma", tone: "warning", trigger: "Deneme süresi" },
  { detail: "Aylık değerlendirme tarihi yaklaşınca yöneticiye form ve görüşme gündemi gönderilir.", status: "Aktif", title: "Performans değerlendirme zamanı gelince uyarı", tone: "good", trigger: "Değerlendirme döngüsü" },
  { detail: "Sözleşme, KVKK, bordro veya zimmet dosyası eksikse İK ve çalışana uyarı gönderilir.", status: "Kontrol", title: "Eksik evrak varsa bildirim", tone: "danger", trigger: "Eksik dosya" }
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
              <IdCard aria-hidden="true" className="size-7" strokeWidth={2.4} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">Departmanlar · İK</p>
              <h1 className="mt-1 text-[28px] font-black leading-tight text-[var(--text-primary)] md:text-[34px]">İnsan Kaynakları Departmanı</h1>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-[var(--text-secondary)]">
                Çalışan profilleri, işe alım, onboarding, performans, izin ve evrak süreçlerini tek insan yönetim merkezinde toplar.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] px-3 py-2 text-xs font-black text-[var(--accent-green)]">
              <CheckCircle2 aria-hidden="true" className="size-4" strokeWidth={2.4} />
              İK akışı aktif
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-xs font-black text-[var(--text-secondary)]">
              <Activity aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Son güncelleme 14 Mayıs 2026 11:00
            </span>
          </div>
        </div>
      </header>

      <nav aria-label="İK sayfası bölümleri" className="flex gap-2 overflow-x-auto pb-1">
        {["İK Dashboard'u", "Çalışan Profilleri", "İşe Alım Süreci", "Onboarding Sistemi", "Performans Yönetimi", "İzin / Devamsızlık", "İK Otomasyonları"].map((item) => (
          <span className="shrink-0 rounded-full border border-[var(--border)] bg-white px-3.5 py-2 text-xs font-black text-[var(--text-secondary)] shadow-[var(--shadow-sm)]" key={item}>
            {item}
          </span>
        ))}
      </nav>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-7">
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

      <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="İşe Alım Süreci" title="Aday havuzu → ön değerlendirme → görüşme → teklif → kabul" />
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {hiring.map((column, index) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={column.stage}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{index + 1}. aşama</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{column.stage}</h3>
                  </div>
                  <StatusBadge status={column.count} tone={column.tone} />
                </div>
                <div className="mt-4 grid gap-2">
                  {column.candidates.map((candidate) => (
                    <div className="rounded-[16px] border border-[var(--border)] bg-white p-3" key={`${column.stage}-${candidate.name}`}>
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs font-black text-[var(--text-primary)]">{candidate.name}</p>
                        <span className="text-xs font-black text-[var(--accent)]">{candidate.role}</span>
                      </div>
                      <p className="mt-1 text-[11px] font-bold text-[var(--text-muted)]">{candidate.source} · {candidate.owner} · {candidate.nextStep}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="İK sağlığı" title="Kapasite, açık rol ve eğitim görünümü" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <MiniStat label="Aktif oran" value="%93" note="39 aktif çalışan" />
            <MiniStat label="Açık pozisyon" value="6" note="2 kritik rol" />
            <MiniStat label="Eğitim" value="%78" note="Tamamlama oranı" />
            <MiniStat label="Eksik evrak" value="5" note="2 kritik uyarı" />
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
        <SectionTitle kicker="Çalışan Profilleri" title="Kim, hangi rolde, hangi izinlerle çalışıyor?" />
        <TableShell>
          <table className="min-w-[1240px] w-full text-left text-sm">
            <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              <tr>
                <th className="px-4 py-3">Ad soyad</th>
                <th className="px-4 py-3">Departman</th>
                <th className="px-4 py-3">Pozisyon</th>
                <th className="px-4 py-3">E-posta</th>
                <th className="px-4 py-3">Telefon</th>
                <th className="px-4 py-3">Başlangıç</th>
                <th className="px-4 py-3">Maaş / ödeme</th>
                <th className="px-4 py-3">Çalışma tipi</th>
                <th className="px-4 py-3">Yetkiler</th>
                <th className="px-4 py-3">Dosyalar</th>
                <th className="px-4 py-3">Performans notu</th>
                <th className="px-4 py-3">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {employees.map((employee) => (
                <tr className="align-top" key={`${employee.email}-${employee.name}`}>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{employee.name}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{employee.department}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{employee.position}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{employee.email}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{employee.phone}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{employee.startDate}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{employee.payment}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{employee.workType}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{employee.permissions}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{employee.files}</td>
                  <td className="px-4 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{employee.performanceNote}</td>
                  <td className="px-4 py-4"><StatusBadge status={employee.status} tone={employee.tone} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableShell>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Onboarding Sistemi" title="Yeni çalışan checklist ve ilk hafta hazırlığı" />
          <div className="mt-5 grid gap-3">
            {onboarding.map((item) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={item.employee}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.department} · {item.role} · {item.owner}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{item.employee}</h3>
                  </div>
                  <StatusBadge status={item.status} tone={item.tone} />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-white shadow-[inset_0_0_0_1px_var(--border)]">
                    <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: item.progress }} />
                  </div>
                  <span className="w-12 text-right text-xs font-black text-[var(--text-primary)]">{item.progress}</span>
                </div>
                <div className="mt-4 grid gap-2">
                  {item.checklist.map((check) => (
                    <div className="flex items-center gap-2 rounded-[14px] border border-[var(--border)] bg-white px-3 py-2" key={`${item.employee}-${check.label}`}>
                      {check.done ? <CheckCircle2 aria-hidden="true" className="size-4 text-[var(--accent-green)]" strokeWidth={2.4} /> : <Timer aria-hidden="true" className="size-4 text-[var(--accent-amber)]" strokeWidth={2.4} />}
                      <span className="text-xs font-bold text-[var(--text-secondary)]">{check.label}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Performans Yönetimi" title="Aylık not, yönetici değerlendirmesi ve gelişim alanı" />
          <div className="mt-5 grid gap-3">
            {performance.map((item) => (
              <article className={`rounded-[22px] border p-4 ${getTintClassName(item.tone)}`} key={`${item.employee}-${item.department}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.department} · Yönetici: {item.manager}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{item.employee}</h3>
                  </div>
                  <StatusBadge status={item.status} tone={item.tone} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <MiniStat label="Aylık not" value={item.monthlyScore} note="Performans skoru" />
                  <MiniStat label="Hedef gerçekleşme" value={item.targetRate} note="Aylık hedef" />
                  <MiniStat label="Eğitim ihtiyacı" value={item.trainingNeed} note="Gelişim planı" />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">Güçlü yönler: {item.strengths}</p>
                <p className="mt-1 text-xs font-semibold leading-5 text-[var(--text-secondary)]">Gelişim alanları: {item.improvementAreas}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="İzin / Devamsızlık" title="İzin talebi, tarihler, onay, kalan hak ve açıklama" />
          <div className="mt-5 grid gap-3">
            {leaves.map((leave) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={`${leave.employee}-${leave.dates}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{leave.type} · {leave.dates}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{leave.employee}</h3>
                  </div>
                  <StatusBadge status={leave.approval} tone={leave.tone} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <MiniStat label="Kalan izin" value={leave.remainingDays} note="Yıllık hak" />
                  <MiniStat label="Onay" value={leave.approval} note="Talep durumu" />
                  <MiniStat label="Tarih" value={leave.dates} note={leave.type} />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{leave.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="İK Otomasyonları" title="Onboarding, izin, deneme süresi, performans ve evrak uyarıları" />
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
        </section>
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-[linear-gradient(145deg,oklch(0.18_0.016_80),oklch(0.11_0.014_80)_62%,oklch(0.22_0.038_32))] p-5 text-white shadow-[var(--shadow-lg)]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.12em] text-white/50">İK aksiyon özeti</p>
            <h2 className="mt-2 text-[22px] font-black text-white">Bugün 2 onboarding eksiği, 5 evrak uyarısı ve 8 performans değerlendirmesi var</h2>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-white/62">
              Öncelik Emre Kaya onboarding görev tanımı, Deniz Akın deneme süreci takibi ve eksik evrak bildirimleri olmalı.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
              <FileCheck2 aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Eksik evrak
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
              <ClipboardList aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Değerlendirmeler
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
