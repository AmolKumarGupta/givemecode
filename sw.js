const cacheName = 'gmc0.1';
const url = 'offline.html';
self.addEventListener('install', e => { 
  e.waitUntil( caches.open(cacheName).then( cache => { return cache.addAll([url,'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css']); } ) );
});
self.addEventListener('fetch', eve => {
  if(eve.request.mode === 'navigate' || (eve.request.method === 'GET' && eve.request.headers.get('accept').includes('text/html')))
  {
    eve.respondWith( fetch(eve.request.url).catch( err => {
      return caches.match(url);
    }));
  }
  else{
    eve.respondWith( 
      caches.match(eve.request).then( res => {
        return res || fetch(eve.request);
      })
    );
  }
});