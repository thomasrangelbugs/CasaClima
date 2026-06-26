/**
 * Gera js/scene-assets.js a partir de scripts/scene-photo-pool.json
 * Garante 250 IDs Unsplash únicos curados por clima/região.
 */
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const pool = JSON.parse(readFileSync(join(__dirname, "scene-photo-pool.json"), "utf8"));

function u(id) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1920&q=85`;
}

function mapIds(ids) {
  return [...new Set(ids)].map(u);
}

function merge(...arrays) {
  return [...new Set(arrays.flat())];
}

const weatherPhotos = {
  cloudy: mapIds(pool.cloudy),
  drizzle: mapIds(pool.drizzle),
  rain: mapIds(pool.rain),
  storm: mapIds(pool.storm),
  fog: mapIds(pool.fog),
  snow: mapIds(pool.snow)
};

const profilePhotos = {
  countryside: {
    clearDay: mapIds([...pool.countryside_day, ...pool.morning.slice(0, 3)]),
    clearHotDay: mapIds(pool.countryside_hot),
    clearColdDay: mapIds(pool.countryside_cold),
    clearEvening: mapIds(pool.evening.slice(0, 6)),
    clearNight: mapIds(pool.night.slice(0, 5)),
    cloudy: mapIds([...pool.cloudy.slice(0, 4), ...pool.countryside_day.slice(0, 2)]),
    rain: mapIds([...pool.rain.slice(0, 4), ...pool.drizzle.slice(0, 2)])
  },
  forest: {
    clearDay: mapIds([...pool.forest.slice(0, 6), ...pool.morning.slice(3, 5)]),
    clearHotDay: mapIds([...pool.forest.slice(6, 9), ...pool.tropical.slice(0, 2)]),
    clearColdDay: mapIds([...pool.fog.slice(0, 4), ...pool.forest.slice(9, 11)]),
    clearEvening: mapIds([...pool.evening.slice(0, 4), ...pool.forest.slice(0, 2)]),
    clearNight: mapIds([...pool.night.slice(0, 4), ...pool.forest.slice(10, 12)]),
    cloudy: mapIds([...pool.cloudy.slice(4, 8), ...pool.fog.slice(0, 3)]),
    rain: mapIds([...pool.rain.slice(0, 5), ...pool.forest.slice(0, 2)]),
    fog: mapIds([...pool.fog.slice(0, 5), ...pool.forest.slice(0, 2)])
  },
  metro: {
    clearDay: mapIds([...pool.metro.slice(0, 6), ...pool.morning.slice(9, 12)]),
    clearHotDay: mapIds([...pool.metro.slice(6, 10), ...pool.metro.slice(0, 2)]),
    clearColdDay: mapIds([...pool.metro.slice(10, 12), ...pool.fog.slice(0, 3), ...pool.night.slice(0, 2)]),
    clearEvening: mapIds([...pool.evening.slice(4, 8), ...pool.metro.slice(0, 2)]),
    clearNight: mapIds([...pool.night.slice(0, 6), ...pool.metro.slice(0, 2)]),
    cloudy: mapIds([...pool.cloudy.slice(8, 12), ...pool.metro.slice(0, 2)]),
    rain: mapIds([...pool.rain.slice(5, 10), ...pool.metro.slice(0, 2)]),
    storm: mapIds([...pool.storm.slice(0, 5), ...pool.metro.slice(0, 2)])
  },
  tropical: {
    clearDay: mapIds([...pool.tropical.slice(0, 6), ...pool.morning.slice(6, 9)]),
    clearHotDay: mapIds([...pool.tropical.slice(0, 8), ...pool.coast.slice(0, 2)]),
    clearColdDay: mapIds([...pool.tropical.slice(0, 4), ...pool.coast.slice(0, 4)]),
    clearEvening: mapIds([...pool.evening.slice(0, 4), ...pool.tropical.slice(0, 4)]),
    clearNight: mapIds([...pool.night.slice(0, 4), ...pool.tropical.slice(0, 4)]),
    cloudy: mapIds([...pool.cloudy.slice(0, 4), ...pool.tropical.slice(0, 3)]),
    rain: mapIds([...pool.rain.slice(0, 5), ...pool.tropical.slice(0, 2)]),
    storm: mapIds([...pool.storm.slice(5, 10), ...pool.tropical.slice(0, 2)])
  },
  coast: {
    clearDay: mapIds([...pool.coast.slice(0, 6), ...pool.morning.slice(6, 8)]),
    clearHotDay: mapIds([...pool.coast.slice(0, 8), ...pool.tropical.slice(0, 2)]),
    clearColdDay: mapIds([...pool.coast.slice(0, 4), ...pool.tropical.slice(4, 8)]),
    clearEvening: mapIds([...pool.evening.slice(0, 4), ...pool.coast.slice(0, 4)]),
    clearNight: mapIds([...pool.night.slice(0, 4), ...pool.coast.slice(0, 4)]),
    cloudy: mapIds([...pool.cloudy.slice(0, 4), ...pool.coast.slice(0, 3)]),
    rain: mapIds([...pool.rain.slice(0, 5), ...pool.coast.slice(0, 2)]),
    storm: mapIds([...pool.storm.slice(8, 12), ...pool.coast.slice(0, 2)])
  },
  valley: {
    cloudy: mapIds([...pool.cloudy.slice(0, 5), ...pool.valley.slice(0, 3)]),
    drizzle: mapIds([...pool.drizzle.slice(0, 5), ...pool.valley.slice(0, 2)]),
    rain: mapIds([...pool.rain.slice(0, 5), ...pool.valley.slice(0, 2)]),
    fog: mapIds([...pool.fog.slice(0, 5), ...pool.valley.slice(0, 2)]),
    clearDay: mapIds([...pool.valley.slice(0, 6), ...pool.morning.slice(0, 3)]),
    clearHotDay: mapIds([...pool.valley.slice(0, 4), ...pool.countryside_hot.slice(0, 2)]),
    clearColdDay: mapIds([...pool.valley.slice(4, 8), ...pool.fog.slice(0, 3)]),
    clearEvening: mapIds([...pool.evening.slice(0, 4), ...pool.valley.slice(0, 2)]),
    clearNight: mapIds([...pool.night.slice(0, 4), ...pool.valley.slice(0, 2)])
  },
  mountain: {
    clearDay: mapIds([...pool.mountain.slice(0, 6), ...pool.morning.slice(9, 11)]),
    clearHotDay: mapIds([...pool.mountain.slice(0, 4), ...pool.countryside_hot.slice(0, 2)]),
    clearColdDay: mapIds([...pool.mountain.slice(4, 8), ...pool.snow.slice(0, 3)]),
    clearEvening: mapIds([...pool.evening.slice(0, 4), ...pool.mountain.slice(0, 3)]),
    clearNight: mapIds([...pool.night.slice(0, 4), ...pool.mountain.slice(0, 3)]),
    cloudy: mapIds([...pool.cloudy.slice(6, 12), ...pool.mountain.slice(0, 2)]),
    snow: mapIds([...pool.snow.slice(0, 8), ...pool.mountain.slice(6, 10)]),
    storm: mapIds([...pool.storm.slice(0, 6), ...pool.mountain.slice(0, 2)]),
    fog: mapIds([...pool.fog.slice(0, 5), ...pool.mountain.slice(0, 2)])
  },
  caatinga: {
    clearDay: mapIds([...pool.caatinga.slice(0, 6), ...pool.morning.slice(8, 10)]),
    clearHotDay: mapIds([...pool.caatinga.slice(0, 8), ...pool.countryside_hot.slice(0, 2)]),
    clearColdDay: mapIds([...pool.caatinga.slice(0, 6), ...pool.countryside_cold.slice(0, 2)]),
    clearEvening: mapIds([...pool.evening.slice(0, 4), ...pool.caatinga.slice(0, 4)]),
    clearNight: mapIds([...pool.night.slice(0, 4), ...pool.caatinga.slice(0, 4)]),
    cloudy: mapIds([...pool.cloudy.slice(0, 4), ...pool.caatinga.slice(0, 3)]),
    rain: mapIds([...pool.rain.slice(0, 5), ...pool.caatinga.slice(0, 2)]),
    drizzle: mapIds([...pool.drizzle.slice(0, 4), ...pool.caatinga.slice(0, 2)]),
    fog: mapIds([...pool.fog.slice(0, 3), ...pool.caatinga.slice(0, 2)])
  }
};

// Contagem de IDs únicos em todo o catálogo
const allIds = new Set();
for (const ids of Object.values(pool)) {
  for (const id of ids) allIds.add(id);
}

const HOT_PROFILES = new Set(["tropical", "caatinga", "coast"]);
const weatherSceneKeys = new Set(["cloudy", "drizzle", "rain", "storm", "fog", "snow"]);

const output = `/**
 * Fotos de cena — Unsplash License (uso comercial gratuito).
 * ${allIds.size} imagens curadas por clima e região geográfica.
 * Gerado por scripts/generate-scene-assets.mjs — não editar manualmente.
 */
