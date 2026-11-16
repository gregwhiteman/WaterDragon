const STORAGE_KEY = "digits.people.v2";
const LEGACY_KEY = "digits.profile";

const ANIMALS = [
  {
    id: "rat",
    name: "Rat",
    hanzi: "鼠",
    meaning:
      "Quick-witted, resourceful, and charming. Rats notice openings other people miss.",
  },
  {
    id: "ox",
    name: "Ox",
    hanzi: "牛",
    meaning:
      "Steady, dependable, and strong. Oxen finish what they start and keep the household standing.",
  },
  {
    id: "tiger",
    name: "Tiger",
    hanzi: "虎",
    meaning:
      "Brave, competitive, and magnetic. Tigers lead from the front and protect their own.",
  },
  {
    id: "rabbit",
    name: "Rabbit",
    hanzi: "兔",
    meaning:
      "Gentle, elegant, and alert. Rabbits prefer peace, good taste, and a careful plan.",
  },
  {
    id: "dragon",
    name: "Dragon",
    hanzi: "龍",
    meaning:
      "Ambitious, lucky, and larger than life. Dragons draw people in and aim high.",
  },
  {
    id: "snake",
    name: "Snake",
    hanzi: "蛇",
    meaning:
      "Wise, private, and intuitive. Snakes read a room and move when the moment is right.",
  },
  {
    id: "horse",
    name: "Horse",
    hanzi: "馬",
    meaning:
      "Free-spirited, energetic, and open. Horses need movement, travel, and honest talk.",
  },
  {
    id: "goat",
    name: "Goat",
    hanzi: "羊",
    meaning:
      "Kind, artistic, and calm. Goats create beauty and look after the people they love.",
  },
  {
    id: "monkey",
    name: "Monkey",
    hanzi: "猴",
    meaning:
      "Clever, playful, and inventive. Monkeys solve puzzles and keep everyone laughing.",
  },
  {
    id: "rooster",
    name: "Rooster",
    hanzi: "雞",
    meaning:
      "Observant, proud, and precise. Roosters speak plainly and keep high standards.",
  },
  {
    id: "dog",
    name: "Dog",
    hanzi: "狗",
    meaning:
      "Loyal, fair, and protective. Dogs stand by friends and call out what is wrong.",
  },
  {
    id: "pig",
    name: "Pig",
    hanzi: "豬",
    meaning:
      "Generous, sincere, and easygoing. Pigs enjoy good company and share what they have.",
  },
];

const ELEMENTS = ["Wood", "Wood", "Fire", "Fire", "Earth", "Earth", "Metal", "Metal", "Water", "Water"];
const POLARITY = ["Yang", "Yin", "Yang", "Yin", "Yang", "Yin", "Yang", "Yin", "Yang", "Yin"];

const NUMBERS = {
  1: {
    title: "The Leader",
    meaning: "Independent, driven, and original. You start things and set the pace.",
    unbalanced:
      "The inner critic turns on everyone. Advice feels like an attack. They cannot sit in the moment, and even winning still feels empty.",
  },
  2: {
    title: "The Diplomat",
    meaning: "Sensitive, cooperative, and fair. You bring people together.",
    unbalanced:
      "They absorb everyone else’s mood, then erupt. They give until they are drained, and they cannot rest without feeling loved.",
  },
  3: {
    title: "The Creator",
    meaning: "Expressive, joyful, and imaginative. Words and art come easily to you.",
    unbalanced:
      "Unused creative charge turns manic or scattered. Stories get bigger than the truth, and nobody nearby is allowed a different mood.",
  },
  4: {
    title: "The Builder",
    meaning: "Practical, loyal, and organized. You turn ideas into something solid.",
    unbalanced:
      "They overthink until good ideas die in the head. The house gets messy, and rigidity replaces the security they want.",
  },
  5: {
    title: "The Explorer",
    meaning: "Curious, adaptable, and restless. Freedom and change keep you alive.",
    unbalanced:
      "They manufacture drama so life will not feel dull. Feeling trapped, they escape through excess: work, drink, or the next exit.",
  },
  6: {
    title: "The Caregiver",
    meaning: "Responsible, warm, and devoted. Home and the people in it come first.",
    unbalanced:
      "They stir the pot when things are calm, put people on pedestals, and take over until nobody asked.",
  },
  7: {
    title: "The Seeker",
    meaning: "Thoughtful, private, and analytical. You look for the truth beneath the surface.",
    unbalanced:
      "With no faith they grow cynical and shut the door. They escape through whatever is handy, and people cannot reach them.",
  },
  8: {
    title: "The Powerhouse",
    meaning: "Ambitious, capable, and grounded. You understand work, money, and influence.",
    unbalanced:
      "Either there is never enough money, or they are too afraid to use it. Words come out too blunt, and the body or the look starts to slip.",
  },
  9: {
    title: "The Humanitarian",
    meaning: "Compassionate, wise, and generous. You see the bigger picture.",
    unbalanced:
      "They cannot let the original family go, sound condescending, and work so hard for the world they forget to ask for help.",
  },
  11: {
    title: "The Intuitive",
    meaning: "A master number. Highly sensitive, inspired, and able to lift others.",
    unbalanced:
      "The vibration runs too hot: sleepless standards, raw emotion, and everyone else’s feelings. Drop to the 2 and rest in ordinary peace.",
  },
  22: {
    title: "The Master Builder",
    meaning: "A master number. You can turn a large vision into something the world can use.",
    unbalanced:
      "The vision is too heavy to land. Perfection stalls the build. Drop to the 4: one solid job, a tidy house, a day you can finish.",
  },
  33: {
    title: "The Master Teacher",
    meaning: "A master number. Healing, teaching, and unconditional care are your path.",
    unbalanced:
      "They try to save everyone and burn out. Drop to the 6: family, care, and a room you can settle.",
  },
};

const GARY_NUMBERS = {
  1: "One is male, leadership energy. People born on the 1st, 10th, 19th, or 28th, and 1 Life Paths, are built to take the lead. Athletes cluster here. Gary's hard rule: ones and alcohol do not mix. In a relationship a 1 has to learn to let someone in. When success is coming, a 1 takes the lead. Ones and nines are enemy numbers.",
  2: "Two is feminine energy: alliance, patience, and feeling. Even a man with a 2 leans that way. A 2 finds the right alliance instead of forcing the door. The work is to stop disappearing into other people. 2 is also the landing gear of master 11.",
  3: "Threes make a name and a living by talking: comedians, writers, performers. Chris Rock is a 3 Life Path. Born on the 3rd, 12th, 21st, or 30th carry that voice. Choose consistency over chasing attention. When success is coming, a 3 gets noticed. Threes and fours are enemy numbers.",
  4: "Four is law, order, and hard work. Whatever a 4 does, they have to work for it, and they cannot really break the law without it catching them. The 4th, 13th, and 31st carry extra police energy; skip doing dirt on a 4 day. Learn flexibility. When success is coming, a 4 builds quietly.",
  5: "Five is travel, looks, and change. A good day to move is under 5 energy. People born on the 5th, 14th, or 23rd often have presence; Gary notes a high share of famous models among 5s. They are here to experience the world. Learn commitment without losing freedom. When success is coming, a 5 takes the opportunity.",
  6: "Six is home and family. People born on the 6th, 15th, or 24th are here to take care of others. Find a 6 if you want someone who actually wants the house and the kids. The lesson is to stop overgiving. When success is coming, a 6 creates value. 6 is the rest form of master 33.",
  7: "Seven is the genius number. G is the 7th letter. People born on the 7th, 16th, or 25th tend toward high intelligence. They are here for knowledge: work smarter, not harder. Gary also calls 7 the unluckiest number the casinos sell as lucky. Learn to talk instead of withdrawing. When success is coming, a 7 masters the skill.",
  8: "Eight is money, karma, and power. Two circles: poverty and abundance. Eights often start with nothing and later hold a bag. China timed the Beijing Olympics for 8/8/2008 at 8:08 because they know this. Let go of control. When success is coming, an 8 takes control.",
  9: "Nines are finishers: intelligent, good with cycles and with things like crypto, and they see the whole board. They try to save everyone and have to stop. Big tech avoids 9. Ones and nines are enemy numbers. When success is coming, a 9 expands the vision.",
  11: "Master 11. Extremely emotional, with a mouthpiece and charisma people walk up to. Old soul: you do not get this number without karmic miles. Jordan, Kobe, Kanye, Obama, Clinton. People tell an 11 their problems uninvited. If you live with an 11, expect the feelings. Read as 11/2; the 2 is the landing gear.",
  22: "Master 22, the master builder. Turns a large plan into something the world can use. Generals and turnaround coaches show up on the 22nd. Read as 22/4: vision plus the 4's labor.",
  33: "Master 33, the master teacher, the most influential number. Trailblazers: Einstein, Edison, a Wright brother, the inventor of basketball. The number is tied to influence (Jesus at 33; Masons stop at 33; water is frozen below 33 and moves at 33). Gary is a 33. Read as 33/6: teach, then rest in family.",
};

const LIFE_PATH_JOBS = {
  1: [
    "Entrepreneur",
    "Inventor",
    "Writer",
    "Restaurant or store owner",
    "Trial lawyer",
    "Military officer",
    "Farmer",
    "Athlete",
    "Massage therapist",
    "Reflexologist",
    "Acupuncturist",
  ],
  2: [
    "Counselor",
    "Social worker",
    "Mediator",
    "Diplomat",
    "Musician",
    "Astrologer",
    "Numerologist",
    "Caregiver",
    "Human resources",
    "Event planner",
  ],
  3: [
    "Writer",
    "Broadcaster",
    "Actor",
    "Singer",
    "Performer",
    "Comedian",
    "Counselor",
    "Salesperson",
    "Model",
    "Designer",
    "Musician",
  ],
  4: [
    "Builder",
    "Engineer",
    "Architect",
    "Accountant",
    "Operations manager",
    "Police officer",
    "Lawyer",
    "Systems builder",
    "Project manager",
  ],
  5: [
    "Photojournalist",
    "Pilot",
    "Flight attendant",
    "Travel agent",
    "Tour guide",
    "Cruise director",
    "Detective",
    "Model",
    "Salesperson",
  ],
  6: [
    "Manager",
    "Company owner",
    "Teacher",
    "Doctor",
    "Interior designer",
    "Childcare",
    "Counselor",
    "Nurse",
    "Home and family work",
  ],
  7: [
    "Researcher",
    "Scientist",
    "Analyst",
    "Teacher",
    "Writer",
    "Specialist",
    "Investigator",
    "Spiritual teacher",
  ],
  8: [
    "Chief executive",
    "Investor",
    "Banker",
    "Real estate",
    "Lawyer",
    "Consultant",
    "Business owner",
  ],
  9: [
    "Teacher",
    "Counselor",
    "Therapist",
    "Doctor",
    "Nurse",
    "Social worker",
    "Artist",
    "Humanitarian work",
  ],
  11: [
    "Speaker",
    "Counselor",
    "Psychologist",
    "Musician",
    "Athlete",
    "Politician",
    "Writer",
    "Mediator",
    "Social worker",
  ],
  22: [
    "Architect",
    "Engineer",
    "General",
    "Turnaround coach",
    "Project director",
    "Urban planner",
    "Large-scale builder",
  ],
  33: [
    "Teacher",
    "Healer",
    "Inventor",
    "Doctor",
    "Therapist",
    "Social reformer",
    "Counselor",
  ],
};

const GARY_LETTER_LOOK = {
  1: "You come across as a 1: leadership, male energy, someone built to take the lead.",
  2: "You come across as a 2: alliance, patience, and feeling. Even a man with this look leans that way.",
  3: "You come across as a 3: voice, humor, and a name people hear.",
  4: "You come across as a 4: law, order, and hard work. Whatever you do, you have to earn it.",
  5: "You come across as a 5: looks, motion, and change. People notice you walking in.",
  6: "You come across as a 6: home, family, and the one who takes care of people.",
  7: "You come across as a 7: the genius number. Intelligence, study, working smarter.",
  8: "You come across as an 8: money, power, and someone who wants the bag.",
  9: "You come across as a 9: the finisher who sees the whole board.",
  11: "You come across as an 11: charisma and feeling. People walk up to you uninvited.",
  22: "You come across as a 22: the master builder. A large plan that has to become real.",
};

const GARY_VOWEL_DRIVE = {
  A: "A-energy is leadership, argument, and athlete. People with this vowel tend to be argumentative even when they look calm.",
  E: "E-energy is travel, looks, extremes, and change. Health and motion sit here.",
  I: "I-energy is the old-soul finisher: feelings, the big picture, and letting go.",
  O: "O-energy is home, money, family, and holding on. Care and the house sit here.",
  U: "U-energy is voice and expression. Say it, make it, and finish what would otherwise slip.",
  Y: "Y-energy is the genius drive: knowledge, privacy, and working smarter.",
};

const GARY_ANIMALS = {
  rat: "First sign: the hidden hand. Rats look wise and balanced on the surface and carry a lot of anxiety underneath. Most paranoid sign; always looking over a shoulder. Superpower is timing and manipulation. Brains of the creative triad.",
  ox: "Second sign: the protector and defender. Hard-headed. Once an Ox decides, it does not change. Born fighter. Enforcer of the power triad (brute force, in-your-face). Go hard before a Goat year, then lay low in it.",
  tiger: "Third sign: youthful, childlike, short attention, athletic. Superpower is building muscle. Enforcer of the athlete triad. Tests the people in charge. America is a Monkey nation, so Tigers often clash with that energy.",
  rabbit: "Gary uses the Vietnamese name Cat, not Rabbit. Cats are intelligent psychologists who plan the move in their head. Superpower is mind games. Brains of the money triad with Goat and Pig. Empowering a Rooster often turns.",
  dragon: "The leader, most alpha, power. Enforcer of the creative triad. Dragons time their own years when they take the throne. Coming up against a Dog is the enemy-year trap.",
  snake: "The wisest sign. Superpower is wisdom. Brains of the power triad with Ox and Rooster. Vengeful if crossed. Snakes rise in Ox nations and in their own Snake years. Enemy is the Pig.",
  horse: "The rebel. Stubborn as a defense. Superpower is endurance. Principled, and loyal to their people. Brains of the athlete triad. Kobe was a Horse; Shaq a Rat. That is how enemy signs play in public.",
  goat: "The richest sign. Eighth sign, and 8 is money. Superpower is looks; goats often do not need the extra polish. With Pigs they make money. Lover, not fighter. Bill Gates is a Goat. Enemy is the Ox.",
  monkey: "The smartest sign, beautiful mind. America is a Monkey nation (1776); the NFL is a Monkey sport (1920). Brains of the creative triad with Rat and Dragon. Enemy is the Tiger.",
  rooster: "Extremely aggressive, loyal, born fighter, one-track. Enforcer in the power triad with Ox and Snake. Enemy is the Cat. If a Cat empowers a Rooster, it often turns.",
  dog: "Eleventh sign: the singer, more bark than bite, emotional. Friend of Tiger and Horse. Three of the last four U.S. presidents were Dogs. Enemy is the Dragon. Coming to power in a Dragon year is an enemy-year trap.",
  pig: "The politician. Nice guy of the money triad (the one triad without a fighter). Superpower is the deal. With Goats they make money. Enemy is the Snake.",
};

// Chinese New Year day-of-year for 1900-2099 (Jan 1 = 1). Source: Helmer Aslaksen / romanization.com
const CNY_DOY = Uint8Array.from([
  31, 50, 39, 29, 47, 35, 25, 44, 33, 22, 41, 30, 49, 37, 26, 45, 34, 23, 42, 32,
  51, 39, 28, 47, 36, 24, 44, 33, 23, 41, 30, 48, 37, 26, 45, 35, 24, 42, 31, 50,
  39, 27, 46, 36, 25, 44, 33, 22, 41, 29, 48, 37, 27, 45, 34, 24, 43, 31, 49, 39,
  28, 46, 36, 25, 44, 33, 21, 40, 30, 48, 37, 27, 46, 34, 23, 42, 31, 49, 38, 28,
  47, 36, 25, 44, 33, 51, 40, 29, 48, 37, 27, 46, 35, 23, 41, 31, 50, 38, 28, 47,
  36, 24, 43, 32, 22, 40, 29, 49, 38, 26, 45, 34, 23, 41, 31, 50, 39, 28, 47, 36,
  25, 43, 32, 22, 41, 29, 48, 37, 26, 44, 34, 23, 42, 31, 50, 39, 28, 46, 35, 24,
  43, 32, 22, 41, 30, 48, 37, 26, 45, 33, 23, 42, 32, 50, 39, 28, 46, 35, 24, 43,
  33, 21, 40, 29, 48, 36, 26, 45, 34, 23, 42, 31, 50, 38, 27, 46, 36, 24, 43, 33,
  22, 40, 29, 48, 37, 26, 45, 34, 24, 41, 30, 49, 38, 27, 46, 36, 25, 43, 32, 21,
]);

const gateEl = document.getElementById("gate");
const homeEl = document.getElementById("home");
const entryEl = document.getElementById("entry");
const resultEl = document.getElementById("result");
const cardsEl = document.getElementById("cards");
const rvEl = document.getElementById("rv");
const formEl = document.getElementById("person-form");
const nameEl = document.getElementById("name");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const yearEl = document.getElementById("year");
const personIdEl = document.getElementById("person-id");
const peopleListEl = document.getElementById("people-list");
const emptyListEl = document.getElementById("empty-list");
const cancelFormEl = document.getElementById("cancel-form");
const legalNameEl = document.getElementById("legal-name");
const isAssetEl = document.getElementById("is-asset");
const tickerEl = document.getElementById("ticker");
const tickerFieldEl = document.getElementById("ticker-field");

function parseISODate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return null;
  const dt = new Date(y, m - 1, d);
  if (dt.getFullYear() !== y || dt.getMonth() !== m - 1 || dt.getDate() !== d) {
    return null;
  }
  return { y, m, d };
}

function calendarDaysBetween(from, to) {
  const a = Date.UTC(from.y, from.m - 1, from.d);
  const b = Date.UTC(to.y, to.m - 1, to.d);
  return Math.round((b - a) / 86400000);
}

const RA_PERIOD = 18;

function raPhase(day) {
  if (day === 9) {
    return {
      key: "critical",
      title: "Transition · 9 to 10",
      gist: "One of the two hardest times. The wave is leaving the positive side. Ra says the passage from 9 to 10 can feel difficult, especially if another cycle is turning too.",
    };
  }
  if (day === 18) {
    return {
      key: "critical",
      title: "Transition · 18 to 1",
      gist: "One of the two hardest times. The wave is leaving the negative side and starting over. Ra says the passage from 18 to 1 can feel difficult, especially if another cycle is turning too.",
    };
  }
  if (day >= 4 && day <= 6) {
    return {
      key: "peak",
      title: "Peak of the wave",
      gist: "Days 4, 5, and 6 sit at the crest. Ra calls these the strongest days for inner work.",
    };
  }
  if (day >= 1 && day <= 8) {
    return {
      key: "positive",
      title: "Positive side",
      gist: "The first nine days ride above the line. Power is rising or still high. The hard turn is day 9.",
    };
  }
  if (day === 14 || day === 15) {
    return {
      key: "nadir",
      title: "Nadir",
      gist: "The bottom of the wave. Least powerful, and usually easier than the transitions on 9 and 18.",
    };
  }
  return {
    key: "negative",
    title: "Negative side",
    gist: "The last nine days sit below the line. The cycle is in its quieter half. The hard turn is day 18.",
  };
}

function raCycleFor(dobISO, now = new Date()) {
  const born = parseISODate(dobISO);
  if (!born) return null;
  const today = { y: now.getFullYear(), m: now.getMonth() + 1, d: now.getDate() };
  const elapsed = calendarDaysBetween(born, today);
  const day = ((elapsed % RA_PERIOD) + RA_PERIOD) % RA_PERIOD + 1;
  const sine = Math.sin(((day - 1) / RA_PERIOD) * Math.PI * 2);
  return { day, sine, elapsed, phase: raPhase(day), born, today };
}

const RA_ABOUT =
  "Ra, in the Law of One, describes an 18-day adept cycle that starts at the moment of birth and repeats as a sine wave. Day 1 is the zero point going up. The first nine days are the positive side of the curve; days 4, 5, and 6 sit at the crest and are the strongest for workings. Days 9 and 18 are the transition periods and the most difficult times: passing from 9 to 10, and from 18 back to 1. Around days 14 and 15 the wave is at its lowest, least powerful, and usually easier than those two turns. As a person becomes more balanced, the cycle matters less.";

let lastRaCycle = null;
let lastGroupRa = null;

