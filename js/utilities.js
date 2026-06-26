function handleTaskSubmit(event) {
  event.preventDefault();
  const text = refs.taskInput.value.trim();
  if (!text) {
    return;
  }

  state.tasks.unshift({
    id: uid(),
    text,
    done: false
  });
  refs.taskInput.value = "";
  persistTasks();
  renderTasks();
}

function renderTasks() {
  if (!state.tasks.length) {
    if (refs.taskList) {
      refs.taskList.innerHTML = '<p class="hint">Nenhuma tarefa cadastrada ainda.</p>';
    }
    setNodeText(refs.summaryTasks, "0 pendente(s)");
    return;
  }

  if (!refs.taskList) {
    return;
  }

  refs.taskList.innerHTML = state.tasks
    .map(
      (task) => `
        <article class="task-item ${task.done ? "is-done" : ""}" data-id="${task.id}">
          <input type="checkbox" data-action="toggle-task" ${task.done ? "checked" : ""}>
          <div>
            <strong>${escapeHtml(task.text)}</strong>
            <div class="task-meta">${task.done ? "Concluída" : "Pendente"}</div>
          </div>
          <button class="icon-button" type="button" data-action="remove-task" aria-label="Remover tarefa">x</button>
        </article>
      `
    )
    .join("");

  setNodeText(refs.summaryTasks, `${countPendingTasks()} pendente(s)`);
}

function handleTaskListChange(event) {
  const item = event.target.closest("[data-id]");
  if (!item) {
    return;
  }

  const task = state.tasks.find((entry) => entry.id === item.dataset.id);
  if (!task) {
    return;
  }

  task.done = event.target.checked;
  persistTasks();
  renderTasks();
}

function handleTaskListClick(event) {
  const button = event.target.closest('[data-action="remove-task"]');
  if (!button) {
    return;
  }

  const item = button.closest("[data-id]");
  state.tasks = state.tasks.filter((task) => task.id !== item.dataset.id);
  persistTasks();
  renderTasks();
}

function countPendingTasks() {
  return state.tasks.filter((task) => !task.done).length;
}

function persistTasks() {
  saveStorage(STORAGE_KEYS.tasks, state.tasks);
  if (typeof renderBudgetSummary === "function") {
    renderBudgetSummary();
  }
}

function renderContacts() {
  if (!refs.contactList) {
    return;
  }

  if (!state.contacts.length) {
    refs.contactList.innerHTML = '<p class="hint">Nenhum contato cadastrado.</p>';
    return;
  }

  refs.contactList.innerHTML = state.contacts
    .map(
      (contact) => `
        <article class="contact-row" data-id="${contact.id}">
          <div class="contact-row__fields">
            <label class="field">
              <span>Nome</span>
              <input type="text" data-field="name" value="${escapeAttribute(contact.name)}" placeholder="Nome">
            </label>
            <label class="field">
              <span>Função</span>
              <input type="text" data-field="role" value="${escapeAttribute(contact.role)}" placeholder="Função ou observação">
            </label>
            <label class="field field--span">
              <span>Telefone</span>
              <input type="tel" data-field="phone" value="${escapeAttribute(contact.phone)}" placeholder="Telefone">
            </label>
          </div>
          <div class="contact-row__footer">
            <div class="contact-actions">
              <button class="button ghost slim" type="button" data-action="call-contact">Ligar</button>
              <button class="button ghost slim" type="button" data-action="copy-contact-phone">Copiar número</button>
            </div>
            <button class="icon-button contact-remove" type="button" data-action="remove-contact" aria-label="Remover contato">x</button>
          </div>
        </article>
      `
    )
    .join("");
}

function handleContactInput(event) {
  const row = event.target.closest("[data-id]");
  if (!row) {
    return;
  }

  const contact = state.contacts.find((entry) => entry.id === row.dataset.id);
  if (!contact) {
    return;
  }

  contact[event.target.dataset.field] = event.target.value;
  persistContacts();
}

