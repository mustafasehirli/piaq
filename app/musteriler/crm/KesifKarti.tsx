"use client";

import { Globe2, Instagram, Mail, MapPin, Megaphone } from "lucide-react";

export type KesifKartiData = {
  id: string;
  isletmeAdi: string;
  sektor: string;
  sehir: string;
  website: string;
  email: string;
  metaReklam: boolean;
  kaynak: string;
  etiket: "Fırsat" | "Potansiyel" | "İnceleme";
};

type KesifKartiProps = {
  kart: KesifKartiData;
  onFirsataEkle: (kart: KesifKartiData) => void;
};

function getInstagramHandle(website: string) {
  return `@${website.split(".")[0]}`;
}

export function KesifKarti({ kart }: KesifKartiProps) {
  return (
    <article className="group relative overflow-hidden rounded-[26px] border border-[oklch(1_0_0_/_0.86)] bg-[linear-gradient(145deg,white,var(--bg-card-soft))] p-4 shadow-[0_14px_30px_oklch(0.05_0.010_80_/_0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:shadow-[0_20px_38px_oklch(0.05_0.010_80_/_0.22)]">
      <div className="pointer-events-none absolute -right-14 -top-16 size-36 rounded-full bg-[oklch(0.58_0.20_275_/_0.28)] blur-[52px]" />
      <div className="pointer-events-none absolute -left-16 bottom-6 size-32 rounded-full bg-[oklch(0.58_0.20_275_/_0.10)] blur-[48px]" />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div>
          <h4 className="text-[16px] font-black tracking-tight text-[var(--text-primary)]">{kart.isletmeAdi}</h4>
          <div className="mt-2 inline-flex rounded-full bg-white px-2.5 py-1 text-[11px] font-black text-[#6366f1] shadow-[inset_0_0_0_1px_oklch(0.58_0.20_275_/_0.18),0_8px_18px_oklch(0.18_0.018_80_/_0.05)]">
            {kart.kaynak}
          </div>
        </div>
        <span className="rounded-full bg-[oklch(0.58_0.20_275_/_0.12)] px-3 py-1.5 text-[11px] font-black text-[#4f46e5] shadow-[inset_0_0_0_1px_oklch(0.58_0.20_275_/_0.24),0_10px_20px_oklch(0.58_0.20_275_/_0.12)]">
          {kart.etiket}
        </span>
      </div>

      <div className="relative z-10 mt-5 rounded-[22px] border border-[var(--border)] bg-[linear-gradient(145deg,var(--bg-card-soft),white)] p-4 shadow-[0_12px_24px_oklch(0.18_0.018_80_/_0.06)]">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="text-[11px] font-black uppercase tracking-[0.04em] text-[var(--text-muted)]">
              İşletme sinyali
            </div>
            <div className="mt-2 flex items-center gap-2 text-[14px] font-black text-[var(--text-primary)]">
              <Globe2 aria-hidden="true" className="size-4 shrink-0 text-[var(--text-primary)]" strokeWidth={2.1} />
              <span className="truncate">{kart.website}</span>
            </div>
            <div className="mt-1.5 flex items-center gap-2 text-[13px] font-bold text-[var(--text-secondary)]">
              <Mail aria-hidden="true" className="size-4 shrink-0 text-[var(--text-primary)]" strokeWidth={2.1} />
              <span className="truncate">{kart.email}</span>
            </div>
          </div>
          <div className="flex size-10 shrink-0 items-center justify-center rounded-[15px] bg-white text-[#6366f1] shadow-[inset_0_0_0_1px_oklch(0.58_0.20_275_/_0.18),0_10px_20px_oklch(0.58_0.20_275_/_0.10)]">
            <Globe2 aria-hidden="true" className="size-4" strokeWidth={2.2} />
          </div>
        </div>

        <div className="mt-4 grid gap-2">
          <div className="flex items-center gap-2 rounded-[15px] bg-white/72 px-3 py-2 text-[13px] font-bold text-[var(--text-secondary)] shadow-[inset_0_0_0_1px_var(--border)]">
            <MapPin aria-hidden="true" className="size-4 shrink-0 text-[var(--text-primary)]" strokeWidth={2.1} />
            <span className="truncate">{kart.sektor} · {kart.sehir}</span>
          </div>
          <div className="flex items-center gap-2 rounded-[15px] bg-white/72 px-3 py-2 text-[13px] font-black text-[#e1306c] shadow-[inset_0_0_0_1px_var(--border)]">
            <Instagram aria-hidden="true" className="size-4" strokeWidth={2.1} />
            <span className="truncate">{getInstagramHandle(kart.website)}</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-4 border-t border-[var(--border)] pt-4">
        <div className="min-w-0">
          <div className="text-[11px] font-black uppercase tracking-[0.04em] text-[var(--text-muted)]">
            Meta reklamı
          </div>
          <div className="mt-1.5 flex items-center gap-2 text-[13px] font-black text-[var(--text-primary)]">
            <Megaphone
              aria-hidden="true"
              className={`size-4 ${kart.metaReklam ? "text-[var(--accent-green)]" : "text-[var(--accent-red)]"}`}
              strokeWidth={2.1}
            />
            {kart.metaReklam ? "Reklam veriyor" : "Reklam vermiyor"}
          </div>
        </div>
      </div>
    </article>
  );
}
