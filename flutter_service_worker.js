'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.bin": "df0a2df4d8ae38602004f74de19cbf59",
"assets/AssetManifest.json": "76dd935f2668d2a6d78e5599c6732589",
"assets/assets/icon/1024.png": "e1fd802b962fb56375123adad2340df5",
"assets/assets/icon/foreground.png": "9b3822352868e413d323ebf1f23703ee",
"assets/assets/icons/bed.png": "9f87f536e042d4a43886c51927119995",
"assets/assets/icons/boat-with-containers.png": "2aef6c4f3547c678aa60085fac9d8e39",
"assets/assets/icons/buoy.png": "7dc0bfd768fd6ad95e9749004d5e1aa9",
"assets/assets/icons/conteiner%2520port.png": "023c88b9f27a85e856cc5efd953d7fb2",
"assets/assets/icons/dock.png": "d9c4724d76c8f4b5ff6199ffe7c90853",
"assets/assets/icons/fixed.png": "259aa6d704b56547d0b534dd91e977a1",
"assets/assets/icons/flotel.png": "8d18de03b92ea76de54624f40eee9346",
"assets/assets/icons/fpso%25203.png": "f47f5a7bf4ff65f319cd1b8f671b4ea3",
"assets/assets/icons/fpso%2520fill.png": "507bec2c5f8a9d819d3cc541563e731f",
"assets/assets/icons/FPSO.png": "892b3ca7a081c610d0ecd9c8e4471bc8",
"assets/assets/icons/map.png": "291c4fc153ad33b0614882b9e5cb110d",
"assets/assets/icons/offshore-platform.png": "ed930f78da312e87f3493fbd328045b2",
"assets/assets/icons/oil-platform%2520colored.png": "6fcaa0df0fe96532d765e1e19278f8ac",
"assets/assets/icons/oil-platform.png": "1aea446e1f309217ed208dcf65c6a702",
"assets/assets/icons/vessel.png": "7a0e158b8071274846daf3efd9512d46",
"assets/assets/icons/warning.png": "b1e5c9ef2ea556ec3260a2a727725006",
"assets/assets/icons/way.png": "58120c91847a2a7ff2a4f48cb95c8ab8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "3a7591f4a811a5e8147a94ef05315693",
"assets/NOTICES": "abd5ff83e7af6ef47c773b8eefadcd8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "45e1d3666d6e25e67f39fc1ae39837ce",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c2281cf0a22c29917ebf755ba9d11e50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9713978c68bcf226d5b984ada43cb8a0",
"assets/shaders/ink_sparkle.frag": "92666cc97576adbea2e2d3061a953137",
"canvaskit/canvaskit.js": "678d9f53b0e5c5f22543631f43279fb9",
"canvaskit/canvaskit.wasm": "6972cd6e8f48c5f3c027416c7b2443a6",
"canvaskit/profiling/canvaskit.js": "5a0f05139f1d43c603dcfc67d15b1ec9",
"canvaskit/profiling/canvaskit.wasm": "09aacbc0d8b20c7ee684e310703e2d86",
"cidmartins.github.io/.git/config": "b0c6e50e41b36f404f9fd4f613659cb5",
"cidmartins.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"cidmartins.github.io/.git/FETCH_HEAD": "9ad1b6d4c80ab82ec5ff891bd81d63ff",
"cidmartins.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"cidmartins.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"cidmartins.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"cidmartins.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"cidmartins.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"cidmartins.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"cidmartins.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"cidmartins.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"cidmartins.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"cidmartins.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"cidmartins.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"cidmartins.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"cidmartins.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"cidmartins.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"cidmartins.github.io/.git/index": "bbc9ec44958f20a5abf219fab9a0e9b7",
"cidmartins.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"cidmartins.github.io/.git/logs/HEAD": "acfaec84731d20237f0124af9fd1f0fa",
"cidmartins.github.io/.git/logs/refs/heads/main": "acfaec84731d20237f0124af9fd1f0fa",
"cidmartins.github.io/.git/logs/refs/remotes/origin/HEAD": "f2b47cca6369158ffd8ff4ace8584db8",
"cidmartins.github.io/.git/logs/refs/remotes/origin/main": "7bf237ad937be5749d150033ebf2d545",
"cidmartins.github.io/.git/objects/10/00a9964a0ffdee1638729d46a9dced9a2dca90": "e92e0dddc6acafbb604808e8de41af03",
"cidmartins.github.io/.git/objects/c0/3aa99181060ce1e9e65dde2acd0116236cb775": "702adea7879ec4edaac5a8fbe0962167",
"cidmartins.github.io/.git/objects/ca/fc8f6bac0e3358ecac0d4830963565465e1c52": "f8609201bbba1374d4886ac362e56aec",
"cidmartins.github.io/.git/objects/pack/pack-10fd3a8b8a0b02864af5e22a950e2568030cae81.idx": "e2aa8dbb02a9a56cd39861f8cea855e2",
"cidmartins.github.io/.git/objects/pack/pack-10fd3a8b8a0b02864af5e22a950e2568030cae81.pack": "eefd2d5e5985820d13edf07e7f2a82ec",
"cidmartins.github.io/.git/ORIG_HEAD": "e790d9fbf182284597e48d76feb331ed",
"cidmartins.github.io/.git/packed-refs": "78d76e6ceb54b125d9320cae73cd43cb",
"cidmartins.github.io/.git/refs/heads/main": "026716c459e9c4c5727adfb19a13bdbb",
"cidmartins.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"cidmartins.github.io/.git/refs/remotes/origin/main": "026716c459e9c4c5727adfb19a13bdbb",
"cidmartins.github.io/assets/AssetManifest.bin": "df0a2df4d8ae38602004f74de19cbf59",
"cidmartins.github.io/assets/AssetManifest.json": "76dd935f2668d2a6d78e5599c6732589",
"cidmartins.github.io/assets/assets/icon/1024.png": "e1fd802b962fb56375123adad2340df5",
"cidmartins.github.io/assets/assets/icon/foreground.png": "9b3822352868e413d323ebf1f23703ee",
"cidmartins.github.io/assets/assets/icons/bed.png": "9f87f536e042d4a43886c51927119995",
"cidmartins.github.io/assets/assets/icons/boat-with-containers.png": "2aef6c4f3547c678aa60085fac9d8e39",
"cidmartins.github.io/assets/assets/icons/buoy.png": "7dc0bfd768fd6ad95e9749004d5e1aa9",
"cidmartins.github.io/assets/assets/icons/conteiner%2520port.png": "023c88b9f27a85e856cc5efd953d7fb2",
"cidmartins.github.io/assets/assets/icons/dock.png": "d9c4724d76c8f4b5ff6199ffe7c90853",
"cidmartins.github.io/assets/assets/icons/fixed.png": "259aa6d704b56547d0b534dd91e977a1",
"cidmartins.github.io/assets/assets/icons/flotel.png": "8d18de03b92ea76de54624f40eee9346",
"cidmartins.github.io/assets/assets/icons/fpso%25203.png": "f47f5a7bf4ff65f319cd1b8f671b4ea3",
"cidmartins.github.io/assets/assets/icons/fpso%2520fill.png": "507bec2c5f8a9d819d3cc541563e731f",
"cidmartins.github.io/assets/assets/icons/FPSO.png": "892b3ca7a081c610d0ecd9c8e4471bc8",
"cidmartins.github.io/assets/assets/icons/map.png": "291c4fc153ad33b0614882b9e5cb110d",
"cidmartins.github.io/assets/assets/icons/offshore-platform.png": "ed930f78da312e87f3493fbd328045b2",
"cidmartins.github.io/assets/assets/icons/oil-platform%2520colored.png": "6fcaa0df0fe96532d765e1e19278f8ac",
"cidmartins.github.io/assets/assets/icons/oil-platform.png": "1aea446e1f309217ed208dcf65c6a702",
"cidmartins.github.io/assets/assets/icons/vessel.png": "7a0e158b8071274846daf3efd9512d46",
"cidmartins.github.io/assets/assets/icons/warning.png": "b1e5c9ef2ea556ec3260a2a727725006",
"cidmartins.github.io/assets/assets/icons/way.png": "58120c91847a2a7ff2a4f48cb95c8ab8",
"cidmartins.github.io/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"cidmartins.github.io/assets/fonts/MaterialIcons-Regular.otf": "3a7591f4a811a5e8147a94ef05315693",
"cidmartins.github.io/assets/NOTICES": "abd5ff83e7af6ef47c773b8eefadcd8c",
"cidmartins.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"cidmartins.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "45e1d3666d6e25e67f39fc1ae39837ce",
"cidmartins.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c2281cf0a22c29917ebf755ba9d11e50",
"cidmartins.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9713978c68bcf226d5b984ada43cb8a0",
"cidmartins.github.io/assets/shaders/ink_sparkle.frag": "91755f6d9762e19826bbbd2c2513da93",
"cidmartins.github.io/canvaskit/canvaskit.js": "492d074c2afe1f2d8ad0990cda0f6738",
"cidmartins.github.io/canvaskit/canvaskit.wasm": "6972cd6e8f48c5f3c027416c7b2443a6",
"cidmartins.github.io/canvaskit/profiling/canvaskit.js": "d4f1235d38aeb32455867847ce05e74f",
"cidmartins.github.io/canvaskit/profiling/canvaskit.wasm": "09aacbc0d8b20c7ee684e310703e2d86",
"cidmartins.github.io/favicon.png": "bf0c119ad5bbd8ab3d18c636ba25d248",
"cidmartins.github.io/flutter.js": "f916451a1f92b11ff8e28c4f8286d327",
"cidmartins.github.io/icons/Icon-192.png": "d4c0e4568baf9b4e275f5bcb541180da",
"cidmartins.github.io/icons/Icon-512.png": "46d1256b2c00567151e474dd8dddc772",
"cidmartins.github.io/icons/Icon-maskable-192.png": "d4c0e4568baf9b4e275f5bcb541180da",
"cidmartins.github.io/icons/Icon-maskable-512.png": "46d1256b2c00567151e474dd8dddc772",
"cidmartins.github.io/index.html": "7c7032226405b02d8a755678c30e4b40",
"/": "ceaf19989529a7e23b415c8553808a16",
"cidmartins.github.io/main.dart.js": "815019a5f7979a39ed77e2bbd0e6876e",
"cidmartins.github.io/manifest.json": "ba160082b264e9699e9263a3a1a09d3b",
"cidmartins.github.io/splash/img/dark-1x.png": "ed4f484913a1e3a2a1a55fdfcdf3040c",
"cidmartins.github.io/splash/img/dark-2x.png": "39449355c91c5710e600a3526dabbffa",
"cidmartins.github.io/splash/img/dark-3x.png": "f659b59f3b250ce03747dd8dad19c80f",
"cidmartins.github.io/splash/img/dark-4x.png": "4ae554d8d689e98eaa8a98ef28d37417",
"cidmartins.github.io/splash/img/light-1x.png": "ed4f484913a1e3a2a1a55fdfcdf3040c",
"cidmartins.github.io/splash/img/light-2x.png": "39449355c91c5710e600a3526dabbffa",
"cidmartins.github.io/splash/img/light-3x.png": "f659b59f3b250ce03747dd8dad19c80f",
"cidmartins.github.io/splash/img/light-4x.png": "4ae554d8d689e98eaa8a98ef28d37417",
"cidmartins.github.io/splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"cidmartins.github.io/splash/style.css": "17f3c5868fcb514fc44740e742c2251d",
"cidmartins.github.io/version.json": "b503122729b5743932892dd10c419fbe",
"favicon.png": "bf0c119ad5bbd8ab3d18c636ba25d248",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "d4c0e4568baf9b4e275f5bcb541180da",
"icons/Icon-512.png": "46d1256b2c00567151e474dd8dddc772",
"icons/Icon-maskable-192.png": "d4c0e4568baf9b4e275f5bcb541180da",
"icons/Icon-maskable-512.png": "46d1256b2c00567151e474dd8dddc772",
"index.html": "ceaf19989529a7e23b415c8553808a16",
"main.dart.js": "47a6b598d59b67fd910699603bcb4ec3",
"manifest.json": "65c35d4b89e5d46959143efa70a76a31",
"splash/img/dark-1x.png": "ed4f484913a1e3a2a1a55fdfcdf3040c",
"splash/img/dark-2x.png": "39449355c91c5710e600a3526dabbffa",
"splash/img/dark-3x.png": "f659b59f3b250ce03747dd8dad19c80f",
"splash/img/dark-4x.png": "4ae554d8d689e98eaa8a98ef28d37417",
"splash/img/light-1x.png": "ed4f484913a1e3a2a1a55fdfcdf3040c",
"splash/img/light-2x.png": "39449355c91c5710e600a3526dabbffa",
"splash/img/light-3x.png": "f659b59f3b250ce03747dd8dad19c80f",
"splash/img/light-4x.png": "4ae554d8d689e98eaa8a98ef28d37417",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "8cb430b5c559c4d216d865fb067ee368",
"version.json": "b503122729b5743932892dd10c419fbe"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
