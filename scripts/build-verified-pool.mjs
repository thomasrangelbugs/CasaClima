/**
 * Catálogo só com fotografias reais verificadas (Unsplash GET 200 + Pexels).
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const unsplashIds = JSON.parse(
  readFileSync(join(__dirname, "validated-photos.json"), "utf8")
).good;

function u(id) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1920&q=85&fm=jpg`;
}

function pexelsW1920(url) {
  return url.replace(/w=\d+/, "w=1920").replace(/h=\d+&?/, "").replace(/\?$/, "");
}

const pexelsFile = join(__dirname, "pexels-photos.json");
const pexelsUrls = existsSync(pexelsFile)
  ? JSON.parse(readFileSync(pexelsFile, "utf8")).map((p) => pexelsW1920(p.url))
  : [];

/** Distribui IDs Unsplash por categoria (fotos reais conhecidas) */
const buckets = {
  cloudy: [
    "1533874516715-de40f802443a", "1504608524841-42fe6f032b4b", "1499346030926-9a72daac6c63",
    "1489515217757-5fd1be406fef", "1525490829609-d166ddb58678", "1527482797697-8795b05a13fe",
    "1585074245728-eedb0cc44a66", "1529482625147-9e202bdf2f9c", "1585245332774-3dd2b177e7fa",
    "1512250591270-0bea37004c99", "1513342774453-5d76a9768b41", "1530814475243-8163d9d8bf41"
  ],
  drizzle: [
    "1515694346937-94d85e41e6f0", "1501999635878-71cb5379c2d8", "1482192505345-5655af888cc4",
    "1500534623283-312aade485b7", "1517960413843-0aee8e2b3285", "1485236715568-ddc5ee6ca227",
    "1487621167305-5d248087c724", "1500534314209-a25ddb2bd429"
  ],
  rain: [
    "1519692933481-e162a57d6721", "1438449805896-28a666819a20", "1500375592092-40eb2168fd21",
    "1527766833261-b09c3163a791", "1482192596544-9eb780fc7f66", "1493314894560-5c412a56c17c",
    "1534274988757-a28bf1a57c17", "1534852654286-120d822937f7"
  ],
  storm: [
    "1605727216801-e27ce1d0cc28", "1503437313881-503a91226402", "1500674425229-f692875b0ab7",
    "1429552077091-836152271555", "1516490981167-dc990a242afe", "1461511669078-d46bf351cd6e",
    "1772183094856-3f9c66479978", "1779301458020-127b0dcec9d4", "1774703299544-9b98d029fba5",
    "1496303861503-f6ec4e50034e", "1504639725590-34d0984388bd"
  ],
  fog: [
    "1486406146926-c627a92ad1ab", "1470770903676-69b98201ea1c", "1448375240586-882707db888b",
    "1500530855697-b586d89ba3ee", "1464822759023-fed622ff2c3b", "1534852654286-120d822937f7",
    "1485236715568-ddc5ee6ca227", "1487621167305-5d248087c724"
  ],
  snow: [
    "1454496522488-7a8e488e8606", "1483664852095-d6cc6870702d", "1517299321609-52687d1bc55a",
    "1578662996442-48f60103fc96", "1543359278-18e6c95a483c", "1474779751981-5d6bb8cb0a35",
    "1557839605-2a1f0eecb006", "1516914589923-f105f1535f88", "1580218056369-53ddfbfe94f3",
    "1606592641984-c9a1506d0705"
  ],
  countryside: [
    "1506744038136-46273834b3fb", "1469474968028-56623f02e42e", "1416879595882-3373a0480b5b",
    "1506905925346-21bda4d32df4", "1500534314209-a25ddb2bd429", "1500530855697-b586d89ba3ee"
  ],
  forest: [
    "1441974231531-c6227db76b6e", "1513836279014-a89f7a76ae86", "1502082553048-f009c37129b9",
    "1473773508845-188df298d2d1", "1465379944081-7f47de8d74ac", "1448375240586-882707db888b"
  ],
  metro: [
    "1477959858617-67f85cf4f1df", "1449824913935-59a10b8d2000", "1494526585095-c41746248156",
    "1518005020951-eccb494ad742", "1514565131-fce0801e5785", "1499092346589-b9b6be3e94b2",
    "1470219556762-1771e7f9427d"
  ],
  tropical: [
    "1507525428034-b723cf961d3e", "1493558103817-58b2924bce98", "1473116763249-2faaef81ccda",
    "1519046904884-53103b34b206", "1504674900247-0877df9cc836", "1512453979798-5ea266f8880c",
    "1502082553048-f009c37129b9"
  ],
  coast: [
    "1507525428034-b723cf961d3e", "1493558103817-58b2924bce98", "1473116763249-2faaef81ccda",
    "1519046904884-53103b34b206", "1504674900247-0877df9cc836", "1512453979798-5ea266f8880c"
  ],
  valley: [
    "1506744038136-46273834b3fb", "1469474968028-56623f02e42e", "1473773508845-188df298d2d1",
    "1500534314209-a25ddb2bd429", "1416879595882-3373a0480b5b"
  ],
  mountain: [
    "1464822759023-fed622ff2c3b", "1464823063530-08f10ed1a2dd", "1454496522488-7a8e488e8606",
    "1493246318656-5bfd4cfb29b8", "1530814475243-8163d9d8bf41", "1585245332774-3dd2b177e7fa",
    "1529482625147-9e202bdf2f9c", "1557839605-2a1f0eecb006"
  ],
  caatinga: [
    "1416879595882-3373a0480b5b", "1500530855697-b586d89ba3ee", "1506905925346-21bda4d32df4",
    "1495344517868-8ebaf0a2044a", "1507003211169-0a1dd7228f2d", "1560807707-8cc77767d783"
  ],
  evening: [
    "1506905925346-21bda4d32df4", "1495344517868-8ebaf0a2044a", "1496303861503-f6ec4e50034e",
    "1519681393784-d120267933ba", "1470219556762-1771e7f9427d", "1504639725590-34d0984388bd"
  ],
  night: [
    "1514565131-fce0801e5785", "1499092346589-b9b6be3e94b2", "1470219556762-1771e7f9427d",
    "1519681393784-d120267933ba", "1772183094856-3f9c66479978", "1774703299544-9b98d029fba5"
  ],
  morning: [
    "1506744038136-46273834b3fb", "1469474968028-56623f02e42e", "1506905925346-21bda4d32df4",
    "1441974231531-c6227db76b6e", "1507525428034-b723cf961d3e", "1464822759023-fed622ff2c3b"
  ]
};

