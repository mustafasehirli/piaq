import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { ValueText } from "@/app/_components/common/ProductUI";
import { getChannelTheme } from "@/lib/data/channels";
import type { ChannelSummary, SpendDistributionItem, StatCardData, Tone, TrendDirection, TrendPoint } from "@/lib/data/dashboard";

export const card: CSSProperties = {
  backgroundImage: "radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.060) 1px, transparent 0), linear-gradient(180deg, #ffffff, #f8f8f5)",
  backgroundSize: "18px 18px, auto",
  border: "1px solid rgb(0 0 0 / 0.13)",
  borderRadius: 28,
  boxShadow: "0 1px 0 rgb(255 255 255 / 0.94), 0 24px 58px rgb(14 14 14 / 0.105)"
};

export const sectionTitle: CSSProperties = {
  color: "black",
  fontFamily: "var(--font-editorial)",
  fontSize: 22,
  fontWeight: 900,
  letterSpacing: 0
};

export const numericText: CSSProperties = {
  fontFamily: "var(--font-numeric)"
};

export function getToneStyle(tone: Tone) {
  if (tone === "critical") {
    return {
      bg: "color-mix(in oklch, var(--accent) 20%, white)",
      color: "oklch(0.30 0.08 32)",
      border: "color-mix(in oklch, var(--accent) 24%, white)"
    };
  }

  if (tone === "warning") {
    return {
      bg: "oklch(0.94 0.030 32)",
      color: "oklch(0.34 0.055 32)",
      border: "oklch(0.86 0.028 32)"
    };
  }

  return {
    bg: "oklch(0.94 0.045 155)",
    color: "oklch(0.30 0.06 155)",
    border: "oklch(0.86 0.035 155)"
  };
}

