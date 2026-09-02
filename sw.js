// Service Worker للصفحة الوسيطة (GitHub Pages)
// الهدف: تفعيل تثبيت PWA وظهور الأيقونة على الآيفون/أندرويد

self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(self.clients.claim());
});

// مطلوب لظهور رسالة تثبيت PWA في Chrome
self.addEventListener('fetch', function (e) {
  // pass-through (network only) - التطبيق نفسه محمّل داخل iframe من GAS
});
