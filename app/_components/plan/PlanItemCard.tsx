"use client";

import { CalendarDays, Gauge } from "lucide-react";
import { StatusBadge } from "@/app/_components/common/ProductUI";
import type { PlanItem } from "@/lib/plan/types";
import { getPlanItemStatusMeta } from "./PlanStatusMeta";

export function PlanItemCard({ item }: { item: PlanItem }) {
  const status = getPlanItemStatusMeta(item.status);

  return (
    <article className="rounded-[22px] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-sm)]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-base font-black text-[var(--text-primary)]">{item.title}</h3>
          <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{item.description}</p>
        </div>
        <StatusBadge status={status.label} tone={status.tone} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.channels.map((channel) => (
          <StatusBadge key={`${item.id}-${channel}`} status={channel} tone="accent" />
        ))}
        {item.departmentTags.map((department) => (
          <StatusBadge key={`${item.id}-${department}`} status={department} tone="neutral" />
        ))}
      </div>

      <div className="mt-4 grid gap-3 rounded-[18px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-3 sm:grid-cols-2">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">Sorumlu</p>
          <p className="mt-1 text-sm font-black text-[var(--text-primary)]">{item.assigneeName}</p>
        </div>
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">Deadline</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm font-black text-[var(--text-primary)]">
            <CalendarDays aria-hidden="true" className="size-3.5" strokeWidth={2.4} />
            {item.deadline}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="flex items-center gap-1.5 text-xs font-black text-[var(--text-primary)]">
            <Gauge aria-hidden="true" className="size-3.5" strokeWidth={2.4} />
            İlerleme
          </span>
          <span className="text-xs font-black text-[var(--accent)]">%{item.progress}</span>
        </div>
        <div className="h-2 rounded-full bg-[var(--bg-card-soft)]">
          <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${item.progress}%` }} />
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        {item.kpis.map((kpi) => (
          <p className="rounded-[13px] border border-[var(--border)] bg-white px-3 py-2 text-xs font-bold text-[var(--text-secondary)]" key={`${item.id}-${kpi.metric}`}>
            {kpi.metric} {kpi.operator} {kpi.value}{kpi.unit}
          </p>
        ))}
      </div>
    </article>
  );
}

