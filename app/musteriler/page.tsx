"use client";

import Link from "next/link";
import { useState } from "react";
import { AlertTriangle, Check, Pause, Search, TrendingUp, UserPlus, Users, X as XIcon } from "lucide-react";
import { StatusBadge, type ProductTone } from "@/app/_components/common";
import { getChannelBadgeClass } from "@/lib/data/channels";

type CustomerStatus = "Aktif" | "Duraklatıldı" | "Ayrıldı";

type CustomerRow = {
  contractDuration: string;
  health: string;
  initials: string;
  lastAction: string;
  monthlySpend: string;
  name: string;
  nextAction: string;
  platforms: string[];
  performance: string;
  risk: string;
  riskReason: string;
  roas: string;
  sector: string;
  slug: string;
  status: CustomerStatus;
  tone: ProductTone;
};

const customers: CustomerRow[] = [
  { contractDuration: "3 ay", health: "%88", initials: "AF", lastAction: "Haftalık rapor bugün gönderildi", monthlySpend: "₺84.500", name: "A Firma", nextAction: "Bütçe artırımı öner", platforms: ["Meta", "Google"], performance: "+12%", risk: "Sağlıklı", riskReason: "ROAS ve lead kalitesi hedef üstünde", roas: "5,1x", sector: "E-ticaret", slug: "a-firma", status: "Aktif", tone: "good" },
  { contractDuration: "10 ay", health: "%64", initials: "BF", lastAction: "ROAS optimizasyonu açıldı", monthlySpend: "₺32.100", name: "B Firma", nextAction: "Meta bütçe temposunu kontrol et", platforms: ["Meta", "TikTok"], performance: "-8%", risk: "Dikkat", riskReason: "TikTok dönüşüm maliyeti yükseldi", roas: "2,8x", sector: "Sağlık", slug: "b-firma", status: "Duraklatıldı", tone: "warning" },
  { contractDuration: "15 ay", health: "%82", initials: "CF", lastAction: "Google raporu hazırlandı", monthlySpend: "₺27.400", name: "C Firma", nextAction: "Search kampanyasını genişlet", platforms: ["Google"], performance: "+6%", risk: "Sağlıklı", riskReason: "Arama kampanyaları stabil büyüyor", roas: "4,6x", sector: "Eğitim", slug: "c-firma", status: "Aktif", tone: "good" },
  { contractDuration: "2 ay", health: "%41", initials: "MD", lastAction: "Kreatif seti kontrol edildi", monthlySpend: "₺18.900", name: "Marka D", nextAction: "Yeni kreatif seti yayına al", platforms: ["TikTok"], performance: "-18%", risk: "Kritik", riskReason: "ROAS hedefin çok altında", roas: "1,4x", sector: "Kozmetik", slug: "marka-d", status: "Aktif", tone: "danger" },
  { contractDuration: "6 ay", health: "%58", initials: "MM", lastAction: "Teklif revizyonu paylaşıldı", monthlySpend: "₺9.800", name: "Mira Mobilya", nextAction: "Karar vericiyle takip görüşmesi yap", platforms: ["Funnel", "Mail"], performance: "-3%", risk: "Dikkat", riskReason: "Satış kararı bekliyor", roas: "3,2x", sector: "Mobilya", slug: "mira-mobilya", status: "Duraklatıldı", tone: "warning" },
  { contractDuration: "15 ay", health: "%22", initials: "NA", lastAction: "Kapanış notu girildi", monthlySpend: "₺0", name: "Nova Akademi", nextAction: "Kayıp nedenini CRM notuna bağla", platforms: ["Google", "Mail"], performance: "—", risk: "Pasif", riskReason: "Hizmet sonlandı", roas: "—", sector: "Eğitim", slug: "c-firma", status: "Ayrıldı", tone: "danger" }
];

const statuses: Array<"Tümü" | CustomerStatus> = ["Tümü", "Aktif", "Duraklatıldı", "Ayrıldı"];

const statusToneMap: Record<CustomerStatus, ProductTone> = {
  Aktif: "good",
  Duraklatıldı: "warning",
  Ayrıldı: "danger"
};

function PlatformBadge({ platform }: { platform: string }) {
  return <span className={`rounded-full px-[9px] py-[3px] text-[11px] font-semibold ${getChannelBadgeClass(platform)}`}>{platform}</span>;
}

