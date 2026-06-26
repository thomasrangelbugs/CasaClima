const STORAGE_KEYS = {
  session: "casaclima-session",
  location: "casaclima-location",
  weatherCache: "casaclima-weather-cache",
  newsCache: "casaclima-news-cache",
  budget: "casaclima-budget",
  vault: "casaclima-vault",
  tasks: "casaclima-tasks",
  contacts: "casaclima-contacts",
  notes: "casaclima-notes",
  radioFavorites: "casaclima-radio-favorites",
  newsTopics: "casaclima-news-topics",
  sceneTheme: "casaclima-scene-theme"
};

const DEFAULT_LOCATION = {
  name: "São Paulo, Brasil",
  latitude: -23.55,
  longitude: -46.63,
  timezone: "America/Sao_Paulo",
  locality: "São Paulo",
  state: "São Paulo",
  country: "Brasil",
  countryCode: "BR"
};

const EXPENSE_CATEGORIES = [
  {
    key: "housing",
    title: "Moradia",
    hint: "Aluguel, condomínio, manutenção estrutural e pequenos reparos."
  },
  {
    key: "utilities",
    title: "Água, luz e gás",
    hint: "Consumo básico da casa, botijão e taxas recorrentes."
  },
  {
    key: "internet",
    title: "Internet e celular",
    hint: "Planos de internet, telefone, streaming de dados e recargas."
  },
  {
    key: "market",
    title: "Supermercado",
    hint: "Compras de mercado, feira, itens de limpeza e reposição básica."
  },
  {
    key: "transport",
    title: "Transporte",
    hint: "Combustível, app de mobilidade, estacionamento e manutenção do carro."
  },
  {
    key: "health",
    title: "Saúde",
    hint: "Medicamentos, consultas, exames e plano de saúde."
  },
  {
    key: "education",
    title: "Educação",
    hint: "Cursos, mensalidades, material escolar e livros."
  },
  {
    key: "leisure",
    title: "Lazer",
    hint: "Passeios, delivery, cinema, viagens curtas e eventos."
  },
  {
    key: "subscriptions",
    title: "Assinaturas",
    hint: "Streaming, apps, clubes e serviços recorrentes."
  },
  {
    key: "pets",
    title: "Pets e cuidados",
    hint: "Ração, banho, veterinário e itens de conforto."
  }
];

const ESSENTIAL_CATEGORY_KEYS = ["housing", "utilities", "market", "transport", "health", "pets"];
const FIXED_CATEGORY_KEYS = ["housing", "utilities", "internet", "education", "subscriptions"];
const DEFAULT_BUDGET_BILLS = [
  { title: "Água", dueDay: "", amount: "", note: "", preset: true },
  { title: "Luz", dueDay: "", amount: "", note: "", preset: true },
  { title: "Gás", dueDay: "", amount: "", note: "", preset: true },
  { title: "Internet", dueDay: "", amount: "", note: "", preset: true },
  { title: "Celular", dueDay: "", amount: "", note: "", preset: true }
];

const NEWS_FEEDS = [
  {
    id: "futebol",
    label: "Futebol",
    source: "ge.globo",
    sourceLink: "https://ge.globo.com/futebol/",
    url: "https://ge.globo.com/rss/ge/futebol/",
    cover: "https://s2-ge.glbimg.com/MFGg74sxV8dyUenpJ7S5lgMOo-E=/144x0/http://i.s3.glbimg.com/v1/AUTH_afd7a7aa13da4265ba6d93a18f8aa19e/pox/ge.png"
  },
  {
    id: "esportes",
    label: "Esporte geral",
    source: "ge.globo",
    sourceLink: "https://ge.globo.com/",
    url: "https://ge.globo.com/rss/ge/",
    cover: "https://s2-ge.glbimg.com/MFGg74sxV8dyUenpJ7S5lgMOo-E=/144x0/http://i.s3.glbimg.com/v1/AUTH_afd7a7aa13da4265ba6d93a18f8aa19e/pox/ge.png"
  },
  {
    id: "esportesbr",
    label: "Esportes do Brasil",
    source: "Agência Brasil",
    sourceLink: "https://agenciabrasil.ebc.com.br/esportes",
    url: "https://agenciabrasil.ebc.com.br/rss/esportes/feed.xml"
  },
  {
    id: "basquete",
    label: "Basquete",
    source: "ge.globo",
    sourceLink: "https://ge.globo.com/basquete/",
    url: "https://ge.globo.com/rss/ge/basquete/",
    cover: "https://s2-ge.glbimg.com/MFGg74sxV8dyUenpJ7S5lgMOo-E=/144x0/http://i.s3.glbimg.com/v1/AUTH_afd7a7aa13da4265ba6d93a18f8aa19e/pox/ge.png"
  },
  {
    id: "volei",
    label: "Vôlei",
    source: "ge.globo",
    sourceLink: "https://ge.globo.com/volei/",
    url: "https://ge.globo.com/rss/ge/volei/",
    cover: "https://s2-ge.glbimg.com/MFGg74sxV8dyUenpJ7S5lgMOo-E=/144x0/http://i.s3.glbimg.com/v1/AUTH_afd7a7aa13da4265ba6d93a18f8aa19e/pox/ge.png"
  },
  {
    id: "automobilismo",
    label: "Automobilismo",
    source: "ge.globo",
    sourceLink: "https://ge.globo.com/motor/",
    url: "https://ge.globo.com/rss/ge/automobilismo/",
    cover: "https://s2-ge.glbimg.com/MFGg74sxV8dyUenpJ7S5lgMOo-E=/144x0/http://i.s3.glbimg.com/v1/AUTH_afd7a7aa13da4265ba6d93a18f8aa19e/pox/ge.png"
  },
  {
    id: "brasil",
    label: "Brasil",
    source: "Agência Brasil",
    sourceLink: "https://agenciabrasil.ebc.com.br/",
    url: "https://agenciabrasil.ebc.com.br/rss/geral/feed.xml"
  },
  {
    id: "politica",
    label: "Política",
    source: "Agência Brasil",
    sourceLink: "https://agenciabrasil.ebc.com.br/politica",
    url: "https://agenciabrasil.ebc.com.br/rss/politica/feed.xml"
  },
  {
    id: "economia",
    label: "Economia",
    source: "Agência Brasil",
    sourceLink: "https://agenciabrasil.ebc.com.br/economia",
    url: "https://agenciabrasil.ebc.com.br/rss/economia/feed.xml"
  },
  {
    id: "geral",
    label: "Geral do Brasil",
    source: "Agência Brasil",
    sourceLink: "https://agenciabrasil.ebc.com.br/",
    url: "https://agenciabrasil.ebc.com.br/rss/ultimasnoticias/feed.xml"
  },
  {
    id: "mundo",
    label: "Mundo",
    source: "BBC",
    sourceLink: "https://www.bbc.com/news/world",
    url: "https://feeds.bbci.co.uk/news/world/rss.xml"
  },
  {
    id: "politica_global",
    label: "Política global",
    source: "BBC",
    sourceLink: "https://www.bbc.com/news/politics",
    url: "https://feeds.bbci.co.uk/news/politics/rss.xml"
  },
  {
    id: "negocios",
    label: "Negócios",
    source: "BBC",
    sourceLink: "https://www.bbc.com/news/business",
    url: "https://feeds.bbci.co.uk/news/business/rss.xml"
  },
  {
    id: "tecnologia",
    label: "Tecnologia",
    source: "BBC",
    sourceLink: "https://www.bbc.com/news/technology",
    url: "https://feeds.bbci.co.uk/news/technology/rss.xml"
  }
];
const NEWS_DEFAULT_TOPICS = ["futebol", "politica", "mundo"];

const RADIO_TAGS = [
  { value: "", label: "Todos os gêneros" },
  { value: "news,talk", label: "Notícias" },
  { value: "sports", label: "Esportes" },
  { value: "football,soccer,sports", label: "Futebol" },
  { value: "basketball,sports", label: "Basquete" },
  { value: "volleyball,sports", label: "Vôlei" },
  { value: "talk", label: "Conversa" },
  { value: "pop", label: "Pop" },
  { value: "rock", label: "Rock" },
  { value: "electronic,dance", label: "Eletrônica" },
  { value: "jazz", label: "Jazz" },
  { value: "classical", label: "Clássica" },
  { value: "gospel", label: "Gospel" },
  { value: "sertanejo,country", label: "Sertanejo" },
  { value: "oldies,flashback", label: "Flashback" }
];

const RADIO_ALLOWED_CODECS = ["aac", "aac+", "mp3", "mpeg", "ogg", "opus", "flac", "hls"];
const RADIO_BROWSER_ENDPOINTS = [
  "https://de1.api.radio-browser.info",
  "https://nl1.api.radio-browser.info",
  "https://fi1.api.radio-browser.info"
];
const REQUEST_TIMEOUTS = {
  weather: 9000,
  geocode: 7000,
  ibge: 7000,
  radio: 6500,
  news: 8000,
  utility: 7000
};
const WEATHER_CACHE_TTL_MS = 15 * 60 * 1000;
const NEWS_CACHE_TTL_MS = 10 * 60 * 1000;
const BRAZIL_STATE_FALLBACKS = [
  { code: "AC", name: "Acre" },
  { code: "AL", name: "Alagoas" },
  { code: "AP", name: "Amapá" },
  { code: "AM", name: "Amazonas" },
  { code: "BA", name: "Bahia" },
  { code: "CE", name: "Ceará" },
  { code: "DF", name: "Distrito Federal" },
  { code: "ES", name: "Espírito Santo" },
  { code: "GO", name: "Goiás" },
  { code: "MA", name: "Maranhão" },
  { code: "MT", name: "Mato Grosso" },
  { code: "MS", name: "Mato Grosso do Sul" },
  { code: "MG", name: "Minas Gerais" },
  { code: "PA", name: "Pará" },
  { code: "PB", name: "Paraíba" },
  { code: "PR", name: "Paraná" },
  { code: "PE", name: "Pernambuco" },
  { code: "PI", name: "Piauí" },
  { code: "RJ", name: "Rio de Janeiro" },
  { code: "RN", name: "Rio Grande do Norte" },
  { code: "RS", name: "Rio Grande do Sul" },
  { code: "RO", name: "Rondônia" },
  { code: "RR", name: "Roraima" },
  { code: "SC", name: "Santa Catarina" },
  { code: "SP", name: "São Paulo" },
  { code: "SE", name: "Sergipe" },
  { code: "TO", name: "Tocantins" }
];

const state = {
  location: normalizeLocation(loadStorage(STORAGE_KEYS.location, DEFAULT_LOCATION)),
  budget: normalizeBudgetState(loadStorage(STORAGE_KEYS.budget, null)),
  vault: normalizeVault(loadStorage(STORAGE_KEYS.vault, [])),
  tasks: normalizeTasks(loadStorage(STORAGE_KEYS.tasks, buildDefaultTasks())),
  contacts: normalizeContacts(loadStorage(STORAGE_KEYS.contacts, buildDefaultContacts())),
  notes: loadStorage(STORAGE_KEYS.notes, "Anote aqui compras, manutenções, recados e ideias da casa."),
  radioFavorites: normalizeRadioFavorites(loadStorage(STORAGE_KEYS.radioFavorites, [])),
  newsTopics: normalizeNewsTopics(loadStorage(STORAGE_KEYS.newsTopics, NEWS_DEFAULT_TOPICS)),
  weather: null,
  weatherInfo: null,
  weatherSearchResults: [],
  selectedRadioTag: "",
  radioResults: [],
  radioMode: "default",
  radioHasSearched: false,
  currentStation: null,
  hlsInstance: null,
  autoDark: false,
  radioDirectories: {},
  radioBrazilStates: [],
  radioBrazilCities: {},
  radioOptionBank: {
    country: [],
    state: [],
    city: []
  },
  radioOptionMeta: {
    state: {
      emptyLabel: "Todos os estados",
      disabled: false
    },
    city: {
      emptyLabel: "Todas as cidades",
      disabled: false
    }
  },
  routeOrigin: null,
  routeDestination: null,
  routeLastStreetAt: 0,
  routeLastRouteAt: 0,
  routeDriveMode: false,
  visiblePasswords: new Set()
};

const refs = {
  body: document.body,
  currentYear: document.getElementById("currentYear"),
  toastStack: document.getElementById("toastStack"),
  scrollProgress: document.getElementById("scrollProgress"),
  weatherEffects: document.getElementById("weatherEffects"),
  menuToggle: document.getElementById("menuToggle"),
  navOverlay: document.getElementById("navOverlay"),
  siteNav: document.getElementById("siteNav"),
  weatherStripTrack: document.getElementById("weatherStripTrack"),
  weatherLocationLabel: document.getElementById("weatherLocationLabel"),
  weatherSummaryText: document.getElementById("weatherSummaryText"),
  weatherSearchForm: document.getElementById("weatherSearchForm"),
  weatherSearchInput: document.getElementById("weatherSearchInput"),
  currentLocationButton: document.getElementById("currentLocationButton"),
  searchResults: document.getElementById("searchResults"),
  metricTemp: document.getElementById("metricTemp"),
  heroTemperature: document.getElementById("heroTemperature"),
  dailyRange: document.getElementById("dailyRange"),
  metricFeels: document.getElementById("metricFeels"),
  metricHumidity: document.getElementById("metricHumidity"),
  metricWind: document.getElementById("metricWind"),
  metricRainChance: document.getElementById("metricRainChance"),
  metricPressure: document.getElementById("metricPressure"),
  metricMoon: document.getElementById("metricMoon"),
  metricSeason: document.getElementById("metricSeason"),
  dailyHeadline: document.getElementById("dailyHeadline"),
  dailyInsight: document.getElementById("dailyInsight"),
  currentClock: document.getElementById("currentClock"),
  homeCommandInput: document.getElementById("homeCommandInput"),
  homeCommandClear: document.getElementById("homeCommandClear"),
  homeCommandMeta: document.getElementById("homeCommandMeta"),
  homeCommandResults: document.getElementById("homeCommandResults"),
  homeConnectionStatus: document.getElementById("homeConnectionStatus"),
  homeStorageStatus: document.getElementById("homeStorageStatus"),
  homeDataPulse: document.getElementById("homeDataPulse"),
  homeDataPulseLabel: document.getElementById("homeDataPulseLabel"),
  homeHealthScore: document.getElementById("homeHealthScore"),
  homeBriefingSignal: document.getElementById("homeBriefingSignal"),
  homeBriefingList: document.getElementById("homeBriefingList"),
  homeFocusAction: document.getElementById("homeFocusAction"),
  homeSnapshotWeather: document.getElementById("homeSnapshotWeather"),
  homeSnapshotBudget: document.getElementById("homeSnapshotBudget"),
  homeSnapshotTasks: document.getElementById("homeSnapshotTasks"),
  homeAutomationList: document.getElementById("homeAutomationList"),
  summaryWeather: document.getElementById("summaryWeather"),
  summaryBalance: document.getElementById("summaryBalance"),
  summaryTasks: document.getElementById("summaryTasks"),
  summaryNextBill: document.getElementById("summaryNextBill"),
  forecastGrid: document.getElementById("forecastGrid"),
  incomeInput: document.getElementById("incomeInput"),
  savingsGoalInput: document.getElementById("savingsGoalInput"),
  budgetTabBar: document.getElementById("budgetTabBar"),
  expenseGrid: document.getElementById("expenseGrid"),
  addBudgetCategoryButton: document.getElementById("addBudgetCategoryButton"),
  addFixedCategoryButton: document.getElementById("addFixedCategoryButton"),
  addVariableCategoryButton: document.getElementById("addVariableCategoryButton"),
  addExtraExpenseButton: document.getElementById("addExtraExpenseButton"),
  extraExpensesList: document.getElementById("extraExpensesList"),
  addBillButton: document.getElementById("addBillButton"),
  billList: document.getElementById("billList"),
  budgetNotes: document.getElementById("budgetNotes"),
  budgetExportArea: document.getElementById("budgetExportArea"),
  fixedDashboardList: document.getElementById("fixedDashboardList"),
  variableDashboardList: document.getElementById("variableDashboardList"),
  categoryDashboardList: document.getElementById("categoryDashboardList"),
  budgetNotesPreview: document.getElementById("budgetNotesPreview"),
  budgetQuickBalance: document.getElementById("budgetQuickBalance"),
  budgetQuickNextBill: document.getElementById("budgetQuickNextBill"),
  totalExpenses: document.getElementById("totalExpenses"),
  essentialExpenses: document.getElementById("essentialExpenses"),
  variableExpenses: document.getElementById("variableExpenses"),
  budgetBalance: document.getElementById("budgetBalance"),
  goalCoverage: document.getElementById("goalCoverage"),
  commitmentValue: document.getElementById("commitmentValue"),
  commitmentMeter: document.getElementById("commitmentMeter"),
  budgetInsight: document.getElementById("budgetInsight"),
  nextBillText: document.getElementById("nextBillText"),
  refreshNewsButton: document.getElementById("refreshNewsButton"),
  vaultForm: document.getElementById("vaultForm"),
  vaultServiceInput: document.getElementById("vaultServiceInput"),
  vaultUsernameInput: document.getElementById("vaultUsernameInput"),
  vaultPasswordInput: document.getElementById("vaultPasswordInput"),
  vaultUrlInput: document.getElementById("vaultUrlInput"),
  vaultNotesInput: document.getElementById("vaultNotesInput"),
  vaultFilterInput: document.getElementById("vaultFilterInput"),
  vaultList: document.getElementById("vaultList"),
  radioSearchForm: document.getElementById("radioSearchForm"),
  radioSearchInput: document.getElementById("radioSearchInput"),
  radioCountrySelect: document.getElementById("radioCountrySelect"),
  radioStateInput: document.getElementById("radioStateInput"),
  radioCityInput: document.getElementById("radioCityInput"),
  radioGenreSelect: document.getElementById("radioGenreSelect"),
  radioNearbyButton: document.getElementById("radioNearbyButton"),
  radioTagChips: document.getElementById("radioTagChips"),
  radioResults: document.getElementById("radioResults"),
  radioStatus: document.getElementById("radioStatus"),
  radioNowPlaying: document.getElementById("radioNowPlaying"),
  radioMeta: document.getElementById("radioMeta"),
  radioPlayer: document.getElementById("radioPlayer"),
  radioFavorites: document.getElementById("radioFavorites"),
  routeForm: document.getElementById("routeForm"),
  routeDestinationInput: document.getElementById("routeDestinationInput"),
  routeCoordinatesInput: document.getElementById("routeCoordinatesInput"),
  routeUseCurrentButton: document.getElementById("routeUseCurrentButton"),
  routeDriveModeButton: document.getElementById("routeDriveModeButton"),
  routeClearButton: document.getElementById("routeClearButton"),
  routeStatus: document.getElementById("routeStatus"),
  routeOriginLabel: document.getElementById("routeOriginLabel"),
  routeDestinationLabel: document.getElementById("routeDestinationLabel"),
  routeDistance: document.getElementById("routeDistance"),
  routeDuration: document.getElementById("routeDuration"),
  routeStreet: document.getElementById("routeStreet"),
  routeSteps: document.getElementById("routeSteps"),
  routeMap: document.getElementById("routeMap"),
  newsTopicSelects: Array.from(document.querySelectorAll(".news-topic-select")),
  taskForm: document.getElementById("taskForm"),
  taskInput: document.getElementById("taskInput"),
  taskList: document.getElementById("taskList"),
  addContactButton: document.getElementById("addContactButton"),
  contactList: document.getElementById("contactList"),
  homeNotes: document.getElementById("homeNotes"),
  homeTipsList: document.getElementById("homeTipsList")
};

