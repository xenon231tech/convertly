/* Convertly service worker — app-shell offline cache.
   Same-origin files are cached; the live rates API is never cached here
   (the app itself caches the last good rates in localStorage). */
const CACHE_NAME = "convertly-v3";
// NOTE: og-image.png is NOT precached — it is not in the repo yet (see README).
// The fetch handler below still caches it on demand if it ever appears.
const APP_SHELL = ["./", "index.html", "icon.svg", "manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  // Only handle same-origin GET requests; let the rates API go straight to network.
  if (event.request.method !== "GET" || url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
