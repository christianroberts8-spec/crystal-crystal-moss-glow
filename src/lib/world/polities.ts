import { countryColor, lonLatToScreen, matchCountry, normName, viewForCountry, type CountryAtlas, type CountryRec } from "./countries";
import { localFromLonLat } from "./earth";
import { snapshotYear } from "./history";
import { REAL_PLACES, type RealPlace } from "./realPlaces";
import type { WorldProject } from "./types";

export interface Polity {
  id: string;
  name: string;
  short: string;
  color: [number, number, number];
  capital?: { name: string; lat: number; lon: number };
  disputed?: boolean;
}

export interface RegionOverride {
  years?: number[];
  from?: number;
  to?: number;
  polity: string;
  lon0: number;
  lat0: number;
  lon1: number;
  lat1: number;
  only?: string[];
}

export interface PolityView {
  year: number;
  fill: HTMLCanvasElement;
  borders: HTMLCanvasElement;
  id: Uint16Array;
  list: Polity[];
  centroids: Array<{ lon: number; lat: number; area: number }>;
}

const P = (
  id: string,
  name: string,
  short: string,
  color: [number, number, number],
  capital?: Polity["capital"],
  disputed?: boolean,
): Polity => ({ id, name, short, color, capital, disputed });

/** Named historical polities. Modern UN states are synthesized from the country atlas. */
export const POLITIES: Record<string, Polity> = {
  rom: P("rom", "Roman Empire", "Rome", [168, 52, 52], { name: "Rome", lat: 41.89, lon: 12.49 }),
  par: P("par", "Parthian Empire", "Parthia", [160, 96, 48], { name: "Ctesiphon", lat: 33.09, lon: 44.58 }),
  han: P("han", "Han Empire", "Han", [196, 156, 56], { name: "Luoyang", lat: 34.62, lon: 112.45 }),
  kush: P("kush", "Kushan Empire", "Kushan", [140, 88, 48], { name: "Peshawar", lat: 34.01, lon: 71.58 }),
  aks: P("aks", "Kingdom of Aksum", "Aksum", [180, 120, 60], { name: "Aksum", lat: 14.13, lon: 38.72 }),
  sat: P("sat", "Indian kingdoms", "India", [196, 140, 72], { name: "Pataliputra", lat: 25.61, lon: 85.14 }),
  maya: P("maya", "Maya / Mesoamerica", "Maya", [72, 140, 88], { name: "Tikal", lat: 17.22, lon: -89.62 }),
  andes: P("andes", "Andean peoples", "Andes", [120, 92, 56]),
  germ: P("germ", "Germanic peoples", "Germania", [120, 124, 88]),
  celt: P("celt", "Celtic / Pictish lands", "Celtica", [88, 124, 92]),
  scand: P("scand", "Norse / Baltic peoples", "North", [140, 160, 176]),
  steppe: P("steppe", "Steppe peoples", "Steppe", [176, 156, 96]),
  siber: P("siber", "Siberian peoples", "Siberia", [160, 176, 168]),
  arab: P("arab", "Arabian peoples", "Arabia", [180, 148, 80]),
  afrw: P("afrw", "West African peoples", "W. Africa", [140, 112, 64]),
  afrc: P("afrc", "Central African peoples", "C. Africa", [96, 120, 64]),
  afrs: P("afrs", "Southern African peoples", "S. Africa", [148, 124, 72]),
  nub: P("nub", "Nubian kingdoms", "Nubia", [168, 108, 64], { name: "Meroë", lat: 16.94, lon: 33.75 }),
  sea: P("sea", "SE Asian kingdoms", "SE Asia", [72, 132, 96]),
  yam: P("yam", "Yamato Japan", "Yamato", [196, 92, 92], { name: "Nara", lat: 34.69, lon: 135.8 }),
  amer: P("amer", "Indigenous Americas", "Americas", [92, 140, 108]),
  aus: P("aus", "Aboriginal Australia", "Australia", [164, 132, 84]),
  pac: P("pac", "Pacific peoples", "Pacific", [64, 140, 148]),
  empty: P("empty", "Uninhabited", "—", [80, 88, 96]),

  qing: P("qing", "Qing Empire", "Qing", [196, 164, 64], { name: "Beijing", lat: 39.9, lon: 116.4 }),
  mughal: P("mughal", "Mughal Empire", "Mughal", [92, 140, 84], { name: "Delhi", lat: 28.61, lon: 77.21 }),
  ott: P("ott", "Ottoman Empire", "Ottoman", [48, 112, 72], { name: "Constantinople", lat: 41.01, lon: 28.98 }),
  saf: P("saf", "Persian empires", "Persia", [80, 140, 96], { name: "Isfahan", lat: 32.66, lon: 51.68 }),
  rusemp: P("rusemp", "Russian Empire", "Russia", [120, 40, 48], { name: "St. Petersburg", lat: 59.93, lon: 30.31 }),
  tsar: P("tsar", "Tsardom of Russia", "Russia", [120, 40, 48], { name: "Moscow", lat: 55.75, lon: 37.62 }),
  gbremp: P("gbremp", "British Empire", "Britain", [196, 112, 140], { name: "London", lat: 51.51, lon: -0.13 }),
  fraemp: P("fraemp", "French colonial empire", "France", [72, 104, 176], { name: "Paris", lat: 48.86, lon: 2.35 }),
  espemp: P("espemp", "Spanish Empire", "Spain", [196, 164, 72], { name: "Madrid", lat: 40.42, lon: -3.7 }),
  premp: P("premp", "Portuguese Empire", "Portugal", [72, 140, 96], { name: "Lisbon", lat: 38.72, lon: -9.14 }),
  nldemp: P("nldemp", "Dutch Empire", "Netherlands", [196, 140, 64], { name: "Amsterdam", lat: 52.37, lon: 4.89 }),
  hre: P("hre", "Holy Roman Empire", "HRE", [168, 144, 88], { name: "Vienna", lat: 48.21, lon: 16.37 }),
  prus: P("prus", "Kingdom of Prussia", "Prussia", [80, 88, 96], { name: "Berlin", lat: 52.52, lon: 13.4 }),
  habs: P("habs", "Habsburg Austria", "Austria", [196, 196, 196], { name: "Vienna", lat: 48.21, lon: 16.37 }),
  toki: P("toki", "Tokugawa Japan", "Japan", [180, 64, 64], { name: "Edo", lat: 35.68, lon: 139.69 }),
  jose: P("jose", "Joseon Korea", "Joseon", [72, 92, 148], { name: "Hanseong", lat: 37.57, lon: 126.98 }),
  siam: P("siam", "Siam", "Siam", [64, 140, 108], { name: "Ayutthaya", lat: 14.35, lon: 100.57 }),
  maratha: P("maratha", "Maratha / Indian states", "Maratha", [180, 116, 64], { name: "Pune", lat: 18.52, lon: 73.86 }),
  dang: P("dang", "Durrani / Afghan states", "Afghan", [140, 108, 68], { name: "Kabul", lat: 34.53, lon: 69.17 }),
  ethi: P("ethi", "Ethiopian Empire", "Ethiopia", [180, 124, 64], { name: "Gondar", lat: 12.6, lon: 37.47 }),
  ash: P("ash", "West African kingdoms", "W. Africa", [156, 108, 56]),
  qinglate: P("qinglate", "Qing Empire", "Qing", [196, 164, 64], { name: "Beijing", lat: 39.9, lon: 116.4 }),

  deuemp: P("deuemp", "German Empire", "Germany", [80, 84, 88], { name: "Berlin", lat: 52.52, lon: 13.4 }),
  ah: P("ah", "Austria-Hungary", "A.-Hungary", [196, 188, 140], { name: "Vienna", lat: 48.21, lon: 16.37 }),
  ussr: P("ussr", "Soviet Union", "USSR", [176, 48, 48], { name: "Moscow", lat: 55.75, lon: 37.62 }),
  yugo: P("yugo", "Yugoslavia", "Yugoslavia", [72, 108, 148], { name: "Belgrade", lat: 44.82, lon: 20.46 }),
  csk: P("csk", "Czechoslovakia", "Czechoslo.", [64, 104, 156], { name: "Prague", lat: 50.08, lon: 14.44 }),
  roc: P("roc", "Republic of China", "China", [196, 64, 64], { name: "Nanjing", lat: 32.06, lon: 118.8 }),
  prc: P("prc", "People's Republic of China", "China", [196, 48, 48], { name: "Beijing", lat: 39.9, lon: 116.4 }),
  weimar: P("weimar", "Weimar Germany", "Germany", [88, 92, 96], { name: "Berlin", lat: 52.52, lon: 13.4 }),
  nazi: P("nazi", "Nazi Germany", "Germany", [64, 64, 64], { name: "Berlin", lat: 52.52, lon: 13.4 }),
  jpnemp: P("jpnemp", "Empire of Japan", "Japan", [180, 72, 72], { name: "Tokyo", lat: 35.68, lon: 139.69 }),
  manchu: P("manchu", "Manchukuo", "Manchukuo", [196, 164, 88], { name: "Hsinking", lat: 43.82, lon: 125.32 }),
  belemp: P("belemp", "Belgian colonial empire", "Belgium", [196, 196, 140], { name: "Brussels", lat: 50.85, lon: 4.35 }),
  itaemp: P("itaemp", "Italian colonial empire", "Italy", [88, 140, 92], { name: "Rome", lat: 41.89, lon: 12.49 }),
  usaemp: P("usaemp", "United States", "United States", [72, 104, 176], { name: "Washington", lat: 38.9, lon: -77.04 }),
  csa: P("csa", "Confederate States", "C.S.A.", [140, 92, 72], { name: "Richmond", lat: 37.54, lon: -77.44 }),
  union: P("union", "United States (Union)", "Union", [72, 104, 176], { name: "Washington", lat: 38.9, lon: -77.04 }),
  occdeu: P("occdeu", "Allied-occupied Germany", "Germany (occ.)", [120, 124, 120], { name: "Berlin", lat: 52.52, lon: 13.4 }),
  occjpn: P("occjpn", "Occupied Japan", "Japan (occ.)", [180, 140, 140], { name: "Tokyo", lat: 35.68, lon: 139.69 }),
  frg: P("frg", "West Germany", "FRG", [88, 96, 108], { name: "Bonn", lat: 50.74, lon: 7.1 }),
  gdr: P("gdr", "East Germany", "GDR", [176, 72, 72], { name: "East Berlin", lat: 52.52, lon: 13.4 }),
  vnmn: P("vnmn", "North Vietnam", "N. Vietnam", [176, 56, 56], { name: "Hanoi", lat: 21.03, lon: 105.85 }),
  vnms: P("vnms", "South Vietnam", "S. Vietnam", [196, 164, 72], { name: "Saigon", lat: 10.82, lon: 106.63 }),
  vichy: P("vichy", "Vichy France", "Vichy", [88, 112, 168], { name: "Vichy", lat: 46.13, lon: 3.43 }),
  occfra: P("occfra", "Occupied France", "France (occ.)", [64, 72, 88], { name: "Paris", lat: 48.86, lon: 2.35 }),
  scg: P("scg", "Serbia and Montenegro", "Serbia-MNE", [72, 108, 148], { name: "Belgrade", lat: 44.82, lon: 20.46 }),
  srh: P("srh", "Rhodesia / S. Rhodesia", "Rhodesia", [196, 180, 120], { name: "Salisbury", lat: -17.83, lon: 31.05 }),
  meiji: P("meiji", "Empire of Japan", "Japan", [180, 72, 72], { name: "Tokyo", lat: 35.68, lon: 139.69 }),
  crimea: P("crimea", "Crimea (disputed)", "Crimea*", [132, 56, 64], { name: "Simferopol", lat: 44.95, lon: 34.1 }, true),
};