const routeRuntime = {
  map: null,
  tileLayer: null,
  originMarker: null,
  destinationMarker: null,
  routeLine: null,
  followMarker: null,
  watchId: null
};

const pageFeatures = {
  home: Boolean(document.getElementById("homeIntelligence")),
  dashboard: Boolean(refs.dailyHeadline || refs.forecastGrid || refs.summaryWeather),
  budget: Boolean(refs.expenseGrid || refs.totalExpenses),
  news: Boolean(refs.refreshNewsButton || refs.newsTopicSelects.length),
  vault: Boolean(refs.vaultForm || refs.vaultList),
  radio: Boolean(refs.radioSearchForm || refs.radioPlayer),
  utilities: Boolean(refs.taskForm || refs.contactList || refs.homeNotes),
  courses: Boolean(document.getElementById("coursesGrid"))
};

function setNodeText(node, value) {
  if (node) {
    node.textContent = value;
  }
}

function setNodeHtml(node, value) {
  if (node) {
    node.innerHTML = value;
  }
}

function setNodeValue(node, value) {
  if (node) {
    node.value = value;
  }
}

async function fetchWithTimeout(resource, options = {}, timeoutMs = 8000) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(new Error("timeout")), timeoutMs);

  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal
    });
    return response;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function fetchJsonWithTimeout(resource, options = {}, timeoutMs = 8000) {
  const response = await fetchWithTimeout(resource, options, timeoutMs);
  if (!response.ok) {
    throw new Error(`http_${response.status}`);
  }
  return response.json();
}

async function fetchJsonWithRetry(resource, options = {}, timeoutMs = 8000, retries = 1) {
  let lastError = null;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await fetchJsonWithTimeout(resource, options, timeoutMs);
    } catch (error) {
      lastError = error;
      if (attempt >= retries) {
        break;
      }
    }
  }

  throw lastError;
}

let debouncedCitySearch;
let latestWeatherRequestId = 0;
const homeRuntime = {
  initialized: false,
  storage: null
};

async function init() {
  try {
    localStorage.removeItem("casaclima-location-source");
  } catch (error) {
    // Ignora modo privado restrito.
  }

  const locationTask = syncLocationToCurrentRegion({
    refreshWeather: Boolean(refs.weatherEffects),
    syncRadio: pageFeatures.radio,
    refreshUtilities: pageFeatures.utilities,
    silent: false,
    useDeviceLocation: isGeolocationAvailable()
  });

  setNodeText(refs.currentYear, new Date().getFullYear());
  setNodeValue(refs.homeNotes, state.notes);
  setNodeValue(refs.incomeInput, state.budget.income);
  setNodeValue(refs.savingsGoalInput, state.budget.savingsGoal);
  setNodeValue(refs.budgetNotes, state.budget.notes);
  setNodeText(refs.weatherLocationLabel, formatLocationLabel(state.location));

  ensureNavOverlayPlacement();
  bindEvents();
  wireUtilitiesPage();
  initSectionToggles();
  initWeatherStripScroller();
  if (window.location.hash) {
    openSectionFromHash(window.location.hash);
    window.setTimeout(() => scrollToHash(window.location.hash, "auto"), 40);
  }
  if (pageFeatures.budget) {
    renderExpenseGrid();
    renderExtraExpenses();
    renderBills();
    if (typeof initBudgetPage === "function") {
      initBudgetPage();
    }
  }
  if (pageFeatures.vault) {
    renderVaultList();
  }
  if (pageFeatures.news) {
    renderNewsTopicSelects();
  }
  if (pageFeatures.radio) {
    cacheRadioCountryOptions();
    renderRadioCountryOptions(refs.radioCountrySelect.value || state.location.countryCode || "BR");
    syncRadioLocationFilters(state.location);
    renderRadioGenreOptions();
    renderRadioTagChips();
    renderRadioFavorites();
  }
  if (pageFeatures.home) {
    initHomeIntelligence();
    renderHomeIntelligence();
    updateHomeStorageStatus();
  }
  initRevealObserver();
  initSession();
  initPwaSupport();
  updateScrollProgress();
  if (refs.currentClock) {
    updateClock();
    setInterval(updateClock, 1000);
  }
  refs.body.classList.add("has-weather-fade");
  applyEffectiveTheme();

  if (pageFeatures.news) {
    loadNews();
    setInterval(loadNews, 15 * 60 * 1000);
  }
  await locationTask;
  hydrateSceneIfMissing();
  if (pageFeatures.home) {
    renderHomeIntelligence();
  }
  if (
    typeof renderBudgetSummary === "function" &&
    (pageFeatures.budget || refs.summaryBalance || refs.summaryNextBill || refs.summaryTasks || refs.summaryWeather)
  ) {
    renderBudgetSummary();
  }

  wireUtilitiesPage();
}

function ensureNavOverlayPlacement() {
  const pageShell = document.getElementById("pageShell");
  const overlay = refs.navOverlay;
  if (!pageShell || !overlay || overlay.parentElement === pageShell) {
    return;
  }

  const masthead = pageShell.querySelector(".masthead");
  if (masthead) {
    masthead.insertAdjacentElement("afterend", overlay);
  } else {
    pageShell.prepend(overlay);
  }
}

function wireUtilitiesPage() {
  refs.taskForm = document.getElementById("taskForm");
  refs.taskInput = document.getElementById("taskInput");
  refs.taskList = document.getElementById("taskList");
  refs.addContactButton = document.getElementById("addContactButton");
  refs.contactList = document.getElementById("contactList");
  refs.homeNotes = document.getElementById("homeNotes");
  refs.homeTipsList = document.getElementById("homeTipsList");

  pageFeatures.utilities = Boolean(refs.taskForm || refs.contactList || refs.homeNotes);
  if (!pageFeatures.utilities) {
    return;
  }

  if (refs.taskForm && typeof handleTaskSubmit === "function" && !refs.taskForm.dataset.utilitiesBound) {
    refs.taskForm.addEventListener("submit", handleTaskSubmit);
    refs.taskForm.dataset.utilitiesBound = "1";
  }

  if (refs.taskList && typeof handleTaskListChange === "function" && !refs.taskList.dataset.utilitiesBound) {
    refs.taskList.addEventListener("change", handleTaskListChange);
    refs.taskList.addEventListener("click", handleTaskListClick);
    refs.taskList.dataset.utilitiesBound = "1";
  }

  if (refs.addContactButton && typeof createContact === "function" && !refs.addContactButton.dataset.utilitiesBound) {
    refs.addContactButton.addEventListener("click", () => {
      state.contacts.push(createContact());
      persistContacts();
      renderContacts();
    });
    refs.addContactButton.dataset.utilitiesBound = "1";
  }

  if (refs.contactList && typeof handleContactInput === "function" && !refs.contactList.dataset.utilitiesBound) {
    refs.contactList.addEventListener("input", handleContactInput);
    refs.contactList.addEventListener("click", handleContactClick);
    refs.contactList.dataset.utilitiesBound = "1";
  }

  if (refs.homeNotes && !refs.homeNotes.dataset.utilitiesBound) {
    setNodeValue(refs.homeNotes, state.notes);
    refs.homeNotes.addEventListener("input", (event) => {
      state.notes = event.target.value;
      saveStorage(STORAGE_KEYS.notes, state.notes);
    });
    refs.homeNotes.dataset.utilitiesBound = "1";
  }

  if (typeof renderTasks === "function") {
    renderTasks();
  }
  if (typeof renderContacts === "function") {
    renderContacts();
  }
  if (typeof renderHomeTips === "function") {
    const tips =
      typeof buildHomeTips === "function" && state.weatherInfo
        ? buildHomeTips(state.weatherInfo)
        : [];
    renderHomeTips(tips);
  }
}

function bindEvents() {
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", updateScrollProgress);

  if (refs.menuToggle) {
    refs.menuToggle.addEventListener("click", toggleMenu);
  }
  if (refs.navOverlay) {
    refs.navOverlay.addEventListener("click", (event) => {
      if (event.target === refs.navOverlay) {
        closeMenu();
      }
    });
  }
  bindSiteNavLinks();
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = event.currentTarget.getAttribute("href");
      if (target?.startsWith("#")) {
        openSectionFromHash(target);
        window.setTimeout(closeMenu, 120);
        return;
      }
      closeMenu();
    });
  });

  if (refs.weatherSearchForm) {
    refs.weatherSearchForm.addEventListener("submit", handleWeatherSearchSubmit);
  }
  debouncedCitySearch = debounce((value) => {
    searchCities(value);
  }, 360);
  if (refs.weatherSearchInput) {
    refs.weatherSearchInput.addEventListener("input", (event) => {
      debouncedCitySearch(event.target.value);
    });
  }
  if (refs.currentLocationButton) {
    refs.currentLocationButton.addEventListener("click", () => {
      syncLocationToCurrentRegion({
        refreshWeather: Boolean(refs.weatherEffects),
        syncRadio: pageFeatures.radio,
        refreshUtilities: pageFeatures.utilities,
        silent: false,
        useDeviceLocation: true
      });
    });
  }
  if (refs.searchResults) {
    refs.searchResults.addEventListener("click", handleSearchResultClick);
  }
  document.addEventListener("click", (event) => {
    if (
      refs.weatherSearchForm &&
      refs.searchResults &&
      !refs.weatherSearchForm.contains(event.target) &&
      !refs.searchResults.contains(event.target)
    ) {
      hideSearchResults();
    }
  });

  if (pageFeatures.budget) {
    refs.incomeInput?.addEventListener("input", (event) => {
      state.budget.income = event.target.value;
      persistBudget();
    });
    refs.savingsGoalInput?.addEventListener("input", (event) => {
      state.budget.savingsGoal = event.target.value;
      persistBudget();
    });
    refs.budgetNotes?.addEventListener("input", (event) => {
      state.budget.notes = event.target.value;
      persistBudget(false);
    });

    refs.expenseGrid?.addEventListener("input", handleExpenseGridInput);
    refs.expenseGrid?.addEventListener("change", handleExpenseGridInput);
    refs.expenseGrid?.addEventListener("click", handleExpenseGridClick);
    refs.addBudgetCategoryButton?.addEventListener("click", () => {
      state.budget.categories.push(createBudgetCategory("variable"));
      persistBudget(false);
      renderExpenseGrid();
    });
    refs.addFixedCategoryButton?.addEventListener("click", () => {
      state.budget.categories.push(createBudgetCategory("fixed"));
      persistBudget(false);
      renderExpenseGrid();
    });
    refs.addVariableCategoryButton?.addEventListener("click", () => {
      state.budget.categories.push(createBudgetCategory("variable"));
      persistBudget(false);
      renderExpenseGrid();
    });
    refs.addExtraExpenseButton?.addEventListener("click", () => {
      state.budget.extras.push(createExtraExpense());
      persistBudget(false);
      renderExtraExpenses();
    });
    refs.extraExpensesList?.addEventListener("input", handleExtraExpenseInput);
    refs.extraExpensesList?.addEventListener("click", handleExtraExpenseClick);

    refs.addBillButton?.addEventListener("click", () => {
      state.budget.bills.push(createBill());
      persistBudget(false);
      renderBills();
    });
    refs.billList?.addEventListener("input", handleBillInput);
    refs.billList?.addEventListener("click", handleBillClick);

    refs.budgetExportArea?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-export]");
      if (!button) {
        return;
      }
      exportBudget(button.dataset.export);
    });
  }

  if (pageFeatures.news) {
    refs.refreshNewsButton?.addEventListener("click", loadNews);
    refs.newsTopicSelects.forEach((select) => {
      select.addEventListener("change", handleNewsTopicChange);
    });
  }

  if (pageFeatures.vault) {
    refs.vaultForm?.addEventListener("submit", handleVaultSubmit);
    refs.vaultFilterInput?.addEventListener("input", renderVaultList);
    refs.vaultList?.addEventListener("click", handleVaultActions);
  }

  if (pageFeatures.radio) {
    refs.radioSearchForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      state.radioMode = "default";
      state.radioHasSearched = true;
      loadRadioStations();
    });
    refs.radioCountrySelect?.addEventListener("change", async () => {
      state.radioMode = "default";
      trySelectOption(refs.radioCountrySelect, refs.radioCountrySelect.value);
      refs.radioStateInput.value = "";
      refs.radioStateInput.dataset.pendingValue = "";
      refs.radioCityInput.value = "";
      refs.radioCityInput.dataset.pendingValue = "";
      await loadRadioDirectory({
        preferredState: "",
        preferredCity: ""
      });
      if (state.radioHasSearched) {
        loadRadioStations();
      } else if (typeof renderRadioIdleState === "function") {
        renderRadioIdleState();
      }
    });
    refs.radioStateInput?.addEventListener("change", async () => {
      state.radioMode = "default";
      trySelectOption(refs.radioStateInput, refs.radioStateInput.value);
      refs.radioCityInput.value = "";
      refs.radioCityInput.dataset.pendingValue = "";
      await syncRadioCityOptions({
        preferredCity: refs.radioCityInput.dataset.pendingValue || refs.radioCityInput.value || ""
      });
      if (state.radioHasSearched) {
        loadRadioStations();
      } else if (typeof renderRadioIdleState === "function") {
        renderRadioIdleState();
      }
    });
    refs.radioGenreSelect?.addEventListener("change", () => {
      state.radioMode = "default";
      state.selectedRadioTag = refs.radioGenreSelect.value;
      renderRadioTagChips();
      if (state.radioHasSearched) {
        loadRadioStations();
      } else if (typeof renderRadioIdleState === "function") {
        renderRadioIdleState();
      }
    });
    refs.radioCityInput?.addEventListener("change", () => {
      state.radioMode = "default";
      trySelectOption(refs.radioCityInput, refs.radioCityInput.value);
      if (state.radioHasSearched) {
        loadRadioStations();
      } else if (typeof renderRadioIdleState === "function") {
        renderRadioIdleState();
      }
    });
    refs.radioNearbyButton?.addEventListener("click", async () => {
      state.radioMode = "nearby";
      state.radioHasSearched = true;
      renderRadioCountryOptions(state.location.countryCode || refs.radioCountrySelect.value || "BR");
      trySelectOption(refs.radioCountrySelect, state.location.countryCode || refs.radioCountrySelect.value || "BR");
      syncRadioLocationFilters(state.location);
      await loadRadioDirectory({
        preferredState: state.location.state,
        preferredCity: state.location.locality
      });
      loadRadioStations({ nearby: true });
    });
    refs.radioTagChips?.addEventListener("click", handleRadioTagClick);
    refs.radioResults?.addEventListener("click", handleRadioResultsClick);
    refs.radioFavorites?.addEventListener("click", handleRadioFavoritesClick);
    refs.radioPlayer?.addEventListener("error", handleRadioPlayerError);
  }

  if (refs.routeForm && typeof handleRouteSubmit === "function") {
    refs.routeForm.addEventListener("submit", handleRouteSubmit);
  }
  if (refs.routeUseCurrentButton && typeof handleRouteUseCurrentClick === "function") {
    refs.routeUseCurrentButton.addEventListener("click", handleRouteUseCurrentClick);
  }
  if (refs.routeDriveModeButton && typeof toggleRouteDriveMode === "function") {
    refs.routeDriveModeButton.addEventListener("click", toggleRouteDriveMode);
  }
  if (refs.routeClearButton && typeof clearRouteDestination === "function") {
    refs.routeClearButton.addEventListener("click", clearRouteDestination);
  }

}

function initSession() {
  localStorage.removeItem(STORAGE_KEYS.session);
  refs.body.classList.remove("is-locked");
}

function toggleMenu() {
  const isOpen = refs.siteNav.classList.toggle("is-open");
  refs.menuToggle.setAttribute("aria-expanded", String(isOpen));
  refs.navOverlay.classList.toggle("is-active", isOpen);
  refs.body.classList.toggle("menu-open", isOpen);
}

function closeMenu() {
  if (!refs.siteNav) {
    return;
  }
  refs.siteNav.classList.remove("is-open");
  refs.menuToggle?.setAttribute("aria-expanded", "false");
  refs.navOverlay?.classList.remove("is-active");
  refs.body.classList.remove("menu-open");
}

