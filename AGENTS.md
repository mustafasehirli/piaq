# Piaq - Dijital Ajans Yonetim Platformu

Piaq, dijital pazarlama ajanslarinin musterilerini, reklam kanallarini, funnel akislarini ve ajans ic operasyonlarini tek ekrandan yonetmesi icin gelistirilen B2B SaaS uygulamasidir. Hedef kullanici ajans sahibi, ekip lideri ve solo freelancer'lardir.

Ana hedef: Google Sheets, Notion, Meta Business Suite, Google Ads, TikTok Ads, mail/funnel takipleri ve ajans ic operasyon notlarini tek bir urun catisi altinda toplamak.

---

## Mevcut Teknik Stack

```txt
Framework:           Next.js 16.2 App Router
Dil:                 TypeScript strict mode
Stil:                Tailwind CSS + shadcn/ui
Veritabani/Auth:     Supabase planlaniyor
Cache:               Upstash Redis planlaniyor
Background jobs:     Trigger.dev v3 planlaniyor
Hosting:             Vercel
```

Onemli kararlar:
- Prisma kullanilmayacak; Supabase JS SDK kullanilacak.
- Auth icin ayri sistem kurulmayacak; Supabase Auth kullanilacak.
- Reklam API verileri dogrudan UI'dan degil, ham API ve senkronize edilmis DB verisi uzerinden okunacak.
- Su anki faz UI, urun akisi ve mock data fazidir. Supabase tablolari erken acilmaz.

---

## Guncel Sayfa ve Route Yapisi

### Global
- `app/layout.tsx`: sol navigasyon ve global ust bar.
- `app/AppShell.tsx`: uygulama kabugu; `/landing` route'unda sol navigasyon ve global ust bar gizlenir.
- `components/AppNavigation.tsx`: sidebar, ust header, tarih filtreleri ve bildirim merkezi.
- `components/icons/BrandIcons.tsx`: Meta, Google, TikTok, LinkedIn gibi marka logolari.
- `app/_components/EmptyRoute.tsx`: henuz tasarlanmamis bos route'lar icin sr-only placeholder.
- Sol ana menude `Ayarlar` yoktur; ayarlara sag ustteki `MS` profil menusu icindeki `Ayarlar` satirindan gidilir.
- Sol ana menu sirasi: Dashboard, Musteriler, ayirici, Pusula, Plan, Atolye, Ekip, Departmanlar, ayirici, Kara Kutu.
- Sag ustteki `MS` profil menusu acik tema ile calisir, bos alana tiklaninca kapanir ve profil menusu satirlari ayni font agirliginda kalir.
- Sag ustteki `MS` profil menusunde kullanici bilgisi altinda WorkspaceSwitcher vardir; eski `Durum belirle` alani kaldirilmistir.
- Workspace switcher ust barda ayri bir yerde gorunmez; yalnizca profil menusu icinde calisir.
- Workspace switcher secili workspace adini ve turunu gosterir, dropdown icinden mock workspace'ler arasinda gecis yapar.
- Workspace dropdown'unun en altinda `Yeni workspace olustur` aksiyonu vardir; bu aksiyon su an yalnizca mock form paneli acar, workspace CRUD/backend islemi yapmaz.
- Sol ana menude `Musteriler` ikonu `UserRoundCheck`, `Ekip` ikonu `UsersRound` ile ayrisir.
- Sol ana menudeki `/musteriler` linkinin etiketi secili workspace tipine gore degisir: ajans icin `Musteriler`, e-ticaret icin `Siparisler`, SaaS icin `Uyeler`. Route her zaman `/musteriler` olarak kalir.
- Atolye, Departmanlar, Ekip ve Kara Kutu alt menuleri desktop'ta sabit durur; icerik scroll ederken kaymaz.
- Bu alt menuler desktop'ta default kapali/dar ikon modunda baslar ve minimal yuvarlak toggle ile acilip kapanir.

### Workspace
- Frontend/mock workspace yapisi aktif durumdadir; gercek tenant, auth, permission, scope filtreleme veya backend yoktur.
- Ana dosyalar:
  - `lib/workspace/types.ts`
  - `lib/workspace/data.ts`
  - `lib/workspace/labels.ts`
  - `app/_components/workspace/WorkspaceProvider.tsx`
  - `app/_components/workspace/WorkspaceSwitcher.tsx`
- `WorkspaceType`: `agency`, `ecommerce`, `saas`.
- Mock workspace'ler:
  - `Piaq Media` (`agency`) -> ana entity etiketi `Musteriler`
  - `Lumoli Store` (`ecommerce`) -> ana entity etiketi `Siparisler`
  - `Nova SaaS` (`saas`) -> ana entity etiketi `Uyeler`
- Default workspace `Piaq Media`dir.
- Workspace secimi `localStorage` icinde `piaq:selected-workspace` anahtariyla saklanir.
- `getWorkspaceLabels(workspaceType)` merkezi helper olarak `primaryEntityLabel`, `primaryEntitySingular`, `workspaceKindLabel` degerlerini dondurur.
- `WorkspaceProvider`, `app/AppShell.tsx` icinde app kabugunu sarar ve secili workspace bilgisini global UI'a saglar.
- `WorkspaceSwitcher`, profil menusunde kullanici bilgisi ile menu satirlari arasinda durur. Mevcut profil menu satirlari korunur.
- `Yeni workspace olustur` su an mock UI'dir; form alanlari gosterilir ama workspace listesine kayit yapilmaz.
- `app/AppShell.tsx` icinde `WorkspaceProvider` altinda `PusulaPlanProvider` da vardir. Bu provider Pusula node'lari, Plan taslaklari ve Plan is kalemleri icin session-only mock state saglar; localStorage, DB veya backend kullanmaz.

