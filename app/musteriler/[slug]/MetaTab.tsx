import { MetaAdsView, customerMetaAdsData } from "@/app/_components/meta-ads/MetaAdsView";

type MetaTabProps = {
  customerName: string;
};

export function MetaTab({ customerName }: MetaTabProps) {
  return (
    <MetaAdsView
      data={{
        ...customerMetaAdsData,
        scopeLabel: `Son 30 gün · ${customerName}`
      }}
    />
  );
}
