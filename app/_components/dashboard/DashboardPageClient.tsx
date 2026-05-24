"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AlertTriangle, ArrowUpRight, CalendarCheck, Check, CreditCard, FileText, Filter, Mail, MessageSquareText, ShieldAlert } from "lucide-react";
import { SectionTitle as ProductSectionTitle, StatusBadge, ValueText, getTintClassName, type ProductTone } from "@/app/_components/common";
import { getBrandLogo } from "@/components/icons/BrandIcons";
import { acquisitionStats, attentionItems, customerRows, getDashboardTimeRange, pipelineStages, rangeData, upcomingTasks, type AlertItem, type ChannelSummary, type UpcomingTask } from "@/lib/data/dashboard";
import { ChannelSparkline, ServiceBadge, SpendDistributionSection, StatCard, TrendChart, card, formatCurrencyValue, getSpendDistribution, getToneStyle, numericText, sectionTitle } from "./DashboardSections";

function getChannelDecision(channel: ChannelSummary) {
  if (channel.change.startsWith("-")) {
    return {
      label: "Risk",
      text: channel.name === "TikTok" ? "Kreatif seti ve hedef kitle yenilenmeli" : "Performans düşüşü kontrol edilmeli",
      tone: "danger" as ProductTone
    };
  }

  if (Number(channel.roas.replace(",", ".").replace("x", "")) >= 4) {
    return {
      label: "Fırsat",
      text: "Bütçe artırımı test edilebilir",
      tone: "good" as ProductTone
    };
  }

  return {
    label: "Aksiyon",
    text: "Kanal temposu korunmalı",
    tone: "accent" as ProductTone
  };
}

function getAttentionAction(item: AlertItem) {
  if (item.title.includes("TikTok")) return "Kreatif, bütçe ve hedef kitle setini bugün kontrol et";
  if (item.title.includes("Google")) return "Senkron ve rapor veri tazeliğini kontrol et";
  if (item.title.includes("teklif")) return "Teklif revizyonunu CRM içinde kapat";

  return "Sorumlu kişiye takip notu düş";
}

