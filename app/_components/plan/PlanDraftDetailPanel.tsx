"use client";

import { useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { StatusBadge } from "@/app/_components/common/ProductUI";
import type { PlanDraft, PlanItemStatus, PlanKpi } from "@/lib/plan/types";

type PlanDraftDetailPanelProps = {
  draft?: PlanDraft;
  onClose: () => void;
  onConvert: (draftId: string, input: {
    assigneeId: string;
    assigneeName: string;
    channels: string[];
    deadline: string;
    departmentTags: string[];
    kpis: PlanKpi[];
    progress: number;
    status: PlanItemStatus;
  }) => void;
};

const channelOptions = ["Meta", "Google", "TikTok", "Sosyal Medya", "Funnel", "Mail"];
const departmentOptions = [
  { id: "satis", label: "Satış" },
  { id: "pazarlama", label: "Pazarlama" },
  { id: "operasyon", label: "Operasyon" },
  { id: "yonetim", label: "Yönetim" }
];
const assigneeOptions = [
  { id: "ayse", name: "Ayşe" },
  { id: "mert", name: "Mert" },
  { id: "deniz", name: "Deniz" }
];

function toggleValue(values: string[], value: string) {
  return values.includes(value)
    ? values.filter((item) => item !== value)
    : [...values, value];
}

export function PlanDraftDetailPanel({ draft, onClose, onConvert }: PlanDraftDetailPanelProps) {
  const [channels, setChannels] = useState<string[]>(["Meta"]);
  const [departmentTags, setDepartmentTags] = useState<string[]>(["pazarlama"]);
  const [assigneeId, setAssigneeId] = useState("ayse");
  const [deadline, setDeadline] = useState("2026-05-31");
  const [status, setStatus] = useState<PlanItemStatus>("notStarted");
  const [progress, setProgress] = useState(0);

  if (!draft) return null;

  const selectedAssignee = assigneeOptions.find((assignee) => assignee.id === assigneeId) ?? assigneeOptions[0];
  const kpis: PlanKpi[] = [
    { metric: "ROAS", operator: ">=", value: 3.2, unit: "oran" },
    { metric: "Dönüşüm", operator: ">=", value: 4, unit: "%" }
  ];

  return (
    <aside className="fixed bottom-0 right-0 top-20 z-50 flex w-[440px] max-w-[calc(100vw-16px)] flex-col overflow-hidden border-l border-[var(--border)] bg-white shadow-[var(--shadow-lg)]">
      <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] p-5">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[var(--accent)]">Plan taslağı</p>
          <h2 className="mt-2 text-xl font-black leading-tight text-[var(--text-primary)]">{draft.title}</h2>
          <p className="mt-2 text-xs font-semibold leading-5 text-[var(--text-secondary)]">{draft.description}</p>
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
          <StatusBadge status="Pusula bağlantılı" tone="accent" />
          <StatusBadge status={draft.flowLabel} tone="neutral" />
        </div>

        <section className="mt-5 grid gap-4">
          <label className="grid gap-1.5">
            <span className="text-xs font-bold text-[var(--text-secondary)]">Sorumlu kişi</span>
            <select
              className="h-10 rounded-[12px] border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 text-sm font-semibold text-[var(--text-primary)] outline-none"
              onChange={(event) => setAssigneeId(event.target.value)}
              value={assigneeId}
            >
              {assigneeOptions.map((assignee) => (
                <option key={assignee.id} value={assignee.id}>{assignee.name}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-1.5">
            <span className="text-xs font-bold text-[var(--text-secondary)]">Deadline</span>
            <input
              className="h-10 rounded-[12px] border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 text-sm font-semibold text-[var(--text-primary)] outline-none"
              onChange={(event) => setDeadline(event.target.value)}
              type="date"
              value={deadline}
            />
          </label>

          <div>
            <p className="text-xs font-bold text-[var(--text-secondary)]">Atölye kanalları</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {channelOptions.map((channel) => (
                <button
                  className={`rounded-full border px-3 py-1.5 text-xs font-black transition-colors ${
                    channels.includes(channel)
                      ? "border-[color-mix(in_oklch,var(--accent)_24%,white)] bg-[var(--accent-light)] text-[var(--accent)]"
                      : "border-[var(--border)] bg-white text-[var(--text-secondary)]"
                  }`}
                  key={channel}
                  onClick={() => setChannels((current) => toggleValue(current, channel))}
                  type="button"
                >
                  {channel}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-[var(--text-secondary)]">Departman etiketleri</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {departmentOptions.map((department) => (
                <button
                  className={`rounded-full border px-3 py-1.5 text-xs font-black transition-colors ${
                    departmentTags.includes(department.id)
                      ? "border-[color-mix(in_oklch,var(--accent)_24%,white)] bg-[var(--accent-light)] text-[var(--accent)]"
                      : "border-[var(--border)] bg-white text-[var(--text-secondary)]"
                  }`}
                  key={department.id}
                  onClick={() => setDepartmentTags((current) => toggleValue(current, department.id))}
                  type="button"
                >
                  {department.label}
                </button>
              ))}
            </div>
          </div>

          <label className="grid gap-1.5">
            <span className="text-xs font-bold text-[var(--text-secondary)]">Durum</span>
            <select
              className="h-10 rounded-[12px] border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 text-sm font-semibold text-[var(--text-primary)] outline-none"
              onChange={(event) => setStatus(event.target.value as PlanItemStatus)}
              value={status}
            >
              <option value="notStarted">Başlamadı</option>
              <option value="inProgress">Devam ediyor</option>
              <option value="blocked">Blokaj</option>
              <option value="done">Tamamlandı</option>
            </select>
          </label>

          <label className="grid gap-1.5">
            <span className="text-xs font-bold text-[var(--text-secondary)]">İlerleme: %{progress}</span>
            <input
              max={100}
              min={0}
              onChange={(event) => setProgress(Number(event.target.value))}
              type="range"
              value={progress}
            />
          </label>

          <div>
            <p className="text-xs font-bold text-[var(--text-secondary)]">KPI listesi</p>
            <div className="mt-2 grid gap-2">
              {kpis.map((kpi) => (
                <div className="rounded-[13px] border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-xs font-bold text-[var(--text-secondary)]" key={kpi.metric}>
                  {kpi.metric} {kpi.operator} {kpi.value}{kpi.unit}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-[var(--border)] p-4">
        <button
          className="flex h-11 w-full items-center justify-center gap-2 rounded-[14px] bg-[var(--accent)] px-4 text-sm font-black text-white shadow-[var(--shadow-brand-sm)] transition-colors hover:bg-[var(--accent-hover)]"
          onClick={() => {
            onConvert(draft.id, {
              assigneeId,
              assigneeName: selectedAssignee.name,
              channels,
              deadline,
              departmentTags,
              kpis,
              progress,
              status
            });
            onClose();
          }}
          type="button"
        >
          <CheckCircle2 aria-hidden="true" className="size-4" strokeWidth={2.4} />
          İş kalemine dönüştür
        </button>
      </div>
    </aside>
  );
}

