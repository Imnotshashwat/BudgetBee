const CACHE_NAME = "budgetbee-v2";
const APP_ASSETS = [
  "/",
  "/index.html",
  "/app.html",
  "/offline.html",
  "/manifest.json",
  "/site.webmanifest",
  "/favicon.ico",
  "/favicon-32x32.png",
  "/favicon-16x16.png",
  "/apple-touch-icon.png",
  "/favicon.svg",
  "/icons/icon-72.png",
  "/icons/icon-96.png",
  "/icons/icon-128.png",
  "/icons/icon-192.png",
  "/icons/icon-256.png",
  "/icons/icon-384.png",
  "/icons/icon-512.png",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://cdn.jsdelivr.net/npm/chart.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return (
        res ||
        fetch(event.request).catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("/offline.html");
          }
        })
      );
    })
  );
});
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return (
        res ||
        fetch(event.request).catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("/offline.html");
          }
        })
      );
    })
  );
});
