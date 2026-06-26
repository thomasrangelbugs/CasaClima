(function applySceneHeadTheme() {
  const root = document.documentElement;
  const fallback = "#0c1522";

  root.style.setProperty("--weather-fade-deep", fallback);
  root.style.setProperty("--weather-fade-mid", "#142436");
  root.style.setProperty("--weather-fade-soft", "#1a2f4a");
  root.style.setProperty("--bg-1", fallback);
  root.style.setProperty("--bg-2", "#142436");
  root.style.setProperty("--bg-3", "#1a2f4a");
  root.style.background = fallback;

  try {
    const themeRaw = localStorage.getItem("casaclima-scene-theme");
    if (!themeRaw) {
      return;
    }

    const theme = JSON.parse(themeRaw);
    const deep = theme.fadeDeep || theme.bg1 || fallback;
    const mid = theme.fadeMid || theme.bg2 || "#142436";
    const soft = theme.fadeSoft || theme.bg3 || "#1a2f4a";

    root.style.setProperty("--weather-fade-deep", deep);
    root.style.setProperty("--weather-fade-mid", mid);
    root.style.setProperty("--weather-fade-soft", soft);
    root.style.setProperty("--bg-1", deep);
    root.style.setProperty("--bg-2", mid);
    root.style.setProperty("--bg-3", soft);
    root.style.background = deep;
  } catch (error) {
    // Mantém fallback escuro.
  }

  if (document.body) {
    document.body.classList.add("has-weather-fade", "theme-dark", "user-dark");
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      document.body.classList.add("has-weather-fade", "theme-dark", "user-dark");
    });
  }

  if (window.location.protocol === "file:") {
    const showFileProtocolWarning = () => {
      if (document.getElementById("casaclima-file-warning")) {
        return;
      }
      const banner = document.createElement("div");
      banner.id = "casaclima-file-warning";
      banner.setAttribute("role", "alert");
      banner.style.cssText =
        "position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;padding:1.5rem;background:rgba(8,14,24,.94);color:#f4f8ff;font:600 1rem/1.5 Outfit,system-ui,sans-serif;text-align:center";
      banner.innerHTML =
        '<div style="max-width:22rem"><strong style="font-size:1.15rem">Abra pelo servidor local</strong><p style="margin:1rem 0;font-weight:500;opacity:.9">O arquivo direto (file://) bloqueia localização e clima. No terminal, na pasta do projeto:</p><code style="display:block;padding:.65rem .8rem;border-radius:12px;background:rgba(255,255,255,.08)">npx serve .</code><p style="margin-top:1rem;font-weight:500;opacity:.9">Depois acesse <a href="http://localhost:3000" style="color:#7cb5ff">http://localhost:3000</a></p></div>';
      document.body.appendChild(banner);
    };
    if (document.body) {
      showFileProtocolWarning();
    } else {
      document.addEventListener("DOMContentLoaded", showFileProtocolWarning);
    }
  }
})();
