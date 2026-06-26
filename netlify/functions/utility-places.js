const https = require("https");

const UTILITY_PLACE_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter"
];

const UTILITY_PLACE_CATEGORIES = {
  mechanic: [
    { key: "shop", value: "car_repair" },
    { key: "amenity", value: "car_repair" },
    { key: "shop", value: "car_parts" },
    { key: "shop", value: "tyres" }
  ],
  electrician: [
    { key: "craft", value: "electrician" },
    { key: "shop", value: "electrical" }
  ],
  hardware: [
    { key: "shop", value: "hardware" },
    { key: "shop", value: "doityourself" }
  ],
  market: [
    { key: "shop", value: "supermarket" },
    { key: "shop", value: "convenience" },
    { key: "shop", value: "greengrocer" },
    { key: "amenity", value: "marketplace" }
  ],
  snack: [
    { key: "amenity", value: "fast_food" },
    { key: "amenity", value: "cafe" },
    { key: "amenity", value: "restaurant" },
    { key: "shop", value: "bakery" }
  ],
  hotel: [
    { key: "tourism", value: "hotel" },
    { key: "tourism", value: "motel" },
    { key: "tourism", value: "guest_house" },
    { key: "tourism", value: "hostel" }
  ],
  pharmacy: [
    { key: "amenity", value: "pharmacy" },
    { key: "shop", value: "chemist" }
  ],
  fuel: [{ key: "amenity", value: "fuel" }],
  gas: [
    { key: "shop", value: "gas" },
    { key: "fuel:lpg", value: "yes", requires: { amenity: "fuel" } }
  ],
  hospital: [
    { key: "amenity", value: "hospital" },
    { key: "amenity", value: "clinic" },
    { key: "amenity", value: "doctors" }
  ],
  bank: [
    { key: "amenity", value: "bank" },
    { key: "amenity", value: "atm" }
  ],
  plumber: [{ key: "craft", value: "plumber" }],
  bakery: [{ key: "shop", value: "bakery" }],
  pet: [{ key: "shop", value: "pet" }],
  laundry: [
    { key: "shop", value: "laundry" },
    { key: "shop", value: "dry_cleaning" }
  ],
  school: [
    { key: "amenity", value: "school" },
    { key: "amenity", value: "kindergarten" }
  ],
  police: [{ key: "amenity", value: "police" }],
  transport: [
    { key: "amenity", value: "bus_station" },
    { key: "amenity", value: "taxi" },
    { key: "public_transport", value: "station" }
  ],
  parking: [{ key: "amenity", value: "parking" }],
  dentist: [{ key: "amenity", value: "dentist" }],
  gym: [{ key: "leisure", value: "fitness_centre" }]
};

const DEFAULT_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "public, max-age=120, s-maxage=300"
};

function buildUtilityQuery(latitude, longitude, categoryKey, radius) {
  const tags = UTILITY_PLACE_CATEGORIES[categoryKey] || [];
  const around = `around:${radius},${latitude},${longitude}`;
  const blocks = tags.flatMap((tag) => {
    const filter =
      tag.requires && typeof tag.requires === "object"
        ? Object.entries(tag.requires)
            .map(([reqKey, reqValue]) => `["${reqKey}"="${reqValue}"]`)
            .join("")
        : "";
    return ["node", "way", "relation"].map(
      (type) => `${type}(${around})${filter}["${tag.key}"="${tag.value}"];`
    );
  });

  return `[out:json][timeout:18];(${blocks.join("")});out center tags 40;`;
}

function postQuery(endpoint, body, timeoutMs = 12000) {
  return new Promise((resolve, reject) => {
    const request = https.request(
      endpoint,
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
          "Content-Length": Buffer.byteLength(body)
        }
      },
      (response) => {
        let data = "";
        response.setEncoding("utf8");
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          if (Number(response.statusCode || 500) >= 400) {
            reject(new Error(`http_${response.statusCode}`));
            return;
          }

          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(error);
          }
        });
      }
    );

    request.on("error", reject);
    request.setTimeout(timeoutMs, () => {
      request.destroy(new Error("timeout"));
    });
    request.write(body);
    request.end();
  });
}

async function fetchOverpassElements(latitude, longitude, categoryKey, radius) {
  const query = buildUtilityQuery(latitude, longitude, categoryKey, radius);
  const responses = await Promise.allSettled(
    UTILITY_PLACE_ENDPOINTS.map((endpoint) => postQuery(endpoint, query))
  );

  const fulfilled = responses
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value)
    .filter((payload) => Array.isArray(payload.elements));

  if (!fulfilled.length) {
    throw new Error("overpass_unavailable");
  }

  return fulfilled.sort((first, second) => second.elements.length - first.elements.length)[0].elements;
}

exports.handler = async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: DEFAULT_HEADERS,
      body: ""
    };
  }

  const latitude = Number(event.queryStringParameters?.latitude);
  const longitude = Number(event.queryStringParameters?.longitude);
  const category = String(event.queryStringParameters?.category || "").trim();
  const radius = Math.max(3000, Math.min(28000, Number(event.queryStringParameters?.radius || 8000)));

  if (!Number.isFinite(latitude) || !Number.isFinite(longitude) || !UTILITY_PLACE_CATEGORIES[category]) {
    return {
      statusCode: 400,
      headers: DEFAULT_HEADERS,
      body: JSON.stringify({ error: "invalid_parameters" })
    };
  }

  try {
    const elements = await fetchOverpassElements(latitude, longitude, category, radius);
    return {
      statusCode: 200,
      headers: DEFAULT_HEADERS,
      body: JSON.stringify({
        elements,
        radius
      })
    };
  } catch (error) {
    return {
      statusCode: 502,
      headers: DEFAULT_HEADERS,
      body: JSON.stringify({
        error: "place_lookup_failed"
      })
    };
  }
};
