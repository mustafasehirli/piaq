import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  Filter,
  Gauge,
  Handshake,
  Mail,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  UsersRound,
  WalletCards
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ValueText } from "@/app/_components/common/ProductUI";
import { GoogleLogoMono, MetaLogoMono, TikTokLogoMono } from "@/components/icons/BrandIcons";

type Feature = {
  description: string;
  icon: LucideIcon;
  title: string;
};

type Metric = {
  label: string;
  value: string;
};

const heroMetrics: Metric[] = [
  { label: "Ajans sağlığı", value: "%78" },
  { label: "Takipte müşteri", value: "21" },
  { label: "Haftalık lead", value: "1.248" }
];

const features: Feature[] = [
  {
    description: "Meta, Google, TikTok, Mail ve Funnel performansı müşteri sağlığıyla aynı karar ekranında okunur.",
    icon: BarChart3,
    title: "Reklam verisi tek yerde"
  },
  {
    description: "Risk nedeni, son aksiyon, sonraki adım ve sorumlu bilgisi rapor metni olmadan görünür kalır.",
    icon: ClipboardList,
    title: "Operasyon kararı netleşir"
  },
  {
    description: "Pipeline, teklif, onboarding, tahsilat ve teslim süreçleri ajans yönetim diliyle takip edilir.",
    icon: Handshake,
    title: "Satıştan teslimata bağlanır"
  },
  {
    description: "Kanal, funnel ve müşteri sinyalleriyle bugünün aksiyonları öncelik sırasına girer.",
    icon: BellRing,
    title: "Riskler erken yakalanır"
  }
];

const workflows = [
  "Müşteri portföyü ve sağlık skoru",
  "Kanal performansı ve bütçe kararları",
  "Funnel adımları ve darboğaz takibi",
  "Ajans operasyonu, ekip kapasitesi ve finans"
];

const audiences = [
  {
    title: "Ajans sahibi",
    detail: "Gelir, müşteri riski, reklam bütçesi ve ekip yükünü tek ekranda görür."
  },
  {
    title: "Ekip lideri",
    detail: "Kanal, teslimat ve sorumluluk kararlarını daha hızlı dağıtır."
  },
  {
    title: "Solo freelancer",
    detail: "Sheets, Notion ve reklam panelleri arasında kaybolmadan portföy yönetir."
  }
];

