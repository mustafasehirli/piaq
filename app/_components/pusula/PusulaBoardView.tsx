"use client";

import { useMemo, useState } from "react";
import { usePusulaPlan } from "@/app/_components/pusula-plan/PusulaPlanProvider";
import { PusulaCanvasView } from "./PusulaCanvasView";
import { PusulaNodeDetailPanel } from "./PusulaNodeDetailPanel";
import { PusulaNodeLayer } from "./PusulaNodeLayer";

export function PusulaBoardView() {
  const { pusulaNodes, sendNodeToPlan } = usePusulaPlan();
  const [selectedNodeId, setSelectedNodeId] = useState<string | undefined>(pusulaNodes[0]?.id);
  const selectedNode = useMemo(
    () => pusulaNodes.find((node) => node.id === selectedNodeId),
    [pusulaNodes, selectedNodeId]
  );

  function handleSendToPlan(nodeId: string) {
    sendNodeToPlan(nodeId);
    setSelectedNodeId(nodeId);
  }

  return (
    <div className="relative h-[calc(100vh-80px)] min-h-[calc(100vh-80px)] overflow-hidden">
      <PusulaCanvasView className="h-full min-h-full" />
      <PusulaNodeLayer
        nodes={pusulaNodes}
        onSelectNode={setSelectedNodeId}
        selectedNodeId={selectedNodeId}
      />
      <PusulaNodeDetailPanel
        node={selectedNode}
        onClose={() => setSelectedNodeId(undefined)}
        onSendToPlan={handleSendToPlan}
      />
    </div>
  );
}
