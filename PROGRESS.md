# İlerleme Notları

### [2026-11-12 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - `feature/light-theme-stage`: neon sahne (`.stage`) artık temaya uyuyor; açık temada beyaz-lavanta zemin, koyu yazı, eyebrow/`h1 small` neon mor (`--accent-text`), ghost düğme mor kenarlı
  - Pixel M07 açık temada da sarı; kenarı `#a88600`, parıltısı ayrı `px-glow-light` animasyonuyla koyulaştırıldı
  - `startParticles` artık her canvas için temaya göre DARK/LIGHT seçiyor (eski `ambient` parametresi kaldırıldı); tema değişince sahne de anında yeniden çiziliyor
  - Etkilenen sayfalar: ana sayfa, 404, tasarim.html (hepsi `.stage` kullanıyor)
- **Son Commit:** 245e0e1 Merge pull request #21 from Mehbur07/fix/win11-card-storage-text
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Açık küçük işler: MehburOS / MehBrowser / MAIO / Mehbur's Mini Map açıklamaları, Discord davetinin süresiz olduğunun kontrolü, lisansı olmayan public repolar için lisans kararı
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Headless Chrome 500px'ten dar pencerede sayfayı kesik çiziyor; telefon görünümünü gerçek cihazda veya DevTools'ta kontrol et

### [2026-11-11 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - `fix/win11-card-storage-text`: Win11 Web sitesi artık dosyaları cihazda oluşturulan "Win11 Web" klasörüne kaydettiği için kart açıklaması (TR + EN `projects.w11.text`) buna göre düzeltildi
- **Son Commit:** 05e9157 Merge pull request #19 from Mehbur07/feature/win11-web-project
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Açık küçük işler: MehburOS / MehBrowser / MAIO / Mehbur's Mini Map açıklamaları, Discord davetinin süresiz olduğunun kontrolü, lisansı olmayan public repolar için lisans kararı
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - "Hazır Projeler" bölüm açıklaması hâlâ "indirilebilir projeler" diyor; Win11 Web indirilmiyor
  - Win11 Web'in özellikleri değişirse bu karttaki açıklamayı da güncellemek gerekir

### [2026-11-11 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - `fix/404-local-preview`: 404.html'deki `<base href="/">` artık küçük bir script ile yalnızca http/https'te ekleniyor; `file://` ile açılınca CSS/JS diskin kökünde aranmıyor, sayfa tasarımlı görünüyor
  - Sebep: kullanıcı 404.html'i doğrudan açınca tasarımsız gördü; canlı sitede sorun yoktu
  - 404 sayfasını referans görsele göre yeniden tasarlama fikri kullanıcı tarafından geri alındı; tasarım aynı kaldı
  - Test: file:// ve iç içe adresten (/olmayan/sayfa) servis eden yerel sunucuda ekran görüntüsüyle doğrulandı
- **Son Commit:** 05e9157 Merge pull request #19 from Mehbur07/feature/win11-web-project
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Açık küçük işler: MehburOS / MehBrowser / MAIO / Mehbur's Mini Map açıklamaları, Discord davetinin süresiz olduğunun kontrolü, lisansı olmayan public repolar için lisans kararı
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Diğer sayfalarda `<base>` yok, onlar doğrudan açılınca zaten düzgün görünüyor; base yalnızca 404'te gerekli
  - "Hazır Projeler" bölüm açıklaması hâlâ "indirilebilir projeler" diyor; Win11 Web indirilmiyor

### [2026-11-11 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - `feature/win11-web-project`: Projelerim > Hazır Projeler'e Win11 Web kartı (https://mehbur07.github.io/win11-sanal-makine-site/, repo `win11-sanal-makine-site`, public)
  - İndirme yok: birincil düğme "Siteye Git" (`projects.visit`, yeni sekmede), yanında "Kaynak Kodu"; "Sürüm Notları" yok
  - Logo `assets/img/win11web.svg` (dört mavi kare, SVG); yeni çeviri anahtarları `projects.typeWeb`, `projects.w11.*`, `alt.w11`
  - Ana sayfa sayacı "7 hazır · 5 geliştiriliyor" (TR + EN)
- **Son Commit:** 70a29fe Merge pull request #18 from Mehbur07/fix/minimap-remove-source
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Açık küçük işler: MehburOS / MehBrowser / MAIO / Mehbur's Mini Map açıklamaları, Discord davetinin süresiz olduğunun kontrolü, lisansı olmayan public repolar için lisans kararı
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - "Hazır Projeler" bölüm açıklaması hâlâ "indirilebilir projeler" diyor; Win11 Web indirilmiyor, istenirse metin genelleştirilebilir
  - Bir repo gizlenip açıldığında Projelerim'deki "Kaynak Kodu" düğmesini de güncellemek gerekir

