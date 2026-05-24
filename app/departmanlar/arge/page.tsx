import {
  Activity,
  AlertTriangle,
  BellRing,
  CheckCircle2,
  FlaskConical,
  Gauge,
  Lightbulb,
  Rocket,
  Sparkles,
  TestTube2,
  Wrench,
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

type Idea = {
  title: string;
  description: string;
  problem: string;
  department: string;
  benefit: string;
  difficulty: string;
  priority: string;
  status: string;
  owner: string;
  tone: Tone;
};

type RoadmapColumn = {
  stage: string;
  count: string;
  tone: Tone;
  items: Array<{
    title: string;
    owner: string;
    impact: string;
    eta: string;
  }>;
};

type Experiment = {
  hypothesis: string;
  method: string;
  startDate: string;
  endDate: string;
  successMetric: string;
  result: string;
  lesson: string;
  status: string;
  tone: Tone;
};

type MarketResearch = {
  competitor: string;
  feature: string;
  price: string;
  strengths: string;
  weaknesses: string;
  learning: string;
  status: string;
  tone: Tone;
};

type SystemImprovement = {
  title: string;
  category: string;
  description: string;
  expectedGain: string;
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

const kpis: Kpi[] = [
  { change: "+9 bu ay", icon: Lightbulb, label: "Aktif Fikir", note: "Değerlendirme havuzu", tone: "accent", value: "38" },
  { change: "4 kritik test", icon: TestTube2, label: "Test Edilen Fikir", note: "Canlı deneyler", tone: "warning", value: "11" },
  { change: "+6 ay", icon: Rocket, label: "Yayına Alınan Geliştirme", note: "Ürün + süreç", tone: "good", value: "18" },
  { change: "3 öğrenim", icon: XCircle, label: "Başarısız Deney", note: "Ders çıkarıldı", tone: "danger", value: "5" },
  { change: "%64 tamam", icon: Gauge, label: "Ürün Geliştirme Durumu", note: "Roadmap ilerlemesi", tone: "warning", value: "%64" },
  { change: "+12 iyileştirme", icon: Wrench, label: "Sistem İyileştirme", note: "İç süreç ve otomasyon", tone: "good", value: "24" }
];

const ideas: Idea[] = [
  { benefit: "Satış dönüşümünü %8-12 artırabilir", department: "Satış", description: "Teklif kapsamını, fiyatı ve takip aksiyonlarını tek sayfada standartlaştıran dinamik şablon.", difficulty: "Orta", owner: "Mert", priority: "Yüksek", problem: "Tekliflerin yapısı kişiye göre değişiyor ve takip ritmi bozuluyor.", status: "Değerlendir", title: "Akıllı teklif şablonu", tone: "good" },
  { benefit: "Operasyon teslim süresini %15 azaltabilir", department: "Operasyon", description: "Geciken görevleri ve müşteri onayı bekleyen teslimleri tek otomatik listede toplar.", difficulty: "Düşük", owner: "Ayşe", priority: "Yüksek", problem: "Geciken işler farklı listelere dağılıyor.", status: "Planla", title: "Gecikme radar paneli", tone: "good" },
  { benefit: "Müşteri churn riskini erken gösterir", department: "Yönetim", description: "Memnuniyet, teslim gecikmesi, reklam performansı ve iletişim sinyallerinden risk skoru üretir.", difficulty: "Yüksek", owner: "Deniz", priority: "Kritik", problem: "Kritik müşteri riski geç fark ediliyor.", status: "Araştırma", title: "Müşteri sağlık skoru v2", tone: "warning" },
  { benefit: "Rapor hazırlama süresini %30 azaltabilir", department: "Pazarlama", description: "Meta, Google, TikTok ve funnel verilerini karar notuna dönüştüren AI özet alanı.", difficulty: "Yüksek", owner: "İrem", priority: "Orta", problem: "Rapor çok veri içeriyor ama aksiyon özetleri manuel yazılıyor.", status: "Test et", title: "AI rapor özeti", tone: "accent" }
];

const roadmap: RoadmapColumn[] = [
  { count: "8 fikir", items: [{ eta: "Açık", impact: "Yüksek", owner: "Deniz", title: "Müşteri sağlık skoru v2" }], stage: "Fikir", tone: "accent" },
  { count: "5 araştırma", items: [{ eta: "20 Mayıs", impact: "Orta", owner: "İrem", title: "AI rapor özeti veri sınırları" }], stage: "Araştırma", tone: "warning" },
  { count: "4 planlandı", items: [{ eta: "24 Mayıs", impact: "Yüksek", owner: "Ayşe", title: "Gecikme radar paneli" }], stage: "Planlandı", tone: "good" },
  { count: "3 tasarım", items: [{ eta: "27 Mayıs", impact: "Orta", owner: "Mert", title: "Teklif şablonu ekranı" }], stage: "Tasarım", tone: "neutral" },
  { count: "4 geliştirme", items: [{ eta: "31 Mayıs", impact: "Yüksek", owner: "Deniz", title: "Pipeline otomasyon kuralı" }], stage: "Geliştirme", tone: "warning" },
  { count: "2 test", items: [{ eta: "16 Mayıs", impact: "Orta", owner: "İrem", title: "Yeni teklif şablonu testi" }], stage: "Test", tone: "warning" },
  { count: "6 yayında", items: [{ eta: "Yayında", impact: "Yüksek", owner: "Ayşe", title: "Operasyon SOP kütüphanesi" }], stage: "Yayında", tone: "good" },
  { count: "2 iptal", items: [{ eta: "Kapandı", impact: "Düşük", owner: "Mert", title: "Manuel puanlama eklentisi" }], stage: "İptal", tone: "danger" }
];

const experiments: Experiment[] = [
  { endDate: "20 Mayıs", hypothesis: "Yeni teklif şablonu satış dönüşümünü artırır mı?", lesson: "Fiyat ve kapsam aynı sayfada olunca takip görüşmesi daha net ilerliyor.", method: "A/B test · eski şablon vs yeni şablon", result: "İlk veride +%9 teklif yanıtı", startDate: "10 Mayıs", status: "Sürüyor", successMetric: "Teklif yanıt oranı +%10", tone: "warning" },
  { endDate: "14 Mayıs", hypothesis: "Gecikme radar paneli operasyon takip yükünü azaltır mı?", lesson: "Tek liste, günlük standup süresini kısalttı ancak müşteri onayı ayrı işaretlenmeli.", method: "2 haftalık pilot", result: "Standup süresi -%18", startDate: "1 Mayıs", status: "Başarılı", successMetric: "Standup süresi -%15", tone: "good" },
  { endDate: "8 Mayıs", hypothesis: "AI rapor özeti yönetici aksiyonunu hızlandırır mı?", lesson: "Özet iyi ama veri güven sinyali olmadan ekip kullanmıyor.", method: "Rapor taslaklarında manuel karşılaştırma", result: "Başarısız", startDate: "28 Nisan", status: "Ders çıkarıldı", successMetric: "Rapor hazırlık süresi -%25", tone: "danger" }
];

const research: MarketResearch[] = [
  { competitor: "AgencyAnalytics", feature: "Müşteri raporlama", learning: "Görsel rapor güçlü ama karar aksiyonları zayıf; Piaq karar paneliyle ayrışabilir.", price: "$12/client", status: "İncelendi", strengths: "Rapor şablonları, entegrasyon çeşitliliği", tone: "good", weaknesses: "Operasyon ve satış bağı yok" },
  { competitor: "HubSpot", feature: "Pipeline ve CRM", learning: "Satış otomasyonu güçlü; ajans odaklı sade pipeline fark yaratabilir.", price: "$20+/seat", status: "Takipte", strengths: "Otomasyon ve CRM olgunluğu", tone: "warning", weaknesses: "Ajans operasyonuna ağır geliyor" },
  { competitor: "ClickUp", feature: "Operasyon ve görev yönetimi", learning: "Esnek görev yapısı iyi; Piaq'ın kanal verisiyle birleşmesi değerli olur.", price: "$10/user", status: "İncelendi", strengths: "Kanban, doküman, görev", tone: "neutral", weaknesses: "Reklam/funnel bağlamı yok" },
  { competitor: "Notion", feature: "Bilgi merkezi", learning: "SOP ve karar defteri Notion gibi esnek olmalı ama ajans metriklerine bağlı çalışmalı.", price: "$10/user", status: "Fırsat", strengths: "Esneklik, doküman deneyimi", tone: "good", weaknesses: "Operasyon sinyali üretmiyor" }
];

const improvements: SystemImprovement[] = [
  { category: "İç süreç", description: "Satış kazanıldıktan sonra operasyon onboarding projesi ve checklist otomatik açılsın.", expectedGain: "Elle proje açma azalır", owner: "Ayşe", status: "Planlandı", title: "Satıştan operasyona otomatik devir", tone: "good" },
  { category: "Otomasyon", description: "Geciken görev, müşteri onayı ve revize istekleri tek günlük listede toplansın.", expectedGain: "Gecikme görünürlüğü artar", owner: "Deniz", status: "Geliştirme", title: "Operasyon günlük radar", tone: "warning" },
  { category: "Yeni modül", description: "Müşteri sağlık skoru dashboard ve yönetim risk paneline bağlansın.", expectedGain: "Churn erken yakalanır", owner: "İrem", status: "Araştırma", title: "Müşteri sağlık modülü", tone: "warning" },
  { category: "AI entegrasyon", description: "Kanal raporları aksiyon, risk ve fırsat cümlelerine dönüştürülsün.", expectedGain: "Rapor hazırlığı hızlanır", owner: "Mert", status: "Test", title: "AI karar özeti", tone: "accent" },
  { category: "Verimlilik", description: "Teklif, rapor ve SOP şablonları tek sürüm kontrollü alanda toplansın.", expectedGain: "Hata ve tekrar azalır", owner: "Ayşe", status: "Yayında", title: "Şablon merkezi", tone: "good" }
];

const automations: Automation[] = [
  { detail: "Fikir havuzuna yeni kayıt gelince sahibine ve ilgili departmana değerlendirme görevi açılır.", status: "Aktif", title: "Yeni fikir eklendiğinde değerlendirme görevi oluştur", tone: "good", trigger: "Yeni fikir" },
  { detail: "Deney bitiş tarihinde sorumludan sonuç, öğrenilen ders ve sonraki aksiyon raporu ister.", status: "Aktif", title: "Test bitiş tarihinde sonuç raporu iste", tone: "good", trigger: "Test bitişi" },
  { detail: "Kritik veya yüksek öncelikli fikirler haftalık yönetim karar paneline taşınır.", status: "İzleniyor", title: "Önceliği yüksek fikirleri yönetime bildir", tone: "warning", trigger: "Yüksek öncelik" },
  { detail: "Yayına alınan ürün veya süreç geliştirmeleri operasyon ekibine ve SOP kütüphanesine duyurulur.", status: "Aktif", title: "Yayına alınan geliştirmeleri operasyon ekibine duyur", tone: "good", trigger: "Yayına alındı" }
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
              <FlaskConical aria-hidden="true" className="size-7" strokeWidth={2.4} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">Departmanlar · AR-GE</p>
              <h1 className="mt-1 text-[28px] font-black leading-tight text-[var(--text-primary)] md:text-[34px]">AR-GE Departmanı</h1>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-[var(--text-secondary)]">
                Gelişim, ürün, yenilik, deney ve sistem kurma çalışmalarını fikirden yayına kadar takip eder.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.90_0.05_145)] bg-[var(--accent-green-light)] px-3 py-2 text-xs font-black text-[var(--accent-green)]">
              <CheckCircle2 aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Deney sistemi aktif
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-xs font-black text-[var(--text-secondary)]">
              <Activity aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Son güncelleme 14 Mayıs 2026 11:15
            </span>
          </div>
        </div>
      </header>

      <nav aria-label="ARGE sayfası bölümleri" className="flex gap-2 overflow-x-auto pb-1">
        {["AR-GE Dashboard'u", "Fikir Havuzu", "Ürün / Özellik Roadmap'i", "Deney / Test Sistemi", "Rakip / Pazar Araştırması", "Sistem Geliştirme", "AR-GE Otomasyonları"].map((item) => (
          <span className="shrink-0 rounded-full border border-[var(--border)] bg-white px-3.5 py-2 text-xs font-black text-[var(--text-secondary)] shadow-[var(--shadow-sm)]" key={item}>
            {item}
          </span>
        ))}
      </nav>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
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

      <section className="grid gap-6 xl:grid-cols-[1fr_0.92fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Ürün / Özellik Roadmap'i" title="Fikir → araştırma → plan → tasarım → geliştirme → test → yayın" />
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {roadmap.map((column, index) => (
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
                    <div className="rounded-[16px] border border-[var(--border)] bg-white p-3" key={`${column.stage}-${item.title}`}>
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs font-black text-[var(--text-primary)]">{item.title}</p>
                        <span className="text-xs font-black text-[var(--accent)]">{item.impact}</span>
                      </div>
                      <p className="mt-1 text-[11px] font-bold text-[var(--text-muted)]">{item.owner} · {item.eta}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="AR-GE sağlığı" title="Fikir, test ve yayın dengesi" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <MiniStat label="Fikir / Test" value="38 / 11" note="Aktif havuz" />
            <MiniStat label="Yayın oranı" value="%47" note="Bu çeyrek" />
            <MiniStat label="Başarısız deney" value="5" note="Ders çıkarıldı" />
            <MiniStat label="Roadmap" value="%64" note="Ürün geliştirme" />
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
        <SectionTitle kicker="Fikir Havuzu" title="Problem, etki, fayda, zorluk, öncelik ve durum" />
        <TableShell>
          <table className="min-w-[1180px] w-full text-left text-sm">
            <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
              <tr>
                <th className="px-4 py-3">Fikir başlığı</th>
                <th className="px-4 py-3">Açıklama</th>
                <th className="px-4 py-3">Çözdüğü problem</th>
                <th className="px-4 py-3">Departman</th>
                <th className="px-4 py-3">Tahmini fayda</th>
                <th className="px-4 py-3">Zorluk</th>
                <th className="px-4 py-3">Öncelik</th>
                <th className="px-4 py-3">Sorumlu</th>
                <th className="px-4 py-3">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {ideas.map((idea) => (
                <tr className="align-top" key={idea.title}>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{idea.title}</td>
                  <td className="px-4 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{idea.description}</td>
                  <td className="px-4 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{idea.problem}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{idea.department}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{idea.benefit}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{idea.difficulty}</td>
                  <td className="px-4 py-4 font-black text-[var(--text-primary)]">{idea.priority}</td>
                  <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{idea.owner}</td>
                  <td className="px-4 py-4"><StatusBadge status={idea.status} tone={idea.tone} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableShell>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Deney / Test Sistemi" title="Hipotez, yöntem, başarı metriği, sonuç ve öğrenilen ders" />
          <div className="mt-5 grid gap-3">
            {experiments.map((experiment) => (
              <article className={`rounded-[22px] border p-4 ${getTintClassName(experiment.tone)}`} key={experiment.hypothesis}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{experiment.startDate} - {experiment.endDate}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{experiment.hypothesis}</h3>
                  </div>
                  <StatusBadge status={experiment.status} tone={experiment.tone} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <MiniStat label="Test yöntemi" value={experiment.method} note="Deney tasarımı" />
                  <MiniStat label="Başarı metriği" value={experiment.successMetric} note="Kriter" />
                  <MiniStat label="Sonuç" value={experiment.result} note="Ölçüm" />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">Öğrenilen ders: {experiment.lesson}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Sistem Geliştirme Alanı" title="Süreç, otomasyon, modül, AI ve verimlilik fikirleri" />
          <div className="mt-5 grid gap-3">
            {improvements.map((item) => (
              <article className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4" key={item.title}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.category} · {item.owner}</p>
                    <h3 className="mt-1 text-sm font-black text-[var(--text-primary)]">{item.title}</h3>
                  </div>
                  <StatusBadge status={item.status} tone={item.tone} />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.description}</p>
                <p className="mt-3 text-xs font-black text-[var(--text-primary)]">Tahmini kazanım: {item.expectedGain}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="Rakip / Pazar Araştırması" title="Özellik, fiyat, güçlü/zayıf yön ve öğrenim" />
          <TableShell>
            <table className="min-w-[1040px] w-full text-left text-sm">
              <thead className="bg-[var(--bg-card-soft)] text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
                <tr>
                  <th className="px-4 py-3">Rakip</th>
                  <th className="px-4 py-3">İncelenen özellik</th>
                  <th className="px-4 py-3">Fiyat</th>
                  <th className="px-4 py-3">Güçlü yön</th>
                  <th className="px-4 py-3">Zayıf yön</th>
                  <th className="px-4 py-3">Ne öğrenebiliriz?</th>
                  <th className="px-4 py-3">Durum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {research.map((item) => (
                  <tr className="align-top" key={`${item.competitor}-${item.feature}`}>
                    <td className="px-4 py-4 font-black text-[var(--text-primary)]">{item.competitor}</td>
                    <td className="px-4 py-4 font-bold text-[var(--text-secondary)]">{item.feature}</td>
                    <td className="px-4 py-4 font-black text-[var(--text-primary)]">{item.price}</td>
                    <td className="px-4 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.strengths}</td>
                    <td className="px-4 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.weaknesses}</td>
                    <td className="px-4 py-4 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.learning}</td>
                    <td className="px-4 py-4"><StatusBadge status={item.status} tone={item.tone} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableShell>
        </section>

        <section className="rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <SectionTitle kicker="AR-GE Otomasyonları" title="Fikir, test, yüksek öncelik ve yayına alma akışları" />
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
            <p className="text-[11px] font-black uppercase tracking-[0.12em] text-white/50">AR-GE aksiyon özeti</p>
            <h2 className="mt-2 text-[22px] font-black text-white">Bugün 4 kritik test, 3 yüksek öncelikli fikir ve 2 yayına alma duyurusu var</h2>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-white/62">
              Öncelik müşteri sağlık skoru araştırması, yeni teklif şablonu testi ve gecikme radar panelinin operasyon ekibine aktarımı olmalı.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
              <TestTube2 aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Canlı testler
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-xs font-black text-white">
              <Sparkles aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Yüksek öncelikler
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
