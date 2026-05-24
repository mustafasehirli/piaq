"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { defaultWorkspace, getWorkspaceById, workspaces } from "@/lib/workspace/data";
import { getWorkspaceLabels } from "@/lib/workspace/labels";
import type { Workspace } from "@/lib/workspace/types";

const workspaceStorageKey = "piaq:selected-workspace";

type WorkspaceContextValue = {
  labels: ReturnType<typeof getWorkspaceLabels>;
  selectedWorkspace: Workspace;
  setWorkspaceById: (workspaceId: string) => void;
  workspaces: Workspace[];
};

const WorkspaceContext = createContext<WorkspaceContextValue | null>(null);

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const [selectedWorkspace, setSelectedWorkspace] = useState<Workspace>(defaultWorkspace);

  useEffect(() => {
    const storedWorkspaceId = window.localStorage.getItem(workspaceStorageKey);

    if (!storedWorkspaceId) return;

    const storedWorkspace = getWorkspaceById(storedWorkspaceId);

    const timeoutId = window.setTimeout(() => {
      if (!storedWorkspace) return;
      setSelectedWorkspace(storedWorkspace);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const setWorkspaceById = useCallback((workspaceId: string) => {
    const nextWorkspace = getWorkspaceById(workspaceId);

    if (!nextWorkspace) return;

    setSelectedWorkspace(nextWorkspace);
    window.localStorage.setItem(workspaceStorageKey, nextWorkspace.id);
  }, []);

  const value = useMemo<WorkspaceContextValue>(() => ({
    labels: getWorkspaceLabels(selectedWorkspace.type),
    selectedWorkspace,
    setWorkspaceById,
    workspaces
  }), [selectedWorkspace, setWorkspaceById]);

  return (
    <WorkspaceContext.Provider value={value}>
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);

  if (!context) {
    throw new Error("useWorkspace must be used within WorkspaceProvider");
  }

  return context;
}
