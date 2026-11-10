# İlerleme Notları

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Faz 5 (`feature/contact-form`) başladı: `iletisim.html`'e Web3Forms mesaj formu (ad, e-posta, mesaj + `botcheck` spam tuzağı), `main.js`'e `setupContactForm` (fetch ile JSON gönderim, çift gönderim kilidi, iki dilli durum mesajları), `style.css`'e form stilleri ve `--success`/`--danger` renkleri
  - Erişim anahtarı boşsa form kendini kapatıp "henüz aktif değil" der; JS kapalıysa form normal POST ile yine gönderilir
  - Eski "form çok yakında" notu ve `.contact-note` stili kaldırıldı
  - Sahte sunucu cevabıyla test edildi: anahtar yok / başarı / API hatası / bağlantı hatası / geçersiz e-posta / dil değişimi — hepsi doğru
- **Son Commit:** 3d99867 Merge pull request #4 from Mehbur07/feature/english
- **Aktif Branch:** feature/contact-form (PR açık, Web3Forms anahtarı bekleniyor)
- **Sıradaki İlk İş (Next Action):** Kullanıcıdan Web3Forms access key'i ve sayfa koduna yazma onayını al → `iletisim.html`'deki `access_key` değerine yaz → gerçek bir deneme mesajı gönderip e-postaya geldiğini kullanıcıya doğrulat → ROADMAP'te Faz 5'i ✅ yap → PR'ı merge et
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Anahtar girilmeden merge edilirse form "henüz aktif değil" der (site bozulmaz ama form çalışmaz)
  - Web3Forms ücretsiz planı aylık 250 mesajla sınırlı
  - `minlength` kuralı tarayıcı gereği sadece klavyeyle yazılan metinde devreye girer

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Faz 4 (`feature/english`, PR ile main'e): `translations.js` `en` sözlüğüne bütün sayfa metinlerinin İngilizcesi eklendi (88 anahtar; eksik/fazla anahtar yok)
  - Daha önce çevrilmeyen yerler de çevrilebilir yapıldı: 5 sayfanın `<title>`'ı, 10 görselin `alt` açıklaması, MehburAI bandı ("NOT STABLE"), "1,4 MB" → "1.4 MB"
  - Çeviri kararları: "Ters Dünya" → "Upside Down"; menüde "Sosyal Medya" → "Social Media"; özel adlar (Garip Şeyler MC, MehPiX) çevrilmedi
  - Release notları Türkçe kaldı; site İngilizcede bunu "(in Turkish)" diye belirtiyor
  - Headless Chrome ile TR→EN→TR geçişi test edildi: metin, başlık, alt ve band doğru değişip geri dönüyor, seçim localStorage'da kalıyor
- **Son Commit:** 6ef9641 Merge pull request #3 from Mehbur07/feature/downloads
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Faz 5 — `feature/contact-form`: Web3Forms ile iletişim formu (kullanıcı site canlıyken Web3Forms'tan access key alacak; key'in sayfa koduna yazılması için onayı bekleniyor)
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Meta description'lar Türkçe kaldı (arama motorları JS çalıştırmadan okur); Faz 6 SEO işinde ele alınabilir
  - Yeni bir HTML yazısı eklenirse İngilizcesi `translations.js`'e de yazılmalı, yoksa EN modda Türkçe görünür
  - İkon yolları kökten (`/assets/icons/...`); dosyaya çift tıklayınca ikonlar görünmez, yerel sunucuyla sorun yok

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Faz 3 (`feature/downloads`, PR ile main'e): 5 GitHub Release oluşturuldu — `mehburmc-launcher-v0.31.2` (Latest), `deathnote-v1.0.0`, `irongolemtroll-v1.0.0`, `garipseylermc-v0.1.0`, `mehburity-v0.1.0`
  - Release notları Türkçe: açıklama, gereksinimler (jar'lardaki `fabric.mod.json`'dan: Fabric Loader ≥0.19.5, MC ~26.2, Java ≥25, Fabric API; Garip Şeyler için GeckoLib ≥5.5.5), kurulum adımları, SHA-256
  - Yüklenen dosyalar geri indirilip SHA-256 ile doğrulandı; .exe gömülü anahtar/token için tarandı (temiz)
  - Kartlara "İndir" (doğrudan dosya) + "Sürüm Notları" (Release sayfası) düğmeleri ve dosya boyutu eklendi
- **Son Commit:** 3c02e44 Merge pull request #2 from Mehbur07/feature/pages
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Faz 4 — `feature/english`: `translations.js` içindeki `en` sözlüğüne bütün sayfa içeriklerinin İngilizcesini eklemek
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Launcher imzasız olduğu için Windows SmartScreen uyarısı çıkabilir (Release notunda "Ek bilgi → Yine de çalıştır" anlatıldı)
  - Kartlardaki boyut yazısı ("1,4 MB") çevrilmiyor; Faz 4'te gerekirse ele alınır
  - Yeni sürümde: yeni Release + `projelerim.html`'deki iki bağlantı ve sürüm satırı güncellenmeli (README'de anlatıldı)
  - İkon yolları kökten (`/assets/icons/...`); dosyaya çift tıklayınca ikonlar görünmez, yerel sunucuyla sorun yok

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
