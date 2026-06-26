function renderRadioGenreOptions() {
  if (!refs.radioGenreSelect) {
    return;
  }

  refs.radioGenreSelect.innerHTML = RADIO_TAGS.map((tag) => {
    return `<option value="${escapeAttribute(tag.value)}">${escapeHtml(tag.label)}</option>`;
  }).join("");

  const selected = RADIO_TAGS.some((tag) => tag.value === state.selectedRadioTag) ? state.selectedRadioTag : "";
  state.selectedRadioTag = selected;
  refs.radioGenreSelect.value = selected;
}

function renderRadioIdleState() {
  state.radioResults = [];
  if (refs.radioStatus) {
    refs.radioStatus.textContent = "Use os filtros e toque em Buscar para encontrar rádios. As favoritas ficam salvas abaixo.";
  }
  if (refs.radioResults) {
    refs.radioResults.innerHTML = '<p class="hint">Nenhuma busca feita ainda. Escolha país, estado, cidade ou gênero e toque em Buscar.</p>';
  }
}

function renderRadioTagChips() {
  if (refs.radioGenreSelect && refs.radioGenreSelect.value !== state.selectedRadioTag) {
    refs.radioGenreSelect.value = state.selectedRadioTag;
  }

  refs.radioTagChips.innerHTML = RADIO_TAGS.map((tag) => {
    const activeClass = tag.value === state.selectedRadioTag ? "tag-chip is-active" : "tag-chip";
    return `<button class="${activeClass}" type="button" data-tag="${tag.value}">${escapeHtml(tag.label)}</button>`;
  }).join("");
}

function handleRadioTagClick(event) {
  const button = event.target.closest("[data-tag]");
  if (!button) {
    return;
  }

  state.selectedRadioTag = button.dataset.tag;
  renderRadioTagChips();
  if (state.radioHasSearched) {
    loadRadioStations();
  } else {
    renderRadioIdleState();
  }
}

async function loadRadioStations(options = {}) {
  state.radioHasSearched = true;
  const nearbyMode = Boolean(options.nearby || state.radioMode === "nearby");
  const search = refs.radioSearchInput.value.trim();
  const country = getRadioCountryCode();
  const countryLabel = getRadioCountryLabel();
  const stateName = getRadioStateValue();
  const cityName = getRadioCityValue();

  refs.radioStatus.textContent = nearbyMode ? "Buscando rádios próximas..." : "Buscando rádios...";
  refs.radioResults.innerHTML = '<p class="hint">Consultando rádios disponíveis...</p>';

  try {
    const attempts = buildRadioAttempts({
      nearbyMode,
      search,
      country,
      stateName,
      cityName,
      tag: state.selectedRadioTag
    }).slice(0, nearbyMode ? 6 : 8);

    let stations = [];
    for (let index = 0; index < attempts.length; index += 2) {
      const batch = attempts.slice(index, index + 2);
      const responses = await Promise.allSettled(batch.map((attempt) => fetchStations(attempt)));

      responses.forEach((result) => {
        if (result.status !== "fulfilled") {
          return;
        }
        const prepared = prepareRadioStations(result.value);
        if (prepared.length) {
          stations = dedupeStations([...stations, ...prepared]);
        }
      });

      if (stations.length >= 24) {
        break;
      }
    }

    state.radioResults = stations.slice(0, 18);
    renderRadioResults();

    if (!state.radioResults.length) {
      refs.radioStatus.textContent = nearbyMode
        ? "Nenhuma rádio segura encontrada perto da sua região"
        : "Nenhuma rádio encontrada com esse filtro";
      return;
    }

    refs.radioStatus.textContent = buildRadioStatusLabel(state.radioResults.length, nearbyMode, {
      country: countryLabel,
      stateName,
      cityName
    });
  } catch (error) {
    refs.radioStatus.textContent = "Falha ao carregar rádios";
    refs.radioResults.innerHTML = '<p class="hint">Não foi possível carregar as rádios agora.</p>';
  }
}

