import type { PlanDraft, PlanItem } from "./types";

export const initialPlanDrafts: PlanDraft[] = [
  {
    id: "draft-meta-creative",
    sourceNodeId: "node-meta-creative",
    title: "Meta kreatif test sprinti",
    description: "3 hook, 2 format ve 2 CTA ile yeni kampanya kreatifleri karşılaştırılacak.",
    source: "pusula",
    nodeType: "campaign",
    flowLabel: "Kanal Büyüme / Meta",
    createdAt: "Bugün"
  }
];

export const initialPlanItems: PlanItem[] = [
  {
    id: "item-mail-segment",
    sourceDraftId: "draft-mail-segment",
    sourceNodeId: "node-mail-segment",
    title: "Segment bazlı mail akışı",
    description: "Aktif müşteri, sıcak lead ve eski fırsat listeleri için ayrı mesaj akışı hazırlanacak.",
    channels: ["Mail"],
    assigneeId: "ayse",
    assigneeName: "Ayşe",
    departmentTags: ["pazarlama", "satis"],
    deadline: "2026-05-28",
    kpis: [
      { metric: "Açılma oranı", operator: ">=", value: 35, unit: "%" },
      { metric: "Satış dönüşümü", operator: ">=", value: 4, unit: "%" }
    ],
    progress: 40,
    status: "inProgress"
  }
];

