import puertovallarta from "../assets/places/puertovallarta.jpg";
import queretaro from "../assets/places/queretaro.jpg";
import valledebravo from "../assets/places/valledebravo.jpg";
import malinalco from "../assets/places/malinalco.jpg";
import guadalajara from "../assets/places/guadalajara.jpg";
import bacalar from "../assets/places/bacalar.jpg";
import mexicocity from "../assets/places/mexicocity.jpg";
import morelia from "../assets/places/morelia.jpg";
import patzcuaro from "../assets/places/patzcuaro.jpg";
import zirahuen from "../assets/places/zirahuen.jpg";
import puertorico from "../assets/places/puertorico.jpg";
import monterrey from "../assets/places/monterrey.jpg";
import tulum from "../assets/places/tulum.jpg";
import taxco from "../assets/places/taxco.jpg";
import tepotzotlan from "../assets/places/tepotzotlan.jpg";
import kualalumpur from "../assets/places/kualalumpur.jpg";
import bogota from "../assets/places/bogota.jpg";
import chiapas from "../assets/places/chiapas.jpg";
import sma from "../assets/places/sma.jpg";
import mineraldelchico from "../assets/places/mineraldelchico.jpg";
import leon from "../assets/places/leon.jpg";
import guanajuato from "../assets/places/guanajuato.jpg";
import medellin from "../assets/places/medellin.jpg";
import bariloche from "../assets/places/bariloche.jpg";
import buenosaires from "../assets/places/buenosaires.jpg";
import porto from "../assets/places/porto.jpg";

export const flags = {
  Mexico: "🇲🇽",
  Argentina: "🇦🇷",
  Chile: "🇨🇱",
  Peru: "🇵🇪",
  "Costa Rica": "🇨🇷",
  "Puerto Rico": "🇵🇷",
  Portugal: "🇵🇹",
  Colombia: "🇨🇴",
  Malaysia: "🇲🇾",
};

export const vibes = [
  "affordable",
  "expensive",
  "touristy",
  "historic",
  "nature driven",
  "tranquil",
  "adventurous",
  "food culture",
  "night life",
];

