/* Geotech Obsidian service worker.
   Network-first with cache fallback: online you always get the latest deploy;
   offline (in a basement, on a site with no signal) the whole vault still
   opens from the last cached copy. Bump CACHE when the caching logic itself
   changes - content updates need no bump, they overwrite on each fetch. */
const CACHE = 'geotech-obsidian-v1';
const CORE = [
  './',
  './index.html',
  './vault.json',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  e.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(async () => {
        const hit = await caches.match(req, { ignoreSearch: true });
        if (hit) return hit;
        // Offline navigation to any /brain/ route falls back to the app shell.
        if (req.mode === 'navigate') {
          const shell = await caches.match('./index.html');
          if (shell) return shell;
        }
        return new Response('Offline and not cached.', { status: 503, headers: { 'Content-Type': 'text/plain' } });
      })
  );
});
