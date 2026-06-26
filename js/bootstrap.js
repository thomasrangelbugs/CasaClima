function bootModules() {
  if (typeof initTheme === "function") {
    initTheme();
  }
  if (typeof initI18n === "function") {
    initI18n();
  }
  if (typeof initViewTransitions === "function") {
    initViewTransitions();
  }
  if (typeof initSkeletons === "function") {
    initSkeletons();
  }
  if (typeof initWeatherIcons === "function") {
    initWeatherIcons();
  }
  if (typeof initVaultCrypto === "function") {
    initVaultCrypto();
  }
  if (typeof initBudgetCharts === "function") {
    initBudgetCharts();
  }
  if (typeof initRouteMap === "function") {
    initRouteMap().catch(() => {
      // Mapa opcional.
    });
  }
  if (typeof initSync === "function") {
    initSync();
  }
  if (typeof initPushReminders === "function") {
    initPushReminders();
  }

  document.documentElement.classList.add("js-ready");
}

bootModules();
