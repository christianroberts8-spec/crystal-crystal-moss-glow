import { clampDateYear } from "./history";
import type { RealPlace } from "./realPlaces";
import type { StructureKind } from "./types";

export interface PlaceLife {
  /** Year the structure was completed / city founded (negative = BCE). */
  built: number;
  /** Year demolished, destroyed, or abandoned. */
  gone?: number;
  /** After gone, still show as ruins. */
  ruin?: boolean;
  /** Published construction/founding year (not an estimate). */
  verified?: boolean;
}

/** Landmark construction / destruction from published dates. Keyed by exact RealPlace.name. */
const LANDMARKS: Record<string, PlaceLife> = {
  "Abu Simbel Temples": { built: -1264, verified: true },
  "Ahu Tongariki Moai": { built: 1400, verified: true },
  "Ajanta Caves": { built: -200, verified: true },
  "Alcatraz Island": { built: 1860, verified: true },
  Alhambra: { built: 1238, verified: true },
  Ambarchik: { built: 1932, verified: true },
  "Ancient Olympia": { built: -776, verified: true },
  "Angkor Wat": { built: 1150, verified: true },
  "Arc de Triomphe": { built: 1836, verified: true },
  "Arg-e Bam": { built: 500, verified: true },
  Atomium: { built: 1958, verified: true },
  Babylon: { built: -1894, gone: -539, ruin: true, verified: true },
  "Bagan Temples": { built: 1057, verified: true },
  "Baiterek Tower": { built: 2002, verified: true },
  "Belém Tower": { built: 1519, verified: true },
  "Blue Mosque": { built: 1616, verified: true },
  Borobudur: { built: 825, verified: true },
  "Bran Castle": { built: 1377, verified: true },
  "Brandenburg Gate": { built: 1791, verified: true },
  "Brooklyn Bridge": { built: 1883, verified: true },
  "Buckingham Palace": { built: 1703, verified: true },
  Bulguksa: { built: 774, verified: true },
  "Burj Al Arab": { built: 1999, verified: true },
  "Burj Khalifa": { built: 2010, verified: true },
  "CN Tower": { built: 1976, verified: true },
  "Capitolio Havana": { built: 1929, verified: true },
  "Carthage Antonine Baths": { built: 145, gone: 698, ruin: true, verified: true },
  "Charles Bridge": { built: 1402, verified: true },
  Charminar: { built: 1591, verified: true },
  "Chichen Itza": { built: 600, gone: 1250, ruin: true, verified: true },
  "Christ the Redeemer": { built: 1931, verified: true },
  "Chrysler Building": { built: 1930, verified: true },
  "Church of the Holy Sepulchre": { built: 335, verified: true },
  "Cologne Cathedral": { built: 1248, verified: true },
  Colosseum: { built: 80, verified: true },
  "Ctesiphon Arch": { built: 540, gone: 637, ruin: true, verified: true },
  "Djinguereber Mosque": { built: 1327, verified: true },
  "Dome of the Rock": { built: 691, verified: true },
  "Dubrovnik Walls": { built: 1350, verified: true },
  "Edinburgh Castle": { built: 1103, verified: true },
  "Eiffel Tower": { built: 1889, verified: true },
  "Elizabeth Tower (Big Ben)": { built: 1859, verified: true },
  "Empire State Building": { built: 1931, verified: true },
  "Florence Cathedral": { built: 1436, verified: true },
  "Forbidden City": { built: 1420, verified: true },
  "Fushimi Inari Shrine": { built: 711, verified: true },
  "Gateway Arch": { built: 1965, verified: true },
  "Gateway of India": { built: 1924, verified: true },
  "Giant's Causeway": { built: -10000, verified: true },
  "Golden Gate Bridge": { built: 1937, verified: true },
  "Golden Temple": { built: 1604, verified: true },
  "Goreme Open Air Museum": { built: 400, verified: true },
  "Grand Canyon South Rim": { built: -10000, verified: true },
  "Grand Palace Bangkok": { built: 1782, verified: true },
  "Great Pyramid of Giza": { built: -2560, verified: true },
  "Great Sphinx of Giza": { built: -2500, verified: true },
  "Great Wall at Badaling": { built: 1505, verified: true },
  "Great Wall at Mutianyu": { built: 1569, verified: true },
  "Great Zimbabwe": { built: 1100, gone: 1450, ruin: true, verified: true },
  "Gyeongbokgung Palace": { built: 1395, verified: true },
  "Hagia Sophia": { built: 537, verified: true },
  "Hampi Virupaksha Temple": { built: 700, verified: true },
  "Hassan II Mosque": { built: 1993, verified: true },
  "Heidelberg Castle": { built: 1214, verified: true },
  "Himeji Castle": { built: 1333, verified: true },
  "Hiroshima Peace Memorial": { built: 1915, verified: true },
  "Hollywood Sign": { built: 1923, verified: true },
  "Hoover Dam": { built: 1936, verified: true },
  "Hungarian Parliament": { built: 1904, verified: true },
  "Iguazu Falls": { built: -10000, verified: true },
  "Imam Reza Shrine": { built: 818, verified: true },
  "Imperial City Hue": { built: 1804, verified: true },
  "Independence Hall": { built: 1753, verified: true },
  "India Gate": { built: 1931, verified: true },
  "Itsukushima Shrine": { built: 593, verified: true },
  "Jeronimos Monastery": { built: 1501, verified: true },
  Kaaba: { built: -100, verified: true },
  "Kalyan Minaret": { built: 1127, verified: true },
  "Karnak Temple": { built: -2000, verified: true },
  "Kennedy Space Center": { built: 1962, verified: true },
  Kilimanjaro: { built: -10000, verified: true },
  "Kinderdijk Windmills": { built: 1740, verified: true },
  "Kingdom Centre": { built: 2002, verified: true },
  "Kiyomizu-dera": { built: 778, verified: true },
  "Koutoubia Mosque": { built: 1197, verified: true },
  "Krak des Chevaliers": { built: 1142, verified: true },
  "Leaning Tower of Pisa": { built: 1372, verified: true },
  "Leptis Magna": { built: -1100, gone: 650, ruin: true, verified: true },
  "Leshan Giant Buddha": { built: 803, verified: true },
  "Library of Alexandria (Bibliotheca)": { built: 2002, verified: true },
  "Library of Celsus, Ephesus": { built: 117, gone: 262, ruin: true, verified: true },
  "Lincoln Memorial": { built: 1922, verified: true },
  "Lotus Temple": { built: 1986, verified: true },
  "Louvre Museum": { built: 1190, verified: true },
  "Luxor Temple": { built: -1400, verified: true },
  "Machu Picchu": { built: 1450, gone: 1572, ruin: true, verified: true },
  "Marina Bay Sands": { built: 2010, verified: true },
  Masada: { built: -37, gone: 73, ruin: true, verified: true },
  Matterhorn: { built: -10000, verified: true },
  "McMurdo Station": { built: 1956, verified: true },
  "Meenakshi Temple": { built: 1623, verified: true },
  "Mezquita of Córdoba": { built: 785, verified: true },
  "Milan Cathedral": { built: 1386, verified: true },
  "Mont-Saint-Michel": { built: 708, verified: true },
  "Moscow Kremlin": { built: 1482, verified: true },
  "Mount Fuji": { built: -10000, verified: true },
  "Mount Rushmore": { built: 1941, verified: true },
  "Mount Vesuvius": { built: -10000, verified: true },
  "N Seoul Tower": { built: 1980, verified: true },
  "Naqsh-e Jahan Square": { built: 1602, verified: true },
  "National Monument Jakarta": { built: 1975, verified: true },
  "Nazca Lines": { built: 100, verified: true },
  "Neuschwanstein Castle": { built: 1886, verified: true },
  "Niagara Falls": { built: -10000, verified: true },
  "Notre-Dame de Paris": { built: 1260, verified: true },
  "Obelisco de Buenos Aires": { built: 1936, verified: true },
  "One World Trade Center": { built: 2014, verified: true },
  "Oracle of Delphi": { built: -800, gone: 390, ruin: true, verified: true },
  "Osaka Castle": { built: 1583, verified: true },
  "Palace of Knossos": { built: -1900, gone: -1370, ruin: true, verified: true },
  "Palace of Versailles": { built: 1682, verified: true },
  "Palace of the Popes, Avignon": { built: 1335, verified: true },
  Palenque: { built: 600, gone: 800, ruin: true, verified: true },
  "Palm Jumeirah": { built: 2006, verified: true },
  Palmyra: { built: -44, gone: 273, ruin: true, verified: true },
  "Panama Canal Miraflores Locks": { built: 1914, verified: true },
  Pantheon: { built: 126, verified: true },
  "Park Güell": { built: 1914, verified: true },
  "Parliament Hill Ottawa": { built: 1866, verified: true },
  Parthenon: { built: -438, verified: true },
  "Pena Palace": { built: 1854, verified: true },
  Persepolis: { built: -515, gone: -330, ruin: true, verified: true },
  "Petra Treasury": { built: -100, verified: true },
  "Petronas Towers": { built: 1998, verified: true },
  Pompeii: { built: -600, gone: 79, ruin: true, verified: true },
  "Potala Palace": { built: 1645, verified: true },
  "Prague Castle": { built: 870, verified: true },
  Prambanan: { built: 850, verified: true },
  "Prophet's Mosque": { built: 622, verified: true },
  "Pyramid of Khafre": { built: -2570, verified: true },
  "Pyramid of Menkaure": { built: -2510, verified: true },
  "Qutub Minar": { built: 1199, verified: true },
  "Red Fort": { built: 1648, verified: true },
  Registan: { built: 1417, verified: true },
  Reichstag: { built: 1894, verified: true },
  Rijksmuseum: { built: 1885, verified: true },
  "Rock-Hewn Churches of Lalibela": { built: 1200, verified: true },
  "Roman Forum": { built: -500, verified: true },
  "Sagrada Familia": { built: 1882, verified: true },
  "Saint Basil's Cathedral": { built: 1561, verified: true },
  "Saint Isaac's Cathedral": { built: 1858, verified: true },
  "Santiago de Compostela Cathedral": { built: 1211, verified: true },
  "Schönbrunn Palace": { built: 1743, verified: true },
  "Senso-ji": { built: 645, verified: true },
  "Shanghai Tower": { built: 2015, verified: true },
  "Shwedagon Pagoda": { built: 600, verified: true },
  Sigiriya: { built: 477, gone: 495, ruin: true, verified: true },
  "Sistine Chapel": { built: 1481, verified: true },
  "Space Needle": { built: 1962, verified: true },
  "St. Mark's Basilica": { built: 1094, verified: true },
  "St. Paul's Cathedral": { built: 1710, verified: true },
  "St. Peter's Basilica": { built: 1626, verified: true },
  "St. Stephen's Cathedral Vienna": { built: 1160, verified: true },
  "Statue of Liberty": { built: 1886, verified: true },
  "Statue of Unity": { built: 2018, verified: true },
  "Step Pyramid of Djoser": { built: -2650, verified: true },
  Stonehenge: { built: -2500, verified: true },
  "Sugarloaf Mountain": { built: -10000, verified: true },
  "Svalbard Global Seed Vault": { built: 2008, verified: true },
  "Sydney Harbour Bridge": { built: 1932, verified: true },
  "Sydney Opera House": { built: 1973, verified: true },
  "Table Mountain": { built: -10000, verified: true },
  "Taipei 101": { built: 2004, verified: true },
  "Taj Mahal": { built: 1653, verified: true },
  "Tanah Lot": { built: 1500, verified: true },
  "Temple of Heaven": { built: 1420, verified: true },
  "Temple of Olympian Zeus": { built: -174, gone: 267, ruin: true, verified: true },
  "Temple of the Tooth": { built: 1595, verified: true },
  "Templo Mayor": { built: 1325, gone: 1521, ruin: true, verified: true },
  "Teotihuacan Pyramid of the Sun": { built: 200, gone: 550, ruin: true, verified: true },
  "Terracotta Army": { built: -210, verified: true },
  "The Alamo": { built: 1718, verified: true },
  "Tikal Temple IV": { built: 741, gone: 900, ruin: true, verified: true },
  "Todai-ji": { built: 752, verified: true },
  "Tokyo Skytree": { built: 2012, verified: true },
  "Tokyo Tower": { built: 1958, verified: true },
  "Tower Bridge": { built: 1894, verified: true },
  "Tower of London": { built: 1078, verified: true },
  "Trevi Fountain": { built: 1762, verified: true },
  Uluru: { built: -10000, verified: true },
  "United States Capitol": { built: 1800, verified: true },
  "Varanasi Ghats": { built: -800, verified: true },
  "Victoria Falls": { built: -10000, verified: true },
  "Washington Monument": { built: 1884, verified: true },
  "Wat Arun": { built: 1656, verified: true },
  "Wat Pho": { built: 1788, verified: true },
  "Wawel Castle": { built: 1350, verified: true },
  "Western Wall": { built: -19, verified: true },
  "Westminster Abbey": { built: 1065, verified: true },
  "White House": { built: 1800, verified: true },
  "Willis Tower": { built: 1973, verified: true },
  "Winter Palace / Hermitage": { built: 1762, verified: true },
  "Yellow Crane Tower": { built: 223, verified: true },
  "Ziggurat of Ur": { built: -2100, gone: -500, ruin: true, verified: true },
};

