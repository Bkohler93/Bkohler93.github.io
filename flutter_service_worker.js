'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2b521e10dfa0f067561de489a19d6620",
"index.html": "916fe9d98bee6ff61813aecabb7a18ca",
"/": "916fe9d98bee6ff61813aecabb7a18ca",
"main.dart.js": "03896f258bf8eaa947d6891b8a6635db",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "28bd27778edd107d3d15d4c28ead9de3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "906fc433ff2f17c2c8af10ca573ca807",
".git/config": "23fa110e0b6272d85ad6726a2793e2f8",
".git/objects/59/2c77e39c562d566fba0d7a422978904897dc41": "1d995b7ac29d37fd7094484c0932c194",
".git/objects/59/9a5143571c11f6b67ceac8c3ff311c488c9012": "fb578bf61aa78c33beb54cfe546c85b9",
".git/objects/50/108fc636398684baad9e14eb7cfe607d660ab4": "b9e0ecdff3c909c55edb9dcf994d6e1e",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/a89baa035340c3590f164f5f8d405100673de0": "2122f46ec58001559ae39135e69af5c1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/56/ba2a35756aba8d8dd995d0c26ad159c8c545e7": "b5bfb5f58b17ee6bc44d25b0f3a88bf6",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/e2103a0591941165f1ebb781b0e7b35f729ed0": "894f707b0e2fea804fc7599141a68adc",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/96a32aff20edc866bcebf5de6aab001e0365b7": "0c947ef496263391deade536a1060ab1",
".git/objects/60/5253c48d0aff94d6de1bdff9cdcec6cb03c9b7": "8b16fd848b09bd79b138731fc813388b",
".git/objects/b5/b79a1681e703c4750a49a99218f3ef0ff8a4a5": "1c2e477be897f9dafa8ce5a8e8da295a",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d0/ee45fef6a1325d597d4e88821d039636d971f6": "11778c453afcab6e52c19b63b7e7d186",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/47af9d37ddd45cb6dfae0f42f99cdfb63f401f": "0f3d1314f6d78e5430defdd4e4787030",
".git/objects/f3/00dbfca4f5378d19f24ffd1f33d145971d071c": "8331d475b624629bcb5c6ba7ad93170c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/74afab459bf3c72d5c5fe4cb0cc99c967cde5d": "dfa952281cfc27bdb34ecd84b0cc4345",
".git/objects/ca/d69a0c32ea07bdde968c7e6273e3a55788d944": "8ab83eb1c470c599d9ed9916baa69021",
".git/objects/20/21dd6756efdd22fe9f41603f4c68fa4559925c": "fa777d6a31c675c32eb72a8769416cae",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/16/99b79142810c56f384dd1b0d0010001ee2396a": "fde9f548a13b7a43195e75b420e3fec0",
".git/objects/1f/c993bb56031b8c1b9f9afda405cd30f80e0ef9": "77ca7acf7f5a98b0ea459d0afba5c6a3",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/17ac7325092d914ac96ce06c462578185bba43": "4d707fde84ab00374cb5aff6c7bf4dc8",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/86/38828f78284466c1eba6c66966b75b1948102e": "58844f135bdfb1b0199a825969a05ea6",
".git/objects/44/557474da3da3a506d49d743972fd579950d9c4": "def179fbab009bc662de987306484c8b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/4c5b5b9a0b74960b9ef74e37725092497b85a5": "a33cd2665353d0a821ea2a3edf0c81eb",
".git/objects/38/2661e1af28075bcb17a9d2e80aff52c0954a28": "a69727c62ce98a2f4d71586c206614a5",
".git/objects/9a/3b4ca7a40100cd34a72fb70a10145553dd0b36": "b57d5045349176dc12d054851bb5e2d9",
".git/objects/31/268ff30180aead51c238abd97f4e1edf36d725": "f69bd241d7db0e8f2272d87b75a12b9f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/f1cb1271c6af14cef01a674bd568a5f0927319": "c5fe3de4289e6c0aede4a409149e11fd",
".git/objects/96/48b0a7ae891beab2b84e27ee584669a52661c9": "493f3826ae0e5f995e6bb7d31a3c71fc",
".git/objects/3f/e10207ea298078fb98d4d292a0a3aea21ff413": "c779b2a432a25e7ff2a5a017781709fd",
".git/objects/5b/953a2f05254a904874552bb600888cfcf7d8a0": "676f65807b5d27dab2e2df9357e159dc",
".git/objects/5b/ba5ada04bc00ca56d3c7eb673319c396bb40a9": "dfa5aeae7bf3b233b76e78dd2e53a25f",
".git/objects/5b/3306e6c38eff412193a08650001175b4ea326a": "195e66fef6597800d6f393f3fd07d3a9",
".git/objects/5b/cc084ada9970b2b8fdad0792d02e0a89827160": "6e2075bd66fc2aaf634348cc84067af7",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/01/0cdde155721218d61f8ef49085377d20783c25": "f3164189e2d3e8f74c1934f00e23e1fb",
".git/objects/06/784d702975b7b542e28a7e3d9fa9e48322642e": "840aa068646b618c57e8cd2b287c9f50",
".git/objects/06/c5dc9b6ef25ca0e40ad9f9fbe910960ef432f5": "6c5637fcaf9debec002c9222c33e9b86",
".git/objects/97/73ebfc4895c5d3dd092e736a32a856595e7786": "a014a5931a75cfcba142675bb4d8dc01",
".git/objects/0f/c6e40f816c52f3267008e4290b81b2ab0d2a68": "2c3bcbba0f6ec9fab82f7fababad3fc5",
".git/objects/0f/73c800894fc25b46539f5bf28cbbe42a0ddb82": "4ad2b800e3286fa8474cfdef119693ec",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/dd3d8adf370ee6647adf6c026f2e7f646117b4": "dbc0fce8fa6f1dcc53f6a8cd269eab52",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/a7/5fe60aa56ae28abe62d7139cf0174e3f390a8b": "f7e28100944458c0a4f8ced4a454c9fc",
".git/objects/a7/d36ebaaf3fef7682b7a433c5dd4e3b204cd1c7": "0961f7c77d4f1ca44897b919f52751b1",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/b6/e44d5587a0640ce914dbef10d2403ba588ae83": "40b277827fc753b268c9fe7ddec8b16a",
".git/objects/d5/64d0bc3dd917926892c55e3706cc116d5b165e": "ab5f20dcd5b558888db7d80b0f979f8a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7b154df3290e928c7b751bc7346b3d673db053": "df853d414668c9ab37d92834c68ee429",
".git/objects/c3/ac730a4e22234aea6bd6cf5cb083009b3b456d": "85f3eb9e71503b31ba6ff414e479527c",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/b06ce532366cc6b0f111d259585d2802ef4746": "a9ed31ce506c459d0579b40d9ccc2a10",
".git/objects/79/79bbe58b3cd8a9c833b8f285cdeb7a547cc751": "e7437226be3edcd6f91b429eebe3a7be",
".git/objects/2d/d6c668b9598c9911b60fa910f5a96a67c8c8fb": "be5e7a82cf0edae3336dd6a3e1b4e3b6",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/12/34421c74e89fe59126bca8a9e911212b3b723a": "acdb5ed0fa22c031350f5ae243517d7d",
".git/objects/12/2c1f5b2a59c24d29e0ff2014e06f00adbd9282": "af05cc36c9b0dd62c87c9327e7946111",
".git/objects/8c/e7277fb28ed968e4d56ef8fc59ccb8028a5d4f": "68297d87fdb60286c989fcf8e423a1cc",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/49/830d93ebb79f147a633001db85eae298761807": "af5339baa685a9ffcd5f54a42e5abaa0",
".git/objects/40/114b2765283c924037ad737af77ff4d64e7288": "237c200a17f2402b41407041d85bfe01",
".git/objects/40/49139046689582e7cef7c053c0a15b582f2d99": "8da0272cff96eed51338ba61dbaefe8b",
".git/objects/40/e83650a889227352e1bdd0c3c22576dbf46ce9": "811beea4ad5463663f8682ba88250796",
".git/objects/40/9f4c96f4d32fa8c540b6d1f69960570b3b7312": "d364a83bfe14ba199a3fe41f3d97cd51",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/25/dc5c4fe938c3d7a2a3163baf624fdfcd106e88": "27fe623d650c5504f5b1a2502aba8419",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1e6abff140707ffc02351e576b426021",
".git/logs/refs/heads/main": "74386ffdcc9e6b68ca274aa4aecd06eb",
".git/logs/refs/remotes/origin/main": "f43a3cfec597721d541d87c0d79b15b7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "46eb87d1f596189cbaa5f06347e0ed57",
".git/refs/remotes/origin/main": "46eb87d1f596189cbaa5f06347e0ed57",
".git/index": "80d4a7aba970000a163893440cdb13d6",
".git/COMMIT_EDITMSG": "a8edb3d9998f9274795b9b5f2be03ce7",
"assets/world.geo.json": "adab39fa7e63c952dfd3bc32e0d5d511",
"assets/AssetManifest.json": "a5c8e5b0161b463716aa23ccee99b51f",
"assets/NOTICES": "66d87ace04f030c068ff49c021dcdf09",
"assets/FontManifest.json": "535f15d5ee3029ad18f23a9a1ce25fdb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/dropdown_button2/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "2f7ad8210a5d75375c67afc6fad447b7",
"assets/fonts/MaterialIcons-Regular.otf": "567a9b48d7dc74f04aa0b06fa8535382",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
