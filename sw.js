importScripts('workbox-sw.js');

// Configure Cache Names
workbox.core.setCacheNameDetails({
  prefix: 'balm-ui',
  suffix: 'v20200215', // NOTE: need update with every release
  precache: 'app-cache',
  runtime: 'app-runtime'
});

workbox.precaching.precacheAndRoute([{"revision":"5038abf11feb7611a75d561d8ea0fddd","url":"css/app.65399d0e.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"css/ie/latest.d41d8cd9.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"css/ie/lte10.d41d8cd9.css"},{"revision":"eb2125cd2c79f95bc64491c9da71c73d","url":"css/plugins.eb2125cd.css"},{"revision":"2b8174adc868ea79ac7b3cc0b1b9afe5","url":"index.html"},{"revision":"4fbecc824a4cc6ad14f1c77435435702","url":"js/app.4fbecc82.js"},{"revision":"eb1e43e7abfec43c84b71fdb759860ca","url":"js/async/0.0bfd8a08.js"},{"revision":"20578b19acf10889cc69e108606d6d34","url":"js/async/10.325238fa.js"},{"revision":"c58722d4d5e2470c396cbae35b436e65","url":"js/async/11.fc582536.js"},{"revision":"72cfd641d53d0e4ed069e955e2cbbfa7","url":"js/async/12.0c63301b.js"},{"revision":"caa4c4f7a2cea924590c2b199e6b949d","url":"js/async/13.77ed17ac.js"},{"revision":"51bc461d9c51b2b8f1d64c5dd9467850","url":"js/async/14.02ea0d34.js"},{"revision":"d7ca43b0b57f7681106fb11ec86a347f","url":"js/async/15.ba9326b6.js"},{"revision":"127345dcb82e1441535d111069963ca1","url":"js/async/16.f0cb0641.js"},{"revision":"4a2ae70c28f5eff48040be79118918a3","url":"js/async/17.d9636349.js"},{"revision":"7307f9441ff163d658ca037ff00dec6d","url":"js/async/18.5d35979a.js"},{"revision":"e722ac4df75f7a7e732ef234eccf039e","url":"js/async/19.3f57fbff.js"},{"revision":"fde36f5313759a9f405c450901a8868f","url":"js/async/20.609b276e.js"},{"revision":"9150f7f6f33e0af01424ceb201609b4f","url":"js/async/21.da8ceb34.js"},{"revision":"f200bfe57dc1def2360d97b8ba67cfc7","url":"js/async/22.1492b492.js"},{"revision":"fcd99db24f6bc96593bdc4df4ddc6942","url":"js/async/23.e22ac3c9.js"},{"revision":"da9040a54266bc5132625d13e99f9013","url":"js/async/24.0ed75b0d.js"},{"revision":"5c0f082e0e37da6a952363ee49f54b2a","url":"js/async/25.6d4bf855.js"},{"revision":"7ded001af7a61f59abefcbedd44b6a57","url":"js/async/26.38620f6e.js"},{"revision":"da6c6f0f76bada632024c7eab402c231","url":"js/async/27.600e2ae1.js"},{"revision":"94ea868c931f31f7dfe5ee193f59aa47","url":"js/async/28.b19e865f.js"},{"revision":"9d1ff651d6d96efb163e3efd82a27983","url":"js/async/29.7f82ad30.js"},{"revision":"1ec22228cd4754830f6642664cfeb1bc","url":"js/async/30.4ea0df42.js"},{"revision":"e159823f32f6b4ac14a5e7dd103fc49e","url":"js/async/31.48da5cad.js"},{"revision":"876273ff7cca3bf08387628a37f87de6","url":"js/async/32.6807aa9d.js"},{"revision":"a28ac648d3aa6a86756733ebcf2cf55b","url":"js/async/33.6bfd5b48.js"},{"revision":"54a55982b627145b9fa77d4821bbf0fa","url":"js/async/34.49186dca.js"},{"revision":"51510a0cec315ba82b1cd48fbbabf7ce","url":"js/async/35.20bfe013.js"},{"revision":"35e200de0cbcfd7dac7b4cf4489fdfd0","url":"js/async/36.ced4b781.js"},{"revision":"a1cf6fb7ee2d0f4b37ca84f780d3ceff","url":"js/async/37.fca09621.js"},{"revision":"c4b009399150e6932b0eb56af12aec55","url":"js/async/38.fb8cebe7.js"},{"revision":"660786907654ac8c2d288ec75e05f576","url":"js/async/39.484d8c6b.js"},{"revision":"69245349058c1cc7fed473208435b093","url":"js/async/4.1c9f4a45.js"},{"revision":"b46015d4b6c820789bae9edf2e483931","url":"js/async/40.56b5c2cc.js"},{"revision":"1243d908f30b63eadaab4b2b9ade50ba","url":"js/async/41.4dde2469.js"},{"revision":"0366ea1ce9b94e7d8827e82df8eb68b3","url":"js/async/42.01527f24.js"},{"revision":"6001f9f9acffb90aedc8f6e3f5356703","url":"js/async/43.d5dfa4d2.js"},{"revision":"605e276cf8fff209d78862d0b6fc5d56","url":"js/async/44.2fbfc66b.js"},{"revision":"f3462b178cd588568668a86cbc7bbd23","url":"js/async/45.4633237b.js"},{"revision":"4310458fe8f158199ff4bbaf5692acfb","url":"js/async/46.4f0b8dd3.js"},{"revision":"4676539b2c3d5215013fc9df9ff2c3e1","url":"js/async/47.30746d90.js"},{"revision":"7e67d30e6d2eea4be8b903e438eeaea2","url":"js/async/48.b5577071.js"},{"revision":"c171d4212179334042dded7778883566","url":"js/async/49.c5be25aa.js"},{"revision":"e9f93a4d9aaf74b83c23e6950548b513","url":"js/async/5.3e09f677.js"},{"revision":"8fccea1648c37a7ace7eac6131d85ce5","url":"js/async/50.1cb8342e.js"},{"revision":"f6661f290dfafc4321699b6a4fad67e8","url":"js/async/51.07a60d02.js"},{"revision":"30489066c4bf99f47303dcd19ed0b7a5","url":"js/async/52.6f165edc.js"},{"revision":"f1f01f71f9c8a482a4f88970eaf5508d","url":"js/async/53.86ad7044.js"},{"revision":"74cb55e00a46aa92ffdd22edaff9e714","url":"js/async/54.bda689ec.js"},{"revision":"df030c78d36d8a785a029169d223ff4f","url":"js/async/55.78808f7d.js"},{"revision":"896f950f5355057d962e6e27f884accd","url":"js/async/56.ae855c37.js"},{"revision":"57103355a7526ad218a09714681a0207","url":"js/async/57.e7bd5848.js"},{"revision":"06c7b5a5ad2babffb46f8fb6df895eff","url":"js/async/6.6ac38f42.js"},{"revision":"bc2dc8a6f067c6a8a054d59eeba945b3","url":"js/async/7.2460174e.js"},{"revision":"64d352e85740de84465210913c71bc5f","url":"js/async/8.6d4a9cba.js"},{"revision":"c2779b4738d688091dd99b111bf362bf","url":"js/async/9.52bbdf75.js"},{"revision":"0ce3272cb4d738047fe27e43a92fb151","url":"js/vendor/mylib.0ce3272c.js"},{"revision":"9c405fa5b687bf453b93afef58f45a5b","url":"js/vendor/myui.9c405fa5.js"},{"revision":"630ca38e27a07c25871e3998d76a01f0","url":"workbox-sw.js"}]);

// Caching Images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'balm-ui-images',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);

// Cache CSS and JavaScript Files
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'balm-ui-static-resources'
  })
);

// Cache Others
workbox.routing.registerRoute(
  /\.(?:ico)|json|ttf|woff(2?)$/,
  new workbox.strategies.StaleWhileRevalidate()
);

// Enable Offline Google Analytics
workbox.googleAnalytics.initialize();