export function DashboardPageClient() {
  const searchParams = useSearchParams();
  const selectedRange = getDashboardTimeRange(searchParams.get("range"));
  const chartData = rangeData[selectedRange];
  const summaryData = rangeData[selectedRange];
  const advertisingData = rangeData[selectedRange];
  const spendData = rangeData[selectedRange];
  const visibleChannels = advertisingData.channels;
  const summarySpendDistribution = getSpendDistribution(summaryData.channels);
  const summaryStats = summaryData.stats.map((item) => (
    item.label === "Toplam Harcama"
      ? {
          ...item,
          value: formatCurrencyValue(summarySpendDistribution.total)
        }
      : item
  ));
  const spendDistribution = getSpendDistribution(spendData.channels);

  function getUpcomingTaskStyle(type: UpcomingTask["type"]) {
    const styles = {
      meeting: { bg: "oklch(0.94 0.030 245)", color: "oklch(0.36 0.06 245)", icon: CalendarCheck, label: "Toplantı" },
      payment: { bg: "oklch(0.94 0.045 155)", color: "oklch(0.30 0.06 155)", icon: CreditCard, label: "Yenileme" },
      proposal: { bg: "color-mix(in oklch, var(--accent) 15%, white)", color: "oklch(0.30 0.08 32)", icon: MessageSquareText, label: "Teklif" },
      report: { bg: "oklch(0.94 0.030 32)", color: "oklch(0.34 0.055 32)", icon: FileText, label: "Rapor" }
    } satisfies Record<UpcomingTask["type"], { bg: string; color: string; icon: typeof FileText; label: string }>;

    return styles[type];
  }
  return (
    <main className="min-h-[calc(100vh-80px)] px-5 py-6 font-[var(--font-editorial)] md:px-8 xl:px-[42px] xl:py-[34px]">
      <div className="mb-[22px] grid gap-[22px] 2xl:grid-cols-[minmax(0,1.65fr)_minmax(360px,0.85fr)]">
        <section
          style={{
            ...card,
            borderRadius: 32,
            boxShadow: "0 1px 0 rgb(255 255 255 / 0.95), 0 32px 78px rgb(14 14 14 / 0.12)",
            padding: 28
          }}
        >
          <div className="mb-[22px] flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-black/42">Dashboard / Performans</p>
              <h3 style={{ ...sectionTitle, fontSize: 34, lineHeight: 0.95, marginTop: 4 }}>Ajans Haftalık Performansı</h3>
              <p style={{ marginTop: 4, color: "rgb(0 0 0 / 0.50)", fontSize: 13, fontWeight: 700 }}>{chartData.subtitle}</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-[24px] bg-black/10 p-2 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.75),0_18px_36px_rgb(16_16_16_/_0.13)]">
              {summaryStats.slice(0, 4).map((item) => (
                <span
                  className="flex size-11 items-center justify-center rounded-[16px] bg-white text-[11px] font-black text-black shadow-[0_1px_0_rgb(255_255_255_/_0.95),0_10px_20px_rgb(16_16_16_/_0.12)]"
                  key={`dashboard-dock-${item.label}`}
                  title={item.label}
                >
                  {item.label.slice(0, 2).toUpperCase()}
                </span>
              ))}
            </div>
          </div>
          <TrendChart data={chartData.trend} />
          <div className="mt-4 flex flex-wrap items-center gap-[18px]">
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: 99, background: "var(--accent)" }} />
              <span style={{ fontSize: 12, color: "rgb(0 0 0 / 0.48)", fontWeight: 800 }}>Reklam/Pazarlama Harcaması</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: 99, background: "var(--accent-green)" }} />
              <span style={{ fontSize: 12, color: "rgb(0 0 0 / 0.48)", fontWeight: 800 }}>Toplam Getiri</span>
            </div>
          </div>
        </section>

        <section className="grid gap-3.5 sm:grid-cols-2">
          {summaryStats.map((item) => (
            <StatCard item={item} key={item.label} />
          ))}
        </section>
      </div>

      <section style={{ ...card, padding: "24px 26px", marginBottom: 22 }}>
        <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 style={sectionTitle}>Ajans Reklam Performansı</h3>
            <p style={{ color: "rgb(0 0 0 / 0.50)", fontSize: 12, fontWeight: 700, marginTop: 5 }}>Ajans kanalları özeti</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge status="Meta / Google büyüt" tone="good" />
            <StatusBadge status="TikTok takip" tone="danger" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
          {visibleChannels.map((channel) => {
            const BrandIcon = getBrandLogo(channel.name);
            const UtilityIcon = channel.name === "Mail" ? Mail : channel.name === "Funnel" ? Filter : undefined;
            const Icon = BrandIcon ?? UtilityIcon;
            const decision = getChannelDecision(channel);

            return (
            <article key={channel.name} style={{ backgroundColor: "white", backgroundImage: "radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.060) 1px, transparent 0)", backgroundSize: "18px 18px", border: "1px solid rgb(0 0 0 / 0.13)", borderRadius: 24, boxShadow: "0 1px 0 rgb(255 255 255 / 0.94), 0 20px 44px rgb(14 14 14 / 0.085)", display: "flex", flexDirection: "column", padding: 18 }}>
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span style={{ width: 46, height: 46, borderRadius: 17, background: "white", boxShadow: "0 1px 0 rgb(255 255 255 / 0.95), 0 12px 24px rgb(14 14 14 / 0.14)", color: channel.color, border: "1px solid rgb(0 0 0 / 0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 950 }}>
                    {Icon ? (
                      <Icon aria-hidden="true" height={22} strokeWidth={2.2} width={22} />
                    ) : (
                      channel.name.slice(0, 1)
                    )}
                  </span>
                  <div>
                    <h4 style={{ color: "black", fontSize: 17, fontWeight: 950 }}>{channel.name}</h4>
                    <p style={{ color: "rgb(0 0 0 / 0.48)", fontSize: 12, fontWeight: 700 }}>Kanal özeti</p>
                  </div>
                </div>
                <span style={{ background: channel.change.startsWith("-") ? "color-mix(in oklch, var(--accent) 20%, white)" : "oklch(0.94 0.045 155)", color: channel.change.startsWith("-") ? "oklch(0.30 0.08 32)" : "oklch(0.30 0.06 155)", border: "1px solid color-mix(in oklch, currentColor 16%, transparent)", borderRadius: 14, padding: "5px 9px", fontSize: 11, fontWeight: 900, ...numericText }}>
                  {channel.change}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Harcama", channel.spend],
                  ["Dönüşüm", channel.conversions],
                  ["ROAS", channel.roas]
                ].map(([label, value]) => (
                  <div key={label}>
                    <p style={{ color: "rgb(0 0 0 / 0.45)", fontSize: 11, fontWeight: 800 }}>{label}</p>
                    <p style={{ color: "black", fontFamily: "var(--font-editorial)", fontSize: 24, fontWeight: 950, lineHeight: 1, marginTop: 5 }}><ValueText value={value} /></p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <ChannelSparkline color={channel.color} points={channel.points} />
              </div>
              <div className={`mt-4 rounded-[16px] border px-3 py-2 ${getTintClassName(decision.tone)}`}>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-black uppercase tracking-[0.08em] text-black/42">{decision.label}</span>
                  <StatusBadge status={channel.change} tone={decision.tone} />
                </div>
                <p className="mt-2 text-xs font-bold leading-5 text-black/56">{decision.text}</p>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      <SpendDistributionSection
        items={spendDistribution.items}
        total={spendDistribution.total}
      />

      <div className="mb-[22px] grid items-stretch gap-[22px] xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
        <section
          className="dashboard-acquisition-card"
          style={{
            ...card,
            backgroundImage: "radial-gradient(circle at 88% 8%, color-mix(in oklch, #f2523a 22%, transparent), transparent 34%), linear-gradient(145deg, oklch(0.16 0.018 80), oklch(0.11 0.014 78) 62%, oklch(0.18 0.035 34))",
            backgroundSize: "auto",
            border: "1px solid oklch(1 0 0 / 0.10)",
            boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.08), 0 28px 62px oklch(0.18 0.018 80 / 0.16)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            minHeight: 0,
            padding: "26px 28px"
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 20 }}>
            <div>
              <h3 style={{ color: "white", fontSize: 20, fontWeight: 900, letterSpacing: 0 }}>Müşteri Kazanma & Kaybetme</h3>
              <p style={{ color: "oklch(0.86 0.020 86 / 0.74)", fontSize: 12, fontWeight: 700, marginTop: 6 }}>Satış pipeline akışı, kapanış riski ve bugünkü karar dönüşümleri</p>
            </div>
            <Link href="/musteriler/crm" style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "#ff8a78", fontSize: 12, fontWeight: 900 }}>
              CRM Pipeline
              <ArrowUpRight aria-hidden="true" size={13} strokeWidth={2.4} />
            </Link>
          </div>
          <div className="dashboard-dark-scroll" style={{ display: "flex", flex: 1, minHeight: 0, overflowY: "auto", paddingRight: 8 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, justifyContent: "center", minHeight: "100%", width: "100%" }}>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {acquisitionStats.map((item) => {
              const borderColor = "#f2523a";

              return (
                <article
                  key={item.label}
                  style={{
                    background: `linear-gradient(145deg, color-mix(in oklch, ${borderColor} 10%, oklch(0.20 0.018 78)), oklch(0.18 0.016 78) 66%, oklch(0.15 0.014 78))`,
                    border: `1px solid color-mix(in oklch, ${borderColor} 52%, oklch(1 0 0 / 0.16))`,
                    borderRadius: 20,
                    boxShadow: `inset 0 1px 0 oklch(1 0 0 / 0.08), 0 16px 32px color-mix(in oklch, ${borderColor} 18%, transparent)`,
                    padding: 16
                  }}
                >
                  <p style={{ color: "oklch(0.78 0.020 86)", fontSize: 11, fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase" }}>{item.label}</p>
                  <p style={{ color: "white", fontSize: 34, fontWeight: 950, lineHeight: 1, marginTop: 12, textShadow: `0 10px 26px color-mix(in oklch, ${borderColor} 24%, transparent)`, ...numericText }}><ValueText value={item.value} /></p>
                  <p style={{ color: "oklch(0.82 0.018 86 / 0.72)", fontSize: 12, fontWeight: 700, marginTop: 12 }}>{item.note}</p>
                </article>
              );
            })}
          </div>
          <div className="grid gap-3">
            <div className="grid items-center gap-3 sm:grid-cols-[110px_minmax(0,1fr)_84px_72px]">
              <span />
              <span />
              <span style={{ color: "oklch(0.78 0.020 86 / 0.72)", fontSize: 11, fontWeight: 900, letterSpacing: "0.05em", textAlign: "right", textTransform: "uppercase" }}>Kişi</span>
              <span style={{ color: "oklch(0.78 0.020 86 / 0.72)", fontSize: 11, fontWeight: 900, letterSpacing: "0.05em", textAlign: "right", textTransform: "uppercase" }}>Dönüşüm</span>
            </div>
            {pipelineStages.map((stage) => (
              <div key={stage.name} className="grid items-center gap-3 sm:grid-cols-[110px_minmax(0,1fr)_84px_72px]">
                <span style={{ color: "white", fontSize: 13, fontWeight: 900 }}>{stage.name}</span>
                <div style={{ height: 10, borderRadius: 99, background: "oklch(1 0 0 / 0.14)", boxShadow: "inset 0 1px 2px oklch(0 0 0 / 0.30)", overflow: "hidden" }}>
                  <div
                    style={{
                      background: `linear-gradient(90deg, color-mix(in oklch, ${stage.color} 92%, black), ${stage.color} 64%, color-mix(in oklch, ${stage.color} 72%, white))`,
                      borderRadius: 99,
                      boxShadow: `0 0 0 1px color-mix(in oklch, ${stage.color} 18%, transparent), 0 6px 16px color-mix(in oklch, ${stage.color} 16%, transparent)`,
                      height: "100%",
                      width: `${stage.percent ?? 20}%`
                    }}
                  />
                </div>
                <span style={{ color: "white", fontSize: 13, fontWeight: 950, textAlign: "right", ...numericText }}>{stage.value}</span>
                <span style={{ color: stage.percent === undefined ? "oklch(0.78 0.020 86 / 0.72)" : stage.color, fontSize: 13, fontWeight: 950, textAlign: "right", ...numericText }}>
                  {stage.percent === undefined ? "—" : `%${stage.percent}`}
                </span>
              </div>
            ))}
          </div>
          </div>
          </div>
        </section>

        <section style={{ ...card, padding: "24px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 18 }}>
            <ProductSectionTitle
              description="Öncelikli riskler, veri tazeliği ve müşteri takipleri aksiyona dönüşecek şekilde sıralandı."
              kicker="Bugünkü aksiyonlar"
              title="Dikkat edilmesi gerekenler"
            />
            <span style={{ alignItems: "center", background: "black", border: "1px solid black", borderRadius: 14, color: "white", display: "flex", fontSize: 13, fontWeight: 950, height: 34, justifyContent: "center", minWidth: 34, padding: "0 10px", ...numericText }}>{attentionItems.length}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {attentionItems.map((item) => {
              const isCritical = item.level === "critical";
              const Icon = isCritical ? ShieldAlert : AlertTriangle;
              const accentColor = isCritical ? "oklch(0.30 0.08 32)" : "oklch(0.34 0.055 32)";
              const accentBg = isCritical ? "color-mix(in oklch, var(--accent) 20%, white)" : "oklch(0.94 0.030 32)";
              const label = isCritical ? "Kritik" : "Dikkat";

              return (
                <Link key={item.title} href={item.href} style={{ alignItems: "flex-start", background: "white", border: "1px solid rgb(0 0 0 / 0.10)", borderRadius: 18, boxShadow: "0 1px 0 rgb(255 255 255 / 0.92), 0 12px 26px rgb(14 14 14 / 0.055)", color: "inherit", display: "grid", gap: 11, gridTemplateColumns: "30px minmax(0,1fr)", padding: "13px 14px" }}>
                  <span style={{ alignItems: "center", background: accentBg, border: `1px solid color-mix(in oklch, ${accentColor} 24%, var(--border))`, borderRadius: 12, color: accentColor, display: "flex", height: 30, justifyContent: "center", marginTop: 1, width: 30 }}>
                    <Icon aria-hidden="true" size={15} strokeWidth={2.5} />
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ alignItems: "center", display: "flex", gap: 8, justifyContent: "space-between" }}>
                      <span style={{ color: "black", fontSize: 13, fontWeight: 950, lineHeight: 1.25 }}>{item.title}</span>
                      <span style={{ background: accentBg, borderRadius: 99, color: accentColor, flexShrink: 0, fontSize: 10, fontWeight: 950, padding: "4px 7px" }}>{label}</span>
                    </div>
                    <p style={{ color: "rgb(0 0 0 / 0.56)", fontSize: 12, lineHeight: 1.5, marginTop: 5, fontWeight: 650 }}>{item.description}</p>
                    <p style={{ color: "black", fontSize: 11, fontWeight: 900, lineHeight: 1.45, marginTop: 8 }}>Aksiyon: {getAttentionAction(item)}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      <div className="grid items-start gap-[22px] xl:grid-cols-[minmax(0,1.4fr)_minmax(360px,0.6fr)]">
        <section style={{ ...card, padding: "26px 28px" }}>
          <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
            <ProductSectionTitle
              description="Müşteri performansı, risk nedeni ve sonraki aksiyon aynı satırda okunur."
              kicker="Müşteri sağlığı"
              title="Risk, performans ve aksiyon tablosu"
            />
            <Link href="/musteriler" style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "var(--accent)", fontSize: 12, fontWeight: 900 }}>
              Tümünü gör
              <ArrowUpRight aria-hidden="true" size={13} strokeWidth={2.4} />
            </Link>
          </div>
          <div className="grid gap-2">
            {customerRows.map((client) => {
              const tone = getToneStyle(client.status);
              const StatusIcon = client.status === "good" ? Check : client.status === "warning" ? AlertTriangle : ShieldAlert;
              const statusLabel = client.status === "good" ? "İyi" : client.status === "warning" ? "Dikkat" : "Kritik";
              const isPositiveChange = client.weeklyChange.startsWith("+");

              return (
                <Link key={client.name} href={client.href} className="grid gap-4 lg:grid-cols-[220px_repeat(5,minmax(92px,1fr))_96px]" style={{ alignItems: "center", background: "white", border: "1px solid rgb(0 0 0 / 0.10)", borderRadius: 18, boxShadow: "0 1px 0 rgb(255 255 255 / 0.92), 0 12px 26px rgb(14 14 14 / 0.045)", color: "inherit", padding: "14px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 15, background: tone.bg, border: `1px solid ${tone.border}`, boxShadow: "0 1px 0 rgb(255 255 255 / 0.88), 0 8px 18px rgb(14 14 14 / 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: tone.color, fontSize: 12, fontWeight: 900, ...numericText }}>{client.initials}</div>
                    <div>
                      <div style={{ color: "black", fontSize: 14, fontWeight: 900 }}>{client.name}</div>
                      <div style={{ display: "flex", gap: 5, marginTop: 6 }}>{client.services.map((service) => <ServiceBadge key={`${client.name}-${service}`} service={service} />)}</div>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "rgb(0 0 0 / 0.45)", fontSize: 11, fontWeight: 800, marginBottom: 3 }}>Harcama</div>
                    <div style={{ color: "black", fontSize: 14, fontWeight: 900, ...numericText }}>{client.spend}</div>
                  </div>
                  <div>
                    <div style={{ color: "rgb(0 0 0 / 0.45)", fontSize: 11, fontWeight: 800, marginBottom: 3 }}>Kazanç</div>
                    <div style={{ color: "oklch(0.30 0.06 155)", fontSize: 14, fontWeight: 900, ...numericText }}>{client.revenue}</div>
                  </div>
                  <div>
                    <div style={{ color: "rgb(0 0 0 / 0.45)", fontSize: 11, fontWeight: 800, marginBottom: 3 }}>ROAS</div>
                    <div style={{ color: client.roasVal >= 4 ? "oklch(0.30 0.06 155)" : client.roasVal >= 3 ? "black" : "oklch(0.30 0.08 32)", fontSize: 14, fontWeight: 900, ...numericText }}>{client.roas}</div>
                  </div>
                  <div>
                    <div style={{ color: "rgb(0 0 0 / 0.45)", fontSize: 11, fontWeight: 800, marginBottom: 3 }}>Performans</div>
                    <div style={{ color: isPositiveChange ? "oklch(0.30 0.06 155)" : "oklch(0.30 0.08 32)", fontSize: 14, fontWeight: 900, ...numericText }}>{client.weeklyChange}</div>
                  </div>
                  <div>
                    <div style={{ color: "rgb(0 0 0 / 0.45)", fontSize: 11, fontWeight: 800, marginBottom: 3 }}>Sonraki Aksiyon</div>
                    <div style={{ color: "black", fontSize: 12, fontWeight: 850, lineHeight: 1.25 }}>{client.nextAction}</div>
                    <div style={{ color: "rgb(0 0 0 / 0.48)", fontSize: 11, fontWeight: 750, lineHeight: 1.25, marginTop: 4 }}>{client.riskReason}</div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div
                      style={{
                        alignItems: "center",
                        background: `linear-gradient(145deg, ${tone.bg}, white)`,
                        border: `1px solid ${tone.border}`,
                        borderRadius: 16,
                        color: tone.color,
                        display: "flex",
                        gap: 8,
                        minWidth: 92,
                        padding: "7px 9px",
                        boxShadow: "0 8px 18px rgb(14 14 14 / 0.045)"
                      }}
                    >
                      <span style={{ alignItems: "center", background: "white", border: `1px solid ${tone.border}`, borderRadius: 10, display: "flex", height: 24, justifyContent: "center", width: 24 }}>
                        <StatusIcon aria-hidden="true" size={13} strokeWidth={2.6} />
                      </span>
                      <span style={{ color: "black", fontSize: 11, fontWeight: 950 }}>{statusLabel}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section
          style={{
            ...card,
            backgroundImage: "radial-gradient(circle at 92% 10%, color-mix(in oklch, #f2523a 24%, transparent), transparent 36%), linear-gradient(145deg, oklch(0.16 0.018 80), oklch(0.11 0.014 78) 62%, oklch(0.18 0.035 34))",
            backgroundSize: "auto",
            border: "1px solid oklch(1 0 0 / 0.10)",
            boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.08), 0 28px 62px oklch(0.18 0.018 80 / 0.14)",
            color: "white",
            padding: "24px"
          }}
        >
          <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 20 }}>
            <h3 style={{ color: "white", fontSize: 20, fontWeight: 900, letterSpacing: 0 }}>Operasyon Takibi</h3>
            <Link href="/musteriler" style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "#ff8a78", fontSize: 12, fontWeight: 900 }}>
              Takvimi gör
              <ArrowUpRight aria-hidden="true" size={13} strokeWidth={2.4} />
            </Link>
          </div>

          <div>
            <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <p style={{ color: "oklch(0.82 0.018 86 / 0.72)", fontSize: 11, fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase" }}>Planlı işler</p>
              <span style={{ color: "oklch(0.82 0.018 86 / 0.72)", fontSize: 11, fontWeight: 850 }}>takip edilecek aksiyonlar</span>
            </div>
            <div style={{ display: "grid", gap: 9 }}>
              {upcomingTasks.map((task) => {
                const taskStyle = getUpcomingTaskStyle(task.type);
                const TaskIcon = taskStyle.icon;

                return (
                  <Link
                    href={task.href}
                    key={`${task.customer}-${task.title}`}
                    style={{
                      alignItems: "center",
                      background: "linear-gradient(145deg, oklch(1 0 0 / 0.075), oklch(1 0 0 / 0.035))",
                      border: "1px solid oklch(1 0 0 / 0.12)",
                      borderRadius: 16,
                      color: "white",
                      display: "grid",
                      gap: 12,
                      gridTemplateColumns: "minmax(0,1fr) auto 15px",
                      padding: "11px 12px",
                      transition: "border-color 120ms ease, transform 120ms ease"
                    }}
                  >
                    <div style={{ alignItems: "center", display: "flex", gap: 10, minWidth: 0 }}>
                      <span style={{ alignItems: "center", background: `color-mix(in oklch, ${taskStyle.color} 18%, transparent)`, border: `1px solid color-mix(in oklch, ${taskStyle.color} 48%, oklch(1 0 0 / 0.16))`, borderRadius: 12, color: taskStyle.color, display: "flex", flexShrink: 0, height: 30, justifyContent: "center", width: 30 }}>
                        <TaskIcon aria-hidden="true" size={15} strokeWidth={2.4} />
                      </span>
                      <div style={{ minWidth: 0 }}>
                        <p style={{ color: "white", fontSize: 13, fontWeight: 950 }}>{task.title}</p>
                        <p style={{ color: "oklch(0.82 0.018 86 / 0.72)", fontSize: 11, fontWeight: 750, marginTop: 4 }}>{task.customer}</p>
                      </div>
                    </div>
                    <span style={{ alignItems: "center", background: `color-mix(in oklch, ${taskStyle.color} 16%, oklch(1 0 0 / 0.08))`, border: `1px solid color-mix(in oklch, ${taskStyle.color} 48%, oklch(1 0 0 / 0.16))`, borderRadius: 99, color: taskStyle.color, display: "inline-flex", flexShrink: 0, fontSize: 11, fontWeight: 950, height: 28, justifyContent: "center", minWidth: 72, padding: "0 10px", textShadow: "0 1px 10px oklch(0 0 0 / 0.20)", whiteSpace: "nowrap" }}>
                      {task.time}
                    </span>
                    <ArrowUpRight aria-hidden="true" size={15} color="oklch(0.82 0.018 86 / 0.72)" strokeWidth={2.4} />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
