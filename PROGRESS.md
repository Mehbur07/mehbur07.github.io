# İlerleme Notları

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Faz 2 (`feature/pages`, PR ile main'e): `projelerim.html`, `hakkimda.html`, `sosyal-medya.html`, `iletisim.html` eklendi; ana sayfaya bölüm kartları, menüye 4 sayfa
  - Metinler eski Lovable sitesinden birebir alındı (kopyası: `kaynak-gorseller/eski-site-metinleri.txt`); mod açıklamaları jar içindeki `fabric.mod.json`'dan Türkçeye çevrildi
  - Launcher açıklamasından "~5 MB" kaldırıldı (yeni exe 14 MB). MehburOS/MehBrowser/MAIO için kısa yer tutucu açıklamalar yazıldı — kullanıcı düzeltecek
  - Çeviri sistemi değişti: içerik Türkçesi HTML'de, `translations.js` içinde sadece `en` (+ JS'in ürettiği ortak yazıların `tr`'si). EN eksikse Türkçe kalır
  - Görseller System.Drawing ile küçültüldü: 12 MB → 166 KB. Marka ikonları Simple Icons v13.21.0 (CC0) `assets/icons/`'da
- **Son Commit:** d9c616f Merge pull request #1 from Mehbur07/feature/design-system
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Faz 3 — `feature/downloads`: launcher (v0.31.2) ve 4 jar'ı GitHub Releases'e yükleyip "İndir · Yakında" düğmelerini bağlamak
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - İkon yolları kökten (`/assets/icons/...`); `index.html` dosyaya çift tıklanarak açılırsa ikonlar görünmez, yerel sunucuyla (`python -m http.server`) sorun yok
  - MehPix kartındaki "Siteye Git" pasif; MehPix sitesi hazır olunca bağlanacak

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Faz 1 (`feature/design-system`, PR ile main'e): ortak `style.css` (renk değişkenleri, düğme/kart/rozet bileşenleri), `main.js` (header/footer tek yerden, tema, dil, pixel M07, parçacık ağı), `translations.js`
  - Yazı tipleri: Oxanium (başlık), Manrope (metin), IBM Plex Mono (etiket) — referans sitenin fontları bilerek kullanılmadı
  - Varsayılan tema koyu, varsayılan dil TR; seçimler tarayıcıda (localStorage) hatırlanıyor. Neon "sahne" iki temada da koyu kalıyor
  - Menüde şimdilik sadece "Ana Sayfa" var; sayfalar Faz 2'de eklenince `NAV` listesine eklenecek (yayında kırık link olmasın diye)
  - `tasarim.html`: bileşen vitrini (noindex)
- **Son Commit:** 4f1b656 chore: initial project setup with under-construction page
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Faz 2 — `feature/pages` branch'inde sayfalar ve içerik (ana sayfa kartları, Projelerim, Hakkımda, Sosyal Medya, İletişim, görsel küçültme)
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Bilgisayarda Pillow vb. görsel aracı yok; Faz 1'de logo Windows System.Drawing ile küçültüldü. Faz 2'de WebP gerekirse araç kurulumu için kullanıcıya sorulmalı
  - Headless Chrome en az 500px genişlik açıyor; mobil kontrol 390px iframe içinde yapıldı
  - Site hâlâ `noindex` (Faz 6'da kaldırılacak)

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Eski Lovable sitesi GitHub Pages'e (https://mehbur07.github.io) düz HTML/CSS/JS ile taşınıyor; fazlar ROADMAP.md'de
  - Renkler neon sarı + koyu neon mor; pixel "M07" yazısı; açık/koyu tema; TR/EN dil seçimi
  - Faz 0: git kurulumu, README/CHANGELOG/ROADMAP, geçici "yapım aşamasında" sayfası, mevcut boş `mehbur07.github.io` reposu kullanıldı (public)
  - Logo orijinalleri `kaynak-gorseller/` klasöründe (git'e girmez)
- **Son Commit:** ilk yükleme, commit yok
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Faz 1 — `feature/design-system` branch'inde tasarım temeli (renkler, yazı tipleri, menü, tema düğmesi, pixel M07, dil altyapısı)
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Mod jar'ları `E:\Projelerim\Java\...\*.jar`, launcher `C:\Users\pc\Desktop\MehburMCLauncher.exe` (v0.31.2) — Faz 3'te Releases'e yüklenecek, repoya konmayacak
  - Web3Forms erişim anahtarı henüz yok (Faz 5)
  - MehPix sitesi henüz yok; kartta "Siteye Git" düğmesi şimdilik pasif kalmalı
  - Commit e-postasının (mehmetburaksahin07@gmail.com) GitHub hesabına ekli olduğu doğrulanmadı