### Landing
- Route: `/landing`
- Ana dosya: `app/landing/page.tsx`
- Durum: Pazarlama/urun tanitim sayfasi olarak ayrilmistir. Bu route app shell disinda acilir; sol menuler, global ust bar ve dashboard kontrolleri gorunmez.

### Dashboard
- Route: `/`
- Ana dosyalar:
  - `app/page.tsx`
  - `app/_components/dashboard/DashboardPageClient.tsx`
  - `app/_components/dashboard/DashboardSections.tsx`
  - `lib/data/dashboard.ts`
- Durum: Dashboard UI aktif. Tarih filtresi global ust bardadir. Bildirim ikonu tum sayfalarda ortak kullanilir.
- Dashboard karar dili "durum, risk, firsat, bugunku aksiyon" mantigiyla ilerler.
- Ana ust performans blogu korunmus alandir: `Ajans Haftalik Performansi`, `TrendChart` ve sagdaki 2x2 ozet kartlar mevcut olcu/yerlesim mantigiyla tutulur.
- Dashboard'daki koyu `Musteri Kazanma & Kaybetme` karti sagdaki aksiyon kartiyla ayni yukseklige esner; icerigi kart icinde dengeli yayilir ve gerekirse minimal koyu scrollbar ile kayar.

### Musteriler
- Liste route'u: `/musteriler`
- CRM route'u: `/musteriler/crm`
- Detay route'u: `/musteriler/[slug]`
- Detay sekmeleri:
  - Genel
  - Plan
  - Meta
  - Google
  - TikTok
  - Sosyal Medya
  - Funnel
  - Mail
  - Ayarlar
- Ana dosyalar:
  - `app/musteriler/page.tsx`
  - `app/musteriler/[slug]/page.tsx`
  - `app/musteriler/[slug]/PlanTab.tsx`
  - `app/musteriler/[slug]/GeneralTab.tsx`
  - `app/musteriler/[slug]/TikTokTab.tsx`
  - `app/musteriler/[slug]/FunnelTab.tsx`
  - `app/musteriler/[slug]/data.ts`
- Durum: Musteri detay genel sekmesi `Musteri Yonetim Merkezi` mantigiyla kanal performansi, musteri sagligi, funnel, operasyon, finans ve karar listesini tek ekranda toplar. Plan sekmesi ortak bos canvas component'ini, Funnel sekmesi ortak funnel component'ini, kanal sekmeleri ilgili ortak kanal component'lerini kullanir. Musteri TikTok sekmesi ortak TikTok component'ini `customerTikTokAdsData` ile kullanir.

### Pusula
- Ana route: `/pusula`
- Canvas route'u: `/pusula/tahta`
- Ana dosyalar:
  - `app/pusula/page.tsx`
  - `app/pusula/tahta/page.tsx`
- Pusula ozel component'leri:
  - `app/_components/pusula/PusulaBoardView.tsx`
  - `app/_components/pusula/PusulaCanvasView.tsx`
  - `app/_components/pusula/PusulaNodeLayer.tsx`
  - `app/_components/pusula/PusulaNodeDetailPanel.tsx`
  - `app/_components/pusula/PusulaNodeMeta.ts`
- Pusula mock data/type dosyalari:
  - `lib/pusula/types.ts`
  - `lib/pusula/data.ts`
- Durum: Pusula liderlerin kus bakisi strateji ve planlama yaptigi alandir. `/pusula` dogrudan canvas acmaz; Miro benzeri tahta merkezi, son tahtalar, yeni tahta aksiyonu ve sablon kartlari gosterir. `/pusula/tahta` route'u `PusulaBoardView` ve `PusulaCanvasView` ile calisir; pan yapilabilen noktali canvas altyapisi ortak `PannableCanvasView` component'inden gelir.
- Pusula node'lari fikir, strateji blogu, funnel adimi, kampanya fikri, kanal aksiyonu veya operasyon karari olabilir; node'lar dogrudan gorev degildir.
- Pusula node durumlari `draft`, `sentToPlan`, `convertedToPlanItem` olarak tutulur ve UI'da `Plan'a gonderilmedi`, `Plan'da bekliyor`, `Ise donusturuldu` rozetleriyle gosterilir.
- Node secilince sag detay paneli acilir; panelde baslik, aciklama, tip, bagli akis ve `Plan'a gonder` aksiyonu vardir.
- `Plan'a gonder` yalnizca `draft` node'larda aktif olur; `sentToPlan` veya `convertedToPlanItem` durumundaki node ikinci kez Plan'a gonderilemez.

### Plan
- Route: `/plan`
- Ana dosya: `app/plan/page.tsx`
- Plan component'leri:
  - `app/_components/plan/PlanPageView.tsx`
  - `app/_components/plan/PlanDraftCard.tsx`
  - `app/_components/plan/PlanDraftDetailPanel.tsx`
  - `app/_components/plan/PlanItemCard.tsx`
  - `app/_components/plan/PlanStatusMeta.ts`
- Pusula -> Plan state provider:
  - `app/_components/pusula-plan/PusulaPlanProvider.tsx`
- Plan mock data/type dosyalari:
  - `lib/plan/types.ts`
  - `lib/plan/data.ts`