function bindSiteNavLinks() {
  if (!refs.siteNav) {
    return;
  }

  refs.siteNav.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || !refs.siteNav.contains(link)) {
      return;
    }

    const href = link.getAttribute("href")?.trim();
    if (!href) {
      return;
    }

    window.setTimeout(closeMenu, href.startsWith("#") ? 120 : 0);
  });
}

function applyEffectiveTheme() {
  refs.body.classList.add("theme-dark", "user-dark", "has-weather-fade");
  refs.body.classList.remove("theme-light", "user-light");

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute("content", "#08131f");
  }
}

function initSectionToggles() {
  document.querySelectorAll("[data-toggle-section]").forEach((button) => {
    const body = document.getElementById(button.dataset.toggleSection);
    if (body) {
      body.hidden = false;
    }
    syncSectionToggle(button);
    button.hidden = true;
  });
}

function initWeatherStripScroller() {
  const track = refs.weatherStripTrack;
  if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;
  let hoverPaused = false;
  let autoDirection = 1;
  let pauseUntil = 0;
  let lastFrame = performance.now();

  const pauseAutoScroll = (delay = 2600) => {
    pauseUntil = Date.now() + delay;
  };

  const stopDragging = () => {
    isDragging = false;
    track.classList.remove("is-dragging");
    pauseAutoScroll();
  };

  track.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    isDragging = true;
    startX = event.clientX;
    startScrollLeft = track.scrollLeft;
    track.classList.add("is-dragging");
    pauseAutoScroll(3200);

    if (track.setPointerCapture) {
      track.setPointerCapture(event.pointerId);
    }
  });

  track.addEventListener("pointermove", (event) => {
    if (!isDragging) {
      return;
    }

    track.scrollLeft = startScrollLeft - (event.clientX - startX);
  });

  track.addEventListener("pointerup", stopDragging);
  track.addEventListener("pointercancel", stopDragging);
  track.addEventListener("lostpointercapture", stopDragging);

  track.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return;
      }

      track.scrollLeft += event.deltaY;
      pauseAutoScroll();
      event.preventDefault();
    },
    { passive: false }
  );

  track.addEventListener("mouseenter", () => {
    hoverPaused = true;
  });
  track.addEventListener("mouseleave", () => {
    hoverPaused = false;
    pauseAutoScroll(650);
  });
  track.addEventListener("focusin", () => {
    hoverPaused = true;
  });
  track.addEventListener("focusout", () => {
    hoverPaused = false;
    pauseAutoScroll(650);
  });

  const animate = (timestamp) => {
    const maxScroll = Math.max(track.scrollWidth - track.clientWidth, 0);
    const delta = timestamp - lastFrame;
    lastFrame = timestamp;

    if (!isDragging && !hoverPaused && Date.now() >= pauseUntil && maxScroll > 24) {
      let nextScroll = track.scrollLeft + autoDirection * delta * 0.052;
      if (nextScroll <= 0) {
        nextScroll = 0;
        autoDirection = 1;
        pauseAutoScroll(900);
      } else if (nextScroll >= maxScroll) {
        nextScroll = maxScroll;
        autoDirection = -1;
        pauseAutoScroll(900);
      }
      track.scrollLeft = nextScroll;
    }

    window.requestAnimationFrame(animate);
  };

  pauseAutoScroll(700);
  window.requestAnimationFrame(animate);
}

function syncSectionToggle(button) {
  const body = document.getElementById(button.dataset.toggleSection);
  if (!body) {
    return;
  }
  const expanded = !body.hidden;
  button.closest(".section")?.classList.toggle("is-open", expanded);
  button.setAttribute("aria-expanded", String(expanded));
  button.textContent = expanded ? "Recolher" : "Abrir";
}

function openSectionFromHash(hash) {
  const section = document.querySelector(hash);
  if (!section) {
    return;
  }
  const body = section.querySelector(".section-body");
  if (!body) {
    return;
  }
  body.hidden = false;
  const button = section.querySelector("[data-toggle-section]");
  if (button) {
    syncSectionToggle(button);
  }
}

function closeOtherSections(exceptBodyId = "") {
  return exceptBodyId;
}

function scrollToHash(hash, behavior = "smooth") {
  const section = document.querySelector(hash);
  if (!section) {
    return;
  }

  const headerHeight = document.querySelector(".masthead")?.getBoundingClientRect().height || 0;
  const targetTop = window.scrollY + section.getBoundingClientRect().top - headerHeight - 20;
  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior
  });
}

function updateScrollProgress() {
  if (!refs.scrollProgress) {
    return;
  }
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  refs.scrollProgress.style.width = `${ratio}%`;
}

function initRevealObserver() {
  const reveals = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reveals.length) {
    return;
  }

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -3% 0px"
    }
  );

  reveals.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index * 0.07, 0.42)}s`);
    observer.observe(element);
  });
}

async function handleWeatherSearchSubmit(event) {
  event.preventDefault();
  const query = refs.weatherSearchInput.value.trim();
  if (query.length < 2) {
    showToast("Digite ao menos 2 letras para buscar a cidade.", "warning");
    return;
  }

  const results = await searchCities(query);
  if (results.length) {
    selectLocation(results[0]);
    return;
  }

  showToast("Nenhuma cidade encontrada para a busca.", "warning");
}

async function searchCities(query) {
  if (query.trim().length < 2) {
    hideSearchResults();
    return [];
  }

  try {
    const params = new URLSearchParams({
      name: query,
      count: "6",
      language: "pt",
      format: "json"
    });
    const data = await fetchJsonWithRetry(
      `https://geocoding-api.open-meteo.com/v1/search?${params.toString()}`,
      {},
      REQUEST_TIMEOUTS.geocode,
      1
    );
    const results = (data.results || []).map((item) => ({
      name: `${item.name}${item.admin1 ? `, ${item.admin1}` : ""}${item.country ? `, ${item.country}` : ""}`,
      locality: item.name,
      state: item.admin1 || "",
      country: item.country || "",
      countryCode: item.country_code || "",
      latitude: item.latitude,
      longitude: item.longitude,
      timezone: item.timezone
    }));

    state.weatherSearchResults = results;
    renderSearchResults();
    return results;
  } catch (error) {
    hideSearchResults();
    showToast("Falha ao buscar cidades agora.", "warning");
    return [];
  }
}

function renderSearchResults() {
  if (!state.weatherSearchResults.length) {
    hideSearchResults();
    return;
  }

  refs.searchResults.innerHTML = state.weatherSearchResults
    .map(
      (result, index) => `
        <button type="button" data-index="${index}">
          <strong>${escapeHtml(result.name)}</strong><br>
          <span>${result.latitude.toFixed(2)}, ${result.longitude.toFixed(2)}</span>
        </button>
      `
    )
    .join("");
  refs.searchResults.classList.add("is-visible");
}

function hideSearchResults() {
  refs.searchResults.classList.remove("is-visible");
  refs.searchResults.innerHTML = "";
}

function handleSearchResultClick(event) {
  const button = event.target.closest("button[data-index]");
  if (!button) {
    return;
  }

  const result = state.weatherSearchResults[Number(button.dataset.index)];
  if (!result) {
    return;
  }

  selectLocation(result);
}

function selectLocation(location) {
  state.location = normalizeLocation({
    name: location.name,
    locality: location.locality || location.name,
    state: location.state || "",
    country: location.country || "",
    countryCode: location.countryCode || "",
    latitude: Number(location.latitude),
    longitude: Number(location.longitude),
    timezone: location.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone
  });
  setNodeValue(refs.weatherSearchInput, location.name);
  saveStorage(STORAGE_KEYS.location, state.location);
  hideSearchResults();
  fetchWeather(state.location);
}

function isGeolocationAvailable() {
  return Boolean(window.isSecureContext && navigator.geolocation);
}

async function syncLocationToCurrentRegion(options = {}) {
  const settings = {
    refreshWeather: Boolean(options.refreshWeather),
    syncRadio: Boolean(options.syncRadio),
    refreshUtilities: Boolean(options.refreshUtilities),
    silent: Boolean(options.silent),
    useDeviceLocation: Boolean(options.useDeviceLocation)
  };

  if (settings.useDeviceLocation) {
    try {
      const location = await resolveCurrentLocationFromDevice({ silent: settings.silent });
      state.location = location;
      saveStorage(STORAGE_KEYS.location, state.location);
      setNodeValue(refs.weatherSearchInput, location.name);
    } catch (error) {
      if (!settings.silent) {
        if (!window.isSecureContext) {
          showToast("Abra o site em http://localhost:3000 (HTTPS) para o navegador pedir sua localização.", "warning");
        } else if (Number(error?.code) === 1) {
          showToast("Localização bloqueada. Clique no cadeado da barra de endereço e permita localização.", "warning");
        } else if (Number(error?.code) === 3) {
          showToast("Tempo esgotado ao buscar localização. Tente recarregar a página.", "warning");
        } else {
          showToast("Não foi possível obter sua localização agora.", "warning");
        }
      }
    }
  } else if (!settings.silent && !window.isSecureContext) {
    showToast("Use http://localhost:3000 para carregar o clima com sua localização.", "warning");
  }

  setNodeText(refs.weatherLocationLabel, formatLocationLabel(state.location));

  if (settings.syncRadio) {
    await syncRadioDefaultsToLocation(state.location);
  }

  if (settings.refreshWeather) {
    fetchWeather(state.location);
  }

  if (settings.refreshUtilities && typeof refreshUtilityPlacesForCurrentLocation === "function") {
    refreshUtilityPlacesForCurrentLocation();
  }

  return state.location;
}

async function resolveCurrentLocationFromDevice(options = {}) {
  if (!navigator.geolocation) {
    throw new Error("geolocation_unavailable");
  }

  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0
    });
  });

  const { latitude, longitude } = position.coords;
  let reverse = {
    name: "Local atual",
    locality: "Local atual",
    state: "",
    country: "",
    countryCode: ""
  };

  try {
    reverse = await reverseGeocode(latitude, longitude);
  } catch (error) {
    if (!options.silent) {
      showToast("Localização encontrada, mas sem nome detalhado agora.", "warning");
    }
  }

  return normalizeLocation({
    name: reverse.name,
    locality: reverse.locality,
    state: reverse.state,
    country: reverse.country,
    countryCode: reverse.countryCode,
    latitude,
    longitude,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });
}

async function useCurrentLocation(options = {}) {
  hideSearchResults();
  setNodeValue(refs.weatherSearchInput, "");
  return syncLocationToCurrentRegion({
    refreshWeather: options.refreshWeather ?? Boolean(refs.weatherEffects),
    syncRadio: options.syncRadio ?? pageFeatures.radio,
    refreshUtilities: options.refreshUtilities ?? pageFeatures.utilities,
    silent: Boolean(options.silent),
    useDeviceLocation: true
  });
}

async function syncRadioDefaultsToLocation(location) {
  if (!refs.radioCountrySelect || !refs.radioStateInput || !refs.radioCityInput) {
    return;
  }

  renderRadioCountryOptions(location.countryCode || "BR");
  trySelectOption(refs.radioCountrySelect, location.countryCode || refs.radioCountrySelect.value || "BR");
  syncRadioLocationFilters(location);
  await loadRadioDirectory({
    preferredState: location.state,
    preferredCity: location.locality
  });

  if (state.radioHasSearched) {
    loadRadioStations();
  } else if (typeof renderRadioIdleState === "function") {
    renderRadioIdleState();
  }
}

function syncRadioLocationFilters(location) {
  if (!refs.radioStateInput || !refs.radioCityInput) {
    return;
  }

  refs.radioStateInput.dataset.pendingValue = location?.state || "";
  refs.radioCityInput.dataset.pendingValue = location?.locality || "";
  trySelectOption(refs.radioStateInput, refs.radioStateInput.dataset.pendingValue);
  trySelectOption(refs.radioCityInput, refs.radioCityInput.dataset.pendingValue);
}

function cacheRadioCountryOptions() {
  state.radioOptionBank.country = [
    { value: "BR", label: "Brasil" },
    { value: "PT", label: "Portugal" },
    { value: "US", label: "Estados Unidos" },
    { value: "GB", label: "Reino Unido" },
    { value: "AR", label: "Argentina" },
    { value: "DE", label: "Alemanha" },
    { value: "FR", label: "França" },
    { value: "JP", label: "Japão" },
    { value: "", label: "Global" }
  ];
}

async function loadRadioDirectory(options = {}) {
  const country = getRadioCountryCode();
  const preferredState = options.preferredState ?? refs.radioStateInput.dataset.pendingValue ?? "";
  const preferredCity = options.preferredCity ?? refs.radioCityInput.dataset.pendingValue ?? "";

  if (!country && normalizeLooseText(refs.radioCountrySelect?.value || "") !== "global") {
    renderRadioStateOptions([], "");
    renderRadioCityOptions([], "", "Escolha um país primeiro", true);
    return;
  }

  if (country === "BR") {
    const states = await loadBrazilStates();
    renderRadioStateOptions(states, preferredState);
    await syncRadioCityOptions({ preferredCity });
    return;
  }

  try {
    const directory = state.radioDirectories[country] || (await fetchRadioDirectory(country));
    state.radioDirectories[country] = directory;
    renderRadioStateOptions(directory.states, preferredState);
    renderRadioCityOptions(resolveDirectoryCities(directory, getRadioStateValue()), preferredCity);
  } catch (error) {
    renderRadioStateOptions([], "");
    renderRadioCityOptions([], "", "Todas as cidades", true);
    showToast("Não foi possível carregar estados e cidades das rádios agora.", "warning");
  }
}

async function loadBrazilStates() {
  if (state.radioBrazilStates.length) {
    return state.radioBrazilStates;
  }

  try {
    const data = await fetchJsonWithRetry(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
      {},
      REQUEST_TIMEOUTS.ibge,
      1
    );
    state.radioBrazilStates = data
      .map((entry) => ({
        value: entry.nome,
        label: `${entry.nome} (${entry.sigla})`,
        code: entry.sigla
      }))
      .sort((first, second) => first.value.localeCompare(second.value, "pt-BR"));
  } catch (error) {
    state.radioBrazilStates = BRAZIL_STATE_FALLBACKS.map((entry) => ({
      value: entry.name,
      label: `${entry.name} (${entry.code})`,
      code: entry.code
    }));
    showToast("Usando lista local de estados para as rádios.", "warning");
  }

  return state.radioBrazilStates;
}

async function syncRadioCityOptions(options = {}) {
  const preferredCity = options.preferredCity ?? refs.radioCityInput.dataset.pendingValue ?? "";
  const country = getRadioCountryCode();
  const stateName = getRadioStateValue();

  if (!country && normalizeLooseText(refs.radioCountrySelect?.value || "") !== "global") {
    renderRadioCityOptions([], "", "Escolha um país primeiro", true);
    return;
  }

  if (country === "BR") {
    if (!stateName) {
      renderRadioCityOptions([], "", "Escolha um estado primeiro", true);
      return;
    }

    const cities = await loadBrazilCities(stateName);
    renderRadioCityOptions(cities, preferredCity);
    return;
  }

  try {
    const directory = state.radioDirectories[country] || (await fetchRadioDirectory(country));
    state.radioDirectories[country] = directory;
    renderRadioCityOptions(resolveDirectoryCities(directory, stateName), preferredCity);
  } catch (error) {
    renderRadioCityOptions([], "", "Todas as cidades", true);
  }
}

