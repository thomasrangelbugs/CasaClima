const SKELETON_HTML = {
  weather: `
    <div class="skeleton-stack" aria-hidden="true">
      <div class="skeleton skeleton--line skeleton--short"></div>
      <div class="skeleton skeleton--temp"></div>
      <div class="skeleton skeleton--line"></div>
      <div class="skeleton-grid">
        <div class="skeleton skeleton--chip"></div>
        <div class="skeleton skeleton--chip"></div>
        <div class="skeleton skeleton--chip"></div>
        <div class="skeleton skeleton--chip"></div>
      </div>
    </div>
  `,
  news: `
    <div class="skeleton-stack" aria-hidden="true">
      <div class="skeleton skeleton--card"></div>
      <div class="skeleton skeleton--card"></div>
      <div class="skeleton skeleton--card"></div>
    </div>
  `,
  radio: `
    <div class="skeleton-stack" aria-hidden="true">
      <div class="skeleton skeleton--player"></div>
      <div class="skeleton skeleton--card"></div>
      <div class="skeleton skeleton--card"></div>
    </div>
  `
};

function showSkeleton(target, type) {
  if (!target || !SKELETON_HTML[type]) {
    return;
  }
  target.dataset.skeletonBackup = target.innerHTML;
  target.innerHTML = SKELETON_HTML[type];
  target.classList.add("is-loading");
  target.setAttribute("aria-busy", "true");
}

function hideSkeleton(target) {
  if (!target) {
    return;
  }
  target.classList.remove("is-loading");
  target.removeAttribute("aria-busy");
}

function initWeatherSkeleton() {
  // O bloco do clima contém IDs usados pelo app principal; não substitua sua estrutura.
}

function patchNewsSkeletons() {
  if (!pageFeatures.news) {
    return;
  }

  const originalLoadNews = loadNews;
  window.loadNews = async function loadNewsWithSkeleton() {
    refs.newsTopicSelects?.forEach((_, slot) => {
      const container = document.getElementById(`feed-news-${slot}`);
      if (container) {
        showSkeleton(container, "news");
      }
    });

    await originalLoadNews();
    refs.newsTopicSelects?.forEach((_, slot) => {
      hideSkeleton(document.getElementById(`feed-news-${slot}`));
    });
  };
}

function patchRadioSkeleton() {
  if (!pageFeatures.radio || !refs.radioResults || typeof loadRadioStations !== "function") {
    return;
  }

  const originalLoad = loadRadioStations;
  window.loadRadioStations = async function loadRadioStationsWithSkeleton(...args) {
    showSkeleton(refs.radioResults, "radio");
    try {
      await originalLoad(...args);
    } finally {
      hideSkeleton(refs.radioResults);
    }
  };
}

function initSkeletons() {
  initWeatherSkeleton();
  patchNewsSkeletons();
  patchRadioSkeleton();
}

window.showSkeleton = showSkeleton;
window.hideSkeleton = hideSkeleton;
window.initSkeletons = initSkeletons;
