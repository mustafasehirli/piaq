import { MailMarketingView, customerMailMarketingData } from "@/app/_components/mail-marketing/MailMarketingView";

type MailTabProps = {
  customerName: string;
};

export function MailTab({ customerName }: MailTabProps) {
  return (
    <MailMarketingView
      data={{
        ...customerMailMarketingData,
        scopeLabel: `Son 30 gün · ${customerName}`
      }}
    />
  );
}
