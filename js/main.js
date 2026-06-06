/** Highlight current page in navigation */
(function () {
  const path = window.location.pathname.replace(/\\/g, "/");
  const page = path.split("/").pop() || "index.html";

  document.querySelectorAll(".site-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const linkPage = href.split("/").pop();
    if (linkPage === page || (page === "" && linkPage === "index.html")) {
      link.setAttribute("aria-current", "page");
    }
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
