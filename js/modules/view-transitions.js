function initViewTransitions() {
  if (!document.startViewTransition) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  document.querySelectorAll("#siteNav a[href], .quick-link-card[href], .brand[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http")) {
      return;
    }

    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
        return;
      }

      event.preventDefault();
      const destination = link.href;

      document.startViewTransition(async () => {
        window.location.href = destination;
        await new Promise((resolve) => setTimeout(resolve, 280));
      });
    });
  });
}

window.initViewTransitions = initViewTransitions;
