import { agencyFunnelData } from "@/app/_components/funnel/data";
import { FunnelView } from "@/app/_components/funnel/FunnelView";

export default function Page() {
  return <FunnelView data={agencyFunnelData} />;
}
