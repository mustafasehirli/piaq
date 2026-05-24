import { GoogleAdsView } from "@/app/_components/google-ads/GoogleAdsView";
import { agencyGoogleAdsData } from "@/app/_components/google-ads/data";

export default function Page() {
  return <GoogleAdsView data={agencyGoogleAdsData} />;
}
