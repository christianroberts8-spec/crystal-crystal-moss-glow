/** Whole-Earth timeline: any year 100–2026, plus month and day. */
export const MIN_YEAR = 100;
export const MAX_YEAR = 2026;

/** Documented political-map snapshots. Other years use the nearest snapshot. */
export const SNAPSHOT_YEARS = [
  100, 476, 800, 1066, 1206, 1453, 1492, 1648, 1700, 1740, 1776, 1789, 1815, 1825, 1860, 1861, 1863, 1871, 1898, 1914, 1916,
  1917, 1918, 1919, 1922, 1927, 1933, 1938, 1939, 1940, 1941, 1942, 1944, 1945, 1947, 1948, 1949, 1960, 1962, 1975, 1989,
  1990, 1991, 1992, 1993, 2002, 2005, 2006, 2011, 2013, 2014, 2016, 2019, 2020, 2022, 2026,
] as const;

/** @deprecated use SNAPSHOT_YEARS — kept so older imports still compile. */
export const TIMELINE_YEARS = SNAPSHOT_YEARS;

export type TimelineYear = number;

export interface YearInfo {
  year: number;
  title: string;
  era: string;
  blurb: string;
  /** Borders use modern coastlines remapped to documented sovereignty — not cadastral GIS. */
  approximation: boolean;
  /** Snapshot year whose political map is shown. */
  snapshot: number;
}

export interface HistoricalDate {
  year: number;
  month: number;
  day: number;
  title: string;
  era: string;
}

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

/** Famous published dates the timeline can jump to. Whole Earth, not a demo region. */
export const HISTORICAL_DATES: HistoricalDate[] = [
  { year: 100, month: 1, day: 1, title: "High Roman / Han", era: "Ancient" },
  { year: 476, month: 9, day: 4, title: "Fall of Western Rome", era: "Late antiquity" },
  { year: 800, month: 12, day: 25, title: "Charlemagne crowned", era: "Medieval" },
  { year: 1066, month: 10, day: 14, title: "Battle of Hastings", era: "Medieval" },
  { year: 1206, month: 1, day: 1, title: "Mongol Empire rising", era: "Medieval" },
  { year: 1453, month: 5, day: 29, title: "Fall of Constantinople", era: "Late medieval" },
  { year: 1492, month: 10, day: 12, title: "Columbus reaches the Americas", era: "Age of Exploration" },
  { year: 1648, month: 10, day: 24, title: "Peace of Westphalia", era: "Early modern" },
  { year: 1776, month: 7, day: 4, title: "US Declaration of Independence", era: "American Independence" },
  { year: 1789, month: 7, day: 14, title: "Storming of the Bastille", era: "French Revolution" },
  { year: 1815, month: 6, day: 18, title: "Battle of Waterloo", era: "Napoleonic" },
  { year: 1861, month: 4, day: 12, title: "US Civil War begins", era: "American Civil War" },
  { year: 1863, month: 1, day: 1, title: "Emancipation Proclamation", era: "American Civil War" },
  { year: 1871, month: 1, day: 18, title: "German Empire proclaimed", era: "Nation-states" },
  { year: 1914, month: 6, day: 28, title: "Archduke Franz Ferdinand assassinated", era: "July 1914" },
  { year: 1914, month: 7, day: 28, title: "WWI begins", era: "First World War" },
  { year: 1917, month: 11, day: 7, title: "October Revolution", era: "Russian Revolution" },
  { year: 1918, month: 11, day: 11, title: "Armistice of 11 November", era: "WWI ends" },
  { year: 1919, month: 6, day: 28, title: "Treaty of Versailles", era: "Interwar" },
  { year: 1922, month: 12, day: 30, title: "USSR founded", era: "Interwar" },
  { year: 1933, month: 1, day: 30, title: "Hitler becomes chancellor", era: "Nazi Germany" },
  { year: 1938, month: 3, day: 12, title: "Anschluss", era: "Anschluss" },
  { year: 1939, month: 9, day: 1, title: "Germany invades Poland", era: "WWII begins" },
  { year: 1941, month: 6, day: 22, title: "Operation Barbarossa", era: "WWII" },
  { year: 1941, month: 12, day: 7, title: "Pearl Harbor", era: "WWII" },
  { year: 1944, month: 6, day: 6, title: "D-Day", era: "WWII" },
  { year: 1945, month: 5, day: 8, title: "VE Day", era: "War’s end" },
  { year: 1945, month: 9, day: 2, title: "V-J Day / Japan surrenders", era: "War’s end" },
  { year: 1947, month: 8, day: 15, title: "India and Pakistan independent", era: "Decolonization" },
  { year: 1948, month: 5, day: 14, title: "Israel independence", era: "Postwar" },
  { year: 1949, month: 10, day: 1, title: "People's Republic of China", era: "Cold War" },
  { year: 1960, month: 1, day: 1, title: "Year of Africa", era: "Decolonization" },
  { year: 1962, month: 10, day: 16, title: "Cuban Missile Crisis", era: "Cold War" },
  { year: 1975, month: 4, day: 30, title: "End of the Vietnam War", era: "Cold War" },
  { year: 1989, month: 11, day: 9, title: "Berlin Wall opens", era: "End of Cold War" },
  { year: 1990, month: 10, day: 3, title: "German reunification", era: "Late Cold War" },
  { year: 1991, month: 12, day: 26, title: "USSR dissolved", era: "Post-Soviet" },
  { year: 1993, month: 1, day: 1, title: "Czechia and Slovakia", era: "Post-Soviet" },
  { year: 2002, month: 5, day: 20, title: "East Timor independence", era: "21st century" },
  { year: 2006, month: 6, day: 3, title: "Montenegro independence", era: "21st century" },
  { year: 2011, month: 7, day: 9, title: "South Sudan independence", era: "Arab Spring" },
  { year: 2014, month: 3, day: 18, title: "Crimea crisis", era: "Contemporary" },
  { year: 2020, month: 3, day: 11, title: "COVID-19 pandemic declared", era: "Contemporary" },
  { year: 2022, month: 2, day: 24, title: "Full-scale invasion of Ukraine", era: "Contemporary" },
  { year: 2026, month: 1, day: 1, title: "Present", era: "Present" },
];

