# Graph Report - piaq  (2026-05-24)

## Corpus Check
- 139 files · ~133,024 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1761 nodes · 2209 edges · 54 communities (48 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `96d23ef3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]

## God Nodes (most connected - your core abstractions)
1. `StatusBadge()` - 24 edges
2. `ValueText()` - 20 edges
3. `ProductTone` - 17 edges
4. `getTintClassName()` - 17 edges
5. `compilerOptions` - 16 edges
6. `Guncel Sayfa ve Route Yapisi` - 16 edges
7. `SectionTitle()` - 14 edges
8. `Piaq - Dijital Ajans Yonetim Platformu` - 14 edges
9. `/graphify` - 14 edges
10. `What You Must Do When Invoked` - 14 edges

## Surprising Connections (you probably didn't know these)
- `PlatformBadge()` --calls--> `getChannelBadgeClass()`  [EXTRACTED]
  app/musteriler/page.tsx → lib/data/channels.ts
- `AppNavigation()` --calls--> `getDashboardTimeRange()`  [EXTRACTED]
  components/AppNavigation.tsx → lib/data/dashboard.ts
- `getCustomerServiceClass()` --calls--> `getChannelBadgeClass()`  [EXTRACTED]
  app/musteriler/[slug]/components.tsx → lib/data/channels.ts
- `DashboardPageClient()` --calls--> `getDashboardTimeRange()`  [EXTRACTED]
  app/_components/dashboard/DashboardPageClient.tsx → lib/data/dashboard.ts
- `ServiceBadge()` --calls--> `getChannelTheme()`  [EXTRACTED]
  app/_components/dashboard/DashboardSections.tsx → lib/data/channels.ts

## Communities (54 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.00
Nodes (661): │, │, │, │, │, │, │, ↓ (+653 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (35): PannableCanvasView(), PannableCanvasViewProps, initialPlanDrafts, initialPlanItems, PlanDraftCard(), PlanDraftCardProps, assigneeOptions, channelOptions (+27 more)

### Community 2 - "Community 2"
Cohesion: 0.05
Nodes (37): AdItem, AdSet, agencyMetaAdsData, Audience, Campaign, Creative, customerMetaAdsData, DecisionItem (+29 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (28): agencyGoogleAdsData, AlertItem, BudgetBidInsight, CampaignTypePerformance, ConversionInsight, customerGoogleAdsData, GoogleAdInsight, GoogleAdsData (+20 more)

### Community 4 - "Community 4"
Cohesion: 0.05
Nodes (25): TikTokTab(), TikTokTabProps, AdGroup, agencyTikTokAdsData, AudienceInsight, Badge(), Campaign, Creative (+17 more)

### Community 5 - "Community 5"
Cohesion: 0.05
Nodes (32): ComparisonTrendChart(), ComparisonTrendChartProps, ComparisonTrendPoint, SocialMediaTab(), SocialMediaTabProps, agencySocialMediaData, Competitor, ContentItem (+24 more)

### Community 6 - "Community 6"
Cohesion: 0.06
Nodes (31): agencyFunnelData, customerFunnelData, sharedPurposes, sharedReports, sharedSettings, sharedSetupSteps, sharedTemplates, AbTest (+23 more)

### Community 7 - "Community 7"
Cohesion: 0.05
Nodes (32): agencyMailMarketingData, Automation, CalendarItem, Campaign, customerMailMarketingData, FunnelStep, getToneClass(), Kpi (+24 more)

### Community 8 - "Community 8"
Cohesion: 0.05
Nodes (43): code:block10 (You are a graphify extraction subagent. Read the files liste), code:bash ($(cat graphify-out/.graphify_python) -c "), code:bash ($(cat .graphify_python) -c "), code:bash ($(cat .graphify_python) -c "), code:bash ($(cat .graphify_python) -c "), code:bash (mkdir -p graphify-out), code:bash ($(cat .graphify_python) -c "), code:bash ($(cat .graphify_python) -c ") (+35 more)

### Community 9 - "Community 9"
Cohesion: 0.06
Nodes (34): code:block1 (/graphify                                             # full), code:bash ($(cat .graphify_python) -c "), code:bash ($(cat .graphify_python) -c "), code:bash (if [ ! -f graphify-out/.graphify_extract.json ]; then), code:bash ($(cat .graphify_python) -c "), code:bash ($(cat .graphify_python) -c "), code:bash ($(cat .graphify_python) -c "), code:bash ($(cat .graphify_python) -c ") (+26 more)

### Community 10 - "Community 10"
Cohesion: 0.06
Nodes (34): Atolye, Ayarlar, code:txt (Framework:           Next.js 16.2 App Router), code:bash (npm install), code:bash (npm.cmd run type-check), code:txt (NEXT_PUBLIC_SUPABASE_URL=), Context Navigation, Dashboard (+26 more)

### Community 11 - "Community 11"
Cohesion: 0.09
Nodes (14): DepartmentConfig, departmentConfigs, EditorialEkipDepartmentPage(), EditorialMemberCard(), EditorialMetricCard(), EditorialTaskCard(), EkipDepartment, EkipDepartmentPage() (+6 more)

### Community 12 - "Community 12"
Cohesion: 0.06
Nodes (31): dependencies, class-variance-authority, clsx, framer-motion, lucide-react, next, @radix-ui/react-slot, @radix-ui/react-tooltip (+23 more)

### Community 13 - "Community 13"
Cohesion: 0.08
Nodes (24): customerAlerts, customerBudgetUsage, customerChannelRoas, customerFunnelSteps, customerGeneralInfoCards, customerInvestmentControls, customerJourneyMap, customerPulseCards (+16 more)

### Community 14 - "Community 14"
Cohesion: 0.13
Nodes (18): AppShell(), archivo, dmSans, geist, metadata, sora, AppNavigation(), getWorkspaceById() (+10 more)

### Community 15 - "Community 15"
Cohesion: 0.11
Nodes (16): ConnectionItem, connectionItems, FieldProps, scopeCopy, SettingsScope, SettingsView(), SettingsViewProps, currencies (+8 more)

### Community 16 - "Community 16"
Cohesion: 0.13
Nodes (14): PageProps, BOLUMLER, MOCK_DOKUMANLAR, MOCK_KLASORLER, PageProps, PageProps, cn(), Bolum (+6 more)

### Community 17 - "Community 17"
Cohesion: 0.06
Nodes (41): ValueText(), DashboardPageClient(), card, ChannelSparkline(), formatCurrencyValue(), getSpendDistribution(), getToneStyle(), numericText (+33 more)

### Community 18 - "Community 18"
Cohesion: 0.10
Nodes (18): ChannelRow, channels, CustomerHealth, customers, DecisionItem, decisions, finance, FinanceItem (+10 more)

### Community 19 - "Community 19"
Cohesion: 0.14
Nodes (19): cx(), DecisionSummary(), DecisionSummaryProps, getToneClassName(), KpiCard(), KpiCardProps, MetricTile(), MetricTileProps (+11 more)

### Community 20 - "Community 20"
Cohesion: 0.14
Nodes (8): AgencyTabs, AtolyeTabs, BrandLogoName, brandLogos, getBrandLogo(), GoogleLogoMono(), MetaLogoMono(), TikTokLogoMono()

### Community 21 - "Community 21"
Cohesion: 0.10
Nodes (14): agencyMailData, agencySocialData, agencyTikTokData, ChannelDashboardData, ChannelKind, customerMailData, customerSocialData, customerTikTokData (+6 more)

### Community 22 - "Community 22"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 23 - "Community 23"
Cohesion: 0.11
Nodes (15): Automation, automations, Experiment, experiments, Idea, ideas, improvements, Kpi (+7 more)

### Community 24 - "Community 24"
Cohesion: 0.11
Nodes (15): Automation, automations, Employee, employees, hiring, HiringColumn, Kpi, kpis (+7 more)

### Community 25 - "Community 25"
Cohesion: 0.11
Nodes (15): Automation, automations, deliveries, Delivery, kanban, KanbanColumn, Kpi, kpis (+7 more)

### Community 26 - "Community 26"
Cohesion: 0.11
Nodes (16): getTintClassName(), MoneyLine(), AdItem, ads, Automation, automations, Campaign, campaigns (+8 more)

### Community 27 - "Community 27"
Cohesion: 0.11
Nodes (15): Automation, automations, Decision, decisions, DepartmentHealth, health, Kpi, kpis (+7 more)

### Community 28 - "Community 28"
Cohesion: 0.19
Nodes (12): CrmPageClient(), CrmSegment(), activityItems, getColumnMetric(), getOpportunityLabel(), mockKesifKartlari, pipelineColumns, getInstagramHandle() (+4 more)

### Community 29 - "Community 29"
Cohesion: 0.11
Nodes (15): Automation, automations, Budget, budgets, cashFlow, CashFlowItem, Expense, expenses (+7 more)

### Community 30 - "Community 30"
Cohesion: 0.10
Nodes (19): customerAccountSignals, customerChannelPortfolio, customerFunnelSnapshot, ChannelRow, channels, DecisionItem, decisions, finance (+11 more)

### Community 31 - "Community 31"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 32 - "Community 32"
Cohesion: 0.12
Nodes (13): Automation, automations, Kpi, kpis, Lead, leads, Meeting, meetings (+5 more)

### Community 33 - "Community 33"
Cohesion: 0.13
Nodes (14): isActive(), mainItems, NavEntry, NavIcon, NavItem, NavLink(), NavSeparator, NotificationCenterButton() (+6 more)

### Community 34 - "Community 34"
Cohesion: 0.20
Nodes (9): Agent Runbook, Genel Is Akisi, GitHub Ilk Push Sorunlari, GitHub Ilk Push Sureci, Graphify Hook Kurulumu, Graphify Kurulum ve Dogrulama, Kullanim Kurallari, Runbook Guncelleme Kriteri (+1 more)

### Community 35 - "Community 35"
Cohesion: 0.14
Nodes (4): getMetricClass(), parseMetricValue(), signalLabels, signalStyles

### Community 36 - "Community 36"
Cohesion: 0.28
Nodes (5): BoxArchiveIcon(), DepartmentOrgIcon(), iconMap, karaKutuItems, KaraKutuNav()

### Community 37 - "Community 37"
Cohesion: 0.18
Nodes (12): CustomerDetailTab, customerProfiles, CustomerSlug, tabs, GeneralTab(), CustomerTabIcon, customerTabIcons, getCustomerProfileFromSlug() (+4 more)

### Community 39 - "Community 39"
Cohesion: 0.15
Nodes (7): DepartmentTabs, EkipTabs, CollapsibleSectionNav(), CollapsibleSectionNavProps, SectionNavIcon, SectionNavItem, sectionNavSubscribers

### Community 41 - "Community 41"
Cohesion: 0.22
Nodes (6): audiences, Feature, features, heroMetrics, Metric, workflows

### Community 42 - "Community 42"
Cohesion: 0.22
Nodes (8): Ana Brand Renkleri, Kanal Renkleri, Layout Prensipleri, Piaq Mobil Uygulama Brand Sistem, Renk Paleti (OKLch Formatında), Status Renkleri, Tipografi, Veri Görselleştirme Kuralları

### Community 43 - "Community 43"
Cohesion: 0.29
Nodes (6): Brand, Channels, Neutrals, PIAQ Color Catalog, Rules, Status

## Knowledge Gaps
- **1218 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+1213 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ValueText()` connect `Community 17` to `Community 32`, `Community 2`, `Community 3`, `Community 4`, `Community 5`, `Community 6`, `Community 7`, `Community 41`, `Community 15`, `Community 19`, `Community 21`, `Community 23`, `Community 24`, `Community 25`, `Community 26`, `Community 27`, `Community 29`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `StatusBadge()` connect `Community 19` to `Community 32`, `Community 1`, `Community 11`, `Community 15`, `Community 17`, `Community 18`, `Community 23`, `Community 24`, `Community 25`, `Community 26`, `Community 27`, `Community 29`, `Community 30`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `ProductTone` connect `Community 19` to `Community 32`, `Community 1`, `Community 11`, `Community 17`, `Community 18`, `Community 23`, `Community 24`, `Community 25`, `Community 26`, `Community 27`, `Community 29`, `Community 30`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _1218 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.0030211480362537764 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.0632996632996633 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.0467687074829932 - nodes in this community are weakly interconnected._