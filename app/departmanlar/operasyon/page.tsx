import {
  Activity,
  AlertTriangle,
  BellRing,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  ListChecks,
  PackageCheck,
  Star,
  Timer,
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

type Project = {
  name: string;
  customer: string;
  service: string;
  startDate: string;
  dueDate: string;
  owner: string;
  status: string;
  priority: string;
  progress: string;
  note: string;
  tone: Tone;
};

type KanbanColumn = {
  stage: string;
  count: string;
  tone: Tone;
  items: Array<{
    project: string;
    customer: string;
    owner: string;
    dueDate: string;
    progress: string;
  }>;
};

type Task = {
  name: string;
  project: string;
  owner: string;
  dueDate: string;
  priority: string;
  subtasks: string;
  files: string;
  comments: string;
  status: string;
  tone: Tone;
};

type Sop = {
  title: string;
  owner: string;
  steps: string;
  lastUpdated: string;
  usage: string;
  status: string;
  tone: Tone;
};

type Delivery = {
  title: string;
  customer: string;
  deliveredAt: string;
  revision: string;
  approval: string;
  files: string;
  note: string;
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
  { change: "+4 bu hafta", icon: BriefcaseBusiness, label: "Aktif Proje", note: "Devam eden teslimatlar", tone: "good", value: "32" },
  { change: "5 kritik", icon: AlertTriangle, label: "Geciken İşler", note: "Sorumlu bildirimi gerekli", tone: "danger", value: "11" },
  { change: "6 yüksek öncelik", icon: CalendarClock, label: "Bugün Teslim", note: "Gün sonuna kadar", tone: "warning", value: "14" },
  { change: "+18 ay", icon: CheckCircle2, label: "Tamamlanan İş", note: "Mayıs teslimleri", tone: "good", value: "86" },
  { change: "+0,3 puan", icon: Star, label: "Müşteri Memnuniyeti", note: "Teslim sonrası form", tone: "good", value: "4,6/5" },
  { change: "-1,2 gün", icon: Timer, label: "Ort. Teslim Süresi", note: "Planlanan işlerde", tone: "good", value: "6,8 gün" },
  { change: "2 kişi yoğun", icon: Users, label: "Ekip İş Yükü", note: "Ortalama kapasite", tone: "warning", value: "%82" }
];

const projects: Project[] = [
  { customer: "Nova Klinik", dueDate: "17 Mayıs", name: "Meta Kampanya Kurulumu", note: "Pixel kontrolü tamamlandı, kreatif final bekliyor.", owner: "Ayşe", priority: "Yüksek", progress: "%74", service: "Performans reklam", startDate: "8 Mayıs", status: "Üretimde", tone: "warning" },
  { customer: "Atlas Eğitim", dueDate: "20 Mayıs", name: "Google Ads + Funnel Onboarding", note: "Anahtar kelime ve landing akışı planlandı.", owner: "Mert", priority: "Orta", progress: "%42", service: "Google Ads", startDate: "12 Mayıs", status: "Planlama", tone: "neutral" },
  { customer: "Luna E-ticaret", dueDate: "Bugün", name: "Haftalık ROAS Raporu", note: "Müşteri onayı bekleyen sunum versiyonu.", owner: "İrem", priority: "Kritik", progress: "%92", service: "Raporlama", startDate: "10 Mayıs", status: "Müşteri Onayında", tone: "warning" },
  { customer: "Pera Labs", dueDate: "13 Mayıs", name: "İçerik Üretim Sprinti", note: "Video brief gecikti, sorumluya bildirim gönderildi.", owner: "Deniz", priority: "Yüksek", progress: "%58", service: "Sosyal medya", startDate: "5 Mayıs", status: "Gecikti", tone: "danger" },
  { customer: "Zen Finans", dueDate: "14 Mayıs", name: "Onboarding Projesi", note: "Satış kazanıldıktan sonra otomatik açılan proje.", owner: "Ayşe", priority: "Orta", progress: "%100", service: "Onboarding", startDate: "7 Mayıs", status: "Tamamlandı", tone: "good" }
];

const kanban: KanbanColumn[] = [
  { count: "3 proje", items: [{ customer: "Mira Studio", dueDate: "21 Mayıs", owner: "Deniz", progress: "%0", project: "Sosyal medya başlangıcı" }], stage: "Başlamadı", tone: "neutral" },
  { count: "6 proje", items: [{ customer: "Atlas Eğitim", dueDate: "20 Mayıs", owner: "Mert", progress: "%42", project: "Google Ads + Funnel Onboarding" }], stage: "Planlama", tone: "neutral" },
  { count: "9 proje", items: [{ customer: "Nova Klinik", dueDate: "17 Mayıs", owner: "Ayşe", progress: "%74", project: "Meta Kampanya Kurulumu" }], stage: "Üretimde", tone: "warning" },
  { count: "5 proje", items: [{ customer: "Orion Health", dueDate: "16 Mayıs", owner: "İrem", progress: "%81", project: "Landing kalite kontrol" }], stage: "Kontrolde", tone: "warning" },
  { count: "4 proje", items: [{ customer: "Pera Labs", dueDate: "Gecikti", owner: "Deniz", progress: "%58", project: "İçerik Üretim Sprinti" }], stage: "Revizede", tone: "danger" },
  { count: "3 proje", items: [{ customer: "Luna E-ticaret", dueDate: "Bugün", owner: "İrem", progress: "%92", project: "Haftalık ROAS Raporu" }], stage: "Müşteri Onayında", tone: "warning" },
  { count: "2 proje", items: [{ customer: "Zen Finans", dueDate: "Tamam", owner: "Ayşe", progress: "%100", project: "Onboarding Projesi" }], stage: "Tamamlandı", tone: "good" }
];

const tasks: Task[] = [
  { comments: "4 yorum", dueDate: "Bugün 15:00", files: "3 dosya", name: "Meta kreatiflerini yayına hazırlama", owner: "Ayşe", priority: "Yüksek", project: "Meta Kampanya Kurulumu", status: "Üretimde", subtasks: "5/7", tone: "warning" },
  { comments: "2 yorum", dueDate: "Bugün 17:30", files: "1 dosya", name: "ROAS raporu müşteri versiyonunu kontrol et", owner: "İrem", priority: "Kritik", project: "Haftalık ROAS Raporu", status: "Kontrolde", subtasks: "6/6", tone: "warning" },
  { comments: "8 yorum", dueDate: "Gecikti", files: "2 dosya", name: "Video brief revizesini tamamla", owner: "Deniz", priority: "Yüksek", project: "İçerik Üretim Sprinti", status: "Revizede", subtasks: "3/5", tone: "danger" },
  { comments: "1 yorum", dueDate: "16 Mayıs", files: "4 dosya", name: "Google kampanya yapısını dökümante et", owner: "Mert", priority: "Orta", project: "Google Ads + Funnel Onboarding", status: "Planlama", subtasks: "2/6", tone: "neutral" }
];

const sops: Sop[] = [
  { lastUpdated: "10 Mayıs", owner: "Operasyon", status: "Güncel", steps: "9 adım", title: "Yeni müşteri onboarding süreci", tone: "good", usage: "18 kullanım" },
  { lastUpdated: "8 Mayıs", owner: "Performans", status: "Güncel", steps: "12 adım", title: "Reklam hesabı kurulum süreci", tone: "good", usage: "24 kullanım" },
  { lastUpdated: "4 Mayıs", owner: "İçerik", status: "Revize", steps: "7 adım", title: "İçerik üretim süreci", tone: "warning", usage: "16 kullanım" },
  { lastUpdated: "2 Mayıs", owner: "Raporlama", status: "Aktif", steps: "8 adım", title: "Rapor hazırlama süreci", tone: "good", usage: "31 kullanım" },
  { lastUpdated: "28 Nisan", owner: "Müşteri Başarı", status: "Kontrol", steps: "6 adım", title: "Müşteri revize süreci", tone: "warning", usage: "12 kullanım" },
  { lastUpdated: "12 Mayıs", owner: "Kalite", status: "Güncel", steps: "15 madde", title: "Kalite kontrol checklist'i", tone: "good", usage: "42 kullanım" }
];

const deliveries: Delivery[] = [
  { approval: "Onay bekliyor", customer: "Luna E-ticaret", deliveredAt: "Bugün 11:20", files: "ROAS-raporu.pdf", note: "Müşteri notu: bütçe önerisi daha görünür olsun.", revision: "1 revize", title: "Haftalık ROAS Raporu", tone: "warning" },
  { approval: "Onaylandı", customer: "Zen Finans", deliveredAt: "Dün 16:10", files: "onboarding-plan.pdf", note: "Teslim sonrası memnuniyet formu gönderildi.", revision: "0 revize", title: "Onboarding Planı", tone: "good" },
  { approval: "Revize istendi", customer: "Pera Labs", deliveredAt: "12 Mayıs", files: "video-brief.docx", note: "Açılış hook'u ve CTA tekrar yazılacak.", revision: "2 revize", title: "Video Brief Paketi", tone: "danger" },
  { approval: "Paylaşıldı", customer: "Nova Klinik", deliveredAt: "Bugün 09:45", files: "creative-pack.zip", note: "Kreatif dosyaları performans ekibine aktarıldı.", revision: "0 revize", title: "Kreatif Dosya Paylaşımı", tone: "neutral" }
];

const automations: Automation[] = [
  { detail: "Satışta kazanıldı durumuna geçen müşteri için onboarding projesi ve ilk görev seti açılır.", status: "Aktif", title: "Satış kazanıldıysa otomatik proje aç", tone: "good", trigger: "Kazanıldı" },
  { detail: "Teslim tarihi geçen projelerde sorumlu ve ekip liderine uyarı gönderilir.", status: "Çalıştı", title: "Proje gecikirse sorumluya bildirim gönder", tone: "danger", trigger: "Gecikme" },
  { detail: "Tasarım tamamlanınca kontrol görevini kalite sorumlusuna aktarır.", status: "Aktif", title: "Görev tamamlanınca sonraki kişiye aktar", tone: "good", trigger: "Görev tamamlandı" },
  { detail: "Müşteri onayında 24 saat bekleyen teslimler için hatırlatma maili planlanır.", status: "İzleniyor", title: "Müşteri onayı bekleyen işlerde hatırlatma gönder", tone: "warning", trigger: "Onay bekliyor" },
  { detail: "Tamamlanan teslimlerden sonra memnuniyet formu otomatik gönderilir.", status: "Aktif", title: "Teslim sonrası memnuniyet formu gönder", tone: "good", trigger: "Teslim tamamlandı" }
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
              <BriefcaseBusiness aria-hidden="true" className="size-7" strokeWidth={2.4} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">Departmanlar · Operasyon</p>
              <h1 className="mt-1 text-[28px] font-black leading-tight text-[var(--text-primary)] md:text-[34px]">Operasyon Departmanı</h1>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-[var(--text-secondary)]">
                Satıştan gelen müşteriyi projeye dönüştüren; üretim, kontrol, revize, teslim ve müşteri onayı akışını yöneten iş teslim merkezi.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] px-3 py-2 text-xs font-black text-[var(--accent-green)]">
              <CheckCircle2 aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Operasyon akışı aktif
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-xs font-black text-[var(--text-secondary)]">
              <Activity aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Son güncelleme 14 Mayıs 2026 10:30
            </span>
          </div>
        </div>
      </header>

      <nav aria-label="Operasyon sayfası bölümleri" className="flex gap-2 overflow-x-auto pb-1">
        {["Operasyon Dashboard'u", "Proje Yönetimi", "Proje Kanbanı", "Görev Yönetimi", "SOP / Süreç Kütüphanesi", "Müşteri Teslim Alanı", "Operasyon Otomasyonları"].map((item) => (
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

      <section className="grid gap-6 xl:grid-cols-[1fr_0.78fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Proje Kanbanı" title="Başlamadı → planlama → üretim → kontrol → revize → onay → tamamlandı" />
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {kanban.map((column, index) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={column.stage}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{index + 1}. aşama</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{column.stage}</h3>
                  </div>
                  <StatusBadge status={column.count} tone={column.tone} />
                </div>
                <div className="mt-4 grid gap-2">
                  {column.items.map((item) => (
                    <div className="rounded-[16px] border border-[var(--border)] bg-white p-3" key={`${column.stage}-${item.project}`}>
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs font-black text-[var(--text-primary)]">{item.project}</p>
                        <span className="text-xs font-black text-[var(--accent)]">{item.progress}</span>
                      </div>
                      <p className="mt-1 text-[11px] font-bold text-[var(--text-muted)]">{item.customer} · {item.owner} · {item.dueDate}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Operasyon sağlığı" title="Gecikme, teslim ve ekip yükü" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <MiniStat label="Gecikme oranı" value="%12" note="11 geciken iş" />
            <MiniStat label="Bugün teslim" value="14" note="6 yüksek öncelik" />
            <MiniStat label="Kontrolde" value="5" note="Kalite onayı bekliyor" />
            <MiniStat label="Ekip kapasitesi" value="%82" note="2 kişi yoğun" />
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
        <SectionTitle kicker="Proje Yönetimi" title="Müşteri, hizmet, teslim tarihi, sorumlu ve ilerleme" />
        <TableShell>
          <table className="min-w-[1120px] w-full text-left text-sm">
            <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              <tr>
                <th className="px-4 py-3">Proje adı</th>
                <th className="px-4 py-3">Müşteri</th>
                <th className="px-4 py-3">Hizmet türü</th>
                <th className="px-4 py-3">Başlangıç</th>
                <th className="px-4 py-3">Teslim</th>
                <th className="px-4 py-3">Sorumlu</th>
                <th className="px-4 py-3">Durum</th>
                <th className="px-4 py-3">Öncelik</th>
                <th className="px-4 py-3">İlerleme</th>
                <th className="px-4 py-3">Not</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {projects.map((project) => (
                <tr className="align-top" key={`${project.customer}-${project.name}`}>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{project.name}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{project.customer}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{project.service}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{project.startDate}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{project.dueDate}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{project.owner}</td>
                  <td className="px-4 py-4"><StatusBadge status={project.status} tone={project.tone} /></td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{project.priority}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-28 overflow-hidden rounded-full bg-[var(--bg-card-soft)] shadow-[inset_0_0_0_1px_var(--border)]">
                        <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: project.progress }} />
                      </div>
                      <span className="text-xs font-black text-[var(--text-primary)]">{project.progress}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{project.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableShell>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.86fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Görev Yönetimi" title="Alt görevler, dosyalar, yorumlar ve durum" />
          <TableShell>
            <table className="min-w-[980px] w-full text-left text-sm">
              <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
                <tr>
                  <th className="px-4 py-3">Görev</th>
                  <th className="px-4 py-3">Proje</th>
                  <th className="px-4 py-3">Sorumlu</th>
                  <th className="px-4 py-3">Son tarih</th>
                  <th className="px-4 py-3">Öncelik</th>
                  <th className="px-4 py-3">Alt görev</th>
                  <th className="px-4 py-3">Dosya</th>
                  <th className="px-4 py-3">Yorum</th>
                  <th className="px-4 py-3">Durum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {tasks.map((task) => (
                  <tr className="align-top" key={`${task.project}-${task.name}`}>
                    <td className="px-4 py-4 font-black text-[var(--text-primary)]">{task.name}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{task.project}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{task.owner}</td>
                    <td className="px-4 py-4 font-black text-[var(--text-primary)]">{task.dueDate}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{task.priority}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{task.subtasks}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{task.files}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{task.comments}</td>
                    <td className="px-4 py-4"><StatusBadge status={task.status} tone={task.tone} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableShell>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="SOP / Süreç Kütüphanesi" title="Standart iş akışları ve kontrol listeleri" />
          <div className="mt-5 grid gap-3">
            {sops.map((sop) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={sop.title}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{sop.owner} · {sop.steps}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{sop.title}</h3>
                  </div>
                  <StatusBadge status={sop.status} tone={sop.tone} />
                </div>
                <p className="mt-3 text-xs font-semibold text-[var(--text-secondary)]">{sop.usage} · Son güncelleme {sop.lastUpdated}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Müşteri Teslim Alanı" title="Teslim edilen işler, revize, onay, not ve dosya paylaşımı" />
          <div className="mt-5 grid gap-3">
            {deliveries.map((delivery) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={`${delivery.customer}-${delivery.title}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{delivery.customer} · {delivery.deliveredAt}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{delivery.title}</h3>
                  </div>
                  <StatusBadge status={delivery.approval} tone={delivery.tone} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <MiniStat label="Revize" value={delivery.revision} note="Müşteri isteği" />
                  <MiniStat label="Dosya" value={delivery.files} note="Paylaşılan çıktı" />
                  <MiniStat label="Onay" value={delivery.approval} note="Teslim durumu" />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{delivery.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Operasyon Otomasyonları" title="Proje açma, gecikme, aktarım, onay ve memnuniyet akışları" />
          <div className="mt-5 grid gap-3">
            {automations.map((automation) => (
              <article className={`rounded-[20px] border p-4 ${getTintClassName(automation.tone)}`} key={automation.title}>
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
      </section>

      <section className="rounded-[30px] border border-[var(--border)] bg-[linear-gradient(145deg,oklch(0.18_0.016_80),oklch(0.11_0.014_80)_62%,oklch(0.22_0.038_32))] p-5 text-white shadow-[var(--shadow-lg)]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.12em] text-white/50">Operasyon aksiyon özeti</p>
            <h2 className="mt-2 text-[22px] font-black text-white">Bugün 14 teslim, 11 geciken iş ve 3 müşteri onayı var</h2>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-white/62">
              Öncelik Pera Labs revizesi, Luna E-ticaret rapor onayı ve Nova Klinik kreatif final kontrolü olmalı.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
              <ListChecks aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Geciken işler
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
              <PackageCheck aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Teslim listesi
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
