import type { Workspace } from "./types";

export const workspaces: Workspace[] = [
  {
    id: "piaq-media",
    name: "Piaq Media",
    type: "agency",
    description: "Reklam ajansı workspace'i"
  },
  {
    id: "lumoli-store",
    name: "Lumoli Store",
    type: "ecommerce",
    description: "E-ticaret operasyon workspace'i"
  },
  {
    id: "nova-saas",
    name: "Nova SaaS",
    type: "saas",
    description: "SaaS ürün operasyon workspace'i"
  }
];

export const defaultWorkspace = workspaces[0];

export function getWorkspaceById(workspaceId: string) {
  return workspaces.find((workspace) => workspace.id === workspaceId);
}