/*
  Place shape — only name, country and coords are required:
  {
    name, region, country,
    coords: [lng, lat],          // drives the map
    image,                       // optional photo import
    rating: 1-5,                 // leave out if you haven't rated it
    vibes: [...],                // from the list above, used for filtering
    review: "",
    pros: [], cons: [],
  }
*/
export const visited = [
  // ---------- Mexico ----------
  {
    name: "Mexico City",
    region: "CDMX",
    country: "Mexico",
    coords: [-99.13, 19.43],
    image: mexicocity,
    rating: 4,
    vibes: ["expensive", "historic", "touristy", "adventurous", "food culture", "night life"],
    review:
      "Mexico City is absolutely unbelievable. I think it's a place everyone needs to visit at least once. Food galore, endless parks, and history at every footstep. Being one of the largest cities in the world it does come with its downfalls — noise, traffic, and construction — but the trade-off is totally worth it. You can order $100 USD plates, or 50¢ tacos on the same block. You have ritzy skyscrapers and small bodegas and lofts. Bring your best walking shoes, because you'll be walking from sunrise to past sundown. Not once did I feel unsafe or uncomfortable. There were nights I got hungry at 10 or 11pm, walked to the nearest taco stand, waited 30 minutes to order, made new friends and had some of the best tacos ever. The city truly never sleeps.",
    pros: ["Historic", "Food", "Night life", "Shopping", "Nature", "Culture"],
    cons: ["Crowded", "Expensive", "Traffic", "Construction"],
  },
  {
    name: "San Miguel de Allende",
    region: "Guanajuato",
    country: "Mexico",
    coords: [-100.74, 20.91],
    image: sma,
    rating: 4,
    vibes: ["expensive", "historic", "touristy", "food culture"],
    review:
      "San Miguel de Allende is the heart of Mexico, physically and culturally. Sitting in wine country only a few hours from Mexico City, Guadalajara, León and Querétaro, it's quickly becoming one of the fastest-growing cities in North America.",
    pros: ["Historic", "Food", "Night life", "Shopping", "Nature", "Culture"],
    cons: ["Crowded", "Expensive"],
  },
  {
    name: "Bacalar",
    region: "Quintana Roo",
    country: "Mexico",
    coords: [-88.39, 18.68],
    image: bacalar,
    rating: 4,
    vibes: ["nature driven", "affordable", "tranquil", "adventurous"],
    review:
      "The 'Maldives of Mexico' is known for its light blue lagoon and tranquil town. Down in the far southeast near Belize, it's difficult to get to but easy to stay at. I'd recommend experiencing it at least once.",
    pros: ["Nature", "Beautiful", "Affordable", "Quaint", "Tranquil"],
    cons: ["Underdeveloped", "Small", "Hard to reach"],
  },
  {
    name: "Malinalco",
    region: "Estado de México",
    country: "Mexico",
    coords: [-99.49, 18.95],
    image: malinalco,
    rating: 4,
    vibes: ["nature driven", "tranquil", "adventurous"],
    review:
      "A beautiful, quaint pueblo mágico an hour outside Mexico City. It only has around 20,000 residents, but downtown always seems to be crowded with all of them. There's no driving through the centre because of the foot traffic, but it's very walkable and highly recommended. I think this will be another town that sees real growth over the next 10–15 years from people seeking tranquility and nature.",
    pros: ["Tranquil", "Adventurous"],
  },
  {
    name: "Mineral del Chico",
    region: "Hidalgo",
    country: "Mexico",
    coords: [-98.73, 20.21],
    image: mineraldelchico,
    rating: 4,
    vibes: ["affordable", "nature driven", "tranquil", "food culture"],
    review:
      "A beautiful mountain town in the heart of Hidalgo. Very quiet — most things are only open on the weekend, and there's no grocery store or gas station within an hour's drive. Perfect for getting away, finding peace and quiet and being one with nature.",
    pros: ["Affordable", "Nature", "Tranquil", "Food culture"],
    cons: ["Isolated"],
  },
  {
    name: "Valle de Bravo",
    region: "Estado de México",
    country: "Mexico",
    coords: [-100.13, 19.19],
    image: valledebravo,
    rating: 4,
    vibes: ["historic", "tranquil", "adventurous", "nature driven"],
    pros: ["Tranquil", "Adventurous"],
    cons: ["Location"],
  },
  {
    name: "Zirahuén",
    region: "Michoacán",
    country: "Mexico",
    coords: [-101.73, 19.46],
    image: zirahuen,
    rating: 4,
    vibes: ["tranquil", "nature driven", "affordable"],
    pros: ["Tranquil", "Location", "Affordable"],
    cons: ["Location", "Poor"],
  },
  {
    name: "Guanajuato City",
    region: "Guanajuato",
    country: "Mexico",
    coords: [-101.26, 21.02],
    image: guanajuato,
    rating: 3,
    vibes: ["historic", "touristy"],
    review:
      "A historic pueblo in the heart of Mexico, only an hour outside of León. A tourist hotspot for historic buildings and culture.",
    pros: ["Historic", "Culture"],
    cons: ["Crowded", "Dirty", "Traffic"],
  },
  {
    name: "Querétaro",
    region: "Querétaro",
    country: "Mexico",
    coords: [-100.39, 20.59],
    image: queretaro,
    rating: 3,
    vibes: ["historic", "affordable", "food culture"],
    review:
      "This will be one of the wealthiest cities in Mexico within the next decade. Centrally located between Mexico City and Guadalajara, lots of businesses are relocating here for the affordability and proximity. The city has a beautiful historic centre and plenty to do — shopping, vineyards — but poor highway infrastructure means endless traffic during the day. I like it. I don't love it. But I think it'll be a hotbed of economic growth over the next few years.",
    pros: ["History", "Affordable"],
    cons: ["Crowded", "Dry", "Traffic"],
  },
  {
    name: "Puerto Vallarta",
    region: "Jalisco",
    country: "Mexico",
    coords: [-105.23, 20.65],
    image: puertovallarta,
    rating: 3,
    vibes: ["touristy", "adventurous"],
    review:
      "Tropical paradise. Beautiful, great weather, people and overall location. Very affordable, even for being a tourist trap.",
    pros: ["Location", "Adventurous", "Nature", "Night life"],
    cons: ["Crowded", "Traffic", "Construction", "Expensive"],
  },
  {
    name: "Morelia",
    region: "Michoacán",
    country: "Mexico",
    coords: [-101.19, 19.7],
    image: morelia,
    rating: 3,
    vibes: ["historic", "affordable", "night life", "food culture"],
    pros: ["Historic", "Night life", "Food culture", "Location"],
    cons: ["Dirty", "Poor", "Crowded"],
  },
  {
    name: "Pátzcuaro",
    region: "Michoacán",
    country: "Mexico",
    coords: [-101.61, 19.51],
    image: patzcuaro,
    rating: 3,
    vibes: ["historic"],
    pros: ["Historic", "Unique", "Location"],
    cons: ["Food", "Dirty", "Poor"],
  },
  {
    name: "Santa Rosa de Lima",
    region: "Guanajuato",
    country: "Mexico",
    coords: [-101.2, 21.08],
    rating: 3,
    vibes: ["historic", "tranquil", "nature driven"],
    review:
      "A quiet town nestled in the mountains of Guanajuato. A perfect getaway for camping and outdoor adventures.",
    pros: ["Nature", "Tranquil", "Quaint"],
  },
  {
    name: "Monterrey",
    region: "Nuevo León",
    country: "Mexico",
    coords: [-100.32, 25.69],
    image: monterrey,
    rating: 2,
    vibes: ["historic"],
    review:
      "One of the fastest-growing, most business-centric cities in Mexico. Just south of the Texas border, it has some of the wealthiest suburbs in North America. It wasn't a favourite of mine simply because of the location: arriving or leaving by anything but plane means police checkpoints, endless toll booths and a lot of traffic. Pair that with 100°F+ dry desert summers and I'd rather be elsewhere.",
    pros: ["History", "Affordable", "Food culture"],
    cons: ["Crowded", "Dry"],
  },
  {
    name: "León",
    region: "Guanajuato",
    country: "Mexico",
    coords: [-101.68, 21.12],
    image: leon,
    rating: 2,
    vibes: ["historic"],
    review:
      "An industrial metropolitan city in Guanajuato, world-renowned for its leather and manufactured goods. Great for shopping — not a place I'd recommend living.",
    pros: ["Historic"],
    cons: ["Crowded", "Dirty", "Traffic"],
  },
  {
    name: "Pachuca",
    region: "Hidalgo",
    country: "Mexico",
    coords: [-98.76, 20.1],
    rating: 2,
    vibes: ["affordable"],
    review:
      "A major industrial city north of Mexico City — the largest in the state of Hidalgo, sitting at the foot of the mountains.",
    cons: ["Crowded", "Dirty"],
  },
  {
    name: "Playa del Carmen",
    region: "Quintana Roo",
    country: "Mexico",
    coords: [-87.08, 20.63],
    rating: 2,
    vibes: ["expensive", "touristy", "night life"],
    pros: ["Location", "Food culture"],
    cons: ["Dirty", "Overcrowded", "Expensive"],
  },
  {
    name: "Cancún",
    region: "Quintana Roo",
    country: "Mexico",
    coords: [-86.85, 21.16],
    rating: 1,
    vibes: ["expensive", "touristy", "night life"],
    review:
      "I did not like Cancún one bit. It's dirty, overcrowded and expensive. It doesn't have that authentic Mexican feel — it's more of a smaller Miami. If you want to party and do nothing more, sure, it's fine. For people who actually want to travel, explore and try new things, I don't recommend it.",
    pros: ["Location"],
    cons: ["Dirty", "Overcrowded", "Expensive"],
  },
  { name: "Guadalajara", region: "Jalisco", country: "Mexico", coords: [-103.35, 20.67], image: guadalajara },
  { name: "Tulum", region: "Quintana Roo", country: "Mexico", coords: [-87.47, 20.21], image: tulum },
  { name: "Tepotzotlán", region: "Estado de México", country: "Mexico", coords: [-99.22, 19.72], image: tepotzotlan },

  // ---------- Caribbean ----------
  { name: "Puerto Rico", country: "Puerto Rico", coords: [-66.5, 18.22], image: puertorico },

  // ---------- Argentina ----------
  {
    name: "Buenos Aires",
    country: "Argentina",
    coords: [-58.38, -34.6],
    image: buenosaires,
    rating: 4,
    vibes: ["historic", "food culture", "night life"],
    review:
      "Argentina's sprawling capital: European-style boulevards, steakhouses and late, late nights — dinner rarely starts before ten.",
  },
  {
    name: "San Carlos de Bariloche",
    region: "Río Negro",
    country: "Argentina",
    coords: [-71.31, -41.13],
    image: bariloche,
    rating: 4,
    vibes: ["nature driven", "adventurous"],
    review:
      "Gateway to Argentine Patagonia on the shore of Lake Nahuel Huapi — alpine lakes, mountains and some serious chocolate.",
  },
  {
    name: "Mendoza",
    region: "Mendoza",
    country: "Argentina",
    coords: [-68.84, -32.89],
    rating: 4,
    vibes: ["food culture", "nature driven"],
    review: "Argentina's wine capital in the shadow of the Andes, best known for its Malbec.",
  },
  {
    name: "Córdoba",
    region: "Córdoba",
    country: "Argentina",
    coords: [-64.18, -31.42],
    rating: 3,
    vibes: ["historic", "affordable", "night life"],
    review: "Argentina's second city — a university town with a historic Jesuit centre and a young, lively feel.",
  },
  {
    name: "La Cumbrecita",
    region: "Córdoba",
    country: "Argentina",
    coords: [-64.77, -31.9],
    rating: 4,
    vibes: ["tranquil", "nature driven"],
    review: "A tiny, pedestrian-only alpine village in the Córdoba hills, set among pine forests, streams and waterfalls.",
  },
  {
    name: "La Cumbre",
    region: "Córdoba",
    country: "Argentina",
    coords: [-64.49, -30.98],
    rating: 3,
    vibes: ["tranquil", "nature driven"],
    review: "A quiet mountain town in the Punilla Valley of the Córdoba sierras.",
  },

  // ---------- Chile & Peru ----------
  {
    name: "Santiago",
    country: "Chile",
    coords: [-70.67, -33.45],
    rating: 3,
    vibes: ["expensive", "food culture"],
    review: "Chile's capital, ringed by the Andes, with vineyards a short drive out of the city.",
  },
  {
    name: "Lima",
    country: "Peru",
    coords: [-77.04, -12.05],
    rating: 4,
    vibes: ["food culture", "historic"],
    review: "A clifftop capital on the Pacific and one of the great food cities of the world.",
  },

  // ---------- Costa Rica ----------
  {
    name: "San José",
    country: "Costa Rica",
    coords: [-84.08, 9.93],
    rating: 3,
    vibes: ["affordable"],
    review: "Costa Rica's capital up in the Central Valley — the hub for getting everywhere else in the country.",
  },
  {
    name: "Atenas",
    region: "Alajuela",
    country: "Costa Rica",
    coords: [-84.38, 9.98],
    rating: 4,
    vibes: ["tranquil", "nature driven"],
    review: "A relaxed hillside town in the Central Valley, known for its mild year-round climate.",
  },
  {
    name: "Quepos",
    region: "Puntarenas",
    country: "Costa Rica",
    coords: [-84.16, 9.43],
    rating: 4,
    vibes: ["nature driven", "adventurous"],
    review: "Pacific beach town and the gateway to Manuel Antonio National Park — jungle, monkeys and beaches.",
  },
  {
    name: "Rivas",
    region: "Pérez Zeledón",
    country: "Costa Rica",
    coords: [-83.63, 9.42],
    rating: 4,
    vibes: ["tranquil", "nature driven", "adventurous"],
    review: "A mountain village in the Chirripó River valley, on the way up to Costa Rica's highest peak.",
  },
];

export const bucketList = [
  { name: "Porto", country: "Portugal", coords: [-8.61, 41.15], image: porto },
  { name: "Medellín", country: "Colombia", coords: [-75.58, 6.24], image: medellin },
  { name: "Bogotá", country: "Colombia", coords: [-74.07, 4.71], image: bogota },
  { name: "Kuala Lumpur", country: "Malaysia", coords: [101.69, 3.14], image: kualalumpur },
  { name: "Chiapas", country: "Mexico", coords: [-92.64, 16.74], image: chiapas },
  { name: "Taxco", region: "Guerrero", country: "Mexico", coords: [-99.6, 18.56], image: taxco },
];
