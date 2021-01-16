/* eslint-disable no-restricted-globals */
const cacheName = "cache-v1";

const cachePath = [
  "/index.html",
  "/",
  `${location.href}`,
  "/manifest.json",
  "/favicon.ico",
  "/logo192.png",
  "/sw.js",
  "/logo512.png",
  "https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXg.woff2",
  "https://fonts.googleapis.com/css?family=Lato&display=swap",
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/1.chunk.js",
  "/static/js/2.c522fde6.chunk.js",
  "/static/js/3.fef13965.chunk.js",
  "/static/js/4.852e08f3.chunk.js",
  "/static/js/main.536bed03.chunk.js",
  "/static/css/**",
  "/main.43318790f93790fc0464.hot-update.js",
  "/sockjs-node",
  " http://www.noiseaddicts.com/samples_1w72b820/1453.mp3",
];

self.addEventListener("register", () => console.log("registered sw.js"));

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("cache", cache);
        return cache.addAll(cachePath);
      })
      .catch((e) => console.warn("Service Worker install error", e))
  );
});

self.addEventListener("fetch", (e) => {
  // e.respondWith(
  //   fetch(e.request).catch(() =>
  //     caches.open(cacheName).then((cache) => cache.match(e.request))
  //   )
  // );

  e.respondWith(
    caches.match(e.request).then((resp) => {
      return (
        resp ||
        fetch(e.request, {
          mode: "no-cors",
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
          body: null,
        }).then((response) => {
          return caches.open(cacheName).then((cache) => {
            console.log("fetching", cache);
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    })
  );

  // e.respondWith(
  //   caches
  //     .match(e.request)
  //     .then((cacheRes) => {
  //       cacheRes || fetch(e.request);
  //       console.log(("cacheRes", cacheRes) || ("fetchRes", fetch(e.request)));
  //       return cacheRes || fetch(e.request);
  //     })
  //     .catch((e) => console.warn("Service Worker Fetch Error", e))
  // );
});

// self.addEventListener("notificationclick", (e) => {
//   const notification = e.notification;
//   const action = e.action;
//   if (action === "close") {
//     notification.close();
//   } else {
//     const url = notification.data.url;
//     console.log("Open Notification: " + url);
//     clients.openWindow(url);
//   }
// });

// self.addEventListener("notificationclose", (e) => {
//   const url = e.notification.data.url;
//   console.log("Closed Notification: " + url);
// });