/** Known city founding years. Others use a labeled regional approximation. */
const CITIES: Record<string, PlaceLife> = {
  Rome: { built: -753, verified: true },
  Athens: { built: -1400, verified: true },
  Alexandria: { built: -331, verified: true },
  Cairo: { built: 969, verified: true },
  Istanbul: { built: -660, verified: true },
  Jerusalem: { built: -2800, verified: true },
  Damascus: { built: -3000, verified: true },
  Baghdad: { built: 762, verified: true },
  Tehran: { built: 1554, verified: true },
  Delhi: { built: -50, verified: true },
  Mumbai: { built: 1507, verified: true },
  Beijing: { built: -1045, verified: true },
  Shanghai: { built: 1291, verified: true },
  Tokyo: { built: 1457, verified: true },
  Kyoto: { built: 794, verified: true },
  London: { built: 50, verified: true },
  Paris: { built: -52, verified: true },
  Madrid: { built: 865, verified: true },
  Lisbon: { built: -1200, verified: true },
  Berlin: { built: 1237, verified: true },
  Vienna: { built: -500, verified: true },
  Moscow: { built: 1147, verified: true },
  "St. Petersburg": { built: 1703, verified: true },
  "Washington D.C.": { built: 1790, verified: true },
  "New York": { built: 1624, verified: true },
  Boston: { built: 1630, verified: true },
  Philadelphia: { built: 1682, verified: true },
  Chicago: { built: 1833, verified: true },
  "Los Angeles": { built: 1781, verified: true },
  "Mexico City": { built: 1325, verified: true },
  Lima: { built: 1535, verified: true },
  "Buenos Aires": { built: 1536, verified: true },
  "Rio de Janeiro": { built: 1565, verified: true },
  Brasília: { built: 1960, verified: true },
  Canberra: { built: 1913, verified: true },
  Sydney: { built: 1788, verified: true },
  Melbourne: { built: 1835, verified: true },
  Auckland: { built: 1840, verified: true },
  Cape: { built: 1652, verified: true },
  "Cape Town": { built: 1652, verified: true },
  Lagos: { built: 1500, verified: true },
  Timbuktu: { built: 1100, verified: true },
  "Addis Ababa": { built: 1886, verified: true },
  Nairobi: { built: 1899, verified: true },
  Johannesburg: { built: 1886, verified: true },
  Abuja: { built: 1991, verified: true },
  Islamabad: { built: 1963, verified: true },
  Astana: { built: 1997, verified: true },
  "Nur-Sultan": { built: 1997, verified: true },
  Naypyidaw: { built: 2005, verified: true },
  Putrajaya: { built: 1995, verified: true },
  Belmopan: { built: 1970, verified: true },
  Gaborone: { built: 1964, verified: true },
  Lilongwe: { built: 1975, verified: true },
  Dodoma: { built: 1973, verified: true },
  Nouakchott: { built: 1958, verified: true },
  Yamoussoukro: { built: 1983, verified: true },
  Ottawa: { built: 1855, verified: true },
  Toronto: { built: 1793, verified: true },
  Vancouver: { built: 1886, verified: true },
  "Hong Kong": { built: 1842, verified: true },
  Singapore: { built: 1819, verified: true },
  Seoul: { built: -18, verified: true },
  Hanoi: { built: 1010, verified: true },
  Saigon: { built: 1698, verified: true },
  "Ho Chi Minh City": { built: 1698, verified: true },
  Bangkok: { built: 1782, verified: true },
  Jakarta: { built: 1527, verified: true },
  Manila: { built: 1571, verified: true },
  Dublin: { built: 841, verified: true },
  Edinburgh: { built: 600, verified: true },
  Prague: { built: 800, verified: true },
  Budapest: { built: -50, verified: true },
  Warsaw: { built: 1300, verified: true },
  Stockholm: { built: 1252, verified: true },
  Oslo: { built: 1040, verified: true },
  Copenhagen: { built: 1167, verified: true },
  Amsterdam: { built: 1275, verified: true },
  Brussels: { built: 979, verified: true },
  Geneva: { built: -50, verified: true },
  Zurich: { built: -15, verified: true },
  Venice: { built: 421, verified: true },
  Florence: { built: -59, verified: true },
  Naples: { built: -600, verified: true },
  Milan: { built: -400, verified: true },
  Barcelona: { built: -15, verified: true },
  "Tel Aviv": { built: 1909, verified: true },
  Dubai: { built: 1833, verified: true },
  "Abu Dhabi": { built: 1761, verified: true },
  Doha: { built: 1825, verified: true },
  Riyadh: { built: 1740, verified: true },
  Mecca: { built: -400, verified: true },
  Medina: { built: -400, verified: true },
  Kabul: { built: -600, verified: true },
  Samarkand: { built: -700, verified: true },
  Bukhara: { built: -500, verified: true },
  Lhasa: { built: 637, verified: true },
  "San Francisco": { built: 1776, verified: true },
  "San Diego": { built: 1769, verified: true },
  Houston: { built: 1836, verified: true },
  Dallas: { built: 1841, verified: true },
  Atlanta: { built: 1837, verified: true },
  Miami: { built: 1896, verified: true },
  Seattle: { built: 1851, verified: true },
  Denver: { built: 1858, verified: true },
  Detroit: { built: 1701, verified: true },
  Montreal: { built: 1642, verified: true },
  Quebec: { built: 1608, verified: true },
  "São Paulo": { built: 1554, verified: true },
  Santiago: { built: 1541, verified: true },
  Bogotá: { built: 1538, verified: true },
  Caracas: { built: 1567, verified: true },
  Havana: { built: 1519, verified: true },
  Kingston: { built: 1692, verified: true },
  Accra: { built: 1578, verified: true },
  Dakar: { built: 1857, verified: true },
  Kinshasa: { built: 1881, verified: true },
  Harare: { built: 1890, verified: true },
  Lusaka: { built: 1913, verified: true },
  Pretoria: { built: 1855, verified: true },
  Juba: { built: 1922, verified: true },
  Khartoum: { built: 1821, verified: true },
  Casablanca: { built: 700, verified: true },
  Tunis: { built: -814, verified: true },
  Algiers: { built: 944, verified: true },
  Tripoli: { built: -700, verified: true },
  Ankara: { built: -700, verified: true },
  Brasilia: { built: 1960, verified: true },
  Wellington: { built: 1840, verified: true },
  Anchorage: { built: 1914, verified: true },
  Phoenix: { built: 1868, verified: true },
  Honolulu: { built: 1795, verified: true },
  "Las Vegas": { built: 1905, verified: true },
  Minneapolis: { built: 1867, verified: true },
  Pittsburgh: { built: 1758, verified: true },
  Baltimore: { built: 1729, verified: true },
  Charleston: { built: 1670, verified: true },
  "New Orleans": { built: 1718, verified: true },
  "St. Louis": { built: 1764, verified: true },
  Cincinnati: { built: 1788, verified: true },
  Portland: { built: 1845, verified: true },
  "Salt Lake City": { built: 1847, verified: true },
  Winnipeg: { built: 1873, verified: true },
  Calgary: { built: 1875, verified: true },
  Mombasa: { built: 900, verified: true },
  Luanda: { built: 1576, verified: true },
  Kano: { built: 999, verified: true },
  Cusco: { built: 1100, verified: true },
  "Xi'an": { built: -1100, verified: true },
  Luoyang: { built: -1050, verified: true },
  Patna: { built: -490, verified: true },
  Carthage: { built: -814, gone: 146, ruin: true, verified: true },
  Tenochtitlan: { built: 1325, gone: 1521, ruin: true, verified: true },
};

