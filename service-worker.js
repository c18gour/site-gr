                        importScripts("/site-gr/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/site-gr/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/site-gr/index.html","revision":"1ba3773d02c1b05b8f40d85d8fc0af58"},{"url":"/site-gr/posts/2016/10/20/genedis-conference-2016/","revision":"8f88aee78be56747502aa654ba09f97d"},{"url":"/site-gr/posts/2016/10/05/kentros-guest-lecture/","revision":"7a9c3df4068fcd845e3b892a0d201bc3"},{"url":"/site-gr/posts/2016/09/28/undergrad-studies2016-start/","revision":"0d4f8f02147d37d8fa5f92e88b83f434"},{"url":"/site-gr/posts/2016/09/21/adriatinn-conference/","revision":"8350b164dee03ed8da4762b5123bc92b"},{"url":"/site-gr/posts/2016/09/12/freshman2016-registration/","revision":"45fd32805c157b12a8d8f625c26fa3b0"}];
            // service-worker.js

// set names for both precache & runtime cache
 
workbox.core.setCacheNameDetails({
    prefix: 'ioniodi',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

 // let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

 // let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

 // use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

 // use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

 // third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
); 
