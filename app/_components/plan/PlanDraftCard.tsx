"use client";

import { ArrowRight, Compass } from "lucide-react";
import { StatusBadge } from "@/app/_components/common/ProductUI";
import type { PlanDraft } from "@/lib/plan/types";

type PlanDraftCardProps = {
  draft: PlanDraft;
  onOpen: (draftId: string) => void;
};

export function PlanDraftCard({ draft, onOpen }: PlanDraftCardProps) {
  return (
    <article className="rounded-[22px] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-sm)]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap gap-2">
            <StatusBadge status="Pusula" tone="accent" />
            <StatusBadge status={draft.nodeType} tone="neutral" />
          </div>
          <h3 className="text-base font-black text-[var(--text-primary)]">{draft.title}</h3>
          <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{draft.description}</p>
        </div>
        <Compass aria-hidden="true" className="size-5 shrink-0 text-[var(--accent)]" strokeWidth={2.5} />
      </div>
      <div className="mt-4 rounded-[16px] border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2">
        <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">Kaynak akış</p>
        <p className="mt-1 text-xs font-bold text-[var(--text-primary)]">{draft.flowLabel} · {draft.createdAt}</p>
      </div>
      <button
        className="mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-[13px] bg-[var(--text-primary)] px-3 text-sm font-black text-white transition-colors hover:bg-[var(--sidebar-active-bg)]"
        onClick={() => onOpen(draft.id)}
        type="button"
      >
        İş kalemine dönüştür
        <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2.5} />
      </button>
    </article>
  );
}

