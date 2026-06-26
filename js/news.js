const newsRuntime = {
  cache: loadStorage(STORAGE_KEYS.newsCache, {})
};

function renderNewsTopicSelects() {
  const optionsHtml = NEWS_FEEDS.map((feed) => {
    return `<option value="${escapeAttribute(feed.id)}">${escapeHtml(feed.label)}</option>`;
  }).join("");

  refs.newsTopicSelects.forEach((select, index) => {
    select.innerHTML = optionsHtml;
    const selected = state.newsTopics[index] || NEWS_DEFAULT_TOPICS[index] || NEWS_FEEDS[0].id;
    select.value = selected;
  });
}

function handleNewsTopicChange(event) {
  const slot = Number(event.target.dataset.slot);
  if (!Number.isInteger(slot)) {
    return;
  }

  state.newsTopics[slot] = event.target.value;
  saveStorage(STORAGE_KEYS.newsTopics, state.newsTopics);
  loadNews();
}

async function loadNews() {
  refs.refreshNewsButton.disabled = true;

  await Promise.all(
    state.newsTopics.map(async (topicId, slot) => {
      const topic = getNewsFeedById(topicId);
      const status = document.getElementById(`status-news-${slot}`);
      const container = document.getElementById(`feed-news-${slot}`);
      const title = document.getElementById(`newsTitle${slot}`);
      const source = document.getElementById(`newsSource${slot}`);

      if (!topic || !status || !container || !title || !source) {
        return;
      }

      title.textContent = topic.label;
      source.textContent = `Fonte: ${topic.source}`;
      status.textContent = "Atualizando";

      const cachedItems = readNewsCache(topic.id);
      if (cachedItems?.length) {
        renderNewsItems(container, cachedItems, topic, `Atualizado ${formatTimeShort(new Date())}`);
        status.textContent = "Salvo no navegador";
      }

      try {
        const params = new URLSearchParams({
          rss_url: topic.url
        });
        const data = await fetchJsonWithRetry(
          `https://api.rss2json.com/v1/api.json?${params.toString()}`,
          {},
          REQUEST_TIMEOUTS.news,
          1
        );

        if (data.status !== "ok") {
          throw new Error("feed_error");
        }

        const items = (data.items || []).slice(0, 4);
        saveNewsCache(topic.id, items);
        renderNewsItems(container, items, topic, `Atualizado ${formatTimeShort(new Date())}`, data.feed?.image || topic.cover || "");
        status.textContent = `Atualizado ${formatTimeShort(new Date())}`;
      } catch (error) {
        if (!cachedItems?.length) {
          container.innerHTML = `
            <article class="news-item">
              <div class="news-item__content">
                <h4>Feed indisponível no momento</h4>
                <p class="hint">Você ainda pode abrir a fonte principal manualmente.</p>
                <a href="${escapeAttribute(topic.sourceLink)}" target="_blank" rel="noopener noreferrer">Abrir ${escapeHtml(topic.source)}</a>
              </div>
            </article>
          `;
          status.textContent = "Falha";
        } else {
          status.textContent = "Mostrando versão salva";
        }
      }
    })
  );

  refs.refreshNewsButton.disabled = false;
}

function buildNewsCacheKey(topicId) {
  return `topic:${topicId}`;
}

function readNewsCache(topicId) {
  const entry = newsRuntime.cache?.[buildNewsCacheKey(topicId)];
  if (!entry?.items || !Array.isArray(entry.items)) {
    return null;
  }
  const savedAt = Number(entry.savedAt || 0);
  if (!savedAt || Date.now() - savedAt > NEWS_CACHE_TTL_MS) {
    return null;
  }
  return entry.items;
}

function saveNewsCache(topicId, items) {
  newsRuntime.cache[buildNewsCacheKey(topicId)] = {
    savedAt: Date.now(),
    items
  };
  newsRuntime.cache = Object.fromEntries(
    Object.entries(newsRuntime.cache)
      .sort((first, second) => Number(second[1]?.savedAt || 0) - Number(first[1]?.savedAt || 0))
      .slice(0, 16)
  );
  saveStorage(STORAGE_KEYS.newsCache, newsRuntime.cache);
}

function renderNewsItems(container, items, topic, emptyStatus = "", fallbackImage = "") {
  container.innerHTML = items.length
    ? items.map((item) => buildNewsCard(item, topic, fallbackImage)).join("")
    : '<article class="news-item"><p class="hint">Nenhuma notícia encontrada nessa categoria agora.</p></article>';
}

function buildNewsCard(item, topic, fallbackImage = "") {
  const title = decodeHtml(item.title || "Sem título");
  const description = summarizeText(stripHtml(item.description || item.content || ""), 120);
  const image = resolveNewsImage(item, fallbackImage);
  const thumbStyle = image ? ` style="background-image:url('${escapeAttribute(image)}')"` : "";
  const thumbClass = image ? "news-thumb has-image" : "news-thumb";

  return `
    <article class="news-item">
      <a class="${thumbClass}" href="${escapeAttribute(item.link)}" target="_blank" rel="noopener noreferrer"${thumbStyle}>
        <span>${escapeHtml(topic.label)}</span>
      </a>
      <div class="news-item__content">
        <div class="news-item__header">
          <h4>${escapeHtml(title)}</h4>
        </div>
        <p class="news-meta">${formatNewsDate(item.pubDate)}</p>
        <p class="hint">${escapeHtml(description || "Clique para abrir a materia completa.")}</p>
        <a href="${escapeAttribute(item.link)}" target="_blank" rel="noopener noreferrer">Abrir notícia</a>
      </div>
    </article>
  `;
}

function resolveNewsImage(item, fallbackImage = "") {
  const preferred = [
    item.thumbnail,
    item.enclosure?.link,
    extractImageFromHtml(item.description || ""),
    extractImageFromHtml(item.content || ""),
    fallbackImage
  ]
    .map((entry) => String(entry || "").trim())
    .find((entry) => {
      return entry && !/ebc\.(?:gif|png)\?id=/i.test(entry);
    });

  return preferred || "";
}

function extractImageFromHtml(html) {
  const match = String(html || "").match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] || "";
}

function getNewsFeedById(feedId) {
  return NEWS_FEEDS.find((feed) => feed.id === feedId) || NEWS_FEEDS[0];
}
