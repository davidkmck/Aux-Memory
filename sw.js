const CACHE_NAME = 'aux-memory-v2';
const ASSETS = [
  '/Aux-Memory/',
  '/Aux-Memory/index.html',
  '/Aux-Memory/manifest.json',
  '/Aux-Memory/aux-mem.png'
];

// Install Service Worker and cache core files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch assets from cache if offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