function hslToHex(h, s, l) {
  const sat = s / 100;
  const light = l / 100;
  const a = sat * Math.min(light, 1 - light);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = light - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function hexFromName(name) {
  const s = String(name || "").trim();
  let hash = 2166136261;
  for (let i = 0; i < s.length; i += 1) {
    hash ^= s.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  hash >>>= 0;
  const hue = 28 + (hash % 237);
  const sat = 48 + (hash % 18);
  const light = 56 + ((hash >>> 8) % 10);
  return hslToHex(hue, sat, light);
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function personalCyclesOn(attitude, y, m, d) {
  const worldYear = simpleReduce(sumDigitString(String(y)));
  const personalYear = simpleReduce(worldYear + simpleDigit(attitude));
  const personalMonth = simpleReduce(personalYear + m);
  const personalDay = simpleReduce(personalMonth + d);
  return { worldYear, personalYear, personalMonth, personalDay };
}

function monthDayProfile(person, y, m, d) {
  const chart = chartFor(person);
  if (!chart) return null;
  const when = new Date(y, m - 1, d);
  const ra = raCycleFor(person.dob, when);
  const cycles = personalCyclesOn(chart.numbers.attitude, y, m, d);
  const vsPath = linkScore(chart.number, cycles.personalDay);
  const vsAttitude = linkScore(chart.numbers.attitude, cycles.personalDay);
  return {
    y,
    m,
    d,
    weekday: when.getDay(),
    ra,
    cycles,
    vsPath,
    vsAttitude,
    pathFit: compatibilityLabel(vsPath),
    attFit: compatibilityLabel(vsAttitude),
    pathKind: scoreKind(vsPath),
    attKind: scoreKind(vsAttitude),
    path: chart.number,
    attitude: chart.numbers.attitude,
    dayTitle: (CYCLE_MEANINGS[cycles.personalDay] && CYCLE_MEANINGS[cycles.personalDay].title) || `Number ${cycles.personalDay}`,
    dayGist: (CYCLE_MEANINGS[cycles.personalDay] && CYCLE_MEANINGS[cycles.personalDay].day) || "",
  };
}

function daysInMonth(year, month) {
  if (!month) return 31;
  const y = year >= 1900 ? year : 2000;
  return new Date(y, month, 0).getDate();
}

function fillDayOptions(selected) {
  const year = Number(yearEl.value);
  const month = Number(monthEl.value);
  const max = daysInMonth(year, month);
  const keep = Number(selected);
  dayEl.replaceChildren();
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.disabled = true;
  placeholder.textContent = "Day";
  dayEl.append(placeholder);
  for (let d = 1; d <= max; d += 1) {
    const opt = document.createElement("option");
    opt.value = String(d);
    opt.textContent = String(d);
    dayEl.append(opt);
  }
  if (keep && keep <= max) {
    dayEl.value = String(keep);
  } else {
    dayEl.value = "";
    placeholder.selected = true;
  }
}

function readDob() {
  const y = Number(yearEl.value);
  const m = Number(monthEl.value);
  const d = Number(dayEl.value);
  if (!y || !m || !d) return null;
  const iso = `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  return parseISODate(iso) ? iso : null;
}

function setDob(iso) {
  const parts = iso ? parseISODate(iso) : null;
  if (!parts) {
    monthEl.value = "";
    yearEl.value = "";
    fillDayOptions("");
    return;
  }
  yearEl.value = String(parts.y);
  monthEl.value = String(parts.m);
  fillDayOptions(parts.d);
}

function markDobValidity() {
  const year = yearEl.value.trim();
  const yearOk = /^\d{4}$/.test(year) && Number(year) >= 1900 && Number(year) <= 2099;
  yearEl.setCustomValidity(yearOk || year === "" ? "" : "Enter a year from 1900 to 2099");
  if (!monthEl.value) {
    monthEl.setCustomValidity("Choose a month");
  } else {
    monthEl.setCustomValidity("");
  }
  if (!dayEl.value) {
    dayEl.setCustomValidity("Choose a day");
  } else if (!readDob() && yearOk && monthEl.value) {
    dayEl.setCustomValidity("That day is not in this month");
  } else {
    dayEl.setCustomValidity("");
  }
}

function dayOfYear(y, m, d) {
  const start = Date.UTC(y, 0, 1);
  const here = Date.UTC(y, m - 1, d);
  return Math.floor((here - start) / 86400000) + 1;
}

function chineseYear(y, m, d) {
  const doy = dayOfYear(y, m, d);
  if (y < 1900 || y > 2099) {
    return doy < 33 ? y - 1 : y;
  }
  const cny = CNY_DOY[y - 1900];
  return doy < cny ? y - 1 : y;
}

function chineseSign(y, m, d) {
  const lunarYear = chineseYear(y, m, d);
  const animal = ANIMALS[((lunarYear - 4) % 12 + 12) % 12];
  const stem = ((lunarYear - 4) % 10 + 10) % 10;
  return {
    animal,
    lunarYear,
    element: ELEMENTS[stem],
    polarity: POLARITY[stem],
  };
}

function currentChineseSign(now = new Date()) {
  return chineseSign(now.getFullYear(), now.getMonth() + 1, now.getDate());
}

function animalById(id) {
  return ANIMALS.find((item) => item.id === id);
}

function animalIndex(id) {
  return ANIMALS.findIndex((item) => item.id === id);
}

function nextYearForAnimal(animalId, fromLunarYear) {
  const want = animalIndex(animalId);
  const nowIdx = ((fromLunarYear - 4) % 12 + 12) % 12;
  let delta = (want - nowIdx + 12) % 12;
  if (delta === 0) delta = 12;
  return fromLunarYear + delta;
}

// Gary the Numbers Guy (GG33): one enemy (opposite), two friends (the triad).
const ENEMY_OF = {
  rat: "horse",
  ox: "goat",
  tiger: "monkey",
  rabbit: "rooster",
  dragon: "dog",
  snake: "pig",
  horse: "rat",
  goat: "ox",
  monkey: "tiger",
  rooster: "rabbit",
  dog: "dragon",
  pig: "snake",
};

const FRIENDS_OF = {
  rat: ["dragon", "monkey"],
  ox: ["snake", "rooster"],
  tiger: ["horse", "dog"],
  rabbit: ["goat", "pig"],
  dragon: ["rat", "monkey"],
  snake: ["ox", "rooster"],
  horse: ["tiger", "dog"],
  goat: ["rabbit", "pig"],
  monkey: ["rat", "dragon"],
  rooster: ["ox", "snake"],
  dog: ["tiger", "horse"],
  pig: ["rabbit", "goat"],
};

const YEAR_VIBE = {
  rat: "a year of deals, timing, and quiet moves",
  ox: "a year of grind, patience, and building the foundation",
  tiger: "a year of bold risk, heat, and fights for the lead",
  rabbit: "a year of caution, taste, and careful diplomacy",
  dragon: "a year of spectacle, ambition, and big public plays",
  snake: "a year of strategy, secrets, and timed transformation",
  horse: "a year of speed, travel, and restless independence",
  goat: "a year of art, home, and money made through taste",
  monkey: "a year of tricks, invention, and improvising under pressure",
  rooster: "a year of visibility, sharp talk, and high standards",
  dog: "a year of loyalty tests, fairness, and protecting what is yours",
  pig: "a year of plenty, company, and closing old cycles",
};

function namesList(ids) {
  return ids.map((id) => animalById(id).name).join(" and ");
}

const ANIMAL_TRIADS = [
  { ids: ["rat", "dragon", "monkey"], label: "Rat, Dragon, Monkey", flavor: "Creative triad" },
  { ids: ["ox", "snake", "rooster"], label: "Ox, Snake, Rooster", flavor: "Power triad" },
  { ids: ["tiger", "horse", "dog"], label: "Tiger, Horse, Dog", flavor: "Athlete triad" },
  { ids: ["rabbit", "goat", "pig"], label: "Rabbit, Goat, Pig", flavor: "Money triad" },
];

function animalRelation(aId, bId) {
  const a = animalById(aId);
  const b = animalById(bId);
  if (aId === bId) {
    return {
      kind: "own",
      label: "Same sign",
      note: `Both are ${a.name}. Shared energy: it can double the gift or the friction, so they need their own room inside the same rhythm.`,
    };
  }
  if (ENEMY_OF[aId] === bId) {
    return {
      kind: "enemy",
      label: "Enemy signs",
      note: `${a.name} and ${b.name} sit opposite. Gary the Numbers Guy's rule: keep extra space. Direct competition or one trying to run the other usually backfires.`,
    };
  }
  if ((FRIENDS_OF[aId] || []).includes(bId)) {
    const triad = ANIMAL_TRIADS.find((item) => item.ids.includes(aId) && item.ids.includes(bId));
    const flavor = triad ? `${triad.flavor} (${triad.label})` : "the same friend triad";
    return {
      kind: "friend",
      label: "Friend signs",
      note: `${a.name} and ${b.name} are in ${flavor}. They pull with each other: allies, not opposites.`,
    };
  }
  return {
    kind: "other",
    label: "Sideways signs",
    note: `${a.name} and ${b.name} are neither friend nor enemy. Stay in your own rhythm; this mix is usually quiet if nobody forces it.`,
  };
}

function animalElementKey(element) {
  const el = String(element || "").toLowerCase();
  return ["wood", "fire", "earth", "metal", "water"].includes(el) ? el : "";
}

function animalImageSrc(animal, element) {
  const el = animalElementKey(element);
  if (el) return `animals/${animal.id}-${el}.jpg?v=6`;
  return `animals/${animal.id}.jpg?v=6`;
}

function animalThumb(animal, className, element) {
  const img = document.createElement("img");
  img.className = className;
  img.src = animalImageSrc(animal, element);
  img.alt = element ? `${element} ${animal.name}` : animal.name;
  img.draggable = false;
  return img;
}

function animalTriadFor(ids) {
  const unique = [...new Set(ids)];
  return ANIMAL_TRIADS.find((triad) => unique.every((id) => triad.ids.includes(id)));
}

function yearInfluence(personSign, yearSign) {
  const you = personSign.animal;
  const year = yearSign.animal;
  const enemyId = ENEMY_OF[you.id];
  const friendIds = FRIENDS_OF[you.id];
  const enemy = animalById(enemyId);
  const friends = friendIds.map(animalById);
  let kind = "other";
  if (you.id === year.id) kind = "own";
  else if (enemyId === year.id) kind = "enemy";
  else if (friendIds.includes(year.id)) kind = "friend";

  const catNote =
    you.id === "rabbit" || year.id === "rabbit" || enemyId === "rabbit"
      ? " Gary calls the Rabbit the Cat, the Vietnamese name for this sign."
      : "";

  const vibe = YEAR_VIBE[year.id];
  const nextEnemy = nextYearForAnimal(enemyId, yearSign.lunarYear);
  const nextOwn = nextYearForAnimal(you.id, yearSign.lunarYear);
  let label = "Sideways year";
  let effect = "";

  if (kind === "own") {
    label = "Your year";
    effect = `This lunar year is ${vibe}. It is also your own ${you.name} year, the year the world's energy matches yours. People often rise, rebrand, or take the lead in their own animal year. The year can feel loud and exposed, so pick the moves you want your name on. Your enemy sign is still the ${enemy.name}.`;
  } else if (kind === "enemy") {
    label = "Enemy year";
    effect = `This lunar year is ${vibe}. ${year.name} is the enemy of ${you.name}.${catNote} Enemy years hit once every twelve years. The rule is to lay low: skip the big fight, the risky launch, and the loose money. Keep your circle small and wait this energy out. Next ${you.name} year is ${nextOwn}.`;
  } else if (kind === "friend") {
    label = "Friend year";
    effect = `This lunar year is ${vibe}. ${year.name} is a friend of ${you.name}, in the triad ${you.name}, ${namesList(friendIds)}. Friend-sign years pull with you. Partnerships, timing, and backup come easier. Use the year's momentum. Your enemy sign is the ${enemy.name}; next ${enemy.name} year is ${nextEnemy}.`;
  } else {
    label = "Sideways year";
    effect = `This lunar year is ${vibe}. ${year.name} is not your match, not in your friend triad, and not your enemy. Stay in your own rhythm. Friend signs for a ${you.name} are ${namesList(friendIds)}. Your enemy sign is the ${enemy.name}; next ${enemy.name} year is ${nextEnemy}.`;
  }

  return {
    kind,
    label,
    year,
    enemy,
    friends,
    nextEnemy,
    nextOwn,
    effect,
    allies: `Friends: ${namesList(friendIds)}. Enemy: ${enemy.name}.`,
  };
}

function reduceDigits(n, keepMasters) {
  while (n > 9) {
    if (keepMasters && (n === 11 || n === 22 || n === 33)) return n;
    n = String(n)
      .split("")
      .reduce((sum, ch) => sum + Number(ch), 0);
  }
  return n;
}

function processSum(sum) {
  return reduceDigits(sum, true);
}

function simpleReduce(n) {
  return reduceDigits(n, false);
}

const CYCLE_MEANINGS = {
  1: {
    title: "Driver's seat",
    gist: "Take control. Call the shots. Start what is yours.",
    year: "Get in the driver's seat of your life. If other people have been calling the shots, this cycle is about you. Begin, lead, and put your name on the work.",
    month: "A month to act independently and start what you have been waiting on.",
    day: "A day to take the first step and not wait for permission.",
  },
  2: {
    title: "Love and patience",
    gist: "Partnership, intuition, and slow timing. Feel it before you force it.",
    year: "A cycle for love and partnership. Trust your gut; it is loud this year. Get in touch with your deepest emotions. If marriage is on your mind, this is a supportive year.",
    month: "A month to cooperate, listen, and let a relationship or alliance take shape.",
    day: "A day for tact, patience, and paying attention to what you feel.",
  },
  3: {
    title: "Voice and joy",
    gist: "Speak, write, create, and be with people. Use the creative charge.",
    year: "A social, creative cycle. Communication is the work. If you sit on that energy you will feel restless. Say it, make it, and let people hear you.",
    month: "A month to talk, create, and lift the room. Keep it light enough to move.",
    day: "A day to express yourself. A conversation or a small creative act counts.",
  },
  4: {
    title: "Build and learn",
    gist: "Work, order, and new knowledge. Put things in their place.",
    year: "A cycle to expand your mind and get new knowledge. Build the system. Do the work that lasts. Skip shortcuts.",
    month: "A month for lists, study, and laying a floor you can stand on.",
    day: "A day to get one solid thing done and keep your word.",
  },
  5: {
    title: "Freedom and change",
    gist: "Movement, variety, and no dull moments. Give yourself room.",
    year: "A cycle of freedom, fun, and adventure. Change is the point. If you trap yourself, drama shows up instead of travel.",
    month: "A month to switch the scenery, try the new route, and stay flexible.",
    day: "A day that wants motion. Errands, a trip, or a change of plan all fit.",
  },
  6: {
    title: "Home and care",
    gist: "Family, duty, and the people who need you. Take care, then rest.",
    year: "A cycle of home, family, and being the one in charge of care. New opportunities often come through people you love. Do not disappear into everyone else's life.",
    month: "A month to tend the house, the kids, or the team, and to be needed.",
    day: "A day for family, repair, and showing up for someone.",
  },
  7: {
    title: "Faith and truth",
    gist: "Study, rest, and the inner life. Your faith may be tested.",
    year: "A cycle to seek the true meaning of things. Pull back, study, and keep a faith you can actually stand on. Forcing money or crowds this year usually backfires.",
    month: "A month to go inward. Quiet, research, and nature help more than noise.",
    day: "A day to think it through and not explain yourself to everyone.",
  },
  8: {
    title: "Money and health",
    gist: "Work, pay, and the body. Get the checkup. Build security.",
    year: "A cycle to focus on finances and health. Make the practical play. If your back, shoulders, or stress are talking, get them checked instead of pushing through.",
    month: "A month to deal with money, work, and the body in a straight line.",
    day: "A day for the bill, the deal, or the appointment you have been putting off.",
  },
  9: {
    title: "Finish and release",
    gist: "Payoff, endings, and clearing the old. Make room for the next 1.",
    year: "A cycle of harvest. You get some kind of payoff for the last nine years, and you are asked to let go of what is complete. Finish, forgive, and prepare for a new start.",
    month: "A month to close loops, clear clutter, and stop dragging last season's story.",
    day: "A day to complete something and leave it finished.",
  },
};

function sumDigitString(value) {
  return String(value)
    .split("")
    .reduce((sum, ch) => sum + (/\d/.test(ch) ? Number(ch) : 0), 0);
}

const LETTER_VALUES = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9,
};
const CORE_VOWELS = new Set(["A", "E", "I", "O", "U"]);

const NUMBER_ROLES = [
  {
    key: "soul",
    label: "Soul Number",
    source: "Vowels in the name you go by",
    about: "How you feel inside, and what you need to feel fulfilled.",
  },
  {
    key: "personality",
    label: "Personality Number",
    source: "Consonants in the name you go by",
    about: "How you are perceived. The first impression you give.",
  },
  {
    key: "power",
    label: "Power Name Number",
    source: "All letters in the name you go by",
    about: "Your strength in the name you answer to now.",
  },
  {
    key: "birthday",
    label: "Birth Day Number",
    source: "The day of the month you were born",
    about: "A talent you carry, and how others often see you.",
  },
  {
    key: "path",
    label: "Life Path Number",
    source: "Every digit of the birth date, added straight across",
    about: "The path your life takes for you to be happy.",
  },
  {
    key: "attitude",
    label: "Attitude Number",
    source: "Month + day of birth",
    about: "What people first experience when they meet you.",
  },
];

const EXTRA_ROLES = [
  {
    key: "destiny",
    label: "Destiny Number",
    source: "All letters of the birth-certificate name",
    about: "The purpose of this lifetime, from the original name.",
  },
  {
    key: "maturity",
    label: "Maturity Number",
    source: "Life Path + Destiny",
    about: "The theme that grows stronger in the second half of life.",
  },
];

const NUMBER_GROUPS = {
  1: { id: "mind", label: "Mind", set: "1-5-7" },
  5: { id: "mind", label: "Mind", set: "1-5-7" },
  7: { id: "mind", label: "Mind", set: "1-5-7" },
  2: { id: "business", label: "Business", set: "2-4-8" },
  4: { id: "business", label: "Business", set: "2-4-8" },
  8: { id: "business", label: "Business", set: "2-4-8" },
  3: { id: "creative", label: "Creative", set: "3-6-9" },
  6: { id: "creative", label: "Creative", set: "3-6-9" },
  9: { id: "creative", label: "Creative", set: "3-6-9" },
};

const GROUP_ABOUT = {
  mind: "Mind numbers (1-5-7) think first. They need space, movement, and a project. Together they spark ideas and can forget to rest.",
  business: "Business numbers (2-4-8) take care of the practical world: home, money, and security. Together they build, and they can get rigid.",
  creative: "Creative numbers (3-6-9) live in feeling, voice, and care. Together they make and nurture, and they can take on too much.",
};

const NUMBER_VIBE = {
  1: "independence and leading",
  2: "harmony and partnership",
  3: "voice and creativity",
  4: "order and security",
  5: "freedom and change",
  6: "care and responsibility",
  7: "privacy and truth",
  8: "work, money, and power",
  9: "compassion and the bigger picture",
};

const COMPAT_KIND_ABOUT = {
  natural: "Natural match. Same triad, so they speak this language the same way.",
  compatible: "Compatible. They can work together if they respect the difference.",
  neutral: "Neutral. Neither easy nor hard. Stay in your own rhythm on this point.",
  challenge: "Challenge. The pull is opposite. Agree to disagree here, or this point will grind.",
};

const SITE_MEANINGS = {
  path: {
    1: "Ones have a strong desire to be number one. Independent, self-motivated, and hard-working. Critical of themselves, and as a result they can be critical of others. When a 1 has won a personal victory, they radiate with joy. They multitask well, and keeping busy matters. They will not tolerate laziness in the people they spend time with. Exercise helps them get out of their heads and relax before the next project.",
    2: "The Mediator. Seeks harmony. Music has a soothing effect on you. Easygoing. Likes hugs and kisses. Hates conflict and will do anything to avoid it. Tries to keep the peace. Tends to be psychic. Will have dreams come true. Experiences déjà vu. You are a follower. You don't have to be the leader. Tends to be good at astrology, numerology, tarot, tea leaf reading. Makes good counselors and social workers. You have concern for others. Makes great parents. Does not need the spotlight. You do your job. You donate to charity in secret. You love to help out. You only feel angry when you feel pushed or threatened. Good natured. You can sometimes feel like you do everything for everybody and you feel drained. You need to be careful to not take on others' problems. It is important to say I'll help as much as I can. You worry about what others think of you. What you don't deal with mentally will eventually affect you physically. When you get upset it is like a volcano erupting. Without love a 2 can never truly be content.",
    3: "Threes communicate in every area: writers, broadcasters, actors, singers, performers, counselors. Natural comedians. If they do not use their creative energy they feel manic and unhappy. They tend to make a story bigger because it sounds better. Known for a trademark smile, bright eyes, and a pleasing voice.",
    4: "Fours seek security. Home is their haven. Intensely cerebral, they need ways to calm the mind. If they overthink, great ideas live and die in their heads. They like to be organized and put things back in the proper place. A sloppy home is a sign a 4 is not doing well.",
    5: "Fives seek freedom, fun, and adventure. If they do not live the adventure, life becomes too dramatic. Natural detectives and celebrators of life. They have a hard time settling down and a fear of being trapped or smothered. Give a 5 plenty of space.",
    6: "Sixes are nurturers. They should manage or run the company. If everything is going smoothly they must be careful not to stir it up. They put people on pedestals, which inevitably topple. Magnetic. People are drawn to them. Their mood affects the room.",
    7: "Sevens are cerebral. They do not want you to know exactly who they are, and they need privacy. If you earn their trust they will confide; prying gets you nowhere. Loners who seek truth and need a faith they can really embrace. Without faith they can grow cynical. They love natural beauty. Being in nature gives them peace.",
    8: "Eights do not feel safe until they have financial security. It is hard for them to take advice. A choice has to feel like theirs. They learn the hard way. Honest, and by being too blunt they can hurt feelings without meaning to. They can look insensitive while feeling everything deeply.",
    9: "The teacher, counselor, therapist, doctor, nurse, social worker, or creative fields. You are here to make a positive difference in the world. You are selfless. You are ruled by your determination. You follow what you believe in with tremendous ambition and drive. People will always be jealous and resentful toward you. People will try to sabotage your plans. Some people will see you as condescending, and you should know that before you speak. It is really upsetting for you to work hard for something and it not come to fruition. You have an authentic regard for humanity. Your goals serve others. When you fail you feel like you failed the world. You usually have issues with your original family. You may feel unloved or abandoned by your mother or father. You may feel completely responsible for your parents. It is hard for you to give up the attachment to your original family. You desire to be the perfect parent, but there is no such thing. You do so much and take such good care of everybody's business that when they are in trouble people look at you and think they are so strong they don't need my help. Your needs are not easily read by others. You have to ask. You don't need to be the center of attention, but people put you there anyway. People walk up to you all the time in public. You are not rude to those under your authority. Whatever you set your mind to you will pull off. You are very hard on yourself. You can be intimidating. You really don't compete with anyone. It is your job to put others at ease. You are accused of being patronizing. When you do something good or bad people follow.",
    11: "Master Number 11/2. A high-frequency 2: peacemaker, intuitive, and psychic, with standards that never rest. Stop and acknowledge what you have already done. When the vibration is too high, live as a 2 for a while. Once a Master Number, always a Master Number.",
    22: "Master Number 22/4. Vision plus action. The Master Builder can turn a large idea into something solid for other people. High standards, then rest in the 4: home, order, and work you can finish.",
    33: "Master Number 33/6. The rare Master Teacher and communicator. Guidance, healing, and excellence offered to others. When you need a break, live as a 6: family, care, and a room you can settle.",
  },
  soul: {
    1: "Fulfilled when you are first, independent, and moving on the next project without waiting for permission.",
    2: "You are happy when you are in love and have a harmonious environment. You use your intuition to solve problems. You like to bring people together. Needs reassurance that you are loved and special.",
    3: "Fulfilled when you can talk, write, perform, or make something that lifts the room.",
    4: "Fulfilled when life is orderly, home is solid, and you know where everything belongs.",
    5: "Fulfilled when you are free to come and go, travel, and change the scenery.",
    6: "Fulfilled when you are needed, running the home or the company, and people you love are safe.",
    7: "Fulfilled when you have privacy, time to think, and a truth you can stand on.",
    8: "Fulfilled when you have financial freedom, job security, and a nice home. When you are in charge and people do as you say. When you speak the truth and see justice in a difficult situation.",
    9: "Fulfilled when your work helps people and you can see that you made a difference.",
    11: "Fulfilled when you can trust your intuition and use it to bring people together. Read the 2 Soul as well.",
    22: "Fulfilled when a large plan of yours becomes a real place, system, or home. Read the 4 Soul as well.",
    33: "Fulfilled when you are teaching or healing and people actually grow. Read the 6 Soul as well.",
  },
  personality: {
    1: "Comes across as a self-starter. Direct. Does not like to wait or to ask for help.",
    2: "Mediator and peacemaker. Watch being oversensitive. Learn to establish boundaries. A good friend. Watch out for people taking advantage of you. Avoids the spotlight. Seeks companionship. You favor marriage and business alliances. You have innate fairness and sincerity.",
    3: "Comes across as witty, talkative, and bright. People remember the smile and the story.",
    4: "Comes across as reliable, organized, and a little reserved. You look like someone who will follow through.",
    5: "Comes across as lively, curious, and hard to pin down. People expect you to bring the fun.",
    6: "Comes across as the one in charge of care. Magnetic. People bring you their problems.",
    7: "Appears as someone who needs privacy. Keep to yourself. Acute observer. When you share knowledge you tend to speak with authority and have a good memory for detail. People think your silence means you are not listening, but you are always in tune.",
    8: "Comes across as capable, blunt, and interested in results. People assume you handle money and decisions.",
    9: "Comes across as a leader even when you did not ask for it. Strangers ask you for help.",
    11: "Comes across as sensitive and a little otherworldly. People feel they can tell you secrets. Read the 2 Personality as well.",
    22: "Comes across as someone who can handle a big job. Read the 4 Personality as well.",
    33: "Comes across as a teacher people want to follow. Read the 6 Personality as well.",
  },
  power: {
    1: "Strength is in starting, leading, and finishing as number one.",
    2: "Strength is in partnership, timing, and keeping the peace without disappearing.",
    3: "Strength is in voice, humor, and making people feel alive.",
    4: "A solid base. Responsible. Your home is important to you. You can be too blunt sometimes. You annoy or hurt others unwittingly. Strong need to acquire knowledge. You usually know what you are talking about. Can be seen as negative when criticizing others. You are loyal. You are organized.",
    5: "Strength is in change, sales, travel, and talking your way through a new scene.",
    6: "Attractive in a way that goes beyond the physical. You present yourself well. There is magnetism in you. You want to be in charge, and your air of authority makes it easy for others to follow you. Damage control is your specialty and sometimes you get nervous when things go too smoothly. Needs to relax and loosen up and enjoy life.",
    7: "Strength is in research, craft, and knowing more than you say.",
    8: "Strength is in building security, running a business, and making a hard call.",
    9: "Strength is in serving a larger cause and finishing what other people cannot.",
    11: "Strength is inspired partnership and insight. Read the 4 that 11 + a 2 often become, and the 2 Power as well.",
    22: "Strength is building something that lasts for many people. Read the 4 Power as well.",
    33: "Strength is teaching through care. Read the 6 Power as well.",
  },
  birthday: {
    1: "Born to initiate. Others see someone who will take the first step.",
    2: "Born to cooperate. Others see a gentle ally and a good listener.",
    3: "Born to express. Others see charm, a story, and a light in the room.",
    4: "Born to build. Others see the worker who makes the plan real.",
    5: "Born to move. Others see restlessness, curiosity, and nerve.",
    6: "Born to take care. Others see the parent in the room, whatever your age.",
    7: "You are someone that no one completely knows, because you are trying to figure out who you are yourself. You are an observer and spiritual.",
    8: "Born with an eye for value. Others see ambition and a practical streak.",
    9: "Perceived as a people person. People look to you for advice. Strangers ask you for directions. People are sure that you can help them. You exude a confidence that makes people trust you. People trust you with secrets. You can appear to be condescending. You must watch your delivery when communicating. You must establish a healthy boundary with your immediate family in order to stay happy and at peace.",
    11: "Born on a Master Day. High standards and a psychic edge. Read the 2 Birth Day as well.",
    22: "Born on a Master Day. Capacity to build at scale. Read the 4 Birth Day as well.",
    33: "Born on a Master Day. A teacher from the start. Read the 6 Birth Day as well.",
  },
  attitude: {
    1: "Does not like to ask for help. Completely self-motivated. Often hard on their own worth, which is why praise matters. If you believe in them, they can do almost anything. If you do not, they rebel. Being the winner is all-important.",
    2: "Easy going. You tend to be an observer. Romantic. Intrigued by anything regarding psychic ability. Experience déjà vu. Fascination with dreams. In touch with your intuition and the metaphysical side of life. You have compassion for people. You are fascinated by people's stories. You are seldom bored.",
    3: "Strong sense of humor and charisma. A streak of not wanting to grow up. In a good mood: big smile, bright eyes, great conversation. In a bad mood, nobody near them gets to be happy either. The right music or a funny film can snap them out of it.",
    4: "List keepers. Often quiet; you do not know what they are thinking. They track what is happening. They like nature, repair, and construction. They teach by becoming expert at a skill. They play devil's advocate. They do not like to be caught off guard, so when they speak they usually have the proof.",
    5: "Playful and fun. Needs to go out and experience the world. Stay busy, or they create drama or play the martyr. If they cannot travel they devour adventure on the page and live it in their head. Flirtatious. Often the life of the party.",
    6: "The nurturer. Male or female, they take care of everybody else. A child with a 6 Attitude acts like the parent. The adult 6 feels most useful when things are out of control and they are fixing it. Peace can leave them restless. Great with children or running a business. When a 6 walks in, people are drawn to them.",
    7: "You do not get to know what they are thinking or feeling. They keep to themselves and ask the big questions. They reveal themselves slowly. They can shut down and look uninterested, and still hear every word. Ultimate observers. They do not miss a thing.",
    8: "Often thinking about money, investing, or how to make life more secure. They care about appearance and notice when other people make an effort. If they have a family they want to provide. The shadow is money slipping through the fingers. They will tell you what they really think. Humor helps.",
    9: "The leader whether they want to be or not. At work they do their job and everyone else's. Show them what to do and they will get it done, then feel drained and say nothing. They need boundaries so they are not used up. Old family pain can haunt them until they work it through.",
    11: "A Master Attitude. High-frequency 2: sensitive, psychic, and easy to overwhelm. Read the 2 Attitude as well.",
    22: "A Master Attitude. High-frequency 4: the expert, the builder. Read the 4 Attitude as well.",
    33: "A Master Attitude. High-frequency 6: the teacher in charge of care. Read the 6 Attitude as well.",
  },
  destiny: {
    1: "This lifetime is about finding a way to be number one in what matters most.",
    2: "This lifetime is about establishing peace and harmony.",
    3: "This lifetime is about motivating and uplifting others. Communication is key.",
    4: "This lifetime is about a solid relationship based in trust, and a place you can truly call home.",
    5: "This lifetime is about the freedom to come and go, and not being controlled by others.",
    6: "This lifetime is about being in charge of what you do, working hard, and having people who really value you.",
    7: "This lifetime is about getting the answers you need. A 7 cannot stand hypocrisy.",
    8: "This lifetime is about balancing the financial side of life and finding true stability.",
    9: "This lifetime is about humanitarian work. The old soul who gives back.",
    11: "A Master Destiny. Inspired service and intuition. Read the 2 Destiny as well.",
    22: "A Master Destiny. Building something of lasting use. Read the 4 Destiny as well.",
    33: "A Master Destiny. Teaching and healing at a high level. Read the 6 Destiny as well.",
  },
  maturity: {
    1: "Later life asks you to lead on your own terms and finish as yourself.",
    2: "Later life asks you to rest in partnership, art, and peace.",
    3: "Later life asks you to speak, write, and play without apology.",
    4: "Later life asks you to secure the house and the work that lasts.",
    5: "Later life asks you to keep choosing freedom, then share what the adventures taught.",
    6: "Later life asks you to care for people and still have a life of your own.",
    7: "Later life asks you to trust the inner life and teach from it.",
    8: "Later life asks you to use power cleanly and enjoy the security you built.",
    9: "Later life asks you to give your wisdom away and let the old family story go.",
    11: "Later life raises the 11/2: intuition as a vocation. Read the 2 Maturity as well.",
    22: "Later life raises the 22/4: a visible structure you leave behind. Read the 4 Maturity as well.",
    33: "Later life raises the 33/6: teaching through love. Read the 6 Maturity as well.",
  },
};