function ProductScene() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[66%] min-w-[760px] opacity-70 lg:block">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,oklch(1_0_0_/_0.08)_0_1px,transparent_1px_48px),repeating-linear-gradient(0deg,oklch(1_0_0_/_0.06)_0_1px,transparent_1px_48px)]" />
      <div className="absolute right-[-40px] top-[92px] w-[860px] rounded-[32px] border border-white/10 bg-[#f6f5ef] p-5 shadow-[0_40px_90px_rgb(0_0_0_/_0.34)]">
        <div className="flex items-center justify-between border-b border-black/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-[16px] bg-[#17120f] text-white">
              <Gauge className="size-5" strokeWidth={2.4} />
            </span>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-black/42">Ajans merkezi</p>
              <p className="mt-1 text-lg font-black text-[#17120f]">Karar paneli</p>
            </div>
          </div>
          <div className="flex gap-2">
            {["7 gün", "30 gün", "90 gün"].map((range, index) => (
              <span className={`rounded-xl px-3 py-2 text-xs font-black ${index === 0 ? "bg-[#f0533a] text-white" : "bg-white text-black/52"}`} key={range}>
                {range}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-3">
          {[
            ["Aylık gelir", "₺1.28M", "bg-emerald-50 text-emerald-700"],
            ["Aktif müşteri", "21", "bg-amber-50 text-amber-700"],
            ["Operasyon riski", "4", "bg-red-50 text-red-700"],
            ["ROAS", "4,2x", "bg-orange-50 text-[#f0533a]"]
          ].map(([label, value, tone]) => (
            <div className="rounded-[22px] border border-black/10 bg-white p-4" key={label}>
              <p className="text-[10px] font-black uppercase tracking-[0.08em] text-black/42">{label}</p>
              <p className="mt-3 text-2xl font-black text-[#17120f]"><ValueText value={value} /></p>
              <span className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-[11px] font-black ${tone}`}>Takipte</span>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-[1.05fr_0.95fr] gap-4">
          <div className="rounded-[26px] border border-black/10 bg-[#17120f] p-5 text-white">
            <div className="flex items-center justify-between">
              <p className="text-sm font-black">Kanal karşılaştırması</p>
              <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold text-white/70">Canlı</span>
            </div>
            <div className="mt-5 grid gap-4">
              {[
                ["Meta", "37%", "#003049"],
                ["Google", "42%", "#d62828"],
                ["TikTok", "21%", "#0F766E"],
                ["Mail", "12%", "#d98a32"]
              ].map(([name, width, color]) => (
                <div key={name}>
                  <div className="mb-2 flex items-center justify-between text-xs font-bold text-white/62">
                    <span>{name}</span>
                    <span>{width}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-full rounded-full" style={{ width, background: color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {[
              ["Nova Klinik", "%88", "Bütçe artırımı"],
              ["Atlas E-Ticaret", "%63", "Onboarding riski"],
              ["Mavi Akademi", "%48", "Tahsilat takibi"]
            ].map(([name, score, action]) => (
              <div className="rounded-[22px] border border-black/10 bg-white p-4" key={name}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-black text-[#17120f]">{name}</p>
                    <p className="mt-1 text-xs font-bold text-black/45">{action}</p>
                  </div>
                  <span className="rounded-full bg-[#fff0ec] px-2.5 py-1 text-xs font-black text-[#f0533a]">{score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <section className="relative isolate min-h-[88svh] overflow-hidden bg-[#17120f] text-white">
        <ProductScene />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link className="flex items-center gap-3" href="/landing">
            <span className="relative flex size-11 overflow-hidden rounded-[14px] bg-white">
              <Image alt="Piaq logo" className="object-contain" fill priority sizes="44px" src="/Logo.png" />
            </span>
            <span>
              <span className="block text-[18px] font-black tracking-[0.16em]">PİAQ</span>
              <span className="block text-[11px] font-semibold text-white/56">Ajans yönetim platformu</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-bold text-white/62 md:flex">
            <a className="transition-colors hover:text-white" href="#cozum">Çözüm</a>
            <a className="transition-colors hover:text-white" href="#akis">Akış</a>
            <a className="transition-colors hover:text-white" href="#kimler">Kimler için</a>
          </nav>

          <Link className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-black text-white transition-colors hover:bg-white/16" href="/">
            Panele gir
          </Link>
        </header>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-5 pb-16 pt-16 md:px-8 lg:min-h-[calc(88svh-84px)] lg:pb-20 lg:pt-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-white/68">
              <ShieldCheck aria-hidden="true" className="size-3.5 text-[#ff8a78]" strokeWidth={2.4} />
              Reklam verisi + müşteri sağlığı + operasyon
            </div>
            <h1 className="mt-6 text-[clamp(44px,8vw,86px)] font-black leading-[0.94] tracking-[-0.01em]">
              PİAQ
            </h1>
            <p className="mt-5 max-w-2xl text-[clamp(24px,4vw,46px)] font-black leading-[1.04]">
              Dijital ajansını tek karar ekranında yönet.
            </p>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-white/62 md:text-lg">
              Sheets, Notion, reklam panelleri, funnel notları ve ekip takipleri yerine; müşterinin durumu, riski, fırsatı ve bugünkü aksiyonu aynı yüzeyde görünür.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="inline-flex h-12 items-center gap-2 rounded-[16px] bg-[#f0533a] px-5 text-sm font-black text-white shadow-[0_16px_34px_rgb(240_83_58_/_0.28)] transition-colors hover:bg-[#d94832]" href="/">
                Ürünü gör
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2.4} />
              </Link>
              <Link className="inline-flex h-12 items-center rounded-[16px] border border-white/12 bg-white/8 px-5 text-sm font-black text-white transition-colors hover:bg-white/14" href="/musteriler">
                Müşteri akışını incele
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {heroMetrics.map((metric) => (
                <div className="border-l border-white/12 pl-4" key={metric.label}>
                  <p className="text-[28px] font-black leading-none text-white"><ValueText value={metric.value} /></p>
                  <p className="mt-2 text-xs font-bold leading-5 text-white/48">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cozum" className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-[var(--accent)]">Çözüm</p>
          <h2 className="mt-3 text-[34px] font-black leading-tight md:text-[44px]">Rapor değil, karar veren ajans paneli.</h2>
          <p className="mt-4 text-base font-semibold leading-7 text-[var(--text-muted)]">
            Piaq ajans sahibinin her sabah sorduğu soruları tek yerde toplar: hangi müşteri riskte, hangi kanal büyür, hangi iş gecikiyor, hangi aksiyon bugün kapanmalı?
          </p>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article className="rounded-[26px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]" key={feature.title}>
              <span className="flex size-11 items-center justify-center rounded-[16px] bg-[var(--accent-light)] text-[var(--accent)]">
                <feature.icon aria-hidden="true" className="size-5" strokeWidth={2.4} />
              </span>
              <h3 className="mt-5 text-lg font-black text-[var(--text-primary)]">{feature.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-[var(--text-muted)]">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="akis" className="mx-auto grid max-w-7xl gap-6 px-5 pb-16 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[30px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-sm)]">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-[var(--accent)]">Akış</p>
          <h2 className="mt-3 text-[30px] font-black leading-tight">Ajansın günlük ritmi Piaq içinde akar.</h2>
          <div className="mt-6 grid gap-3">
            {workflows.map((workflow, index) => (
              <div className="flex items-center gap-3 rounded-[18px] border border-[var(--border)] bg-[var(--bg-card-soft)] px-4 py-3" key={workflow}>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-[12px] bg-[var(--text-primary)] text-xs font-black text-white">
                  {index + 1}
                </span>
                <span className="text-sm font-black text-[var(--text-primary)]">{workflow}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-[oklch(1_0_0_/_0.10)] bg-[#17120f] p-6 text-white shadow-[var(--shadow-lg)]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.12em] text-white/42">Entegrasyon omurgası</p>
              <h2 className="mt-2 text-2xl font-black">Kanal, funnel ve mail birlikte okunur.</h2>
            </div>
            <span className="rounded-full bg-[#f0533a] px-3 py-1 text-xs font-black">Mock UI fazı</span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { icon: MetaLogoMono, label: "Meta", value: "Bütçe ve ROAS" },
              { icon: GoogleLogoMono, label: "Google", value: "Arama niyeti" },
              { icon: TikTokLogoMono, label: "TikTok", value: "Kreatif test" },
              { icon: Filter, label: "Funnel", value: "Lead akışı" },
              { icon: Mail, label: "Mail", value: "Takip serisi" },
              { icon: WalletCards, label: "Finans", value: "Tahsilat" }
            ].map((item) => (
              <div className="rounded-[20px] border border-white/10 bg-white/[0.07] p-4" key={item.label}>
                <item.icon aria-hidden="true" className="size-5 text-[#ff8a78]" strokeWidth={2.3} />
                <p className="mt-3 text-sm font-black text-white">{item.label}</p>
                <p className="mt-1 text-xs font-semibold text-white/48">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              { icon: MousePointerClick, label: "Lead", value: "1.248" },
              { icon: CircleDollarSign, label: "Gelir", value: "₺1.28M" },
              { icon: Sparkles, label: "Aksiyon", value: "Bugün 7" }
            ].map((item) => (
              <div className="rounded-[20px] border border-white/10 bg-black/18 p-4" key={item.label}>
                <item.icon aria-hidden="true" className="size-4 text-[#ff8a78]" strokeWidth={2.4} />
                <p className="mt-3 text-[28px] font-black leading-none"><ValueText value={item.value} /></p>
                <p className="mt-2 text-xs font-bold text-white/45">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kimler" className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <div className="rounded-[30px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-sm)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.12em] text-[var(--accent)]">Kimler için</p>
              <h2 className="mt-3 text-[32px] font-black leading-tight">Ajans içinde karar alan herkes için.</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[var(--accent-light)] px-3 py-2 text-xs font-black text-[var(--accent)]">
              <UsersRound aria-hidden="true" className="size-4" strokeWidth={2.4} />
              B2B SaaS paneli
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {audiences.map((audience) => (
              <article className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-5" key={audience.title}>
                <CheckCircle2 aria-hidden="true" className="size-5 text-[var(--accent-green)]" strokeWidth={2.4} />
                <h3 className="mt-4 text-lg font-black text-[var(--text-primary)]">{audience.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[var(--text-muted)]">{audience.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="flex flex-col gap-5 rounded-[30px] border border-[oklch(1_0_0_/_0.10)] bg-[#17120f] p-6 text-white shadow-[var(--shadow-lg)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-white/42">Piaq</p>
            <h2 className="mt-2 text-[30px] font-black leading-tight">Ajans verisini karar diline çevir.</h2>
            <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-white/56">Dashboard, müşteri portföyü, ajans merkezi ve ortak kanal ekranları aynı ürün omurgasında çalışır.</p>
          </div>
          <Link className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[16px] bg-[#f0533a] px-5 text-sm font-black text-white shadow-[0_16px_34px_rgb(240_83_58_/_0.28)] transition-colors hover:bg-[#d94832]" href="/">
            Panele geç
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2.4} />
          </Link>
        </div>
      </section>
    </main>
  );
}
