"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, ClipboardList, Flag, ListChecks } from "lucide-react";
import { KpiCard, SectionTitle, StatusBadge } from "@/app/_components/common/ProductUI";
import { usePusulaPlan } from "@/app/_components/pusula-plan/PusulaPlanProvider";
import { PlanDraftCard } from "./PlanDraftCard";
import { PlanDraftDetailPanel } from "./PlanDraftDetailPanel";
import { PlanItemCard } from "./PlanItemCard";

export function PlanPageView() {
  const { convertDraftToPlanItem, planDrafts, planItems } = usePusulaPlan();
  const [selectedDraftId, setSelectedDraftId] = useState<string | undefined>();
  const selectedDraft = useMemo(
    () => planDrafts.find((draft) => draft.id === selectedDraftId),
    [planDrafts, selectedDraftId]
  );
  const riskItems = planItems.filter((item) => item.status === "blocked" || item.progress < 25);

  return (
    <main className="px-6 py-6 md:px-8 md:py-7">
      <div className="grid gap-4 md:grid-cols-3">
        <KpiCard
          change="Pusula'dan geldi"
          icon={Flag}
          label="Plan Taslağı"
          note="Henüz iş kalemine dönüşmemiş kararlar"
          tone="accent"
          value={String(planDrafts.length)}
        />
        <KpiCard
          change="Uygulamaya hazır"
          icon={ListChecks}
          label="Aktif İş"
          note="Sorumlu, kanal ve KPI atanmış işler"
          tone="good"
          value={String(planItems.length)}
        />
        <KpiCard
          change="Yakın takip"
          icon={AlertTriangle}
          label="Riskte"
          note="Blokajlı veya düşük ilerleme gösteren işler"
          tone={riskItems.length > 0 ? "warning" : "neutral"}
          value={String(riskItems.length)}
        />
      </div>

      <section className="mt-5 rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <SectionTitle
            description="Pusula'da seçilen strateji node'ları önce taslak olarak buraya düşer."
            kicker="Pusula'dan Gelenler"
            title="Plan taslak kuyruğu"
          />
          <StatusBadge status="Session mock" tone="neutral" />
        </div>

        <div className="mt-5 grid gap-4 xl:grid-cols-3">
          {planDrafts.length > 0 ? planDrafts.map((draft) => (
            <PlanDraftCard draft={draft} key={draft.id} onOpen={setSelectedDraftId} />
          )) : (
            <div className="rounded-[22px] border border-dashed border-[var(--border)] bg-[var(--bg-card-soft)] p-6 text-sm font-semibold text-[var(--text-muted)]">
              Pusula&apos;dan gelen bekleyen taslak yok.
            </div>
          )}
        </div>
      </section>

      <section className="mt-5 rounded-[30px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
        <div className="flex items-start justify-between gap-4">
          <SectionTitle
            description="Taslaklardan dönüştürülen, uygulanabilir plan işleri."
            kicker="Aktif Plan İşleri"
            title="Uygulama kuyruğu"
          />
          <ClipboardList aria-hidden="true" className="size-5 text-[var(--accent)]" strokeWidth={2.4} />
        </div>

        <div className="mt-5 grid gap-4 xl:grid-cols-2">
          {planItems.map((item) => (
            <PlanItemCard item={item} key={item.id} />
          ))}
        </div>
      </section>

      <section className="mt-5 rounded-[30px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-5">
        <SectionTitle
          description="Bu bölüm ilerleyen fazda kapasite, deadline ve blokaj sinyalleriyle beslenecek."
          kicker="Geciken / Riskteki İşler"
          title="Mock takip alanı"
        />
        <div className="mt-4 grid gap-3">
          {riskItems.length > 0 ? riskItems.map((item) => (
            <div className="rounded-[18px] border border-[var(--border)] bg-white px-4 py-3" key={`risk-${item.id}`}>
              <p className="text-sm font-black text-[var(--text-primary)]">{item.title}</p>
              <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">İlerleme %{item.progress} · {item.assigneeName}</p>
            </div>
          )) : (
            <p className="rounded-[18px] border border-[var(--border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--text-muted)]">
              Şimdilik riskte iş yok.
            </p>
          )}
        </div>
      </section>

      <PlanDraftDetailPanel
        draft={selectedDraft}
        onClose={() => setSelectedDraftId(undefined)}
        onConvert={convertDraftToPlanItem}
      />
    </main>
  );
}