function simpleDigit(number) {
  if (number === 11) return 2;
  if (number === 22) return 4;
  if (number === 33) return 6;
  return number;
}

function groupFor(number) {
  return NUMBER_GROUPS[simpleDigit(number)] || null;
}

function displayNumber(number) {
  if (number === 11) return "11/2";
  if (number === 22) return "22/4";
  if (number === 33) return "33/6";
  return String(number);
}

function garyPathNumber(chart) {
  return chart && chart.numbers && chart.numbers.gary
    ? chart.numbers.gary.path
    : 0;
}

function fillPathBadge(el, chart) {
  if (!el) return;
  el.replaceChildren();
  if (!chart) return;
  const glynis = document.createElement("span");
  glynis.className = "badge-glynis";
  glynis.textContent = displayNumber(chart.number);
  el.append(glynis);
  const gary = garyPathNumber(chart);
  if (!gary || gary === chart.number) return;
  const garyEl = document.createElement("span");
  garyEl.className = "badge-gary";
  garyEl.textContent = displayNumber(gary);
  garyEl.title = "Gary";
  el.append(garyEl);
}

function meaningFor(role, number) {
  const fromSite = SITE_MEANINGS[role] && SITE_MEANINGS[role][number];
  if (fromSite) return fromSite;
  const generic = NUMBERS[number];
  return generic ? generic.meaning : "";
}

function titleFor(number) {
  if (number === 11) return "Master Number 11/2";
  if (number === 22) return "Master Number 22/4";
  if (number === 33) return "Master Number 33/6";
  return NUMBERS[number] ? NUMBERS[number].title : `Number ${number}`;
}

function garyNumberNote(number) {
  return GARY_NUMBERS[number] || GARY_NUMBERS[simpleDigit(number)] || "";
}

function garyAlphabetNumber(letter) {
  const ch = String(letter || "").toUpperCase();
  if (!/[A-Z]/.test(ch)) return 0;
  const n = ch.charCodeAt(0) - 64;
  if (n === 11 || n === 22) return n;
  return garyReduce(n);
}

function firstNameToken(name) {
  const raw = String(name || "").trim();
  const match = raw.match(/[A-Za-z]+/);
  return match ? match[0] : "";
}

function garyNameNote(name) {
  const token = firstNameToken(name);
  if (!token) return "";
  const word = token.toUpperCase();
  const firstN = garyAlphabetNumber(word[0]);
  let vowel = "";
  for (const ch of word) {
    if ("AEIOU".includes(ch)) {
      vowel = ch;
      break;
    }
  }
  if (!vowel && word.includes("Y")) vowel = "Y";
  const bits = [GARY_LETTER_LOOK[firstN], vowel && GARY_VOWEL_DRIVE[vowel]].filter(Boolean);
  if (!bits.length) return "";
  return `${token}: ${bits.join(" ")}`;
}

function setTextHidden(el, text) {
  if (!el) return;
  const value = text || "";
  el.textContent = value;
  el.hidden = !value;
}

function fillJobList(el, numbers) {
  const fold = document.getElementById("number-jobs-fold");
  const list = (Array.isArray(numbers) ? numbers : [numbers]).filter(Boolean);
  const seen = new Set();
  const jobs = [];
  list.forEach((number) => {
    (LIFE_PATH_JOBS[number] || []).forEach((job) => {
      const key = job.toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      jobs.push(job);
    });
  });
  if (!el) return;
  el.replaceChildren();
  jobs.forEach((job) => {
    const li = document.createElement("li");
    li.textContent = job;
    el.append(li);
  });
  if (fold) fold.hidden = jobs.length === 0;
}

function fillGaryNote(el, text) {
  if (!el) return;
  el.replaceChildren();
  const parts = (Array.isArray(text) ? text : [text]).filter(Boolean);
  if (!parts.length) {
    el.hidden = true;
    return;
  }
  el.hidden = false;
  const label = document.createElement("span");
  label.className = "gary-label";
  label.textContent = "Gary the Numbers Guy";
  el.append(label);
  parts.forEach((part) => {
    const body = document.createElement("span");
    body.className = "gary-body";
    body.textContent = part;
    el.append(body);
  });
}

function animalGaryText(animal) {
  const note = GARY_ANIMALS[animal.id] || "";
  const friends = namesList(FRIENDS_OF[animal.id] || []);
  const enemy = animalById(ENEMY_OF[animal.id]);
  const triad = ANIMAL_TRIADS.find((item) => item.ids.includes(animal.id));
  const triadLine = triad ? ` ${triad.flavor}: ${triad.label}.` : "";
  const cat =
    animal.id === "rabbit"
      ? " Gary uses the Vietnamese name Cat for this sign."
      : "";
  return `${note}${triadLine} Friends: ${friends}. Enemy: ${enemy ? enemy.name : ""}.${cat}`.trim();
}

function isVowelLetter(letter, prev, next) {
  if (CORE_VOWELS.has(letter)) return true;
  if (letter !== "Y") return false;
  return !CORE_VOWELS.has(prev) && !CORE_VOWELS.has(next);
}

function lettersInName(name) {
  const words = String(name || "")
    .toUpperCase()
    .split(/[^A-Z]+/)
    .filter(Boolean);
  const out = [];
  for (const word of words) {
    const chars = [...word];
    chars.forEach((letter, index) => {
      const value = LETTER_VALUES[letter];
      if (!value) return;
      const prev = chars[index - 1] || "";
      const next = chars[index + 1] || "";
      out.push({
        letter,
        value,
        vowel: isVowelLetter(letter, prev, next),
      });
    });
  }
  return out;
}

function nameLetterSums(name) {
  const letters = lettersInName(name);
  let vowelSum = 0;
  let consonantSum = 0;
  for (const item of letters) {
    if (item.vowel) vowelSum += item.value;
    else consonantSum += item.value;
  }
  return { vowelSum, consonantSum, letters };
}

function formatChain(sum, keepMasters = true) {
  const steps = [sum];
  let n = sum;
  while (n > 9) {
    if (keepMasters && (n === 11 || n === 22 || n === 33)) break;
    n = sumDigitString(String(n));
    steps.push(n);
  }
  return { value: n, text: steps.join(" → ") };
}

function garyReduce(n) {
  return formatChain(Number(n) || 0, true).value;
}

function ordinalDay(d) {
  const v = d % 100;
  if (v >= 11 && v <= 13) return `${d}th`;
  const last = d % 10;
  if (last === 1) return `${d}st`;
  if (last === 2) return `${d}nd`;
  if (last === 3) return `${d}rd`;
  return `${d}th`;
}

function garyMonthNumber(m) {
  return m === 11 ? 11 : garyReduce(m);
}

function garyDayNumber(d) {
  if (d === 11 || d === 22) return d;
  return garyReduce(d);
}

function isMasterNumber(n) {
  return n === 11 || n === 22 || n === 33;
}

function garyDateChart(y, m, d) {
  const digits = [...String(m), ...String(d), ...String(y)].map(Number);
  const digitSum = digits.reduce((total, n) => total + n, 0);
  const digitChain = formatChain(digitSum, true);
  const wholeSum = m + d + y;
  const wholeChain = formatChain(wholeSum, true);
  const reducedYear = simpleReduce(y);
  const compoundSum = m + d + reducedYear;
  const compoundChain = formatChain(compoundSum, true);
  const digitPath = digitChain.value;
  const wholePath = wholeChain.value;
  const compoundPath = compoundChain.value;
  const digitText = `${digits.join(" + ")} = ${digitChain.text}`;
  const wholeText = `${m} + ${d} + ${y} = ${wholeChain.text}`;
  const compoundText = `${m} + ${d} + ${reducedYear} = ${compoundChain.text}`;
  let path = digitPath;
  let pathText = digitText;
  let pathHow = "every digit";
  if (!isMasterNumber(digitPath) && isMasterNumber(wholePath)) {
    path = wholePath;
    pathText = wholeText;
    pathHow = "month + day + year";
  } else if (!isMasterNumber(digitPath) && isMasterNumber(compoundPath)) {
    path = compoundPath;
    pathText = compoundText;
    pathHow = "month + day + reduced year";
  }
  const monthN = garyMonthNumber(m);
  const dayN = garyDayNumber(d);
  const yearDigitSum = [...String(y)].map(Number).reduce((total, n) => total + n, 0);
  const yearN = garyReduce(yearDigitSum);
  const partsTotal = monthN + dayN + yearN;
  const partsChain = formatChain(partsTotal, true);
  const attitudeChain = formatChain(monthN + dayN, true);
  const first = String(m)[0];
  const last = String(y).slice(-1);
  const dayChain = formatChain(d, true);
  return {
    path,
    pathText,
    pathHow,
    digitPath,
    digitText,
    wholePath,
    wholeText,
    compoundPath,
    compoundText,
    day: dayN,
    dayText:
      d === 11 || d === 22
        ? `Born on the ${ordinalDay(d)}. Gary keeps master ${displayNumber(dayN)} and does not split it to ${[...String(d)].join("+")}.`
        : `${d} → ${dayChain.text}`,
    month: monthN,
    attitude: attitudeChain.value,
    attitudeText: `${displayNumber(monthN)} (month) + ${displayNumber(dayN)} (day) = ${attitudeChain.text}`,
    yearPart: yearN,
    partsPath: partsChain.value,
    partsText: `${displayNumber(monthN)} + ${displayNumber(dayN)} + ${displayNumber(yearN)} = ${partsChain.text}`,
    lucky: `${first}${last}`,
    luckyText: `First digit of the date ${first} and last digit of the year ${last} → ${first}${last}`,
  };
}

function letterEquation(items) {
  if (!items.length) return { value: 0, text: "No letters", sum: 0 };
  const sum = items.reduce((total, item) => total + item.value, 0);
  const chain = formatChain(sum);
  const left = items.map((item) => `${item.letter}(${item.value})`).join(" + ");
  return { value: chain.value, sum, text: `${left} = ${chain.text}` };
}

function digitEquation(digits) {
  const sum = digits.reduce((total, n) => total + n, 0);
  const chain = formatChain(sum);
  return { value: chain.value, sum, text: `${digits.join(" + ")} = ${chain.text}` };
}

function dateDigitSums(y, m, d) {
  const dayDigits = [...String(d)].map(Number);
  const monthDigits = [...String(m)].map(Number);
  const yearDigits = [...String(y)].map(Number);
  const daySum = dayDigits.reduce((total, n) => total + n, 0);
  const monthSum = monthDigits.reduce((total, n) => total + n, 0);
  const yearSum = yearDigits.reduce((total, n) => total + n, 0);
  return {
    dayDigits,
    monthDigits,
    yearDigits,
    daySum,
    monthSum,
    yearSum,
    dayMonthSum: daySum + monthSum,
    dayMonthYearSum: daySum + monthSum + yearSum,
  };
}

function compatibilityLabel(score) {
  if (score === 2) return "Natural";
  if (score === 1) return "Compatible";
  if (score === -1) return "Challenge";
  return "Neutral";
}

function processCompatibility(attitude, compareNumber) {
  const n = simpleDigit(compareNumber);
  const table = {
    1: { natural: [1, 5, 7], compatible: [2, 3, 9], challenge: [4, 6, 8] },
    2: { natural: [2, 4, 8], compatible: [1, 3, 6, 9], challenge: [5, 7] },
    3: { natural: [3, 6, 9], compatible: [1, 2, 5], challenge: [4, 7, 8] },
    4: { natural: [2, 4, 8], compatible: [6, 7], challenge: [1, 3, 5, 9] },
    5: { natural: [1, 5, 7], compatible: [3, 9], neutral: [8], challenge: [2, 4, 6] },
    6: { natural: [3, 6, 9], compatible: [2, 4, 8], challenge: [1, 5, 7] },
    7: { natural: [1, 5, 7], compatible: [4], challenge: [2, 3, 6, 8, 9] },
    8: { natural: [2, 4, 8], compatible: [6], neutral: [3, 7, 9], challenge: [1, 5] },
    9: { natural: [3, 6, 9], compatible: [1, 2, 5], challenge: [4, 7, 8] },
  };
  const row = table[simpleDigit(attitude)];
  if (!row) return 0;
  if (row.natural && row.natural.includes(n)) return 2;
  if (row.compatible && row.compatible.includes(n)) return 1;
  if (row.neutral && row.neutral.includes(n)) return 0;
  if (row.challenge && row.challenge.includes(n)) return -1;
  return 0;
}

function linkScore(a, b) {
  return Math.min(
    processCompatibility(a, b),
    processCompatibility(b, a)
  );
}

function compareBlueprints(chartA, chartB) {
  const slots = NUMBER_ROLES.map((role, index) => {
    const av = chartA.numbers.values[index];
    const bv = chartB.numbers.values[index];
    const score = linkScore(av, bv);
    return {
      key: role.key,
      label: role.label,
      av,
      bv,
      score,
      name: compatibilityLabel(score),
    };
  });
  const counts = { natural: 0, compatible: 0, neutral: 0, challenge: 0 };
  slots.forEach((slot) => {
    if (slot.score === 2) counts.natural += 1;
    else if (slot.score === 1) counts.compatible += 1;
    else if (slot.score === -1) counts.challenge += 1;
    else counts.neutral += 1;
  });
  let verdict = "No challenge numbers. This mix has room to breathe.";
  if (counts.challenge >= 4) {
    verdict = "Four or more challenges. Glynis says be honest about whether this mix is worth the weight.";
  } else if (counts.challenge === 3) {
    verdict = "Three challenges. You will keep working on this.";
  } else if (counts.challenge > 0) {
    verdict = "One or two challenges. You can agree to disagree.";
  }
  const groupA = groupFor(chartA.number);
  const groupB = groupFor(chartB.number);
  const sameGroup = groupA && groupB && groupA.id === groupB.id;
  return { slots, counts, verdict, groupA, groupB, sameGroup };
}

function numberVibe(number) {
  return NUMBER_VIBE[simpleDigit(number)] || `number ${displayNumber(number)}`;
}

function scoreKind(score) {
  if (score === 2) return "natural";
  if (score === 1) return "compatible";
  if (score === -1) return "challenge";
  return "neutral";
}

function pairPointCopy(slot, nameA, nameB) {
  const role = NUMBER_ROLES.find((item) => item.key === slot.key) || {
    label: slot.label,
    about: "",
  };
  const groupA = groupFor(slot.av);
  const groupB = groupFor(slot.bv);
  let groups = "";
  if (groupA && groupB && groupA.id === groupB.id) {
    groups = `Both are ${groupA.label} numbers (${groupA.set}). `;
  } else if (groupA && groupB) {
    groups = `${groupA.label} (${groupA.set}) meeting ${groupB.label} (${groupB.set}). `;
  }
  const kind = scoreKind(slot.score);
  return {
    key: slot.key,
    label: role.label,
    about: role.about,
    numbers: `${nameA} ${displayNumber(slot.av)} · ${nameB} ${displayNumber(slot.bv)}`,
    rating: slot.name,
    kind,
    body: `${role.about} ${nameA} leans toward ${numberVibe(slot.av)}. ${nameB} leans toward ${numberVibe(slot.bv)}. ${groups}${COMPAT_KIND_ABOUT[kind]}`,
  };
}

function numerologyChart(name, y, m, d, now = new Date(), legalName = "") {
  const goingBy = nameLetterSums(name);
  const destinyName = String(legalName || "").trim() || name;
  const destinyLetters = nameLetterSums(destinyName);
  const dates = dateDigitSums(y, m, d);
  const vowels = goingBy.letters.filter((item) => item.vowel);
  const consonants = goingBy.letters.filter((item) => !item.vowel);
  const soulEq = letterEquation(vowels);
  const personalityEq = letterEquation(consonants);
  const powerEq = letterEquation(goingBy.letters);
  const destinyEq = letterEquation(destinyLetters.letters);
  const pathEq = digitEquation([
    ...dates.monthDigits,
    ...dates.dayDigits,
    ...dates.yearDigits,
  ]);
  const birthdayEq = digitEquation(dates.dayDigits);
  const attitudeEq = digitEquation([...dates.monthDigits, ...dates.dayDigits]);
  const soul = processSum(goingBy.vowelSum);
  const personality = processSum(goingBy.consonantSum);
  const power = processSum(goingBy.vowelSum + goingBy.consonantSum);
  const birthday = processSum(dates.daySum);
  const path = processSum(dates.dayMonthYearSum);
  const attitude = processSum(dates.dayMonthSum);
  const destiny = processSum(destinyLetters.vowelSum + destinyLetters.consonantSum);
  const maturity = processSum(path + destiny);
  const yearDigits = [...String(now.getFullYear())].map(Number);
  const worldYearEq = digitEquation(yearDigits);
  const calendarYear = now.getFullYear();
  const calendarMonth = now.getMonth() + 1;
  const calendarDay = now.getDate();
  const worldYear = simpleReduce(sumDigitString(String(calendarYear)));
  const personalYear = simpleReduce(worldYear + simpleDigit(attitude));
  const personalMonth = simpleReduce(personalYear + calendarMonth);
  const personalDay = simpleReduce(personalMonth + calendarDay);
  const values = [soul, personality, power, birthday, path, attitude];
  const pathGroup = groupFor(path);
  const attitudeGroup = groupFor(attitude);
  return {
    values,
    line: values.join(" "),
    soul,
    personality,
    power,
    birthday,
    path,
    attitude,
    destiny,
    maturity,
    worldYear,
    personalYear,
    personalMonth,
    personalDay,
    calendarYear,
    calendarMonth,
    calendarDay,
    compatibility: compatibilityLabel(processCompatibility(attitude, worldYear)),
    goingByLetters: goingBy.letters,
    destinyLetters: destinyLetters.letters,
    destinyFromSameName: destinyName === name,
    groups: {
      path: pathGroup,
      attitude: attitudeGroup,
    },
    steps: {
      soul: soulEq.text,
      personality: personalityEq.text,
      power: powerEq.text,
      birthday: birthdayEq.text,
      path: pathEq.text,
      attitude: attitudeEq.text,
      destiny: destinyEq.text,
      maturity: `Life Path ${displayNumber(path)} + Destiny ${displayNumber(destiny)} = ${formatChain(path + destiny).text}`,
      worldYear: worldYearEq.text,
      personalYear: `World year ${worldYear} + Attitude ${simpleDigit(attitude)} = ${formatChain(worldYear + simpleDigit(attitude), false).text}`,
      personalMonth: `Personal Year ${personalYear} + month ${calendarMonth} = ${formatChain(personalYear + calendarMonth, false).text}`,
      personalDay: `Personal Month ${personalMonth} + day ${calendarDay} = ${formatChain(personalMonth + calendarDay, false).text}`,
    },
    cycles: {
      year: personalYear,
      month: personalMonth,
      day: personalDay,
    },
    gary: garyDateChart(y, m, d),
  };
}

function chartFor(person) {
  const parts = parseISODate(person.dob);
  if (!parts) return null;
  const { y, m, d } = parts;
  const numbers = numerologyChart(
    person.name,
    y,
    m,
    d,
    new Date(),
    person.legalName
  );
  return {
    parts,
    number: numbers.path,
    numbers,
    sign: chineseSign(y, m, d),
  };
}