function handleContactClick(event) {
  const row = event.target.closest("[data-id]");
  const phoneInput = row?.querySelector('[data-field="phone"]');
  const phoneValue = phoneInput?.value?.trim() || "";

  const callButton = event.target.closest('[data-action="call-contact"]');
  if (callButton) {
    if (!phoneValue) {
      showToast("Digite um telefone para ligar.", "warning");
      return;
    }
    window.location.href = `tel:${phoneValue.replace(/[^\d+]/g, "")}`;
    return;
  }

  const copyButton = event.target.closest('[data-action="copy-contact-phone"]');
  if (copyButton) {
    if (!phoneValue) {
      showToast("Digite um telefone para copiar.", "warning");
      return;
    }
    navigator.clipboard?.writeText(phoneValue);
    showToast("Número copiado.", "success");
    return;
  }

  const button = event.target.closest('[data-action="remove-contact"]');
  if (!button) {
    return;
  }

  state.contacts = state.contacts.filter((contact) => contact.id !== row.dataset.id);
  persistContacts();
  renderContacts();
}

function persistContacts() {
  saveStorage(STORAGE_KEYS.contacts, state.contacts);
}

function renderHomeTips(tips) {
  if (!refs.homeTipsList) {
    return;
  }
  if (!tips.length) {
    refs.homeTipsList.innerHTML = `
      <li>Adicione contas com vencimento para lembrar os próximos pagamentos.</li>
      <li>Use o checklist para compras e pequenas tarefas da casa.</li>
      <li>Mantenha contatos de emergência sempre atualizados.</li>
    `;
    return;
  }

  refs.homeTipsList.innerHTML = tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("");
}

function buildHomeTips(weatherSeed) {
  const summary =
    typeof computeBudgetSummary === "function"
      ? computeBudgetSummary()
      : {
          balance: 0,
          nextBill: null
        };
  const tips = [];

  if (weatherSeed) {
    if (weatherSeed.stormRisk) {
      tips.push("Há risco de tempestade. Vale fechar janelas, recolher itens do quintal e carregar celulares.");
    } else if (weatherSeed.scene === "rain" || weatherSeed.scene === "drizzle") {
      tips.push("Dia de chuva: confira roupas no varal, tapetes de entrada e guarda-chuvas perto da porta.");
    } else if (weatherSeed.scene === "fog") {
      tips.push("Há neblina no momento. Se for sair, redobre a atenção no trajeto e mantenha luzes externas visíveis.");
    } else if (weatherSeed.scene === "snow") {
      tips.push("Clima de neve: reforce aquecimento, roupas pesadas e o cuidado com pisos escorregadios.");
    } else if (weatherSeed.temperatureMood?.type === "quente") {
      tips.push("Clima quente: priorize hidratação, ventilação dos quartos e uso consciente de energia.");
    } else if (weatherSeed.temperatureMood?.type === "frio") {
      tips.push("Tempo frio: revise roupa de cama, veja vedações de janelas e mantenha ambientes arejados.");
    }

    if (weatherSeed.windSpeed >= 28) {
      tips.push("Os ventos estão fortes. Fixe objetos leves e cheque portas, toldos ou janelas externas.");
    }

    if (weatherSeed.season) {
      tips.push(`Estação atual: ${weatherSeed.season}. Ajuste limpeza, roupas e manutenção pensando nessa fase do ano.`);
    }
  }

  if (summary.balance < 0) {
    tips.push("O saldo do mês está negativo. Revise extras e assinaturas antes de assumir novas despesas.");
  } else if (summary.balance > 0) {
    tips.push(`Há ${formatMoney(summary.balance)} livres no mês. Separar parte disso para reserva evita aperto futuro.`);
  }

  if (summary.nextBill) {
    tips.push(`${summary.nextBill.title || "Uma conta"} vence ${summary.nextBill.label}. Deixe o pagamento encaminhado.`);
  }

  const pendingTasks = countPendingTasks();
  if (pendingTasks > 0) {
    tips.push(`Você ainda tem ${pendingTasks} tarefa(s) pendente(s) no checklist da casa.`);
  }

  return tips.slice(0, 4);
}

