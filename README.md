# نظام استئذان الموظفين — الغلاف (Wrapper) / GitHub Pages

هذا المستودع هو **الغلاف (PWA wrapper)** للتطبيق. الحل الكامل يعتمد على جزأين:

- **هذا المستودع (GitHub Pages):** يوفر الـ PWA (manifest + sw.js) وفتح التطبيق داخل iframe.
  وهذا هو النطاق الوحيد القادر على إظهار **رسالة تثبيت** المتصفح.
- **Google Apps Script:** يوفر واجهة التطبيق (`html.txt`) التي تعمل بها أوامر `google.script.run`.

> ⚠️ لماذا هذا التقسيم؟
> Google Apps Script يعرض HTML على نطاق `*.script.googleusercontent.com`
> (نطاق مختلف) → لا يمكن تسجيل Service Worker هناك → **رسالة التثبيت لا تظهر
> أبدًا على Apps Script وحدها**. لذلك نضع التطبيق داخل iframe من هذا الغلاف
> ويشتغل التثبيت من نطاق الغلاف.

## الإعداد

1. انشر الواجهة (`html.txt`) على Google Apps Script (Web App: Execute as Me،
   Anyone with the link) واستخرج رابط `/exec`.
2. في `index.html`، غيّر الرابط التالي إلى رابط الـ `/exec` الخاص بك:
   ```js
   frame.src = 'https://script.google.com/macros/s/.../exec';
   ```
3. ارفع الملفات إلى فرع `main` وفعّل GitHub Pages (Deploy from branch: main, / (root)).
4. استخدم رابط GitHub Pages كرابط التطبيق الرسمي.

## الملفات
- `index.html` — الغلاف: iframe + شريط تثبيت مخصص.
- `manifest.json` — تعريف PWA (الاسم، الأيقونات، الوضع).
- `sw.js` — Service Worker (بسيط، لتفعيل PWA).

الشرح الكامل للخطوات نقل الإعداد: راجع المستند
`نظام-النقل-والتوثيق.md` في مجلد العمل، أو الجدول أدناه.

## روابط حالية (2026-09)
- غلاف جديد: `https://mhmsar123.github.io/leave-pwa-v2/`
- رابط `/exec` الحالي داخل هذا الغلاف محدد في `index.html`.