function formatDate(y, m, d) {
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatShortDate(y, m, d) {
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function newId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `p-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function emptyStore() {
  return { people: [], activeId: null };
}

function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data && Array.isArray(data.people)) {
        data.people = data.people.filter(
          (person) => person && person.id && person.name && parseISODate(person.dob)
        );
        return data;
      }
    }
  } catch {
    /* fall through to legacy */
  }

  const store = emptyStore();
  try {
    const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY) || "null");
    if (legacy && parseISODate(legacy.dob)) {
      const person = {
        id: newId(),
        name: "Me",
        dob: legacy.dob,
        savedAt: legacy.savedAt || new Date().toISOString(),
      };
      store.people.push(person);
      store.activeId = person.id;
    }
  } catch {
    /* ignore */
  }
  return store;
}

function saveStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

const CRYPTO_TICKERS = new Set([
  "BTC", "ETH", "SOL", "XRP", "DOGE", "ADA", "AVAX", "DOT", "LINK", "MATIC",
  "BNB", "ATOM", "LTC", "BCH", "NEAR", "APT", "SUI", "PEPE", "SHIB", "UNI",
  "AAVE", "ARB", "OP", "TON", "TRX", "XLM", "HBAR", "FIL", "ICP", "INJ",
]);

function normalizeTicker(raw) {
  return String(raw || "")
    .trim()
    .toUpperCase()
    .replace(/^\$/, "")
    .replace(/\s+/g, "")
    .slice(0, 24);
}

function isCryptoTicker(ticker) {
  const t = normalizeTicker(ticker);
  if (!t) return false;
  if (t.includes("BINANCE") || t.includes("COINBASE") || t.includes("KRAKEN")) return true;
  const name = t.includes(":") ? t.split(":")[1] : t;
  if (/USDT$|USD$/.test(name)) return true;
  return CRYPTO_TICKERS.has(name);
}

function tradingViewSymbol(ticker) {
  const t = normalizeTicker(ticker);
  if (!t) return "";
  if (t.includes(":")) return t;
  if (isCryptoTicker(t)) {
    const base = t.replace(/USDT$|USD$/, "");
    return `BINANCE:${base}USDT`;
  }
  return t;
}

function isAssetPerson(person) {
  return Boolean(person && person.isAsset && normalizeTicker(person.ticker));
}

function setTickerHint(message) {
  const hint = document.getElementById("ticker-error");
  if (!hint) return;
  hint.hidden = !message;
  hint.textContent = message || "";
}

function syncTickerField() {
  const on = Boolean(isAssetEl && isAssetEl.checked);
  if (tickerFieldEl) tickerFieldEl.hidden = !on;
  if (tickerEl) tickerEl.required = false;
  if (!on) setTickerHint("");
}

const BACKUP_KIND = "waterdragon.people.backup";
const BACKUP_KINDS = new Set(["waterdragon.people.backup", "digits.people.backup"]);
const BACKUP_VERSION = 2;
const RV_KEEP = 100;

function backupFileName(when = new Date()) {
  const stamp = when.toISOString().slice(0, 10);
  return `water-dragon-${stamp}.json`;
}

function buildBackup(store) {
  return {
    kind: BACKUP_KIND,
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    store: {
      people: store.people.map((person) => ({
        id: person.id,
        name: person.name,
        legalName: person.legalName || "",
        dob: person.dob,
        isAsset: Boolean(person.isAsset),
        ticker: person.ticker || "",
        savedAt: person.savedAt,
      })),
      activeId: store.activeId || null,
    },
    games: serializeRvStore(loadRvStore()),
  };
}

function parseBackup(text) {
  const data = JSON.parse(text);
  let people = [];
  let activeId = null;
  if (data && BACKUP_KINDS.has(data.kind) && data.store && Array.isArray(data.store.people)) {
    people = data.store.people;
    activeId = data.store.activeId || null;
  } else if (data && Array.isArray(data.people)) {
    people = data.people;
    activeId = data.activeId || null;
  } else if (Array.isArray(data)) {
    people = data;
  } else {
    throw new Error("Not a Water Dragon backup");
  }
  const cleaned = [];
  const seen = new Set();
  for (const person of people) {
    if (!person || !person.name || !parseISODate(person.dob)) continue;
    const id = person.id && !seen.has(person.id) ? person.id : newId();
    seen.add(id);
    cleaned.push({
      id,
      name: String(person.name).trim().slice(0, 60),
      legalName: person.legalName ? String(person.legalName).trim().slice(0, 80) : "",
      dob: person.dob,
      isAsset: Boolean(person.isAsset),
      ticker: normalizeTicker(person.ticker),
      savedAt: person.savedAt || new Date().toISOString(),
    });
  }
  if (activeId && !cleaned.some((person) => person.id === activeId)) activeId = null;
  return { people: cleaned, activeId, games: parseBackupGames(data && data.games) };
}

function setBackupStatus(message) {
  document.querySelectorAll(".backup-status").forEach((el) => {
    el.hidden = !message;
    el.textContent = message || "";
  });
}

function rvRunCount(games) {
  if (!games) return 0;
  return (
    (games.skew ? games.skew.length : 0) +
    (games.colors ? games.colors.length : 0) +
    (games.shapes ? games.shapes.length : 0) +
    (games.blind ? games.blind.length : 0) +
    (games.targets ? games.targets.length : 0)
  );
}

function exportBackup() {
  const store = loadStore();
  const games = loadRvStore();
  const runs = rvRunCount(games);
  if (store.people.length === 0 && runs === 0) {
    window.alert("No names or game runs to save yet.");
    return;
  }
  const backup = buildBackup(store);
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const filename = backupFileName();
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  const nameBit = `${store.people.length} name${store.people.length === 1 ? "" : "s"}`;
  const runBit = `${runs} RV run${runs === 1 ? "" : "s"}`;
  setBackupStatus(`Saved ${filename} with ${nameBit} and ${runBit}.`);
}

function mergeBackup(incoming) {
  const store = loadStore();
  const byId = new Map(store.people.map((person) => [person.id, person]));
  for (const person of incoming.people) {
    const sameId = byId.get(person.id);
    const sameKey = store.people.find(
      (item) => item.name === person.name && item.dob === person.dob
    );
    const hit = sameId || sameKey;
    if (hit) {
      hit.name = person.name;
      hit.legalName = person.legalName || "";
      hit.dob = person.dob;
      hit.isAsset = Boolean(person.isAsset);
      hit.ticker = normalizeTicker(person.ticker);
      hit.savedAt = person.savedAt || hit.savedAt;
    } else {
      store.people.push(person);
      byId.set(person.id, person);
    }
  }
  if (incoming.activeId && store.people.some((person) => person.id === incoming.activeId)) {
    store.activeId = incoming.activeId;
  } else if (store.activeId && !store.people.some((person) => person.id === store.activeId)) {
    store.activeId = store.people[0] ? store.people[0].id : null;
  }
  saveStore(store);
  return store;
}

function importBackupText(text) {
  const incoming = parseBackup(text);
  const incomingRuns = rvRunCount(incoming.games);
  if (incoming.people.length === 0 && incomingRuns === 0) {
    window.alert("That file has no saved names or game runs.");
    return;
  }
  const current = loadStore();
  const currentRuns = rvRunCount(loadRvStore());
  if (current.people.length > 0 || currentRuns > 0) {
    const fileBits = [];
    if (incoming.people.length) {
      fileBits.push(`${incoming.people.length} name${incoming.people.length === 1 ? "" : "s"}`);
    }
    if (incomingRuns) {
      fileBits.push(`${incomingRuns} RV run${incomingRuns === 1 ? "" : "s"}`);
    }
    const ok = window.confirm(
      `This file has ${fileBits.join(" and ")}. Add them to what is already on this phone?`
    );
    if (!ok) return;
  }
  let store = current;
  if (incoming.people.length) store = mergeBackup(incoming);
  if (incoming.games) mergeRvBackup(incoming.games);
  const savedRuns = rvRunCount(loadRvStore());
  const nameBit = `${store.people.length} name${store.people.length === 1 ? "" : "s"}`;
  const runBit = `${savedRuns} RV run${savedRuns === 1 ? "" : "s"}`;
  setBackupStatus(`Loaded ${nameBit} and ${runBit} on this phone.`);
  renderRvRecord();
  showHome();
}

function sortedPeople(store) {
  return [...store.people].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );
}

function showOnly(el) {
  if (gateEl) gateEl.hidden = el !== gateEl;
  homeEl.hidden = el !== homeEl;
  entryEl.hidden = el !== entryEl;
  resultEl.hidden = el !== resultEl;
  if (cardsEl) cardsEl.hidden = el !== cardsEl;
  if (rvEl) rvEl.hidden = el !== rvEl;
  document.querySelector(".app")?.classList.toggle("app-cards", el === cardsEl);
  if (el !== rvEl) {
    stopSkewRun();
    cancelBlindColor();
    if (rvView.persistTimer) {
      window.clearTimeout(rvView.persistTimer);
      rvView.persistTimer = 0;
    }
    persistCurrentTarget();
  }
  const allNamesBtn = document.getElementById("all-names");
  if (allNamesBtn) allNamesBtn.hidden = el !== resultEl;
  if (el !== resultEl) {
    closeMonthCal();
    closeCandleCal();
  }
}

function showGate() {
  showOnly(gateEl);
}

function openNumbers() {
  showHome();
}

let compatGroup = [];
let listDragged = false;

function personRecord(person) {
  const chart = chartFor(person);
  return { person, chart };
}

function renderList(store) {
  const people = sortedPeople(store);
  peopleListEl.replaceChildren();
  emptyListEl.hidden = people.length > 0;

  for (const person of people) {
    const chart = chartFor(person);
    const row = document.createElement("li");
    row.className = "person-row";

    const openBtn = document.createElement("button");
    openBtn.type = "button";
    openBtn.className = "person-open";
    openBtn.dataset.id = person.id;
    openBtn.draggable = true;
    openBtn.innerHTML = `<span class="person-copy"><strong></strong><small></small></span><span class="person-badge"></span>`;
    if (chart) {
      openBtn.prepend(animalThumb(chart.sign.animal, "person-thumb", chart.sign.element));
    }
    openBtn.querySelector("strong").textContent = person.name;
    openBtn.querySelector("small").textContent = chart
      ? `${person.ticker ? `${person.ticker} · ` : ""}${chart.numbers.line} · ${chart.sign.element} ${chart.sign.animal.name}`
      : person.dob;
    fillPathBadge(openBtn.querySelector(".person-badge"), chart);
    const group = chart && groupFor(chart.number);
    if (group) openBtn.classList.add(`group-${group.id}`);
    openBtn.addEventListener("click", () => {
      if (listDragged) {
        listDragged = false;
        return;
      }
      openPerson(person.id);
    });
    openBtn.addEventListener("dragstart", (event) => {
      listDragged = true;
      event.dataTransfer.setData("text/plain", person.id);
      event.dataTransfer.effectAllowed = "copy";
      openBtn.classList.add("dragging");
    });
    openBtn.addEventListener("dragend", () => {
      openBtn.classList.remove("dragging");
      setTimeout(() => {
        listDragged = false;
      }, 0);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "person-delete";
    deleteBtn.dataset.id = person.id;
    deleteBtn.setAttribute("aria-label", `Remove ${person.name}`);
    deleteBtn.textContent = "✕";
    deleteBtn.addEventListener("click", () => removePerson(person.id));

    row.append(openBtn, deleteBtn);
    peopleListEl.append(row);
  }

  renderCompatBoard(store);
}

function addToCompatGroup(id) {
  if (!id || compatGroup.includes(id)) return;
  compatGroup.push(id);
  renderCompatBoard(loadStore());
}

function removeFromCompatGroup(id) {
  compatGroup = compatGroup.filter((item) => item !== id);
  renderCompatBoard(loadStore());
}

function renderCompatBoard(store) {
  const drop = document.getElementById("compat-drop");
  const chips = document.getElementById("compat-chips");
  const empty = document.getElementById("compat-empty");
  const viz = document.getElementById("compat-viz");
  const clearBtn = document.getElementById("compat-clear");
  if (!drop || !chips || !viz) return;

  const members = compatGroup
    .map((id) => store.people.find((item) => item.id === id))
    .filter(Boolean)
    .map(personRecord)
    .filter((item) => item.chart);
  compatGroup = members.map((item) => item.person.id);

  chips.replaceChildren();
  viz.replaceChildren();
  empty.hidden = members.length > 0;
  clearBtn.hidden = members.length === 0;
  renderCompatRa(members);
  window.requestAnimationFrame(() => drawGroupRaWaves());

  members.forEach((item) => {
    const group = groupFor(item.chart.number);
    const color = hexFromName(item.person.name);
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `compat-chip${group ? ` group-${group.id}` : ""}`;
    chip.title = "Remove from group";
    chip.style.setProperty("--name-color", color);
    chip.innerHTML = `<span class="chip-name"></span><span class="chip-num"></span>`;
    chip.prepend(animalThumb(item.chart.sign.animal, "chip-thumb", item.chart.sign.element));
    chip.querySelector(".chip-name").textContent = item.person.name;
    fillPathBadge(chip.querySelector(".chip-num"), item.chart);
    chip.addEventListener("click", () => removeFromCompatGroup(item.person.id));
    chips.append(chip);
  });

  if (members.length === 1) {
    const only = members[0];
    const group = groupFor(only.chart.number);
    const note = document.createElement("p");
    note.className = "compat-note";
    const animal = only.chart.sign.animal;
    const friends = namesList(FRIENDS_OF[animal.id] || []);
    const enemy = animalById(ENEMY_OF[animal.id]);
    note.textContent = group
      ? `${only.person.name} is a ${group.label} number (${group.set}) and a ${animal.name}. ${GROUP_ABOUT[group.id] || ""} Friends: ${friends}. Enemy: ${enemy.name}. Add another name to compare the six Glynis points and the animal mix.`
      : "Add another name to see the mix.";
    viz.append(note);
    return;
  }

  if (members.length === 0) return;

  const groups = members.map((item) => groupFor(item.chart.number)).filter(Boolean);
  const uniqueGroups = [...new Set(groups.map((item) => item.id))];
  if (uniqueGroups.length === 1 && groups.length === members.length) {
    const banner = document.createElement("p");
    banner.className = "compat-banner";
    banner.textContent = `Natural match group · ${groups[0].label} ${groups[0].set}. ${GROUP_ABOUT[groups[0].id] || ""}`;
    viz.append(banner);
  }
  const animalIds = members.map((item) => item.chart.sign.animal.id);
  const triad = animalTriadFor(animalIds);
  if (triad) {
    const banner = document.createElement("p");
    banner.className = "compat-banner";
    banner.textContent = `Friend sign group · ${triad.flavor} (${triad.label}). These animals pull with each other.`;
    viz.append(banner);
  }
  const enemyPair = members.some((a, i) =>
    members.some((b, j) => j > i && ENEMY_OF[a.chart.sign.animal.id] === b.chart.sign.animal.id)
  );
  if (enemyPair) {
    const warn = document.createElement("p");
    warn.className = "compat-banner enemy";
    const enemyNames = [];
    members.forEach((a, i) => {
      members.forEach((b, j) => {
        if (j > i && ENEMY_OF[a.chart.sign.animal.id] === b.chart.sign.animal.id) {
          enemyNames.push(
            `${a.person.name} ${a.chart.sign.animal.name} and ${b.person.name} ${b.chart.sign.animal.name}`
          );
        }
      });
    });
    warn.textContent = `Enemy sign pair: ${enemyNames.join("; ")}. Opposite signs. Keep extra space.`;
    viz.append(warn);
  }

  const net = document.createElement("div");
  net.className = "compat-net";
  net.style.setProperty("--count", String(members.length));
  members.forEach((item, index) => {
    const node = document.createElement("span");
    const g = groupFor(item.chart.number);
    node.className = `compat-node${g ? ` group-${g.id}` : ""}`;
    node.style.setProperty("--i", String(index));
    node.textContent = displayNumber(item.chart.number);
    node.title = item.person.name;
    net.append(node);
  });
  viz.append(net);

  for (let i = 0; i < members.length; i += 1) {
    for (let j = i + 1; j < members.length; j += 1) {
      const left = members[i];
      const right = members[j];
      const mix = compareBlueprints(left.chart, right.chart);
      const card = document.createElement("article");
      card.className = "pair-card";
      const head = document.createElement("p");
      head.className = "pair-head";
      head.textContent = `${left.person.name} · ${right.person.name}`;
      const pathLine = document.createElement("p");
      pathLine.className = "pair-path";
      const pathScore = compatibilityLabel(linkScore(left.chart.number, right.chart.number));
      const pathLeft = groupFor(left.chart.number);
      const pathRight = groupFor(right.chart.number);
      pathLine.textContent = mix.sameGroup
        ? `Life Path ${displayNumber(left.chart.number)} and ${displayNumber(right.chart.number)} · ${pathScore}. Same ${mix.groupA.label} group (${mix.groupA.set}): they walk a similar path.`
        : `Life Path ${displayNumber(left.chart.number)} (${pathLeft ? pathLeft.label : "?"}) and ${displayNumber(right.chart.number)} (${pathRight ? pathRight.label : "?"}) · ${pathScore}.`;
      const animalLine = document.createElement("p");
      animalLine.className = "pair-animals";
      const leftAnimal = left.chart.sign.animal;
      const rightAnimal = right.chart.sign.animal;
      const animals = animalRelation(leftAnimal.id, rightAnimal.id);
      animalLine.append(animalThumb(leftAnimal, "pair-thumb", left.chart.sign.element));
      const animalText = document.createElement("span");
      animalText.textContent = `${left.chart.sign.element} ${leftAnimal.name} · ${right.chart.sign.element} ${rightAnimal.name} · ${animals.label}`;
      animalLine.append(animalText);
      animalLine.append(animalThumb(rightAnimal, "pair-thumb", right.chart.sign.element));
      const animalNote = document.createElement("p");
      animalNote.className = `pair-animal-note ${animals.kind}`;
      animalNote.textContent = animals.note;
      const dots = document.createElement("p");
      dots.className = "pair-dots";
      const DOT_SHORT = {
        soul: "Soul",
        personality: "Pers",
        power: "Name",
        birthday: "Day",
        path: "Path",
        attitude: "Att",
      };
      mix.slots.forEach((slot) => {
        const wrap = document.createElement("span");
        wrap.className = "pair-dot-wrap";
        const dot = document.createElement("span");
        const kind = scoreKind(slot.score);
        dot.className = `compat-dot ${kind}`;
        dot.title = `${slot.label}: ${displayNumber(slot.av)} and ${displayNumber(slot.bv)} · ${slot.name}`;
        const lab = document.createElement("span");
        lab.className = "pair-dot-label";
        lab.textContent = DOT_SHORT[slot.key] || slot.key;
        wrap.append(dot, lab);
        dots.append(wrap);
      });
      const tally = document.createElement("p");
      tally.className = "pair-tally";
      tally.textContent = `${mix.counts.natural} natural · ${mix.counts.compatible} compatible · ${mix.counts.neutral} neutral · ${mix.counts.challenge} challenge`;
      const verdict = document.createElement("p");
      verdict.className = "pair-verdict";
      verdict.textContent = mix.verdict;
      const points = document.createElement("ul");
      points.className = "pair-points";
      mix.slots.forEach((slot) => {
        const copy = pairPointCopy(slot, left.person.name, right.person.name);
        const li = document.createElement("li");
        li.className = `pair-point ${copy.kind}`;
        li.innerHTML =
          `<div class="pair-point-head"><span class="pair-point-role"></span><span class="pair-point-rating"></span></div>` +
          `<p class="pair-point-nums"></p><p class="pair-point-body"></p>`;
        li.querySelector(".pair-point-role").textContent = copy.label;
        li.querySelector(".pair-point-rating").textContent = copy.rating;
        li.querySelector(".pair-point-nums").textContent = copy.numbers;
        li.querySelector(".pair-point-body").textContent = copy.body;
        points.append(li);
      });
      card.append(head, pathLine, animalLine, animalNote, dots, tally, verdict, points);
      viz.append(card);
    }
  }
}

let calendarPerson = null;
let calendarCursor = { y: 0, m: 1 };
let calendarSelected = 1;

function closeMonthCal() {
  const dialog = document.getElementById("month-cal");
  if (dialog && dialog.open) dialog.close();
}

function openMonthCal(person) {
  const dialog = document.getElementById("month-cal");
  if (!dialog || !person) return;
  const now = new Date();
  calendarPerson = person;
  calendarCursor = { y: now.getFullYear(), m: now.getMonth() + 1 };
  calendarSelected = now.getDate();
  renderMonthCal();
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

function shiftMonthCal(delta) {
  let { y, m } = calendarCursor;
  m += delta;
  if (m < 1) {
    m = 12;
    y -= 1;
  } else if (m > 12) {
    m = 1;
    y += 1;
  }
  calendarCursor = { y, m };
  const max = daysInMonth(y, m);
  if (calendarSelected > max) calendarSelected = max;
  const now = new Date();
  if (y === now.getFullYear() && m === now.getMonth() + 1) {
    calendarSelected = now.getDate();
  }
  renderMonthCal();
}

function renderMonthCal() {
  const dialog = document.getElementById("month-cal");
  const grid = document.getElementById("month-cal-grid");
  const title = document.getElementById("month-cal-title");
  const sub = document.getElementById("month-cal-sub");
  if (!dialog || !grid || !calendarPerson) return;
  const { y, m } = calendarCursor;
  const first = new Date(y, m - 1, 1);
  const max = daysInMonth(y, m);
  const startPad = first.getDay();
  const sample = monthDayProfile(calendarPerson, y, m, 1);
  if (title) title.textContent = `${MONTH_NAMES[m - 1]} ${y}`;
  if (sub && sample) {
    const info = CYCLE_MEANINGS[sample.cycles.personalMonth];
    sub.textContent = `Personal month ${sample.cycles.personalMonth}${info ? ` · ${info.title}` : ""}`;
  }
  grid.replaceChildren();
  for (let i = 0; i < startPad; i += 1) {
    const pad = document.createElement("span");
    pad.className = "cal-pad";
    grid.append(pad);
  }
  const now = new Date();
  for (let d = 1; d <= max; d += 1) {
    const profile = monthDayProfile(calendarPerson, y, m, d);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `cal-cell ra-${profile.ra.phase.key} num-${profile.pathKind}`;
    if (profile.ra.phase.key === "critical" && profile.pathKind === "challenge") {
      btn.classList.add("cal-double-hard");
    }
    const isToday = y === now.getFullYear() && m === now.getMonth() + 1 && d === now.getDate();
    if (isToday) btn.classList.add("today");
    if (d === calendarSelected) btn.classList.add("selected");
    btn.setAttribute(
      "aria-label",
      `${MONTH_NAMES[m - 1]} ${d}: Ra day ${profile.ra.day} ${profile.ra.phase.title}, personal day ${profile.cycles.personalDay}, ${profile.pathFit} with Life Path`
    );
    btn.innerHTML = `<span class="cal-date"></span><span class="cal-pd"></span>`;
    btn.querySelector(".cal-date").textContent = String(d);
    btn.querySelector(".cal-pd").textContent = String(profile.cycles.personalDay);
    btn.addEventListener("click", () => {
      calendarSelected = d;
      renderMonthCal();
    });
    grid.append(btn);
  }
  fillMonthCalDetail();
}

function fillMonthCalDetail() {
  const box = document.getElementById("month-cal-detail");
  if (!box || !calendarPerson) return;
  const { y, m } = calendarCursor;
  const profile = monthDayProfile(calendarPerson, y, m, calendarSelected);
  if (!profile) {
    box.replaceChildren();
    return;
  }
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][profile.weekday];
  box.replaceChildren();
  const head = document.createElement("p");
  head.className = "month-cal-detail-head";
  head.textContent = `${weekday}, ${MONTH_NAMES[m - 1]} ${profile.d}`;
  const raLine = document.createElement("p");
  raLine.className = "month-cal-detail-ra";
  raLine.textContent = `Ra day ${profile.ra.day} of 18 · ${profile.ra.phase.title}. ${profile.ra.phase.gist}`;
  const numLine = document.createElement("p");
  numLine.className = "month-cal-detail-num";
  numLine.textContent = `Personal day ${profile.cycles.personalDay} · ${profile.dayTitle}. ${profile.dayGist}`;
  const pathLine = document.createElement("p");
  pathLine.className = `month-cal-detail-fit ${profile.pathKind}`;
  pathLine.textContent = `Life Path ${displayNumber(profile.path)} vs this day ${profile.cycles.personalDay} · ${profile.pathFit}. ${COMPAT_KIND_ABOUT[profile.pathKind]}`;
  const attLine = document.createElement("p");
  attLine.className = `month-cal-detail-fit ${profile.attKind}`;
  attLine.textContent = `Attitude ${displayNumber(profile.attitude)} vs this day ${profile.cycles.personalDay} · ${profile.attFit}.`;
  box.append(head, raLine, numLine, pathLine, attLine);
}

function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < String(str).length; i += 1) {
    h ^= String(str).charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rngFrom(seed) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function dayCandleBias(profile) {
  let bias = 0;
  const ra = profile.ra.phase.key;
  if (ra === "peak") bias += 2.2;
  else if (ra === "positive") bias += 1.0;
  else if (ra === "critical") bias -= 1.8;
  else if (ra === "nadir") bias -= 0.6;
  else bias -= 0.35;
  if (profile.pathKind === "natural") bias += 1.4;
  else if (profile.pathKind === "compatible") bias += 0.5;
  else if (profile.pathKind === "challenge") bias -= 1.6;
  return bias;
}

function candleFromProfile(profile, rng, close, moveScale) {
  const bias = profile ? dayCandleBias(profile) : 0;
  const ra = profile && profile.ra ? profile.ra.phase.key : "positive";
  const vol = ra === "critical" ? 4.2 : ra === "peak" ? 2.6 : ra === "nadir" ? 0.9 : 1.6;
  const open = close;
  const move = bias * moveScale + (rng() - 0.5) * (moveScale * 0.9);
  const next = Math.max(8, open * (1 + move));
  const high = Math.max(open, next) * (1 + vol * 0.005 * rng());
  const low = Math.min(open, next) * (1 - vol * 0.005 * (0.35 + rng()));
  return { open, high, low, close: next, up: next >= open, profile };
}

function predictMonthCandles(person, y, m) {
  const max = daysInMonth(y, m);
  const ticker = normalizeTicker(person.ticker);
  const rng = rngFrom(hashSeed(`${ticker}|${y}|${m}|${person.dob}`));
  const bars = [];
  let close = 100;
  for (let d = 1; d <= max; d += 1) {
    const profile = monthDayProfile(person, y, m, d);
    const bar = candleFromProfile(profile, rng, close, 0.011);
    close = bar.close;
    bars.push({ d, ...bar });
  }
  return bars;
}

function predictYearCandles(person, y) {
  const ticker = normalizeTicker(person.ticker);
  const rng = rngFrom(hashSeed(`${ticker}|year|${y}|${person.dob}`));
  const bars = [];
  let close = 100;
  for (let m = 1; m <= 12; m += 1) {
    const d = Math.min(15, daysInMonth(y, m));
    const profile = monthDayProfile(person, y, m, d);
    const bar = candleFromProfile(profile, rng, close, 0.028);
    close = bar.close;
    bars.push({
      d: m,
      label: MONTH_NAMES[m - 1].slice(0, 3),
      ...bar,
    });
  }
  return bars;
}

const MAJOR_ORDER = [
  "The Fool",
  "The Magician",
  "The High Priestess",
  "The Empress",
  "The Emperor",
  "The Hierophant",
  "The Lovers",
  "The Chariot",
  "Strength",
  "The Hermit",
  "Wheel of Fortune",
  "Justice",
  "The Hanged Man",
  "Death",
  "Temperance",
  "The Devil",
  "The Tower",
  "The Star",
  "The Moon",
  "The Sun",
  "Judgement",
  "The World",
];

function isMajorCard(card) {
  return Boolean(card && !/^(Ace|\d+|Page|Knight|Queen|King) of /.test(card.name));
}

function cardNumberValue(card) {
  if (!card) return 1;
  if (isMajorCard(card)) {
    const i = MAJOR_ORDER.indexOf(card.name);
    if (i === 0) return 22;
    if (i > 0) return i;
    return 10;
  }
  if (/^Ace/.test(card.name)) return 1;
  const numbered = card.name.match(/^(\d+)/);
  if (numbered) return Number(numbered[1]);
  if (/^Page/.test(card.name)) return 11;
  if (/^Knight/.test(card.name)) return 12;
  if (/^Queen/.test(card.name)) return 13;
  if (/^King/.test(card.name)) return 14;
  return 5;
}

function cardYesNo(card) {
  const raw = String(card && card.yesNo ? card.yesNo : "").toLowerCase();
  if (raw === "yes") return "Yes";
  if (raw === "no") return "No";
  return "Maybe";
}

function shuffleLiveDeck() {
  const source = typeof DECK_CARDS !== "undefined" ? DECK_CARDS : [];
  const list = source.map((card) => ({ ...card }));
  const passes = 3 + randomBelow(3);
  for (let pass = 0; pass < passes; pass += 1) shuffleInPlace(list);
  return list;
}

function candleFromCard(card, close, moveScale) {
  const yesNo = cardYesNo(card);
  const dir = yesNo === "Yes" ? 1 : yesNo === "No" ? -1 : 0;
  const value = cardNumberValue(card);
  const el = String(card && card.element ? card.element : "").toLowerCase();
  const vol = el === "fire" ? 3.2 : el === "air" ? 2.4 : el === "water" ? 1.5 : el === "earth" ? 1.0 : 1.6;
  const open = close;
  const move = dir * (value / 10) * moveScale;
  const next = dir === 0 ? open : Math.max(8, open * (1 + move));
  const high = Math.max(open, next) * (1 + vol * 0.004);
  const low = Math.min(open, next) * (1 - vol * 0.004);
  return {
    open,
    high,
    low,
    close: next,
    up: next >= open,
    card,
    mark: isMajorCard(card) || yesNo === "Maybe",
  };
}

function predictMonthCardCandles(person, y, m) {
  const max = daysInMonth(y, m);
  const deck = shuffleLiveDeck();
  const bars = [];
  let close = 100;
  for (let d = 1; d <= max; d += 1) {
    const card = deck[d - 1];
    const bar = candleFromCard(card, close, 0.02);
    close = bar.close;
    bars.push({ d, ...bar });
  }
  return bars;
}

function predictYearCardCandles(person, y) {
  const deck = shuffleLiveDeck();
  const bars = [];
  let close = 100;
  for (let month = 1; month <= 12; month += 1) {
    const card = deck[month - 1];
    const bar = candleFromCard(card, close, 0.045);
    close = bar.close;
    bars.push({
      d: month,
      label: MONTH_NAMES[month - 1].slice(0, 3),
      ...bar,
    });
  }
  return bars;
}

function drawPredictCandles(canvas, bars) {
  if (!canvas || !bars.length) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const cssW = canvas.clientWidth || canvas.offsetWidth;
  const cssH = canvas.clientHeight || 220;
  if (cssW < 8) {
    window.requestAnimationFrame(() => drawPredictCandles(canvas, bars));
    return;
  }
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(cssW * dpr);
  canvas.height = Math.round(cssH * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssW, cssH);
  const padL = 8;
  const padR = 8;
  const padT = 12;
  const padB = 22;
  const innerW = cssW - padL - padR;
  const innerH = cssH - padT - padB;
  let min = Infinity;
  let max = -Infinity;
  bars.forEach((bar) => {
    if (bar.low < min) min = bar.low;
    if (bar.high > max) max = bar.high;
  });
  const span = Math.max(max - min, 1);
  const yAt = (price) => padT + ((max - price) / span) * innerH;
  const slot = innerW / bars.length;
  const bodyW = Math.max(3, Math.min(11, slot * 0.62));
  const up = "#7ec8d4";
  const down = "#8d8a82";
  ctx.strokeStyle = "rgba(126, 200, 212, 0.18)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padL, padT + innerH);
  ctx.lineTo(cssW - padR, padT + innerH);
  ctx.stroke();
  bars.forEach((bar, i) => {
    const x = padL + (i + 0.5) * slot;
    const color = bar.up ? up : down;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(x, yAt(bar.high));
    ctx.lineTo(x, yAt(bar.low));
    ctx.stroke();
    const top = yAt(Math.max(bar.open, bar.close));
    const bot = yAt(Math.min(bar.open, bar.close));
    const h = Math.max(1.5, bot - top);
    ctx.fillStyle = color;
    ctx.fillRect(x - bodyW / 2, top, bodyW, h);
    if (
      (bar.profile && bar.profile.ra && bar.profile.ra.phase.key === "critical") ||
      bar.mark
    ) {
      ctx.strokeStyle = "#d4eef4";
      ctx.lineWidth = 1;
      ctx.strokeRect(x - bodyW / 2 - 1, top - 1, bodyW + 2, h + 2);
    }
  });
  ctx.fillStyle = "#9bb4bc";
  ctx.font = "600 10px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  bars.forEach((bar, i) => {
    const label = bar.label || String(bar.d);
    const show = Boolean(bar.label) || bar.d === 1 || bar.d % 5 === 0 || i === bars.length - 1;
    if (show) ctx.fillText(label, padL + (i + 0.5) * slot, cssH - 16);
  });
}

function mountTradingView(symbol, range) {
  const host = document.getElementById("candle-tv");
  if (!host) return;
  host.replaceChildren();
  if (!symbol) {
    host.textContent = "Add a ticker to load the live chart.";
    return;
  }
  const tvRange = range === "12M" ? "12M" : "1M";
  const wrap = document.createElement("div");
  wrap.className = "tradingview-widget-container";
  wrap.style.height = "100%";
  wrap.style.width = "100%";
  const widget = document.createElement("div");
  widget.className = "tradingview-widget-container__widget";
  widget.style.height = "100%";
  widget.style.width = "100%";
  const script = document.createElement("script");
  script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
  script.type = "text/javascript";
  script.async = true;
  script.textContent = JSON.stringify({
    autosize: true,
    symbol,
    interval: "D",
    range: tvRange,
    timeframe: tvRange,
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    backgroundColor: "#0c1a24",
    gridColor: "rgba(126, 200, 212, 0.12)",
    hide_side_toolbar: true,
    allow_symbol_change: true,
    withdateranges: true,
    calendar: false,
    hide_legend: false,
    support_host: "https://www.tradingview.com",
  });
  wrap.append(widget, script);
  host.append(wrap);
}

let candlePerson = null;
let candleCursor = { y: 0, m: 1 };
let candleSpan = "month";
let candleTvKey = "";
let candleTopMode = "numbers";
let lastCardBars = [];
let candleCardsNeedShuffle = true;

function setCandleTopMode(mode) {
  const next = mode === "cards" ? "cards" : "numbers";
  if (next === "cards") candleCardsNeedShuffle = true;
  candleTopMode = next;
  const numbersBtn = document.getElementById("candle-mode-numbers");
  const cardsBtn = document.getElementById("candle-mode-cards");
  if (numbersBtn) {
    numbersBtn.classList.toggle("primary", candleTopMode === "numbers");
    numbersBtn.classList.toggle("ghost", candleTopMode !== "numbers");
    numbersBtn.setAttribute("aria-pressed", String(candleTopMode === "numbers"));
  }
  if (cardsBtn) {
    cardsBtn.classList.toggle("primary", candleTopMode === "cards");
    cardsBtn.classList.toggle("ghost", candleTopMode !== "cards");
    cardsBtn.setAttribute("aria-pressed", String(candleTopMode === "cards"));
  }
  const dialog = document.getElementById("candle-cal");
  if (candlePerson && dialog && dialog.open) renderCandleCal(false);
}

function closeCandleCal() {
  const dialog = document.getElementById("candle-cal");
  if (dialog && dialog.open) dialog.close();
}

function openCandleCal(person, span) {
  const dialog = document.getElementById("candle-cal");
  if (!dialog || !isAssetPerson(person)) return;
  const now = new Date();
  candlePerson = person;
  candleSpan = span === "year" ? "year" : "month";
  candleCursor = { y: now.getFullYear(), m: now.getMonth() + 1 };
  setCandleTopMode("numbers");
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
  renderCandleCal(true);
}

function shiftCandleCal(delta) {
  let { y, m } = candleCursor;
  if (candleSpan === "year") {
    y += delta;
  } else {
    m += delta;
    if (m < 1) {
      m = 12;
      y -= 1;
    } else if (m > 12) {
      m = 1;
      y += 1;
    }
  }
  candleCursor = { y, m };
  if (candleTopMode === "cards") candleCardsNeedShuffle = true;
  renderCandleCal(false);
}

function renderCandleCal(remountTv) {
  const title = document.getElementById("candle-cal-title");
  const sub = document.getElementById("candle-cal-sub");
  const legend = document.getElementById("candle-predict-legend");
  const canvas = document.getElementById("candle-predict");
  const predictLabel = document.getElementById("candle-predict-label");
  const prevBtn = document.getElementById("candle-cal-prev");
  const nextBtn = document.getElementById("candle-cal-next");
  if (!candlePerson) return;
  const { y, m } = candleCursor;
  const yearMode = candleSpan === "year";
  const cardsMode = candleTopMode === "cards";
  const ticker = normalizeTicker(candlePerson.ticker);
  const symbol = tradingViewSymbol(ticker);
  const tvRange = yearMode ? "12M" : "1M";
  const numberBars = yearMode
    ? predictYearCandles(candlePerson, y)
    : predictMonthCandles(candlePerson, y, m);
  const expectedCards = yearMode ? 12 : daysInMonth(y, m);
  if (cardsMode && (candleCardsNeedShuffle || lastCardBars.length !== expectedCards)) {
    lastCardBars = yearMode
      ? predictYearCardCandles(candlePerson, y)
      : predictMonthCardCandles(candlePerson, y, m);
    candleCardsNeedShuffle = false;
  }
  const bars = cardsMode ? lastCardBars : numberBars;
  const upCount = bars.filter((bar) => bar.up).length;
  const unit = yearMode ? "months" : "days";
  if (title) {
    title.textContent = yearMode
      ? `${ticker} · ${y}`
      : `${ticker} · ${MONTH_NAMES[m - 1]} ${y}`;
  }
  if (sub) {
    sub.textContent = cardsMode
      ? `One card for each ${yearMode ? "month" : "day"} · ${symbol}`
      : `Predicted from the Ra 18-day wave and Life Path challenge · ${symbol}`;
  }
  if (predictLabel) {
    predictLabel.textContent = cardsMode
      ? yearMode
        ? "Card year"
        : "Card month"
      : yearMode
        ? "Predicted year"
        : "Predicted month";
  }
  if (prevBtn) prevBtn.setAttribute("aria-label", yearMode ? "Previous year" : "Previous month");
  if (nextBtn) nextBtn.setAttribute("aria-label", yearMode ? "Next year" : "Next month");
  if (legend) {
    legend.textContent = cardsMode
      ? `${upCount} up ${unit}, ${bars.length - upCount} down. Yes rises, No falls. The bar size follows the card number. Tap a bar to see that ${yearMode ? "month" : "day"}'s card.`
      : `${upCount} predicted up ${unit}, ${bars.length - upCount} down. Aqua bars rise; gray bars fall. Gold outline is a Ra 9 or 18. This is a cycle sketch, not a trade.`;
  }
  if (canvas) canvas.classList.toggle("candle-cards", cardsMode);
  drawPredictCandles(canvas, bars);
  const tvKey = `${symbol}|${tvRange}`;
  if (remountTv || tvKey !== candleTvKey) {
    candleTvKey = tvKey;
    mountTradingView(symbol, tvRange);
  }
}