### [2026-11-11 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Kullanıcı isteğiyle `mehburs-mini-map-mod` ve `MehburAI` repoları PRIVATE yapıldı (MehburAI'ın 2 yıldızı kalıcı olarak silindi — kullanıcıya soruldu, onayladı)
  - `fix/minimap-remove-source`: Projelerim'de bu iki kartın "Kaynak Kodu" düğmesi kaldırıldı; kalan kaynak düğmeleri: Launcher (Windows + Linux), Death Note, Iron Golem Troll, Garip Şeyler MC, Mehburity
  - Hakkımda'daki "Projelerim açık kaynaklıdır." cümlesine dokunulmadı
- **Son Commit:** 64ed427 Merge pull request #17 from Mehbur07/chore/launcher-v0.32.0
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Açık küçük işler: MehburOS / MehBrowser / MAIO / Mehbur's Mini Map açıklamaları, Discord davetinin süresiz olduğunun kontrolü, lisansı olmayan public repolar (deathnote-mode, mehburity-mode, garipseylermc) için lisans kararı
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Bir repo gizlenip açıldığında Projelerim'deki "Kaynak Kodu" düğmesini de güncellemek gerekir (gizli repo bağlantısı ziyaretçide 404 verir)

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - `fix/ambient-particle-network`: kullanıcı parlayan "ateş böceği" parçacıkları istemedi; ana sayfa sahnesindeki çizgilerle bağlı parçacık AĞININ aynısını bütün sitede istedi
  - `startParticles(canvas, ambient)` yeniden kullanıldı; `startAmbientParticles` artık sadece ekrana sabit canvas'ı oluşturup bu fonksiyonu çağırıyor (eski sprite kodu silindi)
  - Renkler `DARK` (sahneyle birebir) / `LIGHT` (açık temada #d9b400 sarı, #7f2cff mor, çizgi opaklığı .35); tema değişince MutationObserver ile yeniden çizim
  - "Hareketi azalt" açıkken ağ artık gizlenmiyor, sahnedeki gibi sabit duruyor
- **Son Commit:** 0c2f3c4 Merge pull request #15 from Mehbur07/feature/ambient-particles
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Açık küçük işler: MehburOS / MehBrowser / MAIO / Mehbur's Mini Map açıklamaları, Discord davetinin süresiz olduğunun kontrolü, lisansı olmayan repolar için lisans kararı
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Headless Chrome (--disable-gpu) ekran görüntülerinde M07'nin kare kare beliren CSS animasyonu yarım görünür — test aracının yavaşlığı, gerçek tarayıcıda sorun yok; tam hali görmek için --force-prefers-reduced-motion ile çek

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - `feature/ambient-particles`: bütün sayfalarda ekrana sabit `canvas.ambient-particles` (main.js `startAmbientParticles`), neon sarı parlayan noktalar yukarı doğru süzülür, salınır, yanıp söner
  - Katman düzeni: canvas `z-index:0`, `main .container` ve `.site-footer .container` `z-index:1` → parçacıklar bölüm zeminlerinin (section--soft, footer) üstünde ama kartların/yazıların arkasında; `pointer-events:none`
  - Açık temada daha doygun sarı sprite (beyaz zeminde seçilsin); "hareketi azalt" açıkken katman hiç eklenmez; sekme gizliyken animasyon durur
- **Son Commit:** 1558661 Merge pull request #14 from Mehbur07/feature/open-source-links
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Açık küçük işler: MehburOS / MehBrowser / MAIO / Mehbur's Mini Map açıklamaları, Discord davetinin süresiz olduğunun kontrolü, lisansı olmayan repolar için lisans kararı
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Yeni bir sayfa bölümü `.container` dışında içerik koyarsa o içerik parçacıkların altında kalır (sadece görsel; tıklama etkilenmez)

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - `feature/open-source-links`: Hakkımda'ya tam olarak "Projelerim açık kaynaklıdır." (`about.openSource`), art arda paragraflar için `.about-intro p + p` boşluğu
  - Projelerim'de "Kaynak Kodu" düğmesi (`projects.source`): Launcher (Windows + Linux → MehburMC-Launcher), deathnote-mode, irongolemtroll-mode, garipseylermc, mehburity-mode, MehburAI, mehburs-mini-map-mod. MehburOS / MehBrowser repoları gizli, MAIO'nun reposu yok → düğme yok
  - Kullanıcı isteğiyle `deathnote-mode` ve `mehburity-mode` repoları PUBLIC yapıldı; öncesinde tüm commit geçmişleri secret taramasından geçti (temiz; Mehburity testlerindeki `test-key-123` sahte değer). İkisinde Dependabot uyarıları açıldı
  - Kullanıcı kararı: PyAI bu sitede yayınlanmayacak
- **Son Commit:** 98a09b3 Merge pull request #13 from Mehbur07/feature/minimap-card
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Açık küçük işler: MehburOS / MehBrowser / MAIO / Mehbur's Mini Map açıklamaları, Discord davetinin süresiz olduğunun kontrolü
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - deathnote-mode, mehburity-mode, garipseylermc ve MehburAI repolarında LICENSE dosyası yok (hukuken "açık kaynak" sayılmaları için lisans gerekir) — kullanıcıya önerildi, karar onda
  - deathnote-mode commit'leri gerçek gmail adresiyle atılmış; repo açık olduğu için bu adres commit geçmişinde görünür (adres zaten sitenin İletişim sayfasında da var)

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - `feature/minimap-card`: "Üzerinde Çalıştığım Projeler" bölümüne Mehbur's Mini Map kartı (MAIO'dan sonra), rozet "Geliştiriliyor"
  - Logo: kullanıcının verdiği 512×512 piksel-art PNG → `assets/img/mehbursminimap.png` (256×256, en yakın komşu küçültme, 2 KB); orijinali `kaynak-gorseller/mehbursminimap-logo.png`
  - Açıklama yer tutucu ("Kendi mini harita projem. Detaylar çok yakında!") — projenin kaynağı bu bilgisayarda bulunamadı; TR/EN eklendi (`alt.minimap`, `projects.minimap.text`)
  - Ana sayfa sayacı "6 hazır · 5 geliştiriliyor"
