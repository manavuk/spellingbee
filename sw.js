const CACHE_NAME = 'spelling-bee-v1';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './words.js',
    './words_filtered.js',
    './manifest.json',
    './favicon.png',
    './bee_logo.png',
    './bee_oops.png',
    './bee_happy.png',
    './bee_thinking.png',
    './bee_dizzy.png',
    './bee_superhero.png',
    './icon-192.png',
    './icon-512.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
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

self.addEventListener('fetch', (e) => {
    // Network first for dictionary API calls, Cache first for app static shell
    if (e.request.url.includes('api.dictionaryapi.dev') || e.request.url.includes('api.datamuse.com') || e.request.url.includes('wiktionary.org')) {
        e.respondWith(
            fetch(e.request).catch(() => caches.match(e.request))
        );
    } else {
        e.respondWith(
            caches.match(e.request).then((response) => {
                return response || fetch(e.request);
            })
        );
    }
});
