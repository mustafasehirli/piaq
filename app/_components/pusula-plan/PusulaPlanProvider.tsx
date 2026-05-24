"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { initialPlanDrafts, initialPlanItems } from "@/lib/plan/data";
import type { PlanDraft, PlanItem, PlanKpi, PlanItemStatus } from "@/lib/plan/types";
import { initialPusulaNodes } from "@/lib/pusula/data";
import type { PusulaNode } from "@/lib/pusula/types";

type ConvertDraftInput = {
  assigneeId: string;
  assigneeName: string;
  channels: string[];
  deadline: string;
  departmentTags: string[];
  kpis: PlanKpi[];
  progress: number;
  status: PlanItemStatus;
};

type PusulaPlanContextValue = {
  convertDraftToPlanItem: (draftId: string, input: ConvertDraftInput) => void;
  planDrafts: PlanDraft[];
  planItems: PlanItem[];
  pusulaNodes: PusulaNode[];
  sendNodeToPlan: (nodeId: string) => void;
};

const PusulaPlanContext = createContext<PusulaPlanContextValue | null>(null);

function createPlanDraft(node: PusulaNode): PlanDraft {
  return {
    id: `draft-${node.id}`,
    sourceNodeId: node.id,
    title: node.title,
    description: node.description,
    source: "pusula",
    nodeType: node.type,
    flowLabel: node.flowLabel,
    createdAt: "Şimdi"
  };
}

export function PusulaPlanProvider({ children }: { children: ReactNode }) {
  const [pusulaNodes, setPusulaNodes] = useState<PusulaNode[]>(initialPusulaNodes);
  const [planDrafts, setPlanDrafts] = useState<PlanDraft[]>(initialPlanDrafts);
  const [planItems, setPlanItems] = useState<PlanItem[]>(initialPlanItems);

  const sendNodeToPlan = useCallback((nodeId: string) => {
    const node = pusulaNodes.find((currentNode) => currentNode.id === nodeId);

    if (!node || node.status !== "draft") return;

    setPlanDrafts((currentDrafts) => {
      if (currentDrafts.some((draft) => draft.sourceNodeId === node.id)) return currentDrafts;

      return [createPlanDraft(node), ...currentDrafts];
    });
    setPusulaNodes((currentNodes) => currentNodes.map((currentNode) => (
      currentNode.id === nodeId ? { ...currentNode, status: "sentToPlan" } : currentNode
    )));
  }, [pusulaNodes]);

  const convertDraftToPlanItem = useCallback((draftId: string, input: ConvertDraftInput) => {
    const draft = planDrafts.find((currentDraft) => currentDraft.id === draftId);

    if (!draft) return;

    const nextItem: PlanItem = {
      id: `item-${draft.sourceNodeId}`,
      sourceDraftId: draft.id,
      sourceNodeId: draft.sourceNodeId,
      title: draft.title,
      description: draft.description,
      channels: input.channels,
      assigneeId: input.assigneeId,
      assigneeName: input.assigneeName,
      departmentTags: input.departmentTags,
      deadline: input.deadline,
      kpis: input.kpis,
      progress: input.progress,
      status: input.status
    };

    setPlanItems((currentItems) => [nextItem, ...currentItems.filter((item) => item.sourceDraftId !== draft.id)]);
    setPlanDrafts((currentDrafts) => currentDrafts.filter((currentDraft) => currentDraft.id !== draft.id));
    setPusulaNodes((currentNodes) => currentNodes.map((node) => (
      node.id === draft.sourceNodeId ? { ...node, status: "convertedToPlanItem" } : node
    )));
  }, [planDrafts]);

  const value = useMemo<PusulaPlanContextValue>(() => ({
    convertDraftToPlanItem,
    planDrafts,
    planItems,
    pusulaNodes,
    sendNodeToPlan
  }), [convertDraftToPlanItem, planDrafts, planItems, pusulaNodes, sendNodeToPlan]);

  return (
    <PusulaPlanContext.Provider value={value}>
      {children}
    </PusulaPlanContext.Provider>
  );
}

export function usePusulaPlan() {
  const context = useContext(PusulaPlanContext);

  if (!context) {
    throw new Error("usePusulaPlan must be used within PusulaPlanProvider");
  }

  return context;
}