const UTILITY_PLACE_FAVORITES_KEY = "casaclima-place-favorites";
const UTILITY_PLACE_CACHE_KEY = "casaclima-place-cache";
const UTILITY_PLACE_CACHE_TTL_MS = 20 * 60 * 1000;
const UTILITY_PLACE_PROXY_PATH = "/.netlify/functions/utility-places";
const UTILITY_PLACE_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter"
];
const UTILITY_PLACE_CATEGORIES = {
  mechanic: {
    label: "Mecânicos",
    tags: [
      { key: "shop", value: "car_repair" },
      { key: "amenity", value: "car_repair" },
      { key: "shop", value: "car_parts" },
      { key: "shop", value: "tyres" }
    ]
  },
  electrician: {
    label: "Eletricistas",
    tags: [
      { key: "craft", value: "electrician" },
      { key: "shop", value: "electrical" }
    ]
  },
  hardware: {
    label: "Casa de ferragens",
    tags: [
      { key: "shop", value: "hardware" },
      { key: "shop", value: "doityourself" }
    ]
  },
  market: {
    label: "Mercados",
    tags: [
      { key: "shop", value: "supermarket" },
      { key: "shop", value: "convenience" },
      { key: "shop", value: "greengrocer" },
      { key: "amenity", value: "marketplace" }
    ]
  },
  snack: {
    label: "Lanchonetes",
    tags: [
      { key: "amenity", value: "fast_food" },
      { key: "amenity", value: "cafe" },
      { key: "amenity", value: "restaurant" },
      { key: "shop", value: "bakery" }
    ]
  },
  hotel: {
    label: "Hotéis",
    tags: [
      { key: "tourism", value: "hotel" },
      { key: "tourism", value: "motel" },
      { key: "tourism", value: "guest_house" },
      { key: "tourism", value: "hostel" }
    ]
  },
  pharmacy: {
    label: "Farmácias",
    tags: [
      { key: "amenity", value: "pharmacy" },
      { key: "shop", value: "chemist" }
    ]
  },
  fuel: {
    label: "Postos",
    tags: [{ key: "amenity", value: "fuel" }]
  },
  gas: {
    label: "Gás",
    tags: [
      { key: "shop", value: "gas" },
      { key: "fuel:lpg", value: "yes", requires: { amenity: "fuel" } }
    ]
  },
  hospital: {
    label: "Saúde",
    tags: [
      { key: "amenity", value: "hospital" },
      { key: "amenity", value: "clinic" },
      { key: "amenity", value: "doctors" }
    ]
  },
  bank: {
    label: "Bancos",
    tags: [
      { key: "amenity", value: "bank" },
      { key: "amenity", value: "atm" }
    ]
  },
  plumber: {
    label: "Encanadores",
    tags: [{ key: "craft", value: "plumber" }]
  },
  bakery: {
    label: "Padarias",
    tags: [{ key: "shop", value: "bakery" }]
  },
  pet: {
    label: "Pet shops",
    tags: [{ key: "shop", value: "pet" }]
  },
  laundry: {
    label: "Lavanderias",
    tags: [
      { key: "shop", value: "laundry" },
      { key: "shop", value: "dry_cleaning" }
    ]
  },
  school: {
    label: "Escolas",
    tags: [
      { key: "amenity", value: "school" },
      { key: "amenity", value: "kindergarten" }
    ]
  },
  police: {
    label: "Polícia",
    tags: [{ key: "amenity", value: "police" }]
  },
  transport: {
    label: "Transporte",
    tags: [
      { key: "amenity", value: "bus_station" },
      { key: "amenity", value: "taxi" },
      { key: "public_transport", value: "station" }
    ]
  },
  parking: {
    label: "Estacionamentos",
    tags: [{ key: "amenity", value: "parking" }]
  },
  dentist: {
    label: "Dentistas",
    tags: [{ key: "amenity", value: "dentist" }]
  },
  gym: {
    label: "Academias",
    tags: [{ key: "leisure", value: "fitness_centre" }]
  }
};

const utilityPlaceRefs = {
  form: document.getElementById("utilityPlaceSearchForm"),
  categorySelect: document.getElementById("utilityPlaceCategorySelect"),
  keywordInput: document.getElementById("utilityPlaceKeywordInput"),
  radiusSelect: document.getElementById("utilityPlaceRadiusSelect"),
  status: document.getElementById("utilityPlaceStatus"),
  loading: document.getElementById("utilityPlaceLoading"),
  results: document.getElementById("utilityPlaceResults"),
  favorites: document.getElementById("utilityPlaceFavorites")
};

const utilityPlaceState = {
  results: [],
  rawResults: [],
  favorites: normalizeUtilityPlaceFavorites(loadStorage(UTILITY_PLACE_FAVORITES_KEY, []))
    .slice(0, 24),
  cache: loadStorage(UTILITY_PLACE_CACHE_KEY, {}),
  lastFetchKey: "",
  lastLocationLabel: "",
  lastCategoryLabel: "",
  requestId: 0
};