(function () {
  const u = (id) =>
    \`https://images.unsplash.com/photo-\${id}?auto=format&fit=crop&w=1920&q=85\`;

  const weatherPhotos = ${JSON.stringify(weatherPhotos, null, 4).replace(/"([^"]+)":/g, "$1:")};

  const profilePhotos = ${JSON.stringify(profilePhotos, null, 4).replace(/"([^"]+)":/g, "$1:")};

  const HOT_PROFILES = new Set(${JSON.stringify([...HOT_PROFILES])});
  const weatherSceneKeys = new Set(${JSON.stringify([...weatherSceneKeys])});

  window.CasaClimaSceneAssets = {
    unsplash: u,
    weatherPhotos,
    profilePhotos,
    weatherSceneKeys,
    HOT_PROFILES,
    pickVariants(profile, sceneKey) {
      const bucket = profilePhotos[profile] || profilePhotos.countryside;

      if (sceneKey === "snow" && HOT_PROFILES.has(profile)) {
        return bucket.rain || bucket.cloudy || weatherPhotos.rain;
      }

      if (bucket[sceneKey]) {
        return bucket[sceneKey];
      }
      if (weatherSceneKeys.has(sceneKey)) {
        return weatherPhotos[sceneKey] || weatherPhotos.cloudy;
      }
      return bucket.clearDay || profilePhotos.countryside.clearDay;
    }
  };
})();
`;

for (const target of [
  join(root, "js", "scene-assets.js"),
  join(root, "dist", "js", "scene-assets.js")
]) {
  writeFileSync(target, output, "utf8");
  console.log(`Escrito: ${target}`);
}

console.log(`Total de IDs únicos no catálogo: ${allIds.size}`);
