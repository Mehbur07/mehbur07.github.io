# Mehbur07 — Kişisel Site

Mehmet Burak ŞAHİN'in (Mehbur07) kişisel sitesi: projeler, Minecraft modları, sosyal medya ve iletişim.

🌐 **Adres:** https://mehbur07.github.io

> Durum: **Faz 1 tamamlandı** — Tasarım temeli hazır; ana sayfada yeni tasarımla bir "yenileniyor" sayfası var. Yol haritası için [ROADMAP.md](ROADMAP.md) dosyasına bakın.

## Kullanılan teknolojiler

- Düz **HTML, CSS ve JavaScript** (framework yok, derleme adımı yok)
- Yayın: **GitHub Pages** (`main` branch'indeki dosyalar olduğu gibi yayınlanır)
- İndirilebilir dosyalar (launcher, modlar): **GitHub Releases**

## Bilgisayarda çalıştırma

Kurulum gerekmez. İki yol var:

1. **En basit:** `index.html` dosyasına çift tıklayıp tarayıcıda açın.
2. **Yerel sunucu ile** (sayfalar arası linkler gerçek sitedeki gibi çalışır):
   ```bash
   python -m http.server 8000
   ```
   Ardından tarayıcıda http://localhost:8000 adresini açın.

## Klasör yapısı

```
index.html               Ana sayfa
tasarim.html             Tasarım vitrini (bütün bileşenlerin önizlemesi, arama motorlarına kapalı)
assets/css/style.css     Ortak stil: renkler, yazı tipleri, düğmeler, kartlar, menü
assets/js/main.js        Menü ve alt bilgi, tema düğmesi, dil seçimi, pixel M07, parçacık efekti
assets/js/translations.js  TR/EN metinleri
assets/img/              Siteye giren (küçültülmüş) görseller
ROADMAP.md               Proje fazları
PROGRESS.md              Oturumlar arası ilerleme notları
CHANGELOG.md             Değişiklik geçmişi
kaynak-gorseller/        Logoların orijinalleri (git'e girmez, sadece bu bilgisayarda)
```

## Sık yapılan düzenlemeler

- **Renkleri değiştirmek:** `assets/css/style.css` dosyasının en üstündeki değişkenler (`--yellow`, `--purple` vb.). Açık temanın renkleri hemen altındaki `[data-theme="light"]` bölümünde.
- **Menüye sayfa eklemek:** `assets/js/main.js` içindeki `NAV` listesine bir satır ekle, metnini `translations.js` dosyasına iki dilde yaz.
- **Sosyal medya linkleri:** `assets/js/main.js` içindeki `SOCIALS` listesi.
- **Bir yazıyı çevrilebilir yapmak:** HTML'de etikete `data-i18n="anahtar"` ekle, `translations.js` içine `tr` ve `en` karşılığını yaz.

## Yayına alma

`main` branch'ine merge edilen her değişiklik birkaç dakika içinde otomatik olarak https://mehbur07.github.io adresinde yayınlanır. `main` korumalıdır; değişiklikler Pull Request ile girer.