const ALL =
  "AFG ALB DZA AND AGO ATA ATG ARG ARM AUS AUT AZE BHS BHR BGD BRB BLR BEL BLZ BEN BTN BOL BIH BWA BRA BRN BGR BFA BDI KHM CMR CAN CPV CAF TCD CHL CHN COL COM CRI CIV HRV CUB CYP CZE PRK COD DNK DJI DMA DOM ECU EGY SLV GNQ ERI EST ETH FLK FJI FIN FRA ATF GAB GEO DEU GHA GRC GRL GRD GTM GIN GNB GUY HTI HND HUN ISL IND IDN IRN IRQ IRL ISR ITA JAM JPN JOR KAZ KEN SWZ KIR KOS KWT KGZ LAO LVA LBN LSO LBR LBY LIE LTU LUX MDG MWI MYS MDV MLI MLT MHL MRT MUS MEX FSM MDA MCO MNG MNE MAR MOZ MMR NAM NRU NPL NLD NCL NZL NIC NER NGA MKD CYN NOR OMN PAK PLW PSX PAN PNG PRY PER PHL POL PRT PRI QAT KOR COG ROU RUS RWA KNA LCA VCT WSM SMR STP SAU SEN SRB SYC SLE SGP SVK SVN SLB SOM SOL ZAF SDS ESP LKA SDN SUR SWE CHE SYR TWN TJK TZA THA GMB TLS TGO TON TTO TUN TUR TKM TUV UGA UKR ARE GBR USA URY UZB VUT VAT VEN VNM SAH YEM ZMB ZWE".split(
    " ",
  );

function put(o: Record<string, string>, polity: string, isos: string) {
  for (const iso of isos.split(" ")) if (iso) o[iso] = polity;
}

function rest(o: Record<string, string>, fallback: (iso: string) => string) {
  for (const iso of ALL) if (!o[iso]) o[iso] = fallback(iso);
}

