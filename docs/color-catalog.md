# PIAQ Color Catalog

PIAQ arayüzü açık, soft SaaS zemini üzerine kurulur. Ana aksan marka turuncusudur; koyu siyah tonlar sadece vurgu, aktif alt menü ve özel operasyon panellerinde kontrollü kullanılır.

## Brand

| Token | Code | Usage |
| --- | --- | --- |
| `--piaq-brand-600` | `#f0533a` | Primary CTA, sol ana menü aktif state, ana marka vurgusu |
| `--piaq-brand-700` | `#d94832` | Primary hover |
| `--piaq-brand-100` | `oklch(0.965 0.045 32)` | Soft brand background |
| `--piaq-brand-300` | `oklch(0.78 0.12 32)` | Secondary brand emphasis |
| `--piaq-brand-warm` | `#ff8a78` | Dark panel highlight text |

## Neutrals

| Token | Code | Usage |
| --- | --- | --- |
| `--piaq-surface-canvas` | `oklch(0.972 0.004 105)` | App background |
| `--piaq-surface-sidebar` | `oklch(0.985 0.006 120)` | Sidebar background |
| `--piaq-surface-card` | `#ffffff` | Cards and inputs |
| `--piaq-surface-soft` | `oklch(0.988 0.006 120)` | Soft cards and panels |
| `--piaq-ink-950` | `oklch(0.16 0.018 80)` | Primary text |
| `--piaq-ink-900` | `oklch(0.18 0.018 80)` | Dark active surfaces |
| `--piaq-ink-700` | `oklch(0.40 0.018 80)` | Secondary text |
| `--piaq-ink-500` | `oklch(0.56 0.018 90)` | Muted text |

## Status

| Token | Code | Usage |
| --- | --- | --- |
| `--piaq-success-600` | `oklch(0.56 0.15 145)` | Success, healthy, good |
| `--piaq-warning-600` | `oklch(0.72 0.15 82)` | Warning, attention |
| `--piaq-danger-600` | `oklch(0.628 0.196 25)` | Critical, error, risk |

## Channels

| Token | Code | Usage |
| --- | --- | --- |
| `--piaq-channel-meta` | `#003049` | Meta |
| `--piaq-channel-google` | `#d62828` | Google |
| `--piaq-channel-tiktok` | `#0F766E` | TikTok |
| `--piaq-channel-social` | `oklch(0.62 0.13 210)` | Social Media |
| `--piaq-channel-funnel` | `var(--piaq-success-600)` | Funnel |
| `--piaq-channel-mail` | `oklch(0.68 0.16 52)` | Mail |

## Rules

- Primary user actions use `--accent`, which maps to `--piaq-brand-600`.
- Soft backgrounds use `--bg-card-soft` or the matching `*-light` status/channel token.
- Menus should not become colorful by channel. Use brand orange for main nav active, dark ink for secondary nav active.
- Channel colors are for charts, badges, metrics, and channel-specific icons, not global navigation.
- New hardcoded colors should be avoided unless they are brand/logo-native colors.
