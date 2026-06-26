const CACHE_NAME = "casaclima-v7";
const OFFLINE_NEWS_KEY = "casaclima-news-cache";
const OFFLINE_RADIO_KEY = "casaclima-radio-favorites";

const APP_ASSETS = [
  "./",
  "./index.html",
  "./gastos.html",
  "./noticias.html",
  "./cofre.html",
  "./radio.html",
  "./utilidades.html",
  "./cursos.html",
  "./perfil.html",
  "./css/bundle.css",
  "./css/critical-scene.css",
  "./assets/casaclima-icon.svg",
  "./manifest.webmanifest",
  "./js/scene-head.js",
  "./js/scene-boot.js",
  "./js/scene-assets.js",
  "./js/common.js",
  "./js/bootstrap.js",
  "./js/app-init.js",
  "./js/modules/theme.js",
  "./js/modules/i18n.js",
  "./js/modules/vault-crypto.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, "./index.html"));
    return;
  }

  event.respondWith(staleWhileRevalidate(request));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});

async function networkFirst(request, fallbackUrl) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    return (await cache.match(request)) || cache.match(fallbackUrl);
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      cache.put(request, response.clone());
      return response;
    })
    .catch(() => cached);

  return cached || network;
}

self.addEventListener("message", (event) => {
  if (event.data?.type === "cache-offline-data") {
    event.waitUntil(cacheOfflinePayload(event.data.payload));
  }
});

async function cacheOfflinePayload(payload = {}) {
  const cache = await caches.open(CACHE_NAME);
  const body = JSON.stringify({
    news: payload.news || null,
    radioFavorites: payload.radioFavorites || null,
    cachedAt: Date.now()
  });

  await cache.put(
    "/offline/user-data.json",
    new Response(body, {
      headers: { "Content-Type": "application/json" }
    })
  );
}
