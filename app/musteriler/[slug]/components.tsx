import type { ReactNode } from "react";
import { getChannelBadgeClass } from "@/lib/data/channels";
import { signalLabels, signalStyles } from "./data";

export function SignalBadge({ signal }: { signal: keyof typeof signalStyles }) {
  const Icon = signalStyles[signal].icon;

  return (
    <span
      className={`inline-flex h-9 items-center gap-2 rounded-full px-4 text-sm font-semibold ${signalStyles[signal].className}`}
    >
      <Icon aria-hidden="true" className="size-4" strokeWidth={2} />
      {signalLabels[signal]}
    </span>
  );
}

function parseMetricValue(value: string) {
  return Number(value.replace(/[₺%.]/g, "").replace(",", "."));
}

export function getMetricClass(metric: string, value: string) {
  const numericValue = parseMetricValue(value);

  const isGood =
    (metric === "cpm" && numericValue <= 90) ||
    (metric === "ctr" && numericValue >= 30) ||
    (metric === "cr" && numericValue >= 50) ||
    (metric === "cpc" && numericValue <= 300) ||
    (metric === "spend" && numericValue <= 22000) ||
    (metric === "activeAds" && numericValue >= 15) ||
    (metric === "roas" && numericValue >= 42) ||
    (metric === "revenue" && numericValue >= 100000);

  const isBad =
    (metric === "cpm" && numericValue >= 115) ||
    (metric === "ctr" && numericValue <= 20) ||
    (metric === "cr" && numericValue <= 30) ||
    (metric === "cpc" && numericValue >= 400) ||
    (metric === "spend" && numericValue >= 34000) ||
    (metric === "activeAds" && numericValue <= 5) ||
    (metric === "roas" && numericValue <= 38) ||
    (metric === "revenue" && numericValue <= 70000);

  if (isGood) {
    return "font-semibold text-emerald-600";
  }

  if (isBad) {
    return "font-semibold text-red-600";
  }

  return "text-zinc-700";
}

