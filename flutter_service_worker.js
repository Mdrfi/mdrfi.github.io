'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "f9fbd545e14dd30a33d173111d454fdb",
"assets/FontManifest.json": "60a575a1de855c95661e5d5b70d8ff69",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/images/demo2.jpg": "85d710d7010203e88a2b9d17e81af652",
"assets/assets/images/logo.png": "771f8522ef6d40bc2ad42969f422d0be",
"assets/assets/images/pop.png": "d5b7b29fb6a77180770f37897d7b807e",
"assets/assets/images/profilepic.png": "f49da2fb0e931ddea848a41df9002572",
"assets/assets/images/sh3.png": "f60ccb5b6638214c5aa396e782574900",
"assets/assets/images/sh2.png": "921a2cb26e57fed80acf14d8fbbcf4bf",
"assets/assets/images/sahand.png": "921a2cb26e57fed80acf14d8fbbcf4bf",
"assets/assets/images/demo1.jpg": "348b78e0ecb5ef0a196510e2877721a7",
"assets/assets/images/pos.png": "f60ccb5b6638214c5aa396e782574900",
"assets/assets/images/sh1.png": "17b2e52dc4931117ed26f903bfef37c9",
"assets/assets/images/sh4.png": "d5b7b29fb6a77180770f37897d7b807e",
"assets/assets/images/demo3.jpg": "79f56479063d7e668740248fba44c955",
"assets/assets/icons/vehicle.png": "59882562e371e259d84e3b8007219e84",
"assets/assets/icons/tools.png": "976fb837be0a54d2e47410f4a3fae559",
"assets/assets/icons/new.png": "3d0f1dc73773098a57f1452ec4bf01d2",
"assets/assets/icons/user.png": "0246595e72e69c95edc1a9604f3b093f",
"assets/assets/icons/dashboard.png": "3015ddcc449b11898b352ce09ec781c7",
"assets/assets/icons/delete.png": "d5bbcd3a3516280f9bd71c163d1a6bac",
"assets/assets/icons/realestate.png": "3908d12ddb406a36b2cbc9900ed81703",
"assets/assets/icons/edit.png": "c2664b1d03e3a739ac28f03cb4fc8d72",
"assets/assets/icons/insurance.png": "60d2c10c9dd2b1632668124275494d4f",
"assets/assets/fonts/ElMessiri-Bold.ttf": "1a2d897ca4831c253c8f99d18443f16f",
"assets/assets/fonts/ElMessiri-SemiBold.ttf": "1e2cb99020914faebd543c1ef2dccf84",
"assets/assets/fonts/ElMessiri-Regular.ttf": "04557065a426bd218b5acde9ae3c4695",
"assets/assets/fonts/ElMessiri-Medium.ttf": "cfa9895d0c5aeb3c48b515df21e6cf04",
"assets/AssetManifest.json": "0bc17dc7ac0b7b78e94a3def817d09bb",
"assets/NOTICES": "43c88c654df5c069d9ef2dfb1ab35282",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"favicon.png": "97ebe509252f262a80bfa8e20dd5071f",
"version.json": "29ce36fe4c17b5ac2c24b5683a126e2c",
"icons/Icon-512.png": "5a577d61d34cb70d53d373700e793b20",
"icons/Icon-192.png": "c0d9ab876c2f2ed548177c5db7a36a01",
"index.html": "686a1e81ab3c8bc2ae9bd86aa0b6afee",
"/": "686a1e81ab3c8bc2ae9bd86aa0b6afee",
"main.dart.js": "cb08741cf78b73934d820605c88febbf"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