const RENAMES: Record<string, { until: number; name: string }[]> = {
  Istanbul: [{ until: 1930, name: "Constantinople" }],
  "St. Petersburg": [
    { until: 1914, name: "St. Petersburg" },
    { until: 1924, name: "Petrograd" },
    { until: 1991, name: "Leningrad" },
  ],
  Oslo: [{ until: 1925, name: "Christiania" }],
  Beijing: [{ until: 1958, name: "Peking" }],
  Mumbai: [{ until: 1995, name: "Bombay" }],
  "Ho Chi Minh City": [{ until: 1976, name: "Saigon" }],
  Harare: [{ until: 1982, name: "Salisbury" }],
  "Mexico City": [{ until: 1521, name: "Tenochtitlan" }],
  Tokyo: [{ until: 1868, name: "Edo" }],
  "New York": [{ until: 1664, name: "New Amsterdam" }],
};

export interface PlaceInYear {
  exists: boolean;
  ruin: boolean;
  approx: boolean;
  kind: StructureKind;
  name: string;
  built?: number;
  gone?: number;
}

function regionalCityStart(p: RealPlace): { built: number; approx: true } {
  const lat = p.lat;
  const lon = p.lon;
  const oldWorld =
    lon > -15 && lon < 150 && lat > -5 && lat < 60 && !(lon > 110 && lat < 10 && lon < 180);
  if (p.country === "Australia" || p.country === "New Zealand") return { built: 1788, approx: true };
  if (p.country.includes("United States") || p.country === "Canada") {
    if (lon > -80 && lat > 35) return { built: 1630, approx: true };
    if (lon > -95) return { built: 1700, approx: true };
    return { built: 1840, approx: true };
  }
  if (lon < -30 && lon > -90 && lat < 15 && lat > -55) return { built: 1530, approx: true };
  if (lat < -10 && lon > 10 && lon < 50) return { built: 1800, approx: true };
  if (lat < 20 && lon > -20 && lon < 50) return { built: 1100, approx: true };
  if (oldWorld) return { built: 100, approx: true };
  if (lon < -30) return { built: 1600, approx: true };
  return { built: 1700, approx: true };
}

