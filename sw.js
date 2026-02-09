// Service Worker for MBTI Career Test PWA

const CACHE_NAME = 'mbti-career-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/js/i18n.js',
  '/js/mbti-data.js',
  '/js/locales/ko.json',
  '/js/locales/en.json',
  '/js/locales/ja.json',
  '/js/locales/zh.json',
  '/js/locales/es.json',
  '/js/locales/pt.json',
  '/js/locales/id.json',
  '/js/locales/tr.json',
  '/js/locales/de.json',
  '/js/locales/fr.json',
  '/js/locales/hi.json',
  '/js/locales/ru.json',
  '/manifest.json',
  '/icon-192.svg',
  '/icon-512.svg'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - cache first, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(response => {
        if (response) {
          return response;
        }

        return fetch(request)
          .then(response => {
            // Only cache successful responses
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(request, responseToCache));

            return response;
          })
          .catch(() => {
            // Return offline page or cached response
            return caches.match(request)
              .then(response => response || new Response('Offline'));
          });
      })
  );
});

// Background sync for analytics (optional)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-analytics') {
    event.waitUntil(
      // Send pending analytics events
      Promise.resolve()
    );
  }
});

// Push notification (optional)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New notification',
    icon: '/icon-192.svg',
    badge: '/icon-192.svg',
    tag: 'mbti-career-notification',
    requireInteraction: false
  };

  event.waitUntil(
    self.registration.showNotification('MBTI Career Test', options)
  );
});

// Notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' })
      .then(clientList => {
        for (let client of clientList) {
          if (client.url === '/' && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
  );
});
