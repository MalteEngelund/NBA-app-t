const CACHE_NAME = 'nba-app-v2';
const ASSETS_TO_CACHE = [
  '/',
  './manifest.json',
  '/fallback.html',
  // Add more static assets as needed
];

// Pre-cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Network-first for API/data, cache-first for static assets
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Network-first for API requests (adjust the path as needed)
  if (url.pathname.startsWith('/api') || url.href.includes('site.api.espn.com')) {
    event.respondWith(
      fetch(event.request)
        .then(networkRes => {
          // Optionally update cache with latest data
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkRes.clone());
            return networkRes;
          });
        })
        .catch(() => caches.match(event.request)) // fallback to cache if offline
    );
    return;
  }

  // Cache-first for static assets
  event.respondWith(
    caches.match(event.request).then(cacheRes => {
      return cacheRes || fetch(event.request).then(fetchRes => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, fetchRes.clone());
          return fetchRes;
        });
      });
    }).catch(() => {
			// Hvis både cache og server fejler, returner fallback page
			return caches.match('/fallback.html');
		})
  );
});
// to do clear cache on changes