- Durum: Plan, Pusula'dan gelen strateji bloklarinin is kalemine donustugu mock operasyon sayfasidir. Su an gercek veri, DB, atama sistemi veya backend yoktur; yalnizca session-only mock state ile calisir.
- Plan sayfasi uc ana bolume ayrilir: `Pusula'dan Gelenler`, `Aktif Plan Isleri`, `Geciken / Riskteki Isler`.
- `PlanDraft`, Pusula'dan gelen eksik/taslak is adayidir. Henuz final gorev degildir.
- `PlanItem`, sorumlu, kanal, departman etiketleri, deadline, KPI, ilerleme ve durum alanlari atanmis uygulanabilir is kalemidir.
- `departmentTags` array olarak tutulur; bir is birden fazla departmana baglanabilir ama ekip gorev yuku fazinda ayni is iki kere sayilmamalidir.
- KPI yapisi metric/operator/value/unit alanlariyla yapilandirilir; V1'de mock KPI seti kullanilir.

### Atolye
- Ana route: `/atolye`
- Sekmeler:
  - Meta
  - Google
  - TikTok
  - Sosyal Medya
  - Funnel
  - Mail
  - Ayarlar
- Ana dosyalar:
  - `app/atolye/layout.tsx`
  - `app/atolye/AtolyeTabs.tsx`
  - `app/atolye/page.tsx`
  - `app/atolye/meta/page.tsx`
  - `app/atolye/google/page.tsx`
  - `app/atolye/tiktok/page.tsx`
  - `app/atolye/sosyal-medya/page.tsx`
  - `app/atolye/funnel/page.tsx`
  - `app/atolye/mail/page.tsx`
  - `app/atolye/ayarlar/page.tsx`
- Durum: Eski Ajans kanal operasyon yapisinin yeni adi Atolye'dir. Atolye ekibin gercek kanal operasyonlarini yuruttugu alandir. Atolye altinda Merkez sayfasi yoktur; `/atolye` varsayilan olarak `/atolye/meta` adresine yonlenir. Meta, Google, TikTok, Sosyal Medya, Funnel ve Mail sayfalari ortak kanal/funnel/mail component'leriyle calisir. `/atolye/ayarlar` mevcut ajans ayarlari davranisina benzer bir Atolye ayarlari sekmesidir; genel `/ayarlar` sayfasindan ayridir.
- Eski `/ajans`, `/ajans/plan` ve `/ajans/*` route'lari gecici uyumluluk icin `next.config.ts` redirects ile yeni omurgaya yonlenir: `/ajans` -> `/atolye/meta`, `/ajans/plan` -> `/pusula`, `/ajans/:path*` -> `/atolye/:path*`.

### Ortak Canvas Sistemi
- Ortak component: `app/_components/canvas/PannableCanvasView.tsx`
- Pusula wrapper component'i: `app/_components/pusula/PusulaCanvasView.tsx`
- Kullanim:
  - `app/_components/pusula/PusulaCanvasView.tsx`
  - `app/musteriler/[slug]/PlanTab.tsx`
- Amac: Pusula tahtasi ve musteri planlari icin bos, noktali, mouse ile suruklenerek pan yapilabilen canvas alani saglamak.
- Canvas icinde sol ustte sabit duran bos menu paneli vardir; canvas kaydirilsa bile menu paneli konumunu korur.
- Su an canvas uzerinde veri kaydi, DB, API, drag/drop node sistemi veya real-time sync yoktur.
- `PannableCanvasView` ortak ve sade canvas altyapisi olarak kalir; Pusula'ya ozel node layer, sag detay paneli ve Plan'a gonderim davranisi dogrudan bu component icine gomulmez.
- `/plan` sayfasi gercek is kalemi sistemine donustugu icin ortak canvas component adinda `Plan` gecmez; Pusula tarafinda anlamli isim icin `PusulaCanvasView` wrapper'i kullanilir.
- Musteri detay Plan sekmesi de ortak canvas altyapisini kullandigi icin Pusula davranislari `PusulaBoardView` wrapper katmaninda yonetilir.

### Ortak Funnel Sistemi
- Ortak component: `app/_components/funnel/FunnelView.tsx`
- Mock data: `app/_components/funnel/data.ts`
- Kullanim:
  - `app/atolye/funnel/page.tsx` -> `agencyFunnelData`
  - `app/musteriler/[slug]/FunnelTab.tsx` -> `customerFunnelData`
- Ayni tasarim kullanilir, sadece veri kapsami degisir:
  - Atolye Funnel: ajansin kendi satis/musteri kazanma funnel'i.
  - Musteri Funnel: secili musterinin reklam ve donusum funnel'i.
- Bolumler:
  - KPI kartlari
  - Ana donusum hunisi
  - Funnel sagligi ve darboğaz paneli
  - Takip aksiyonlari
  - Sinyaller
  - Adim bazli performans tablosu
  - Donusum trendi
  - Kaynak bazli donusum
  - Segment kirilimi
  - A/B test paneli
  - AI insight alani

### Ortak Kanal Sistemleri
- Meta ortak component: `app/_components/meta-ads/MetaAdsView.tsx`
  - Atolye ve musteri Meta sayfalari ayni tasarimi kullanir.
- Google ortak component ve data: `app/_components/google-ads/GoogleAdsView.tsx`, `app/_components/google-ads/data.ts`
  - Atolye ve musteri Google sayfalari ayni tasarimi kullanir.
- TikTok ortak component: `app/_components/tiktok-ads/TikTokAdsView.tsx`
  - Atolye ve musteri TikTok sayfalari ayni tasarimi kullanir.
- Sosyal Medya ortak component: `app/_components/social-media/SocialMediaView.tsx`
  - Atolye ve musteri Sosyal Medya sayfalari ayni tasarimi kullanir.
