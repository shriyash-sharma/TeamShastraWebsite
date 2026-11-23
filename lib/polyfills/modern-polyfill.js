// Stands in for next/dist/build/polyfills/polyfill-module (aliased in next.config.mjs).
// Everything else in Next's module is native in our browserslist; URL.canParse is newer
// (Chrome/Edge 120, Firefox 115, Safari 17), so it stays.
if (typeof URL !== "undefined" && typeof URL.canParse !== "function") {
  URL.canParse = function (url, base) {
    try {
      new URL(url, base);
      return true;
    } catch (e) {
      return false;
    }
  };
}