function showHome() {
  const store = loadStore();
  store.activeId = null;
  saveStore(store);
  renderList(store);
  showOnly(homeEl);
}

function showForm(person) {
  const store = loadStore();
  const editing = Boolean(person);
  document.getElementById("form-eyebrow").textContent = editing
    ? "Edit chart"
    : "New chart";
  document.getElementById("form-title").textContent = editing
    ? "Edit this name"
    : "Add a name";
  document.getElementById("save-btn").textContent = editing
    ? "Save changes"
    : "Save on this phone";
  personIdEl.value = person ? person.id : "";
  nameEl.value = person ? person.name : "";
  if (legalNameEl) legalNameEl.value = person && person.legalName ? person.legalName : "";
  if (isAssetEl) isAssetEl.checked = Boolean(person && person.isAsset);
  if (tickerEl) tickerEl.value = person && person.ticker ? person.ticker : "";
  syncTickerField();
  setDob(person ? person.dob : "");
  cancelFormEl.hidden = store.people.length === 0 && !editing;
  showOnly(entryEl);
  nameEl.focus();
}

function shortMeaning(number) {
  return (NUMBERS[number] && NUMBERS[number].meaning) || "";
}

function unbalancedMeaning(number) {
  return (NUMBERS[number] && NUMBERS[number].unbalanced) || "";
}

function renderGarySheet(numbers, parts) {
  const gary = numbers.gary;
  if (!gary) return;
  const line = document.getElementById("gary-line");
  const matchEl = document.getElementById("gary-match");
  const missEl = document.getElementById("gary-mismatch");
  const calcs = document.getElementById("gary-calcs");
  if (!line || !matchEl || !missEl || !calcs) return;

  line.textContent = `${displayNumber(gary.path)}  ${displayNumber(gary.day)}  ${displayNumber(gary.attitude)}  ${gary.lucky}`;

  const notes = [];
  if (gary.path === numbers.path) {
    matchEl.textContent = `Gary's Life Path matches Glynis: ${displayNumber(gary.path)}. He adds every digit, and he also adds month + day + year as whole numbers. He keeps 11, 22, and 33 from either pass.`;
  } else {
    matchEl.textContent = "";
    notes.push(
      `Glynis Life Path is ${displayNumber(numbers.path)} from the digits (${gary.digitText}). Gary keeps master ${displayNumber(gary.path)} from ${gary.pathHow}: ${gary.pathText}.`
    );
  }
  if (gary.partsPath !== gary.path) {
    notes.push(
      `If you reduce month, day, and year to pieces first you get ${displayNumber(gary.partsPath)} (${gary.partsText}). That split can create or drop a master.`
    );
  }
  if (gary.day !== numbers.birthday) {
    notes.push(
      `Glynis Birth Day is ${displayNumber(numbers.birthday)} from adding the day's digits. Gary reads the ${ordinalDay(parts.d)} as ${displayNumber(gary.day)}.`
    );
  }
  if (gary.attitude !== numbers.attitude) {
    notes.push(
      `Glynis Attitude is ${displayNumber(numbers.attitude)}. Gary adds month ${displayNumber(gary.month)} and day ${displayNumber(gary.day)} and gets ${displayNumber(gary.attitude)}.`
    );
  }
  missEl.hidden = notes.length === 0;
  missEl.textContent = notes.join(" ");

  calcs.replaceChildren();
  [
    ["Life Path (Gary)", `${gary.pathText} → ${displayNumber(gary.path)}`],
    ["Every digit", `${gary.digitText} → ${displayNumber(gary.digitPath)}`],
    ["Month + day + year", `${gary.wholeText} → ${displayNumber(gary.wholePath)}`],
    ["Day", gary.dayText],
    ["Attitude", gary.attitudeText],
    ["Reduced parts", `${gary.partsText} → ${displayNumber(gary.partsPath)}`],
    ["Lucky number", gary.luckyText],
  ].forEach(([title, math]) => {
    const row = document.createElement("div");
    row.className = "calc-block";
    row.innerHTML = `<p class="calc-title"></p><p class="calc-math"></p>`;
    row.querySelector(".calc-title").textContent = title;
    row.querySelector(".calc-math").textContent = math;
    calcs.append(row);
  });
}

function appendRoleItem(list, role, value, math) {
  const meaning = meaningFor(role.key, value);
  const gist = shortMeaning(value);
  const item = document.createElement("li");
  const about = role.about ? `${role.about} ${role.source}.` : role.source;
  item.innerHTML = `<span class="detail-value"></span><div>
    <p class="detail-label"></p>
    <p class="detail-gist"></p>
    <details class="fold">
      <summary>
        <span class="show-label">Show more</span>
        <span class="hide-label">Show less</span>
      </summary>
      <div class="fold-body">
        <p class="detail-source"></p>
        ${math ? `<p class="detail-math"></p>` : ""}
        ${meaning ? `<p class="detail-meaning"></p>` : ""}
        <p class="gary-note"></p>
      </div>
    </details>
  </div>`;
  item.querySelector(".detail-value").textContent = displayNumber(value);
  item.querySelector(".detail-label").textContent = role.label;
  item.querySelector(".detail-gist").textContent = gist;
  item.querySelector(".detail-source").textContent = about;
  if (math) item.querySelector(".detail-math").textContent = math;
  const meaningEl = item.querySelector(".detail-meaning");
  if (meaningEl) meaningEl.textContent = meaning;
  fillGaryNote(item.querySelector(".gary-note"), garyNumberNote(value));
  list.append(item);
}

function prepareCanvas(canvas, fallbackH = 200) {
  if (!canvas) return null;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const cssW = canvas.clientWidth || canvas.offsetWidth;
  const cssH = canvas.clientHeight || fallbackH;
  if (cssW < 8) return null;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(cssW * dpr);
  canvas.height = Math.round(cssH * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssW, cssH);
  return { ctx, cssW, cssH };
}

function renderCompatRa(members) {
  const wrap = document.getElementById("compat-ra");
  const legend = document.getElementById("compat-ra-legend");
  if (!wrap || !legend) return;
  const rows = (members || [])
    .map((item) => {
      const cycle = raCycleFor(item.person.dob);
      if (!cycle) return null;
      return {
        name: item.person.name,
        color: hexFromName(item.person.name),
        cycle,
      };
    })
    .filter(Boolean);
  lastGroupRa = rows;
  if (!rows.length) {
    wrap.hidden = true;
    return;
  }
  wrap.hidden = false;
  legend.replaceChildren();
  rows.forEach((row) => {
    const li = document.createElement("li");
    li.className = "compat-ra-key";
    const swatch = document.createElement("span");
    swatch.className = "compat-ra-swatch";
    swatch.style.background = row.color;
    const label = document.createElement("span");
    label.textContent = `${row.name} · day ${row.cycle.day}`;
    li.append(swatch, label);
    legend.append(li);
  });
  drawGroupRaWaves();
}

function drawGroupRaWaves() {
  const canvas = document.getElementById("compat-ra-wave");
  const rows = lastGroupRa;
  if (!canvas || !rows || !rows.length) return;
  const sized = prepareCanvas(canvas, 180);
  if (!sized) return;
  const { ctx, cssW, cssH } = sized;
  const padL = 12;
  const padR = 12;
  const padT = 16;
  const padB = 26;
  const innerW = cssW - padL - padR;
  const innerH = cssH - padT - padB;
  const midY = padT + innerH / 2;
  const amp = innerH / 2 - 6;
  const xAt = (u) => padL + u * innerW;
  const offsetAt = (u) => (u - 0.5) * RA_PERIOD;
  const yAt = (elapsed, offset) => {
    const phase = (((elapsed + offset) % RA_PERIOD) + RA_PERIOD) % RA_PERIOD;
    return midY - Math.sin((phase / RA_PERIOD) * Math.PI * 2) * amp;
  };

  ctx.strokeStyle = "rgba(230, 195, 106, 0.28)";
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 5]);
  ctx.beginPath();
  ctx.moveTo(padL, midY);
  ctx.lineTo(cssW - padR, midY);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.strokeStyle = "rgba(244, 226, 176, 0.35)";
  ctx.beginPath();
  ctx.moveTo(xAt(0.5), padT);
  ctx.lineTo(xAt(0.5), padT + innerH);
  ctx.stroke();

  const samples = 90;
  const todayX = xAt(0.5);
  rows.forEach((row) => {
    ctx.beginPath();
    ctx.strokeStyle = row.color;
    ctx.lineWidth = 2.1;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    for (let i = 0; i <= samples; i += 1) {
      const u = i / samples;
      const x = xAt(u);
      const y = yAt(row.cycle.elapsed, offsetAt(u));
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    const nowY = yAt(row.cycle.elapsed, 0);
    ctx.beginPath();
    ctx.fillStyle = row.color;
    ctx.arc(todayX, nowY, 5, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "#b8b3a8";
  ctx.font = "600 10px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.textBaseline = "top";
  [
    { label: "−9", u: 0, align: "left" },
    { label: "Today", u: 0.5, align: "center" },
    { label: "+9", u: 1, align: "right" },
  ].forEach((tick) => {
    ctx.textAlign = tick.align;
    ctx.fillText(tick.label, xAt(tick.u), cssH - 18);
  });
}

function drawRaWave(cycle) {
  const canvas = document.getElementById("ra-wave");
  if (!canvas || !cycle) return;
  const sized = prepareCanvas(canvas, 200);
  if (!sized) {
    window.requestAnimationFrame(() => drawRaWave(cycle));
    return;
  }
  const { ctx, cssW, cssH } = sized;

  const padL = 10;
  const padR = 10;
  const padT = 18;
  const padB = 28;
  const innerW = cssW - padL - padR;
  const innerH = cssH - padT - padB;
  const midY = padT + innerH / 2;
  const amp = innerH / 2 - 6;
  const xAt = (t) => padL + t * innerW;
  const yAt = (t) => midY - Math.sin(t * Math.PI * 2) * amp;

  ctx.strokeStyle = "rgba(230, 195, 106, 0.28)";
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 5]);
  ctx.beginPath();
  ctx.moveTo(padL, midY);
  ctx.lineTo(cssW - padR, midY);
  ctx.stroke();
  ctx.setLineDash([]);

  const gold = "#7ec8d4";
  const gold2 = "#d4eef4";
  const down = "#8d8a82";

  ctx.lineWidth = 2.2;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  const samples = 72;
  ctx.beginPath();
  for (let i = 0; i <= samples / 2; i += 1) {
    const t = i / samples;
    const x = xAt(t);
    const y = yAt(t);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.strokeStyle = gold;
  ctx.stroke();
  ctx.beginPath();
  for (let i = samples / 2; i <= samples; i += 1) {
    const t = i / samples;
    const x = xAt(t);
    const y = yAt(t);
    if (i === samples / 2) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.strokeStyle = down;
  ctx.stroke();

  ctx.font = "600 10px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";

  for (let day = 1; day <= RA_PERIOD; day += 1) {
    const t = (day - 1) / RA_PERIOD;
    const x = xAt(t);
    const y = yAt(t);
    const isNow = day === cycle.day;
    const isPeak = day >= 4 && day <= 6;
    const isCritical = day === 9 || day === 18;
    const onUp = day <= 9;
    if (isNow) {
      ctx.strokeStyle = "rgba(244, 226, 176, 0.45)";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 4]);
      ctx.beginPath();
      ctx.moveTo(x, padT);
      ctx.lineTo(x, padT + innerH);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    const r = isNow ? 7 : isCritical ? 5.5 : isPeak ? 4.5 : 3.2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    if (isNow) {
      ctx.fillStyle = gold2;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = gold;
      ctx.stroke();
    } else if (isCritical) {
      ctx.fillStyle = "#07141c";
      ctx.fill();
      ctx.lineWidth = 1.6;
      ctx.strokeStyle = onUp ? gold : down;
      ctx.stroke();
    } else {
      ctx.fillStyle = onUp ? gold : down;
      ctx.fill();
    }
    ctx.fillStyle = isNow ? gold2 : "#b8b3a8";
    ctx.fillText(String(day), x, cssH - 20);
  }
}

function renderRaCycle(dobISO) {
  const cycle = raCycleFor(dobISO);
  lastRaCycle = cycle;
  const dayEl = document.getElementById("ra-day");
  const titleEl = document.getElementById("ra-title");
  const gistEl = document.getElementById("ra-gist");
  const legendEl = document.getElementById("ra-legend");
  const aboutEl = document.getElementById("ra-about");
  if (!cycle) {
    if (dayEl) dayEl.textContent = "";
    return;
  }
  if (dayEl) dayEl.textContent = String(cycle.day);
  if (titleEl) titleEl.textContent = cycle.phase.title;
  if (gistEl) gistEl.textContent = cycle.phase.gist;
  if (legendEl) {
    legendEl.textContent = `Day ${cycle.day} of 18 · birth starts day 1 · crest on 4–6 · hardest turns on 9 and 18`;
  }
  if (aboutEl) aboutEl.textContent = RA_ABOUT;
  drawRaWave(cycle);
}

function showResult(person) {
  const chart = chartFor(person);
  if (!chart) {
    showForm(person);
    return;
  }
  const { parts, number, numbers, sign } = chart;
  const pathGroup = numbers.groups.path;
  const lifeNumber = (numbers.gary && numbers.gary.path) || number;

  document.getElementById("saved-date").textContent = formatDate(
    parts.y,
    parts.m,
    parts.d
  );
  document.getElementById("person-name").textContent =
    isAssetPerson(person) ? `${person.name} · ${normalizeTicker(person.ticker)}` : person.name;
  const lifeRoot = simpleDigit(lifeNumber);
  const hasRoot = lifeRoot !== lifeNumber;
  document.getElementById("life-number").textContent = displayNumber(lifeNumber);
  document.getElementById("number-title").textContent = titleFor(lifeNumber);
  document.getElementById("number-meaning").textContent = shortMeaning(lifeNumber);
  const unbalancedEl = document.getElementById("number-unbalanced");
  const unbalancedLabel = document.getElementById("unbalanced-label");
  const unbalancedText = unbalancedMeaning(lifeNumber);
  if (unbalancedEl) unbalancedEl.textContent = unbalancedText;
  if (unbalancedLabel) unbalancedLabel.hidden = !unbalancedText;
  if (unbalancedEl) unbalancedEl.hidden = !unbalancedText;
  const rootAs = hasRoot ? `As a ${lifeRoot}` : "";
  setTextHidden(document.getElementById("number-root-label"), rootAs);
  setTextHidden(document.getElementById("number-title-root"), hasRoot ? titleFor(lifeRoot) : "");
  setTextHidden(document.getElementById("number-meaning-root"), hasRoot ? shortMeaning(lifeRoot) : "");
  const rootUnbalanced = hasRoot ? unbalancedMeaning(lifeRoot) : "";
  setTextHidden(document.getElementById("unbalanced-label-root"), rootUnbalanced ? "When not balanced" : "");
  setTextHidden(document.getElementById("number-unbalanced-root"), rootUnbalanced);
  document.getElementById("number-meaning-long").textContent = meaningFor(
    "path",
    lifeNumber
  );
  setTextHidden(document.getElementById("number-long-root-label"), rootAs);
  setTextHidden(
    document.getElementById("number-meaning-long-root"),
    hasRoot ? meaningFor("path", lifeRoot) : ""
  );
  const nameNotes = [garyNameNote(person.name)];
  const legalToken = firstNameToken(person.legalName);
  const goingToken = firstNameToken(person.name);
  if (
    legalToken &&
    goingToken &&
    legalToken.toLowerCase() !== goingToken.toLowerCase()
  ) {
    nameNotes.push(garyNameNote(person.legalName));
  }
  const garyNotes = [garyNumberNote(lifeNumber)];
  if (hasRoot) garyNotes.push(garyNumberNote(lifeRoot));
  fillGaryNote(document.getElementById("number-gary"), [...garyNotes, ...nameNotes]);
  fillJobList(document.getElementById("number-jobs"), hasRoot ? [lifeNumber, lifeRoot] : lifeNumber);
  document.querySelectorAll("#result details.fold").forEach((el) => {
    el.open = false;
  });
  document.getElementById("number-line").textContent = numbers.line;
  document.getElementById("number-line-legend").textContent =
    "Soul · Personality · Power Name · Birth Day · Life Path · Attitude";

  const details = document.getElementById("number-details");
  details.replaceChildren();
  NUMBER_ROLES.forEach((role, index) => {
    appendRoleItem(details, role, numbers.values[index], numbers.steps[role.key]);
  });

  const extra = document.getElementById("extra-details");
  extra.replaceChildren();
  EXTRA_ROLES.forEach((role) => {
    appendRoleItem(extra, role, numbers[role.key], numbers.steps[role.key]);
  });

  const groupText = pathGroup
    ? `Life Path ${displayNumber(number)} is a ${pathGroup.label} number (${pathGroup.set}). Mind 1-5-7, Business 2-4-8, Creative 3-6-9. Same group is a natural match. Attitude ${displayNumber(numbers.attitude)} is ${groupFor(numbers.attitude).label}.`
    : "";
  document.getElementById("cycle-world").textContent =
    `World year ${numbers.worldYear} · ${MONTH_NAMES[numbers.calendarMonth - 1]} ${numbers.calendarDay}, ${numbers.calendarYear}`;
  const cycleCards = document.getElementById("cycle-cards");
  cycleCards.replaceChildren();
  [
    {
      key: "year",
      kind: "Year",
      value: numbers.personalYear,
      math: numbers.steps.personalYear,
    },
    {
      key: "month",
      kind: "Month",
      value: numbers.personalMonth,
      math: numbers.steps.personalMonth,
    },
    {
      key: "day",
      kind: "Day",
      value: numbers.personalDay,
      math: numbers.steps.personalDay,
    },
  ].forEach((cycle) => {
    const info = CYCLE_MEANINGS[cycle.value] || {
      title: `Number ${cycle.value}`,
      gist: "",
      [cycle.key]: "",
    };
    const longText = info[cycle.key] || info.year || "";
    const item = document.createElement("li");
    item.innerHTML = `<span class="cycle-value"></span><div>
      <p class="cycle-kind"></p>
      <p class="cycle-title"></p>
      <p class="cycle-gist"></p>
      <details class="fold">
        <summary>
          <span class="show-label">Show more</span>
          <span class="hide-label">Show less</span>
        </summary>
        <div class="fold-body">
          <p class="detail-math"></p>
          <p class="detail-meaning"></p>
          <p class="gary-note"></p>
        </div>
      </details>
    </div>`;
    item.querySelector(".cycle-value").textContent = String(cycle.value);
    item.querySelector(".cycle-kind").textContent = cycle.kind;
    item.querySelector(".cycle-title").textContent = info.title;
    item.querySelector(".cycle-gist").textContent = info.gist;
    item.querySelector(".detail-math").textContent = cycle.math;
    item.querySelector(".detail-meaning").textContent = longText;
    fillGaryNote(item.querySelector(".gary-note"), garyNumberNote(cycle.value));
    if (cycle.key === "month" || (cycle.key === "year" && isAssetPerson(person))) {
      const row = document.createElement("div");
      row.className = "cycle-cal-row";
      if (cycle.key === "month") {
        const calBtn = document.createElement("button");
        calBtn.type = "button";
        calBtn.className = "cycle-cal-btn";
        calBtn.textContent = "Month calendar";
        calBtn.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          openMonthCal(person);
        });
        row.append(calBtn);
      }
      if (isAssetPerson(person)) {
        const candleBtn = document.createElement("button");
        candleBtn.type = "button";
        candleBtn.className = "cycle-cal-btn";
        candleBtn.textContent = "Candle chart";
        candleBtn.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          openCandleCal(person, cycle.key === "year" ? "year" : "month");
        });
        row.append(candleBtn);
      }
      item.querySelector("div").append(row);
    }
    cycleCards.append(item);
  });

  document.getElementById("cycle-line").textContent =
    `Personal year ${numbers.personalYear} · Personal month ${numbers.personalMonth} · Personal day ${numbers.personalDay}`;

  renderGarySheet(numbers, parts);
  document.getElementById("cycle-meta").textContent =
    `World year ${numbers.worldYear} · Personal year ${numbers.personalYear} · Personal month ${numbers.personalMonth} · Personal day ${numbers.personalDay} · ${numbers.compatibility} with this year. ${groupText} ${numbers.steps.personalYear}.`;

  const chips = document.getElementById("letter-chips");
  chips.replaceChildren();
  numbers.goingByLetters.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = item.vowel ? "chip vowel" : "chip consonant";
    chip.textContent = `${item.letter} ${item.value}`;
    chip.title = item.vowel ? "Vowel · Soul" : "Consonant · Personality";
    chips.append(chip);
  });

  const calc = document.getElementById("calc-steps");
  calc.replaceChildren();
  const calcRows = [
    ["Soul Number (vowels)", numbers.steps.soul],
    ["Personality Number (consonants)", numbers.steps.personality],
    ["Power Name Number (all letters)", numbers.steps.power],
    ["Birth Day Number", numbers.steps.birthday],
    ["Life Path Number", numbers.steps.path],
    ["Attitude Number", numbers.steps.attitude],
    [
      numbers.destinyFromSameName
        ? "Destiny Number (same name as Power Name)"
        : "Destiny Number (birth-certificate name)",
      numbers.steps.destiny,
    ],
    ["Maturity Number", numbers.steps.maturity],
    ["Personal Year", numbers.steps.personalYear],
    ["Personal Month", numbers.steps.personalMonth],
    ["Personal Day", numbers.steps.personalDay],
    ["Gary Life Path", `${numbers.gary.pathText} → ${displayNumber(numbers.gary.path)}`],
    ["Gary every digit", numbers.gary.digitText],
    ["Gary month + day + year", numbers.gary.wholeText],
    ["Gary Day number", numbers.gary.dayText],
    ["Gary Attitude", numbers.gary.attitudeText],
    ["Gary reduced parts", numbers.gary.partsText],
    ["Gary lucky number", numbers.gary.luckyText],
  ];
  calcRows.forEach(([title, math]) => {
    const row = document.createElement("div");
    row.className = "calc-block";
    row.innerHTML = `<p class="calc-title"></p><p class="calc-math"></p>`;
    row.querySelector(".calc-title").textContent = title;
    row.querySelector(".calc-math").textContent = math;
    calc.append(row);
  });

  const img = document.getElementById("animal-image");
  img.src = animalImageSrc(sign.animal, sign.element);
  img.alt = `Chinese zodiac ${sign.element} ${sign.animal.name}`;
  document.getElementById("animal-name").textContent = sign.animal.name;
  document.getElementById("animal-hanzi").textContent = sign.animal.hanzi;
  document.getElementById("animal-meta").textContent =
    `${sign.element} ${sign.animal.name} · ${sign.polarity} · lunar year ${sign.lunarYear}`;
  document.getElementById("animal-meaning").textContent = sign.animal.meaning;
  fillGaryNote(document.getElementById("animal-gary"), animalGaryText(sign.animal));

  const yearSign = currentChineseSign();
  const yearHit = yearInfluence(sign, yearSign);
  const yearImg = document.getElementById("year-animal-image");
  yearImg.src = animalImageSrc(yearSign.animal, yearSign.element);
  yearImg.alt = `This lunar year, ${yearSign.element} ${yearSign.animal.name}`;
  document.getElementById("year-animal-name").textContent = yearSign.animal.name;
  document.getElementById("year-animal-meta").textContent =
    `${yearSign.element} ${yearSign.animal.name} · ${yearSign.polarity} · lunar year ${yearSign.lunarYear}`;
  const tag = document.getElementById("year-relation");
  tag.textContent = yearHit.label;
  tag.className = `year-tag ${yearHit.kind}`;
  document.getElementById("year-effect").textContent = yearHit.effect;
  document.getElementById("year-allies").textContent = yearHit.allies;

  showOnly(resultEl);
  renderRaCycle(person.dob);
}