- Mail ortak component: `app/_components/mail-marketing/MailMarketingView.tsx`
  - Atolye ve musteri Mail sayfalari ayni tasarimi kullanir.

### Departmanlar
- Ana route davranisi: Sol ana menu `Departmanlar` linki `/departmanlar/yonetim` adresine gider. `/departmanlar` icin Merkez/ana sayfa tutulmaz.
- Sol sekmeler:
  - Yonetim
  - Satis
  - Pazarlama
  - Operasyon
  - IK
  - ARGE
  - Finans
- Ana dosyalar:
  - `app/departmanlar/layout.tsx`
  - `app/departmanlar/DepartmentTabs.tsx`
- Durum: Departmanlar tarafi kisi listesinden cok is birimi performansi, operasyon durumu, risk, karar ve blokaj ekranidir.
- Yonetim, Satis, Pazarlama, Operasyon, IK, ARGE ve Finans sayfalari mock UI seviyesinde doludur. Her sayfa kendi departman karar/operasyon paneli olarak tasarlanmistir.
- Alt menu desktop'ta sabit ve daraltilebilir yapidadir.

### Ekip
- Route grubu: `/ekip`
- Satis, Pazarlama, Operasyon, Yonetim, IK, ARGE, Finans route'lari vardir.
- Ana dosyalar:
  - `app/ekip/layout.tsx`
  - `app/ekip/EkipTabs.tsx`
  - `app/ekip/EkipDepartmentPage.tsx`
- Durum: Ekip route grubu sabit ve daraltilebilir alt menuye sahiptir. Ekip sayfalari artik placeholder degildir; ortak `EkipDepartmentPage` ile kisi, sorumlu, kapasite, gorev yuku, takip listesi ve karar notu uzerinden calisir.
- Departmanlar ve Ekip ayrimi urun kararidir:
  - Departmanlar: is birimi performansi, operasyon durumu, karar ve risk.
  - Ekip: kisi, kapasite, sorumlu, gorev yuku ve takip.

### Kara Kutu
- Route grubu: `/kara-kutu`
- Bilgi merkezi/dokuman arsivi mantigindadir.
- Ana dosyalar:
  - `app/kara-kutu/layout.tsx`
  - `app/kara-kutu/KaraKutuNav.tsx`
  - `lib/data/kara-kutu.ts`
  - `lib/types/kara-kutu.ts`
- Durum: Kara Kutu alt menusu desktop'ta sabit ve daraltilebilir yapidadir.

### Ayarlar
- Route: `/ayarlar`
- Ortak component: `app/_components/settings/SettingsView.tsx`
- Durum: Workspace, kullanici, guvenlik, bildirim, entegrasyon ve logo yukleme alanlarini kapsayan aktif mock UI'dir.
- Atolye ayarlari ve musteri detay ayarlari ayni tasarim dilini kullanir; musteri ayarlarinda musteri logosu yukleme alani vardir.
- Global sol menude Ayarlar linki yoktur; `/ayarlar` sayfasina sag ust `MS` profil menusundeki `Ayarlar` satiri ile gidilir.
- Genel `/ayarlar` sayfasi Atolye ayarlarindan ayridir; kullanici ozellikle istemedikce genel ayarlar sayfasina dokunulmaz.

---

## Sayfa Amaclari

- Dashboard (`/`): Ajans genel performans ozeti. Ajansin toplam harcama, lead, donusum, ROAS, musteri riskleri, dikkat edilecek isler ve yaklasan operasyon takibini gosterir.
- Landing (`/landing`): Piaq icin app shell disinda calisan tanitim/urun giris sayfasidir.
- Musteriler (`/musteriler`): Musteri portfoyunu saglik skoru, hizmet kapsami, risk nedeni, son aksiyon ve sonraki adim diliyle listelemek icin kullanilir.
- Musteri CRM (`/musteriler/crm`): Satis pipeline, kesif kartlari ve musteri kazanma/kaybetme surecini takip eder.
- Musteri Detay Genel (`/musteriler/[slug]`, Genel sekmesi): Secili musterinin yonetim merkezidir; kanal performansi, musteri sagligi, funnel, operasyon, finans ve karar listesini tek ekranda gosterir.
- Musteri Detay Plan: Secili musteri icin bos, noktali ve mouse ile suruklenebilen plan canvas'idir.
- Musteri Detay Funnel: Secili musterinin reklamdan lead/teklif/odeme-satis adimina kadar olan donusum funnel'ini analiz eder.
- Pusula (`/pusula`): Miro benzeri tahta merkezi olarak calisir; strateji tahtalarini, son tahtalari ve sablonlari gosterir. Dogrudan canvas acmaz.
- Pusula Tahtasi (`/pusula/tahta`): Liderlerin kus bakisi strateji/planlama canvas'idir. Bos, noktali ve mouse ile suruklenebilen ortak canvas component'ini kullanir.
- Plan (`/plan`): Pusula'dan gelen strateji bloklarinin is kalemine donustugu mock operasyon katmanidir. Gercek is kalemi sistemi bu fazda yoktur.
- Atolye (`/atolye`): Kanal operasyonlari route grubudur; `/atolye` varsayilan olarak `/atolye/meta` adresine yonlenir.
- Atolye kanal sayfalari (`/atolye/meta`, `/atolye/google`, `/atolye/tiktok`, `/atolye/sosyal-medya`, `/atolye/funnel`, `/atolye/mail`): Ajansin kendi kanal, funnel ve mail operasyonlarini ortak component'lerle gosterir.
- Atolye Ayarlar (`/atolye/ayarlar`): Atolye/ajans kapsamli ayarlar sekmesidir; genel `/ayarlar` sayfasindan ayridir.
- Departman sekmeleri (`/departmanlar/yonetim`, `/departmanlar/satis`, vb.): Her departmanin kendi operasyon alani icin dolu mock dashboard olarak tasarlanmistir. Departmanlar Merkez sayfasi yoktur.
- Ekip (`/ekip`): Ekip/departman bazli insan ve gorev yonetimi icin ayrilmis route grubudur. Kisi, kapasite, gorev yuku, takip listesi ve karar notu uzerinden calisir.
- Kara Kutu (`/kara-kutu`): Ajans bilgi merkezi, dokuman arsivi ve surec kutuphanesi olarak kullanilir.
- Ayarlar (`/ayarlar`): Workspace, bildirim, entegrasyon, guvenlik ve logo ayarlarinin merkezidir; global erisim sag ust profil menusundedir.

