/**
 * Fotos de cena — somente fotografias reais verificadas.
 * 122 URLs (Unsplash validado + Pexels). Gerado por scripts/build-verified-pool.mjs
 */
(function () {
  const weatherPhotos = {
    cloudy: [
        "https://images.unsplash.com/photo-1533874516715-de40f802443a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1585074245728-eedb0cc44a66?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1529482625147-9e202bdf2f9c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1585245332774-3dd2b177e7fa?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1512250591270-0bea37004c99?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1513342774453-5d76a9768b41?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1530814475243-8163d9d8bf41?auto=format&fit=crop&w=1920&q=85&fm=jpg"
    ],
    drizzle: [
        "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1487621167305-5d248087c724?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=85&fm=jpg"
    ],
    rain: [
        "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1438449805896-28a666819a20?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1534852654286-120d822937f7?auto=format&fit=crop&w=1920&q=85&fm=jpg"
    ],
    storm: [
        "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1429552077091-836152271555?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1516490981167-dc990a242afe?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1772183094856-3f9c66479978?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1779301458020-127b0dcec9d4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1774703299544-9b98d029fba5?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1496303861503-f6ec4e50034e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1920&q=85&fm=jpg"
    ],
    fog: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1534852654286-120d822937f7?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1487621167305-5d248087c724?auto=format&fit=crop&w=1920&q=85&fm=jpg"
    ],
    snow: [
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1543359278-18e6c95a483c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1474779751981-5d6bb8cb0a35?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1557839605-2a1f0eecb006?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1516914589923-f105f1535f88?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1580218056369-53ddfbfe94f3?auto=format&fit=crop&w=1920&q=85&fm=jpg",
        "https://images.unsplash.com/photo-1606592641984-c9a1506d0705?auto=format&fit=crop&w=1920&q=85&fm=jpg"
    ]
};

  const profilePhotos = {
    countryside: {
        clearDay: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearHotDay: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearColdDay: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearEvening: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1496303861503-f6ec4e50034e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearNight: [
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        cloudy: [
            "https://images.unsplash.com/photo-1533874516715-de40f802443a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        rain: [
            "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1438449805896-28a666819a20?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ]
    },
    forest: {
        clearDay: [
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearHotDay: [
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearColdDay: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearEvening: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1496303861503-f6ec4e50034e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearNight: [
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        cloudy: [
            "https://images.unsplash.com/photo-1533874516715-de40f802443a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        rain: [
            "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1438449805896-28a666819a20?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        fog: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ]
    },
    metro: {
        clearDay: [
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearHotDay: [
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearColdDay: [
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearEvening: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1496303861503-f6ec4e50034e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearNight: [
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1772183094856-3f9c66479978?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1774703299544-9b98d029fba5?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        cloudy: [
            "https://images.unsplash.com/photo-1533874516715-de40f802443a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        rain: [
            "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1438449805896-28a666819a20?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        storm: [
            "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1429552077091-836152271555?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1516490981167-dc990a242afe?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ]
    },
    tropical: {
        clearDay: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/6910147/pexels-photo-6910147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/36840682/pexels-photo-36840682.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14214733/pexels-photo-14214733.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12831944/pexels-photo-12831944.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/32262434/pexels-photo-32262434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/5876967/pexels-photo-5876967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/2549017/pexels-photo-2549017.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14570522/pexels-photo-14570522.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/22480990/pexels-photo-22480990.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11538957/pexels-photo-11538957.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/31377612/pexels-photo-31377612.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12858513/pexels-photo-12858513.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/33071323/pexels-photo-33071323.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/31024563/pexels-photo-31024563.png?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11089419/pexels-photo-11089419.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12792354/pexels-photo-12792354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11340077/pexels-photo-11340077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/17634000/pexels-photo-17634000.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/23696968/pexels-photo-23696968.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ],
        clearHotDay: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/6910147/pexels-photo-6910147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/36840682/pexels-photo-36840682.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14214733/pexels-photo-14214733.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12831944/pexels-photo-12831944.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/32262434/pexels-photo-32262434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/5876967/pexels-photo-5876967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/2549017/pexels-photo-2549017.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14570522/pexels-photo-14570522.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/22480990/pexels-photo-22480990.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11538957/pexels-photo-11538957.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/31377612/pexels-photo-31377612.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12858513/pexels-photo-12858513.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/33071323/pexels-photo-33071323.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/31024563/pexels-photo-31024563.png?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ],
        clearColdDay: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/31377612/pexels-photo-31377612.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12858513/pexels-photo-12858513.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/33071323/pexels-photo-33071323.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/31024563/pexels-photo-31024563.png?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11089419/pexels-photo-11089419.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12792354/pexels-photo-12792354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11340077/pexels-photo-11340077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/17634000/pexels-photo-17634000.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/23696968/pexels-photo-23696968.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ],
        clearEvening: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1496303861503-f6ec4e50034e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/6910147/pexels-photo-6910147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/36840682/pexels-photo-36840682.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14214733/pexels-photo-14214733.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12831944/pexels-photo-12831944.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/32262434/pexels-photo-32262434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/5876967/pexels-photo-5876967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/2549017/pexels-photo-2549017.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14570522/pexels-photo-14570522.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/22480990/pexels-photo-22480990.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11538957/pexels-photo-11538957.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ],
        clearNight: [
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/12001663/pexels-photo-12001663.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/31875075/pexels-photo-31875075.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/10490906/pexels-photo-10490906.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/34667432/pexels-photo-34667432.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/8039336/pexels-photo-8039336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/33021022/pexels-photo-33021022.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12001661/pexels-photo-12001661.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/23696965/pexels-photo-23696965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/37120922/pexels-photo-37120922.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/37541393/pexels-photo-37541393.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ],
        cloudy: [
            "https://images.unsplash.com/photo-1533874516715-de40f802443a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/6910147/pexels-photo-6910147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/36840682/pexels-photo-36840682.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14214733/pexels-photo-14214733.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12831944/pexels-photo-12831944.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/32262434/pexels-photo-32262434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/5876967/pexels-photo-5876967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/2549017/pexels-photo-2549017.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14570522/pexels-photo-14570522.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ],
        rain: [
            "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1438449805896-28a666819a20?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/6910147/pexels-photo-6910147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/36840682/pexels-photo-36840682.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14214733/pexels-photo-14214733.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12831944/pexels-photo-12831944.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/32262434/pexels-photo-32262434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/5876967/pexels-photo-5876967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/2549017/pexels-photo-2549017.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14570522/pexels-photo-14570522.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ],
        storm: [
            "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1429552077091-836152271555?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1516490981167-dc990a242afe?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/6910147/pexels-photo-6910147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/36840682/pexels-photo-36840682.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14214733/pexels-photo-14214733.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12831944/pexels-photo-12831944.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/32262434/pexels-photo-32262434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/5876967/pexels-photo-5876967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ]
    },
    coast: {
        clearDay: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/6910147/pexels-photo-6910147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/36840682/pexels-photo-36840682.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14214733/pexels-photo-14214733.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12831944/pexels-photo-12831944.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/32262434/pexels-photo-32262434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/5876967/pexels-photo-5876967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/2549017/pexels-photo-2549017.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14570522/pexels-photo-14570522.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/22480990/pexels-photo-22480990.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11538957/pexels-photo-11538957.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/31377612/pexels-photo-31377612.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12858513/pexels-photo-12858513.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/33071323/pexels-photo-33071323.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/31024563/pexels-photo-31024563.png?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11089419/pexels-photo-11089419.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12792354/pexels-photo-12792354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11340077/pexels-photo-11340077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/17634000/pexels-photo-17634000.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/23696968/pexels-photo-23696968.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12001663/pexels-photo-12001663.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/31875075/pexels-photo-31875075.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/10490906/pexels-photo-10490906.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/34667432/pexels-photo-34667432.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/8039336/pexels-photo-8039336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ],
        clearHotDay: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/6910147/pexels-photo-6910147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/36840682/pexels-photo-36840682.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14214733/pexels-photo-14214733.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12831944/pexels-photo-12831944.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/32262434/pexels-photo-32262434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/5876967/pexels-photo-5876967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/2549017/pexels-photo-2549017.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14570522/pexels-photo-14570522.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/22480990/pexels-photo-22480990.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11538957/pexels-photo-11538957.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/31377612/pexels-photo-31377612.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12858513/pexels-photo-12858513.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/33071323/pexels-photo-33071323.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/31024563/pexels-photo-31024563.png?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11089419/pexels-photo-11089419.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12792354/pexels-photo-12792354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11340077/pexels-photo-11340077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/17634000/pexels-photo-17634000.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/23696968/pexels-photo-23696968.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ],
        clearColdDay: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/11089419/pexels-photo-11089419.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12792354/pexels-photo-12792354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11340077/pexels-photo-11340077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/17634000/pexels-photo-17634000.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/23696968/pexels-photo-23696968.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12001663/pexels-photo-12001663.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/31875075/pexels-photo-31875075.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/10490906/pexels-photo-10490906.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/34667432/pexels-photo-34667432.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/8039336/pexels-photo-8039336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ],
        clearEvening: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1496303861503-f6ec4e50034e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/6910147/pexels-photo-6910147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/36840682/pexels-photo-36840682.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14214733/pexels-photo-14214733.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12831944/pexels-photo-12831944.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/32262434/pexels-photo-32262434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/5876967/pexels-photo-5876967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/2549017/pexels-photo-2549017.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14570522/pexels-photo-14570522.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/22480990/pexels-photo-22480990.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11538957/pexels-photo-11538957.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/31377612/pexels-photo-31377612.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ],
        clearNight: [
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/33021022/pexels-photo-33021022.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12001661/pexels-photo-12001661.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/23696965/pexels-photo-23696965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/37120922/pexels-photo-37120922.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/37541393/pexels-photo-37541393.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11006267/pexels-photo-11006267.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/28424090/pexels-photo-28424090.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/319893/pexels-photo-319893.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/30356959/pexels-photo-30356959.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/37945845/pexels-photo-37945845.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/31086786/pexels-photo-31086786.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/28159728/pexels-photo-28159728.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12858457/pexels-photo-12858457.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/18387034/pexels-photo-18387034.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12001673/pexels-photo-12001673.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ],
        cloudy: [
            "https://images.unsplash.com/photo-1533874516715-de40f802443a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/6910147/pexels-photo-6910147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/36840682/pexels-photo-36840682.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14214733/pexels-photo-14214733.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12831944/pexels-photo-12831944.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/32262434/pexels-photo-32262434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/5876967/pexels-photo-5876967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/2549017/pexels-photo-2549017.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14570522/pexels-photo-14570522.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/22480990/pexels-photo-22480990.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11538957/pexels-photo-11538957.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ],
        rain: [
            "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1438449805896-28a666819a20?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/6910147/pexels-photo-6910147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/36840682/pexels-photo-36840682.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14214733/pexels-photo-14214733.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12831944/pexels-photo-12831944.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/32262434/pexels-photo-32262434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/5876967/pexels-photo-5876967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/2549017/pexels-photo-2549017.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14570522/pexels-photo-14570522.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/22480990/pexels-photo-22480990.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/11538957/pexels-photo-11538957.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ],
        storm: [
            "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1429552077091-836152271555?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1516490981167-dc990a242afe?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.pexels.com/photos/6910147/pexels-photo-6910147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/36840682/pexels-photo-36840682.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14214733/pexels-photo-14214733.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/12831944/pexels-photo-12831944.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/32262434/pexels-photo-32262434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/5876967/pexels-photo-5876967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/2549017/pexels-photo-2549017.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
            "https://images.pexels.com/photos/14570522/pexels-photo-14570522.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        ]
    },
    valley: {
        cloudy: [
            "https://images.unsplash.com/photo-1533874516715-de40f802443a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        drizzle: [
            "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        rain: [
            "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1438449805896-28a666819a20?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        fog: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearDay: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearHotDay: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearColdDay: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearEvening: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1496303861503-f6ec4e50034e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearNight: [
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ]
    },
    mountain: {
        clearDay: [
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1530814475243-8163d9d8bf41?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1585245332774-3dd2b177e7fa?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1529482625147-9e202bdf2f9c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1557839605-2a1f0eecb006?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearHotDay: [
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1530814475243-8163d9d8bf41?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearColdDay: [
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearEvening: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1496303861503-f6ec4e50034e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearNight: [
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        cloudy: [
            "https://images.unsplash.com/photo-1533874516715-de40f802443a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        snow: [
            "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1543359278-18e6c95a483c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1474779751981-5d6bb8cb0a35?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1557839605-2a1f0eecb006?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1516914589923-f105f1535f88?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1580218056369-53ddfbfe94f3?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1606592641984-c9a1506d0705?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        storm: [
            "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1429552077091-836152271555?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1516490981167-dc990a242afe?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        fog: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ]
    },
    caatinga: {
        clearDay: [
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearHotDay: [
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearColdDay: [
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearEvening: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1496303861503-f6ec4e50034e?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        clearNight: [
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        cloudy: [
            "https://images.unsplash.com/photo-1533874516715-de40f802443a?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        rain: [
            "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1438449805896-28a666819a20?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        drizzle: [
            "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ],
        fog: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1920&q=85&fm=jpg",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85&fm=jpg"
        ]
    }
};

  const HOT_PROFILES = new Set(["tropical","caatinga","coast"]);
  const weatherSceneKeys = new Set(["cloudy","drizzle","rain","storm","fog","snow"]);

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
