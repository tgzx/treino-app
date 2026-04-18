const CACHE_NAME = 'treino-app-cache-v5';
const APP_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './manifest.webmanifest',
    './appicon.png'
];

function isAppShellRequest(requestUrl) {
    return requestUrl.origin === self.location.origin
        && (
            requestUrl.pathname.endsWith('/')
            || requestUrl.pathname.endsWith('/index.html')
            || requestUrl.pathname.endsWith('/styles.css')
            || requestUrl.pathname.endsWith('/script.js')
            || requestUrl.pathname.endsWith('/manifest.webmanifest')
        );
}

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys
                .filter((key) => key !== CACHE_NAME)
                .map((key) => caches.delete(key))
        ))
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') {
        return;
    }

    const requestUrl = new URL(event.request.url);

    if (isAppShellRequest(requestUrl)) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    if (response && response.status === 200) {
                        const clonedResponse = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clonedResponse));
                    }

                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                fetch(event.request)
                    .then((response) => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return;
                        }

                        const clonedResponse = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clonedResponse));
                    })
                    .catch(() => {});
                return cachedResponse;
            }

            return fetch(event.request)
                .then((response) => {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    const clonedResponse = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clonedResponse));
                    return response;
                });
        })
    );
});
