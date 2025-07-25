// Version 2 of the service worker for the geometry quiz PWA
// This file defines a new cache name and updates the list of assets
// to cache. Updating the cache name ensures that the browser will
// discard the previous cache and fetch the latest resources. The
// assets list includes both the root and specific HTML pages along
// with the manifest and icon files.

const CACHE_NAME = 'geometry-quiz-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './index_simple.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Pre-cache the defined assets when the service worker installs.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Remove old caches when activating the new service worker.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});

// Respond to fetch events with cached assets or fall back to the network.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});