const SNAPSHOT_BLURB: Record<number, { title: string; era: string; blurb: string; approximation: boolean }> = {
  100: {
    title: "100 CE",
    era: "High Roman / Han",
    blurb: "Roman Mediterranean, Parthia, Han China, Kushan, Aksum, and Mesoamerican cities. Most of the globe is independent peoples — labeled as a historical approximation.",
    approximation: true,
  },
  476: {
    title: "476",
    era: "Fall of Western Rome",
    blurb: "Western Roman Empire ended 4 September 476. Eastern Rome (Byzantium), Germanic kingdoms in the west, Han successor states in China. Whole-Earth map is a historical approximation.",
    approximation: true,
  },
  800: {
    title: "800",
    era: "Carolingian / Abbasid",
    blurb: "Charlemagne crowned 25 December 800. Abbasid Caliphate, Tang China, Maya cities. Borders outside Europe and the Near East are a historical approximation.",
    approximation: true,
  },
  1066: {
    title: "1066",
    era: "Norman Conquest",
    blurb: "Battle of Hastings, 14 October 1066. Song China, Seljuk Near East, West African kingdoms. Political geography outside Europe is a historical approximation.",
    approximation: true,
  },
  1206: {
    title: "1206",
    era: "Mongol rise",
    blurb: "Temüjin becomes Chinggis Khan. Islamic world, Song China, Latin states after 1204. Large regions use a historical approximation.",
    approximation: true,
  },
  1453: {
    title: "1453",
    era: "Fall of Constantinople",
    blurb: "Ottoman capture of Constantinople, 29 May 1453. End of Byzantium. Ming China, rising Iberian kingdoms. Historical approximation outside the eastern Mediterranean.",
    approximation: true,
  },
  1492: {
    title: "1492",
    era: "Contact with the Americas",
    blurb: "12 October 1492. Indigenous Americas still independent. Iberia, Ottomans, Ming China. The Americas are not drawn as Spanish colonies yet.",
    approximation: true,
  },
  1648: {
    title: "1648",
    era: "Peace of Westphalia",
    blurb: "24 October 1648. Sovereign states in Europe after the Thirty Years’ War. Qing China, colonial Americas beginning. Historical approximation worldwide.",
    approximation: true,
  },
  1700: {
    title: "1700",
    era: "Early modern empires",
    blurb: "Qing, Mughal, Ottoman, Spanish and Portuguese Americas, French and British colonies, Russian Tsardom, Tokugawa Japan. African and SE Asian kingdoms kept where documented.",
    approximation: true,
  },
  1740: {
    title: "1740",
    era: "Austrian Succession",
    blurb: "Frederick the Great’s Prussia, Habsburg Austria, Bourbon Spain and France, expanding Russian Empire, Qing high tide.",
    approximation: true,
  },
  1776: {
    title: "1776",
    era: "American Independence",
    blurb: "Thirteen Colonies declared independence on 4 July 1776. Spanish Americas, Portuguese Brazil, British Canada and India, Qing, Ottoman, Holy Roman world.",
    approximation: true,
  },
  1789: {
    title: "1789",
    era: "French Revolution",
    blurb: "Bastille, 14 July 1789. United States independent. Colonial empires otherwise close to 1776. Historical approximation outside Europe and the Americas.",
    approximation: true,
  },
  1815: {
    title: "1815",
    era: "Congress of Vienna",
    blurb: "Waterloo, 18 June 1815. Napoleonic wars over. Spanish Americas on the eve of independence. Historical approximation worldwide.",
    approximation: true,
  },
  1825: {
    title: "1825",
    era: "Latin American independence",
    blurb: "Most of Spanish America independent. Brazil independent. US continental. British, French, Ottoman, Qing, Russian empires.",
    approximation: true,
  },
  1860: {
    title: "1860",
    era: "Nation-states & empires",
    blurb: "United States still whole. Qing, Ottoman, British Raj, French Second Empire, Russian Empire, Tokugawa Japan on the eve of Meiji. No German Empire yet.",
    approximation: true,
  },
  1861: {
    title: "1861",
    era: "American Civil War begins",
    blurb: "Confederate attack on Fort Sumter, 12 April 1861. Union and Confederacy. Worldwide empires otherwise match the 1860s.",
    approximation: true,
  },
  1863: {
    title: "1863",
    era: "American Civil War",
    blurb: "Union and Confederacy over the same continent. Emancipation Proclamation 1 January 1863. Worldwide empires otherwise match the 1860s.",
    approximation: true,
  },
  1871: {
    title: "1871",
    era: "German unification",
    blurb: "German Empire proclaimed 18 January 1871. Meiji Japan. British Raj. US reunited. Colonial scramble not yet at 1914 peak.",
    approximation: true,
  },
  1898: {
    title: "1898",
    era: "Spanish–American War",
    blurb: "US takes the Philippines, Puerto Rico, Guam. Cuba independent soon after. Colonial peak approaching. Historical approximation of 1890s empires.",
    approximation: true,
  },
  1914: {
    title: "1914",
    era: "July 1914 — before the guns",
    blurb: "German Empire, Austria-Hungary, Ottoman Empire, Russian Empire, British and French colonial peak. Independent Ethiopia, Liberia, Siam, Persia, Afghanistan, Japan, China, Latin America.",
    approximation: true,
  },
  1916: {
    title: "1916",
    era: "First World War",
    blurb: "1914 sovereigns plus wartime occupation: Belgium and northern France under Germany, Serbia occupied, Ottoman still holding the Levant and Mesopotamia.",
    approximation: true,
  },
  1917: {
    title: "1917",
    era: "Russian Revolution",
    blurb: "October Revolution 7 November 1917 (new style). Wartime occupations still in the west. Historical approximation of 1917 fronts.",
    approximation: true,
  },
  1918: {
    title: "1918",
    era: "Armistice",
    blurb: "11 November 1918. German, Austro-Hungarian, Ottoman, and Russian empires collapsing. New states of Poland, Finland, and the Baltics emerging.",
    approximation: true,
  },
  1919: {
    title: "1919",
    era: "Versailles",
    blurb: "Treaty of Versailles, 28 June 1919. League of Nations mandates. Weimar Germany. Interwar map taking shape.",
    approximation: true,
  },
  1922: {
    title: "1922",
    era: "USSR founded",
    blurb: "Soviet Union created 30 December 1922. Irish Free State. Ottoman sultanate ended; Republic of Turkey follows in 1923. Interwar colonial world.",
    approximation: true,
  },
  1927: {
    title: "1927",
    era: "Interwar",
    blurb: "USSR, Weimar Germany, Republic of China, British and French empires, Republic of Turkey, Irish Free State, Poland, Yugoslavia, Czechoslovakia.",
    approximation: true,
  },
  1933: {
    title: "1933",
    era: "Nazi Germany, pre-expansion",
    blurb: "Hitler chancellor 30 January 1933, inside Weimar borders. Manchukuo in northeast China. Interwar colonial world otherwise.",
    approximation: true,
  },
  1938: {
    title: "1938",
    era: "Anschluss & Sudetenland",
    blurb: "Austria annexed 12 March 1938. Sudetenland taken from Czechoslovakia. Poland and colonial empires still standing.",
    approximation: true,
  },
  1939: {
    title: "1939",
    era: "WWII begins",
    blurb: "Germany invades Poland 1 September 1939. Britain and France at war. USSR still at peace with Germany until 1941.",
    approximation: true,
  },
  1940: {
    title: "1940",
    era: "Fall of France",
    blurb: "Germany occupies Poland, Denmark, Norway, the Low Countries, and northern France. Vichy in the south. Britain not occupied.",
    approximation: true,
  },
  1941: {
    title: "1941",
    era: "Barbarossa / Pearl Harbor",
    blurb: "22 June 1941 Barbarossa. 7 December Pearl Harbor. Japan expanding in East Asia. Historical approximation of 1941 occupations.",
    approximation: true,
  },
  1942: {
    title: "1942",
    era: "Peak Axis",
    blurb: "German control across most of Europe and western USSR. Japan across Korea, Taiwan, Manchuria, SE Asia, the Philippines, and Indonesia.",
    approximation: true,
  },
  1944: {
    title: "1944",
    era: "D-Day year",
    blurb: "6 June 1944 Allied landing in Normandy. Axis still holding much of Europe and East Asia at the start of the year. Historical approximation.",
    approximation: true,
  },
  1945: {
    title: "1945",
    era: "War’s end / occupation",
    blurb: "VE Day 8 May, V-J Day 2 September. Allied-occupied Germany and Japan. Korea divided. Colonial empires still exist. USSR in Eastern Europe.",
    approximation: true,
  },
  1947: {
    title: "1947",
    era: "India partitioned",
    blurb: "15 August 1947. India and Pakistan independent. British Raj ended. Palestine Mandate last months. Historical approximation of 1947 borders.",
    approximation: true,
  },
  1948: {
    title: "1948",
    era: "Israel independence",
    blurb: "14 May 1948. Israel declared. India and Pakistan independent. Occupied Germany and Japan. Historical approximation.",
    approximation: true,
  },
  1949: {
    title: "1949",
    era: "PRC / two Germanys",
    blurb: "People's Republic of China 1 October 1949. Two German states forming. Two Koreas. Cold War map taking shape.",
    approximation: true,
  },
  1960: {
    title: "1960",
    era: "Year of Africa",
    blurb: "Seventeen African states independent in 1960. Two Germanys, two Koreas, two Vietnams. USSR. Portuguese Africa still colonial.",
    approximation: true,
  },
  1962: {
    title: "1962",
    era: "Cold War / decolonization",
    blurb: "Cuban Missile Crisis, October 1962. Two Germanys, two Koreas, two Vietnams. USSR. Most of Africa independent; Portuguese Africa still colonial.",
    approximation: true,
  },
  1975: {
    title: "1975",
    era: "Vietnam unified / Portuguese Africa",
    blurb: "Vietnam War ended 30 April 1975. Portuguese Africa independent. USSR, two Germanys, two Koreas. Historical approximation.",
    approximation: true,
  },
  1989: {
    title: "1989",
    era: "Revolutions of 1989",
    blurb: "Berlin Wall opened 9 November 1989. Two Germanys still legally exist. USSR still exists. Historical approximation of late 1989.",
    approximation: true,
  },
  1990: {
    title: "1990",
    era: "Late Cold War",
    blurb: "German reunification 3 October 1990. This year uses a split Germany on the political layer until you jump to 3 October or later snapshots. USSR still exists.",
    approximation: true,
  },
  1991: {
    title: "1991",
    era: "USSR dissolved",
    blurb: "Soviet Union dissolved 26 December 1991. Reunified Germany. Yugoslavia breaking up. Historical approximation of 1991.",
    approximation: true,
  },
  1992: {
    title: "1992",
    era: "Post-Soviet",
    blurb: "USSR gone. Reunified Germany. Czechoslovakia’s last year. Slovenia and Croatia independent; Bosnia at war; FR Yugoslavia = Serbia+Montenegro.",
    approximation: true,
  },
  1993: {
    title: "1993",
    era: "Czechia and Slovakia",
    blurb: "1 January 1993. Czechoslovakia split. Post-Soviet states. Eritrea independent (1993). Historical approximation.",
    approximation: true,
  },
  2002: {
    title: "2002",
    era: "Early 21st century",
    blurb: "East Timor independent 20 May 2002. Yugoslavia dissolved. No South Sudan yet. Close to the modern Natural Earth map.",
    approximation: true,
  },
  2005: {
    title: "2005",
    era: "Mid-2000s",
    blurb: "Modern states minus South Sudan (2011) and with Serbia-Montenegro still a union until 2006.",
    approximation: true,
  },
  2006: {
    title: "2006",
    era: "Montenegro independence",
    blurb: "3 June 2006. Serbia and Montenegro separate. No South Sudan yet. Otherwise the contemporary UN map.",
    approximation: true,
  },
  2011: {
    title: "2011",
    era: "South Sudan & Arab Spring",
    blurb: "South Sudan independent 9 July 2011. Sudan split. Otherwise the contemporary UN map.",
    approximation: true,
  },
  2013: {
    title: "2013",
    era: "Contemporary",
    blurb: "UN membership map just before the 2014 Crimea crisis. South Sudan independent. Kosovo shown as in the modern atlas.",
    approximation: true,
  },
  2014: {
    title: "2014",
    era: "Crimea crisis",
    blurb: "Crimea drawn under de facto Russian administration from March 2014 and labeled disputed. This is not a legal-recognition map.",
    approximation: true,
  },
  2016: {
    title: "2016",
    era: "Contemporary",
    blurb: "Modern political geography. Crimea still shown de facto Russian-administered (disputed).",
    approximation: true,
  },
  2019: {
    title: "2019",
    era: "Pre-pandemic",
    blurb: "Contemporary political geography, Crimea still shown de facto Russian-administered (disputed). Modern cities and landmarks.",
    approximation: true,
  },
  2020: {
    title: "2020",
    era: "Pandemic year",
    blurb: "WHO declared COVID-19 a pandemic 11 March 2020. Political borders match the contemporary map.",
    approximation: true,
  },
  2022: {
    title: "2022",
    era: "Full-scale war in Ukraine",
    blurb: "24 February 2022. Crimea still shown de facto Russian-administered (disputed). Not a legal-recognition map.",
    approximation: true,
  },
  2026: {
    title: "2026",
    era: "Present",
    blurb: "Modern Earth from Natural Earth borders, populated places, and published landmark coordinates. Not an approximation of a past year.",
    approximation: false,
  },
};