function mapIds(ids) {
  return ids.filter((id) => unsplashIds.includes(id)).map(u);
}

function mergeUnique(...arrays) {
  const seen = new Set();
  const out = [];
  for (const arr of arrays) {
    for (const url of arr) {
      if (url && !seen.has(url)) {
        seen.add(url);
        out.push(url);
      }
    }
  }
  return out;
}

const weatherPhotos = {
  cloudy: mapIds(buckets.cloudy),
  drizzle: mapIds(buckets.drizzle),
  rain: mapIds(buckets.rain),
  storm: mapIds(buckets.storm),
  fog: mapIds(buckets.fog),
  snow: mapIds(buckets.snow)
};

const profilePhotos = {
  countryside: {
    clearDay: mergeUnique(mapIds(buckets.countryside), mapIds(buckets.morning)),
    clearHotDay: mapIds(buckets.countryside),
    clearColdDay: mapIds(buckets.fog.slice(0, 4)),
    clearEvening: mapIds(buckets.evening),
    clearNight: mapIds(buckets.night.slice(0, 4)),
    cloudy: mapIds(buckets.cloudy.slice(0, 6)),
    rain: mapIds(buckets.rain.slice(0, 6))
  },
  forest: {
    clearDay: mapIds(buckets.forest),
    clearHotDay: mergeUnique(mapIds(buckets.forest.slice(0, 4)), mapIds(buckets.tropical.slice(0, 2))),
    clearColdDay: mapIds(buckets.fog.slice(0, 4)),
    clearEvening: mergeUnique(mapIds(buckets.evening.slice(0, 4)), mapIds(buckets.forest.slice(0, 2))),
    clearNight: mapIds(buckets.night.slice(0, 4)),
    cloudy: mergeUnique(mapIds(buckets.cloudy.slice(0, 4)), mapIds(buckets.forest.slice(0, 3))),
    rain: mergeUnique(mapIds(buckets.rain.slice(0, 5)), mapIds(buckets.forest.slice(0, 2))),
    fog: mergeUnique(mapIds(buckets.fog.slice(0, 5)), mapIds(buckets.forest.slice(0, 2)))
  },
  metro: {
    clearDay: mapIds(buckets.metro),
    clearHotDay: mapIds(buckets.metro.slice(0, 5)),
    clearColdDay: mergeUnique(mapIds(buckets.metro.slice(0, 3)), mapIds(buckets.fog.slice(0, 3))),
    clearEvening: mergeUnique(mapIds(buckets.evening.slice(0, 4)), mapIds(buckets.metro.slice(0, 3))),
    clearNight: mapIds(buckets.night),
    cloudy: mergeUnique(mapIds(buckets.cloudy.slice(0, 4)), mapIds(buckets.metro.slice(0, 3))),
    rain: mergeUnique(mapIds(buckets.rain.slice(0, 5)), mapIds(buckets.metro.slice(0, 2))),
    storm: mergeUnique(mapIds(buckets.storm.slice(0, 5)), mapIds(buckets.metro.slice(0, 2)))
  },
  tropical: {
    clearDay: mergeUnique(mapIds(buckets.tropical), pexelsUrls.slice(0, 20)),
    clearHotDay: mergeUnique(mapIds(buckets.tropical), pexelsUrls.slice(0, 15)),
    clearColdDay: mergeUnique(mapIds(buckets.tropical.slice(0, 4)), pexelsUrls.slice(10, 20)),
    clearEvening: mergeUnique(mapIds(buckets.evening.slice(0, 4)), mapIds(buckets.tropical), pexelsUrls.slice(0, 10)),
    clearNight: mergeUnique(mapIds(buckets.night.slice(0, 4)), mapIds(buckets.tropical.slice(0, 3)), pexelsUrls.slice(20, 30)),
    cloudy: mergeUnique(mapIds(buckets.cloudy.slice(0, 4)), pexelsUrls.slice(0, 8)),
    rain: mergeUnique(mapIds(buckets.rain.slice(0, 5)), pexelsUrls.slice(0, 8)),
    storm: mergeUnique(mapIds(buckets.storm.slice(0, 5)), pexelsUrls.slice(0, 6))
  },
  coast: {
    clearDay: mergeUnique(mapIds(buckets.coast), pexelsUrls.slice(0, 25)),
    clearHotDay: mergeUnique(mapIds(buckets.coast), pexelsUrls.slice(0, 20)),
    clearColdDay: mergeUnique(mapIds(buckets.coast.slice(0, 4)), pexelsUrls.slice(15, 25)),
    clearEvening: mergeUnique(mapIds(buckets.evening.slice(0, 4)), mapIds(buckets.coast), pexelsUrls.slice(0, 12)),
    clearNight: mergeUnique(mapIds(buckets.night.slice(0, 4)), mapIds(buckets.coast.slice(0, 3)), pexelsUrls.slice(25, 40)),
    cloudy: mergeUnique(mapIds(buckets.cloudy.slice(0, 4)), pexelsUrls.slice(0, 10)),
    rain: mergeUnique(mapIds(buckets.rain.slice(0, 5)), pexelsUrls.slice(0, 10)),
    storm: mergeUnique(mapIds(buckets.storm.slice(0, 5)), pexelsUrls.slice(0, 8))
  },
  valley: {
    cloudy: mergeUnique(mapIds(buckets.cloudy.slice(0, 5)), mapIds(buckets.valley)),
    drizzle: mergeUnique(mapIds(buckets.drizzle.slice(0, 4)), mapIds(buckets.valley)),
    rain: mergeUnique(mapIds(buckets.rain.slice(0, 5)), mapIds(buckets.valley)),
    fog: mergeUnique(mapIds(buckets.fog.slice(0, 4)), mapIds(buckets.valley)),
    clearDay: mergeUnique(mapIds(buckets.valley), mapIds(buckets.morning.slice(0, 3))),
    clearHotDay: mapIds(buckets.valley),
    clearColdDay: mergeUnique(mapIds(buckets.valley.slice(0, 3)), mapIds(buckets.fog.slice(0, 3))),
    clearEvening: mergeUnique(mapIds(buckets.evening.slice(0, 4)), mapIds(buckets.valley.slice(0, 2))),
    clearNight: mapIds(buckets.night.slice(0, 4))
  },
  mountain: {
    clearDay: mapIds(buckets.mountain),
    clearHotDay: mapIds(buckets.mountain.slice(0, 5)),
    clearColdDay: mergeUnique(mapIds(buckets.mountain.slice(0, 4)), mapIds(buckets.snow.slice(0, 4))),
    clearEvening: mergeUnique(mapIds(buckets.evening.slice(0, 4)), mapIds(buckets.mountain.slice(0, 3))),
    clearNight: mergeUnique(mapIds(buckets.night.slice(0, 4)), mapIds(buckets.mountain.slice(0, 2))),
    cloudy: mergeUnique(mapIds(buckets.cloudy.slice(0, 5)), mapIds(buckets.mountain.slice(0, 3))),
    snow: mergeUnique(mapIds(buckets.snow), mapIds(buckets.mountain.slice(0, 4))),
    storm: mergeUnique(mapIds(buckets.storm.slice(0, 5)), mapIds(buckets.mountain.slice(0, 2))),
    fog: mergeUnique(mapIds(buckets.fog.slice(0, 5)), mapIds(buckets.mountain.slice(0, 2)))
  },
  caatinga: {
    clearDay: mapIds(buckets.caatinga),
    clearHotDay: mapIds(buckets.caatinga),
    clearColdDay: mapIds(buckets.caatinga.slice(0, 4)),
    clearEvening: mergeUnique(mapIds(buckets.evening.slice(0, 4)), mapIds(buckets.caatinga.slice(0, 3))),
    clearNight: mapIds(buckets.night.slice(0, 4)),
    cloudy: mergeUnique(mapIds(buckets.cloudy.slice(0, 4)), mapIds(buckets.caatinga.slice(0, 3))),
    rain: mergeUnique(mapIds(buckets.rain.slice(0, 5)), mapIds(buckets.caatinga.slice(0, 2))),
    drizzle: mapIds(buckets.drizzle.slice(0, 4)),
    fog: mapIds(buckets.fog.slice(0, 3))
  }
};

const allUrls = new Set();
for (const arr of Object.values(weatherPhotos)) arr.forEach((url) => allUrls.add(url));
for (const profile of Object.values(profilePhotos)) {
  for (const arr of Object.values(profile)) arr.forEach((url) => allUrls.add(url));
}

const HOT_PROFILES = ["tropical", "caatinga", "coast"];
const weatherSceneKeys = ["cloudy", "drizzle", "rain", "storm", "fog", "snow"];

const output = `/**
 * Fotos de cena — somente fotografias reais verificadas.
 * ${allUrls.size} URLs (Unsplash validado + Pexels). Gerado por scripts/build-verified-pool.mjs
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
console.log(`Catálogo: ${allUrls.size} fotos reais únicas (${unsplashIds.length} Unsplash + ${pexelsUrls.length} Pexels)`);
