import { TikTokAdsView, customerTikTokAdsData } from "@/app/_components/tiktok-ads/TikTokAdsView";

type TikTokTabProps = {
  customerName: string;
};

export function TikTokTab({ customerName }: TikTokTabProps) {
  return (
    <TikTokAdsView
      data={{
        ...customerTikTokAdsData,
        scopeLabel: `Son 30 gün · ${customerName}`
      }}
    />
  );
}
