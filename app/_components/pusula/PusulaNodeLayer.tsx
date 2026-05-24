"use client";

import { StatusBadge } from "@/app/_components/common/ProductUI";
import type { PusulaNode } from "@/lib/pusula/types";
import { getPusulaNodeStatusMeta, getPusulaNodeTypeLabel } from "./PusulaNodeMeta";

type PusulaNodeLayerProps = {
  nodes: PusulaNode[];
  onSelectNode: (nodeId: string) => void;
  selectedNodeId?: string;
};

export function PusulaNodeLayer({ nodes, onSelectNode, selectedNodeId }: PusulaNodeLayerProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {nodes.map((node) => {
        const status = getPusulaNodeStatusMeta(node.status);
        const selected = selectedNodeId === node.id;

        return (
          <button
            className={`pointer-events-auto absolute w-[230px] rounded-[20px] border bg-white p-4 text-left shadow-[0_16px_34px_oklch(0.18_0.018_80_/_0.10)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] ${
              selected ? "border-[var(--accent)] ring-4 ring-[color-mix(in_oklch,var(--accent)_14%,transparent)]" : "border-[var(--border)]"
            }`}
            key={node.id}
            onClick={() => onSelectNode(node.id)}
            style={{ left: node.position.x, top: node.position.y }}
            type="button"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="truncate text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
                {getPusulaNodeTypeLabel(node.type)}
              </span>
              <StatusBadge status={status.label} tone={status.tone} />
            </div>
            <h3 className="text-sm font-black leading-5 text-[var(--text-primary)]">{node.title}</h3>
            <p className="mt-2 line-clamp-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{node.description}</p>
          </button>
        );
      })}
    </div>
  );
}

