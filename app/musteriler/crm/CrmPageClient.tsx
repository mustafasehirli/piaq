 "use client";

import { useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarClock, CircleDollarSign, Filter, Layers3, MessageSquareText, Plus, Radar, Search, Sparkles, UserRoundCheck } from "lucide-react";
import { CrmSegment } from "./CrmSegment";
import { activityItems, getColumnMetric, getOpportunityLabel, mockKesifKartlari, pipelineColumns } from "./data";
import { KesifKarti, type KesifKartiData } from "./KesifKarti";

export function CrmPageClient() {
  const boardScrollRef = useRef<HTMLElement>(null);
  const [eklenenKesifKartlari, setEklenenKesifKartlari] = useState<KesifKartiData[]>([]);
  const eklenenKesifKartIdleri = useMemo(
    () => new Set(eklenenKesifKartlari.map((kart) => kart.id)),
    [eklenenKesifKartlari]
  );
  const gorunenKesifKartlari = mockKesifKartlari.filter((kart) => !eklenenKesifKartIdleri.has(kart.id));
  const kapanisMetric = getColumnMetric("Kapanış");
  const kayipMetric = getColumnMetric("Kayıp");
  const gorusmeMetric = getColumnMetric("Randevular");
  const teklifMetric = getColumnMetric("Teklif");
  const beklemeMetric = getColumnMetric("Bekleme");
  const kararToplami = kapanisMetric.count + kayipMetric.count;
  const kapanisOrani = kararToplami > 0 ? Math.round((kapanisMetric.count / kararToplami) * 100) : 0;
  const kayipOrani = kararToplami > 0 ? Math.round((kayipMetric.count / kararToplami) * 100) : 0;
  const salesCenterStats = [
    { label: "Keşif işletmesi", value: String(gorunenKesifKartlari.length), note: "işletme bulundu", color: "#6366f1" },
    { label: "Kapanış sayısı", value: String(kapanisMetric.count), note: "sözleşme aşaması", color: kapanisMetric.color },
    { label: "Kapanış oranı", value: `%${kapanisOrani}`, note: "kapanış / karar", color: "var(--accent-green)" },
    { label: "Kayıp oranı", value: `%${kayipOrani}`, note: "kayıp / karar", color: kayipMetric.color },
    { label: "Randevular", value: String(gorusmeMetric.count), note: "takipte", color: gorusmeMetric.color },
    { label: "Teklif tutarı", value: teklifMetric.value, note: "teklif aşaması", color: teklifMetric.color },
    { label: "Bekleme sayısı", value: String(beklemeMetric.count), note: "askıya alınan", color: beklemeMetric.color }
  ];

  function firsataEkle(kart: KesifKartiData) {
    setEklenenKesifKartlari((mevcutKartlar) => (
      mevcutKartlar.some((mevcutKart) => mevcutKart.id === kart.id)
        ? mevcutKartlar
        : [...mevcutKartlar, kart]
    ));
  }

  function scrollBoard(direction: "left" | "right") {
    boardScrollRef.current?.scrollBy({
      behavior: "smooth",
      left: direction === "left" ? -520 : 520
    });
  }

  return (
    <main className="min-h-[calc(100vh-80px)] overflow-y-auto px-8 py-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <CrmSegment />
      </div>

      <section className="mb-6 grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
        <div className="relative overflow-hidden rounded-[28px] border border-[oklch(0.20_0.018_80_/_0.18)] bg-[linear-gradient(145deg,oklch(0.20_0.018_80),oklch(0.14_0.014_80))] p-7 text-white shadow-[var(--shadow-lg)]">
          <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[var(--accent)] opacity-25 blur-[90px]" />
          <div className="relative z-10 flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-bold text-white/70">
                <Sparkles aria-hidden="true" className="size-3.5 text-[var(--accent-mid)]" strokeWidth={2.4} />
                Satış merkezi
              </div>
              <h2 className="mt-4 text-[24px] font-black tracking-tight">Müşteri kazanım pipeline</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/74">
                Lead kaynakları, teklif tutarları ve sonraki aksiyonlar tek yönetim ekranında takip edilir.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/8 px-5 py-4 text-right backdrop-blur-md">
              <p className="text-xs font-bold text-white/72">Teklif tutarı</p>
              <p className="mt-1 text-3xl font-black tracking-tight">{teklifMetric.value}</p>
              <p className="mt-1 text-xs font-semibold text-[var(--accent-mid)]">teklif aşaması</p>
            </div>
          </div>

          <div className="relative z-10 mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
            {salesCenterStats.filter((stat) => stat.label !== "Teklif tutarı").map((stat) => (
              <article className="rounded-[20px] border border-white/10 bg-white/[0.075] p-4 backdrop-blur-md" key={stat.label}>
                <p className="text-[11px] font-black uppercase tracking-[0.08em] text-white/68">{stat.label}</p>
                <p className="mt-3 text-[26px] font-black leading-none text-white">{stat.value}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="size-2 rounded-full" style={{ background: stat.color }} />
                  <span className="text-xs font-semibold text-white/72">{stat.note}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-[28px] border border-[var(--border)] bg-[linear-gradient(160deg,var(--bg-card),var(--bg-card-soft))] p-6 shadow-[var(--shadow-md)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">Bugünkü aksiyonlar</p>
              <h2 className="mt-2 text-[20px] font-black text-[var(--text-primary)]">Takip kuyruğu</h2>
            </div>
            <CalendarClock aria-hidden="true" className="size-8 text-[var(--accent)]" strokeWidth={2.2} />
          </div>
          <div className="mt-5 grid gap-3">
            {activityItems.map((item) => (
              <div className="rounded-[18px] border border-[var(--border)] bg-white px-4 py-3 shadow-[0_8px_18px_oklch(0.18_0.018_80_/_0.04)]" key={item.title}>
                <div className="flex items-start gap-3">
                  <span className="mt-1 size-2.5 shrink-0 rounded-full" style={{ background: item.tone }} />
                  <div>
                    <p className="text-sm font-black text-[var(--text-primary)]">{item.title}</p>
                    <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">{item.meta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mb-5 flex flex-wrap items-center gap-3 rounded-[24px] border border-[var(--border)] bg-[color-mix(in_oklch,var(--bg-card)_82%,transparent)] p-3 shadow-[var(--shadow-sm)] backdrop-blur">
        <label className="flex h-11 max-w-96 flex-1 items-center gap-2 rounded-[16px] border border-[var(--border)] bg-white px-3.5 shadow-[0_8px_18px_oklch(0.18_0.018_80_/_0.04)]">
          <Search aria-hidden="true" className="size-4 text-[var(--text-muted)]" strokeWidth={2} />
          <span className="sr-only">Fırsat ara</span>
          <input className="min-w-0 flex-1 bg-transparent text-[13.5px] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]" placeholder="Firma, kaynak veya sorumlu ara..." />
        </label>
        {["Tüm kayıtlar", "Fırsatlar", "Potansiyeller", "İnceleme"].map((filter) => (
          <button className="inline-flex items-center gap-2 rounded-[14px] border border-[var(--border)] bg-white px-4 py-2 text-[13px] font-bold text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]" key={filter} type="button">
            {filter === "Tüm kayıtlar" ? <Filter aria-hidden="true" className="size-3.5" strokeWidth={2.2} /> : null}
            {filter}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-1.5">
          <button
            aria-label="Sütunları sola kaydır"
            className="flex size-11 items-center justify-center rounded-[16px] border border-[var(--border)] bg-white text-[var(--text-secondary)] shadow-[0_8px_18px_oklch(0.18_0.018_80_/_0.05)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
            onClick={() => scrollBoard("left")}
            type="button"
          >
            <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={2.4} />
          </button>
          <button
            aria-label="Sütunları sağa kaydır"
            className="flex size-11 items-center justify-center rounded-[16px] border border-[var(--border)] bg-white text-[var(--text-secondary)] shadow-[0_8px_18px_oklch(0.18_0.018_80_/_0.05)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
            onClick={() => scrollBoard("right")}
            type="button"
          >
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2.4} />
          </button>
        </div>
        <button className="inline-flex h-11 items-center gap-2 rounded-[16px] bg-[var(--accent)] px-5 text-[13.5px] font-black text-white shadow-[0_12px_26px_oklch(0.64_0.18_32_/_0.24)] transition hover:bg-[var(--accent-hover)]" type="button">
          <Plus aria-hidden="true" className="size-4" strokeWidth={2.5} />
          Yeni Fırsat
        </button>
      </section>

      <section className="mb-2 overflow-x-auto pb-3" ref={boardScrollRef}>
        <div className="grid min-w-[2400px] grid-cols-7 gap-5">
          <div className="relative overflow-hidden rounded-[30px] border border-[var(--border)] bg-[linear-gradient(155deg,white,var(--bg-card-soft))] p-3 shadow-[var(--shadow-md)]">
            <div className="pointer-events-none absolute -right-24 -top-20 size-56 rounded-full bg-[#6366f1] opacity-16 blur-[70px]" />
            <div
              className="relative mb-3 overflow-hidden rounded-[25px] border px-4 py-4 shadow-[0_12px_26px_oklch(0.18_0.018_80_/_0.065)]"
              style={{
                background: "linear-gradient(145deg, color-mix(in oklch, #6366f1 8%, white), white 62%, var(--bg-card-soft))",
                borderColor: "color-mix(in oklch, #6366f1 16%, var(--border))"
              }}
            >
              <div className="pointer-events-none absolute -right-10 -top-12 size-28 rounded-full bg-[#6366f1] opacity-42 blur-[38px]" />
              <div className="relative z-10 flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-[16px] bg-[#6366f1] text-white shadow-[0_12px_24px_oklch(0.18_0.018_80_/_0.10)]">
                      <Radar aria-hidden="true" className="size-4" strokeWidth={2.4} />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-black leading-none text-[var(--text-primary)]">Keşif</h3>
                      <p className="mt-1.5 text-xs font-black text-[var(--text-muted)]">{gorunenKesifKartlari.length} fırsat</p>
                    </div>
                  </div>
                </div>
                <span className="rounded-[15px] bg-white px-3 py-1.5 text-xs font-black text-[#6366f1] shadow-[inset_0_0_0_1px_color-mix(in_oklch,#6366f1_18%,white),0_10px_18px_color-mix(in_oklch,#6366f1_10%,transparent)]">
                  {gorunenKesifKartlari.length}
                </span>
              </div>
            </div>

            <div className="relative z-10 grid gap-3.5">
              {gorunenKesifKartlari.map((kart) => (
                <KesifKarti kart={kart} key={kart.id} onFirsataEkle={firsataEkle} />
              ))}
            </div>
          </div>

        {pipelineColumns.map((column) => {
          const tasinanKartlar = column.title === "Temas"
            ? eklenenKesifKartlari.map((kart) => ({
                company: kart.isletmeAdi,
                owner: "Atanmadı",
                source: kart.kaynak,
                budget: "—",
                next: "İlk temas",
                day: "Yeni",
                score: kart.etiket === "Fırsat" ? "A" : kart.etiket === "Potansiyel" ? "B" : "C"
              }))
            : [];
          const columnCards = [...tasinanKartlar, ...column.cards];
          const columnCount = column.count + tasinanKartlar.length;

          return (
          <div className="relative overflow-hidden rounded-[30px] border border-[var(--border)] bg-[linear-gradient(155deg,white,var(--bg-card-soft))] p-3 shadow-[var(--shadow-md)]" key={column.title}>
            <div
              className="pointer-events-none absolute -right-24 -top-20 size-56 rounded-full opacity-16 blur-[70px]"
              style={{ background: column.color }}
            />
            <div
              className="relative mb-3 overflow-hidden rounded-[25px] border px-4 py-4 shadow-[0_12px_26px_oklch(0.18_0.018_80_/_0.065)]"
              style={{
                background: `linear-gradient(145deg, color-mix(in oklch, ${column.color} 8%, white), white 62%, var(--bg-card-soft))`,
                borderColor: `color-mix(in oklch, ${column.color} 16%, var(--border))`
              }}
            >
              <div
                className="pointer-events-none absolute -right-10 -top-12 size-28 rounded-full opacity-42 blur-[38px]"
                style={{ background: column.color }}
              />
              <div className="relative z-10 flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className="flex size-10 items-center justify-center rounded-[16px] text-white shadow-[0_12px_24px_oklch(0.18_0.018_80_/_0.10)]"
                      style={{ background: column.color }}
                    >
                      <Layers3 aria-hidden="true" className="size-4" strokeWidth={2.4} />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-black leading-none text-[var(--text-primary)]">{column.title}</h3>
                      <p className="mt-1.5 text-xs font-black text-[var(--text-muted)]">{columnCount} fırsat</p>
                    </div>
                  </div>
                </div>
                <span
                  className="rounded-[15px] bg-white px-3 py-1.5 text-xs font-black shadow-[0_8px_18px_oklch(0.18_0.018_80_/_0.06)]"
                  style={{
                    boxShadow: `inset 0 0 0 1px color-mix(in oklch, ${column.color} 18%, white), 0 10px 18px color-mix(in oklch, ${column.color} 10%, transparent)`,
                    color: column.color
                  }}
                >
                  {column.value}
                </span>
              </div>
            </div>

            <div className="relative z-10 grid gap-3.5">
              {columnCards.map((card) => (
                <article
                  className="group relative overflow-hidden rounded-[26px] border border-[oklch(1_0_0_/_0.82)] bg-[linear-gradient(145deg,white,var(--bg-card-soft))] p-4 shadow-[0_14px_30px_oklch(0.05_0.010_80_/_0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:shadow-[0_20px_38px_oklch(0.05_0.010_80_/_0.22)]"
                  key={card.company}
                >
                  <div
                    className="pointer-events-none absolute -right-14 -top-16 size-36 rounded-full opacity-40 blur-[52px]"
                    style={{ background: `color-mix(in oklch, ${column.color} 18%, transparent)` }}
                  />
                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-[16px] font-black tracking-tight text-[var(--text-primary)]">{card.company}</h4>
                      <div className="mt-2 inline-flex rounded-full bg-[var(--bg-card-soft)] px-2.5 py-1 text-[11px] font-black text-[var(--text-muted)] shadow-[inset_0_0_0_1px_var(--border)]">
                        {card.source}
                      </div>
                    </div>
                    <span
                      className="rounded-full px-3 py-1.5 text-[11px] font-black shadow-[0_10px_20px_oklch(0.18_0.018_80_/_0.07)]"
                      style={{
                        background: `color-mix(in oklch, ${column.color} 10%, white)`,
                        boxShadow: `inset 0 0 0 1px color-mix(in oklch, ${column.color} 22%, white), 0 10px 20px color-mix(in oklch, ${column.color} 10%, transparent)`,
                        color: column.color
                      }}
                    >
                      {getOpportunityLabel(card.score)}
                    </span>
                  </div>

                  <div className="relative z-10 mt-5 rounded-[22px] border border-[var(--border)] bg-[linear-gradient(145deg,var(--bg-card-soft),white)] p-4">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.04em] text-[var(--text-muted)]">
                          <CircleDollarSign aria-hidden="true" className="size-3.5" strokeWidth={2.2} />
                          Tahmini bütçe
                        </div>
                        <p className="mt-2 text-[26px] font-black leading-none text-[var(--text-primary)]">{card.budget}</p>
                      </div>
                      <div className="text-right">
                        <div
                          className="ml-auto flex size-9 items-center justify-center rounded-[14px] text-xs font-black text-white shadow-[0_10px_20px_oklch(0.18_0.018_80_/_0.10)]"
                          style={{ background: column.color }}
                        >
                          {card.owner.slice(0, 1)}
                        </div>
                        <div className="mt-2 flex items-center gap-1.5 text-xs font-black text-[var(--text-primary)]">
                          <UserRoundCheck aria-hidden="true" className="size-3.5 text-[var(--text-muted)]" strokeWidth={2.2} />
                          {card.owner}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-4 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.04em] text-[var(--text-muted)]">
                        <MessageSquareText aria-hidden="true" className="size-3.5" strokeWidth={2.2} />
                        Sıradaki adım
                      </div>
                      <p className="mt-1.5 truncate text-[13px] font-black text-[var(--text-primary)]">{card.next}</p>
                    </div>
                    <span
                      className="inline-flex shrink-0 items-center gap-1 rounded-[14px] border bg-white px-3 py-2 text-[11px] font-black shadow-[0_8px_18px_oklch(0.18_0.018_80_/_0.06)]"
                      style={{
                        borderColor: `color-mix(in oklch, ${column.color} 20%, var(--border))`,
                        color: column.color
                      }}
                    >
                      {card.day}
                      <ArrowUpRight aria-hidden="true" className="size-3" strokeWidth={2.4} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          );
        })}
        </div>
      </section>
    </main>
  );
}
