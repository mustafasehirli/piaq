"use client";

import { ArrowRight, CheckCircle2, Send, X } from "lucide-react";
import Link from "next/link";
import { StatusBadge } from "@/app/_components/common/ProductUI";
import type { PusulaNode } from "@/lib/pusula/types";
import { getPusulaNodeStatusMeta, getPusulaNodeTypeLabel } from "./PusulaNodeMeta";

type PusulaNodeDetailPanelProps = {
  node?: PusulaNode;
  onClose: () => void;
  onSendToPlan: (nodeId: string) => void;
};

export function PusulaNodeDetailPanel({ node, onClose, onSendToPlan }: PusulaNodeDetailPanelProps) {
  if (!node) return null;

  const status = getPusulaNodeStatusMeta(node.status);
  const canSendToPlan = node.status === "draft";

  return (
    <aside className="absolute right-6 top-6 z-30 flex max-h-[calc(100%-48px)] w-[360px] max-w-[calc(100%-48px)] flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-white shadow-[var(--shadow-lg)]">
      <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] p-5">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--text-muted)]">Seçili node</p>
          <h2 className="mt-2 text-xl font-black leading-tight text-[var(--text-primary)]">{node.title}</h2>
        </div>
        <button
          aria-label="Paneli kapat"
          className="flex size-9 shrink-0 items-center justify-center rounded-[12px] border border-[var(--border)] bg-[var(--bg-card-soft)] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          onClick={onClose}
          type="button"
        >
          <X aria-hidden="true" className="size-4" strokeWidth={2.4} />
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-5">
        <div className="flex flex-wrap gap-2">
          <StatusBadge status={getPusulaNodeTypeLabel(node.type)} tone="accent" />
          <StatusBadge status={status.label} tone={status.tone} />
        </div>

        <section className="mt-5 rounded-[20px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4">
          <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">Bağlı akış</p>
          <p className="mt-2 text-sm font-black text-[var(--text-primary)]">{node.flowLabel}</p>
        </section>

        <section className="mt-4">
          <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">Açıklama</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-[var(--text-secondary)]">{node.description}</p>
        </section>
      </div>

      <div className="border-t border-[var(--border)] p-4">
        <button
          className={`flex h-11 w-full items-center justify-center gap-2 rounded-[14px] px-4 text-sm font-black transition-colors ${
            canSendToPlan
              ? "bg-[var(--accent)] text-white shadow-[var(--shadow-brand-sm)] hover:bg-[var(--accent-hover)]"
              : "cursor-not-allowed bg-[var(--bg-card-soft)] text-[var(--text-muted)]"
          }`}
          disabled={!canSendToPlan}
          onClick={() => onSendToPlan(node.id)}
          type="button"
        >
          {canSendToPlan ? <Send aria-hidden="true" className="size-4" strokeWidth={2.4} /> : <CheckCircle2 aria-hidden="true" className="size-4" strokeWidth={2.4} />}
          {canSendToPlan ? "Plan'a gönder" : status.label}
        </button>
        <Link
          className="mt-2 flex h-10 items-center justify-center gap-2 rounded-[13px] border border-[var(--border)] bg-white text-sm font-black text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-card-soft)]"
          href="/plan"
        >
          Plan sayfasına git
          <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2.4} />
        </Link>
      </div>
    </aside>
  );
}