function initUtilityPlaces() {
  if (!utilityPlaceRefs.form) {
    return;
  }

  buildUtilityPlaceChips();

  const debouncedUtilityPlaceKeywordFilter = debounce(() => {
    applyUtilityPlaceResults();
  }, 120);

  utilityPlaceRefs.form.addEventListener("submit", handleUtilityPlaceSearchSubmit);
  utilityPlaceRefs.categorySelect?.addEventListener("change", () => {
    syncUtilityPlaceChips();
    searchUtilityPlaces({ force: true });
  });
  utilityPlaceRefs.radiusSelect?.addEventListener("change", () => {
    searchUtilityPlaces({ force: true });
  });
  utilityPlaceRefs.keywordInput?.addEventListener("input", () => {
    debouncedUtilityPlaceKeywordFilter();
  });
  utilityPlaceRefs.results?.addEventListener("click", handleUtilityPlaceActions);
  utilityPlaceRefs.favorites?.addEventListener("click", handleUtilityPlaceActions);

  renderUtilityPlaceFavorites();
  renderUtilityPlaceIdle();
  searchUtilityPlaces({ location: state.location });
}

function buildUtilityPlaceChips() {
  const container = document.getElementById("utilityPlaceChips");
  if (!container || !utilityPlaceRefs.categorySelect) {
    return;
  }

  container.innerHTML = Object.entries(UTILITY_PLACE_CATEGORIES)
    .map(
      ([key, category]) =>
        `<button type="button" class="place-chip" data-category="${key}">${escapeHtml(category.label)}</button>`
    )
    .join("");

  container.addEventListener("click", (event) => {
    const chip = event.target.closest(".place-chip");
    if (!chip) {
      return;
    }
    utilityPlaceRefs.categorySelect.value = chip.dataset.category;
    syncUtilityPlaceChips();
    searchUtilityPlaces({ force: true });
  });

  syncUtilityPlaceChips();
}

function syncUtilityPlaceChips() {
  const active = utilityPlaceRefs.categorySelect?.value;
  document.querySelectorAll(".place-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.category === active);
  });
}

function renderUtilityPlaceIdle() {
  if (!utilityPlaceRefs.status || !utilityPlaceRefs.results) {
    return;
  }

  setUtilityPlaceLoading(false);
  utilityPlaceRefs.status.textContent = `Região: ${formatLocationLabel(state.location)}`;
  utilityPlaceRefs.results.innerHTML = '<p class="hint">Carregando resultados da sua região...</p>';
}

function setUtilityPlaceLoading(isLoading) {
  if (!utilityPlaceRefs.loading) {
    return;
  }

  utilityPlaceRefs.loading.hidden = !isLoading;
  utilityPlaceRefs.loading.classList.toggle("is-active", isLoading);
  utilityPlaceRefs.loading.setAttribute("aria-hidden", String(!isLoading));
}

function normalizeUtilityPlaceFavorites(raw) {
  return Array.isArray(raw)
    ? raw
        .filter(Boolean)
        .map((item) => ({
          id: item.id || uid(),
          name: item.name || "",
          category: item.category || "",
          categoryLabel: item.categoryLabel || "",
          address: item.address || "",
          phone: item.phone || "",
          website: item.website || "",
          lat: Number(item.lat || 0),
          lon: Number(item.lon || 0),
          distanceKm: Number(item.distanceKm || 0),
          mapsUrl: item.mapsUrl || ""
        }))
        .filter((item) => item.name)
    : [];
}

async function handleUtilityPlaceSearchSubmit(event) {
  event.preventDefault();
  await searchUtilityPlaces();
}

