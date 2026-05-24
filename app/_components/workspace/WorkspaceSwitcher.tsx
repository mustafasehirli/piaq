"use client";

import { useRef, useState } from "react";
import { BriefcaseBusiness, Check, ChevronDown, Plus, X } from "lucide-react";
import { useWorkspace } from "./WorkspaceProvider";
import { getWorkspaceLabels } from "@/lib/workspace/labels";

export function WorkspaceSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);
  const { selectedWorkspace, setWorkspaceById, workspaces } = useWorkspace();
  const selectedLabels = getWorkspaceLabels(selectedWorkspace.type);

  return (
    <div className="px-3 pb-3" ref={switcherRef}>
      <div className="relative">
        <button
          aria-expanded={isOpen}
          aria-label="Workspace seç"
          className="flex w-full items-center gap-3 rounded-[14px] border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2.5 text-left transition-colors hover:bg-[var(--accent-light)]"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-[11px] bg-white text-[var(--text-primary)] shadow-[var(--shadow-sm)]">
            <BriefcaseBusiness aria-hidden="true" className="size-3.5" strokeWidth={2.3} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold text-[var(--text-primary)]">{selectedWorkspace.name}</span>
            <span className="mt-0.5 block truncate text-xs font-normal text-[var(--text-muted)]">
              {selectedLabels.workspaceKindLabel} workspace&apos;i
            </span>
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`size-4 shrink-0 text-[var(--text-muted)] transition-transform ${isOpen ? "rotate-180" : ""}`}
            strokeWidth={2.3}
          />
        </button>

        {isOpen ? (
          <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-[140] overflow-hidden rounded-[14px] border border-[var(--border)] bg-white shadow-[var(--shadow-lg)]">
            {workspaces.map((workspace) => {
              const labels = getWorkspaceLabels(workspace.type);
              const isSelected = workspace.id === selectedWorkspace.id;

              return (
                <button
                  className="flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors hover:bg-[var(--bg-card-soft)]"
                  key={workspace.id}
                  onClick={() => {
                    setWorkspaceById(workspace.id);
                    setIsOpen(false);
                  }}
                  type="button"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-[10px] border border-[var(--border)] bg-[var(--bg-card-soft)] text-[var(--text-muted)]">
                    {isSelected ? <Check aria-hidden="true" className="size-3.5" strokeWidth={2.6} /> : null}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-[var(--text-primary)]">{workspace.name}</span>
                    <span className="mt-0.5 block truncate text-xs font-normal text-[var(--text-muted)]">
                      {labels.workspaceKindLabel} workspace&apos;i
                    </span>
                  </span>
                </button>
              );
            })}
            <div className="border-t border-[var(--border)] p-1.5">
              <button
                className="flex w-full items-center gap-2 rounded-[11px] px-2.5 py-2 text-left text-sm font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent-light)]"
                onClick={() => {
                  setIsOpen(false);
                  setIsCreateOpen(true);
                }}
                type="button"
              >
                <Plus aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
                Yeni workspace oluştur
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {isCreateOpen ? (
        <div className="fixed inset-0 z-[180]">
          <button
            aria-label="Yeni workspace panelini kapat"
            className="absolute inset-0 cursor-default bg-[oklch(0.14_0.01_80_/_0.24)]"
            onClick={() => setIsCreateOpen(false)}
            type="button"
          />
          <section className="absolute right-3 top-24 w-[320px] max-w-[calc(100vw-24px)] overflow-hidden rounded-[20px] border border-[var(--border)] bg-white shadow-[var(--shadow-lg)]">
            <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] px-4 py-4">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[var(--accent)]">Mock UI</p>
                <h2 className="mt-1 text-base font-black text-[var(--text-primary)]">Yeni workspace</h2>
                <p className="mt-1 text-xs font-semibold leading-5 text-[var(--text-muted)]">
                  Oluşturma akışı backend bağlandığında aktifleşecek.
                </p>
              </div>
              <button
                aria-label="Kapat"
                className="flex size-8 shrink-0 items-center justify-center rounded-[10px] border border-[var(--border)] bg-[var(--bg-card-soft)] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                onClick={() => setIsCreateOpen(false)}
                type="button"
              >
                <X aria-hidden="true" className="size-4" strokeWidth={2.4} />
              </button>
            </div>

            <form className="grid gap-3 px-4 py-4">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold text-[var(--text-secondary)]">Workspace adı</span>
                <input
                  className="h-10 rounded-[12px] border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 text-sm font-semibold text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--accent)]"
                  placeholder="Yeni workspace adı"
                  type="text"
                />
              </label>

              <label className="grid gap-1.5">
                <span className="text-xs font-bold text-[var(--text-secondary)]">Workspace tipi</span>
                <select
                  className="h-10 rounded-[12px] border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 text-sm font-semibold text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--accent)]"
                  defaultValue="agency"
                >
                  <option value="agency">Ajans</option>
                  <option value="ecommerce">E-ticaret</option>
                  <option value="saas">SaaS</option>
                </select>
              </label>

              <label className="grid gap-1.5">
                <span className="text-xs font-bold text-[var(--text-secondary)]">Açıklama</span>
                <textarea
                  className="min-h-20 resize-none rounded-[12px] border border-[var(--border)] bg-[var(--bg-card-soft)] px-3 py-2 text-sm font-semibold text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--accent)]"
                  placeholder="Workspace kullanım amacı"
                />
              </label>

              <button
                className="mt-1 h-10 rounded-[12px] bg-[var(--text-primary)] px-3 text-sm font-black text-white opacity-55"
                disabled
                type="button"
              >
                Oluşturma mock fazda kapalı
              </button>
            </form>
          </section>
        </div>
      ) : null}
    </div>
  );
}
