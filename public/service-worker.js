self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalando');
  event.waitUntil(
    caches.open('v1').then((cache) => {
      console.log('Service Worker: Cacheando archivos');
      return cache.addAll([
        '/',
        '/offline.html'
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activado');
});

self.addEventListener('fetch', (event) => {
  console.log('Service Worker: Interceptando fetch', event.request.url);
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match('/offline.html');
      })
  );
});