export const YEAR_INFO: Record<number, YearInfo> = Object.fromEntries(
  Object.entries(SNAPSHOT_BLURB).map(([k, v]) => {
    const year = Number(k);
    return [year, { year, snapshot: year, ...v }];
  }),
);

export function daysInMonth(year: number, month: number): number {
  const m = Math.max(1, Math.min(12, month | 0));
  const y = clampDateYear(year);
  return new Date(Date.UTC(y, m, 0)).getUTCDate();
}

export function clampDateYear(n: number | undefined | null): number {
  const y = Math.round(Number(n));
  if (!Number.isFinite(y)) return MAX_YEAR;
  return Math.max(MIN_YEAR, Math.min(MAX_YEAR, y));
}

export function clampMonth(n: number | undefined | null): number {
  const m = Math.round(Number(n));
  if (!Number.isFinite(m)) return 1;
  return Math.max(1, Math.min(12, m));
}

export function clampDay(year: number, month: number, n: number | undefined | null): number {
  const max = daysInMonth(year, month);
  const d = Math.round(Number(n));
  if (!Number.isFinite(d)) return 1;
  return Math.max(1, Math.min(max, d));
}

export function snapshotYear(n: number | undefined | null): number {
  const y = clampDateYear(n);
  let best = SNAPSHOT_YEARS[SNAPSHOT_YEARS.length - 1]!;
  let dist = Infinity;
  for (const s of SNAPSHOT_YEARS) {
    const dd = Math.abs(s - y);
    if (dd < dist) {
      dist = dd;
      best = s;
    }
  }
  return best;
}

