"use client";

import type { ReactNode } from "react";
import {
  Bell,
  Building2,
  Check,
  ChevronRight,
  CircleDollarSign,
  DatabaseZap,
  Globe2,
  KeyRound,
  Link2,
  Mail,
  ImagePlus,
  Phone,
  ShieldCheck,
  SlidersHorizontal,
  UserRound,
  WalletCards
} from "lucide-react";
import {
  currencies,
  funnelConnectionSteps,
  googleConnectionSteps,
  mailConnectionSteps,
  services,
  tikTokConnectionSteps,
  type Currency
} from "@/app/musteriler/[slug]/data";
import { ValueText } from "@/app/_components/common/ProductUI";
import { StatusBadge } from "@/app/_components/common";

type SettingsScope = "agency" | "customer";

type SettingsViewProps = {
  onCurrencyChange: (currency: Currency) => void;
  onToggleService: (service: string) => void;
  scope: SettingsScope;
  selectedCurrency: Currency;
  selectedServices: string[];
};

type FieldProps = {
  icon?: ReactNode;
  label: string;
  placeholder: string;
  type?: string;
};

type ConnectionItem = {
  accent: string;
  description: string;
  fields: FieldProps[];
  steps: string[];
  title: string;
};

const inputClass =
  "mt-2 h-11 w-full rounded-[14px] border border-[var(--border)] bg-white px-3.5 text-[13px] font-semibold text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]";

const scopeCopy: Record<SettingsScope, {
  badge: string;
  description: string;
  primaryMetricLabel: string;
  primaryMetricValue: string;
  secondaryMetricLabel: string;
  secondaryMetricValue: string;
  title: string;
}> = {
  agency: {
    badge: "Ajans ayarları",
    description: "Workspace bilgileri, hizmet kapsamı, bağlantılar ve güvenlik tercihleri aynı standartta yönetilir.",
    primaryMetricLabel: "Workspace",
    primaryMetricValue: "Piaq Ajans",
    secondaryMetricLabel: "Bağlantı",
    secondaryMetricValue: "6 kanal",
    title: "Operasyon ayar merkezi"
  },
  customer: {
    badge: "Müşteri ayarları",
    description: "Müşteri profili, sözleşme bilgileri, aktif hizmetler ve reklam bağlantıları tek ayar düzeninde tutulur.",
    primaryMetricLabel: "Durum",
    primaryMetricValue: "Aktif",
    secondaryMetricLabel: "Hizmet",
    secondaryMetricValue: "6 alan",
    title: "Profil ve bağlantı ayarları"
  }
};

