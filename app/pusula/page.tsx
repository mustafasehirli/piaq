import Link from "next/link";
import { ArrowRight, CalendarDays, Compass, FilePlus2, LayoutGrid, Search, Sparkles, Star, UsersRound } from "lucide-react";
import { StatusBadge, type ProductTone } from "@/app/_components/common/ProductUI";

const boards: Array<{
  accent: string;
  href: string;
  owner: string;
  status: string;
  title: string;
  tone: ProductTone;
  updatedAt: string;
}> = [
  {
    accent: "bg-[var(--accent)]",
    href: "/pusula/tahta",
    owner: "Yönetim",
    status: "Aktif",
    title: "Pusula Tahtası",
    tone: "accent",
    updatedAt: "Bugün"
  },
  {
    accent: "bg-[var(--accent-green)]",
    href: "/pusula/tahta",
    owner: "Pazarlama",
    status: "Taslak",
    title: "Q2 Kanal Stratejisi",
    tone: "good",
    updatedAt: "Dün"
  },
  {
    accent: "bg-[var(--accent-amber)]",
    href: "/pusula/tahta",
    owner: "Operasyon",
    status: "Takip",
    title: "Funnel İyileştirme Haritası",
    tone: "warning",
    updatedAt: "12 Mayıs"
  }
];

const templates: Array<{
  icon: typeof Compass;
  title: string;
  tone: ProductTone;
}> = [
  { icon: Compass, title: "Strateji Haritası", tone: "accent" },
  { icon: CalendarDays, title: "Haftalık Ritim", tone: "good" },
  { icon: UsersRound, title: "Ekip Planı", tone: "neutral" },
  { icon: Sparkles, title: "Fikir Havuzu", tone: "warning" }
];

export default function Page() {
  return (
    <main className="px-6 py-6 md:px-8 md:py-7">
      <section className="rounded-[30px] border border-[var(--border)] bg-[linear-gradient(145deg,white,var(--bg-card-soft))] p-5 shadow-[var(--shadow-sm)]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-light)] px-3 py-1 text-[11px] font-black uppercase tracking-[0.08em] text-[var(--accent)]">
              <Compass aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
              Pusula
            </div>
            <h1 className="mt-4 font-[var(--font-display)] text-[30px] font-black leading-tight text-[var(--text-primary)]">
              Tahtalar
            </h1>
            <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-[var(--text-secondary)]">
              Strateji, kanal ve operasyon kararları için çalışma alanı.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <label className="flex h-11 min-w-[240px] items-center gap-2 rounded-[14px] border border-[var(--border)] bg-white px-3 shadow-[var(--shadow-sm)]">
              <Search aria-hidden="true" className="size-4 text-[var(--text-muted)]" strokeWidth={2.2} />
              <span className="sr-only">Tahta ara</span>
              <input
                className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
                placeholder="Tahta ara"
              />
            </label>
            <Link
              className="inline-flex h-11 items-center gap-2 rounded-[14px] bg-[var(--accent)] px-4 text-sm font-black text-white shadow-[var(--shadow-brand-sm)] transition-colors hover:bg-[var(--accent-hover)]"
              href="/pusula/tahta"
            >
              <FilePlus2 aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Yeni tahta
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <LayoutGrid aria-hidden="true" className="size-4 text-[var(--text-muted)]" strokeWidth={2.4} />
            <h2 className="text-sm font-black text-[var(--text-primary)]">Son tahtalar</h2>
          </div>
          <StatusBadge status="Mock UI" tone="neutral" />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {boards.map((board) => (
            <Link
              className="group overflow-hidden rounded-[26px] border border-[var(--border)] bg-white shadow-[var(--shadow-sm)] transition-all hover:-translate-y-0.5 hover:border-[color-mix(in_oklch,var(--accent)_30%,white)] hover:shadow-[var(--shadow-md)]"
              href={board.href}
              key={board.title}
            >
              <div className="relative h-36 border-b border-[var(--border)] bg-[radial-gradient(circle_at_1px_1px,color-mix(in_oklch,var(--text-muted)_28%,transparent)_1px,transparent_0)] [background-size:18px_18px]">
                <div className="absolute left-5 top-5 h-20 w-28 rounded-[18px] border border-[var(--border)] bg-white/86 shadow-[0_12px_26px_oklch(0.18_0.018_80_/_0.08)]" />
                <div className={`absolute bottom-5 right-5 h-12 w-12 rounded-[16px] ${board.accent} shadow-[0_14px_30px_oklch(0.18_0.018_80_/_0.14)]`} />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-black text-[var(--text-primary)]">{board.title}</h3>
                    <p className="mt-1 text-xs font-bold text-[var(--text-muted)]">{board.owner} · {board.updatedAt}</p>
                  </div>
                  <StatusBadge status={board.status} tone={board.tone} />
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-black text-[var(--accent)]">
                  Tahtayı aç
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <div className="mb-3 flex items-center gap-2">
          <Star aria-hidden="true" className="size-4 text-[var(--text-muted)]" strokeWidth={2.4} />
          <h2 className="text-sm font-black text-[var(--text-primary)]">Şablonlar</h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {templates.map((template) => {
            const Icon = template.icon;

            return (
              <Link
                className="flex min-h-[116px] items-start justify-between gap-4 rounded-[22px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4 transition-colors hover:border-[color-mix(in_oklch,var(--accent)_30%,white)] hover:bg-white"
                href="/pusula/tahta"
                key={template.title}
              >
                <div>
                  <StatusBadge status="Şablon" tone={template.tone} />
                  <h3 className="mt-3 text-sm font-black text-[var(--text-primary)]">{template.title}</h3>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[15px] border border-[var(--border)] bg-white text-[var(--text-primary)]">
                  <Icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