export default function MusterilerPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<(typeof statuses)[number]>("Tümü");
  const [showModal, setShowModal] = useState(false);

  const filtered = customers.filter((customer) => {
    const query = search.trim().toLocaleLowerCase("tr-TR");
    const matchesFilter = filter === "Tümü" || customer.status === filter;
    const matchesSearch = query === "" || customer.name.toLocaleLowerCase("tr-TR").includes(query) || customer.sector.toLocaleLowerCase("tr-TR").includes(query);

    return matchesFilter && matchesSearch;
  });

  const activeCustomers = customers.filter((customer) => customer.status === "Aktif").length;
  const riskCustomers = customers.filter((customer) => customer.tone !== "good").length;
  const pausedCustomers = customers.filter((customer) => customer.status === "Duraklatıldı").length;
  const churnedCustomers = customers.filter((customer) => customer.status === "Ayrıldı").length;
  const stats = [
    { label: "Toplam Müşteri", value: customers.length, note: "portföy", Icon: Users, color: "var(--accent)" },
    { label: "Aktif", value: activeCustomers, note: "güncel", Icon: Check, color: "var(--accent-green)" },
    { label: "Riskte", value: riskCustomers, note: "takip gerekli", Icon: AlertTriangle, color: "var(--accent-amber)" },
    { label: "Duraklatıldı", value: pausedCustomers, note: "beklemede", Icon: Pause, color: "var(--accent-amber)" },
    { label: "Ayrıldı", value: churnedCustomers, note: "kayıp", Icon: XIcon, color: "var(--accent-red)" },
    { label: "Kazanma Oranı", value: "%41", note: "son 30 gün", Icon: TrendingUp, color: "var(--accent-green)" }
  ];

  return (
    <main className="min-h-[calc(100vh-80px)] overflow-y-auto px-8 py-8">
      <div className="mb-5 inline-flex rounded-[16px] border border-[var(--border)] bg-white p-1 shadow-[var(--shadow-sm)]">
        <Link className="rounded-[12px] bg-[var(--text-primary)] px-4 py-2 text-[13px] font-black text-white shadow-[0_10px_22px_oklch(0.18_0.018_80_/_0.14)]" href="/musteriler">
          Müşteri Listesi
        </Link>
        <Link className="rounded-[12px] px-4 py-2 text-[13px] font-black text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-card-soft)] hover:text-[var(--text-primary)]" href="/musteriler/crm">
          CRM Pipeline
        </Link>
      </div>

      <section className="relative mb-6 overflow-hidden rounded-[28px] border border-[oklch(1_0_0_/_0.10)] bg-[linear-gradient(145deg,oklch(0.20_0.018_80),oklch(0.13_0.014_80)_62%,oklch(0.25_0.040_32))] p-6 text-white shadow-[var(--shadow-lg)]">
        <div className="pointer-events-none absolute -right-24 -top-28 size-72 rounded-full bg-[var(--accent)] opacity-24 blur-[90px]" />
        <div className="relative z-10 mb-5">
          <div>
            <h2 className="text-[24px] font-black tracking-tight">Müşteri portföyü</h2>
            <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-white/60">
              Aktif hesaplar, risk sinyalleri ve müşteri operasyon durumu tek ekranda izlenir.
            </p>
          </div>
        </div>

        <div className="relative z-10 grid gap-3 md:grid-cols-3 2xl:grid-cols-6">
          {stats.map((stat) => (
            <article className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.075] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.105]" key={stat.label}>
              <div
                className="pointer-events-none absolute -right-10 -top-12 size-28 rounded-full opacity-24 blur-[40px] transition-opacity duration-300 group-hover:opacity-42"
                style={{ background: stat.color }}
              />
              <div className="relative z-10 flex items-start justify-between gap-3">
                <div>
                  <span className="block text-[11px] font-black uppercase tracking-[0.08em] text-white/68">{stat.label}</span>
                  <span className="mt-4 block text-[34px] font-black leading-none text-white">{stat.value}</span>
                </div>
                <span
                  className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[15px] border border-white/10 bg-white/10 text-white transition-transform duration-300 group-hover:scale-105"
                  style={{
                    boxShadow: `inset 0 0 0 1px color-mix(in oklch, ${stat.color} 24%, transparent), 0 12px 24px color-mix(in oklch, ${stat.color} 16%, transparent)`
                  }}
                >
                  <stat.Icon aria-hidden="true" className="relative z-10 size-4.5" strokeWidth={2.35} />
                </span>
              </div>
              <div className="relative z-10 mt-4 flex items-center gap-2">
                <span className="size-2 rounded-full" style={{ background: stat.color }} />
                <span className="text-[11px] font-bold text-white/72">{stat.note}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mb-5 flex flex-wrap items-center gap-3 rounded-[24px] border border-[var(--border)] bg-[color-mix(in_oklch,var(--bg-card)_82%,transparent)] p-3 shadow-[var(--shadow-sm)] backdrop-blur">
        <label className="flex h-11 min-w-[260px] max-w-96 flex-1 items-center gap-2 rounded-[16px] border border-[var(--border)] bg-white px-3.5 shadow-[0_8px_18px_oklch(0.18_0.018_80_/_0.04)]">
          <Search aria-hidden="true" className="size-4 text-[var(--text-muted)]" strokeWidth={2.3} />
          <span className="sr-only">Müşteri ara</span>
          <input className="min-w-0 flex-1 bg-transparent text-[13.5px] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Müşteri veya sektör ara..." />
        </label>

        <div className="flex flex-wrap gap-2">
          {statuses.map((status) => (
            <button
              className={`rounded-[14px] border px-4 py-2 text-[13px] font-bold transition ${filter === status ? "border-[var(--text-primary)] bg-[var(--text-primary)] text-white shadow-[0_10px_22px_oklch(0.18_0.018_80_/_0.14)]" : "border-[var(--border)] bg-white text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"}`}
              key={status}
              onClick={() => setFilter(status)}
              type="button"
            >
              {status}
            </button>
          ))}
        </div>

        <button className="ml-auto inline-flex items-center gap-2 rounded-[16px] bg-[var(--accent)] px-5 py-2.5 text-[13.5px] font-black text-white shadow-[0_12px_26px_oklch(0.64_0.18_32_/_0.24)] transition hover:bg-[var(--accent-hover)]" onClick={() => setShowModal(true)} type="button">
          <UserPlus aria-hidden="true" className="size-4" strokeWidth={2.4} />
          Yeni Müşteri
        </button>
      </div>

      <section className="overflow-hidden rounded-[26px] border border-[var(--border)] bg-[linear-gradient(180deg,var(--bg-card),var(--bg-card-soft))] shadow-[var(--shadow-md)]">
        <table className="w-full min-w-[1180px] border-separate border-spacing-0">
          <thead>
            <tr className="bg-[color-mix(in_oklch,var(--accent-light)_46%,white)]">
              {["Müşteri", "Hizmet", "Sağlık", "Risk", "Harcama", "ROAS", "Performans", "Son aksiyon", "Sonraki adım", "Durum", ""].map((header) => (
                <th className="border-b border-[var(--border)] px-5 py-4 text-left text-[11.5px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]" key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((customer) => (
              <tr className="group transition hover:bg-white" key={customer.name}>
                <td className="border-b border-[var(--border)] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-[16px] border border-[color-mix(in_oklch,var(--accent)_24%,white)] bg-[linear-gradient(135deg,var(--accent-light),white)] text-xs font-black text-[var(--accent)] shadow-[0_8px_18px_oklch(0.18_0.018_80_/_0.05)]">{customer.initials}</span>
                    <div>
                      <span className="block text-sm font-black text-[var(--text-primary)]">{customer.name}</span>
                      <span className="mt-1 block text-[12px] font-semibold text-[var(--text-muted)]">{customer.sector} · {customer.contractDuration}</span>
                    </div>
                  </div>
                </td>
                <td className="border-b border-[var(--border)] px-5 py-4"><div className="flex flex-wrap gap-1.5">{customer.platforms.map((platform) => <PlatformBadge key={`${customer.name}-${platform}`} platform={platform} />)}</div></td>
                <td className="border-b border-[var(--border)] px-5 py-4">
                  <div className="w-[88px]">
                    <p className="text-[15px] font-black text-[var(--text-primary)]">{customer.health}</p>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
                      <div className={`h-full rounded-full ${customer.tone === "danger" ? "bg-[var(--accent-red)]" : customer.tone === "warning" ? "bg-[var(--accent-amber)]" : "bg-[var(--accent-green)]"}`} style={{ width: customer.health }} />
                    </div>
                  </div>
                </td>
                <td className="border-b border-[var(--border)] px-5 py-4">
                  <div className="max-w-[190px]">
                    <StatusBadge status={customer.risk} tone={customer.tone} />
                    <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-muted)]">{customer.riskReason}</p>
                  </div>
                </td>
                <td className="border-b border-[var(--border)] px-5 py-4 text-[13.5px] font-black text-[var(--text-primary)]">{customer.monthlySpend}</td>
                <td className="border-b border-[var(--border)] px-5 py-4 text-[13.5px] font-black text-[var(--text-primary)]">{customer.roas}</td>
                <td className={`border-b border-[var(--border)] px-5 py-4 text-[13.5px] font-black ${customer.performance.startsWith("-") ? "text-[var(--accent-red)]" : customer.performance === "—" ? "text-[var(--text-muted)]" : "text-[var(--accent-green)]"}`}>{customer.performance}</td>
                <td className="border-b border-[var(--border)] px-5 py-4 text-[13px] font-semibold leading-5 text-[var(--text-secondary)]">{customer.lastAction}</td>
                <td className="border-b border-[var(--border)] px-5 py-4 text-[13px] font-black leading-5 text-[var(--text-primary)]">{customer.nextAction}</td>
                <td className="border-b border-[var(--border)] px-5 py-4"><StatusBadge status={customer.status} tone={statusToneMap[customer.status]} /></td>
                <td className="border-b border-[var(--border)] px-5 py-4">
                  <Link className="inline-flex items-center gap-1 rounded-[13px] border border-[var(--border)] bg-white px-3.5 py-2 text-xs font-black text-[var(--text-secondary)] transition hover:border-[var(--accent-mid)] hover:bg-[var(--accent-light)] hover:text-[var(--accent)]" href={`/musteriler/${customer.slug}`}>
                    Detay
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 ? (
          <div className="px-12 py-12 text-center text-[var(--text-muted)]">
            <div className="text-[15px] font-semibold text-[var(--text-secondary)]">Sonuç bulunamadı</div>
            <div className="mt-1.5 text-[13px]">Arama veya filtre kriterini değiştir</div>
          </div>
        ) : null}
      </section>

      {showModal ? (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[oklch(0.14_0.01_260_/_0.5)] backdrop-blur-md" onClick={() => setShowModal(false)}>
          <div className="w-[460px] rounded-[18px] border border-[var(--border)] bg-[var(--bg-card)] px-8 py-7 shadow-[var(--shadow-lg)]" onClick={(event) => event.stopPropagation()}>
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-[var(--text-primary)]">Yeni Müşteri</h2>
                <p className="mt-1 text-[13px] text-[var(--text-muted)]">Temel bilgileri girerek müşteriyi ekle</p>
              </div>
              <button aria-label="Kapat" className="p-1 text-[var(--text-muted)]" onClick={() => setShowModal(false)} type="button"><XIcon className="size-[18px]" strokeWidth={2.5} /></button>
            </div>
            {[["Müşteri İsmi", "text", "Örn. A Firma"], ["Sektör", "text", "Örn. E-ticaret"], ["Sözleşme Tarihi", "date", ""]].map(([label, type, placeholder]) => (
              <label className="mb-4 block" key={label}>
                <span className="mb-1.5 block text-[13px] font-semibold text-[var(--text-secondary)]">{label}</span>
                <input className="w-full rounded-[9px] border border-[var(--border)] bg-[var(--bg)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]" placeholder={placeholder} type={type} />
              </label>
            ))}
            <div className="mt-2 flex justify-end gap-2.5">
              <button className="rounded-[9px] border border-[var(--border)] bg-transparent px-[18px] py-2 text-sm font-semibold text-[var(--text-secondary)]" onClick={() => setShowModal(false)} type="button">Vazgeç</button>
              <button className="rounded-[9px] bg-[var(--accent)] px-[22px] py-2 text-sm font-semibold text-white shadow-[0_4px_12px_oklch(0.64_0.18_32_/_0.24)]" type="button">Kaydet</button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
