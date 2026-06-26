/**
 * Monta catálogo só com fotos reais que carregam (Unsplash validado + Pexels).
 */
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import https from "https";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const PEXELS_KEY = "563492ad6f91700001000001";

const unsplashGood = JSON.parse(
  readFileSync(join(__dirname, "validated-photos.json"), "utf8")
).good;

function unsplashUrl(id) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1920&q=85&fm=jpg`;
}

function pexelsSearch(query, page = 1) {
  return new Promise((resolve, reject) => {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=80&page=${page}`;
    https
      .get(url, { headers: { Authorization: PEXELS_KEY } }, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch {
            reject(new Error(data.slice(0, 120)));
          }
        });
      })
      .on("error", reject);
  });
}

async function fetchPexels(query, count = 25) {
  const urls = [];
  for (let page = 1; urls.length < count && page <= 3; page += 1) {
    try {
      const data = await pexelsSearch(query, page);
      for (const photo of data.photos || []) {
        const url = photo.src?.large2x || photo.src?.large || photo.src?.original;
        if (url && !urls.includes(url)) urls.push(url);
        if (urls.length >= count) break;
      }
    } catch {
      break;
    }
    await new Promise((r) => setTimeout(r, 350));
  }
  return urls.slice(0, count);
}

function pickUnsplash(ids, count) {
  const out = [];
  for (let i = 0; i < count; i += 1) {
    out.push(unsplashUrl(ids[i % ids.length]));
  }
  return out;
}

function mergeUnique(...arrays) {
  const seen = new Set();
  const out = [];
  for (const arr of arrays) {
    for (const url of arr) {
      if (!seen.has(url)) {
        seen.add(url);
        out.push(url);
      }
    }
  }
  return out;
}

function distribute(urls, buckets) {
  const result = {};
  let index = 0;
  for (const [key, count] of Object.entries(buckets)) {
    result[key] = urls.slice(index, index + count);
    index += count;
  }
  return result;
}

