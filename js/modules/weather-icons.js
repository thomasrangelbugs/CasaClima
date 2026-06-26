function getWeatherIconClass(scene) {
  const map = {
    clear: "weather-icon--sun",
    cloudy: "weather-icon--cloud",
    rain: "weather-icon--rain",
    drizzle: "weather-icon--rain",
    storm: "weather-icon--storm",
    snow: "weather-icon--snow",
    fog: "weather-icon--fog"
  };
  return map[scene] || "weather-icon--cloud";
}

function injectWeatherHeroIcon(scene) {
  const primary = document.querySelector(".weather-hero__primary");
  if (!primary) {
    return;
  }

  let icon = primary.querySelector(".weather-hero__icon");
  if (!icon) {
    icon = document.createElement("span");
    icon.className = "weather-hero__icon";
    icon.setAttribute("aria-hidden", "true");
    primary.prepend(icon);
  }

  icon.className = `weather-hero__icon ${getWeatherIconClass(scene)}`;
}

function patchWeatherIcons() {
  const originalRenderWeather = renderWeather;
  window.renderWeather = function renderWeatherWithIcon(data) {
    originalRenderWeather(data);
    const scene = state.weatherInfo?.scene || "cloudy";
    injectWeatherHeroIcon(scene);
  };
}

function initWeatherIcons() {
  patchWeatherIcons();
  if (state.weatherInfo?.scene) {
    injectWeatherHeroIcon(state.weatherInfo.scene);
  }
}

window.initWeatherIcons = initWeatherIcons;