const connectionItems: ConnectionItem[] = [
  {
    accent: "var(--channel-meta)",
    description: "Meta Marketing API için reklam hesabı, token ve Business bağlantısı.",
    fields: [
      { label: "Ad Account ID", placeholder: "act_123456789" },
      { label: "Business ID", placeholder: "Business Manager ID" },
      { label: "App ID", placeholder: "Meta app ID" },
      { label: "Access Token", placeholder: "Long-lived token" }
    ],
    steps: ["Ad account eşleşir", "Business erişimi doğrulanır", "Saatlik sync izni kontrol edilir"],
    title: "Meta"
  },
  {
    accent: "var(--channel-google)",
    description: "Google Ads verileri için Customer ID, MCC ve OAuth bilgileri.",
    fields: [
      { label: "Customer ID", placeholder: "1234567890" },
      { label: "MCC ID", placeholder: "9876543210" },
      { label: "Developer Token", placeholder: "Developer token" },
      { label: "Refresh Token", placeholder: "Uzun süreli token" }
    ],
    steps: googleConnectionSteps.slice(0, 3),
    title: "Google"
  },
  {
    accent: "var(--channel-tiktok)",
    description: "TikTok Ads için Business App, reklamveren hesabı ve ortam seçimi.",
    fields: [
      { label: "Advertiser ID", placeholder: "TikTok advertiser ID" },
      { label: "Business Center ID", placeholder: "Business center ID" },
      { label: "App ID", placeholder: "TikTok app ID" },
      { label: "Ortam", placeholder: "Sandbox / Production" }
    ],
    steps: tikTokConnectionSteps.slice(0, 3),
    title: "TikTok"
  },
  {
    accent: "var(--channel-funnel)",
    description: "Landing page, pixel/event ve webhook akışı için takip standardı.",
    fields: [
      { label: "Funnel URL", placeholder: "https://firma.com/landing", type: "url" },
      { label: "Pixel ID", placeholder: "px_firma_001" },
      { label: "Webhook URL", placeholder: "https://...", type: "url" },
      { label: "Event adı", placeholder: "Qualified Lead" }
    ],
    steps: funnelConnectionSteps.slice(0, 3),
    title: "Funnel"
  },
  {
    accent: "var(--channel-mail)",
    description: "Gönderen kimliği, provider ve domain doğrulama tercihleri.",
    fields: [
      { label: "Provider", placeholder: "Gmail OAuth / Resend / SMTP" },
      { label: "Gönderen mail", placeholder: "hello@firma.com", type: "email" },
      { label: "Domain", placeholder: "firma.com" },
      { label: "API Key", placeholder: "re_... veya client ID" }
    ],
    steps: mailConnectionSteps.slice(0, 3),
    title: "Mail"
  },
  {
    accent: "var(--channel-social)",
    description: "Organik sosyal medya profilleri ve raporlama bağlantıları.",
    fields: [
      { label: "Instagram", placeholder: "https://instagram.com/firma", type: "url" },
      { label: "TikTok profil", placeholder: "https://tiktok.com/@firma", type: "url" },
      { label: "LinkedIn", placeholder: "https://linkedin.com/company/firma", type: "url" },
      { label: "Rapor tokenı", placeholder: "Opsiyonel token" }
    ],
    steps: ["Profil URL'leri standartlaşır", "Erişim tokenları izlenir", "Haftalık rapor akışı doğrulanır"],
    title: "Sosyal Medya"
  }
];

function SettingsField({ icon, label, placeholder, type = "text" }: FieldProps) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
        {icon}
        {label}
      </span>
      <input className={inputClass} placeholder={placeholder} type={type} />
    </label>
  );
}

