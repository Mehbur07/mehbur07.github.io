# Mehbur07 — Kişisel Site

Mehmet Burak ŞAHİN'in (Mehbur07) kişisel sitesi: projeler, Minecraft modları, sosyal medya ve iletişim.

🌐 **Adres:** https://mehbur07.github.io

> Durum: **Faz 0** — Şu an yayında geçici bir "yapım aşamasında" sayfası var. Yol haritası için [ROADMAP.md](ROADMAP.md) dosyasına bakın.

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
index.html          Ana sayfa
ROADMAP.md          Proje fazları
PROGRESS.md         Oturumlar arası ilerleme notları
CHANGELOG.md        Değişiklik geçmişi
kaynak-gorseller/   Logoların orijinalleri (git'e girmez, sadece bu bilgisayarda)
```

## Yayına alma

`main` branch'ine merge edilen her değişiklik birkaç dakika içinde otomatik olarak https://mehbur07.github.io adresinde yayınlanır. `main` korumalıdır; değişiklikler Pull Request ile girer.