/** Latin America independent of Iberia after the 1820s. */
const LATAM = "ARG BOL BRA CHL COL ECU GUY PRY PER SUR URY VEN PAN";
const CARIB_IND = "HTI DOM CUB";
const CARIB_GBR = "JAM TTO BRB BHS BLZ ATG KNA LCA VCT DMA GRD";
const USSR = "RUS UKR BLR EST LVA LTU MDA GEO ARM AZE KAZ UZB TKM KGZ TJK";
const YUGO = "SVN HRV BIH SRB MNE MKD KOS";
const CSK = "CZE SVK";
const BALT = "EST LVA LTU";

function y100(): Record<string, string> {
  const o: Record<string, string> = {};
  put(o, "rom", "ITA ESP PRT FRA BEL NLD LUX CHE AUT SVN HRV BIH SRB MNE MKD ALB GRC BGR ROU MLT CYP AND MCO SMR VAT LIE TUN LBY EGY DZA MAR SYR LBN ISR PSX JOR TUR");
  put(o, "par", "IRN IRQ AZE ARM");
  put(o, "han", "CHN PRK KOR MNG TWN");
  put(o, "kush", "AFG PAK TJK UZB KGZ");
  put(o, "sat", "IND BGD NPL BTN LKA");
  put(o, "aks", "ETH ERI DJI");
  put(o, "nub", "SDN SDS");
  put(o, "maya", "MEX GTM BLZ HND SLV");
  put(o, "andes", "PER BOL ECU");
  put(o, "germ", "DEU POL CZE SVK HUN");
  put(o, "celt", "IRL GBR");
  put(o, "scand", "NOR SWE FIN ISL DNK EST LVA LTU");
  put(o, "steppe", "KAZ UKR BLR MDA GEO");
  put(o, "siber", "RUS");
  put(o, "arab", "SAU YEM OMN ARE QAT BHR KWT");
  put(o, "yam", "JPN");
  put(o, "sea", "THA KHM LAO MMR MYS IDN PHL SGP BRN TLS VNM");
  put(o, "afrw", "SEN MLI BFA NER GHA CIV GIN GNB SLE LBR TGO BEN NGA CMR GAB COG CAF TCD MRT GMB");
  put(o, "afrc", "COD AGO RWA BDI UGA KEN TZA SOM SOL");
  put(o, "afrs", "ZAF NAM BWA ZWE ZMB MWI MOZ SWZ LSO MDG MUS SYC COM STP CPV GNQ");
  put(o, "amer", "USA CAN GRL CRI NIC PAN CUB HTI DOM JAM TTO BRB BHS ATG KNA LCA VCT DMA GRD PRI BLZ ARG CHL BRA COL VEN URY PRY SUR GUY");
  put(o, "aus", "AUS NZL PNG");
  put(o, "pac", "FJI SLB VUT NCL WSM TON KIR TUV NRU MHL FSM PLW");
  put(o, "empty", "ATA ATF FLK");
  rest(o, () => "amer");
  return o;
}

function colonialAmericas(o: Record<string, string>, year: number) {
  put(o, "espemp", "ESP MEX GTM BLZ HND SLV NIC CRI PAN CUB DOM PRI COL VEN ECU PER BOL CHL ARG PRY URY PHL GNQ SAH AND");
  put(o, "premp", "PRT BRA AGO MOZ GNB STP CPV TLS");
  if (year <= 1776) {
    put(o, "gbremp", "GBR IRL CAN GRL FLK JAM TTO BRB BHS ATG KNA LCA VCT DMA GRD BLZ GUY USA");
    put(o, "fraemp", "FRA HTI NCL ATF SEN GIN");
  }
}

function y1700(): Record<string, string> {
  const o: Record<string, string> = {};
  colonialAmericas(o, 1700);
  put(o, "gbremp", "GBR IRL CAN GRL FLK JAM TTO BRB BHS ATG KNA LCA VCT DMA GRD BLZ GUY USA MUS");
  put(o, "fraemp", "FRA HTI NCL ATF SEN MLI HTI GIN MDG");
  put(o, "nldemp", "NLD IDN SUR GUY");
  put(o, "ott", "TUR GRC BGR ALB MKD SRB BIH MNE ROU MDA SYR LBN ISR PSX JOR IRQ EGY LBY TUN DZA SAU YEM KWT CYP");
  put(o, "qing", "CHN MNG TWN");
  put(o, "mughal", "IND PAK BGD");
  put(o, "saf", "IRN AZE ARM GEO AFG");
  put(o, "tsar", "RUS UKR BLR EST LVA LTU KAZ");
  put(o, "hre", "DEU AUT CZE CHE LIE");
  put(o, "habs", "AUT HUN SVK HRV SVN");
  put(o, "toki", "JPN");
  put(o, "jose", "KOR PRK");
  put(o, "siam", "THA");
  put(o, "ethi", "ETH ERI");
  put(o, "ash", "GHA BEN TGO NGA CMR");
  put(o, "afrw", "BFA NER TCD CAF MLI MRT GMB SLE LBR CIV");
  put(o, "afrc", "COD COG GAB RWA BDI UGA KEN TZA SOM SOL SDN SDS");
  put(o, "afrs", "ZAF NAM BWA ZWE ZMB MWI SWZ LSO");
  put(o, "sea", "KHM LAO MMR MYS SGP BRN VNM");
  put(o, "empty", "ATA");
  put(o, "pac", "FJI SLB VUT WSM TON KIR TUV NRU MHL FSM PLW PNG NZL AUS");
  o.POL = "POL";
  o.SWE = "SWE";
  o.DNK = "DNK";
  o.NOR = "DNK";
  o.ISL = "DNK";
  o.GRL = "DNK";
  o.CHE = "hre";
  rest(o, (iso) => iso);
  return o;
}

function y1740(): Record<string, string> {
  const o = y1700();
  put(o, "prus", "DEU");
  put(o, "habs", "AUT HUN SVK HRV SVN CZE");
  put(o, "rusemp", "RUS UKR BLR EST LVA LTU KAZ FIN");
  return o;
}

function y1776(): Record<string, string> {
  const o = y1740();
  put(o, "gbremp", "GBR IRL CAN GRL FLK JAM TTO BRB BHS ATG KNA LCA VCT DMA GRD BLZ GUY MUS IND");
  put(o, "usaemp", "USA");
  put(o, "espemp", "ESP MEX GTM BLZ HND SLV NIC CRI PAN CUB DOM PRI COL VEN ECU PER BOL CHL ARG PRY URY PHL GNQ SAH AND");
  return o;
}