async function loadBrazilCities(stateName) {
  if (!stateName) {
    return [];
  }

  const states = await loadBrazilStates();
  const match = states.find((entry) => normalizeLooseText(entry.value) === normalizeLooseText(stateName));
  const stateCode = match?.code;
  if (!stateCode) {
    return [];
  }

  if (state.radioBrazilCities[stateCode]) {
    return state.radioBrazilCities[stateCode];
  }

  try {
    const data = await fetchJsonWithRetry(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateCode}/municipios`,
      {},
      REQUEST_TIMEOUTS.ibge,
      1
    );
    state.radioBrazilCities[stateCode] = data
      .map((entry) => ({
        value: entry.nome,
        label: entry.nome
      }))
      .sort((first, second) => first.value.localeCompare(second.value, "pt-BR"));
  } catch (error) {
    showToast("Não foi possível carregar as cidades desse estado agora.", "warning");
    state.radioBrazilCities[stateCode] = [];
  }

  return state.radioBrazilCities[stateCode];
}

async function fetchRadioDirectory(country) {
  const params = new URLSearchParams({
    countrycode: country,
    hidebroken: "true",
    order: "clickcount",
    reverse: "true",
    limit: "400"
  });
  const response = await fetchStations(params.toString());
  const stations = prepareRadioStations(response);
  return buildRadioDirectory(stations);
}

function buildRadioDirectory(stations) {
  const stateMap = new Map();
  const allCitiesMap = new Map();
  const citiesByState = {};

  stations.forEach((station) => {
    const stateLabel = normalizeRegionLabel(station.state);
    if (stateLabel) {
      addDirectoryOption(stateMap, stateLabel);
    }

    extractStationCityCandidates(station, stateLabel).forEach((city) => {
      addDirectoryOption(allCitiesMap, city);
      const key = normalizeLooseText(stateLabel || "__all__");
      if (!citiesByState[key]) {
        citiesByState[key] = new Map();
      }
      addDirectoryOption(citiesByState[key], city);
    });
  });

  return {
    states: sortDirectoryOptions(Array.from(stateMap.values())),
    cities: sortDirectoryOptions(Array.from(allCitiesMap.values())),
    citiesByState: Object.fromEntries(
      Object.entries(citiesByState).map(([key, value]) => [key, sortDirectoryOptions(Array.from(value.values()))])
    )
  };
}

function addDirectoryOption(map, label) {
  const value = cleanLocationPart(label);
  const key = normalizeLooseText(value);
  if (!value || !key || map.has(key)) {
    return;
  }
  map.set(key, {
    value,
    label: value
  });
}

function sortDirectoryOptions(options) {
  return options.sort((first, second) => first.label.localeCompare(second.label, "pt-BR"));
}

function normalizeRegionLabel(value) {
  return cleanLocationPart(String(value || "").replace(/\s*\((?:brazil|brasil)\)\s*/gi, " "));
}

function extractStationCityCandidates(station, stateLabel = "") {
  const rawCandidates = [];
  const stationName = cleanStationName(station.name);
  const normalizedState = normalizeRegionLabel(stateLabel);

  if (normalizedState && normalizedState.length >= 3) {
    rawCandidates.push(normalizedState);
  }

  const parenthesisMatches = stationName.match(/\(([^()]+)\)/g) || [];
  parenthesisMatches.forEach((match) => {
    rawCandidates.push(match.replace(/[()]/g, ""));
  });

  stationName
    .split("|")
    .flatMap((part) => part.split(" - "))
    .map((part) => cleanLocationPart(part))
    .filter((part) => part.length >= 3)
    .forEach((part) => rawCandidates.push(part));

  return Array.from(
    new Map(
      rawCandidates
        .flatMap((candidate) => candidate.split(/[\\/,&]/))
        .map(normalizeCityCandidate)
        .filter(Boolean)
        .map((candidate) => [normalizeLooseText(candidate), candidate])
    ).values()
  ).slice(0, 8);
}

function normalizeCityCandidate(value) {
  const cleaned = cleanLocationPart(String(value || ""))
    .replace(/\b\d+(?:[.,]\d+)?\s*(?:fm|am|mhz)\b/gi, "")
    .replace(/\b(?:radio|rádio|fm|am|ao vivo|live|stereo|web)\b/gi, "")
    .replace(/\s+-\s+[A-Z]{2}\b/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  if (!cleaned || cleaned.length < 3 || /^\d+$/.test(cleaned)) {
    return "";
  }

  return cleaned;
}

function resolveDirectoryCities(directory, stateName = "") {
  if (!directory) {
    return [];
  }

  const scoped = directory.citiesByState?.[normalizeLooseText(stateName)] || [];
  return scoped.length ? scoped : directory.cities || [];
}

function getRadioOptionsForControl(control) {
  if (control === refs.radioCountrySelect) {
    return state.radioOptionBank.country || [];
  }
  if (control === refs.radioStateInput) {
    return state.radioOptionBank.state || [];
  }
  if (control === refs.radioCityInput) {
    return state.radioOptionBank.city || [];
  }
  return [];
}

function findRadioOption(control, rawValue = "") {
  const normalizedValue = normalizeLooseText(rawValue);
  if (!normalizedValue) {
    return null;
  }

  const options = getRadioOptionsForControl(control);
  const exactMatch = options.find((option) => {
    return (
      normalizeLooseText(option.label) === normalizedValue ||
      normalizeLooseText(option.value) === normalizedValue
    );
  });
  if (exactMatch) {
    return exactMatch;
  }

  const startsWithMatches = options.filter((option) => {
    return (
      normalizeLooseText(option.label).startsWith(normalizedValue) ||
      normalizeLooseText(option.value).startsWith(normalizedValue)
    );
  });
  if (startsWithMatches.length === 1) {
    return startsWithMatches[0];
  }

  const containsMatches = options.filter((option) => {
    return (
      normalizeLooseText(option.label).includes(normalizedValue) ||
      normalizeLooseText(option.value).includes(normalizedValue)
    );
  });
  if (containsMatches.length === 1) {
    return containsMatches[0];
  }

  return startsWithMatches[0] || containsMatches[0] || null;
}

function getRadioCountryCode() {
  const option = findRadioOption(refs.radioCountrySelect, refs.radioCountrySelect?.value || "");
  if (option) {
    return option.value;
  }
  return normalizeLooseText(refs.radioCountrySelect?.value || "") === "global" ? "" : "";
}

function getRadioCountryLabel() {
  const option = findRadioOption(refs.radioCountrySelect, refs.radioCountrySelect?.value || "");
  if (option) {
    return option.label;
  }
  return refs.radioCountrySelect?.value?.trim() || state.location.country;
}

function getRadioStateValue() {
  return findRadioOption(refs.radioStateInput, refs.radioStateInput?.value || "")?.value || "";
}

function getRadioCityValue() {
  return findRadioOption(refs.radioCityInput, refs.radioCityInput?.value || "")?.value || "";
}

function renderRadioCountryOptions(preferredCountry = "") {
  if (!refs.radioCountrySelect) {
    return;
  }

  refs.radioCountrySelect.disabled = !state.radioOptionBank.country.length;
  refs.radioCountrySelect.placeholder = "Digite o país";
  trySelectOption(refs.radioCountrySelect, preferredCountry || refs.radioCountrySelect.dataset.pendingValue || "");
}

function renderRadioStateOptions(options, preferredState = "") {
  state.radioOptionBank.state = Array.isArray(options) ? options.slice() : [];
  refs.radioStateInput.disabled = !state.radioOptionBank.state.length;
  refs.radioStateInput.placeholder = state.radioOptionBank.state.length ? "Digite o estado" : "Todos os estados";
  if (!state.radioOptionBank.state.length) {
    refs.radioStateInput.value = "";
    refs.radioStateInput.dataset.pendingValue = "";
    return;
  }
  trySelectOption(refs.radioStateInput, preferredState || refs.radioStateInput.dataset.pendingValue || "");
}

function renderRadioCityOptions(options, preferredCity = "", emptyLabel = "Todas as cidades", disabled = false) {
  state.radioOptionBank.city = Array.isArray(options) ? options.slice() : [];
  state.radioOptionMeta.city = {
    emptyLabel,
    disabled
  };
  refs.radioCityInput.disabled = disabled;
  refs.radioCityInput.placeholder = disabled ? emptyLabel : "Digite a cidade";
  if (disabled || !state.radioOptionBank.city.length) {
    refs.radioCityInput.value = "";
    refs.radioCityInput.dataset.pendingValue = "";
    return;
  }
  trySelectOption(refs.radioCityInput, preferredCity || refs.radioCityInput.dataset.pendingValue || "");
}

function trySelectOption(select, desiredValue = "") {
  if (!select) {
    return false;
  }

  const option = findRadioOption(select, desiredValue);
  if (!option) {
    if (!desiredValue) {
      select.value = "";
      select.dataset.pendingValue = "";
    } else {
      select.dataset.pendingValue = "";
    }
    return false;
  }

  select.value = option.label;
  select.dataset.pendingValue = option.value;
  return true;
}

function buildWeatherCacheKey(location) {
  return `${Number(location.latitude).toFixed(2)}:${Number(location.longitude).toFixed(2)}`;
}

function readCachedWeather(location, options = {}) {
  const cache = loadStorage(STORAGE_KEYS.weatherCache, {});
  const entry = cache?.[buildWeatherCacheKey(location)];
  if (!entry?.data) {
    return null;
  }

  const savedAt = Number(entry.savedAt || 0);
  const isFresh = savedAt && Date.now() - savedAt <= WEATHER_CACHE_TTL_MS;
  if (!options.allowStale && !isFresh) {
    return null;
  }

  return entry.data;
}

function saveCachedWeather(location, data) {
  const cache = loadStorage(STORAGE_KEYS.weatherCache, {});
  cache[buildWeatherCacheKey(location)] = {
    savedAt: Date.now(),
    data
  };

  const entries = Object.entries(cache)
    .sort((first, second) => Number(second[1]?.savedAt || 0) - Number(first[1]?.savedAt || 0))
    .slice(0, 12);

  saveStorage(STORAGE_KEYS.weatherCache, Object.fromEntries(entries));
}

async function fetchWeather(location) {
  const requestId = ++latestWeatherRequestId;
  const cachedWeather = readCachedWeather(location);
  const staleWeather = cachedWeather || readCachedWeather(location, { allowStale: true });

  setNodeText(refs.weatherLocationLabel, formatLocationLabel(location));
  if (cachedWeather) {
    state.weather = cachedWeather;
    renderWeather(cachedWeather);
  } else {
    setNodeText(refs.weatherSummaryText, "Atualizando");
  }

  try {
    const params = new URLSearchParams({
      latitude: String(location.latitude),
      longitude: String(location.longitude),
      current: [
        "temperature_2m",
        "relative_humidity_2m",
        "apparent_temperature",
        "is_day",
        "precipitation",
        "rain",
        "showers",
        "snowfall",
        "weather_code",
        "cloud_cover",
        "pressure_msl",
        "wind_speed_10m",
        "wind_direction_10m"
      ].join(","),
      daily: [
        "weather_code",
        "temperature_2m_max",
        "temperature_2m_min",
        "precipitation_probability_max",
        "sunrise",
        "sunset"
      ].join(","),
      timezone: "auto"
    });

    const data = await fetchJsonWithRetry(
      `https://api.open-meteo.com/v1/forecast?${params.toString()}`,
      {},
      REQUEST_TIMEOUTS.weather,
      1
    );
    if (requestId !== latestWeatherRequestId) {
      return;
    }
    state.weather = data;

    state.location = {
      ...location,
      timezone: data.timezone || location.timezone
    };
    saveStorage(STORAGE_KEYS.location, state.location);
    saveCachedWeather(state.location, data);

    renderWeather(data);
  } catch (error) {
    if (requestId !== latestWeatherRequestId) {
      return;
    }

    if (staleWeather) {
      state.weather = staleWeather;
      renderWeather(staleWeather);
      setNodeText(refs.dailyInsight, "Mostrando a última previsão salva enquanto a atualização tenta voltar.");
      return;
    }

    setNodeText(refs.weatherSummaryText, "Sem dados");
    setNodeText(refs.summaryWeather, "Sem dados");
    setNodeText(refs.dailyHeadline, "Clima indisponível");
    setNodeText(refs.heroTemperature, "--°");
    setNodeText(refs.dailyRange, "-- / --");
    setNodeText(refs.dailyInsight, "Não foi possível atualizar a previsão agora.");
    if (refs.weatherEffects && !refs.weatherEffects.querySelector(".photo-scene")) {
      renderDefaultSceneBackdrop();
    }
    showToast("Falha ao buscar o clima atual.", "warning");
  }
}

function renderWeather(data) {
  const current = data.current || {};
  const daily = data.daily || {};
  const timeSegment = getTimeSegment(current.time);
  const weatherLabel = describeWeather(current.weather_code);
  const season = getSeason(current.time, state.location.latitude);
  const moon = getMoonData(current.time);
  const rainChance = Number((daily.precipitation_probability_max || [0])[0] || 0);
  const temperature = Number(current.temperature_2m || 0);
  const windSpeed = Number(current.wind_speed_10m || 0);
  const windDirection = getWindDirectionLabel(Number(current.wind_direction_10m || 0));
  const isWindy = windSpeed >= 28;
  const stormRisk =
    weatherLabel.scene === "storm" ||
    (rainChance >= 70 && windSpeed >= 30) ||
    Number(current.showers || 0) > 8;
  const temperatureMood = getTemperatureMood(temperature);
  const compactSummary = `${weatherLabel.label} | ${Math.round(temperature)} C`;
  const tips =
    typeof buildHomeTips === "function"
      ? buildHomeTips({
          scene: weatherLabel.scene,
          stormRisk,
          isWindy,
          windSpeed,
          rainChance,
          temperatureMood,
          season
        })
      : [];
  const weatherEmoji = getWeatherEmoji(weatherLabel.scene, timeSegment);
  const tempEmoji = getTemperatureEmoji(temperatureMood.type);
  const moonEmoji = getMoonEmoji(moon.label);
  const seasonEmoji = getSeasonEmoji(season);

  state.weatherInfo = {
    conditionLabel: weatherLabel.label,
    scene: weatherLabel.scene,
    timeSegment,
    season,
    moonLabel: moon.label,
    stormRisk,
    isWindy,
    windSpeed,
    rainChance,
    temperatureMood
  };

  setNodeText(refs.weatherLocationLabel, formatLocationLabel(state.location));
  setNodeText(refs.weatherSummaryText, compactSummary);
  const feelsLike = Math.round(Number(current.apparent_temperature || 0));
  const humidity = Math.round(Number(current.relative_humidity_2m || 0));
  const pressure = Math.round(Number(current.pressure_msl || 0));
  const todayMax = Math.round(Number((daily.temperature_2m_max || [])[0] || temperature));
  const todayMin = Math.round(Number((daily.temperature_2m_min || [])[0] || temperature));

  setNodeText(refs.metricTemp, `${Math.round(temperature)}°`);
  setNodeText(refs.heroTemperature, `${Math.round(temperature)}°`);
  setNodeText(refs.metricFeels, `${feelsLike}°`);
  setNodeText(refs.metricHumidity, `${humidity}%`);
  setNodeText(refs.metricWind, `${Math.round(windSpeed)} km/h ${windDirection}`);
  setNodeText(refs.metricRainChance, `${Math.round(rainChance)}%`);
  setNodeText(refs.metricPressure, `${pressure} hPa`);
  setNodeText(refs.metricMoon, moon.label);
  setNodeText(refs.metricSeason, season);

  setNodeText(refs.dailyHeadline, `${weatherLabel.label}, ${Math.round(temperature)} graus`);
  setNodeText(refs.dailyRange, `${weatherLabel.label} ${todayMax}°/${todayMin}°`);
  setNodeText(
    refs.dailyInsight,
    stormRisk ? "Alerta de tempestade na região." : tips[0] || ""
  );
  setNodeText(refs.summaryWeather, `${Math.round(temperature)}° · ${weatherLabel.label}`);

  renderForecast(daily);
  applyTheme({
    timeSegment,
    scene: weatherLabel.scene,
    temperatureMood: temperatureMood.type,
    isWindy,
    stormRisk
  });
  if (typeof renderHomeTips === "function") {
    renderHomeTips(tips);
  }
  renderHomeIntelligence();
}

function renderForecast(daily) {
  if (!refs.forecastGrid) {
    return;
  }
  const dates = daily.time || [];
  if (!dates.length) {
    refs.forecastGrid.innerHTML = "";
    return;
  }

  const isHeroForecast = refs.forecastGrid.classList.contains("weather-hero__forecast");

  refs.forecastGrid.innerHTML = dates
    .slice(0, isHeroForecast ? 5 : 3)
    .map((date, index) => {
      const forecastWeather = describeWeather((daily.weather_code || [])[index]);
      const emoji = getWeatherEmoji(forecastWeather.scene, getTimeSegment(`${date}T12:00`));
      const max = Math.round(Number((daily.temperature_2m_max || [])[index] || 0));
      const min = Math.round(Number((daily.temperature_2m_min || [])[index] || 0));
      const rain = Math.round(Number((daily.precipitation_probability_max || [])[index] || 0));
      const dayLabel = index === 0 ? "Hoje" : formatShortDate(date);

      if (isHeroForecast) {
        return `
          <div class="weather-forecast-row">
            <span class="weather-forecast-row__day">${escapeHtml(dayLabel)}</span>
            <span class="weather-forecast-row__icon" aria-hidden="true">${emoji}</span>
            <span class="weather-forecast-row__temps">${max}° <span>${min}°</span></span>
            <span class="weather-forecast-row__rain">${rain}%</span>
          </div>
        `;
      }

      return `
        <article class="forecast-card">
          <span>${formatShortDate(date)}</span>
          <strong>${emoji} ${forecastWeather.label}</strong>
          <p class="hint">${max}° / ${min}°</p>
          <p class="hint">Chuva: ${rain}%</p>
        </article>
      `;
    })
    .join("");
}

function initHomeIntelligence() {
  if (!pageFeatures.home || homeRuntime.initialized) {
    return;
  }

  homeRuntime.initialized = true;

  refs.homeCommandInput?.addEventListener("input", renderHomeCommandResults);
  refs.homeCommandInput?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }

    const firstResult = refs.homeCommandResults?.querySelector("[data-home-result]");
    if (!firstResult) {
      return;
    }

    event.preventDefault();
    firstResult.click();
  });

  refs.homeCommandClear?.addEventListener("click", () => {
    if (!refs.homeCommandInput) {
      return;
    }

    refs.homeCommandInput.value = "";
    refs.homeCommandInput.focus();
    renderHomeCommandResults();
  });

  refs.homeCommandResults?.addEventListener("click", handleHomeActionClick);
  refs.homeAutomationList?.addEventListener("click", handleHomeActionClick);
  refs.homeBriefingList?.addEventListener("click", handleHomeActionClick);

  window.addEventListener("online", renderHomeIntelligence);
  window.addEventListener("offline", renderHomeIntelligence);
  document.addEventListener("keydown", (event) => {
    if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== "k") {
      return;
    }

    event.preventDefault();
    refs.homeCommandInput?.focus();
  });
}

function renderHomeIntelligence() {
  if (!pageFeatures.home) {
    return;
  }

  const snapshot = buildHomeSnapshot();
  const isOnline = navigator.onLine;

  setNodeText(refs.homeConnectionStatus, isOnline ? "Online" : "Offline");
  refs.homeConnectionStatus?.classList.toggle("is-offline", !isOnline);
  setNodeText(refs.homeHealthScore, `${snapshot.healthScore}%`);
  setNodeText(refs.homeDataPulse, snapshot.healthLabel);
  setNodeText(refs.homeBriefingSignal, snapshot.briefingSignal);
  setNodeText(refs.homeFocusAction, snapshot.focusAction);
  setNodeText(refs.homeSnapshotWeather, snapshot.weatherShort);
  setNodeText(refs.homeSnapshotBudget, snapshot.budgetShort);
  setNodeText(refs.homeSnapshotTasks, `${snapshot.pendingTasks} pendente(s)`);

  renderHomeStorageStatus();
  renderHomeBriefing(snapshot);
  renderHomeAutomations(snapshot);
  renderHomeCommandResults();
}

