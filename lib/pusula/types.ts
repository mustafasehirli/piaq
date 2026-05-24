export type PusulaNodeType = "strategy" | "funnel" | "campaign" | "channel" | "operation";

export type PusulaNodeStatus = "draft" | "sentToPlan" | "convertedToPlanItem";

export type PusulaNode = {
  id: string;
  title: string;
  description: string;
  type: PusulaNodeType;
  status: PusulaNodeStatus;
  flowLabel: string;
  position: {
    x: number;
    y: number;
  };
};