async function searchUtilityPlaces(options = {}) {
  if (!utilityPlaceRefs.status || !utilityPlaceRefs.results || !utilityPlaceRefs.categorySelect) {
    return;
  }

  const requestId = ++utilityPlaceState.requestId;
  const categoryKey = utilityPlaceRefs.categorySelect.value;
  const radius = Number(utilityPlaceRefs.radiusSelect?.value || 8000);
  const category = UTILITY_PLACE_CATEGORIES[categoryKey];
  if (!category) {
    return;
  }

  try {
    const location = options.location || state.location;
    const locationLabel = formatLocationLabel(location);
    const fetchKey = buildUtilityPlaceCacheKey(location, categoryKey, radius);

    utilityPlaceState.lastLocationLabel = locationLabel;
    utilityPlaceState.lastCategoryLabel = category.label;

    if (!options.force && utilityPlaceState.lastFetchKey === fetchKey && utilityPlaceState.rawResults.length) {
      setUtilityPlaceLoading(false);
      applyUtilityPlaceResults();
      return;
    }

    const cached = readUtilityPlaceCache(fetchKey);
    if (!options.force && cached?.length) {
      utilityPlaceState.lastFetchKey = fetchKey;
      utilityPlaceState.rawResults = cached;
      setUtilityPlaceLoading(false);
      applyUtilityPlaceResults();
      return;
    }

    setUtilityPlaceLoading(true);
    utilityPlaceRefs.status.textContent = `Buscando ${category.label.toLowerCase()} por perto...`;
    utilityPlaceRefs.results.innerHTML = '<p class="hint">Consultando serviços e lugares próximos...</p>';

    const places = await fetchUtilityPlaces(location, categoryKey, radius);
    if (requestId !== utilityPlaceState.requestId) {
      return;
    }

    utilityPlaceState.lastFetchKey = fetchKey;
    utilityPlaceState.rawResults = places;
    saveUtilityPlaceCache(fetchKey, places);
    applyUtilityPlaceResults();
  } catch (error) {
    if (requestId !== utilityPlaceState.requestId) {
      return;
    }
    setUtilityPlaceLoading(false);
    utilityPlaceRefs.status.textContent = "Não foi possível buscar serviços e lugares agora.";
    utilityPlaceRefs.results.innerHTML = '<p class="hint">Tente novamente em instantes.</p>';
  }
}

function buildUtilityPlaceCacheKey(location, categoryKey, radius) {
  return [
    categoryKey,
    Number(location.latitude).toFixed(2),
    Number(location.longitude).toFixed(2),
    Math.round(radius)
  ].join(":");
}

function readUtilityPlaceCache(cacheKey) {
  const entry = utilityPlaceState.cache?.[cacheKey];
  if (!entry?.results || !Array.isArray(entry.results)) {
    return null;
  }

  const savedAt = Number(entry.savedAt || 0);
  if (!savedAt || Date.now() - savedAt > UTILITY_PLACE_CACHE_TTL_MS) {
    return null;
  }

  return entry.results;
}

function saveUtilityPlaceCache(cacheKey, results) {
  utilityPlaceState.cache[cacheKey] = {
    savedAt: Date.now(),
    results
  };

  utilityPlaceState.cache = Object.fromEntries(
    Object.entries(utilityPlaceState.cache)
      .sort((first, second) => Number(second[1]?.savedAt || 0) - Number(first[1]?.savedAt || 0))
      .slice(0, 36)
  );
  saveStorage(UTILITY_PLACE_CACHE_KEY, utilityPlaceState.cache);
}

function applyUtilityPlaceResults() {
  setUtilityPlaceLoading(false);

  const keyword = normalizeLooseText(utilityPlaceRefs.keywordInput?.value || "");
  const filtered = keyword
    ? utilityPlaceState.rawResults.filter((place) => {
        const haystack = normalizeLooseText([place.name, place.address, place.categoryLabel].join(" "));
        return haystack.includes(keyword);
      })
    : utilityPlaceState.rawResults.slice();

  utilityPlaceState.results = filtered.slice(0, 18);
  renderUtilityPlaceResults();

  if (!utilityPlaceState.results.length) {
    utilityPlaceRefs.status.textContent = keyword
      ? `Nenhum resultado com esse termo em ${utilityPlaceState.lastLocationLabel || formatLocationLabel(state.location)}.`
      : `Nenhum resultado encontrado para ${utilityPlaceState.lastCategoryLabel.toLowerCase()} em ${utilityPlaceState.lastLocationLabel || formatLocationLabel(state.location)}.`;
    return;
  }

  utilityPlaceRefs.status.textContent = `${utilityPlaceState.results.length} resultado(s) para ${utilityPlaceState.lastCategoryLabel.toLowerCase()} em ${utilityPlaceState.lastLocationLabel || formatLocationLabel(state.location)}.`;
}

async function refreshUtilityPlacesForCurrentLocation(options = {}) {
  if (!utilityPlaceRefs.form) {
    return;
  }
  await searchUtilityPlaces({ location: state.location, force: Boolean(options.force) });
}