function renderHomeBriefing(snapshot) {
  if (!refs.homeBriefingList) {
    return;
  }

  refs.homeBriefingList.innerHTML = buildHomeBriefingItems(snapshot)
    .map(
      (item) => `
        <li class="home-briefing-item home-tone-${escapeAttribute(item.tone || "info")}">
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.detail)}</span>
          </div>
          ${renderHomeAction(item)}
        </li>
      `
    )
    .join("");
}

function renderHomeAutomations(snapshot) {
  if (!refs.homeAutomationList) {
    return;
  }

  refs.homeAutomationList.innerHTML = buildHomeAutomationItems(snapshot)
    .map(
      (item) => `
        <article class="home-automation-card glass home-tone-${escapeAttribute(item.tone || "info")}">
          <span class="home-automation-icon ${escapeAttribute(item.icon || "icon--tools")}" aria-hidden="true"></span>
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.detail)}</p>
          </div>
          ${renderHomeAction(item, "button ghost slim")}
        </article>
      `
    )
    .join("");
}

function renderHomeCommandResults() {
  if (!refs.homeCommandResults) {
    return;
  }

  const query = refs.homeCommandInput?.value || "";
  const snapshot = buildHomeSnapshot();
  const ranked = buildHomeCommandItems(snapshot)
    .map((item) => ({
      ...item,
      score: scoreHomeCommand(item, query)
    }))
    .filter((item) => item.score > 0)
    .sort((first, second) => second.score - first.score)
    .slice(0, query.trim() ? 8 : 6);

  setNodeText(
    refs.homeCommandMeta,
    query.trim() ? `${ranked.length} resultado(s) para "${query.trim()}"` : "Ações sugeridas agora"
  );

  if (!ranked.length) {
    refs.homeCommandResults.innerHTML = '<p class="home-command-empty">Nenhuma ação encontrada.</p>';
    return;
  }

  refs.homeCommandResults.innerHTML = ranked.map(renderHomeCommandItem).join("");
}

function renderHomeCommandItem(item) {
  const icon = escapeAttribute(item.icon || "icon--tools");
  const label = escapeHtml(item.label);
  const detail = escapeHtml(item.detail);
  const badge = escapeHtml(item.badge || "Abrir");
  const actionAttrs = item.href
    ? `href="${escapeAttribute(item.href)}"`
    : `type="button" data-home-action="${escapeAttribute(item.action || "")}" data-task="${escapeAttribute(item.task || "")}"`;
  const tag = item.href ? "a" : "button";

  return `
    <${tag} class="home-command-result" ${actionAttrs} data-home-result>
      <span class="home-command-result__icon ${icon}" aria-hidden="true"></span>
      <span>
        <strong>${label}</strong>
        <em>${detail}</em>
      </span>
      <small>${badge}</small>
    </${tag}>
  `;
}

function renderHomeAction(item, className = "home-mini-action") {
  if (item.href) {
    return `<a class="${escapeAttribute(className)}" href="${escapeAttribute(item.href)}">${escapeHtml(item.label || "Abrir")}</a>`;
  }

  if (item.action) {
    return `
      <button
        class="${escapeAttribute(className)}"
        type="button"
        data-home-action="${escapeAttribute(item.action)}"
        data-task="${escapeAttribute(item.task || "")}"
      >
        ${escapeHtml(item.label || "Fazer")}
      </button>
    `;
  }

  return "";
}

function handleHomeActionClick(event) {
  const actionTrigger = event.target.closest("[data-home-action]");
  if (!actionTrigger) {
    return;
  }

  const action = actionTrigger.dataset.homeAction;
  if (action === "add-task") {
    event.preventDefault();
    addHomeGeneratedTask(actionTrigger.dataset.task || buildHomeSnapshot().recommendedTask);
  }
}

function addHomeGeneratedTask(taskText) {
  const text = cleanLocationPart(taskText);
  if (!text) {
    return;
  }

  const alreadyPending = state.tasks.some((task) => {
    return !task.done && normalizeLooseText(task.text) === normalizeLooseText(text);
  });

  if (!alreadyPending) {
    state.tasks.unshift({
      id: uid(),
      text,
      done: false
    });
    saveStorage(STORAGE_KEYS.tasks, state.tasks);
  }

  renderHomeIntelligence();
  showToast(alreadyPending ? "Essa tarefa já está no checklist." : "Tarefa adicionada ao checklist.", "success");
}

function buildHomeSnapshot() {
  const budget = computeHomeBudgetSnapshot();
  const pendingTasks = countHomePendingTasks();
  const weatherInfo = state.weatherInfo || {};
  const weatherShort = weatherInfo.conditionLabel
    ? `${weatherInfo.conditionLabel} | ${Math.round(Number(state.weather?.current?.temperature_2m || 0))}°`
    : "Clima em atualização";
  const recommendedTask = buildHomeRecommendedTask(weatherInfo, budget);
  const budgetShort = budget.income > 0
    ? `${formatMoney(budget.balance)} livres`
    : "Configure a renda";
  const healthScore = computeHomeHealthScore({
    budget,
    pendingTasks,
    hasWeather: Boolean(weatherInfo.conditionLabel),
    isOnline: navigator.onLine
  });
  const healthLabel = healthScore >= 84
    ? "Sistema em ordem"
    : healthScore >= 66
      ? "Atenção moderada"
      : "Prioridade alta";
  const focusAction = budget.balance < 0
    ? "Revisar gastos"
    : weatherInfo.stormRisk
      ? "Proteger a casa"
      : pendingTasks > 0
        ? "Fechar pendências"
        : "Planejar o dia";

  return {
    budget,
    pendingTasks,
    weatherInfo,
    weatherShort,
    budgetShort,
    healthScore,
    healthLabel,
    focusAction,
    recommendedTask,
    briefingSignal: resolveHomeBriefingSignal(weatherInfo, budget, pendingTasks)
  };
}

function buildHomeBriefingItems(snapshot) {
  const items = [];
  const { budget, pendingTasks, weatherInfo } = snapshot;

  if (weatherInfo.conditionLabel) {
    if (weatherInfo.stormRisk) {
      items.push({
        title: "Risco climático",
        detail: "Tempestade ou chuva forte no radar local. Priorize janelas, energia e itens externos.",
        tone: "danger",
        action: "add-task",
        task: snapshot.recommendedTask,
        label: "Adicionar"
      });
    } else if (weatherInfo.scene === "rain" || weatherInfo.scene === "drizzle") {
      items.push({
        title: "Casa preparada para chuva",
        detail: "Vale conferir roupas, entradas molhadas e deslocamentos antes de sair.",
        tone: "warning",
        action: "add-task",
        task: snapshot.recommendedTask,
        label: "Adicionar"
      });
    } else {
      items.push({
        title: weatherInfo.conditionLabel,
        detail: `Estação: ${weatherInfo.season || "em leitura"}. Lua: ${weatherInfo.moonLabel || "em leitura"}.`,
        tone: "info"
      });
    }
  } else {
    items.push({
      title: "Clima em leitura",
      detail: "A previsão local entra no briefing assim que a localização sincronizar.",
      tone: "info"
    });
  }

  if (budget.income <= 0) {
    items.push({
      title: "Financeiro sem base",
      detail: "Defina renda mensal para o painel calcular saldo, meta e comprometimento.",
      tone: "warning",
      href: "gastos.html",
      label: "Abrir"
    });
  } else if (budget.balance < 0) {
    items.push({
      title: "Saldo negativo",
      detail: `Os gastos passam da renda em ${formatMoney(Math.abs(budget.balance))}.`,
      tone: "danger",
      href: "gastos.html",
      label: "Revisar"
    });
  } else {
    items.push({
      title: "Saldo livre",
      detail: `${formatMoney(budget.balance)} disponíveis depois dos gastos registrados.`,
      tone: budget.commitment >= 85 ? "warning" : "success",
      href: "gastos.html",
      label: "Ver"
    });
  }

  if (budget.nextBill) {
    items.push({
      title: "Próximo vencimento",
      detail: `${budget.nextBill.title || "Conta"} vence em ${budget.nextBill.label}.`,
      tone: budget.nextBill.daysUntil <= 3 ? "warning" : "info",
      href: "gastos.html",
      label: "Contas"
    });
  }

  if (pendingTasks > 0) {
    items.push({
      title: "Checklist ativo",
      detail: `${pendingTasks} tarefa(s) ainda abertas para a casa.`,
      tone: pendingTasks >= 5 ? "warning" : "info",
      href: "utilidades.html",
      label: "Ver"
    });
  } else {
    items.push({
      title: "Checklist limpo",
      detail: "Nenhuma pendência local registrada agora.",
      tone: "success",
      action: "add-task",
      task: snapshot.recommendedTask,
      label: "Criar"
    });
  }

  if (!navigator.onLine) {
    items.push({
      title: "Modo offline",
      detail: "Os dados locais continuam acessíveis; feeds externos voltam quando a conexão retornar.",
      tone: "warning"
    });
  }

  return items.slice(0, 5);
}

function buildHomeAutomationItems(snapshot) {
  const locationLabel = formatLocationLabel(state.location);

  return [
    {
      title: "Tarefa inteligente",
      detail: snapshot.recommendedTask,
      icon: "icon--tools",
      tone: snapshot.weatherInfo.stormRisk ? "danger" : "info",
      action: "add-task",
      task: snapshot.recommendedTask,
      label: "Adicionar"
    },
    {
      title: "Leitura financeira",
      detail: snapshot.budget.income > 0
        ? `Comprometimento em ${snapshot.budget.commitment}% e saldo de ${formatMoney(snapshot.budget.balance)}.`
        : "Informe renda e contas fixas para ativar alertas melhores.",
      icon: "icon--budget",
      tone: snapshot.budget.balance < 0 ? "danger" : "success",
      href: "gastos.html",
      label: "Abrir"
    },
    {
      title: "Região útil",
      detail: `Serviços próximos calibrados para ${locationLabel}.`,
      icon: "icon--tools",
      tone: "info",
      href: "utilidades.html",
      label: "Buscar"
    },
    {
      title: "Aprendizado",
      detail: "Cursos gratuitos e notícias de tecnologia ficam a um toque.",
      icon: "icon--courses",
      tone: "accent",
      href: "cursos.html",
      label: "Explorar"
    }
  ];
}

function buildHomeCommandItems(snapshot) {
  const task = snapshot.recommendedTask;
  const nextBillText = snapshot.budget.nextBill
    ? `${snapshot.budget.nextBill.title || "Conta"} vence em ${snapshot.budget.nextBill.label}`
    : "Sem vencimento cadastrado";

  return [
    {
      label: "Criar tarefa inteligente",
      detail: task,
      badge: "Ação",
      icon: "icon--tools",
      action: "add-task",
      task,
      keywords: "tarefa checklist manutenção lembrete clima casa rotina",
      priority: 98
    },
    {
      label: "Abrir gastos",
      detail: snapshot.budget.income > 0 ? `${formatMoney(snapshot.budget.balance)} livres no mês` : "Configurar renda e contas",
      badge: "Finanças",
      icon: "icon--budget",
      href: "gastos.html",
      keywords: "gastos orçamento dinheiro renda saldo conta luz água gás boleto vencimento",
      priority: snapshot.budget.balance < 0 ? 100 : 86
    },
    {
      label: "Ver próximo vencimento",
      detail: nextBillText,
      badge: "Conta",
      icon: "icon--budget",
      href: "gastos.html",
      keywords: "vencimento boleto pagar pagamento conta fixa água luz gás internet celular",
      priority: snapshot.budget.nextBill ? 92 : 52
    },
    {
      label: "Buscar serviços perto",
      detail: `Mercados, farmácias, postos e reparos em ${formatLocationLabel(state.location)}`,
      badge: "Região",
      icon: "icon--tools",
      href: "utilidades.html",
      keywords: "perto farmácia mercado posto gás mecânico eletricista encanador banco hospital mapa",
      priority: 84
    },
    {
      label: "Ouvir rádio local",
      detail: "Estações por país, estado, cidade e gênero",
      badge: "Ao vivo",
      icon: "icon--radio",
      href: "radio.html",
      keywords: "radio rádio música notícia esporte futebol ao vivo estação local",
      priority: 70
    },
    {
      label: "Ler notícias de tecnologia",
      detail: "Feeds por tema com atualização periódica",
      badge: "Notícias",
      icon: "icon--news",
      href: "noticias.html",
      keywords: "notícias noticias tecnologia mundo política economia futebol esporte feed",
      priority: 68
    },
    {
      label: "Abrir cofre",
      detail: "Senhas salvas localmente no navegador",
      badge: "Seguro",
      icon: "icon--vault",
      href: "cofre.html",
      keywords: "cofre senha login usuário credencial privado local segurança",
      priority: 64
    },
    {
      label: "Explorar cursos grátis",
      detail: "Tecnologia, idiomas, matemática, gastronomia e mais",
      badge: "Cursos",
      icon: "icon--courses",
      href: "cursos.html",
      keywords: "curso grátis estudo aprender tecnologia programação idioma matemática gastronomia",
      priority: 62
    },
    {
      label: "Abrir perfil",
      detail: "Saúde, rotina, leituras e frase do dia",
      badge: "Perfil",
      icon: "icon--profile",
      href: "perfil.html",
      keywords: "perfil saúde imc treino rotina astral leitura frase dia",
      priority: 58
    }
  ];
}

function scoreHomeCommand(item, query) {
  const cleanQuery = normalizeLooseText(query);
  if (!cleanQuery) {
    return item.priority || 1;
  }

  const haystack = normalizeLooseText(`${item.label} ${item.detail} ${item.keywords || ""}`);
  const tokens = cleanQuery.split(/\s+/).filter(Boolean);
  if (!tokens.length) {
    return item.priority || 1;
  }

  const matchedTokens = tokens.filter((token) => haystack.includes(token));
  if (!matchedTokens.length) {
    return 0;
  }

  const label = normalizeLooseText(item.label);
  const labelBonus = label.includes(cleanQuery) ? 80 : 0;
  return matchedTokens.length * 32 + labelBonus + Math.min(item.priority || 0, 30);
}

function computeHomeBudgetSnapshot() {
  if (typeof computeBudgetSummary === "function") {
    return computeBudgetSummary();
  }

  const budget = state.budget || {};
  const categories = Array.isArray(budget.categories) ? budget.categories : [];
  const bills = Array.isArray(budget.bills) ? budget.bills : [];
  const extras = Array.isArray(budget.extras) ? budget.extras : [];
  const income = parseMoney(budget.income);
  const savingsGoal = parseMoney(budget.savingsGoal);
  const fixedCategoryTotal = categories.reduce((total, category) => {
    return category.kind === "fixed" ? total + parseMoney(category.value) : total;
  }, 0);
  const variableCategoryTotal = categories.reduce((total, category) => {
    return category.kind !== "fixed" ? total + parseMoney(category.value) : total;
  }, 0);
  const billsTotal = bills.reduce((total, bill) => total + parseMoney(bill.amount), 0);
  const extrasTotal = extras.reduce((total, item) => total + parseMoney(item.amount), 0);
  const fixed = billsTotal + fixedCategoryTotal;
  const variable = extrasTotal + variableCategoryTotal;
  const total = fixed + variable;
  const balance = income - total;
  const commitment = income > 0 ? Math.round((total / income) * 100) : 0;
  const goalCoverage = savingsGoal > 0 && balance > 0 ? Math.min(100, Math.round((balance / savingsGoal) * 100)) : 0;
  const nextBill = getHomeNextBill(bills);

  return {
    income,
    savingsGoal,
    fixed,
    variable,
    total,
    balance,
    commitment,
    goalCoverage,
    nextBill,
    nextBillShort: nextBill ? `${nextBill.title || "Conta"} | ${nextBill.label}` : "Sem vencimento"
  };
}

function getHomeNextBill(bills) {
  const today = new Date();
  return bills
    .map((bill) => {
      const dueDay = Number(bill.dueDay);
      if (!dueDay || dueDay < 1 || dueDay > 31 || !String(bill.title || "").trim()) {
        return null;
      }

      const currentMonthDate = buildSafeDate(today.getFullYear(), today.getMonth(), dueDay);
      const dueDate =
        currentMonthDate >= stripTime(today)
          ? currentMonthDate
          : buildSafeDate(today.getFullYear(), today.getMonth() + 1, dueDay);

      return {
        ...bill,
        dueDate,
        daysUntil: Math.round((stripTime(dueDate) - stripTime(today)) / 86400000),
        label: formatBillDate(dueDate)
      };
    })
    .filter(Boolean)
    .sort((first, second) => first.dueDate - second.dueDate)[0] || null;
}

function countHomePendingTasks() {
  return Array.isArray(state.tasks) ? state.tasks.filter((task) => !task.done).length : 0;
}

function buildHomeRecommendedTask(weatherInfo, budget) {
  if (weatherInfo?.stormRisk) {
    return "Revisar janelas, tomadas e itens externos antes da tempestade";
  }
  if (weatherInfo?.scene === "rain" || weatherInfo?.scene === "drizzle") {
    return "Separar guarda-chuva e checar áreas molhadas da casa";
  }
  if (weatherInfo?.temperatureMood?.type === "quente") {
    return "Conferir ventilação, água e consumo de energia no período quente";
  }
  if (weatherInfo?.temperatureMood?.type === "frio") {
    return "Revisar roupas de cama e vedação das janelas";
  }
  if (budget?.nextBill) {
    return `Preparar pagamento de ${budget.nextBill.title || "conta"} para ${budget.nextBill.label}`;
  }
  return "Fazer uma revisão rápida da casa e atualizar o checklist";
}

