# Yol Haritası

Eski site (mehbur07.lovable.app) GitHub Pages üzerinde, düz HTML/CSS/JS ile yeniden yapılıyor.
Tasarım referansı: berkantsahin.com.tr (yalnızca yerleşim/kart yapısı; renkler ve yazı tipleri bize ait).

Her faz ayrı bir branch'te yapılır ve Pull Request ile `main`'e girer.

## Faz 0 — Hazırlık ve ilk yükleme ✅
- Git kimliği, `.gitignore`, `.gitattributes`, README, CHANGELOG, PROGRESS
- GitHub reposu, `main` koruma kuralı, Dependabot uyarıları
- GitHub Pages açık; geçici "yapım aşamasında" sayfası

## Faz 1 — Tasarım temeli (`feature/design-system`) ✅
- Renkler: neon sarı + koyu neon mor (açık temada daha koyu tonlar)
- Yazı tipleri, menü, alt bilgi, açık/koyu tema düğmesi
- Pixel **M07** yazısı (kodla çizilir, neon parlamalı)
- Dil altyapısı (TR/EN)

## Faz 2 — Sayfalar ve içerik (`feature/pages`) ✅
- Ana sayfa: giriş + kartlar (MehPix, Projelerim, Hakkımda, Sosyal Medya, İletişim)
- MehPix kartı: "Siteye Git" (site henüz yapım aşamasında)
- Hakkımda, Sosyal Medya, İletişim (e-posta: mehmetburaksahin07@gmail.com)
- Projelerim:
  - **Hazır:** MehburMC Launcher 0.31.2, Death Note, Iron Golem Troll, Garip Şeyler MC, Mehburity
  - **Üzerinde çalıştığım:** MehburAI ("STABİL DEĞİL" polis bandı, indirme yok), MehburOS, MehBrowser, MAIO (Mehbur's Auto Inventory Organizer)
- Görsellerin küçültülmesi (hedef: toplam 1 MB altı)

## Faz 3 — İndirmeler (`feature/downloads`) ✅
- Launcher ve 4 mod GitHub Releases'e yüklenir (her biri ayrı tag, örn. `deathnote-v1.0.0`)
- Kartlardaki "İndir" düğmeleri bağlanır
- Mod gereksinimleri kartlarda: Fabric, Minecraft 26.2, Java 25, Fabric API (+ Garip Şeyler için GeckoLib)

## Faz 4 — İngilizce (`feature/english`) ✅
- Tüm metinlerin çevirisi, dil seçiminin tarayıcıda hatırlanması

## Faz 5 — İletişim formu (`feature/contact-form`) ✅
- Web3Forms erişim anahtarı alınır, form bağlanır ve test edilir

## Faz 6 — Cilalama (`chore/polish`) ✅
- SEO, paylaşım önizlemesi, favicon, mobil/erişilebilirlik/hız testi

## Faz 7 — Yayın ve geçiş
- ✅ Son kontroller, `v1.0.0` tag'i + CHANGELOG
- ⏳ Lovable sitesinin kapatılması (Lovable panelinden, kullanıcı yapar)