function y1860(): Record<string, string> {
  const o: Record<string, string> = {};
  put(o, "usaemp", "USA");
  put(o, "gbremp", "GBR IRL CAN AUS NZL IND PAK BGD LKA MMR MYS SGP GHA NGA SLE GMB ZAF FLK JAM TTO BRB BHS BLZ GUY ATG KNA LCA VCT DMA GRD MUS SYC MDV CYP MLT GRL PNG FJI");
  put(o, "fraemp", "FRA DZA SEN MLI NCL ATF GIN GAB COG");
  put(o, "espemp", "ESP CUB PRI PHL GNQ SAH AND");
  put(o, "premp", "PRT BRA AGO MOZ GNB STP CPV TLS");
  put(o, "nldemp", "NLD IDN SUR");
  put(o, "ott", "TUR GRC BGR ALB MKD SRB BIH ROU MDA SYR LBN ISR PSX JOR IRQ EGY LBY TUN SAU YEM KWT CYP");
  put(o, "qinglate", "CHN MNG TWN");
  put(o, "rusemp", "RUS UKR BLR EST LVA LTU FIN POL MDA GEO ARM AZE KAZ UZB TKM KGZ TJK");
  put(o, "habs", "AUT HUN SVK HRV SVN CZE");
  put(o, "prus", "DEU");
  put(o, "toki", "JPN");
  put(o, "jose", "KOR PRK");
  put(o, "siam", "THA");
  put(o, "ethi", "ETH ERI");
  put(o, "dang", "AFG");
  put(o, "saf", "IRN");
  put(o, "maratha", "NPL BTN");
  put(o, "afrw", "BFA NER TCD CAF MRT CIV BEN TGO CMR LBR");
  put(o, "afrc", "COD RWA BDI UGA KEN TZA SOM SOL SDN SDS CAF");
  put(o, "afrs", "NAM BWA ZWE ZMB MWI SWZ LSO MDG MOZ");
  for (const iso of LATAM.split(" ")) {
    if (iso && iso !== "GUY" && iso !== "SUR") o[iso] = iso;
  }
  for (const iso of CARIB_IND.split(" ")) o[iso] = iso;
  put(o, "empty", "ATA");
  rest(o, (iso) => iso);
  o.BRA = "BRA";
  o.MEX = "MEX";
  o.GUY = "gbremp";
  o.SUR = "nldemp";
  return o;
}

function y1863(): Record<string, string> {
  const o = y1860();
  o.USA = "union";
  return o;
}

function y1914(): Record<string, string> {
  const o: Record<string, string> = {};
  put(o, "gbremp", "GBR IRL CAN AUS NZL IND PAK BGD LKA MMR MYS SGP BRN PNG FJI SLB KIR TUV WSM TON EGY SDN SDS KEN UGA GHA NGA SLE GMB ZAF BWA LSO SWZ ZMB ZWE MWI CYP MLT YEM KWT ARE OMN BHR QAT JAM TTO BRB BHS BLZ GUY FLK ATG KNA LCA VCT DMA GRD MUS SYC MDV VUT SOL BTN");
  put(o, "fraemp", "FRA DZA TUN MAR SEN MLI BFA NER TCD CAF COG GAB BEN CIV GIN MDG DJI VNM LAO KHM NCL ATF COM");
  put(o, "deuemp", "DEU TZA RWA BDI NAM CMR TGO PNG PLW NRU MHL FSM WSM");
  put(o, "ah", "AUT HUN CZE SVK SVN HRV BIH");
  put(o, "ott", "TUR SYR LBN ISR PSX JOR IRQ KWT SAU YEM");
  put(o, "rusemp", "RUS UKR BLR FIN EST LVA LTU POL MDA GEO ARM AZE KAZ UZB TKM KGZ TJK MNG");
  put(o, "belemp", "BEL COD");
  put(o, "premp", "PRT AGO MOZ GNB STP CPV TLS");
  put(o, "nldemp", "NLD IDN SUR");
  put(o, "itaemp", "ITA LBY ERI SOM");
  put(o, "espemp", "ESP GNQ SAH AND");
  put(o, "usaemp", "USA PHL PRI");
  put(o, "jpnemp", "JPN KOR PRK TWN");
  put(o, "roc", "CHN");
  put(o, "siam", "THA");
  put(o, "ethi", "ETH");
  put(o, "dang", "AFG");
  put(o, "saf", "IRN");
  put(o, "empty", "ATA");
  for (const iso of (LATAM + " MEX HTI CUB DOM").split(" ")) {
    if (iso && iso !== "GUY" && iso !== "SUR") o[iso] = iso;
  }
  rest(o, (iso) => iso);
  o.PNG = "deuemp";
  o.NGA = "gbremp";
  o.GHA = "gbremp";
  o.GUY = "gbremp";
  o.SUR = "nldemp";
  o.MRT = "fraemp";
  o.CYN = "gbremp";
  o.LBR = "LBR";
  o.CHE = "CHE";
  o.SWE = "SWE";
  o.NOR = "NOR";
  o.DNK = "DNK";
  o.ISL = "DNK";
  o.GRL = "DNK";
  o.NLD = "nldemp";
  o.ESP = "espemp";
  o.PRT = "premp";
  o.GRC = "GRC";
  o.BGR = "BGR";
  o.ROU = "ROU";
  o.SRB = "SRB";
  o.MNE = "MNE";
  o.ALB = "ALB";
  o.MKD = "SRB";
  o.KOS = "SRB";
  o.LUX = "LUX";
  o.NPL = "NPL";
  return o;
}

function y1916(): Record<string, string> {
  const o = y1914();
  o.BEL = "deuemp";
  o.SRB = "ah";
  o.MNE = "ah";
  o.ALB = "ah";
  return o;
}

function y1927(): Record<string, string> {
  const o = y1914();
  put(o, "ussr", "RUS UKR BLR MDA GEO ARM AZE KAZ UZB TKM KGZ TJK");
  put(o, "weimar", "DEU");
  put(o, "yugo", YUGO);
  put(o, "csk", CSK);
  put(o, "roc", "CHN MNG");
  o.POL = "POL";
  o.FIN = "FIN";
  o.EST = "EST";
  o.LVA = "LVA";
  o.LTU = "LTU";
  o.IRL = "IRL";
  o.TUR = "TUR";
  o.AUT = "AUT";
  o.HUN = "HUN";
  o.BGR = "BGR";
  o.GRC = "GRC";
  o.ALB = "ALB";
  o.ROU = "ROU";
  o.SYR = "fraemp";
  o.LBN = "fraemp";
  o.ISR = "gbremp";
  o.PSX = "gbremp";
  o.JOR = "gbremp";
  o.IRQ = "gbremp";
  o.EGY = "EGY";
  o.SAU = "SAU";
  o.TZA = "gbremp";
  o.RWA = "belemp";
  o.BDI = "belemp";
  o.NAM = "gbremp";
  o.CMR = "fraemp";
  o.TGO = "fraemp";
  o.PNG = "gbremp";
  o.KOR = "jpnemp";
  o.PRK = "jpnemp";
  o.TWN = "jpnemp";
  o.PLW = "jpnemp";
  o.MHL = "jpnemp";
  o.FSM = "jpnemp";
  o.NRU = "gbremp";
  o.WSM = "gbremp";
  return o;
}

function y1933(): Record<string, string> {
  const o = y1927();
  o.DEU = "nazi";
  return o;
}

function y1938(): Record<string, string> {
  const o = y1933();
  o.AUT = "nazi";
  return o;
}

