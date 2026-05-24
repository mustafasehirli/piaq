import { SettingsView } from "@/app/_components/settings/SettingsView";
import type { Currency } from "./data";

type SettingsTabProps = {
  selectedCurrency: Currency;
  selectedServices: string[];
  onCurrencyChange: (currency: Currency) => void;
  onToggleService: (service: string) => void;
};

export function SettingsTab({ selectedCurrency, selectedServices, onCurrencyChange, onToggleService }: SettingsTabProps) {
  return (
    <SettingsView
      onCurrencyChange={onCurrencyChange}
      onToggleService={onToggleService}
      scope="customer"
      selectedCurrency={selectedCurrency}
      selectedServices={selectedServices}
    />
  );
}