function resolveHomeBriefingSignal(weatherInfo, budget, pendingTasks) {
  if (weatherInfo?.stormRisk || budget.balance < 0) {
    return "Atenção";
  }
  if (pendingTasks > 4 || budget.commitment >= 85) {
    return "Priorizar";
  }
  return "Agora";
}

function computeHomeHealthScore({ budget, pendingTasks, hasWeather, isOnline }) {
  let score = 46;

  if (hasWeather) {
    score += 16;
  }
  if (isOnline) {
    score += 8;
  }
  if (budget.income > 0) {
    score += 14;
  }
  if (budget.nextBill) {
    score += 8;
  }
  if (budget.balance < 0) {
    score -= 24;
  } else if (budget.balance > 0) {
    score += 8;
  }
  if (budget.commitment >= 85) {
    score -= 12;
  }
  if (pendingTasks > 6) {
    score -= 12;
  } else if (pendingTasks <= 2) {
    score += 6;
  }

  return Math.max(0, Math.min(100, score));
}

async function updateHomeStorageStatus() {
  if (!pageFeatures.home || !navigator.storage?.estimate) {
    renderHomeStorageStatus();
    return;
  }

  try {
    homeRuntime.storage = await navigator.storage.estimate();
  } catch (error) {
    homeRuntime.storage = null;
  }

  renderHomeStorageStatus();
}

function renderHomeStorageStatus() {
  if (!pageFeatures.home) {
    return;
  }

  const usage = Number(homeRuntime.storage?.usage || 0);
  const quota = Number(homeRuntime.storage?.quota || 0);
  if (!quota) {
    setNodeText(refs.homeStorageStatus, "Local");
    setNodeText(refs.homeDataPulseLabel, "Privado no navegador");
    return;
  }

  const percent = Math.max(1, Math.round((usage / quota) * 100));
  setNodeText(refs.homeStorageStatus, `${formatBytes(usage)} usados`);
  setNodeText(refs.homeDataPulseLabel, `${percent}% da cota local`);
}

