export type PlanSource = "pusula";

export type PlanKpi = {
  metric: string;
  operator: ">=" | "<=" | "=";
  value: number;
  unit: "%" | "adet" | "₺" | "oran";
  note?: string;
};

export type PlanDraft = {
  id: string;
  sourceNodeId: string;
  title: string;
  description: string;
  source: PlanSource;
  nodeType: string;
  flowLabel: string;
  createdAt: string;
};

export type PlanItemStatus = "notStarted" | "inProgress" | "blocked" | "done";

export type PlanItem = {
  id: string;
  sourceDraftId: string;
  sourceNodeId: string;
  title: string;
  description: string;
  channels: string[];
  assigneeId: string;
  assigneeName: string;
  departmentTags: string[];
  deadline: string;
  kpis: PlanKpi[];
  progress: number;
  status: PlanItemStatus;
};