function y1940(): Record<string, string> {
  const o = y1938();
  o.POL = "nazi";
  o.DNK = "nazi";
  o.NOR = "nazi";
  o.NLD = "nazi";
  o.BEL = "nazi";
  o.LUX = "nazi";
  o.FRA = "occfra";
  o.CZE = "nazi";
  o.SVK = "nazi";
  return o;
}

function y1942(): Record<string, string> {
  const o = y1940();
  o.FRA = "occfra";
  put(o, "nazi", "DEU AUT POL DNK NOR NLD BEL LUX CZE SVK HUN ROU BGR GRC ALB YUGO SVN HRV BIH SRB MNE MKD KOS EST LVA LTU UKR BLR MDA");
  o.HUN = "nazi";
  o.ROU = "nazi";
  o.BGR = "nazi";
  o.GRC = "nazi";
  o.ALB = "nazi";
  o.SVN = "nazi";
  o.HRV = "nazi";
  o.BIH = "nazi";
  o.SRB = "nazi";
  o.MNE = "nazi";
  o.MKD = "nazi";
  o.KOS = "nazi";
  o.EST = "nazi";
  o.LVA = "nazi";
  o.LTU = "nazi";
  o.UKR = "nazi";
  o.BLR = "nazi";
  o.LBY = "itaemp";
  put(o, "jpnemp", "JPN KOR PRK TWN PHL IDN MMR MYS SGP BRN VNM LAO KHM PNG PLW MHL FSM NRU");
  o.USA = "usaemp";
  o.GBR = "gbremp";
  o.IND = "gbremp";
  o.AUS = "gbremp";
  o.CAN = "gbremp";
  o.RUS = "ussr";
  o.CHE = "CHE";
  o.SWE = "SWE";
  o.ESP = "ESP";
  o.PRT = "PRT";
  o.TUR = "TUR";
  o.IRL = "IRL";
  return o;
}

function y1945(): Record<string, string> {
  const o = y1927();
  o.DEU = "occdeu";
  o.JPN = "occjpn";
  o.KOR = "KOR";
  o.PRK = "PRK";
  o.TWN = "roc";
  o.AUT = "occdeu";
  put(o, "ussr", USSR);
  o.POL = "POL";
  o.FIN = "FIN";
  return o;
}

function y1962(): Record<string, string> {
  const o: Record<string, string> = {};
  put(o, "ussr", USSR);
  put(o, "yugo", YUGO);
  put(o, "csk", CSK);
  o.DEU = "frg";
  put(o, "prc", "CHN MNG");
  o.TWN = "TWN";
  o.KOR = "KOR";
  o.PRK = "PRK";
  o.VNM = "vnmn";
  put(o, "gbremp", "GBR FLK GIB JAM TTO BRB BHS BLZ GUY ATG KNA LCA VCT DMA GRD PNG FJI SLB KIR TUV WSM TON HKG CYP");
  put(o, "fraemp", "FRA NCL ATF DJI COM");
  put(o, "premp", "PRT AGO MOZ GNB STP CPV TLS");
  put(o, "belemp", "BEL");
  put(o, "nldemp", "NLD SUR");
  put(o, "espemp", "ESP GNQ SAH AND");
  o.COD = "COD";
  o.DZA = "DZA";
  o.IND = "IND";
  o.PAK = "PAK";
  o.BGD = "PAK";
  o.IDN = "IDN";
  o.MMR = "MMR";
  o.MYS = "MYS";
  o.SGP = "SGP";
  o.GHA = "GHA";
  o.NGA = "NGA";
  o.KEN = "KEN";
  o.TZA = "TZA";
  o.UGA = "UGA";
  o.ZAF = "ZAF";
  o.EGY = "EGY";
  o.SDN = "SDN";
  o.SDS = "SDN";
  o.ETH = "ETH";
  o.ERI = "ETH";
  o.ZWE = "srh";
  o.ZMB = "gbremp";
  o.MWI = "gbremp";
  o.BWA = "gbremp";
  o.NAM = "ZAF";
  o.AGO = "premp";
  o.MOZ = "premp";
  rest(o, (iso) => iso);
  return o;
}

function y1990(): Record<string, string> {
  const o: Record<string, string> = {};
  put(o, "ussr", USSR);
  put(o, "yugo", YUGO);
  put(o, "csk", CSK);
  o.DEU = "frg";
  put(o, "prc", "CHN");
  o.TWN = "TWN";
  o.NAM = "NAM";
  o.ZWE = "ZWE";
  o.AGO = "AGO";
  o.MOZ = "MOZ";
  o.VNM = "VNM";
  o.BGD = "BGD";
  o.ERI = "ETH";
  o.SDS = "SDN";
  rest(o, (iso) => iso);
  return o;
}

function y1992(): Record<string, string> {
  const o: Record<string, string> = {};
  put(o, "csk", CSK);
  put(o, "scg", "SRB MNE KOS");
  o.SVN = "SVN";
  o.HRV = "HRV";
  o.BIH = "BIH";
  o.MKD = "MKD";
  o.DEU = "DEU";
  o.ERI = "ETH";
  o.SDS = "SDN";
  rest(o, (iso) => iso);
  return o;
}

function y2002(): Record<string, string> {
  const o: Record<string, string> = {};
  put(o, "scg", "SRB MNE");
  o.KOS = "scg";
  o.ERI = "ERI";
  o.TLS = "TLS";
  o.SDS = "SDN";
  rest(o, (iso) => iso);
  return o;
}

function y2005(): Record<string, string> {
  return y2002();
}

function y2011(): Record<string, string> {
  const o: Record<string, string> = {};
  o.SDS = "SDS";
  o.MNE = "MNE";
  o.SRB = "SRB";
  o.KOS = "KOS";
  rest(o, (iso) => iso);
  return o;
}

function yModern(): Record<string, string> {
  const o: Record<string, string> = {};
  rest(o, (iso) => iso);
  return o;
}

function y1492(): Record<string, string> {
  const o = y1700();
  put(o, "amer", "USA CAN MEX GTM BLZ HND SLV NIC CRI PAN CUB HTI DOM JAM TTO BRB BHS ATG KNA LCA VCT DMA GRD PRI ARG BOL BRA CHL COL ECU GUY PRY PER SUR URY VEN");
  put(o, "aus", "AUS NZL PNG");
  o.PHL = "sea";
  return o;
}

function y1871(): Record<string, string> {
  const o = y1860();
  put(o, "deuemp", "DEU");
  o.JPN = "meiji";
  return o;
}

function y1948(): Record<string, string> {
  const o = y1945();
  o.ISR = "ISR";
  o.IND = "IND";
  o.PAK = "PAK";
  o.BGD = "PAK";
  return o;
}

function y1949(): Record<string, string> {
  const o = y1962();
  o.VNM = "vnmn";
  return o;
}

function y1975(): Record<string, string> {
  const o = y1990();
  o.VNM = "VNM";
  o.LAO = "LAO";
  o.KHM = "KHM";
  o.AGO = "AGO";
  o.MOZ = "MOZ";
  o.GNB = "GNB";
  o.TLS = "IDN";
  return o;
}

