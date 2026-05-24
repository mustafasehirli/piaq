# Piaq Mobil Uygulama Brand Sistem

## Renk Paleti (OKLch Formatında)

### Ana Brand Renkleri
- `--bg`: oklch(0.972 0.004 105) - App background
- `--surface`: oklch(100% 0 0) - Card backgrounds
- `--fg`: oklch(0.16 0.018 80) - Primary text
- `--muted`: oklch(0.56 0.018 90) - Secondary text
- `--border`: oklch(0.86 0.018 105) - Soft borders
- `--accent`: oklch(0.64 0.18 32) - Piaq brand orange (#f0533a)

### Kanal Renkleri
- `--channel-meta`: oklch(0.20 0.08 240) - Meta (#003049)
- `--channel-google`: oklch(0.52 0.20 25) - Google (#d62828)
- `--channel-tiktok`: oklch(0.45 0.12 180) - TikTok (#0F766E)
- `--channel-social`: oklch(0.62 0.13 210) - Social Media
- `--channel-funnel`: oklch(0.56 0.15 145) - Funnel (success)
- `--channel-mail`: oklch(0.68 0.16 52) - Mail Marketing

### Status Renkleri
- `--success`: oklch(0.56 0.15 145) - Success, good performance
- `--warning`: oklch(0.72 0.15 82) - Warning, attention needed
- `--danger`: oklch(0.628 0.196 25) - Critical, error

## Tipografi
- **Display Font**: -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif
- **Body Font**: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif
- **Numeric Font**: ui-monospace, 'SF Mono', Menlo, monospace

## Layout Prensipleri
- Modern minimal yaklaşım: temiz, geometrik, system native
- Cards için 16px border-radius
- 44px minimum touch targets (iOS guidelines)
- 8px grid sistem
- Mixed layout: farklı veri tipleri için farklı görsel yaklaşımlar
- Mobile-first responsive design

## Veri Görselleştirme Kuralları
- Kanal renkleri sadece charts, badges ve metriklerde kullanılır
- Primary action için brand orange kullanılır
- Read-only interface: görselleştirme odaklı, minimal interaction
- Status colors for performance indicators
- Tabular numerics for all metrics