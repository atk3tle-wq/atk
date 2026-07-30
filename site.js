// Opens the matching <details> FAQ item when arriving via a #hash link,
// and scrolls it into view. Progressive enhancement only — page works without JS.
(function () {
  function openTarget() {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el && el.tagName === "DETAILS") {
      el.open = true;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  window.addEventListener("hashchange", openTarget);
  document.addEventListener("DOMContentLoaded", openTarget);
})();
