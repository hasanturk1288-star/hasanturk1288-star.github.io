/* =========================================================
   TARİH NOTLARI — ÇEVRİMDIŞI ÇALIŞMA (Service Worker)
   - İlk açılışta uygulamanın tüm dosyaları önbelleğe alınır; sonra internet olmadan da açılır.
   - Sayfa ve JS dosyaları önce ağdan istenir → güncellemeler hemen gelir; ağ yoksa önbellekten açılır.
   - Yazı tipleri ve ikonlar önbellekten anında verilir, arka planda yenilenir.
   Yeni sürüm yayınlarken VER'i artır.
   ========================================================= */
const VER = "tarih-notlari-v16";
const CORE = ["./", "index.html", "gizlilik.html","data.js", "paragraf.js","notes.js", "map.js", "facts.js", "facts2.js", "facts3.js", "facts4.js", "gen.js",
  "manifest.webmanifest", "icon.svg", "icon-180.png", "icon-192.png", "icon-512.png", "icon-maskable-512.png",
  "fonts/inter-latin.woff2", "fonts/inter-latin-ext.woff2", "fonts/bricolage-latin.woff2", "fonts/bricolage-latin-ext.woff2"];

self.addEventListener("install", e => {
  // Tek bir dosya eksik olsa bile kurulum bozulmasın diye dosyalar tek tek eklenir
  e.waitUntil(caches.open(VER).then(c => Promise.all(CORE.map(u => c.add(new Request(u, {cache: "reload"})).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("tarih-notlari-") && k !== VER).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET") return;
  const url = new URL(r.url), same = url.origin === location.origin;
  if (!same) return; // uygulama dışarıya istek yapmaz; başka adreslere dokunulmaz
  // Uygulamanın kendi dosyaları (sayfa + JS + veri): AĞ ÖNCELİKLİ → güncellemeden sonra sayfa ile JS hep aynı sürümde olur.
  // Ağ yoksa önbellekten açılır. Yalnızca yazı tipleri önbellek öncelikli.
  const isPage = same && !/\.(woff2?|png|svg)$/.test(url.pathname);
  if (isPage) { // ağ öncelikli
    e.respondWith(fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(VER).then(c => c.put(r, cp)); } return res; })
      .catch(() => caches.match(r, {ignoreSearch: true}).then(m => m || (r.mode === "navigate" ? caches.match("index.html") : Response.error()))));
    return;
  }
  // önbellek öncelikli + arka planda yenile
  e.respondWith(caches.match(r).then(m => {
    const net = fetch(r).then(res => { if (res && (res.ok || res.type === "opaque")) { const cp = res.clone(); caches.open(VER).then(c => c.put(r, cp)); } return res; }).catch(() => m);
    return m || net;
  }));
});
