'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "8e8460356d742f30ea15c4c625d23f75",
"index.html": "5569187a147801d95f473dc19179b8d1",
"/": "5569187a147801d95f473dc19179b8d1",
"version.json": "b2ac680452f2180079abefc378e6cffb",
"main.dart.js": "55e4ea78e336844adcbc6488ee3c2bba",
"assets/assets/icons/menu.svg": "27c8ca7022146a0cadad27d7f0767f4e",
"assets/assets/icons/Settings.svg": "e4ca3eb2bf634151da75a136c8d35bf8",
"assets/assets/icons/gym.svg": "124157091c672be1ef640bdd729cd89c",
"assets/assets/icons/search.svg": "44b2ff5217efd3059f848d485599bf6e",
"assets/assets/icons/amlak.png": "4b6da24a5f53fe4d5740e2950f050082",
"assets/assets/icons/meditation_bg.svg": "d2563905a1ee85bf30a172fd4507f2de",
"assets/assets/icons/Meditation_women_small.svg": "ae2b5a1f219c51a50a3bf4851eb6ddfa",
"assets/assets/icons/yoga_women.svg": "9a88f77a03c8d7e4132985c396d17b3f",
"assets/assets/icons/yoga.svg": "27094c323a68695c06ee8713c57f4e9b",
"assets/assets/icons/google.png": "e84cf0898e7cc906925e512181ba0465",
"assets/assets/icons/tajhizat.png": "cfabcdbc74d3f3d189720ad7d3f4fcac",
"assets/assets/icons/facebook.png": "54fa61448d394e8c323cf49bbb8e403d",
"assets/assets/icons/Hamburger.svg": "cf0e469da0eb061d401c16633dc9a2b5",
"assets/assets/icons/Excrecises.svg": "5ee6bcb85e39c9aee2dfe6b53a550764",
"assets/assets/icons/calendar.svg": "e509d576203a5651537972d04df0ce4e",
"assets/assets/icons/add_tajhizat.png": "803c4ca29ab2545bd75c285449d9f02c",
"assets/assets/icons/service.png": "24cdb5e679d79cf6043423f1b4ec54b5",
"assets/assets/icons/ezafe.png": "173eaf38c83c0c86d64ee54ef9ad11dd",
"assets/assets/icons/Meditation.svg": "ad669fc9f4cdc428f813325764379a1f",
"assets/assets/icons/pilates_gpdb.svg": "7d2220a6fac59f024809d8df461e2068",
"assets/assets/icons/gozareshat.png": "80c3584f28e0ffa3efb857d28fd5e909",
"assets/assets/icons/ertebat.png": "be8f9be9b628db47e067ae944a9f0f6c",
"assets/assets/icons/Lock.svg": "849b9e9f184fed5bceaf681e82bdf028",
"assets/assets/fonts/Cairo/Cairo-Black.ttf": "30ed49af2f0e8409715e248ce764b0a9",
"assets/assets/fonts/Cairo/Cairo-Bold.ttf": "a14c20325bb25764f63bcfbc076e9201",
"assets/assets/fonts/Cairo/Cairo-Regular.ttf": "e793edb57aaf4d59ac9e943cbf091937",
"assets/assets/fonts/Cairo/Cairo-SemiBold.ttf": "47622f2d4b9fbf054502c6b7c8680a16",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/images/undraw_pilates_gpdb.png": "a57e817e33a29b996813ec85d29065f0",
"assets/assets/images/tehran0-edited.jpeg": "b715ba8b57dd50529fc473c338502bb7",
"assets/assets/images/meditation_bg.png": "aa94331127b67abc08d5f0f80dd13018",
"assets/assets/images/gandi2.jpg": "548ca68fd484abdf5f837dd84f98705f",
"assets/assets/images/tehran1-edited.jpeg": "c0195ef06745487ea53a0e985cc0c9d2",
"assets/assets/images/user.jpg": "f5fee4d34965253a9730c67fff769360",
"assets/assets/images/lab.png": "d9d5af2fcd9ef0f457909c6dd0ffa216",
"assets/assets/images/pug.jpg": "b37e056454273991c93f214658a0421b",
"assets/assets/images/markazi2.jpg": "e41ccd9609200778e0a991fff8d0cd2e",
"assets/assets/images/liftruck.jpg": "f62ffe4204d46d4befaa26bc3a277ffc",
"assets/assets/images/markazi.jpg": "7b7d949c4b340da97e8763bf5b110e04",
"assets/assets/images/gandi.jpg": "42fba9bee1e0f2fcfdd64173115c2dac",
"assets/assets/images/logo.png": "771f8522ef6d40bc2ad42969f422d0be",
"assets/NOTICES": "e9a9384f89413f3248f95b72c6824c9c",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "2026da78f2052184f0e235286ef6c090",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"assets/AssetManifest.json": "b9417a320d9ae6f1ab67c8e363208eca",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
