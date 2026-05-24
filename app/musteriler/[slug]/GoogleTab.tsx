import { GoogleAdsView } from "@/app/_components/google-ads/GoogleAdsView";
import { customerGoogleAdsData } from "@/app/_components/google-ads/data";

type GoogleTabProps = {
  customerName: string;
};

export function GoogleTab({ customerName }: GoogleTabProps) {
  return (
    <GoogleAdsView
      data={{
        ...customerGoogleAdsData,
        scopeLabel: `Son 30 gün · ${customerName}`
      }}
    />
  );
}