async function fetchUtilityPlaces(location, categoryKey, radius) {
  const radiusAttempts = Array.from(new Set([radius, Math.min(radius * 2, 16000), Math.min(radius * 3, 28000)]));
  let hadSuccessfulResponse = false;

  for (const attemptRadius of radiusAttempts) {
    const fulfilled = await fetchUtilityPlacePayloads(location, categoryKey, attemptRadius);

    if (fulfilled.length) {
      hadSuccessfulResponse = true;
      const richest = fulfilled.sort((first, second) => second.elements.length - first.elements.length)[0];
      const places = dedupeUtilityPlaces(
        richest.elements
          .map((element) => normalizeUtilityPlaceResult(element, location, categoryKey))
          .filter(Boolean)
      ).sort((first, second) => first.distanceKm - second.distanceKm);

      if (places.length) {
        return places;
      }
    }
  }

  if (!hadSuccessfulResponse) {
    throw new Error("places_fetch_failed");
  }

  return [];
}

async function fetchUtilityPlacePayloads(location, categoryKey, radius) {
  try {
    const proxyData = await fetchUtilityPlacesViaProxy(location, categoryKey, radius);
    if (Array.isArray(proxyData?.elements)) {
      return [proxyData];
    }
  } catch (error) {
    // Segue para fallback direto quando a função do Netlify não está disponível.
  }

  const query = buildUtilityPlaceQuery(location, categoryKey, radius);
  const responses = await Promise.allSettled(
    UTILITY_PLACE_ENDPOINTS.map((endpoint) =>
      fetchJsonWithTimeout(
        endpoint,
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=UTF-8"
          },
          body: query
        },
        REQUEST_TIMEOUTS.utility
      )
    )
  );

  return responses
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value)
    .filter((payload) => Array.isArray(payload.elements));
}

async function fetchUtilityPlacesViaProxy(location, categoryKey, radius) {
  const params = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    category: categoryKey,
    radius: String(radius)
  });

  return fetchJsonWithTimeout(`${UTILITY_PLACE_PROXY_PATH}?${params.toString()}`, {}, REQUEST_TIMEOUTS.utility + 5000);
}

function buildUtilityPlaceQuery(location, categoryKey, radius) {
  const category = UTILITY_PLACE_CATEGORIES[categoryKey];
  const around = `around:${radius},${Number(location.latitude)},${Number(location.longitude)}`;
  const blocks = category.tags.flatMap((tag) => {
    const filter =
      tag.requires && typeof tag.requires === "object"
        ? Object.entries(tag.requires)
            .map(([reqKey, reqValue]) => `["${reqKey}"="${reqValue}"]`)
            .join("")
        : "";
    return ["node", "way", "relation"].map(
      (type) => `${type}(${around})${filter}["${tag.key}"="${tag.value}"];`
    );
  });

  return `[out:json][timeout:18];(${blocks.join("")});out center tags 40;`;
}

function normalizeUtilityPlaceResult(element, location, categoryKey) {
  const tags = element.tags || {};
  const coords = element.center || (Number.isFinite(element.lat) && Number.isFinite(element.lon) ? element : null);
  if (!coords) {
    return null;
  }

  const lat = Number(coords.lat);
  const lon = Number(coords.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return null;
  }

  const name = cleanLocationPart(tags.name || tags.brand || tags.operator || UTILITY_PLACE_CATEGORIES[categoryKey].label);
  const address = buildUtilityPlaceAddress(tags);
  const phone = cleanLocationPart(tags["contact:phone"] || tags.phone || tags["contact:mobile"] || "");
  const website = normalizeUtilityPlaceWebsite(tags["contact:website"] || tags.website || tags.url || "");
  const distanceKm = computeUtilityDistanceKm(location.latitude, location.longitude, lat, lon);

  return {
    id: `${element.type}-${element.id}`,
    name,
    category: categoryKey,
    categoryLabel: UTILITY_PLACE_CATEGORIES[categoryKey].label,
    address,
    phone,
    website,
    lat,
    lon,
    distanceKm,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${lat},${lon}`)}`
  };
}

function buildUtilityPlaceAddress(tags) {
  return (
    joinUniqueParts([
      joinUniqueParts([tags["addr:street"], tags["addr:housenumber"]]),
      tags["addr:suburb"],
      tags["addr:city"],
      tags["addr:state"]
    ]) || "Endereço não informado"
  );
}

function normalizeUtilityPlaceWebsite(value) {
  const clean = cleanLocationPart(value);
  if (!clean) {
    return "";
  }
  return /^https?:\/\//i.test(clean) ? clean : `https://${clean}`;
}