/** Political-map year. Structures should use clampDateYear, not this. */
export function clampYear(n: number | undefined | null): number {
  return snapshotYear(n);
}

export function isTimelineYear(n: number): boolean {
  return (SNAPSHOT_YEARS as readonly number[]).includes(n);
}

export function yearIndex(n: number): number {
  const y = snapshotYear(n);
  return (SNAPSHOT_YEARS as readonly number[]).indexOf(y);
}

export function yearAtIndex(i: number): number {
  const k = Math.max(0, Math.min(SNAPSHOT_YEARS.length - 1, i | 0));
  return SNAPSHOT_YEARS[k]!;
}

export function neighborYear(n: number, dir: -1 | 1): number {
  return clampDateYear(clampDateYear(n) + dir);
}

export function neighborSnapshot(n: number, dir: -1 | 1): number {
  const i = yearIndex(n);
  return yearAtIndex(i + dir);
}

export function fmtYear(n: number): string {
  if (n <= -10000) return "prehistory";
  if (n < 0) return `${-n} BCE`;
  if (n < 1000) return `${n} CE`;
  return String(n);
}

export function fmtDate(year: number, month?: number, day?: number): string {
  const y = clampDateYear(year);
  const m = month != null ? clampMonth(month) : 0;
  const d = month != null && day != null ? clampDay(y, m, day) : 0;
  if (!m) return fmtYear(y);
  if (!d) return `${MONTHS[m - 1]} ${fmtYear(y)}`;
  return `${d} ${MONTHS[m - 1]} ${fmtYear(y)}`;
}

