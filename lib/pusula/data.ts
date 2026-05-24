import type { PusulaNode } from "./types";

export const initialPusulaNodes: PusulaNode[] = [
  {
    id: "node-demo-funnel",
    title: "Demo funnel sadeleştirme",
    description: "Demo talep formunda bütçe ve sektör alanları ayrıştırılarak lead kalitesi artırılacak.",
    type: "funnel",
    status: "draft",
    flowLabel: "Büyüme Haritası / Lead Kalitesi",
    position: { x: 350, y: 180 }
  },
  {
    id: "node-meta-creative",
    title: "Meta kreatif test sprinti",
    description: "3 hook, 2 format ve 2 CTA ile yeni kampanya kreatifleri karşılaştırılacak.",
    type: "campaign",
    status: "sentToPlan",
    flowLabel: "Kanal Büyüme / Meta",
    position: { x: 690, y: 330 }
  },
  {
    id: "node-mail-segment",
    title: "Segment bazlı mail akışı",
    description: "Aktif müşteri, sıcak lead ve eski fırsat listeleri için ayrı mesaj akışı hazırlanacak.",
    type: "channel",
    status: "convertedToPlanItem",
    flowLabel: "CRM Ritmi / Mail",
    position: { x: 470, y: 560 }
  },
  {
    id: "node-weekly-ops",
    title: "Haftalık operasyon ritmi",
    description: "Departman kararları, blokajlar ve sorumlu takibi tek plan kuyruğunda toparlanacak.",
    type: "operation",
    status: "draft",
    flowLabel: "Operasyon / Teslim",
    position: { x: 920, y: 610 }
  }
];

