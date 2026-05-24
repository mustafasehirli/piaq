import { customerFunnelData } from "@/app/_components/funnel/data";
import { FunnelView } from "@/app/_components/funnel/FunnelView";

export function FunnelTab() {
  return <FunnelView data={customerFunnelData} />;
}
