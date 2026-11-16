const DECK_CARDS = [
  {
    "name": "The Fool",
    "image": "cards/00_Fool.jpg",
    "meaning": "New beginnings, optimism, trust in life",
    "element": "Air",
    "zodiac": "Uranus",
    "yesNo": "Yes",
    "significant": [
      "The Fool",
      "The White Rose",
      "The Cliff"
    ],
    "months": "N/A"
  },
  {
    "name": "The Magician",
    "image": "cards/01_Magician.jpg",
    "meaning": "Manifestation, resourcefulness, power",
    "element": "Fire",
    "zodiac": "Mercury",
    "yesNo": "Yes",
    "significant": [
      "The Magician",
      "The Wand",
      "The Infinity Symbol"
    ],
    "months": "March"
  },
  {
    "name": "The High Priestess",
    "image": "cards/02_HighPriestess.jpg",
    "meaning": "Intuition, sacred knowledge, divine feminine",
    "element": "Water",
    "zodiac": "Moon",
    "yesNo": "No",
    "significant": [
      "The High Priestess",
      "The Pillars",
      "The Crescent Moon"
    ],
    "months": "February"
  },
  {
    "name": "The Empress",
    "image": "cards/03_Empress.jpg",
    "meaning": "Abundance, nurturing, fertility, life",
    "element": "Earth",
    "zodiac": "Venus",
    "yesNo": "Yes",
    "significant": [
      "The Empress",
      "The Crown",
      "The Heart"
    ],
    "months": "May"
  },
  {
    "name": "The Emperor",
    "image": "cards/04_Emperor.jpg",
    "meaning": "Authority, establishment, structure, a father figure",
    "element": "Fire",
    "zodiac": "Aries",
    "yesNo": "No",
    "significant": [
      "The Emperor",
      "The Ankh",
      "The Rams"
    ],
    "months": "April"
  },
  {
    "name": "The Hierophant",
    "image": "cards/05_Hierophant.jpg",
    "meaning": "Tradition, conformity, morality, ethics",
    "element": "Earth",
    "zodiac": "Taurus",
    "yesNo": "No",
    "significant": [
      "The Hierophant",
      "The Staff",
      "The Keys"
    ],
    "months": "December"
  },
  {
    "name": "The Lovers",
    "image": "cards/06_Lovers.jpg",
    "meaning": "Love, harmony, relationships, values alignment, choices",
    "element": "Air",
    "zodiac": "Gemini",
    "yesNo": "Maybe",
    "significant": [
      "The Lovers",
      "The Apple",
      "The Serpent"
    ],
    "months": "June"
  },
  {
    "name": "The Chariot",
    "image": "cards/07_Chariot.jpg",
    "meaning": "Control, willpower, success, action, determination",
    "element": "Water",
    "zodiac": "Cancer",
    "yesNo": "Yes",
    "significant": [
      "The Chariot",
      "The Canopy",
      "The Sphinxes"
    ],
    "months": "July"
  },
  {
    "name": "Strength",
    "image": "cards/08_Strength.jpg",
    "meaning": "Inner strength, bravery, compassion, focus",
    "element": "Fire",
    "zodiac": "Leo",
    "yesNo": "Yes",
    "significant": [
      "Strength",
      "The Lion",
      "The Infinity Symbol"
    ],
    "months": "August"
  },
  {
    "name": "The Hermit",
    "image": "cards/09_Hermit.jpg",
    "meaning": "Soul-searching, introspection, solitude, guidance",
    "element": "Earth",
    "zodiac": "Virgo",
    "yesNo": "No",
    "significant": [
      "The Lantern",
      "The Snowy Mountain",
      "The Staff"
    ],
    "months": "September"
  },
  {
    "name": "Wheel of Fortune",
    "image": "cards/10_Wheel_of_Fortune.jpg",
    "meaning": "Cycles, change, ups and downs, fate",
    "element": "Fire",
    "zodiac": "Jupiter",
    "yesNo": "Maybe",
    "significant": [
      "The Wheel",
      "The Sphinx",
      "The Snake"
    ],
    "months": "October"
  },
  {
    "name": "Justice",
    "image": "cards/11_Justice.jpg",
    "meaning": "Fairness, balance, truth, cause and effect",
    "element": "Air",
    "zodiac": "Libra",
    "yesNo": "Yes",
    "significant": [
      "The Sword",
      "The Scales",
      "The Pillars"
    ],
    "months": "late September through October"
  },
  {
    "name": "The Hanged Man",
    "image": "cards/12_Hanged_Man.jpg",
    "meaning": "Surrender, release, martyrdom, perspective",
    "element": "Water",
    "zodiac": "Neptune",
    "yesNo": "No",
    "significant": [
      "The Hanged Man",
      "The Nimbus",
      "The Suspension"
    ],
    "months": "November"
  },
  {
    "name": "Death",
    "image": "cards/13_Death.jpg",
    "meaning": "Endings, transformation, change, renewal",
    "element": "Water",
    "zodiac": "Scorpio",
    "yesNo": "No",
    "significant": [
      "The Skeleton",
      "The Sun",
      "The Priest"
    ],
    "months": "late October through November"
  },
  {
    "name": "Temperance",
    "image": "cards/14_Temperance.jpg",
    "meaning": "Moderation, harmony, balance, healing",
    "element": "Fire",
    "zodiac": "Sagittarius",
    "yesNo": "Yes",
    "significant": [
      "The Angel",
      "The Sun",
      "The Cups"
    ],
    "months": "late November through December"
  },
  {
    "name": "The Devil",
    "image": "cards/15_Devil.jpg",
    "meaning": "Materialism, ego, attachment, addiction",
    "element": "Earth",
    "zodiac": "Capricorn",
    "yesNo": "No",
    "significant": [
      "The Chains",
      "The Horns",
      "The Fruit"
    ],
    "months": "late December through January"
  },
  {
    "name": "The Tower",
    "image": "cards/16_Tower.jpg",
    "meaning": "Sudden change, upheaval, chaos, revelation, awakening, liberation",
    "element": "Fire",
    "zodiac": "Mars",
    "yesNo": "No",
    "significant": [
      "The Tower",
      "The Lightning",
      "The Crown"
    ],
    "months": "N/A"
  },
  {
    "name": "The Star",
    "image": "cards/17_Star.jpg",
    "meaning": "Hope, inspiration, serenity, guidance, optimism, spirituality, ET's, Higher Spiritual Beings",
    "element": "Air",
    "zodiac": "Aquarius",
    "yesNo": "Yes",
    "significant": [
      "The Star",
      "The Water",
      "The Land"
    ],
    "months": "January"
  },
  {
    "name": "The Moon",
    "image": "cards/18_Moon.jpg",
    "meaning": "Intuition, mystery, illusion, subconscious, emotions, cycles",
    "element": "Water",
    "zodiac": "Pisces",
    "yesNo": "No",
    "significant": [
      "The Moon",
      "The Dog",
      "The Lobster"
    ],
    "months": "February"
  },
  {
    "name": "The Sun",
    "image": "cards/19_Sun.jpg",
    "meaning": "Joy, success, positivity, vitality, confidence, clarity",
    "element": "Fire",
    "zodiac": "Leo",
    "yesNo": "Yes",
    "significant": [
      "The Sun",
      "The Sunflowers",
      "The Wall"
    ],
    "months": "July"
  },
  {
    "name": "Judgement",
    "image": "cards/20_Judgement.jpg",
    "meaning": "Rebirth, renewal, judgement, forgiveness, transformation, awakening",
    "element": "Ether",
    "zodiac": "Scorpio",
    "yesNo": "Yes",
    "significant": [
      "The Angel",
      "The Trumpet",
      "The Coffins"
    ],
    "months": "N/A"
  },
  {
    "name": "The World",
    "image": "cards/21_World.jpg",
    "meaning": "Completion, wholeness, fulfillment, travel, accomplishment, expansion",
    "element": "Earth",
    "zodiac": "Saturn",
    "yesNo": "Yes",
    "significant": [
      "The Four Creatures",
      "The Wreath",
      "The Dancing Figure"
    ],
    "months": "December"
  },
  {
    "name": "Ace of Wands",
    "image": "cards/Wands01.jpg",
    "meaning": "New beginnings, inspiration, potential, growth",
    "element": "Fire",
    "zodiac": "",
    "yesNo": "Yes",
    "significant": [
      "The Hand",
      "The Wand",
      "The Leaves"
    ],
    "months": "N/A"
  },
  {
    "name": "2 of Wands",
    "image": "cards/Wands02.jpg",
    "meaning": "Planning, preparation, decisions, partnerships",
    "element": "Fire",
    "zodiac": "",
    "yesNo": "Maybe",
    "significant": [
      "The Globe",
      "The Wand",
      "The Figure"
    ],
    "months": "March 21 - April 19"
  },
  {
    "name": "3 of Wands",
    "image": "cards/Wands03.jpg",
    "meaning": "Expansion, progress, opportunity, foresight",
    "element": "Fire",
    "zodiac": "",
    "yesNo": "Yes",
    "significant": [
      "The Three Wands",
      "The Ocean",
      "The Figure"
    ],
    "months": "March 21 - April 19"
  },
  {
    "name": "4 of Wands",
    "image": "cards/Wands04.jpg",
    "meaning": "Celebration, harmony, community, homecoming, stability",
    "element": "Fire",
    "zodiac": "Aries",
    "yesNo": "Yes",
    "significant": [
      "The Flowering Wands",
      "The Dancing Figures"
    ],
    "months": "March 21 - April 19"
  },
  {
    "name": "5 of Wands",
    "image": "cards/Wands05.jpg",
    "meaning": "Competition, conflict, struggle, ambition, challenge",
    "element": "Fire",
    "zodiac": "Leo",
    "yesNo": "No",
    "significant": [
      "The Crossed Wands",
      "The Churning Sky"
    ],
    "months": "July 23 - August 22"
  },
  {
    "name": "6 of Wands",
    "image": "cards/Wands06.jpg",
    "meaning": "Victory, success, recognition, leadership, achievement",
    "element": "Fire",
    "zodiac": "Jupiter",
    "yesNo": "Yes",
    "significant": [
      "The Triumphal Entry"
    ],
    "months": "July 23 - August 22"
  },
  {
    "name": "7 of Wands",
    "image": "cards/Wands07.jpg",
    "meaning": "Challenge, perseverance, defensiveness, competition, courage",
    "element": "Fire",
    "zodiac": "Mars",
    "yesNo": "No",
    "significant": [
      "The Battleground",
      "The Raised Wand"
    ],
    "months": "July 23 - August 22"
  },
  {
    "name": "8 of Wands",
    "image": "cards/Wands08.jpg",
    "meaning": "Swift action, quick decisions, sudden change, progress, movement, momentum",
    "element": "Fire",
    "zodiac": "Mercury",
    "yesNo": "Yes",
    "significant": [
      "Arrows",
      "Speed",
      "Quick Decisions"
    ],
    "months": "November 22 - December 21"
  },
  {
    "name": "9 of Wands",
    "image": "cards/Wands09.jpg",
    "meaning": "Perseverance, stamina, resilience, caution, guardedness, holding the line",
    "element": "Fire",
    "zodiac": "Moon",
    "yesNo": "No",
    "significant": [
      "Wounded Warrior",
      "Guardedness",
      "Perseverance"
    ],
    "months": "November 22 - December 21"
  },
  {
    "name": "10 of Wands",
    "image": "cards/Wands10.jpg",
    "meaning": "Overburdened, overwhelmed, stress, taking on too much, responsibility, duty",
    "element": "Fire",
    "zodiac": "Saturn",
    "yesNo": "No",
    "significant": [
      "Burden",
      "Overwork",
      "Responsibility"
    ],
    "months": "November 22 - December 21"
  },
  {
    "name": "Page of Wands",
    "image": "cards/Wands11.jpg",
    "meaning": "Enthusiasm, curiosity, exploration, learning, energy",
    "element": "Fire",
    "zodiac": "Leo, Aries, Sagittarius",
    "yesNo": "Yes",
    "significant": [
      "Messenger",
      "Passion",
      "New Beginnings"
    ],
    "months": "N/A"
  },
  {
    "name": "Knight of Wands",
    "image": "cards/Wands12.jpg",
    "meaning": "Action, adventure, risk-taking, passion, energy",
    "element": "Fire",
    "zodiac": "Leo, Aries, Sagittarius",
    "yesNo": "Yes",
    "significant": [
      "Journey",
      "Adventurer",
      "Risk-taker"
    ],
    "months": "N/A"
  },
  {
    "name": "Queen of Wands",
    "image": "cards/Wands13.jpg",
    "meaning": "Confidence, creativity, energy, passion, independence",
    "element": "Fire",
    "zodiac": "Leo, Aries, Sagittarius",
    "yesNo": "Yes",
    "significant": [
      "Charisma",
      "Magnetism",
      "Leadership"
    ],
    "months": "N/A"
  },
  {
    "name": "King of Wands",
    "image": "cards/Wands14.jpg",
    "meaning": "Leadership, vision, charisma, energy, passion",
    "element": "Fire",
    "zodiac": "Leo, Aries, Sagittarius",
    "yesNo": "Yes",
    "significant": [
      "Leadership",
      "Strength",
      "Vision"
    ],
    "months": "N/A"
  },
  {
    "name": "Ace of Cups",
    "image": "cards/Cups01.jpg",
    "meaning": "New beginnings, emotions, love, happiness, intuition, creative potential",
    "element": "Water",
    "zodiac": "Pisces",
    "yesNo": "Yes",
    "significant": [
      "Chalice",
      "Water",
      "Dove"
    ],
    "months": "N/A"
  },
  {
    "name": "2 of Cups",
    "image": "cards/Cups02.jpg",
    "meaning": "Connection, partnership, attraction, harmony, balance, love",
    "element": "Water",
    "zodiac": "Venus",
    "yesNo": "Yes",
    "significant": [
      "The Two Cups",
      "The Caduceus",
      "The Lion-Headed Eagle"
    ],
    "months": "June 21 - July 22"
  },
  {
    "name": "3 of Cups",
    "image": "cards/Cups03.jpg",
    "meaning": "Celebration, friendship, joy, creativity, abundance, collaboration",
    "element": "Water",
    "zodiac": "Mercury",
    "yesNo": "Yes",
    "significant": [
      "The Three Cups",
      "The Dancing Figures",
      "The Fruitful Vine"
    ],
    "months": "June 21 - July 22"
  },
  {
    "name": "4 of Cups",
    "image": "cards/Cups04.jpg",
    "meaning": "Apathy, discontentment, missed opportunity, introspection, contemplation, re-evaluation",
    "element": "Water",
    "zodiac": "Moon",
    "yesNo": "No",
    "significant": [
      "The Four Cups",
      "The Cloud",
      "The Hand of God"
    ],
    "months": "June 21 - July 22"
  },
  {
    "name": "5 of Cups",
    "image": "cards/Cups05.jpg",
    "meaning": "Loss, disappointment, grief, emotional pain, regret, mourning",
    "element": "Water",
    "zodiac": "Mars",
    "yesNo": "No",
    "significant": [
      "The Five Cups",
      "The Broken Cups",
      "The Black Cloak"
    ],
    "months": "October 23 - November 21"
  },
  {
    "name": "6 of Cups",
    "image": "cards/Cups06.jpg",
    "meaning": "Nostalgia, memories, childhood, innocence, reunion, old friends",
    "element": "Water",
    "zodiac": "Sun",
    "yesNo": "Yes",
    "significant": [
      "Children",
      "Flowers",
      "Fountain"
    ],
    "months": "October 23 - November 21"
  },
  {
    "name": "7 of Cups",
    "image": "cards/Cups07.jpg",
    "meaning": "Choices, illusions, opportunities, dreams, desires",
    "element": "Water",
    "zodiac": "Venus",
    "yesNo": "Maybe",
    "significant": [
      "Castle",
      "Crown",
      "Cup"
    ],
    "months": "October 23 - November 21"
  },
  {
    "name": "8 of Cups",
    "image": "cards/Cups08.jpg",
    "meaning": "Leaving, moving on, walking away, seeking a deeper meaning",
    "element": "Water",
    "zodiac": "Saturn",
    "yesNo": "No",
    "significant": [
      "Mountain",
      "Cloak",
      "Staff"
    ],
    "months": "February 19 - March 20"
  },
  {
    "name": "9 of Cups",
    "image": "cards/Cups09.jpg",
    "meaning": "Happiness, satisfaction, contentment, emotional fulfillment, wish granted",
    "element": "Water",
    "zodiac": "Jupiter",
    "yesNo": "Yes",
    "significant": [
      "Wine",
      "Chairs",
      "Arch"
    ],
    "months": "February 19 - March 20"
  },
  {
    "name": "10 of Cups",
    "image": "cards/Cups10.jpg",
    "meaning": "Joy, emotional harmony, family, home, unity, happy ending",
    "element": "Water",
    "zodiac": "Mars",
    "yesNo": "Yes",
    "significant": [
      "Rainbow",
      "Couple",
      "Children"
    ],
    "months": "February 19 - March 20"
  },
  {
    "name": "Page of Cups",
    "image": "cards/Cups11.jpg",
    "meaning": "New beginnings, creativity, intuition, messages",
    "element": "Water",
    "zodiac": "Pisces",
    "yesNo": "Yes",
    "significant": [
      "The Fish",
      "The Page's Garb and Pose",
      "The Ocean"
    ],
    "months": "N/A"
  },
  {
    "name": "Knight of Cups",
    "image": "cards/Cups12.jpg",
    "meaning": "Romance, charm, creativity, intuition",
    "element": "Water",
    "zodiac": "Scorpio",
    "yesNo": "Yes",
    "significant": [
      "The Horse",
      "The Ocean",
      "The Knight's Pose"
    ],
    "months": "N/A"
  },
  {
    "name": "Queen of Cups",
    "image": "cards/Cups13.jpg",
    "meaning": "Compassion, nurturing, intuition, emotional stability",
    "element": "Water",
    "zodiac": "Cancer",
    "yesNo": "Yes",
    "significant": [
      "The Cup",
      "The Ocean",
      "The Queen's Crown"
    ],
    "months": "N/A"
  },
  {
    "name": "King of Cups",
    "image": "cards/Cups14.jpg",
    "meaning": "Compassion, control, balance, emotional stability",
    "element": "Water",
    "zodiac": "Scorpio",
    "yesNo": "Yes",
    "significant": [
      "The Cup",
      "The Ocean",
      "The King's Crown"
    ],
    "months": "N/A"
  },
  {
    "name": "Ace of Swords",
    "image": "cards/Swords01.jpg",
    "meaning": "Clarity, breakthrough, mental clarity, truth, justice, sharpness",
    "element": "Air",
    "zodiac": "Aquarius",
    "yesNo": "Yes",
    "significant": [
      "Sword",
      "Crown",
      "Wreath",
      "Hand emerging from cloud"
    ],
    "months": "N/A"
  },
  {
    "name": "2 of Swords",
    "image": "cards/Swords02.jpg",
    "meaning": "Difficult decisions, stalemate, impasse",
    "element": "Air",
    "zodiac": "Moon",
    "yesNo": "No",
    "significant": [
      "Blindfold",
      "Moon",
      "The Sea"
    ],
    "months": "September 23 - October 22"
  },
  {
    "name": "3 of Swords",
    "image": "cards/Swords03.jpg",
    "meaning": "Heartbreak, betrayal, emotional pain",
    "element": "Air",
    "zodiac": "Saturn",
    "yesNo": "No",
    "significant": [
      "Swords",
      "Heart pierced by swords",
      "Rain"
    ],
    "months": "September 23 - October 22"
  },
  {
    "name": "4 of Swords",
    "image": "cards/Swords04.jpg",
    "meaning": "Rest, solitude, introspection",
    "element": "Air",
    "zodiac": "Jupiter",
    "yesNo": "No",
    "significant": [
      "Swords",
      "Knight's tomb",
      "Stained glass window"
    ],
    "months": "September 23 - October 22"
  },
  {
    "name": "5 of Swords",
    "image": "cards/Swords05.jpg",
    "meaning": "Defeat, loss, conflict",
    "element": "Air",
    "zodiac": "Venus",
    "yesNo": "No",
    "significant": [
      "Swords",
      "Victorious swordsman",
      "Three swords on the ground"
    ],
    "months": "January 20 - February 18"
  },
  {
    "name": "6 of Swords",
    "image": "cards/Swords06.jpg",
    "meaning": "Transition, progress, leaving the past behind, moving on, travel",
    "element": "Air",
    "zodiac": "Mercury",
    "yesNo": "Maybe",
    "significant": [
      "Boat",
      "Six Swords",
      "Two Passengers",
      "Water"
    ],
    "months": "January 20 - February 18"
  },
  {
    "name": "7 of Swords",
    "image": "cards/Swords07.jpg",
    "meaning": "Deception, betrayal, theft, secrecy, strategy",
    "element": "Air",
    "zodiac": "Moon",
    "yesNo": "No",
    "significant": [
      "Seven Swords",
      "Thief",
      "Tent"
    ],
    "months": "January 20 - February 18"
  },
  {
    "name": "8 of Swords",
    "image": "cards/Swords08.jpg",
    "meaning": "Limitations, entrapment, fear, self-imposed restrictions, feeling stuck",
    "element": "Air",
    "zodiac": "Jupiter",
    "yesNo": "No",
    "significant": [
      "Eight Swords",
      "Blindfolded Woman",
      "Swords in Formation"
    ],
    "months": "May 21 - June 20"
  },
  {
    "name": "9 of Swords",
    "image": "cards/Swords09.jpg",
    "meaning": "Anxiety, fear, despair, nightmares, depression, guilt, mental anguish",
    "element": "Air",
    "zodiac": "Mars",
    "yesNo": "No",
    "significant": [
      "The Sleeping Figure",
      "The Swords",
      "The Pillow"
    ],
    "months": "May 21 - June 20"
  },
  {
    "name": "10 of Swords",
    "image": "cards/Swords10.jpg",
    "meaning": "Endings, betrayal, backstabbing, collapse, ruin, failure, defeat",
    "element": "Air",
    "zodiac": "Sun",
    "yesNo": "No",
    "significant": [
      "The Ten Swords",
      "The Dead Figure",
      "The Red Sky"
    ],
    "months": "May 21 - June 20"
  },
  {
    "name": "Page of Swords",
    "image": "cards/Swords11.jpg",
    "meaning": "Curiosity, new ideas, mental energy, restlessness, exploration",
    "element": "Air",
    "zodiac": "Gemini",
    "yesNo": "Yes",
    "significant": [
      "Feather",
      "Clouds",
      "Yellow Tunic"
    ],
    "months": "N/A"
  },
  {
    "name": "Knight of Swords",
    "image": "cards/Swords12.jpg",
    "meaning": "Action, ambition, drive, determination, impulsiveness",
    "element": "Air",
    "zodiac": "Aquarius",
    "yesNo": "Yes",
    "significant": [
      "Sword",
      "Armor",
      "Clouds"
    ],
    "months": "N/A"
  },
  {
    "name": "Queen of Swords",
    "image": "cards/Swords13.jpg",
    "meaning": "Independence, intelligence, perceptiveness, detachment, objectivity",
    "element": "Air",
    "zodiac": "Libra",
    "yesNo": "No",
    "significant": [
      "Sword",
      "Throne",
      "Clouds"
    ],
    "months": "N/A"
  },
  {
    "name": "King of Swords",
    "image": "cards/Swords14.jpg",
    "meaning": "Authority, clarity, truth, justice, intellectual power",
    "element": "Air",
    "zodiac": "Aquarius",
    "yesNo": "Yes",
    "significant": [
      "Sword",
      "Throne",
      "Clouds"
    ],
    "months": "N/A"
  },
  {
    "name": "Ace of Pentacles",
    "image": "cards/Pents01.jpg",
    "meaning": "New financial opportunity, material prosperity, abundance, manifestation of goals.",
    "element": "Earth",
    "zodiac": "Capricorn",
    "yesNo": "Yes",
    "significant": [
      "Hand",
      "Garden"
    ],
    "months": "N/A"
  },
  {
    "name": "2 of Pentacles",
    "image": "cards/Pents02.jpg",
    "meaning": "Balance, adaptability, juggling multiple priorities, handling challenges with ease, embracing change, flexibility, finding creative solutions",
    "element": "Earth",
    "zodiac": "Jupiter",
    "yesNo": "Maybe",
    "significant": [
      "Juggling",
      "Rope",
      "Ship"
    ],
    "months": "December 22 - January 19"
  },
  {
    "name": "3 of Pentacles",
    "image": "cards/Pents03.jpg",
    "meaning": "Collaboration, teamwork, learning from experts, mastering a craft, attention to detail, quality work, recognition of skills",
    "element": "Earth",
    "zodiac": "Mars",
    "yesNo": "Yes",
    "significant": [
      "Masonry",
      "Trade",
      "Learning"
    ],
    "months": "December 22 - January 19"
  },
  {
    "name": "4 of Pentacles",
    "image": "cards/Pents04.jpg",
    "meaning": "Security, stability, holding onto resources, fear of loss, possessiveness, controlling behavior, greed",
    "element": "Earth",
    "zodiac": "Sun",
    "yesNo": "No",
    "significant": [
      "Coins",
      "Crown",
      "Attendants"
    ],
    "months": "December 22 - January 19"
  },
  {
    "name": "5 of Pentacles",
    "image": "cards/Pents05.jpg",
    "meaning": "Hardship, poverty, financial loss, illness, loneliness, isolation, seeking help, community support",
    "element": "Earth",
    "zodiac": "Mercury",
    "yesNo": "No",
    "significant": [
      "Beggars",
      "Cold Weather",
      "Lantern"
    ],
    "months": "April 20 - May 20"
  },
  {
    "name": "6 of Pentacles",
    "image": "cards/Pents06.jpg",
    "meaning": "Charity, generosity, sharing wealth, receiving help from others.",
    "element": "Earth",
    "zodiac": "Taurus",
    "yesNo": "Yes",
    "significant": [
      "Gifts",
      "Help"
    ],
    "months": "April 20 - May 20"
  },
  {
    "name": "7 of Pentacles",
    "image": "cards/Pents07.jpg",
    "meaning": "Growth, patience, hard work, perseverance, reaping rewards.",
    "element": "Earth",
    "zodiac": "Saturn",
    "yesNo": "Yes",
    "significant": [
      "Growth",
      "Harvest"
    ],
    "months": "April 20 - May 20"
  },
  {
    "name": "8 of Pentacles",
    "image": "cards/Pents08.jpg",
    "meaning": "Dedication, craftsmanship, hard work, apprenticeship, honing skills.",
    "element": "Earth",
    "zodiac": "Sun",
    "yesNo": "Yes",
    "significant": [
      "Craftsmanship",
      "Skills"
    ],
    "months": "August 23 - September 22"
  },
  {
    "name": "9 of Pentacles",
    "image": "cards/Pents09.jpg",
    "meaning": "Independence, self-sufficiency, luxury, financial security, enjoying the fruits of labor.",
    "element": "Earth",
    "zodiac": "Virgo",
    "yesNo": "Yes",
    "significant": [
      "Luxury",
      "Wealth"
    ],
    "months": "August 23 - September 22"
  },
  {
    "name": "10 of Pentacles",
    "image": "cards/Pents10.jpg",
    "meaning": "Legacy, family, inheritance, wealth, financial stability.",
    "element": "Earth",
    "zodiac": "Mercury",
    "yesNo": "Yes",
    "significant": [
      "Inheritance",
      "Family"
    ],
    "months": "August 23 - September 22"
  },
  {
    "name": "Page of Pentacles",
    "image": "cards/Pents11.jpg",
    "meaning": "Opportunities for new financial ventures or educational pursuits. The beginnings of a practical project. Hard work and dedication will pay off.",
    "element": "Earth",
    "zodiac": "Capricorn, Taurus, Virgo",
    "yesNo": "Yes",
    "significant": [
      "Scholarship",
      "Responsibility",
      "New Career"
    ],
    "months": "N/A"
  },
  {
    "name": "Knight of Pentacles",
    "image": "cards/Pents12.jpg",
    "meaning": "A methodical and diligent approach to work, which will lead to success. A dependable and reliable person who takes responsibility seriously.",
    "element": "Earth",
    "zodiac": "Capricorn, Taurus, Virgo",
    "yesNo": "Yes",
    "significant": [
      "Steadfastness",
      "Reliability",
      "Commitment"
    ],
    "months": "N/A"
  },
  {
    "name": "Queen of Pentacles",
    "image": "cards/Pents13.jpg",
    "meaning": "A nurturing and caring person who is financially stable and able to create a comfortable home environment. A practical and down-to-earth approach to life.",
    "element": "Earth",
    "zodiac": "Capricorn, Taurus, Virgo",
    "yesNo": "Yes",
    "significant": [
      "Nurturing",
      "Practicality",
      "Security"
    ],
    "months": "N/A"
  },
  {
    "name": "King of Pentacles",
    "image": "cards/Pents14.jpg",
    "meaning": "A wealthy and successful businessman who is grounded and practical. A provider who values material success and stability. A mentor or advisor who can offer practical advice and support.",
    "element": "Earth",
    "zodiac": "Capricorn, Taurus, Virgo",
    "yesNo": "Yes",
    "significant": [
      "Success",
      "Material Security",
      "Business Sense"
    ],
    "months": "N/A"
  }
];