---

## Ortak Component ve Veri Kaynaklari

- Ortak urun UI sistemi: `app/_components/common/ProductUI.tsx`
  - `SectionTitle`, `StatusBadge`, `MetricTile`, `KpiCard`, `DecisionSummary`, `ValueText`, `getToneClassName`, `getTintClassName` buradan kullanilir.
  - Yeni sayfa veya refactorlarda ayni rozet/baslik/metrik helper'larini lokal kopyalama; once bu ortak component'leri tercih et.
  - Para degerlerinde `₺` simgesini dogrudan ham metinle farkli farkli basmak yerine `ValueText` kullan; TikTok, Meta ve diger sayfalarda TL simgesi ayni gorunmelidir.
  - Tonlar `good`, `warning`, `danger`, `neutral`, `accent` olarak urun karar diline baglidir.
- Global navigasyon ve bildirim merkezi: `components/AppNavigation.tsx`
  - Bildirim ikonu tum sayfalarda ortak kullanilir.
  - Bildirimler baglanti kopuklugu, veri kesintisi, uyelik/paket durumu ve platform duyurulari icin kullanilir.
  - `ProfileMenuButton`, sag ust `MS` avatar menusu icin ortak davranistir; Ayarlar linki buradadir.
  - Profil menusunde `WorkspaceSwitcher`, kullanici bilgisi blogunun hemen altinda yer alir.
  - `WorkspaceSwitcher` icindeki workspace degisimi sidebar'daki `/musteriler` etiketini gunceller; route degismez.
  - `WorkspaceSwitcher` icindeki `Yeni workspace olustur` aksiyonu mock form paneli acar; CRUD/backend eklemez.
- Pusula -> Plan mock state: `app/_components/pusula-plan/PusulaPlanProvider.tsx`
  - `PusulaPlanProvider`, Pusula node'lari, PlanDraft ve PlanItem listelerini session state olarak tutar.
  - Bu provider gercek veri kaydi yapmaz; sayfa yenilenince mock state baslangic degerlerine doner.
- Pusula ozel canvas katmani: `app/_components/pusula/PusulaBoardView.tsx`
  - `PusulaCanvasView` uzerine node layer ve sag detay panelini bindirir.
  - `PusulaCanvasView`, ortak `PannableCanvasView` altyapisini Pusula adlandirmasiyla sarar.
  - Node secimi, node status rozetleri ve `Plan'a gonder` aksiyonu burada yonetilir.
- Plan ozel gorunum sistemi: `app/_components/plan/PlanPageView.tsx`
  - `Pusula'dan Gelenler`, `Aktif Plan Isleri` ve `Geciken / Riskteki Isler` bolumlerini yonetir.
  - Plan taslagini is kalemine donusturme paneli `PlanDraftDetailPanel` icindedir.
- Marka ikonlari: `components/icons/BrandIcons.tsx`
  - Meta, Google, TikTok, LinkedIn logolari buradan kullanilir.
  - Yeni marka logosu gerekiyorsa tek seferlik lokal yerde cizmek yerine bu sisteme ekle.
- Ortak funnel tasarimi: `app/_components/funnel/FunnelView.tsx`
  - Atolye ve musteri funnel sayfalari ayni component'i kullanir.
  - Tasarim degisikligi iki sayfayi da etkiler.
- Ortak funnel mock data: `app/_components/funnel/data.ts`
  - `agencyFunnelData`: ajansin kendi funnel verisi.
  - `customerFunnelData`: secili musterinin funnel verisi.
- Ortak canvas altyapisi: `app/_components/canvas/PannableCanvasView.tsx`
  - Pusula Tahtasi ve musteri Plan sekmesi ayni bos canvas altyapisini kullanir.
  - Canvas mouse/pointer drag ile pan yapar; scrollbar ile ana kullanim hedeflenmez.
  - Canvas icindeki sabit menu paneli canvas pan hareketinden etkilenmez.
- Dashboard mock data: `lib/data/dashboard.ts`
- Musteri detay mock data: `app/musteriler/[slug]/data.ts`
- Kanal renk/etiket yardimcilari: `lib/data/channels.ts`
- Pipeline renkleri: `lib/data/pipeline-colors.ts`
- Ekip sayfalari ortak component'i: `app/ekip/EkipDepartmentPage.tsx`
  - `/ekip`, `/ekip/satis`, `/ekip/pazarlama`, `/ekip/operasyon`, `/ekip/yonetim`, `/ekip/ik`, `/ekip/arge`, `/ekip/finans` bu component'i farkli departman parametresiyle kullanir.

---

## Dokunma / Dikkat Et

