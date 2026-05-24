export type WorkspaceType = "agency" | "ecommerce" | "saas";

export type Workspace = {
  id: string;
  name: string;
  type: WorkspaceType;
  description: string;
};

