'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "f793258a44f14833359e1992e3d19134",
"assets/FontManifest.json": "7327db58bb3db76b86307b165cfa4f6b",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/images/tondar.png": "c62c15d6f147f0515e52a5d2b8212dbd",
"assets/assets/images/backgroundLOL.png": "9d67f77300cf45d653921501b0c68252",
"assets/assets/images/demo2.jpg": "3745acb51f70a86e7ed8a2260200ff30",
"assets/assets/images/bikaran.png": "fb0386774d18f2d78578bd7164551424",
"assets/assets/images/khalijefars.png": "50547ed681ea17804984518b7501cb2a",
"assets/assets/images/logo.png": "771f8522ef6d40bc2ad42969f422d0be",
"assets/assets/images/sahelofarasahel.png": "cd8f0cd26864d24906b49028ee927b67",
"assets/assets/images/loginBG.jpg": "5a79eb62a1f924278b8df21365dfd9e3",
"assets/assets/images/pop.png": "d5b7b29fb6a77180770f37897d7b807e",
"assets/assets/images/profilepic.png": "f49da2fb0e931ddea848a41df9002572",
"assets/assets/images/daryabandar.png": "cadd24616b013d8620472e24472ea46b",
"assets/assets/images/sh3.png": "f60ccb5b6638214c5aa396e782574900",
"assets/assets/images/sh2.png": "921a2cb26e57fed80acf14d8fbbcf4bf",
"assets/assets/images/sahand.png": "921a2cb26e57fed80acf14d8fbbcf4bf",
"assets/assets/images/demo1.jpg": "588d9346b5f8bacef5cce7c184d6ec6d",
"assets/assets/images/rahyabrayanegostar.png": "bbeb16de236fc258c920449d17c002b1",
"assets/assets/images/pos.png": "f60ccb5b6638214c5aa396e782574900",
"assets/assets/images/sahelgostar.png": "c5c9b7be06b4baf917596cd594608e6e",
"assets/assets/images/sh1.png": "17b2e52dc4931117ed26f903bfef37c9",
"assets/assets/images/sh4.png": "d5b7b29fb6a77180770f37897d7b807e",
"assets/assets/images/demo3.jpg": "37d96ba4c8ddf01158dc1d8bf01979ce",
"assets/assets/images/tokhmi.jpeg": "fdb23b5bc81460283c9addead151b342",
"assets/assets/icons/vehicle.png": "751a37f14c799dc09b38a4db509f9ae9",
"assets/assets/icons/tools.png": "8111a305db1b81c1472e26117b9f327d",
"assets/assets/icons/new.png": "a8d78c4179db5a7cde090e611746bc8e",
"assets/assets/icons/user.png": "e27c8735da98ec6ccdcf12e258b26475",
"assets/assets/icons/dashboard.png": "3015ddcc449b11898b352ce09ec781c7",
"assets/assets/icons/delete.png": "d5bbcd3a3516280f9bd71c163d1a6bac",
"assets/assets/icons/realestate.png": "1e8f532982f806dc53439e3b79983428",
"assets/assets/icons/edit.png": "c2664b1d03e3a739ac28f03cb4fc8d72",
"assets/assets/icons/insurance.png": "a76e40690c82daa924a6014d51f5f56b",
"assets/assets/icons/sold.png": "390be24afd73e5fee48ced84233c2176",
"assets/assets/fonts/MarkaziText-Medium.ttf": "1c74ca2663b6a3166f539adda78e2c03",
"assets/assets/fonts/IBMPlexSansArabic-Medium.ttf": "9d5b421b7d926af344234ee2725246be",
"assets/assets/fonts/IBMPlexSansArabic-Bold.ttf": "3c001a58a65314cd00b5f7760f6eb2fc",
"assets/assets/fonts/ElMessiri-Bold.ttf": "1a2d897ca4831c253c8f99d18443f16f",
"assets/assets/fonts/ElMessiri-SemiBold.ttf": "1e2cb99020914faebd543c1ef2dccf84",
"assets/assets/fonts/MarkaziText-Bold.ttf": "ad3f9eaffdbf2a3377eaebb54ae49706",
"assets/assets/fonts/MarkaziText-SemiBold.ttf": "fc97205184dd4a2450ef529c1ed9fb75",
"assets/assets/fonts/IBMPlexSansArabic-SemiBold.ttf": "6560a93e7749a4a0a434560ebeedc668",
"assets/assets/fonts/MarkaziText-Regular.ttf": "2d8779251e6828fd08e454740c8a06f8",
"assets/assets/fonts/IBMPlexSansArabic-Regular.ttf": "bd397eb7368d746825170fb384d9100f",
"assets/assets/fonts/ElMessiri-Regular.ttf": "04557065a426bd218b5acde9ae3c4695",
"assets/assets/fonts/ElMessiri-Medium.ttf": "cfa9895d0c5aeb3c48b515df21e6cf04",
"assets/AssetManifest.json": "28c247c7bd61e42c92cad574b32ca09f",
"assets/NOTICES": "fa753b54df2e81b3dfb772509a025d33",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"version.json": "29ce36fe4c17b5ac2c24b5683a126e2c",
"icons/Icon-512.png": "7bf5e90a314a758794bb52e4731a8650",
"icons/Icon-192.png": "adda019cede461f645cd78489712a02a",
"favicon.ico": "f13a0e0a83c1f6445126aabe600fabeb",
"index.html": "0c5d93b7c8518a6324d03183b5f05bed",
"/": "0c5d93b7c8518a6324d03183b5f05bed",
"main.dart.js": "2cf58ca473f509a3e48eaeab4b969cf3"
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
