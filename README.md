# Mehbur07 — Kişisel Site

Mehmet Burak ŞAHİN'in (Mehbur07) kişisel sitesi: projeler, Minecraft modları, sosyal medya ve iletişim.

🌐 **Adres:** https://mehbur07.github.io

> Durum: **Faz 2 tamamlandı** — Bütün sayfalar ve içerik yayında. İndirme bağlantıları (Faz 3), İngilizce içerik (Faz 4) ve mesaj formu (Faz 5) sırada. Yol haritası için [ROADMAP.md](ROADMAP.md) dosyasına bakın.

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
index.html               Ana sayfa (giriş + bölüm kartları)
projelerim.html          Hazır projeler ve üzerinde çalışılan projeler
hakkimda.html            Hakkımda ve hedefler
sosyal-medya.html        Sosyal medya hesapları
iletisim.html            İletişim kanalları
tasarim.html             Tasarım vitrini (bütün bileşenlerin önizlemesi, arama motorlarına kapalı)
assets/icons/            Marka ikonları (Simple Icons v13.21.0, CC0 lisanslı)
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
- **Bir yazıyı çevrilebilir yapmak:** HTML'de etikete `data-i18n="anahtar"` ekle (Türkçesi HTML'de kalır), İngilizcesini `translations.js` içindeki `en` bölümüne aynı anahtarla yaz.
- **Yeni proje kartı eklemek:** `projelerim.html` içinde mevcut bir `<article class="card project-card">` bloğunu kopyalayıp düzenle. Logoyu `assets/img/` klasörüne küçültülmüş olarak koy (256×256 yeterli).
- **Bir projeye "STABİL DEĞİL" bandı eklemek:** Karta `card--taped` sınıfını ve içine `<div class="tape" aria-hidden="true">STABİL DEĞİL ⚠ …</div>` ekle; açısı otomatik ayarlanır.

## Yayına alma

`main` branch'ine merge edilen her değişiklik birkaç dakika içinde otomatik olarak https://mehbur07.github.io adresinde yayınlanır. `main` korumalıdır; değişiklikler Pull Request ile girer.