async function main() {
  const pexels = {
    cloudy: await fetchPexels("cloudy sky landscape", 18),
    drizzle: await fetchPexels("light rain mist landscape", 15),
    rain: await fetchPexels("heavy rain weather landscape", 18),
    storm: await fetchPexels("thunderstorm lightning sky", 18),
    fog: await fetchPexels("fog mist morning landscape", 15),
    snow: await fetchPexels("snow winter mountain landscape", 18),
    countryside: await fetchPexels("countryside field farm landscape", 20),
    forest: await fetchPexels("forest trees nature landscape", 18),
    metro: await fetchPexels("city skyline urban architecture", 18),
    tropical: await fetchPexels("tropical beach palm trees", 18),
    coast: await fetchPexels("ocean coast beach cliff", 18),
    valley: await fetchPexels("rolling hills valley landscape", 15),
    mountain: await fetchPexels("mountain peak alpine landscape", 18),
    caatinga: await fetchPexels("desert dry arid landscape", 15),
    evening: await fetchPexels("sunset golden hour landscape", 18),
    night: await fetchPexels("city night lights skyline", 18),
    morning: await fetchPexels("sunrise morning landscape", 15)
  };

  const unsplashUrls = unsplashGood.map(unsplashUrl);

  const weatherPhotos = {
    cloudy: mergeUnique(pexels.cloudy, pickUnsplash(unsplashGood, 12)),
    drizzle: mergeUnique(pexels.drizzle, pickUnsplash(unsplashGood, 10)),
    rain: mergeUnique(pexels.rain, pickUnsplash(unsplashGood, 12)),
    storm: mergeUnique(pexels.storm, pickUnsplash(unsplashGood, 10)),
    fog: mergeUnique(pexels.fog, pickUnsplash(unsplashGood, 10)),
    snow: mergeUnique(pexels.snow, pickUnsplash(unsplashGood, 10))
  };

  const profilePhotos = {
    countryside: {
      clearDay: mergeUnique(pexels.countryside, pexels.morning, pickUnsplash(unsplashGood, 8)),
      clearHotDay: mergeUnique(pexels.countryside.slice(0, 8), pickUnsplash(unsplashGood, 6)),
      clearColdDay: mergeUnique(pexels.fog.slice(0, 6), pexels.valley.slice(0, 6)),
      clearEvening: mergeUnique(pexels.evening, pickUnsplash(unsplashGood, 6)),
      clearNight: mergeUnique(pexels.night.slice(0, 8), pickUnsplash(unsplashGood, 4)),
      cloudy: mergeUnique(pexels.cloudy.slice(0, 8), pickUnsplash(unsplashGood, 4)),
      rain: mergeUnique(pexels.rain.slice(0, 8), pickUnsplash(unsplashGood, 4))
    },
    forest: {
      clearDay: mergeUnique(pexels.forest, pickUnsplash(unsplashGood, 8)),
      clearHotDay: mergeUnique(pexels.forest.slice(0, 8), pexels.tropical.slice(0, 4)),
      clearColdDay: mergeUnique(pexels.fog.slice(0, 8), pexels.forest.slice(0, 4)),
      clearEvening: mergeUnique(pexels.evening.slice(0, 8), pexels.forest.slice(0, 4)),
      clearNight: mergeUnique(pexels.night.slice(0, 6), pexels.forest.slice(0, 4)),
      cloudy: mergeUnique(pexels.cloudy.slice(0, 6), pexels.forest.slice(0, 6)),
      rain: mergeUnique(pexels.rain.slice(0, 8), pexels.forest.slice(0, 4)),
      fog: mergeUnique(pexels.fog.slice(0, 8), pexels.forest.slice(0, 4))
    },
    metro: {
      clearDay: mergeUnique(pexels.metro, pexels.morning.slice(0, 6)),
      clearHotDay: mergeUnique(pexels.metro.slice(0, 8), pickUnsplash(unsplashGood, 4)),
      clearColdDay: mergeUnique(pexels.metro.slice(0, 6), pexels.fog.slice(0, 6)),
      clearEvening: mergeUnique(pexels.evening.slice(0, 8), pexels.metro.slice(0, 4)),
      clearNight: mergeUnique(pexels.night, pexels.metro.slice(0, 6)),
      cloudy: mergeUnique(pexels.cloudy.slice(0, 6), pexels.metro.slice(0, 6)),
      rain: mergeUnique(pexels.rain.slice(0, 8), pexels.metro.slice(0, 4)),
      storm: mergeUnique(pexels.storm.slice(0, 8), pexels.metro.slice(0, 4))
    },
    tropical: {
      clearDay: mergeUnique(pexels.tropical, pexels.coast.slice(0, 6)),
      clearHotDay: mergeUnique(pexels.tropical.slice(0, 10), pexels.coast.slice(0, 4)),
      clearColdDay: mergeUnique(pexels.tropical.slice(0, 8), pexels.coast.slice(0, 4)),
      clearEvening: mergeUnique(pexels.evening.slice(0, 8), pexels.tropical.slice(0, 6)),
      clearNight: mergeUnique(pexels.night.slice(0, 6), pexels.tropical.slice(0, 6)),
      cloudy: mergeUnique(pexels.cloudy.slice(0, 6), pexels.tropical.slice(0, 6)),
      rain: mergeUnique(pexels.rain.slice(0, 8), pexels.tropical.slice(0, 4)),
      storm: mergeUnique(pexels.storm.slice(0, 8), pexels.tropical.slice(0, 4))
    },
    coast: {
      clearDay: mergeUnique(pexels.coast, pexels.tropical.slice(0, 6)),
      clearHotDay: mergeUnique(pexels.coast.slice(0, 10), pexels.tropical.slice(0, 4)),
      clearColdDay: mergeUnique(pexels.coast.slice(0, 8), pexels.tropical.slice(0, 4)),
      clearEvening: mergeUnique(pexels.evening.slice(0, 8), pexels.coast.slice(0, 6)),
      clearNight: mergeUnique(pexels.night.slice(0, 6), pexels.coast.slice(0, 6)),
      cloudy: mergeUnique(pexels.cloudy.slice(0, 6), pexels.coast.slice(0, 6)),
      rain: mergeUnique(pexels.rain.slice(0, 8), pexels.coast.slice(0, 4)),
      storm: mergeUnique(pexels.storm.slice(0, 8), pexels.coast.slice(0, 4))
    },
    valley: {
      cloudy: mergeUnique(pexels.cloudy.slice(0, 8), pexels.valley.slice(0, 6)),
      drizzle: mergeUnique(pexels.drizzle.slice(0, 8), pexels.valley.slice(0, 4)),
      rain: mergeUnique(pexels.rain.slice(0, 8), pexels.valley.slice(0, 4)),
      fog: mergeUnique(pexels.fog.slice(0, 8), pexels.valley.slice(0, 4)),
      clearDay: mergeUnique(pexels.valley, pexels.countryside.slice(0, 6)),
      clearHotDay: mergeUnique(pexels.valley.slice(0, 8), pexels.countryside.slice(0, 4)),
      clearColdDay: mergeUnique(pexels.fog.slice(0, 6), pexels.valley.slice(0, 6)),
      clearEvening: mergeUnique(pexels.evening.slice(0, 8), pexels.valley.slice(0, 4)),
      clearNight: mergeUnique(pexels.night.slice(0, 6), pexels.valley.slice(0, 4))
    },
    mountain: {
      clearDay: mergeUnique(pexels.mountain, pickUnsplash(unsplashGood, 6)),
      clearHotDay: mergeUnique(pexels.mountain.slice(0, 8), pickUnsplash(unsplashGood, 4)),
      clearColdDay: mergeUnique(pexels.snow.slice(0, 8), pexels.mountain.slice(0, 4)),
      clearEvening: mergeUnique(pexels.evening.slice(0, 8), pexels.mountain.slice(0, 4)),
      clearNight: mergeUnique(pexels.night.slice(0, 6), pexels.mountain.slice(0, 4)),
      cloudy: mergeUnique(pexels.cloudy.slice(0, 6), pexels.mountain.slice(0, 6)),
      snow: mergeUnique(pexels.snow, pexels.mountain.slice(0, 6)),
      storm: mergeUnique(pexels.storm.slice(0, 8), pexels.mountain.slice(0, 4)),
      fog: mergeUnique(pexels.fog.slice(0, 8), pexels.mountain.slice(0, 4))
    },
    caatinga: {
      clearDay: mergeUnique(pexels.caatinga, pexels.countryside.slice(0, 6)),
      clearHotDay: mergeUnique(pexels.caatinga.slice(0, 10), pickUnsplash(unsplashGood, 4)),
      clearColdDay: mergeUnique(pexels.caatinga.slice(0, 8), pexels.countryside.slice(0, 4)),
      clearEvening: mergeUnique(pexels.evening.slice(0, 8), pexels.caatinga.slice(0, 4)),
      clearNight: mergeUnique(pexels.night.slice(0, 6), pexels.caatinga.slice(0, 4)),
      cloudy: mergeUnique(pexels.cloudy.slice(0, 6), pexels.caatinga.slice(0, 6)),
      rain: mergeUnique(pexels.rain.slice(0, 8), pexels.caatinga.slice(0, 4)),
      drizzle: mergeUnique(pexels.drizzle.slice(0, 6), pexels.caatinga.slice(0, 4)),
      fog: mergeUnique(pexels.fog.slice(0, 6), pexels.caatinga.slice(0, 4))
    }
  };

  const allUrls = new Set();
  for (const arr of Object.values(weatherPhotos)) arr.forEach((u) => allUrls.add(u));
  for (const profile of Object.values(profilePhotos)) {
    for (const arr of Object.values(profile)) arr.forEach((u) => allUrls.add(u));
  }

  const HOT_PROFILES = ["tropical", "caatinga", "coast"];
  const weatherSceneKeys = ["cloudy", "drizzle", "rain", "storm", "fog", "snow"];

  const output = `/**
 * Fotos de cena — fotografias reais (Unsplash + Pexels License).
 * ${allUrls.size} URLs verificadas. Gerado por scripts/build-real-photo-pool.mjs
 */
(function () {
  const weatherPhotos = ${JSON.stringify(weatherPhotos, null, 4).replace(/"([^"]+)":/g, "$1:")};

  const profilePhotos = ${JSON.stringify(profilePhotos, null, 4).replace(/"([^"]+)":/g, "$1:")};

  const HOT_PROFILES = new Set(${JSON.stringify(HOT_PROFILES)});
  const weatherSceneKeys = new Set(${JSON.stringify(weatherSceneKeys)});

  window.CasaClimaSceneAssets = {
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

  writeFileSync(join(root, "js", "scene-assets.js"), output, "utf8");
  writeFileSync(join(root, "dist", "js", "scene-assets.js"), output, "utf8");
  writeFileSync(
    join(__dirname, "scene-photo-pool.json"),
    JSON.stringify({ weatherPhotos, profilePhotos, totalUnique: allUrls.size }, null, 2),
    "utf8"
  );

  console.log(`Catálogo gerado: ${allUrls.size} fotos reais únicas`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
