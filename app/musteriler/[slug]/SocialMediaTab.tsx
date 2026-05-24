import { SocialMediaView, customerSocialMediaData } from "@/app/_components/social-media/SocialMediaView";

type SocialMediaTabProps = {
  customerName: string;
};

export function SocialMediaTab({ customerName }: SocialMediaTabProps) {
  return (
    <SocialMediaView
      data={{
        ...customerSocialMediaData,
        scopeLabel: `Son 30 gün · ${customerName}`
      }}
    />
  );
}