export function Sparkline({ trendDir }: { trendDir: TrendDirection }) {
  const color = trendDir === "up" ? "var(--accent-green)" : trendDir === "down" ? "var(--accent-red)" : "var(--accent)";

  return (
    <svg width="52" height="24" viewBox="0 0 52 24" fill="none" aria-hidden="true">
      <path d="M2 19 C7 14 11 16 17 11 C23 6 28 14 34 8 C40 2 45 5 50 2" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function RollingCurrencyValue({ value }: { value: string }) {
  return (
    <span aria-label={value} className="ticker-value">
      {value.split("").map((character, index) => {
        if (!/\d/.test(character)) {
          return (
            <span className={character === "₺" ? "ticker-static inline-block font-[Arial] font-black leading-none" : "ticker-static"} key={`${character}-${index}`}>
              {character}
            </span>
          );
        }

        return (
          <span
            aria-hidden="true"
            className="ticker-digit"
            key={`${character}-${index}`}
            style={{
              "--digit": character,
              "--delay": `${index * 115}ms`
            } as CSSProperties}
          >
            <span className="ticker-digit-track">
              {"0123456789".split("").map((digit) => (
                <span className="ticker-digit-value" key={digit}>
                  {digit}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}

export function StatCard({ item }: { item: StatCardData }) {
  const isUp = item.trendDir === "up";
  const isDown = item.trendDir === "down";
  const isHero = item.label === "Toplam Harcama";

  return (
    <div
      style={{
        ...card,
        backgroundImage: isHero
          ? "radial-gradient(circle at 88% 8%, color-mix(in oklch, #f2523a 22%, transparent), transparent 34%), linear-gradient(145deg, #08090c, oklch(0.12 0.012 80) 64%, oklch(0.18 0.035 34))"
          : card.backgroundImage,
        backgroundSize: isHero ? "auto" : card.backgroundSize,
        border: isHero ? "1px solid rgb(255 255 255 / 0.10)" : card.border,
        boxShadow: isHero ? "inset 0 1px 0 rgb(255 255 255 / 0.08), 0 26px 58px rgb(8 9 12 / 0.20)" : card.boxShadow,
        display: "flex",
        flexDirection: "column",
        minHeight: 156,
        overflow: "hidden",
        padding: "22px 22px",
        position: "relative"
      }}
    >
      {!isHero ? (
        <span
          aria-hidden="true"
          style={{
            color: "rgb(0 0 0 / 0.045)",
            fontFamily: "var(--font-editorial)",
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 1,
            position: "absolute",
            right: -8,
            top: 42,
            whiteSpace: "nowrap"
          }}
        >
          {item.value}
        </span>
      ) : null}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, position: "relative", zIndex: 1 }}>
        <span style={{ color: isHero ? "rgb(255 255 255 / 0.58)" : "rgb(0 0 0 / 0.42)", fontSize: 11, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.label}</span>
        {item.trend ? (
          <span
            style={{
              padding: "5px 9px",
              borderRadius: 14,
              background: isHero ? "rgb(255 255 255 / 0.10)" : isUp ? "oklch(0.94 0.045 155)" : isDown ? "color-mix(in oklch, var(--accent) 20%, white)" : "color-mix(in oklch, var(--accent) 15%, white)",
              border: "1px solid color-mix(in oklch, currentColor 16%, transparent)",
              color: isHero ? "white" : isUp ? "oklch(0.30 0.06 155)" : isDown ? "oklch(0.30 0.08 32)" : "oklch(0.30 0.08 32)",
              fontSize: 11,
              fontWeight: 800,
              ...numericText
            }}
          >
            {isUp ? "↑" : isDown ? "↓" : "→"} {item.trend}
          </span>
        ) : null}
      </div>
      <div style={{ color: isHero ? "white" : "black", fontFamily: "var(--font-editorial)", fontSize: isHero ? 40 : 38, fontWeight: 900, lineHeight: 1, marginTop: 18, position: "relative", zIndex: 1 }}>
        {isHero ? <RollingCurrencyValue value={item.value} /> : <ValueText value={item.value} />}
      </div>
      <div style={{ marginTop: "auto", paddingTop: 16, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12, position: "relative", zIndex: 1 }}>
        <span style={{ color: isHero ? "rgb(255 255 255 / 0.58)" : "rgb(0 0 0 / 0.50)", fontSize: 12, fontWeight: 800, ...numericText }}>{item.note}</span>
        <Sparkline trendDir={item.trendDir} />
      </div>
    </div>
  );
}

export function TrendChart({ data }: { data: TrendPoint[] }) {
  const [tooltip, setTooltip] = useState<{
    returnValue: number;
    spend: number;
    value: string;
    x: number;
    y: number;
  } | null>(null);
  const maxValue = Math.ceil(Math.max(...data.flatMap((item) => [item.spend, item.returnValue])) / 50) * 50;
  const chartWidth = 760;
  const chartHeight = 260;
  const padding = { top: 22, right: 22, bottom: 34, left: 46 };
  const plotWidth = chartWidth - padding.left - padding.right;
  const plotHeight = chartHeight - padding.top - padding.bottom;
  const points = data.map((item, index) => {
    const x = padding.left + (index / (data.length - 1)) * plotWidth;

    return {
      day: item.day,
      returnValue: item.returnValue,
      returnY: padding.top + plotHeight - (item.returnValue / maxValue) * plotHeight,
      spend: item.spend,
      spendY: padding.top + plotHeight - (item.spend / maxValue) * plotHeight,
      x
    };
  });
  const returnPath = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.returnY}`).join(" ");
  const spendPath = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.spendY}`).join(" ");
  const returnArea = `${returnPath} L ${points[points.length - 1].x} ${padding.top + plotHeight} L ${points[0].x} ${padding.top + plotHeight} Z`;
  const spendArea = `${spendPath} L ${points[points.length - 1].x} ${padding.top + plotHeight} L ${points[0].x} ${padding.top + plotHeight} Z`;
  const ticks = [maxValue, maxValue * 0.75, maxValue * 0.5, maxValue * 0.25, 0];
  const tooltipWidth = 78;
  const tooltipHeight = 32;
  const tooltipX = tooltip ? Math.min(Math.max(tooltip.x - tooltipWidth / 2, 10), chartWidth - tooltipWidth - 10) : 0;
  const tooltipY = tooltip ? Math.max(tooltip.y - tooltipHeight - 16, 8) : 0;

  return (
    <div style={{ height: 320, borderRadius: 24, backgroundImage: "radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.060) 1px, transparent 0), linear-gradient(180deg, #ffffff, #f4f4ef)", backgroundSize: "18px 18px, auto", border: "1px solid rgb(0 0 0 / 0.13)", boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.88), 0 16px 34px rgb(14 14 14 / 0.055)", overflow: "hidden" }}>
      <svg aria-hidden="true" viewBox={`0 0 ${chartWidth} ${chartHeight}`} width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <linearGradient id="returnAreaWarm" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--accent-green)" stopOpacity="0.30" />
            <stop offset="100%" stopColor="var(--accent-green)" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="spendAreaWarm" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.34" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        {ticks.map((tick) => {
          const y = padding.top + plotHeight - (tick / maxValue) * plotHeight;

          return (
            <g key={tick.toFixed(0)}>
              <line x1={padding.left} x2={chartWidth - padding.right} y1={y} y2={y} stroke="oklch(0.20 0.018 80 / 0.08)" />
              <text x={padding.left - 10} y={y + 4} fill="oklch(0.46 0.018 80)" fontFamily="var(--font-numeric)" fontSize="11" fontWeight="700" textAnchor="end">
                ₺{Math.round(tick)}K
              </text>
            </g>
          );
        })}
        {points.map((point) => (
          <line key={point.day} x1={point.x} x2={point.x} y1={padding.top} y2={padding.top + plotHeight} stroke="oklch(0.20 0.018 80 / 0.055)" />
        ))}
        <path d={returnArea} fill="url(#returnAreaWarm)" />
        <path d={spendArea} fill="url(#spendAreaWarm)" />
        <path d={returnPath} fill="none" stroke="var(--accent-green)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path d={spendPath} fill="none" stroke="var(--accent)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        {points.map((point) => (
          <g key={`point-${point.day}`}>
            <circle
              cx={point.x}
              cy={point.returnY}
              fill="transparent"
              onMouseEnter={() => setTooltip({ returnValue: point.returnValue, spend: point.returnValue, value: `₺${point.returnValue.toFixed(1)}K`, x: point.x, y: point.returnY })}
              onMouseLeave={() => setTooltip(null)}
              r="14"
              style={{ cursor: "default" }}
            />
            <circle
              cx={point.x}
              cy={point.spendY}
              fill="transparent"
              onMouseEnter={() => setTooltip({ returnValue: point.spend, spend: point.spend, value: `₺${point.spend.toFixed(1)}K`, x: point.x, y: point.spendY })}
              onMouseLeave={() => setTooltip(null)}
              r="14"
              style={{ cursor: "default" }}
            />
            <circle cx={point.x} cy={point.returnY} fill="white" pointerEvents="none" r="4" stroke="var(--accent-green)" strokeWidth="2" />
            <circle cx={point.x} cy={point.spendY} fill="white" pointerEvents="none" r="4" stroke="var(--accent)" strokeWidth="2" />
            <text x={point.x} y={chartHeight - 11} fill="oklch(0.46 0.018 80)" fontFamily="var(--font-numeric)" fontSize="11" fontWeight="800" textAnchor="middle">
              {point.day}
            </text>
          </g>
        ))}
        {tooltip ? (
          <g pointerEvents="none">
            <rect
              fill="oklch(0.16 0.018 80)"
              height={tooltipHeight}
              rx="10"
              width={tooltipWidth}
              x={tooltipX}
              y={tooltipY}
            />
            <text fill="white" fontFamily="var(--font-numeric)" fontSize="13" fontWeight="900" textAnchor="middle" x={tooltipX + tooltipWidth / 2} y={tooltipY + 21}>
              {tooltip.value}
            </text>
            <text display="none" fill="oklch(0.92 0.012 100)" fontFamily="var(--font-numeric)" fontSize="11" fontWeight="800" x={tooltipX + 27} y={tooltipY + 44}>
              Harcama: ₺{tooltip.spend.toFixed(1)}K
            </text>
            <circle cx={tooltipX + 16} cy={tooltipY + 56} display="none" fill="var(--accent-green)" r="4" />
            <text display="none" fill="oklch(0.92 0.012 100)" fontFamily="var(--font-numeric)" fontSize="11" fontWeight="800" x={tooltipX + 27} y={tooltipY + 60}>
              Getiri: ₺{tooltip.returnValue.toFixed(1)}K
            </text>
          </g>
        ) : null}
      </svg>
    </div>
  );
}

export function ChannelSparkline({ color, points }: { color: string; points: number[] }) {
  const width = 120;
  const height = 32;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const coords = points.map((point, index) => {
    const x = (index / (points.length - 1)) * width;
    const y = height - 5 - ((point - min) / range) * (height - 10);

    return { x, y };
  });
  const path = coords.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
  const lastPoint = coords[coords.length - 1];

  return (
    <svg aria-hidden="true" height={height} viewBox={`0 0 ${width} ${height}`} width={width}>
      <path d={path} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.28" strokeWidth="5" />
      <path d={path} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
      <circle cx={lastPoint.x} cy={lastPoint.y} fill="white" r="4" stroke={color} strokeWidth="2.2" />
    </svg>
  );
}

export function ServiceBadge({ service }: { service: string }) {
  const theme = getChannelTheme(service);

  return <span style={{ fontSize: 10, fontWeight: 800, padding: "3px 8px", borderRadius: 99, background: theme.soft, color: theme.color, border: "1px solid color-mix(in oklch, currentColor 16%, transparent)" }}>{service}</span>;
}

export function parseCurrencyValue(value: string) {
  return Number(value.replace(/[^\d]/g, ""));
}

export function formatCurrencyValue(value: number) {
  return `₺${String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}

export function getSpendDistribution(channels: ChannelSummary[]) {
  const channelsWithAmount = channels.map((channel) => ({
    ...channel,
    amount: parseCurrencyValue(channel.spend)
  }));
  const total = channelsWithAmount.reduce((sum, channel) => sum + channel.amount, 0);

  return {
    items: channelsWithAmount.map((channel) => ({
      ...channel,
      percent: total > 0 ? (channel.amount / total) * 100 : 0
    })),
    total
  };
}

export function getSpendDistributionGradient(items: SpendDistributionItem[]) {
  let cursor = 0;
  const segments = items.map((item) => {
    const start = cursor;
    const end = cursor + item.percent;
    cursor = end;

    return `${getDonutColor(item)} ${start}% ${end}%`;
  });

  return `conic-gradient(${segments.join(", ")})`;
}

function getDonutColor(item: SpendDistributionItem) {
  const spendDistributionColors: Record<string, string> = {
    Meta: "#003049",
    Google: "#D62828",
    TikTok: "#0F766E",
    Mail: "#F77F00"
  };

  return spendDistributionColors[item.name] ?? item.color;
}

export function SpendDistributionSection({
  items,
  total
}: {
  items: SpendDistributionItem[];
  total: number;
}) {
  const [hoveredSegment, setHoveredSegment] = useState<{
    amount: number;
    name: string;
    percent: number;
  } | null>(null);
  const donutSize = 178;
  const donutCenter = donutSize / 2;
  const donutRadius = 70;
  const donutStrokeWidth = 34;
  const donutCircumference = 2 * Math.PI * donutRadius;
  const donutSegments = items.reduce<Array<{ item: SpendDistributionItem; length: number; offset: number }>>((segments, item) => {
    const offset = segments.reduce((sum, segment) => sum + segment.length, 0);
    const length = (item.percent / 100) * donutCircumference;

    return [...segments, { item, length, offset }];
  }, []);

  return (
    <section style={{ ...card, padding: "24px 26px", marginBottom: 22 }}>
      <div className="grid items-center gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
        <div className="flex items-center gap-5">
          <div
            onMouseLeave={() => setHoveredSegment(null)}
            style={{ width: donutSize, height: donutSize, borderRadius: "50%", boxShadow: "0 22px 42px rgb(14 14 14 / 0.12)", position: "relative" }}
          >
            <svg aria-label="Platform harcama dağılımı" height={donutSize} role="img" viewBox={`0 0 ${donutSize} ${donutSize}`} width={donutSize}>
              <circle cx={donutCenter} cy={donutCenter} fill="none" r={donutRadius} stroke="rgb(0 0 0 / 0.08)" strokeWidth={donutStrokeWidth} />
              {donutSegments.map(({ item, length, offset }) => {
                return (
                  <circle
                    cx={donutCenter}
                    cy={donutCenter}
                    fill="none"
                    key={item.name}
                    onMouseMove={() => {
                      setHoveredSegment({
                        amount: item.amount,
                        name: item.name,
                        percent: item.percent
                      });
                    }}
                    r={donutRadius}
                    stroke={getDonutColor(item)}
                    strokeDasharray={`${length} ${donutCircumference - length}`}
                    strokeDashoffset={-offset}
                    strokeLinecap="butt"
                    strokeWidth={donutStrokeWidth}
                    style={{ cursor: "default", transition: "opacity 120ms ease" }}
                    transform={`rotate(-90 ${donutCenter} ${donutCenter})`}
                  />
                );
              })}
            </svg>
            <div style={{ position: "absolute", inset: 35, borderRadius: "50%", background: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid rgb(0 0 0 / 0.10)", boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.88)", pointerEvents: "none" }}>
              <span style={{ color: "rgb(0 0 0 / 0.42)", fontSize: 11, fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase" }}>Toplam</span>
              <span style={{ color: "black", fontFamily: "var(--font-editorial)", fontSize: 22, fontWeight: 950, marginTop: 5 }}>{formatCurrencyValue(total)}</span>
            </div>
            {hoveredSegment ? (
              <div
                style={{
                  background: "#08090c",
                  borderRadius: 12,
                  boxShadow: "0 12px 24px oklch(0.18 0.018 80 / 0.18)",
                  color: "white",
                  left: donutSize - 16,
                  minWidth: 102,
                  padding: "8px 10px",
                  pointerEvents: "none",
                  position: "absolute",
                  top: 62,
                  zIndex: 2
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 950 }}>{hoveredSegment.name}</div>
                <div style={{ fontSize: 11, fontWeight: 800, marginTop: 3, opacity: 0.8, ...numericText }}>
                  %{Math.round(hoveredSegment.percent)} · {formatCurrencyValue(hoveredSegment.amount)}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div>
          <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 style={sectionTitle}>Ajans Platform Harcama Dağılımı</h3>
              <p style={{ color: "rgb(0 0 0 / 0.50)", fontSize: 12, fontWeight: 700, marginTop: 5 }}>Seçili tarih aralığında ajansın kanal harcama yüzdeleri</p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2 2xl:grid-cols-4">
            {items.map((item) => (
              <article key={item.name} style={{ background: "white", border: "1px solid rgb(0 0 0 / 0.10)", borderRadius: 20, boxShadow: "0 1px 0 rgb(255 255 255 / 0.90), 0 14px 30px rgb(14 14 14 / 0.055)", padding: 15 }}>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span style={{ width: 10, height: 10, borderRadius: 99, background: getDonutColor(item) }} />
                  <span style={{ color: "black", fontSize: 13, fontWeight: 950 }}>{item.name}</span>
                  </div>
                  <span style={{ color: getDonutColor(item), fontSize: 18, fontWeight: 950, ...numericText }}>%{Math.round(item.percent)}</span>
                </div>
                <div style={{ height: 8, borderRadius: 99, background: "rgb(0 0 0 / 0.08)", overflow: "hidden" }}>
                  <div style={{ width: `${item.percent}%`, height: "100%", borderRadius: 99, background: getDonutColor(item) }} />
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span style={{ color: "rgb(0 0 0 / 0.45)", fontSize: 11, fontWeight: 800 }}>Harcama</span>
                  <span style={{ color: "black", fontSize: 13, fontWeight: 950, ...numericText }}>{formatCurrencyValue(item.amount)}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ title, href, linkText }: { title: string; href?: string; linkText?: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, marginBottom: 20 }}>
      <h3 style={sectionTitle}>{title}</h3>
      {href && linkText ? (
        <Link href={href} style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "var(--accent)", fontSize: 12, fontWeight: 900 }}>
          {linkText}
          <ArrowUpRight aria-hidden="true" size={13} strokeWidth={2.4} />
        </Link>
      ) : null}
    </div>
  );
}
