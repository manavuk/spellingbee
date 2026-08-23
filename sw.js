const CACHE_NAME = 'spelling-bee-v1.5.0';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './words.js',
    './words_filtered.js',
    './stickers.js',
    './wallpapers.js',
    './versions.js',
    './manifest.json',
    './favicon.png',
    './bee_logo.png',
    './bee_oops.png',
    './bee_happy.png',
    './bee_thinking.png',
    './bee_dizzy.png',
    './bee_superhero.png',
    './icon-96.png',
    './icon-144.png',
    './icon-192.png',
    './icon-512.png',
    './apple-touch-icon.png'
];

// Install: Cache all core assets and wait for user update or auto-activate
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Activate: Clean up any old version caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Message listener for skip waiting prompt triggered by UI
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Fetch: Stale-While-Revalidate for app assets, Network-First for external dictionaries
self.addEventListener('fetch', (event) => {
    // Dictionary API calls: Network first, cache fallback
    if (event.request.url.includes('api.dictionaryapi.dev') || event.request.url.includes('api.datamuse.com') || event.request.url.includes('wiktionary.org')) {
        event.respondWith(
            fetch(event.request).catch(() => caches.match(event.request))
        );
        return;
    }

    // Static Assets: Stale-While-Revalidate to ensure fast startup + automatic background refresh
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return networkResponse;
            }).catch(() => cachedResponse);

            return cachedResponse || fetchPromise;
        })
    );
});