- `components/ui/` altindaki shadcn/ui bilesenlerini dogrudan degistirme.
- Funnel tasarimi ortak kalmali: ajans ve musteri funnel ayni layout'u kullanir. Sadece veri/metin farkli olur.
- Menuler platform renkleriyle rengarenk hale getirilmez; menu aktif state site ana temasina uygun kalir.
- Platform renkleri sadece grafik, kart metrikleri, rozet ve kanal bazli gorsel ayrimlarda kullanilir.
- Dashboard tarih filtresi global ust bardadir; her karta ayri tarih filtresi ekleme.
- Bildirim merkezi tek ortak davranis olmalidir; sayfa bazli farkli bildirim paneli olusturma.
- Ayarlar global sol menude tekrar eklenmez; sag ust `MS` profil menusundeki `Ayarlar` linki global erisim noktasi olarak kalir.
- Genel `/ayarlar` sayfasina kullanici ozellikle istemedikce dokunma; Atolye ayarlari icin `/atolye/ayarlar` kullanilir.
- Workspace switcher icin ust barda ayri alan acma; workspace secimi profil menusunun icinde kalir.
- Workspace degisimi bu fazda sadece UI label/context degisimi yapar; dashboard role-aware, permission-aware veya scope-aware davranis eklenmez.
- Yeni workspace olusturma bu fazda mock form panelidir; gercek olusturma, silme, duzenleme, tenant, auth veya DB semasi eklenmez.
- Pusula -> Plan gonderim akisi bu fazda session-only mock state ile calisir; Supabase, API route, server action, localStorage veya DB kaydi eklenmez.
- Pusula node/gonderim davranislarini ortak `PannableCanvasView` icine ekleme; musteri detay Plan sekmesini bozmamak icin Pusula davranislari wrapper component'lerde kalmali.
- `/plan` is kalemi sistemiyle karismamasi icin ortak canvas altyapisina tekrar `PlanCanvasView` adi verme; Pusula icin `PusulaCanvasView`, ortak altyapi icin `PannableCanvasView` kullan.
- Ayni Pusula node'u ikinci kez Plan'a gonderilememeli; `sentToPlan` ve `convertedToPlanItem` durumlarinda gonderim aksiyonu disabled kalmali.
- PlanDraft ve PlanItem ayrimi korunmali; Pusula'dan gelen taslak dogrudan final is/gorev gibi davranmamalidir.
- Departmanlar Merkez sayfasi geri getirilmez; `/departmanlar` icin ana karar route'u `/departmanlar/yonetim` olarak dusunulur.
- Gercek Supabase tablo/RLS/API mimarisi kullanici istemedikce eklenmez.
- Mock UI fazinda veri dosyalarini genisletmek serbesttir; DB semasi uretme.
- Mevcut kullanici degisikliklerini geri alma; dosya kirliyse degisiklikle birlikte yasamayi tercih et.

---

## Tasarim ve Urun Kararlari

- Uygulama pazarlama landing page gibi degil, operasyonel SaaS paneli gibi hissettirmeli.
- Kartlar sade, okunabilir, yogun ama duzenli olmali.
- Piaq'in ana omurgasi: reklam verisi + musteri sagligi + ajans ic operasyonu ayni karar ekraninda birlesir.
- Ekran dili rapor anlatimi degil karar dili olmali: durum, risk, firsat, son aksiyon, sonraki adim ve sorumlu bilgisi net gorunmeli.
- Gereksiz hero, dekoratif orb, asiri gradient ve kart icinde kart kullanimi azalt.
- Menuler site temasina uygun kalmali; platform renkleri menuleri cumbuse cevirmemeli.
- Atolye, Departmanlar, Ekip ve Kara Kutu alt menuleri sabit kalmali; sayfa icerigi scroll ederken bu menuler hareket etmemeli.
- Bu alt menuler desktop'ta dar ikon modunda acilir; minimal yuvarlak toggle ile genisletilir/daraltilir.
- Atolye alt menusunde `Merkez` veya `Plan` yoktur; kanal operasyonlari Meta, Google, TikTok, Sosyal Medya, Funnel, Mail ve Ayarlar olarak kalir.
- Eski Ajans Merkez sayfasi yeni Atolye yapisinda ana odak degildir ve Atolye altinda geri getirilmez.
- Pusula ana menu tiklamasi dogrudan canvas acmaz; `/pusula` tahta merkezi, `/pusula/tahta` canvas ekranidir.
- Pusula tahtasinda node secimi sag detay paneliyle calisir; `Plan'a gonder` ana aksiyonu bu panelin alt alaninda durur.
- Pusula node status rozetleri kucuk ve karar destekleyici olmalidir; node kartlarini gorev kartina cevirecek agir task UI kullanma.
- Plan sayfasinda `Pusula'dan Gelenler` taslak kuyrugu ile `Aktif Plan Isleri` net ayrilmali; kullanici taslak ile uygulanabilir is kalemini karistirmamali.
- PlanDraft donusturme panelinde Atolye kanallari, sorumlu kisi, coklu departman etiketi, deadline, KPI, ilerleme ve durum alanlari gorunur.
- Departmanlar alt menusunde `Merkez` yoktur; ilk karar sekmesi `Yonetim`dir ve menude `Yonetim` `Satis`in ustunde durur.
- Musteri detay genel ekrani `Musteri Yonetim Merkezi` mantigiyla calisir.
- Departmanlar ve Ekip birbirinden ayridir: Departmanlar is birimi/operasyon performansi, Ekip ise kisi/kaynak/kapasite/gorev yuku ekranidir.
- Acik tema varsayilandir: dashboard, listeler, tablolar ve genel yonetim alanlari acik/soft zeminde calisir.
- Koyu tema ozel vurgulu operasyon panelleri icin kullanilir: musteri kazanma/kaybetme, kanal karsilastirma veya AI/operasyon radar gibi alanlarda kontrollu kullan.
- Dashboard'daki koyu operasyon kartlarinda kartlar arasi yukseklik dengesi korunur. Esit yukseklik gerekiyorsa icerik ic govdeye alinip minimal scrollbar kullanilabilir.
- Kart border radius genelde 20-30px bandinda kullaniliyor; tekrar eden kucuk item'larda 16-22px yeterlidir.
- UI icinde uzun aciklama metinleriyle ozellik anlatma; ekran karar vermeyi kolaylastirsin.
- Platform renkleri grafik ve kart metriklerinde tutarli kullanilir:
  - Meta: `#003049`
  - Google: `#d62828`
  - TikTok: `#0F766E`
  - Mail: turuncu ton
  - Funnel: yesil ton
