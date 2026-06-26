(function bootstrapScene() {
  const fallbackScene = `
    <div class="photo-scene is-day is-clear profile-countryside scene-fallback-only" style="--scene-image:none; --scene-fallback:linear-gradient(180deg, #6fb7e8 0%, #b8dcf1 42%, #5f8c61 43%, #2d5a3d 100%); --scene-position:center 62%; --scene-brightness:1; --scene-darkness:0.18; --scene-saturation:1.08; --scene-contrast:1.08; --scene-photo-opacity:0;">
      <div class="photo-scene__image"></div>
      <div class="photo-scene__shade"></div>
    </div>
  `;

  const scene = document.getElementById("weatherEffects");
  if (!scene) {
    return;
  }

  function markReady() {
    document.body.classList.add("scene-ready", "has-weather-fade");
  }

  function restoreSceneHtml() {
    try {
      const cachedHtml = sessionStorage.getItem("casaclima-scene-html");
      if (cachedHtml && cachedHtml.includes("photo-scene")) {
        scene.innerHTML = cachedHtml;
        markReady();
        return true;
      }
    } catch (error) {
      // Ignora falha de leitura da sessão.
    }

    scene.innerHTML = fallbackScene;
    markReady();
    return false;
  }

  restoreSceneHtml();

  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      restoreSceneHtml();
    }
  });
})();
