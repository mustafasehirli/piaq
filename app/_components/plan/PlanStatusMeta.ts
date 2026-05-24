import type { ProductTone } from "@/app/_components/common/ProductUI";
import type { PlanItemStatus } from "@/lib/plan/types";

export function getPlanItemStatusMeta(status: PlanItemStatus): { label: string; tone: ProductTone } {
  if (status === "inProgress") return { label: "Devam ediyor", tone: "accent" };
  if (status === "blocked") return { label: "Blokaj", tone: "danger" };
  if (status === "done") return { label: "Tamamlandı", tone: "good" };

  return { label: "Başlamadı", tone: "neutral" };
}

