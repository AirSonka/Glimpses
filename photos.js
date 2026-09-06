// ---------------------------------------------------------------
// SITE  — global text content
// ---------------------------------------------------------------
const SITE = {
  title: "Ashen Field",
  tagline: "Photography",
  about:
    "I photograph the spaces between places — quiet coastlines, half-lit interiors, the hour before a city wakes up. Based between Sofia and wherever the light is good.",
  contact: "hello@example.com",
  instagram: "https://instagram.com/example"
};

// The collection shown on the homepage by default.
const DEFAULT_COLLECTION = "Selected Photographs";

// ---------------------------------------------------------------
// PHOTOS — one entry per image.
//   file:        path to the image, relative to index.html
//   name:        title shown under the photo
//   text:        short caption / note (optional, can be "")
//   collections: array of collection names this photo belongs to.
//                A photo can be in more than one collection.
// Newest photos should go at the TOP of this array —
// the site displays them in the order they appear here.
// ---------------------------------------------------------------
const PHOTOS = [
  {
    file: "images/01-coast-road.jpg",
    name: "Coast Road, February",
    text: "Shot on a walk north of the marina, just after sunrise.",
    collections: ["Selected Photographs", "Landscapes"]
  },
  {
    file: "images/02-kitchen-light.jpg",
    name: "Kitchen Light",
    text: "",
    collections: ["Selected Photographs", "Interiors"]
  },
  {
    file: "images/03-market-hands.jpg",
    name: "Market, Hands",
    text: "Plovdiv, early market hours.",
    collections: ["Selected Photographs", "Portraits"]
  },
  {
    file: "images/04-stairwell.jpg",
    name: "Stairwell",
    text: "",
    collections: ["Interiors"]
  },
  {
    file: "images/05-ferry-window.jpg",
    name: "Ferry Window",
    text: "",
    collections: ["Selected Photographs", "Landscapes"]
  },
  {
    file: "images/06-portrait-elena.jpg",
    name: "Elena, Backyard",
    text: "",
    collections: ["Portraits"]
  }
];
