// go.p3vi.com -> www.p3vi.com. Reorder links: /reorder-<digits>/<collection id>?... -> /collections/reorder-<digits>/<collection id>?...
// (With the P3 Store app installed, Android opens these links in the app instead.)
(function () {
  var p = location.pathname, q = location.search || "", target = "https://www.p3vi.com/";
  var m = p.match(/^\/(reorder-[0-9]+\/[0-9]+)\/?$/);
  if (m) target = "https://www.p3vi.com/collections/" + m[1] + q;
  location.replace(target);
})();
