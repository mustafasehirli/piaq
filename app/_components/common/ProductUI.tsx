import type { ComponentType, ReactNode, SVGProps } from "react";

export type ProductTone = "good" | "warning" | "danger" | "neutral" | "accent";

type ProductIcon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;

type SectionTitleProps = {
  description?: string;
  kicker?: string;
  title: string;
};

type StatusBadgeProps = {
  className?: string;
  status: string;
  tone: ProductTone;
};

type MetricTileProps = {
  detail?: string;
  label: string;
  tone?: ProductTone;
  value: string;
};

type KpiCardProps = {
  change: string;
  icon: ProductIcon;
  label: string;
  note: string;
  tone: ProductTone;
  value: string;
};

type DecisionSummaryProps = {
  children?: ReactNode;
  description: string;
  kicker: string;
  title: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function getToneClassName(tone: ProductTone) {
  if (tone === "good") return "border-[oklch(0.86_0.035_155)] bg-[oklch(0.94_0.045_155)] text-[oklch(0.30_0.06_155)]";
  if (tone === "warning") return "border-[oklch(0.86_0.028_32)] bg-[oklch(0.94_0.030_32)] text-[oklch(0.34_0.055_32)]";
  if (tone === "danger") return "border-[color-mix(in_oklch,var(--accent)_24%,white)] bg-[color-mix(in_oklch,var(--accent)_20%,white)] text-[oklch(0.30_0.08_32)]";
  if (tone === "accent") return "border-[color-mix(in_oklch,var(--accent)_22%,white)] bg-[color-mix(in_oklch,var(--accent)_15%,white)] text-[oklch(0.30_0.08_32)]";

  return "border-black/10 bg-white text-black/62";
}

export function getTintClassName(tone: ProductTone = "neutral") {
  if (tone === "good") return "border-[oklch(0.86_0.035_155)] bg-[oklch(0.94_0.045_155)]";
  if (tone === "warning") return "border-[oklch(0.86_0.028_32)] bg-[oklch(0.94_0.030_32)]";
  if (tone === "danger") return "border-[color-mix(in_oklch,var(--accent)_24%,white)] bg-[color-mix(in_oklch,var(--accent)_20%,white)]";
  if (tone === "accent") return "border-[color-mix(in_oklch,var(--accent)_22%,white)] bg-[color-mix(in_oklch,var(--accent)_15%,white)]";

  return "border-black/10 bg-white";
}

export function ValueText({ value }: { value: string }) {
  if (!value.includes("₺")) return <>{value}</>;

  return (
    <>
      {value.split("₺").map((part, index) => (
        <span key={`${part}-${index}`}>
          {index > 0 ? <span className="inline-block font-[Arial] font-black leading-none">₺</span> : null}
          {part}
        </span>
      ))}
    </>
  );
}

export function SectionTitle({ description, kicker, title }: SectionTitleProps) {
  return (
    <div>
      {kicker ? <p className="text-[11px] font-black uppercase tracking-[0.12em] text-black/42">{kicker}</p> : null}
      <h2 className="mt-1 font-[var(--font-editorial)] text-[22px] font-black leading-[1.02] text-black">{title}</h2>
      {description ? <p className="mt-2 text-xs font-semibold leading-5 text-black/56">{description}</p> : null}
    </div>
  );
}

export function StatusBadge({ className, status, tone }: StatusBadgeProps) {
  return <span className={cx("inline-flex rounded-full border px-2.5 py-1 text-[11px] font-black shadow-[inset_0_1px_0_rgb(255_255_255_/_0.72)]", getToneClassName(tone), className)}>{status}</span>;
}

export function MetricTile({ detail, label, tone = "neutral", value }: MetricTileProps) {
  return (
    <div className={cx("relative overflow-hidden rounded-[20px] border p-4 shadow-[0_1px_0_rgb(255_255_255_/_0.88),0_14px_30px_rgb(14_14_14_/_0.055)]", getTintClassName(tone))}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0_/_0.035)_1px,transparent_0)] [background-size:18px_18px]" />
      <div className="relative">
        <p className="text-[11px] font-black uppercase tracking-[0.08em] text-black/42">{label}</p>
        <p className="mt-2 font-[var(--font-editorial)] text-[28px] font-black leading-none text-black"><ValueText value={value} /></p>
        {detail ? <p className="mt-2 text-xs font-bold leading-5 text-black/50">{detail}</p> : null}
      </div>
    </div>
  );
}

export function KpiCard({ change, icon: Icon, label, note, tone, value }: KpiCardProps) {
  return (
    <article className="relative min-h-[164px] overflow-hidden rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_1px_0_rgb(255_255_255_/_0.92),0_18px_42px_rgb(14_14_14_/_0.07)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0_/_0.040)_1px,transparent_0)] [background-size:18px_18px]" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <span className="text-[11px] font-black uppercase tracking-[0.10em] text-black/42">{label}</span>
          <span className={cx("flex size-9 items-center justify-center rounded-[14px] border shadow-[0_1px_0_rgb(255_255_255_/_0.90),0_10px_20px_rgb(14_14_14_/_0.08)]", getToneClassName(tone))}>
            <Icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
          </span>
        </div>
        <div>
          <p className="mt-4 font-[var(--font-editorial)] text-[32px] font-black leading-none text-black"><ValueText value={value} /></p>
          <p className="mt-3 text-xs font-black leading-5 text-black/78">{change}</p>
          <p className="mt-1.5 text-xs font-bold leading-5 text-black/48">{note}</p>
        </div>
      </div>
    </article>
  );
}

export function DecisionSummary({ children, description, kicker, title }: DecisionSummaryProps) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-black/10 bg-[#08090c] p-5 text-white shadow-[0_28px_68px_rgb(8_9_12_/_0.22)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgb(255_255_255_/_0.08)_1px,transparent_1px),linear-gradient(180deg,rgb(255_255_255_/_0.07)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.12em] text-white/50">{kicker}</p>
          <h2 className="mt-2 font-[var(--font-editorial)] text-[24px] font-black leading-[1.02] text-white">{title}</h2>
          <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-white/62">{description}</p>
        </div>
        {children ? <div className="flex flex-wrap gap-2">{children}</div> : null}
      </div>
    </section>
  );
}