function y1993(): Record<string, string> {
  const o = y1992();
  o.CZE = "CZE";
  o.SVK = "SVK";
  o.ERI = "ERI";
  return o;
}

function y2006(): Record<string, string> {
  const o = y2011();
  o.SDS = "SDN";
  return o;
}

const YEAR_OWNERS: Record<number, () => Record<string, string>> = {
  100: y100,
  476: y100,
  800: y100,
  1066: y1700,
  1206: y1700,
  1453: y1700,
  1492: y1492,
  1648: y1700,
  1700: y1700,
  1740: y1740,
  1776: y1776,
  1789: y1776,
  1815: y1776,
  1825: y1860,
  1860: y1860,
  1861: y1863,
  1863: y1863,
  1871: y1871,
  1898: y1914,
  1914: y1914,
  1916: y1916,
  1917: y1916,
  1918: y1927,
  1919: y1927,
  1922: y1927,
  1927: y1927,
  1933: y1933,
  1938: y1938,
  1939: y1940,
  1940: y1940,
  1941: y1942,
  1942: y1942,
  1944: y1942,
  1945: y1945,
  1947: y1948,
  1948: y1948,
  1949: y1949,
  1960: y1962,
  1962: y1962,
  1975: y1975,
  1989: y1990,
  1990: y1990,
  1991: y1992,
  1992: y1992,
  1993: y1993,
  2002: y2002,
  2005: y2005,
  2006: y2006,
  2011: y2011,
  2013: yModern,
  2014: yModern,
  2016: yModern,
  2019: yModern,
  2020: yModern,
  2022: yModern,
  2026: yModern,
};

function overrideApplies(r: RegionOverride, year: number): boolean {
  if (r.from != null && year < r.from) return false;
  if (r.to != null && year > r.to) return false;
  if (r.from != null || r.to != null) return true;
  if (!r.years || !r.years.length) return false;
  const snap = snapshotYear(year);
  return r.years.includes(year) || r.years.includes(snap);
}

/** Sub-national / occupation boxes on top of ISO ownership. Covers the whole Earth together with ISO maps. */
export const OVERRIDES: RegionOverride[] = [
  { years: [100, 476, 800], polity: "celt", lon0: -8, lat0: 54.5, lon1: 2, lat1: 60, only: ["GBR"] },
  { years: [1914, 1916, 1917], polity: "deuemp", lon0: 14.1, lat0: 49.0, lon1: 22.6, lat1: 55.1, only: ["POL"] },
  { years: [1914, 1916, 1917], polity: "ah", lon0: 19.0, lat0: 48.4, lon1: 26.6, lat1: 50.8, only: ["POL", "UKR"] },
  { years: [1914, 1916, 1917], polity: "rusemp", lon0: 20.5, lat0: 51.0, lon1: 24.2, lat1: 54.6, only: ["POL"] },
  { years: [1914, 1916, 1917], polity: "deuemp", lon0: 6.5, lat0: 47.4, lon1: 8.3, lat1: 49.3, only: ["FRA"] },
  { years: [1700, 1740, 1776, 1789, 1815], polity: "espemp", lon0: -125, lat0: 25, lon1: -90, lat1: 49, only: ["USA"] },
  { years: [1776, 1789], polity: "gbremp", lon0: -88, lat0: 24.5, lon1: -79.5, lat1: 31, only: ["USA"] },
  { years: [1776, 1700, 1740, 1789, 1815], polity: "gbremp", lon0: -85, lat0: 31, lon1: -66, lat1: 47.5, only: ["USA"] },
  { years: [1776, 1789, 1815], polity: "usaemp", lon0: -85, lat0: 31, lon1: -66, lat1: 47.5, only: ["USA"] },
  { years: [1700, 1740], polity: "gbremp", lon0: -85, lat0: 31, lon1: -66, lat1: 47.5, only: ["USA"] },
  { years: [1861, 1863], polity: "csa", lon0: -106, lat0: 24.5, lon1: -75, lat1: 36.55, only: ["USA"] },
  { years: [1938, 1939, 1940, 1941, 1942, 1944], polity: "nazi", lon0: 12.0, lat0: 48.5, lon1: 16.9, lat1: 51.1, only: ["CZE"] },
  { years: [1940, 1941, 1942, 1944], polity: "vichy", lon0: -1.8, lat0: 42.3, lon1: 7.8, lat1: 46.2, only: ["FRA"] },
  { years: [1933, 1938, 1939, 1940, 1941, 1942, 1944], polity: "manchu", lon0: 115, lat0: 38.5, lon1: 135, lat1: 53.5, only: ["CHN"] },
  { years: [1938, 1939, 1940, 1941, 1942, 1944], polity: "jpnemp", lon0: 116.5, lat0: 22.5, lon1: 122.5, lat1: 40.2, only: ["CHN"] },
  { years: [1700, 1740, 1776, 1789, 1815], polity: "nldemp", lon0: 17.5, lat0: -35.2, lon1: 26.5, lat1: -31.0, only: ["ZAF"] },
  { from: 1945, to: 1990, polity: "gdr", lon0: 10.0, lat0: 50.15, lon1: 15.1, lat1: 54.9, only: ["DEU"] },
  { from: 1949, to: 1990, polity: "frg", lon0: 5.8, lat0: 47.2, lon1: 10.4, lat1: 55.1, only: ["DEU"] },
  { years: [1945], polity: "occdeu", lon0: 5.8, lat0: 47.2, lon1: 15.1, lat1: 55.1, only: ["DEU"] },
  { from: 1954, to: 1975, polity: "vnmn", lon0: 102, lat0: 17.0, lon1: 110, lat1: 23.4, only: ["VNM"] },
  { from: 1954, to: 1975, polity: "vnms", lon0: 104, lat0: 8.5, lon1: 109.5, lat1: 17.0, only: ["VNM"] },
  { from: 2014, to: 2026, polity: "crimea", lon0: 32.3, lat0: 44.25, lon1: 36.7, lat1: 46.25, only: ["UKR"] },
];

const ownersCache = new Map<number, Record<string, string>>();

export function ownersFor(year: number): Record<string, string> {
  const y = snapshotYear(year);
  let m = ownersCache.get(y);
  if (!m) {
    const fn = YEAR_OWNERS[y] ?? yModern;
    m = fn();
    ownersCache.set(y, m);
  }
  return m;
}

export function overrideAt(year: number, lon: number, lat: number, iso: string | null): string | null {
  for (let i = OVERRIDES.length - 1; i >= 0; i--) {
    const r = OVERRIDES[i]!;
    if (!overrideApplies(r, year)) continue;
    if (r.only && iso && !r.only.includes(iso)) continue;
    if (lon >= r.lon0 && lon <= r.lon1 && lat >= r.lat0 && lat <= r.lat1) return r.polity;
  }
  return null;
}

export function ownerAtIso(iso: string, year: number): string {
  return ownersFor(year)[iso] ?? iso;
}

