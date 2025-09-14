self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('fitness-365-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'style.css',
        'manifest.json',
        'icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
