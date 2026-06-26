const I18N_STORAGE_KEY = "casaclima-locale";

const MESSAGES = {
  "pt-BR": {
    "nav.home": "Início",
    "nav.gastos": "Gastos",
    "nav.noticias": "Notícias",
    "nav.cofre": "Cofre",
    "nav.radio": "Rádio",
    "nav.utilidades": "Utilidades",
    "nav.cursos": "Cursos",
    "nav.perfil": "Perfil",
    "nav.menu": "Menu",
    "nav.openMenu": "Abrir menu",
    "search.cityLabel": "Buscar cidade",
    "search.cityPlaceholder": "Buscar cidade...",
    "search.gps": "GPS",
    "search.submit": "Buscar",
    "theme.toggle": "Alternar tema",
    "footer.localData": "Dados salvos localmente no navegador.",
    "vault.unlock": "Desbloquear cofre",
    "vault.setup": "Criar cofre protegido",
    "vault.masterPassword": "Senha mestra",
    "vault.lock": "Bloquear cofre"
  },
  "en-US": {
    "nav.home": "Home",
    "nav.gastos": "Budget",
    "nav.noticias": "News",
    "nav.cofre": "Vault",
    "nav.radio": "Radio",
    "nav.utilidades": "Utilities",
    "nav.cursos": "Courses",
    "nav.perfil": "Profile",
    "nav.menu": "Menu",
    "nav.openMenu": "Open menu",
    "search.cityLabel": "Search city",
    "search.cityPlaceholder": "Search city...",
    "search.gps": "GPS",
    "search.submit": "Search",
    "theme.toggle": "Toggle theme",
    "footer.localData": "Data saved locally in your browser.",
    "vault.unlock": "Unlock vault",
    "vault.setup": "Create protected vault",
    "vault.masterPassword": "Master password",
    "vault.lock": "Lock vault"
  }
};

const i18nState = {
  locale: "pt-BR"
};

function getStoredLocale() {
  try {
    const stored = localStorage.getItem(I18N_STORAGE_KEY);
    if (stored && MESSAGES[stored]) {
      return stored;
    }
  } catch (error) {
    // Ignora.
  }
  return "pt-BR";
}

function t(key) {
  return MESSAGES[i18nState.locale]?.[key] || MESSAGES["pt-BR"][key] || key;
}

function applyTranslations() {
  document.documentElement.lang = i18nState.locale;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key) {
      node.textContent = t(key);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    if (key) {
      node.setAttribute("placeholder", t(key));
    }
  });

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.textContent = i18nState.locale === "pt-BR" ? "EN" : "PT";
    langToggle.setAttribute(
      "aria-label",
      i18nState.locale === "pt-BR" ? "Switch to English" : "Mudar para português"
    );
  }
}

function toggleLocale() {
  i18nState.locale = i18nState.locale === "pt-BR" ? "en-US" : "pt-BR";
  try {
    localStorage.setItem(I18N_STORAGE_KEY, i18nState.locale);
  } catch (error) {
    // Ignora.
  }
  applyTranslations();
  showToast(i18nState.locale === "pt-BR" ? "Idioma: Português" : "Language: English", "success");
}

function initI18n() {
  i18nState.locale = getStoredLocale();
  applyTranslations();
  document.getElementById("langToggle")?.addEventListener("click", toggleLocale);
}

window.t = t;
window.initI18n = initI18n;
window.applyTranslations = applyTranslations;