export function resolvePolity(id: string, atlas: CountryAtlas | null): Polity {
  const named = POLITIES[id];
  if (named) return named;
  const c = atlas?.byIso.get(id);
  if (c) {
    return {
      id,
      name: c.name,
      short: c.short || c.name,
      color: countryColor(c.iso),
      capital: { name: c.short, lat: c.ly, lon: c.lx },
    };
  }
  return { id, name: id, short: id, color: countryColor(id) };
}

export function polityAtLonLat(
  atlas: CountryAtlas,
  year: number,
  lon: number,
  lat: number,
): { polity: Polity; iso: string | null; country: CountryRec | null } {
  const country = countryAt(atlas, lon, lat);
  const iso = country?.iso ?? null;
  const over = overrideAt(year, lon, lat, iso);
  const id = over ?? (iso ? ownerAtIso(iso, year) : "");
  if (!id) return { polity: POLITIES.empty!, iso, country };
  return { polity: resolvePolity(id, atlas), iso, country };
}

function countryAt(atlas: CountryAtlas, lon: number, lat: number): CountryRec | null {
  let x = ((lon + 180) / 360) * atlas.w;
  const y = ((90 - lat) / 180) * atlas.h;
  while (x < 0) x += atlas.w;
  while (x >= atlas.w) x -= atlas.w;
  const ix = Math.min(atlas.w - 1, Math.max(0, Math.floor(x)));
  const iy = Math.min(atlas.h - 1, Math.max(0, Math.floor(y)));
  const n = atlas.id[ix + iy * atlas.w] ?? 0;
  if (!n) return null;
  return atlas.countries[n - 1] ?? null;
}

const viewCache = new Map<number, PolityView>();

export function peekPolityView(year: number): PolityView | null {
  return viewCache.get(snapshotYear(year)) ?? null;
}

export function buildPolityView(year: number, atlas: CountryAtlas): PolityView {
  const y = snapshotYear(year);
  const hit = viewCache.get(y);
  if (hit && hit.fill.width === atlas.w) return hit;
  const w = atlas.w;
  const h = atlas.h;
  const n = w * h;
  const pid = new Uint16Array(n);
  const list: Polity[] = [];
  const index = new Map<string, number>();
  const idxOf = (id: string) => {
    let i = index.get(id);
    if (i) return i;
    list.push(resolvePolity(id, atlas));
    i = list.length;
    index.set(id, i);
    return i;
  };
  const owners = ownersFor(y);
  for (let i = 0; i < n; i++) {
    const ci = atlas.id[i]!;
    if (!ci) continue;
    const rec = atlas.countries[ci - 1];
    if (!rec) continue;
    const lon = ((i % w) / w) * 360 - 180;
    const lat = 90 - (Math.floor(i / w) / h) * 180;
    const over = overrideAt(y, lon, lat, rec.iso);
    pid[i] = idxOf(over ?? owners[rec.iso] ?? rec.iso);
  }
  const fill = document.createElement("canvas");
  fill.width = w;
  fill.height = h;
  const fctx = fill.getContext("2d")!;
  const fimg = fctx.createImageData(w, h);
  const fd = fimg.data;
  const borders = document.createElement("canvas");
  borders.width = w;
  borders.height = h;
  const bctx = borders.getContext("2d")!;
  const bimg = bctx.createImageData(w, h);
  const bd = bimg.data;
  const sums = list.map(() => ({ lon: 0, lat: 0, n: 0 }));
  for (let i = 0; i < n; i++) {
    const p = pid[i]!;
    if (!p) continue;
    const pol = list[p - 1]!;
    const o = i * 4;
    fd[o] = pol.color[0];
    fd[o + 1] = pol.color[1];
    fd[o + 2] = pol.color[2];
    fd[o + 3] = 255;
    const x = i % w;
    const y0 = (i / w) | 0;
    const right = x + 1 < w ? pid[i + 1]! : 0;
    const down = y0 + 1 < h ? pid[i + w]! : 0;
    if ((right && right !== p) || (down && down !== p) || (!right && x + 1 < w) || (!down && y0 + 1 < h && atlas.id[i + w])) {
      bd[o] = 14;
      bd[o + 1] = 17;
      bd[o + 2] = 12;
      bd[o + 3] = 210;
    }
    const s = sums[p - 1]!;
    s.lon += ((x + 0.5) / w) * 360 - 180;
    s.lat += 90 - ((y0 + 0.5) / h) * 180;
    s.n += 1;
  }
  fctx.putImageData(fimg, 0, 0);
  bctx.putImageData(bimg, 0, 0);
  const centroids = sums.map((s) => ({
    lon: s.n ? s.lon / s.n : 0,
    lat: s.n ? s.lat / s.n : 0,
    area: s.n,
  }));
  const view: PolityView = { year: y, fill, borders, id: pid, list, centroids };
  viewCache.set(y, view);
  return view;
}

export function polityAtPixel(view: PolityView, atlas: CountryAtlas, lon: number, lat: number): Polity | null {
  let x = ((lon + 180) / 360) * atlas.w;
  const y = ((90 - lat) / 180) * atlas.h;
  while (x < 0) x += atlas.w;
  while (x >= atlas.w) x -= atlas.w;
  const ix = Math.min(atlas.w - 1, Math.max(0, Math.floor(x)));
  const iy = Math.min(atlas.h - 1, Math.max(0, Math.floor(y)));
  const n = view.id[ix + iy * atlas.w] ?? 0;
  if (!n) return null;
  return view.list[n - 1] ?? null;
}

export function uniquePolities(year: number, atlas: CountryAtlas): Polity[] {
  const y = snapshotYear(year);
  const owners = ownersFor(y);
  const seen = new Set<string>();
  const out: Polity[] = [];
  const add = (id: string) => {
    if (!id || id === "empty" || seen.has(id)) return;
    seen.add(id);
    out.push(resolvePolity(id, atlas));
  };
  for (const iso of ALL) add(owners[iso] ?? iso);
  for (const r of OVERRIDES) {
    if (overrideApplies(r, year)) add(r.polity);
  }
  out.sort((a, b) => a.name.localeCompare(b.name));
  return out;
}

const POLITY_ALIASES: Record<string, string> = {
  rome: "rom",
  roman: "rom",
  "roman empire": "rom",
  parthia: "par",
  parthian: "par",
  han: "han",
  "han empire": "han",
  kushan: "kush",
  aksum: "aks",
  axum: "aks",
  qing: "qing",
  "qing empire": "qing",
  mughal: "mughal",
  ottoman: "ott",
  "ottoman empire": "ott",
  ussr: "ussr",
  soviet: "ussr",
  "soviet union": "ussr",
  "british empire": "gbremp",
  britain: "gbremp",
  "french empire": "fraemp",
  "spanish empire": "espemp",
  "portuguese empire": "premp",
  "dutch empire": "nldemp",
  "german empire": "deuemp",
  "nazi germany": "nazi",
  nazi: "nazi",
  "austria hungary": "ah",
  confederacy: "csa",
  confederate: "csa",
  csa: "csa",
  union: "union",
  prussia: "prus",
  hre: "hre",
  "holy roman": "hre",
  tokugawa: "toki",
  edo: "toki",
  "empire of japan": "jpnemp",
  manchukuo: "manchu",
  vichy: "vichy",
  "west germany": "frg",
  "east germany": "gdr",
  yugoslavia: "yugo",
  czechoslovakia: "csk",
  "north vietnam": "vnmn",
  "south vietnam": "vnms",
  rhodesia: "srh",
};