- Ana aksan rengi: `#f0533a`.
- Bildirim merkezi; baglanti kopuklugu, veri kesintisi, uyelik/paket durumu ve platform/ajans duyurulari icin kullanilir.
- Sag ust `MS` profil menusu acik temada, sag kenara yasli, avatar altindan acilir ve bos alana tiklaninca kapanir. Profil menusu satirlari tutarli agirlikta kalmali; link olan `Ayarlar` satiri ekstra kalin gorunmemeli.
- Profil menusundeki workspace switcher kompakt, acik tema ile uyumlu ve menu genisligine uygun olmalidir; eski `Durum belirle` alani geri getirilmez.
- Workspace switcher dropdown'unda `Yeni workspace olustur` satiri listenin en altinda sade bir aksiyon olarak kalir; mock form paneli dekoratif veya pazarlama tarzi olmamalidir.
- Plan canvas tasarimi sade tutulur: tum alana yayilan noktali canvas, mouse ile surukleme/pan ve canvas hareketinden etkilenmeyen sabit menu paneli.
- Canvas icine node, kart, editor, kalici veri, collaboration veya DB entegrasyonu kullanici istemedikce eklenmez.
- `components/ui/` altindaki shadcn/ui bilesenleri dogrudan degistirilmez.

---

## Reklam API Notlari

Temel kural: Platform UI'larindaki veriler dogrudan dogru kabul edilmez. Gercek fazda ham API verisi cekilir, DB'ye yazilir ve UI DB'den okur.

Meta Marketing API:
- Endpoint: `graph.facebook.com/v21.0/{ad_account_id}/insights`
- Alanlar: `impressions`, `clicks`, `spend`, `reach`, `conversions`, `cpc`, `cpm`, `ctr`, `roas`
- Rate limit dikkate alinmali; Upstash Redis cache kullanilacak.
- Long-lived user token kullanilacak.

Google Ads API:
- GAQL kullanilacak.
- Customer ID veritabaninda tiresiz saklanacak, UI'da formatlanacak.

TikTok Ads API:
- Gelistirmede sandbox, production'da gercek ortam kullanilacak.

Sync stratejisi:
- Trigger.dev v3 job'lari saatlik reklam verisi sync icin kullanilacak.
- Manuel yenile butonu veriyi yeniden senkronize etmek icin planlanir.

---

## Kod Kurallari

- TypeScript strict mode korunur; `any` kullanma.
- Yeni component'lerde named export tercih edilir.
- API ve async islerde `async/await` kullan; promise chain yazma.
- API route/server action yazilirsa session kontrolu ve try/catch zorunludur.
- Bilesen isimleri `PascalCase.tsx`, util dosyalari `camelCase.ts` olmali.
- Yorum gerekiyorsa Turkce ve kisa olmali.
- Kullanici degisikliklerini geri alma; dirty worktree varsay.
- Manuel editlerde `apply_patch` kullan.
- Dosya olustururken ve degistirirken kapsam disi refactor yapma.
- Tekrarlayan ajan operasyonlari ve daha once cozulmus kurulum/push/hook durumlari icin `docs/agent-runbook.md` takip edilir.
- GitHub'a push islemi yalnizca kullanici acikca "push et", "GitHub'a gonder" veya benzeri bir talimat verdiginde yapilir; commit sonrasi otomatik push yapma.

---

## Gelistirme Komutlari

```bash
npm install
npm run dev
npm run build
npm run lint
npm run type-check
```

Not: `package.json` icinde `type-check` komutu `tsc --noEmit` calistirir. Kod degisikliginden sonra genelde su ikisi calistirilir:

```bash
npm.cmd run type-check
npm.cmd run lint
```

---

## Ortam Degiskenleri

`.env.local` commit edilmez.

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

TRIGGER_SECRET_KEY=

META_APP_ID=
META_APP_SECRET=

GOOGLE_ADS_DEVELOPER_TOKEN=
GOOGLE_ADS_CLIENT_ID=
GOOGLE_ADS_CLIENT_SECRET=