function formatBytes(value) {
  const number = Number(value || 0);
  if (number < 1024 * 1024) {
    return `${Math.max(1, Math.round(number / 1024))} KB`;
  }
  if (number < 1024 * 1024 * 1024) {
    return `${(number / (1024 * 1024)).toFixed(1)} MB`;
  }
  return `${(number / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

function initPwaSupport() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").then(() => {
      syncOfflineCache();
    }).catch(() => {
      // O app continua funcionando sem cache offline.
    });
  });
}

function syncOfflineCache() {
  if (!navigator.serviceWorker?.controller) {
    return;
  }

  navigator.serviceWorker.controller.postMessage({
    type: "cache-offline-data",
    payload: {
      news: loadStorage(STORAGE_KEYS.newsCache, {}),
      radioFavorites: state.radioFavorites
    }
  });
}

function applyTheme(info) {
  const palette = resolvePalette(info);
  const root = document.documentElement;

  root.style.setProperty("--bg-1", palette.bg1);
  root.style.setProperty("--bg-2", palette.bg2);
  root.style.setProperty("--bg-3", palette.bg3);
  root.style.setProperty("--accent", palette.accent);
  root.style.setProperty("--accent-soft", palette.accentSoft);
  root.style.setProperty("--sky-top", palette.skyTop);
  root.style.setProperty("--sky-bottom", palette.skyBottom);
  root.style.setProperty("--mountain-back", palette.mountainBack);
  root.style.setProperty("--mountain-mid", palette.mountainMid);
  root.style.setProperty("--mountain-front", palette.mountainFront);
  root.style.setProperty("--ground-top", palette.groundTop);
  root.style.setProperty("--ground-bottom", palette.groundBottom);
  root.style.setProperty("--house-wall", palette.houseWall);
  root.style.setProperty("--house-roof", palette.houseRoof);
  root.style.setProperty("--cloud-color", palette.cloudColor);
  root.style.setProperty("--fog-color", palette.fogColor);
  root.style.setProperty("--precip-color", palette.precipColor);
  root.style.setProperty("--celestial-glow", palette.celestialGlow);
  root.style.setProperty("--weather-fade-soft", palette.bg3);
  root.style.setProperty("--weather-fade-mid", palette.bg2);
  root.style.setProperty("--weather-fade-deep", palette.bg1);
  document.body.classList.add("has-weather-fade");
  persistSceneTheme(palette);
  state.autoDark = info.timeSegment === "noite" || info.scene === "storm" || info.stormRisk;
  applyEffectiveTheme();

  renderWeatherEffects(info);
}

function hydrateSceneIfMissing() {
  if (!refs.weatherEffects || refs.weatherEffects.querySelector(".photo-scene")) {
    return;
  }

  const cachedWeather =
    state.weather || readCachedWeather(state.location) || readCachedWeather(state.location, { allowStale: true });

  if (cachedWeather) {
    renderWeather(cachedWeather);
    return;
  }

  renderDefaultSceneBackdrop();
}

function renderDefaultSceneBackdrop() {
  if (!refs.weatherEffects) {
    return;
  }

  refs.weatherEffects.innerHTML = `
    <div class="photo-scene is-day is-clear profile-countryside scene-fallback-only" style="--scene-image:none; --scene-fallback:linear-gradient(180deg, #6fb7e8 0%, #b8dcf1 42%, #5f8c61 43%, #2d5a3d 100%); --scene-position:center 62%; --scene-brightness:1; --scene-darkness:0.18; --scene-saturation:1.08; --scene-contrast:1.08; --scene-photo-opacity:0;">
      <div class="photo-scene__image"></div>
      <div class="photo-scene__shade"></div>
    </div>
  `;
  refs.body.classList.add("scene-ready");

  const fallbackPalette = {
    bg1: "#0c1522",
    bg2: "#142436",
    bg3: "#1a2f4a"
  };
  document.documentElement.style.setProperty("--weather-fade-deep", fallbackPalette.bg1);
  document.documentElement.style.setProperty("--weather-fade-mid", fallbackPalette.bg2);
  document.documentElement.style.setProperty("--weather-fade-soft", fallbackPalette.bg3);
  persistSceneTheme(fallbackPalette);
}

function persistSceneTheme(palette) {
  try {
    saveStorage(STORAGE_KEYS.sceneTheme, {
      fadeDeep: palette.bg1,
      fadeMid: palette.bg2,
      fadeSoft: palette.bg3,
      bg1: palette.bg1,
      bg2: palette.bg2,
      bg3: palette.bg3,
      savedAt: Date.now()
    });
  } catch (error) {
    // Mantém a página funcional mesmo sem persistência.
  }
}

function resolvePalette(info) {
  const palettes = {
    manha: {
      bg1: "#fff6ea",
      bg2: "#eef7ff",
      bg3: "#fffdf7",
      accent: "#ff9f68",
      accentSoft: "rgba(255, 159, 104, 0.16)",
      skyTop: "#9fd5ff",
      skyBottom: "#f7fbff",
      mountainBack: "#93b7ce",
      mountainMid: "#6f8faa",
      mountainFront: "#5a7488",
      groundTop: "#96c379",
      groundBottom: "#4f7b4f",
      houseWall: "#f5f0e8",
      houseRoof: "#8e5a47",
      cloudColor: "rgba(255, 255, 255, 0.78)",
      fogColor: "rgba(255, 255, 255, 0.34)",
      precipColor: "rgba(255, 255, 255, 0.82)",
      celestialGlow: "rgba(255, 211, 127, 0.36)"
    },
    tarde: {
      bg1: "#fff1dd",
      bg2: "#ffe1cf",
      bg3: "#edf8ff",
      accent: "#ff8759",
      accentSoft: "rgba(255, 135, 89, 0.16)",
      skyTop: "#ffbf88",
      skyBottom: "#ffe7c7",
      mountainBack: "#bba08d",
      mountainMid: "#8c7d79",
      mountainFront: "#6e6868",
      groundTop: "#92b565",
      groundBottom: "#4f6f46",
      houseWall: "#f6eee7",
      houseRoof: "#8a5345",
      cloudColor: "rgba(255, 241, 226, 0.8)",
      fogColor: "rgba(255, 232, 206, 0.28)",
      precipColor: "rgba(255, 255, 255, 0.8)",
      celestialGlow: "rgba(255, 175, 92, 0.35)"
    },
    noite: {
      bg1: "#10213a",
      bg2: "#193a62",
      bg3: "#244d7d",
      accent: "#90cdff",
      accentSoft: "rgba(144, 205, 255, 0.18)",
      skyTop: "#0f2143",
      skyBottom: "#264d7d",
      mountainBack: "#334f6f",
      mountainMid: "#2a425d",
      mountainFront: "#213447",
      groundTop: "#496255",
      groundBottom: "#24392a",
      houseWall: "#d8d6d9",
      houseRoof: "#6f4841",
      cloudColor: "rgba(206, 220, 240, 0.42)",
      fogColor: "rgba(199, 214, 237, 0.18)",
      precipColor: "rgba(223, 240, 255, 0.82)",
      celestialGlow: "rgba(194, 214, 255, 0.2)"
    },
    neblina: {
      bg1: "#edf5f7",
      bg2: "#ddeaf0",
      bg3: "#f9fcff",
      accent: "#7cabc8",
      accentSoft: "rgba(124, 171, 200, 0.16)",
      skyTop: "#c9d9e4",
      skyBottom: "#ecf4f8",
      mountainBack: "#99aebb",
      mountainMid: "#7c94a4",
      mountainFront: "#617b89",
      groundTop: "#8ead8a",
      groundBottom: "#58725d",
      houseWall: "#f1efeb",
      houseRoof: "#7d5b52",
      cloudColor: "rgba(248, 251, 254, 0.7)",
      fogColor: "rgba(255, 255, 255, 0.46)",
      precipColor: "rgba(255, 255, 255, 0.8)",
      celestialGlow: "rgba(255, 255, 255, 0.16)"
    },
    chuva: {
      bg1: "#e7f2f9",
      bg2: "#cddff0",
      bg3: "#f5fbff",
      accent: "#4c93c8",
      accentSoft: "rgba(76, 147, 200, 0.16)",
      skyTop: "#8ea7bf",
      skyBottom: "#d6e3ee",
      mountainBack: "#738da9",
      mountainMid: "#5e7790",
      mountainFront: "#496173",
      groundTop: "#7aa273",
      groundBottom: "#44664b",
      houseWall: "#ece7df",
      houseRoof: "#7a5044",
      cloudColor: "rgba(230, 238, 247, 0.84)",
      fogColor: "rgba(244, 248, 252, 0.26)",
      precipColor: "rgba(239, 246, 255, 0.88)",
      celestialGlow: "rgba(255, 255, 255, 0.12)"
    },
    garoa: {
      bg1: "#edf5fb",
      bg2: "#dceaf4",
      bg3: "#f7fbff",
      accent: "#72a5cf",
      accentSoft: "rgba(114, 165, 207, 0.16)",
      skyTop: "#a8bfd4",
      skyBottom: "#e8eff5",
      mountainBack: "#90a8b8",
      mountainMid: "#70899a",
      mountainFront: "#597280",
      groundTop: "#86aa79",
      groundBottom: "#4f6d55",
      houseWall: "#efebe3",
      houseRoof: "#825447",
      cloudColor: "rgba(242, 247, 252, 0.82)",
      fogColor: "rgba(255, 255, 255, 0.3)",
      precipColor: "rgba(255, 255, 255, 0.7)",
      celestialGlow: "rgba(255, 255, 255, 0.15)"
    },
    neve: {
      bg1: "#f5fbff",
      bg2: "#e4eef8",
      bg3: "#ffffff",
      accent: "#8cb2d2",
      accentSoft: "rgba(140, 178, 210, 0.16)",
      skyTop: "#c4d8eb",
      skyBottom: "#f8fbff",
      mountainBack: "#b2c3d0",
      mountainMid: "#93a8bb",
      mountainFront: "#6b8394",
      groundTop: "#f7fbff",
      groundBottom: "#d5e0ea",
      houseWall: "#f7f2ec",
      houseRoof: "#826056",
      cloudColor: "rgba(249, 252, 255, 0.92)",
      fogColor: "rgba(255, 255, 255, 0.42)",
      precipColor: "rgba(255, 255, 255, 0.94)",
      celestialGlow: "rgba(255, 255, 255, 0.18)"
    },
    tempestade: {
      bg1: "#bbc7d8",
      bg2: "#8da1bb",
      bg3: "#d4dee8",
      accent: "#27486d",
      accentSoft: "rgba(39, 72, 109, 0.18)",
      skyTop: "#43576f",
      skyBottom: "#8194ac",
      mountainBack: "#566b82",
      mountainMid: "#415265",
      mountainFront: "#2d3947",
      groundTop: "#667f67",
      groundBottom: "#334235",
      houseWall: "#d9d6d3",
      houseRoof: "#613d38",
      cloudColor: "rgba(211, 222, 238, 0.5)",
      fogColor: "rgba(212, 224, 237, 0.16)",
      precipColor: "rgba(236, 244, 255, 0.9)",
      celestialGlow: "rgba(255, 255, 255, 0.08)"
    },
    calor: {
      bg1: "#fff0dc",
      bg2: "#ffd6bf",
      bg3: "#fff8ef",
      accent: "#ff8d4f",
      accentSoft: "rgba(255, 141, 79, 0.16)",
      skyTop: "#ffbf7c",
      skyBottom: "#fff0d9",
      mountainBack: "#c1a088",
      mountainMid: "#9a816e",
      mountainFront: "#7f6e64",
      groundTop: "#99bb67",
      groundBottom: "#567146",
      houseWall: "#f7eee4",
      houseRoof: "#965545",
      cloudColor: "rgba(255, 244, 227, 0.74)",
      fogColor: "rgba(255, 226, 190, 0.18)",
      precipColor: "rgba(255, 255, 255, 0.82)",
      celestialGlow: "rgba(255, 174, 82, 0.38)"
    },
    frio: {
      bg1: "#eef7ff",
      bg2: "#d6e8fb",
      bg3: "#f9fdff",
      accent: "#72a9d8",
      accentSoft: "rgba(114, 169, 216, 0.16)",
      skyTop: "#b7d6f2",
      skyBottom: "#f7fbff",
      mountainBack: "#a0bed6",
      mountainMid: "#7797b0",
      mountainFront: "#5f7f96",
      groundTop: "#8fb296",
      groundBottom: "#4f6b56",
      houseWall: "#f5f2ee",
      houseRoof: "#7a5b56",
      cloudColor: "rgba(245, 250, 255, 0.8)",
      fogColor: "rgba(255, 255, 255, 0.24)",
      precipColor: "rgba(255, 255, 255, 0.86)",
      celestialGlow: "rgba(189, 221, 255, 0.26)"
    }
  };

  if (info.scene === "storm" || info.stormRisk) {
    return palettes.tempestade;
  }

  if (info.scene === "snow") {
    return palettes.neve;
  }

  if (info.scene === "fog") {
    return palettes.neblina;
  }

  if (info.scene === "drizzle") {
    return palettes.garoa;
  }

  if (info.scene === "rain") {
    return palettes.chuva;
  }

  if (info.timeSegment === "noite") {
    return palettes.noite;
  }

  if (info.temperatureMood?.type === "quente") {
    return palettes.calor;
  }

  if (info.temperatureMood?.type === "frio") {
    return palettes.frio;
  }

  return palettes[info.timeSegment] || palettes.manha;
}

function resolveLocationProfile(location, info) {
  const label = normalizeLocationLabel(`${location?.locality || ""} ${location?.state || ""} ${location?.country || ""}`);
  const latitude = Math.abs(Number(location?.latitude || 0));
  const coastKeywords = [
    "praia",
    "beach",
    "coast",
    "coastal",
    "rio de janeiro",
    "niteroi",
    "santos",
    "guaruja",
    "salvador",
    "recife",
    "maceio",
    "fortaleza",
    "natal",
    "joao pessoa",
    "florianopolis"
  ];
  const mountainKeywords = [
    "serra",
    "montanha",
    "mountain",
    "sierra",
    "andes",
    "alpes",
    "gramado",
    "canela",
    "campos do jordao",
    "petropolis",
    "teresopolis"
  ];
  const metroKeywords = [
    "sao paulo",
    "lisboa",
    "porto",
    "london",
    "new york",
    "tokyo",
    "paris",
    "berlin",
    "buenos aires",
    "brasilia",
    "belo horizonte",
    "curitiba",
    "porto alegre"
  ];
  const forestKeywords = [
    "amaz",
    "amazon",
    "belem",
    "manaus",
    "floresta",
    "forest",
    "selva",
    "jungle",
    "bonito",
    "chapada",
    "pantanal"
  ];
  const tropicalKeywords = [
    "bahia",
    "fortaleza",
    "recife",
    "maceio",
    "natal",
    "salvador",
    "joao pessoa",
    "caribe",
    "miami",
    "cancun",
    "hawaii",
    "honolulu",
    "phuket",
    "bali"
  ];
  const valleyKeywords = [
    "lajeado",
    "vale do taquari",
    "rio grande do sul",
    "estrela",
    "teutonia",
    "encantado",
    "venancio aires",
    "santa cruz do sul",
    "novo hamburgo"
  ];
  const caatingaKeywords = [
    "caatinga",
    "sertao",
    "semiarido",
    "petrolina",
    "juazeiro",
    "montes claros",
    "caruaru",
    "campina grande",
    "picos",
    "sousa",
    "patos",
    "cabedelo interior",
    "sertao nordestino"
  ];

  if (info.scene === "snow") {
    const isHotRegion =
      tropicalKeywords.some((keyword) => label.includes(keyword)) ||
      caatingaKeywords.some((keyword) => label.includes(keyword)) ||
      coastKeywords.some((keyword) => label.includes(keyword)) ||
      latitude <= 20;
    if (!isHotRegion) {
      return "mountain";
    }
  }
  if (caatingaKeywords.some((keyword) => label.includes(keyword))) {
    return "caatinga";
  }
  if (coastKeywords.some((keyword) => label.includes(keyword))) {
    return "coast";
  }
  if (mountainKeywords.some((keyword) => label.includes(keyword))) {
    return "mountain";
  }
  if (metroKeywords.some((keyword) => label.includes(keyword))) {
    return "metro";
  }
  if (forestKeywords.some((keyword) => label.includes(keyword))) {
    return "forest";
  }
  if (valleyKeywords.some((keyword) => label.includes(keyword))) {
    return "valley";
  }
  if (tropicalKeywords.some((keyword) => label.includes(keyword)) || latitude <= 16) {
    return "tropical";
  }
  return "countryside";
}

function normalizeLocationLabel(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function pickScenePhoto(variants, seed) {
  if (!Array.isArray(variants) || !variants.length) {
    return "";
  }
  return variants[hashString(seed) % variants.length];
}

function resolveSceneFallback(profile, sceneKey, info) {
  const terrain = {
    coast: "linear-gradient(180deg, rgba(102, 182, 222, 0) 0 48%, #d6b57a 49% 62%, #2f7f8f 63% 100%)",
    countryside: "linear-gradient(180deg, rgba(105, 174, 221, 0) 0 48%, #7fa564 49% 68%, #376b45 69% 100%)",
    forest: "linear-gradient(180deg, rgba(72, 141, 176, 0) 0 46%, #3f7550 47% 65%, #173f2b 66% 100%)",
    metro: "linear-gradient(180deg, rgba(74, 126, 166, 0) 0 44%, #344a5e 45% 68%, #182635 69% 100%)",
    tropical: "linear-gradient(180deg, rgba(102, 190, 220, 0) 0 44%, #d8b56c 45% 58%, #28735f 59% 100%)",
    valley: "linear-gradient(180deg, rgba(91, 156, 198, 0) 0 46%, #6f9666 47% 66%, #284f37 67% 100%)",
    mountain: "linear-gradient(180deg, rgba(88, 142, 186, 0) 0 38%, #76899a 39% 57%, #31506a 58% 100%)",
    caatinga: "linear-gradient(180deg, rgba(230, 170, 90, 0) 0 42%, #c9a05a 43% 58%, #8b5a2b 59% 100%)"
  };
  const skies = {
    storm: "linear-gradient(180deg, #263544 0%, #4a5f73 48%, #1f2b36 100%)",
    snow: "linear-gradient(180deg, #7f9fbb 0%, #c9d9e6 48%, #8fa5b7 100%)",
    fog: "linear-gradient(180deg, #9fb3bf 0%, #c4d0d7 48%, #758a93 100%)",
    drizzle: "linear-gradient(180deg, #8199ad 0%, #a9bac7 48%, #4e6675 100%)",
    rain: "linear-gradient(180deg, #506b82 0%, #8398aa 48%, #263d4f 100%)",
    cloudy: "linear-gradient(180deg, #7e9ab5 0%, #b2c4d3 48%, #4d6578 100%)",
    clearNight: "linear-gradient(180deg, #071326 0%, #17355f 52%, #071522 100%)",
    clearEvening: "linear-gradient(180deg, #f09c68 0%, #e9b079 48%, #4d665f 100%)",
    clearHotDay: "linear-gradient(180deg, #f3a45f 0%, #f3d092 48%, #50764a 100%)",
    clearColdDay: "linear-gradient(180deg, #86accb 0%, #c2d6e8 48%, #537283 100%)",
    clearDay: "linear-gradient(180deg, #5fa9df 0%, #b8ddf2 48%, #5d8c63 100%)"
  };
  const key = info.timeSegment === "noite" && sceneKey === "clearDay" ? "clearNight" : sceneKey;

  return `${terrain[profile] || terrain.countryside}, ${skies[key] || skies.clearDay}`;
}

function getSceneRotationKey(info) {
  const sourceTime = String(state.weather?.current?.time || "");
  const dateKey = sourceTime.split("T")[0] || new Date().toISOString().slice(0, 10);
  const hour = Number(sourceTime.split("T")[1]?.split(":")[0] || new Date().getHours());
  const period = Math.floor(hour / 6);
  return `${dateKey}|${period}`;
}

function resolveScenePhoto(info) {
  const assets = window.CasaClimaSceneAssets;
  const profile = resolveLocationProfile(state.location, info);
  const clearKey =
    info.timeSegment === "noite"
      ? "clearNight"
      : info.timeSegment === "tarde"
        ? "clearEvening"
        : info.temperatureMood?.type === "quente"
          ? "clearHotDay"
          : info.temperatureMood?.type === "frio"
            ? "clearColdDay"
            : "clearDay";
  const sceneKey =
    info.scene === "storm" || info.stormRisk
      ? "storm"
      : info.scene === "snow"
        ? "snow"
        : info.scene === "fog"
          ? "fog"
          : info.scene === "drizzle"
            ? "drizzle"
            : info.scene === "rain"
              ? "rain"
              : info.scene === "cloudy"
                ? "cloudy"
                : clearKey;

  const variants = assets
    ? assets.pickVariants(profile, sceneKey)
    : [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85"
      ];
  const image = pickScenePhoto(
    variants,
    `${state.location.name}|${profile}|${sceneKey}|${info.timeSegment}|${info.season}|${getSceneRotationKey(info)}`
  );
  const positionMap = {
    coast: "center 58%",
    countryside: "center 62%",
    forest: "center 58%",
    metro: "center 54%",
    tropical: "center 59%",
    valley: "center 58%",
    mountain: "center 60%",
    caatinga: "center 61%"
  };
  const base = {
    image,
    fallback: resolveSceneFallback(profile, sceneKey, info),
    position: positionMap[profile] || "center 60%",
    brightness: 1.08,
    darkness: 0.04,
    saturation: 1.14,
    contrast: 1.06,
    opacity: 1
  };

  if (info.scene === "storm" || info.stormRisk) {
    return { ...base, brightness: 0.76, darkness: 0.44, saturation: 0.92, contrast: 1.16, opacity: 1 };
  }
  if (info.scene === "snow") {
    return { ...base, brightness: 0.78, darkness: 0.46, saturation: 0.88, contrast: 1.28, opacity: 1 };
  }
  if (info.scene === "fog") {
    return { ...base, brightness: 0.9, darkness: 0.28, saturation: 0.9, contrast: 1.08, opacity: 1 };
  }
  if (info.scene === "drizzle") {
    return { ...base, brightness: 0.88, darkness: 0.28, saturation: 0.96, contrast: 1.1, opacity: 1 };
  }
  if (info.scene === "rain") {
    return { ...base, brightness: 0.84, darkness: 0.34, saturation: 0.96, contrast: 1.12, opacity: 1 };
  }
  if (info.scene === "cloudy") {
    return { ...base, brightness: 0.88, darkness: 0.28, saturation: 1, contrast: 1.1, opacity: 1 };
  }
  if (sceneKey === "clearColdDay") {
    return { ...base, brightness: 0.82, darkness: 0.34, saturation: 0.92, contrast: 1.2, opacity: 1 };
  }
  if (info.timeSegment === "noite") {
    return { ...base, brightness: 0.72, darkness: 0.44, saturation: 0.96, contrast: 1.14, opacity: 1 };
  }
  if (info.timeSegment === "tarde") {
    return { ...base, brightness: 1.12, darkness: 0.04, saturation: 1.24, contrast: 1.08 };
  }
  return { ...base, brightness: 1.1, darkness: 0.03, saturation: 1.16, contrast: 1.06 };
}

function renderWeatherEffects(info) {
  const photo = resolveScenePhoto(info);
  const profile = resolveLocationProfile(state.location, info);
  const rainCount = info.scene === "storm" ? 36 : info.scene === "rain" ? 22 : info.scene === "drizzle" ? 12 : 0;
  const snowCount = info.scene === "snow" ? 20 : 0;
  const fogBands = info.scene === "fog" ? 1 : 0;
  const windCount = info.isWindy || info.scene === "storm" || info.stormRisk ? 4 : info.scene === "rain" ? 2 : 0;
  const starCount = 0;
  const showAtmosphere =
    info.scene === "cloudy" ||
    info.scene === "fog" ||
    info.scene === "drizzle" ||
    info.scene === "rain" ||
    info.scene === "storm" ||
    info.stormRisk;

  const stars = Array.from({ length: starCount }, (_, index) => {
    return `
      <span
        class="scene__star"
        style="--top:${5 + (index % 8) * 7}%; --left:${3 + (index * 11) % 94}%; --duration:${2 + (index % 4) * 0.9}s;"
      ></span>
    `;
  }).join("");

  const rain = Array.from({ length: rainCount }, (_, index) => {
    return `
      <span
        class="scene__drop"
        style="--x:${(index / rainCount) * 100}%; --delay:${(index * 0.08).toFixed(2)}s; --duration:${(0.9 + (index % 5) * 0.12).toFixed(2)}s;"
      ></span>
    `;
  }).join("");

  const snow = Array.from({ length: snowCount }, (_, index) => {
    return `
      <span
        class="scene__snowflake"
        style="--x:${(index / snowCount) * 100}%; --size:${0.2 + (index % 4) * 0.08}rem; --delay:${(index * 0.14).toFixed(2)}s; --duration:${(4.4 + (index % 5) * 0.7).toFixed(2)}s;"
      ></span>
    `;
  }).join("");

  const fog = Array.from({ length: fogBands }, (_, index) => {
    const classes = index === 0 ? "scene__fog-band scene__fog-band--one" : "scene__fog-band scene__fog-band--two";
    return `<span class="${classes}" style="--duration:${12 + index * 2.5}s;"></span>`;
  }).join("");

  const wind = Array.from({ length: windCount }, (_, index) => {
    return `
      <span
        class="scene__gust"
        style="--top:${18 + index * 8}%; --duration:${4.4 + index * 0.35}s; --delay:${index * 0.28}s;"
      ></span>
    `;
  }).join("");

  const sceneClasses = [
    "photo-scene",
    info.timeSegment === "noite" ? "is-night" : "is-day",
    info.timeSegment === "manha" ? "is-morning" : "",
    info.timeSegment === "tarde" ? "is-afternoon" : "",
    info.scene === "clear" ? "is-clear" : "",
    info.scene === "cloudy" ? "is-cloudy" : "",
    info.scene === "storm" || info.stormRisk ? "is-storm" : "",
    info.scene === "rain" ? "is-rain" : "",
    info.scene === "drizzle" ? "is-drizzle" : "",
    info.scene === "snow" ? "is-snow" : "",
    info.scene === "fog" ? "is-fog" : "",
    info.isWindy ? "is-windy" : "",
    `profile-${profile}`
  ]
    .filter(Boolean)
    .join(" ");

  refs.weatherEffects.innerHTML = `
    <div class="${sceneClasses}" style="--scene-image:url('${photo.image}'); --scene-fallback:${photo.fallback}; --scene-position:${photo.position}; --scene-brightness:${photo.brightness}; --scene-darkness:${photo.darkness}; --scene-saturation:${photo.saturation}; --scene-contrast:${photo.contrast}; --scene-photo-opacity:${photo.opacity};">
      <div class="photo-scene__image"></div>
      <div class="photo-scene__shade"></div>
      ${stars ? `<div class="photo-scene__stars">${stars.replaceAll("scene__star", "photo-star")}</div>` : ""}
      ${showAtmosphere ? '<div class="photo-scene__atmosphere" aria-hidden="true"></div>' : ""}
      ${fog ? `<div class="photo-scene__fog">${fog.replaceAll("scene__fog-band", "photo-fog-band")}</div>` : ""}
      ${rain ? `<div class="photo-scene__precipitation">${rain.replaceAll("scene__drop", "photo-drop")}</div>` : ""}
      ${snow ? `<div class="photo-scene__snowfall">${snow.replaceAll("scene__snowflake", "photo-snowflake")}</div>` : ""}
      ${wind ? `<div class="photo-scene__wind">${wind.replaceAll("scene__gust", "photo-gust")}</div>` : ""}
      ${info.scene === "storm" || info.stormRisk ? '<div class="photo-scene__flash"><div class="photo-flash"></div></div>' : ""}
    </div>
  `;

  try {
    sessionStorage.setItem("casaclima-scene-html", refs.weatherEffects.innerHTML);
  } catch (error) {
    // Ignora quota ou modo privado restrito.
  }

  refs.body.classList.add("scene-ready");
}

function updateClock() {
  if (!refs.currentClock) {
    return;
  }
  const timezone =
    state.weather?.timezone ||
    state.location.timezone ||
    Intl.DateTimeFormat().resolvedOptions().timeZone;

  const formatter = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: timezone
  });
  refs.currentClock.textContent = formatter.format(new Date());
}

function showToast(message, type = "") {
  if (!refs.toastStack) {
    return;
  }
  const toast = document.createElement("div");
  toast.className = `toast ${type ? `is-${type}` : ""}`.trim();
  toast.textContent = message;
  refs.toastStack.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3200);
}

function loadStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    showToast("Não foi possível salvar algo no navegador.", "warning");
  }
}

function normalizeBudgetState(raw) {
  const base = buildDefaultBudgetState();
  if (!raw || typeof raw !== "object") {
    return base;
  }

  const categories = Array.isArray(raw.categories)
    ? raw.categories.map((item) => normalizeBudgetCategory(item)).filter(Boolean)
    : Object.entries(raw.categories || {})
        .map(([key, item]) => {
          const title = EXPENSE_CATEGORIES.find((category) => category.key === key)?.title || key;
          const value = item?.value || "";
          const note = item?.note || "";
          if (!String(value).trim() && !String(note).trim()) {
            return null;
          }
          return normalizeBudgetCategory({
            id: item?.id || uid(),
            title,
            value,
            note,
            kind: FIXED_CATEGORY_KEYS.includes(key) ? "fixed" : "variable"
          });
        })
        .filter(Boolean);

  const normalizedBills = Array.isArray(raw.bills)
    ? raw.bills.map((bill) => normalizeBill(bill)).filter(Boolean)
    : base.bills;
  const shouldSeedDefaultBills =
    !raw.presetBillsInitialized &&
    (!Array.isArray(raw.bills) || (Array.isArray(raw.bills) && normalizedBills.length === 0));

  return {
    income: raw.income || "",
    savingsGoal: raw.savingsGoal || "",
    notes: raw.notes || "",
    categories,
    extras: Array.isArray(raw.extras) ? raw.extras.map((item) => normalizeExtraExpense(item)).filter(Boolean) : [],
    bills: shouldSeedDefaultBills ? buildDefaultBudgetBills() : normalizedBills,
    presetBillsInitialized: true
  };
}

function buildDefaultBudgetState() {
  return {
    income: "",
    savingsGoal: "",
    notes: "",
    categories: [],
    extras: [],
    bills: buildDefaultBudgetBills(),
    presetBillsInitialized: true
  };
}

function normalizeCategoryKind(value) {
  return value === "fixed" ? "fixed" : "variable";
}

function buildDefaultBudgetBills() {
  return DEFAULT_BUDGET_BILLS.map((bill) => createBill(bill));
}

function normalizeBudgetCategory(item) {
  if (!item || typeof item !== "object") {
    return null;
  }

  return createBudgetCategory(item.kind, item);
}

function createBudgetCategory(kind = "variable", overrides = {}) {
  return {
    id: overrides.id || uid(),
    title: overrides.title || "",
    value: overrides.value || "",
    note: overrides.note || "",
    kind: normalizeCategoryKind(overrides.kind || kind)
  };
}

function normalizeExtraExpense(item) {
  if (!item || typeof item !== "object") {
    return null;
  }

  return {
    id: item.id || uid(),
    title: item.title || "",
    amount: item.amount || "",
    note: item.note || ""
  };
}

function normalizeBill(bill) {
  if (!bill || typeof bill !== "object") {
    return null;
  }

  return createBill(bill);
}

function createExtraExpense() {
  return {
    id: uid(),
    title: "",
    amount: "",
    note: ""
  };
}

function createBill(overrides = {}) {
  return {
    id: overrides.id || uid(),
    title: overrides.title || "",
    dueDay: overrides.dueDay || "",
    amount: overrides.amount || "",
    note: overrides.note || "",
    preset: Boolean(overrides.preset)
  };
}

function normalizeVault(raw) {
  return Array.isArray(raw)
    ? raw
        .filter(Boolean)
        .map((item) => ({
          id: item.id || uid(),
          service: item.service || "",
          username: item.username || "",
          password: item.password || "",
          url: item.url || "",
          notes: item.notes || ""
        }))
    : [];
}

function buildDefaultTasks() {
  return [
    { id: uid(), text: "Revisar contas da semana", done: false },
    { id: uid(), text: "Conferir itens de limpeza e mercado", done: false },
    { id: uid(), text: "Ver se há manutenção pendente em casa", done: false }
  ];
}

function normalizeTasks(raw) {
  return Array.isArray(raw)
    ? raw
        .filter(Boolean)
        .map((item) => ({
          id: item.id || uid(),
          text: item.text || "Tarefa",
          done: Boolean(item.done)
        }))
    : buildDefaultTasks();
}

function buildDefaultContacts() {
  return [
    { id: uid(), name: "Samu", role: "Emergência médica", phone: "192" },
    { id: uid(), name: "Bombeiros", role: "Emergência", phone: "193" }
  ];
}

function normalizeContacts(raw) {
  return Array.isArray(raw)
    ? raw
        .filter(Boolean)
        .map((item) => ({
          id: item.id || uid(),
          name: item.name || "",
          role: item.role || "",
          phone: item.phone || ""
        }))
    : buildDefaultContacts();
}

function createContact() {
  return {
    id: uid(),
    name: "",
    role: "",
    phone: ""
  };
}

function normalizeRadioFavorites(raw) {
  return Array.isArray(raw)
    ? raw
        .filter(Boolean)
        .map((item) => ({
          stationuuid: item.stationuuid,
          name: item.name || "",
          state: item.state || "",
          country: item.country || "Global",
          tags: item.tags || "",
          url: item.url || "",
          url_resolved: item.url_resolved || "",
          homepage: item.homepage || "",
          codec: item.codec || ""
        }))
        .filter((item) => item.stationuuid && isPlayableStation(item))
    : [];
}

function normalizeNewsTopics(raw) {
  const validIds = new Set(NEWS_FEEDS.map((feed) => feed.id));
  const source = Array.isArray(raw) ? raw : [];

  return NEWS_DEFAULT_TOPICS.map((fallback, index) => {
    const candidate = String(source[index] || "").trim();
    return validIds.has(candidate) ? candidate : fallback;
  });
}

function normalizeLocation(raw) {
  const source = raw && typeof raw === "object" ? raw : {};
  const latitude = Number(source.latitude);
  const longitude = Number(source.longitude);
  const hasCoordinates = Number.isFinite(latitude) && Number.isFinite(longitude);
  const locality = cleanLocationPart(source.locality || source.city || source.name || "");
  const stateName = cleanLocationPart(source.state || source.region || source.admin1 || "");
  const countryName = cleanLocationPart(source.country || source.countryName || "");
  const normalized = {
    locality: locality || (hasCoordinates ? "Local atual" : DEFAULT_LOCATION.locality),
    state: stateName || (hasCoordinates ? "" : DEFAULT_LOCATION.state),
    country: countryName || (hasCoordinates ? "" : DEFAULT_LOCATION.country),
    countryCode: String(source.countryCode || source.country_code || (hasCoordinates ? "" : DEFAULT_LOCATION.countryCode)).toUpperCase(),
    latitude: hasCoordinates ? latitude : DEFAULT_LOCATION.latitude,
    longitude: hasCoordinates ? longitude : DEFAULT_LOCATION.longitude,
    timezone: source.timezone || DEFAULT_LOCATION.timezone
  };

  return {
    ...normalized,
    name: buildLocationName(normalized)
  };
}

function cleanLocationPart(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function stripAccents(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function normalizeLooseText(value) {
  return stripAccents(cleanLocationPart(value)).toLowerCase();
}

function buildLocationName(location) {
  return joinLocationParts([location.locality, location.state, location.country]) || "Local";
}

function joinLocationParts(parts) {
  return parts
    .map((part) => cleanLocationPart(part))
    .filter(Boolean)
    .join(", ");
}

function joinUniqueParts(parts) {
  const unique = [];
  parts.forEach((part) => {
    const clean = cleanLocationPart(part);
    if (!clean) {
      return;
    }
    if (!unique.some((entry) => entry.toLowerCase() === clean.toLowerCase())) {
      unique.push(clean);
    }
  });
  return unique.join(", ");
}

async function reverseGeocode(latitude, longitude) {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    localityLanguage: "pt"
  });
  const data = await fetchJsonWithRetry(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?${params.toString()}`,
    {},
    REQUEST_TIMEOUTS.geocode,
    1
  );
  const locality = cleanLocationPart(
    data.locality ||
      data.city ||
      data.localityInfo?.administrative?.[2]?.name ||
      data.localityInfo?.informative?.[0]?.name ||
      ""
  );
  const stateName = cleanLocationPart(
    data.principalSubdivision ||
      data.localityInfo?.administrative?.[1]?.name ||
      ""
  );
  const countryName = cleanLocationPart(data.countryName || "");
  const countryCode = String(data.countryCode || "").toUpperCase();

  return {
    name: buildLocationName({
      locality: locality || "Local atual",
      state: stateName,
      country: countryName
    }),
    locality: locality || "Local atual",
    state: stateName,
    country: countryName,
    countryCode
  };
}