function openPerson(id) {
  const store = loadStore();
  const person = store.people.find((item) => item.id === id);
  if (!person) {
    showHome();
    return;
  }
  store.activeId = id;
  saveStore(store);
  showResult(person);
}

function removePerson(id) {
  const store = loadStore();
  const person = store.people.find((item) => item.id === id);
  if (!person) return;
  if (!window.confirm(`Remove ${person.name} from this phone?`)) return;
  store.people = store.people.filter((item) => item.id !== id);
  compatGroup = compatGroup.filter((item) => item !== id);
  if (store.activeId === id) store.activeId = null;
  saveStore(store);
  if (store.people.length === 0) {
    showForm();
  } else {
    showHome();
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameEl.value.trim();
  const legalName = legalNameEl ? legalNameEl.value.trim() : "";
  const isAsset = Boolean(isAssetEl && isAssetEl.checked);
  const ticker = normalizeTicker(tickerEl ? tickerEl.value : "");
  markDobValidity();
  const dob = readDob();
  if (!name) {
    nameEl.reportValidity();
    return;
  }
  if (isAsset) {
    if (!ticker) {
      setTickerHint("Enter the ticker for this crypto or stock.");
      if (tickerEl) tickerEl.focus();
      return;
    }
    setTickerHint("");
  } else {
    setTickerHint("");
  }
  if (!dob) {
    if (!yearEl.checkValidity()) {
      yearEl.reportValidity();
    } else if (!monthEl.checkValidity()) {
      monthEl.reportValidity();
    } else {
      dayEl.reportValidity();
    }
    return;
  }

  const store = loadStore();
  const existingId = personIdEl.value;
  const existing = store.people.find((item) => item.id === existingId);
  const person = {
    id: existing ? existing.id : newId(),
    name,
    legalName,
    dob,
    isAsset,
    ticker: isAsset ? ticker : "",
    savedAt: new Date().toISOString(),
  };
  if (existing) {
    store.people = store.people.map((item) =>
      item.id === existing.id ? person : item
    );
  } else {
    store.people.push(person);
  }
  store.activeId = person.id;
  saveStore(store);
  showResult(person);
});

document.getElementById("add-person").addEventListener("click", () => showForm());

(function setupCompatDrop() {
  const drop = document.getElementById("compat-drop");
  const board = document.getElementById("compat-board");
  const clearBtn = document.getElementById("compat-clear");
  if (!drop || !board) return;
  const highlight = (on) => {
    drop.classList.toggle("drag-over", on);
    board.classList.toggle("drag-over", on);
  };
  ["dragenter", "dragover"].forEach((type) => {
    board.addEventListener(type, (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "copy";
      highlight(true);
    });
  });
  board.addEventListener("dragleave", (event) => {
    if (!board.contains(event.relatedTarget)) highlight(false);
  });
  board.addEventListener("drop", (event) => {
    event.preventDefault();
    highlight(false);
    addToCompatGroup(event.dataTransfer.getData("text/plain"));
  });
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      compatGroup = [];
      renderCompatBoard(loadStore());
    });
  }
})();
(function setupBackup() {
  const fileInput = document.getElementById("backup-file");
  document.querySelectorAll(".backup-export").forEach((btn) => {
    btn.addEventListener("click", exportBackup);
  });
  document.querySelectorAll(".backup-import").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (fileInput) fileInput.click();
    });
  });
  if (fileInput) {
    fileInput.addEventListener("change", () => {
      const file = fileInput.files && fileInput.files[0];
      fileInput.value = "";
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          importBackupText(String(reader.result || ""));
        } catch {
          window.alert("Could not read that file. Use a Water Dragon .json backup.");
        }
      };
      reader.onerror = () => {
        window.alert("Could not read that file. Use a Water Dragon .json backup.");
      };
      reader.readAsText(file);
    });
  }
})();

window.addEventListener("resize", () => {
  if (!resultEl.hidden && lastRaCycle) drawRaWave(lastRaCycle);
  if (!homeEl.hidden && lastGroupRa && lastGroupRa.length) drawGroupRaWaves();
  redrawSkewVisual();
  const candleDialog = document.getElementById("candle-cal");
  if (candleDialog && candleDialog.open && candlePerson) renderCandleCal(false);
});

(function setupMonthCal() {
  const dialog = document.getElementById("month-cal");
  if (!dialog) return;
  document.getElementById("month-cal-prev")?.addEventListener("click", () => shiftMonthCal(-1));
  document.getElementById("month-cal-next")?.addEventListener("click", () => shiftMonthCal(1));
  document.getElementById("month-cal-close")?.addEventListener("click", closeMonthCal);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeMonthCal();
  });
})();

(function setupCandleCal() {
  const dialog = document.getElementById("candle-cal");
  if (!dialog) return;
  document.getElementById("candle-cal-prev")?.addEventListener("click", () => shiftCandleCal(-1));
  document.getElementById("candle-cal-next")?.addEventListener("click", () => shiftCandleCal(1));
  document.getElementById("candle-cal-close")?.addEventListener("click", closeCandleCal);
  document.getElementById("candle-mode-numbers")?.addEventListener("click", () => {
    setCandleTopMode("numbers");
  });
  document.getElementById("candle-mode-cards")?.addEventListener("click", () => {
    setCandleTopMode("cards");
  });
  document.getElementById("candle-predict")?.addEventListener("click", (event) => {
    if (candleTopMode !== "cards" || !lastCardBars.length) return;
    const canvas = event.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const padL = 8;
    const padR = 8;
    const innerW = rect.width - padL - padR;
    if (innerW <= 0) return;
    const i = Math.floor((x - padL) / (innerW / lastCardBars.length));
    const bar = lastCardBars[i];
    if (bar && bar.card) openCardInfo(bar.card);
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeCandleCal();
  });
})();

if (isAssetEl) {
  isAssetEl.addEventListener("change", () => {
    syncTickerField();
    if (isAssetEl.checked && tickerEl) tickerEl.focus();
  });
}
if (tickerEl) {
  tickerEl.addEventListener("input", () => {
    tickerEl.setCustomValidity("");
    setTickerHint("");
    const caret = tickerEl.selectionStart;
    const next = tickerEl.value.toUpperCase();
    if (tickerEl.value !== next) {
      tickerEl.value = next;
      if (typeof caret === "number") tickerEl.setSelectionRange(caret, caret);
    }
  });
}

document.getElementById("home-btn").addEventListener("click", showGate);
document.getElementById("open-numbers")?.addEventListener("click", openNumbers);
document.getElementById("open-cards")?.addEventListener("click", showCardsPage);
document.getElementById("open-rv")?.addEventListener("click", showRvPage);
document.getElementById("all-names").addEventListener("click", showHome);
document.getElementById("edit").addEventListener("click", () => {
  const store = loadStore();
  const person = store.people.find((item) => item.id === store.activeId);
  showForm(person);
});
document.getElementById("remove").addEventListener("click", () => {
  const store = loadStore();
  if (store.activeId) removePerson(store.activeId);
});
monthEl.addEventListener("change", () => fillDayOptions(dayEl.value));
yearEl.addEventListener("input", () => {
  yearEl.value = yearEl.value.replace(/\D/g, "").slice(0, 4);
  fillDayOptions(dayEl.value);
});

fillDayOptions("");

cancelFormEl.addEventListener("click", () => {
  const store = loadStore();
  if (store.people.length === 0) {
    showForm();
    return;
  }
  const active = store.people.find((item) => item.id === store.activeId);
  if (active) showResult(active);
  else showHome();
});

const SPREAD_ORDER = [
  "Subject",
  "Influences",
  "Past",
  "Present",
  "Future",
  "Advice",
  "Outcome",
];

let deckPile = [];
let spreadCards = {};
let extraCards = [];

function randomBelow(n) {
  if (n <= 1) return 0;
  const cap = Math.floor(0x100000000 / n) * n;
  const buf = new Uint32Array(1);
  let x = 0;
  do {
    if (window.crypto && window.crypto.getRandomValues) {
      window.crypto.getRandomValues(buf);
      x = buf[0];
    } else {
      x = Math.floor(Math.random() * 0x100000000);
    }
  } while (x >= cap);
  return x % n;
}

function shuffleInPlace(list) {
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = randomBelow(i + 1);
    const hold = list[i];
    list[i] = list[j];
    list[j] = hold;
  }
}

function shuffleDeck() {
  deckPile = shuffleLiveDeck();
  spreadCards = {};
  extraCards = [];
  renderSpread();
  const deckBtn = document.getElementById("cards-deck");
  if (deckBtn) {
    deckBtn.classList.remove("shuffling");
    void deckBtn.offsetWidth;
    deckBtn.classList.add("shuffling");
    window.setTimeout(() => deckBtn.classList.remove("shuffling"), 450);
  }
}

function nextSpreadSlot() {
  const named = SPREAD_ORDER.find((slot) => !spreadCards[slot]);
  if (named) return named;
  if (deckPile.length) return "Additional";
  return "";
}

function drawFromDeck() {
  if (!deckPile.length) return;
  const card = deckPile.pop();
  const slot = SPREAD_ORDER.find((name) => !spreadCards[name]);
  if (slot) spreadCards[slot] = card;
  else extraCards.push(card);
  renderSpread();
}

function renderExtraFaces() {
  const host = document.getElementById("cards-extra");
  if (!host) return;
  host.replaceChildren();
  if (!extraCards.length) {
    const empty = document.createElement("button");
    empty.type = "button";
    empty.className = "spread-face";
    empty.setAttribute("aria-label", "Additional");
    host.append(empty);
    return;
  }
  const depth = Math.min(2, extraCards.length - 1);
  for (let i = 0; i < depth; i += 1) {
    const shim = document.createElement("span");
    shim.className = "spread-extra-shim";
    shim.setAttribute("aria-hidden", "true");
    const back = document.createElement("img");
    back.src = "cards/back.jpg";
    back.alt = "";
    shim.append(back);
    host.append(shim);
  }
  const card = extraCards[extraCards.length - 1];
  const face = document.createElement("button");
  face.type = "button";
  face.className = "spread-face has-card";
  face.dataset.extraIndex = String(extraCards.length - 1);
  face.setAttribute("aria-label", card.name);
  const img = document.createElement("img");
  img.src = card.image;
  img.alt = card.name;
  face.append(img);
  host.append(face);
}

function renderSpread() {
  const left = document.getElementById("cards-left");
  const deckBtn = document.getElementById("cards-deck");
  const next = nextSpreadSlot();
  if (left) {
    left.textContent = next
      ? `${deckPile.length} in the deck · next ${next}`
      : "Deck is empty";
  }
  if (deckBtn) deckBtn.disabled = deckPile.length === 0;
  document.querySelectorAll(".spread-slot").forEach((slotEl) => {
    const key = slotEl.dataset.slot;
    if (key === "Additional") return;
    const face = slotEl.querySelector(".spread-face");
    if (!face) return;
    const card = spreadCards[key];
    face.replaceChildren();
    face.classList.toggle("has-card", Boolean(card));
    if (!card) return;
    const img = document.createElement("img");
    img.src = card.image;
    img.alt = card.name;
    face.append(img);
  });
  renderExtraFaces();
}

function openCardInfo(card) {
  const dialog = document.getElementById("card-info");
  if (!dialog || !card) return;
  const img = document.getElementById("card-info-image");
  if (img) {
    img.src = card.image;
    img.alt = card.name;
  }
  const name = document.getElementById("card-info-name");
  if (name) name.textContent = card.name;
  const meaning = document.getElementById("card-info-meaning");
  if (meaning) meaning.textContent = card.meaning || "";
  const meta = [
    card.element && `Element ${card.element}`,
    card.zodiac && `Zodiac ${card.zodiac}`,
    card.months && card.months !== "N/A" && `Months ${card.months}`,
  ].filter(Boolean);
  setTextHidden(document.getElementById("card-info-meta"), meta.join(" · "));
  const yesNo = cardYesNo(card);
  setTextHidden(
    document.getElementById("card-info-yesno"),
    yesNo ? `Yes / No · ${yesNo}` : ""
  );
  setTextHidden(
    document.getElementById("card-info-sig"),
    card.significant && card.significant.length
      ? card.significant.join(" · ")
      : ""
  );
  if (typeof dialog.showModal === "function") dialog.showModal();
}

function showCardsPage() {
  if (!deckPile.length && !Object.keys(spreadCards).length && !extraCards.length) {
    shuffleDeck();
  } else renderSpread();
  showOnly(cardsEl);
}

document.getElementById("cards-shuffle")?.addEventListener("click", shuffleDeck);
document.getElementById("cards-deck")?.addEventListener("click", drawFromDeck);
document.getElementById("cards-spread")?.addEventListener("click", (event) => {
  const face = event.target.closest(".spread-face");
  if (!face || !face.classList.contains("has-card")) return;
  const slot = face.closest(".spread-slot")?.dataset.slot;
  if (slot === "Additional") {
    const extra = extraCards[Number(face.dataset.extraIndex)];
    if (extra) openCardInfo(extra);
    return;
  }
  if (slot && spreadCards[slot]) openCardInfo(spreadCards[slot]);
});
document.getElementById("card-info-close")?.addEventListener("click", () => {
  document.getElementById("card-info")?.close();
});
document.getElementById("card-info")?.addEventListener("click", (event) => {
  if (event.target.id === "card-info") event.currentTarget.close();
});

const RV_STORE_KEY = "digits.rv.v1";
const RV_SKEW_MS = 60000;
const RV_COLOR_DEFAULTS = ["#5eb8c8", "#e8f4f6", "#3d9b8f", "#163044"];
const RV_SHAPES = [
  { id: "circle", label: "Circle" },
  { id: "plus", label: "Plus" },
  { id: "waves", label: "Waves" },
  { id: "square", label: "Square" },
  { id: "star", label: "Star" },
];
const RV_SHAPE_EACH = 5;
const RV_BLIND_MAX = 10;
const RV_CODE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const RV_CODE_RE = /^[A-Z0-9]{4}-[A-Z0-9]{4}$/;
const RV_BLIND_DIRS = [
  { dir: "left", label: "Left", key: "ArrowLeft", index: 0 },
  { dir: "up", label: "Up", key: "ArrowUp", index: 1 },
  { dir: "right", label: "Right", key: "ArrowRight", index: 2 },
  { dir: "down", label: "Down", key: "ArrowDown", index: 3 },
];

const rvSkew = {
  running: false,
  raf: 0,
  startedAt: 0,
  target: 0,
  counts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  n: 0,
  playerName: "",
};

const rvColor = {
  palette: [],
  deck: [],
  guesses: [],
  index: 0,
  locked: false,
  playing: false,
  revealed: false,
  playerName: "",
};

const rvShapes = {
  deck: [],
  guesses: [],
  index: 0,
  locked: false,
  playing: false,
  revealed: false,
  playerName: "",
};

const rvBlind = {
  playing: false,
  revealed: false,
  playerName: "",
  palette: [],
  actual: null,
  guessed: false,
  guesses: [],
};

const rvView = {
  at: 0,
  persistTimer: 0,
};

function normalizeRvName(value) {
  return String(value || "").trim().slice(0, 60);
}

function rvNameKey(name) {
  return normalizeRvName(name).toLocaleLowerCase();
}

function currentRvName() {
  const input = document.getElementById("rv-player-name");
  return normalizeRvName(input && input.value);
}

function loadRvStore() {
  try {
    const raw = JSON.parse(localStorage.getItem(RV_STORE_KEY) || "null");
    if (raw && Array.isArray(raw.skew) && Array.isArray(raw.colors)) {
      if (!Array.isArray(raw.picks) || raw.picks.length !== 4) raw.picks = RV_COLOR_DEFAULTS.slice();
      if (!Array.isArray(raw.shapes)) raw.shapes = [];
      if (!Array.isArray(raw.blind)) raw.blind = [];
      if (!Array.isArray(raw.targets)) raw.targets = [];
      raw.player = normalizeRvName(raw.player);
      return raw;
    }
  } catch (err) {
    /* keep empty */
  }
  return {
    skew: [],
    colors: [],
    shapes: [],
    blind: [],
    targets: [],
    picks: RV_COLOR_DEFAULTS.slice(),
    player: "",
  };
}

function saveRvStore(store) {
  localStorage.setItem(RV_STORE_KEY, JSON.stringify(store));
}

function persistRvPlayer(name) {
  const store = loadRvStore();
  store.player = normalizeRvName(name);
  saveRvStore(store);
}

function rvKnownNames() {
  const seen = new Set();
  const out = [];
  const add = (value) => {
    const name = normalizeRvName(value);
    const key = rvNameKey(name);
    if (!key || seen.has(key)) return;
    seen.add(key);
    out.push(name);
  };
  sortedPeople(loadStore()).forEach((person) => add(person.name));
  const games = loadRvStore();
  [
    ...(games.skew || []),
    ...(games.colors || []),
    ...(games.shapes || []),
    ...(games.blind || []),
    ...(games.targets || []),
  ].forEach((row) => add(row.name));
  add(games.player);
  return out.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
}

function fillRvPlayerNames() {
  const list = document.getElementById("rv-player-names");
  if (!list) return;
  list.replaceChildren();
  rvKnownNames().forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    list.append(option);
  });
}

function requireRvPlayer() {
  const name = currentRvName();
  if (name) return name;
  const input = document.getElementById("rv-player-name");
  const live = document.getElementById("rv-player-live");
  if (live) live.textContent = "Enter a name to start a game.";
  if (input) {
    input.focus();
    if (typeof input.reportValidity === "function") input.reportValidity();
  }
  return "";
}

function syncRvPlayerLock() {
  const name = currentRvName();
  const live = document.getElementById("rv-player-live");
  if (live) {
    live.textContent = name
      ? `Playing as ${name}. Scores save under this name.`
      : "Enter a name to start a game.";
  }
  const start = document.getElementById("rv-skew-start");
  const colorShuffle = document.getElementById("rv-color-start");
  const shapeShuffle = document.getElementById("rv-shape-start");
  const blindStart = document.getElementById("rv-blind-start");
  const viewGenerate = document.getElementById("rv-view-generate");
  if (start && !rvSkew.running) start.disabled = !name;
  if (colorShuffle) colorShuffle.disabled = !name;
  if (shapeShuffle) shapeShuffle.disabled = !name;
  if (blindStart && !rvBlind.playing) blindStart.disabled = !name;
  if (viewGenerate) viewGenerate.disabled = !name;
  const clearScores = document.getElementById("rv-clear-scores");
  if (clearScores) clearScores.disabled = !name;
  if (!rvSkew.running && !rvSkew.n) {
    const skewLive = document.getElementById("rv-skew-live");
    if (skewLive) {
      skewLive.textContent = name
        ? "Press start for a one-minute run."
        : "Enter a name, then start a one-minute run.";
    }
  }
  if (!rvColor.playing && !rvColor.revealed) {
    const status = document.getElementById("rv-color-status");
    if (status) {
      status.textContent = name
        ? "Pick four colors, then shuffle a deck."
        : "Enter a name, pick four colors, then shuffle.";
    }
  }
  if (!rvShapes.playing && !rvShapes.revealed) {
    const status = document.getElementById("rv-shape-status");
    if (status) {
      status.textContent = name ? "Shuffle a shapes deck." : "Enter a name, then shuffle a deck.";
    }
  }
  if (!rvBlind.playing && !rvBlind.revealed) {
    const status = document.getElementById("rv-blind-status");
    if (status) {
      status.textContent = name ? "Start, then space for a color." : "Enter a name, then start.";
    }
  }
  syncRvViewLive();
  persistRvPlayer(name);
  renderRvBests(loadRvStore());
}

function rvScoreCountFor(name) {
  const store = loadRvStore();
  return (
    runsForPlayer(store.skew, name).length +
    runsForPlayer(store.colors, name).length +
    runsForPlayer(store.shapes, name).length +
    runsForPlayer(store.blind, name).length +
    runsForPlayer(store.targets, name).length
  );
}

function dropRunsForPlayer(rows, name) {
  const key = rvNameKey(name);
  return (rows || []).filter((row) => rvNameKey(row.name) !== key);
}

function clearRvScores() {
  const name = requireRvPlayer();
  if (!name) return;
  const count = rvScoreCountFor(name);
  const live = document.getElementById("rv-player-live");
  if (!count) {
    if (live) live.textContent = `No scores for ${name} on this phone.`;
    return;
  }
  const ok = window.confirm(
    `Clear ${name}'s ${count} RV run${count === 1 ? "" : "s"} on this phone?`
  );
  if (!ok) return;
  const store = loadRvStore();
  store.skew = dropRunsForPlayer(store.skew, name);
  store.colors = dropRunsForPlayer(store.colors, name);
  store.shapes = dropRunsForPlayer(store.shapes, name);
  store.blind = dropRunsForPlayer(store.blind, name);
  store.targets = dropRunsForPlayer(store.targets, name);
  saveRvStore(store);
  fillRvPlayerNames();
  renderRvRecord();
  if (live) live.textContent = `Cleared ${count} RV run${count === 1 ? "" : "s"} for ${name}.`;
}

function restoreRvPlayer() {
  const input = document.getElementById("rv-player-name");
  if (input && !normalizeRvName(input.value)) {
    input.value = loadRvStore().player || "";
  }
  fillRvPlayerNames();
  syncRvPlayerLock();
}

function cleanSkewRow(row) {
  if (!row || !Number.isFinite(Number(row.at))) return null;
  const n = Number(row.n) || 0;
  const hits = Number(row.hits) || 0;
  const z = Number(row.z);
  if (n <= 0 || !Number.isFinite(z)) return null;
  const target = Number(row.target);
  const rank = Number(row.rank);
  return {
    at: Number(row.at),
    target: Number.isFinite(target) ? target : 0,
    n,
    hits,
    z,
    lean: String(row.lean || ""),
    rank: Number.isFinite(rank) && rank > 0 ? rank : 0,
    name: normalizeRvName(row.name),
  };
}

function cleanColorRow(row) {
  if (!row || !Number.isFinite(Number(row.at))) return null;
  const n = Number(row.n) || 0;
  const hits = Number(row.hits) || 0;
  const z = Number(row.z);
  if (n <= 0 || !Number.isFinite(z)) return null;
  return {
    at: Number(row.at),
    n,
    hits,
    z,
    lean: String(row.lean || ""),
    name: normalizeRvName(row.name),
  };
}

function cleanTargetNote(note) {
  if (!note || typeof note !== "object") return null;
  const attr = String(note.attr || "").trim().slice(0, 40);
  const text = String(note.text || "").trim().slice(0, 240);
  if (!attr && !text) return null;
  return { attr, text };
}

