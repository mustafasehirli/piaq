import type { WorkspaceType } from "./types";

export type WorkspaceLabels = {
  primaryEntityLabel: "Müşteriler" | "Siparişler" | "Üyeler";
  primaryEntitySingular: "Müşteri" | "Sipariş" | "Üye";
  workspaceKindLabel: "Ajans" | "E-ticaret" | "SaaS";
};

export function getWorkspaceLabels(workspaceType: WorkspaceType): WorkspaceLabels {
  if (workspaceType === "ecommerce") {
    return {
      primaryEntityLabel: "Siparişler",
      primaryEntitySingular: "Sipariş",
      workspaceKindLabel: "E-ticaret"
    };
  }

  if (workspaceType === "saas") {
    return {
      primaryEntityLabel: "Üyeler",
      primaryEntitySingular: "Üye",
      workspaceKindLabel: "SaaS"
    };
  }

  return {
    primaryEntityLabel: "Müşteriler",
    primaryEntitySingular: "Müşteri",
    workspaceKindLabel: "Ajans"
  };
}