function buildRadioAttempts({ nearbyMode, search, country, stateName, cityName, tag }) {
  const base = {
    limit: "60",
    hidebroken: "true",
    order: "clickcount",
    reverse: "true"
  };
  const searchTerms = expandRadioSearchTerms(search);
  const stateTerms = expandRadioStateTerms(country, stateName);
  const cityTerms = expandRadioSearchTerms(cityName);
  const attempts = [];
  const pushAttempt = (extra) => {
    const tagVariants = expandRadioTagTerms(extra.tagList);
    const variants = tagVariants.length
      ? tagVariants.map((tagValue) => ({
          ...extra,
          tagList: tagValue
        }))
      : [extra];

    variants.forEach((variant) => {
      const params = new URLSearchParams();
      Object.entries({ ...base, ...variant }).forEach(([key, value]) => {
        if (value !== undefined && value !== null && String(value).trim() !== "") {
          params.set(key, String(value));
        }
      });
      const signature = params.toString();
      if (signature && !attempts.includes(signature)) {
        attempts.push(signature);
      }
    });
  };

  if (nearbyMode) {
    const nearbyCountry = country || state.location.countryCode;
    const nearbyStates = expandRadioStateTerms(nearbyCountry, stateName || state.location.state);
    const nearbyCities = expandRadioSearchTerms(cityName || state.location.locality);
    const nearbyNames = searchTerms.length ? searchTerms : nearbyCities;

    nearbyStates.forEach((term) => {
      pushAttempt({
        countrycode: nearbyCountry,
        state: term,
        tagList: tag,
        name: nearbyNames[0] || nearbyCities[0] || ""
      });
      pushAttempt({
        countrycode: nearbyCountry,
        state: term
      });
    });
    nearbyCities.forEach((term) => {
      pushAttempt({
        countrycode: nearbyCountry,
        state: nearbyStates[0] || "",
        name: term,
        tagList: tag
      });
      pushAttempt({
        countrycode: nearbyCountry,
        name: term
      });
    });
    pushAttempt({
      countrycode: nearbyCountry,
      state: nearbyStates[0] || "",
      tagList: tag
    });
    pushAttempt({
      countrycode: nearbyCountry,
      state: nearbyStates[0] || ""
    });
    return attempts;
  }

  searchTerms.forEach((term) => {
    pushAttempt({
      name: term,
      countrycode: country,
      state: stateTerms[0] || "",
      tagList: tag
    });
    pushAttempt({
      name: term,
      countrycode: country,
      state: stateTerms[0] || ""
    });
    pushAttempt({
      name: term,
      tagList: tag
    });
  });

  cityTerms.forEach((term) => {
    pushAttempt({
      name: term,
      countrycode: country,
      state: stateTerms[0] || "",
      tagList: tag
    });
    pushAttempt({
      name: term,
      countrycode: country,
      state: stateTerms[0] || ""
    });
    pushAttempt({
      name: term,
      countrycode: country
    });
  });

  stateTerms.forEach((term) => {
    pushAttempt({
      countrycode: country,
      state: term,
      tagList: tag
    });
    pushAttempt({
      countrycode: country,
      state: term
    });
  });

  pushAttempt({
    countrycode: country,
    tagList: tag
  });
  pushAttempt({
    countrycode: country
  });
  pushAttempt({
    tagList: tag
  });

  return attempts;
}

async function fetchStations(queryString) {
  for (const endpoint of RADIO_BROWSER_ENDPOINTS) {
    try {
      return await fetchJsonWithRetry(
        `${endpoint}/json/stations/search?${queryString}`,
        {},
        REQUEST_TIMEOUTS.radio,
        0
      );
    } catch (error) {
      continue;
    }
  }

  throw new Error("radio_fetch");
}

function prepareRadioStations(stations) {
  const mapped = Array.isArray(stations)
    ? stations
        .filter(isPlayableStation)
        .sort((first, second) => {
          return (
            Number(second.clickcount || 0) - Number(first.clickcount || 0) ||
            Number(second.votes || 0) - Number(first.votes || 0)
          );
        })
        .map((station) => ({
          ...station,
          name: cleanStationName(station.name),
          state: station.state || "",
          country: station.country || "Global",
          url: normalizeStreamUrl(station.url),
          url_resolved: normalizeStreamUrl(station.url_resolved || station.url),
          codec: station.codec || ""
        }))
    : [];

  return dedupeStations(mapped);
}

function dedupeStations(stations) {
  const seen = new Set();
  return stations.filter((station) => {
    const key = station.stationuuid || station.url_resolved || station.url;
    if (!key || seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function isPlayableStation(station) {
  const url = normalizeStreamUrl(station.url_resolved || station.url);
  const codec = String(station.codec || "").toLowerCase();
  if (!station?.name || !url) {
    return false;
  }
  if (station.lastcheckok === 0 || station.lastcheckok === "0") {
    return false;
  }
  if (!url.startsWith("https://")) {
    return false;
  }
  if (/\.(pls|m3u)(\?|#|$)/i.test(url) && !/\.m3u8(\?|#|$)/i.test(url)) {
    return false;
  }
  if (codec && !RADIO_ALLOWED_CODECS.some((allowed) => codec.includes(allowed))) {
    return false;
  }
  return true;
}

function normalizeStreamUrl(url) {
  const text = String(url || "").trim();
  if (!text) {
    return "";
  }
  if (text.startsWith("//")) {
    return `https:${text}`;
  }
  return text;
}

function buildRadioStatusLabel(total, nearbyMode, filters = {}) {
  if (!nearbyMode) {
    const place = joinLocationParts([filters.cityName, filters.stateName, filters.country]);
    return place ? `${total} rádio(s) em ${place}` : `${total} rádio(s) encontradas`;
  }
  const place = joinLocationParts([state.location.locality, state.location.state, state.location.country]);
  return place ? `${total} rádio(s) perto de ${place}` : `${total} rádio(s) próximas encontradas`;
}

function expandRadioSearchTerms(value) {
  const direct = cleanLocationPart(value);
  if (!direct) {
    return [];
  }

  return Array.from(
    new Set(
      [direct, stripAccents(direct)]
        .map((entry) => cleanLocationPart(entry))
        .filter(Boolean)
    )
  );
}

function expandRadioTagTerms(value) {
  const tagText = cleanLocationPart(value);
  if (!tagText) {
    return [];
  }

  return Array.from(
    new Set(
      tagText
        .split(",")
        .map((entry) => cleanLocationPart(entry))
        .filter((entry) => entry.length >= 2)
    )
  );
}

function expandRadioStateTerms(country, stateName) {
  const terms = expandRadioSearchTerms(stateName);
  if (country !== "BR" || !terms.length) {
    return terms;
  }

  const match = BRAZIL_STATE_FALLBACKS.find((entry) => {
    return normalizeLooseText(entry.name) === normalizeLooseText(stateName) || entry.code === stateName;
  });

  if (!match) {
    return terms;
  }

  return Array.from(
    new Set(
      [...terms, match.code]
        .map((entry) => cleanLocationPart(entry))
        .filter(Boolean)
    )
  );
}

function formatStationRegion(station) {
  return joinUniqueParts([station.state, station.country]) || "Global";
}

function parseMoney(value) {
  if (value === null || value === undefined) {
    return 0;
  }

  const text = String(value).trim().replace(/[^\d,.-]/g, "");
  if (!text) {
    return 0;
  }

  const normalized =
    text.includes(",") && text.includes(".")
      ? text.replace(/\./g, "").replace(",", ".")
      : text.replace(",", ".");
  const number = Number(normalized);
  return Number.isFinite(number) ? number : 0;
}

function formatMoney(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(Number(value || 0));
}

function uid() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function describeWeather(code) {
  const currentCode = Number(code);
  if (currentCode === 0) {
    return { label: "Céu limpo", scene: "clear" };
  }
  if ([1, 2, 3].includes(currentCode)) {
    return { label: "Nuvens dispersas", scene: "cloudy" };
  }
  if ([45, 48].includes(currentCode)) {
    return { label: "Nevoeiro", scene: "fog" };
  }
  if ([51, 53, 55, 56, 57].includes(currentCode)) {
    return { label: "Garoa", scene: "drizzle" };
  }
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(currentCode)) {
    return { label: "Chuva", scene: "rain" };
  }
  if ([71, 73, 75, 77, 85, 86].includes(currentCode)) {
    return { label: "Neve", scene: "snow" };
  }
  if ([95, 96, 99].includes(currentCode)) {
    return { label: "Tempestade", scene: "storm" };
  }
  return { label: "Tempo variável", scene: "cloudy" };
}

function getTimeSegment(timeString) {
  const hour = Number(String(timeString || "").split("T")[1]?.split(":")[0] || 12);
  if (hour >= 5 && hour < 12) {
    return "manha";
  }
  if (hour >= 12 && hour < 18) {
    return "tarde";
  }
  return "noite";
}

function getTemperatureMood(temperature) {
  if (temperature >= 30) {
    return { type: "quente", label: "bem quente" };
  }
  if (temperature <= 17) {
    return { type: "frio", label: "mais frio" };
  }
  return { type: "ameno", label: "equilibrada" };
}

function getSeason(timeString, latitude) {
  const [year, month, day] = String(timeString || "").split("T")[0].split("-").map(Number);
  if (!year || !month || !day) {
    return "Estação indefinida";
  }

  const numericDate = month * 100 + day;
  let northSeason = "Inverno";
  if (numericDate >= 321 && numericDate < 621) {
    northSeason = "Primavera";
  } else if (numericDate >= 621 && numericDate < 923) {
    northSeason = "Verão";
  } else if (numericDate >= 923 && numericDate < 1221) {
    northSeason = "Outono";
  }

  if (latitude >= 0) {
    return northSeason;
  }

  return {
    Primavera: "Outono",
    Verão: "Inverno",
    Outono: "Primavera",
    Inverno: "Verão"
  }[northSeason];
}

function getMoonData(timeString) {
  const date = new Date(`${String(timeString || "").split("T")[0]}T12:00:00Z`);
  const lunarPeriod = 2551443;
  const reference = new Date("2000-01-06T18:14:00Z").getTime();
  const ageSeconds = ((date.getTime() - reference) / 1000) % lunarPeriod;
  const phase = ageSeconds / lunarPeriod;

  if (phase < 0.03 || phase >= 0.97) {
    return { label: "Lua nova" };
  }
  if (phase < 0.22) {
    return { label: "Lua crescente" };
  }
  if (phase < 0.28) {
    return { label: "Quarto crescente" };
  }
  if (phase < 0.47) {
    return { label: "Gibosa crescente" };
  }
  if (phase < 0.53) {
    return { label: "Lua cheia" };
  }
  if (phase < 0.72) {
    return { label: "Gibosa minguante" };
  }
  if (phase < 0.78) {
    return { label: "Quarto minguante" };
  }
  return { label: "Lua minguante" };
}

function getWeatherEmoji(scene, timeSegment) {
  const map = {
    clear: timeSegment === "noite" ? "\u{1F319}" : "\u{2600}\u{FE0F}",
    cloudy: "\u{2601}\u{FE0F}",
    fog: "\u{1F32B}\u{FE0F}",
    drizzle: "\u{1F326}\u{FE0F}",
    rain: "\u{1F327}\u{FE0F}",
    snow: "\u{2744}\u{FE0F}",
    storm: "\u{26C8}\u{FE0F}"
  };
  return map[scene] || "\u{1F324}\u{FE0F}";
}

function getTemperatureEmoji(type) {
  if (type === "quente") {
    return "\u{1F525}";
  }
  if (type === "frio") {
    return "\u{1F9CA}";
  }
  return "\u{1F321}\u{FE0F}";
}

function getSeasonEmoji(season) {
  return {
    Primavera: "\u{1F338}",
    Verão: "\u{2600}\u{FE0F}",
    Outono: "\u{1F342}",
    Inverno: "\u{2744}\u{FE0F}"
  }[season] || "\u{1F30D}";
}

function getMoonEmoji(label) {
  const normalized = normalizeLooseText(label);
  if (normalized.includes("nova")) {
    return "\u{1F311}";
  }
  if (normalized.includes("quarto crescente")) {
    return "\u{1F313}";
  }
  if (normalized.includes("crescente")) {
    return "\u{1F312}";
  }
  if (normalized.includes("cheia")) {
    return "\u{1F315}";
  }
  if (normalized.includes("quarto minguante")) {
    return "\u{1F317}";
  }
  if (normalized.includes("minguante")) {
    return "\u{1F316}";
  }
  return "\u{1F319}";
}

function getWindDirectionLabel(degrees) {
  const directions = ["N", "NE", "L", "SE", "S", "SO", "O", "NO"];
  const index = Math.round((((degrees % 360) + 360) % 360) / 45) % 8;
  return directions[index];
}

function cleanStationName(name) {
  return String(name || "")
    .replace(/\s+/g, " ")
    .trim();
}

function formatStationTags(tags) {
  if (!tags) {
    return "Sem tema";
  }
  return tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, 3)
    .join(", ") || "Sem tema";
}

function formatShortDate(dateString) {
  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "short",
    day: "2-digit",
    month: "short"
  }).format(new Date(`${dateString}T12:00:00`));
}

function formatLocationLabel(location) {
  if (location && typeof location === "object") {
    return joinLocationParts([location.locality || location.name, location.state, location.country]) || "Local";
  }

  return joinLocationParts(String(location || "").split(",")) || "Local";
}

function formatNewsDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Atualização recente";
  }
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function formatTimeShort(date) {
  return new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function formatBillDate(date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit"
  }).format(date);
}

function buildSafeDate(year, month, day) {
  const candidate = new Date(year, month + 1, 0);
  const lastDay = candidate.getDate();
  return new Date(year, month, Math.min(day, lastDay));
}

function stripTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function stripHtml(value) {
  return String(value || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function summarizeText(text, length) {
  if (text.length <= length) {
    return text;
  }
  return `${text.slice(0, length).trim()}...`;
}

function decodeHtml(value) {
  const parser = new DOMParser();
  return parser.parseFromString(value, "text/html").documentElement.textContent || "";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function capitalize(value) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : "";
}

function debounce(fn, wait) {
  let timeout;
  return (...args) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => fn(...args), wait);
  };
}

async function copyToClipboard(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