export function IntegrationField({
  label,
  placeholder,
  type = "text"
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-[12px] font-black uppercase tracking-[0.06em] text-[var(--text-muted)]">{label}</span>
      <input
        className="mt-2 h-12 w-full rounded-[16px] border border-[var(--border)] bg-white px-4 text-[13.5px] font-semibold text-[var(--text-primary)] outline-none shadow-[0_8px_18px_oklch(0.18_0.018_80_/_0.035)] transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}

export function IntegrationSelect({
  label,
  options
}: {
  label: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-[12px] font-black uppercase tracking-[0.06em] text-[var(--text-muted)]">{label}</span>
      <select className="mt-2 h-12 w-full rounded-[16px] border border-[var(--border)] bg-white px-4 text-[13.5px] font-semibold text-[var(--text-primary)] outline-none shadow-[0_8px_18px_oklch(0.18_0.018_80_/_0.035)] transition-colors focus:border-[var(--accent)]">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function IntegrationChecklist({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-xl border border-[#e2e0d8] bg-white p-4">
      <p className="text-sm font-semibold text-zinc-950">Bağlantı Kontrolü</p>
      <div className="mt-3 grid gap-2">
        {steps.map((step) => (
          <div className="flex items-start gap-2 text-sm text-zinc-600" key={step}>
            <span className="mt-1 size-2 shrink-0 rounded-full bg-zinc-300" />
            <span>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IntegrationShell({
  title,
  description,
  children,
  steps,
  actionLabel
}: {
  title: string;
  description: string;
  children: ReactNode;
  steps: string[];
  actionLabel: string;
}) {
  return (
    <section className="rounded-xl border border-[#e2e0d8] bg-zinc-50/70 p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-zinc-950">{title}</h2>
          <p className="mt-1 max-w-2xl text-sm text-zinc-500">{description}</p>
        </div>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
          Bağlantı Bekliyor
        </span>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="grid gap-4 md:grid-cols-2">{children}</div>
        <IntegrationChecklist steps={steps} />
      </div>

      <div className="mt-5 flex justify-end">
        <button
          className="h-10 rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
          type="button"
        >
          {actionLabel}
        </button>
      </div>
    </section>
  );
}


export function getCustomerToneClass(tone: string) {
  if (tone === "good") {
    return "text-green-600";
  }

  if (tone === "bad") {
    return "text-orange-700";
  }

  return "text-zinc-500";
}

export function getCustomerServiceClass(service: string) {
  return getChannelBadgeClass(service);
}

export function getFunnelNodeClass(tone: string) {
  if (tone === "bad") {
    return "border-red-300 bg-[linear-gradient(180deg,#fff7f6,#ffe7e4)] shadow-[0_14px_28px_rgba(239,68,68,0.14)]";
  }

  if (tone === "warning") {
    return "border-amber-300 bg-[linear-gradient(180deg,#fffaf0,#ffefc7)] shadow-[0_14px_28px_rgba(245,158,11,0.14)]";
  }

  if (tone === "good") {
    return "border-emerald-300 bg-[linear-gradient(180deg,#f3fff8,#dcfce7)] shadow-[0_14px_28px_rgba(16,185,129,0.14)]";
  }

  return "border-[var(--border-strong)] bg-[linear-gradient(180deg,white,var(--bg-card-soft))] shadow-[0_14px_28px_oklch(0.18_0.018_80_/_0.08)]";
}

export function getFunnelPerformanceClass(tone: string) {
  if (tone === "bad") {
    return {
      bar: "bg-red-500",
      badge: "bg-red-50 text-red-600 border border-red-200",
      card: "border-red-200 bg-[linear-gradient(180deg,#fff7f6,#fff)]"
    };
  }

  if (tone === "warning") {
    return {
      bar: "bg-amber-500",
      badge: "bg-amber-50 text-amber-700 border border-amber-200",
      card: "border-amber-200 bg-[linear-gradient(180deg,#fffaf0,#fff)]"
    };
  }

  return {
    bar: "bg-[var(--channel-funnel)]",
    badge: "bg-[var(--channel-funnel-light)] text-[var(--channel-funnel)] border border-[color-mix(in_oklch,var(--channel-funnel)_24%,white)]",
    card: "border-[var(--border)] bg-white"
  };
}

export function getMailNodeClass(tone: string) {
  if (tone === "start") {
    return "border-[oklch(0.20_0.018_80)] bg-[linear-gradient(145deg,oklch(0.20_0.018_80),oklch(0.13_0.014_80))] text-white";
  }

  if (tone === "mail") {
    return "border-[color-mix(in_oklch,var(--channel-mail)_24%,white)] bg-[var(--channel-mail-light)] text-[var(--channel-mail)]";
  }

  if (tone === "wait") {
    return "border-amber-200 bg-[linear-gradient(180deg,#fffaf0,#ffefc7)] text-amber-950";
  }

  return "border-fuchsia-200 bg-[linear-gradient(180deg,#fdf4ff,#fae8ff)] text-fuchsia-950";
}

export function CustomerBarRows({
  rows,
  title,
  mode = "default"
}: {
  rows: {
    label: string;
    value: string;
    width: string;
    color: string;
  }[];
  title: string;
  mode?: "default" | "budget";
}) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[linear-gradient(160deg,var(--bg-card),var(--bg-card-soft))] px-7 py-7 shadow-[var(--shadow-md)]">
      {/* Decorative background ambient light */}
      <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-[var(--accent-light)] opacity-30 blur-[80px]" />
      
      <h3 className="relative z-10 text-[20px] font-black tracking-tight text-[var(--text-primary)]">{title}</h3>
      <div className="relative z-10 mt-6 grid gap-4">
        {rows.map((row) => {
          const isMetaBudget = mode === "budget" && row.label === "Meta";
          const isGoogleBudget = mode === "budget" && row.label === "Google";
          const barClass = mode === "budget" ? (isMetaBudget ? "bg-[var(--channel-meta)]" : isGoogleBudget ? "bg-[var(--channel-google)]" : "bg-[var(--accent)]") : row.color;
          const valueClass = isMetaBudget ? "text-[var(--channel-meta)]" : isGoogleBudget ? "text-[var(--channel-google)]" : "text-zinc-950";
          const swatchClass = mode === "budget" ? (isMetaBudget ? "bg-[var(--channel-meta)]" : isGoogleBudget ? "bg-[var(--channel-google)]" : "bg-[var(--accent)]") : barClass;

          return (
            <div className="group relative rounded-2xl border border-[var(--border)] bg-white/60 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-[0_8px_20px_oklch(0.18_0.018_80_/_0.05)] hover:border-[var(--border-strong)]" key={row.label}>
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className={`size-3 shrink-0 rounded-full shadow-[0_0_8px_currentColor] transition-transform duration-300 group-hover:scale-110 ${swatchClass}`} />
                  <span className="truncate text-[14px] font-extrabold text-[var(--text-primary)]">{row.label}</span>
                </div>
                <span className={`rounded-xl bg-[var(--bg-card-soft)] px-3 py-1.5 text-[13px] font-black shadow-sm transition-colors duration-300 group-hover:bg-[var(--bg-card)] ${valueClass}`}>{row.value}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[var(--border)]/60">
                  <div className={`h-full rounded-full transition-all duration-1000 ease-out ${barClass}`} style={{ width: row.width, boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.3)' }} />
                </div>
                <span className="w-11 text-right text-[12px] font-bold text-[var(--text-muted)]">{row.width}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}