function cleanTargetRow(row) {
  if (!row || !Number.isFinite(Number(row.at))) return null;
  const code = formatTargetCode(row.code);
  if (!RV_CODE_RE.test(code)) return null;
  const notes = Array.isArray(row.notes) ? row.notes.map(cleanTargetNote).filter(Boolean) : [];
  return {
    at: Number(row.at),
    code,
    notes,
    name: normalizeRvName(row.name),
  };
}

function serializeRvStore(store) {
  const source = store || loadRvStore();
  return {
    player: normalizeRvName(source.player),
    skew: (source.skew || []).map(cleanSkewRow).filter(Boolean).slice(0, RV_KEEP),
    colors: (source.colors || []).map(cleanColorRow).filter(Boolean).slice(0, RV_KEEP),
    shapes: (source.shapes || []).map(cleanColorRow).filter(Boolean).slice(0, RV_KEEP),
    blind: (source.blind || []).map(cleanColorRow).filter(Boolean).slice(0, RV_KEEP),
    targets: (source.targets || []).map(cleanTargetRow).filter(Boolean).slice(0, RV_KEEP),
    picks:
      Array.isArray(source.picks) && source.picks.length === 4
        ? source.picks.slice()
        : RV_COLOR_DEFAULTS.slice(),
  };
}

function parseBackupGames(games) {
  if (!games || typeof games !== "object") return null;
  const skew = Array.isArray(games.skew) ? games.skew.map(cleanSkewRow).filter(Boolean) : [];
  const colors = Array.isArray(games.colors) ? games.colors.map(cleanColorRow).filter(Boolean) : [];
  const shapes = Array.isArray(games.shapes) ? games.shapes.map(cleanColorRow).filter(Boolean) : [];
  const blind = Array.isArray(games.blind) ? games.blind.map(cleanColorRow).filter(Boolean) : [];
  const targets = Array.isArray(games.targets) ? games.targets.map(cleanTargetRow).filter(Boolean) : [];
  const hasPicks = Array.isArray(games.picks) && games.picks.length === 4;
  const player = normalizeRvName(games.player);
  if (
    !skew.length &&
    !colors.length &&
    !shapes.length &&
    !blind.length &&
    !targets.length &&
    !hasPicks &&
    !player
  ) {
    return null;
  }
  return {
    player: player || null,
    skew,
    colors,
    shapes,
    blind,
    targets,
    picks: hasPicks ? games.picks.map(String) : null,
  };
}