function ConnectionCard({ item }: { item: ConnectionItem }) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-[var(--shadow-sm)]">
      <div className="border-b border-[var(--border)] bg-[linear-gradient(145deg,var(--bg-card),var(--bg-card-soft))] p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-[16px] text-white shadow-[0_12px_24px_oklch(0.18_0.018_80_/_0.10)]" style={{ background: item.accent }}>
              <Link2 aria-hidden="true" className="size-4" strokeWidth={2.4} />
            </span>
            <div>
              <h3 className="text-base font-black text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-1 text-xs font-semibold leading-5 text-[var(--text-muted)]">{item.description}</p>
            </div>
          </div>
          <StatusBadge status="Bekliyor" tone="warning" />
        </div>
      </div>
      <div className="grid gap-5 p-5 xl:grid-cols-[1fr_240px]">
        <div className="grid gap-4 sm:grid-cols-2">
          {item.fields.map((field) => (
            <SettingsField key={`${item.title}-${field.label}`} {...field} />
          ))}
        </div>
        <div className="rounded-[18px] border border-[var(--border)] bg-[var(--bg-card-soft)] p-4">
          <p className="text-xs font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">Kontrol listesi</p>
          <div className="mt-3 grid gap-2.5">
            {item.steps.map((step) => (
              <div className="flex items-start gap-2.5 text-xs font-semibold leading-5 text-[var(--text-secondary)]" key={step}>
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-light)] text-[var(--accent)]">
                  <Check aria-hidden="true" className="size-3" strokeWidth={3} />
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function SettingsView({ onCurrencyChange, onToggleService, scope, selectedCurrency, selectedServices }: SettingsViewProps) {
  const copy = scopeCopy[scope];

  return (
    <div className="grid gap-6">
      <section className="relative overflow-hidden rounded-[30px] border border-[oklch(1_0_0_/_0.10)] bg-[linear-gradient(145deg,oklch(0.20_0.018_80),oklch(0.13_0.014_80)_62%,oklch(0.25_0.040_32))] p-6 text-white shadow-[var(--shadow-lg)]">
        <div className="pointer-events-none absolute -right-24 -top-28 size-72 rounded-full bg-[var(--accent)] opacity-24 blur-[90px]" />
        <div className="relative z-10 grid gap-6 xl:grid-cols-[1fr_420px] xl:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black text-white/70">
              <ShieldCheck aria-hidden="true" className="size-3.5" strokeWidth={2.4} />
              {copy.badge}
            </div>
            <h1 className="mt-4 text-[26px] font-black tracking-tight">{copy.title}</h1>
            <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-white/60">{copy.description}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: copy.primaryMetricLabel, value: copy.primaryMetricValue },
              { label: copy.secondaryMetricLabel, value: copy.secondaryMetricValue },
              { label: "Para birimi", value: selectedCurrency }
            ].map((metric) => (
              <div className="rounded-[20px] border border-white/10 bg-white/10 px-4 py-3 backdrop-blur" key={metric.label}>
                <p className="text-[11px] font-black uppercase tracking-[0.08em] text-white/42">{metric.label}</p>
                <p className="mt-2 truncate text-lg font-black text-white"><ValueText value={metric.value} /></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)]">
        <article className="rounded-[26px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)]">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-[var(--accent)]">
                <Building2 aria-hidden="true" className="size-4" strokeWidth={2.4} />
                Profil
              </div>
              <h2 className="mt-2 text-xl font-black text-[var(--text-primary)]">{scope === "agency" ? "Ajans bilgileri" : "Müşteri bilgileri"}</h2>
              <p className="mt-1 text-sm font-semibold leading-6 text-[var(--text-muted)]">Karar ekranlarında görünen temel kayıt ve sözleşme bilgileri.</p>
            </div>
            <StatusBadge status="Taslak" tone="neutral" />
          </div>

          <div className="mb-5 rounded-[22px] border border-[var(--border)] bg-[linear-gradient(145deg,var(--bg-card),var(--bg-card-soft))] p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-[20px] border border-[color-mix(in_oklch,var(--accent)_22%,white)] bg-white text-[var(--accent)] shadow-[0_10px_24px_oklch(0.18_0.018_80_/_0.05)]">
                  <ImagePlus aria-hidden="true" className="size-6" strokeWidth={2.3} />
                </span>
                <div>
                  <p className="text-sm font-black text-[var(--text-primary)]">
                    {scope === "agency" ? "Ajans logosu" : "Müşteri logosu"}
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-[var(--text-muted)]">
                    Kare PNG veya SVG logo yüklemek için alan.
                  </p>
                </div>
              </div>
              <label className="inline-flex h-10 cursor-pointer items-center justify-center rounded-[14px] border border-[var(--border)] bg-white px-4 text-sm font-black text-[var(--text-primary)] transition-colors hover:border-[var(--accent-mid)] hover:text-[var(--accent)]">
                Logo seç
                <input accept="image/png,image/jpeg,image/svg+xml,image/webp" className="sr-only" type="file" />
              </label>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <SettingsField icon={<UserRound aria-hidden="true" className="size-3.5" />} label={scope === "agency" ? "Ajans adı" : "Müşteri adı"} placeholder={scope === "agency" ? "Piaq Ajans" : "A Firma"} />
            <SettingsField icon={<Phone aria-hidden="true" className="size-3.5" />} label="Telefon" placeholder="+90 5xx xxx xx xx" type="tel" />
            <SettingsField icon={<Mail aria-hidden="true" className="size-3.5" />} label="Mail" placeholder="mail@firma.com" type="email" />
            <SettingsField icon={<Globe2 aria-hidden="true" className="size-3.5" />} label="Web site" placeholder="https://firma.com" type="url" />
            <SettingsField label={scope === "agency" ? "Kuruluş / başlangıç" : "Sözleşme tarihi"} placeholder="" type="date" />

            <label className="block">
              <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.08em] text-[var(--text-muted)]">
                <CircleDollarSign aria-hidden="true" className="size-3.5" />
                {scope === "agency" ? "Aylık hedef" : "Sözleşme ücreti"}
              </span>
              <div className="mt-2 flex h-11 overflow-hidden rounded-[14px] border border-[var(--border)] bg-white transition-colors focus-within:border-[var(--accent)]">
                <input className="min-w-0 flex-1 bg-white px-3.5 text-[13px] font-semibold text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]" placeholder="0" type="number" />
                <select className="border-l border-[var(--border)] bg-[var(--bg-card-soft)] px-3 text-[12px] font-black text-[var(--text-primary)] outline-none" onChange={(event) => onCurrencyChange(event.target.value as Currency)} value={selectedCurrency}>
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </label>
          </div>
        </article>

        <article className="rounded-[26px] border border-[var(--border)] bg-[linear-gradient(160deg,var(--bg-card),var(--bg-card-soft))] p-5 shadow-[var(--shadow-sm)]">
          <div className="flex items-start gap-3">
            <span className="flex size-11 items-center justify-center rounded-[16px] bg-[var(--text-primary)] text-white">
              <WalletCards aria-hidden="true" className="size-4.5" strokeWidth={2.4} />
            </span>
            <div>
              <h2 className="text-xl font-black text-[var(--text-primary)]">Hizmet kapsamı</h2>
              <p className="mt-1 text-sm font-semibold leading-6 text-[var(--text-muted)]">Aktif edilen alanlar rapor, bağlantı ve görev akışını belirler.</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {services.map((service) => {
              const isSelected = selectedServices.includes(service);

              return (
                <button
                  className={`rounded-full border px-4 py-2 text-sm font-black transition-colors ${
                    isSelected
                      ? "border-[var(--text-primary)] bg-[var(--text-primary)] text-white shadow-[0_10px_22px_oklch(0.18_0.018_80_/_0.16)]"
                      : "border-[var(--border)] bg-white text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                  }`}
                  key={service}
                  onClick={() => onToggleService(service)}
                  type="button"
                >
                  {service}
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid gap-3">
            {[
              { icon: SlidersHorizontal, label: "Rapor standardı", value: "Haftalık karar özeti" },
              { icon: Bell, label: "Bildirim", value: "Risk ve paket uyarıları" },
              { icon: DatabaseZap, label: "Sync", value: "Saatlik veri kontrolü" }
            ].map((item) => (
              <div className="flex items-center justify-between gap-3 rounded-[18px] border border-[var(--border)] bg-white px-4 py-3" key={item.label}>
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-[14px] bg-[var(--accent-light)] text-[var(--accent)]">
                    <item.icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-black text-[var(--text-primary)]">{item.label}</p>
                    <p className="truncate text-xs font-semibold text-[var(--text-muted)]"><ValueText value={item.value} /></p>
                  </div>
                </div>
                <ChevronRight aria-hidden="true" className="size-4 shrink-0 text-[var(--text-muted)]" strokeWidth={2.4} />
              </div>
            ))}
          </div>
        </article>
      </section>

      <section>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3 px-1">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-[var(--accent)]">
              <KeyRound aria-hidden="true" className="size-4" strokeWidth={2.4} />
              Bağlantılar
            </div>
            <h2 className="mt-2 text-xl font-black text-[var(--text-primary)]">Platform erişimleri</h2>
          </div>
          <button className="rounded-[14px] bg-[var(--accent)] px-4 py-2 text-sm font-black text-white shadow-[0_12px_26px_oklch(0.64_0.18_32_/_0.22)] transition-colors hover:bg-[var(--accent-hover)]" type="button">
            Değişiklikleri kaydet
          </button>
        </div>

        <div className="grid gap-4 2xl:grid-cols-2">
          {connectionItems.map((item) => (
            <ConnectionCard item={item} key={item.title} />
          ))}
        </div>
      </section>
    </div>
  );
}