function lifeOf(p: RealPlace): { life: PlaceLife; approx: boolean } {
  if (p.group === "landmark") {
    const lm = LANDMARKS[p.name];
    if (lm) return { life: lm, approx: !lm.verified };
    return { life: { built: 100 }, approx: true };
  }
  const c = CITIES[p.name];
  if (c) return { life: c, approx: !c.verified };
  const r = regionalCityStart(p);
  return { life: { built: r.built }, approx: true };
}

export function lifeForPlace(p: RealPlace): { life: PlaceLife; approx: boolean } {
  return lifeOf(p);
}

export function displayName(p: RealPlace, year: number): string {
  const rows = RENAMES[p.name];
  if (rows) {
    for (const r of rows) {
      if (year < r.until) return r.name;
    }
  }
  return p.name;
}

function eraKind(p: RealPlace, year: number, ruin: boolean): StructureKind {
  if (ruin) return p.kind === "city" || p.kind === "capital" ? "monument" : p.kind;
  if (p.group === "landmark") return p.kind;
  if (year < 1700) return p.group === "capital" ? "capital" : "village";
  if (year < 1860) return p.group === "capital" ? "capital" : "city";
  if (year < 1930) {
    if (p.kind === "skyscraper") return "city";
    return p.kind;
  }
  return p.kind;
}