export function isosOwnedBy(year: number, polityId: string): string[] {
  const owners = ownersFor(year);
  const out: string[] = [];
  for (const iso of ALL) {
    if ((owners[iso] ?? iso) === polityId) out.push(iso);
  }
  return out;
}

export function searchPolities(atlas: CountryAtlas, year: number, q: string): Polity[] {
  const all = uniquePolities(year, atlas);
  const t = normName(q);
  if (!t) return all;
  const alias = POLITY_ALIASES[t];
  return all.filter((p) => {
    if (alias && p.id === alias) return true;
    if (normName(p.name).includes(t) || normName(p.short).includes(t) || p.id.toLowerCase().includes(t)) return true;
    if (p.capital && normName(p.capital.name).includes(t)) return true;
    return false;
  });
}

export function placesForPolity(atlas: CountryAtlas, year: number, polityId: string): RealPlace[] {
  return REAL_PLACES.filter((p) => {
    const c = matchCountry(atlas, p.country);
    if (!c) return false;
    const over = overrideAt(year, p.lon, p.lat, c.iso);
    const id = over ?? ownerAtIso(c.iso, year);
    return id === polityId;
  });
}

export function viewForPolity(
  world: WorldProject,
  atlas: CountryAtlas,
  year: number,
  polityId: string,
): { x: number; z: number; zoom: number } {
  const pol = resolvePolity(polityId, atlas);
  const isos = isosOwnedBy(year, polityId);
  if (pol.capital) {
    const loc = localFromLonLat(world, pol.capital.lon, pol.capital.lat);
    const zoom = isos.length > 12 ? 4 : isos.length > 4 ? 5 : 8;
    return { x: loc.lx, z: loc.lz, zoom };
  }
  if (isos.length === 1) {
    const rec = atlas.byIso.get(isos[0]!);
    if (rec) return viewForCountry(world, rec);
  }
  const rec = atlas.byIso.get(polityId) ?? (isos[0] ? atlas.byIso.get(isos[0]) : undefined);
  if (rec) return viewForCountry(world, rec);
  const loc = localFromLonLat(world, 0, 20);
  return { x: loc.lx, z: loc.lz, zoom: 2 };
}

export function primaryIsoForPolity(year: number, polityId: string, atlas: CountryAtlas): string | null {
  const pol = resolvePolity(polityId, atlas);
  if (pol.capital) {
    const c = countryAt(atlas, pol.capital.lon, pol.capital.lat);
    if (c) return c.iso;
  }
  const isos = isosOwnedBy(year, polityId);
  return isos[0] ?? (atlas.byIso.has(polityId) ? polityId : null);
}

export function drawPolityOverlay(
  ctx: CanvasRenderingContext2D,
  world: WorldProject,
  atlas: CountryAtlas,
  year: number,
  originPxX: number,
  originPxZ: number,
  cell: number,
  cssW: number,
  cssH: number,
  opts: { fill: boolean; borders: boolean; names: boolean; selectedIso: string | null; selectedPolity?: string | null },
) {
  const view = buildPolityView(year, atlas);
  if (opts.fill) {
    ctx.save();
    ctx.globalAlpha = 0.42;
    ctx.imageSmoothingEnabled = cell < 2;
    ctx.drawImage(view.fill, 0, 0, atlas.w, atlas.h, originPxX, originPxZ, world.width * cell, world.depth * cell);
    ctx.restore();
  }
  if (opts.borders) {
    ctx.save();
    ctx.imageSmoothingEnabled = false;
    ctx.globalAlpha = 0.9;
    ctx.drawImage(view.borders, 0, 0, atlas.w, atlas.h, originPxX, originPxZ, world.width * cell, world.depth * cell);
    ctx.restore();
  }
  const highlightIsos = opts.selectedPolity
    ? isosOwnedBy(year, opts.selectedPolity)
    : opts.selectedIso
      ? [opts.selectedIso]
      : [];
  if (highlightIsos.length) {
    ctx.save();
    ctx.globalAlpha = 0.22;
    ctx.fillStyle = "rgb(125,174,90)";
    for (const iso of highlightIsos) {
      const rec = atlas.byIso.get(iso);
      if (!rec) continue;
      for (const ring of rec.rings) {
        pathSimple(ctx, world, ring, originPxX, originPxZ, cell);
        ctx.fill();
      }
    }
    ctx.restore();
  }
  if (opts.names) {
    const max = cell < 0.0002 ? 16 : cell < 0.002 ? 26 : 36;
    const labels = view.list
      .map((p, i) => ({ p, c: view.centroids[i]! }))
      .filter((x) => x.c && x.c.area > 40)
      .sort((a, b) => b.c.area - a.c.area);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    let n = 0;
    for (const lab of labels) {
      if (n >= max) break;
      const { px, pz } = lonLatToScreen(world, lab.c.lon, lab.c.lat, originPxX, originPxZ, cell);
      if (px < 12 || pz < 12 || px > cssW - 12 || pz > cssH - 12) continue;
      const size = lab.c.area > 8000 ? 13 : lab.c.area > 2000 ? 11 : 10;
      ctx.font = `600 ${size}px Figtree, sans-serif`;
      ctx.lineWidth = 3;
      ctx.strokeStyle = "rgba(14,17,12,0.78)";
      ctx.strokeText(lab.p.short, px, pz);
      ctx.fillStyle = lab.p.disputed ? "rgb(196,161,90)" : "rgba(230,234,220,0.92)";
      ctx.fillText(lab.p.short, px, pz);
      n += 1;
    }
  }
}

function pathSimple(
  ctx: CanvasRenderingContext2D,
  world: WorldProject,
  ring: number[],
  originPxX: number,
  originPxZ: number,
  cell: number,
) {
  ctx.beginPath();
  const n = (ring.length / 2) | 0;
  let started = false;
  let prevLon = 0;
  for (let i = 0; i < n; i++) {
    const lon = ring[i * 2]!;
    const lat = ring[i * 2 + 1]!;
    if (started && Math.abs(lon - prevLon) > 180) {
      ctx.closePath();
      ctx.beginPath();
      started = false;
    }
    const { px, pz } = lonLatToScreen(world, lon, lat, originPxX, originPxZ, cell);
    if (!started) {
      ctx.moveTo(px, pz);
      started = true;
    } else ctx.lineTo(px, pz);
    prevLon = lon;
  }
  ctx.closePath();
}