export function fmtDateShort(year: number, month?: number, day?: number): string {
  const y = clampDateYear(year);
  const m = month != null ? clampMonth(month) : 0;
  const d = month != null && day != null ? clampDay(y, m, day) : 0;
  if (!m) return fmtYear(y);
  if (!d) return `${MONTHS_SHORT[m - 1]} ${fmtYear(y)}`;
  return `${d} ${MONTHS_SHORT[m - 1]} ${fmtYear(y)}`;
}

export function yearInfo(year: number, month?: number, day?: number): YearInfo {
  const y = clampDateYear(year);
  const snap = snapshotYear(y);
  const base = SNAPSHOT_BLURB[snap] ?? SNAPSHOT_BLURB[2026]!;
  const hit = HISTORICAL_DATES.find((d) => d.year === y && (month == null || d.month === month) && (day == null || d.day === day));
  const title = fmtDate(y, month, day);
  const approximation = snap !== 2026 || y !== 2026;
  const extra =
    snap !== y
      ? ` Political borders on screen use the ${fmtYear(snap)} snapshot — Historical Approximation.`
      : "";
  return {
    year: y,
    snapshot: snap,
    title: hit ? `${title} — ${hit.title}` : title,
    era: hit?.era ?? base.era,
    blurb: (hit ? `${hit.title}. ` : "") + base.blurb + extra,
    approximation,
  };
}

export const SLIDER_TICKS = [100, 1776, 1914, 1945, 1962, 1992, 2026] as const;