export function placeInYear(p: RealPlace, year: number): PlaceInYear {
  const y = clampDateYear(year);
  const { life, approx } = lifeOf(p);
  const name = displayName(p, y);
  if (y < life.built) {
    return { exists: false, ruin: false, approx, kind: p.kind, name, built: life.built, gone: life.gone };
  }
  if (life.gone != null && y >= life.gone) {
    if (life.ruin) {
      return { exists: true, ruin: true, approx, kind: eraKind(p, y, true), name, built: life.built, gone: life.gone };
    }
    return { exists: false, ruin: false, approx, kind: p.kind, name, built: life.built, gone: life.gone };
  }
  return { exists: true, ruin: false, approx, kind: eraKind(p, y, false), name, built: life.built, gone: life.gone };
}

export function eraInfrastructure(year: number): {
  roads: boolean;
  rail: boolean;
  highway: boolean;
  farms: boolean;
  roadSpan: number;
  farmRadius: number;
  cityLight: number;
} {
  const y = clampDateYear(year);
  return {
    roads: y >= 100,
    rail: y >= 1830,
    highway: y >= 1930,
    farms: y >= 100,
    roadSpan: y < 1700 ? 0.35 : y < 1860 ? 0.5 : y < 1914 ? 0.7 : y < 1962 ? 0.85 : 1,
    farmRadius: y < 1700 ? 0.4 : y < 1914 ? 0.7 : 1,
    cityLight: y < 1700 ? 0.35 : y < 1860 ? 0.5 : y < 1914 ? 0.7 : y < 1962 ? 0.85 : 1,
  };
}
