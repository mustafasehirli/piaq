"use client";

import { useState } from "react";
import { SettingsView } from "@/app/_components/settings/SettingsView";
import { currencies, services, type Currency } from "@/app/musteriler/[slug]/data";

function toggleListItem<T>(items: T[], item: T) {
  return items.includes(item)
    ? items.filter((currentItem) => currentItem !== item)
    : [...items, item];
}

export default function Page() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0]);
  const [selectedServices, setSelectedServices] = useState<string[]>(services);

  function toggleService(service: string) {
    setSelectedServices((currentServices) => toggleListItem(currentServices, service));
  }

  return (
    <SettingsView
      onCurrencyChange={setSelectedCurrency}
      onToggleService={toggleService}
      scope="agency"
      selectedCurrency={selectedCurrency}
      selectedServices={selectedServices}
    />
  );
}