TIKTOK_APP_ID=
TIKTOK_APP_SECRET=
```

---

## Guvenlik Kurallari

- Supabase'de her tablo icin RLS aktif olmalidir.
- API token'lari veritabaninda sifreli saklanir.
- `SUPABASE_SERVICE_ROLE_KEY` sadece server tarafinda kullanilir.
- Client bundle'a gizli anahtar cikmamali.
- `.env.local` asla commit edilmez.

---

## Son Durum Notlari

- Proje henuz agirlikli olarak mock UI ve urun akisi fazinda.
- Dashboard, landing, musteriler, musteri detay genel sekmesi, Pusula tahta merkezi, Pusula canvas, Plan mock operasyon sayfasi, Atolye kanal sayfalari, ortak funnel sistemi, ortak canvas altyapisi, ayarlar ve bildirim merkezi aktif UI seviyesinde.
- Workspace frontend/mock yapisi aktif UI seviyesindedir. `Piaq Media`, `Lumoli Store` ve `Nova SaaS` mock workspace'leri vardir; secim localStorage ile korunur.
- Profil menusundeki `Durum belirle` alani kaldirilmistir; yerine `WorkspaceSwitcher` eklenmistir.
- Workspace tipine gore sol ana menudeki `/musteriler` etiketi `Musteriler`, `Siparisler` veya `Uyeler` olur; route cogaltilmaz.
- WorkspaceSwitcher dropdown'unun altindaki `Yeni workspace olustur` aksiyonu mock form paneli acar; gercek workspace CRUD/backend yoktur.
- Pusula -> Plan gonderim mekanigi frontend/mock seviyesinde uygulanmistir. `PusulaPlanProvider` session state ile Pusula node'lari, PlanDraft ve PlanItem listelerini tutar.
- `/pusula/tahta`, `PusulaBoardView` ile `PusulaCanvasView` uzerine Pusula node layer'i ve sag detay paneli bindirir. `PusulaCanvasView`, ortak `PannableCanvasView` altyapisini kullanir.
- Pusula node detay panelindeki `Plan'a gonder` aksiyonu draft node'u `PlanDraft` olarak `/plan` sayfasindaki `Pusula'dan Gelenler` kuyruguna dusurur.
- Gonderilen node `sentToPlan`, is kalemine donusturulen node `convertedToPlanItem` durumuna gecer; ayni node ikinci kez gonderilemez.
- `/plan`, `PlanPageView` ile `Pusula'dan Gelenler`, `Aktif Plan Isleri` ve `Geciken / Riskteki Isler` bolumlerini gosterir.
- Plan taslaklari `PlanDraftDetailPanel` ile kanal, sorumlu, departman etiketleri, deadline, KPI, ilerleme ve durum alanlari girilerek `PlanItem`'a donusturulur.
- Bu Pusula -> Plan akisi session-only mock'tur; sayfa yenilenince baslangic mock verilerine doner ve DB/API/localStorage kaydi yapmaz.
- Ortak `ProductUI` sistemi aktif kullaniliyor; yeni rozet, metrik, section basligi, karar ozetleri ve para degeri gosterimleri icin lokal helper kopyalamak yerine bu sistem tercih edilir.
- Pusula (`/pusula`) Miro benzeri tahta merkezi olarak acilir; dogrudan canvas acmaz. Canvas `/pusula/tahta` route'unda `PusulaCanvasView` ile calisir.
- Plan (`/plan`) mock operasyon kuyrugu ve taslaktan is kalemine donusum akisini gosterir; gercek is kalemi sistemi, DB veya backend yoktur.
- Eski Ajans yapisinin yeni urun adi Atolye'dir. `/atolye` kanal operasyonlari route grubudur ve varsayilan olarak `/atolye/meta` adresine yonlenir.
- Atolye ve musteri Meta, Google, TikTok, Sosyal Medya, Funnel ve Mail sayfalari ortak component yaklasimi ile ilerler.
- Atolye alt menusunde Meta, Google, TikTok, Sosyal Medya, Funnel, Mail ve Ayarlar vardir; Merkez ve Plan sekmeleri yoktur.
- Eski `/ajans`, `/ajans/plan` ve `/ajans/*` route'lari gecici uyumluluk icin yeni Pusula/Atolye route'larina redirect edilir.
- Musteriler listesi ve musteri detay genel sekmesi musteri sagligi, risk nedeni, son aksiyon, sonraki adim ve karar merkezi diline gore toparlanmistir.
- Musteri detay TikTok sekmesi ortak TikTok reklam merkezi component'ini kullanir.
- Departmanlar icin `Merkez` kaldirilmistir; Yonetim, Satis, Pazarlama, Operasyon, IK, ARGE ve Finans sayfalari dolu mock UI seviyesindedir.
- Sol ana menu Departmanlar linki `/departmanlar/yonetim` adresine gider.
- Sol ana menude Ayarlar yoktur; Ayarlar global olarak sag ust `MS` profil menusunden acilir.
- Genel `/ayarlar` sayfasi Atolye ayarlarindan ayridir; kullanici ozellikle istemedikce genel ayarlar sayfasina dokunulmaz.
- Atolye, Departmanlar, Ekip ve Kara Kutu alt menuleri sabit ve daraltilebilir yapidadir; desktop'ta default dar ikon modunda baslar.
- Ekip route grubu alt menuye sahiptir ve `EkipDepartmentPage` ile kisi, kapasite, gorev yuku, takip listesi ve karar notu ekranlari doludur.
- Dashboard'daki `Musteri Kazanma & Kaybetme` koyu karti sagdaki aksiyon kartiyla yukseklik dengesi kuracak sekilde esner; icerik dengeli yayilir ve minimal koyu scrollbar kullanir.
- Supabase tablo/RLS tasarimi sayfa ihtiyaclari netlestikce yapilacak; simdilik erken DB mimarisi ekleme.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

### Context Navigation

When you need to understand the codebase, docs, or any files in this project:
1. ALWAYS query the knowledge graph first: `/graphify query "your question"`
2. Only read raw files if I explicitly say "read the file" or "look at the raw file"
3. Use `graphify-out/wiki/index.md` as your navigation entrypoint for browsing structure

When the user types `/graphify`, invoke the `skill` tool with `skill: "graphify"` before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
