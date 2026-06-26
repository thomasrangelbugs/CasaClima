let routeMapInstance = null;
let routeLayer = null;

function loadLeaflet() {
  if (window.L) {
    return Promise.resolve(window.L);
  }

  return new Promise((resolve, reject) => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(css);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => resolve(window.L);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function initRouteMap() {
  const mapNode = document.getElementById("routeMap");
  if (!mapNode) {
    return;
  }

  const L = await loadLeaflet();
  const lat = state.location?.latitude || -23.55;
  const lon = state.location?.longitude || -46.63;

  routeMapInstance = L.map(mapNode, { zoomControl: true }).setView([lat, lon], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
  }).addTo(routeMapInstance);

  L.marker([lat, lon]).addTo(routeMapInstance).bindPopup("Você está aqui");

  const form = document.getElementById("routeForm");
  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const destination = document.getElementById("routeDestinationInput")?.value?.trim();
    if (!destination) {
      showToast("Informe o destino.", "warning");
      return;
    }

    try {
      const params = new URLSearchParams({
        q: destination,
        format: "json",
        limit: "1"
      });
      const results = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, {
        headers: { Accept: "application/json" }
      }).then((response) => response.json());

      if (!results.length) {
        showToast("Destino não encontrado.", "warning");
        return;
      }

      const destLat = Number(results[0].lat);
      const destLon = Number(results[0].lon);

      if (routeLayer) {
        routeMapInstance.removeLayer(routeLayer);
      }

      routeLayer = L.polyline(
        [
          [lat, lon],
          [destLat, destLon]
        ],
        { color: "#60a5fa", weight: 5 }
      ).addTo(routeMapInstance);

      routeMapInstance.fitBounds(routeLayer.getBounds(), { padding: [30, 30] });
      const destLabel = document.getElementById("routeDestinationLabel");
      if (destLabel) {
        destLabel.textContent = results[0].display_name;
      }
      const status = document.getElementById("routeStatus");
      if (status) {
        status.textContent = "Rota traçada no mapa.";
      }
    } catch (error) {
      showToast("Não foi possível traçar a rota.", "warning");
    }
  });
}

window.initRouteMap = initRouteMap;