function renderRadioResults() {
  if (!state.radioResults.length) {
    refs.radioResults.innerHTML = '<p class="hint">Nenhuma rádio encontrada para esse filtro.</p>';
    return;
  }

  refs.radioResults.innerHTML = state.radioResults
    .map((station) => {
      const isFavorite = state.radioFavorites.some((item) => item.stationuuid === station.stationuuid);
      return `
        <article class="radio-card" data-id="${station.stationuuid}">
          <div class="radio-card__header">
            <div>
              <h4>${escapeHtml(cleanStationName(station.name))}</h4>
              <p>${escapeHtml(formatStationRegion(station))} | ${escapeHtml(formatStationTags(station.tags))}</p>
            </div>
          </div>
          <div class="radio-card__actions">
            <button class="button secondary slim" type="button" data-action="play-station" data-id="${station.stationuuid}">Ouvir</button>
            <button class="button ghost slim" type="button" data-action="toggle-favorite" data-id="${station.stationuuid}">
              ${isFavorite ? "Desfavoritar" : "Favoritar"}
            </button>
            ${
              station.homepage
                ? `<a class="button ghost slim" href="${escapeAttribute(station.homepage)}" target="_blank" rel="noopener noreferrer">Site</a>`
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");
}

function handleRadioResultsClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }

  const station = state.radioResults.find((item) => item.stationuuid === button.dataset.id);
  if (!station) {
    return;
  }

  if (button.dataset.action === "play-station") {
    playStation(station);
    return;
  }

  if (button.dataset.action === "toggle-favorite") {
    toggleFavorite(station);
  }
}

function handleRadioFavoritesClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }

  const station = state.radioFavorites.find((item) => item.stationuuid === button.dataset.id);
  if (!station) {
    return;
  }

  if (button.dataset.action === "play-favorite") {
    playStation(station);
    return;
  }

  if (button.dataset.action === "remove-favorite") {
    toggleFavorite(station);
  }
}

function toggleFavorite(station) {
  const exists = state.radioFavorites.some((item) => item.stationuuid === station.stationuuid);
  if (exists) {
    state.radioFavorites = state.radioFavorites.filter((item) => item.stationuuid !== station.stationuuid);
    showToast("Rádio removida das favoritas.", "success");
  } else {
    state.radioFavorites.unshift({
      stationuuid: station.stationuuid,
      name: cleanStationName(station.name),
      state: station.state || "",
      country: station.country || "Global",
      tags: station.tags || "",
      url: station.url,
      url_resolved: station.url_resolved,
      homepage: station.homepage || "",
      codec: station.codec || ""
    });
    state.radioFavorites = state.radioFavorites.slice(0, 10);
    showToast("Rádio favoritada.", "success");
  }

  saveStorage(STORAGE_KEYS.radioFavorites, state.radioFavorites);
  renderRadioResults();
  renderRadioFavorites();
}

function renderRadioFavorites() {
  if (!state.radioFavorites.length) {
    refs.radioFavorites.innerHTML = '<p class="hint">Nenhuma favorita salva ainda.</p>';
    return;
  }

  refs.radioFavorites.innerHTML = state.radioFavorites
    .map(
      (station) => `
        <article class="radio-card">
          <h4>${escapeHtml(station.name)}</h4>
          <p>${escapeHtml(formatStationRegion(station))} | ${escapeHtml(formatStationTags(station.tags))}</p>
          <div class="radio-card__actions">
            <button class="button secondary slim" type="button" data-action="play-favorite" data-id="${station.stationuuid}">Ouvir</button>
            <button class="button ghost slim" type="button" data-action="remove-favorite" data-id="${station.stationuuid}">Remover</button>
          </div>
        </article>
      `
    )
    .join("");
}

async function playStation(station) {
  const streamUrl = normalizeStreamUrl(station.url_resolved || station.url);
  if (!streamUrl) {
    showToast("Essa rádio não oferece um link seguro para tocar aqui.", "warning");
    return;
  }

  resetRadioEngine();
  refs.radioNowPlaying.textContent = cleanStationName(station.name);
  refs.radioMeta.textContent = `${formatStationRegion(station)} | ${formatStationTags(station.tags)}`;
  state.currentStation = station;

  try {
    const isHlsStream = /\.m3u8(\?|#|$)/i.test(streamUrl) || /hls/i.test(String(station.codec || ""));

    if (isHlsStream && window.Hls?.isSupported()) {
      const hls = new window.Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      state.hlsInstance = hls;

      await new Promise((resolve, reject) => {
        const onManifestParsed = () => {
          hls.off(window.Hls.Events.MANIFEST_PARSED, onManifestParsed);
          hls.off(window.Hls.Events.ERROR, onError);
          resolve();
        };
        const onError = (_, data) => {
          if (!data?.fatal) {
            return;
          }
          hls.off(window.Hls.Events.MANIFEST_PARSED, onManifestParsed);
          hls.off(window.Hls.Events.ERROR, onError);
          reject(new Error("hls_error"));
        };

        hls.on(window.Hls.Events.MANIFEST_PARSED, onManifestParsed);
        hls.on(window.Hls.Events.ERROR, onError);
        hls.loadSource(streamUrl);
        hls.attachMedia(refs.radioPlayer);
      });
    } else {
      refs.radioPlayer.src = streamUrl;
      refs.radioPlayer.load();
    }

    await refs.radioPlayer.play();
  } catch (error) {
    showToast("Clique novamente para iniciar a rádio.", "warning");
  }
}

function handleRadioPlayerError() {
  if (!state.currentStation) {
    return;
  }
  showToast("Essa estação falhou ao tocar agora. Tente outra opção.", "warning");
}

function resetRadioEngine() {
  refs.radioPlayer.pause();
  if (state.hlsInstance) {
    state.hlsInstance.destroy();
    state.hlsInstance = null;
  }
  refs.radioPlayer.removeAttribute("src");
  refs.radioPlayer.load();
}
