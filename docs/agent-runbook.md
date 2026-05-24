# Agent Runbook

Bu dosya, ajanlarin projede tekrar eden operasyonlarda ayni engellere takilmamasini saglayan surec hafizasidir. `AGENTS.md` ana kurallari belirler; bu dosya ise uygulanabilir kontrol listelerini ve daha once gorulen durumlarin cozumlerini tutar.

## Kullanim Kurallari

- Yeni bir not sadece tekrar etme ihtimali olan, dogrulanmis bir durum icin eklenir.
- Secret, token, `.env.local` icerigi, kisisel erisim bilgisi veya gecici hata detaylari yazilmaz.
- Kalici davranis kurali gerekiyorsa `AGENTS.md` kisa tutulur, detay burada tutulur.
- Kod veya dokuman degisikliginden sonra ilgili dogrulama komutlari calistirilir ve sonuc not edilir.

## Genel Is Akisi

| Adim | Yapilacak | Dogrulama |
| --- | --- | --- |
| 1 | Gorev proje yapisini anlamayi gerektiriyorsa once `graphify query` calistir. | Graphify sonucu ilgili dosya/bolumleri isaret ediyor. |
| 2 | Degisiklik kapsamindaki dosyalari dar tut. | `git status -sb` beklenen dosyalari gosteriyor. |
| 3 | Manuel editlerde `apply_patch` kullan. | Diff sadece hedeflenen satirlari iceriyor. |
| 4 | Kod degisikliginden sonra `npm.cmd run type-check` ve `npm.cmd run lint` calistir. | Iki komut da basarili. |
| 5 | Gerekiyorsa `graphify update .` calistir. | `graphify-out/graph.json` guncelleniyor. |
| 6 | Son durumda `git status -sb` ile temizlik/kalan degisiklikleri kontrol et. | Beklenen durum net. |

## Graphify Kurulum ve Dogrulama

| Durum | Belirti | Neden | Cozum | Dogrulama |
| --- | --- | --- | --- | --- |
| Paket eski | `graphify --version` eski surum gosterir. | Lokal `graphifyy` paketi guncel degildir. | `python -m pip install --upgrade graphifyy` | `graphify --version` guncel surumu gosterir. |
| Skill eksik | `.agents/skills/graphify/SKILL.md` yoktur. | Proje icin Graphify kurulumu yapilmamistir. | `graphify install --project --platform codex` | Skill dosyasi ve `.codex/hooks.json` vardir. |
| Wiki index yok | `graphify-out/wiki/index.md` yoktur. | Wiki ciktilari uretilmemistir. | Graphify wiki uretimi veya Graphify API ile wiki export calistirilir. | `graphify-out/wiki/index.md` vardir. |
| Update izin hatasi | `[WinError 5]` veya `Permission denied` | Windows/sandbox yazma izni engeli. | Ayni komutu yetkili calistir. | `graphify update .` basarili olur. |

## Graphify Hook Kurulumu

| Durum | Belirti | Neden | Cozum | Dogrulama |
| --- | --- | --- | --- | --- |
| Git repo yok | `Not in a git repository` | `.git/` dizini yoktur. | Kullanici amaci uygunsa `git init` calistir. | `git rev-parse --is-inside-work-tree` `true` doner. |
| Hook yazma izni yok | `Permission denied: .git/hooks/...` | Windows/sandbox hook dosyasi yazimini engeller. | `graphify hook install` komutunu yetkili calistir. | `graphify hook status` `post-commit` ve `post-checkout` icin `installed` doner. |
| Hook amaci belirsiz | Kullanici "ne ise yarar" diye sorar. | Git hook otomasyonu yeni olabilir. | Hook'un commit/checkout sonrasi Graphify baglamini guncel tutmaya yardim ettigini acikla. | Kullanici hangi otomasyonun kuruldugunu bilir. |

## GitHub Ilk Push Sureci

| Adim | Komut | Not |
| --- | --- | --- |
| 1 | `git status -sb` | Kapsami gormeden stage/push yapma. |
| 2 | `git status --ignored --short` | `.env.local`, `.next`, `node_modules`, build artefactlari disarida mi kontrol et. |
| 3 | `git grep --cached -n -I -E "<secret-patterns>"` | Gercek secret aramasi yap; bos `.env.example` anahtar adlari sorun degildir. |
| 4 | `npm.cmd run type-check` | TypeScript kontrolu. |
| 5 | `npm.cmd run lint` | ESLint kontrolu. |
| 6 | `git commit -m "Initial Piaq project"` | Ilk commit veya uygun kisa mesaj. |
| 7 | `git remote add origin <repo-url>` | Remote yoksa ekle; varsa `git remote -v` ile dogrula. |
| 8 | `git ls-remote --heads origin` | Uzak repo bos mu, mevcut branch var mi kontrol et. |
| 9 | `git push -u origin main` | Repo bos ise normal push yeterli; force push kullanma. |
| 10 | `git status -sb` ve `git ls-remote --heads origin` | Yerel branch remote'u track ediyor ve uzak `main` olustu mu dogrula. |

## GitHub Ilk Push Sorunlari

| Durum | Belirti | Neden | Cozum | Dogrulama |
| --- | --- | --- | --- | --- |
| GitHub CLI login yok | `gh auth status` hata verir. | `gh auth login` yapilmamistir. | Kullanici terminalde `gh auth login` calistirir veya mevcut Git credential ile push denenir. | `gh auth status` basarili veya `git push` basarili. |
| Remote yok | `No such remote 'origin'` | Repo remote'a baglanmamistir. | `git remote add origin <repo-url>` | `git remote -v` origin'i gosterir. |
| Config yazma izni yok | `could not lock config file .git/config` | Windows/sandbox izni. | Remote komutunu yetkili calistir. | `git remote -v` origin'i gosterir. |
| Commit izin hatasi | `Unable to create .git/index.lock` | Windows/sandbox izni. | Commit komutunu yetkili calistir. | `git log --oneline -1` yeni commit'i gosterir. |
| Uzak repo bos | `git ls-remote --heads origin` bos doner. | GitHub reposunda branch yoktur. | `git push -u origin main` | `refs/heads/main` uzak repoda gorunur. |

## Windows Izin ve Escalation Notlari

| Belirti | Yapilacak |
| --- | --- |
| `.git/config`, `.git/index.lock` veya `.git/hooks/*` icin permission hatasi | Ayni komutu yetkili calistir ve gerekceyi net yaz. |
| Network veya GitHub erisim hatasi | Onemli komutsa yetkili calistir; hala basarisizsa kimlik/remote durumunu acikla. |
| Destructive komut ihtiyaci | Kullanici acikca istemedikce calistirma. |

## Runbook Guncelleme Kriteri

Yeni bir durum su kosullari sagliyorsa bu dosyaya eklenebilir:

- Ayni projede tekrar yasanma ihtimali yuksek.
- Cozumu net ve dogrulanabilir.
- Not, gizli bilgi veya kullaniciya ozel token icermiyor.
- `AGENTS.md` icin fazla detayli, ama ajan calismasi icin faydali.
