const CACHE_NAME = 'papan-tanding-caching-v1'

var urlsToCache =  [
    "/index.html",
    "/team.html",
    "/css/materialize.min.css",
    "/css/style.css",
    "/js/materialize.min.js",
    "/js/api.js",
    "/js/db.js",
    "/js/idb.js",
    "/js/nav.js",
    "/js/pages.js",
    "/js/script.js",
    "/pages/home.html",
    "/pages/klassmen.html",
    "/pages/saved.html",
    "/nav.html",
    "/img/pngegg.png",
    "/src/img/uefa_champions_league_00.jpg",
    "/src/img/man.jpeg",
    "../manifest.json",
];

self.addEventListener('install',function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            return cache.addAll(urlsToCache)
        })
    )
})



self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        var fetchPromise = fetch(event.request).then(function(networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        return response || fetchPromise;
      })
    })
  );
});


self.addEventListener('activate',function(event){
    event.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(
                cacheNames.map(function(cacheName){
                    if (cacheName != CACHE_NAME){
                        return caches.delete(cacheName)
                    }   
                })
            )
        })
    )
})

self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: './img/pngegg.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});