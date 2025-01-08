self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('app-cache').then(cache => {
      return cache.addAll([
        '/',
        '/styles.css',
        '/script.js',
        '/favicon.ico',
        '/images/logo.png',
        '/offline.html',
        // Agrega aquí otros recursos estáticos importantes
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si encontramos una coincidencia en el cache, la devolvemos
        if (response) {
          return response;
        }
        // Si no hay coincidencia, hacemos la petición a la red
        return fetch(event.request)
          .then(response => {
            // Verificamos que la respuesta sea válida
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clonamos la respuesta porque el body solo puede ser usado una vez
            const responseToCache = response.clone();

            caches.open('app-cache')
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      })
      .catch(() => {
        // Aquí es donde se sirve el offline.html cuando todo lo demás falla
        return caches.match('/offline.html');
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = ['app-cache'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 