function mergeRunLists(local, incoming) {
  const seen = new Set();
  const out = [];
  for (const row of [...(incoming || []), ...(local || [])]) {
    const key = `${row.at}|${row.n}|${row.hits}|${row.z}|${rvNameKey(row.name)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(row);
  }
  return out.sort((a, b) => b.at - a.at).slice(0, RV_KEEP);
}

function mergeTargetLists(local, incoming) {
  const seen = new Set();
  const out = [];
  for (const row of [...(incoming || []), ...(local || [])]) {
    const key = `${row.at}|${row.code}|${rvNameKey(row.name)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(row);
  }
  return out.sort((a, b) => b.at - a.at).slice(0, RV_KEEP);
}

function mergeRvBackup(incoming) {
  if (!incoming) return;
  const store = loadRvStore();
  store.skew = mergeRunLists(store.skew, incoming.skew);
  store.colors = mergeRunLists(store.colors, incoming.colors);
  store.shapes = mergeRunLists(store.shapes, incoming.shapes);
  store.blind = mergeRunLists(store.blind, incoming.blind);
  store.targets = mergeTargetLists(store.targets, incoming.targets);
  if (Array.isArray(incoming.picks) && incoming.picks.length === 4) {
    store.picks = incoming.picks.slice();
  }
  if (!store.player && incoming.player) store.player = normalizeRvName(incoming.player);
  saveRvStore(store);
}

function bestRun(rows) {
  if (!rows || !rows.length) return null;
  return rows.reduce((best, row) => {
    if (!best) return row;
    if (row.z > best.z) return row;
    if (row.z === best.z && row.n > best.n) return row;
    return best;
  }, null);
}

function rvZScore(hits, n, p) {
  if (n <= 0) return 0;
  const sd = Math.sqrt(n * p * (1 - p));
  if (sd === 0) return 0;
  return (hits - n * p) / sd;
}

function rvLeanCopy(z, toward) {
  if (z >= 1.65) return `A lean toward ${toward}.`;
  if (z <= -1.65) return `A lean away from ${toward}.`;
  if (z >= 0.8) return `A slight lean toward ${toward}.`;
  if (z <= -0.8) return `A slight lean away from ${toward}.`;
  return "No clear lean. Chance still fits.";
}

function formatRvZ(z) {
  const sign = z >= 0 ? "+" : "";
  return `${sign}${z.toFixed(2)}`;
}

function colorById(id) {
  return rvColor.palette.find((item) => item.id === id);
}

function inkForHex(hex) {
  const raw = String(hex || "").replace("#", "");
  if (raw.length !== 6) return "#e8f4f6";
  const n = parseInt(raw, 16);
  if (Number.isNaN(n)) return "#e8f4f6";
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return lum > 0.55 ? "#041018" : "#e8f4f6";
}

function colorPickInputs() {
  return [...document.querySelectorAll("#rv-color-picks .rv-color-pick")];
}

function restoreColorPicks() {
  const inputs = colorPickInputs();
  const store = loadRvStore();
  inputs.forEach((input, i) => {
    input.value = store.picks[i] || RV_COLOR_DEFAULTS[i];
  });
}

function saveColorPicks() {
  const store = loadRvStore();
  store.picks = colorPickInputs().map((input, i) => input.value || RV_COLOR_DEFAULTS[i]);
  saveRvStore(store);
  rebuildBlindMap();
}

function readColorPalette() {
  return colorPickInputs().map((input, i) => {
    const hex = input.value || RV_COLOR_DEFAULTS[i];
    return {
      id: `c${i}`,
      label: `Color ${i + 1}`,
      hex,
      ink: inkForHex(hex),
    };
  });
}

function setColorPicksEnabled(on) {
  colorPickInputs().forEach((input) => {
    input.disabled = !on;
  });
}

function showRvPage() {
  restoreRvPlayer();
  restoreColorPicks();
  rebuildBlindMap();
  rebuildShapeChoices();
  renderRvRecord();
  if (!rvSkew.running && document.getElementById("rv-skew-target").textContent === "—") {
    pickSkewTarget();
  }
  if (rvSkew.running) {
    setSkewRank(0);
    showSkewClock();
    drawSkewClock(Math.max(0, RV_SKEW_MS - (performance.now() - rvSkew.startedAt)));
  } else if (rvSkew.n) {
    setSkewRank(skewRanks(rvSkew.counts)[rvSkew.target]);
    showSkewChart();
    drawSkewBreakdown();
  } else {
    hideSkewVisuals();
  }
  showOnly(rvEl);
}

function pickSkewTarget() {
  rvSkew.target = randomBelow(10);
  const el = document.getElementById("rv-skew-target");
  if (el) el.textContent = String(rvSkew.target);
}

function setSkewRank(rank) {
  const wrap = document.getElementById("rv-skew-rank-wrap");
  const el = document.getElementById("rv-skew-rank");
  const heroes = document.getElementById("rv-skew-heroes");
  const show = Number.isFinite(rank) && rank > 0;
  if (wrap) wrap.hidden = !show;
  if (heroes) heroes.classList.toggle("is-ranked", show);
  if (el) el.textContent = show ? ordinalRank(rank) : "";
}

function skewClockEl() {
  return document.getElementById("rv-skew-clock");
}

function skewChartEl() {
  return document.getElementById("rv-skew-chart");
}

function hideSkewVisuals() {
  const clock = skewClockEl();
  const chart = skewChartEl();
  if (clock) clock.hidden = true;
  if (chart) chart.hidden = true;
}

function showSkewClock() {
  const clock = skewClockEl();
  const chart = skewChartEl();
  if (chart) chart.hidden = true;
  if (clock) clock.hidden = false;
}

function showSkewChart() {
  const clock = skewClockEl();
  const chart = skewChartEl();
  if (clock) clock.hidden = true;
  if (chart) chart.hidden = false;
}

function drawSkewClock(leftMs) {
  const canvas = skewClockEl();
  if (!canvas || canvas.hidden) return;
  const sized = prepareCanvas(canvas, 220);
  if (!sized) return;
  const { ctx, cssW, cssH } = sized;
  const cx = cssW / 2;
  const cy = cssH / 2;
  const r = Math.min(cssW, cssH) / 2 - 6;
  const frac = Math.max(0, Math.min(1, leftMs / RV_SKEW_MS));
  const secs = Math.max(0, Math.ceil(leftMs / 1000));

  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(126, 200, 212, 0.08)";
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgba(126, 200, 212, 0.28)";
  ctx.stroke();

  if (frac > 0) {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r - 1, -Math.PI / 2, -Math.PI / 2 + frac * Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = "rgba(126, 200, 212, 0.55)";
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.56, 0, Math.PI * 2);
  ctx.fillStyle = "#07141c";
  ctx.fill();

  ctx.fillStyle = "#d4eef4";
  ctx.font = `500 ${Math.round(r * 0.42)}px Palatino, "Palatino Linotype", serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(String(secs), cx, cy - 8);
  ctx.fillStyle = "#7ec8d4";
  ctx.font = "600 11px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.letterSpacing = "0.16em";
  ctx.fillText("SECONDS", cx, cy + r * 0.22);
}

function compactCount(n) {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return `${m >= 10 ? m.toFixed(0) : m.toFixed(1).replace(/\.0$/, "")}m`;
  }
  if (n >= 1000) {
    const k = n / 1000;
    return `${k >= 10 ? k.toFixed(0) : k.toFixed(1).replace(/\.0$/, "")}k`;
  }
  return String(n);
}

function ordinalRank(n) {
  const v = n % 100;
  if (v >= 11 && v <= 13) return `${n}th`;
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
    default:
      return `${n}th`;
  }
}

function skewRanks(counts) {
  const order = counts
    .map((count, digit) => ({ digit, count }))
    .sort((a, b) => b.count - a.count || a.digit - b.digit);
  const ranks = Array(counts.length).fill(1);
  let rank = 1;
  for (let i = 0; i < order.length; i += 1) {
    if (i > 0 && order[i].count < order[i - 1].count) rank = i + 1;
    ranks[order[i].digit] = rank;
  }
  return ranks;
}

function drawSkewBreakdown() {
  const canvas = skewChartEl();
  if (!canvas || canvas.hidden) return;
  const sized = prepareCanvas(canvas, 300);
  if (!sized) return;
  const { ctx, cssW, cssH } = sized;
  const counts = rvSkew.counts;
  const n = rvSkew.n;
  const target = rvSkew.target;
  const ranks = skewRanks(counts);
  const padL = 6;
  const padR = 6;
  const padT = 20;
  const padB = 36;
  const innerW = cssW - padL - padR;
  const innerH = cssH - padT - padB;
  const expected = n / 10;
  const max = Math.max(expected, ...counts, 1);
  const gap = 3;
  const barW = (innerW - gap * 9) / 10;
  const gold = "#7ec8d4";
  const muted = "rgba(126, 200, 212, 0.42)";

  const yExp = padT + innerH - (expected / max) * innerH;
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = "rgba(212, 238, 244, 0.4)";
  ctx.beginPath();
  ctx.moveTo(padL, yExp);
  ctx.lineTo(cssW - padR, yExp);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "#9bb4bc";
  ctx.font = "600 10px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "bottom";
  ctx.fillText("10%", padL, yExp - 3);

  ctx.textAlign = "center";
  for (let digit = 0; digit < 10; digit += 1) {
    const x = padL + digit * (barW + gap);
    const h = Math.max(80, (counts[digit] / max) * innerH);
    const y = padT + innerH - h;
    const rank = ranks[digit];
    const rankText = String(rank);
    const suffix = ordinalRank(rank).slice(rankText.length);
    ctx.fillStyle = digit === target ? gold : muted;
    ctx.beginPath();
    ctx.moveTo(x, y + h);
    ctx.lineTo(x, y + 4);
    ctx.quadraticCurveTo(x, y, x + Math.min(4, barW / 2), y);
    ctx.lineTo(x + barW - Math.min(4, barW / 2), y);
    ctx.quadraticCurveTo(x + barW, y, x + barW, y + 4);
    ctx.lineTo(x + barW, y + h);
    ctx.closePath();
    ctx.fill();
    const ink = digit === target ? "#041018" : "#d4eef4";
    const maxRankW = Math.max(8, barW - 2);
    let rankSize = Math.min(44, h * 0.48, maxRankW * (rank >= 10 ? 0.72 : 1.05));
    ctx.font = `700 ${rankSize}px Palatino, "Palatino Linotype", serif`;
    while (rankSize > 14 && ctx.measureText(rankText).width > maxRankW) {
      rankSize -= 1;
      ctx.font = `700 ${rankSize}px Palatino, "Palatino Linotype", serif`;
    }
    ctx.fillStyle = ink;
    ctx.textBaseline = "middle";
    ctx.fillText(rankText, x + barW / 2, y + h * 0.38);
    ctx.font = `600 ${Math.max(9, Math.round(rankSize * 0.32))}px Palatino, "Palatino Linotype", serif`;
    ctx.textBaseline = "top";
    ctx.fillText(suffix, x + barW / 2, y + h * 0.38 + rankSize * 0.38);
    ctx.font = "600 9px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.textBaseline = "bottom";
    ctx.fillText(compactCount(counts[digit]), x + barW / 2, y + h - 5);
    ctx.textBaseline = "top";
    ctx.fillStyle = digit === target ? gold : "#9bb4bc";
    ctx.font =
      digit === target
        ? '700 13px Palatino, "Palatino Linotype", serif'
        : '600 12px Palatino, "Palatino Linotype", serif';
    ctx.fillText(String(digit), x + barW / 2, padT + innerH + 6);
  }
}

function redrawSkewVisual() {
  if (!rvEl || rvEl.hidden) return;
  if (rvSkew.running) {
    setSkewRank(0);
    showSkewClock();
    drawSkewClock(Math.max(0, RV_SKEW_MS - (performance.now() - rvSkew.startedAt)));
    return;
  }
  if (rvSkew.n) {
    setSkewRank(skewRanks(rvSkew.counts)[rvSkew.target]);
    showSkewChart();
    drawSkewBreakdown();
  }
}

function stopSkewRun(opts) {
  const wasRunning = rvSkew.running;
  if (rvSkew.raf) window.cancelAnimationFrame(rvSkew.raf);
  rvSkew.raf = 0;
  rvSkew.running = false;
  const start = document.getElementById("rv-skew-start");
  if (start) start.textContent = "Start one minute";
  syncRvPlayerLock();
  if (wasRunning && !(opts && opts.quiet)) {
    const live = document.getElementById("rv-skew-live");
    if (live) live.textContent = "Run stopped. Press start for a new minute.";
    hideSkewVisuals();
    setSkewRank(0);
  }
}

function drawSkewBatch() {
  const buf = new Uint32Array(2048);
  if (window.crypto && window.crypto.getRandomValues) {
    window.crypto.getRandomValues(buf);
  } else {
    for (let i = 0; i < buf.length; i += 1) buf[i] = Math.floor(Math.random() * 0x100000000);
  }
  const cap = 4294967290;
  for (let i = 0; i < buf.length; i += 1) {
    const x = buf[i];
    if (x >= cap) continue;
    rvSkew.counts[x % 10] += 1;
    rvSkew.n += 1;
  }
}

function tickSkew(now) {
  if (!rvSkew.running) return;
  const left = RV_SKEW_MS - (now - rvSkew.startedAt);
  if (left <= 0) {
    finishSkewRun();
    return;
  }
  drawSkewBatch();
  const live = document.getElementById("rv-skew-live");
  if (live) {
    const hits = rvSkew.counts[rvSkew.target];
    const pct = rvSkew.n ? ((hits / rvSkew.n) * 100).toFixed(2) : "0.00";
    live.textContent = `${rvSkew.n.toLocaleString()} draws · ${rvSkew.target} at ${pct}%`;
  }
  drawSkewClock(left);
  rvSkew.raf = window.requestAnimationFrame(tickSkew);
}

function startSkewRun() {
  if (rvSkew.running) return;
  const name = requireRvPlayer();
  if (!name) return;
  rvSkew.playerName = name;
  pickSkewTarget();
  rvSkew.counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  rvSkew.n = 0;
  rvSkew.running = true;
  rvSkew.startedAt = performance.now();
  const start = document.getElementById("rv-skew-start");
  if (start) {
    start.disabled = true;
    start.textContent = "Running…";
  }
  const result = document.getElementById("rv-skew-result");
  if (result) result.textContent = "";
  const live = document.getElementById("rv-skew-live");
  if (live) live.textContent = "Hold the target. The stream is running.";
  setSkewRank(0);
  showSkewClock();
  drawSkewClock(RV_SKEW_MS);
  rvSkew.raf = window.requestAnimationFrame(tickSkew);
}

function finishSkewRun() {
  stopSkewRun({ quiet: true });
  const n = rvSkew.n;
  const target = rvSkew.target;
  const hits = rvSkew.counts[target];
  const p = 0.1;
  const expected = n * p;
  const z = rvZScore(hits, n, p);
  const pct = n ? (hits / n) * 100 : 0;
  const lean = rvLeanCopy(z, String(target));
  const rank = n ? skewRanks(rvSkew.counts)[target] : 0;
  const result = document.getElementById("rv-skew-result");
  if (result) {
    result.textContent = n
      ? `${n.toLocaleString()} draws. Target ${target} came up ${hits.toLocaleString()} times (${pct.toFixed(2)}%) and ranked ${ordinalRank(rank)}. Chance expects ${expected.toFixed(0)} (10%). z = ${formatRvZ(z)}. ${lean}`
      : "No draws this run.";
  }
  const live = document.getElementById("rv-skew-live");
  if (live) live.textContent = "Minute complete. Rank 1 was chosen most. Tied counts share a rank.";
  setSkewRank(rank);
  showSkewChart();
  drawSkewBreakdown();
  if (n) {
    const store = loadRvStore();
    store.skew.unshift({
      at: Date.now(),
      target,
      n,
      hits,
      z,
      lean,
      rank,
      name: rvSkew.playerName || currentRvName(),
    });
    store.skew = store.skew.slice(0, RV_KEEP);
    saveRvStore(store);
    renderRvRecord();
  }
}

function rebuildColorChoices() {
  const host = document.getElementById("rv-color-choices");
  if (!host) return;
  host.replaceChildren();
  rvColor.palette.forEach((color) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "rv-color-choice";
    btn.dataset.color = color.id;
    btn.setAttribute("aria-label", color.label);
    btn.style.background = color.hex;
    btn.disabled = !rvColor.playing || rvColor.revealed;
    btn.addEventListener("click", () => guessColorCard(color.id));
    host.append(btn);
  });
}

function setColorChoicesEnabled(on) {
  document.querySelectorAll(".rv-color-choice").forEach((btn) => {
    btn.disabled = !on;
  });
}

function setRvDeckFace(id, left, shuffle) {
  const el = document.getElementById(id);
  if (!el) return;
  if (!left) {
    el.hidden = true;
    el.classList.remove("is-thin", "is-pair", "is-shuffling");
    return;
  }
  el.hidden = false;
  el.classList.toggle("is-thin", left === 1);
  el.classList.toggle("is-pair", left === 2);
  if (shuffle) {
    el.classList.remove("is-shuffling");
    void el.offsetWidth;
    el.classList.add("is-shuffling");
    window.setTimeout(() => el.classList.remove("is-shuffling"), 450);
  }
}

function setColorResultsHidden(hidden) {
  const btn = document.getElementById("rv-color-results");
  if (btn) btn.hidden = hidden;
}

function startColorDeck() {
  const name = requireRvPlayer();
  if (!name) return;
  const palette = readColorPalette();
  const unique = new Set(palette.map((color) => color.hex.toLowerCase()));
  if (unique.size < 4) {
    const status = document.getElementById("rv-color-status");
    if (status) status.textContent = "Pick four different colors, then shuffle.";
    return;
  }
  saveColorPicks();
  rvColor.palette = palette;
  rvColor.deck = [];
  palette.forEach((color) => {
    for (let i = 0; i < 13; i += 1) rvColor.deck.push(color.id);
  });
  shuffleInPlace(rvColor.deck);
  rvColor.guesses = [];
  rvColor.index = 0;
  rvColor.locked = false;
  rvColor.playing = true;
  rvColor.revealed = false;
  rvColor.playerName = name;
  const result = document.getElementById("rv-color-result");
  if (result) result.textContent = "";
  const recap = document.getElementById("rv-color-recap");
  if (recap) {
    recap.hidden = true;
    recap.replaceChildren();
  }
  setRvDeckFace("rv-color-face", rvColor.deck.length, true);
  setColorPicksEnabled(false);
  setColorResultsHidden(true);
  rebuildColorChoices();
  updateColorStatus();
}

function updateColorStatus() {
  const status = document.getElementById("rv-color-status");
  if (!status) return;
  if (rvColor.revealed) {
    status.textContent =
      rvColor.index >= rvColor.deck.length ? "Deck complete." : "Results shown. Shuffle for a new deck.";
    return;
  }
  if (!rvColor.playing) {
    status.textContent = "Pick four colors, then shuffle a deck.";
    return;
  }
  const left = rvColor.deck.length - rvColor.index;
  status.textContent = `${left} left · ${rvColor.guesses.length} guessed · next color`;
}

function guessColorCard(id) {
  if (!rvColor.playing || rvColor.revealed || rvColor.locked) return;
  if (rvColor.index >= rvColor.deck.length) return;
  rvColor.locked = true;
  rvColor.guesses.push({ guess: id, actual: rvColor.deck[rvColor.index] });
  rvColor.index += 1;
  setColorResultsHidden(false);
  setRvDeckFace("rv-color-face", rvColor.deck.length - rvColor.index, false);
  updateColorStatus();
  if (rvColor.index >= rvColor.deck.length) {
    showColorResults();
    return;
  }
  window.setTimeout(() => {
    rvColor.locked = false;
  }, 160);
}

function renderColorRecap() {
  const host = document.getElementById("rv-color-recap");
  if (!host) return;
  host.replaceChildren();
  if (!rvColor.revealed || !rvColor.guesses.length) {
    host.hidden = true;
    return;
  }
  host.hidden = false;
  rvColor.guesses.forEach((item) => {
    const actual = colorById(item.actual);
    const span = document.createElement("span");
    span.className = `rv-color-chip ${item.guess === item.actual ? "is-hit" : "is-miss"}`;
    span.style.background = actual ? actual.hex : "#163044";
    span.title = item.guess === item.actual ? "Hit" : "Miss";
    host.append(span);
  });
}

function showColorResults() {
  if (!rvColor.guesses.length || rvColor.revealed) return;
  rvColor.playing = false;
  rvColor.revealed = true;
  rvColor.locked = true;
  setColorChoicesEnabled(false);
  setColorPicksEnabled(true);
  setColorResultsHidden(true);
  const n = rvColor.guesses.length;
  const hits = rvColor.guesses.filter((item) => item.guess === item.actual).length;
  const colors = Math.max(1, rvColor.palette.length);
  const expected = n / colors;
  const z = rvZScore(hits, n, 1 / colors);
  const lean = rvLeanCopy(z, "the colors you named");
  const result = document.getElementById("rv-color-result");
  if (result) {
    result.textContent =
      n === rvColor.deck.length
        ? `${hits} of ${n} correct. Chance expects about ${expected.toFixed(0)}. z = ${formatRvZ(z)}. ${lean}`
        : `${hits} of ${n} guessed correct. ${rvColor.deck.length - n} still in the deck. Chance expects about ${expected.toFixed(0)}. z = ${formatRvZ(z)}. ${lean}`;
  }
  updateColorStatus();
  renderColorRecap();
  setRvDeckFace("rv-color-face", rvColor.deck.length - rvColor.index, false);
  const store = loadRvStore();
  store.colors.unshift({
    at: Date.now(),
    n,
    hits,
    z,
    lean,
    name: rvColor.playerName || currentRvName(),
  });
  store.colors = store.colors.slice(0, RV_KEEP);
  saveRvStore(store);
  renderRvRecord();
}

function rvShapeSvg(id) {
  const body = {
    circle: '<circle cx="24" cy="24" r="13"/>',
    plus: '<path d="M24 8v32M8 24h32"/>',
    waves:
      '<path d="M11 9c0 6 8 6 8 14s-8 8-8 14M24 9c0 6 8 6 8 14s-8 8-8 14M37 9c0 6 8 6 8 14s-8 8-8 14"/>',
    square: '<rect x="10" y="10" width="28" height="28"/>',
    star: '<path d="M24 6.5l4.9 10 11 .8-8.3 7.2 2.6 10.8L24 30.2 13.8 35.3l2.6-10.8-8.3-7.2 11-.8z"/>',
  };
  return `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${
    body[id] || ""
  }</svg>`;
}

function rebuildShapeChoices() {
  const host = document.getElementById("rv-shape-choices");
  if (!host) return;
  host.replaceChildren();
  RV_SHAPES.forEach((shape) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "rv-shape-choice";
    btn.dataset.shape = shape.id;
    btn.setAttribute("aria-label", shape.label);
    btn.innerHTML = `${rvShapeSvg(shape.id)}<span>${shape.label}</span>`;
    btn.disabled = !rvShapes.playing || rvShapes.revealed;
    btn.addEventListener("click", () => guessShapeCard(shape.id));
    host.append(btn);
  });
}

function setShapeChoicesEnabled(on) {
  document.querySelectorAll(".rv-shape-choice").forEach((btn) => {
    btn.disabled = !on;
  });
}

function setShapeResultsHidden(hidden) {
  const btn = document.getElementById("rv-shape-results");
  if (btn) btn.hidden = hidden;
}

function startShapeDeck() {
  const name = requireRvPlayer();
  if (!name) return;
  rvShapes.deck = [];
  RV_SHAPES.forEach((shape) => {
    for (let i = 0; i < RV_SHAPE_EACH; i += 1) rvShapes.deck.push(shape.id);
  });
  shuffleInPlace(rvShapes.deck);
  rvShapes.guesses = [];
  rvShapes.index = 0;
  rvShapes.locked = false;
  rvShapes.playing = true;
  rvShapes.revealed = false;
  rvShapes.playerName = name;
  const result = document.getElementById("rv-shape-result");
  if (result) result.textContent = "";
  const recap = document.getElementById("rv-shape-recap");
  if (recap) {
    recap.hidden = true;
    recap.replaceChildren();
  }
  setRvDeckFace("rv-shape-face", rvShapes.deck.length, true);
  setShapeResultsHidden(true);
  rebuildShapeChoices();
  updateShapeStatus();
}

function updateShapeStatus() {
  const status = document.getElementById("rv-shape-status");
  if (!status) return;
  if (rvShapes.revealed) {
    status.textContent =
      rvShapes.index >= rvShapes.deck.length ? "Deck complete." : "Results shown. Shuffle for a new deck.";
    return;
  }
  if (!rvShapes.playing) {
    status.textContent = "Shuffle a shapes deck.";
    return;
  }
  const left = rvShapes.deck.length - rvShapes.index;
  status.textContent = `${left} left · ${rvShapes.guesses.length} guessed · next shape`;
}

function guessShapeCard(id) {
  if (!rvShapes.playing || rvShapes.revealed || rvShapes.locked) return;
  if (rvShapes.index >= rvShapes.deck.length) return;
  rvShapes.locked = true;
  rvShapes.guesses.push({ guess: id, actual: rvShapes.deck[rvShapes.index] });
  rvShapes.index += 1;
  setShapeResultsHidden(false);
  setRvDeckFace("rv-shape-face", rvShapes.deck.length - rvShapes.index, false);
  updateShapeStatus();
  if (rvShapes.index >= rvShapes.deck.length) {
    showShapeResults();
    return;
  }
  window.setTimeout(() => {
    rvShapes.locked = false;
  }, 160);
}

function renderShapeRecap() {
  const host = document.getElementById("rv-shape-recap");
  if (!host) return;
  host.replaceChildren();
  if (!rvShapes.revealed || !rvShapes.guesses.length) {
    host.hidden = true;
    return;
  }
  host.hidden = false;
  rvShapes.guesses.forEach((item) => {
    const span = document.createElement("span");
    span.className = `rv-shape-chip ${item.guess === item.actual ? "is-hit" : "is-miss"}`;
    span.title = item.guess === item.actual ? "Hit" : "Miss";
    span.innerHTML = rvShapeSvg(item.actual);
    host.append(span);
  });
}

function showShapeResults() {
  if (!rvShapes.guesses.length || rvShapes.revealed) return;
  rvShapes.playing = false;
  rvShapes.revealed = true;
  rvShapes.locked = true;
  setShapeChoicesEnabled(false);
  setShapeResultsHidden(true);
  const n = rvShapes.guesses.length;
  const hits = rvShapes.guesses.filter((item) => item.guess === item.actual).length;
  const kinds = RV_SHAPES.length;
  const expected = n / kinds;
  const z = rvZScore(hits, n, 1 / kinds);
  const lean = rvLeanCopy(z, "the shapes you named");
  const result = document.getElementById("rv-shape-result");
  if (result) {
    result.textContent =
      n === rvShapes.deck.length
        ? `${hits} of ${n} correct. Chance expects about ${expected.toFixed(0)}. z = ${formatRvZ(z)}. ${lean}`
        : `${hits} of ${n} guessed correct. ${rvShapes.deck.length - n} still in the deck. Chance expects about ${expected.toFixed(0)}. z = ${formatRvZ(z)}. ${lean}`;
  }
  updateShapeStatus();
  renderShapeRecap();
  setRvDeckFace("rv-shape-face", rvShapes.deck.length - rvShapes.index, false);
  const store = loadRvStore();
  store.shapes.unshift({
    at: Date.now(),
    n,
    hits,
    z,
    lean,
    name: rvShapes.playerName || currentRvName(),
  });
  store.shapes = store.shapes.slice(0, RV_KEEP);
  saveRvStore(store);
  renderRvRecord();
}

function rebuildBlindMap() {
  const host = document.getElementById("rv-blind-map");
  if (!host) return;
  const palette = readColorPalette();
  host.replaceChildren();
  RV_BLIND_DIRS.forEach((item) => {
    const color = palette[item.index];
    const wrap = document.createElement("div");
    wrap.className = "rv-blind-key";
    wrap.dataset.dir = item.dir;
    const kicker = document.createElement("p");
    kicker.className = "rv-kicker";
    kicker.textContent = item.label;
    const swatch = document.createElement("span");
    swatch.className = "rv-blind-swatch";
    swatch.style.background = color ? color.hex : RV_COLOR_DEFAULTS[item.index];
    wrap.append(kicker, swatch);
    host.append(wrap);
  });
}

function blindModalEl() {
  return document.getElementById("rv-blind-modal");
}

function closeBlindModal() {
  const dialog = blindModalEl();
  if (!dialog) return;
  if (dialog.open) dialog.close();
  dialog.removeAttribute("open");
}

function paintBlindModal(hex) {
  const dialog = blindModalEl();
  if (!dialog) return;
  dialog.style.background = hex;
  dialog.style.color = inkForHex(hex);
  if (typeof dialog.showModal === "function") {
    if (!dialog.open) dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function setBlindPlayingUi(on) {
  const start = document.getElementById("rv-blind-start");
  const stop = document.getElementById("rv-blind-stop");
  if (start) {
    start.disabled = on ? true : !currentRvName();
    start.textContent = "Start";
  }
  if (stop) stop.hidden = !on;
  setColorPicksEnabled(!on && !rvColor.playing);
}

function updateBlindStatus() {
  const status = document.getElementById("rv-blind-status");
  if (!status) return;
  if (rvBlind.revealed) {
    status.textContent = "Run complete. Start for a new round.";
    return;
  }
  if (!rvBlind.playing) {
    status.textContent = currentRvName() ? "Start, then space for a color." : "Enter a name, then start.";
    return;
  }
  const left = Math.max(0, RV_BLIND_MAX - rvBlind.guesses.length);
  const waiting = rvBlind.actual != null && !rvBlind.guessed;
  status.textContent = waiting
    ? `${left} left · ${rvBlind.guesses.length} guessed · arrow to name it`
    : `${left} left · ${rvBlind.guesses.length} guessed · space for a color`;
}

function startBlindColor() {
  if (rvBlind.playing) return;
  const name = requireRvPlayer();
  if (!name) return;
  const palette = readColorPalette();
  const unique = new Set(palette.map((color) => color.hex.toLowerCase()));
  if (unique.size < 4) {
    const status = document.getElementById("rv-blind-status");
    if (status) status.textContent = "Pick four different colors, then start.";
    return;
  }
  saveColorPicks();
  rvBlind.playing = true;
  rvBlind.revealed = false;
  rvBlind.playerName = name;
  rvBlind.palette = palette;
  rvBlind.actual = null;
  rvBlind.guessed = false;
  rvBlind.guesses = [];
  const result = document.getElementById("rv-blind-result");
  if (result) result.textContent = "";
  const recap = document.getElementById("rv-blind-recap");
  if (recap) {
    recap.hidden = true;
    recap.replaceChildren();
  }
  const chart = document.getElementById("rv-blind-chart");
  if (chart) chart.hidden = true;
  setBlindPlayingUi(true);
  updateBlindStatus();
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
}

function speakBlindTrial(n) {
  if (!window.speechSynthesis || !n) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(String(n));
  utter.lang = "en-US";
  utter.rate = 1;
  utter.pitch = 1;
  window.speechSynthesis.speak(utter);
}

function nextBlindColor() {
  if (!rvBlind.playing || rvBlind.revealed) return;
  if (rvBlind.guesses.length >= RV_BLIND_MAX) {
    finishBlindColor();
    return;
  }
  const next = rvBlind.palette[randomBelow(rvBlind.palette.length)];
  rvBlind.actual = next ? next.id : null;
  rvBlind.guessed = false;
  paintBlindModal(next ? next.hex : "#041018");
  speakBlindTrial(rvBlind.guesses.length + 1);
  updateBlindStatus();
}

function guessBlindColor(index) {
  if (!rvBlind.playing || rvBlind.revealed || rvBlind.guessed) return;
  if (rvBlind.actual == null) return;
  const color = rvBlind.palette[index];
  if (!color) return;
  rvBlind.guesses.push({ guess: color.id, actual: rvBlind.actual });
  rvBlind.guessed = true;
  updateBlindStatus();
  if (rvBlind.guesses.length >= RV_BLIND_MAX) finishBlindColor();
}

function cancelBlindColor() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  if (!rvBlind.playing) {
    closeBlindModal();
    return;
  }
  rvBlind.playing = false;
  rvBlind.actual = null;
  rvBlind.guessed = false;
  closeBlindModal();
  setBlindPlayingUi(false);
  updateBlindStatus();
}

function renderBlindRecap() {
  const host = document.getElementById("rv-blind-recap");
  if (!host) return;
  host.replaceChildren();
  if (!rvBlind.revealed || !rvBlind.guesses.length) {
    host.hidden = true;
    return;
  }
  host.hidden = false;
  rvBlind.guesses.forEach((item) => {
    const actual = rvBlind.palette.find((color) => color.id === item.actual);
    const span = document.createElement("span");
    span.className = `rv-color-chip ${item.guess === item.actual ? "is-hit" : "is-miss"}`;
    span.style.background = actual ? actual.hex : "#163044";
    span.title = item.guess === item.actual ? "Hit" : "Miss";
    host.append(span);
  });
}

function drawBlindChart() {
  const canvas = document.getElementById("rv-blind-chart");
  if (!canvas || canvas.hidden) return;
  const sized = prepareCanvas(canvas, 200);
  if (!sized) return;
  const { ctx, cssW, cssH } = sized;
  const shown = [0, 0, 0, 0];
  const hits = [0, 0, 0, 0];
  rvBlind.guesses.forEach((item) => {
    const i = rvBlind.palette.findIndex((color) => color.id === item.actual);
    if (i < 0) return;
    shown[i] += 1;
    if (item.guess === item.actual) hits[i] += 1;
  });
  const padL = 8;
  const padR = 8;
  const padT = 18;
  const padB = 36;
  const innerW = cssW - padL - padR;
  const innerH = cssH - padT - padB;
  const max = Math.max(1, ...shown);
  const gap = 10;
  const barW = (innerW - gap * 3) / 4;
  const labels = ["Left", "Up", "Right", "Down"];

  ctx.textAlign = "center";
  for (let i = 0; i < 4; i += 1) {
    const x = padL + i * (barW + gap);
    const color = rvBlind.palette[i];
    const shownH = Math.max(shown[i] ? 10 : 0, (shown[i] / max) * innerH);
    const hitH = shown[i] ? Math.max(hits[i] ? 8 : 0, (hits[i] / max) * innerH) : 0;
    const yShown = padT + innerH - shownH;
    const yHit = padT + innerH - hitH;
    ctx.fillStyle = "rgba(126, 200, 212, 0.22)";
    ctx.beginPath();
    ctx.roundRect
      ? ctx.roundRect(x, yShown, barW, shownH, 6)
      : ctx.rect(x, yShown, barW, shownH);
    ctx.fill();
    if (hitH) {
      ctx.fillStyle = color ? color.hex : "#5eb8c8";
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(x, yHit, barW, hitH, 6) : ctx.rect(x, yHit, barW, hitH);
      ctx.fill();
    }
    ctx.fillStyle = "#d4eef4";
    ctx.font = "600 11px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.textBaseline = "bottom";
    if (shown[i]) ctx.fillText(`${hits[i]}/${shown[i]}`, x + barW / 2, yShown - 4);
    ctx.fillStyle = "#9bb4bc";
    ctx.font = "600 11px Palatino, \"Palatino Linotype\", serif";
    ctx.textBaseline = "top";
    ctx.fillText(labels[i], x + barW / 2, padT + innerH + 8);
  }
}

function playBlindBuzzer() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  const ctx = new AudioCtx();
  if (ctx.state === "suspended" && ctx.resume) ctx.resume();
  const now = ctx.currentTime;
  const rasp = (at, freq) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(freq, at);
    gain.gain.setValueAtTime(0.0001, at);
    gain.gain.exponentialRampToValueAtTime(0.16, at + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(at);
    osc.stop(at + 0.22);
  };
  rasp(now, 156);
  rasp(now + 0.24, 118);
  window.setTimeout(() => {
    if (ctx.close) ctx.close();
  }, 700);
}

function finishBlindColor() {
  if (!rvBlind.playing) return;
  const n = rvBlind.guesses.length;
  rvBlind.playing = false;
  rvBlind.revealed = true;
  rvBlind.actual = null;
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  closeBlindModal();
  setBlindPlayingUi(false);
  if (n) playBlindBuzzer();
  const hits = rvBlind.guesses.filter((item) => item.guess === item.actual).length;
  const result = document.getElementById("rv-blind-result");
  const chart = document.getElementById("rv-blind-chart");
  if (!n) {
    if (result) result.textContent = "No guesses this run.";
    if (chart) chart.hidden = true;
    updateBlindStatus();
    return;
  }
  const expected = n / 4;
  const z = rvZScore(hits, n, 0.25);
  const lean = rvLeanCopy(z, "the colors you named");
  if (result) {
    result.textContent = `${hits} of ${n} correct. Chance expects about ${expected.toFixed(0)}. z = ${formatRvZ(z)}. ${lean}`;
  }
  if (chart) chart.hidden = false;
  renderBlindRecap();
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(drawBlindChart);
  });
  const store = loadRvStore();
  if (!Array.isArray(store.blind)) store.blind = [];
  store.blind.unshift({
    at: Date.now(),
    n,
    hits,
    z,
    lean,
    name: rvBlind.playerName || currentRvName(),
  });
  store.blind = store.blind.slice(0, RV_KEEP);
  saveRvStore(store);
  renderRvRecord();
  updateBlindStatus();
}

function onBlindKey(event) {
  if (!rvBlind.playing) return;
  const tag = event.target && event.target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
  if (event.repeat) return;
  if (event.code === "Space" || event.key === " ") {
    event.preventDefault();
    nextBlindColor();
    return;
  }
  if (event.key === "Escape") {
    event.preventDefault();
    finishBlindColor();
    return;
  }
  const dir = RV_BLIND_DIRS.find((item) => item.key === event.key);
  if (!dir) return;
  event.preventDefault();
  guessBlindColor(dir.index);
}

function onBlindPad(event) {
  const btn = event.target.closest("[data-blind]");
  if (!btn) return;
  event.preventDefault();
  const which = btn.getAttribute("data-blind");
  if (which === "next") {
    nextBlindColor();
    return;
  }
  const dir = RV_BLIND_DIRS.find((item) => item.dir === which);
  if (dir) guessBlindColor(dir.index);
}

function formatTargetCode(raw) {
  const chars = String(raw || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 8);
  if (chars.length <= 4) return chars;
  return `${chars.slice(0, 4)}-${chars.slice(4)}`;
}

function isValidTargetCode(code) {
  return RV_CODE_RE.test(String(code || ""));
}

function randomTargetTetrad() {
  let out = "";
  for (let i = 0; i < 4; i += 1) out += RV_CODE_CHARS.charAt(randomBelow(RV_CODE_CHARS.length));
  return out;
}

function generateTargetCode() {
  return `${randomTargetTetrad()}-${randomTargetTetrad()}`;
}

function collectViewNotes() {
  const box = document.getElementById("rv-view-notes");
  if (!box) return [];
  return [...box.querySelectorAll(".rv-view-note")].map((row) => ({
    attr: (row.querySelector(".rv-view-attr")?.value || "").trim().slice(0, 40),
    text: (row.querySelector(".rv-view-text")?.value || "").trim().slice(0, 240),
  }));
}

function addViewNoteRow(note) {
  const box = document.getElementById("rv-view-notes");
  if (!box) return;
  const row = document.createElement("div");
  row.className = "rv-view-note";
  const attr = document.createElement("input");
  attr.className = "rv-view-attr";
  attr.type = "text";
  attr.maxLength = 40;
  attr.placeholder = "Attribute";
  attr.setAttribute("aria-label", "Attribute");
  attr.value = (note && note.attr) || "";
  const text = document.createElement("input");
  text.className = "rv-view-text";
  text.type = "text";
  text.maxLength = 240;
  text.placeholder = "Note";
  text.setAttribute("aria-label", "Note");
  text.value = (note && note.text) || "";
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "rv-view-remove";
  remove.setAttribute("aria-label", "Remove note");
  remove.textContent = "−";
  row.append(attr, text, remove);
  box.append(row);
  attr.focus();
}

function clearViewNotes() {
  const box = document.getElementById("rv-view-notes");
  if (box) box.replaceChildren();
}

function syncRvViewLive() {
  const live = document.getElementById("rv-view-live");
  if (!live) return;
  const name = currentRvName();
  const code = formatTargetCode(document.getElementById("rv-view-code")?.value);
  if (!name) {
    live.textContent = "Enter a name, then generate or type a target.";
    return;
  }
  if (!code) {
    live.textContent = "Generate a target, or type a code like A3K9-B7Q2.";
    return;
  }
  if (!isValidTargetCode(code)) {
    live.textContent = "Code needs four letters or digits, a hyphen, then four more.";
    return;
  }
  const notes = collectViewNotes().filter((note) => note.attr || note.text);
  live.textContent = notes.length
    ? `Target ${code} · ${notes.length} note${notes.length === 1 ? "" : "s"}.`
    : `Target ${code}. Add notes with +.`;
}

function persistCurrentTarget() {
  const name = currentRvName();
  const input = document.getElementById("rv-view-code");
  const code = formatTargetCode(input && input.value);
  if (!name || !isValidTargetCode(code)) return;
  const notes = collectViewNotes().map(cleanTargetNote).filter(Boolean);
  const store = loadRvStore();
  if (!Array.isArray(store.targets)) store.targets = [];
  const at = rvView.at || Date.now();
  rvView.at = at;
  const row = { at, code, notes, name };
  const index = store.targets.findIndex(
    (item) => item.at === at && rvNameKey(item.name) === rvNameKey(name)
  );
  if (index >= 0) store.targets[index] = row;
  else store.targets.unshift(row);
  store.targets = store.targets.slice(0, RV_KEEP);
  saveRvStore(store);
  fillRvPlayerNames();
  renderRvRecord();
  syncRvViewLive();
}

function persistCurrentTargetSoon() {
  if (rvView.persistTimer) window.clearTimeout(rvView.persistTimer);
  rvView.persistTimer = window.setTimeout(() => {
    rvView.persistTimer = 0;
    persistCurrentTarget();
  }, 280);
}

function onViewCodeInput(event) {
  const input = event.target;
  const before = input.value;
  const start = input.selectionStart;
  const formatted = formatTargetCode(before);
  if (formatted !== before) {
    input.value = formatted;
    const alnumBefore = before.slice(0, start).replace(/[^A-Za-z0-9]/g, "").length;
    let pos = alnumBefore;
    if (pos > 4) pos += 1;
    if (typeof input.setSelectionRange === "function") {
      input.setSelectionRange(pos, pos);
    }
  }
  if (!rvView.at && isValidTargetCode(formatted)) rvView.at = Date.now();
  persistCurrentTargetSoon();
  syncRvViewLive();
}

function generateViewTarget() {
  const name = requireRvPlayer();
  if (!name) return;
  if (rvView.persistTimer) {
    window.clearTimeout(rvView.persistTimer);
    rvView.persistTimer = 0;
  }
  persistCurrentTarget();
  const input = document.getElementById("rv-view-code");
  const code = generateTargetCode();
  rvView.at = Date.now();
  if (input) input.value = code;
  clearViewNotes();
  persistCurrentTarget();
  syncRvViewLive();
  if (input) input.focus();
}

function onViewNotesClick(event) {
  const remove = event.target.closest(".rv-view-remove");
  if (!remove) return;
  const row = remove.closest(".rv-view-note");
  if (row) row.remove();
  persistCurrentTargetSoon();
  syncRvViewLive();
}

function onViewNotesInput() {
  persistCurrentTargetSoon();
  syncRvViewLive();
}

function addViewNote() {
  addViewNoteRow();
  persistCurrentTargetSoon();
  syncRvViewLive();
}

function setBestText(id, text) {
  const el = document.getElementById(id);
  if (!el) return;
  el.hidden = !text;
  el.textContent = text || "";
}

function runsForPlayer(rows, name) {
  const key = rvNameKey(name);
  if (!key) return [];
  return (rows || []).filter((row) => rvNameKey(row.name) === key);
}

function renderRvBests(store) {
  const name = currentRvName();
  if (!name) {
    setBestText("rv-skew-best", "");
    setBestText("rv-color-best", "");
    setBestText("rv-blind-best", "");
    setBestText("rv-shape-best", "");
    setBestText("rv-record-bests", "");
    return;
  }
  const skewBest = bestRun(runsForPlayer(store.skew, name));
  const colorBest = bestRun(runsForPlayer(store.colors, name));
  const blindBest = bestRun(runsForPlayer(store.blind, name));
  const shapeBest = bestRun(runsForPlayer(store.shapes, name));
  setBestText(
    "rv-skew-best",
    skewBest
      ? `Best for ${name}: z ${formatRvZ(skewBest.z)} · target ${skewBest.target}${
          skewBest.rank ? ` ranked ${ordinalRank(skewBest.rank)}` : ""
        }`
      : ""
  );
  setBestText(
    "rv-color-best",
    colorBest ? `Best for ${name}: ${colorBest.hits} of ${colorBest.n} · z ${formatRvZ(colorBest.z)}` : ""
  );
  setBestText(
    "rv-blind-best",
    blindBest ? `Best for ${name}: ${blindBest.hits} of ${blindBest.n} · z ${formatRvZ(blindBest.z)}` : ""
  );
  setBestText(
    "rv-shape-best",
    shapeBest ? `Best for ${name}: ${shapeBest.hits} of ${shapeBest.n} · z ${formatRvZ(shapeBest.z)}` : ""
  );
  const bits = [];
  if (skewBest) {
    bits.push(
      `Number skew z ${formatRvZ(skewBest.z)}${
        skewBest.rank ? ` · ${ordinalRank(skewBest.rank)}` : ""
      }`
    );
  }
  if (colorBest) bits.push(`Color deck ${colorBest.hits} of ${colorBest.n} · z ${formatRvZ(colorBest.z)}`);
  if (blindBest) bits.push(`Blind color ${blindBest.hits} of ${blindBest.n} · z ${formatRvZ(blindBest.z)}`);
  if (shapeBest) bits.push(`Shapes deck ${shapeBest.hits} of ${shapeBest.n} · z ${formatRvZ(shapeBest.z)}`);
  setBestText(
    "rv-record-bests",
    bits.length ? `Best for ${name}: ${bits.join(". ")}.` : ""
  );
}

function renderRvRecord() {
  const list = document.getElementById("rv-record");
  const empty = document.getElementById("rv-record-empty");
  if (!list || !empty) return;
  const store = loadRvStore();
  renderRvBests(store);
  const rows = [
    ...store.skew.map((row) => ({
      at: row.at,
      title: `${row.name ? `${row.name} · ` : ""}Number skew · target ${row.target} · ${row.hits.toLocaleString()} of ${row.n.toLocaleString()} · z ${formatRvZ(row.z)}${
        row.rank ? ` · ${ordinalRank(row.rank)}` : ""
      }`,
      body: row.lean,
    })),
    ...store.colors.map((row) => ({
      at: row.at,
      title: `${row.name ? `${row.name} · ` : ""}Color deck · ${row.hits} of ${row.n} · z ${formatRvZ(row.z)}`,
      body: row.lean,
    })),
    ...(store.blind || []).map((row) => ({
      at: row.at,
      title: `${row.name ? `${row.name} · ` : ""}Blind color · ${row.hits} of ${row.n} · z ${formatRvZ(row.z)}`,
      body: row.lean,
    })),
    ...(store.shapes || []).map((row) => ({
      at: row.at,
      title: `${row.name ? `${row.name} · ` : ""}Shapes deck · ${row.hits} of ${row.n} · z ${formatRvZ(row.z)}`,
      body: row.lean,
    })),
    ...(store.targets || []).map((row) => ({
      at: row.at,
      title: `${row.name ? `${row.name} · ` : ""}Remote View · ${row.code}${
        row.notes && row.notes.length
          ? ` · ${row.notes.length} note${row.notes.length === 1 ? "" : "s"}`
          : ""
      }`,
      body: (row.notes || [])
        .map((note) => (note.attr && note.text ? `${note.attr}: ${note.text}` : note.attr || note.text))
        .join(" · "),
    })),
  ].sort((a, b) => b.at - a.at);
  list.replaceChildren();
  empty.hidden = rows.length > 0;
  rows.slice(0, 12).forEach((row) => {
    const li = document.createElement("li");
    const title = document.createElement("span");
    title.textContent = row.title;
    const body = document.createElement("small");
    body.textContent = row.body;
    li.append(title, body);
    list.append(li);
  });
}

document.getElementById("rv-skew-start")?.addEventListener("click", startSkewRun);
document.getElementById("rv-color-start")?.addEventListener("click", startColorDeck);
document.getElementById("rv-color-results")?.addEventListener("click", showColorResults);
document.getElementById("rv-color-picks")?.addEventListener("change", saveColorPicks);
document.getElementById("rv-shape-start")?.addEventListener("click", startShapeDeck);
document.getElementById("rv-shape-results")?.addEventListener("click", showShapeResults);
document.getElementById("rv-blind-start")?.addEventListener("click", startBlindColor);
document.getElementById("rv-blind-stop")?.addEventListener("click", finishBlindColor);
document.getElementById("rv-blind-modal")?.addEventListener("click", onBlindPad);
document.getElementById("rv-blind-modal")?.addEventListener("cancel", (event) => {
  event.preventDefault();
  finishBlindColor();
});
window.addEventListener("keydown", onBlindKey, true);
document.getElementById("rv-player-name")?.addEventListener("input", syncRvPlayerLock);
document.getElementById("rv-player-name")?.addEventListener("change", syncRvPlayerLock);
document.getElementById("rv-clear-scores")?.addEventListener("click", clearRvScores);
document.getElementById("rv-view-generate")?.addEventListener("click", generateViewTarget);
document.getElementById("rv-view-code")?.addEventListener("input", onViewCodeInput);
document.getElementById("rv-view-add-note")?.addEventListener("click", addViewNote);
document.getElementById("rv-view-notes")?.addEventListener("click", onViewNotesClick);
document.getElementById("rv-view-notes")?.addEventListener("input", onViewNotesInput);

(function boot() {
  const store = loadStore();
  saveStore(store);
  showGate();
})();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
