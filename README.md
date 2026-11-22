# Tarih Notları — TYT • AYT • KPSS

TYT, AYT ve KPSS Tarih için konu notları, bilgi kartları, testler, mini denemeler, paragraf soruları ve oyunlar içeren, internetsiz de çalışan bir web uygulaması (PWA).

- Canlı sürüm: claude.ai üzerinde yayınlanan artifact
- Geliştirici: Hasan — deusmanus007@gmail.com

## Dosyalar

| Dosya | İçerik |
|---|---|
| `index.html` | Uygulamanın tamamı (arayüz, testler, kartlar, oyunlar, rütbeler, Yapay Zekâ Hoca) |
| `data.js` | Üniteler ve elle yazılmış sorular |
| `paragraf.js` | Elle yazılmış paragraf (yorum) soruları |
| `notes.js` | Ünite notları, karıştırılanlar, zaman çizelgeleri |
| `facts.js`, `facts2.js`, `facts3.js`, `facts4.js` | Soru üreticinin bilgi tabanı |
| `gen.js` | Bilgi tabanından ÖSYM tarzı soru üretici (her seviyede en az 105 farklı soru) |
| `map.js` | Harita oyunu verisi |
| `sw.js` | Çevrimdışı çalışma (service worker) — her yayında `VER` artırılır |
| `gizlilik.html` | Gizlilik politikası |
| `manifest.webmanifest`, `icon*.png`, `icon.svg` | Ana ekrana eklenebilir uygulama ayarları ve ikonlar |
| `fonts/` | Gömülü yazı tipleri (dış sunucuya istek yapılmaz) |

## Yerelde çalıştırma

Herhangi bir statik sunucu yeterlidir (dosyayı doğrudan açmak service worker ve betikler için yeterli değildir):

```
npx serve .
```