function computeUtilityDistanceKm(lat1, lon1, lat2, lon2) {
  const toRadians = (value) => (Number(value) * Math.PI) / 180;
  const earthRadius = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const startLat = toRadians(lat1);
  const endLat = toRadians(lat2);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(startLat) * Math.cos(endLat) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function dedupeUtilityPlaces(places) {
  const seen = new Set();
  return places.filter((place) => {
    if (seen.has(place.id)) {
      return false;
    }
    seen.add(place.id);
    return true;
  });
}

function renderUtilityPlaceResults() {
  if (!utilityPlaceRefs.results) {
    return;
  }

  if (!utilityPlaceState.results.length) {
    utilityPlaceRefs.results.innerHTML = '<p class="hint">Nenhum local encontrado para essa busca.</p>';
    return;
  }

  utilityPlaceRefs.results.innerHTML = utilityPlaceState.results.map((place) => renderUtilityPlaceCard(place, true)).join("");
}

function renderUtilityPlaceFavorites() {
  if (!utilityPlaceRefs.favorites) {
    return;
  }

  if (!utilityPlaceState.favorites.length) {
    utilityPlaceRefs.favorites.innerHTML = '<p class="hint">Nenhum favorito salvo ainda.</p>';
    return;
  }

  utilityPlaceRefs.favorites.innerHTML = utilityPlaceState.favorites
    .map((place) => renderUtilityPlaceCard(place, false))
    .join("");
}

function renderUtilityPlaceCard(place, allowFavorite) {
  const isFavorite = utilityPlaceState.favorites.some((entry) => entry.id === place.id);
  const phoneText = place.phone || "Telefone não informado";

  return `
    <article class="place-card" data-id="${place.id}">
      <div class="place-card__header">
        <div>
          <h4>${escapeHtml(place.name)}</h4>
          <p>${escapeHtml(place.categoryLabel)} • ${escapeHtml(place.distanceKm.toFixed(1))} km</p>
        </div>
      </div>
      <div class="place-meta">
        <span>${escapeHtml(place.address)}</span>
        <strong>${escapeHtml(phoneText)}</strong>
      </div>
      <div class="place-card__actions">
        ${
          place.phone
            ? `<a class="button secondary slim" href="tel:${escapeAttribute(place.phone.replace(/[^\d+]/g, ""))}">Ligar</a>`
            : ""
        }
        ${
          place.phone
            ? `<button class="button ghost slim" type="button" data-action="copy-place-phone" data-id="${place.id}">Copiar número</button>`
            : ""
        }
        ${
          place.website
            ? `<a class="button ghost slim" href="${escapeAttribute(place.website)}" target="_blank" rel="noopener noreferrer">Site</a>`
            : ""
        }
        <a class="button ghost slim" href="${escapeAttribute(place.mapsUrl)}" target="_blank" rel="noopener noreferrer">Mapa</a>
        <button class="button ghost slim" type="button" data-action="toggle-place-favorite" data-id="${place.id}">
          ${allowFavorite ? (isFavorite ? "Desfavoritar" : "Favoritar") : "Remover"}
        </button>
      </div>
    </article>
  `;
}

function handleUtilityPlaceActions(event) {
  const button = event.target.closest('[data-action]');
  if (!button) {
    return;
  }

  const place = utilityPlaceState.results.find((entry) => entry.id === button.dataset.id)
    || utilityPlaceState.favorites.find((entry) => entry.id === button.dataset.id);
  if (!place) {
    return;
  }

  if (button.dataset.action === "copy-place-phone") {
    navigator.clipboard?.writeText(place.phone || "");
    showToast("Número copiado.", "success");
    return;
  }

  if (button.dataset.action === "toggle-place-favorite") {
    toggleUtilityPlaceFavorite(place);
  }
}

function toggleUtilityPlaceFavorite(place) {
  const exists = utilityPlaceState.favorites.some((entry) => entry.id === place.id);
  if (exists) {
    utilityPlaceState.favorites = utilityPlaceState.favorites.filter((entry) => entry.id !== place.id);
    showToast("Local removido dos favoritos.", "success");
  } else {
    utilityPlaceState.favorites.unshift(place);
    utilityPlaceState.favorites = utilityPlaceState.favorites.slice(0, 24);
    showToast("Local favoritado.", "success");
  }

  saveStorage(UTILITY_PLACE_FAVORITES_KEY, utilityPlaceState.favorites);
  renderUtilityPlaceResults();
  renderUtilityPlaceFavorites();
}

initUtilityPlaces();
