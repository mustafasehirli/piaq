import type { ProductTone } from "@/app/_components/common/ProductUI";
import type { PusulaNodeStatus, PusulaNodeType } from "@/lib/pusula/types";

export function getPusulaNodeTypeLabel(type: PusulaNodeType) {
  if (type === "strategy") return "Strateji";
  if (type === "funnel") return "Funnel";
  if (type === "campaign") return "Kampanya";
  if (type === "channel") return "Kanal";

  return "Operasyon";
}

export function getPusulaNodeStatusMeta(status: PusulaNodeStatus): { label: string; tone: ProductTone } {
  if (status === "sentToPlan") {
    return { label: "Plan'da bekliyor", tone: "warning" };
  }

  if (status === "convertedToPlanItem") {
    return { label: "İşe dönüştürüldü", tone: "good" };
  }

  return { label: "Plan'a gönderilmedi", tone: "neutral" };
}

