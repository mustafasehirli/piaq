export type ComparisonTrendPoint = {
  barValue: number;
  label: string;
  lineValue: number;
  topLabel: string;
};

type ComparisonTrendChartProps = {
  ariaLabel: string;
  color: string;
  gradientId: string;
  points: ComparisonTrendPoint[];
};

export function ComparisonTrendChart({ ariaLabel, color, gradientId, points }: ComparisonTrendChartProps) {
  const maxBarValue = Math.max(...points.map((point) => point.barValue), 1);
  const maxLineValue = Math.max(...points.map((point) => point.lineValue), 1);
  const chartWidth = 660;
  const chartHeight = 190;
  const padding = { top: 24, right: 20, bottom: 34, left: 28 };
  const plotWidth = chartWidth - padding.left - padding.right;
  const plotHeight = chartHeight - padding.top - padding.bottom;
  const pointStep = points.length > 1 ? points.length - 1 : 1;
  const linePath = points
    .map((point, index) => {
      const x = padding.left + (index / pointStep) * plotWidth;
      const y = padding.top + plotHeight - (point.lineValue / maxLineValue) * plotHeight;

      return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  const labelHeight = 16;

  return (
    <div className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-[oklch(0.988_0.006_120)]">
      <svg aria-label={ariaLabel} className="h-[260px] w-full" preserveAspectRatio="none" role="img" viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
        <defs>
          <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.22" />
            <stop offset="100%" stopColor={color} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((line) => {
          const y = padding.top + (plotHeight / 3) * line;

          return <line key={line} stroke="oklch(0.20 0.018 80 / 0.075)" x1={padding.left} x2={chartWidth - padding.right} y1={y} y2={y} />;
        })}
        {points.map((point, index) => {
          const barWidth = 26;
          const x = padding.left + (index / pointStep) * plotWidth - barWidth / 2;
          const barHeight = (point.barValue / maxBarValue) * (plotHeight - 14);
          const y = padding.top + plotHeight - barHeight;

          return (
            <g key={point.label}>
              <rect fill={color} height={barHeight} opacity="0.18" rx="8" width={barWidth} x={x} y={y} />
              <text fill="oklch(0.42 0.018 80)" fontSize="10" fontWeight="800" textAnchor="middle" x={x + barWidth / 2} y={chartHeight - 13}>
                {point.label}
              </text>
            </g>
          );
        })}
        <path d={`${linePath} L ${chartWidth - padding.right} ${padding.top + plotHeight} L ${padding.left} ${padding.top + plotHeight} Z`} fill={`url(#${gradientId})`} />
        <path d={linePath} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        {points.map((point, index) => {
          const x = padding.left + (index / pointStep) * plotWidth;
          const y = padding.top + plotHeight - (point.lineValue / maxLineValue) * plotHeight;

          return <circle cx={x} cy={y} fill="white" key={`${point.label}-line`} r="4" stroke={color} strokeWidth="2.4" />;
        })}
        {points.map((point, index) => {
          const barWidth = 26;
          const x = padding.left + (index / pointStep) * plotWidth - barWidth / 2;
          const barHeight = (point.barValue / maxBarValue) * (plotHeight - 14);
          const y = padding.top + plotHeight - barHeight;
          const labelX = x + barWidth / 2;
          const labelWidth = Math.max(46, point.topLabel.length * 6.5 + 12);
          const labelY = Math.max(padding.top + 12, y - 10);

          return (
            <g key={`${point.label}-value`}>
              <rect
                fill="var(--bg-card)"
                height={labelHeight}
                opacity="0.94"
                rx="8"
                stroke="var(--border)"
                strokeWidth="0.7"
                width={labelWidth}
                x={labelX - labelWidth / 2}
                y={labelY - 12}
              />
              <text fill={color} fontSize="10" fontWeight="900" textAnchor="middle" x={labelX} y={labelY}>
                {point.topLabel}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