- **Son Commit:** a01fe73 Merge pull request #12 from Mehbur07/feature/mehpix-link
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Açık küçük işler: MehburOS / MehBrowser / MAIO / Mehbur's Mini Map için gerçek açıklamalar, Discord davetinin süresiz olduğunun kontrolü
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Projelerim'e kart eklenip çıkarıldığında ana sayfadaki `home.projectsCount` sayacını (TR HTML + EN translations.js) da güncellemek gerekir

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - `feature/mehpix-link`: MehPiX sitesi yayında (https://mehpix.github.io/); ana sayfadaki kartın pasif "Siteye Git · Yakında" düğmesi gerçek bağlantı oldu (yeni sekmede açılır)
  - Rozet "Yapım aşamasında" → "Yayında"; açıklama sitenin gerçek içeriğine göre yazıldı: MehPiX artık "görsel üretim sitesi" değil, PyAI ve Quiz projelerini sunan bir yazılım stüdyosu
  - TR/EN metinleri güncellendi (`home.mehpixBadge`, `home.mehpixText`, `home.mehpixCta`)
- **Son Commit:** a810f34 Merge pull request #11 from Mehbur07/fix/light-theme-colors
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Açık küçük işler: MehburOS / MehBrowser / MAIO açıklamaları, Discord davetinin süresiz olduğunun kontrolü
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - MehPiX sitesinin içeriği değişirse (yeni proje vb.) ana sayfadaki kart açıklamasını da güncellemek gerekebilir

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - `fix/light-theme-colors`: açık temada `--yellow`/`--yellow-edge` koyu temayla aynı (#ffe62e/#d9b400); süs moru `--purple`/`--purple-deep` = #cfa6ff (beyaza yakın neon lavanta), `--border` #e4d2ff, `--glow-purple` lavanta
  - Kullanıcı seçimi: mor YAZILAR beyaza yakın olmasın (okunmaz), daha parlak neon mor olsun → `--accent-text` #7f2cff (#6a1fd1 yerine; açık zeminlerde kontrast ≥4.5)
  - Açık temada `.badge--purple` yazısı koyu (`--on-accent`), çünkü rozet zemini artık açık
  - Erişilebilirlik betiği 6 sayfa × 2 tema temiz; koyu tema değişmedi
- **Son Commit:** 494372e Merge pull request #10 from Mehbur07/docs/project-complete
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Açık küçük işler: MehburOS / MehBrowser / MAIO açıklamaları, Discord davetinin süresiz olduğunun kontrolü, MehPix "Siteye Git" bağlantısı
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Açık temada yazı morunu açmak gerekirse #7f2cff'den daha açık bir ton beyaz zeminde 4.5:1 kontrastın altına düşer

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Kullanıcı Lovable sitesini yayından kaldırdı (proje silinmedi); `mehbur07.lovable.app` artık 404 "Project not found" veriyor
  - ROADMAP'te Faz 7 ve dolayısıyla bütün fazlar (0–7) ✅; v1.0.0 tag'i main'de (`8c0612f`)
- **Son Commit:** 8c0612f Merge pull request #9 from Mehbur07/chore/release-v1.0.0
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Yol haritası tamamlandı. Açık kalan küçük işler: MehburOS / MehBrowser / MAIO için gerçek açıklamalar, Discord davetinin süresiz olduğunun kontrolü, MehPix sitesi hazır olunca ana sayfadaki "Siteye Git" düğmesinin bağlanması
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Yeni değişiklikler CHANGELOG'un [Unreleased] bölümüne yazılır; anlamlı bir set birikince yeni semver tag (örn. v1.1.0) önerilir

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Faz 7 (`chore/release-v1.0.0`): CHANGELOG'daki [Unreleased] maddeleri `[1.0.0] - 2026-11-10` başlığına taşındı, karşılaştırma linkleri eklendi; README durum satırı "v1.0.0 yayında"
  - Merge sonrası main'e `v1.0.0` (annotated) tag'i atılacak; ayrı bir GitHub Release açılmıyor (repo'daki "Latest" launcher olarak kalsın)
  - Son kontrol: canlı sitede 6 sayfa, 30 iç link/dosya, 7 indirme ve 5 sürüm notu bağlantısı ile 6 sosyal hesap çalışıyor
  - Discord bu bilgisayardan doğrulanamadı: Türkiye'de Discord erişim engeli var (discord.com da açılmıyor); davetin geçerliliğini kullanıcı kontrol etmeli
  - Kullanıcı Search Console'da doğrulamayı yaptı ve site haritası gönderme ekranına geldi
- **Son Commit:** f35cb97 Merge pull request #8 from Mehbur07/chore/search-console
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Kullanıcı Lovable sitesini panelden kapatır (önce sosyal medya biyografilerindeki eski lovable.app linklerini mehbur07.github.io ile değiştirir); sonra ROADMAP'te Faz 7 tamamen ✅
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Discord daveti süresiz değilse bir gün geçersiz olur; Discord'da "süresiz" davet oluşturulup `main.js` SOCIALS + `iletisim.html`'deki link güncellenmeli
  - Bundan sonraki her değişiklik CHANGELOG'da yeni [Unreleased] bölümüne yazılır

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Google Search Console: kullanıcı "URL öneki" mülkü (`https://mehbur07.github.io/`) oluşturdu; HTML etiketi yöntemiyle doğrulama için `google-site-verification` meta etiketi `index.html`'e eklendi (`chore/search-console`)
  - Kullanıcı yayından sonra Search Console'da "Doğrula"ya basacak, `sitemap.xml`'i gönderecek ve ana sayfa için dizine ekleme isteyecek
- **Son Commit:** cc50c7b Merge pull request #7 from Mehbur07/chore/polish
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Faz 7 — v1.0.0 tag'i ve CHANGELOG sürüm başlığı; kullanıcı Lovable sitesini panelden kapatır
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - `google-site-verification` etiketi silinirse Search Console sahipliği düşer; ana sayfada kalmalı

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Faz 6 (`chore/polish`): 5 sayfadan `noindex` kaldırıldı (sadece `tasarim.html` ve `404.html` kapalı); her sayfaya `canonical`, Open Graph / Twitter kartı etiketleri, `theme-color`; ana sayfaya `Person` yapılandırılmış verisi (JSON-LD, `sameAs` = sosyal hesaplar)
  - Favicon maskot logodan üretildi: kökte `favicon.ico` (16/32/48), `assets/img/favicon-32.png`, `apple-touch-icon.png` (180). Paylaşım görseli `assets/img/og-image.jpg` (1200x630, 79 KB) site tasarımıyla HTML'den çizildi
  - `robots.txt`, `sitemap.xml` (5 sayfa) ve temalı `404.html` (`<base href="/">` ile her adreste çalışır; pixel yazıya "4" harfi eklendi) eklendi
  - Lighthouse'u yerelde `pnpm dlx` ile çalıştırmak otomatik güvenlik kontrolünce engellendi; yerine kendi erişilebilirlik betiğimle (kontrast, alt, etiket, başlık sırası, dokunma alanı, tekrar eden id) 6 sayfa × 2 tema tarandı → temiz (betik bilerek bozuk bir sayfada 7/7 sorunu yakaladı). Hız/SEO ölçümü yayından sonra Google PageSpeed Insights ile canlı sitede yapılacak
- **Son Commit:** 76ae0ba Merge pull request #6 from Mehbur07/feature/linux-launcher
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Faz 7 — v1.0.0 tag'i ve CHANGELOG sürüm başlığı; kullanıcı Lovable sitesini panelden kapatır. İsteğe bağlı: Google Search Console'a site + sitemap eklemek
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Yeni sayfa eklenirse `sitemap.xml` ve sayfanın `canonical`/`og:*` etiketleri güncellenmeli
  - Paylaşım önizlemeleri (Discord, X vb.) önbellek tutar; görsel değişirse eski önizleme bir süre görünebilir

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Kullanıcı deneme e-postasının geldiğini doğruladı; iletişim formu PR #5 merge edildi
  - `feature/linux-launcher`: Linux .deb paketi (Ubuntu 26.04 / MehburOS, amd64, 8,2 MB) ayrı tag açılmadan mevcut `mehburmc-launcher-v0.31.2` Release'ine ikinci dosya olarak yüklendi (aynı uygulama, aynı sürüm); Release notları iki sistemin kurulumunu anlatacak şekilde yenilendi
  - Projelerim'e "MehburMC Launcher Linux Version" kartı (Windows kartının yanında) ve kopyalanabilir `sudo apt install` komut kutusu (`.cmd` stili) eklendi; ana sayfa sayacı "6 hazır"
  - .deb içindeki `control` dosyasından bağımlılıklar okundu (pkexec, libwebkit2gtk-4.1-0, libgtk-3-0); paket gömülü anahtar için tarandı (temiz), yüklenen dosya SHA-256 ile doğrulandı
- **Son Commit:** e06bfff Merge pull request #5 from Mehbur07/feature/contact-form
- **Aktif Branch:** main
- **Sıradaki İlk İş (Next Action):** Faz 6 — `chore/polish`: SEO (noindex kaldırma, meta/OG etiketleri, sitemap/robots), paylaşım önizlemesi, favicon, mobil/erişilebilirlik/hız testi
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Launcher'ın yeni sürümünde iki dosya (.exe ve .deb) da aynı Release'e yüklenmeli ve iki kartın bağlantıları güncellenmeli

### [2026-11-10 - Mehbur07]
- **Yapılanlar & Kararlar:**
  - Faz 5 (`feature/contact-form`, PR #5): `iletisim.html`'e Web3Forms mesaj formu (ad, e-posta, mesaj + `botcheck` spam tuzağı), `main.js`'e `setupContactForm` (fetch ile JSON gönderim, çift gönderim kilidi, iki dilli durum mesajları), `style.css`'e form stilleri ve `--success`/`--danger` renkleri
  - Erişim anahtarı boşsa form kendini kapatıp "henüz aktif değil" der; JS kapalıysa form normal POST ile yine gönderilir
  - Eski "form çok yakında" notu ve `.contact-note` stili kaldırıldı
  - Sahte sunucu cevabıyla test edildi: anahtar yok / başarı / API hatası / bağlantı hatası / geçersiz e-posta / dil değişimi — hepsi doğru
  - Kullanıcı Web3Forms anahtarını verdi ve sayfa koduna yazılmasını onayladı (anahtar herkese açık olmak üzere tasarlanmış, gizli değil); `iletisim.html`'deki `access_key` alanına yazıldı
  - Tarayıcı üzerinden gerçek bir deneme mesajı gönderildi, Web3Forms "success" döndü
- **Son Commit:** ada3f66 feat: add Web3Forms contact form
- **Aktif Branch:** main (`feature/contact-form` PR #5 ile merge edilecek)
- **Sıradaki İlk İş (Next Action):** Faz 6 — `chore/polish`: SEO (noindex kaldırma, meta/OG etiketleri, sitemap), son kontroller
- **Bilinen Sorunlar / Dikkat Edilmesi Gerekenler:**
  - Web3Forms anahtarı değişirse sadece `iletisim.html`'deki `access_key` değeri güncellenir; boş kalırsa form "henüz aktif değil" der
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
